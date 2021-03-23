---
title: "Managing Pools"
weight: 16
---

After creating a data storage pool, there are a variety of options to change the initial configuration of that pool.
Changing a pool can be disruptive, so make sure you are aware of existing resources on the system and consider backing up any stored data before changing the pool.
To find an existing pool, log in to the web interface and go to **Storage > Pools**.

![StoragePoolsList](/images/CORE/12.0/StoragePoolsList.png "Storage Pools List")

The current status and storage usage of each pool is shown.
To see more details about a pool, click the **v** symbol on the right side of the pool entry.
Click the <i class="fa fa-cog" aria-hidden="true" title="Settings"></i>&nbsp; (Pool Actions) for all pool management options.

{{< tabs "Pool Actions" >}}
{{< tab "Pool Options" >}}
Contains any additional high-level settings for the pool.

![StoragePoolsPoolOptions](/images/CORE/12.0/StoragePoolsPoolOptions.png "StoragePoolsPoolOptions")

*Auto TRIM* allows TrueNAS to periodically check the pool disks for storage blocks that can be reclaimed.
This can have a performance impact on the pool, so the option is disabled by default.
For more details about TRIM in ZFS, see the `autotrim` property description in [zpool.8](https://zfsonlinux.org/manpages/0.8.1/man8/zpool.8.html).
{{< /tab >}}
{{< tab "Export/Disconnect" >}}
Removes the pool from the system.
Can be used to prepare drives for transfer to a new system and import the pool or completely delete the pool and any data stored on it.
A dialog warns about the risks of disconnecting the pool and shows any system services that are affected by removing the pool.

![Storage Pools Export Example](/images/CORE/12.0/StoragePoolsExportExample.png "Storage Pools Export Example")

Because this is a destructive action, additional checkboxes must be set and the name of the pool manually entered when also deleting stored data.
Existing shares to this data can also be removed when the pool is disconnected.
{{< /tab >}}
{{< tab "Add Vdevs" >}}
This opens the **Pool Manager** to add more vdevs to the pool.

![Storage Pools Add Create Vdevs](/images/CORE/12.0/StoragePoolsAddCreateVdevs.png "Storage Pools Add Create Vdevs")

Changing the original encryption and data vdev configuration is not allowed.

A new data vdev is chosen by default.
To add different kinds of vdevs to the pool, click *ADD VDEV* and choose the type from the drop down.

When adding disks to increase the capacity of a pool, ZFS supports the addition of virtual devices, or vdevs, to an existing ZFS pool.
**After a vdev is created, more drives cannot be added to that vdev**, but a new vdev can be striped with another of the **same type** to increase the overall size of the pool.
To extend a pool, the vdev being added must be the same type as existing vdevs.

Some vdev extending examples:

* to extend a ZFS mirror, add the same number of drives. The result is a striped mirror. For example, if ten new drives are available, a mirror of two drives could be created initially, then extended by adding another mirror of two drives, and repeating three more times until all ten drives have been added.
* to extend a three-drive RAIDZ1, add another three drives. The resulting pool is a stripe of two RAIDZ1 vdevs, similar to RAID 50 on a hardware controller.
* to extend a four-drive RAIDZ2, add another four drives. The result is a stripe of RAIDZ2 vdevs, similar to RAID 60 on a hardware controller.
* adding a disk as a *hot spare* to the pool.
{{< /tab >}}
{{< tab "Scrub Pool" >}}
Initiate a data integrity check of the pool.
Any problems detected during the scrub are either automatically corrected or will generate an [alert]({{< relref "Alert.md" >}}) in the web interface.
By default, every pool is automatically checked on a reoccurring [scrub schedule]({{< relref "ScrubTasks.md" >}}).
{{< /tab >}}
{{< tab "Status" >}}
Opens the **Pool Status** screen to show the state of the last scrub and disks in the pool.

![Storage Pools Status](/images/CORE/12.0/StoragePoolsStatus.png "Storage Pools Status")

Additional options for [managing connected disks]({{< relref "DiskReplace.md" >}}) are available in this screen.
{{< /tab >}}
{{< tab "Expand Pool" >}}
Increases the size of the pool to match all available disk space.
This option is typically used when virtual disks are resized apart from TrueNAS.
{{< /tab >}}
{{< tab "Upgrade Pool" >}}
This option only appears when the pool can be upgraded to use new [ZFS feature flags]({{< relref "ZFSPrimer.md" >}}).
Before upgrading an existing pool, be aware of these caveats:

* Upgrading a pool is one-way, meaning that if you change your mind you cannot go back to an earlier ZFS version or downgrade to an earlier version of the software that does not support those ZFS features.
* Before performing any operation that can affect the data on a storage disk, always back up all data first and verify the integrity of the backup. While it is unlikely that the pool upgrade will affect the data, it is always better to be safe than sorry.
* Upgrading a ZFS pool is optional. Do not upgrade the pool if the possibility of reverting to an earlier version of TrueNAS or repurposing the disks in another operating system that supports ZFS is desired. It is not necessary to upgrade the pool unless the end user has a specific need for the newer ZFS Feature Flags. If a pool is upgraded to the latest feature flags, it will not be possible to import that pool into another operating system that does not yet support those feature flags.

The upgrade itself only takes a few seconds and is non-disruptive.
It is not necessary to stop any sharing services to upgrade the pool.
However, it is best to upgrade when the pool is not being heavily used.
The upgrade process will suspend I/O for a short period, but is nearly instantaneous on a quiet pool.
{{< /tab >}}
{{< /tabs >}}
