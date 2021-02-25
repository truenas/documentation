---
title: "Fusion Pools"
weight: 30
---

Fusion Pools are also known as **ZFS Allocation Classes**, **ZFS Special vdevs**, and **Metadata vdevs**.

{{< expand "What's a special vdev?" "v" >}}
A special vdev can store meta data such as file locations and allocation tables.
The allocations in the special class are dedicated to specific block types.
By default, this includes all metadata, the indirect blocks of user data, and any deduplication tables.
The class can also be provisioned to accept small file blocks.
This is a great use case for high performance but smaller sized solid-state storage.
Using a special vdev drastically speeds up random I/O and cuts the average spinning-disk I/Os needed to find and access a file by up to half.
{{< /expand >}}

## Creating a Fusion Pool

Go to **Storage > Pools**, click *ADD*, and select *Create new pool*.

![StoragePoolsAddCreateManager](/images/CORE/12.0/StoragePoolsAddCreateManager.png "TrueNAS Pool Manager")

A pool must always have one normal (non-dedup/special) vdev before other devices can be assigned to the special class.
Configure the **Data VDevs**, then click *ADD VDEV* and select *Metadata*.

Add SSDs to the new **Metadata VDev** and select the same layout as the **Data VDevs**.
{{< expand "UPS Recommendation" "v" >}}
When using SSDs with an internal cache, add Uninterruptible Power Supply (UPS) to the system to help minimize the risk from power loss.
{{< /expand >}}
Using a *Mirror* layout is possible, but it is strongly recommended to keep the layout identical to the other vdevs.
If the special vdev fails and there is no redundancy, the pool becomes corrupted and prevents access to stored data.

{{< hint warning >}}
Drives added to a metadata vdev cannot be removed from the pool.
{{< /hint >}}

When more than one metadata vdev is created, then allocations are load-balanced between all these devices.
If the special class becomes full, then allocations spill back into the normal class.

After the fusion pool is created, the **Status** shows a **Special** section with the metadata SSDs.
See [Managing Pools](/CORE/Storage/DataPools/ManagingPools/).
