---
title: "Fusion Pools"
description: "This article provides information on setting up and using fusion pools."
weight: 109
alias: /scale/scaleuireference/storage/pools/fusionpoolsscale/
tags:
- scalepools
- scalestorage
- scalevdevs
---


{{< include file="/_includes/FusionPoolsIntro.md" type="page" >}}

## Creating a Fusion Pool

Go to **Storage Dashboard**, click **Create Pool**.

A pool must always have one normal (non-dedup/special) VDEV before you assign other devices to the special class.

Enter a name for the pool using up to 50 lower case alpha-numeric and permitted special characters that conform to [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html). 
The pool name contributes to the maximum character length for datasets, so it is limited to 50 characters. 

Click **ADD VDEV** and select **Metadata** to add the VDEV to the pool layout.

Add disks to the primary **Data VDevs**, then to the **Metadata** VDEV.

![AddFusionPoolVDEV](/images/SCALE/22.12/AddFusionPoolVDEV.png "Create Metadata VDEV")

{{< include file="/_includes/FusionPoolsCommonContent.md" type="page" >}}

{{< taglist tag="scalepools" limit="10" title="Related Pools Articles" >}}
{{< taglist tag="scalevdevs" limit="10" title="Related VDEV Articles" >}}