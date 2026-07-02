&NewLine;

{{< hint type=important >}}
Metadata VDEVs are critical for pool operation and data integrity. Protect them with redundancy measures such as mirroring. Each Metadata VDEV must use a redundancy level equal to or greater than the data VDEVs. For example, if data VDEVs are configured as RAIDZ2, use RAIDZ2 or a three-way mirror for Metadata VDEVs. Pool creation fails when Metadata VDEV redundancy is lower than data VDEV redundancy.
{{< /hint >}}

{{< expand "UPS Recommendation" "v" >}}
When using SSDs with an internal cache, add an uninterruptible power supply (UPS) to the system to help minimize the risk from power loss.
{{< /expand >}}

Hot spares only activate in data VDEVs, so a hot spare cannot replace a failed drive in a special VDEV. The special VDEV must protect itself with its own internal redundancy (a mirror at the redundancy level required above). Without it, if the special VDEV fails the pool becomes corrupted and prevents access to stored data.

Special VDEVs often use a different drive type than the data VDEVs (such as a mirror of SSDs) for better performance. Provide sufficient internal redundancy for the special VDEV regardless of drive type.

{{< hint type=important >}}
While the metadata VDEV can be adjusted after its addition by attaching or detaching drives, the entire metadata VDEV itself can only be removed from the pool when the pool data VDEVs are mirrors. *If the pool uses RAIDZ data VDEVs, a metadata VDEV is a permanent addition to the pool and cannot be removed.*
{{< /hint >}}

When more than one metadata VDEV is created, then allocations are load-balanced between all these devices.
If the special class becomes full, then allocations spill back into the normal class.
Deduplication table data is placed first onto a dedicated Dedup VDEV, then a Metadata VDEV, and finally the data VDEVs if neither exists.
