---
title: "Creating Pools"
geekdocCollapseSection: true
weight: 10
---

{{< toc >}}

TrueNAS uses ZFS data storage "pools" to efficiently store and protect data.

{{< expand "What's a pool?" "v" >}}
Storage pools are attached drives organized into virtual devices (vdevs).
ZFS and TrueNAS periodically reviews and “heals” whenever a bad block is discovered in a pool.
Drives are arranged inside vdevs to provide varying amounts of redundancy and performance.
This allows for high performance pools, pools that maximize data lifetime, and all situations in between
{{< /expand >}}

## Review Storage Needs

We strongly recommend users review the available system resources and plan the storage use case before creating a storage pool.
* When storing critical information, more drives allocated to the pool increases redundancy.
* Maximizing total available storage at the expense of redundancy or performance means allocating large volume disks and configuring the pool for minimal redundancy.
* Maximizing pool performance means installing and allocating high-speed SSD drives to the pool.

Determining your specific storage requirements is a critical step before creating a pool.

## Creating or Importing a Pool

{{< tabs "Creating or Importing a Pool" >}}
{{< tab "Creating a Pool" >}}
To create a new pool, go to **Storage** and click *Create Pool*.

![PoolManagerSCALE](/images/SCALE/PoolManagerSCALE.png "TrueNAS SCALE Pool Manager")

First, enter a pool *Name*.

{{< expand "Encryption?" "v" >}}
Encryption algorithms are available as an option for maximizing data security.
This also complicates how data is retrieved and risks permanent data loss!
Refer to the [Encryption article]({{< relref "StorageEncryption.md" >}}) for more details and decide if encryption is necessary for your use case before setting any *Encryption* options.
{{< /expand >}}

Next, configure the virtual devices (vdevs) that make up the pool.

### Suggested Layout

Clicking *Suggest Layout* allows TrueNAS to review all available disks and populate the primary *Data VDevs* with identically sized drives in a balanced configuration between storage capacity and data redundancy.
Click *Reset Layout* to clear the suggestion.

To manually configure the pool, add vdevs according to your use case.
Set the **Disk** boxes and click the <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp; to move the disks into a vdev.

### Vdev Types

Pools have many different kinds of vdevs available.
Vdevs store data or enable unique features for the pool.

To add a different vdev type during pool creation, click *ADD VDEV* and select the type.
Select disks from `Available Disks` and use the <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp; (right arrow) next to the new **VDev** to add it to that section.

#### Data Type

*Data* is the standard vdev for primary storage operations. Each storage pool requires at least one *Data* vdev.
*Data* vdev configuration typically affects how the other kinds of vdevs are configured.

{{< expand "Duplicating a Data vdev" "v" >}}
A **Data VDev** with disks is duplicated by clicking *REPEAT*.
When more disks are available and equal in size, the *REPEAT* button creates another vdev with an identical configuration called a "mirror" of vdevs.

![StoragePoolsAddCreateVdevRepeat](/images/CORE/12.0/StoragePoolsAddCreateVdevRepeat.png "Duplicating a Data VDev")

When even more same-size disks are available, multiple copies of the original vdev can be created.
{{< hint warning >}}
Don't have multiple data vdevs with different numbers of disks in each vdev.
This complicates and limits the pool capabilities.
{{< /hint >}}
{{< /expand >}}

#### Additional Types

* *Cache*: [ZFS L2ARC]({{< relref "L2ARC.md" >}}) read-cache used with fast devices to accelerate read operations. This can be added or removed after creating the pool.
* *Log*: [ZFS LOG]({{< relref "SLOG.md" >}}) device that improves synchronous write speeds. This can be added or removed after creating the pool.
* *Hot Spare*: Drives reserved for inserting into *Data* vdevs when an active drive fails.
Hot spares are temporarily used as replacements for failed drives to prevent larger pool and data loss scenarios.
When a failed drive is replaced with a new drive, the hot spare reverts to an inactive state and is available again as a hot spare.
When the failed drive is only detached from the pool, the temporary hot spare is promoted to a full *Data* vdev member and is no longer available as a hot spare. |
* *Metadata*: Special Allocation class used to create [Fusion Pools]({{< relref "FusionPool.md" >}}) for increased metadata and small block I/O performance. |
* *Dedup*: Stores [ZFS de-duplication]({{< relref "ZFSDeduplication.md" >}}).
Requires allocating X GiB for every X TiB of general storage.
Example: 1 GiB of *Dedup* vdev capacity for every 1 TiB of *Data* vdev availability. |

### Vdev Layouts

Disks added to a vdev arrange in different layouts, according to the specific pool use case.

The **Pool Manager** suggests a vdev layout from the number of disks added to the vdev.
For example, if two disks are added, TrueNAS automatically configures the vdev as a *Mirror*, where the total available storage is the size of one added disk while the other disk provides redundancy.

![StoragePoolsAddCreateMirror](/images/CORE/12.0/StoragePoolsAddCreateMirror.png "Mirrored Vdev")

To change the vdev layout, open the *Data VDevs* list and select the desired layout.

{{< expand "Can I create vdevs with different layouts in one pool?" "v" >}}
Adding multiple vdevs with different layouts to a pool is not supported.
Create a new pool when a different vdev layout is required.
For example, *pool1* has a data vdev in a *mirror* layout, so create *pool2* for any *raid-z* vdevs.
{{< /expand >}}

* *Stripe*: Each disk is used to store data. Requires at least one disk and has no data redundancy.
{{< hint danger >}}
Never use a *Stripe* to store critical data! A single disk failure results in losing all data in the vdev.
{{< /hint >}}
* *Mirror*: Data is identical in each disk. Requires at least two disks, has the most redundancy, and the least capacity.
* *RAIDZ1*: One disk maintains data and all other disks store data. Requires at least three disks. |
* *RAIDZ2*: Two disks maintain data and all other disks store data. Requires at least four disks. |
* *RAIDZ3*: Three disks maintain data and all other disks store data. Requires at least five disks. |
{{< /tab >}}

{{< tab "Importing a Pool" >}}
{{< hint info >}}
This procedure only applies to disks with a ZFS storage pool.
To import disks with different file systems, see [Import Disk]({{< relref "ImportDisk.md" >}}).
{{< /hint >}}

ZFS pool importing works for pools that were exported or disconnected from the current system, created on another system, and pools to reconnect after reinstalling or upgrading the TrueNAS system.
To import a pool, go to **Storage > Pools > ADD**.
{{< /tab >}}
{{< /tabs >}}
