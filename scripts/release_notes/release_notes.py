#!/usr/bin/env python3
"""
TrueNAS Release Notes — unified workflow wrapper.

Usage:
  # Phase 1: process CSV and generate Claude prompt
  python release_notes.py prep --version 25.10.2.2

  # Phase 2: apply notable-changes.md to VersionNotes.md
  python release_notes.py apply --version 25.10.2.2

  # Override default CSV path
  python release_notes.py prep --version 25.10.2.2 --csv /path/to/file.csv
"""

import argparse
import subprocess
import sys
from pathlib import Path

SCRIPTS_DIR = Path(__file__).parent


def version_to_slug(version: str) -> str:
    """Convert version string to underscore-separated slug.

    Examples:
        25.10.2.2 -> 25_10_2_2
        25.10.3   -> 25_10_3
    """
    return version.replace(".", "_")


def default_csv_path(version: str) -> Path:
    """Return the expected CSV path for a given version.

    Convention: documentation/public/data/{version}-changelog.csv
    """
    return (SCRIPTS_DIR / ".." / ".." / "public" / "data" / f"{version}-changelog.csv").resolve()


def output_dir(version: str) -> Path:
    """Return the output directory for a given version."""
    return SCRIPTS_DIR / "output" / version_to_slug(version)


def main():
    parser = argparse.ArgumentParser(
        description="TrueNAS release notes workflow wrapper",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    subparsers = parser.add_subparsers(dest="command", required=True)

    # prep subcommand
    prep_parser = subparsers.add_parser(
        "prep",
        help="Process Jira CSV and generate Claude prompt (Phase 1)",
    )
    prep_parser.add_argument("--version", required=True, help="Release version, e.g. 25.10.2.2")
    prep_parser.add_argument("--csv", type=Path, help="Path to Jira CSV export (optional override)")

    # apply subcommand
    apply_parser = subparsers.add_parser(
        "apply",
        help="Apply notable-changes.md to VersionNotes.md (Phase 2)",
    )
    apply_parser.add_argument("--version", required=True, help="Release version, e.g. 25.10.2.2")

    args = parser.parse_args()

    if args.command == "prep":
        run_prep(args)
    elif args.command == "apply":
        run_apply(args)


def run_script(script_name: str, args: list[str]) -> None:
    """Run a script in the scripts directory. Exits on failure."""
    script_path = SCRIPTS_DIR / script_name
    cmd = [sys.executable, str(script_path)] + args
    result = subprocess.run(cmd)
    if result.returncode != 0:
        print(f"\nError: {script_name} failed (exit code {result.returncode}).", file=sys.stderr)
        sys.exit(result.returncode)


def run_prep(args) -> None:
    """Phase 1: process CSV, generate Claude prompt."""
    version = args.version

    # Resolve CSV path
    csv_path = args.csv if args.csv else default_csv_path(version)
    if not csv_path.exists():
        expected = default_csv_path(version)
        print(f"Error: CSV file not found: {csv_path}", file=sys.stderr)
        print(f"\nExport your Jira filter CSV and save it to:", file=sys.stderr)
        print(f"  {expected}", file=sys.stderr)
        print(f"\nName it exactly: {version}-changelog.csv", file=sys.stderr)
        sys.exit(1)

    print(f"=== Release Notes Prep: {version} ===\n")

    # Step 1: Process CSV
    print("Step 1/2: Processing Jira CSV export...")
    run_script("process_jira_export.py", [
        "--csv", str(csv_path),
        "--version", version,
    ])

    # Step 2: Generate Claude prompt
    tickets_json = output_dir(version) / "tickets.json"
    print("\nStep 2/2: Generating Claude prompt...")
    run_script("generate_notable_changes.py", [
        "--ticket-data", str(tickets_json),
        "--version", version,
        "--manual",
    ])

    # Print next steps
    prompt_path = output_dir(version) / "prompt.txt"
    notable_changes_path = output_dir(version) / "notable-changes.md"
    print(f"""
=== Prep complete ===

Next steps:
  1. In Claude Code, run:
       Complete the prompt from {prompt_path.relative_to(SCRIPTS_DIR)}

  2. Claude Code will save output to:
       {notable_changes_path.relative_to(SCRIPTS_DIR)}

  3. Review that file, then run:
       python release_notes.py apply --version {version}
""")


def run_apply(args) -> None:
    """Phase 2: apply notable-changes.md to VersionNotes.md."""
    version = args.version

    notable_changes = output_dir(version) / "notable-changes.md"
    if not notable_changes.exists():
        print(f"Error: notable-changes.md not found: {notable_changes}", file=sys.stderr)
        print(f"\nRun prep first, then ask Claude Code to complete the prompt.", file=sys.stderr)
        print(f"Claude Code saves output to: {notable_changes}", file=sys.stderr)
        sys.exit(1)

    print(f"=== Release Notes Apply: {version} ===\n")
    print("Previewing changes (dry run)...\n")

    # Dry run
    run_script("update_version_notes.py", [
        "--version", version,
        "--notable-changes", str(notable_changes),
        "--dry-run",
    ])

    # Confirm
    try:
        answer = input("Apply these changes to VersionNotes.md? [y/N]: ").strip().lower()
    except KeyboardInterrupt:
        print("\nCancelled.")
        sys.exit(0)

    if answer != "y":
        print("\nCancelled. Run again when ready.")
        sys.exit(0)

    # Apply
    print("\nApplying changes...")
    run_script("update_version_notes.py", [
        "--version", version,
        "--notable-changes", str(notable_changes),
    ])

    print(f"\n=== Done ===")
    print(f"VersionNotes.md updated for {version}.")
    print("Review the changes, then commit.")


if __name__ == "__main__":
    main()
