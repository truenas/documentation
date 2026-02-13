#!/usr/bin/env python3
"""
Diagnostic script to test PR link extraction from Jira XML.
"""

import re
import sys

try:
    from bs4 import BeautifulSoup
    import requests
except ImportError as e:
    print(f"Error: Missing dependency: {e}")
    print("Install with: pip install requests beautifulsoup4 lxml")
    sys.exit(1)

# Test with a real ticket
ticket_key = "NAS-138402"
version = "25.10.1"
url = f"https://ixsystems.atlassian.net/si/jira.issueviews:issue-xml/{ticket_key}/{ticket_key}.xml"

print(f"Testing PR extraction for {ticket_key}")
print(f"Version: {version}")
print(f"URL: {url}\n")

# Fetch XML
print("Fetching XML...")
try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    xml_content = response.text
    print(f"✓ Fetched {len(xml_content)} bytes\n")
except Exception as e:
    print(f"✗ Failed to fetch XML: {e}")
    sys.exit(1)

# Try parsing with different parsers
parsers = ['xml', 'lxml-xml', 'html.parser']

for parser in parsers:
    print(f"{'='*60}")
    print(f"Testing with parser: {parser}")
    print(f"{'='*60}")

    try:
        soup = BeautifulSoup(xml_content, parser)
        comments = soup.find_all('comment')
        print(f"Found {len(comments)} comments")

        if len(comments) == 0:
            print("✗ No comments found with this parser\n")
            continue

        # Test PR extraction
        pr_pattern = rf"{re.escape(version)}\s+PR:\s*(https://github\.com/truenas/[^/]+/pull/\d+)"
        print(f"Pattern: {pr_pattern}\n")

        pr_links = []
        for i, comment in enumerate(comments):
            comment_text = comment.get_text()

            # Show first comment in detail
            if i == 0:
                print(f"First comment raw text (first 200 chars):")
                print(f"  {repr(comment_text[:200])}\n")

            # Parse HTML inside comment to get clean text
            comment_soup = BeautifulSoup(comment_text, 'html.parser')
            clean_text = comment_soup.get_text()

            if i == 0:
                print(f"First comment clean text (first 200 chars):")
                print(f"  {repr(clean_text[:200])}\n")

            matches = re.findall(pr_pattern, clean_text, re.IGNORECASE)
            if matches:
                print(f"  Comment {i+1}: Found PR links: {matches}")
                pr_links.extend(matches)

        if pr_links:
            print(f"\n✓ Successfully extracted {len(pr_links)} PR link(s):")
            for link in pr_links:
                print(f"  - {link}")
        else:
            print(f"\n✗ No PR links found matching pattern")

    except Exception as e:
        print(f"✗ Parser '{parser}' failed: {e}")

    print()

print("\n" + "="*60)
print("RECOMMENDATION")
print("="*60)

# Check if lxml is available
try:
    import lxml
    print("✓ lxml is installed")
except ImportError:
    print("✗ lxml is NOT installed")
    print("\nInstall it with:")
    print("  pip install lxml")
    print("\nWithout lxml, the 'xml' parser won't work properly!")
