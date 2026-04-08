#!/usr/bin/env python3
"""
Process Jira CSV export and fetch PR links for TrueNAS release notable changes.

Usage:
  # From Jira CSV export
  ./process_jira_export.py --csv /path/to/jira_export.csv --version 25.10.2

  # Output formats
  ./process_jira_export.py --csv export.csv --version 25.10.2 --format json
  ./process_jira_export.py --csv export.csv --version 25.10.2 --format markdown
  ./process_jira_export.py --csv export.csv --version 25.10.2 --format both
"""

import argparse
import csv
import json
import os
import re
import sys
import time
from pathlib import Path
from typing import Dict, List, Optional
from urllib.parse import urljoin

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Error: Missing required dependencies.", file=sys.stderr)
    print("Install with: pip install requests beautifulsoup4", file=sys.stderr)
    sys.exit(1)


class JiraTicketProcessor:
    """Process Jira CSV export and fetch additional ticket data."""

    JIRA_BASE_URL = "https://ixsystems.atlassian.net"
    XML_URL_TEMPLATE = "{base}/si/jira.issueviews:issue-xml/{key}/{key}.xml"
    GITHUB_API_BASE = "https://api.github.com"
    GITHUB_ORG = "truenas"

    # User-facing components that indicate tickets likely affect users
    USER_FACING_COMPONENTS = [
        "SMB", "NFS", "WebUI", "Apps", "Certificates", "iSCSI",
        "Sharing", "Storage", "System", "Network", "Replication"
    ]

    # Keywords indicating critical issues
    CRITICAL_KEYWORDS = [
        "critical", "failure", "unable to", "blocks", "crash",
        "data loss", "corruption", "security", "panic", "deadlock"
    ]

    # Backend-only indicators (likely not user-facing)
    BACKEND_PATTERNS = [
        r"^API documentation",
        r"^test:",
        r"^ci:",
        r"^refactor:",
        r"^internal:",
        r"type:\s*Infrastructure",
        r"\btest\s+(fix|failure|infrastructure|framework|suite)\b",
        r"\b(fix|fixes|fixing)\s+(unit|integration|e2e|master|ci|pipeline)\s+tests?\b",
        r"^fix\s+master\s+tests?",
        r"\bjenkins\b",
        r"\bpipeline\b",
        r"\bbuild\s+system\b",
        r"^update\s+dependencies",
        r"^bump\s+version",
    ]

    def __init__(self, version: str, cache_dir: Optional[Path] = None, github_token: Optional[str] = None):
        """Initialize processor with target version."""
        self.version = version
        self.cache_dir = cache_dir or Path("/tmp/jira_cache")
        self.cache_dir.mkdir(parents=True, exist_ok=True)

        # Session for Jira requests
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'TrueNAS-ReleaseNotes-Script/1.0'
        })

        # Separate session for GitHub API
        self.github_token = github_token or os.environ.get('GITHUB_TOKEN')
        self.github_session = requests.Session()
        self.github_session.headers.update({
            'User-Agent': 'TrueNAS-ReleaseNotes-Script/1.0',
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
        })
        if self.github_token:
            self.github_session.headers.update({'Authorization': f'Bearer {self.github_token}'})
            print("GitHub token configured (30 search requests/min)")
        else:
            print("No GitHub token found; using unauthenticated GitHub API (10 search requests/min)")

    def parse_csv(self, csv_path: Path) -> List[Dict]:
        """Parse Jira CSV export file."""
        tickets = []

        with open(csv_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)

            for row in reader:
                # Extract key fields from CSV
                ticket = {
                    'key': row.get('Issue key', '').strip(),
                    'summary': row.get('Summary', '').strip(),
                    'priority': row.get('Priority', 'Medium').strip(),
                    'status': row.get('Status', '').strip(),
                    'type': row.get('Issue Type', '').strip(),
                    'components': [c.strip() for c in row.get('Components', '').split(',') if c.strip()],
                    'labels': [l.strip() for l in row.get('Labels', '').split(',') if l.strip()],
                    'fix_versions': [v.strip() for v in row.get('Fix Version/s', '').split(',') if v.strip()],
                    'created': row.get('Created', '').strip(),
                    'updated': row.get('Updated', '').strip(),
                    'description': row.get('Description', '').strip()[:500],  # Truncate long descriptions
                }

                if ticket['key']:
                    tickets.append(ticket)

        print(f"Parsed {len(tickets)} tickets from CSV")
        return tickets

    def fetch_xml(self, ticket_key: str) -> Optional[str]:
        """Fetch XML data for a ticket (with caching)."""
        cache_file = self.cache_dir / f"{ticket_key}.xml"

        # Check cache first
        if cache_file.exists():
            print(f"  Using cached XML for {ticket_key}")
            return cache_file.read_text(encoding='utf-8')

        # Fetch from Jira
        url = self.XML_URL_TEMPLATE.format(base=self.JIRA_BASE_URL, key=ticket_key)

        try:
            print(f"  Fetching XML for {ticket_key}...")
            response = self.session.get(url, timeout=10)
            response.raise_for_status()

            # Cache the result
            cache_file.write_text(response.text, encoding='utf-8')
            return response.text

        except requests.RequestException as e:
            print(f"  Warning: Failed to fetch XML for {ticket_key}: {e}", file=sys.stderr)
            return None

    def extract_pr_links(self, xml_content: str, ticket_key: str) -> List[str]:
        """Extract PR links from bugclerk bot comments in XML."""
        if not xml_content:
            return []

        try:
            soup = BeautifulSoup(xml_content, 'xml')
            pr_links = []

            # Look for comments section
            comments = soup.find_all('comment')

            # Pattern: "{version} PR: https://github.com/truenas/{repo}/pull/{number}"
            pr_pattern = rf"{re.escape(self.version)}\s+PR:\s*(https://github\.com/truenas/[^/]+/pull/\d+)"

            for comment in comments:
                comment_text = comment.get_text()

                # The comment text may contain HTML markup, parse it to get clean text
                # Example: "<p>25.10.1 PR: <a href='...'>link</a></p>"
                comment_soup = BeautifulSoup(comment_text, 'html.parser')
                clean_text = comment_soup.get_text()

                matches = re.findall(pr_pattern, clean_text, re.IGNORECASE)
                pr_links.extend(matches)

            if pr_links:
                print(f"  Found {len(pr_links)} PR link(s) for {ticket_key}")

            return pr_links

        except Exception as e:
            print(f"  Warning: Failed to parse XML for {ticket_key}: {e}", file=sys.stderr)
            return []

    def fetch_github_prs(self, ticket_key: str) -> List[str]:
        """Search GitHub org-wide for PRs referencing this ticket key.

        Used as a fallback when Jira XML contains no PR links (e.g. when devs
        post PR links in internal-only comments not visible to the public API).
        """
        url = f"{self.GITHUB_API_BASE}/search/issues"
        params = {
            'q': f'{ticket_key} org:{self.GITHUB_ORG} type:pr',
            'per_page': 10,
        }

        try:
            print(f"  Falling back to GitHub search for {ticket_key}...")
            response = self.github_session.get(url, params=params, timeout=10)

            if response.status_code == 403:
                reset_time = response.headers.get('X-RateLimit-Reset', 'unknown')
                print(
                    f"  Warning: GitHub API rate limit reached (resets at {reset_time}). "
                    f"Use --github-token or set GITHUB_TOKEN to increase limits.",
                    file=sys.stderr
                )
                return []

            response.raise_for_status()
            items = response.json().get('items', [])

            if not items:
                print(f"  No PRs found on GitHub for {ticket_key}")
                return []

            # PRs following TrueNAS convention include the version in the title:
            # "NAS-XXXXX / 25.10.2.2 / Fix description"
            # Prefer version-specific PRs; fall back to all closed PRs if none found.
            version_prs = []
            other_prs = []

            for item in items:
                if item.get('state') == 'open':
                    continue
                url_str = item.get('html_url', '')
                if self.version in item.get('title', ''):
                    version_prs.append(url_str)
                else:
                    other_prs.append(url_str)

            result = version_prs if version_prs else other_prs

            if result:
                print(f"  Found {len(result)} PR(s) via GitHub search for {ticket_key}"
                      f" ({len(version_prs)} version-specific)")

            return result

        except requests.RequestException as e:
            print(f"  Warning: GitHub search failed for {ticket_key}: {e}", file=sys.stderr)
            return []

        finally:
            # Respect GitHub search rate limits:
            # unauthenticated = 10/min (~6s between calls), authenticated = 30/min (~2s)
            time.sleep(2 if self.github_token else 6)

    def calculate_severity_score(self, ticket: Dict) -> int:
        """Calculate severity score for triage."""
        score = 0

        # Priority field
        priority = ticket.get('priority', 'Medium')
        if priority == 'Critical':
            score += 10
        elif priority == 'High':
            score += 5
        elif priority == 'Medium':
            score += 2

        # Labels
        labels = ticket.get('labels', [])
        if 'release_notes_mention' in labels:
            score += 5
        if 'perf_impact' in labels:
            score += 3

        # Component analysis
        components = ticket.get('components', [])
        if any(c in components for c in self.USER_FACING_COMPONENTS):
            score += 2

        # Summary keywords
        summary_lower = ticket.get('summary', '').lower()
        if any(kw in summary_lower for kw in self.CRITICAL_KEYWORDS):
            score += 3

        return score

    def is_user_facing(self, ticket: Dict) -> bool:
        """Determine if ticket is user-facing."""
        summary = ticket.get('summary', '').lower()
        ticket_type = ticket.get('type', '')
        priority = ticket.get('priority', 'Medium')
        components = ticket.get('components', [])

        # Backend-only indicators
        for pattern in self.BACKEND_PATTERNS:
            if re.search(pattern, summary, re.IGNORECASE):
                return False

        # User-facing indicators
        if ticket_type in ['Bug', 'Defect']:
            return True  # Most bugs are user-facing

        if any('UI' in c or 'WebUI' in c for c in components):
            return True

        if priority in ['Critical', 'High']:
            return True

        # Default to exclude if uncertain
        return False

    def process_tickets(self, tickets: List[Dict]) -> List[Dict]:
        """Process all tickets: fetch XML and extract PR links."""
        processed = []

        for i, ticket in enumerate(tickets, 1):
            print(f"\nProcessing {i}/{len(tickets)}: {ticket['key']}")

            # Fetch XML data
            xml_content = self.fetch_xml(ticket['key'])

            # Extract PR links from Jira XML; fall back to GitHub search if empty
            pr_links = self.extract_pr_links(xml_content, ticket['key'])
            if not pr_links:
                pr_links = self.fetch_github_prs(ticket['key'])
            ticket['pr_links'] = pr_links

            # Calculate scores
            ticket['severity_score'] = self.calculate_severity_score(ticket)
            ticket['user_facing'] = self.is_user_facing(ticket)

            # Add Jira URL
            ticket['jira_url'] = f"{self.JIRA_BASE_URL}/browse/{ticket['key']}"

            processed.append(ticket)

        return processed

    def output_json(self, tickets: List[Dict], output_path: Path):
        """Output tickets as JSON."""
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(tickets, f, indent=2, ensure_ascii=False)

        print(f"\nJSON output written to: {output_path}")

    def output_markdown(self, tickets: List[Dict], output_path: Path):
        """Output tickets as formatted markdown."""
        lines = [
            f"# Jira Tickets for TrueNAS {self.version}",
            f"\nTotal tickets: {len(tickets)}",
            f"\n## Tickets\n"
        ]

        # Sort by severity score (descending)
        sorted_tickets = sorted(tickets, key=lambda t: t['severity_score'], reverse=True)

        for ticket in sorted_tickets:
            lines.append(f"### [{ticket['key']}]({ticket['jira_url']})")
            lines.append(f"**Summary:** {ticket['summary']}")
            lines.append(f"**Priority:** {ticket['priority']}")
            lines.append(f"**Type:** {ticket['type']}")
            lines.append(f"**Status:** {ticket['status']}")
            lines.append(f"**Severity Score:** {ticket['severity_score']}")
            lines.append(f"**User-Facing:** {'Yes' if ticket['user_facing'] else 'No'}")

            if ticket['components']:
                lines.append(f"**Components:** {', '.join(ticket['components'])}")

            if ticket['labels']:
                lines.append(f"**Labels:** {', '.join(ticket['labels'])}")

            if ticket['pr_links']:
                lines.append(f"**PR Links:**")
                for pr_link in ticket['pr_links']:
                    lines.append(f"- {pr_link}")
            else:
                lines.append(f"**PR Links:** None found")

            lines.append("")  # Blank line between tickets

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines))

        print(f"Markdown output written to: {output_path}")


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description="Process Jira CSV export for TrueNAS release notable changes"
    )
    parser.add_argument(
        '--csv',
        type=Path,
        required=True,
        help="Path to Jira CSV export file"
    )
    parser.add_argument(
        '--version',
        type=str,
        required=True,
        help="Release version (e.g., 25.10.2)"
    )
    parser.add_argument(
        '--format',
        type=str,
        choices=['json', 'markdown', 'both'],
        default='both',
        help="Output format (default: both)"
    )
    parser.add_argument(
        '--output-dir',
        type=Path,
        default=None,
        help="Output directory (default: output/{version}/)"
    )
    parser.add_argument(
        '--cache-dir',
        type=Path,
        help="Cache directory for XML files (default: /tmp/jira_cache)"
    )
    parser.add_argument(
        '--github-token',
        type=str,
        default=None,
        help="GitHub personal access token for higher API rate limits (or set GITHUB_TOKEN env var)"
    )

    args = parser.parse_args()

    # Validate CSV file exists
    if not args.csv.exists():
        print(f"Error: CSV file not found: {args.csv}", file=sys.stderr)
        sys.exit(1)

    # Set default output directory to output/{version}/ if not specified
    if args.output_dir is None:
        version_slug = args.version.replace('.', '_')
        args.output_dir = Path('output') / version_slug

    # Create output directory
    args.output_dir.mkdir(parents=True, exist_ok=True)
    print(f"Output directory: {args.output_dir}")

    # Initialize processor
    processor = JiraTicketProcessor(args.version, args.cache_dir, args.github_token)

    # Parse CSV
    print(f"Parsing CSV: {args.csv}")
    tickets = processor.parse_csv(args.csv)

    if not tickets:
        print("Error: No tickets found in CSV", file=sys.stderr)
        sys.exit(1)

    # Process tickets (fetch XML, extract PRs, calculate scores)
    processed_tickets = processor.process_tickets(tickets)

    # Output results (use simple filenames since they're in version-specific directory)
    if args.format in ['json', 'both']:
        json_path = args.output_dir / "tickets.json"
        processor.output_json(processed_tickets, json_path)

    if args.format in ['markdown', 'both']:
        md_path = args.output_dir / "tickets.md"
        processor.output_markdown(processed_tickets, md_path)

    # Print summary statistics
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)
    print(f"Total tickets processed: {len(processed_tickets)}")
    print(f"Tickets with PR links: {sum(1 for t in processed_tickets if t['pr_links'])}")
    print(f"User-facing tickets: {sum(1 for t in processed_tickets if t['user_facing'])}")

    # Show severity distribution
    high_severity = sum(1 for t in processed_tickets if t['severity_score'] >= 10)
    medium_severity = sum(1 for t in processed_tickets if 5 <= t['severity_score'] < 10)
    low_severity = sum(1 for t in processed_tickets if t['severity_score'] < 5)

    print(f"\nSeverity distribution:")
    print(f"  High (score >= 10): {high_severity}")
    print(f"  Medium (score 5-9): {medium_severity}")
    print(f"  Low (score < 5): {low_severity}")
    print()


if __name__ == '__main__':
    main()