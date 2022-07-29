---
title: "Migrating Instructions"
geekdocCollapseSection: true
weight: 40
---

This section provides information for CORE users migrating to SCALE.

Linux treats device names differently than FreeBSD so please read [Component Naming]({{< relref "ComponentNaming.md" >}}) for more information.

The ZFS flag feature merged into the TrueNAS fork of OpenZFS for developers to test and integrage with other parts of the system on June 29,2021 is also removed. Please read [ZFS Feature Flags Removed]({{< relref "ScaleZFSFlagRemoval.md" >}}) for details on this change.

## Migration Articles

{{< children depth="2" description="true" >}}