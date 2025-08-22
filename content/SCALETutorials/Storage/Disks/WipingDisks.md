---
title: "Wiping a Disk"
description: "Provides instructions for wiping a disk."
weight: 20
tags:
- disks
keywords:
- nas storage device
- enterprise data storage solutions
- nas data storage
---

The disk wipe option deletes obsolete data from an unused disk.

{{< hint type=warning >}}
Wipe is a destructive action and results in permanent data loss!
Back up any critical data before wiping a disk.
{{< /hint >}}

TrueNAS only shows the **Wipe** option for unused disks.

![DiskScreenExpandedDiskWithWipeOption](/images/SCALE/Storage/DiskScreenExpandedDiskWithWipeOption.png "Disk Details")

{{< hint type=warning >}}
Ensure you have backed-up all data and are no longer using the disk.
Triple check that you have selected the correct disk for the wipe.
Recovering data from a wiped disk is usually impossible.
{{< /hint >}}

Click **Wipe** to open a dialog with additional options:

* **Quick** erases only the partitioning information on a disk without clearing other old data, making it easy to reuse. Quick wipes take only a few seconds.
* **Full with zeros** overwrites the entire disk with zeros and can take several hours to complete.
* **Full with random** overwrites the entire disk with random binary code and takes even longer than the **Full with zeros** operation to complete.

After selecting the appropriate method, click **Wipe** and confirm the action. A Confirmation dialog opens.

![WipeDiskConfirmationDialog](/images/SCALE/Storage/WipeDiskConfirmationDialog.png "Wipe Disk Confirmation Dialog")

Verify the name to ensure you have chosen the correct disk. When satisfied  you can wipe the disk, set **Confirm** and click **Continue**.

**Continue** starts the disk wipe process and opens a progress dialog with the **Abort** button.

![DiskWipeProgressDialog](/images/SCALE/Storage/DiskWipeProgressDialog.png "Wipe Disk Progress Dialog")

**Abort** stops the disk wipe process. At the end of the disk wipe process a success dialog displays.
**Close** closes the dialog and returns you to the **Disks** screen.
