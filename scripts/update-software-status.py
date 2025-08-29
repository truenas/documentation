#!/usr/bin/env python3
"""Quick script to update table with live API data"""

import requests
import yaml
import re
from pathlib import Path

def version_to_anchor(version):
    """Convert version to documentation anchor"""
    import re
    
    # Extract major version to determine format
    major_match = re.match(r'^(\d+)', version)
    major_version = int(major_match.group(1)) if major_match else 0
    
    # Format change appears to happen around version 25.10+
    # Pre-25.10: use compressed format, 25.10+: use full format  
    if major_version >= 25:
        # Extract major.minor to be more precise
        version_match = re.match(r'^(\d+\.\d+)', version)
        if version_match:
            major_minor = version_match.group(1)
            if major_minor >= "25.10":
                # 25.10+ uses full format: "25.10.0" -> "#25.10.0", "25.10-BETA.1" -> "#25.10-BETA.1"
                return version
    
    # Legacy format for older versions
    # "25.04.2.1" -> "#250421", "24.10.2.2" -> "#241022", "13.0-U6.8" -> "#130-u68"
    anchor = version.lower()
    anchor = anchor.replace('.', '').replace('-u', '-u')  # Keep -u for Core versions
    return anchor

def parse_version_for_sorting(version):
    """Parse version string into sortable tuple for proper version ordering"""
    # Handle formats like: 25.10.0, 25.10-RC.1, 25.10-BETA.1, 24.10.2.2, 13.0-U6.8
    
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
        elif suffix_lower.startswith('u'):  # Core updates like U6.8
            suffix_priority = 200
        else:
            suffix_priority = 10  # Other pre-releases
        
        # Extract numeric part of suffix for sub-sorting
        suffix_num_match = re.search(r'(\d+)', suffix)
        suffix_num = int(suffix_num_match.group(1)) if suffix_num_match else 0
    else:
        suffix_num = 0
    
    return tuple(version_parts + [suffix_priority, suffix_num])

def find_best_version_for_profile(trains, train_releases, profile):
    """Find the best/latest version for a given profile across all trains"""
    candidates = []
    
    for train_name, releases in train_releases.items():
        for version, info in releases.items():
            if info.get('profile') == profile:
                candidates.append({
                    'version': version,
                    'train': train_name,
                    'info': info,
                    'date': info.get('date', ''),
                })
    
    if not candidates:
        return None
    
    # Sort by version (newest/highest first)
    candidates.sort(key=lambda x: parse_version_for_sorting(x['version']), reverse=True)
    
    return candidates[0]  # Return the highest version

def main():
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
        
        # Step 3: Find best versions for each profile
        print("\nStep 3: Finding best versions for each profile...")
        updates_made = []
        
        for profile_name, api_profile in config.get('profiles', {}).items():
            print(f"\nProcessing {profile_name} ({api_profile})...")
            
            best_version = find_best_version_for_profile(available_trains, train_releases, api_profile)
            
            if best_version:
                version = best_version['version']
                train = best_version['train']
                
                # Generate documentation link
                major_minor_match = re.match(r'^(\d+\.\d+)', version)
                major_minor = major_minor_match.group(1) if major_minor_match else "unknown"
                anchor = version_to_anchor(version)
                
                if 'nightly' in train.lower() or api_profile == 'DEVELOPER':
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
                    doc_link = f"https://www.truenas.com/docs/scale/{major_minor}/gettingstarted/scalereleasenotes/#{anchor}"
                    version_display = version
                
                # Update both Enterprise and Community SCALE data when API data available
                updated_sections = []
                
                for scale_type in ['community_scale', 'enterprise_scale']:
                    if scale_type in config['table_data'].get(profile_name, {}):
                        # Preserve dagger for Mission Critical Community only
                        update_data = {
                            'version': version_display,
                            'link': doc_link
                        }
                        
                        if profile_name == 'mission_critical' and scale_type == 'community_scale':
                            # Keep the dagger for Mission Critical Community to maintain Enterprise upsell
                            update_data['note'] = '<sup style="font-size: 0.6em;">†</sup>'
                        
                        config['table_data'][profile_name][scale_type] = update_data
                        updated_sections.append(scale_type)
                
                if updated_sections:
                    if profile_name == 'mission_critical' and 'community_scale' in updated_sections:
                        print(f"  ✓ Updated: {version_display} (preserving † for Enterprise upsell)")
                    else:
                        print(f"  ✓ Updated: {version_display}")
                    
                    updates_made.append(f"{profile_name}: {version_display} (from {train})")
                    print(f"    Train: {train}")
                    print(f"    Link: {doc_link}")
                    print(f"    Updated sections: {', '.join(updated_sections)}")
                else:
                    print(f"  - Skipped (no SCALE sections found): {version} from {train}")
            else:
                print(f"  ✗ No {api_profile} versions found")
        
        # Step 4: Save updated config
        if updates_made:
            with open(config_path, 'w') as f:
                yaml.dump(config, f, default_flow_style=False, sort_keys=False)
            
            print(f"\n✓ Config updated successfully!")
            print("Updates made:")
            for update in updates_made:
                print(f"  - {update}")
        else:
            print(f"\n- No updates needed")
        
    except Exception as e:
        print(f"Error fetching API data: {e}")
        print("Keeping existing static data")

if __name__ == '__main__':
    main()