---
title: "Managing Pools"
description: "Describes how to manage storage pools on TrueNAS CORE."
weight: 16
Aliases: /core/storage/pools/managingpools/
tags:
- pools
- storage
---

After creating a data storage pool, there are a variety of options to change the initial configuration of that pool.
Changing a pool can be disruptive, so make sure you are aware of existing resources on the system and consider backing up any stored data before changing the pool.
To find an existing pool, log in to the web interface and go to **Storage > Pools**.

![StoragePoolsScreen](/images/CORE/Storage/StoragePoolsScreen.png "Storage Pools Screen")

The current status and storage usage of each pool is shown.
To see more details about a pool, click the <span class="material-icons-round">expand_more</span> expand symbol on the right side of the pool entry.
Click the <span class="iconify" data-icon="ep:arrow-down-bold"></span> for all pool management options.

## Pool Actions
{{< expand "Pool Options" >}}
Contains any additional high-level settings for the pool.

![StoragePoolsPoolOptions](/images/CORE/Storage/StoragePoolsPoolOptions.png "StoragePoolsPoolOptions")

**Auto TRIM** allows TrueNAS to periodically check the pool disks for storage blocks that can be reclaimed.
This can have a performance impact on the pool, so the option is disabled by default.
For more details about TRIM in ZFS, see the `autotrim` property description in [zpool.8](https://zfsonlinux.org/manpages/0.8.1/man8/zpool.8.html).
{{< /expand >}}
{{< expand "Export/Disconnect" >}}
Removes the pool from the system.

Use to prepare drives for transfer to a new system and import the pool or completely delete the pool and any data stored on it.
A dialog warns about the risks of disconnecting the pool and shows any system services that are affected by removing the pool.

![Storage Pools Export Example](/images/CORE/Storage/StoragePoolsExportExample.png "Storage Pools Export Example")

Because this is a destructive action, you must select additional checkboxes and enter the name of the pool when also deleting stored data.
You can also remove existing shares to this data when the pool is disconnected.
{{< /expand >}}
{{< expand "Add Vdevs" >}}
Opens the **Pool Manager** to add more vdevs to the pool.
Changing the original encryption and data vdev configuration is not allowed.

![Storage Pools Add Create Vdevs](/images/CORE/Storage/StoragePoolsAddCreateVdevs.png "Storage Pools Add Create Vdevs")

A new data vdev is chosen by default.

To add different kinds of vdevs to the pool, click **ADD VDEV** and select the type from the dropdown list.

When adding disks to increase the capacity of a pool, ZFS supports the addition of virtual devices, or vdevs, to an existing ZFS pool.

After a vdev is created, more drives cannot be added to that vdev, but a new vdev can be striped with another of the same type to increase the overall size of the pool.
To extend a pool, the vdev added must be the same type as existing vdevs. 

Some vdev extending examples:

* Extend a ZFS mirror: Add the same number of drives. The result is a striped mirror. 
  For example, if ten new drives are available, a mirror of two drives can be created initially, then extended by adding another mirror of two drives, and repeating three more times until all ten drives are added.
* Extend a three-drive RAIDZ1: Add another three drives. The resulting pool is a stripe of two RAIDZ1 vdevs, similar to RAID 50 on a hardware controller.
* Extend a four-drive RAIDZ2: Add another four drives. The result is a stripe of RAIDZ2 vdevs, similar to RAID 60 on a hardware controller.
* Add a disk as a *hot spare* to the pool.
{{< /expand >}}
{{< expand "Scrub Pool" >}}
Initiate a data integrity check of the pool.

Any problems detected during the scrub are either automatically corrected or generate an [alert]({{< relref "CORE/CORETutorials/SystemConfiguration/CreatingAlerts.md" >}}) in the web interface.
By default, every pool is automatically checked on a reoccurring [scrub schedule]({{< relref "/CORE/CORETutorials/Tasks/CreatingScrubTasks.md" >}}).
{{< /expand >}}
{{< expand "Status" >}}
Opens the **Pool Status** screen to show the state of the last scrub and disks in the pool.

![PoolStatusScreen](/images/CORE/Storage/PoolStatusScreen.png "Storage Pools Status")

Additional options for [managing connected disks]({{< relref "/CORE/CORETutorials/Storage/Disks/DiskReplace.md" >}}) are available in this screen.
{{< /expand >}}
{{< expand "Expand Pool" >}}
Increases the size of the pool to match all available disk space.
This option is typically used when virtual disks are resized apart from TrueNAS.
{{< /expand >}}
{{< expand "Upgrade Pool" >}}
This option only displays when the pool can be upgraded to use new [ZFS feature flags]({{< relref "/References/ZFSPrimer.md" >}}).
Before upgrading an existing pool, be aware of these caveats:

* Upgrading a pool is one-way. This means that if you change your mind. 
  You cannot go back to an earlier ZFS version or downgrade to an earlier version of the software that does not support those ZFS features.
* Upgrading can affect data. Before performing any operation that can affect the data on a storage disk, always back up all data first and verify the integrity of the backup. 
  While it is unlikely that the pool upgrade affects the data, it is always better to be safe than sorry.
* Upgrading a ZFS pool is optional. Do not upgrade the pool if the possibility of reverting to an earlier version of TrueNAS or repurposing the disks in another operating system that supports ZFS is desired. 
  It is not necessary to upgrade the pool unless the end user has a specific need for the newer ZFS Feature Flags. 
  If you upgrade a pool to the latest feature flags, you cannot import that pool into another operating system that does not yet support those feature flags.

The upgrade itself only takes a few seconds and is non-disruptive.
It is not necessary to stop any sharing services to upgrade the pool.
However, it is best to upgrade when the pool is not in heavy use.
The upgrade process suspends I/O for a short period, but is nearly instantaneous on a quiet pool.
{{< /expand >}} 
