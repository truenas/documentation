---
title: "ZFS Primer"
description: ""
weight: 70
aliases:
tags:
- corezfs
- scalezfs
- zfs
---

{{< toc >}}


Zettabyte File system (ZFS) is an advanced, modern file system specifically designed to provide features not available in traditional UNIX file systems.
Sun originally developed and intended ZFS to be an open-source file system that can be ported to other operating systems.
After the Oracle acquisition of Sun, some of the original ZFS engineers founded [OpenZFS](https://openzfs.org/wiki/Main_Page) to provide continued, collaborative development of the open source version.

## ZFS Feature Overview

Here is an overview of the features provided by ZFS.

### ZFS Copy-On-Write (COW) File System

ZFS is a transactional, Copy-On-Write ([COW](https://en.wikipedia.org/wiki/ZFS#Copy-on-write_transactional_model)) file system.
For each write request, a copy is made of the associated disk blocks and all changes are made to the copy rather than to the original blocks.
When the write completes, all block pointers change to point to the new copy.
This means that ZFS always writes to free space. 
Most writes are sequential, and old versions of files are not unlinked until it writes a complete new version. 

ZFS has direct access to disks and bundles multiple read and write requests into transactions.
Most file systems cannot do this, as they only have access to disk blocks.
A transaction either completes or fails, meaning there are never [write-holes](https://blogs.oracle.com/bonwick/raid-z). A *write-hole* is a failure of the traditional parity RAID that applies to any stripe plus parity RAID layout like RAID4, RAID5, etc. 

A file system checker utility is not necessary. 
Because of the transactional design, as you add more storage capacity, it becomes immediately available for writes.
To rebalance the data, one can copy it to rewrite the existing data across all available disks.
As a 128-bit file ystem, the maximum file system or file size is 16 exabytes.

### ZFS Self-Healing File System

ZFS is designed as a self-healing file system. 
As ZFS writes data, it creates a checksum for each disk block it writes. 
As ZFS reads data, it validates the checksum for each disk block it reads. 
Media errors or bit rot can cause data to change, and the checksum no longer matches.
When ZFS identifies a disk block checksum error on a pool that is mirrored or uses RAIDZ, it replaces the corrupted data with the correct data.
Since some disk blocks are rarely read, schedule regular scrubs so that ZFS can read all of the data blocks to validate their checksums and correct any corrupted blocks.
While providing redundancy and data correction requires multiple disks, ZFS still provides data corruption detection to a system with one disk.
TrueNAS automatically schedules a monthly scrub for each ZFS pool.
Checking scrub results provides an early indication of potential disk problems.

### ZFS Partition Sizes and File Systems

ZFS does not need defined partition sizes when creating file systems. 
Unlike traditional UNIX file systems, it is not necessary to define partition sizes when creating file systems. 
Instead, a group of disks, known as a *vdev*, are built into a ZFS *pool*. 
File systems are created from the pool as needed.
As you need more capacity, stripe identical vdevs into the pool.
After creating a pool, you can divide it into dynamically-sized datasets or fixed-size zvols as needed.
Use datasets to optimize storage for the type of data stored. You can set permissions and properties such as quotas and compression on a per-dataset level.
A zvol is essentially a raw, virtual block device which you can use for applications that need raw-device semantics such as iSCSI device extents.

### ZFS Real-Time Data Compression 

ZFS supports real-time data compression. 
Compression happens when writing a block to disk, but only if the written data benefits from compression.
When accessing a compressed block, it is automatically decompressed. 
Since compression happens at the block level and not at the file level, it is transparent to any applications accessing the compressed data. 
The LZ4 compression algorithm is generally recommended for new pools.

### ZFS Snapshots

ZFS provides low-cost, instantaneous snapshots of a specified pool, dataset, or zvol.
Due to COW, snapshots initially take no additional space. 
The size of a snapshot increases over time as changes to the files in the snapshot write to disks.
You can use snapshots to provide a copy of data at the point in time the snapshot is created. 
When you delete a file, disk blocks for it are added to the free list. 
However, the blocks for that file in any existing snapshots are not added to the free list until all referencing snapshots are removed. 
This makes snapshots a clever way to keep a history of files, and useful for recovering an older copy of a file or a deleted file. 
For this reason, many administrators take snapshots often, store them for a period of time, and store them on another system. 
Such a strategy allows the administrator to roll the system back to a specific time. 
For example, if there is a catastrophic loss, you can use an off-site snapshot to restore the system up to the last snapshot interval, within 15 minutes of the data loss.

Snapshots are stored locally but you can also replicate them to a remote ZFS pool. 
During replication, ZFS does not do a byte-for-byte copy but instead converts a snapshot into a stream of data. 
This design means that the ZFS pool on the receiving end does not need to be identical and can use a different RAIDZ level, volume size, or compression settings.

### ZFS Boot Environments 

ZFS boot environments provide a method for recovering from a failed upgrade. 
In TrueNAS, a snapshot of the dataset the operating system resides on is automatically taken before an upgrade or a system update. 
This saved boot environment is automatically added to the GRUB boot loader. 
Should the upgrade or configuration change fail, just reboot and select the previous boot environment from the boot menu. 
Users can also create their own boot environments in TrueNAS as needed. For example before making configuration changes. 
This way, you can reboot the system into a snapshot of the system that did not include the new configuration changes.


### ZFS Write Cache

ZFS provides a write cache in RAM as well as a ZFS Intent Log ([ZIL](/references/slog/).
The *ZIL* is a storage area that [temporarily holds synchronous writes until writing them to the ZFS pool](https://technotes.seastrom.com/assets/2018-11-13-ZFS-reading-list/Aaron_Toponce_ZFS_Administration_Appendices.pdf). 
Adding a fast (low-latency), power-protected SSD as a *SLOG* (Separate Log) device permits much higher performance. 
This is a necessity for ESXi over NFS, and highly recommended for database servers or other applications that depend on synchronous writes.
More detail on SLOG benefits and usage is available in these blog and forum posts:

* [Some insights into SLOG/ZIL with ZFS on FreeNAS®](https://forums.freenas.org/index.php?threads/some-insights-into-slog-zil-with-zfs-on-freenas.13633/)

* [ZFS Intent Log](https://nex7.blogspot.com/2013/04/zfs-intent-log.html)

Synchronous writes are relatively rare with SMB, AFP, and iSCSI, and adding a SLOG to improve performance of these protocols only makes sense in special cases. 
You an run the `zilstat` utility from the TrueNAS **Shell** to determine if the system can benefit from a SLOG. 
See [this discussion about interpreting Zilstat data](https://www.truenas.com/community/threads/how-to-interpret-zilstat-output.70370/) for additional information.

ZFS currently uses 16 GiB of space for SLOG.
You can install larger SSDs, but the extra space is not used. 
YOu cannot share SLOG devices between pools. 
Each pool requires a separate SLOG device. 
Bandwidth and throughput limitations require that you only use a SLOG device for this single purpose. 
Do not attempt to add other caching functions on the same SSD, or performance suffers.

In mission-critical systems, a mirrored SLOG device is highly recommended. 
ZFS pools at ZFS version 19 or earlier require mirrored SLOG devices.
Check the ZFS pool version from the TrueNAS Shell with `zpool get version {poolname}`. 
A version value of `-` means the ZFS pool is version 5000 (also known as *Feature Flags*) or later.

### ZFS Read Cache

ZFS provides a read cache in RAM, known as the ARC, which reduces read latency. 
TrueNAS adds ARC stats to [top(1)](https://www.freebsd.org/cgi/man.cgi?query=top) and includes the `arc_summary.py` and `arcstat.py` tools for monitoring the ARC efficiency. 
If an SSD is dedicated as a cache device, it is known as an [L2ARC](https://www.brendangregg.com/blog/2008-07-22/zfs-l2arc.html). 
Additional read data is cached here, which can increase random read performance. 
L2ARC does not reduce the need for sufficient RAM. 
In fact, L2ARC needs RAM to function. 
If there is not enough RAM for an adequately-sized ARC, adding an L2ARC does not increase performance. 
Performance actually decreases in most cases, potentially causing system instability. 
RAM is always faster than disks, so always add as much RAM as possible before considering whether the system can benefit from an L2ARC device.

When applications perform large amounts of random reads on a dataset small enough to fit into L2ARC, you can increase read performance by adding a dedicated cache device. 
SSD cache devices only help if the active data is larger than system RAM but small enough that a significant percentage fits on the SSD. 
As a general rule, do not add L2ARC to a system with less than 32 GiB of RAM, and the size of an L2ARC should not exceed ten times the amount of RAM. 
In some cases, it might be more efficient to have two separate pools: one on SSDs for active data, and another on hard drives for rarely used content. 
After adding an L2ARC device, monitor its effectiveness using tools such as `arcstat`.
To increase the size of an existing L2ARC, stripe another cache device with it. 
The web interface always stripes L2ARC, it does not mirror it, as the contents of L2ARC are recreated at boot. 
Failure of an individual SSD from an L2ARC pool does not affect the integrity of the pool, but might have an impact on read performance, depending on the workload and the ratio of dataset size to cache size. 
Note you cannot share dedicated L2ARC devices between ZFS pools.

### ZFS Redundancy and RAID

ZFS was designed to provide redundancy while addressing some of the inherent limitations of hardware RAID such as the write-hole and corrupt data written over time before the hardware controller provides an alert.
ZFS provides three levels of redundancy, known as RAIDZ, where the number after the RAIDZ indicates how many disks per vdev you can lose without losing data. 
ZFS also supports mirrors, with no restrictions on the number of disks in the mirror. 
ZFS was designed for commodity disks so no RAID controller is needed. 
While you can also use ZFS with a RAID controller, it is recommended that you put the controller into JBOD mode so that ZFS has full control of the disks. 

When determining the type of ZFS redundancy to use, consider whether the goal is to maximize disk space or performance: 

* A RAIDZ1 maximizes disk space and generally performs well when data is written and read in large chunks (128K or more).

* A RAIDZ2 offers better data availability and significantly better mean time to data loss (MTTDL) than RAIDZ1.

* A mirror consumes more disk space but generally performs better with small random reads.
  For better performance, a mirror is strongly favored over any RAIDZ, particularly for large, uncacheable, random read loads.

Using more than 12 disks per vdev is not recommended. 
The recommended number of disks per vdev is between 3 and 9. 
With more disks, use multiple vdevs.

Some older ZFS documentation recommends using a certain number of disks for each type of RAIDZ in order to achieve optimal performance.
On systems using LZ4 compression, which is the default for FreeNAS 9.2.1 and later, this is no longer true.

These resources can also help determine the RAID configuration best suited to the specific storage requirements:

* [Getting the Most out of ZFS Pools](https://forums.freenas.org/index.php?threads/getting-the-most-out-of-zfs-pools.16/)

* [A Closer Look at ZFS, Vdevs and Performance](https://constantin.glez.de/2010/06/04/a-closer-look-zfs-vdevs-and-performance/)

{{< hint warning >}}
RAID and disk redundancy are not a substitue for a reilable backup strategy.
Bad things happen and a good backup strategy is still required to protect valuable data.
Configuring TrueNAS with periodic snapshots and automated replication is strongly recommended as part of a ZFS snapshot backup strategy.
{{< /hint >}}

### ZFS Device Management

ZFS manage devices. 
When an individual drive in a mirror or RAIDZ fails and is replaced by the user, ZFS adds the replacement device to the vdev and copies redundant data to it in a process called *resilvering*. 
Hardware RAID controllers usually have no way of knowing which blocks are in use and must copy every block to the new device. 
ZFS only copies blocks that are in use, reducing the time it takes to rebuild the vdev. 
Resilvering is also interruptable. 
After an interruption, resilvering resumes where it left off rather than starting from the beginning. 

While ZFS provides many benefits, there are some caveats:

* Disk capacity

  At 90% capacity, ZFS switches from performance- to space-based optimization, which has massive performance implications. 
  For maximum write performance and to prevent problems with drive replacement, add more capacity before a pool reaches 80%.

* Disk number
  
  When considering the number of disks to use per vdev, consider the size of the disks and the amount of time required for resilvering, which is the process of rebuilding the vdev.
  The larger the size of the vdev, the longer the resilvering time. 
  When replacing a disk in a RAIDZ, it is possible another disk could fail before the resilvering process completes.
  If the number of failed disks exceeds the number allowed per vdev for the type of RAIDZ, the data in the pool is lost.
  For this reason, RAIDZ1 is not recommended for drives over 1 TiB in size.

* Disks size
  
  Using drives of equal sizes is recommended when creating a vdev. 
  While ZFS can create a vdev using disks of differing sizes, its capacity is limited by the size of the smallest disk.

For those new to ZFS, the [Wikipedia entry on ZFS](https://en.wikipedia.org/wiki/Zfs) provides an excellent starting point to learn more about its features. 
These resources are also useful for reference:

* [FreeBSD ZFS Tuning Guide](https://wiki.freebsd.org/ZFSTuningGuide)

* [Becoming a ZFS Ninja - Part 1 (video)](https://www.youtube.com/watch?v=tPsV_8k-aVU)

* [Slideshow explaining VDev, zpool, ZIL and L2ARC and other easy mistakes!](https://forums.freenas.org/index.php?threads/slideshow-explaining-vdev-zpool-zil-and-l2arc-for-noobs.7775/)

* [ZFS: The Last Word in File Systems - Part 1 (video)](https://www.youtube.com/watch?v=NRoUC9P1PmA)

* [The Zettabyte File system (video)](https://www.youtube.com/watch?v=ptY6-K78McY)

* [ZFS Debian](https://wiki.debian.org/ZFS)

## ZFS Feature Flags

To differentiate itself from Oracle ZFS version numbers, OpenZFS uses feature flags. 
Feature flags tag features with unique names to provide portability between OpenZFS implementations running on different platforms, as long as all of the feature flags enabled on the ZFS pool are supported by both platforms. 
TrueNAS uses OpenZFS and each new version of TrueNAS keeps up-to-date with the latest feature flags and OpenZFS bug fixes. 

See [zpool-features(7)](https://www.freebsd.org/cgi/man.cgi?query=zpool-features) for a complete listing of all OpenZFS feature flags available on FreeBSD.
