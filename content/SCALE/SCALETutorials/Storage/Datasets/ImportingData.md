---
title: "Importing Data"
description: "Provides instructions for importing data (from a disk) and monitoring the import progress."
weight: 25
aliases:
- /scale/scaletutorials/storage/pools/disks/importingdisks/
tags:
- scaledisks
- scaleimport
- scaleinstall
- scalemigrate
- scaledatasets
---

{{< toc >}}


Importing is a one-time procedure that copies data (from a disk) into a TrueNAS dataset.
TrueNAS can only import one disk at a time, and you must install or physically connect it to the TrueNAS system.

You can use the import function to integrate UFS (BSD Unix), NTFS (Windows), MSDOS (FAT), or EXT2 (Linux) formatted disks into TrueNAS.

{{< expand "What about EXT3 or EXT4 file systems?" "v" >}}
Importing an EXT3 or EXT4 filesystem is possible in some cases, although neither is fully supported.
EXT3 journaling is not supported, so those file systems must have an external `fsck` utility, like the one provided by [E2fsprogs utilities](http://e2fsprogs.sourceforge.net/), run on them before import.

EXT4 file systems with extended attributes or i-nodes greater than 128 bytes are not supported.
EXT4 file systems with EXT3 journaling must have an `fsck` run on them before import, as described above.
{{< /expand >}}

## Importing Data (a Disk)

You can only import one disk at a time.

To import a disk: 

1. Go to **Dataset** and click **Import Data** at the top right of the screen. 

   ![ImportDataScreen](/images/SCALE/22.12/ImportDataScreen.png "Import Data Screen") 

2. Use the **Disk** dropdown list to select the disk you want to import.
   
   TrueNAS attempts to detect and select the file system type. 
   If not already selected by the system, click a radio button for a file system type to use from the on-screen options.

   Selecting the **MSDOSFS** file system displays the **MSDOSFS locale** dropdown field. 
   Use this option to select the locale when non-ASCII characters are present on the disk. 
   Select the locale for the MSDOSFS device to see files of that locale. 

3. Select the ZFS dataset you want to hold the copied data in **Destination Path**.

4. Click **Save**. The disk mounts and copies its contents to the specified dataset you entered in **Destination Path**.

{{< expand "The import was interrupted!" "v" >}}
Use the same import procedure to restart the task.
Choose the same dataset in **Destination Path** as the interrupted import for TrueNAS to scan the destination for previously imported files and resume importing any remaining files.
{{< /expand >}}

## Monitoring a Disk Import

To monitor an in-progress import, click the <i class="material-icons" aria-hidden="true" title="Task Manager">assignment</i> on the top toolbar, then click **History** open the **Jobs Manager**.

The disk unmounts after the copy operation completes.
A dialog allows viewing or downloading the disk import log.

{{< taglist tag="scaleimport" limit="10" title="Related Import Articles" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Disks Articles" >}}