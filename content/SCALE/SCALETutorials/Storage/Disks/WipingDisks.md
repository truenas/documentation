---
title: "Wiping a Disk"
description: "This article provides instructions for wiping a disk."
weight: 60
tags:
- scaledisks
---


The disk wipe option deletes obsolete data from an unused disk.

{{< hint danger >}}
Wipe is a destructive action and results in permanent data loss!
Back up any critical data before wiping a disk.
{{< /hint >}}

TrueNAS only shows the **Wipe** option for unused disks.

{{< hint danger >}}
Ensure you have backed-up all data and are no longer using the disk.
Triple check that you have selected the correct disk for the wipe.
Recovering data from a wiped disk is usually impossible.
{{< /hint >}}

Click **Wipe** to open a dialog with additional options:

* **Quick** erases only the partitioning information on a disk without clearing other old data, making it easy to reuse. Quick wipes take only a few seconds.
* **Full with zeros** oerwrites the entire disk with zeros and can take several hours to complete.
* **Full with random** overwrites the entire disk with random binary code and takes even longer than the **Full with zeros** operation to complete.

After selecting the appropriate method, click **Wipe** and confirm the action.

![WipeDiskSCALE](/images/SCALE/WipeDiskSCALE.png "Wipe Disk Confirmation")

Verify the name to ensure you have chosen the correct disk. When satisfied  you can wipe the disk, set **Confirm** and click **Continue**.

{{< taglist tag="scaledisks" limit="10" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}