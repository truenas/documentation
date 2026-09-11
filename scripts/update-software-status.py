#!/usr/bin/env python3
"""Update software status recommendations from TrueNAS CDN APIs.

Updates software_status_config.yaml with latest version recommendations.
Fetches data from both the legacy CDN (update.sys.truenas.net) for 25.10
and earlier trains, and the new CDN (auto-public.sys.truenas.net) for 26+.
Uses cascading profile logic: MISSION_CRITICAL > GENERAL > EARLY_ADOPTER > DEVELOPER

Exit codes: 0 = clean run. 1 = something needs attention (an unexpected
error, both CDNs unreachable, or a profile that should have resolved to a
version didn't) — the config's existing data for anything unresolved is
left untouched, and details are appended to software-status-error.log for
the nightly-maintenance pipeline to pick up as a build artifact.
"""

import requests
import yaml
import re
import sys
import time
import argparse
from pathlib import Path
from datetime import datetime, timezone

def version_to_anchor(version):
    """Convert version string to documentation anchor (version string as-is)."""
    return version

def get_doc_url_components(version):
    """Extract URL path version, doc path, and anchor for a release version.

    Returns (url_path_version, doc_path, anchor) or None if version cannot be parsed.

    - 26+:   URL uses major only (e.g. "26"), path is "versionnotes"
    - 25.10: URL uses major.minor (e.g. "25.10"), path is "versionnotes"
    """
    version_match = re.match(r'^(\d+)\.(\d+)', version)
    if not version_match:
        return None

    major = int(version_match.group(1))
    major_minor = version_match.group(0)
    anchor = version_to_anchor(version)

    if major >= 26:
        return str(major), 'versionnotes', anchor
    else:
        return major_minor, 'versionnotes', anchor


def parse_version_for_sorting(version):
    """Parse version string into sortable tuple for proper version ordering"""
    # Handle formats like: 25.10.0, 25.10-RC.1, 25.10-BETA.1, 24.10.2.2
    
    # Split on dash to separate main version from suffix
    if '-' in version:
        main_version, suffix = version.split('-', 1)
    else:
        main_version, suffix = version, ''
    
    # Parse main version parts
    version_parts = []
    for part in main_version.split('.'):
        try:
            version_parts.append(int(part))
        except ValueError:
            version_parts.append(0)
    
    # Pad to ensure consistent comparison (e.g., 25.10 vs 25.10.0.1)
    while len(version_parts) < 4:
        version_parts.append(0)
    
    # Handle suffix priority: stable > RC > BETA > others
    suffix_priority = 1000  # Default for stable releases (no suffix)
    if suffix:
        suffix_lower = suffix.lower()
        if suffix_lower.startswith('rc'):
            suffix_priority = 100
        elif suffix_lower.startswith('beta'):
            suffix_priority = 50
        else:
            suffix_priority = 10  # Other pre-releases

        # Extract numeric part of suffix for sub-sorting
        suffix_num_match = re.search(r'(\d+)', suffix)
        suffix_num = int(suffix_num_match.group(1)) if suffix_num_match else 0
    else:
        suffix_num = 0
    
    return tuple(version_parts + [suffix_priority, suffix_num])

def find_versions_with_cascade(available_trains, train_releases, profiles_config):
    """Find best version for each profile using cascading logic

    Processes trains from newest to oldest, releases within each train from newest to oldest.
    When a version is found for a profile, it cascades down to more aggressive profiles
    if they haven't been filled yet with newer versions.

    Profile hierarchy (most conservative to most aggressive):
    MISSION_CRITICAL > GENERAL > EARLY_ADOPTER > DEVELOPER
    """

    # Profile hierarchy from most conservative to most aggressive
    PROFILE_HIERARCHY = ['MISSION_CRITICAL', 'GENERAL', 'EARLY_ADOPTER', 'DEVELOPER']

    # Pre-compute profile index mapping to avoid repeated lookups
    profile_to_index = {profile: idx for idx, profile in enumerate(PROFILE_HIERARCHY)}

    # Map config profile names to API profile names for quick lookup
    config_to_api = profiles_config  # e.g., {'developer': 'DEVELOPER', ...}
    api_to_config = {v: k for k, v in profiles_config.items()}  # Reverse mapping

    # Initialize results - derive from profiles_config instead of hardcoding
    profile_results = {profile_name: None for profile_name in profiles_config.keys()}

    # Reverse train list (trains_v2.json gives oldest-first, we need newest-first)
    trains_newest_first = list(reversed(available_trains))

    print(f"\nProcessing trains in order (newest first): {trains_newest_first}")

    for train_name in trains_newest_first:
        if train_name not in train_releases:
            continue

        releases = train_releases[train_name]

        # Sort releases by version (newest first)
        sorted_versions = sorted(releases.keys(),
                                key=parse_version_for_sorting,
                                reverse=True)

        for version in sorted_versions:
            release_info = releases[version]
            api_profile = release_info.get('profile')

            if not api_profile or api_profile not in api_to_config:
                continue

            config_profile_name = api_to_config[api_profile]

            # Assign to this profile if not yet assigned
            if profile_results[config_profile_name] is None:
                profile_results[config_profile_name] = {
                    'version': version,
                    'train': train_name,
                    'info': release_info
                }
                print(f"  Found {version} for {config_profile_name} in {train_name}")

            # Cascade down to more aggressive profiles
            if api_profile in profile_to_index:
                profile_index = profile_to_index[api_profile]
                for i in range(profile_index + 1, len(PROFILE_HIERARCHY)):
                    more_aggressive_api_profile = PROFILE_HIERARCHY[i]
                    if more_aggressive_api_profile in api_to_config:
                        more_aggressive_config_name = api_to_config[more_aggressive_api_profile]
                        if profile_results[more_aggressive_config_name] is None:
                            profile_results[more_aggressive_config_name] = {
                                'version': version,
                                'train': train_name,
                                'info': release_info
                            }
                            print(f"  Cascaded {version} to {more_aggressive_config_name}")

        # Check if all profiles are now filled
        if all(v is not None for v in profile_results.values()):
            print(f"\n  All profiles filled, stopping at train {train_name}")
            break  # No need to check older trains

    return profile_results

def fetch_json(url, attempts=3, backoff_seconds=2):
    """GET a URL and parse it as JSON, retrying on transient failures.

    A network error or a malformed JSON body on an otherwise-200 response is
    treated as transient (e.g. a torn read of a file being rewritten upstream
    — exactly what broke the 2026-08-18 run) and retried. A clean non-2xx
    status is returned immediately with no retry, since that's a real,
    deterministic answer rather than flakiness.

    Returns (status_code, data, error):
      - success:            (200, {...}, None)
      - clean HTTP failure: (404, None, 'HTTP 404')
      - exhausted retries:  (<last status or None>, None, '<reason>')
    """
    error = None
    status_code = None
    for attempt in range(1, attempts + 1):
        try:
            response = requests.get(url, timeout=10)
        except requests.RequestException as e:
            error = f"{type(e).__name__}: {e}"
            status_code = None
        else:
            status_code = response.status_code
            if status_code != 200:
                return status_code, None, f"HTTP {status_code}"
            try:
                return status_code, response.json(), None
            except ValueError as e:
                error = f"malformed JSON: {e}"

        if attempt < attempts:
            print(f"    ⟲ attempt {attempt}/{attempts} failed ({error}), retrying in {backoff_seconds}s...")
            time.sleep(backoff_seconds)

    return status_code, None, error


def log_error(message):
    """Append a timestamped failure entry to software-status-error.log.

    Jenkins picks this file up as a build artifact, so it's the one place a
    human will see details after the fact even though the console log has
    already scrolled by.
    """
    error_log_path = Path(__file__).parent / 'software-status-error.log'
    timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

    with open(error_log_path, 'a') as error_log:
        error_log.write(f"\n{'='*70}\n")
        error_log.write(f"Timestamp: {timestamp}\n")
        error_log.write(f"{message}\n")
        error_log.write(f"{'='*70}\n")

    print(f"Error details written to: {error_log_path}")


def fetch_trains_from_cdn(base_url, trains_file, label='CDN'):
    """Fetch trains_v2.json from a CDN base URL.

    Returns (trains_dict, redirections_dict).
    Returns (None, {}) on any failure so callers can handle partial CDN outages.
    """
    url = f'{base_url}{trains_file}'
    _, data, error = fetch_json(url)
    if error:
        print(f'  ✗ {label}: {error}')
        return None, {}

    trains = data.get('trains', {})
    redirections = data.get('trains_redirection', {})
    print(f'  ✓ {label}: {len(trains)} trains found')
    if redirections:
        print(f'    {len(redirections)} redirection(s): {list(redirections.keys())}')
    return trains, redirections


def build_merged_train_list(new_trains, new_redirections, old_trains, additional_trains):
    """Merge train lists from two CDNs into a single ordered list.

    New CDN takes precedence — any train present on both CDNs is sourced from the new CDN.
    Trains whose names are keys in new_redirections are skipped on both CDNs (they are
    aliases pointing to a canonical train name that will already be in the list).
    Additional trains from config are inserted at position 0 (oldest) so the cascade
    logic processes them last.

    Returns:
        available_trains: list of train names ordered oldest-first (reversed in cascade)
        train_cdn_map: dict mapping train_name -> 'new' | 'old'
    """
    redirected_names = set(new_redirections.keys())
    available_trains = []
    train_cdn_map = {}

    # New CDN trains first (canonical, skip aliases)
    for train_name in new_trains:
        if train_name not in redirected_names:
            available_trains.append(train_name)
            train_cdn_map[train_name] = 'new'

    # Old CDN trains (skip aliases and trains already added from new CDN)
    for train_name in old_trains:
        if train_name not in redirected_names and train_name not in train_cdn_map:
            available_trains.append(train_name)
            train_cdn_map[train_name] = 'old'

    # Additional trains from config (inserted at front = oldest, checked last in cascade)
    for train_name, train_info in additional_trains.items():
        if train_name not in train_cdn_map:
            available_trains.insert(0, train_name)
            train_cdn_map[train_name] = 'old'
            print(f"  + {train_name}: {train_info.get('description', 'No description')} (from config)")

    return available_trains, train_cdn_map


def main():
    # Parse command line arguments
    parser = argparse.ArgumentParser(description='Update software status recommendations from TrueNAS API')
    parser.add_argument('--dry-run', action='store_true',
                       help='Fetch and display updates without modifying the YAML file')
    args = parser.parse_args()

    if args.dry_run:
        print("="*70)
        print("DRY-RUN MODE: Will not modify software_status_config.yaml")
        print("="*70 + "\n")

    config_path = Path(__file__).parent.parent / 'data' / 'software_status_config.yaml'

    # Load existing config
    with open(config_path, 'r') as f:
        config = yaml.safe_load(f)

    print("Step 1: Fetching available trains from both CDNs...")
    legacy_base_url = config.get('api_config', {}).get('base_url', '')
    new_base_url = config.get('api_config', {}).get('new_base_url', '')
    trains_file = config.get('api_config', {}).get('trains_file', 'trains_v2.json')
    additional_trains = config.get('api_config', {}).get('additional_trains', {})

    try:
        print("  Fetching from new CDN...")
        new_trains, new_redirections = fetch_trains_from_cdn(new_base_url, trains_file, 'New CDN')

        print("  Fetching from legacy CDN...")
        old_trains, _ = fetch_trains_from_cdn(legacy_base_url, trains_file, 'Legacy CDN')

        if not new_trains and not old_trains:
            print("\n" + "="*70)
            print("⚠️  Both CDNs failed. Cannot determine available trains.")
            print("="*70 + "\n")
            log_error("Both CDNs failed - could not fetch trains_v2.json from either endpoint.")
            sys.exit(1)

        available_trains, train_cdn_map = build_merged_train_list(
            new_trains or {}, new_redirections, old_trains or {}, additional_trains
        )

        print(f"\nMerged train list ({len(available_trains)} trains, oldest-first):")
        for t in available_trains:
            print(f"  [{train_cdn_map[t]}] {t}")

        print("\nStep 2: Fetching releases from each train...")
        train_releases = {}
        fetch_failures = {}  # train_name -> reason, for the unresolved-profile report below

        for train_name in available_trains:
            cdn_source = train_cdn_map.get(train_name, 'old')
            base_url = new_base_url if cdn_source == 'new' else legacy_base_url

            releases_url = f'{base_url}{train_name}/releases.json'
            _, releases, error = fetch_json(releases_url)

            if releases is not None:
                train_releases[train_name] = releases
                print(f"  ✓ {train_name} [{cdn_source}]: {len(releases)} releases")
                profiles_found = set(info.get('profile', 'NO_PROFILE') for info in releases.values())
                print(f"    Profiles: {sorted(profiles_found)}")
                continue

            if cdn_source == 'new' and legacy_base_url:
                # New CDN failed for this train — fall back to legacy CDN
                print(f"  ↩ {train_name}: new CDN failed ({error}), trying legacy CDN...")
                fallback_url = f'{legacy_base_url}{train_name}/releases.json'
                _, releases, fallback_error = fetch_json(fallback_url)
                if releases is not None:
                    train_releases[train_name] = releases
                    print(f"  ✓ {train_name} [old-fallback]: {len(releases)} releases")
                    profiles_found = set(info.get('profile', 'NO_PROFILE') for info in releases.values())
                    print(f"    Profiles: {sorted(profiles_found)}")
                    continue
                error = f"{error} on new CDN, {fallback_error} on legacy CDN"

            print(f"  ✗ {train_name}: {error}")
            fetch_failures[train_name] = error

        # Step 3: Find best versions for each profile using cascading logic
        print("\nStep 3: Finding best versions with cascading logic...")
        updates_made = []

        # Get all profile versions in one pass with cascading
        profile_results = find_versions_with_cascade(available_trains, train_releases, config.get('profiles', {}))

        # Process each profile result
        for profile_name, result in profile_results.items():
            print(f"\nProcessing {profile_name}...")

            if result:
                version = result['version']
                train = result['train']
                release_info = result['info']

                # Parse major version for nightly display label
                major_minor_match = re.match(r'^(\d+)\.(\d+)', version)
                major = int(major_minor_match.group(1)) if major_minor_match else 0

                # Check if this is a nightly/developer release
                is_nightly = 'nightly' in train.lower() or release_info.get('profile') == 'DEVELOPER'

                if is_nightly:
                    # Generate nightly download link and version display
                    # Extract major version from version string for display (e.g., "26.04-BETA.1" -> "26")
                    version_major = str(major)
                    version_display = f"{version_major} Nightly"

                    codename_match = re.search(r'TrueNAS-SCALE-([A-Za-z]+)', train)
                    if codename_match:
                        # Old-style train (TrueNAS-SCALE-{Codename}-Nightlies): download.truenas.com
                        codename = codename_match.group(1).lower()
                        doc_link = f"https://download.truenas.com/truenas-scale-{codename}-nightly/"
                    else:
                        # New-style train (TrueNAS-{Major}-Nightlies): iso.sys.truenas.net
                        doc_link = f"https://iso.sys.truenas.net/{train}/"
                else:
                    components = get_doc_url_components(version)
                    if components is None:
                        print(f"  ✗ Could not parse version for URL generation: {version}")
                        continue
                    url_path_version, doc_path, anchor = components
                    doc_link = f"https://www.truenas.com/docs/scale/{url_path_version}/gettingstarted/{doc_path}/#{anchor}"
                    version_display = version

                # Update both Enterprise and Community data when API data available
                # Note: Enterprise does not support developer or early_adopter profiles
                # Note: Community does not support mission_critical profile (shows Enterprise link instead)
                updated_sections = []

                for scale_type in ['community', 'enterprise']:
                    # Skip Enterprise for developer and early_adopter profiles
                    if scale_type == 'enterprise' and profile_name in ['developer', 'early_adopter']:
                        print(f"  - Skipping Enterprise for {profile_name} (not available)")
                        continue

                    # Skip Community for mission_critical profile (shows Enterprise link in template)
                    if scale_type == 'community' and profile_name == 'mission_critical':
                        print(f"  - Skipping Community for {profile_name} (shows Enterprise link)")
                        continue

                    if scale_type in config['table_data'].get(profile_name, {}):
                        update_data = {
                            'version': version_display,
                            'link': doc_link
                        }

                        config['table_data'][profile_name][scale_type] = update_data
                        updated_sections.append(scale_type)

                if updated_sections:
                    print(f"  ✓ Updated: {version_display}")
                    updates_made.append(f"{profile_name}: {version_display} (from {train})")
                    print(f"    Train: {train}")
                    print(f"    Link: {doc_link}")
                    print(f"    Updated sections: {', '.join(updated_sections)}")
                else:
                    print(f"  - Skipped (no sections found in table_data)")
            else:
                print(f"  ✗ No version found for {profile_name}")
        
        # Step 4: Save updated config
        if updates_made:
            if args.dry_run:
                print(f"\n[DRY-RUN] Would have updated config file: {config_path}")
                print("Updates that would be made:")
                for update in updates_made:
                    print(f"  - {update}")
                print("\n✓ Dry-run completed successfully (no files modified)")
            else:
                with open(config_path, 'w') as f:
                    yaml.dump(config, f, default_flow_style=False, sort_keys=False)

                print(f"\n✓ Config updated successfully!")
                print("Updates made:")
                for update in updates_made:
                    print(f"  - {update}")
        else:
            if args.dry_run:
                print(f"\n[DRY-RUN] No updates needed")
            else:
                print(f"\n- No updates needed")

        # Step 5: Flag any profile that still has no resolvable version.
        # Every profile normally has a supplying train, so a gap here means
        # something upstream broke this run (as opposed to e.g. "Enterprise
        # skipped for developer", which is expected and handled above, not
        # a None result). Surface it loudly instead of letting a partially
        # resolved run report back as a clean, silent success.
        unresolved_profiles = [name for name, result in profile_results.items() if result is None]

        if unresolved_profiles:
            print("\n" + "="*70)
            print("⚠️  UNRESOLVED PROFILE(S) — no version found this run")
            print("="*70)
            for profile_name in unresolved_profiles:
                print(f"  - {profile_name} (existing config value left unchanged)")
            if fetch_failures:
                print("\n  Train fetch failures that may explain the gap:")
                for train_name, reason in fetch_failures.items():
                    print(f"    - {train_name}: {reason}")
            print("="*70 + "\n")

            log_error(
                "Unresolved profiles: " + ", ".join(unresolved_profiles) + "\n"
                "Train fetch failures: " + (
                    "; ".join(f"{t}: {r}" for t, r in fetch_failures.items()) or "none"
                )
            )

            # Exit non-zero so Jenkins marks the build UNSTABLE (not a hard
            # failure) — Reconcile/Purge still run. See nightly-maintenance.groovy.
            sys.exit(1)

    except Exception as e:
        # Make API failure VERY visible in console output
        print("\n" + "="*70)
        print("⚠️ ⚠️ ⚠️  API FAILURE - SOFTWARE STATUS UPDATE FAILED  ⚠️ ⚠️ ⚠️")
        print("="*70)
        print(f"Error: {e}")
        print("Keeping existing static data in software_status_config.yaml")
        print("="*70 + "\n")

        log_error(f"Error Type: {type(e).__name__}\nError Message: {e}")

        # Exit non-zero so Jenkins marks the build UNSTABLE (not a hard
        # failure) — Reconcile/Purge still run. See nightly-maintenance.groovy.
        sys.exit(1)

if __name__ == '__main__':
    main()