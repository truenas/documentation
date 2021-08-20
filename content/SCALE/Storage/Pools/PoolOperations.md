---
title: "Pool Operations"
geekdocCollapseSection: true
weight: 20
---

{{< toc >}}

TrueNAS allows users to manage pools using the *Pool Operations* button. 

![PoolOperationsMenuSCALE](/images/SCALE/PoolOperationsMenuSCALE.png "Pool Operations Menu")

## Pool Actions

{{< tabs "Pool Actions" >}}
{{< tab "Pool Options" >}}
![PoolOptionsSCALE](/images/SCALE/PoolOptionsSCALE.png "Pool Options")

*Pool Options* allows users to set/unset *Auto TRIM*.

With *Auto TRIM* active, TrueNAS periodically checks the pool disks for storage blocks it can reclaim. *Auto TRIM* can impact pool performance, so it's disabled by default. 

For more details about *TRIM* in ZFS, see the `autotrim` property description in [zpool.8](https://zfsonlinux.org/manpages/0.8.1/man8/zpool.8.html).
{{< /tab >}}

{{< tab "Export/Disconnect" >}}
![ExportPoolSCALE](/images/SCALE/ExportPoolSCALE.png "Pool Export")

The *Export/Disconnect* option disconnects the pool to transfer drives to a new system for importing or completely deletes the pool and any data stored on it. 

A dialog box will show any system services affected by exporting the pool.

Users can erase all data on the pool by checking the *Destroy data on this pool?* box. 

Clicking the *Delete configuration of shares that used this pool?* box will delete shares connected to the pool.
{{< /tab >}}

{{< tab "Add Vdevs" >}}
The *Add Vdevs* button opens up the Pool Manager so users can add Vdevs to the pool.

Users cannot change the original encryption or data Vdev configuration.

See the [Pools]({{< relref "PoolsSCALE.md" >}}) Vdev section for an overview on Vdevs. 

TrueNAS selects *Data VDev* by default. To add different Vdev types to the pool, select one from the *Add Vdev* drop-down.

When adding disks to increase the capacity of a pool, ZFS supports adding Vdevs (virtual devices) to an existing ZFS pool. After creating a Vdev, you cannot add more drives to that Vdev. However, you can stripe a new Vdev with another of the same type to increase the overall pool size To extend a pool, you must add a Vdev that is the same type as existing Vdevs.

Vdevs extending examples:

* To make a striped mirror, add the same number of drives to extend a ZFS mirror. For instance, if ten new drives are available, you could initially create a mirror of two drives, then extend the mirror by adding another mirror of two drives, repeating three more times until you've added all ten drives.
* To make a stripe of two RAIDZ1 Vdevs (similar to RAID 50 on a hardware controller), add another three drives to extend a three-drive RAIDZ1.
* To make a stripe of RAIDZ2 vdevs (similar to RAID 60 on a hardware controller), add another four drives to extend a four-drive RAIDZ2.
* Add a disk as a *Hot Spare* to the pool.
{{< /tab >}}

{{< tab "Scrub Pool" >}}
![ScrubPoolSCALE](/images/SCALE/ScrubPoolSCALE.png "Scrub Pool")

*Scrub Pool* initiates a pool data integrity check.

If TrueNAS detects any problems during the scrub, it will either correct them automatically or generate an [alert]({{< relref "Alert.md" >}}) in the web interface.

By default, TrueNAS automatically checks every pool is on a reoccurring [scrub schedule]({{< relref "ScrubTasks.md" >}}).
{{< /tab >}}

{{< tab "Status" >}}
![PoolStatusSCALE](/images/SCALE/PoolStatusSCALE.png "Pool Status")

*Status* displays the state of the last scrub and disks in the pool.

The *Pool Status* screen has additional [disk management]({{< relref "DisksSCALE.md" >}}) options.
{{< /tab >}}

{{< tab "Expand Pool" >}}
*Expand Pool* increases the pool's size to match all available disk space. A user would typically expand a pool when virtual disks are resized apart from TrueNAS.
{{< /tab >}}
{{< tab "Upgrade Pool" >}}
The *Upgrade Pool* option only appears when TrueNAS can upgrade the pool to use new [ZFS feature flags]({{< relref "ZFSPrimer.md" >}}).

Before upgrading an existing pool, be aware of these caveats:

* Upgrading a pool is one-way. You cannot regress to an earlier ZFS version or downgrade to an earlier software version that does not support those ZFS features.
* Before performing any operation that can affect the data on a storage disk, always back up all data first and verify the backup's integrity. Upgrading a pool will unlikely affect data, but we recommend backing up data for safety.
* Upgrading a ZFS pool is optional. Do not upgrade the pool if you may revert to an earlier TrueNAS version or repurpose the disks in another OS that supports ZFS. Upgrading a pool is unnecessary unless the end-user specifically needs the newer ZFS Feature Flags. If you upgrade a pool to the latest feature flags, you cannot import it into another OS that does not yet support them.

Upgrading a pool only takes a few seconds and is non-disruptive.
You do not need to stop any sharing services to upgrade a pool. However, we recommend upgrading when the pool is not seeing heavy use.
Upgrading will suspend I/O for a short period, but is nearly instantaneous on a quiet pool.
{{< /tab >}}
{{< /tabs >}}

## Encryption Actions

See the [SCALE Encryption]({{< relref "EncryptionSCALE.md" >}}) page for detailed encryption information.
