---
Title: "ZFS Primer"
linkTitle: "ZFS Primer"
weight: 4
tags: ["ZFS"]
---

ZFS is an advanced, modern filesystem that was specifically designed
to provide features not available in traditional UNIX filesystems. It
was originally developed at Sun with the intent to open source the
filesystem so that it could be ported to other operating systems.
After the Oracle acquisition of Sun, some of the original ZFS
engineers founded [OpenZFS](http://open-zfs.org/wiki/Main_Page) to
provide continued, collaborative development of the open source version.

Here is an overview of the features provided by ZFS:

**ZFS is a transactional, Copy-On-Write**
([COW](https://en.wikipedia.org/wiki/ZFS#Copy-on-write_transactional_model))
filesystem. For each write request, a copy is made of the associated
disk blocks and all changes are made to the copy rather than to the
original blocks. When the write is complete, all block pointers are
changed to point to the new copy. This means that ZFS always writes to
free space, most writes are sequential, and old versions of files are
not unlinked until a complete new version has been written
successfully. ZFS has direct access to disks and bundles multiple read
and write requests into transactions. Most filesystems cannot do this,
as they only have access to disk blocks. A transaction either
completes or fails, meaning there will never be a
[write-hole](https://blogs.oracle.com/bonwick/raid-z)
and a filesystem checker utility is not necessary. Because of the
transactional design, as additional storage capacity is added, it
becomes immediately available for writes. To rebalance the data, one
can copy it to re-write the existing data across all available disks.
As a 128-bit filesystem, the maximum filesystem or file size is 16
exabytes.

**ZFS was designed to be a self-healing filesystem**. As ZFS writes
data, it creates a checksum for each disk block it writes. As ZFS
reads data, it validates the checksum for each disk block it reads.
Media errors or "bit rot" can cause data to change, and the checksum
no longer matches. When ZFS identifies a disk block checksum error on
a pool that is mirrored or uses RAIDZ, it replaces the corrupted data
with the correct data. Since some disk blocks are rarely read, regular
scrubs should be scheduled so that ZFS can read all of the data blocks
to validate their checksums and correct any corrupted blocks. While
multiple disks are required in order to provide redundancy and data
correction, ZFS will still provide data corruption detection to a
system with one disk. TrueNAS automatically schedules a monthly scrub
for each ZFS pool. Checking scrub results provides an early indication
of potential disk problems.

Unlike traditional UNIX filesystems,
**it is not necessary to define partition sizes when filesystems are
created**.
Instead, a group of disks, known as a *vdev*, are built into a ZFS
*pool*. Filesystems are created from the pool as needed. As more
capacity is needed, identical vdevs can be striped into the pool.
After a pool is created, it can be divided into dynamically-sized
datasets or fixed-size zvols as needed. Datasets can be used to optimize
storage for the type of data being stored as permissions and properties
such as quotas and compression can be set on a per-dataset level. A zvol
is essentially a raw, virtual block device which can be used for
applications that need raw-device semantics such as iSCSI device extents.

**ZFS supports real-time data compression**. Compression happens when
a block is written to disk, but only if the written data will benefit
from compression. When a compressed block is accessed, it is
automatically decompressed. Since compression happens at the block
level, not the file level, it is transparent to any applications
accessing the compressed data. The LZ4 compression algorithm is generally
recommended for new pools.

**ZFS provides low-cost, instantaneous snapshots** of the specified
pool, dataset, or zvol. Due to COW, snapshots initially take no
additional space. The size of a snapshot increases over time as
changes to the files in the snapshot are written to disk. Snapshots
can be used to provide a copy of data at the point in time the
snapshot was created. When a file is deleted, its disk blocks are
added to the free list; however, the blocks for that file in any
existing snapshots are not added to the free list until all
referencing snapshots are removed. This makes snapshots a clever way
to keep a history of files, useful for recovering an older copy of a
file or a deleted file. For this reason, many administrators take
snapshots often, store them for a period of time, and store them on
another system. Such a strategy allows the administrator to roll the
system back to a specific time. If there is a catastrophic loss, an
off-site snapshot can restore the system up to the last snapshot
interval, within 15 minutes of the data loss, for example. Snapshots
are stored locally but can also be replicated to a remote ZFS pool.
During replication, ZFS does not do a byte-for-byte copy but instead
converts a snapshot into a stream of data. This design means that the
ZFS pool on the receiving end does not need to be identical and can
use a different RAIDZ level, volume size, or compression settings.

**ZFS boot environments provide a method for recovering from a failed
upgrade**. In TrueNAS, a snapshot of the dataset the operating system
resides on is automatically taken before an upgrade or a system
update. This saved boot environment is automatically added to the
GRUB boot loader. Should the upgrade or configuration change fail,
simply reboot and select the previous boot environment from the boot
menu. Users can also create their own boot environments in TrueNAS as
needed, for example before making configuration changes. This way, the
system can be rebooted into a snapshot of the system that did not
include the new configuration changes.

**ZFS provides a write cache** in RAM as well as a ZFS Intent Log
([ZIL](http://www.freenas.org/blog/zfs-zil-and-slog-demystified/).
The ZIL is a storage area that
[temporarily holds synchronous writes until they are written to the ZFS pool](https://pthree.org/2013/04/19/zfs-administration-appendix-a-visualizing-the-zfs-intent-log/).
Adding a fast (low-latency), power-protected SSD as a SLOG
(*Separate Log*) device permits much higher performance. This is a
necessity for NFS over ESXi, and highly recommended for database
servers or other applications that depend on synchronous writes. More
detail on SLOG benefits and usage is available in these blog and forum
posts:

* [The ZFS ZIL and SLOG Demystified](http://www.freenas.org/blog/zfs-zil-and-slog-demystified/)

* [Some insights into SLOG/ZIL with ZFS on FreeNAS®](https://forums.freenas.org/index.php?threads/some-insights-into-slog-zil-with-zfs-on-freenas.13633/)

* [ZFS Intent Log](http://nex7.blogspot.com/2013/04/zfs-intent-log.html)

Synchronous writes are relatively rare with SMB, AFP, and iSCSI, and
adding a SLOG to improve performance of these protocols only makes
sense in special cases. The **zilstat** utility can be run from the TrueNAS
Shell to determine if the system will benefit from a SLOG. See
[this website](http://www.richardelling.com/Home/scripts-and-programs-1/zilstat)
for usage information.

ZFS currently uses 16 GiB of space for SLOG. Larger SSDs can be
installed, but the extra space will not be used. SLOG devices cannot
be shared between pools. Each pool requires a separate SLOG device.
Bandwidth and throughput limitations require that a SLOG device must
only be used for this single purpose. Do not attempt to add other
caching functions on the same SSD, or performance will suffer.

In mission-critical systems, a mirrored SLOG device is highly
recommended. Mirrored SLOG devices are *required* for ZFS pools at
ZFS version 19 or earlier. The ZFS pool version is checked from the
TrueNAS Shell with `zpool get version {poolname}`. A version
value of *-* means the ZFS pool is version 5000 (also known as
*Feature Flags*) or later.

**ZFS provides a read cache** in RAM, known as the ARC, which reduces
read latency. TrueNAS adds ARC stats to
[top(1)](https://www.freebsd.org/cgi/man.cgi?query=top)
and includes the `arc_summary.py` and `arcstat.py` tools for monitoring
the efficiency of the ARC. If an SSD is dedicated as a cache device, it
is known as an
[L2ARC](http://www.brendangregg.com/blog/2008-07-22/zfs-l2arc.html).
Additional read data is cached here, which can increase random read
performance. L2ARC does *not* reduce the need for sufficient RAM. In
fact, L2ARC needs RAM to function. If there is not enough RAM for a
adequately-sized ARC, adding an L2ARC will not increase performance.
Performance actually decreases in most cases, potentially causing
system instability. RAM is always faster than disks, so always add as
much RAM as possible before considering whether the system can benefit
from an L2ARC device.

When applications perform large amounts of *random* reads on a dataset
small enough to fit into L2ARC, read performance can be increased by
adding a dedicated cache device. SSD cache devices only help if the
active data is larger than system RAM but small enough that a
significant percentage fits on the SSD. As a general rule, L2ARC
should not be added to a system with less than 32 GiB of RAM, and the
size of an L2ARC should not exceed ten times the amount of RAM. In
some cases, it may be more efficient to have two separate pools: one
on SSDs for active data, and another on hard drives for rarely used
content. After adding an L2ARC device, monitor its effectiveness using
tools such as `arcstat`. To increase the size of an existing L2ARC,
stripe another cache device with it. The GUI will always stripe
L2ARC, not mirror it, as the contents of L2ARC are recreated at boot.
Failure of an individual SSD from an L2ARC pool will not affect the
integrity of the pool, but may have an impact on read performance,
depending on the workload and the ratio of dataset size to cache size.
Note that dedicated L2ARC devices cannot be shared between ZFS pools.

**ZFS was designed to provide redundancy while addressing some of the
inherent limitations of hardware RAID** such as the write-hole and
corrupt data written over time before the hardware controller provides
an alert. ZFS provides three levels of redundancy, known as *RAIDZ*,
where the number after the *RAIDZ* indicates how many disks per vdev
can be lost without losing data. ZFS also supports mirrors, with no
restrictions on the number of disks in the mirror. ZFS was designed
for commodity disks so no RAID controller is needed. While ZFS can
also be used with a RAID controller, it is recommended that the
controller be put into JBOD mode so that ZFS has full control of the
disks.

When determining the type of ZFS redundancy to use, consider whether
the goal is to maximize disk space or performance:

* RAIDZ1 maximizes disk space and generally performs well when data
  is written and read in large chunks (128K or more).

* RAIDZ2 offers better data availability and significantly better
  mean time to data loss (MTTDL) than RAIDZ1.

* A mirror consumes more disk space but generally performs better
  with small random reads. For better performance, a mirror is
  strongly favored over any RAIDZ, particularly for large,
  uncacheable, random read loads.

* Using more than 12 disks per vdev is not recommended. The
  recommended number of disks per vdev is between 3 and 9. With more
  disks, use multiple vdevs.

* Some older ZFS documentation recommends that a certain number of
  disks is needed for each type of RAIDZ in order to achieve optimal
  performance. On systems using LZ4 compression, which is the default
  for %brand% 9.2.1 and higher, this is no longer true.

These resources can also help determine the RAID configuration best
suited to the specific storage requirements:

* [Getting the Most out of ZFS Pools](https://forums.freenas.org/index.php?threads/getting-the-most-out-of-zfs-pools.16/)

* [A Closer Look at ZFS, Vdevs and Performance](https://constantin.glez.de/2010/06/04/a-closer-look-zfs-vdevs-and-performance/)

> RAID AND DISK REDUNDANCY ARE NOT A SUBSTITUTE FOR A RELIABLE BACKUP STRATEGY.
> BAD THINGS HAPPEN AND A GOOD BACKUP STRATEGY IS STILL REQUIRED TO PROTECT VALUABLE DATA.
> Configuring TrueNAS with Periodic Snapshots and automated Replication is strongly recommended as part of a ZFS snapshot backup strategy.

**ZFS manages devices**. When an individual drive in a mirror or
RAIDZ fails and is replaced by the user, ZFS adds the replacement
device to the vdev and copies redundant data to it in a process called
*resilvering*. Hardware RAID controllers usually have no way of
knowing which blocks were in use and must copy every block to the new
device. ZFS only copies blocks that are in use, reducing the time it
takes to rebuild the vdev. Resilvering is also interruptable. After an
interruption, resilvering resumes where it left off rather than
starting from the beginning.

While ZFS provides many benefits, there are some caveats:

* At 90% capacity, ZFS switches from performance- to space-based
  optimization, which has massive performance implications. For
  maximum write performance and to prevent problems with drive
  replacement, add more capacity before a pool reaches 80%.

* When considering the number of disks to use per vdev, consider the
  size of the disks and the amount of time required for resilvering,
  which is the process of rebuilding the vdev. The larger the size of
  the vdev, the longer the resilvering time. When replacing a disk in
  a RAIDZ, it is possible that another disk will fail before the
  resilvering process completes. If the number of failed disks
  exceeds the number allowed per vdev for the type of RAIDZ, the data
  in the pool will be lost. For this reason, RAIDZ1 is not
  recommended for drives over 1 TiB in size.

* Using drives of equal sizes is recommended when creating a
  vdev. While ZFS can create a vdev using disks of differing sizes,
  its capacity will be limited by the size of the smallest disk.

For those new to ZFS, the
[Wikipedia entry on ZFS](https://en.wikipedia.org/wiki/Zfs)
provides an excellent starting point to learn more about its features.
These resources are also useful for reference:

* [FreeBSD ZFS Tuning Guide](https://wiki.freebsd.org/ZFSTuningGuide)

* [Becoming a ZFS Ninja (video)](https://www.youtube.com/watch?v=6_K55Ira1Cs)

* [Slideshow explaining VDev, zpool, ZIL and L2ARC and other easy mistakes!](https://forums.freenas.org/index.php?threads/slideshow-explaining-vdev-zpool-zil-and-l2arc-for-noobs.7775/)

* [ZFS: The Last Word in File Systems - Part 1 (video)](https://www.youtube.com/watch?v=uT2i2ryhCio)

* [The Zettabyte Filesystem](https://www.youtube.com/watch?v=ptY6-K78McY)


## ZFS Feature Flags

To differentiate itself from Oracle ZFS version numbers, OpenZFS uses
feature flags. Feature flags are used to tag features with unique names
to provide portability between OpenZFS implementations running on
different platforms, as long as all of the feature flags enabled on the
ZFS pool are supported by both platforms. TrueNAS uses OpenZFS and each
new version of TrueNAS keeps up-to-date with the latest feature flags
and OpenZFS bug fixes.

See
[zpool-features(7)](https://www.freebsd.org/cgi/man.cgi?query=zpool-features)
for a complete listing of all OpenZFS feature flags available on FreeBSD.
