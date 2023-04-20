---
title: "Replacing Disks"
description: "This article provides disk replacement instructions that includes taking a failed disk offline and and replacing a disk in an existing VDEV."
weight: 20
tags:
- scaledisks
- scaledevices
---

{{< toc >}}


Hard drives and solid-state drives (SSDs) have a finite lifetime and can fail unexpectedly.
When a disk fails in a Stripe (RAID0) pool, you must to recreate the entire pool and restore all data backups.
We always recommend creating non-stripe storage pools that have disk redundancy.

To prevent further redundancy loss or eventual data loss, always replace a failed disk as soon as possible!
TrueNAS integrates new disks into a pool to restore it to full functionality.

{{< hint type=important >}}
TrueNAS requires you to replace a disk with another disk of the same or greater capacity as a failed disk.
You must install the disk install in the TrueNAS system and it should not be part of an existing storage pool.
TrueNAS wipes the data on the replacement disk as part of the process.
{{< /hint >}}

## Replacing a Failed Disk

If you configure your main SCALE **Dashboard** to include individual **Pool** or the **Storage** widgets they show the status of your system pools as on or offline, degraded, or in an error condition. 

![MainDashboardPoolAndStorageWidgetsDegraded](/images/SCALE/22.12/MainDashboardPoolAndStorageWidgetsDegraded.png "Main Dashboard Pool and Storage Widgets Degraded")

The new **Storage Dashboard** pool widgets also show the status of each of your pools. 

![StoragePoolWidgetsDegradedState](/images/SCALE/22.12/StoragePoolWidgetsDegradedState.png "Storage Pool Widgets in Degraded State") 

From the main Dashboard, you can click the <i class="fa fa-database" aria-hidden="true" title="Pool Status"></i> on either the **Pool** or **Storage** widget to go to the **Storage Dashboard** screen, or you can click **Storage** on the main navigation menu to open the **Storage Dashboard** and locate the pool in the degraded state.

{{< expand "My disk is faulted. Should I replace it?" "v" >}}
If a disk shows a faulted state, TrueNAS has detected an issue with that disk and you should replace it.
{{< /expand >}}

To replace a failed disk:

1. Locate the failed drive.

   a. Go to the **Storage Dashboard** and click **Manage Devices** on the **Topology** widget for the degraded pool to open the **Devices** screen for that pool. 
   b. Click anywhere on the VDEV to expand it and look for the drive with the Offline status.

2. Take the disk offline. 
   
   ![DevicesDiskWidgets](/images/SCALE/22.12/DevicesDiskWidgets.png "Devices Disk Widgets") 

   Click **Offline** on the **ZFS Info** widget to take the disk offline. The button toggles to **Online**.

3. Pull the disk from your system and replace it with a disk of at least the same or greater capacity as the failed disk. V:
   
   ![ReplaceDiskAndOnline](/images/SCALE/22.12/ReplaceDiskAndOnline.png "Replace and Online a Disk")
   
   a. Click **Replace** on the **Disk Info** widget on the **Devices** screen for the disk you off-lined.
   b. Select the new drive from the **Member Disk** dropdown list on the **Replacing disk *diskname*** dialog.

4. Add the new disk to the existing VDEV. Click **Replace Disk** to add the new disk to the VDEV and bring it online.

   Disk replacement fails when the selected disk has partitions or data present.
   To destroy any data on the replacement disk and allow the replacement to continue, select the **Force** option.

   ![ReplacingDiskStatusDialog](/images/SCALE/22.12/ReplacingDiskStatusDialog.png "Replacing Disk Status") 

   When the disk wipe completes, TrueNAS starts replacing the failed disk. 
   TrueNAS resilvers the pool during the replacement process.
   For pools with large amounts of data, this can take a long time.
   When the resilver process completes, the pool status returns to **Online** status on the **Devices** screen.

### Taking a Disk Offline 

We recommend users off-line a disk before starting the physical disk replacement. 
Off-lining a disk removes the device from the pool and can prevent swap issues.

{{< expand "Can I use a disk that is failing but still active?" "v" >}}
There are situations where  you can leave a disk that has not completely failed online to provide additional redundancy during the replacement procedure.
{{< hint type=important >}}
We do not recommend leaving failed disks online unless you know the exact condition of the failing disk.
{{< /hint >}}
Attempting to replace a heavily degraded disk without off-lining it significantly slows down the replacement process.
{{< /expand >}}

{{< expand "The offline failed?" "v" >}}
If the off-line operation fails with a **Disk offline failed - no valid replicas** message, go to **Storage Dashboard** and click **Scrub** on the **ZFS Health** widget for the pool with the degraded disk. The **Scrub Pool** confirmation dialog opens. Select **Confirm** and then click **Start Scrub**.

![StorageZFSHealthScrub](/images/SCALE/22.12/StorageZFSHealthScrub.png "Storage ZFS Health Scrub Pool")

When the scrub operation finishes, return to the **Devices** screen, click on the VDEV and then the disk, and try to off-line it again.
{{< /expand >}}

1. Click on **Manage Devices** to open the **Devices** screen, click anywhere on the VDEV to expand VDEV and show the drives in the VDEV. 

2. Click **Offline** on the **ZFS Info** widget. A confirmation dialog displays. Click **Confirm** and then **Offline**. 
   The system begins the process to take the disk offline. When complete, the disk displays the status of the failed disk as **Offline**. 
   The button toggles to **Online**.

   ![ReplaceDiskAndOnline](/images/SCALE/22.12/ReplaceDiskAndOnline.png "Off-Lining A Disk") 

3. You can physically remove the disk from the system when the disk status is **Offline**. 
   If the replacement disk is not already physically installed in the system, do it now.

Use **[Replace](#replacing-a-failed-disk)** to bring the new disk online in the same VDEV.

### Restoring the Hot Spare

{{< include file="/_includes/RestoreHotSpare.md" type="page" >}}
   
{{< taglist tag="scaledisks" limit="10" >}}
{{< taglist tag="scaledevices" limit="10" title="Related Devices Articles" >}}