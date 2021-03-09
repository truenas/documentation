---
title: "FRG: Storage"
linkTitle: "Storage"
description: "Descriptions of each field in the Storage section of the TrueNAS web interface."
weight: 60
tags: ["reference", "zpool", "dataset", "zfs", "zvol", "encryption", "snapshots", "vmware", "s.m.a.r.t."]
---

## Pools

**Import Pool**

| | |
|-|-|
| Create New Pool | Create a new, empty pool. |
| Import Existing Pool | Import a pool that exists but is not connected. |

**Pool Manager**

| | |
|-|-|
| Name | ZFS pools must conform to strict naming [conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html). Choose a memorable name. |
| Encryption | Enable [ZFS encryption](https://zfsonlinux.org/manpages/0.8.3/man8/zfs.8.html) for this pool and add an encryption algorithm selector. |
| Suggest Layout | Create a recommended formation of vdevs in a pool. |
| Estimated raw capacity | Arrange the disks according to capacity, redundancy, and performance considerations. More types become available as more disks are added to the vdev.  A Stripe uses the entire capacity of the disks for storage and has no redundancy. Failed or degraded disks in a stripe can result in data loss!  A Mirror requires at least two disks and mirrors the data from one disk onto each other disk in the vdev, which can limit the total capacity. | Raid-Z configurations offer different balances of data redundancy and total capacity for the selected disks. |

**Add DataSet - General Options**

| | |
|-|-|
| Name and Options | Enter a unique name for the dataset. |
| Name | Enter any notes about this dataset. |
| Comments | Standard uses the sync settings that have been requested by the client software, Always waits for data writes to complete, and Disabled never waits for writes to complete. |
| Sync | Encode information in less space than the original data occupies. It is recommended to choose a compression algorithm that balances disk performance with the amount of saved space.  LZ4 is generally recommended as it maximizes performance and dynamically identifies the best files to compress.  GZIP options range from 1 for least compression, best performance, through 9 for maximum compression with greatest performance impact.  ZLE is a fast algorithm that only elminates runs of zeroes. |
| Enable Atime | Choose ON to update the access time for files when they are read. Choose Off to prevent producing log traffic when reading files. This can result in significant performance gains. |

**Add DataSet - Encryption Options**

| | |
|-|-|
| Inherit (non-encrypted) | Use the encryption properties of the root dataset. |

**Add DataSet - Other Options**

| | |
|-|-|
| ZFS Deduplication | Transparently reuse a single copy of duplicated data to save space. Deduplication can improve storage capacity, but is RAM intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. **Deduplicated data cannot be undeduplicated!**. |
| Case Sensitivity | Sensitive assumes filenames are case sensitive. Insensitive assumes filenames are not case sensitive. Mixed understands both types of filenames. |
| Share Type | Choose the type that matches the type of client accessing the pool/dataset. |


**Advanced Options - This Dataset**

| | |
|-|-|
| Quota for this dataset | 0 disables quotas. Specify a maximum allowed space for this dataset. |
| Quota warning alert at % | Apply the same quota warning alert settings as the parent dataset. |
| Quota critical alert at % | Apply the same quota critical alert settings as the parent dataset. |
| Reserved space for this Dataset | 0 is unlimited. Reserve additional space for datasets containing logs which could take up all available free space. |

**Advanced Options - This Dataset and Child Datasets**

| | |
|-|-|
| Quota for this dataset and all children | Define a maximum size for both the dataset and any child datasets. Enter 0 to remove the quota. |
| Quota warning alert at % | 0=Disabled, blank=inherit |
| Quota critical alert at % | 0=Disabled, blank=inherit |
| Reserved space for this dataset and all children | 0 is unlimited. A specified value applies to both this dataset and any child datasets. |

**Advanced Options - Encryption Options**

| | |
|-|-|
| Inherit (non-encrypted) | Use the encryption properties of the root dataset. |

**Advanced Options - Other Options**

| | |
|-|-|
| ZFS Deduplication | Transparently reuse a single copy of duplicated data to save space. Deduplication can improve storage capacity, but is RAM intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. **Deduplicated data cannot be undeduplicated!**. |
| Read-only | Set to prevent the dataset from being modified. |
| Exec | Set whether processes can be executed from within this dataset. |
| Snapshot directory | Choose if the .zfs snapshot directory is Visible or Invisible on this dataset. |
| Copies | Set the number of data copies on this dataset. |
| Record Size | Matching the fixed size of data, as in a database, may result in better performance. |
| ACL Mode | Determine how [chmod](https://www.freebsd.org/cgi/man.cgi?query=chmod) behaves when adjusting file ACLs. See the [zfs(8)](https://www.freebsd.org/cgi/man.cgi?query=zfs) aclmode property.  Passthrough only updates ACL entries that are related to the file or directory mode.  Restricted does not allow chmod to make changes to files or directories with a non-trivial ACL. An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. Setting the ACL Mode to Restricted is typically used to optimize a dataset for SMB sharing, but can require further optimizations. For example, configuring an rsync task with this dataset could require adding --no-perms in the task Auxiliary Parameters field. |
| Case Sensitivity | Sensitive assumes filenames are case sensitive. Insensitive assumes filenames are not case sensitive. Mixed understands both types of filenames. |
| Metadata (Special) Small Block Size | his value represents the threshold block size for including small file blocks into the special allocation class. Blocks smaller than or equal to this value will be assigned to the special allocation class while greater blocks will be assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. The default size is 0 which means no small file blocks will be allocated in the special class. Before setting this property, a special class vdev must be added to the pool. See [zpool(8)](https://zfsonlinux.org/manpages/0.7.13/man8/zpool.8.html) for more details on the special allocation |
| Share Type | Choose the type that matches the type of client accessing the pool/dataset. |

**Pool Options**

| | |
|-|-|
| Auto TRIM | Enable for TrueNAS to periodically review data blocks and identify empty blocks of obsolete blocks that can be deleted. Unset to incorporate day block overwrites when a device write is started (default). |

**Add Zvol**

| | |
|-|-|
| Zvol name | Keep the zvol name short. Using a zvol name longer than 63 characters can prevent accessing the zvol as a device. |
| Comments | Add any notes about this zvol. |
| Size for this zvol | Specify a size and value such as 10 GiB. |
| Force Size | The system restricts creating a zvol that brings the pool to over 80% capacity. Set to force creation of the zvol (NOT Recommended). |
| Sync | Sets the data write synchronization. Inherit takes the sync settings from the parent dataset, Standard uses the settings that have been requested by the client software, Always waits for data writes to complete, and Disabled never waits for writes to complete. |
| Compression Level | Encode information in less space than the original data occupies. It is recommended to choose a compression algorithm that balances disk performance with the amount of saved space. |
| ZFS Deduplication | LZ4 is generally recommended as it maximizes performance and dynamically identifies the best files to compress.  GZIP options range from 1 for least compression, best performance, through 9 for maximum compression with greatest performance impact.  ZLE is a fast algorithm that only elminates runs of zeroes. |
| Sparse | Transparently reuse a single copy of duplicated data to save space. Deduplication can improve storage capacity, but is RAM intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. Deduplicated data cannot be undeduplicated!. |
| BlockSize | The zvol default block size is automatically chosen based on the number of the disks in the pool for a general use case. |

**Create Snapshot**

| | |
|-|-|
| Name | Add a name for the new snapshot. |
| Rescursive | Set to include child datasets of the chosen dataset. |

**Encryption Options for Key**

| | |
|-|-|
| Encryption Type | How the dataset is secured. Choose between securing with an encryption Key or a user-defined Passphrase. Creating a new key file invalidates any previously downloaded key file for this dataset. Delete any previous key file backups and back up the new key file. |
| Generate Key | Randomly generate an encryption key for securing this dataset. Disabling requires manually defining the encryption key.  WARNING: the encryption key is the only means to decrypt the information stored in this dataset. Store the encryption key in a secure location. |
| Key | Enter or paste a string to use as the encryption key for this dataset. |

**Encryption Options for Passphrase**

| | |
|-|-|
| Passphrase | User-defined string used to decrypt the dataset. Can be used instead of an encryption key. **WARNING**: the passphrase is the only means to decrypt the information stored in this dataset. Be sure to create a memorable passphrase or physically secure the passphrase. |
| pbkdf2iters | Number of password-based key derivation function 2 (PBKDF2) iterations to use for reducing vulnerability to brute-force attacks. Entering a number larger than 100000 is required. See [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) for more details. |

## Snapshots: Add

**Snapshot**

| | |
|-|-|
| Dataset | Select a dataset or zvol. |
| Name | Unique snapshot name. Cannot be used with a Naming Schema. |
| Naming Schema | Generate a name for the snapshot using the naming schema from a previously created Periodic Snapshot Task. This allows the snapshot to be replicated. Cannot be used with a Name. |
| Recursive | Set to include child datasets of the chosen dataset. |

## VMware-Snapshots: Add

**VM Snapshot**

| | |
|-|-|
| Hostname | Enter the IP address or hostname of the VMware host. When clustering, this is the vCenter server for the cluster. |
| Username | Enter the user on the VMware host with permission to snapshot virtual machines. |
| Password | Enter the password associated with Username. |
| ZFS Filesystems | Enter the filesystem to snapshot. |
| Datastore | After entering the Hostname, Username, and Password, click Fetch Datastores and select the datastore to be synchronized. |

## Disks: Edit Disk

**General**

| | |
|-|-|
| Name | FreeBSD disk device name. |
| Serial | Serial number for this disk. |
| Description | Notes about this disk. |

**More Options**

| | |
|-|-|
| HDD Standby | Minutes of inactivity before the drive enters standby mode. This [forum post](https://forums.freenas.org/index.php?threads/how-to-find-out-if-a-drive-is-spinning-down-properly.2068/) describes identifying spun down drives. Temperature monitoring is disabled for standby disks. |
| Advanced Power Management | Select a power management profile from the menu. |
| Force HDD Standby | Allows the drive to enter standby, even when non-physical S.M.A.R.T. operations could prevent the drive from sleeping. |
| Acoustic Level | Modify for disks that understand [AAM](https://en.wikipedia.org/wiki/Automatic_acoustic_management). |
| Enable S.M.A.R.T. | Enabling allows the system to conduct periodic [S.M.A.R.T. tests](/hub/tasks/scheduled/smart/). |
| S.M.A.R.T. extra options | Additional [smartctl(8)](https://www.smartmontools.org/browser/trunk/smartmontools/smartctl.8.in) options. |
| Difference | Report if the temperature of a drive has changed by this many degrees Celsius since the last report. 0 disables the report. |
| SED Password | Set or change the password of this SED. This password is used instead of the global SED password. |
| Clear SED Password | Clear the SED password for this disk. |
| Critical | Threshold temperature in Celsius. If the drive temperature is higher than this value, a LOG_CRIT level log entry is created and an email is sent. 0 disables this check. |
| Informational | Report if drive temperature is at or above this temperature in Celsius. 0 disables the report. |

## Import Disk

**Disk**

| | |
|-|-|
| Disk | Select the disk to import. The import will copy the data from the chosen disk to an existing ZFS dataset. Only one disk can be imported at a time. |
| Filesystem Tyope | Choose the type of filesystem on the disk. |
| Destination Path | Browse to the ZFS dataset that will hold the copied data. |
