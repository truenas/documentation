---
title: "Mealie"
description: "Provides installation instructions for the Mealie application in TrueNAS."
weight: 
aliases:
tags:
- apps
keywords:
- nas data storage
- software storage solutions
- flash storage
---

{{< github-content 
    path="trains/community/mealie/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

{{< include file="/static/includes/apps/CommunityApp.md" >}}

<!-- Comment out the following line if your suggested changes to this Community app documentation provide a complete installation tutorial. Leave exposed if you are proposing a partial expansion of the content, but further work is needed. -->
{{< include file="/static/includes/apps/CommunityPleaseExpand.md" >}}

<!-- Uncomment the following line if you suspect this Community app documentation is out of date, inaccurate, or needs further improvement -->
<!--{{< include file="/static/includes/apps/CommunityPleaseImprove.md" >}}-->

[Mealie](https://docs.mealie.io) is a self-hosted recipe manager and meal planner.

## Configuration

### Mealie Configuration

- **Base URL**: Set to the NAS URL, and append `:` and the **Web Port** set in the **Network Configuration** section (probably `31001`).
  E.g., if your NAS is `https://10.10.0.1` and the web port is `31001` then this is `https://10.10.0.1:31001`.
- Default Admin Email: E-mail address to use for Mealie admin (e.g., your e-mail address).
- Default Admin Password: Password to use for admin user.

### User and Group Configuration

- **User ID**: Set to `911` to match the default described in https://docs.mealie.io/documentation/getting-started/installation/backend-config/.
- **Group ID**: Set to `911` to match the default described in https://docs.mealie.io/documentation/getting-started/installation/backend-config/.

{{< include file="/static/includes/ProposeArticleChange.md" >}}
