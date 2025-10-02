import os
import yaml
import re
import sys
import subprocess

# Match any path containing a version-like segment: /12.34/
version_pattern = re.compile(r"/\d{2}\.\d{2}/")
# Allowed exception pattern
exception_pattern = re.compile(r"^/scale/\d{2}\.\d{2}/gettingstarted/versionnotes/?$")

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
            end_index = lines[1:].index("---\n") + 1
            front_matter = "".join(lines[1:end_index])
            data = yaml.safe_load(front_matter)

            aliases = data.get("aliases", [])
            for alias in aliases:
                if version_pattern.search(alias) and not exception_pattern.match(alias):
                    violations.append(f"{file}: contains forbidden alias: {alias}")

    except Exception as e:
        print(f"⚠️ Error reading {file}: {e}")

if violations:
    print("\n🚫 Forbidden versioned aliases found:")
    for v in violations:
        print(v)
    sys.exit(1)
