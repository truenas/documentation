---
title: "Creating Storage Pools"
description: "This article provides information on creating storage pools and using Vdev layout options in TrueNAS SCALE."
weight: 45
aliases:
 - /scale/scaleuireference/storage/pools/
tags:
- scaleinstall
- scalestorage
- scalepool
---

{{< toc >}}


TrueNAS uses ZFS data storage *pools* to efficiently store and protect data.

{{< expand "What's a pool?" "v" >}}
Storage pools attach drives organized into virtual devices called *vdevs*.
ZFS and TrueNAS periodically review and *heal* when discovering a bad block in a pool.
Drives arranged inside vdevs provide varying amounts of redundancy and performance.
Combined, ZFS and vdevs combined create high-performance pools, pools that maximize data lifetime, and all situations in between.
{{< /expand >}}

## Review Storage Needs

It is strongly recommend that you review the available system resources and plan the storage use case before creating a storage pool.
* Allocating more drives to a pool increases redundancy when storing critical information.
* Maximizing total available storage at the expense of redundancy or performance entails allocating large-volume disks and configuring a pool for minimal redundancy.
* Maximizing pool performance entails installing and allocating high-speed SSD drives to a pool.

Determining your specific storage requirements is a critical step before creating a pool.

## Creating a Pool

{{< expand "Creating a Pool Tutorial" "v" >}}
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

{{< hint info >}}
If the disks used have non-unique serial numbers, they do not populate the **Available Disks** section until you select the **Show disk with non-unique serial numbers** checkbox.
{{< /hint >}}

### Suggested Layout

Clicking **Suggest Layout** allows TrueNAS to review all available disks and populate the primary **Data VDevs** with identically sized drives in a configuration balanced between storage capacity and data redundancy.
Click **Reset Layout** to clear the suggestion.

To manually configure the pool, add vdevs according to your use case.
Select the **Disk** checkboxes and click the <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp; to move the disks into a vdev.

{{< hint warning >}}
**Warning:** USB-connected disks might report their serial numbers inaccurately, making them indistinguishable from each other.
{{< /hint >}}

### Vdev Types

Pools offer several vdev types. Vdevs store data or enable unique features for the pool.

These store data or enable unique features for the pool:

{{< expand "Data" >}}
Standard vdev for primary storage operations.
Each storage pool requires at least one data vdev.
**Data** vdev configuration typically affects how the other kinds of vdevs get configured.
{{< expand "Duplicating a Data vdev" "v" >}}
A **Data VDev** with disks is duplicated by clicking **REPEAT**.
When more disks are available and equal in size, the **REPEAT** button creates another vdev with an identical configuration called a *mirror* of vdevs.

![PoolRepeatVdevSCALE](/images/SCALE/PoolRepeatVdevSCALE.png "Duplicating a Data VDev")

When even more same-size disks are available, you can create multiple copies of the original vdev.
{{< hint warning >}}
Don't have multiple data vdevs with different numbers of disks in each vdev.
This complicates and limits the pool capabilities.
{{< /hint >}}
{{< /expand >}}
{{< /expand >}}
{{< expand "Cache" >}}
[ZFS L2ARC]({{< relref "/Content/References/L2ARC.md" >}}) read-cache used with fast devices to accelerate read operations.
You can add or remove this after creating the pool.
{{< /expand >}}
{{< expand "Log" >}}
[ZFS LOG]({{< relref "/Content/References/SLOG.md" >}}) device that improves synchronous write speeds.
You can add or remove this after creating the pool.
{{< /expand >}}
{{< expand "Hot Spare" >}}
**Hot Spare** are drives reserved to insert into **Data** vdevs when an active drive fails.
Hot spares are temporarily used as replacements for failed drives to prevent larger pool and data loss scenarios.

When you replace a failed drive with a new drive, the hot spare reverts to an inactive state and is available again as a hot spare.

If you only detach the failed drive from the pool, the temporary hot spare gets promoted to a full data vdev member and is no longer available as a hot spare.
{{< /expand >}}
{{< expand "Metadata" >}}
Special Allocation class used to create [Fusion Pools]({{< relref "/CORE/CORETutorials/Storage/Pools/FusionPool.md" >}}) for increased metadata and small block I/O performance.
{{< /expand >}}
{{< expand "Dedup" >}}
**Dedup** vdevs store [ZFS de-duplication]({{< relref "/Content/References/ZFSDeduplication.md" >}}).
Requires allocating *X* GiB for every *X* TiB of general storage.
For example, 1 GiB of Dedup vdev capacity for every 1 TiB of Data vdev availability.
{{< /expand >}}

To add a vdev type during pool creation, click **Add Vdev** and select the type.
Select disks from **Available Disks** and use the <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp; (right arrow) next to the new VDev to add it to that section.

### Vdev Layouts

Disks added to a vdev arrange in different layouts, according to the specific pool use case.

{{< expand "Can I use different-sized disks when creating a pool?" "v" >}}
We do not recommend mixing disks of different sizes in a vdev. If you do, you must **Force** the action and override the **One or more data vdevs has disks of different sizes** error. 

![PoolCreateForceSCALE](/images/SCALE/PoolCreateForceSCALE.png "Pool Create Force Option")

![PoolCreateOverrideSCALE](/images/SCALE/PoolCreateOverrideSCALE.png "Pool Create Override Error")

{{< /expand >}}

{{< expand "Can I create vdevs with different layouts in one pool?" "v" >}}
TrueNAS SCALE does not support adding multiple vdevs with different layouts to a pool.
Create a new pool when a different vdev layout is required.
For example, *pool1* has a data vdev in a *mirror* layout, so create *pool2* for any *raid-z* vdevs.
{{< /expand >}}
{{< expand "Stripe" >}}
Each disk stores data.
Requires at least one disk and has no data redundancy.
{{< hint "danger" >}}
Never use a **Stripe** type vdev to store critical data!
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
For example, if you add two disks, TrueNAS automatically configures the vdev as a Mirror. The total available storage is the size of one added disk while the other disk provides redundancy.

![PoolCreateMirrorSCALE](/images/SCALE/PoolCreateMirrorSCALE.png "Creating a Mirror")

To change the vdev layout, open the **Data VDevs** list and select the desired layout.

{{< taglist tag="scalepool" limit="10" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}