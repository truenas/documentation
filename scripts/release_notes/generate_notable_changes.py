#!/usr/bin/env python3
"""
Generate notable changes using Claude API with structured ticket data.

Usage:
  # Using Claude API
  ./generate_notable_changes.py --ticket-data tickets.json --version 25.10.3

  # Using environment variable for API key
  export ANTHROPIC_API_KEY="your-key-here"
  ./generate_notable_changes.py --ticket-data tickets.json --version 25.10.3

  # Manual mode (prints prompt for copy-paste to Claude)
  ./generate_notable_changes.py --ticket-data tickets.json --version 25.10.3 --manual
"""

import argparse
import json
import os
import sys
from pathlib import Path
from typing import Dict, List, Optional

try:
    from anthropic import Anthropic
    ANTHROPIC_AVAILABLE = True
except ImportError:
    ANTHROPIC_AVAILABLE = False


class NotableChangesGenerator:
    """Generate notable changes using Claude."""

    def __init__(self, api_key: Optional[str] = None, manual_mode: bool = False):
        """Initialize generator with API key (if using API mode)."""
        self.manual_mode = manual_mode

        if not manual_mode:
            if not ANTHROPIC_AVAILABLE:
                print("Error: anthropic package not installed.", file=sys.stderr)
                print("Install with: pip install anthropic", file=sys.stderr)
                print("Or use --manual mode to generate prompt for copy-paste", file=sys.stderr)
                sys.exit(1)

            if not api_key:
                api_key = os.environ.get('ANTHROPIC_API_KEY')

            if not api_key:
                print("Error: API key not provided.", file=sys.stderr)
                print("Set ANTHROPIC_API_KEY environment variable or use --manual mode", file=sys.stderr)
                sys.exit(1)

            self.client = Anthropic(api_key=api_key)

    def load_tickets(self, ticket_data_path: Path) -> List[Dict]:
        """Load ticket data from JSON file."""
        with open(ticket_data_path, 'r', encoding='utf-8') as f:
            tickets = json.load(f)

        print(f"Loaded {len(tickets)} tickets from {ticket_data_path}")
        return tickets

    def load_prompt_template(self) -> str:
        """Load prompt template from file."""
        # Try to find prompt template in expected location
        script_dir = Path(__file__).parent
        prompt_path = script_dir / 'prompts' / 'notable_changes_prompt.md'

        if prompt_path.exists():
            return prompt_path.read_text(encoding='utf-8')
        else:
            # Fallback to embedded prompt
            return """
Generate notable changes for TrueNAS {VERSION} based on the following Jira tickets.

Follow these guidelines:
1. Include only user-facing changes (bugs, features, performance improvements)
2. Exclude backend-only changes (tests, refactoring, documentation)
3. Write in TrueNAS style: present tense, active voice, simple language
4. Sort by severity: critical issues first, then features, then minor fixes
5. Format: * {Action verb} {description} ([TICKET](url)). {detailed impact}
6. No gerunds (-ing words), no semicolons
7. Bold UI elements: **Button Name**, code elements: `field_name`

Please provide:
1. Notable changes in markdown bullet format
2. Excluded tickets table with reasons

Ticket data:
{JSON_TICKET_DATA}
"""

    def build_prompt(self, version: str, tickets: List[Dict], output_dir: Path) -> str:
        """Build full prompt with ticket data and output instructions for Claude Code."""
        template = self.load_prompt_template()

        # Convert tickets to JSON string
        ticket_json = json.dumps(tickets, indent=2, ensure_ascii=False)

        # Build Claude Code-specific instructions
        output_instructions = f"""

## OUTPUT INSTRUCTIONS FOR CLAUDE CODE

After generating the notable changes, save the results to these files:

1. **Notable Changes**: Save to `{output_dir}/notable-changes.md`
   - Format: Markdown bullet list with Jira links
   - Include the notable changes section only (no headers)

2. **Excluded Tickets**: Save to `{output_dir}/excluded-tickets.md`
   - Format: Markdown table with three columns: Ticket | Summary | Reason for Exclusion
   - Include the table only (no headers)

Use the Write tool to create both files.
"""

        # Replace placeholders
        prompt = template.replace('{VERSION}', version)
        prompt = prompt.replace('{JSON_TICKET_DATA}', ticket_json)

        # Add output instructions at the end
        prompt += output_instructions

        return prompt

    def generate_with_api(self, prompt: str) -> str:
        """Generate notable changes using Claude API."""
        print("Calling Claude API...")

        try:
            message = self.client.messages.create(
                model="claude-sonnet-4-5-20250929",
                max_tokens=8000,
                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            )

            response_text = message.content[0].text
            print("Successfully generated notable changes")
            return response_text

        except Exception as e:
            print(f"Error calling Claude API: {e}", file=sys.stderr)
            sys.exit(1)

    def save_output(self, content: str, output_path: Path):
        """Save generated content to file."""
        output_path.write_text(content, encoding='utf-8')
        print(f"Output saved to: {output_path}")

    def parse_response(self, response: str) -> tuple[str, str]:
        """Parse response into notable changes and excluded tickets."""
        # Try to split response into sections
        sections = response.split('##')

        notable_changes = ""
        excluded_tickets = ""

        for section in sections:
            section_lower = section.lower()

            if 'notable changes' in section_lower and not notable_changes:
                # Extract content after section header
                lines = section.split('\n', 1)
                if len(lines) > 1:
                    notable_changes = lines[1].strip()

            elif 'excluded' in section_lower and not excluded_tickets:
                lines = section.split('\n', 1)
                if len(lines) > 1:
                    excluded_tickets = lines[1].strip()

        # Fallback: if we can't parse sections, use full response
        if not notable_changes:
            notable_changes = response

        return notable_changes, excluded_tickets


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description="Generate notable changes using Claude API"
    )
    parser.add_argument(
        '--ticket-data',
        type=Path,
        required=True,
        help="Path to processed ticket JSON file"
    )
    parser.add_argument(
        '--version',
        type=str,
        required=True,
        help="Release version (e.g., 25.10.3)"
    )
    parser.add_argument(
        '--api-key',
        type=str,
        help="Anthropic API key (or set ANTHROPIC_API_KEY env var)"
    )
    parser.add_argument(
        '--manual',
        action='store_true',
        help="Manual mode: generate prompt for copy-paste to Claude"
    )
    parser.add_argument(
        '--output-dir',
        type=Path,
        default=None,
        help="Output directory (default: output/{version}/)"
    )

    args = parser.parse_args()

    # Validate ticket data file exists
    if not args.ticket_data.exists():
        print(f"Error: Ticket data file not found: {args.ticket_data}", file=sys.stderr)
        sys.exit(1)

    # Set default output directory to output/{version}/ if not specified
    if args.output_dir is None:
        version_slug = args.version.replace('.', '_')
        args.output_dir = Path('output') / version_slug

    # Create output directory
    args.output_dir.mkdir(parents=True, exist_ok=True)
    print(f"Output directory: {args.output_dir}")

    # Initialize generator
    generator = NotableChangesGenerator(args.api_key, args.manual)

    # Load tickets
    tickets = generator.load_tickets(args.ticket_data)

    # Build prompt with output directory for Claude Code instructions
    prompt = generator.build_prompt(args.version, tickets, args.output_dir)

    # Save prompt file (default mode is for Claude Code execution)
    prompt_path = args.output_dir / "prompt.txt"
    prompt_path.write_text(prompt, encoding='utf-8')

    if args.manual:
        # Manual mode: Instructions for Claude Code
        print("\n" + "="*60)
        print("PROMPT READY FOR CLAUDE CODE")
        print("="*60)
        print(f"Prompt saved to: {prompt_path}")
        print("\nTo execute with Claude Code, run:")
        print(f'  claude code "Complete the prompt from {prompt_path}"')
        print("\nOr in an active Claude Code session, say:")
        print(f'  "Complete the prompt from {prompt_path}"')
        print("\nClaude Code will:")
        print("  1. Read the prompt and ticket data")
        print("  2. Generate notable changes following TrueNAS style")
        print("  3. Save output to notable-changes.md and excluded-tickets.md")
        print()

    else:
        # API mode: call Claude and save response
        response = generator.generate_with_api(prompt)

        # Save full response
        full_response_path = args.output_dir / "notable-changes-full.md"
        generator.save_output(response, full_response_path)

        # Try to parse and save sections separately
        notable_changes, excluded_tickets = generator.parse_response(response)

        if notable_changes:
            notable_path = args.output_dir / "notable-changes.md"
            generator.save_output(notable_changes, notable_path)

        if excluded_tickets:
            excluded_path = args.output_dir / "excluded-tickets.md"
            generator.save_output(excluded_tickets, excluded_path)

        print("\n" + "="*60)
        print("GENERATION COMPLETE")
        print("="*60)
        print(f"Review the output files in: {args.output_dir}")
        print("\nNext steps:")
        print("1. Review the generated notable changes")
        print("2. Make any necessary edits")
        print("3. Use update_version_notes.py to integrate into VersionNotes.md")
        print()


if __name__ == '__main__':
    main()
