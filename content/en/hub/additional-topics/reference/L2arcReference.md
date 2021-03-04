---
title: "L2ARC"
description: "What L2ARC does, and how to utilize it within TrueNAS."
tags: ["ZFS", "zpool"]
---

There are features within ZFS that help to improve performance for read operations of data that is accessed on a frequent basis.  One is adaptive replacement cache (ARC), which is located in a servers memory (RAM). The other is second level adaptive replacement cache (L2ARC), or cache drives within ZFS systems.  These cache drives are multi-level cell (MLC) SSD drives, and while slower than system memory, they are faster than standard hard drives.  Generally speaking, you want as much RAM in a system as possible to make the ARC as large as possible, but this can be a costly endeavor. Cache drives provide a cheaper alternative to RAM for frequently accessed content. 

## How Does L2ARC Work

If cache drives are present within a ZFS pool, these drives will cache data that is frequently accessed that did not fit in ARC. So, when a system gets read requests, ZFS will try to use ARC to serve those requests.  If the data is not in the ARC, ZFS will then try to serve those requests from the L2ARC.  The result of this is the slow hard drives within your system will be accessed less resulting in better performace.

## Creating a Pool with A Cached Drive

Go to **Storage > Pools > ADD > CREATE POOL**  Select two hard drives from your available disks and add them to *Data Vdevs* (or however many drives you need for your requirements).  From the **ADD VDEV** dropdown menu select *Cache*.  

<br><br>
<img src="/images/l2arc1.png">
<br><br>

From the *Available Disks* section, select an SSD and add to *Cache Vdev* then click **CREATE**.  Check the *Confirm* box and click **CREATE POOL**.

<br><br>
<img src="/images/l2arc2.png">
<br><br>

It is a wise practice to check the *Status* of a pool after it has successfully been created. Select <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp (pool Operations) to the right of the pool you just created and choose **Status**.  This will take you to the *Pool Status* page.  Verify your configuration contains the hard drives in their appropriate format (Mirror, Raid-z, Raid-z2 etc.) and the cached drive is present.

<br><br>
<img src="/images/l2arc3.png">
<br><br>

{{% pageinfo %}}
Cached drives do not get mirrored.  To increase the size of an existing L2ARC, stripe another cache device with it. The web interface will always stripe L2ARC, not mirror it, as the contents of L2ARC are recreated at boot. Failure of an individual SSD from an L2ARC pool will not affect the integrity of the pool, but may have an impact on read performance, depending on the workload and the ratio of dataset size to cache size. Note that dedicated L2ARC devices cannot be shared between ZFS pools.
{{% /pageinfo %}}

## Adding an Additional Cache Drive to an Existing Pool

Go to **Storage > Pools** and select <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp to the right of the pool you wish to add an additional cached drive.  From the menu, select *Add Vdevs*.  Access the **ADD VDEV** dropdown menu and select *Cache*.  Select an SSD and add to *Cache Vdev* then click **ADD VDEVS**.  Check the *Confirm* box and click **ADD VDEVS**.

<br><br>
<img src="/images/l2arc4.png">
<br><br>

<br><br>
<img src="/images/l2arc5.png">
<br><br>

<br><br>
<img src="/images/l2arc6.png">
<br><br>

## Persistent L2ARC

Persistent L2ARC, or L2ARC rebuild, is a new feature of TrueNAS-12.0.  Upon rebooting your system, the L2ARC gets emptied, but if you enable persistent L2ARC it will populate 
the cache device mapping after reboot via *sysctl*.

{{% pageinfo %}}
Persistent L2ARC is disabled by default due to performance impact when rebuilding with large amounts of data.  Reactivating persistent L2ARC can result in degraded UI
and Middleware performance in specific situations where large amounts of data is loaded into L2ARC and a rebuild is triggered.
{{% /pageinfo %}}

**To Reactivate Persistent L2ARC via the WebUI**

Go to **System->Tunables->ADD**.  *Variable* = `vfs.zfs.l2arc.rebuild_enabled`, *Value* = `1`, *Type* = `sysctl`, enter a description if desired and ensure the *Enabled* box is checked.  Click **SUBMIT**.

<br><br>
<img src="/images/l2arc7.png">
<br><br>

**To Reactivate Persistent L2ARC via the CLI**

Enter the following command : `sysctl vfs.zfs.l2arc.rebuild_enabled=1`

Command output should read : `vfs.zfs.l2arc.rebuild_enabled: 0 -> 1`

{{% alert title=Warning color=warning %}}
Settings changed through the CLI are not written to the configuration database and will be reset on reboot.
{{% /alert %}}
