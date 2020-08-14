---
title: "ZFS Pools"
description: "How to create a ZFS data storage pool."
weight: 1
tags: ["zfs"]
---

Perhaps the most important part about TrueNAS is the ability to efficiently store and share large amounts of data.
The way this is accomplished is through setting up [ZFS Pools](https://en.wikipedia.org/wiki/ZFS#Data_structures:_Pools,_datasets_and_volumes "ZFS Pools Wikipedia").

To set up a pool in TrueNAS, go to **Storage > Pools** and click *ADD*.

<img src="/images/pools-list.png">
<br><br>

Set *Create a new pool* and click *CREATE POOL*.

First, enter a name for the pool.
If you want to encrypt the data for additional security, set the *Encryption* option.
Be aware that this can also complicate how data is retrieved and has some risks.
Refer to the [Encryption article]({{< ref "encryption.md" >}}) for more details.

Now configure the virtual devices (vdevs) that make up the pool.
The TrueNAS web interface can simplify this by recommending a vdev layout based on the number of available disks.
Click *SUGGEST LAYOUT* to add all same-sized disks in an ideal configuration for data redundancy and performance.

To manually add disks in a vdev, select the disks to add and click <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.

TrueNAS helpfully suggests a vdev layout based on the number of disks added to the vdev.
For example, if two disks are added, TrueNAS automatically configures the VDEV as a mirror (one redundant disk).
To change the vdev layout, open the *Data VDevs* list and select the desired layout.
Note that a stripe is never recommended for storing critical data, as a single disk failure can result in losing all data in that vdev.

A vdev layout can be duplicated by clicking *REPEAT*.
If more disks are available and equal in size, the *REPEAT* button creates another vdev with an identical configuration.
Thus, it creates a mirror of vdevs.
Otherwise, another vdev can be added by clicking *ADD DATA* and adding disks as was done in the first vdev.

{{% alert title="Warning" color=warning %}}
It is not recommended to have multiple data vdevs with different numbers of disks.
Adding multiple vdevs with different layouts to a pool is not supported.
Create a new pool for the different layout.
For example, "pool1" has a data vdev in a *mirror* layout, so create "pool2" for any *raid-z* vdevs.
{{% /alert %}}

If desired, a cache, log, and spare vdev can be added by clicking *ADD CACHE*, *ADD LOG*, and *ADD SPARE*, respectively.
When ready to proceed with the desired vdevs, click *CREATE*.

<img src="/images/pools-vdevs.png">
<br><br>
