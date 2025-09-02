---
title: "Fusion Pools"
description: "Provides information on setting up and using fusion pools."
weight: 35
aliases:
 - /scale/scaleuireference/storage/pools/fusionpoolsscale/
 - /scale/scaletutorials/storage/pools/fusionpoolsscale/
tags:
- pools
- storage
---

{{< include file="/static/includes/FusionPoolsIntro.md" >}}

## Creating a Fusion Pool

On the **Storage Dashboard**, click **Create Pool**, or click **Add To Pool**, then select **New Pool**.

A pool must always have one normal (non-dedup/special) VDEV before you assign other devices to the special class.

Enter a name for the pool using up to 50 lowercase alpha-numeric and permitted special characters that conform to [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html). 
The pool name contributes to the maximum character length for datasets, so it is limited to 50 characters. 

Add disks to the **Data** vdev, then click on the **Metadata** option to add a disk or disks to the VDEV.

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizardMetadataScreen.png" alt="Pool Creation Wizard Metadata Screen" id="Pool Creation Wizard Metadata Screen" >}}

Click **Save And Go To Review**, then click **Save** to create the VDEV.

{{< include file="/static/includes/FusionPoolsCommonContent.md" >}}
