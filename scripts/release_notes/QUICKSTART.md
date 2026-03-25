# Quick Start Guide

Get up and running with release notes automation in 5 minutes.

> **Where to run these commands:** All commands assume you're in the `documentation/scripts/release_notes/` directory.

## Prerequisites

- Python 3.8 or higher
- Internet connection (to fetch Jira data and GitHub PR links)
- Jira CSV export file
- Claude Code (this tool)
- GitHub personal access token (optional but recommended — see below)

## Installation

**PowerShell (Windows):**
```powershell
cd scripts\release_notes
pip install -r requirements.txt
```

**Bash (Linux/macOS/WSL):**
```bash
cd scripts/release_notes
pip install -r requirements.txt
```

## GitHub Token Setup (Recommended)

The `prep` command searches GitHub for PR links when they are not available in the Jira public API (developers sometimes post them in internal-only comments). A token raises the GitHub search rate limit from 10 to 30 requests per minute.

Get a token at **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**.
No scopes are needed since `truenas` repos are public.

**Bash (add to `~/.bashrc` to persist):**
```bash
export GITHUB_TOKEN=ghp_xxxxxxxxxxxx
```

**PowerShell:**
```powershell
$env:GITHUB_TOKEN = "ghp_xxxxxxxxxxxx"
```

## Quick Workflow

### Before You Start: Two Conventions to Know

> **CSV naming:** Save your Jira export as `{version}-changelog.csv` in `documentation/public/data/`.
> Example: `public/data/25.10.2.2-changelog.csv`
> The `prep` command looks for this file automatically.

> **VersionNotes.md placeholder:** The new version tab must contain exactly this placeholder:
> ```
> <!-- Notable changes placeholder -->
> ```
> The `apply` command replaces this with the generated content.
> See [Adding a New Version Tab](#adding-a-new-version-tab) below.

---

### Step 1: Export CSV from Jira (2 minutes)

1. Open your Jira filter for the release
2. Click **Export** → **Export CSV (all fields)**
3. Save as `documentation/public/data/25.10.X-changelog.csv`

### Step 2: Run prep (5 minutes)

**PowerShell:**
```powershell
python release_notes.py prep --version 25.10.X
```

**Bash:**
```bash
python release_notes.py prep --version 25.10.X
```

This processes the CSV, fetches PR links from Jira XML (with a GitHub search fallback), and generates a Claude prompt at `output/25_10_X/prompt.txt`.

> **Custom CSV path:** If your file is not in the default location:
> ```
> python release_notes.py prep --version 25.10.X --csv /path/to/file.csv
> ```

> **Pass token inline** if you prefer not to use the environment variable:
> ```
> python release_notes.py prep --version 25.10.X --github-token ghp_xxxxxxxxxxxx
> ```

### Step 3: Run Claude Code (5 minutes)

In your Claude Code session, say:

```
Complete the prompt from output/25_10_X/prompt.txt
```

Claude Code reads the prompt, analyzes tickets, and saves output to `output/25_10_X/notable-changes.md`.

### Step 4: Review generated changes (2 minutes)

Open and review:
- `output/25_10_X/notable-changes.md` — the generated notable changes
- `output/25_10_X/excluded-tickets.md` — tickets not included, with reasons

Edit `notable-changes.md` as needed before applying.

### Step 5: Run apply (1 minute)

**PowerShell:**
```powershell
python release_notes.py apply --version 25.10.X
```

**Bash:**
```bash
python release_notes.py apply --version 25.10.X
```

This shows a diff preview, asks for confirmation, then updates VersionNotes.md.

---

## Adding a New Version Tab

Before running `apply`, the version tab must exist in VersionNotes.md with the correct placeholder.

Minimal tab structure:

```html
<div data-tab-id="25.10.X" data-tab-label="25.10.X">

Month DD, YYYY

The TrueNAS team is pleased to release TrueNAS 25.10.X!

**Notable changes:**

<!-- Notable changes placeholder -->

<a href="#full-changelog" target="_blank">Click here</a> to see the full 25.10 changelog or visit the <a href="https://ixsystems.atlassian.net/issues/?filter=XXXXX" target="_blank">TrueNAS 25.10.X (Goldeye) Changelog</a> in Jira.

</div>
```

Also update the front matter jump button:

```yaml
jump_to_buttons:
  - text: "Latest Changes"
    anchor: "25.10.X"   # ← update to new version
```

> **Important:** The placeholder must be exactly `<!-- Notable changes placeholder -->`.
> Any other text (including other placeholder patterns) will cause `apply` to fail with a warning.

---

## Troubleshooting

### "CSV file not found"

The `prep` command looks for `public/data/{version}-changelog.csv`.
Save your Jira export there, named exactly `{version}-changelog.csv`.

### "notable-changes.md not found"

Run `prep` first, then ask Claude Code to complete the prompt before running `apply`.

### "Could not find placeholder"

Check that the version tab in VersionNotes.md contains exactly:
```
<!-- Notable changes placeholder -->
```
No other placeholder text is recognized.

### "Could not find version section"

The version tab must exist in VersionNotes.md before running `apply`. See [Adding a New Version Tab](#adding-a-new-version-tab).

## Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Review [prompts/notable_changes_prompt.md](prompts/notable_changes_prompt.md) for style guidelines
