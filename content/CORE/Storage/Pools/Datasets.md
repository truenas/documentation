---
title: "Datasets"
weight: 17
---

{{< toc >}}

A TrueNAS dataset is a file system that is created within a data storage pool.
Datasets can contain files, directories (child datasets), and have individual permissions or flags.
Datasets can also be [encrypted]({{< relref "StorageEncryption.md" >}}), either using the encryption created with the pool or with a separate encryption configuration.

It is recommended to organize your pool with datasets before configuring [data sharing]({{< relref "/CORE/Sharing/_index.md" >}}), as this allows for more fine-tuning of access permissions and using different sharing protocols.

## Creating a Dataset

To create a dataset in the desired pool, go to **Storage > Pools**.

![StoragePools](/images/CORE/12.0/StoragePools.png "Pools list with one example")

Find the pool and top-level (root) dataset for that pool, then click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and *Add Dataset*.

![StoragePoolsAddDataset](/images/CORE/12.0/StoragePoolsAddDataset.png "Add Dataset")

To quickly create a dataset with the default options, enter a name for the dataset and click *SUBMIT*.

### Dataset Options

![StoragePoolsAddDatasetOptions](/images/CORE/12.0/StoragePoolsAddDatasetOptions.png "Dataset Creation: Basic Options")

The **Name and Options** fields must be configured to create the dataset.
Datasets typically *Inherit* most of these settings from the root or parent dataset, only a dataset *Name* must be entered before clicking *SUBMIT*.

| Setting | Value | Description |
|---------|-------|-------------|
| Name | string | Unique identifier for the dataset. Cannot be changed after the dataset is created. |
| Comments | string | Notes about the dataset. |
| Sync | drop down | *Standard* uses the sync settings that have been requested by the client software. *Always* waits for data writes to complete, and *Disabled* never waits for writes to complete. |
| Compression level | drop down | Encode information in less space than the original data occupies. It is recommended to choose a compression algorithm that balances disk performance with the amount of saved space:<br> *lz4* is generally recommended as it maximizes performance and dynamically identifies the best files to compress.<br> *zstd* is the [Zstandard](https://tools.ietf.org/html/rfc8478) compression algorithm that has several options for balancing speed and compression.<br> Similarly, *gzip* options range from *1* for least compression, best performance, through *9* for maximum compression with greatest performance impact.<br> *zle* is a fast algorithm that only eliminates runs of zeroes.<br>*lzjb* is a legacy algorithm that is not recommended for use. |
| Enable Atime | drop down | *on* updates the access time for files when they are read. *off* disables creating log traffic when reading files to maximize performance. |

By default, datasets *Inherit* the **Encryption Options** from the root or parent dataset.
To configure the dataset with different encryption settings, unset *Inherit* and choose the new *Encryption Options*.
For detailed descriptions of the encryption options, see the [Encryption article]({{< relref "StorageEncryption.md" >}}).

The **Other Options** help tune the dataset for particular data sharing protocols:

| Setting | Value | Description |
|---------|-------|-------------|
| ZFS Deduplication | drop down | Transparently reuse a single copy of duplicated data to save space. Deduplication can improve storage capacity, but is RAM intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. **Deduplicated data cannot be undeduplicated!** |
| Case Sensitivity | drop down | *Sensitive* assumes filenames are case sensitive. *Insensitive* assumes filenames are not case sensitive. *Mixed* understands both types of filenames. Cannot be changed after the dataset is created. |
| Share Type | drop down | Define the type of data sharing the dataset will use to optimize the dataset for that sharing protocol. Cannot be changed after the dataset is created. |

{{< expand "Advanced Options" "v" >}}

Clicking *ADVANCED OPTIONS* adds dataset quota management tools and a few additional fields to the *Other Options*:

![StoragePoolsAddDatasetOptions](/images/CORE/12.0/StoragePoolsAddDatasetOptions.png "Dataset Creation: Basic Options")

Setting a quota defines the maximum allowed space for the dataset.
You can also reserve a defined amount of pool space for the dataset to help prevent situations where automatically generated data like system logs consume all space on the dataset.
Quotas can be configured for either the new dataset or to include all child datasets in the quota.

| Setting | Value | Description |
|---------|-------|-------------|
| Quota for this datset | integer | Define the maximum allowed space for the dataset. *0* disables quotas. |
| Quota warning alert at, % | integer | Generate a warning level [alert]({{< relref "Alert.md" >}}) when consumed space reaches the defined percentage. By default, the dataset will **Inherit** this value from the parent dataset. Unset **Inherit** to change the value. |
| Quota critical alert at, % | integer | Generate a critical level [alert]({{< relref "Alert.md" >}}) when consumed space reaches the defined percentage. By default, the dataset will **Inherit** this value from the parent dataset. Unset **Inherit** to change the value. |
| Reserved space for this dataset | integer | Reserve additional space for datasets that contain logs which could eventually take up all the available free space. *0* is unlimited. |

More fields are added to the **Other Options**.
By default, many of these options *Inherit* their values from the parent dataset.

| Setting | Value | Description |
|---------|-------|-------------|
| Read-only | drop down | *On* prevents the dataset being modified. *Off* allows users accessing the dataset to modify its contents. |
| Exec | drop down | *On* allows processes to be executed from within this dataset. *Off* prevents processes from executing in the dataset. It is recommended to set to *On*. |
| Snapshot directory | drop down | Controls visibility of the *.zfs* directory on the dataset. Choose between *Visible* or *Invisible*. |
| Copies | drop down | Duplicates ZFS user data stored on this dataset. Choose between *1*, *2*, or *3* redundant data copies. This can improve data protection and retention, but is not a substitute for storage pools with disk redundancy. |
| Record Size | drop down | Logical block size in the dataset. Matching the fixed size of data, as in a database, could result in better performance. |
| ACL Mode | drop down | Determine how [chmod](https://www.freebsd.org/cgi/man.cgi?query=chmod) behaves when adjusting file ACLs. See the [zfs](https://www.freebsd.org/cgi/man.cgi?query=zfs) `aclmode` property.<br>*Passthrough* only updates ACL entries that are related to the file or directory mode.<br>*Restricted* does not allow chmod to make changes to files or directories with a non-trivial ACL. An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. Setting the ACL Mode to *Restricted* is typically used to optimize a dataset for SMB sharing, but can require further optimizations. For example, configuring an [rsync task]({{< relref "Rsync.md" >}}) with this dataset could require adding `--no-perms` in the task **Auxiliary Parameters** field. |
| Metadata (Special) Small Block Size | integer   | Threshold block size for including small file blocks into the [special allocation class (fusion pools)]({{< relref "FusionPool.md" >}}). Blocks smaller than or equal to this value will be assigned to the special allocation class while greater blocks will be assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. The default size *0* means no small file blocks will be allocated in the special class. Before setting this property, a [special class vdev]({{< relref "FusionPool.md" >}}) must be added to the pool. |

{{< /expand >}}

## Managing Datasets

After a dataset is created, additional management options are available by going to **Storage > Pools** and clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a dataset:

* **Add Dataset**: create a new dataset that is a "child" of this dataset.
  Datasets can be continuously layered in this manner.
* **Add Zvol**: create a new [ZFS block device]({{< relref "Zvols.md" >}}) as a "child" of this dataset.
* **Edit Options**: opens the [dataset options](#dataset-options) to make adjustments to the dataset configuration.
  The dataset *Name*, *Case Sensitivity*, and *Share Type* cannot be changed.
* **Edit Permissions**: opens the editor to set access permissions for this dataset.
  Depending on the dataset creation options, this can be a simple permissions editor or the full ACL editor. For more information about editing permissions, read the [permissions]({{< relref "Permissions.md" >}}) article.
* **User Quotas**: shows options to set data or object quotas for user accounts cached on the system or user accounts that are connected to this system.
* **Group Quotas**: shows options to set data or object quotas for user groups cached on the system or user groups that are connected to this system. 
* **Delete Dataset**: removes the dataset, all stored data, and any snapshots of the dataset from TrueNAS.
  {{< hint danger >}}
  Deleting datasets can result in unrecoverable data loss!
  Be sure that any critical data is moved off the dataset or is otherwise obsolete.
  {{< /hint >}}
* **Create Snapshot**: take a single [ZFS snapshot]({{< relref "Snapshots.md" >}}) of the dataset to provide additional data protection and mobility.
  Created snapshots are listed in **Storage > Snapshots**.

### Quotas

TrueNAS allows setting data or object quotas for user accounts and groups cached on or connected to the system.

{{< tabs "Quota Types" >}}
{{< tab "User" >}}
To view and edit user quotas, go to **Storage > Pools** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; to open the **Dataset Actions** menu.  and then click **User Quotas**.

![StoragePoolsDatasetActionsUserQuotas](/images/CORE/12.0/StoragePoolsDatasetActionsUserQuotas.png "User Quotas List")

The **User Quotas** page displays the names and quota data of any user accounts cached on or connected to the system.

To edit individual user quotas, go to the user's row and click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; button, then click <i class="fa fa-pencil" aria-hidden="true" title="Pencil"></i> *Edit*.

![StoragePoolsDatasetActionsUserQuotasUserEdit](/images/CORE/12.0/StoragePoolsDatasetActionsUserQuotasUserEdit.png "User Quotas: Editing a Single User")

The **Edit User** window allows editing the *User Data Quota*, which is the amount of disk space that can be used by the selected users, and the *User Object Quota*, which is the number of objects that can be owned by each of the selected users.

To edit user quotas in bulk, click **Actions** and select **Set Quotas (Bulk)**.

![StoragePoolsDatasetActionsUserQuotasBulkEdit](/images/CORE/12.0/StoragePoolsDatasetActionsUserQuotasBulkEdit.png "User Quotas: Bulk Edits")

The **Set Quotas** window allows editing user data and object quotas after selecting any cached or connected users.
{{< /tab >}}
{{< tab "Group" >}}
Go to **Storage > Pools** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; to open the **Dataset Actions** menu.
Click *Group Quotas*.

![StoragePoolsDatasetActionsGroupQuotas](/images/CORE/12.0/StoragePoolsDatasetActionsGroupQuotas.png "Group Quotas List")

The **Group Quotas** page displays the names and quota data of any groups cached on or connected to the system.

To edit individual group quotas, go to the group's row and click the **>** button, then click <i class="fa fa-pencil" aria-hidden="true" title="Pencil"></i>&nbsp; *Edit*.

![StoragePoolsDatasetActionsGroupQuotasEditGroup](/images/CORE/12.0/StoragePoolsDatasetActionsGroupQuotasEditGroup.png "Group Quotas: Edit single group")

The **Edit Group** window allows editing the *Group Data Quota* and *Group Object Quota*.

To edit group quotas in bulk, click *Actions* and select *Set Quotas (Bulk)*.

![StoragePoolsDatasetActionsGroupQuotasBulkEdit](/images/CORE/12.0/StoragePoolsDatasetActionsGroupQuotasBulkEdit.png "Group Quotas: Bulk Edit")

The same options for single groups are presented, along with choosing groups for these new quota rules.
{{< /tab >}}
{{< /tabs >}}







