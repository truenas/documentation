---
Title: "ZFS Deduplication"
linkTitle: "ZFS Deduplication"
weight: 4
tags: ["ZFS"] ["Deduplication"] ["Dedup"]
---

ZFS supports deduplication as a feature. Deduplication means that identical data is only stored once, and this can greatly reduce storage size. However deduplication is a compromise and balance between many factors, including cost, speed, and resource needs. It must be considered exceedingly carefully and the implications understood, before being used in a pool.

# Deduplication on ZFS

Deduplication is one technique ZFS can use to store file and other data in a pool. If several files contain the same pieces (blocks) of data, or any other pool data occurs more than once in the pool, ZFS will store just one copy of it. In effect instead of storing many copies of a book, it stores one copy and an arbitrary number of pointers to that one copy. Only when no file uses that data, is the data actually deleted. ZFS keeps a reference table which links files and pool data to the actual storage blocks containing "their" data. The index is known as the Deduplication Table" (DDT).

The DDT is a fundamental ZFS structure. If a pool (or any dataset in the pool) has ever contained deduplicated data, the pool _will_ contain a DDT, and that DDT is as fundamental to the pool data as any of its other file system tables. Like any other metadata, DDT contents may temporarily be held in the ARC (RAM/memory cache) or L2ARC (disk cache) for speed and repeated use, but the DDT is not a disk cache. It is a fundamental part of the ZFS pool structure, how ZFS organises pool data on its disks. Therefore like any other pool data, if DDT data is lost, the pool is likely to become unreadable. So it is important it is stored on redundant devices.

A pool can contain any mix of deduplicated data and non-deduplicated data, coexisting. Data is written using the DDT if deduplication is enabled at the time of writing, or written non-deduplicated if deduplication is not enabled at the time of writing. Subsequently, the data will remain as at the time it was written, until it is eventually deleted.  The only way to convert existing data to be all deduplicated or undeduplicated, or to change how it is deduplicated, is to create a new copy, while new settings are active.  This could be done by copying the data within a file system, or to a different file system, or replicating using zfs send and zfs receive.

It is possible to stipulate in a pool, that only certain datasets and volumes will be deduplicated. The DDT encompasses  the entire pool, but only data in those locations will be deduplicated when written. Other data which will not deduplicate well or where deduplication is inappropriate, will not be deduplicated when written, saving resources.

# Benefits and impact

The main benefit of deduplication is that where appropriate, it can greatly reduce the size of a pool, and therefore the disk count and cost. For example, if a server stores files with identical blocks, it could store thousands or even millions of copies for almost no extra disk space.  This arbitrarily large saving of disk space can be very useful and cost-efficient. When the data is read or written, it is also possible that a large block read or write can be replaced by a tiny DDT read or write, so disk I/O size and quantity is smaller as well.

There are three main costs to deduplication, because the deduplication process is very demanding - it requires much RAM, (probably) very fast SSDs in the pool, can in some cases take almost all of the CPU resources, and it can slow down the system's raw speed.  In effect DDT can save much storage size and pool expense, but at the cost of server RAM/CPU/SSD cost and loss of "top end" I/O speeds.

* Deduplication requires almost immediate access to the DDT.  In a deduplicated pool, every block potentially needs DDT access. The number of small I/Os can be colossal - copying a 300 GB file could require tens, perhaps hundreds of millions of 4K I/O to the DDT. This is extremely punishing and slow. Therefore RAM should be large enough to store the entire DDT _as well as any other metadata_ and the pool should almost always be configured using "special vdevs" for metadata comprising fast high quality SSDs, again for high speed access.  Speeds of 50,000 to 300,000 4K I/O per second (IOPS) are _typical and reported on the forum_ for SSDs handling DDT. Be warned! If your RAM is insufficient, the pool will run extremely slowly. If your SSDs are unreliable or slow under mixed sustained loads, your pool will slow down as well or may lose data.

* Deduplication is extremely CPU intensive. Hashing is a complex operation and deduplication uses it on every read and write.  It is possible for some operations to use the entirety of an 8 - 32 core CPU in the effort to meet the demand for computational power for deduplication, during operations such as scrubbing, replication and other intense activities.

* Deduplication adds extra lookups and hashing calculations into the ZFS data pathway, and therefore slows ZFS down significantly. A deduplicated pool will not reach the same extreme speeds as a non-deduplicated pool can achieve.

If data is not sufficiently duplicated, deduplication will waste resources and slow the server down and give little or no benefit. If data is considerably duplicated, then consider the costs, demands and impact of enabling deduplication and make appropriate hardware choices.


# Hardware choices

## Disks

The deduplication table contains small entries of around 300 to 900 bytes. It is primarily accessed using 4K reads, which places extreme demand on the disks containing the DDT. Very high quality mirrored SSDs configured as a "special vdev" are recommended. As of 2020, these include Optane 900p, 905p and P48xx devices, and at a cheaper level, well reputed high quality consumer SSDs such as Samsung EVO and PRO. 

A deduplication-enabled server may have considerable mixed I/O and very long sustained access with deduplication, so do not just consider headline manufacturer figures, and consider SSDs that do not rely on a limited amount of fast cache to bolster a weak steady state performance. Most SSDs' performance (latency) will plummet if the onboard cache is fully in use and further writes occur, so check their steady state performance for 4K random mixed read/write.  This is perhaps the hardest test for any SSD. Even datacenter SSDs often deliver poor results. Good reviews will test and report it.

## RAM

Deduplication requires considerable RAM. The amount of RAM depends on the size of the DDT. Figures of up to 5 GB of RAM per TB of data are discussed online, but these are often over estimates.  A realistic value depends completely on your own data. The more highly duplicated your data is, the fewer the entries and the smaller the DDT. Pools suitable for deduplication, with deduplication ratios of 3x or more (i.e., the data can be reduced to a third or les in size), may only need 1 - 13 GB of RAM per TB of data.  The actual DDT size can be estimated by deduplicating a limited amount of data in a temporary "test" pool, or by using commands shown below.

# Symptoms caused by inadequate hardware

If deduplication is used in an inadequately built system, the following symptoms may be seen:

<table class="blueTable">
	<thead>
		<tr>
			<th>Issue</th>
			<th>Symptoms and cause</th>
			<th>Diagnostic tests</th>
			<th>Solution<br/>(other than remove deduplication)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>RAM Starvation</td>
			<td>Very high RAM usage, or limited available RAM for ARC or other caches, as the DDT is continually accessed. Memory access may also be heavily slowed if the system uses swap space on disk to compensate, especially if disk I/O itself is slowed by deduplication (see below).</td>
			<td>&nbsp;</td>
			<td>Increase RAM.</td>
		</tr>
		<tr>
			<td>Extreme slowdown/latency of disk I/O</td>
			<td>The system must perform disk I/O to fetch DDT entries, but these are usually 4K I/O and the underlying disk hardware is unable to cope in a timely manner</td>
			<td rowspan="2"><code>gstat</code> on console will often show large amounts of I/O, either for devices that contain DDT data, or for the pool generally (if special vdevs are not defined). Typically this is 4K read I/O attributable to DDT activity, but may not always be.<br/><br/><code>zpool iostat</code> (see below) can also be used, and will often show unexpected or very high disk latencies.<br/><br/>If networking is impacted, the issue can also be confirmed in console or at the client end, using <code>tcpdump</code> or <code>Wireshark</code> - the TCP window will be seen to be extremely low or zero for extended durations.</td>
			<td rowspan="2">Add high quality SSDs as a special vdev, and either move data or rebuild the pool to utilise the new storage.</td>
		</tr>
		<tr>
			<td>Unexpected disconnection of SMB, SSH, Web UI, iSCSI, FTP, Remote Desktop (to VMs), jailed plugins such as OwnCloud,  and all other networked services and connections</td>
			<td>This is a byproduct of the previous issue. As network buffers become congested with incompleted demands for file data, the entire ZFS I/O system becomes gradually backlogged by tens or hundreds of seconds because huge amounts of DDT entries must first fetched, until timeouts occur when networking buffers can no longer handle the demand. Since all services on a network connection share the same networking buffers, they all block - not just the one service used for file activity. Typically this manifests as file activity working for a while, and then mysteriously stalling, followed by file and networked sessions (of all kinds) also failing.  Services will become responsive again, once the disk I/O backlog blocking the network buffers clears, but this can take 5 to 15 minutes to happen. This problem is more likely to be seen when high speed networking is used, such as 10+ Gigabit LAN or Fiber Channel, because of the speed with which network buffers can be filled.</td>
		</tr>
		<tr>
			<td>CPU Starvation</td>
			<td>If ZFS has fast special vdev SSDs and sufficient RAM for the DDT, and is not limited by disk I/O, then calculation of hashes becomes the next bottleneck. ZFS uses most or all CPU in attempting to keep hashing up to date with disk I/O. The console becomes unresponsive and the web UI fails to connect. Other tasks may not run properly or in a timely manner due to timeouts. This is especially noticed with pool scrubbing, and it may be necessary to pause the scrub temporarily if other tasks are a priority.</td>
			<td>The most obvious symptom is that in console, the login or prompt messages take several seconds to display. The issue can be confirmed with <code>top</code> on console. In most cases, multiple entries with command "kernel {z_rd_int_[NUMBER]}" may be seen to use the CPU capacity, and the CPU will be heavily (98%+) used with little or no idle.</td>
			<td>Improving the CPU can help but may have  only limited benefit - we have seen 40 core CPUs struggle as much as 4 or 8 core CPUs. The usual workaround is to temporarily pause scrub and other background ZFS activities that generate the high level of hashing. It may also be possible to limit I/O using some tunables that control disk queues and disk I/O ceilings, but this can impact performance more generally.</td>
		</tr>
	</tbody>
</table>

# Useful CLI commands

* `zpool status -D` or `-Dv` shows a summary of DDT statistics for each pool, or the specified pool.
* `zdb -U /data/zfs/zpool.cache -S [POOL_NAME]` estimates the outcome and DDT table size if a pool were entirely deduplicated.
* `zpool iostat` (`man zpool-iostat`) provides detailed analysis and statistics for disk I/O latency. Latencies for a healthy pool should largely be in the nanoseconds to tens of milliseconds range, perhaps with a few outliers.  If latencies of the order of seconds, and certainly tens of seconds, are seen, this indicates a problem with disk usage, usually that certain disks are unable to service commands at the speed needed, and a large queue has formed of backlogged commands.

# Technical note:  hashing

Deduplication works by hashing (calculating a digital "signature") for the data in each block to be written to disk, and checking to see if data already exists in the pool with the same hash.  If a block already exists with the identical hash, then the block is not written, instead only a new pointer is written to the DDT, which is a only a few hundred bytes long, saving much space.  Depending how this digital signature, or hash, is calculated, there is a slight possibility that two different blocks could have the same hash, causing the file system to mistakenly believe they are the same. Therefore when choosing a hash, it is important to choose one that is strong (complex) enough to make the chance of such an issue extremely unlikely. Hashes such as SHA 256, SHA 512 and Skein, are designed so that the chances of this happening even on an enormous pool (Amazon or Google Cloud) or over millions of years are still extremely small, so the hashes are believed to be totally reliable in a practical sense.
