---
title: "Replacing Disks"
description: "How to replace a failed disk."
tags: ["ZFS"]
weight: 30
---

Hard drives or solid-state drives (SSDs) have a finite lifetime and can fail unexpectedly.
When a disk fails in a Stripe (RAID0) pool, the entire pool has to be recreated and all data restored from backups.
Creating non-stripe storage pools that have disk redundancy is always recommended.

To prevent further loss of redundancy or eventual data loss, always replace a failed disk as soon as possible!
TrueNAS can integrate the new disk into the pool, restoring that pool back to full functionality.

## Replacing a Disk

To replace a failed disk, you'll need another disk that has the same or greater capacity.
Any data on the replacement disk will be wiped as part of the process.

The TrueNAS **Dashboard** shows when a pool has been degraded from a failed disk.

![Dashboard Pool Degraded](/images/CORE/12.0/DashboardPoolDegraded.png "Dashboard Pool Degraded")
<br><br>

Click the <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp; on the pool's card to go to the status screen for the pool and locate the failed disk.

### Offline the Failed Disk

Clicking <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for the failed disk shows additional operations.

![Storage Pools Status Disk Failed Options](/images/CORE/12.0/StoragePoolsStatusDiskFailedOptions.png "Storage Pools Status Disk Failed Options")
<br><br>

It is recommended to *Offline* the disk before starting the replacement.
This removes the device from the pool and can prevent swap issues.

{{< hint info >}}
There are some situations where a disk that has not completely failed can be left online to provide additional redundancy during the replacement procedure.
This is not recommended unless the exact condition of the failing disk is known.
Attempting to replace a heavily degraded disk without offlining it first can result in a significantly slower replacement process.
{{< /hint >}}

If the *Offline* operation fails with a "Disk offline failed - no valid replicas" message, go to **Storage > Pools**, click the <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp; for the degraded pool, and select *Scrub Pool*.
When the scrub operation is finished, reopen the pool *Status* and try to *Offline* the disk again.

![Storage Pools Status Offline](/images/CORE/12.0/StoragePoolsStatusOffline.png "Storage Pools Status Offline")
<br><br>

When the disk status shows as *Offline*, physically remove the disk from the system.
If the replacement disk is not already physically added to the system, add it now.

### Integrating the Replacement Disk into the Pool

In the **Pool Status**, open the options for the *Offline* disk and click *Replace*

![Storage Pools Status Disk Replace](/images/CORE/12.0/StoragePoolsStatusDiskReplace.png "Storage Pools Status Disk Replace")
<br><br>

Select a new member disk and click *Replace Disk*.
Remember that the new disk must have the same or greater capacity as the disk being replaced.
If the chosen disk has partitions or data present, the replacement will fail.
To <ins>destroy</ins> any data on the replacement disk and allow the replacement to continue, set the *Force* option.

When the new disk has been wiped and is ready to replace the failed disk, the pool status updates to show the replacement in progress.

![Storage Pools Status Replace Start](/images/CORE/12.0/StoragePoolsStatusReplaceStart.png "Storage Pools Status Replace Start")
<br><br>

TrueNAS resilvers the pool during the replacement process.
For pools with large amounts of data, this can take a long time.

When the resilver is complete, the pool status screen updates to show the new disk and the pool status returns to *Online*.

![Storage Pools Status Replace Complete](/images/CORE/12.0/StoragePoolsStatusReplaceComplete.png "Storage Pools Status Replace Complete")
<br><br>
