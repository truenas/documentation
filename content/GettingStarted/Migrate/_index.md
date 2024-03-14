---
title: "CORE to SCALE Migrations"
description: "TrueNAS CORE to TrueNAS SCALE migrations."
geekdocCollapseSection: true
weight: 40
aliases:
tags:
- migrate
related: false
---

This section provides information and instructions for TrueNAS CORE users wanting to migrate to SCALE.

{{< include file="/_includes/MigrateCOREtoSCALEWarning.md" >}}

{{< include file="/_includes/MigrateCoreServicesToCobia.md" >}}

Linux treats device names differently than FreeBSD so please read [Component Naming]({{< relref "ComponentNaming.md" >}}) for more information.

After migration, review each area of the UI that was previously configured in CORE.

## Migration Articles

{{< children depth="2" description="true" >}}
