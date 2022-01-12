---
title: "Pools"
geekdocCollapseSection: true
weight: 10
---

{{< toc >}}

TrueNAS uses ZFS data storage "pools" to efficiently store and protect data.

{{< expand "What's a pool?" "v" >}}
Storage pools are attached drives organized into virtual devices (*vdevs*).
ZFS and TrueNAS periodically review and *heal* when discovering a bad block in a pool.
Drives are arranged inside vdevs to provide varying amounts of redundancy and performance.
Combined, ZFS and vdevs combined create high-performance pools, pools that maximize data lifetime, and all situations in between.
{{< /expand >}}

## Review Storage Needs

We strongly recommend users review the available system resources and plan the storage use case before creating a storage pool.
* Allocating more drives to a pool increases redundancy when storing critical information.
* Maximizing total available storage at the expense of redundancy or performance entails allocating large-volume disks and configuring a pool for minimal redundancy.
* Maximizing pool performance entails installing and allocating high-speed SSD drives to a pool.

Determining your specific storage requirements is a critical step before creating a pool.

## Creating or Importing a Pool

{{< tabs "Creating or Importing a Pool" >}}
{{< tab "Creating a Pool" >}}
{{< expand "Tutorial" "v" >}}
{{< embed-video name="scaleangelfishpoolcreate" >}}
{{< /expand >}}

To create a new pool, go to **Storage** and click **Create Pool**.

![PoolManagerSCALE](/images/SCALE/PoolManagerSCALE.png "TrueNAS SCALE Pool Manager")

First, enter a pool name.

{{< expand "Encryption?" "v" >}}
TrueNAS offers several encryption algorithms to maximize security.
However, encryption also complicates data retrieval and risks permanent data loss!
Refer to the [Encryption article]({{< relref "EncryptionSCALE.md" >}}) for more details and decide if encryption is necessary for your use case before setting any **Encryption** option.
{{< /expand >}}

Next, configure the virtual devices (vdevs) that make up the pool.

### Suggested Layout

Clicking **Suggest Layout** allows TrueNAS to review all available disks and populate the primary **Data VDevs** with identically sized drives in a configuration balanced between storage capacity and data redundancy.
Click **Reset Layout** to clear the suggestion.

To manually configure the pool, add vdevs according to your use case.
Check the **Disk** checkboxes and click the <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp; to move the disks into a vdev.

{{< hint warning >}}
**Warning:** USB-connected disks may report their serial numbers inaccurately, making them indistinguishable from each other.
{{< /hint >}}

### Vdev Types

Pools offer several vdev types. Vdevs store data or enable unique features for the pool.

To add a vdev type during pool creation, click **Add Vdev**() and select the type.
Select disks from **Available Disks** and use the <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp; (right arrow) next to the new VDev to add it to that section.

#### Data Type

Data is the standard vdev for primary storage operations. Each storage pool requires at least one Data vdev.
**Data** vdev configuration typically affects how users can configure other types of vdevs.

{{< expand "Duplicating a Data vdev" "v" >}}
Users can duplicate a **Data VDev** by clicking **Repeat**.
When the system has more available equal-sized disks, the **Repeat** button creates another vdev with an identical configuration called a **Mirror**.

![PoolRepeatVdevSCALE](/images/SCALE/PoolRepeatVdevSCALE.png "Duplicating a Data VDev")

When even more same-size disks are available, users can create multiple copies of the original vdev.

{{< hint warning >}}
We do not recommend having multiple data vdevs with different numbers of disks in each vdev. Doing so complicates and limits pool capabilities.
{{< /hint >}}
{{< /expand >}}

#### Additional Types

* **Cache**: [ZFS L2ARC]({{< relref "L2ARC.md" >}}) read-cache used with fast devices to accelerate read operations. Users can add or remove Cache VDevs after creating the pool.
* **Log**: [ZFS LOG]({{< relref "SLOG.md" >}}) device that improves synchronous write speeds. Users can add or remove Log VDevs after creating the pool.
* **Hot Spare**: Drives reserved for inserting into **Data** vdevs when an active drive fails.
The system uses hot spares as temporary replacements for failed drives to prevent larger pool and data loss scenarios.
When a user replaces a failed drive with a new one, the hot spare reverts to an inactive state and becomes available again as a hot spare.
If a user detaches the failed drive from the pool without adding a new one, the system promotes the temporary hot spare to a full Data vdev member.
* **Metadata**: Special allocation class used to create Fusion Pools for increased metadata and small block I/O performance.
* **Dedup**: Stores [ZFS de-duplication]({{< relref "ZFSDeduplication.md" >}}).
Requires allocating X GiB for every X TiB of general storage.
Example: 1 GiB of *Dedup* vdev capacity for every 1 TiB of *Data* vdev availability.

### Vdev Layouts

Disks added to a vdev arrange in different layouts, according to the specific pool use case.

The **Pool Manager** suggests a vdev layout from the number of disks added to the vdev.
For example, if you add two disks, TrueNAS automatically configures the vdev as a Mirror. The total available storage is the size of one added disk while the other disk provides redundancy.

![PoolCreateMirrorSCALE](/images/SCALE/PoolCreateMirrorSCALE.png "Creating a Mirror")

To change the vdev layout, open the **Data VDevs** list and select the desired layout.

{{< expand "Can I create vdevs with different layouts in one pool?" "v" >}}
TrueNAS SCALE does not support adding multiple vdevs with different layouts to a pool.
Create a new pool when a different vdev layout is required.
For example, *pool1* has a data vdev in a *mirror* layout, so create *pool2* for any *raid-z* vdevs.
{{< /expand >}}

* **Stripe**: Each disk stores data. A Stripe requires at least one disk and has no data redundancy.
* **Mirror**: Data is identical in each disk. A Mirror requires at least two disks, provides the most redundancy, and has the least capacity.
* **RAIDZ1**: Uses one disk for parity while all other disks store data. RAIDZ1 requires at least three disks.
* **RAIDZ2**: Uses two disks for parity while all other disks store data. RAIDZ2 requires at least four disks.
* **RAIDZ3**: Uses three disks for parity while all other disks store data. RAIDZ3 requires at least five disks.

{{< hint danger >}}
Never use **Stripe** to store critical data! A single disk failure results in losing all data in the vdev.
{{< /hint >}}
{{< /tab >}}

{{< tab "Importing a Pool" >}}
{{< hint info >}}
The import procedure only applies to disks with a ZFS storage pool.
To import disks with different file systems, see the SCALE Disks article.
{{< /hint >}}

ZFS pool importing works for pools that were exported or disconnected from the current system, created on another system, and pools to reconnect after reinstalling or upgrading the TrueNAS system.

{{< expand "Do I need to do anything different with disks installed on a different system?" "v" >}}
When physically installing ZFS pool disks from another system, use the `zpool export poolname` command in the command line or a web interface equivalent to export the pool on that system.
Shut that system down and move the drives to the TrueNAS system.
Shutting down the original system prevents an **in use by another machine** error during the TrueNAS import.
{{< /expand >}}

To import a pool, go to **Storage** and click **Import**.

TrueNAS detects any pools that are present but unconnected.

Select a pool from the **Pool** drop-down and click **Next**.

![ImportPool1SCALE](/images/SCALE/ImportPool1SCALE.png "Import Pool Selection")

Review the Pool Import Summary and click **Import**.

![ImportPool2SCALE](/images/SCALE/ImportPool2SCALE.png "Import Pool Selection")

{{< expand "Can I import GELI-encrypted pools?" "v" >}}
Since GELI encryption is specific to FreeBSD, TrueNAS SCALE cannot import GELI-encrypted pools. 
See the **Migrating GELI-encrypted Pools to SCALE** section in the [Installing SCALE]({{< relref "InstallingSCALE.md" >}}) article.
{{< /expand >}}
{{< /tab >}}
{{< /tabs >}}

## Pool Operations

Use the **Pool Operations** button to manage a pool.

![PoolOperationsMenuSCALE](/images/SCALE/PoolOperationsMenuSCALE.png "Pool Operations Menu")

### Pool Actions

{{< tabs "Pool Actions" >}}
{{< tab "Pool Options" >}}
![PoolOptionsSCALE](/images/SCALE/PoolOptionsSCALE.png "Pool Options")

**Pool Options** allows users to set/unset **Auto TRIM**.

With **Auto TRIM** selected and active, TrueNAS periodically checks the pool disks for storage blocks it can reclaim. Auto TRIM can impact pool performance, so it's disabled by default. 

For more details about *TRIM* in ZFS, see the `autotrim` property description in [zpool.8](https://zfsonlinux.org/manpages/0.8.1/man8/zpool.8.html).
{{< /tab >}}

{{< tab "Export/Disconnect" >}}
![ExportPoolSCALE](/images/SCALE/ExportPoolSCALE.png "Pool Export")

The **Export/Disconnect** option disconnects the pool to transfer drives to a new system for importing or completely deletes the pool and any data stored on it. 

A dialog box displays any system services affected by exporting the pool.

Users can erase all data on the pool by checking the **Destroy data on this pool?** box. 

Clicking the **Delete configuration of shares that used this pool?** box deletes shares connected to the pool.
{{< /tab >}}

{{< tab "Add Vdevs" >}}
The **Add Vdevs** button opens the **Pool Manager** so users can add Vdevs to the pool.

Users cannot change the original encryption or data Vdev configuration.

TrueNAS selects **Data VDev** by default. To add different Vdev types to the pool, select one from the **Add Vdev** drop-down.

When adding disks to increase the capacity of a pool, ZFS supports adding Vdevs (virtual devices) to an existing ZFS pool. After creating a Vdev, you cannot add more drives to that Vdev. However, you can stripe a new Vdev with another of the same type to increase the overall pool size To extend a pool, you must add a Vdev that is the same type as existing Vdevs.

Vdevs extending examples:

* To make a striped mirror, add the same number of drives to extend a ZFS mirror. For instance, if ten new drives are available, you could initially create a mirror of two drives, then extend the mirror by adding another mirror of two drives, repeating three more times until you've added all ten drives.
* To make a stripe of two RAIDZ1 Vdevs (similar to RAID 50 on a hardware controller), add another three drives to extend a three-drive RAIDZ1.
* To make a stripe of RAIDZ2 vdevs (similar to RAID 60 on a hardware controller), add another four drives to extend a four-drive RAIDZ2.
* Add a disk as a Hot Spare to the pool.
{{< /tab >}}

{{< tab "Scrub Pool" >}}
![ScrubPoolSCALE](/images/SCALE/ScrubPoolSCALE.png "Scrub Pool")

**Scrub Pool** initiates a pool data integrity check.

If TrueNAS detects any problems during the scrub, it either corrects them automatically or generates an [alert]({{< relref "Alert.md" >}}) in the web interface.

By default, TrueNAS automatically checks every pool is on a reoccurring [scrub schedule]({{< relref "ScrubTasks.md" >}}).
{{< /tab >}}

{{< tab "Status" >}}
![PoolStatusSCALE](/images/SCALE/PoolStatusSCALE.png "Pool Status")

**Status** displays the state of the last scrub and disks in the pool.

The **Pool Status** screen has additional [disk management]({{< relref "DisksSCALE.md" >}}) options.
{{< /tab >}}

{{< tab "Expand Pool" >}}
**Expand Pool** increases the pool size to match all available disk space. A user typically expands a pool when virtual disks are resized apart from TrueNAS.
{{< /tab >}}
{{< tab "Upgrade Pool" >}}
The **Upgrade Pool** option only appears when TrueNAS can upgrade the pool to use new [ZFS feature flags]({{< relref "ZFSPrimer.md" >}}).

Before upgrading an existing pool, be aware of these caveats:

* Upgrading a pool is one-way. You cannot regress to an earlier ZFS version or downgrade to an earlier software version that does not support those ZFS features.
* Upgrading a pool unlikely affects data, but we recommend backing up data for safety. Before performing any operation that can affect the data on a storage disk, always back up all data first and verify the backup's integrity. 
* Upgrading a ZFS pool is optional. Do not upgrade the pool if you may revert to an earlier TrueNAS version or repurpose the disks in another OS that supports ZFS. Upgrading a pool is unnecessary unless the end-user specifically needs the newer ZFS Feature Flags. If you upgrade a pool to the latest feature flags, you cannot import it into another OS that does not yet support them.

Upgrading a pool only takes a few seconds and is non-disruptive.
You do not need to stop any sharing services to upgrade a pool. However, we recommend upgrading when the pool is not seeing heavy use.
Upgrading suspends I/O for a short period, but is nearly instantaneous on a quiet pool.
{{< /tab >}}
{{< /tabs >}}

## Encryption Actions

See the [SCALE Encryption]({{< relref "EncryptionSCALE.md" >}}) page for detailed encryption information.
