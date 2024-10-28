---
title: "SLOG Devices"
description: "Provides general information on ZFS intent logs (ZIL) and separate intent logs (SLOG), their use cases and implementation in TrueNAS."
weight: 40
tags:
 - slog
---

To improve read performance, ZFS uses system memory as an Adaptive Replacement Cache (ARC).
System memory stores the most frequent and recent ZFS pool data used.
Layer 2 ARC ([L2ARC](/references/l2arc/)) is another option to extend the ARC to dedicated disks for dramatic improvement in read speeds versus slower data disks in the pool.

Another OpenZFS performance feature is the ZFS intent log (ZIL).
The ZIL writes synchronous transactions to disk in special pre-allocated space so ZFS can confirm that data is on non-volatile storage, providing lower latency for synchronous writes.
The data is then written to disk in a normal transaction group (TXG) which allows reusing of the ZIL space for further writes.

ZIL is often referred to as a *log* whose main purpose is data integrity.
The ZIL exists to track in-progress, synchronous write operations.
If the system crashes or loses power, the ZIL can replay the operation.
While you lose a standard system cache on power failure, a ZIL persists through system reboots.

By default, ZIL does not handle asynchronous writes.
System memory handles these like any standard caching method.
This means the ZIL only works for select use cases, like database storage or virtualization over Network File System (NFS).
OpenZFS does allow using the ZIL for added data integrity protection with asynchronous writes.

You can further improve ZIL performance by using a dedicated vdev called a separate intent log (SLOG).
A SLOG moves the ZIL to a dedicated SSD(s) instead of a section of the data disks to function.
This can provide a large benefit due to lower latency of a SLOG on SSD(s) vs data disks.

## SLOG Use Case

A ZIL alone does not improve performance.
Every ZFS data pool uses a ZIL that is stored on disk to log synchronous writes before flushing to a final location in the storage.
This means synchronous writes operate at the speed of the storage pool and must write to the pool twice or more (depending on disk redundancy).

A separate high-speed SLOG device provides the performance improvements so ZIL-based writes are not limited by pool input/outputs per second (IOPS) or penalized by the RAID configuration.
Using a SLOG for ZIL is recommended for database applications, NFS environments, virtualization, and data backups.
In general, a storage environment with heavy synchronous writes benefits from using a SLOG for the pool ZIL.

### SLOG Devices

Disk latency and write endurance capability are the primary concern for slog devices.
You might need multiple striped slog devices to reach write endurance and the synchronous write throughput needs of each slog device.
Combined SLOG write throughput should be higher than the planned synchronous write throughput of the pool.

The iXsystems current recommendation is a 16 GB SLOG device over-provisioned from larger SSDs to increase the write endurance and throughput of an individual SSD, though this is not the only usable size for SLOG devices.
This 16 GB size recommendation is based on performance characteristics of typical HDD pools with SSD SLOGs and capped by the value of the tunable <code>vfs.zfs.dirty_data_max_max</code>.

TrueNAS Enterprise appliances from iXsystems might have an additional platform specific auto-tuning set and are built with SLOG devices specifically set up for the performance of that appliance.

## TrueNAS Implementation

Add and manage SLOG devices in the **Storage > Pools** web interface area.
When creating or expanding a pool, open the **ADD VDEV** dropdown list and select the **Log**.
Allocate SSDs into this vdev according to your use case.

Users can exercise an optional step to avoid data loss from device failure or any performance degradation by arranging the **Log VDev** as a mirror.
The drives must be the same size.
As stated earlier, the recommended drive size is 16 GB after over-provisioning.
See the SLOG over-provisioning guide for [TrueNAS CORE]({{< relref "CORE/CORETutorials/Storage/Pools/SLOGOverprovision.md" >}}) or [TrueNAS SCALE]({{< relref "/SCALE/SCALETutorials/Storage/Disks/SLOGOverprovisionSCALE.md" >}}) over-provisioning procedures.

## SLOG for Asynchronous Writes

By default, SLOG is not used for asynchronous writes.
In some scenarios that require additional transactional data safety, such as iSCSI, dataset/ZVOLSync setting can turn asynchronous writes into synchronous, using SLOG, if available.
To do this go to **Storage > Pools** and for the dataset/ZVOL click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> and select **Edit Options** from the drop-down list.
Set **Sync** to **Always** and click **SAVE**.

![SyncAlways](/images/CORE/Storage/StoragePoolsDatasetCreateSlogRecommends.png "Enabling a SLOG for Asynchronous Writes")

## Resources

* https://www.truenas.com/docs/core/storage/pools/slogoverprovision/
