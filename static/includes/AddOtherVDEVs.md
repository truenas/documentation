&NewLine;

Cache VDEV considerations:
* Multiple devices reduce latency. Adding more than one cache device lets L2ARC reads spread across them, improving performance over a single device.
* Device speed matters more than capacity. A cache device that is significantly faster than your data storage devices makes better use of its capacity for sequential or streaming workloads, prioritizes low-latency, and high-throughput devices like Enterprise-grade NVMe.
* Size relative to ARC. L2ARC is most effective for random read-heavy workloads where the working dataset exceeds available RAM (ARC) but fits in the cache VDEV. An undersized cache device relative to your dataset provides limited benefit.
* Redundancy not needed. Cache VDEVs are always striped. A failed cache device does not affect pool data integrity, so mirroring is unnecessary.

See [L2ARC](https://www.truenas.com/docs/references/l2arc/) for more information on L2ARC behavior and how write rates are managed.

Spare VDEV consideration:
* Manual replacement versus dedicated spare. Relying on alerts and manually replacing a failed disk is an option instead of dedicating a disk as a spare. dRAID uses distributed hot spares, so adding a spare VDEV is not needed for dRAID layouts.

Log VDEV consideration:
* Supports planned sync-write-heavy workloads, such as for databases, VM, or iSCSI uses. Use a mirror layout for redundancy.

Special VDEV considerations:
* [Fusion pool]({{< ref "CreatingFusionPools.md" >}}) metadata performance tradeoff. Special VDEVs move metadata (and optional small files, via special_small_blocks) off the slower data VDEV onto the faster storage, which is the point of a fusion pool. Special VDEVs must tolerate at least as many drive failures as the data VDEV, and do not support dRAID layouts.
* Redundancy-matching versus the risk of not giving the special VDEV redundancy matching your data VDEV, which can result in making the entire pool inaccessible! 