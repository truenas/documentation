---
title: "Replication Tasks"
description: "Tutorials for configuring ZFS snapshot replication tasks in TrueNAS SCALE."
geekdocCollapseSection: true
weight: 100
related: false
---

TrueNAS SCALE replication allows users to create one-time or regularly scheduled snapshots of data stored in pools, datasets or zvols on their SCALE system as a way to back up stored data.
When properly configured and scheduled, replication takes regular snapshots of storage pools or datasets and saves them in the destination location either on the same system or a different system.

{{< include file="/content/_includes/ReplicationIndexContentSCALE.md" >}}

## Setting Up a Simple Replication Task Overview

This section provides a simple overview of setting up a replication task regardless of the type of replication, local or remote.
It also covers the related steps to take prior to configuring a replication task.

{{< include file="/content/_includes/BasicReplicationProcess.md" >}}

## Contents

{{< children depth="2" description="true" >}}
