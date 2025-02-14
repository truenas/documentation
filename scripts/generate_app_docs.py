import os
import json
import re
import requests

# Paths to documentation directories
output_dirs = {
    "Enterprise": r"C:\Users\iXUser\Documents\GitHub\documentation\content\TruenasApps\EnterpriseApps",
    "Stable": r"C:\Users\iXUser\Documents\GitHub\documentation\content\TruenasApps\StableApps",
    "Community": r"C:\Users\iXUser\Documents\GitHub\documentation\content\TruenasApps\CommunityApps",
}

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

        print(f"Generated: {md_file_path}")

        # Track newly added files in Enterprise or Stable
        if train_name == "Enterprise":
            enterprise_added.append(title)
        elif train_name == "Stable":
            stable_added.append(title)

print("Markdown files generation completed.")
if enterprise_added:
    print("New Enterprise articles added:")
    for app in enterprise_added:
        print(f"- {app} (Please create a Product Documentation ticket.)")
if stable_added:
    print("New Stable articles added:")
    for app in stable_added:
        print(f"- {app} (Please create a Product Documentation ticket.)")
