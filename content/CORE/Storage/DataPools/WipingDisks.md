---
title: "Wiping Disks"
description:  "How to delete data from a disk."
weight: 40
---

The **Wipe** function is used to delete obsolete data off an unused disk.

Clicking **Wipe** offers several options:

- **Quick** - Erases only the partitioning information on a disk, making it easy to reuse but without clearing other old data. Quick wipes take only a few seconds.
- **Full with zeros** -  Overwrites the entire disk with zeros and can take several hours to complete.
- **Full with random** - Overwrites the entire disk with random binary code and takes even longer than **Full with zeros** to complete.

## Process

Go to **Storage** > **Disks**. Click on **>** to the right of the disk you have chosen to wipe. A basic description of the disk will be provided.  Click on **WIPE**.
Dialog will show the **Name** of the disk (da1, da2, ada4 etc.) and **Method**.  Click on **Method**. Dropdown will show the different wipe options available.

{{< hint warning >}}
Ensure all data is backed up and the disk is no longer in use. Triple check that the correct disk is being selected to be wiped, as recovering data from a wiped disk is usually impossible.
{{< /hint >}}

![Storage Disks Expand](/images/CORE/12.0/StorageDisksExpand.png "Storage Disks Expand")
StorageDisksExpand.png
<br><br>

![Storage Disks Wipe Method](/images/CORE/12.0/StorageDisksWipeMethod.png "Storage Disks Wipe Method")
<br><br>

After choosing the appropriate method, click **WIPE**.  A dialog prompts **Wipe this disk?**.  ***Verify the name to ensure you have the correct disk chosen***. Check **Confirm** and click **CONTINUE**.  **Wipe** progress is shown in a dialog.

![Storage Disks Wipe Confirm](/images/CORE/12.0/StorageDisksWipeConfirm.png "Storage Disks Wipe Confirm")
<br><br>
