---
title: "Disk Replacement"
weight: 20
aliases: /core/storage/disks/diskreplace/
---

{{< toc >}}

Hard drives or solid-state drives (SSDs) have a finite lifetime and can fail unexpectedly.
When a disk fails in a Stripe (RAID0) pool, the entire pool has to be recreated and all data restored from backups.
Creating non-stripe storage pools that have disk redundancy is always recommended.

To prevent further loss of redundancy or eventual data loss, always replace a failed disk as soon as possible!
TrueNAS integrates new disks into a pool to restore the pool back to full functionality.

## Replacing a Disk

Another disk of the same or greater capacity is required to replace a failed disk.
This disk must be installed in the TrueNAS system and not part of an existing storage pool.
Any data on the replacement disk is wiped as part of the process.

{{< expand "Can I replace a disk in a GELI-encrypted (Legacy) pool?" "v" >}}
Yes. In a GELI-Encrypted (Legacy) pool TrueNAS will still implement GELI-encryption during a disk replacement. That will continue for the "remaining life" of the pool.
{{< /expand >}}

The TrueNAS **Dashboard** shows when a disk failure degrades a pool.

![DashboardPoolDegraded](/images/CORE/12.0/DashboardPoolDegraded.png "Degraded Pool on the Dashboard")

Click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> on the pool card to go to the **Storage > Pools > Pool Status** screen and locate the failed disk.

### Offline the Failed Disk

Clicking <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the failed disk shows additional operations.

![StoragePoolsStatusDiskFailedOptions](/images/CORE/12.0/StoragePoolsStatusDiskFailedOptions.png "Options for a Failed Disk")

We recommend you *offline* the disk before starting the replacement. 
This removes the device from the pool and can prevent swap issues. To offline a disk:

Go to **Storage > Pools** screen. 

Click on the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> settings icon, and then select **Pool Status** to display the list of disks in the pools.

Click the <span class="material-icons">chevron_right</span> icon for the disk you plan to remove, and then select **Offline**.

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

![StoragePoolsStatusOffline](/images/CORE/12.0/StoragePoolsStatusOffline.png "Disk Offline Status")

If the replacement disk is not already physically added to the system, add it now.

### Online the New Disk

In the **Pool Status**, open the options for the offline disk and click **Replace**

![StoragePoolsStatusDiskReplace](/images/CORE/12.0/StoragePoolsStatusDiskReplace.png "Disk Replace Options")

Select a new member disk and click **Replace Disk**.
The new disk must have the same or greater capacity as the disk you are replacing.
The replacement fails when the chosen disk has partitions or data present.
To destroy any data on the replacement disk and allow the replacement to continue, set the **Force** option.

When the disk wipe completes and TrueNAS starts replacing the failed disk, the **Pool Status** changes to show the in-progress replacement.

![Storage Pools Status Replace Start](/images/CORE/12.0/StoragePoolsStatusReplaceStart.png "Disk Replacement Started")

TrueNAS resilvers the pool during the replacement process.
For pools with large amounts of data, this can take a long time.
When the resilver is complete, the pool status screen updates to show the new disk and the pool status returns to **Online**.

![Storage Pools Status Replace Complete](/images/CORE/12.0/StoragePoolsStatusReplaceComplete.png "Replacement Complete")
