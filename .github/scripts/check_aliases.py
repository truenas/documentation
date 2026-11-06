import os
import yaml
import re
import sys
import subprocess

# Match any path containing a version-like segment: /12.34/
version_pattern = re.compile(r"/\d{2}\.\d{2}/")
# Allowed exception patterns
exception_patterns = [
    re.compile(r"^/scale/\d{2}\.\d{2}/gettingstarted/versionnotes/?$"),
    re.compile(r"^/scale/\d{2}\.\d{2}/gettingstarted/scalereleasenotes/?$")
]

# Get list of changed files compared to the base branch
base_branch = f"origin/{os.environ.get('GITHUB_BASE_REF', 'master')}"
result = subprocess.run(
    ["git", "diff", "--name-only", base_branch],
    stdout=subprocess.PIPE,
    text=True
)
changed_files = result.stdout.splitlines()

content_files = [f for f in changed_files if f.startswith("content/") and f.endswith(".md")]
violations = []

for file in content_files:
    try:
        with open(file, "r") as f:
            lines = f.readlines()

        if lines[0].strip() == "---":
            try:
                end_index = lines[1:].index("---\n") + 1
            except ValueError:
                print(f"⚠️ Skipping {file}: no closing '---' found in front matter")
                continue
            front_matter = "".join(lines[1:end_index])
            data = yaml.safe_load(front_matter)

            if data is None:
                continue
            aliases = data.get("aliases") or []
            # Hugo still writes an alias stub for a draft page, but the stub has no
            # target URL (<meta http-equiv="refresh" content="0; url=">), so browsers
            # reload it forever. Draft pages must not declare aliases.
            if data.get("draft") is True and aliases:
                violations.append(f"{file}: draft page declares aliases, which produce an endless-refresh stub. Remove the aliases while the page is draft: {', '.join(aliases)}")
            for alias in aliases:
                if version_pattern.search(alias) and not any(pattern.match(alias) for pattern in exception_patterns):
                    violations.append(f"{file}: contains forbidden alias: {alias}")

    except Exception as e:
        print(f"⚠️ Error reading {file}: {e}")

if violations:
    print("\n🚫 Forbidden aliases found:")
    for v in violations:
        print(v)
    sys.exit(1)
