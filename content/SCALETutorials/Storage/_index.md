---
title: "Storage"
description: "Tutorials for configuring the various features contained within the Storage area of the TrueNAS SCALE web interface."
geekdocCollapseSection: true
weight: 5
related: false
---

The SCALE Storage section has controls for pools, snapshots, and disk management.
This section also provides access to datasets, zvols, quotas, and permissions.

## Storage Overview

{{< trueimage src="/images/SCALE/Storage/StorageDashboardWithPool.png" alt="SCALE Storage Daashboard" id="SCALE Storage Dashboard" >}}

Use the **Import Pool** button to reconnect pools exported/disconnected from the current system or created on another system.
This also reconnects pools after users reinstall or upgrade the TrueNAS system.

Use the **Disks** button to manage, wipe, and import storage disks that TrueNAS uses for ZFS data storage.

Use the **Create Pool** to create ZFS data storage “pools” from physical disks. Pools efficiently store and protect data.

The **Storage** screen displays all the pools added to the system.
Each pool shows statistics and status, along with buttons to manage the different elements of the pool.

The articles in this section offer specific guidance for the different storage management options.

## Storage Articles

{{< children depth="2" description="true" >}}
