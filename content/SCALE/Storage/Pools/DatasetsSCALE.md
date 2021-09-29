---
title: "Datasets"
geekdocCollapseSection: true
weight: 30
---

{{< toc >}}

A TrueNAS dataset is a file system within a data storage pool.
Datasets can contain files, directories (child datasets), and have individual permissions or flags.
Datasets can also be [encrypted]({{< relref "SCALE/Storage/Pools/EncryptionSCALE.md" >}}), either using the encryption created with the pool or with a separate encryption configuration.

We recommend organizing your pool with datasets before configuring [data sharing]({{< relref "SCALE/Shares/_index.md" >}}), as this allows for more fine-tuning of access permissions and using different sharing protocols.

## Creating a Dataset

To create a dataset in the desired pool, go to **Storage**.

Find the pool and top-level (root) dataset for that pool, then click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and *Add Dataset*.

![DatasetAddSCALE](/images/SCALE/DatasetAddSCALE.png "Add Dataset")

To quickly create a dataset with the default options, enter a name and click *Submit*.

### Dataset Options

![DatasetOptionsSCALE](/images/SCALE/DatasetOptionsSCALE.png "Dataset Creation Options")

You must configure the *Name and Options* fields to create the dataset.
Datasets typically *Inherit* settings from the root or parent dataset, so you only need to enter a dataset *Name* before clicking *Submit*.

{{< tabs "Dataset Options" >}}
{{< tab "Basic Options" >}}

| Setting | Description |
|---------|-------------|
| Name | Unique identifier for the dataset. Cannot be changed after the dataset is created. |
| Comments | Notes about the dataset. |
| Sync | *Standard* uses the sync settings that have been requested by the client software. *Always* waits for data writes to complete, and *Disabled* never waits for writes to complete. |
| Compression level | drop down | Encode information in less space than the original data occupies. It is recommended to choose a compression algorithm that balances disk performance with the amount of saved space:<br> *lz4* is generally recommended as it maximizes performance and dynamically identifies the best files to compress.<br> *zstd* is the [Zstandard](https://tools.ietf.org/html/rfc8478) compression algorithm that has several options for balancing speed and compression.<br> Similarly, *gzip* options range from *1* for least compression, best performance, through *9* for maximum compression with greatest performance impact.<br> *zle* is a fast algorithm that only eliminates runs of zeroes.<br>*lzjb* is a legacy algorithm that is not recommended for use. |
| Enable Atime | drop down | *on* updates the access time for files when they are read. *off* disables creating log traffic when reading files to maximize performance. |

By default, datasets *Inherit* the *Encryption Options* from the root or parent dataset.
To configure the dataset with different encryption settings, unset *Inherit* and choose the new *Encryption Options*.
For detailed descriptions of the encryption options, see the [Encryption article]({{< relref "EncryptionSCALE.md" >}}).

{{< /tab >}}
{{< tab "Other Options" >}}

The *Other Options* help tune the dataset for specific data sharing protocols:

| Setting | Description |
|---------|-------------|
| ZFS Deduplication | Transparently reuse a single copy of duplicated data to save space. Deduplication can improve storage capacity, but is RAM intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. **Deduplicated data cannot be undeduplicated!** |
| Case Sensitivity | *Sensitive* assumes filenames are case sensitive. *Insensitive* assumes filenames are not case sensitive. *Mixed* understands both types of filenames. Cannot be changed after the dataset is created. |
| Share Type | Define the type of data sharing the dataset will use to optimize the dataset for that sharing protocol. Cannot be changed after the dataset is created. |

{{< /tab >}}
{{< tab "Advanced Options" >}}

Clicking *Advanced Options* adds dataset quota management tools and a few additional fields to the *Other Options*:

Setting a quota defines the maximum allowed space for the dataset.
You can also reserve a defined amount of pool space to prevent automatically generated data like system logs from consuming all of the dataset's space.
You can configure quotas for only the new dataset or include all child datasets.

| Setting | Description |
|---------|-------------|
| Quota for this dataset | Define the maximum allowed space for the dataset. *0* disables quotas. |
| Quota warning alert at, % | Generate a warning level [alert]({{< relref "Alert.md" >}}) when consumed space reaches the defined percentage. By default, the dataset will **Inherit** this value from the parent dataset. Unset **Inherit** to change the value. |
| Quota critical alert at, % | Generate a critical level [alert]({{< relref "Alert.md" >}}) when consumed space reaches the defined percentage. By default, the dataset will **Inherit** this value from the parent dataset. Unset **Inherit** to change the value. |
| Reserved space for this dataset | Reserve additional space for datasets that contain logs which could eventually take up all the available free space. *0* is unlimited. |

TrueNAS adds more fields to the *Other Options*.
By default, many of these options *Inherit* their values from the parent dataset.

| Setting | Description |
|---------|-------------|
| Read-only | *On* prevents the dataset being being modified. *Off* allows users accessing the dataset to modify its contents. |
| Exec | *On* allows processes to be executed from within this dataset. *Off* prevents processes from executing in the dataset. We recommend setting it to *On*. |
| Snapshot directory | Controls visibility of the *.zfs* directory on the dataset. Choose between *Visible* or *Invisible*. |
| Copies | Duplicates ZFS user data stored on this dataset. Choose between *1*, *2*, or *3* redundant data copies. This can improve data protection and retention, but is not a substitute for storage pools with disk redundancy. |
| Record Size | Logical block size in the dataset. Matching the fixed size of data, as in a database, could result in better performance. |
| ACL Type | *Inherit* preserves ACL type from the parent dataset.  *Off* is to use neither NFSv4 or POSIX protocols. *NFSv4* should be utilized to losslessly migrate Windows-style ACLs across Active Directory domains (or stand-alone servers) that use ACL models richer than POSIX. Since POSIX ACLs are a Linux-specific ZFS feature, administrators should use NFSv4 to maintain compatibility with TrueNAS Core, FreeBSD, or other non-Linux ZFS implementations. *POSIX* should be used when an organization’s data backup target does not support native NFSv4 ACLs. Since the Linux platform used POSIX for a long time, many backup products that access the server outside the SMB protocol can’t understand or preserve native NFSv4 ACLs. **All datasets within an SMB share path must have identical ACL types**. For a more in-depth explanation of ACLs and configurations in TrueNAS SCALE, see our [ACL Primer]({{< relref "ACLPrimer.md" >}}). |
| ACL Mode | Determine how [chmod](https://www.freebsd.org/cgi/man.cgi?query=chmod) behaves when adjusting file ACLs. See the [zfs](https://www.freebsd.org/cgi/man.cgi?query=zfs) `aclmode` property.<br>*Passthrough* only updates ACL entries that are related to the file or directory mode.<br>*Restricted* does not allow chmod to make changes to files or directories with a non-trivial ACL. An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. Setting the ACL Mode to *Restricted* is typically used to optimize a dataset for SMB sharing, but can require further optimizations. For example, configuring an [rsync task]({{< relref "Rsync.md" >}}) with this dataset could require adding `--no-perms` in the task **Auxiliary Parameters** field. |
| Metadata (Special) Small Block Size | Threshold block size for including small file blocks into the [special allocation class (fusion pools)]({{< relref "FusionPool.md" >}}). Blocks smaller than or equal to this value will be assigned to the special allocation class while greater blocks will be assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. The default size *0* means no small file blocks will be allocated in the special class. Before setting this property, a [special class vdev]({{< relref "FusionPool.md" >}}) must be added to the pool. |

{{< /tab >}}
{{< /tabs >}}

## Managing Datasets

After creating a dataset, users can manage additional options by going to **Storage** and clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; on a dataset:

* *Add Dataset* creates a new "child" dataset in this dataset. You can continuously layer datasets in this manner.
* *Add Zvol* creates a new [ZFS block device]({{< relref "ZvolsSCALE.md" >}}) as a "child" in this dataset.
* *Edit Options* allows users to adjust the dataset configuration. Users cannot change the *Name*, *Case Sensitivity*, or *Share Type*.
* *Edit Permissions* opens the dataset's access permissions editor. Depending on the ACL type users select during dataset creation, the permissions editor will either be a simple permissions editor or the full ACL editor. For more information, see the [permissions]({{< relref "PermissionsSCALE.md" >}}) article.
* *User Quotas* lets users set data or object quotas for user accounts cached on or connected to the system.
* *Group Quotas* lets users set data or object quotas for user groups cached on or connected to the system. 
* *Delete Dataset* removes the dataset, all stored data, and any snapshots from TrueNAS.
  {{< hint danger >}}
  Deleting datasets can result in unrecoverable data loss!
  Be sure to move or obsolete any critical data off the dataset.
  {{< /hint >}}
* *Create Snapshot* takes a single dataset [ZFS snapshot]({{< relref "SnapshotsSCALE.md" >}}) to provide additional data protection and mobility. The system lists created snapshots in the *Snapshots* screen.

### Quotas

TrueNAS allows setting data or object quotas for user accounts and groups cached on or connected to the system.

{{< tabs "Quota Types" >}}
{{< tab "User" >}}
To view and edit user quotas, go to **Storage** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; next to a dataset to open the *Dataset Actions* menu, then select *User Quotas*.

![DatasetUserQuotasSCALE](/images/SCALE/DatasetUserQuotasSCALE.png "User Quotas List")

The *User Quotas* page displays the names and quota data of any user accounts cached on or connected to the system.

To edit individual user quotas, go to the user's row and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp;, then click <i class="material-icons" aria-hidden="true" title="edit">edit</i>.

![DatasetUserQuotasEditSCALE](/images/SCALE/DatasetUserQuotasEditSCALE.png "Editing User Quotas")

The *Edit User* window lets users edit the *User Data Quota* and *User Object Quota*.

*User Data Quota* is the amount of disk space that selected users can use. *User Object Quota* is the number of objects selected users can own.

To edit user quotas in bulk, click *Actions** and select *Set Quotas (Bulk)*.

![DatasetUserQuotasBulkSCALE](/images/SCALE/DatasetUserQuotasBulkSCALE.png "Bulk-Editing User Quotas")

The *Set Quotas* window lets you edit user data and object quotas after selecting any cached or connected users.
{{< /tab >}}
{{< tab "Group" >}}
Go to **Storage** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; next to a dataset to open the *Dataset Actions* menu, then select *Group Quotas*.

![DatasetGroupQuotasSCALE](/images/SCALE/DatasetGroupQuotasSCALE.png "Group Quotas List")

The *Group Quotas* page displays the names and quota data of any groups cached on or connected to the system.

To edit individual group quotas, go to the group's row and click **>**, then click <i class="material-icons" aria-hidden="true" title="edit">edit</i> **Edit**.

![DatasetGroupQuotasEditSCALE](/images/SCALE/DatasetGroupQuotasEditSCALE.png "Editing Group Quotas")

The *Edit Group* window lets users edit the *Group Data Quota* and *Group Object Quota*.

To edit group quotas in bulk, click *Actions* and select *Set Quotas (Bulk)*.

![DatasetGroupQuotasBulkSCALE](/images/SCALE/DatasetGroupQuotasBulkSCALE.png "Bulk-Editing Group Quotas")

TrueNAS presents the same options for single groups and lets users choose groups for the new quota rules.
{{< /tab >}}
{{< /tabs >}}
