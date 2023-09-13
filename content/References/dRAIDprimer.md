---
title: ZFS dRAID Primer
description: "Background information and general information about the dRAID storage solution included in OpenZFS version 2.1.0."
weight: 72
---

{{< toc >}}

Introduced in OpenZFS version 2.1.0 and initially supported in TrueNAS SCALE 23.10 (Cobia), declustered RAID (dRAID) is an alternate method for creating OpenZFS data virtual devices (vdevs).

Intended for storage arrays with numerous attached disks (>100), the primary benefit of a dRAID vdev layout is to reduce resilver times.
It does this by building the dRAID vdev from multiple internal raid groups that have their own data and parity devices, using precomputed permutation maps for the rebuild IO, and using a fixed stripe width that fills storage capacity with zeroes when necessary.

Depending on data block size and compression requirements, a dRAID pool could have significantly less total storage, especially in situations where large numbers of small data blocks are being stored.

{{< hint type="tip" title="dRAID Usage Recommendations" >}}
Due to concerns with storage efficiency, dRAID vdev layouts are only recommended in very specific situations where the TrueNAS storage array has numerous (>100) attached disks that are expected to fail frequently and the array is storing large data blocks.

Current investigations between dRAID and RAIDZ vdev layouts find that RAIDZ layouts store data more efficiently in all general use case scenarios, and especially in scenarios where small blocks of data are being stored.
{{< /hint >}}

These images demonstrate the differences between dRAID and raidz layouts in OpenZFS:

{{< columns >}}
{{< trueimage src="/images/Reference/raidzdRAIDSimplified.png" alt="Simplified dRAID and raidz characterizations" id="Simplified raidz and dRAID characterization" >}}
<--->
{{< trueimage src="/images/Reference/dRAIDandraidz.png" alt="dRAID and raidz characterizations" id="dRAID Characterization" >}}
<p style="text-align: center;"><small>Thanks to Zhi (George) Qiao, Song Fu, Hsing-bung Chen, and Bradley Wade Settlemyer.</small></p>
{{< /columns >}}

## Concepts

#### Fixed stripe width

Stripe width is fixed in dRAID, with zeroes added as padding.
This can have a significant effect on usable capacity, depending on the data stored.

In a redundancy group of eight data disks using 4k sector disks, the minimum allocation size is **32k**.
Any files smaller than 32k still fill an entire stripe, with zeroes appended to the write to fill the entire stripe.
This greatly reduces the pool usable capacity when the pool stores large numbers of small files.

dRAID vdevs typically benefit greatly from larger **record sizes** and have some hard limitations on dataset and zvol record sizes.
The absolute minimum dataset record size is **128k** and zvol record size is **64k** to **128k** for zvols.
However, this does not account for typical data access patterns.

When datasets are expected to have a heavy sequential I/O pattern, a **1MB** record size can be beneficial for compression.
However, datasets, and typically zvols, are expected to have heavy random I/O patterns, it is recommended to remain closer to the minimum **128k** (or **64k** for zvols) record size.
Selecting a record/block size smaller than the minimum allocation size is catastrophic for pool capacity.

#### Permutation maps

dRAID uses an array of predetermined permutation maps to determine where data, parity, and spare capacity reside across the pool.
This ensures that during resilvers, all IO (reads and writes) distribute evenly across all disks, reducing the load on any one disk.

Because a permutation map automatically selects during pool creation, **distributed spares cannot be added after pool creation**.
If adding spares after pool creation is a critical requirement, create the pool using a raidz layout.

#### Distributed hot spare

dRAID uses a different methodology from raidz to provide hot spare capacity to the data vdev.
Distributed hot spares are allocated as blocks on each disk in the pool.
This means that hot spares must be allocated during vdev creation, cannot be modified later, and that every disk added to the vdev is active within the storage pool.

Disk failure results in the dRAID vdev copying the parity and data blocks onto the spare blocks in the each fixed stripe width disk.
Because of this behavior and inability to add distributed hot spares later, it is recommended to always create a dRAID vdev with at least one or more distributed hot spares and to take additional care to replace failed drives as soon as possible.

#### Sequential resilver

This is a new resilver type used by dRAID where blocks are read and restored sequentially.
This greatly increases resilver operation speed as it does not require block tree traversal.

Sequential resilver is made possible by the use of fixed stripe width in dRAID.
During a sequential resilver data is read from all pool members.

Checksums are not validated during a sequential resilver.
However, a scrub begins after the sequential resilver finishes and verifies data checksums.

#### Rebalancing

This process occurs after a disk failure results in a distributed hot spare replacing a failed drive.
This is essentially a resilver, but data redistributes across the pool to meet the original distributed configuration.

During rebalancing, a traditional resilver is performed as the pool is not in a degraded state.
Checksums are also verified during this process.

#### Healing resilver

The traditional ZFS resilver.
The entire block tree is scanned and traversed.
Checksums are verified during the repair process.
This can be a slow process as it results in a largely random workload that is not ideal for performance.
In a raidz deployment this also puts extra strain on the remaining disks in the vdev, as they are all being read from simultaneously.

## Terminology

The terminology used for a dRAID layout is similar to that used for raidz, but could have a different meaning.
It is recommended to review this list of terms and definitions before attempting to create storage pools with a dRAID layout in TrueNAS:

{{< truetable >}}
| Term | Definition |
|------|------------|
| Children (*C*) | Number of drives included in the dRAID deployment. |
| Data Devices (*D*) | Number of data devices in a redundancy group. This number can be quite high, but generally a lower number results in greater performances and capacity is more effectively used. |
| Distributed hot spare (*S*) | Unlike in a raidz configuration where spares remain inactive until needed, in a dRAID configuration spare capacity is distributed across the drives. This results in all drives being active members of the pool. This number cannot change after pool creation. |
| Parity Level (*P*) | Distributed parity level of a dRAID redundancy group. This ranges from **1** to **3** and is similar to the raidz parity level. |
| Redundancy group | dRAID layouts use equivalent raidz vdevs as the foundation for the complete dRAID vdev. A redundancy group is composed of parity devices and data devices. Redundancy group size impacts storage performance and capacity. |
| Vdev | An OpenZFS virtual device. dRAID layouts allow much larger vdevs. 100+ device vdevs are not uncommon. Distributed hot spares are shared across all redundancy groups in a vdev. |

{{< /truetable >}}

## dRAID Capacity Estimations

TrueNAS uses this formula to estimate the total capacity of a dRAID data vdev:

{{< katex >}}
Capacity = (C - S) \cdot \left(\frac{D}{{D + P}}\right) \cdot DS
{{< /katex >}}

Where *C* is the children number, *S* is the distributed hot spare number, *D* is the data device number, *P* is the parity level, and *DS* is the minimum disk size common to all disks in the vdev.

For example, setting up a single dRAID1 vdev layout with matching 1.82 TiB disks, 8 data devices, 1 distributed hot spare, and 10 children results in an estimated 14.58 TiB (rounded) total capacity:

{{< katex >}}
(10 - 1) \cdot \left(\frac{8}{{8 + 1}}\right) \cdot 1.82 = 9 \cdot 0.89 \cdot 1.82 = 14.5782
{{< /katex >}}

This formula doesn't account for additional metadata reservations, so the total estimated capacity is likely to be slightly lower.

## Additional Resources

These resources go much further in-depth with dRAID concepts and usage details:

* [OpenZFS dRAID documentation](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/dRAID%20Howto.html)

* [OpenZFS Resilver Taxonomy Presentation](https://docs.google.com/presentation/d/1vLsgQ1MaHlifw40C9R2sPsSiHiQpxglxMbK2SMthu0Q/edit#slide=id.g995720a6cf_1_39)
