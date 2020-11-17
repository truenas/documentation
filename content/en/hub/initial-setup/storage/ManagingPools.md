---
title: "Managing Existing Pools"
description: "How to make changes to a data storage pool after it has been created."
tags: ["ZFS","zpool"]
---

After creating a data storage pool, there are a variety of options to change the initial configuration of that pool.
Changing a pool can be disruptive, so make sure you are aware of existing resources on the system and consider backing up any stored data before changing the pool.
To find an existing pool, log in to the web interface and go to **Storage > Pools**.

<img src="/images/PoolsList.png>
<br><br>

The current status and storage usage of each pool is shown.
To see more details about a pool, click the **v** symbol on the right side of the pool entry.
Click the <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp (Pool Actions) for all pool management options.

## Export/Disconnect

## Add Vdevs

This opens the **Pool Manager**

### Adding Spare Devices

ZFS pools can have drives earmarked as “hot spares".
These are drives that are included in a pool, but are not used unless an active drive in the pool fails.
The hot spare is temporarily used as a replacement for the failed drive to prevent a larger pool and data loss scenario.
If the failed drive in the pool is replaced with a new drive, the hot spare reverts to an inactive state and is available again as a hot spare.
If the failed drive is detached from the pool, the temporary spare is promoted to a full member of the pool and will no longer be available as a hot spare.

A drive can be designated as a hot spare for a pool during or after pool creation.
This is a ZFS feature, refer to [zfsd(8)](https://www.freebsd.org/cgi/man.cgi?query=zfsd) for more details.
To add a spare during pool creation, go to **Storage > Pools** and click **ADD**. click Add Spare` in . Select the disk from `Available Disks` and use the <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp (right arrow) next to `Spare VDev` to add it to the section.

To add a device to an existing pool, extend that pool.

### Extending a Pool

To increase the capacity of an existing pool, click the pool name, <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp (Settings), then **Add Vdevs**.

When adding disks to increase the capacity of a pool, ZFS supports the addition of virtual devices, or vdevs, to an existing ZFS pool. **After a vdev is created, more drives cannot be added to that vdev**, but a new vdev can be striped with another of the **same type** to increase the overall size of the pool. To extend a pool, the vdev being added must be the same type as existing vdevs. The **EXTEND** button is only enabled when the vdev being added is the same type as the existing vdevs. 

Some vdev extending examples:

+ to extend a ZFS mirror, add the same number of drives. The result is a striped mirror. For example, if ten new drives are available, a mirror of two drives could be created initially, then extended by adding another mirror of two drives, and repeating three more times until all ten drives have been added.
+ to extend a three-drive RAIDZ1, add another three drives. The resulting pool is a stripe of two RAIDZ1 vdevs, similar to RAID 50 on a hardware controller.
+ to extend a four-drive RAIDZ2, add another four drives. The result is a stripe of RAIDZ2 vdevs, similar to RAID 60 on a hardware controller.


## Scrub Pool

## Status

## Expand Pool



