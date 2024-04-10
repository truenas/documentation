---
title: "Adding and Managing Datasets"
description: "Provides instructions on creating and managing datasets."
weight: 10
aliases:
 - /scale/scaleuireference/storage/pools/datasetsscale/
 - /scale/scaletutorials/storage/pools/datasetsscale/
 - /scale/scaletutorials/storage/datasets/datasetsscale/
tags:
 - datasets
 - storage
 - acl
 - quotas
---

A TrueNAS *dataset* is a file system within a data storage pool.
Datasets can contain files, directories, and child datasets, and have individual permissions or flags.

Datasets can also be [encrypted]({{< relref "EncryptionSCALE.md" >}}).
TrueNAS automatically encrypts datasets created in encrypted pools, but you can change the encryption type from key to passphrase.
You can create an encrypted dataset if the pool is not encrypted and set the type as either key or passphrase.

We recommend organizing your pool with datasets before configuring [data sharing]({{< relref "/SCALE/SCALEUIReference/Shares/_index.md" >}}), as this allows for more fine-tuning of access permissions and using different sharing protocols.

## Creating a Dataset

{{< include file="/static/includes/CreateDatasetSCALE.md" >}}

### Setting Dataset Compression Levels

Compression encodes information in less space than the original data occupies. 
We recommend choosing a compression algorithm that balances disk performance with the amount of saved space.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetCompressionLevelOptions.png" alt="Add Dataset Compression Level Options" id="Add Dataset Compression Level Options" >}}

{{< include file="/static/includes/StorageCompressionLevelsScale.md" >}}

### Setting Dataset Quotas
You can set dataset quotas while adding datasets using the quota management options in the **Add Dataset** screen under **Advanced Options**.
You can also add or edit quotas for an existing dataset, by clicking **Edit** on the **Dataset Space Management** widget to open the **[Capacity Settings]({{< relref "CapacitySettingsSCALE.md" >}})** screen.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetQuotasManagement.png" alt="Add Dataset Advanced Quota Options" id="Add Dataset Advanced Quota Options" >}}

Setting a quota defines the maximum allowed space for the dataset.
You can also reserve a defined amount of pool space to prevent automatically generated data like system logs from consuming all of the dataset space.
You can configure quotas for only the new dataset or both the new dataset and any child datasets of the new dataset.

Define the maximum allowed space for the dataset in either the **Quota for this dataset** or **Quota for this dataset and all children** field. 
Enter **0** to disable quotas.

Dataset quota [alerts]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/_index.md" >}}) are based on the percentage of storage used.
To set up a quota warning alert, enter a percentage value in **Quota warning alert at, %**.
When consumed space reaches the defined percentage it sends the alert.
To change the setting from the parent dataset warning level, clear the **Inherit** checkbox and then change the value.

To set up the quota critical level alerts, enter the percentage value in **Quota critical alert at, %**.
Clear the **Inherit** checkbox to change this value to something other than using the parent alert setting.

When setting quotas or changing the alert percentages for both the parent dataset and all child datasets, use the fields under **This Dataset and Child Datasets**.

Enter a value in **Reserved space for this dataset** to set aside additional space for datasets that contain logs, which could eventually take all available free space.
Enter **0** for unlimited.

For more information on quotas, see [Managing User or Group Quotas]({{< relref "ManageQuotas.md" >}}).

### Changing Dataset Inherited Values
By default, many dataset options inherit their values from the parent dataset.
When settings on the **Advanced Options** screen are set to**Inherit** the dataset uses the setting from the parent dataset.
For example, the [Encryption]({{< relref "EncryptionScale.md" >}}) or **ACL Type** settings.

To change any setting that datasets inherit from the parent, select an available option other than **Inherit**.

### Setting Datasets Access Controls
For information on ACL settings see [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}).

## Creating a Dataset for a Fusion Pool
First, add the [pool with a Metadata VDEV]({{< relref "FusionPoolsSCALE.md" >}}).

{{< trueimage src="/images/SCALE/Storage/AddMetadataVDEV.png" alt="Add Metadata VDEV" id="Add Metadata VDEV" >}}

Select the root dataset of the pool (with the metadata VDEV), then click **Add Dataset** to add the dataset.
Click **Advanced Options**. Enter the dataset name, select the **Dataset Preset**, then scroll down to **Metadata (Special) Small Block Size** setting to set a threshold block size for including small file blocks into the [special allocation class (fusion pools)]({{< relref "FusionPoolsScale.md" >}}).

{{< trueimage src="/images/SCALE/Datasets/AddDatasetFusionPoolMetadataOptions.png" alt="Add Dataset for Fusion Pool" id="Add Dataset for Fusion Pool" >}}

Blocks smaller than or equal to this value are assigned to the special allocation class while greater blocks are assigned to the regular class.
Valid values are zero or a power of two from 512B up to 1M.
The default size **0** means no small file blocks are allocated in the special class.
Enter a threshold block size for including small file blocks into the [special allocation class (fusion pools)]({{< relref "FusionPoolsScale.md" >}}).

## Managing Datasets
After creating a dataset, users can manage additional options from the **Datasets** screen.
Select the dataset, then click **Edit** on the dataset widget for the function you want to manage. 
The [Datasets Screen]({{< relref "/SCALE/SCALEUIReference/Datasets/_index.md" >}}) article describes each option in detail.

### Editing a Dataset
Select the dataset on the tree table, then click **Edit** on the **Dataset Details** widget to open the **Edit Dataset** screen and change the dataset configuration settings. You can change all settings except **Name**, **Case Sensitivity**, or **Device Preset**.

### Editing Dataset Permissions
To edit the dataset ACL permissions, click **Edit** on the **Permissions** widget.
If the ACL type is NFSv4, the **Permissions** widget shows ACE entries for the dataset.
Each entry opens a checklist of flag options you can select/deselect without opening the **Edit ACL** screen.
To modify ownership, configure new or change existing ACL entries, click **Edit** to open the **ACL Editor** screen.

To edit a POSIX ACL type, click **Edit** on the **Permissions** widget to open the **Unix Permissions Editor** screen.
To access the **Edit ACL** screen for POSIX ACLs, select **Create a custom ACL** on the **Select a preset ACL** window.

For more information, see the [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}) article.

### Deleting a Dataset
Select the dataset on the tree table, then click **Delete** on the **Dataset Details** widget.
This opens a delete window where you enter the dataset path (root/parent/child) and select **Confirm** to delete the dataset, all stored data, and any snapshots from TrueNAS. 

To delete a root dataset, use the **Export/Disconnect** option on the **[Storage Dashboard]({{< relref "ManagePoolsSCALE.md" >}})** screen to delete the pool.

{{< hint type=warning >}}
Deleting datasets can result in unrecoverable data loss!
Move any critical data stored on the dataset off to a backup copy or obsolete the data before performing the delete operation.
{{< /hint >}}
