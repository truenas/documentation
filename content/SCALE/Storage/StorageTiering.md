---
title: "Storage Tiering"
description: "Provides information on setting up Storage Tiering."
weight: 30 
aliases:
tags:
- pools
- storage
- tiering
- storage provisioning
- fusion pools
doctype: tutorial
---

{{< enterprise >}}
This feature is only available on TrueNAS Enterprise systems.
{{< /enterprise >}}

Storage Tiering is a share-level toggle that lets admin users decide whether to write data to flash performance tiers or regular HDD tiers within a fusion pool at any time. 
Users can also transparently migrate data between tiers without breaking share access paths.

To use Tiering, you must, configure and acivate the Tiering feature, create a fusion pool, create a dataset in the fusion pool, then create shares for tiering use. 

{{< hint type=tip title="Using Preexisting Pools" >}}
If your goal is to consolidate SSD drives from one pool into another pool as part of enabling Storage Tiering, follow the [Storage Tiering Migration Guide]({{< ref "/SCALE/Storage/Pools/StorageTieringPoolMigration" >}}) instead. That procedure adds tiering-specific preflight items, a topology change to the Pool A special class, and a third phase covering tier migration jobs.
{{< /hint >}}

## Configure Tiering

Go to **Storage** and click **Tiering**.

{{< trueimage src="/images/SCALE/Storage/TieringScreen.png" alt="Tiering Screen" id="Tiering Screen" >}}

Enter your desired values for [**Max Concurrent Jobs** and **Max Used Percentage**]({{< ref "/SCALE/Storage/StorageDashboardScreens" >}}), then select **Enable** and click **Save**

{{< hint type=caution title="Shares will be locked to a single dataset" >}}
Once tiering is on, SMB shares and Webshares stop following nested datasets. Each share will expose only its own dataset, and any child datasets under it will no longer be visible to clients through that share. Create a separate share for each dataset you want to expose.
{{< /hint >}}



## Create a Fusion Pool

On the **Storage Dashboard**, click **Create Pool**, or click **Add To Pool**, then select **New Pool**.

Create your data VDEV, then click on the **Special** option to add disks to the VDEV.

{{< trueimage src="/images/SCALE/Storage/AddSpecialVDEV.png" alt="Pool Creation Wizard Special Screen" id="Pool Creation Wizard Special Screen" >}}

We recommend you configure the Special VDEV layout to have parity with the Data VDEV, but for performance reasons, you can make a different type of VDEV (like a mirror of SSDs).

Click **Save And Go To Review**, then click **Save** to create the VDEV.

After enabling Tiering and creating a fusion pool, you will be able to see your Performance and Regular tier capacity usage on the **Storage Dashboard**.

{{< trueimage src="/images/SCALE/Storage/TieringUsage.png" alt="Storage Dashboard Tiering Usage" id="Storage Dashboard Tiering Usage" >}}

For more general information and best practices on fusion pools, see [Creating Fusion Pools]({{< ref "/SCALE/Storage/Pools/CreatingFusionPools" >}}).



## Create Datasets for Tiering

Go to Datasets, select the fusion pool you made, and click Add Dataset. [Enter the values you want for the dataset configuration]({{< ref "/SCALE/Datasets/Datasets" >}}) and save it.

After creating a dataset, you can see which storage tier the dataset is on in the **Details** card.

{{< trueimage src="/images/SCALE/Datasets/DatasetDetailsTiering.png" alt="Dataset Details Tiering" id="Dataset Details Tiering" >}}

You can create as many datasets in the fusion pool as you need for different storage tier purposes.



## Create Shares

Storage tiering works with SMB and NFS sharing. You can create as many shares for fusion pool datasets as you need for different storage tier purposes.

For example, you could have one share/dataset for regular tier cold storage on HDDs, and another share/dataset for performance tier fast reads and writes on SSDs.



### Create an SMB Share for Tiering

Go to **Shares > Windows (SMB) Shares** and click **Add**. Select a share purpose and select the dataset you made for tiering as the path. Once you have [configured the rest of the share settings]({{< ref "/SCALE/Shares/SMB/AddManageSMBShares" >}}), click **Save**.

The **Windows (SMB) Shares** card and the **Shares > SMB** screen both display which **Storage Tier** the dataset is set to.

{{< trueimage src="/images/SCALE/Shares/SMBTieringStatus.png" alt="SMB Tiering Status" id="SMB Tiering Status" >}}



### Create an NFS Share for Tiering

Go to **Shares > UNIX (NFS) Shares** and click **Add**. Select the dataset you made for tiering as the path. Once you have [configured the rest of the share settings]({{< ref "/SCALE/Shares/NFS/AddingNFSShares" >}}), click **Save**.

The **UNIX (NFS) Shares** card and the **Shares > NFS** screen both display which **Storage Tier** the dataset is set to.

{{< trueimage src="/images/SCALE/Shares/NFSTieringStatus.png" alt="NFS Tiering Status" id="NFS Tiering Status" >}}



## Changing Storage Tiers

When you want to change from Regular tier to Performance (for faster reads/writes to SSDs), or Performance tier to Regular (for slower read/writes to HDDs), you can do so from either the **Datasets** screen or the **Shares** screen.

To change storage tiers from the datasets screen, click **Change** in the dataset **Details** card. To change storage tiers from the SMB or NFS shares screens, click <span class="material-icons">more_vert</span> to the right of the share and select **Change Storage Tier**.

{{< trueimage src="/images/SCALE/Datasets/ChangeStorageTier.png" alt="Change Storage Tier" id="Change Storage Tier" >}}

When changing storage tiers, you can select whether you want to migrate existing data to the new storage tier. This may take some time depending on the amount of data.