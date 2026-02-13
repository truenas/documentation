#!/usr/bin/env python3
"""
Update VersionNotes.md with generated notable changes.

Usage:
  # Dry run (preview changes)
  ./update_version_notes.py --version 25.10.3 --notable-changes draft.md --dry-run

  # Update VersionNotes.md
  ./update_version_notes.py --version 25.10.3 --notable-changes draft.md

  # Specify custom VersionNotes.md path
  ./update_version_notes.py --version 25.10.3 --notable-changes draft.md --version-notes /path/to/VersionNotes.md
"""

import argparse
import difflib
import re
import shutil
import sys
from pathlib import Path
from typing import Optional


class VersionNotesUpdater:
    """Update VersionNotes.md with notable changes."""

    PLACEHOLDER_PATTERNS = [
        r'\[\s*Placeholder\s*-\s*Notable changes will be added based on ticket list\s*\]',
        r'\*\s*\[\s*Notable changes coming soon\s*\]',
        r'\*\s*TBD',
        r'<!-- Notable changes placeholder -->',
    ]

    def __init__(self, version: str, version_notes_path: Path):
        """Initialize updater with version and VersionNotes.md path."""
        self.version = version
        self.version_notes_path = version_notes_path

        if not version_notes_path.exists():
            print(f"Error: VersionNotes.md not found: {version_notes_path}", file=sys.stderr)
            sys.exit(1)

    def load_version_notes(self) -> str:
        """Load current VersionNotes.md content."""
        return self.version_notes_path.read_text(encoding='utf-8')

    def load_notable_changes(self, notable_changes_path: Path) -> str:
        """Load notable changes from file."""
        if not notable_changes_path.exists():
            print(f"Error: Notable changes file not found: {notable_changes_path}", file=sys.stderr)
            sys.exit(1)

        content = notable_changes_path.read_text(encoding='utf-8')

        # Clean up any markdown headers if present
        lines = content.split('\n')
        cleaned_lines = []

        for line in lines:
            # Skip markdown headers like "## Notable Changes"
            if line.strip().startswith('#'):
                continue
            cleaned_lines.append(line)

        return '\n'.join(cleaned_lines).strip()

    def find_version_section(self, content: str) -> Optional[tuple[int, int]]:
        """Find the version section in VersionNotes.md."""
        # Look for version div/section
        # Pattern: <div data-tab-id="25.10.X" or similar
        version_pattern = rf'data-tab-id\s*=\s*["\']({re.escape(self.version)})["\']'

        match = re.search(version_pattern, content)

        if not match:
            # Try with version in heading format
            heading_pattern = rf'^##\s+{re.escape(self.version)}'
            match = re.search(heading_pattern, content, re.MULTILINE)

        if not match:
            print(f"Error: Could not find version section for {self.version}", file=sys.stderr)
            print("Make sure the version exists in VersionNotes.md", file=sys.stderr)
            return None

        # Find the start and end of this section
        section_start = match.start()

        # Find the next section (next div or heading)
        next_section = re.search(
            r'(<div\s+data-tab-id|^##\s+)',
            content[match.end():],
            re.MULTILINE
        )

        if next_section:
            section_end = match.end() + next_section.start()
        else:
            section_end = len(content)

        return (section_start, section_end)

    def find_placeholder(self, section_content: str) -> Optional[tuple[int, int]]:
        """Find placeholder in section content."""
        # Try each placeholder pattern
        for pattern in self.PLACEHOLDER_PATTERNS:
            match = re.search(pattern, section_content, re.IGNORECASE)
            if match:
                return (match.start(), match.end())

        # Also look for "**Notable changes:**" followed by empty or placeholder content
        notable_header = re.search(
            r'\*\*Notable changes:\*\*\s*\n\s*\n',
            section_content,
            re.IGNORECASE
        )

        if notable_header:
            # Return position right after the header
            return (notable_header.end(), notable_header.end())

        return None

    def update_content(self, content: str, notable_changes: str) -> tuple[str, bool]:
        """Update VersionNotes.md content with notable changes."""
        # Find version section
        version_range = self.find_version_section(content)

        if not version_range:
            return content, False

        section_start, section_end = version_range
        section_content = content[section_start:section_end]

        # Find placeholder
        placeholder_range = self.find_placeholder(section_content)

        if not placeholder_range:
            print(f"Warning: Could not find placeholder in section for {self.version}", file=sys.stderr)
            print("You may need to manually insert the notable changes", file=sys.stderr)
            return content, False

        placeholder_start, placeholder_end = placeholder_range

        # Build replacement content
        # Ensure notable changes are properly indented and formatted
        notable_lines = notable_changes.strip().split('\n')

        # Check if we need to preserve indentation from context
        # Look at the line before placeholder to determine indentation
        before_placeholder = section_content[:placeholder_start]
        lines_before = before_placeholder.split('\n')

        # Get indentation of the "**Notable changes:**" line or surrounding content
        indent = ''
        for line in reversed(lines_before):
            if line.strip():
                # Calculate indentation
                indent = line[:len(line) - len(line.lstrip())]
                break

        # Format notable changes with appropriate indentation
        formatted_changes = []
        for line in notable_lines:
            if line.strip():
                # Add indent for bullet points and content
                if line.strip().startswith('*'):
                    formatted_changes.append(indent + line.strip())
                else:
                    # Content lines (indented explanations)
                    formatted_changes.append(indent + line)
            else:
                formatted_changes.append('')

        replacement = '\n'.join(formatted_changes)

        # Replace placeholder with notable changes
        new_section = (
            section_content[:placeholder_start] +
            replacement +
            section_content[placeholder_end:]
        )

        # Reconstruct full content
        new_content = (
            content[:section_start] +
            new_section +
            content[section_end:]
        )

        return new_content, True

    def show_diff(self, old_content: str, new_content: str):
        """Show unified diff between old and new content."""
        old_lines = old_content.splitlines(keepends=True)
        new_lines = new_content.splitlines(keepends=True)

        print("\n" + "="*60)
        print("CHANGES PREVIEW (unified diff)")
        print("="*60)

        # Generate unified diff with 3 lines of context
        diff = difflib.unified_diff(
            old_lines,
            new_lines,
            fromfile='VersionNotes.md (original)',
            tofile='VersionNotes.md (updated)',
            lineterm='',
            n=3  # 3 lines of context
        )

        diff_lines = list(diff)

        if not diff_lines:
            print("No changes detected")
        else:
            # Print diff with color indicators
            for line in diff_lines:
                # Skip the file name headers
                if line.startswith('---') or line.startswith('+++'):
                    continue
                print(line.rstrip())

        print("="*60 + "\n")

    def backup_file(self):
        """Create backup of VersionNotes.md."""
        backup_path = self.version_notes_path.with_suffix('.md.backup')
        shutil.copy2(self.version_notes_path, backup_path)
        print(f"Backup created: {backup_path}")

    def update(self, notable_changes_path: Path, dry_run: bool = False):
        """Perform the update."""
        # Load files
        version_notes_content = self.load_version_notes()
        notable_changes = self.load_notable_changes(notable_changes_path)

        # Update content
        new_content, success = self.update_content(version_notes_content, notable_changes)

        if not success:
            print("Update failed. Please check the error messages above.", file=sys.stderr)
            sys.exit(1)

        # Show diff
        self.show_diff(version_notes_content, new_content)

        if dry_run:
            print("DRY RUN: No changes written to file")
            print(f"Run without --dry-run to update {self.version_notes_path}")
            return

        # Create backup
        self.backup_file()

        # Write updated content
        self.version_notes_path.write_text(new_content, encoding='utf-8')

        print(f"Successfully updated {self.version_notes_path}")
        print(f"\nPlease review the changes and commit when satisfied.")


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description="Update VersionNotes.md with generated notable changes"
    )
    parser.add_argument(
        '--version',
        type=str,
        required=True,
        help="Release version (e.g., 25.10.3)"
    )
    parser.add_argument(
        '--notable-changes',
        type=Path,
        required=True,
        help="Path to notable changes markdown file"
    )
    parser.add_argument(
        '--version-notes',
        type=Path,
        help="Path to VersionNotes.md (default: auto-detect in documentation/)"
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help="Preview changes without writing to file"
    )

    args = parser.parse_args()

    # Auto-detect VersionNotes.md if not specified
    if not args.version_notes:
        # Try common locations (supports both master and versioned branches)
        script_dir = Path(__file__).parent
        possible_paths = [
            script_dir.parent.parent / 'content' / 'SCALE' / 'GettingStarted' / 'VersionNotes.md',  # Master branch: documentation/content/SCALE/GettingStarted/VersionNotes.md
            script_dir.parent.parent / 'content' / 'GettingStarted' / 'VersionNotes.md',  # Versioned branch: documentation/content/GettingStarted/VersionNotes.md
            script_dir.parent.parent / 'content' / 'VersionNotes.md',  # documentation/content/VersionNotes.md
            script_dir.parent.parent / 'VersionNotes.md',  # documentation/VersionNotes.md
            Path.cwd() / 'VersionNotes.md',  # Current directory
        ]

        for path in possible_paths:
            if path.exists():
                args.version_notes = path
                break

        if not args.version_notes:
            print("Error: Could not find VersionNotes.md", file=sys.stderr)
            print("Please specify path with --version-notes", file=sys.stderr)
            sys.exit(1)

    print(f"Using VersionNotes.md: {args.version_notes}")

    # Initialize updater
    updater = VersionNotesUpdater(args.version, args.version_notes)

    # Perform update
    updater.update(args.notable_changes, args.dry_run)


if __name__ == '__main__':
    main()
