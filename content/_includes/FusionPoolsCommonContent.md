---
---

Add SSDs to the new **Metadata VDev** and select the same layout as the **Data VDevs**.

{{< hint warning >}}
The metadata special VDEV is critical for pool operation and data integrity, so you must protect it with hot spare(s).
{{< /hint >}}

{{< hint warning >}}
Drives added to a metadata VDEV cannot be removed from the pool.
{{< /hint >}}

When you create more than one metadata VDEV, TrueNAS load-balances the allocations between all of them.
If the special class becomes full, then allocations spill back into the normal class.

{{< expand "UPS Recommendation" "v" >}}
When using SSDs with an internal cache, add an uninterruptible power supply (UPS) to the system to help minimize the risk of data loss from losing power.
{{< /expand >}}

We recommend using special VDEVs identical to the data VDEVs (so they can use the same hot spares), but for performance reasons, you can make a different type of VDEV (like a mirror of SSDs).
In that case, you must provide hot spare(s) for that drive type as well. Otherwise, if the special VDEV fails and there is no redundancy, the pool becomes corrupted and prevents access to stored data.

After the fusion pool is created, the **Status** shows a **Special** section with the metadata SSDs.
