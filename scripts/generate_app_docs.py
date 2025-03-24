import os
import json
import re
import requests

# Determine the script's root directory
script_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.abspath(os.path.join(script_dir, ".."))  # Move up one level from 'scripts' to project root

# Paths to documentation directories (dynamically generated)
output_dirs = {
    "Enterprise": os.path.join(root_dir, "content", "TruenasApps", "EnterpriseApps"),
    "Stable": os.path.join(root_dir, "content", "TruenasApps", "StableApps"),
    "Community": os.path.join(root_dir, "content", "TruenasApps", "CommunityApps"),
}

# Apps to ignore during processing
ignored_apps = {"minio", "ix-app"}

# Templates for each train
templates = {
    "Enterprise": """---
title: "$title"
description: "Provides basic installation instructions for the TrueNAS Enterprise $title application."
weight: 
aliases:
tags:
- $name
- apps
- enterprise
keywords:
- nas data storage
- software storage solutions
- enterprise data storage
---

{{< include file="/static/includes/apps/EnterpriseApps.md" >}}

{{< github-content repo="truenas/apps" path="train/enterprise/$name/app_versions.json" branch="master" title="$title" >}}

$app_readme
""",
    "Stable": """---
title: "$title"
description: "Provides installation instructions for the $title application in TrueNAS."
weight: 
aliases:
tags:
- $name
- apps
keywords:
- stable storage
- software solutions
- data management
---

{{< github-content repo="truenas/apps" path="train/stable/$name/app_versions.json" branch="master" title="$title" >}}

$app_readme
""",
    "Community": """---
title: "$title"
description: "Provides installation instructions for the $title application in TrueNAS."
weight: 
aliases:
tags:
- $name
- apps
keywords:
- community storage
- software solutions
- data management
---

{{< include file="/static/includes/apps/CommunityApp.md" >}}

{{< github-content repo="truenas/apps" path="train/community/$name/app_versions.json" branch="master" title="$title" >}}

{{< include file="/static/includes/apps/CommunityPleaseExpand.md" >}}

$app_readme

{{< include file="/static/includes/ProposeArticleChange.md" >}}
""",
}

# URL to catalog.json
catalog_url = "https://raw.githubusercontent.com/truenas/apps/master/catalog.json"

# Fetch the catalog data from the remote URL
response = requests.get(catalog_url)
if response.status_code == 200:
    try:
        catalog = response.json()
    except json.JSONDecodeError:
        print("Error: Received invalid JSON from catalog.")
        exit(1)
else:
    print(f"Failed to retrieve catalog from {catalog_url}. Status code: {response.status_code}")
    exit(1)

enterprise_added = []
stable_added = []
community_added = []

# Iterate through each train
for train, apps in catalog.items():
    train_name = train.capitalize()  # Convert to match output_dirs keys
    if train_name not in output_dirs:
        continue  # Skip if it's not one of the three main trains

    output_dir = output_dirs[train_name]
    template = templates[train_name]
    os.makedirs(output_dir, exist_ok=True)

    # Process each app in the train
    for app_name, app_details in apps.items():
        if app_name in ignored_apps:
            continue  # Skip ignored apps

        title = app_details.get("title", app_name)
        home = app_details.get("home", "#")
        app_readme = app_details.get("app_readme", "")

        # Extract only the first <p> section
        match = re.search(r"<p>(.*?)</p>", app_readme, re.DOTALL)
        app_readme = match.group(1).strip() if match else ""

        md_file_path = os.path.join(output_dir, f"{app_name}.md")

        # Skip if the file already exists
        if os.path.exists(md_file_path):
            continue

        # Replace placeholders in the template
        content = template.replace("$title", title).replace("$app_readme", app_readme).replace("$name", app_name)

        # Write the new markdown file
        with open(md_file_path, "w", encoding="utf-8") as md_file:
            md_file.write(content)

        # Track newly added files in Enterprise, Stable, and Community
        if train_name == "Enterprise":
            enterprise_added.append((title, f"{app_name}.md"))
        elif train_name == "Stable":
            stable_added.append((title, f"{app_name}.md"))
        elif train_name == "Community":
            community_added.append((title, f"{app_name}.md"))

print("\nMarkdown file generation completed.\n")
if community_added:
    print("New Community articles added:")
    for app, filename in community_added:
        print(f"- {app} ({filename})")
    print()
if stable_added:
    print("New Stable articles added:")
    for app, filename in stable_added:
        print(f"- {app} ({filename})")
    print()
if enterprise_added:
    print("New Enterprise articles added:")
    for app, filename in enterprise_added:
        print(f"- {app} ({filename} - Please create a Product Documentation ticket.)")
    print()

# Separate ignore list for orphan detection
orphan_ignore_list = {"example-app1", "example-app2"}  # Add known false alerts here

# Function to find orphaned articles
def find_orphaned_articles():
    orphaned_articles = []
    
    for train_name, output_dir in output_dirs.items():
        if not os.path.exists(output_dir):
            continue

        existing_articles = {f[:-3].lower() for f in os.listdir(output_dir) if f.endswith(".md") and f != "_index.md"}
        catalog_apps = {app.lower() for app in catalog.get(train_name.lower(), {}).keys()}

        # Find articles that exist but no longer have a corresponding app
        orphaned = existing_articles - catalog_apps - {app.lower() for app in orphan_ignore_list}

        for app in orphaned:
            relative_path = os.path.relpath(os.path.join(output_dir, f"{app}.md"), root_dir)
            orphaned_articles.append((train_name, app, relative_path))

    return orphaned_articles

# Detect and log orphaned articles
orphaned_articles = find_orphaned_articles()

if orphaned_articles:
    print("\n⚠️  Potential orphaned articles detected (app not found in catalog):")
    for train, app, path in orphaned_articles:
        print(f"- [{train}] {app} ({path}) - Review and consider deleting")
    print()
