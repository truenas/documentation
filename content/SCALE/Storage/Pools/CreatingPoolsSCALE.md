---
title: "Pools"
geekdocCollapseSection: true
weight: 10
---

{{< toc >}}

TrueNAS uses ZFS data storage "pools" to efficiently store and protect data.

{{< expand "What's a pool?" "v" >}}
Storage pools are attached drives organized into virtual devices (vdevs).
ZFS and TrueNAS periodically review and “heal” when discovering a bad block in a pool.
Drives are arranged inside vdevs to provide varying amounts of redundancy and performance.
Combined, ZFS and vdevs combined create high-performance pools, pools that maximize data lifetime, and all situations in between.
{{< /expand >}}

## Review Storage Needs

We strongly recommend users review the available system resources and plan the storage use case before creating a storage pool.
* When storing critical information, allocating more drives to a pool increases redundancy.
* Maximizing total available storage at the expense of redundancy or performance entails allocating large-volume disks and configuring a pool for minimal redundancy.
* Maximizing pool performance entails installing and allocating high-speed SSD drives to a pool.

Determining your specific storage requirements is a critical step before creating a pool.

## Creating or Importing a Pool

{{< tabs "Creating or Importing a Pool" >}}
{{< tab "Creating a Pool" >}}
To create a new pool, go to **Storage** and click *Create Pool*.

![PoolManagerSCALE](/images/SCALE/PoolManagerSCALE.png "TrueNAS SCALE Pool Manager")

First, enter a pool *Name*.

{{< expand "Encryption?" "v" >}}
TrueNAS offers several encryption algorithms to maximize security.
However, encryption also complicates data is retrieval and risks permanent data loss!
Refer to the [Encryption article]({{< relref "EncryptionSCALE.md" >}}) for more details and decide if encryption is necessary for your use case before setting any *Encryption* options.
{{< /expand >}}

Next, configure the virtual devices (vdevs) that make up the pool.

### Suggested Layout

Clicking *Suggest Layout* allows TrueNAS to review all available disks and populate the primary *Data VDevs* with identically sized drives in a configuration balanced between storage capacity and data redundancy.
Click *Reset Layout* to clear the suggestion.

To manually configure the pool, add vdevs according to your use case.
Check the *Disk* boxes and click the <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp; to move the disks into a vdev.

### Vdev Types

Pools offer several vdev types. Vdevs store data or enable unique features for the pool.

To add a vdev type during pool creation, click *Add Vdev* and select the type.
Select disks from *Available Disks* and use the <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp; (right arrow) next to the new *VDev* to add it to that section.

#### Data Type

*Data* is the standard vdev for primary storage operations. Each storage pool requires at least one *Data* vdev.
*Data* vdev configuration typically affects how users can configure other types of vdevs.

{{< expand "Duplicating a Data vdev" "v" >}}
Users can duplicate a **Data VDev** by clicking *Repeat*.
When the system has more available equal-sized disks, the *Repeat* button creates another vdev with an identical configuration called a *Mirror*.

![StoragePoolsAddCreateVdevRepeat](/images/CORE/12.0/StoragePoolsAddCreateVdevRepeat.png "Duplicating a Data VDev")

When even more same-size disks are available, users can create multiple copies of the original vdev.

{{< hint warning >}}
We do not recommend having multiple data vdevs with different numbers of disks in each vdev. Doing so complicates and limits pool capabilities.
{{< /hint >}}
{{< /expand >}}

#### Additional Types

* *Cache*: [ZFS L2ARC]({{< relref "L2ARC.md" >}}) read-cache used with fast devices to accelerate read operations. Users can add or remove Cache VDevs after creating the pool.
* *Log*: [ZFS LOG]({{< relref "SLOG.md" >}}) device that improves synchronous write speeds. Users can add or remove Log VDevs after creating the pool.
* *Hot Spare*: Drives reserved for inserting into *Data* vdevs when an active drive fails.
The system uses hot spares as temporary replacements for failed drives to prevent larger pool and data loss scenarios.
When a user replaces a failed drive with a new one, the hot spare reverts to an inactive state and becomes available again as a hot spare.
If a user detaches the failed drive from the pool without adding a new one, the system promotes the temporary hot spare to a full *Data* vdev member.
* *Metadata*: Special Allocation class used to create Fusion Pools for increased metadata and small block I/O performance.
* *Dedup*: Stores [ZFS de-duplication]({{< relref "ZFSDeduplication.md" >}}).
Requires allocating X GiB for every X TiB of general storage.
Example: 1 GiB of *Dedup* vdev capacity for every 1 TiB of *Data* vdev availability.

### Vdev Layouts

Disks added to a vdev arrange in different layouts, according to the specific pool use case.

The **Pool Manager** suggests a vdev layout from the number of disks added to the vdev.
For example, if you add two disks, TrueNAS automatically configures the vdev as a *Mirror*. The total available storage will be the size of one added disk while the other disk provides redundancy.

![StoragePoolsAddCreateMirror](/images/CORE/12.0/StoragePoolsAddCreateMirror.png "Mirrored Vdev")

To change the vdev layout, open the *Data VDevs* list and select the desired layout.

{{< expand "Can I create vdevs with different layouts in one pool?" "v" >}}
TrueNAS SCALE does not support adding multiple vdevs with different layouts to a pool.
Create a new pool when a different vdev layout is required.
For example, *pool1* has a data vdev in a *mirror* layout, so create *pool2* for any *raid-z* vdevs.
{{< /expand >}}

* *Stripe*: Each disk stores data. A *Stripe* requires at least one disk and has no data redundancy.
* *Mirror*: Data is identical in each disk. A *Mirror* requires at least two disks, provides the most redundancy, and has the least capacity.
* *RAIDZ1*: One disk maintains data while all other disks store data. *RAIDZ1* requires at least three disks.
* *RAIDZ2*: Two disks maintain data while all other disks store data. *RAIDZ2* requires at least four disks.
* *RAIDZ3*: Three disks maintain data while all other disks store data. *RAIDZ3* requires at least five disks.

{{< hint danger >}}
Never use a *Stripe* to store critical data! A single disk failure results in losing all data in the vdev.
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
Shutting down the original system prevents an *“in use by another machine”* error during the TrueNAS import.
{{< /expand >}}

To import a pool, go to **Storage** and click *Import*.

TrueNAS detects any pools that are present but unconnected.

Select a pool from the *Pool* drop-down and click *Next*.

![ImportPool1SCALE](/images/SCALE/ImportPool1SCALE.png "Import Pool Selection")

Review the Pool Import Summary and click *Import*.

![ImportPool2SCALE](/images/SCALE/ImportPool2SCALE.png "Import Pool Selection")

{{< expand "Can I import GELI-encrypted pools?" "v" >}}
Since GELI encryption is specific to FreeBSD, TrueNAS SCALE cannot import GELI-encrypted pools. 
See the [Migrating GELI-encrypted Pools to SCALE](https://www.truenas.com/docs/scale/gettingstarted/installingscale/#migrating-geli-encrypted-pools-to-scale) section in the [Installing SCALE]({{< relref "InstallingSCALE.md" >}}) article.
{{< /expand >}}

{{< /tab >}}
{{< /tabs >}}
