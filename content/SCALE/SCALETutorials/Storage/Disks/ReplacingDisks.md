---
title: "Replacing Disks"
description: "This article provides disk replacement instructions that includes offlinging the failed disk and onlining the replacement disk."
weight: 50
tags:
- scaledisks
---

{{< toc >}}


Hard drives and solid-state drives (SSDs) have a finite lifetime and can fail unexpectedly.
When a disk fails in a Stripe (RAID0) pool, you must to recreate the entire pool and restore all data backups.
We always recommend creating non-stripe storage pools that have disk redundancy.

To prevent further redundancy loss or eventual data loss, always replace a failed disk as soon as possible!
TrueNAS integrates new disks into a pool to restore it to full functionality.

{{< hint warning >}}
TrueNAS requires you to replace a disk with another disk of the same or greater capacity as a failed disk.
You must install the disk install in the TrueNAS system and it should not be part of an existing storage pool.
TrueNAS wipes the data on the replacement disk as part of the process.
{{< /hint >}}

## Replacing a Failed Disk

A SCALE **Pool** widget, or the **Storage** widget if you are not displaying individual pool widgets, on the **Dashboard** shows when a disk failure degrades that pool.

![DashboardPoolDegradedSCALE](/images/SCALE/DashboardPoolDegradedSCALE.png "Degraded Pool on the Dashboard")

Click the <i class="fa fa-database" aria-hidden="true" title="Pool Status"></i> on the pool card to go to the **Pool Status** screen.
You can also select **Storage** on the function main menu on the left side of the screen. The pool status displays for each pool listed on the screen. 
Click the <i class="fa fa-database" aria-hidden="true" title="Pool Status"></i> icon for the degraded pool to display the **Pool Actions** dropdown list and then click **Status** to display the **Pool Status** screen to locate the failed disk.

To replace a failed disk:

1. Offline the disk.

2. Pull the disk from your system and replace with a disk of at lease the same or greater capacity as the failed disk.

3. Online the new disk.

### Off-lining a Failed Disk

We recommend users off-line a disk before starting the physical disk replacement. Off-lining a disk removes the device from the pool and can prevent swap issues.

{{< expand "Can I use a disk that is failing but still active?" "v" >}}
There are situations where  you can leave a disk that has not completely failed online to provide additional redundancy during the replacement procedure.
{{< hint warning >}}
We do not recommend leaving failed disks online unless you know the exact condition of the failing disk.
{{< /hint >}}
Attempting to replace a heavily degraded disk without off-lining it significantly slows down the replacement process.
{{< /expand >}}

{{< expand "The offline failed?" "v" >}}
If the off-line operation fails with a **"Disk offline failed - no valid replicas"** message, go to **Storage**, click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> for the degraded pool, and select **Scrub Pool**.
When the scrub operation finishes, reopen the **Pool Status** screen and try to off-line the disk again.
{{< /expand >}}

1. Click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the failed disk to display the **Disk Actions** dropdown menu of options. 

2. Click **Offline**. A confirmation dialog displays. Click **Confirm** and then **Offline**. 
   The system begins the process to take the disk offline. When complete, the list of disks displays the status of the failed disk as **Offline**.

   ![DiskOptionsSCALE](/images/SCALE/DiskOptionsSCALE.png "Options for a Failed Disk")

3. You can physically remove the disk from the system when the disk status is **Offline**.
   
   ![DiskOfflineSCALE](/images/SCALE/DiskOfflineSCALE.png "Disk Offline Status")

4. If the replacement disk is not already physically installed in the system, do it now.

Next, bring the new disk online.

### On-lining a New Disk

The new disk must have the same or greater capacity as the disk you are replacing.

On **Pool Status** screen click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the offline disk to display the **Disk Actions** dropdown menu of options. 

1. Click **Replace**.
   
   ![DiskReplaceSCALE](/images/SCALE/DiskReplaceSCALE.png "Disk Replace Options")

2. Select a new member disk and click **Replace Disk**.
   
   Disk replacement fails when the selected disk has partitions or data present.
   To destroy any data on the replacement disk and allow the replacement to continue, select the **Force** option.

   When the disk wipe completes, TrueNAS starts replacing the failed disk. A status spinner displays over the **Pool Status** screen to show progress of the proceess.

   ![DiskReplaceProgressSCALE](/images/SCALE/DiskReplaceProgressSCALE.png "Disk Replacement Progress")

   TrueNAS resilvers the pool during the replacement process.
   For pools with large amounts of data, this can take a long time.
   When the resilver process completes, the pool status returns to **Online** status on the **Disks** screen.

   ![DiskReplaceCompleteSCALE](/images/SCALE/DiskReplaceCompleteSCALE.png "Disk Replacement Complete")

{{< taglist tag="scaledisks" limit="10" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}