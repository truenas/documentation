---
title: "Fusion Pools"
description: "Utilizing a special vdev" 
tags: ["zfs","pool","vdev"]
---

Fusion Pools are also known by the name of ZFS Allocation Classes and ZFS Special vdevs.

### Special Allocation Class

The allocations in the special class are dedicated to specific block types. By default this includes all metadata, the indirect blocks of user data, and any deduplication tables. The class can also be provisioned to accept small file blocks.

A pool must always have at least one normal (non-dedup/special) vdev before other devices can be assigned to the special class. If the special class becomes full, then allocations intended for it will spill back into the normal class.

A VDEV type special is a device dedicated solely for allocating various kinds of internal metadata, and optionally small file blocks. The redundancy of this device should match the redundancy of the other normal devices in the pool. If more than one special device is specified, then allocations are load-balanced between those devices.

A special vdev can store meta data, ie. where files are, allocation tables, etc.  This is be a great use-case for solid-state storage. Using a special vdev will drasticaly speed up random I/O and cut, somteimes by half, the average number of spinning-disk I/Os needed to find and access a file.  Just like any other vdev, a special vdev still needs to have a good level of redundancy.  Like with any vdev, if it fails, your pool fails. If you are using SSDs with an intenral cache, there are power loss safety concerns to consider.  Be sure to have a UPS to help minimize that risk.

To Create a Fusion Pool, click on **Storage** > **Pools** > **Add**.  When adding disks to the pool, select the number of hard disks desired to be in the VDEV and ensure the pool is set as Mirrored.  From the **ADD VDEV** drop down menu, select **Metadata**. Select an SSD to add to the *Medtadata VDev* portion of UI. 
When prompted with the notification:  `Metadata vdev must be the same type as the data vdevs.  First data vdev is a mirror, new Metadata vdev is a stripe.`, check the *Force* box and click **CREATE**.
If a warning dialog box appears requesting an override due to the vdevs not matching, check the *Confirm* box and click **Continue**.  Then click **CREATE/CREATE POOL**
Once pool has been created, check pool status to confirm it shows as a MIRROR pool with a 'Special' section that will contains the SSD you added .

{{% pageinfo %}}
Once a drive has been added as a *special vdev*, it cannot be removed from the pool.
{{% /pageinfo %}}
