---
title: "Replacing Disks"
description: "Provides disk replacement instructions that take a failed disk offline and replaces a disk in an existing VDEV. The replacement process automatically triggers a pool resilvers."
weight: 10
tags:
- disks
keywords:
- nas storage device
- enterprise data storage solutions
- nas data storage
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

This tutorial includes instructions for replacing a failed disk in TrueNAS systems with and without an available hot spare.

To replace a disk in a pool without a hot spare available:

1. [Take the disk offline](#taking-a-failed-disk-offline).
2. [Replace the disk](#replacing-a-failed-disk-without-a-hot-spare).
3. Refresh the screen.

To replace a disk in a pool with a hot spare:

1. [Take the disk offline](#taking-a-failed-disk-offline).
2. [Detach the failed disk](#detaching-a-failed-disk) to promote the hot spare.
3. Refresh the screen.
4. [Recreate the hot spare VDEV](#recreating-a-hot-spare).

## Replacing a Failed Disk

If you configure your main SCALE **Dashboard** to include individual **Pool** or the **Storage** widgets they show the status of your system pools as on or offline, degraded, or in an error condition.

{{< trueimage src="/images/SCALE/Storage/MainDashboardPoolAndStorageWidgetsDegraded.png" alt="Main Dashboard Pool and Storage Widgets Degraded" id="Main Dashboard Pool and Storage Widgets Degraded" >}}

The **Storage Dashboard** pool widgets also show the status of each of your pools.

{{< trueimage src="/images/SCALE/Storage/StoragePoolWidgetsDegradedState.png" alt="Storage Pool Widgets in Degraded State" id="Storage Pool Widgets in Degraded State" >}}

From the main Dashboard, you can click the <i class="fa fa-database" aria-hidden="true" title="Pool Status"></i> on either the **Pool** or **Storage** widget or you can click **Storage** on the main navigation menu to open the **Storage Dashboard** screen and locate the pool in the degraded state.

{{< expand "My disk is faulted. Should I replace it?" "v" >}}
If a disk shows a faulted state, TrueNAS has detected an issue with that disk and you should replace it.
{{< /expand >}}

{{< expand "Can I use a disk that is failing but still active?" "v" >}}
There are situations where you can leave a disk that has not completely failed online to provide additional redundancy during the replacement procedure.
{{< hint type=important >}}
We do not recommend leaving failed disks online unless you know the exact condition of the failing disk.
{{< /hint >}}
Attempting to replace a heavily degraded disk without off-lining it significantly slows down the replacement process.
{{< /expand >}}

### Taking a Failed Disk Offline

We recommend users off-line a disk before starting the physical disk replacement.
Off-lining a disk removes the device from the pool and can prevent swap issues.
To offline a disk:

Go to the **Storage Dashboard** and click **Manage Devices** on the **Topology** widget for the degraded pool to open the **Devices** screen for that pool.
Click <span class="iconify" data-icon="mdi:keyboard-arrow-right"></span> next to the VDEV to expand it, then look for the disk with the **REMOVED** status.

{{< trueimage src="/images/SCALE/Storage/DevicesDiskDegraded.png" alt="Devices Disk Failed" id="Devices Disk Failed" >}}

Click on the failed disk, then click **Offline** in the **ZFS Info** widget to take the disk offline.
The disk status changes to **OFFLINE**.

{{< expand "The offline failed?" "v" >}}
If the off-line operation fails with a **Disk offline failed - no valid replicas** message, go to **Storage Dashboard** and click **Scrub** on the **ZFS Health** widget for the pool with the degraded disk. The **Scrub Pool** confirmation dialog opens. Select **Confirm** and then click **Start Scrub**.

{{< trueimage src="/images/SCALE/Storage/StorageZFSHealthScrub.png" alt="Storage ZFS Health Scrub Pool" id="Storage ZFS Health Scrub Pool" >}}

When the scrub operation finishes, return to the **Devices** screen, expand the VDEV, then click the disk, and try to off-line it again.
{{< /expand >}}

After offlining the failed disk, physically remove it from the system.

### Replacing a Failed Disk in a Non-Hotswappable System

To replace a failed disk in a non-hotswappable system, first, identify the serial number of the failed disk. To find the serial number, click on **Disks** on the **Storage** screen. The serial number is crucial for ensuring that you finish the replacement process on the correct disk.

After you have identified the failed disk, [take the failed disk offline](#taking-a-failed-disk-offline). Then, completely shut down your system. This is a vital step for non-hotswappable systems, as disks cannot be removed or inserted in a non-hotswappable system if the power is still on.

When you have ensured that your system is powered off, remove the failed drive from the system. Double-check the serial number on the drive you are removing to verify that it is the failed drive you previously identified.

Insert and connect the replacement disk and power-up your system. Complete the resilver process below that matches your hot spare availability.

### Replacing a Failed Disk Without a Hot Spare

After [taking the failed disk offline](#taking-a-failed-disk-offline) and physically removing it from the system, insert the replacement disk now.
The new disk must have the same or greater capacity as the failed disk.
If replacing a failed disk with an available disk in the system, proceed to the next step.

Click **Replace** on the **Disk Info** widget on the **Devices** screen for the disk you off-lined.

Select the new drive from the **Member Disk** dropdown list on the **Replacing disk** dialog.

   {{< trueimage src="/images/SCALE/Storage/ReplacingDiskDialog.png" alt="Replacing Disk Dialog" id="Replacing Disk Dialog" >}}

Click **Replace Disk** to add the new disk to the VDEV and bring it online.

Disk replacement fails when the selected disk has partitions or data present.
To destroy any data on the replacement disk and allow the replacement to continue, select the **Force** option.

   {{< trueimage src="/images/SCALE/Storage/ReplacingDiskStatusDialog.png" alt="Replacing Disk Status" id="Replacing Disk Status" >}}

When the disk wipe completes, TrueNAS starts replacing the failed disk.
TrueNAS resilvers the pool during the replacement process.
For pools with large amounts of data, this can take a long time.
When the resilver process completes, the pool status returns to **Online** on the **Devices** screen.

Refresh the screen to ensure the replacement disk appears in the pool as expected.

### Replacing a Failed Disk With a Hot Spare

A **Hot Spare** vdev sets up drives as reserved to prevent larger pool and data loss scenarios.
TrueNAS automatically inserts an available hot spare into a **Data** vdev when an active drive fails.
TrueNAS resilvers the pool after the hot spare is activated.

#### Detaching a Failed Disk

After [taking the failed disk offline](#taking-a-failed-disk-offline) and physically removing it from the system, go to the **Storage Dashboard** and click **Manage Devices** on the **Topology** widget for the degraded pool to open the **Devices** screen for that pool.
Click <span class="iconify" data-icon="mdi:keyboard-arrow-right"></span> next to the VDEV to expand it, then look for the disk with the **REMOVED** status.

{{< trueimage src="/images/SCALE/Storage/DevicesDiskDegradedHotSpare.png" alt="Devices Disk Failed - Hot Spare Active" id="Devices Disk Failed - Hot Spare Active" >}}

Click **Detach** on the **ZFS Info** widget on the **Devices** screen for the disk you off-lined.

Select **Confirm**, then click **Detach**.
TrueNAS detaches the disk from the pool and promotes the hot spare disk to a full member of the pool.

Refresh the screen to ensure the promoted hot spare appears in the pool as expected.

#### Recreating a Hot Spare

After promoting the hot spare, recreate the **Spare** vdev and assign a disk to it.

{{< expand "Do I really need to promote the hot spare and then recreate the spare vdev?" "v" >}}
If you have a hot spare inserted into the pool and then follow the instructions in [Replacing a Failed Disk Without a Hot Spare](#replacing-a-failed-disk-without-a-hot-spare), TrueNAS automatically returns the hot spare disk to the existing **Spare** vdev and **ONLINE** status.

However, we do not recommend this method, because it causes two resilver events: one when activating the hot spare and again when replacing the failed disk.
Resilvering degrades system performance until completed and causes unnecessary strain on the disk.

To avoid unnecessary resilvers, promote the hot spare by [detaching the failed disk]](#detaching-a-failed-disk) then recreate the hot spare vdev.
{{< /expand >}}

If recreating the spare with a replacement in place of the failed disk, insert the replacement disk now.
The new disk must have the same or greater capacity as the failed disk.
If recreating the spare with an available disk in the system, proceed to the next step.

Go to the **Storage Dashboard** and click **Manage Devices** on the **Topology** widget for the degraded pool to open the **Devices** screen for that pool.

Click **Add VDEV** to open the **Add Vdevs to Pool** screen.

Click the **Spare (Optional)** row to expand it.

{{< trueimage src="/images/SCALE/Storage/AddVdevToPoolSpareScreen.png" alt="Add Vdev Spare" id="Add Vdev Spare" >}}

Select a disk size equal to or greater than the failed disk or click **Manual Disk Selection** to choose the replacement disk.
Click **Save And Go To Review**.

{{< trueimage src="/images/SCALE/Storage/AddVdevToPoolReviewScreen.png" alt="Review Screen" id="Review Screen" >}}

Review changes then click **Update Pool**.
Select **Confirm**, then click **Continue**.

After completing the job, TrueNAS returns to the **Storage Dashboard** screen.
Review **Spare VDEVs** on the **Topology** widget to confirm the hot spare is added.
