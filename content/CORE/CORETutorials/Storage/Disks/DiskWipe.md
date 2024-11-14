---
title: "Wiping a Disk"
redirect: "https://www.truenas.com/docs/core/13.0/coretutorials/storage/disks/diskwipe/"
description: "Describes how to wipe a disk in TrueNAS CORE."
weight: 10
aliases: /core/storage/disks/diskwipe/
tags:
- disks
---

The wipe function deletes obsolete data off an unused disk.

{{< hint type=warning >}}
This is a destructive action and results in permanent data loss!
Back up any critical data off the disk to be wiped.
{{< /hint >}}

To wipe a disk, go to **Storage** > **Disks**.
Click the <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> for a disk to see all the options.

![StorageDisksExpand](/images/CORE/Storage/StorageDisksExpand.png "Disk Options")

The wipe option is only available when the disk is not in use.
Click **WIPE** to open a dialog with additional options:

![StorageDisksWipeMethod](/images/CORE/Storage/StorageDisksWipeMethod.png "Disk Wipe Options")

The disk **Name** (da1, da2, ada4) helps confirm that you have selected the right disk to wipe.

The **Method** dropdown list shows the different available wipe options available. Select **Quick** to erase only the partitioning information on a disk, making it easy to reuse but without clearing other old data. Quick wipes take only a few seconds. Select **Full with zeros** to overwrite the entire disk with zeros. This can take several hours to complete. Select **Full with random** to overwrite the entire disk with random binary code and takes even longer than **Full with zeros** to complete.

{{< hint type=warning >}}
Ensure all data is backed up and the disk is no longer in use.
Triple check that the correct disk is selected for the wipe.
Recovering data from a wiped disk is usually impossible.
{{< /hint >}}

After selecting the appropriate method, click **WIPE**.
A dialog asks for confirmation of the action.

![StorageDisksWipeConfirm](/images/CORE/Storage/StorageDisksWipeConfirm.png "Wipe Confirmation")

Verify the name to ensure you have the correct disk chosen.
When satisfied the disk can be wiped, select **Confirm** and click **CONTINUE**.
A dialog shows the disk wipe progress.

See [Disks Screens]({{< relref "DisksScreens.md" >}}) for more information on Disks screen settings.
