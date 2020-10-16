---
title: "Fusion Pools"
description: "Utilizing a special vdev" 
tags: ["zfs","pool","vdev"]
---

Fusion Pools are also known as **ZFS Allocation Classes** and **ZFS Special vdevs**.

## Special Allocation Class

The allocations in the special class are dedicated to specific block types. By default, this includes all metadata, the indirect blocks of user data, and any deduplication tables. The class can also be provisioned to accept small file blocks.

A pool must always have at least one normal (non-dedup/special) vdev before other devices can be assigned to the special class. If the special class becomes full, then allocations intended for it will spill back into the normal class.

A VDEV type special is a device dedicated solely for allocating various kinds of internal metadata and (optionally) small file blocks. The redundancy of this device must match the redundancy of the other normal devices in the pool. If more than one special device is specified, then allocations are load-balanced between all the devices.

A special vdev can store meta data, ie. file locations and allocation tables. This is a great use-case for solid-state storage. Using a special vdev will drastically speed up random I/O and can cut the average number of spinning-disk I/Os needed to find and access a file by up to half. Just like any other vdev, a special vdev still needs to have a good level of redundancy. Like any vdev, if it fails, your pool fails. If you are using SSDs with an internal cache, there are power loss safety concerns to consider. Consider adding an Uninterruptible Power Supply (UPS) to the system to help minimize that risk.

To create a Fusion Pool, go to **Storage** > **Pools** > **Add**. When adding disks to the pool, select the number of hard disks desired to be in the VDEV and ensure the pool is set to *Mirrored*. Open the **ADD VDEV** drop down menu and select *Metadata*. Select an SSD to add to the *Metadata VDev* portion of UI.
When you see the notification `Metadata vdev must be the same type as the data vdevs. First data vdev is a mirror, new Metadata vdev is a stripe.`, set the **Force** box and click **CREATE**.

If a warning dialog appears and requests an override due to the vdevs not matching, set **Confirm** and click **Continue**. Finally, click **CREATE/CREATE POOL**.
After the pool is created, confirm the pool shows as a *MIRROR* with a *Special* section that contains the metadata SSD.

<img src="/images/fusion-pool-create.PNG">
<br><br>

{{% pageinfo %}}
Once a drive has been added as a *special vdev*, it cannot be removed from the pool.
{{% /pageinfo %}}
