---
title: "Wipe"
weight: 10
---

The wipe function deletes obsolete data off an unused disk.

{{< hint danger >}}
This is a destructive action and results in permanent data loss!
Back up any critical data off the disk to be wiped.
{{< /hint >}}

To wipe a disk, go to **Storage** > **Disks**.
Click the <i class="fa fa-chevron-right" aria-hidden="true" title="Right Chevron"></i> for an disk to see all the options.

![StorageDisksExpand](/images/CORE/12.0/StorageDisksExpand.png "Disk Options")

The *WIPE* option is only available when the disk is not in use.
Click *WIPE* to open a dialog with additional options:

![StorageDisksWipeMethod](/images/CORE/12.0/StorageDisksWipeMethod.png "Disk Wipe Options")

The disk *Name* (da1, da2, ada4) helps confirm that you have selected the right disk to wipe

The *Method* dropdown shows the different available wipe options available:

{{< tabs "Wipe Methods" >}}
{{< tab "Quick" >}}
Erases only the partitioning information on a disk, making it easy to reuse but without clearing other old data. Quick wipes take only a few seconds.
{{< /tab >}}
{{< tab "Full with zeros" >}}
Overwrites the entire disk with zeros and can take several hours to complete.
{{< /tab >}}
{{< tab "Full with random" >}}
Overwrites the entire disk with random binary code and takes even longer than **Full with zeros** to complete.
{{< /tab >}}
{{< /tabs >}}

{{< hint danger >}}
Ensure all data is backed up and the disk is no longer in use.
Triple check that the correct disk is selected for the wipe.
Recovering data from a wiped disk is usually impossible.
{{< /hint >}}

After choosing the appropriate method, click *WIPE*.
A dialog asks for confirmation of the action.

![StorageDisksWipeConfirm](/images/CORE/12.0/StorageDisksWipeConfirm.png "Wipe Confirmation")

**Verify the name to ensure you have the correct disk chosen**.
When satisfied the disk can be wiped, set *Confirm* and click *CONTINUE*.
A dialog shows the wipe progress.
