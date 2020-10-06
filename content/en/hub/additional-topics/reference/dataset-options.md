---
title: "ZFS Dataset Reference Information"
description: "ZFS Dataset Reference Information" 
tags: ["ZFS"]
---

Some settings are only available in **ADVANCED MODE**. To see these settings, either click the **ADVANCED MODE** button, or configure the system to always display advanced settings by enabling the **Show advanced fields by default** option in **System** > **Advanced**.

### Dataset Options

| Setting                                          | Value               | Advanced Mode | Description |
|--------------------------------------------------|---------------------|---------------|---------------|
| Name                                             | string              |               | Required. Enter a unique name for the dataset.  |
| Comments                                         | string              |               | Enter any additional comments or user notes about this dataset.   |
| Sync                                             | drop-down menu      |               | Set the data write synchronization. *Inherit* inherits the sync settings from the parent dataset, *Standard* uses the sync settings that have been requested by the client software, *Always* waits for data writes to complete, and *Disabled* never waits for writes to complete.   |
| Compression Level                                | drop-down menu      |               | Refer to the section on Compression for a description of the available algorithms.  |
| Enable atime                                     | Inherit, On, or Off |               | Choose *On* to update the access time for files when they are read. Choose *Off* to prevent producing log traffic when reading files. This can result in significant performance gains. |
| Quota for this dataset                           | integer             | ✓             | Default of *0* disables quotas. Specifying a value means to use no more than the specified size and is suitable for user datasets to prevent users from hogging available space.   |
| Quota warning alert at, %                        | integer             | ✓             | Set Inherit to apply the same quota warning alert settings as the parent dataset.   |
| Quota critical alert at, %                       | integer             | ✓             | Set Inherit to apply the same quota critical alert settings as the parent dataset.  |
| Quota for this dataset and all children          | integer             | ✓             | A specified value applies to both this dataset and any child datasets.  |
| Quota warning alert at, %                        | integer             | ✓             | Set Inherit to apply the same quota warning alert settings as the parent dataset.   |
| Quota critical alert at, %                       | integer             | ✓             | Set Inherit to apply the same quota critical alert settings as the parent dataset.   |
| Reserved space for this dataset                  | integer             | ✓             | Default of *0* is unlimited. Specifying a value means to keep at least this much space free and is suitable for datasets containing logs which could otherwise take up all available free space.   |
| Reserved space for this dataset and all children | integer             | ✓             | A specified value applies to both this dataset and any child datasets.  |
| ZFS Deduplication                                | drop-down menu      |               | Do not change this setting unless instructed to do so by your iXsystems support engineer.   |
| Read-only                                        | drop-down menu      | ✓             | Choices are *Inherit*, *On*, or *Off*.   |
| Exec                                             | drop-down menu      | ✓             | Choices are *Inherit*, *On*, or *Off*. Setting to Off prevents the installation of Plugins or Jails.  |
| Snapshot directory                               | drop-down menu      | ✓             | Choose if the `.zfs` snapshot directory is Visible or Invisible on this dataset.   |
| Copies                                           | drop-down menu      | ✓             | Set the number of data copies on this dataset.  |
| Record Size                                      | drop-down menu      | ✓             | While ZFS automatically adapts the record size dynamically to adapt to data, if the data has a fixed size (such as database records), matching its size might result in better performance. **Warning**: choosing a smaller record size than the suggested value can reduce disk performance and space efficiency.   |
| ACL Mode                                         | drop-down menu      | ✓             | Determine how [chmod(2)](https://www.freebsd.org/cgi/man.cgi?query=chmod) behaves when adjusting file ACLs. See the [zfs(8) aclmode property](https://www.freebsd.org/cgi/man.cgi?query=zfs). *Passthrough* only updates ACL entries that are related to the file or directory mode. *Restricted* does not allow **chmod** to make changes to files or directories with a non-trivial ACL. An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. Setting the `ACL Mode` to *Restricted* is typically used to optimize a dataset for SMB sharing, but can require further optimizations. For example, configuring an rsync with this dataset could require adding `--no-perm` in the task `Extra options` field. |
| Case Sensitivity                                 | drop-down menu      |               | Choices are *sensitive* (default, assumes filenames are case sensitive), *insensitive* (assumes filenames are not case sensitive), or *mixed* (understands both types of filenames). This can only be set when creating a new dataset.   |
| Share Type                                       | drop-down menu      |               | Select the type of share that will be used on the dataset. Choose between *Generic* for most sharing options or *SMB* for a SMB share. Choosing SMB sets the `ACL Mode` to *Restricted* and `Case Sensitivity` to *Insensitive*. This field is only available when creating a new dataset.  |



After a dataset is created it appears in **Storage** > **Pools**. Click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp (Options) on an existing dataset to configure these options:

**Add Dataset**: create a nested dataset, or a dataset within a dataset.

**Add Zvol**: add a zvol to the dataset. Refer to Adding Zvols for more information about zvols.

**Edit Options**: edit the pool properties described in Table 8.2.8. Note that `Dataset Name` and `Case Sensitivity` are read-only as they cannot be edited after dataset creation.

**Edit Permissions**: refer to Setting Permissions for more information about permissions.

{{% alert title=Warning color=warning %}}
Removing a dataset is a permanent action and results in data loss!
{{% /alert %}}

**Edit ACL**: see ACL Management for details about modifying an Access Control List (ACL).

**Delete Dataset**: removes the dataset, snapshots of that dataset, and any objects stored within the dataset. To remove the dataset, set `Confirm`, click `DELETE DATASET`, verify that the correct dataset to be deleted has been chosen by entering the dataset name, and click `DELETE`. When the dataset has active shares or is still being used by other parts of the system, the dialog shows what is still using it and allows forcing the deletion anyway. **Caution**: forcing the deletion of an in-use dataset can cause data loss or other problems.

**Promote Dataset**: only appears on clones. When a clone is promoted, the origin filesystem becomes a clone of the clone making it possible to destroy the filesystem that the clone was created from. Otherwise, a clone cannot be deleted while the origin filesystem exists.

**Create Snapshot**: create a one-time snapshot. A dialog opens to name the snapshot. Options to include child datasets in the snapshot and synchronize with VMware can also be shown. To schedule snapshot creation, use Periodic Snapshot Tasks.

### DeDuplication

Deduplication is often considered when using a group of very similar virtual machine images. However, other features of ZFS can provide dedup-like functionality more efficiently. For example, create a dataset for a standard VM, then clone a snapshot of that dataset for other VMs. Only the difference between each created VM and the main dataset are saved, giving the effect of deduplication without the overhead.

### Compression

When selecting a compression type, balancing performance with the amount of disk space saved by compression is recommended. Compression is transparent to the client and applications as ZFS automatically compresses data as it is written to a compressed dataset or zvol and automatically decompresses that data as it is read. These compression algorithms are supported:

**LZ4**: default and recommended compression method as it allows compressed datasets to operate at near real-time speed. This algorithm only compresses files that will benefit from compression.
**GZIP**: levels 1, 6, and 9 where *gzip fastest* (level 1) gives the least compression and *gzip maximum* (level 9) provides the best compression but is discouraged due to its performance impact.
**ZLE**: fast but simple algorithm which eliminates runs of zeroes.
If *OFF* is selected as the `Compression level` when creating a dataset or zvol, compression will not be used on that dataset/zvol. This is not recommended as using *LZ4* has a negligible performance impact and allows for more storage capacity.
