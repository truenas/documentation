#!/usr/bin/env python3
"""Quick script to update table with live API data

Updates software_status_config.yaml with latest version recommendations from TrueNAS API.
Uses cascading profile logic: MISSION_CRITICAL > GENERAL > EARLY_ADOPTER > DEVELOPER

LEGACY CODE CLEANUP TODO (~June 2025):
When 25.04 is no longer recommended for any user profile, remove pre-25.10 compatibility:
1. Search for "LEGACY:" comments in this file
2. Remove version_to_anchor() compressed format logic (lines ~27-35)
3. Remove doc_path version check logic (lines ~259-271)
4. Simplify to: version_to_anchor() returns version as-is, doc_path always "versionnotes"
5. Remove TrueNAS-SCALE-Fangtooth from additional_trains in software_status_config.yaml
"""

import requests
import yaml
import re
import argparse
from pathlib import Path

def version_to_anchor(version):
    """Convert version to documentation anchor

    Format changes at version 25.10:
    - Pre-25.10: Compressed format (remove periods): "25.04.2.5" -> "250425"
    - 25.10+: Full format (keep as-is): "25.10.0" -> "25.10.0"

    LEGACY SUPPORT: The pre-25.10 logic below can be removed once 25.04 is EOL
    TODO: Remove compressed format logic after ~June 2025 when 25.04 is no longer recommended
    """
    # Extract major.minor version
    version_match = re.match(r'^(\d+)\.(\d+)', version)
    if not version_match:
        return version  # Fallback to original if can't parse

    major = int(version_match.group(1))
    minor = int(version_match.group(2))

    # ========== LEGACY: Remove this check after 25.04 EOL ==========
    # Check if version is >= 25.10
    if major > 25 or (major == 25 and minor >= 10):
        # 25.10+ uses full format with periods
        return version
    else:
        # Pre-25.10 uses compressed format (remove periods)
        return version.replace('.', '')
    # ========== END LEGACY CODE ==========

    # After removal, this function should simply be:
    # return version

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

    print("Step 1: Fetching available trains...")
    
    try:
        # Step 1: Get available trains
        trains_response = requests.get('https://update.sys.truenas.net/scale/trains_v2.json', timeout=10)
        trains_data = trains_response.json()
        
        # Extract train names from the "trains" section
        if 'trains' in trains_data:
            available_trains = list(trains_data['trains'].keys())
            print(f"Found {len(available_trains)} trains: {available_trains}")
            # Show descriptions
            for train_name, train_info in trains_data['trains'].items():
                print(f"  {train_name}: {train_info.get('description', 'No description')}")
        else:
            print("No 'trains' section found in trains_v2.json")
            return

        # Merge in additional trains from config
        # Insert at position 0 (oldest) so after reversal they're checked last
        additional_trains = config.get('api_config', {}).get('additional_trains', {})
        if additional_trains:
            print(f"\nAdding {len(additional_trains)} additional train(s) from config:")
            for train_name, train_info in additional_trains.items():
                if train_name not in available_trains:
                    available_trains.insert(0, train_name)
                    print(f"  + {train_name}: {train_info.get('description', 'No description')}")
                else:
                    print(f"  - {train_name}: Already in API trains, skipping")

        # Step 2: Fetch releases from each train
        print("\nStep 2: Fetching releases from each train...")
        train_releases = {}
        
        for train_name in available_trains:
            try:
                releases_url = f'https://update.sys.truenas.net/scale/{train_name}/releases.json'
                releases_response = requests.get(releases_url, timeout=10)
                
                if releases_response.status_code == 200:
                    releases = releases_response.json()
                    train_releases[train_name] = releases
                    print(f"  ✓ {train_name}: {len(releases)} releases")
                    
                    # Show profiles found in this train
                    profiles_found = set(info.get('profile', 'NO_PROFILE') for info in releases.values())
                    print(f"    Profiles: {sorted(profiles_found)}")
                else:
                    print(f"  ✗ {train_name}: HTTP {releases_response.status_code}")
                    
            except Exception as e:
                print(f"  ✗ {train_name}: {e}")
        
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

                # Generate documentation link
                # Parse version once for all link generation
                major_minor_match = re.match(r'^(\d+)\.(\d+)', version)
                if major_minor_match:
                    major = int(major_minor_match.group(1))
                    minor = int(major_minor_match.group(2))
                    major_minor = major_minor_match.group(0)  # Keep original string format (e.g., "25.04")
                else:
                    major, minor = 0, 0
                    major_minor = "unknown"

                anchor = version_to_anchor(version)

                # Check if this is a nightly/developer release
                is_nightly = 'nightly' in train.lower() or release_info.get('profile') == 'DEVELOPER'

                if is_nightly:
                    # Generate nightly download link
                    codename_match = re.search(r'TrueNAS-SCALE-([A-Za-z]+)', train)
                    if codename_match:
                        codename = codename_match.group(1).lower()
                        doc_link = f"https://download.truenas.com/truenas-scale-{codename}-nightly/"
                        version_display = f"{codename_match.group(1)} Nightly"
                    else:
                        doc_link = "https://download.truenas.com/truenas-scale-goldeye-nightly/"
                        version_display = "Nightly"
                else:
                    # Generate FQDN release notes link
                    # ========== LEGACY: Remove path logic after 25.04 EOL ==========
                    # Path changes at version 25.10: scalereleasenotes -> versionnotes
                    # TODO: After ~June 2025, remove this check and always use "versionnotes"
                    if major > 25 or (major == 25 and minor >= 10):
                        # 25.10+ uses versionnotes path
                        doc_path = "versionnotes"
                    else:
                        # Pre-25.10 uses scalereleasenotes path
                        doc_path = "scalereleasenotes"
                    # ========== END LEGACY CODE ==========

                    # After removal, simply use: doc_path = "versionnotes"

                    doc_link = f"https://www.truenas.com/docs/scale/{major_minor}/gettingstarted/{doc_path}/#{anchor}"
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
        
    except Exception as e:
        # Make API failure VERY visible in console output
        print("\n" + "="*70)
        print("⚠️ ⚠️ ⚠️  API FAILURE - SOFTWARE STATUS UPDATE FAILED  ⚠️ ⚠️ ⚠️")
        print("="*70)
        print(f"Error: {e}")
        print("Keeping existing static data in software_status_config.yaml")
        print("="*70 + "\n")

        # Write error to log file for Jenkins artifact
        error_log_path = Path(__file__).parent / 'software-status-error.log'
        from datetime import datetime
        timestamp = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')

        with open(error_log_path, 'a') as error_log:
            error_log.write(f"\n{'='*70}\n")
            error_log.write(f"Timestamp: {timestamp}\n")
            error_log.write(f"Error Type: {type(e).__name__}\n")
            error_log.write(f"Error Message: {e}\n")
            error_log.write(f"{'='*70}\n")

        print(f"Error details written to: {error_log_path}")

        # Exit with success (0) to allow build to continue
        # Config file is unchanged, so no PR will be created
        import sys
        sys.exit(0)

if __name__ == '__main__':
    main()