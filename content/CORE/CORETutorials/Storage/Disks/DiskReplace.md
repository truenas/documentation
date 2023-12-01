---
title: "Disk Replacement"
description: "Describes how to replace a disk and restore the hot spare in TrueNAS CORE."
weight: 20
aliases: /core/storage/disks/diskreplace/
tags:
- disks
---

Hard drives or solid-state drives (SSDs) have a finite lifetime and can fail unexpectedly.
When a disk fails in a Stripe (RAID0) pool, the entire pool has to be recreated and all data restored from backups.
Creating non-stripe storage pools that have disk redundancy is always recommended.

To prevent further loss of redundancy or eventual data loss, always replace a failed disk as soon as possible!
TrueNAS integrates new disks into a pool to restore the pool to full functionality.

## Replacing a Disk

Another disk of the same or greater capacity is required to replace a failed disk.
This disk must be installed in the TrueNAS system and not part of an existing storage pool and available to use as a replacement.
The replacement process wipies any data on the replacement disk as part of the process.

{{< expand "Can I replace a disk in a GELI-encrypted (Legacy) pool?" "v" >}}
Although GELI encryption is deprecated, TrueNAS implements GELI encryption during a "GELI-Encrypted (Legacy) pool" disk replacement. TrueNAS uses GELI encryption for the lifetime of that pool, even after replacement.
{{< /expand >}}

The TrueNAS **Pool** widget on the main **Dashboard** shows when a disk failure degrades a pool.

{{< trueimage src="/images/CORE/Dashboard/DashboardPoolDegraded.png" alt="Degraded Pool" id="Degraded pool on dashboard widget" >}}

Click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> on the pool card to go to the **Storage > Pools > Pool Status** screen to locate the failed disk.

To replace a disk:
1. Take the disk offline.
2. Remove, or replace the disk.
3. Refresh the screen.
4. Bring the disk online.

### Taking a Failed Disk Offline

Clicking <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the failed disk to show the disk options.

{{< trueimage src="/images/CORE/Storage/StoragePoolsStatusDiskFailedOptions.png" alt="Disk Options" id="Pool Status disk options" >}}

We recommend you take the disk offline before starting the replacement. 
This removes the device from the pool and can prevent swap issues. 
To offline a disk:

Go to **Storage > Pools** screen, click on the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> settings icon, and then select **Status** to Open the **Pool Status** screen and display the disks in the pools.

Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for the disk you plan to remove, and then click **Offline**.

Select **Confirm**, then click **OFFLINE**. The disk should now be offline.

{{< expand "Can I use a disk that is failing but still active?" "v" >}}
There are some situations where a disk that has not completely failed can be left online to provide additional redundancy during the replacement procedure.
We don't recommend leaving failed disks online unless you know the exact condition of the failing disk!
Attempting to replace a heavily degraded disk without off-lining it first results in a significantly slower replacement process.
{{< /expand >}}

{{< expand "The offline failed?" "v" >}}
If the offline operation fails with a **Disk offline failed - no valid replicas** message, go to **Storage > Pools**, click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> for the degraded pool, and select **Scrub Pool**.
When the scrub operation finishes, reopen the pool **Status** and try to offline the disk again.
{{< /expand >}}

When the disk status shows as **Offline**, physically remove the disk from the system.

{{< trueimage src="/images/CORE/Storage/StoragePoolsStatusOffline.png" alt="Offline Disk" id="Pool Status disk offline" >}}


### Replacing a Disk

If the replacement disk is not already physically added to the system, add it now. 

If replacing a failed disk with an available disk in the system, click **Replace**, select an avaible disk from the dropdown list, select **Confirm**, then click **Replace**.

To update the **Pool Status** screen and show the new disk, click **Refresh**.

In the **Pool Status**, open the options for the offline disk and click **Replace**

{{< trueimage src="/images/CORE/Storage/StoragePoolsStatusDiskReplace.png" alt="Replacing Disk" id="Replacing disk screen" >}}

Select a new member disk and click **Replace Disk**.
The new disk must have the same or greater capacity as the disk you are replacing.
The replacement fails when the chosen disk has partitions or data present.
To destroy any data on the replacement disk and allow the replacement to continue, set the **Force** option.

When the disk wipe completes and TrueNAS starts replacing the failed disk, the **Pool Status** changes to show the in-progress replacement.

{{< trueimage src="/images/CORE/Storage/StoragePoolsStatusReplaceStart.png" alt="Replacing Started" id="Pool Status replacing disk" >}}

TrueNAS resilvers the pool during the replacement process.
For pools with large amounts of data, resilvering can take a long time.

### Bringing a New Disk Online

When the resilver completes, the pool status screen updates to show the new disk, and the pool status returns to **Online**. 

{{< trueimage src="/images/CORE/Storage/StoragePoolsStatusReplaceComplete.png" alt="Replacement Complete" id="Pool Status disk replacement complete" >}}

If replacing a failed disk with a new disk, after removing and replacing the physical disk, to make that replacement disk avaiable, go to **Disks**, locate the offline disk, click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for the offline disk, then click **Online**.