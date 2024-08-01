---
title: "Chart Apps"
description: "Notes about official TrueNAS chart applications and individual tutorials for applications."
weight: 25
tags:
- apps
related: false
keywords:
- nas data storage
- software storage solutions
---


{{< hint type=important title="Application Articles" >}}
{{< include file="/static/includes/AppsUnversioned.md" >}}

{{< include file="/static/includes/ProposeArticleChange.md" >}}
{{< /hint >}}

The TrueNAS SCALE offeres three catalogs of applications:

* Enterprise - Maintained by iXsystems for Enterprise users.
* Chart - Maintained by iXsystems for non-Enterprise and community users.
* Community - Proposed and maintained by community members.

Official chart applications are sometimes proposed by community members, but are vetted by iXsystems for feature and functionality, and how they integrate with the SCALE platform.
All applications added to the SCALE platform are intended to expand system functionality far beyond what is typically expected from a NAS.

The TrueNAS **Chart** and **Community** catalogs are loaded by default and populate the **Discover** apps screen.
Users can add the **Enterprise** catalog.
To view the catalog settings, select the **Manage Catalogs** at the top of the **Discover** apps screen.

Applications are provided "as-is" and can introduce system stability or security issues when installed.
Make sure the application is required for your specific use requirements and does not violate your security policies before installation.

Some applications deploy as the **root** user for initial configuration before operating as a non-root user.

The tutorials in this section are for commonly-used chart catalog applications. Some apps replace previously-builtin and now deprecated functionality in SCALE.

<div class="noprint">

## Section Contents

{{< children depth="1" description="true" >}}

</div>
