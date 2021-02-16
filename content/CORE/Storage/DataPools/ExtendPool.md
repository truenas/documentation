---
title: "Extending a Storage Pool"
description: "How to add additional storage to an existing pool"
weight: 20
---

There are numerous options available to TrueNAS users for extending pools within a system.  They are:

- Data
- Cache
- Log
- Hot Spare
- Metadata
- Dedup

For the purposes of this article, the focus will be on adding a data vdev to an existing pool.

### Requirements ###

When adding disks to increase the capacity of a pool, ZFS supports the addition of virtual devices, or *vdevs*, to an existing ZFS pool. 
To extend a pool, the vdev being added must be the same type as the existing vdevs. The **ADD VDEVS** button is only enabled when the vdev being added is the same type as the existing vdevs. 
Examples are as follows:

- To extend a Stripe, any number of available disks may be chosen
- To extend a two-drive ZFS mirror, add another two drives
- To extend a three-drive RAIDZ1, add another three drives
- To extend a four-drive RAIDZ2, add another four drives

Mixing disks of different sizes in a vdev is not allowed.  For example, if you have a mirrored pool with two 3TB drives, the added disks must also be 3TB.

<img src="/images/PoolManagerPage5.png" width='700px'>
<br>

For encrypted pools, the added disks will inherit the same encryption options as the parent disks (encryption key/passphrase).

{{% pageinfo %}}
Before creating a pool, determine the level of required redundancy, how many disks will be added, and if any data exists on those disks.
Creating a pool/adding vdevs overwrites disk data, so save any required data to different media before adding disks/vdevs to a pool.
{{% /pageinfo %}}

### Process ###

Go to **Storage** > **Pools** and select the <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp of the pool you want to extend.
From the dropdown select **Add Vdevs**.  This will take you to the **Pool Manager** page.  

<img src="/images/PoolManagerPage.png" width='700px'>
<br>

Select the appropriate number of disks needed to extend the pool under **Available Disks**.
Click on the arrow to add those disks to the **Data VDevs** section.

<img src="/images/PoolManagerPage1.png" width='700px'>
<br>

Ensure the number of disks that you add matches the type of vdev (Stripe/Mirror/RaidZ1 etc.).  

<img src="/images/PoolManagerPage2.png" width='700px'>
<br>

Once you have selected the appropriate number of disks, click **ADD VDEVS**. A dialog box will appear, check **Confirm** and click **ADD VDEVS**.

<img src="/images/PoolManagerPage3.png" width='700px'>
<br>

Once the process is complete, you will be taken to the **Storage/Pools** page.  To verify your disk(s) were added successfully select the <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp
and choose **status** from the dropdown menu.  This will take you to the **Storage/Pools/Pool Status** page.  Here you can verify your vdevs have been successfully added.

<img src="/images/PoolManagerPage4.png" width='700px'>
<br>
