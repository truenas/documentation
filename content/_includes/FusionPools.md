---
---

Fusion Pools are also known as ZFS allocation classes, ZFS special vdevs, and metadata vdevs (**Metadata** vdev type on the **Pool Manager** screen.).

{{< expand "What's a special VDEV?" "v" >}}
A special VDEV can store metadata such as file locations and allocation tables.
The allocations in the special class are dedicated to specific block types.
By default, this includes all metadata, the indirect blocks of user data, and any deduplication tables.
The class can also be provisioned to accept small file blocks.
This is a great use case for high performance but smaller sized solid-state storage.
Using a special vdev drastically speeds up random I/O and cuts the average spinning-disk I/Os needed to find and access a file by up to half.
{{< /expand >}}

## Creating a Fusion Pool

Go to **Storage > Pools**, click **ADD**, and select **Create new pool**.

A pool must always have one normal (non-dedup/special) VDEV before other devices can be assigned to the special class.
Configure the **Data VDevs**, then click **ADD VDEV** and select **Metadata**.

![CreateMetadataVdev](/images/CORE/13.0/CreateMetadataVdev.png "Create Metadata VDev Screen")

Add SSDs to the new **Metadata VDev** and select the same layout as the **Data VDevs**.

{{< hint warning >}}
The metadata special VDEV is critical for pool operation and data integrity, so you must protect it with hot spare(s).
{{< /hint >}}

{{< expand "UPS Recommendation" "v" >}}
When using SSDs with an internal cache, add uninterruptible power supply (UPS) to the system to help minimize the risk from power loss.
{{< /expand >}}

Using special VDEVs identical to the data VDEVs (so they can use the same hot spares) is recommended, but for performance reasons you can make a different type of VDEV (like a mirror of SSDs).
In that case you must provide hot spare(s) for that drive type as well. Otherwise, if the special VDEV fails and there is no redundancy, the pool becomes corrupted and prevents access to stored data.

{{< hint warning >}}
Drives added to a metadata VDEV cannot be removed from the pool.
{{< /hint >}}

When more than one metadata VDEV is created, then allocations are load-balanced between all these devices.
If the special class becomes full, then allocations spill back into the normal class.

After the fusion pool is created, the **Status** shows a **Special** section with the metadata SSDs.
