---
title: "Disk Replacement"
description: "Describes how to replace a disk and restore the hot spare in TrueNAS CORE."
weight: 20
tags:
- disks
---

Hard drives and solid-state drives (SSDs) have a finite lifetime and can fail unexpectedly.
When a disk fails in a Stripe (RAID0) pool, you must recreate the entire pool and restore all data backups.
We always recommend creating non-stripe storage pools that have disk redundancy.

To prevent further redundancy loss or eventual data loss, always replace a failed disk as soon as possible!
TrueNAS integrates new disks into a pool to restore it to full functionality.

{{< hint type=important >}}
TrueNAS requires you to replace a disk with another disk of the same or greater capacity as a failed disk.
You must install the disk in the TrueNAS system.
It should not be part of an existing storage pool.
TrueNAS wipes the data on the replacement disk as part of the process.

Disk replacement automatically triggers a pool resilver.
{{< /hint >}}

{{< expand "Can I replace a disk in a GELI-encrypted (Legacy) pool?" "v" >}}
Although GELI encryption is deprecated, TrueNAS implements GELI encryption during a "GELI-Encrypted (Legacy) pool" disk replacement. TrueNAS uses GELI encryption for the lifetime of that pool, even after replacement.
{{< /expand >}}

The TrueNAS **Pool** widget on the main **Dashboard** shows when a disk failure degrades a pool.

{{< trueimage src="/images/CORE/Dashboard/DashboardPoolDegraded.png" alt="Degraded Pool" id="Degraded pool on dashboard widget" >}}

Click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> on the pool card to go to the **Storage > Pools > Pool Status** screen to locate the failed disk.

{{< expand "My disk is faulted. Should I replace it?" "v" >}}
If a disk shows a faulted state, TrueNAS has detected an issue with that disk and you should replace it.
{{< /expand >}}

To replace a disk in a pool without a hot spare available:

1. [Take the disk offline](#taking-a-failed-disk-offline).
2. [Replace the disk](#replacing-a-failed-disk).
3. Refresh the screen.

To replace a disk in a pool with a hot spare:

1. [Take the disk offline](#taking-a-failed-disk-offline).
2. [Detach the failed disk](#detaching-a-failed-disk) to promote the hot spare.
3. Refresh the screen.
4. [Recreate the hot spare VDEV](#recreating-the-hot-spare).

## Taking a Failed Disk Offline

We recommend you take the disk offline before starting the replacement.
This removes the device from the pool and can prevent swap issues.
To offline a disk:

Go to the **Storage > Pools** screen, click on the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> settings icon, and then select **Status** to open the **Pool Status** screen and display the disks in the pools.

Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for the disk you plan to remove and then click **Offline**.

{{< trueimage src="/images/CORE/Storage/StoragePoolsStatusDiskFailedOptions.png" alt="Disk Options" id="Pool Status disk options" >}}

Select **Confirm**, then click **OFFLINE**.

When the disk status shows as **Offline**, physically remove the disk from the system.

{{< trueimage src="/images/CORE/Storage/StoragePoolsStatusOffline.png" alt="Offline Disk" id="Pool Status disk offline" >}}

{{< expand "The offline failed?" "v" >}}
If the offline operation fails with a **Disk offline failed - no valid replicas** message, go to **Storage > Pools**, click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> for the degraded pool, and select **Scrub Pool**.
When the scrub operation finishes, reopen the pool **Status** and try to offline the disk again.
{{< /expand >}}

## Replacing a Failed Disk

If replacing the failed disk that you have taken offline and removed, insert the replacement disk now.
If replacing a failed disk with an available disk in the system, proceed to the next step.

In the **Pool Status** screen, open the options for the offline disk and click **Replace**

{{< trueimage src="/images/CORE/Storage/StoragePoolsStatusDiskReplace.png" alt="Replacing Disk" id="Replacing disk screen" >}}

Select a new member disk and click **Replace Disk**.
The new disk must have the same or greater capacity as the disk you are replacing.
The replacement fails when the chosen disk has partitions or data present.
To destroy any data on the replacement disk and allow the replacement to continue, set the **Force** option.

When the disk wipe completes and TrueNAS starts replacing the failed disk, the **Pool Status** screen changes to show the in-progress replacement.

{{< trueimage src="/images/CORE/Storage/StoragePoolsStatusReplaceStart.png" alt="Replacing Started" id="Pool Status replacing disk" >}}

TrueNAS resilvers the pool during the replacement process.
For pools with large amounts of data, resilvering can take a long time.

When the resilver completes, the **Pool Status** screen updates to show the new disk, and the pool status returns to **Online**.

{{< trueimage src="/images/CORE/Storage/StoragePoolsStatusReplaceComplete.png" alt="Replacement Complete" id="Pool Status disk replacement complete" >}}

## Replacing a Failed Disk with a Hot Spare

A **Hot Spare** vdev sets up drives as reserved to prevent larger pool and data loss scenarios TrueNAS automatically inserts an available hot spare into a **Data** vdev when an active drive fails.
The pool resilvers once the hot spare is activated.

To replace a disk in a pool with a hot spare:

1. [Take the disk offline](#taking-a-failed-disk-offline).
2. [Detach the failed disk](#detaching-a-failed-disk) to promote the hot spare.
3. Refresh the screen.
4. [Recreate the hot spare VDEV](#recreating-the-hot-spare).

### Detaching a Failed Disk

Go to the **Storage > Pools** screen, click on the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> settings icon, and then select **Status** to open the **Pool Status** screen and display the disks in the pools.

After taking the failed disk offline and removing it from the system, the disk status changes to **REMOVED** and the disk name displays the gptid.

{{< trueimage src="/images/CORE/Storage/StoragePoolsStatusHotSpareActive.png" alt="Disk Removed - Hot Spare Active" id="Disk Removed - Hot Spare Active" >}}

Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for the removed disk and then click **Detach**.

Select **Confirm**, then click **DETACH**.
TrueNAS detaches the disk from the pool and promotes the hot spare disk to a full member of the pool.

### Recreating the Hot Spare

After promoting the hot spare, recreate the **Spare** vdev and assign a disk to it.

{{< expand "Do I really need to promote the hot spare and then recreate the spare vdev?" "v" >}}
If you have a hot spare inserted into the pool and then follow the instructions in [Replacing a Failed Disk](#replacing-a-failed-disk), TrueNAS automatically returns the hot spare disk to the existing **Spare** vdev and **ONLINE** status.

However, we do not recommend this method, because it causes two resilver events: one when activating the hot spare and again when replacing the failed disk.
Resilvering degrades system performance until completed and causes unnecessary strain on the disk.

To avoid unnecessary resilvers, [promote the hot spare](#detaching-a-failed-disk) then recreate the hot spare vdev.
{{< /expand >}}

If recreating the spare with a replacement in place of the failed disk, insert the replacement disk now.
If recreating the spare with an available disk in the system, proceed to the next step.

Go to the **Storage > Pools** screen, click on the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> settings icon, and then select **Add Vdevs** to open the **Pool Manager** screen and display the disks in the pools.

Click **ADD VDEV** and select **Hot Spare**.

{{< trueimage src="/images/CORE/Storage/AddVdevsScreenHotSpare.png" alt="Add Vdev Hot Spare" id="Add Vdev Hot Spare" >}}

Select an available disk and click <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> to add it to the **Spare VDev**.

Click **ADD VDEVS**.
Select **Confirm**, then click **ADD VDEVS**.

After completing the job, TrueNAS returns to the **Storage > Pools** screen.
Click on the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> settings icon, and then select **Status** to open the **Pool Status** screen and confirm the hot spare is added.
