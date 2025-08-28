&NewLine;

{{< hint type=important >}}
Metadata VDEVs are critical for pool operation and data integrity. Protect them with redundancy measures such as mirroring, and optionally hot spare(s) for additional fault tolerance. It is suggested to use an equal or greater level of failure tolerance in each of your metadata VDEVs; for example, if your data VDEVs are configured as RAIDZ2, consider the use of 3-way mirrors for your metadata VDEVs.
{{< /hint >}}

{{< expand "UPS Recommendation" "v" >}}
When using SSDs with an internal cache, add an uninterruptible power supply (UPS) to the system to help minimize the risk from power loss.
{{< /expand >}}

Using special VDEVs identical to the data VDEVs (so they can use the same hot spares) is recommended, but for performance reasons, you can make a different type of VDEV (like a mirror of SSDs).
In that case, you must provide hot spare(s) for that drive type as well. Otherwise, if the special VDEV fails and there is no redundancy, the pool becomes corrupted and prevents access to stored data.

{{< hint type=important >}}
While the metadata VDEV can be adjusted after its addition by attaching or detaching drives, the entire metadata VDEV itself can only be removed from the pool when the pool data VDEVs are mirrors. *If the pool uses RAIDZ data VDEVs, a metadata VDEV is a permanent addition to the pool and cannot be removed.*
{{< /hint >}}

When more than one metadata VDEV is created, then allocations are load-balanced between all these devices.
If the special class becomes full, then allocations spill back into the normal class.
Deduplication table data is placed first onto a dedicated Dedup VDEV, then a Metadata VDEV, and finally the data VDEVs if neither exists.
