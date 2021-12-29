---
title: "L2ARC"
weight: 30
aliases:
  - /core/notices/persistentl2arcin12.0/
---

{{< toc >}}

ZFS has several features to help improve performance for frequent access data read operations. One is Adaptive Replacement Cache (ARC), which uses the server memory (RAM). The other is Second-level Adaptive Replacement Cache (L2ARC), or cache drives added to ZFS storage pools. These cache drives are multi-level cell (MLC) SSD drives and, while slower than system memory, still much faster than standard hard drives. ZFS (and TrueNAS) uses all of the RAM installed in a system to make the ARC as large as possible, but this can be very expensive. Cache drives provide a cheaper alternative to RAM for frequently accessed data.

## How Does L2ARC Work?

When a system gets read requests, ZFS uses ARC (RAM) to serve those requests. When the ARC is full and the system has L2ARC drives allocated to a ZFS pool, ZFS uses the L2ARC to fulfill the read requests that "overflowed" from the ARC. L2ARC minimizes how often the system accesses slower hard drives and increases system performance.

## Implementation in TrueNAS

TrueNAS integrates L2ARC management in the web interface **Storage** section. Specifically, adding a *Cache* vdev to a new or existing pool and allocating drives to that pool enables L2ARC for that specific storage pool.

Cached drives are always striped, not mirrored.
To increase an existing L2ARC size, stripe another cache device with it.
You cannot share dedicated L2ARC devices between ZFS pools.

A cache device failure does not affect the integrity of the pool, but it may impact read performance depending on the workload and the dataset size to cache size ratio.

### Persistant L2ARC in CORE and SCALE

By default, the L2ARC cache empties when the system reboots.
When Persistent L2ARC is enabled, a sysctl repopulates the cache device mapping during the reboot process.
Persistent L2ARC preserves L2ARC performance even after a system reboot.

However, persistent L2ARC for large data pools can drastically slow the reboot process, degrading middleware and web interface performance.
Because of this, we've disabled Persistent L2ARC by default in TrueNAS CORE, but you can manually activate it.

### Activating Persistent L2ARC

{{< tabs "L2ARC" >}}
{{< tab "CORE" >}}
Go to **System > Tunables** and click **ADD**.
For the **Variable**, enter `vfs.zfs.l2arc.rebuild_enabled`. Set the **Value** to **1** and the **Type** to **sysctl**.
We recommend noting in the **Description** that this is the Persistent L2ARC activation.
Make sure **Enabled** is set and click **SUBMIT**.

![PersistentL2ARCTunable](/images/CORE/12.0/SystemTunablesL2ARCRebuild.png "Persistent L2ARC Activation")

{{< expand "CLI Instructions" "v" >}}
{{< hint warning >}}
TrueNAS CORE doesn't write settings changed through the CLI to the configuration database. TrueNAS will reset them on reboot.
{{< /hint >}}
In a command line, enter `sysctl vfs.zfs.l2arc.rebuild_enabled=1`.
When successful, the output reads: `vfs.zfs.l2arc.rebuild_enabled: 0 -> 1`
{{< /expand >}}
{{< /tab >}}
{{< tab "SCALE" >}}
TrueNAS SCALE enables Persistent L2ARC by default. We do not recommend users disable it.
{{< /tab >}}
{{< /tabs >}}

## Device Recommendations

Like all complicated features, deciding whether L2ARC is effective or not requires a strong understanding of your storage environment, performance goals, and the software you're using.

However, we have a few recommendations for L2ARC devices:

* Using multiple L2ARC devices helps reduce latency and improve performance.

* Random Read Heavy workloads can benefit from large capacity L2ARC SSDs. L2ARC SSDs are faster than the existing data storage drives.

* Sequential or streaming workloads need very fast, low-latency L2ARC devices. [We recommend Enterprise-grade NVMe devices](https://www.snia.org/sites/default/files/SDC/2019/presentations/File_Systems/McKenzie_Ryan_Best_Practices_for_OpenZFS_L2ARC_in_the_Era_of_NVMe.pdf). L2ARC device capacity depends on how much faster it is than the data storage devices. An L2ARC device that is much faster than the data storage devices makes better use of its larger capacity.

## Resources

* "Best Practices for OpenZFS L2ARC in the Era of NVMe" : https://www.snia.org/sites/default/files/SDC/2019/presentations/File_Systems/McKenzie_Ryan_Best_Practices_for_OpenZFS_L2ARC_in_the_Era_of_NVMe.pdf
* Open ZFS Repository: https://github.com/openzfs/zfs
* "ARC: A Self-Tuning, Low Overhead Replacement Cache": https://www.usenix.org/conference/fast-03/arc-self-tuning-low-overhead-replacement-cache
* "Activity of the ZFS ARC": http://dtrace.org/blogs/brendan/2012/01/09/activity-of-the-zfs-arc/
* "ZFS L2ARC": http://www.brendangregg.com/blog/2008-07-22/zfs-l2arc.html
* "FreeBSD Mastery: Advanced ZFS": https://www.amazon.com/FreeBSD-Mastery-Advanced-ZFS/dp/164235001X
