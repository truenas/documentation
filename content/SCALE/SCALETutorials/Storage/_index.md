---
title: "Storage"
description: "This section has tutorials for configuring the various features contained within the Storage area of the TrueNAS SCALE web interface."
geekdocCollapseSection: true
weight: 30
---

{{< toc >}}

The SCALE Storage section has controls for pool, snapshot, and disk management.
The storage section also has options for datasets, zvols, and permissions.

For guidance on clustering storage across multiple SCALE systems, see [Clustering and Sharing SCALE Volumes with TrueCommand]({{< relref "/content/Solutions/Integrations/SMBClustering.md" >}}).

## Storage Overview

![StorageSCALE](/images/SCALE/22.12/StorageDashboardWithPool.png "TrueNAS SCALE Storage")

The **Import Pool** button lets users reconnect pools exported/disconnected from the current system or created on another system.
This also reconnects pools after users reinstall or upgrade the TrueNAS system.

The **Disks** button lets users manage, wipe, and import storage disks that TrueNAS will use for ZFS data storage.

The **Create Pool** button creates ZFS data storage “pools” from physical disks to efficiently store and protect data.

The Storage screen displays all the pools that users have created on the system.
Statistics and status are shown for each pool, along with buttons to manage the different elements of the pool.

The articles in this section offer specific guidance for the different storage management options.

## Storage Articles

{{< children depth="2" description="true" >}}
