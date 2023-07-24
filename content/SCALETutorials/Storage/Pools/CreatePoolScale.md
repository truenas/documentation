---
title: "Creating Storage Pools"
description: "Provides information on creating storage pools and using VDEV layout options in TrueNAS SCALE."
weight: 10
aliases:
 - /scale/scaleuireference/storage/pools/
tags:
- scalestorage
- scalepools
- scalevdevs
---

{{< toc >}}


TrueNAS uses ZFS data storage *pools* to efficiently store and protect data.

{{< expand "What's a pool?" "v" >}}
Storage pools attach drives organized into virtual devices called *VDEVs*.
ZFS and TrueNAS periodically review and *heal* when discovering a bad block in a pool.
Drives arranged inside VDEVs provide varying amounts of redundancy and performance.
ZFS and VDEVs combined create high-performance pools that maximize data lifetime.
{{< /expand >}}

## Review Storage Needs

We strongly recommend that you review your available system resources and plan your storage use case before creating a storage pool.
* Allocating more drives to a pool increases redundancy when storing critical information.
* Maximizing total available storage at the expense of redundancy or performance entails allocating large-volume disks and configuring a pool for minimal redundancy.
* Maximizing pool performance entails installing and allocating high-speed SSD drives to a pool.

Determining your specific storage requirements is a critical step before creating a pool.

## Creating a Pool
{{< include file="/_includes/CreatePool.md" type="page" >}}
### Naming the Pool
First, enter a name for the pool using up to 50 lower case alpha-numeric and permitted special characters that conform to [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html). 
The pool name contributes to the maximum character length for datasets so it is limited to 50 characters. 

{{< hint type=note >}}
You cannot change the name of the pool after you click **Create**! 
{{< /hint >}}
### Encrypting the Pool
Next, decide if you want to encrypt this pool. Datasets inherit encryption from the pool.
{{< expand "Use Encryption?" "v" >}}
TrueNAS offers several encryption algorithms to maximize security.
However, encryption also complicates data retrieval and risks permanent data loss!
Refer to the [Encryption article]({{< relref "EncryptionSCALE.md" >}}) for more details and decide if encryption is necessary for your use case before setting any **Encryption** option.
{{< /expand >}}
### Adding Disks to the VDEVs
Next, add disks to your primary data VDEV. 
A data VDEV is the standard VDEV for primary storage operations.
A data VDEV configuration typically affects how the other types of VDEVs get configured.

{{< hint type=note >}}
All pools must have a data VDEV. 
You can add as many VDEV types (cache, log, spare, etc.) as you want to the pool for your use case but it must have a data VDEV. 
{{< /hint >}}

The **Available Disks** table lists all available disks detected on the system including disks for exported pools. 
{{< hint type=important >}}
**Warning:** USB-connected disks might report their serial numbers inaccurately, making them indistinguishable from each other.
{{< /hint >}}

{{< hint type=note >}}
Disks with non-unique serial numbers do not populate the **Available Disks** section until you select **Show disk with non-unique serial numbers**.
{{< /hint >}}

{{< expand "Can I create one pool with different data VDEV layouts?" "v" >}}
TrueNAS SCALE does not support adding multiple data VDEV layouts (or types) in one pool, for example a mirror data VDEV and a RAID data VDEV in the same pool.
Create a new pool when a different data VDEV layout is required.
For example, *pool1* has a data VDEV in a *mirror* layout, so create *pool2* for any *raid-z* VDEVs.
{{< /expand >}}

{{< expand "Can I use different-sized disks when creating a pool?" "v" >}}
We do not recommend mixing disks of different sizes in a VDEV. If you do, you must **Force** the action and override the **One or more data vdevs has disks of different sizes** error. 

![CreatePoolWithMixedSizeDisks](/images/SCALE/22.12/CreatePoolWithMixedSizeDisks.png "Pool Create Force Option")

You must then confirm you understand the warning before you can continue.

![CreatePoolWithMixedSizeDisksWarning](/images/SCALE/22.12/CreatePoolWithMixedSizeDisksWarning.png "Pool Create Different Disk Size Warning")

{{< /expand >}}
You can add disks to the data VDEV manually or click the **Suggest Layout** button and allow TrueNAS to review all available disks and populate the primary **Data VDevs** with identically sized drives in a configuration balanced between storage capacity and data redundancy. 
If you don't want to use the suggested layout, click **Reset Layout** to clear the data VDEV layout and move the disks back to the **Available Disks** list. 

To manually add disks, select the checkboxes to the left of each disk you want to add and then click the <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp; to the left of the data VDEV to move the disks over. See [About Data VDEV Layouts](#about-data-vdev-layouts) or the [Pool Manager Screen]({{< relref "PoolManagerScreens.md" >}}) or more information on data VDEV layouts.

Next, if you want to add another type of VDEV, click **Add Vdev** and select the VDEV type from the options.
Each VDEV type stores data or enables unique features for the pool.
For more details on VDEV types and data VDEV layouts see the [Pool Manager Screen]({{< relref "PoolManagerScreens.md" >}}) article.

If you have enough disks of the same size available, you can [duplicate](#duplicating-a-data-vdev) the data VDEV.

Click **Create** to add the pool.

#### Duplicating a Data vdev
To duplicate a data VDEV, click **Repeat First Vdev**. 
If disks of equal size are available, the **Repeat First VDEV** button opens a window pre-populated or where you enter the number of additional data VDEVs to create. 

The dialog displays information on the data VDEV layout, the storage size of the VDEV, and the number of disks used and remaining for the VDEV you are repeating.

![RepeatDataVDEVWindow](/images/SCALE/22.12/RepeatDataVDEVWindow.png "Duplicating a Data VDev")

Click **Repeat Vdev** to create and populate a duplicated data VDEV. 
Another VDEV with an identical configuration is called a *mirror* of VDEVs.

If you add more disks of the same size to your system, you can add another duplicate data VDEV. 

{{< hint type=important >}}
Don't have multiple data vdevs with different numbers of disks in each VDEV.
This complicates and limits the pool capabilities.
{{< /hint >}}

### About Data VDEV Layouts
You can add a data VDEV to a pool in one of several layouts.
{{< expand "Stripe" >}}
A **Stripe** VDEV has each disk storing data. A stripe requires at least one disk and has no data redundancy.
To create a stipe VDEV you must select **Force** to activate the **Create** button on the **Pool Manager** screen.
{{< hint type=warning >}}
Never use a **Stripe** VDEV to store critical data!
A single disk failure results in losing all data in the vdev.
{{< /hint >}}
{{< /expand >}}
{{< expand "Mirror" >}}
A **Mirror** VDEV stores on both disks, data is identical in each disk.
A mirror VDEV requires at least two disks, has the most redundancy, and the least capacity.
{{< /expand >}}
{{< expand "RAIDZ1" >}}
A **RAIDZ1** uses one disk for parity while all other disks store data.
A RAIDZ1 requires at least three disks.
{{< /expand >}}
{{< expand "RAIDZ2" >}}
A **RAIDZ2** uses two disks for parity while all other disks store data.
A RAIDZ2 requires at least four disks.
{{< /expand >}}
{{< expand "RAIDZ3" >}}
A **RAIDZ3** uses three disks for parity while all other disks store data.
A RAIDZ3 requires at least five disks.
{{< /expand >}}

The **Pool Manager** screen suggests a VDEV layout from the number of disks added to the VDEV.
For example, if you add two disks, TrueNAS automatically configures the VDEV as a mirror. 
The total available storage is the size of one added disk while the other disk provides redundancy.

{{< taglist tag="scalepools" limit="10" >}}
{{< taglist tag="scalevdevs" limit="10" title="Related VDEV Articles" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}