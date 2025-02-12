---
title: "ZFS Deduplication"
description: "Provides general information on ZFS deduplication in TrueNAS, hardware recommendations, and useful deduplication CLI commands."
weight: 60
tags:
- zfs
- storage
---

ZFS supports deduplication as a feature. Deduplication means that identical data is only stored once, which can significantly reduce storage size. 
However, deduplication is a compromise and balance between many factors, including cost, speed, and resource needs. 
Consider and understand the implications of using deduplication before adding it to a pool.

## Deduplication on ZFS

Deduplication is one technique ZFS can use to store files and other data in a pool. 
If several files contain the same pieces (blocks) of data or any other pool data occurs more than once in the pool, ZFS stores just one copy of it. 
Instead of storing many copies of a book it stores one copy and an arbitrary number of pointers to that one copy.
Only when no file uses the data is the data deleted. 
ZFS keeps a reference table that links files and pool data to the actual storage blocks containing their data. This is the deduplication table (DDT).

The DDT is a fundamental ZFS structure and is part of the metadata or the pool. 
If a pool (or any dataset in the pool) has ever contained deduplicated data, the pool contains a DDT, and that DDT is as fundamental to the pool data as any of its other file system tables. 
Like any other metadata, DDT contents might be temporarily held in the ARC (RAM/memory cache) or [L2ARC]({{< relref "/references/L2ARC.md" >}}) (disk cache) for speed and repeated use, but the DDT is not a disk cache. 
It is a fundamental part of the ZFS pool structure and how ZFS organizes pool data on its disks. 
Therefore, like any other pool data, if DDT data is lost, the pool is likely to become unreadable. DDT is not needed for reads, but any writes or deletions of deduplicated blocks. So, it is important to store on redundant devices. 

A pool can contain any coexisting mix of deduplicated data and non-deduplicated data. 
If deduplication is enabled at the time of writing, the DDT is used to write data.
It writes non-deduplicated data if deduplication is not enabled at the time of writing. Subsequently, the data remains the same as it was at the time it was written until it is deleted.  

The only way to convert existing current data to all deduplicated or non-deduplicated or to change how it is deduplicated is to create a new copy while new settings are active.  
Copy the data within a file system or to a different file system, or replicate it using the Web UI replication functions. 
Data in snapshots is fixed and can only be changed by replicating the snapshot to a different pool with different settings (which preserves its snapshot status) or copying its contents.

It is possible to stipulate deduplicating only specified datasets and volumes in a pool. 
The DDT encompasses the entire pool, but only data in these locations is deduplicated when written. 
Other data not well deduplicated or where deduplication is not appropriate, is not deduplicated when written, saving resources.

## Fast Deduplication on ZFS
Fast deduplication is a feature included in OpenZFS 2.3.0.
It makes backend changes to legacy deduplication in ZFS that improve performance and can reduce latency in some use cases.
These improvements speed up I/O processes, look-ups, and reclaim storage space, and in situations where pools are handling reasonable workloads, improve latency over legacy dedup.
Fast deduplication accomplishes these improvements through four new functions: DDT log, prefetch, pruning, and a quota. 

### DDT Log
Instead of writing DDT entries in random order as they arrive, which causes excessive write inflation, and since single DDT record writes might require a whole ZFS attribute processor (ZAP) leaf block, fast dedup temporarily writes them into a log, flushing it into actual DDT ZAP only after sorting.
Improving write locality allows aggregating multiple DDT entry writes into one ZAP leaf write.

### Prefetch
Prefetch fills the ARC cache by loading deduplication tables into it.
Loading the DDT into memory speeds up operations by reducing on-demand disk reads for every record the system processes.
The prefetch is particularly important in systems with large deduplication tables (DDTs) where loading the table on demand can take days after an import/reboot.
The prefetch might also be used to reload portions of a DDT evicted due to inactivity into the ARC.

### Pruning
Pruning cleans up old, non-duplicate (unique) records in the deduplication table (DDT) to reclaim storage and improve performance in ZFS when the DDT becomes too large.
Reclaiming available space is a prerequisite to the deduplication table (DDT) quota and pruning functions.

{{< expand "How does pruning work?" "v" >}}
Pruning reduces the size of the deduplication table (DDT) by removing unique entries created more than a specified time ago.
It assumes that if some block has no duplicates since that time, it might never have them in the future, and so tracking this wastes resources.
Since the blocks with DDT entries removed can never be deduplicated again, this might reduce deduplication efficiency if the assumptions appear false.
So pruning should be used reasonably, either if the DDT size becomes too big for the system to manage, or if we are sure that we know that for the workload of a specific system, the older blocks likely remain unique forever.
To free up more space and improve efficiency, DDT pruning works in combination with ZAP shrinking.
ZFS Attribute Processor is a data structure used to store directories and a number of other tables, including DDT.
ZAP consists of a hash table and a (large) number of leaf blocks, each storing the entries for a range of hash table prefixes.
When ZAP detects two empty adjacent leaf blocks, it frees one of them, making its sibling handle both of their prefixes.
In case of massive entry removals, the process might be repeated multiple times.
If more entries are added some of the remaining blocks get overflowed later, the new sibling for it is allocated and the entries are split between them by dividing the hash prefix.
{{< /expand >}}

### Quota
Quota manages the deduplication table (DDT) by keeping it from unbounded growth that can hurt RAM and performance.
Setting a quota for the on-disk DDT effectively disables new entries for blocks if the allotted space reaches the upper limit.
It works for both legacy and fast dedup tables.

There are three quota options: Auto, Custom, and None.
Auto is the default option that allows the system to determine the quota, and the size of a dedicated dedup vdev is used as the quota limit.
Custom allows administrators to set a quota.
None leaves the DDT unrestricted and disables the quota.

{{< expand "How does quota work?" "v" >}}
Quota uses two new pool properties, table size and quota.
Table size is the total size of all DDTs on the pool. Table quota is the maximum possible size of all DDTs in the pool.

When set, the quota checks for a new entry about to be created.
When a pool exceeds the set quota, the entry is not created and the corresponding write is converted to a regular non-dedup write.
Updating existing entries is allowed because this reuses space rather than requiring more space.

Quota options determine the behavior.
Auto sets quota based on the size of the devices backing the dedup allocation class. This makes it possible to limit the DDTs to the size of a dedup vdev only.
When the device fills, no new blocks are deduplicated.
If the quota is set to zero, it translates to None.

If a dedup table already exists and is larger than this size, it is not removed as part of setting a quota.
Existing entry reference counts are still updated.
The actual size limit of the table can be above or below the quota depending on the actual on-disk size of the entries (which can be approximated for purposes of calculating the quota). 

Reclaiming this space after deleting entries relies on ZAP shrinking behavior (see Pruning). Pruning allows reclaiming space. If space is not recovered the DDT is still considered over quota.
{{< /expand >}}

## Deduplication Benefits

The main benefit of deduplication is that, where appropriate, it can greatly reduce the size of a pool and the disk count and cost. 
For example, if a server stores files with identical blocks, it could store thousands or even millions of copies for almost no extra disk space. 
When data is read or written, it is also possible that a large block read or write can be replaced by a smaller DDT read or write, reducing disk I/O size and quantity.

## Costs

The deduplication process is very demanding! 
There are four main costs to using deduplication: large amounts of RAM, requiring fast SSDs, CPU resources, and a general performance reduction. 
The trade-off with deduplication is reduced server RAM/CPU/SSD performance and loss of top-end I/O speeds in exchange for saving storage size and pool expenditures.

{{< expand "Reduced I/O" "v" >}}
Deduplication requires almost immediate access to the DDT. In a deduplicated pool, every block potentially needs DDT access. 
The number of small I/Os can be colossal; copying a 300 GB file could require tens, perhaps hundreds of millions of 4K I/O to the DDT. 
This is extremely punishing and slow. RAM must be large enough to store the entire DDT and any other metadata and the pool is commonly is configured using fast, high-quality SSDs allocated as special vdevs for metadata. 
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

High-quality mirrored SSDs configured as a special vdev for the DDT (and usually all metadata) are strongly recommended for deduplication unless the entire pool is built with high-quality SSDs. 
Expect potentially severe issues if these are not used as described below. NVMe SSDs are recommended whenever possible. SSDs must be large enough to store all metadata.

The deduplication table (DDT) contains small entries about 300-900 bytes in size. It is primarily accessed using 4K reads. 
This places extreme demand on the disks containing the DDT.

When choosing SSDs, remember that a deduplication-enabled server can have considerable mixed I/O and very long sustained access with deduplication. 
Try to find real-world performance data wherever possible. 
It is recommended to use SSDs that do not rely on a limited amount of fast cache to bolster a weak continual bandwidth performance. 
Most SSD performance (latency) drops when the onboard cache is fully used and more writes occur. 
Always review the steady state performance for 4K random mixed read/write.

[Special vdev]({{< relref "SCALE/SCALETutorials/Storage/FusionPoolsScale.md" >}}) SSDs receive continuous, heavy I/O. 
HDDs and many common SSDs are inadequate. 
As of 2021, some recommended SSDs for deduplicated ZFS include Intel Optane 900p, 905p, P48xx, and better devices. 
Lower-cost solutions are high-quality consumer SSDs such as the Samsung EVO and PRO models. 
PCIe NVMe SSDs (NVMe, M.2 "M" key, or U.2) are recommended over SATA SSDs (SATA or M.2 "B" key).

When special vdevs cannot contain all the pool metadata, then metadata is silently stored on other disks in the pool. 
When special vdevs become too full (about 85%-90% usage), ZFS cannot run optimally and the disks operate slower. 
Try to keep special vdev usage under 65%-70% capacity whenever possible. 
Try to plan how much future data you wan to add to the pool, as this increases the amount of metadata in the pool. 
More special vdevs can be added to a pool when more metadata storage is needed.

### RAM

Deduplication is memory intensive. When the system does not contain sufficient RAM, it cannot cache DDT in memory when read, and system performance can decrease.

The RAM requirement depends on the size of the DDT and the amount of stored data to be added to the pool, and the more duplicated the data, the fewer entries, and smaller DDT. 
Pools suitable for deduplication, with deduplication ratios of 3x or more (data can be reduced to a third or less in size), might only need 1-3 GB of RAM per 1 TB of data. 
The actual DDT size can be estimated by deduplicating a limited amount of data in a temporary test pool.

### CPU

Deduplication consumes extensive CPU resources and it is recommended to use a high-end CPU with 4-6 cores at minimum.

### Identifying Inadequate Hardware

If deduplication is used in an inadequately built system, these symptoms might be seen:

{{< tabs "Hardware Symptoms" >}}
{{< tab "Disk I/O Slowdown" >}}
* **Cause**: The system must perform disk I/O to fetch DDT entries, but these are usually 4K I/O and the underlying disk hardware is unable to cope in a timely manner.
* **Solutions**: Add high-quality SSDs as a special vdev and either move the data or rebuild the pool to use the new storage.
{{< /tab >}}
{{< tab "Unexpected Disconnections of Networked Resources" >}}
* **Cause**: This is a byproduct of the disk I/O slowdown issue. 
 Network buffers can become congested with incomplete demands for file data and the entire ZFS I/O system is delayed by tens or hundreds of seconds because huge amounts of DDT entries have to be fetched. Timeouts occur when networking buffers can no longer handle the demand. 
 Because all services on a network connection share the same buffers, all become blocked. 
 This is usually seen as file activity working for a while and then unexpectedly stalling. File and networked sessions then fail too. 
 Services can become responsive when the disk I/O backlog clears, but this can take several minutes. 
 This problem is more likely when high-speed networking is used because the network buffers fill faster.
{{< /tab >}}
{{< tab "CPU Starvation" >}}
* **Cause**: When ZFS has fast, special vdev SSD disks, sufficient RAM, and is not limited by disk I/O, then the hash calculation becomes the next bottleneck. 
 Most of the ZFS CPU consumption is from attempting to keep hashing up to date with disk I/O.
 When the CPU is overburdened, the console becomes unresponsive and the web UI fails to connect. Other tasks might not run properly because of timeouts. 
 This is often encountered with [pool scrubs]({{< relref "SCALE/SCALETutorials/DataProtection/ScrubTasksSCALE.md" >}}) and it can be necessary to pause the scrub temporarily when other tasks are a priority.
* **Diagnose**: An easily seen symptom is that console logins or prompts take several seconds to display.
 Generally, multiple entries with command <code>kernel {z_rd_int_[<i>NUMBER</i>]}</code> can be seen using the CPU capacity, and the CPU is heavily (98%+) used with almost no idle.
* **Solutions**: Changing to a higher-performance CPU can help but might have limited benefits. 40-core CPUs have been observed to struggle as much as 4- or 8-core CPUs. 
 A usual workaround is to temporarily pause scrub and other background ZFS activities that generate large amounts of hashing. 
 It can also be possible to limit I/O using tunables that control disk queues and disk I/O ceilings, but this can impact general performance and is not recommended.
{{< /tab >}}
{{< /tabs >}}

{{< expand "Hashing Note" "v" >}}
Deduplication hashes (calculates a digital signature) for the data in each block to be written to disk and checking to see if data already exists in the pool with the same hash.
When a block exists with the same hash, the block is not written and a reference count is incremented in the DDT, saving that space. 
Depending on how the hash is calculated, there is a possibility that two different blocks could have the same hash and cause the file system to believe the blocks are the same. 
To minimize this risk, choose a complex hash like SHA 256, SHA 512, and Skein. 
A SHA 512 checksum hash is recommended for 64-bit platforms. 
{{< /expand >}}

## Additional Resources

* [Diagnosing Deduplication Performance Issues](https://www.truenas.com/community/threads/baffling-performance-issues-with-large-zfs-pool.84780/page-2#post-604334)
* [NVRAM and Optane-based SSDs when choosing a fast pool SSD](https://www.truenas.com/community/resources/a-bit-about-ssd-perfomance-and-optane-ssds-when-youre-plannng-your-next-ssd.149/)
* [Building a server capable of fast consistent deduplication](https://www.truenas.com/community/resources/my-experiments-in-building-a-home-server-capable-of-handling-fast-consistent-deduplication.148/)
