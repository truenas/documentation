---
title: "Pool Creation"
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

It is strongly recommended to review the available system resources and plan the storage use case before creating a storage pool.
* When storing critical information, more drives allocated to the pool increases redundancy.
* Maximizing total available storage at the expense of redundancy or performance means allocating large volume disks and configuring the pool for minimal redundancy.
* Maximizing pool performance means installing and allocating high-speed SSD drives to the pool.

Determining your specific storage requirements is a critical step before creating a pool.

## Creating a Pool

To create a new pool, go to **Storage > Pools** and click *ADD*.
Select *Create new pool* and click *CREATE POOL* to open the **Pool Manager**.

![StoragePoolsAddCreateManager](/images/CORE/12.0/StoragePoolsAddCreateManager.png "TrueNAS Pool Manager")

To begin, enter a pool *Name*.

{{< expand "Encryption?" "v" >}}
Encryption algorithms are available as an option for maximizing data security.
This also complicates how data is retrieved and risks permanent data loss!
Refer to the [Encryption article](/CORE/Storage/Pools/Encryption/) for more details and decide if encryption is necessary for your use case before setting any *Encryption* options.
{{< /expand >}}

Next, configure the virtual devices (vdevs) that make up the pool.

### Suggested Layout

Clicking *SUGGEST LAYOUT* allows TrueNAS to review all available disks and populate the primary *Data* vdev with identically sized drives in a balanced configuration between storage capacity and data redundancy.
To clear the suggestion, click *RESET LAYOUT*.

To manually configure the pool, add vdevs according to your use case.
Set the **Disk** boxes and click the <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> to move the disks into a vdev.

### Vdev Types

Pools have many different kinds of vdevs available.
These store data or enable unique features for the pool:

{{< tabs "Vdev Types" >}}
{{< tab "Data" >}}
Standard vdev for primary storage operations.
Each storage pool requires at least one *Data* vdev.
*Data* vdev configuration typically affects how the other kinds of vdevs are configured.
{{< /tab >}}
{{< tab "Cache" >}}
[ZFS L2ARC](/references/l2arc/) read-cache used with fast devices to accelerate read operations.
This can be added or removed after creating the pool.
{{< /tab >}}
{{< tab "Log" >}}
[ZFS LOG](/references/slog/) device that improves synchronous write speeds.
This can be added or removed after creating the pool.
{{< /tab >}}
{{< tab "Hot Spare" >}}
Drives reserved for inserting into *Data* vdevs when an active drive fails.
Hot spares are temporarily used as replacements for failed drives to prevent larger pool and data loss scenarios.

When a failed drive is replaced with a new drive, the hot spare reverts to an inactive state and is available again as a hot spare.

When the failed drive is only detached from the pool, the temporary hot spare is promoted to a full *Data* vdev member and is no longer available as a hot spare.
{{< /tab >}}
{{< tab "Metadata" >}}
Special Allocation class used to create [Fusion Pools](/core/storage/pools/fusionpool/) for increased metadata and small block I/O performance.
{{< /tab >}}
{{< tab "Dedup" >}}
Stores [ZFS de-duplication](/references/zfsdeduplication/) tables.
Requires allocating X GiB for every X TiB of general storage.
Example: 1 GiB of *Dedup* vdev capacity for every 1 TiB of *Data* vdev availability
{{< /tab >}}
{{< /tabs >}}

To add a different vdev type during pool creation, click *ADD VDEV* and select the type.
Select disks from `Available Disks` and use the <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> (right arrow) next to the new **VDev** to add it to that section.

### Vdev Layout

By default, a single 

The pool manager suggests a vdev layout based on the number of disks added to the vdev.
For example, if two disks are added, TrueNAS automatically configures the vdev as a *mirror*, where the total available storage is the size of one added disk while the other disk provides redundancy.
To change the vdev layout, open the *Data VDevs* list and select the desired layout:

* *Stripe*: each disk is used to store data. Requires at least one disk and has no data redundancy.
* *Mirror*: data is identical in each disk. Requires at least two disks and has the most redundancy.
* *RAIDZ1*: one disk is used to maintain data and all other disks are used to store data. Requires at least three disks.
* *RAIDZ2*: two disks are used to maintain data and all other disks are used to store data. Requires at least four disks. 
* *RAIDZ3*: three disks are used to maintain data and all other disks are used to store data. Requires at least five disks.

**We never recommend using a Stripe to store critical data, since a single disk failure could result in losing all data in that vdev.**

To manually add disks in a vdev, select the disks to add and click <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.
To see more details about a disk, click the `>` in a disk's row.

Click *SUGGEST LAYOUT* to add all the same-sized disks in an ideal configuration for balanced data redundancy and performance.

A vdev layout can be duplicated by clicking *REPEAT*.
If more disks are available and equal in size, the *REPEAT* button creates another vdev with an identical configuration called a "mirror" of vdevs.
Otherwise, another vdev can be added by clicking *ADD DATA* and adding disks manually.

{{< hint warning >}}
We don't recommend having multiple data vdevs with different numbers of disks.
Adding multiple vdevs with different layouts to a pool is not supported, so you'll have to create a new pool for a different layout.
For example, *Pool1* has a data vdev in a *mirror* layout, so create *pool2* for any *raid-z* vdevs.

![Storage Pools Add Create Mirror](/images/CORE/12.0/StoragePoolsAddCreateMirror.png "Storage Pools Add Create Mirror")
<br>
{{< /hint >}}
