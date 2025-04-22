---
title: "Creating Datasets"
description: "Describes how to create and configure a dataset on TrueNAS CORE."
weight: 17
tags:
- coredataset
---

{{< toc >}}

A TrueNAS dataset is a file system that is created within a data storage pool.
Datasets can contain files, directories (child datasets), and have individual permissions or flags.
Datasets can also be [encrypted]({{< ref "/CORETutorials/Storage/Pools/StorageEncryption" >}}), either using the encryption created with the pool or with a separate encryption configuration.

It is recommended to organize your pool with datasets before configuring [data sharing]({{< ref "/UIReference/Sharing/" >}}), as this allows for more fine-tuning of access permissions and using different sharing protocols.

## Creating a Dataset

To create a dataset in the desired pool, go to **Storage > Pools**.

{{< trueimage src="/images/CORE/12.0/StoragePools.png" alt="Pools list with one example" id="Pools list with one example" >}}

Find the pool and top-level (root) dataset for that pool, then click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and **Add Dataset**.

{{< trueimage src="/images/CORE/12.0/StoragePoolsAddDataset.png" alt="Add Dataset" id="Add Dataset" >}}

To quickly create a dataset with the default options, enter a name for the dataset and click **SUBMIT**.

### Dataset Options

{{< trueimage src="/images/CORE/12.0/StoragePoolsAddDatasetOptions.png" alt="Dataset Creation: Basic Option" id="Basic Option" >}}

The **Name and Options** fields is required to create the dataset.
Datasets typically inherit most of these settings from the root or parent dataset, only a dataset name is required before clicking **SUBMIT**.


See [Dataset Screens]({{< ref "/UIReference/Storage/Pools/DatasetsScreen" >}}) for more information on basic and advanced settings.

By default, datasets inherit the **Encryption Options** from the root or parent dataset.
To configure the dataset with different encryption settings, clear the checkmark from **Inherit** and choose the new in **Encryption Options**.
For detailed descriptions of the encryption options, see the [Encryption article]({{< ref "/CORETutorials/Storage/Pools/StorageEncryption" >}}).

Clicking **ADVANCED OPTIONS** adds dataset quota management tools and a few additional fields to the **Other Options**:

## Managing Datasets

After a dataset is created, additional management options are available by going to **Storage > Pools** and clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a dataset:

* **Add Dataset**: create a new dataset that is a child of this dataset.
  Datasets can be continuously layered in this manner.
* **Add Zvol**: create a new [ZFS block device]({{< ref "/CORETutorials/Storage/Pools/Zvols" >}}) as a child of this dataset.
* **Edit Options**: opens the [dataset options](#dataset-options) to make adjustments to the dataset configuration.
  The dataset **Name**, **Case Sensitivity**, and **Share Type** cannot be changed.
* **Edit Permissions**: opens the editor to set access permissions for this dataset.
  Depending on the dataset creation options, this can be a simple permissions editor or the full ACL editor. For more information about editing permissions, read the [permissions]({{< ref "/CORETutorials/Storage/Pools/Permissions" >}}) article.
* **User Quotas**: shows options to set data or object quotas for user accounts cached on the system or user accounts that are connected to this system.
* **Group Quotas**: shows options to set data or object quotas for user groups cached on the system or user groups that are connected to this system. 
* **Delete Dataset**: removes the dataset, all stored data, and any snapshots of the dataset from TrueNAS.
  {{< hint type=warning >}}
  Deleting datasets can result in unrecoverable data loss!
  Be sure that any critical data is moved off the dataset or is otherwise obsolete.
  {{< /hint >}}
* **Create Snapshot**: take a single [ZFS snapshot]({{< ref "/CORETutorials/Storage/Snapshots" >}}) of the dataset to provide additional data protection and mobility.
  Created snapshots are listed in **Storage > Snapshots**.

## Quotas

TrueNAS allows setting data or object quotas for user accounts and groups cached on or connected to the system.

Setting a quota defines the maximum allowed space for the dataset.
You can also reserve a defined amount of pool space for the dataset to help prevent situations where automatically generated data like system logs consume all space on the dataset.
Quotas can be configured for either the new dataset or to include all child datasets in the quota.

[Dataset Screens]({{< ref "/UIReference/Storage/Pools/DatasetsScreen" >}}) for more information on quota settings.

### Quota Types

#### User Qutoas
To view and edit user quotas, go to **Storage > Pools** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; to open the **Dataset Actions** menu, and then click **User Quotas**.

{{< trueimage src="/images/CORE/12.0/StoragePoolsDatasetActionsUserQuotas.png" alt="User Quotas List" id="User Quotas List" >}}

The **User Quotas** page displays the names and quota data of any user accounts cached on or connected to the system.

To edit individual user quotas, go to the user row and click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; button, then click <i class="material-icons" aria-hidden="true" title="edit">edit</i>.

{{< trueimage src="/images/CORE/12.0/StoragePoolsDatasetActionsUserQuotasUserEdit.png" alt="User Quotas: Editing a Single User" id="Editing a Single User" >}}

The **Edit User** window allows editing the **User Data Quota**, which is the amount of disk space that can be used by the selected users, and the **User Object Quota**, which is the number of objects that can be owned by each of the selected users.

To edit user quotas in bulk, click **Actions** and select **Set Quotas (Bulk)**.

{{< trueimage src="/images/CORE/12.0/StoragePoolsDatasetActionsUserQuotasBulkEdit.png" alt="User Quotas: Bulk Edits" id="Bulk Edits" >}}

The **Set Quotas** window allows editing user data and object quotas after selecting any cached or connected users.

#### Group Quotas

Go to **Storage > Pools** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; to open the **Dataset Actions** menu.
Click **Group Quotas**.

{{< trueimage src="/images/CORE/12.0/StoragePoolsDatasetActionsGroupQuotas.png" alt="Group Quotas List" id="Group Quotas List" >}}

The **Group Quotas** page displays the names and quota data of any groups cached on or connected to the system.

To edit individual group quotas, go to the group row and click the **>** button, then click <i class="material-icons" aria-hidden="true" title="edit">edit</i>.

{{< trueimage src="/images/CORE/12.0/StoragePoolsDatasetActionsGroupQuotasEditGroup.png" alt="Group Quotas: Edit single group" id="Edit single group" >}}

The **Edit Group** window allows editing the **Group Data Quota** and **Group Object Quota**.

To edit group quotas in bulk, click **Actions** and select **Set Quotas (Bulk)**.

{{< trueimage src="/images/CORE/12.0/StoragePoolsDatasetActionsGroupQuotasBulkEdit.png" alt="Group Quotas: Bulk Edit" id="Bulk Edit" >}}

The same options for single groups are presented, along with choosing groups for these new quota rules.

{{< taglist tag="coredataset" limit="10" >}}
{{< taglist tag="corepool" limit="10" title="Related Storage Pool Articles" >}}
