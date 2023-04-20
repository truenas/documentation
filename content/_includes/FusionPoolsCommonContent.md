---
---

Add SSDs to the new **Metadata VDev** and select the same layout as the **Data VDevs**.

{{< hint type=important >}}
The metadata special VDEV is critical for pool operation and data integrity, so you must protect it with hot spare(s).
{{< /hint >}}

{{< expand "UPS Recommendation" "v" >}}
When using SSDs with an internal cache, add an uninterruptible power supply (UPS) to the system to help minimize the risk from power loss.
{{< /expand >}}

Using special VDEVs identical to the data VDEVs (so they can use the same hot spares) is recommended, but for performance reasons, you can make a different type of VDEV (like a mirror of SSDs).
In that case, you must provide hot spare(s) for that drive type as well. Otherwise, if the special VDEV fails and there is no redundancy, the pool becomes corrupted and prevents access to stored data.

{{< hint type=important >}}
Drives added to a metadata VDEV cannot be removed from the pool.
{{< /hint >}}

When more than one metadata VDEV is created, then allocations are load-balanced between all these devices.
If the special class becomes full, then allocations spill back into the normal class.

After you create the fusion pool, the **Status** shows a **Special** section with the metadata SSDs.
