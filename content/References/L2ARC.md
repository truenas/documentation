---
title: "L2ARC"
weight: 30
---

{{< toc >}}

ZFS has several features to help improve performance for frequent access data read operations. One is Adaptive Replacement Cache (ARC), which is uses the server memory (RAM). The other is second level adaptive replacement cache (L2ARC), or cache drives added to ZFS storage pools. These cache drives are multi-level cell (MLC) SSD drives and, while slower than system memory, still much faster than standard hard drives. ZFS (and TrueNAS) uses all of the RAM installed in a system to make the ARC as large as possible, but this can be very expensive. Cache drives provide a cheaper alternative to RAM for frequently accessed data.

## How Does L2ARC Work?

When a system gets read requests, ZFS uses ARC (RAM) to serve those requests. When the ARC is full and there are L2ARC drives are allocated to a ZFS pool, ZFS uses the L2ARC to serve the read requests that "overflowed" from the ARC. This minimizes how often the slower hard drives are accessed and increases system performance.

### Implementation in TrueNAS

TrueNAS integrates L2ARC management in the **Storage > Pools** section of the web interface. Specifically, adding a *Cache* vdev to a new or existing pool and allocating drives to that pool enables L2ARC for that specific storage pool.

Cached drives are not mirrored, but always striped.
To increase the size of an existing L2ARC, stripe another cache device with it.
Dedicated L2ARC devices cannot be shared between ZFS pools.

A cache device failure does not affect the integrity of the pool, but can impact read performance.
This depends on the workload and the ratio of dataset size to cache size.

### Device Recommendations

Like all complicated features, trying to decide if using L2ARC is effective requires a strong understanding of your storage environment, performance goals, and the software being used.
However, there are a few recommendations for L2ARC devices:

* Using multiple L2ARC devices helps reduce latency and improve performance.

* Random Read Heavy workloads can benefit from large capacity L2ARC SSDs that are faster than the existing data storage drives.

* Sequential or streaming workloads need very fast and low-latency L2ARC devices. [Enterprise-grade NVMe devices are recommended](https://www.snia.org/sites/default/files/SDC/2019/presentations/File_Systems/McKenzie_Ryan_Best_Practices_for_OpenZFS_L2ARC_in_the_Era_of_NVMe.pdf). The device capacity is dependent on how much faster the L2ARC device is over the data storage devices. The faster the L2ARC device over the storage, larger capacity becomes more useful.

## Resources

* "Explanation of ARC and L2ARC" : https://www.zfsbuild.com/2010/04/15/explanation-of-arc-and-l2arc/
* "Best Practices for OpenZFS L2ARC in the Era of NVMe" : https://www.snia.org/sites/default/files/SDC/2019/presentations/File_Systems/McKenzie_Ryan_Best_Practices_for_OpenZFS_L2ARC_in_the_Era_of_NVMe.pdf
* Open ZFS Repository: https://github.com/openzfs/zfs
* "ARC: A Self-Tuning, Low Overhead Replacement Cache": https://www.usenix.org/conference/fast-03/arc-self-tuning-low-overhead-replacement-cache
* "Activity of the ZFS ARC": http://dtrace.org/blogs/brendan/2012/01/09/activity-of-the-zfs-arc/
* "ZFS L2ARC": http://www.brendangregg.com/blog/2008-07-22/zfs-l2arc.html
* "FreeBSD Mastery: Advanced ZFS": https://www.amazon.com/FreeBSD-Mastery-Advanced-ZFS/dp/164235001X
