---
title: "Storage"
geekdocCollapseSection: true
weight: 30
---

{{< toc >}}

The SCALE Storage section has controls for pool, snapshot, and disk management.

The storage section also has options for datasets, Zvols, and permissions.

## Storage Overview

![StorageSCALE](/images/SCALE/StorageSCALE.png "TrueNAS SCALE Storage")

The top row of the SCALE storage screen lets users search for existing pools, datasets, and zvols. 

The *Import* button lets users reconnect pools exported/disconnected from the current system or created on another system. The import button also reconnects pools after users reinstall or upgrade the TrueNAS system.

The *Create Pool* button creates ZFS data storage “pools” with physical disks to efficiently store and protect data.

The *Snapshots* drop-down creates snapshots, which provide read-only point-in-time copies of a file system, volume, or a running virtual machine.

The *Disks* drop-down lets users manage, wipe, and import storage disks that TrueNAS will use for ZFS data storage.

The Storage screen displays the pools, datasets, and zvols users have created on the system. Users may perform actions to root pools or specific datasets using the *Pool Actions* and *Dataset Actions* menus.

{{< include file="static/includes/General/MenuNav.md.part" markdown="true" >}}
