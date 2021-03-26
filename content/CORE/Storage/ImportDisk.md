---
title: "Import Disk"
weight: 50
---
 
Use **Storage > Import Disk** to integrate UFS (BSD Unix), NTFS (Windows), MSDOS (FAT), or EXT2 (Linux) formatted disks into TrueNAS.
This is a one-time import, copying the data from that disk into a TrueNAS dataset.
Only one disk can be imported at a time, and the disk must be installed or physically connected to the TrueNAS system.

{{< expand "What about EXT3 or EXT4 filesystems?" "v" >}}
Importing an EXT3 or EXT4 filesystem is possible in some cases, although neither is fully supported.
EXT3 journaling is not supported, so those filesystems must have an external `fsck` utility, like the one provided by [E2fsprogs utilities](http://e2fsprogs.sourceforge.net/), run on them before import.
EXT4 filesystems with extended attributes or inodes greater than 128 bytes are not supported.
EXT4 filesystems with EXT3 journaling must have an `fsck` run on them before import, as described above.
{{< /expand >}}

![StorageImportDisk](/images/CORE/12.0/StorageImportDisk.png "Import Disk Options")

Use the drop-down menu to select the *Disk* to import.

TrueNAS attempts to detect and select the the *Filesystem type*.
Selecting the MSDOSFS filesystem shows an additional *MSDOSFS locale* drop-down menu.
Use this option to select the locale when non-ASCII characters are present on the disk.

Finally, browse to the ZFS dataset to hold the copied data and define the *Destination Path*.

After clicking *SAVE*, the chosen *Disk* mounts and its contents copied to the specified dataset at the end of the *Destination Path*.
To monitor an in-progress import, open the Task Manager by clicking the <i class="material-icons" aria-hidden="true" title="Assignment">assignment</i> (Clipboard icon) in the interface top bar.
The disk unmounts after the copy operation completes.
A dialog allows viewing or downloading the disk import log.

{{< expand "The import was interrupted!" "v" >}}
Use the same import procedure to restart the task.
Choose the same *Destination Path* as the interrupted import for TrueNAS to scan the destination for previously imported files and resume importing any remaining files.
{{< /expand >}}
