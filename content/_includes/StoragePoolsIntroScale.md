---
---

TrueNAS uses ZFS data storage *pools* to efficiently store and protect data.

{{< expand "What is a pool?" "v" >}}
Storage pools are attached drives organized into virtual devices (*vdevs*).
ZFS and TrueNAS periodically review and *heal* when discovering a bad block in a pool.
Drives are arranged inside vdevs to provide varying amounts of redundancy and performance.
Combined, ZFS and vdevs combined create high-performance pools, pools that maximize data lifetime, and all situations in between.
{{< /expand >}}

For more on ZFS storage, see [ZFS Primer]({{< relref "/content/References/ZFSPrimer.md" >}}).

## Review Storage Needs

We strongly recommend users review the available system resources and plan the storage use case before creating a storage pool.
* Allocating more drives to a pool increases redundancy when storing critical information.
* Maximizing total available storage at the expense of redundancy or performance entails allocating large-volume disks and configuring a pool for minimal redundancy.
* Maximizing pool performance entails installing and allocating high-speed SSD drives to a pool.

Determining your specific storage requirements is a critical step before creating a pool.