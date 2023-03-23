---
title: "Migrating Instructions"
geekdocCollapseSection: true
weight: 40
aliases:
tags:
- scalemigrate
---

This section provides information and instructions for CORE users wanting to migrate to SCALE.

{{< include file="/content/_includes/MigrateCOREtoSCALEWarning.md" >}}

Linux treats device names differently than FreeBSD so please read [Component Naming]({{< relref "ComponentNaming.md" >}}) for more information.

The ZFS flag feature merged into the TrueNAS fork of OpenZFS for developers to test and integrage with other parts of the system on June 29,2021 is also removed. Please read [ZFS Feature Flags Removed]({{< relref "ScaleZFSFlagRemoval.md" >}}) for details on this change.

After migration, it is strongly recommended to review each area of the UI that was previously configured in CORE.

## Migration Articles

{{< children depth="2" description="true" >}}