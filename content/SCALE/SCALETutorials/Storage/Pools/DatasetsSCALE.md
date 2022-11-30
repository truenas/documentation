---
title: "Adding and Managing Datasets"
description: "This article provides instructions on creating and managing datasets."
weight: 55
aliases: /scale/scaleuireference/storage/pools/datasetsscale/
tags:
- scaledatasets
- scalestorage
- scaleacls
- scalequotas
---

{{< toc >}}

A TrueNAS dataset is a file system within a data storage pool.
Datasets can contain files, directories (child datasets), and have individual permissions or flags.
Datasets can also be [encrypted]({{< relref "EncryptionSCALE.md" >}}), either using the encryption created with the pool or with a separate encryption configuration.

We recommend organizing your pool with datasets before configuring [data sharing]({{< relref "SCALE/SCALEUIReference/Shares/_index.md" >}}), as this allows for more fine-tuning of access permissions and using different sharing protocols.

## Creating a Dataset

To create a dataset using the default settings, go to **Datasets**. 
Default settings includes the settings datasets inherit from the parent dataset.

Select a dataset (root, parent or child), then click **Add Dataset**.

![AddDatasetNameAndOptions](/images/SCALE/22.12/AddDatasetNameAndOptions.png "Add Dataset Name and Options")

Enter a value in **Name**.

Select either **Sensitive** or **Insensitive** from the **Case Sensitivity** dropdown.

Select either **SMB** for the **Share Type** or leave set to **Generic**, then click **Save**.

![AddDatasetEncrytionAndOtherOptionsBasic](/images/SCALE/22.12/AddDatasetEncrytionAndOtherOptionsBasic.png "Add Encryption and Other Options")

You can create datasets optimized for SMB shares or with customized settings for your dataset use cases.

{{< hint warning >}}
Review the **Share Type** and **Case Sensitivity** options on the configuration screen before clicking **Save**.
You cannot change these and the **Name** setting after clicking **Save**.
{{< /hint >}}

### Setting Dataset Compression Levels

Compression encodes information in less space than the original data occupies. 
We recommended you choose a compression algorithm that balances disk performance with the amount of saved space.

![AddDatasetCompressionLevelOptions](/images/SCALE/22.12/AddDatasetCompressionLevelOptions.png "Add Dataset Compression Level Options")

{{< include file="/_includes/StorageCompressionLevelsScale.md" type="page" >}}

### Setting Dataset Quotas

You can set dataset quotas when you add a dataset using the **Add Dataset > Advanced Options** quota management options, or to add or edit quotas for a selected dataset, click **Edit** on the **Dataset Space Management** widget to open the **[Capacity Settings]({{< relref "CapacitySettingsSCALE.md" >}})** screen. 

![AddDatasetQuotasManagement](/images/SCALE/22.12/AddDatasetQuotasManagement.png "Add Dataset Advanced Quota Options") 

Setting a quota defines the maximum allowed space for the dataset.
You can also reserve a defined amount of pool space to prevent automatically generated data like system logs from consuming all of the dataset space.
You can configure quotas for only the new dataset or for both the new dataset and any child datasets of the new dataset.

Define the maximum allowed space for the dataset in either the **Quota for this dataset** or **Quota for this dataset and all children** field. 
Enter **0** to disable quotas. 

Dataset quota [alerts]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/_index.md" >}}) are based on the percentage of used storage.
To set up a quota warning alert, enter a percentage value in **Quota warning alert at, %**.
When consumed space reaches the defined percentage it sends the alert.
To change the setting from the parent dataset warning level, clear the **Inherit** checkbox and then change the value.

To set up the quota critical level alerts, enter the percentage value in **Quota critical alert at, %**.
Clear the **Inherit** checkbox to change this value to something other than using the parent alert setting.

When setting quotas or changing the alert percentages for both the parent dataset and all child datasets, use the fields under **This Dataset and Child Datasets**.

Enter a value in **Reserved space for this dataset** to set aside additional space for datasets that contain logs which could eventually take all available free space.
Enter **0** for unlimited.

For more information on quotas, see [Managing User or Group Quotas]({{< relref "ManageQuotas.md" >}}).

### Changing Dataset Inherited Values

By default, many of dataset options inherit their values from the parent dataset.
When **Inherit** is selected, as a checkbox or option in a dropdown list, the dataset uses the setting from the parent dataset.
For example, the [Encryption]({{< relref "EncryptionScale.md" >}}) or **ACL Type** settings.

To change any setting that can inherit the parent setting, clear the checkbox or select another available option, and then enter the desired setting values for the child dataset.

### Setting Datasets Access Controls

For information on ACL settings see [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}).

## Creating a Dataset for a Fusion Pool

First, add a Metadata VDEV to the pool.

![AddMetadataVDEV](/images/SCALE/22.12/AddMetadataVDEV.png "Add Metadata VDEV") 

Then add the dataset. Use the **Metadata (Special) Small Block Size** setting on the **Add Dataset > Advanced Options > Other Options** screen to set a threshold block size for including small file blocks into the [special allocation class (fusion pools)]({{< relref "FusionPoolsScale.md" >}}).

![AddDatasetFusionPoolMetadataOptions](/images/SCALE/22.12/AddDatasetFusionPoolMetadataOptions.png "Add Dataset for Fusion Pool") 

Blocks smaller than or equal to this value are assigned to the special allocation class while greater blocks are assigned to the regular class.
Valid values are zero or a power of two from 512B up to 1M.
The default size **0** means no small file blocks are allocated in the special class.
Enter a threshold block size for including small file blocks into the [special allocation class (fusion pools)]({{< relref "FusionPoolsScale.md" >}}). 

## Managing Datasets

After creating a dataset, users can manage additional options from the **Datasets** screen.
Select the dataset you want to manage, then click **Edit** on the widget for the function you want to manage. 
Each option is described in detail in the [Datasets Screen]({{< relref "DatasetsScreensSCALE.md" >}}) article.

## Editing a Dataset
Select the dataset on the tree table, then click **Edit** on the **Dataset Details** widget to open the **Edit Dataset** screen and change the dataset configuration settings. You can change all settings except **Name**, **Case Sensitivity**, or **Share Type**.

### Editing Dataset Permissions

The **Permissions** widget for a dataset with an NFSv4 ACL type, converts each listed ACL item a button that opens a permissions editor for that ACL item. 
To configure new ACL items for an NFSv4 ACL, click **Edit** to open the **ACL Editor** screen.

To edit a POSIX ACL type, click **Edit** on the **Permissions** widget to open the **Unix Permissions Editor** screen.

For more information, see the [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}) article.

### Deleting a Dataset
Select the dataset on the tree table, then click **Delete** on the **Dataset Details** widget. This opens a window where you enter the path (parent/child) and select **Confirm** to delete the dataset, all stored data, and any snapshots from TrueNAS. 

To delete a root dataset, use the **Export/Disconnect** option on the **[Storage Dashboard]({{< relref "ManagePoolsSCALE.md" >}})** screen to delete the pool.

{{< hint danger >}}
Deleting datasets can result in unrecoverable data loss!
Move off any critical data stored on the dataset or obsolete it before performing the delete operation.
{{< /hint >}}

{{< taglist tag="scaledatasets" limit="10" >}}
{{< taglist tag="scaleacls" limit="10" title="Related Permissions Articles" >}}
{{< taglist tag="scalequotas" limit="10" title="Related Quotas Articles" >}}