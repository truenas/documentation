---
title: "Replication Tasks"
description: "Tutorials for configuring ZFS snapshot replication tasks in TrueNAS."
geekdocCollapseSection: true
aliases:
 - /scale/scaletutorials/dataprotection/addreplicationscale/
 - /scale/scaletutorials/dataprotection/replication/addreplicationscale/
weight: 100
related: false
keywords:
- enterprise data storage 
- nas data storage
- data protection
---

TrueNAS replication allows users to create one-time or regularly scheduled snapshots of data stored in pools, datasets or zvols on their TrueNAS system as a way to back up stored data.
When properly configured and scheduled, replication takes regular snapshots of storage pools or datasets and saves them in the destination location either on the same system or a different system.

{{< include file="/static/includes/ReplicationIndexContentSCALE.md" >}}

## Setting Up a Simple Replication Task Overview

This section provides a simple overview of setting up a replication task regardless of the type of replication, local or remote.
It also covers the related steps to take prior to configuring a replication task.

{{< include file="/static/includes/BasicReplicationProcess.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
