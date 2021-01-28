---
title: "Fusion Pools"
description: "Utilizing a special vdev" 
tags: ["zfs","pool","vdev"]
---

Fusion Pools are also known as **ZFS Allocation Classes**, **ZFS Special vdevs**, and **Metadata vdevs**.
A special vdev can store meta data such as file locations and allocation tables.
This is a great use-case for highly performant but smaller sized solid-state storage.
Using a special vdev will drastically speed up random I/O and can cut the average number of spinning-disk I/Os needed to find and access a file by up to half.

It is recommended to have *metadata vdev* redundancy match the redundancy of the other normal devices in the pool.
If the special vdev fails, the pool can become corrupted and prevent access to stored data.
If you are using SSDs with an internal cache, there are power loss safety concerns to consider.
Consider adding an Uninterruptible Power Supply (UPS) to the system to help minimize the risk from power loss.

## Creating a Fusion Pool

The allocations in the special class are dedicated to specific block types.
By default, this includes all metadata, the indirect blocks of user data, and any deduplication tables.
The class can also be provisioned to accept small file blocks.

A pool must always have at least one normal (non-dedup/special) vdev before other devices can be assigned to the special class.
If the special class becomes full, then allocations intended for it will spill back into the normal class.
If more than one metadata vdev is specified, then allocations are load-balanced between all the devices.

{{% pageinfo %}}
Drives added to a metadata vdev cannot be removed from the pool.
{{% /pageinfo %}}

To create a Fusion Pool, go to **Storage** > **Pools** > **Add**.
Configure the data vdev, then open the **ADD VDEV** drop down menu and select *Metadata*.
Select SSDs to add to the *Metadata VDev*.

It is highly recommended that the special vdev be set up as a mirror.  If the special-vdev is set as a stripe , if a disk fails, you will lose all of the data in the pool, as such a stripe setup must be **Forced**.

<img src="/images/Metadatavdev.png">

Creating a pool requires confirming the action.
After the pool is created, you can confirm the pool shows as a *MIRROR* with a *Special* section that contains the metadata SSD by opening the [Pool Options](/hub/initial-setup/storage/managingpools/#status) and clicking **Status**.
