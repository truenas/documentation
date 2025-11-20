#!/usr/bin/env python3
"""
Combine multiple changelog CSV files into a single "All" file based on changelog-versions.json.
Usage: python scripts/combine-changelogs.py 25.10
"""

import sys
import os
import json
import csv
from pathlib import Path

def combine_changelogs(version):
    """Combine all CSV files for a given version into an 'All' file."""
    
    # Find the data directory - look in current working directory first
    current_dir = Path.cwd()
    data_dir = current_dir / "static" / "data"
    versions_file = data_dir / "changelog-versions.json"
    
    # If not found in current dir, try parent directories
    if not versions_file.exists():
        for parent in current_dir.parents:
            potential_data_dir = parent / "static" / "data"
            potential_versions_file = potential_data_dir / "changelog-versions.json"
            if potential_versions_file.exists():
                data_dir = potential_data_dir
                versions_file = potential_versions_file
                break
    
    # Load version configuration
    try:
        with open(versions_file, 'r', encoding='utf-8') as f:
            versions_config = json.load(f)
    except FileNotFoundError:
        print(f"Error: Could not find {versions_file}")
        return
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in {versions_file}: {e}")
        return
    
    # Get configuration for this version
    if version not in versions_config:
        print(f"Version '{version}' not found in changelog-versions.json")
        print(f"Available versions: {', '.join(versions_config.keys())}")
        return
    
    version_config = versions_config[version]
    version_list = version_config.get("versions", [])
    
    # Filter out "All" files - only process individual releases
    csv_files = []
    all_filename = None
    
    for v in version_list:
        filename = v.get("filename", "")
        if v.get("value") == "all" or "all" in v.get("label", "").lower():
            all_filename = filename
            print(f"Found 'All' file configuration: {filename}")
        else:
            csv_path = data_dir / filename
            if csv_path.exists():
                csv_files.append(str(csv_path))
                print(f"Found individual file: {filename}")
            else:
                print(f"Warning: File not found: {filename}")
    
    if not csv_files:
        print(f"No individual CSV files found for version {version}")
        return
    
    if not all_filename:
        print(f"No 'All' file configured for version {version}")
        return
    
    # Output file
    output_file = data_dir / all_filename
    
    print(f"\nProcessing {len(csv_files)} individual files:")
    
    all_rows = []
    header = None
    
    # Process each CSV file
    for csv_file in sorted(csv_files):
        print(f"  - {os.path.basename(csv_file)}")
        
        with open(csv_file, 'r', newline='', encoding='utf-8') as f:
            reader = csv.reader(f)
            rows = list(reader)
            
            if not rows:
                continue
                
            # Use header from first file
            if header is None:
                header = rows[0]
            
            # Add data rows (skip header)
            all_rows.extend(rows[1:])
    
    # Remove duplicates based on Issue key (second column)
    seen_keys = set()
    unique_rows = []

    for row in all_rows:
        if row and len(row) > 1:
            issue_key = row[1]  # Issue key is second column (index 1)
            if issue_key not in seen_keys:
                seen_keys.add(issue_key)
                unique_rows.append(row)
    
    # Sort by Issue key for consistent output
    unique_rows.sort(key=lambda x: x[1] if len(x) > 1 else '')
    
    # Write combined file
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(header)
        writer.writerows(unique_rows)
    
    print(f"\nCombined {len(unique_rows)} unique issues into: {all_filename}")
    print(f"Removed {len(all_rows) - len(unique_rows)} duplicates")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python scripts/combine-changelogs.py <version>")
        print("Example: python scripts/combine-changelogs.py 25.10")
        sys.exit(1)
    
    version = sys.argv[1]
    combine_changelogs(version)