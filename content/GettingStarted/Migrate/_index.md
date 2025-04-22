---
title: "CORE to SCALE Migrations"
description: "Information on preparing for and migrating TrueNAS CORE to TrueNAS SCALE."
geekdocCollapseSection: true
weight: 40
aliases:
tags:
- migrate
related: false
---

This section provides information and instructions for TrueNAS CORE users wanting to migrate to SCALE.

{{< include file="/static/includes/MigrateCOREtoSCALE24_04.md" >}}

{{< include file="/static/includes/MigrateCoreServicesToCobiaEnterprise.md" >}}

Linux treats device names differently than FreeBSD so please read [Component Naming]({{< ref "ComponentNaming" >}}) for more information.

After migration, review each area of the UI that was previously configured in CORE.

## Migration Articles

{{< children depth="2" description="true" >}}
