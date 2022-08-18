---
title: "Datasets Screens"
description: "This article provides information on Datasets screens, settings and functions."
weight: 30
tag: 
 - scaledatasets
 - scalestorage
 - scaleacls
 - scalequotas
---

{{< toc >}}

The **Datasets** screens, accessed from datasets on the **Storage** screen, display the configuration settings for datasets. Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and select **Add Dataset** to display the **Add Dataset** screen or click **Edit Options** to display the **Edit Dataset** screen. 

Both the add and edit dataset screens display **Basic Options** settings to set up a simple dataset. Click **Advanced Options** to display more settings to further customize datasets.

## Dataset Basic Options 

![AddDatasetNameAndOptions](/images/SCALE/22.02/AddDatasetNameAndOptions.png "Add Dataset Name and Options")

### Name and Options Settings
| Setting | Description |
|---------|-------------|
| **Parent path** | Read-only field that displays the dataset path for the dataset. The root dataset path includes the only the name of the root dataset. Child datasets created from a child of root include the root dataset/parent dataset in the path. |
| **Name** | Enter a unique identifier for the dataset. You cannot change the dataset name after clicking **Save**. |
| **Comments** | Enter notes about the dataset. |
| **Sync** | Select the sync setting option from the dropdown list. **Standard** uses the sync settings requested by the client software. **Always** waits for data writes to complete, and **Disabled** never waits for writes to complete. |
| **Compression level** | Select the compression algorithm to use from the dropdown list. Options encode information in less space than the original data occupies. It is recommended to choose a compression algorithm that balances disk performance with the amount of saved space.<br> **LZ4** is generally recommended as it maximizes performance and dynamically identifies the best files to compress.<br> **ZSTD** is the [Zstandard](https://tools.ietf.org/html/rfc8478) compression algorithm with several options for balancing speed and compression.<br> **Gzip** options range from **1** for least compression with best performance, through **9** for maximum compression with greatest performance impact.<br> **ZLE** is a fast algorithm that only eliminates runs of zeroes.<br>**LZJB** is a legacy algorithm that is not recommended for use. |
| **Enable Atime**| Select the access time for files option from the dropdown list. Access time can result in significant performance gains. **Inherit** uses the access time setting of the parent or the root dataset. **On** updates the access time for files when they are read. **Off** disables creating log traffic when reading files to maximize performance. |

### Encryption Options Settings
The default is **Inherit** selected. Clearing the checkbox displays more options. 
Selections in the **Encryption Type** field also displays additional setting options. 
See [Storage Encryption]({{< relref "EncryptionScale.md" >}}) for more information on encryption.

| Setting | Description |
|---------|-------------|
| **Inherit** | Select to use the encryption setting of the parent or root dataset (selected by default).  |
| **Encryption Type** | Select the option for the type of encryption to secure the dataset from the dropdown list. <br>Select **Key** to use key-based encryption. Displays the **Generate Key** option. Creating a new key file invalidates any previously downloaded key file for this dataset. Delete any previous key file backups and back up the new key file.<br>Select **Passphrase** to enter a user-defined passphrase to secure the dataset. This displays two additional **Passphrase** fields to enter and confirm the passphrase and the **pbkdf2iters** field. |
| **Generate key** | Selected by default to have the system randomly generate an encryption key for securing this dataset. Clearing the checkbox displays the **Key** field and requires you to enter an encryption key you define. <br>Warning! The encryption key is the only means to decrypt the information stored in this dataset. Store encryption keys in a secure location! |
| **Key** | Enter or paste a string to use as the encryption key for this dataset. |
| **Algorithm** | Displays for both key and passphrase encryption types. Select the mathematical instruction set that determines how plaintext converts into ciphertext from the dropdown list of options. See [Advanced Encryption Standard (AES)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) for more details. |
| **pbkdf2iters** | Enter the number of password-based key deviation function 2 (PBKDF2) iterations to use for reducing vulnerability to brute-force attacks. Entering a number larger than 100000 is required. See [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) for more details. |

### Other Options Settings
The **Other Options** settings help tune the dataset for specific data sharing protocols.

![AddDatasetBasicEncryptionAndOtherOptions](/images/SCALE/22.02/AddDatasetBasicEncryptionAndOtherOptions.png "Add Dataset Basic Encryption and Other Options")

| Setting | Description |
|---------|-------------|
| **ZFS Deduplication** | Select the option from the dropdown list to transparently reuse a single copy of duplicated data to save space. Options are **Inherit** to use the parent or root dataset settings. **On** to use deduplication. **Off** to not use deduplication, or **Verify** to do a byte-to-byte comparison when two blocks have the same signature to verify the block contents are identical.<br> Deduplication can improve storage capacity, but is RAM intensive. Compressing data is recommended before using deduplication.<br> Deduplicating data is a one-way process. *Deduplicated data cannot be undeduplicated!* |
| **Case Sensitivity** | Select the option from the dropdown list. **Sensitive** assumes file names are case sensitive. **Insensitive** assumes file names are not case sensitive. **Mixed** understands both types of file names. You cannot change case sensitivity after the saving the dataset. |
| **Share Type** | Select the option from the dropdown list to define the type of data sharing the dataset uses to optimize the dataset for that sharing protocol. Select **SMB** if using with an SMB share. Select **Generic** for all other share types. You cannot change this setting after the saving dataset. |

### Data Compression Algorithms

{{< include file="/_includes/StorageCompressionLevelsScale.md" type="page" >}}

## Advanced Options Settings
**Advanced Options** adds dataset quota management tools and more fields to the **Other Options** settings.

### Dataset Quota Settings

![AddDatasetAdvancedQuotaSettings](/images/SCALE/22.02/AddDatasetAdvancedQuotaSettings.png "Add Dataset Advanced Quota Options")

Setting a quota defines the maximum allowed space for the dataset or the dataset and child datasets.
You can also reserve a defined amount of pool space to prevent automatically generated data like system logs from consuming all of the dataset space.
You can configure quotas for only the new dataset or include all child datasets.

| Setting | Description |
|---------|-------------|
| **Quota for this dataset**<br> **Quota for this dataset and all children** | Enter a value to define the maximum allowed space for the dataset. **0** disables quotas. |
| **Quota warning alert at, %** | Enter a percentage value to generate a warning level [alert]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/AlertSettingsScreen.md" >}}) when consumed space reaches the defined level. By default, the dataset inherits this value from the parent dataset. Clear the **Inherit** checkbox to change the value. |
| **Quota critical alert at, %** | Enter a percentage value to generate a critical level [alert]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/AlertSettingsScreen.md" >}}) when consumed space reaches the defined level. By default, the dataset inherits this value from the parent dataset. Clear the **Inherit** checkbox to change the value. |
| **Reserved space for this dataset**<br> **Reserved space for this dataset and all children** | Enter a value to reserve additional space for datasets that contain logs which could eventually take up all the available free space. **0** is unlimited. |

### Advanced Other Option Settings
Many of the **Other Options** settings inherit their values from the parent dataset.

![AddDatasetAdvancedOtherOptions1](/images/SCALE/22.02/AddDatasetAdvancedOtherOptions1.png "Add Dataset Advanced Other Options")

| Setting | Description |
|---------|-------------|
| **Checksum** | Select the [checksum](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Checksums.html) option from the dropdown list. Select **Inherit** to use the parent setting; **On** to use checksum without specifying the variant; **FLETCHER2** (deprecated) or **FLETCHER4** to use a position-dependent checksum that uses two checksums to determine single-bit errors in messages transmitted over network channels or ZFS streams; **SHA256** (default for dedupted datasets) or **SHA512** to use a sequence of numbers and letters to check the copy of a downloaded update file is identical to the original; **SKEIN** which is not supported for a file system on boot pools; or **EDNOR** which is not supported for file systems on boot pools and Edon-R requires verification when used with dedup so it automatically uses `verify`. |
| **Read-only** | Select the option to allow or prevent dataset modification from the dropdown list. **On** prevents modifying the dataset. **Off** allows users accessing the dataset to modify its contents. |
| **Exec** | Select the option for executing processes from within the dataset from the dropdown list. **On** allows executing processes from within this dataset. **Off** prevents executing processes from with the dataset. We recommend setting it to **On**. |
| **Snapshot directory** | Select the option to controls visibility of the <file>.zfs</file> directory on the dataset from the dropdown list. Select either **Visible** or **Invisible**. |

![AddDatasetAdvancedOtherOptions2](/images/SCALE/22.02/AddDatasetAdvancedOtherOptions2.png "Add Dataset Advanced Other Options 2")

| Setting | Description |
|---------|-------------|
| **Copies** | Select the number of duplicate of ZFS user data stored on this dataset from the dropdown list. Select between **1**, **2**, or **3** redundant data copies. This can improve data protection and retention, but is not a substitute for storage pools with disk redundancy. |
| **Record Size** | Select the logical block size in the dataset from the dropdown list of options. Matching the fixed size of data, as in a database, can result in better performance. |
| **ACL Type** | Select the access control list type from the dropdown list of options. **Inherit** preserves ACL type from the parent dataset.<br>**Off** to use neither NFSv4 or POSIX protocols.<br>**NFSv4** is used to losslessly migrate Windows-style ACLs across Active Directory domains (or stand-alone servers) that use ACL models richer than POSIX. Since POSIX ACLs are a Linux-specific ZFS feature, administrators should use NFSv4 to maintain compatibility with TrueNAS Core, FreeBSD, or other non-Linux ZFS implementations. <br>**POSIX** use when an organization data backup target does not support native NFSv4 ACLs. Since the Linux platform used POSIX for a long time, many backup products that access the server outside the SMB protocol cannot understand or preserve native NFSv4 ACLs. All datasets within an SMB share path must have identical ACL types.<br>For a more in-depth explanation of ACLs and configurations in TrueNAS SCALE, see our [ACL Primer]({{< relref "/content/References/ACLPrimer.md" >}}). |
| **ACL Mode** | Select the option that determines how [chmod](https://linux.die.net/man/1/chmod) behaves when adjusting file ACLs from the dropdown list. See the [zfs(8)](https://linux.die.net/man/8/zfs) `aclmode` property.<br> **Passthrough** only updates ACL entries that are related to the file or directory mode.<br> **Restricted** does not allow chmod to make changes to files or directories with a non-trivial ACL. An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. Set the ACL Mode to restricted to optimize a dataset for SMB sharing, but it can require further optimizations. For example, configuring an [rsync task]({{< relref "SCALE/SCALEUIReference/DataProtection/RsyncTasksSCALE.md" >}}) with this dataset could require adding `--no-perms` in the task **Auxiliary Parameters** field. |
| **Metadata (Special) Small Block Size** | Enter a threshold block size for including small file blocks into the [special allocation class (fusion pools)]({{< relref "FusionPoolsScale.md" >}}). Blocks smaller than or equal to this value are assigned to the special allocation class while greater blocks are assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. The default size **0** means no small file blocks are allocated in the special class. Before setting this property, you must add a [special class vdev]({{< relref "FusionPoolsScale.md" >}}) to the pool. |

## Edit Dataset Screens
Click **Edit Options** on the **Dataset Actions** list of options to access the **Edit Dataset** screens.

The fields and settings on the **Edit Dataset** screens are the same as the **Add Dataset** screens but you cannot edit the **Name**, **Case Sensitivity** or **Share Type** fields on the Basic and Advanced Options screens.

## Dataset Actions List

The **Dataset Actions** dropdown list options for child datasets are the same but also include **Delete Dataset**.
### Add Dataset
The **Add Dataset** option displays the **[Add Dataset](#dataset-basic-options)** configuration screen where you can create a child dataset to the root dataset or to another child dataset.

### Add Zvol
**Add Zvol** displays the **[Add Zvol]({{< relref "/ZvolsScreensScale.md" >}})** where you can create zvols for a root or child dataset.

### Edit Options
**Edit Options** displays the **[Edit Dataset](#edit-dataset-screens)** screen where you can edit the settings for the selected dataset.

### View Permissions
**View Permissions** displays the **Dataset Permissions** widget to the right of the root dataset on the **Storage**screen.
The **Dataset Permissions** widget is read-only.

![ViewDatasetPermissionsWidget](/images/SCALE/22.02/ViewDatasetPermissionsWidget.png "View Dataset Permissions")

| Settings | Description |
|----------|-------------|
| **Owner** | Displays the name of the owner, which is **root** for both the root dataset and the child datasets of root. |
| **Group** | Displays the name of the group, which is **root** for both the root dataset and the child datasets of root.. |
| **Path** | Displays the path for the selected dataset. |
| **Unix Permissions** | Displays three levels of permissions, **Read|Write|Execute** for the root parent, **Read|Execute** for the child of the root parent, and **Read|Execute** for any other storage volume child under the parent root dataset. |

### User Quotas
**User Quotas** displays the **[Set User Qutoas]({{< relref "QuotaScreens.md" >}})** screen. 

### Group Quotas
**Group Quotas** displays the **[Set Group Qutoas]({{< relref "QuotaScreens.md" >}})** screen.

### Create Snapshot
**Create Snapshot** displays the **One time snapshot of *datasetname*** dialog where you can create a manual snapshot of the selected dataset.
The dialog *datasetname* changes based on the name of the selected dataset (or zvol).

![OneTimeSnapshotDialog](/images/SCALE/22.02/OneTimeSnapshotDialog.png "Create One Time Snapshot")

**Name** displays the system-created name for the snapshot.

Select **Recursive** to include child datasets or zvols in the snapshot of the parent or root dataset.

Click **Create Snapshot** to create the manual snapshot.

{{< taglist tag="scaledatasets" limit="10" title="Related Datasets Articles" >}}
