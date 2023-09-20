---
title: "Pool Creation Wizard"
description: "Background considerations and a simple tutorial on creating storage pools in TrueNAS SCALE."
weight: 05
aliases:
 - /scale/scaletutorials/storage/pools/createpoolscale/
tags:
- scalestorage
- scalepools
- scalevdevs
---

{{< toc >}}


TrueNAS uses ZFS data storage *pools* to efficiently store and protect data.

{{< expand "What's a pool?" "v" >}}
Storage pools attach drives organized into virtual devices called *VDEVs*.
ZFS and TrueNAS periodically review and *heal* when discovering a bad block in a pool.
Drives arranged inside VDEVs provide varying amounts of redundancy and performance.
ZFS and VDEVs combined create high-performance pools that maximize data lifetime.
{{< /expand >}}

## Review Storage Needs

We strongly recommend that you review your available system resources and plan your storage use case before creating a storage pool.
* Allocating more drives to a pool increases redundancy when storing critical information.
* Maximizing total available storage at the expense of redundancy or performance entails allocating large-volume disks and configuring a pool for minimal redundancy.
* Maximizing pool performance entails installing and allocating high-speed SSD drives to a pool.
* Security requirements can mean the pool must be created with [ZFS encryption]({{< relref "EncryptionSCALE.md" >}}).
* RAIDz pool layouts are well-suited for general use cases and especially smaller (<10) data VDEVS or storage scenarios that involve storing multitudes of small data blocks.
* dRAID pool layouts are useful in specific situations where large disk count (>100) arrays need improved resilver times due to increased disk failure rates and the array is intended to store large data blocks.
  TrueNAS recommends defaulting to a RAIDz layout generally and whenever a dRAID vdev would have fewer than 10 data storage devices.

Determining your specific storage requirements is a critical step before creating a pool.
The [ZFS](https://www.truenas.com/docs/references/zfsprimer/) and [dRAID](https://www.truenas.com/docs/references/draidprimer/) primers provide a starting point to learn about the strengths and costs of different storage pool layouts.

## Creating a Pool

To create a pool using the **Pool Creation Wizard**.

{{< expand "Pool Creation Wizard Fields (Click to expand)" "v" >}}
{{< include file="/_includes/PoolCreationWizardCommonSettings.md" >}}
{{< /expand >}}

1. Enter a name.
   Use up to 50 lower case alpha-numeric and permitted special characters that conform to [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html). 
   The pool name contributes to the maximum character length for datasets so it is limited to 50 characters. 

   {{< hint type=important >}}
   The pool name cannot change after creation.
   {{< /hint >}}

2. Create the required data VDEV.
   
   Select the layout from the **Layout** dropdown list, then either use the **Automated Disk Selection** fields to select and add the disks, or click **Manual Disk Selection** to add specific disks to the chosen **Layout**.
   
   **dRAID** layouts do not have the **Manual Disk Selection** button and instead show additional **Automated Disk Selection** fields.
   When configuring a **dRAID** data VDEV, first choose a **Disk Size** then select a **Data Devices** number.
   The remaining fields update based on the **Data Devices** and **dRAID** layout selections.

   Click **Save And Go To Review** if you do not want to add other VDEV types to the pool, or click **Next** to move to the next wizard screen.

3. Add any other optional VDEVs as determined by your specific storage redundancy and performance requirements.

4. Click **Create Pool** on the **Review** wizard screen to add the pool.

{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}
