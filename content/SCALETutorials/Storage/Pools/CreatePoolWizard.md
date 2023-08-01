---
title: "Creating Pools with the Wizard"
description: "Provides information on creating storage pools with the Pool Creation Wizard and using VDEV layout options in TrueNAS SCALE."
weight: 05
aliases:
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

Determining your specific storage requirements is a critical step before creating a pool.

## Creating a Pool

To create a pool using the **Pool Creation Wizard**:

1. Enter a name.
   Use up to 50 lower case alpha-numeric and permitted special characters that conform to [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html). 
   The pool name contributes to the maximum character length for datasets so it is limited to 50 characters. 

   {{< hint type=important >}}
   You cannot change the name of the pool after you click **Create**. 
   {{< /hint >}}

2. Create the required data VDEV.
   
   Select the layout from the **Layout** dropdown list, then either use the Automated Disk Selection fields to select the disks to add, or click **Manual Disk Selection** to add disks to the VDEV.

   Click **Save And Go To Review** if you don't want to add other VDEV types to the pool, or click **Next** to move to the next wizard screen.

3. Add any other VDEV you want to include in the pool. 
   
   Click **Save And Go To Review** if you don't want to add other VDEV types to the pool, or click **Next** to move to the next wizard screen.

4. Click **Create Pool** on the **Review** wizard screen to add the pool.

{{< taglist tag="scalepools" limit="10" >}}
{{< taglist tag="scalevdevs" limit="10" title="Related VDEV Articles" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}