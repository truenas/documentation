---
title: "Disk Replacement"
description: "Describes how to replace a disk and restore the hot spare in TrueNAS CORE."
weight: 20
aliases: /core/storage/disks/diskreplace/
tags:
- corediskreplace
- corerecovery
---

{{< toc >}}

Hard drives or solid-state drives (SSDs) have a finite lifetime and can fail unexpectedly.
When a disk fails in a Stripe (RAID0) pool, the entire pool has to be recreated and all data restored from backups.
Creating non-stripe storage pools that have disk redundancy is always recommended.

To prevent further loss of redundancy or eventual data loss, always replace a failed disk as soon as possible!
TrueNAS integrates new disks into a pool to restore the pool to full functionality.

## Replacing a Disk

Another disk of the same or greater capacity is required to replace a failed disk.
This disk must be installed in the TrueNAS system and not part of an existing storage pool.
Any data on the replacement disk is wiped as part of the process.

{{< expand "Can I replace a disk in a GELI-encrypted (Legacy) pool?" "v" >}}
Although GELI encryption is deprecated, TrueNAS implements GELI encryption during a "GELI-Encrypted (Legacy) pool" disk replacement. TrueNAS uses GELI encryption for the lifetime of that pool, even after replacement.
{{< /expand >}}

The TrueNAS **Dashboard** shows when a disk failure degrades a pool.

{{< trueimage src="/images/CORE/12.0/DashboardPoolDegraded.png" alt="Degraded Pool" id="1 - Degraded pool on dashboard widget." >}}

Click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> on the pool card to go to the **Storage > Pools > Pool Status** screen and locate the failed disk.

### Taking a Failed Disk Offline

Clicking <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the failed disk shows additional operations.

{{< trueimage src="/images/CORE/12.0/StoragePoolsStatusDiskFailedOptions.png" alt="Disk Options" id="2 - Pool Status disk options." >}}

We recommend you *offline* the disk before starting the replacement. 
This removes the device from the pool and can prevent swap issues. To offline a disk:

Go to **Storage > Pools** screen. 

Click on the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> settings icon, and then select **Status** to display the list of disks in the pools.

Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for the disk you plan to remove, and then select **Offline**.

Select **Confirm** to activate the **OFFLINE** button, then click **OFFLINE**. The disk should now be offline.

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

{{< trueimage src="/images/CORE/12.0/StoragePoolsStatusOffline.png" alt="Offline Disk" id="3 - Pool Status disk offline." >}}

If the replacement disk is not already physically added to the system, add it now.

### Bringing a New Disk Online

In the **Pool Status**, open the options for the offline disk and click **Replace**

{{< trueimage src="/images/CORE/12.0/StoragePoolsStatusDiskReplace.png" alt="Replacing Disk" id="4 - Replacing disk screen." >}}

Select a new member disk and click **Replace Disk**.
The new disk must have the same or greater capacity as the disk you are replacing.
The replacement fails when the chosen disk has partitions or data present.
To destroy any data on the replacement disk and allow the replacement to continue, set the **Force** option.

When the disk wipe completes and TrueNAS starts replacing the failed disk, the **Pool Status** changes to show the in-progress replacement.

{{< trueimage src="/images/CORE/12.0/StoragePoolsStatusReplaceStart.png" alt="Replacing Started" id="5 - Pool Status replacing disk." >}}

TrueNAS resilvers the pool during the replacement process.
For pools with large amounts of data, resilvering can take a long time.
When the resilver completes, the pool status screen updates to show the new disk, and the pool status returns to **Online**.

{{< trueimage src="/images/CORE/12.0/StoragePoolsStatusReplaceComplete.png" alt="Replacement Complete" id="5 - Pool Status disk replacement complete." >}}

{{< taglist tag="corerecovery" limit="10" >}}

{{< taglist tag="corestorage" limit="10" title= "Related Storage Articles" >}}