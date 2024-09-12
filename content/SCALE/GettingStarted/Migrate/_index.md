---
title: "TrueNAS Migrations"
description: "Instructions for migrating from FreeBSD to Linux-based TrueNAS versions."
geekdocCollapseSection: true
weight: 40
aliases:
tags:
- migrate
related: false
keywords:
- nas system storage
- nas data storage solution
- nas storage software
- enterprise nas solution
- data migration
---

This section provides information and instructions for FreeBSD-based TrueNAS (13.0 or 13.3) users wanting to migrate to Linux-Based TrueNAS versions.

{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

Linux treats device names differently than FreeBSD, so please read [Component Naming]({{< relref "ComponentNaming.md" >}}) for more information.

After migration, review each area of the UI that was previously configured in CORE.

<div class="noprint">

## Migration Articles

{{< children depth="2" description="true" >}}

</div>
