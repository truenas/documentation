---
title: "Dataset"
description: "Provides information about the storage dataset namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 10
aliases:
draft: false
tags:
- scaleclistorage
- scaledatasets
---

{{< toc >}}


{{< include file="/_includes/CLIGuideWIP.md" >}}

## Snapshot Namespace
The **pool** namespace has 23 commands, and is based on pool creation and management functions found in the SCALE API and web UI.
It provides access to storage pool methods through the **pool** commands.

## Snapshot Commands 
The following **pool** commands allow you to create new pools and manage existing pools.

You can enter commands from the main CLI prompt or from the snapshot namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Attachments done
The `attachments` command lists services dependent on the dataset matching the ID entered.

Use the `storage dataset query` or `storage dataset details` command to obtian dataset IDs.

{{< expand "Using the Attachments Command" "v" >}}
#### Description
The `attachments` command has one required property, `id`.
`id` is the ID found in the output of the `storage dataset query` command.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset attachments id=<i>tank</i></code>

Where *tank* is the ID assigned to the dataset by the system.

{{< expand "Command Example" "v" >}}
```
storage dataset attachments id=tank
+---------------+------------+-----------------------+
| type          | service    | attachments           |
+---------------+------------+-----------------------+
| Snapshot Task | <null>     | tank/minio            |
|               |            | tank/minio            |
|               |            | tank/snapshots        |
| NFS Share     | nfs        | /mnt/tank/shares/nfs  |
|               |            | /mnt/tank/shares/nfs2 |
|               |            | /mnt/tank/shares/nfs3 |
|               |            | /mnt/tank/shares/nfs4 |
| Rsync Task    | <null>     | /mnt/tank/minio       |
| Kubernetes    | kubernetes | tank                  |
+---------------+------------+-----------------------+
```
{{< /expand >}}
{{< /expand >}}

### Change_Key Command wip
Use the `change_key` command to change the encryption key properties for the dataset matching the ID entered.

{{< expand "Using the Change_key Command" "v" >}}
#### Description
The `change_key` command has two required properties, `id` and `change_key_options`.
`id` is the ID for the dataset found in the output of the `storage dataset query` command.
`change_key_options` has four properties. See **Change_Key_Options Properties** below for details.
Enter the `id` property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

{{< expand "Change_Key_Options Properties" "v" >}}
{{< truetable >}}
test syntax:
storage dataset change_key id=tank pool_attach={"generate_key":"false","Key_file":"false","pbkdf2iters":"350000","key":"<i>myHexKeyString</i>"}

Enter the `change_key_options` the optional property arguments inside the curly brackets `{}` and where the properties and values are double-quoted and separated by the `:` delimiter and each agrument separated with a comma. 
If setting key encryption include the key-encryption arguments.

| Property | Required | Description | Syntax Example |
|----------|-------------|----------------|
| `generate_key` | No | Enter `true` to have the system generate a hex-encoded key. Default is `false` to use `key` to enter a hex-encoded key of your choice. | `"generate_key":"true"` or `"generate_key":"false` |
| `key_file` | No | Enter `true` to use a key file for key encryptiont. Default is `false` if not using an uploaded key file. | `"key_file":"true"` or `"key_file":"false` | 
| `pbkdf2iters` | No | Enter the number of password-based key deviations function 2 (PBKDF2) iterations to use for reducing vulnerabiltiy to brute-fore attacks. Enter a value greater than 100000 or use the default value `350000`. | <code>"pbkdf2iters":"<i>350000</i>"</code> |
| `passphrase` | No | enter the double-quoted password of your choice. Must be specified to use password encryption. Default value is `Null` or use any string of alpha-numeric and special characters of your choice. | <code>"passphrase":"<i>myPassPhrase</i>"</code> |
| `key` | No | Enter the hex-encoded key of your choice. Default is `Null`. | <code>"key":"<i>myHexKeyString</i>"</code> |  
{{< /truetable >}}
{{< /expand >}}
#### Usage
From the CLI prompt, enter:

<code>storage dataset change_key  </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Checksum_Choices Command done
The `checksum_choices` command lists checksums supported for the ZFS dataset.

{{< expand "Using the Checksum_Choices Command" "v" >}}
#### Description
The `checksum_choices` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with a list of checksums supported by ZFS.
Checksums are ON, FLETCHER2, FLETCHER4, SHA256, SHA512, SKEIN, and EDNOR.

#### Usage
From the CLI prompt, enter:

`storage dataset checksum_choices`

{{< expand "Command Example" "v" >}}
```
storage dataset checksum_choices
+-----------+-----------+
|        ON | ON        |
| FLETCHER2 | FLETCHER2 |
| FLETCHER4 | FLETCHER4 |
|    SHA256 | SHA256    |
|    SHA512 | SHA512    |
|     SKEIN | SKEIN     |
|     EDONR | EDONR     |
+-----------+-----------+
```
{{< /expand >}}
{{< /expand >}}

### Compression_Choices Command done
The `compression_choices` command lists compression alogrithms supported by ZFS. 

{{< expand "Using the Compression_Choices Command" "v" >}}
#### Description
The `commpression_choices` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table listing compression algorthms supported by ZFS.

#### Usage
From the CLI prompt, enter:

`storage dataset compression_choices`

{{< expand "Command Example" "v" >}}
```
storage dataset compression_choices
+----------------+----------------+
|            OFF | OFF            |
|            LZ4 | LZ4            |
|           GZIP | GZIP           |
|         GZIP-1 | GZIP-1         |
|         GZIP-9 | GZIP-9         |
|           ZSTD | ZSTD           |
|      ZSTD-FAST | ZSTD-FAST      |
|            ZLE | ZLE            |
|           LZJB | LZJB           |
|         ZSTD-1 | ZSTD-1         |
|         ZSTD-2 | ZSTD-2         |
|         ZSTD-3 | ZSTD-3         |
|         ZSTD-4 | ZSTD-4         |
|         ZSTD-5 | ZSTD-5         |
|         ZSTD-6 | ZSTD-6         |
|         ZSTD-7 | ZSTD-7         |
|         ZSTD-8 | ZSTD-8         |
|         ZSTD-9 | ZSTD-9         |
|        ZSTD-10 | ZSTD-10        |
|        ZSTD-11 | ZSTD-11        |
|        ZSTD-12 | ZSTD-12        |
|        ZSTD-13 | ZSTD-13        |
|        ZSTD-14 | ZSTD-14        |
|        ZSTD-15 | ZSTD-15        |
|        ZSTD-16 | ZSTD-16        |
|        ZSTD-17 | ZSTD-17        |
|        ZSTD-18 | ZSTD-18        |
|        ZSTD-19 | ZSTD-19        |
|    ZSTD-FAST-1 | ZSTD-FAST-1    |
|    ZSTD-FAST-2 | ZSTD-FAST-2    |
|    ZSTD-FAST-3 | ZSTD-FAST-3    |
|    ZSTD-FAST-4 | ZSTD-FAST-4    |
|    ZSTD-FAST-5 | ZSTD-FAST-5    |
|    ZSTD-FAST-6 | ZSTD-FAST-6    |
|    ZSTD-FAST-7 | ZSTD-FAST-7    |
|    ZSTD-FAST-8 | ZSTD-FAST-8    |
|    ZSTD-FAST-9 | ZSTD-FAST-9    |
|   ZSTD-FAST-10 | ZSTD-FAST-10   |
|   ZSTD-FAST-20 | ZSTD-FAST-20   |
|   ZSTD-FAST-30 | ZSTD-FAST-30   |
|   ZSTD-FAST-40 | ZSTD-FAST-40   |
|   ZSTD-FAST-50 | ZSTD-FAST-50   |
|   ZSTD-FAST-60 | ZSTD-FAST-60   |
|   ZSTD-FAST-70 | ZSTD-FAST-70   |
|   ZSTD-FAST-80 | ZSTD-FAST-80   |
|   ZSTD-FAST-90 | ZSTD-FAST-90   |
|  ZSTD-FAST-100 | ZSTD-FAST-100  |
|  ZSTD-FAST-500 | ZSTD-FAST-500  |
| ZSTD-FAST-1000 | ZSTD-FAST-1000 |
+----------------+----------------+
```
{{< /expand >}}
{{< /expand >}}

### Create Command wip
Use the `Create` command to create datasets or ZVols.

{{< expand "Using the Create Command" "v" >}}
#### Description
The `create` command has x required properties and x optional prperties.
See **Create Properties** below for details.
The `create` command is a complex command. 
Enter the `storage dataset create --` command string to open the text user interface (TUI) and make configuring a dataset or zvol easier.' 
Enter the CLI command string then press <kbd>Enter</kbd>.
The command creates a new dataset.

{{< expand "Create Properties" "v" >}}
{{< truetable >}}
Enter property arguments using the `=` delimiter to separate property and value. Double-quote values that include special characters.
Property arguments enclosed in curly backets `{}` have double-quoted properties and values separted by the `:` delimiter, and separate multiple property arguments with a comma. For example:

`storage dataset create name="tank/tank-e" type=FILESYSTEM share_type=GENERIC inherit_encryption=false encryption=true encryption_options= {"pbkdf2iters":"350000","passphrase":"abcd1234"}`

| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `name` | Yes | Enter the full name for the dataset as *pool/dataset*. Enter the value in double-quote. | <code>name="<i>tank/dataset</i>"</code> |
| `type` | No | Enter `FILESYSTEM` to create a dataset or `VOLUME` to create a ZVol. Include the `volsize` property argument if using `VOLUME`.  | `type=FILESYSTEM` or `type=VOLUME` |
| `volsize` | Yes* | *Required if setting `type=VOLUME`. Enter the value which is a multiple of the block size. Options are `512`, `512B`, `1K`, `2K`, `4K`, `8K`, `16K`, `32K`, `64K`, `128K`. | <code>volsize=<i>8k</i></code> |
| `volblocksize` | No | Only used when setting `type=VOLUME`. Enter the block size for the ZVol. For example, 10GiB. | <code>volblocksize=<i>10GiB</i></code> |
| `sparse` | No | Only used when setting `type=VOLUME`. Enter `true` to or `false` | `sparse=true` or `sparse=false` |
| `force_size` | No | Only used when setting `type=VOLUME`. The system restricts creating a ZVol that brings a pool to over 80% capacity. Enter `true` to force creating of a ZVol in this case (not recommended). Default is `false`. | `force_size=false` or `force_size=true` |
| `comments` | No | Enter comments using upper and lowercase alphanumeric and special characters as a description about this dataset. Enclose value in double quotes. |  |
| `sync` | No | Enter the option for the desired sync setting. <br><li>`STANDARD` to use the standard sync settings requested by the client software. <br><li>`ALWAYS` to wait for data writed to complete. <br><li>`DISABLED` to never wait for writes to complete.</li>| <code>comments="<i>my comments</i>"</code> |
| `snapdev` | No | Enter the option to set whether the volum snapshot devices under /dev/zvol/*poolname* are `HIDDEN` or `VISIBLE`. Default inherits `HIDDEN`. | `snapdev=HIDDEN` or `snapdev=VISIBLE` |
| `compression` | No | Enter the compression level to use from the available ZFS supported options. Use `storage dataset compression_choices` to list ZFS supported compression algorithms. Enter the value in double quotes. | <code>compression=<i>OFF</></code> |
| `atime` | No | Set the access time for the dataset. Options are: <br><li>`ON` updates the access time for files when thea are read. <br><li> `OFF` disables creating log traffic when reading files to maximise performance.</li> | `atime=ON` or `atime=OFF` |
| `exec` | No | Enter `ON` to allow executing processes from within the dataset or `OFF` to prevent executing processes from within the dataset. We recommend setting this to `ON`. | `exec=ON` or `exec=OFF` | 
<!-- comment out until I verify what these are
| `managedby` | No | Enter string |  | -->
| `quota` | No | Enter a value to define the maximum allow space for the dataset. Default `0` dislables quotas. Default is `Null`.|  |
| `quota_warning` | No | Enter a percentage value that when reached or exceeded generates a warning alert or enter `Null`. |  |
| `quota_crtical` | No |  Enter a percentage value that when reached or exceeded generates a critical alert or enter `Null`. |  | 
<!-- comment out until I verify what these are
| `refquota` | No |  |  |
| `rfquota_warning` | No |  |  |
| `refquota_crtical` | No |  |  | -->
| `reservation` | No | Enter a value to reserve additional space for this dataset that contains logs which could eventually take up all available free space. `0` is unlimited. |  |
<!-- comment out until I verify what these are
| `refreservation` | No |  |  | -->
| `special_small_block_size` | No | Enter the threshold block size for including small file blocks into the special allocation class [fusion pool]({{< relref "FusionPoolsScale.md" >}}). Blocks smaller than or equal to this value are assigned to to the special allocation class while greater blocks are assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. Default is `0` which means no small file blocks are allocated in the special class. Add a special class VDev to the pool before setting this value. | <code>special_small_block_size=<i>0</i></code> |
| `copies` | No | Enter a number for allowed duplicates of ZFS user data stored on this dataset.  | <code>copies=<i>2</i></code> |
| `snapdir` | No | Enter the visibility of the .zfs directory on the dataset as `HIDDEN` or `VISIBLE`. | `snapdir=HIDDEN` or `snapdir=VISIBLE` |
| `deduplication` | No | Enter the option to transparently reuse a single copy of duplicated data to save space. Options are: <br><li>`ON` to use deduplication. <br><li>`VERIFY` to do a byte-to-byte comparison when two blocks have the same signature to verify the block contents are identical. <br><li>`OFF` to not use deduplication</li> Deduplicating data is a one-way process. You cannot undo deduplicated data! | <code>deduplication=<i>OFF</i></code> |
| `checksum` | No | Enter the checksum to use from the options: `ON`, `OFF`, `FLETCHER2`, `FLETCHER4`, `SHA256`, `SHA512`, `SKEIN`, or `EDONR`. | <code>checksum=<i>OFF</i></code> |
| `readonly` | No | Enter `ON`to make the dataset readonly, or `OFF` to allow write access. | <code>readonly=<i>ON</i></code> |
| `recordsize` | No | Set the logical block size in the dataset matching the fixed size of data, as in a database. This can result in better performance. | <code>recordsize=<i>Null</i></code> |
| `casesensitivity` | No | Enter `SENSITIVE` to assume file names are case sensitive or `INSENSITIVE` for mixed case or case-insensitivity. You cannot change case sensivity after saving the dataset. Default is `INSENSITIVE`. | <code>casesensitivity=<i>INSENSITIVE</i></code> |
| `aclmode` | No | Enter the option that determines how chmod behoaves when adjusting file. See [zfs(8)](https://linux.die.net/man/8/zfs) `aclmod` propoerty for more information. Options are: <br><li>`PASSTHROUGH` only updates ACL entries that are related to the file or directory mode. <br><li>`RESTRICTED` does not allow chmod to make changes to files or directories with a non-trivial ACL. A trivla ACL can be fully expressed as a file mode without losing any access rules. Use this to optimize a dataset for SMB sharing. <br><li>`DISCARD` </li> `acl_type` determines the acl_mode options available in the UI. | <code>aclmodes=<i>PASSTHROUGH</i></code> |
| `acltype` | No | `acltype` is inherited from the parent or root dataset. Enter the access control type from these options: <br><li>`OFF` specifies neither NFSV4 or POSIX protocols. <br><li>`NFSV4` is used to cleanly migrate Windows-style ACLs across Active Directory domains (or stand-alone servers) that use ACL models richer than POSIX. Use to maintian compatibility with Trunease CORE, FreeBSD, or other non-Linux ZFS implementations. <br><li>`POSIX` use when an organization data backup target does not support native NFSV4 ACLs. Linux platfoms use POSIX and many backup products that access the servier outside the SMB protocoal cannot understand or preserve native NFSV4 ACLs. Datasets with `share_type` set to `GENERIC` or `APPS` have POSIX ACL types. </li> | <code>acltype=<i>POSIX</i></code> |
| `share_type` | Yes | Enter the option to deine the type of data sharting the dataset uses to optimize the dataset for that sharing protocol. Options are: <br><li>`GENERIC` to use for all datasets except those using SMB shares. <br><li>`SMB` for datasets using SMB shares. <br><li>`APPS` for datasets created to use with applications and to optimize the dataset for use by any application.</li> | <code>share_type=<i>GENERIC</i></code> |
| `xattr` | No | `SA` `ON` |  |
| `encryption_options` | *No | Use to specify the type of encryption, hex-encoded key or passphrase. Enter the property arguments that apply: <br><li>`generate_key`enter `true` to have the system generate a hex-encoded key. Default is `false` to use `key` to enter a hex-encoded key of your choice. <br><li>`key_file` enter `true` to use a key file for key encryptiont. Default is `false` if not using an uploaded key file. <br><li>`pbkdf2iters` enter the number of password-based key deviations function 2 (PBKDF2) iterations to use for reducing vulnerabiltiy to brute-fore attacks. Enter a value greater than 100000 or use the default value `350000`. <br><li>`passphrase` enter the double-quoted password of your choice. Must be specified to use password encryption. Default value is `Null` or use any string of alpha-numeric and special characters of your choice. <br><li>`key` enter the hex-encoded key of your choice. Default is `Null`.</li> | <code>encryption_options={"generate_key":"<i>false</>","key":"</i>my_hex_ecoded_string</i>"} |
| `encryption` | No | Enter `true` to encrypt the dataset. Default is `false` if the parent dataset is not encrypted. You must enter `inherit_encryption=false` to change encryption for a child of an unencrypted dataset and if changing from key to passphrase encryption. | `encryption=true` or `encryption=false` |
| `inherit_encryption` | *No | Required if encrypting a dataset that is a child of an unencrypted dataset. Enter `true` to inherit encryption from the parent dataset or `false` to encrypt a dataset that is a child of an unencrypted dataset or changing or if changing from key to passphrase encryption. You cannot create an unencrypted child dataset of an encrypted parent dataset. | `inherit_encryption=true` or `inherit_encryption=false` |
<!-- commenting out until I figure out why use them?
| `user_properties` | No | Enter the `key` and `value` property arguments inside the square brackets `[]`. Default is `[]`. |  |
| `create_ancestors` | No | Enter `true` to create ancestors. Default is `false`. | `create_ancestors=true` or `create_ancestors=false` | -->
{{< /truetable >}}
{{< /expand >}}
#### Usage
From the CLI prompt, enter:

`storage dataset create --`

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Delete Command
Use the `delete` command to delete datasets or ZVols matching the ID entered.

{{< expand "Using the Delete Command" "v" >}}
#### Description
The `delete` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Destroy_Snapshots Command
Use the `destroy_snapshots` command to destroy snapshots for the dataset matching the ID entered.

{{< expand "Using the Destroy_Snapshots Command" "v" >}}
#### Description
The `destroy_snapshot` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Details Command
Use the `details` command to list all dataset(s) details outlining any services/tasks which might be consuming the dataset(s).

{{< expand "Using the Details Command" "v" >}}
#### Description
The `details` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Encryption_Algorithm_Choices Command
Use the `encryption_alogorithm_choices` command to list encryption alogritms supported by ZFS.

{{< expand "Using the Encryption_Algorithm_Choices Command" "v" >}}
#### Description
The `encryption_alogorithm_choices` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Encryption_Summary Command
Use the `encryption_summary` command to retrieve a summary of all encrypted root datasets under the entered ID.

{{< expand "Using the Encryption_Summary Command" "v" >}}
#### Description
The `encryption_summary command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Export_Key Command
Use the `export_key` command to export the encryption key for the dataset matching the ID entered.

{{< expand "Using the Export_Key Command" "v" >}}
#### Description
The `export_key` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Export_Keys Command
Use the `export_keys` command to export keys for the ID entered and all children of it stored in the system.

{{< expand "Using the Export_Keys Command" "v" >}}
#### Description
The `export_keys` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Get_Instance Command
Use the `get_instance` command to list detials for the dataset matching the ID entered.

{{< expand "Using the Get_Instance Command" "v" >}}
#### Description
The `get_instance` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Get_Quota Command
Use the `get_quota` command to return a list of the specified quota_type of quotas on the ZFS dataset `ds`.

{{< expand "Using the Get_Quota Command" "v" >}}
#### Description
The `get_quota` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Inherit_Parent_Encryption_Properties Command
Use the `inherit_parent_encryption_properties` command allows inheriting parent dataset encryption root disregarding the curren encryption settings of the dataset.

{{< expand "Using the Inherit_Parent_Encryption_Properties Command" "v" >}}
#### Description
The `inherit_parent_encryption_properties` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Lock Command
Use the `lock` command to lock the dataset matching the ID entered.

{{< expand "Using the Lock Command" "v" >}}
#### Description
The `lock` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Mountpoint Command
Use the `mountpoint` command to obtain the mounpoint for the dataset matching the ID entered.

{{< expand "Using the Mountpoint Command" "v" >}}
#### Description
The `mountpoint` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Permission Command
Use the `permission` command to set permissions for the dataset matching the ID entered.

{{< expand "Using the Permissions Command" "v" >}}
#### Description
The `permissions` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Processes Command 
Use the `Create` command to list the processes using the dataset matching the ID entered.

{{< expand "Using the Processes Command" "v" >}}
#### Description
The `processes` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Promote Command
Use the `promote` command to promote a the cloned dataset matching the ID entered.

{{< expand "Using the Promote Command" "v" >}}
#### Description
The `promote` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Query Command done
Use the `query` command to list all configured datasets, enter `storage dataset query`. Information provided includes id (name), type, name, pool encyprtion settings, child datasets, comments, ACL mode and type, checksum, compression settings, quota settings, and other settings found on the Dataset add and edit screens in the UI.

{{< expand "Using the Query Command" "v" >}}
#### Description
The `query` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with information for all datasets on the system.

#### Usage
From the CLI prompt, enter:

`storage dataset query`

{{< expand "Command Example" "v" >}}
```
storage dataset query
+----------------------+------------+----------------------+-------+-----------+-----------------+------------+--------------+-------------+-------------+---------------+-----------------------+---------+-------------+-------------+-------------+-----------------+----------+-------------+--------+-------------+---------------+--------+-------------+-------------+-------------+----------------+--------+-------------+----------+-------------+--------------+-------------+------------+----------------------+--------+----------------+---------------+----------------------+-----------------+-----------+--------------------------+-------------+----------+---------+-----------------+--------+
| id                   | type       | name                 | pool  | encrypted | encryption_root | key_loaded | children     | comments    | managedby   | deduplication | mountpoint              | aclmode     | acltype     | xattr       | atime       | casesensitivity | checksum | exec        | sync   | compression | compressratio | origin | quota       | refquota    | reservation | refreservation | copies | snapdir     | readonly | volsize     | volblocksize | recordsize  | key_format | encryption_algorithm | used   | usedbychildren | usedbydataset | usedbyrefreservation | usedbysnapshots | available | special_small_block_size | pbkdf2iters | creation | snapdev | user_properties | locked |
+----------------------+------------+----------------------+-------+-----------+-----------------+------------+--------------+-------------+-------------+---------------+-----------------------+---------+-------------+-------------+-------------+-----------------+----------+-------------+--------+-------------+---------------+--------+-------------+-------------+-------------+----------------+--------+-------------+----------+-------------+--------------+-------------+------------+----------------------+--------+----------------+---------------+----------------------+-----------------+-----------+--------------------------+-------------+----------+---------+-----------------+--------+
| tank                 | FILESYSTEM | tank                 | tank  | false     | <null>          | false      | <list>       | <undefined> | <undefined> | <dict>        | /mnt/tank                | <dict>      | <dict>      | <dict>      | <dict>      | <dict>          | <dict>   | <dict>      | <dict> | <dict>      | <dict>        | <dict> | <dict>      | <dict>      | <dict>      | <dict>         | <dict> | <dict>      | <dict>   | <undefined> | <undefined>  | <dict>      | <dict>     | <dict>               | <dict> | <dict>         | <dict>        | <dict>               | <dict>          | <dict>    | <dict>                   | <dict>      | <dict>   | <dict>  | <dict>          | false  |
| tank/reptest1        | FILESYSTEM | tank/reptest1        | tank  | false     | <null>          | false      | <empty list> | <dict>      | <dict>      | <dict>        | /mnt/tank/reptest1       | <dict>      | <dict>      | <dict>      | <dict>      | <dict>          | <dict>   | <dict>      | <dict> | <dict>      | <dict>        | <dict> | <dict>      | <dict>      | <dict>      | <dict>         | <dict> | <dict>      | <dict>   | <undefined> | <undefined>  | <dict>      | <dict>     | <dict>               | <dict> | <dict>         | <dict>        | <dict>               | <dict>          | <dict>    | <dict>                   | <dict>      | <dict>   | <dict>  | <dict>          | false  |
| tank/zvols           | FILESYSTEM | tank/zvols           | tank  | false     | <null>          | false      | <list>       | <dict>      | <dict>      | <dict>        | /mnt/tank/zvols          | <dict>      | <dict>      | <dict>      | <dict>      | <dict>          | <dict>   | <dict>      | <dict> | <dict>      | <dict>        | <dict> | <dict>      | <dict>      | <dict>      | <dict>         | <dict> | <dict>      | <dict>   | <undefined> | <undefined>  | <dict>      | <dict>     | <dict>               | <dict> | <dict>         | <dict>        | <dict>               | <dict>          | <dict>    | <dict>                   | <dict>      | <dict>   | <dict>  | <dict>          | false  |
| tank/zvols/zvol1     | VOLUME     | tank/zvols/zvol1     | tank  | false     | <null>          | false      | <empty list> | <dict>      | <dict>      | <dict>        | <null>                  | <undefined> | <undefined> | <undefined> | <undefined> | <undefined>     | <dict>   | <undefined> | <dict> | <dict>      | <dict>        | <dict> | <undefined> | <undefined> | <dict>      | <dict>         | <dict> | <undefined> | <dict>   | <dict>      | <dict>       | <undefined> | <dict>     | <dict>               | <dict> | <dict>         | <dict>        | <dict>               | <dict>          | <dict>    | <undefined>              | <dict>      | <dict>   | <dict>  | <dict>          | false  |
| tank/minio           | FILESYSTEM | tank/minio           | tank  | false     | <null>          | false      | <list>       | <dict>      | <dict>      | <dict>        | /mnt/tank/minio          | <dict>      | <dict>      | <dict>      | <dict>      | <dict>          | <dict>   | <dict>      | <dict> | <dict>      | <dict>        | <dict> | <dict>      | <dict>      | <dict>      | <dict>         | <dict> | <dict>      | <dict>   | <undefined> | <undefined>  | <dict>      | <dict>     | <dict>               | <dict> | <dict>         | <dict>        | <dict>               | <dict>          | <dict>    | <dict>                   | <dict>      | <dict>   | <dict>  | <dict>          | false  |
| tank/shares          | FILESYSTEM | tank/shares          | tank  | false     | <null>          | false      | <list>       | <dict>      | <dict>      | <dict>        | /mnt/tank/shares         | <dict>      | <dict>      | <dict>      | <dict>      | <dict>          | <dict>   | <dict>      | <dict> | <dict>      | <dict>        | <dict> | <dict>      | <dict>      | <dict>      | <dict>         | <dict> | <dict>      | <dict>   | <undefined> | <undefined>  | <dict>      | <dict>     | <dict>               | <dict> | <dict>         | <dict>        | <dict>               | <dict>          | <dict>    | <dict>                   | <dict>      | <dict>   | <dict>  | <dict>          | false  |
| tank/ix-applications | FILESYSTEM | tank/ix-applications | tank  | false     | <null>          | false      | <empty list> | <undefined> | <undefined> | <dict>        | /mnt/tank/ix-applications | <dict>      | <dict>      | <dict>      | <dict>      | <dict>          | <dict>   | <dict>      | <dict> | <dict>      | <dict>        | <dict> | <dict>      | <dict>      | <dict>      | <dict>         | <dict> | <dict>      | <dict>   | <undefined> | <undefined>  | <dict>      | <dict>     | <dict>               | <dict> | <dict>         | <dict>        | <dict>               | <dict>          | <dict>    | <dict>                   | <dict>      | <dict>   | <dict>  | <dict>          | false  |
+----------------------+------------+----------------------+-------+-----------+-----------------+------------+--------------+-------------+-------------+---------------+-----------------------+---------+-------------+-------------+-------------+-----------------+----------+-------------+--------+-------------+---------------+--------+-------------+-------------+-------------+----------------+--------+-------------+----------+-------------+--------------+-------------+------------+----------------------+--------+----------------+---------------+----------------------+-----------------+-----------+--------------------------+-------------+----------+---------+-----------------+--------+
```
{{< /expand >}}
{{< /expand >}}

### Recommended_Zvol_Blocksize Command
Use the `recommended_zvol_blocksize` command helper method to get recommended size for a new zvol (dataset of type VOLUME).

{{< expand "Using the Recommended_Zvol_Blocksize Command" "v" >}}
#### Description
The `recommended_zvol_blocksize` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Recordsize_Choices Command
Use the `recordsize_choices` command 

{{< expand "Using the Recordsize_Choices Command" "v" >}}
#### Description
The `recordsize_choices` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Set_Quota Command
Use the `set_quota` command has three over-arching types of quotas for ZFS datasets.

{{< expand "Using the Set_Qutoa Command" "v" >}}
#### Description
The `set_quota` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Snapshot_Count Command
Use the `snapshot_count` command to list the snapshot count for the dataset matching the ID entered..

{{< expand "Using the Snapshot_Count Command" "v" >}}
#### Description
The `snapshot_count` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Unlock Command
Use the `unlock` command to unlock the dataset or ZVol matching the ID entered. Use `options` to unlock child datasets.

{{< expand "Using the Unlock Command" "v" >}}
#### Description
The `unlock` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Unlock_Services_Restart_Choices Command
Use the `unlock_services_restart_choices` command to get mapping of services identifiers and labels that can be restarted on dataset unlock.

{{< expand "Using the Unlock_Services_Restart_Choices Command" "v" >}}
#### Description
The `unlock_services_restart_choices` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Update Command
Use the `update` command to update the dataset or ZVol matching the ID entered..

{{< expand "Using the Update Command" "v" >}}
#### Description
The `Update` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### User_Prop Command
Use the `user_prop` command to 

{{< expand "Using the User_Prop Command" "v" >}}
#### Description
The `user_prop` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scaleclistorage" limit="10" title="Related CLI Storage Articles" >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Dataset Articles" >}}