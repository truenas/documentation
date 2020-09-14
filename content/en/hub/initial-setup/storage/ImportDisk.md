---
title: "Importing Disks"
description: "How to do a one-time import of data from a disk into a TrueNAS dataset."
tags: ["Import"]
---

The **Storage > Import Disk** options are used to import disks that are formatted with UFS (BSD Unix), FAT(MSDOS) or NTFS (Windows), or EXT2 (Linux) file systems.
This is a designed to be used as a one-time import, copying the data from that disk into a TrueNAS dataset.
Only one disk can be imported at a time.

> Importing an EXT3 or EXT4 filesystem is possible in some cases, although neither is fully supported.
  EXT3 journaling is not supported, so those filesystems must have an external `fsck` utility, like the one provided by [E2fsprogs utilities](http://e2fsprogs.sourceforge.net/), run on them before import.
  EXT4 filesystems with extended attributes or inodes greater than 128 bytes are not supported.
  EXT4 filesystems with EXT3 journaling must have an `fsck` run on them before import, as described above.

<img src="/images/DiskImportOptions.png">
<br><br>

Use the drop-down menu to select the disk to import, confirm the detected file system is correct, and browse to the ZFS dataset that will hold the copied data.
If the MSDOSFS filesystem is selected, an additional MSDOSFS locale drop-down menu is displayed.
Use this menu to select the locale if non-ASCII characters are present on the disk.

After clicking **SAVE**, the disk is mounted and its contents are copied to the specified dataset.
The disk is unmounted after the copy operation completes.

After importing a disk, a dialog allows viewing or downloading the disk import log.