---
title: "SLOG Devices"
weight: 40
---

{{< toc >}}

To improve read performance, ZFS utilizes system memory as an Adaptive Replacement Cache (ARC).
This stores the ZFS pool's most frequently and recently used data in system memory.
[L2ARC](/references/l2arc/) is another option that extends the ARC to dedicated disks for dramatically improved read speeds.

Another OpenZFS performance feature is the ZFS Intent Log (ZIL).
ZIL uses a dedicated disk called a Separate Intent Log (SLOG) to function similarly to an L2ARC device.
However, a SLOG device provides data security in addition to pure performance benefits.

ZIL is often referred to as a “log” whose main purpose is data integrity.
The ZIL exists to track in-progress, synchronous write operations.
If the system crashes or loses power, the ZIL can restore the operation or roll it back to the start point.
While a standard system cache is lost on power failure, a ZIL persists through system reboots.

By default, ZIL does not handle asynchronous writes.
These are handled in system memory like any standard caching method.
This means the ZIL only works for select use cases, like database storage or virtualization over NFS.
OpenZFS does allow using the ZIL for additional data integrity protection with asynchronous writes.
In TrueNAS, this requires going to **Storage > Pools**, opening the top-level dataset options, and changing *Sync* from *Standard* to *Always*.

## SLOG Use Case

A ZIL alone does not improve performance.
Every ZFS data pool uses a ZIL that is stored on disk to log synchronous writes before "flushing" to a final location in the storage.
This means synchronous writes operate at the speed of the storage pool and must write to the pool twice or more (depending on disk redundancy).

A separate high-speed SLOG device provides the performance improvements so ZIL-based writes are not limited by pool IOPS or penalized by the RAID configuration.
Using a SLOG for ZIL is recommended for database applications, NFS environments, virtualization, and data backups. Generally, a storage environment with heavy synchronous writes benefits from using a SLOG for the pool ZIL.

### SLOG Devices

Disk latency is the primary concern for SLOG devices.
The SLOG device only needs to store as much data as the system can throughput over the approximately 5 second "flush" period.
With a 1GB connection, this is about 0.625 GiB.
A 10GB connection requires about 6.25 GiB and 4x10 GiB requires 25 GiB.

## TrueNAS Implementation

SLOG devices are added and managed in the **Storage > Pools** web interface area.
When creating or expanding a pool, open the *ADD VDEV* drop down and select the *Log*.
Allocate SSDs into this vdev according to your use case.

To avoid data loss from device failure or any performance degredation, arrange the **Log VDev** as a mirror.
The drives **must** be the same size.

## SLOG for Asynchronous Writes

By default, a dedicated SLOG does not improve performance for asynchronous writes.
Using a high-speed SLOG and changing a pool *Sync* setting can improve performance.
To use a SLOG for asynchronous writes, go to **Storage > Pools** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> for a pool that has a SLOG.
Select *Edit Options* from the drop down.
Set *Sync* to *Always* and click **SAVE**.

![SyncAlways](/images/CORE/12.0/StoragePoolsDatasetCreateSlogRecommends.png "Enabling a SLOG for Asynchronous Writes")

## Resources

* https://www.ixsystems.com/blog/o-slog-not-slog-best-configure-zfs-intent-log/
