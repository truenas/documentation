---
title: "Datasets"
weight: 17
---

{{< toc >}}

A TrueNAS dataset is a file system you create within a data storage pool.
Datasets can contain files, directories (child datasets), and have individual permissions or flags.
You can [encrypt]({{< relref "StorageEncryption.md" >}}) datasets using either the pool encryption created with the pool or with a separate dataset-level encryption configuration.

We recommend you organize your pool with datasets before configuring [data sharing]({{< relref "/CORE/Sharing/_index.md" >}}), as this allows for more fine-tuning of access permissions and using different sharing protocols.

## Creating a Dataset

To create a dataset in the desired pool, go to **Storage > Pools**.

![StoragePools](/images/CORE/12.0/StoragePools.png "Pools list with one example")

Find the pool and top-level (root) dataset for that pool, then click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and **Add Dataset**.

![StoragePoolsAddDataset](/images/CORE/12.0/StoragePoolsAddDataset.png "Add Dataset")

To create a dataset with the default options, enter a name for the dataset and click **SUBMIT**.

If using a specific data sharing option, select the **Share Type** you need as you cannot change the share type after you click **SUBMIT**. 

### Dataset Options

![StoragePoolsAddDatasetOptions](/images/CORE/12.0/StoragePoolsAddDatasetOptions.png "Dataset Creation: Basic Options")

You must configure the **Name and Options** fields to create the dataset.
Datasets typically inherit most settings from the root or parent dataset, but you must enter a name before clicking **SUBMIT**.

| Setting | Value | Description |
|---------|-------|-------------|
| Name | string | Unique identifier for the dataset that you cannot change after the dataset is created. |
| Comments | string | Notes about the dataset. |
| Sync | drop-down list | **Standard** uses the sync settings that the client software requests. **Always** waits for data writes to complete, and **Disabled** never waits for writes to complete. |
| Compression level | drop-down list | Encode information in less space than the original data occupies. We recommend you choose a compression algorithm that balances disk performance with the amount of saved space:<br> **lz4** is a general recommendation as it maximizes performance and dynamically identifies the best files to compress.<br> **zstd** is the [Zstandard](https://tools.ietf.org/html/rfc8478) compression algorithm that has several options for balancing speed and compression.<br> **gzip** options are similar to zstd and range from **1** for least compression with best performance, through **9** for maximum compression with greatest performance impact.<br> **zle** is a fast algorithm that only eliminates runs of zeroes.<br>**lzjb** is a legacy algorithm that is not recommended for use. |
| Enable Atime | drop-down list | **on** updates the access time for files when they are read. **off** disables creating log traffic when reading files to maximize performance. |

By default, datasets inherit the **Encryption Options** from the root or parent dataset.
To configure the dataset with different encryption settings, unset **Inherit** and select the new **Encryption Options**.
For detailed descriptions of the encryption options, see the [Encryption article]({{< relref "StorageEncryption.md" >}}).

The **Other Options** help tune the dataset for particular data sharing protocols:

| Setting | Value | Description |
|---------|-------|-------------|
| ZFS Deduplication | drop-down list | Transparently reuse a single copy of duplicated data to save space. Deduplication can improve storage capacity, but is RAM intensive. Compressing data is a general recommendation before using deduplication. Deduplicating data is a one-way process. *Deduplicated data cannot be un-deduplicated!* |
| Case Sensitivity | drop-down list | **Sensitive** assumes filenames are case sensitive. **Insensitive** assumes filenames are not case sensitive. **Mixed** understands both types of filenames. You cannot change this setting after the dataset is created. |
| Share Type | drop-down list | Define the type of data sharing the dataset uses to optimize the dataset for that sharing protocol. You cannot change this setting after the dataset is created. If creating an AFP share use **Generic**. For SMB shares select **SMB**|

### Advanced Dataset Options

{{< expand "Advanced Options" "v" >}}

Clicking **ADVANCED OPTIONS** adds dataset quota management tools and a few additional fields to the **Other Options**:

![StoragePoolsAddDatasetOptions](/images/CORE/12.0/StoragePoolsAddDatasetOptions.png "Dataset Creation: Basic Options")

Setting a quota defines the maximum allowed space for the dataset.
You can also reserve a defined amount of pool space for the dataset to help prevent situations where automatically generated data like system logs consume all space on the dataset.
You can configure quotas for either the new dataset or to include all child datasets in the quota.

| Setting | Value | Description |
|---------|-------|-------------|
| Quota for this datset | integer | Define the maximum allowed space for the dataset. **0** disables quotas. |
| Quota warning alert at, % | integer | Generate a warning level [alert]({{< relref "Alert.md" >}}) when consumed space reaches the defined percentage. By default, the dataset inherits this value from the parent dataset. Unset **Inherit** to change the value. |
| Quota critical alert at, % | integer | Generate a critical level [alert]({{< relref "Alert.md" >}}) when consumed space reaches the defined percentage. By default, the dataset inherits this value from the parent dataset. Unset **Inherit** to change the value. |
| Reserved space for this dataset | integer | Reserve additional space for datasets that contain logs which could eventually take up all the available free space. **0** is unlimited. |

More fields are added to the **Other Options** setting.
By default, many of these options inherit their values from the parent dataset.

| Setting | Value | Description |
|---------|-------|-------------|
| Read-only | drop-down list | **On** prevents modifying the dataset. **Off** allows users accessing the dataset to modify its contents. |
| Exec | drop down | **On** allows processes to execute from within this dataset. **Off** prevents processes from executing in the dataset. The recommended setting is **On**. |
| Snapshot directory | drop-down list | Controls visibility of the *.zfs* directory on the dataset. Choose between **Visible** or **Invisible**. |
| Copies | drop-down list | Duplicates ZFS user data stored on this dataset. Choose between **1**, **2**, or **3** redundant data copies. This can improve data protection and retention, but is not a substitute for storage pools with disk redundancy. |
| Record Size | drop-down list | Logical block size in the dataset. Matching the fixed size of data, as in a database, could result in better performance. |
| ACL Mode | drop-down list | Determine how [chmod](https://www.freebsd.org/cgi/man.cgi?query=chmod) behaves when adjusting file ACLs. See the [zfs](https://www.freebsd.org/cgi/man.cgi?query=zfs) `aclmode` property.<br>**Passthrough** only updates ACL entries that are related to the file or directory mode.<br>**Restricted** does not allow chmod to make changes to files or directories with a non-trivial ACL. An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. Setting the ACL Mode to **Restricted** is typical to optimize a dataset for SMB sharing, but can require further optimizations. For example, configuring an [rsync task]({{< relref "Rsync.md" >}}) with this dataset could require adding `--no-perms` in the task **Auxiliary Parameters** field. |
| Metadata (Special) Small Block Size | integer | Threshold block size for including small file blocks into the [special allocation class (fusion pools)]({{< relref "FusionPool.md" >}}). Blocks smaller than or equal to this value are assigned to the special allocation class while greater blocks are assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. The default size **0** means no small file blocks are allocated in the special class. Before setting this property, you must add a [special class vdev]({{< relref "FusionPool.md" >}}) to the pool. |

{{< /expand >}}

## Managing Datasets

After creating a dataset additional management options are available by going to **Storage > Pools** and clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a dataset:

* **Add Dataset**: create a new dataset that is a child of this dataset.
  You can continue layering datasets in this manner.
* **Add Zvol**: create a new [ZFS block device]({{< relref "Zvols.md" >}}) as a child of this dataset.
* **Edit Options**: opens the [dataset options](#dataset-options) to make adjustments to the dataset configuration.
  You cannot change the dataset **Name**, **Case Sensitivity**, and **Share Type** after you click **SUBMIT**.
* **Edit Permissions**: opens the editor to set access permissions for this dataset.
  Depending on the dataset creation options, this can be a simple permissions editor or the full ACL editor. For more information about editing permissions, read the [permissions]({{< relref "Permissions.md" >}}) article. This option is not available for the root dataset.
* **User Quotas**: shows options to set data or object quotas for user accounts cached on the system or user accounts connected to this system.
* **Group Quotas**: shows options to set data or object quotas for user groups cached on the system or user groups connected to this system. 
* **Delete Dataset**: removes the dataset, all stored data, and any snapshots of the dataset from TrueNAS.
  {{< hint danger >}}
  Deleting datasets can result in unrecoverable data loss!
  Be sure you move any critical data off the dataset or that it is obsolete before deleting a dataset.
  {{< /hint >}}
* **Create Snapshot**: take a single [ZFS snapshot]({{< relref "Snapshots.md" >}}) of the dataset to provide additional data protection and mobility.
  Created snapshots are listed in **Storage > Snapshots**.

### Quotas

TrueNAS allows setting data or object quotas for user accounts and groups cached on or connected to the system.

{{< tabs "Quota Types" >}}
{{< tab "User" >}}
To view and edit user quotas, go to **Storage > Pools** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; to open the **Dataset Actions** menu and then click **User Quotas**.

![StoragePoolsDatasetActionsUserQuotas](/images/CORE/12.0/StoragePoolsDatasetActionsUserQuotas.png "User Quotas List")

The **User Quotas** page displays the names and quota data of any user accounts cached on or connected to the system.

To edit individual user quotas, go to the user row and click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and then click <i class="material-icons" aria-hidden="true" title="edit">edit</i>.

![StoragePoolsDatasetActionsUserQuotasUserEdit](/images/CORE/12.0/StoragePoolsDatasetActionsUserQuotasUserEdit.png "User Quotas: Editing a Single User")

Use the **Edit User** window to edit the **User Data Quota**, which is the amount of disk space that each selected users can use, and the **User Object Quota**, which is the number of objects that each selected user can own.

To edit user quotas in bulk, click **Actions** and hen select **Set Quotas (Bulk)**.

![StoragePoolsDatasetActionsUserQuotasBulkEdit](/images/CORE/12.0/StoragePoolsDatasetActionsUserQuotasBulkEdit.png "User Quotas: Bulk Edits")

Use the **Set Quotas** window to edit user data and object quotas after selecting any cached or connected users.
{{< /tab >}}
{{< tab "Group" >}}
Go to **Storage > Pools** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; to open the **Dataset Actions** menu.
Click **Group Quotas**.

![StoragePoolsDatasetActionsGroupQuotas](/images/CORE/12.0/StoragePoolsDatasetActionsGroupQuotas.png "Group Quotas List")

The **Group Quotas** page displays the names and quota data of any groups cached on or connected to the system.

To edit individual group quotas, go to the group's row and click the **>** and then click <i class="material-icons" aria-hidden="true" title="edit">edit</i>.

![StoragePoolsDatasetActionsGroupQuotasEditGroup](/images/CORE/12.0/StoragePoolsDatasetActionsGroupQuotasEditGroup.png "Group Quotas: Edit single group")

Use the **Edit Group** window to edit the **Group Data Quota** and **Group Object Quota**.

To edit group quotas in bulk, click **Actions** and select **Set Quotas (Bulk)**.

![StoragePoolsDatasetActionsGroupQuotasBulkEdit](/images/CORE/12.0/StoragePoolsDatasetActionsGroupQuotasBulkEdit.png "Group Quotas: Bulk Edit")

The same options for single groups display, along with choosing groups for these new quota rules.
{{< /tab >}}
{{< /tabs >}}







