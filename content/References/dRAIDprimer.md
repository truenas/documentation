---
title: OpenZFS dRAID Storage Primer
description: "Background information and general information about the dRAID storage solution included in OpenZFS version 2.2.0."
weight: 22
---

{{< toc >}}

Introduced in OpenZFS version 2.1.0 and initially supported in TrueNAS SCALE 23.10 (Cobia), declustered RAID (dRAID) is an alternate method for creating OpenZFS storage pools.

The primary intended benefit of a dRAID pool layout is to reduce resilver times, particularly in large disk count pools.
It does this by building the dRAID vdev from multiple internal raidz groups, using precomputed permutation maps for the rebuild IO, and using a fixed stripe width that fills with zeroes when necessary.

Depending on data block size and compression requirements, a dRAID pool could have significantly less total storage, especially in situations where large numbers of small data blocks are being stored.

These images demonstrate the differences between dRAID and raidz layouts in OpenZFS:

{{< columns >}}
{{< trueimage src="/images/Reference/raidzdRAIDSimplified.png" alt="Simplified dRAID and raidz characterizations" id="Simplified raidz and dRAID characterization"  >}}
<--->
{{< trueimage src="/images/Reference/dRAIDandraidz.png" alt="dRAID and raidz characterizations" id="dRAID Characterization (Thanks to Zhi (George) Qiao, Song Fu, Hsing-bung Chen, Bradley Wade Settlemyer)" >}}
{{< /columns >}}

## Concepts

**Healing resilver**

The traditional ZFS resilvering.
The entire block tree is scanned and traversed.
Checksums are verified during the repair process.
This can be a slow process as it results in a largely random workload that is not ideal for performance.
In a RAIDz deployment this also puts extra strain on the remaining discs in the vdev as they are all being read from simultaneously.

**Permutation maps**

dRAID uses an array of predetermined permutation maps to determine where data, parity, and spare capacity reside across the pool.
This ensures that during resilvers, all IO (reads and writes) distribute evenly across all disks, reducing the load on any one disk.

Because a permutation map automatically selects during pool creation, distributed spares cannot be added after pool creation.
If adding spares after pool creation is a critical requirement, create the pool using a raidz layout.

**Sequential resilver**

This is a new resilver type used by dRAID where blocks are read and restored sequentially.
This greatly increases resilver operation speed as it does not require block tree traversal.

Sequential resilver is made possible by the use of fixed stripe width in dRAID.
During a sequential resilver data is read from all pool members.

Checksums are not validated during a sequential resilver.
However, a scrub begins after the sequential resilver finishes and verifies data checksums.

**Fixed stripe width**

Stripe width is fixed in dRAID, with zeros added as padding.
This can have a significant effect on usable capacity depending on the data stored.

In a redundancy group of eight data disks using 4k sector disks, the minimum allocation size is **32k**.
Any files smaller than 32k still fill an entire stripe, with zeros appended to the write to fill the entire stripe.
This greatly reduces the pool usable capacity when the pool stores large numbers of small files.

dRAID datasets benefit greatly from larger record sizes.
**128k** is recommended as a minimum value for datasets and **64k** to **128k** for zvols.
Selecting a record/block size smaller than the minimum allocation size is catastrophic for pool capacity.
 
**Rebalancing**

This process occurs after a disk failure results in a distributed hot spare replacing a failed drive.
This is essentially a resilver, but data redistributes across the pool to meet the original distributed configuration.

During rebalancing, a traditional resilver is performed as the pool is not in a degraded state.
Checksums are also verified during this process.

## Terminology

The terminology used for a dRAID layout is similar to that used for raidz, but could have a different meaning.
It is recommended to review this list of terms and definitions before attempting to create storage pools with a dRAID layout in TrueNAS:

{{< truetable >}}
| Term | Definition |
|------|------------|
| Children (**C**) | Number of drives included in the dRAID deployment.
| Data Devices (**D**) | Number of data devices in a redundancy group. This number can be quite high, but generally a lower number results in greater performances and capacity is more effectively used. |
| Distributed hot spare | Unlike in a raidz configuration where spares remain inactive until needed, in a dRAID configuration spare capacity is distributed across the drives. This results in all drives being active members of the pool.
| Parity Level (**P**) | Distributed parity level of a dRAID redundancy group. This ranges from **1** to **3** and is similar to the RAIDz parity level. |
| Redundancy group | Similar to a **vdev** in raidz. A redundancy group is composed of of parity devices and data devices. Redundancy group size impacts storage performance and capacity. |
| Spare (**S**) | Number of distributed hot spares. |
| Vdev | Similar to vdev in raidz. dRAID allows for much larger vdevs, 100+ devices vdevs are not uncommon. Distributed hot spares are shared across all redundancy groups in a vdev. |

{{< /truetable >}}

### Redundancy Group Calculation

To calculate the number of redundancy groups in a dRAID storage pool, use this formula:

{{< katex >}}
Redundancy Groups = \frac{C - S}{D + P}
{{< /katex >}}

Where **C** is children, **S** is spares, **D** is data devices, and **P** is parity level.

For example, a dRAID pool with 20 children, 2 spares, 8 data devices, and 1 parity has **two** total redundancy groups:

{{< katex >}}
\frac{20 - 2}{8 + 1} = \frac{18}{9} = 2
{{< /katex >}}

## Additional Resources

These resources go much further in-depth with dRAID concepts and usage details:

* [OpenZFS dRAID documentation](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/dRAID%20Howto.html)

* [OpenZFS Resilver Taxonomy Presentation](https://docs.google.com/presentation/d/1vLsgQ1MaHlifw40C9R2sPsSiHiQpxglxMbK2SMthu0Q/edit#slide=id.g995720a6cf_1_39)
