---
title: "Create Pool"
description: "Provides background considerations and a simple tutorial on creating storage pools in TrueNAS SCALE."
weight: 30
tags:
- storage
- pools
keywords:
- nas storage software
- enterprise data storage solutions
- nas data storage
- configuration files
- pool wizard
---

TrueNAS uses ZFS data storage *pools* to efficiently store and protect data.

{{< expand "What is a pool?" "v" >}}
Storage pools attach drives organized into virtual devices called *VDEVs*.
Drives arranged inside VDEVs provide varying amounts of redundancy and performance.
ZFS and VDEVs combined create high-performance pools that maximize data lifetime.

ZFS and TrueNAS periodically review and *heal* when discovering a bad block in a pool.
{{< /expand >}}

## Reviewing Storage Needs
We strongly recommend that you review your available system resources and plan your storage use case before creating a storage pool. Consider the following:
* Allocating more drives to a pool increases redundancy when storing critical information.
* Maximizing total available storage at the expense of redundancy or performance entails allocating large-volume disks and configuring a pool for minimal redundancy.
* Maximizing pool performance entails installing and allocating high-speed SSD drives to a pool.

Security requirements can mean the pool must be created with [ZFS encryption]({{< relref "EncryptionSCALE" >}}).
However, we recommend that users create pools as unencrypted and then encrypt some or all of of the child datasets, as needed.

{{< include file="/static/includes/EncryptionRootLevel.md" >}}

RAIDz pool layouts are well-suited for general use cases and especially smaller (<10) data VDEVS or storage scenarios that involve storing multitudes of small data blocks.

dRAID pool layouts are useful in specific situations where large disk count (>100) arrays need improved resilver times due to increased disk failure rates and the array is intended to store large data blocks.

TrueNAS recommends defaulting to a RAIDz layout generally and whenever a dRAID vdev would have fewer than 10 data storage devices.

Determining your specific storage requirements is a critical step before creating a pool.
The [ZFS](https://www.truenas.com/docs/references/zfsprimer/) and [dRAID](https://www.truenas.com/docs/references/draidprimer/) primers provide a starting point to learn about the strengths and costs of different storage pool layouts.
You can also use the [ZFS Capacity Calculator](https://www.truenas.com/docs/references/zfscapacitycalculator/) and [ZFS Capacity Graph](https://www.truenas.com/docs/references/zfscapacitygraph/) to compare configuration options.

## Creating a Pool

{{< include file="/static/includes/CreatePool.md" >}}
