---
title: "ZFS Deduplication"
description: "Provides general information on ZFS deduplication in TrueNAS,hardware recommendations, and useful deduplication CLI commands."
weight: 60
tags:
- zfs
- storage
---

ZFS supports deduplication as a feature. Deduplication means that identical data is only stored once, and this can greatly reduce storage size. 
However deduplication is a compromise and balance between many factors, including cost, speed, and resource needs. 
It must be considered exceedingly carefully and the implications understood, before being used in a pool.

## Deduplication on ZFS

Deduplication is one technique ZFS can use to store file and other data in a pool. 
If several files contain the same pieces (blocks) of data, or any other pool data occurs more than once in the pool, ZFS stores just one copy of it. 
In effect instead of storing many copies of a book, it stores one copy and an arbitrary number of pointers to that one copy.
Only when no file uses that data, is the data actually deleted. 
ZFS keeps a reference table which links files and pool data to the actual storage blocks containing their data. This is the deduplication table (DDT).

The DDT is a fundamental ZFS structure. It is treated as part of the metadata or the pool. 
If a pool (or any dataset in the pool) has ever contained deduplicated data, the pool contains a DDT, and that DDT is as fundamental to the pool data as any of its other file system tables. 
Like any other metadata, DDT contents might be temporarily held in the ARC (RAM/memory cache) or [L2ARC]({{< relref "/references/L2ARC.md" >}}) (disk cache) for speed and repeated use, but the DDT is not a disk cache. 
It is a fundamental part of the ZFS pool structure, how ZFS organizes pool data on its disks. 
Therefore like any other pool data, if DDT data is lost, the pool is likely to become unreadable. So it is important it is stored on redundant devices. 

A pool can contain any mix of deduplicated data and non-deduplicated data, coexisting. 
Data is written using the DDT if deduplication is enabled at the time of writing, and is written non-deduplicated if deduplication is not enabled at the time of writing. Subsequently, the data remains as at the time it was written, until it is deleted.  

The only way to convert existing current data to be all deduplicated or undeduplicated, or to change how it is deduplicated, is to create a new copy, while new settings are active. 
This can be done by copying the data within a file system, or to a different file system, or replicating using `zfs send` and `zfs receive` or the Web UI replication functions. 
Data in snapshots is fixed, and can only be changed by replicating the snapshot to a different pool with different settings (which preserves its snapshot status), or copying its contents.

It is possible to stipulate in a pool, to deduplicate only certain datasets and volumes. 
The DDT encompasses the entire pool, but only data in those locations is deduplicated when written. 
Other data which is not deduplicate well or where deduplication is inappropriate, is not be deduplicated when written, saving resources.

## Benefits

The main benefit of deduplication is that, where appropriate, it can greatly reduce the size of a pool and the disk count and cost. 
For example, if a server stores files with identical blocks, it could store thousands or even millions of copies for almost no extra disk space. 
When data is read or written, it is also possible that a large block read or write can be replaced by a smaller DDT read or write, reducing disk I/O size and quantity.

## Costs

The deduplication process is very demanding! 
There are four main costs to using deduplication: large amounts of RAM, requiring fast SSDs, CPU resources, and a general performance reduction. 
So the trade-off with deduplication is reduced server RAM/CPU/SSD performance and loss of top end I/O speeds in exchange for saving storage size and pool expenditures.

{{< expand "Reduced I/O" "v" >}}
Deduplication requires almost immediate access to the DDT. In a deduplicated pool, every block potentially needs DDT access. 
The number of small I/Os can be colossal; copying a 300 GB file could require tens, perhaps hundreds of millions of 4K I/O to the DDT. 
This is extremely punishing and slow. RAM must be large enough to store the entire DDT and any other metadata and the pool almost always is configured using fast, high quality SSDs allocated as special vdevs for metadata. 
Data rates of 50,000-300,000 4K I/O per second (IOPS) have been reported by the TrueNAS community for SSDs handling DDT. 
When the available RAM is insufficient, the pool runs extremely slowly. 
When the SSDs are unreliable or slow under mixed sustained loads, the pool can also slow down or even lose data if enough SSDs fail.
{{< /expand >}}

{{< expand "CPU Consumption" "v" >}}
Deduplication is extremely CPU intensive. Hashing is a complex operation and deduplication uses it on every read and write. 
It is possible for some operations (notably `scrub` and other intense activities) to use an entire 8 - 32 core CPU to meet the computational demand required for deduplication.
{{< /expand >}}

{{< expand "Reduced ZFS Performance" "v" >}}
Deduplication adds extra lookups and hashing calculations into the ZFS data pathway, which slows ZFS down significantly. 
A deduplicated pool does not reach the same speeds as a non-deduplicated pool.
{{< /expand >}}

When data is not sufficiently duplicated, deduplication wastes resources, slows the server down, and has no benefit. 
When data is already being heavily duplicated, then consider the costs, hardware demands, and impact of enabling deduplication *before* enabling on a ZFS pool.

## Hardware Recommendations

### Disks

High quality mirrored SSDs configured as a special vdev for the DDT (and usually all metadata) are strongly recommended for deduplication unless the entire pool is built with high quality SSDs. 
Expect potentially severe issues if these are not used as described below. NVMe SSDs are recommended whenever possible. SSDs must be large enough to store all metadata.

The deduplication table (DDT) contains small entries about 300-900 bytes in size. It is primarily accessed using 4K reads. 
This places extreme demand on the disks containing the DDT.

When choosing SSDs, remember that a deduplication-enabled server can have considerable mixed I/O and very long sustained access with deduplication. 
Try to find real-world performance data wherever possible. 
It is recommended to use SSDs that do not rely on a limited amount of fast cache to bolster a weak continual bandwidth performance. 
Most SSDs performance (latency) drops when the onboard cache is fully used and more writes occur. 
Always review the steady state performance for 4K random mixed read/write.

[Special vdev]({{< relref "CORE/CORETutorials/Storage/Pools/FusionPool.md" >}}) SSDs receive continuous, heavy I/O. 
HDDs and many common SSDs are inadequate. 
As of 2021, some recommended SSDs for deduplicated ZFS include Intel Optane 900p, 905p, P48xx, and better devices. 
Lower cost solutions are high quality consumer SSDs such as the Samsung EVO and PRO models. 
PCIe NVMe SSDs (NVMe, M.2 "M" key, or U.2) are recommended over SATA SSDs (SATA or M.2 "B" key).

When special vdevs cannot contain all the pool metadata, then metadata is silently stored on other disks in the pool. 
When special vdevs become too full (about 85%-90% usage), ZFS cannot run optimally and the disks operate slower. 
Try to keep special vdev usage under 65%-70% capacity whenever possible. 
Try to plan how much future data you wan to add to the pool, as this increases the amount of metadata in the pool. 
More special vdevs can be added to a pool when more metadata storage is needed.

### RAM

Deduplication is memory intensive. When the system does not contain sufficient RAM, it cannot cache DDT in memory when read and system performance can decrease.

The RAM requirement depends on the size of the DDT and the amount of stored data to be added in the pool. 
Also, the more duplicated the data, the fewer entries and smaller DDT. 
Pools suitable for deduplication, with deduplication ratios of 3x or more (data can be reduced to a third or less in size), might only need 1-3 GB of RAM per 1 TB of data. 
The actual DDT size can be estimated by deduplicating a limited amount of data in a temporary test pool, or by using `zdb -S` in a command line.

Use the [tunable]({{< relref "CORE/UIReference/System/Tunables.md" >}}) **vfs.zfs.arc.meta_min** (*type*=*LOADER*, *value*=*bytes*) to force ZFS to reserve no less than the given amount of RAM for metadata caching.

### CPU

Deduplication consumes extensive CPU resources and it is recommended to use a high-end CPU with 4-6 cores at minimum.

### Identifying Inadequate Hardware

If deduplication is used in an inadequately built system, these symptoms might be seen:

{{< tabs "Hardware Symptoms" >}}
{{< tab "RAM Starvation" >}}
* **Cause**: Continuous DDT access is limiting the available RAM or RAM usage is generally very high RAM usage. 
  This can also slow memory access if the system uses swap space on disks to compensate.
* **Diagnose**: Open the command line and enter `top`. 
  The header indicates ARC and other memory usage statistics. Additional commands to investigate RAM or ARC usage performance are `arc_summary` and `arcstat`.
* **Solutions**:
  * Install more RAM.
  * Add a new **System > Tunable**: **vfs.zfs.arc.meta_min** with **Type**=**LOADER** and **Value**=**bytes**. 
    This specifies the minimum RAM that is reserved for metadata use and cannot be evicted from RAM when new file data is cached.
{{< /tab >}}
{{< tab "Disk I/O Slowdown" >}}
* **Cause**: The system must perform disk I/O to fetch DDT entries, but these are usually 4K I/O and the underlying disk hardware is unable to cope in a timely manner.
* **Diagnose**: Open the command line and enter `gstat` to show heavy I/O traffic for either DDT or a generic pool, although DDT traffic is more often the cause. 
  `zpool iostat` is another option that can show unexpected or very high disk latencies. When networking slowdowns are also seen, `tcpdump` or a TCP monitor for an application can also show a low or zero TCP window over an extended duration.
* **Solutions**: Add high quality SSDs as a special vdev and either move the data or rebuild the pool to use the new storage.
{{< /tab >}}
{{< tab "Unexpected Disconnections of Networked Resources" >}}
* **Cause**: This is a byproduct of the disk I/O slowdown issue. 
  Network buffers can become congested with incomplete demands for file data and the entire ZFS I/O system is delayed by tens or hundreds of seconds because huge amounts of DDT entries have to be fetched. Timeouts occur when networking buffers can no longer handle the demand. 
  Because all services on a network connection share the same buffers, all become blocked. 
  This is usually seen as file activity working for a while and then unexpectedly stalling. File and networked sessions then fail too. 
  Services can become responsive when the disk I/O backlog clears, but this can take several minutes. 
  This problem is more likely when high speed networking is used because the network buffers fill faster.
{{< /tab >}}
{{< tab "CPU Starvation" >}}
* **Cause**: When ZFS has fast special vdev SSDs, sufficient RAM, and is not limited by disk I/O, then hash calculation becomes the next bottleneck. 
  Most of the ZFS CPU consumption is from attempting to keep hashing up to date with disk I/O.
  When the CPU is overburdened, the console becomes unresponsive and the web UI fails to connect. Other tasks might not run properly because of timeouts. 
  This is often encountered with [pool scrubs]({{< relref "CORE/CORETutorials/Tasks/CreatingScrubTasks.md" >}}) and it can be necessary to pause the scrub temporarily when other tasks are a priority.
* **Diagnose**: An easily seen symptom is that console logins or prompts take several seconds to display. Using `top` can confirm the issue. 
  Generally, multiple entries with command <code>kernel {z_rd_int_[<i>NUMBER</i>]}</code> can be seen using the CPU capacity, and the CPU is heavily (98%+) used with almost no idle.
* **Solutions**: Changing to a higher performance CPU can help but might have limited benefit. 40 core CPUs have been observed to struggle as much as 4 or 8 core CPUs. 
  A usual workaround is to temporarily pause scrub and other background ZFS activities that generate large amounts of hashing. 
  It can also be possible to limit I/O using tunables that control disk queues and disk I/O ceilings, but this can impact general performance and is not recommended.
{{< /tab >}}
{{< /tabs >}}

## Useful CLI Commands

{{< tabs "Deduplication CLI Commands" >}}
{{< tab "zpool status -D or -Dv" >}}
Shows a summary of DDT statistics for each pool, or the specified pool.
Typical output includes a line like this:
<code>dedup: DDT entries 227317061, size 672B on disk, 217B in core</code>
This means that the DDT contains 227 million blocks, and each block is using 672 bytes in the pool, and 217 bytes of RAM when cached in ARC. 
The two values differ because ZFS uses different structures for DDT entries on disk and in RAM. 
There is also a table, showing how many blocks (actual and referenced) are duplicated, summarized in bands (or buckets) of powers of 2, and their average actual and referenced sizes.
{{< /tab >}}
{{< tab "zdb -U /data/zfs/zpool.cache -S [POOL_NAME]" >}}
Estimates the outcome and DDT table size if a pool were entirely deduplicated. Warning: this can take many hours to complete. The output table is similar to that of `zpool status -Dv`.
{{< /tab >}}
{{< tab "zpool list and zpool list -v" >}}
These show core deduplication statistics for each pool. The `-v` option shows disk usage for each individual vdev, which helps confirm that DDT has not overflowed into other disks in the pool.
{{< /tab >}}
{{< tab "zpool iostat" >}}
Provides detailed analysis and statistics for disk I/O latency. Healthy pool latencies are generally in the nanoseconds to tens of milliseconds range. 
If latencies in the seconds or tens of seconds are seen, this indicates a problem with disk usage. This means that certain disks are unable to service commands at the speed needed and there is a large command backlog.
{{< /tab >}}
{{< tab "top, top -mio, and gstat" >}}
These commands monitor RAM, CPU, and disk I/O.
{{< /tab >}}
{{< tab "arc_summary and arcstat" >}}
These utilities provide much more information about RAM and memory caching systems and ZFS memory use.
{{< /tab >}}
{{< /tabs >}}

{{< expand "Hashing Note" "v" >}}
Deduplication hashes (calculates a digital signature) for the data in each block to be written to disk and checking to see if data already exists in the pool with the same hash.
When a block exists with the same hash, then the block is not written and a new pointer is written to the DDT and saving that space. 
Depending how the hash is calculated, there is a possibility that two different blocks could have the same hash and cause the file system to believe the blocks are the same. 
When choosing a hash, choose one that is complex, like SHA 256, SHA 512, and Skein, to minimize this risk. 
A SHA 512 checksum hash is recommended for 64-bit platforms. 
To manually change at the time dedup is enabled on a pool, or any dataset/volume within a pool, use <code>zfs set checksum=sha512 <pool name></code>.
{{< /expand >}}

## Additional Resources

* [Diagnosing Deduplication Performance Issues](https://www.truenas.com/community/threads/baffling-performance-issues-with-large-zfs-pool.84780/page-2#post-604334)
* [NVRAM and Optane based SSDs when choosing a fast pool SSD](https://www.truenas.com/community/resources/a-bit-about-ssd-perfomance-and-optane-ssds-when-youre-plannng-your-next-ssd.149/)
* [Building a server capable of fast consistent deduplication](https://www.truenas.com/community/resources/my-experiments-in-building-a-home-server-capable-of-handling-fast-consistent-deduplication.148/)
