---
Title: "ZFS Deduplication"
linkTitle: "ZFS Deduplication"
weight: 5
tags: ["ZFS", "Deduplication"]
---

ZFS supports deduplication as a feature. Deduplication means that identical 
data is only stored once, and this can greatly reduce storage size. However 
deduplication is a compromise and balance between many factors, including 
cost, speed, and resource needs. It must be considered exceedingly carefully 
and the implications understood, before being used in a pool.

# What deduplication is, and is not

Deduplication is one technique ZFS can use to store file and other data in a 
pool. If several files contain the same piecews (blocks) of data, or any 
other pool data occurs more than once in the pool, ZFS will store just one 
copy of it. In effect instead of storing many copies of a book, it stores one 
copy and an arbitrary number of pointers to that one copy. Only when no file 
uses that data, is the data actually deleted. ZFS keeps a reference table 
which links files and pool data to the actual storage blocks containing 
"their" data. The index is known as the Deduplication Table" (DDT).

The DDT is a fundamental ZFS structure. If a pool (or any dataset in the 
pool) has ever contained deduplicated data, the pool _will_ contain a DDT, 
and that DDT is as fundamental to the pool data as any of its other file 
system tables. Like any other metadata, DDT contents may temporarily be held 
in the ARC (RAM/memory cache) or L2ARC (disk cache) for speed and repeated 
use, but the DDT is not a disk cache. It is a fundamental part of the ZFS 
pool structure, how ZFS organises pool data on its disks. Therefore like any 
other pool data, if DDT data is lost, the pool is likely to become 
unreadable. So it is important it is stored on redundant devices.

A pool can contain any mix of deduplicated data and non-deduplicated data, 
coexisting. Data is written using the DDT if deduplication is enabled at the 
time of writing, and written non-deduplicated if deduplication is not enabled 
at the time of writing. Thereafter it will remain as it was when written, 
regardless of any future chanbge to pool, datadet or volume settings, until 
it is eventually deleted.  The only way to convert existing data to be all 
deduplicated or undeduplicated, or to change how it is deduplicated, is to 
create a new copy - a new copy of the data will be deduplicated or not based 
on whether dedupplication is enabled or not at copy time.  This could be done 
by copying the data within a file system, or to a different file system, or 
replicating using zfs send and zfs receive.

Deduplication works by hashing (calculating a digital "signature") for the 
data in each block to be written to disk, and checking to see if data already 
exists in the pool with the same hash.  If a block already exists with the 
identical hash, then the block is not written, instead only a new pointer is 
written to the DDT, which is a only a few hundred bytes long, saving much 
space.  Depending how this digital signature, or hash, is calculated, there 
is a slight possibility that two different blocks could have the same hash, 
causing the file system to mistakenly believe they are the same. Therefore 
when choosing a hash, it is important to choose one that is strong (complex) 
enough to make the chance of such an issue extremely unlikely. Hashes such as 
SHA 256, SHA 512 and Skein, are designed so that the chances of this 
happening on an enormous pool (Amazon or Google Cloud) over millions of years 
are still extremely small, so the hashes are believed to be totally reliable 
in a practical sense.

It is possible to stipulate in a pool, that specific datasets and volumes 
will be deduplicated only. The DDT encompasses  the entire pool, but only 
data in those locations will be deduplicated when written. Thus data which 
must be very fast, or will not deduplicate well, need not be attempted to be 
deduplicated, sdaving resources.

# Benefits and impact

The main benefit of deduplication is that where appropriate, it can greatly 
reduce the size of a pool, and therefore the disk count and cost. For 
example, if a server stores files that are almost identical, it could store 
thousands or even millions of copies for almost no extra disk space.  This 
arbitrarily large saving of disk space can be very useful and cost-efficient. 
When the data is read or written, it is also possible that a large block read 
or write can be replaced by a tiny DDT read or write, so there is a degree of 
speed-up of disk I/O as well.

There are three main costs to deduplication - it requires much RAM, 
(probably) very fast SSDs in the pool, can take almost all of the CPU 
resources, and it can slow down the system's raw speed.  In effect DDT can 
save much storage size and pool expense, but at the cost of server 
RAM/CPU/SSD cost and usable speed.

* Deduplication requires almost immediate access to the DDT.  In a 
deduplicated pool, every block potentially needs DDT access. The number of 
small IOs can be colossal - copying a 300 GB file can easily require tens, perhaps 
hundreds of millions of 4K I/O to the DDT. This is extremely punishing and 
slow. Therefore RAM should be large enough to store the entire DDT _as well 
as any oither metadata_ and the pool should almost always be configured using 
"special vdevs" for metadata comprising fast high quality SSDs, again for 
high speed access.  Speeds of 50,000 to 300,000 4K I/O per second (IOPS) are 
_typical and reported on the forum_ for SSDs handling DDT. Be warned! If your 
RAM is insufficient, the pool will run extremely slowly. If your SSDs are 
unreliable or slow under mixed sustained loads, your pool will slow down as 
well or may lose data.

* Deduplication is extremely CPU intensive. Hahsing is a complex operation 
and deduplication uses it on every read and write.  It is possible for some 
operations to use the entirety of an 8 - 32 core CPU in the effort to meet 
the demand for computational power for deduplication, during operations such 
as scrubbing, replication and other intense activities.

* Deduplication adds extra lookups and hashing calculations into the data 
pathway of ZFS, and therefore slows ZFS down significantly. A deduplicated 
pool will not reach the same extrme speeds as a non-deduplicated pool can 
achieve.
