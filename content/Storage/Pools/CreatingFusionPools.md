---
title: "Creating Fusion Pools"
description: "Provides information on setting up and using fusion pools."
weight: 30
tags:
- pools
- storage
doctype: tutorial
---


{{< include file="/static/includes/FusionPoolsIntro.md" >}}

## Creating a Fusion Pool

On the **Storage Dashboard**, click **Create Pool**, or click **Add To Pool**, then select **New Pool**.

A pool must always have one normal data storage (data, dRAID, RAIDz) VDEV before you assign other devices to the special class.

Enter a name for the pool using up to 50 lowercase alpha-numeric or permitted special characters that conform to [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html). 
The pool name contributes to the maximum character length for datasets, so it is limited to 50 characters. 

Add disks to the **Data** vdev, then click on the **Special** option to add a disk or disks to the VDEV.

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizardSpecialScreen.png" alt="Pool Creation Wizard Special Screen" id="Pool Creation Wizard Special Screen" >}}

Select a **Layout** that matches or exceeds the redundancy level of the data VDEV. For example, if the data VDEV uses RAIDZ2, select RAIDZ2 or a three-way mirror for the Special VDEV. Pool creation fails when the special VDEV redundancy is lower than the data VDEV redundancy.

Click **Save And Go To Review**, then click **Save** to create the VDEV.

{{< include file="/static/includes/FusionPoolsCommonContent.md" >}}
