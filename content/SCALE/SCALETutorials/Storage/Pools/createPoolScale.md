---
title: "Creating Pools"
description: "This article provides instructions on creating storage pools in TrueNAS SCALE."
weight: 20
aliases: /scale/scaleuireference/storage/pools/
tag: 
 - scalepools
 - scalestorage
---

{{< toc >}}

{< include file="/_includes/StoragePoolsIntroScale.md" type="page" >}}

## Creating a Pool

{{< expand "Tutorial" "v" >}}
{{< embed-video name="scaleangelfishpoolcreate" >}}
{{< /expand >}}

To create a new pool, go to **Storage** and click **Create Pool**. The **Pool Manager** screen displays.

![PoolManagerSCALE](/images/SCALE/PoolManagerSCALE.png "TrueNAS SCALE Pool Manager")

1. Enter a pool name. 

2. Decide if you want to encrypt data on pool. 
   
   {{< expand "Encryption?" "v" >}}
   TrueNAS offers several encryption algorithms to maximize security.
   However, encryption also complicates data retrieval and risks permanent data loss!
   The [Storage Encryption]({{< relref "/SCALETutorials/Storage/Pools/EncryptionScale.md" >}}) article provides more details to help you decide if encryption is necessary for your use case before selecting the **Encryption** option.
   {{< /expand >}}

3. Configure the virtual devices (vdevs) that make up the pool. 
   You can allow TrueNAS to suggest and populate the vdevs with identical sized drives or do this manually by selecting the vdevs type. and then selecting and moving the drives to that vdevs.
   See [Vdev Types](#vdev-types) for more information on vdevs types and [Vdev Layouts](#vdev-layouts) for more information on TrueNAS SCALE vdevs layout options.

   {{< hint info >}}
   If the disks have non-unique serial numbers, they do not populate the **Available Disks** section until you select the **Show disk with non-unique serial numbers**.
   {{< /hint >}}

   Click **Suggest Layout** to have TrueNAS review all available disks and populate the primary **Data VDevs** with identically sized drives in a configuration balanced between storage capacity and data redundancy. 
   Click **Reset Layout** to clear the suggestion.
   
   To manually configure the pool, Click **Add Vdev** and select vdevs according to your use case.
   Select the disks and then click the <span class="material-icons">east</span> to move the disks into a vdev. 
   If you added more than one type of vdevs to the **Data Vdevs** table, select the <span class="material-icons">east</span> for that vdevs to move the disks into that vdevs. 
   If you make a mistake, move the disks out with the <span class="material-icons">west</span> and then move them to the correct vdevs.

   {{< hint warning >}}
   **Warning:** USB-connected disks might report their serial numbers inaccurately, making them indistinguishable from each other.
   {{< /hint >}}

## Vdev Types

Pools offer several vdev types. Vdevs store data or enable unique features for the pool.

To add a vdev type during pool creation, click **Add Vdev** and select the [type]({{< relref "/SCALEUIReference/Storage/Pools/PoolsScreens.md" >}}).

Data is the standard vdev for primary storage operations. Each storage pool requires at least one Data vdev.
Data vdev configuration typically affects how users can configure other types of vdevs.

{{< expand "Duplicating a Data vdev" "v" >}}
Users can duplicate a **Data Vdev** by clicking **Repeat**.
When the system has more available equal-sized disks, the **Repeat** button creates another vdev with an identical configuration called a **Mirror**.

![PoolRepeatVdevSCALE](/images/SCALE/PoolRepeatVdevSCALE.png "Duplicating a Data VDev")

When even more same-size disks are available, users can create multiple copies of the original vdev.
{{< hint warning >}}
We do not recommend having multiple data vdevs with different numbers of disks in each vdev. Doing so complicates and limits pool capabilities.
{{< /hint >}}
{{< /expand >}}

Select a layout for data vdevs. Options vary based on the number of drives. 
Disks added to a Vdev arrange in different [layouts]({{< relref "/SCALEUIReference/Storage/Pools/PoolsScreens.md" >}}), according to the specific pool use case.

{{< expand "Can I use different-sized disks when creating a pool?" "v" >}}
We do not recommend mixing disks of different sizes in a vdev. If you do, you must select **Force** to override the **One or more data vdevs has disks of different sizes** error. 

![PoolCreateForceSCALE](/images/SCALE/PoolCreateForceSCALE.png "Pool Create Force Option")

![PoolCreateOverrideSCALE](/images/SCALE/PoolCreateOverrideSCALE.png "Pool Create Override Error")
{{< /expand >}}

The **Pool Manager** suggests a vdev layout from the number of disks added to the vdev.
For example, if you add two disks, TrueNAS automatically configures the vdev as a **Mirror**. The total available storage is the size of one added disk while the other disk provides redundancy.

![PoolCreateMirrorSCALE](/images/SCALE/PoolCreateMirrorSCALE.png "Creating a Mirror")

To change the vdev layout, open the **Data Vdevs** list and select the desired layout.

{{< expand "Can I create vdevs with different layouts in one pool?" "v" >}}
TrueNAS SCALE does not support adding multiple vdevs with different layouts to a pool.
Create a new pool when a different vdev layout is required.
For example, *pool1* has a data vdev in a *mirror* layout, so create *pool2* for any *raid-z* vdevs.
{{< /expand >}}

{{< hint danger >}}
Never use **Stripe** to store critical data! A single disk failure means losing all data in the vdev.
{{< /hint >}}

## Encryption Actions

See [SCALE Encryption]({{< relref "/SCALE/SCALETutorials/Storage/Pools/EncryptionSCALE.md" >}}) for detailed encryption information.

{{< taglist tag="scalepools" limit="10" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}