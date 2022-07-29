---
title: "Adding and Managing Datasets"
description: "This article provides instructions on creating and managing datasets."
weight: 30
aliases: /scale/scaleuireference/storage/pools/datasetsscale/
tags:
 - scaledatasets
 - scalestorage
 - scaleencryption
 - scaleacls
 - scalequotas
---

{{< toc >}}

A TrueNAS dataset is a file system within a data storage pool.
Datasets can contain files, directories (child datasets), and have individual permissions or flags.
Datasets can also be [encrypted]({{< relref "EncryptionSCALE.md" >}}), either using the encryption created with the pool or with a separate encryption configuration.

We recommend organizing your pool with datasets before configuring [data sharing]({{< relref "SCALE/SCALEUIReference/Shares/_index.md" >}}), as this allows for more fine-tuning of access permissions and using different sharing protocols.

## Creating a Generic Dataset

To create a dataset using the default settings, go to **Storage**. Default settings includes settings datasets inherit from the parent dataset.

Select a dataset, pool (root) dataset or a child dataset, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and then select **Add Dataset**.

![AddDatasetNameAndOptions](/images/SCALE/22.02/AddDatasetNameAndOptionsDatasetAddSCALE.png "Add Dataset Name and Options")

Enter a name and click **Save**.

## Creating Custom Datasets

You can create datasets optimized for SMB shares or with customized settings for your dataset use cases.
{{< hint warning >}}
Settings to check before you click **Save** are **Share Type** and **Case Sensitivity** on the configuration screen. You cannot change these settings and the **Name** setting after you click **Save**.
{{< /hint >}}

### Setting Dataset Compression Levels

Compression encodes information in less space than the original data occupies. 
We recommended you choose a compression algorithm that balances disk performance with the amount of saved space.

{{< include file="/_includes/StorageCompressionLevelsScale.md" type="page" >}}

### Setting Dataset Quotas

Click **Advanced Options** to see the dataset quota management tools.

Setting a quota defines the maximum allowed space for the dataset.
You can also reserve a defined amount of pool space to prevent automatically generated data like system logs from consuming all of the dataset space.
You can configure quotas for only the new dataset or include all child datasets.

Define the maximum allowed space for the dataset in either the **Quota for this dataset**. Enter **0** to disable quotas. 

Dataset quota [alert]({{< relref "/SCALEUIReference/TopToolbar/Alerts/AlertSettingsScreen.md" >}}) are based on the percentage of used storage. To set up a quota warning alert enter a percentage value in **Quota warning alert at, %**. When consumed space reaches the defined percentage it sends the alert. To change the setting from the parent dataset warning level, clear the **Inherit** checkbox and then change the value.

To set up the quota critical level alerts, enter the percentage value in **Quota critical alert at, %**. Clear the **Inherit** checkbox to change this value to something other than using the parent alert setting.

If setting quotas or changing the alert percentages for both the parent dataset and all child datasets, use the fields under **This Dataset and Child Datasets**.

Ener a value in **Reserved space for this dataset** to set aside additional space for datasets that contain logs which could eventually take up all the available free space. Enter **0** for unlimited. 

For more information on quotas, see [Managing User or Group Quotas]({{< relref "/SCALETutorials/Storage/Pools/ManageQuotas.md" >}}).

### Changing Dataset Inherited Values

By default, many of dataset options inherit their values from the parent dataset. When the **Inherit** checkbox is selected, whatever setting has this checkbox selected uses the setting of the parent dataset. For example, the encryption settings which are explained in detail in the [Storage Encryption]({{< relref "/SCALETutorials/Storage/Pools/EncryptionScale.md" >}}) article.

To change any setting that can inherit the parent setting, clear the checkmark, and then you can enter the desired setting values for the child dataset you are configuring.

### Setting Datasets Access Controls

There are two **Add Dataset** or **Edit Dataset** screen ACL settings in the **Advanced Options** settings that you need to configure to use ACLs, **ACL Type** and **ACL Mode**.

You must select **NFSv4** in **ACL Type** before you can change the **ACL Mode** setting. The system changes the **ACL Mode** setting if you select **POSIX** in **ACL Type**.

Leave the **ACL Type Inherit** checkbox selected to preserve the ACL type from the parent dataset. For SCALE, which is based on Linux, use either **NFSv4** or **POSIX**. 
Warning dialogs display after selecting either setting. 
NFSv4 is richer than POSIX and is used to losslessly migrate Windows-style ACLs across Active Directory domains (or stand-alone servers). 
POSIX ACLs are a Linux-specific ZFS feature, used when an organization data backup target does not support native NFSv4 ACLs. 
Since the Linux platform used POSIX for a long time, many backup products that access the server outside the SMB protocol cannot understand or preserve native NFSv4 ACLs. 

{{< hint warning >}}
All datasets within an SMB share path must have identical ACL types
{{< /hint >}} 

The **ACL Mode** setting determines how [chmod](https://linux.die.net/man/1/chmod) behaves when adjusting file ACLs. See the [zfs(8)](https://linux.die.net/man/8/zfs) `aclmode` property. 
When **ACL Type** is set to **NFSv4** you can select **Passthrough** to only update ACL entries related to the file or directory mode or **Restricted** which does not allow chmod to make changes to files or directories with a non-trivial ACL. 
An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. 
When set to **Restricted** it optimizes a dataset for SMB sharing, but it can also require further optimizations. For example, configuring an [rsync task]({{< relref "SCALE/SCALEUIReference/DataProtection/RsyncTasksSCALE.md" >}}) with this dataset could require adding `--no-perms` in the task **Auxiliary Parameters** field.

For a more in-depth explanation of ACLs and configurations in TrueNAS SCALE, see our [ACL Primer]({{< relref "/content/References/ACLPrimer.md" >}}). 

For more information on ACL settings see [Setting Up Permissions]({{< relref "/SCALETutorials/Storage/Pools/PermissionsSCALE.md" >}}).

### Creating a Dataset for a Fusion Pool

Use the **Metadata (Special) Small Block Size** setting to set a threshold block size for including small file blocks into the [special allocation class (fusion pools)]({{< relref "SCALE/SCALETutorials/Storage/Pools/FusionPoolsScale.md" >}}). Blocks smaller than or equal to this value are assigned to the special allocation class while greater blocks are assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. The default size **0** means no small file blocks are allocated in the special class. Before setting this property, you must add a [special class vdev]({{< relref "SCALE/SCALETutorials/Storage/Pools/FusionPoolsScale.md" >}}) to the pool. 

## Managing Datasets

After creating a dataset, users can manage additional options by going to **Storage** and clicking the dataset <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; icon to display the **Dataset Actions** list. Each option is described in detail in the [Storage Screens]({{< relref "/SCALEUIReference/Storage/StorageScreens.md" >}}) article.

### Editing a Dataset
Select **Edit Options** to change the dataset configuration settings. You can change all settings except **Name**, **Case Sensitivity**, or **Share Type**.

The **Edit Dataset** screen settings are identical to the **Add Dataset** screen.

### Editing Dataset Permissions
Select **View Permissions** on the **Dataset Actions** list of options to open the **Dataset Permissions** widget. 
Click <span class="material-icons">mode_edit</span> to display the **Edit Permissions** screen with the **Unix Permissions Editor** you use to configure ACLs. 
For more information, see the [permissions]({{< relref "SCALE/SCALETutorials/Storage/Pools/PermissionsSCALE.md" >}}) article.

### Deleting a Dataset
Select **Delete Dataset** to remove the dataset, all stored data, and any snapshots from TrueNAS.
{{< hint danger >}}
Deleting datasets can result in unrecoverable data loss!
Move or obsolete any critical data off the dataset before performing the delete operation.
{{< /hint >}}

{{< taglist tag="scaledatasets" limit="10" >}}