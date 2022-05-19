---
title: "Creating Datasets"
weight: 17
Aliases: /core/storage/pools/datasets/
---

{{< toc >}}

A TrueNAS dataset is a file system that is created within a data storage pool.
Datasets can contain files, directories (child datasets), and have individual permissions or flags.
Datasets can also be [encrypted]({{< relref "/CORE/CORETutorials/Storage/Pools/StorageEncryption.md" >}}), either using the encryption created with the pool or with a separate encryption configuration.

It is recommended to organize your pool with datasets before configuring [data sharing]({{< relref "/CORE/UIReference/Sharing/_index.md" >}}), as this allows for more fine-tuning of access permissions and using different sharing protocols.

## Creating a Dataset

To create a dataset in the desired pool, go to **Storage > Pools**.

![StoragePools](/images/CORE/12.0/StoragePools.png "Pools list with one example")

Find the pool and top-level (root) dataset for that pool, then click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and **Add Dataset**.

![StoragePoolsAddDataset](/images/CORE/12.0/StoragePoolsAddDataset.png "Add Dataset")

To quickly create a dataset with the default options, enter a name for the dataset and click **SUBMIT**.

### Dataset Options

![StoragePoolsAddDatasetOptions](/images/CORE/12.0/StoragePoolsAddDatasetOptions.png "Dataset Creation: Basic Options")

The **Name and Options** fields is required to create the dataset.
Datasets typically inherit most of these settings from the root or parent dataset, only a dataset name is required before clicking **SUBMIT**.


See [Dataset Screens]({{< relref "/CORE/UIReference/Storage/Pools/DatasetsScreen.md" >}}) for more information on basic and advanced settings.

By default, datasets inherit the **Encryption Options** from the root or parent dataset.
To configure the dataset with different encryption settings, clear the checkmark from **Inherit** and choose the new in **Encryption Options**.
For detailed descriptions of the encryption options, see the [Encryption article]({{< relref "/CORE/CORETutorials/Storage/Pools/StorageEncryption.md" >}}).

Clicking **ADVANCED OPTIONS** adds dataset quota management tools and a few additional fields to the **Other Options**:

## Managing Datasets

After a dataset is created, additional management options are available by going to **Storage > Pools** and clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a dataset:

* **Add Dataset**: create a new dataset that is a child of this dataset.
  Datasets can be continuously layered in this manner.
* **Add Zvol**: create a new [ZFS block device]({{< relref "/CORE/CORETutorials/Storage/Pools/Zvols.md" >}}) as a child of this dataset.
* **Edit Options**: opens the [dataset options](#dataset-options) to make adjustments to the dataset configuration.
  The dataset **Name**, **Case Sensitivity**, and **Share Type** cannot be changed.
* **Edit Permissions**: opens the editor to set access permissions for this dataset.
  Depending on the dataset creation options, this can be a simple permissions editor or the full ACL editor. For more information about editing permissions, read the [permissions]({{< relref "/CORE/CORETutorials/Storage/Pools/Permissions.md" >}}) article.
* **User Quotas**: shows options to set data or object quotas for user accounts cached on the system or user accounts that are connected to this system.
* **Group Quotas**: shows options to set data or object quotas for user groups cached on the system or user groups that are connected to this system. 
* **Delete Dataset**: removes the dataset, all stored data, and any snapshots of the dataset from TrueNAS.
  {{< hint danger >}}
  Deleting datasets can result in unrecoverable data loss!
  Be sure that any critical data is moved off the dataset or is otherwise obsolete.
  {{< /hint >}}
* **Create Snapshot**: take a single [ZFS snapshot]({{< relref "/CORE/CORETutorials/Storage/Snapshots.md" >}}) of the dataset to provide additional data protection and mobility.
  Created snapshots are listed in **Storage > Snapshots**.

### Quotas

TrueNAS allows setting data or object quotas for user accounts and groups cached on or connected to the system.

Setting a quota defines the maximum allowed space for the dataset.
You can also reserve a defined amount of pool space for the dataset to help prevent situations where automatically generated data like system logs consume all space on the dataset.
Quotas can be configured for either the new dataset or to include all child datasets in the quota.

[Dataset Screens]({{< relref "/CORE/UIReference/Storage/Pools/DatasetsScreen.md" >}}) for more information on quota settings.

{{< expand "Quota Types" >}}
{{< expand "User" >}}
To view and edit user quotas, go to **Storage > Pools** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; to open the **Dataset Actions** menu, and then click **User Quotas**.

![StoragePoolsDatasetActionsUserQuotas](/images/CORE/12.0/StoragePoolsDatasetActionsUserQuotas.png "User Quotas List")

The **User Quotas** page displays the names and quota data of any user accounts cached on or connected to the system.

To edit individual user quotas, go to the user row and click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; button, then click <i class="material-icons" aria-hidden="true" title="edit">edit</i>.

![StoragePoolsDatasetActionsUserQuotasUserEdit](/images/CORE/12.0/StoragePoolsDatasetActionsUserQuotasUserEdit.png "User Quotas: Editing a Single User")

The **Edit User** window allows editing the **User Data Quota**, which is the amount of disk space that can be used by the selected users, and the **User Object Quota**, which is the number of objects that can be owned by each of the selected users.

To edit user quotas in bulk, click **Actions** and select **Set Quotas (Bulk)**.

![StoragePoolsDatasetActionsUserQuotasBulkEdit](/images/CORE/12.0/StoragePoolsDatasetActionsUserQuotasBulkEdit.png "User Quotas: Bulk Edits")

The **Set Quotas** window allows editing user data and object quotas after selecting any cached or connected users.
{{< /expand >}}
{{< expand "Group" >}}
Go to **Storage > Pools** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; to open the **Dataset Actions** menu.
Click **Group Quotas**.

![StoragePoolsDatasetActionsGroupQuotas](/images/CORE/12.0/StoragePoolsDatasetActionsGroupQuotas.png "Group Quotas List")

The **Group Quotas** page displays the names and quota data of any groups cached on or connected to the system.

To edit individual group quotas, go to the group row and click the **>** button, then click <i class="material-icons" aria-hidden="true" title="edit">edit</i>.

![StoragePoolsDatasetActionsGroupQuotasEditGroup](/images/CORE/12.0/StoragePoolsDatasetActionsGroupQuotasEditGroup.png "Group Quotas: Edit single group")

The **Edit Group** window allows editing the **Group Data Quota** and **Group Object Quota**.

To edit group quotas in bulk, click **Actions** and select **Set Quotas (Bulk)**.

![StoragePoolsDatasetActionsGroupQuotasBulkEdit](/images/CORE/12.0/StoragePoolsDatasetActionsGroupQuotasBulkEdit.png "Group Quotas: Bulk Edit")

The same options for single groups are presented, along with choosing groups for these new quota rules.
{{< /expand >}}
{{< /expand >}}

## Additional Information

[Pools Screens]({{< relref "/CORE/UIReference/Storage/Pools/PoolsScreens.md" >}})

[Creating Pools]({{< relref "/CORE/CORETutorials/Storage/Pools/PoolCreate.md" >}})

[Managing Pools]({{< relref "/CORE/CORETutorials/Storage/Pools/ManagingPools.md" >}})

[Importing Pools]({{< relref "/CORE/CORETutorials/Storage/Pools/PoolImport.md" >}})

[Setting Up Permissions]({{< relref "/CORE/CORETutorials/Storage/Pools/Permissions.md" >}}) 
