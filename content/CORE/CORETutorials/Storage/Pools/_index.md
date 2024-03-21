---
title: "Pools"
description: "Provides instructions on creating and pool, and lists other pool and storage articles in TrueNAS CORE."
geekdocCollapseSection: true
weight: 10
related: false
aliases:
 - /core/storage/pools/poolcreate/
 - /core/coretutorials/storage/pools/poolcreate/
tags:
- pools
---


TrueNAS uses ZFS data storage *pools* to efficiently store and protect data. 

{{< expand "What is a pool?" "v" >}}
Storage *pools* are attached drives organized into virtual devices (vdevs).
Drives are arranged inside vdevs to provide varying amounts of redundancy and performance.
This allows for high performance pools, pools that maximize data lifetime, and all situations in between.

ZFS and TrueNAS periodically reviews and heals whenever a bad block is discovered in a pool.
{{< /expand >}}

## Review Storage Needs
We strongly recommend that you review the available system resources and plan the storage use case before creating a storage pool.
Review when:
* Storing critical information. More drives allocated to the pool increases redundancy.
* Maximizing total available storage at the expense of redundancy or performance means allocating large volume disks and configuring the pool for minimal redundancy.
* Maximizing pool performance means installing and allocating high-speed SSD drives to the pool.

Determining your specific storage requirements is a critical step before creating a pool.

You can use the [ZFS Capacity Calculator]({{< relref "/References/ZFSCapacityCalculator.md" >}}) and [ZFS Capacity Graph]({{< relref "/References/ZFSCapacityGraph.md" >}}) to compare configuration options.

## Creating a Pool

To create a new pool, go to **Storage > Pools** and click **ADD**. 
The **Create or Import Pool** screen of the pool creation screens opens.
Select **Create new pool** and click **CREATE POOL** to open the **Pool Manager**.

{{< trueimage src="/images/CORE/Storage/CreatePoolScreen.png" alt="Create Pool Manager" id="Create Pool Manager" >}}

To begin, enter a name for the pool in **Name**. 
Do not include spaces in the pool name as this could cause problems with other functions.

{{< expand "Encryption?" "v" >}}
Encryption algorithms are available as an option for maximizing data security, however, this also complicates how data is retrieved and risks permanent data loss!
Refer to the [Encryption article]({{< relref "/CORE/CORETutorials/Storage/Pools/StorageEncryption.md" >}}) for more details and decide if encryption is necessary for your use case before setting any encryption options.
{{< /expand >}}

Next, configure the virtual devices (vdevs) that make up the pool.

### Using Suggest Layout

Clicking **SUGGEST LAYOUT** allows TrueNAS to review all available disks and populate the primary data vdevs with identically sized drives in a balanced configuration between storage capacity and data redundancy.
To clear the suggestion, click **RESET LAYOUT**.

To manually configure the pool, add vdevs according to your use case.
Select the **Disk** checkboxes and click the <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp; to move the disks into the **Data VDevs** list.

{{< hint type=important title="USB-Connected Disk Warning">}}
USB-connected disks might report their serial numbers inaccurately, making them indistinguishable from each other.
{{< /hint >}}

### Using Vdev Types

Pools have many different kinds of vdevs available.
These store data or enable unique features for the pool:

{{< expand "Data" >}}
Standard vdev for primary storage operations.
Each storage pool requires at least one data vdev.
**Data** vdev configuration typically affects how the other kinds of vdevs are configured.

#### Duplicating a Data VDev
A **Data VDev** with disks is duplicated by clicking **REPEAT**.
When more disks are available and equal in size, the **REPEAT** button creates another vdev with an identical configuration called a *mirror* of vdevs.

{{< trueimage src="/images/CORE/Storage/StoragePoolsAddCreateVdevRepeat.png" alt="Duplicating a Data VDev" id="Duplicating a Data VDev" >}}

When even more same-size disks are available, you can create multiple copies of the original vdev.
{{< hint type=important >}}
Do not have multiple data vdevs with different numbers of disks in each vdev as this complicates and limits the pool capabilities.
{{< /hint >}}
{{< /expand >}}
{{< expand "Cache" >}}
[ZFS L2ARC]({{< relref "/References/L2ARC.md" >}}) read-cache is used with fast devices to accelerate read operations.
You can add or remove this after creating the pool.
{{< /expand >}}
{{< expand "Log" >}}
[ZFS LOG]({{< relref "/References/SLOG.md" >}}) is a device that improves synchronous write speeds.
You can add or remove this after creating the pool.
{{< /expand >}}
{{< expand "Hot Spare" >}}
**Hot Spare** sets up drives as reserved to insert into **Data** vdevs when an active drive fails.
Hot spares are temporarily used as replacements for failed drives to prevent larger pool and data loss scenarios.

When a failed drive is replaced with a new drive, the hot spare reverts to an inactive state and is available again as a hot spare.

When the failed drive is only detached from the pool, the temporary hot spare is promoted to a full data vdev member and is no longer available as a hot spare.
{{< /expand >}}
{{< expand "Metadata" >}}
Metadata vdevs are a special allocation class used to create [Fusion Pools]({{< relref "/CORE/CORETutorials/Storage/Pools/FusionPool.md" >}}) for increased metadata and small block I/O performance.
{{< /expand >}}
{{< expand "Dedup" >}}
**Dedup** vdevs store [ZFS de-duplication]({{< relref "/References/ZFSDeduplication.md" >}}).
Requires allocating *X* GiB for every *X* TiB of general storage.
For example, 1 GiB of dedup vdev capacity for every 1 TiB of data vdev availability.
{{< /expand >}}

To add a different vdev type during pool creation, click **ADD VDEV** and select the type.
Select disks from **Available Disks** and use the <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp; (right arrow) next to the new **VDev** to add it to that section.

### Vdev Layout

Disks added to a vdev arrange in different layouts, according to the specific pool use case.

{{< expand "Can I create vdevs with different layouts in one pool?" "v" >}}
Adding multiple vdevs with different layouts to a pool is not supported.
Create a new pool when a different vdev layout is required.
For example, *pool1* has a data vdev in a *mirror* layout, so create *pool2* for any *raid-z* vdevs.
{{< /expand >}}
{{< expand "Stripe" >}}
Each disk is used to store data.
Requires at least one disk and has no data redundancy.
{{< hint type=warning >}}
Never use a stripe type vdev to store critical data!
A single disk failure results in losing all data in the vdev.
{{< /hint >}}
{{< /expand >}}
{{< expand "Mirror" >}}
Data is identical in each disk.
Requires at least two disks, has the most redundancy, and the least capacity.
{{< /expand >}}
{{< expand "RAIDZ1" >}}
Uses one disk for parity while all other disks store data.
Requires at least three disks.
{{< /expand >}}
{{< expand "RAIDZ2" >}}
Uses two disks for parity while all other disks store data.
Requires at least four disks.
{{< /expand >}}
{{< expand "RAIDZ3" >}}
Uses three disks for parity while all other disks store data.
Requires at least five disks.
{{< /expand >}}

The **Pool Manager** suggests a vdev layout from the number of disks added to the vdev.
For example, if adding two disks, TrueNAS automatically configures the vdev as a mirror, where the total available storage is the size of one added disk while the other disk provides redundancy.

{{< trueimage src="/images/CORE/Storage/StoragePoolsAddCreateMirror.png" alt="Mirrored Vdev" id="Mirrored Vdev" >}}

To change the vdev layout, open the **Data VDevs** list and select the desired layout.

## Pool Articles

{{< children depth="2" description="true" >}}
