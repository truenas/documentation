#!/usr/bin/env python3
"""Tests for release_notes.py path helpers."""

import sys
from pathlib import Path

# Add scripts dir to path so we can import
sys.path.insert(0, str(Path(__file__).parent))

from release_notes import version_to_slug, default_csv_path, output_dir

def test_version_to_slug():
    assert version_to_slug("25.10.2.2") == "25_10_2_2"
    assert version_to_slug("25.10.3") == "25_10_3"

def test_default_csv_path():
    script_dir = Path(__file__).parent
    expected = script_dir / ".." / ".." / "public" / "data" / "25.10.2.2-changelog.csv"
    assert default_csv_path("25.10.2.2") == expected.resolve()

def test_output_dir():
    script_dir = Path(__file__).parent
    expected = script_dir / "output" / "25_10_2_2"
    assert output_dir("25.10.2.2") == expected

if __name__ == "__main__":
    test_version_to_slug()
    test_default_csv_path()
    test_output_dir()
    print("All tests passed.")