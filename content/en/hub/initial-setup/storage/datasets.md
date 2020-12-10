---
title: "ZFS Datasets"
description: "How to create a ZFS dataset."
weight: 2
tags: ["ZFS", "dataset"]
---

{{% pageinfo color="primary" %}}
A ZFS pool is required for creating a ZFS dataset.
See [Creating a new ZFS Pool]({{< ref "pools.md" >}}).
{{% /pageinfo %}}

A ZFS dataset is used in TrueNAS as a file system that is created within a data storage pool.
Datasets can contain files, directories (child datasets), and have individual permissions or flags.
Datasets can also be [encrypted](/hub/initial-setup/storage/encryption/), either using the encryption created with the pool or with a separate encryption configuration.
It is recommended to organize your pool with datasets before configuring [data sharing](/hub/sharing/), as this allows for more fine-tuning of access permissions and using different sharing protocols.

## Creating a Dataset

To create a dataset in the desired pool, go to **Storage > Pools**.

<img src="/images/StoragePoolsList.png">
<br><br>

Find the pool and top-level (root) dataset for that pool, click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and **Add Dataset**.

<img src="/images/StoragePoolsDatasetAdd.png">
<br><br>

To quickly create a dataset with the default options, enter a name for the dataset and click **SUBMIT**.

### Dataset Options

The *Name and Options* group are required to create the dataset.
Datasets typically *Inherit* most of these settings from the root or parent dataset, only a dataset **Name** is required to be entered before clicking **SUBMIT**.

| Setting            | Value          | Description  |
|--------------------|----------------|--------------|
| Name               | string         | Unique identifier for the dataset. Cannot be changed after the dataset is created. |
| Comments           | string         | Notes about the dataset.           |
| Sync               | drop down      | *Standard* uses the sync settings that have been requested by the client software. *Always* waits for data writes to complete, and *Disabled* never waits for writes to complete. |
| Compression level  | drop down      | Encode information in less space than the original data occupies. It is recommended to choose a compression algorithm that balances disk performance with the amount of saved space:<br> *lz4* is generally recommended as it maximizes performance and dynamically identifies the best files to compress.<br> *zstd* is the [Zstandard](https://tools.ietf.org/html/rfc8478) compression algorithm that has several options for balancing speed and compression.<br> Similarly, *gzip* options range from *1* for least compression, best performance, through *9* for maximum compression with greatest performance impact.<br> *zle* is a fast algorithm that only eliminates runs of zeroes.<br>*lzjb* is a legacy algorithm that is not recommended for use. |
| Enable Atime       | drop down      | *on* updates the access time for files when they are read. *off* disables creating log traffic when reading files to maximize performance. |

By default, datasets **Inherit** the *Encryption Options* from the root or parent dataset.
To configure the dataset with different encryption settings, unset **Inherit** and choose the new *Encryption Options*.
For detailed descriptions of the encryption options, see the [Encryption article](/hub/initial-setup/storage/encryption/#encrypting-a-new-dataset).

The *Other Options* generally have settings to help tune the dataset for particular data sharing protocols:

| Setting            | Value     | Description  |
|--------------------|-----------|--------------|
| ZFS Deduplication  | drop down | Transparently reuse a single copy of duplicated data to save space. Deduplication can improve storage capacity, but is RAM intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. **Deduplicated data cannot be undeduplicated!** |
| Case Sensitivity   | drop down | *Sensitive* assumes filenames are case sensitive. *Insensitive* assumes filenames are not case sensitive. *Mixed* understands both types of filenames. Cannot be changed after the dataset is created. |
| Share Type         | drop down | Define the type of data sharing the dataset will use to optimize the dataset for that sharing protocol. Cannot be changed after the dataset is created. |

#### Advanced Options

Clicking **ADVANCED OPTIONS** adds dataset quota management tools and a few additional fields to the *Other Options*:

<img src="/images/DatasetQuotaOptions.png">
<br><br>
Setting a quota defines the maximum allowed space for the dataset.
You can also reserve a defined amount of pool space for the dataset to help prevent situations where automatically generated data like system logs consume all space on the dataset.
Quotas can be configured for either the new dataset or to include all child datasets in the quota.

| Setting            | Value     | Description  |
|--------------------|-----------|--------------|
| Quota for this datset | integer | Define the maximum allowed space for the dataset. *0* disables quotas. |
| Quota warning alert at, % | integer | Generate a warning level [alert](/hub/initial-setup/system-alerts/#system-alerts) when consumed space reaches the defined percentage. By default, the dataset will **Inherit** this value from the parent dataset. Unset **Inherit** to change the value. |
| Quota critical alert at, % | integer | Generate a critical level [alert](/hub/initial-setup/system-alerts/#system-alerts) when consumed space reaches the defined percentage. By default, the dataset will **Inherit** this value from the parent dataset. Unset **Inherit** to change the value. |
| Reserved space for this dataset | integer | Reserve additional space for datasets that contain logs which could eventually take up all the available free space. *0* is unlimited. |

Additional advanced settings are added to the *Other Options*.
By default, many of these options *Inherit* their values from the parent dataset.

| Setting                             | Value     | Description  |
|-------------------------------------|-----------|--------------|
| Read-only                           | drop down | *On* prevents the dataset being modified. *Off* allows users accessing the dataset to modify its contents. |
| Exec                                | drop down | *On* allows processes to be executed from within this dataset. *Off* prevents processes from executing in the dataset. It is recommended to set to *On*. |
| Snapshot directory                  | drop down | Controls visibility of the *.zfs* directory on the dataset. Choose between *Visible* or *Invisible*. |
| Copies                              | drop down | Duplicates ZFS user data stored on this dataset. Choose between *1*, *2*, or *3* redundant data copies. This can improve data protection and retention, but is not a substitute for storage pools with disk redundancy. |
| Record Size                         | drop down | Logical block size in the dataset. Matching the fixed size of data, as in a database, could result in better performance. |
| ACL Mode                            | drop down | Determine how [chmod](https://www.freebsd.org/cgi/man.cgi?query=chmod) behaves when adjusting file ACLs. See the [zfs](https://www.freebsd.org/cgi/man.cgi?query=zfs) `aclmode` property.<br>*Passthrough* only updates ACL entries that are related to the file or directory mode.<br>*Restricted* does not allow chmod to make changes to files or directories with a non-trivial ACL. An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. Setting the ACL Mode to *Restricted* is typically used to optimize a dataset for SMB sharing, but can require further optimizations. For example, configuring an [rsync task](/hub/tasks/scheduled/rsync/) with this dataset could require adding `--no-perms` in the task **Auxiliary Parameters** field. |
| Metadata (Special) Small Block Size | integer   | Threshold block size for including small file blocks into the [special allocation class (fusion pools)](/hub/initial-setup/storage/fusion-pool/). Blocks smaller than or equal to this value will be assigned to the special allocation class while greater blocks will be assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. The default size *0* means no small file blocks will be allocated in the special class. Before setting this property, a [special class vdev](/hub/initial-setup/storage/fusion-pool/#creating-a-fusion-pool) must be added to the pool. |

## Managing Datasets

After a dataset is created, additional management options are available by going to **Storage > Pools** and clicking <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a dataset:

* **Add Dataset**: create a [new ZFS dataset](#creating-a-dataset) that is a "child" of this dataset. Datasets can be continuously layered in this manner.
* **Add Zvol**: create a new [ZFS block device](/hub/initial-setup/storage/zvols/) as a "child" of this dataset.
* **Edit Options**: opens the [dataset options](#dataset-options) to make adjustments to the dataset configuration. The dataset **Name**, **Case Sensitivity**, and **Share Type** cannot be changed.
* **Edit Permissions**: opens the editor to set access permissions for this dataset.
* **User Quotas**: shows options to set data or object quotas for user accounts cached on the system or user accounts that are connected to this system.
* **Group Quotas**: shows options to set data or object quotas for user groups cached on the system or user groups that are connected to this system.
* **Delete Dataset**: removes the dataset, all stored data, and any snapshots of the dataset from TrueNAS. **Warning**: this can result in unrecoverable data loss, be sure that any critical data is moved off the dataset or is otherwise obsolete.
* **Create Snapshot**: takes a single manual [ZFS snapshot](/hub/initial-setup/storage/zfs-snapshots/) of the dataset to provide additional data protection and mobility. Created snapshots are listed in **Storage > Snapshots**.
