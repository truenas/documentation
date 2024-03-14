---
title: "Dataset"
description: "Provides information about the storage dataset namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 10
aliases:
draft: false
tags:
- datasets
- snapshots
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Dataset Namespace
The **dataset** namespace has one namespace, **user_prop** and 22 commands, and is based on dataset creation and management functions found in the SCALE API and web UI.
It provides access to storage dataset methods through the **dataset** commands.
Do not use the **user_prop** commands.

## Dataset Commands 
The following **dataset** commands allow you to create new and manage existing datasets.

You can enter commands from the main CLI prompt or from the **dataset** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Attachments 
The `attachments` command lists services dependent on the dataset matching the ID entered.

Use the `storage dataset query` or `storage dataset details` command to obtain dataset IDs.

{{< expand "Using the Attachments Command" "v" >}}
#### Description
The `attachments` command has one required property, `id`.
`id` is the ID found in the output of the `storage dataset query` command.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified dataset ID.

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

### Change_Key Command 
Use the `change_key` command to change the encryption key properties for the dataset matching the ID entered.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- commentint out until I can get the pool_attach properly syntax to work
{{< expand "Using the Change_key Command" "v" >}}
#### Description
The `change_key` command has two required properties, `id` and `change_key_options`.
`id` is the ID for the dataset found in the output of the `storage dataset query` command.
`change_key_options` has four properties. See **Change_Key_Options Properties** below for details.
Enter the `id` property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a  .

{{< expand "Change_Key_Options Properties" "v" >}}
{{< truetable >}}
test syntax:
storage dataset change_key id=tank pool_attach={"generate_key":"false","Key_file":"false","pbkdf2iters":"350000","key":"<i>myHexKeyString</i>"}

Enter the `change_key_options` the optional property arguments inside the curly brackets `{}` and where the properties and values are double-quoted and separated by the `:` delimiter and each argument separated with a comma. 
If setting key encryption include the key-encryption arguments.

| Property | Required | Description | Syntax Example |
|----------|-------------|----------------|
| `generate_key` | No | Enter `true` to have the system generate a hex-encoded key. Default is `false` to use `key` to enter a hex-encoded key of your choice. | `"generate_key":"true"` or `"generate_key":"false` |
| `key_file` | No | Enter `true` to use a key file for key encryptiont. Default is `false` if not using an uploaded key file. | `"key_file":"true"` or `"key_file":"false` | 
| `pbkdf2iters` | No | Enter the number of password-based key deviations function 2 (PBKDF2) iterations to use for reducing vulnerability to brute-fore attacks. Enter a value greater than 100000 or use the default value `350000`. | <code>"pbkdf2iters":"<i>350000</i>"</code> |
| `passphrase` | No | enter the double-quoted password of your choice. Must be specified to use password encryption. Default value is `Null` or use any string of alpha-numeric and special characters of your choice. | <code>"passphrase":"<i>myPassPhrase</i>"</code> |
| `key` | No | Enter the hex-encoded key of your choice. Default is `Null`. | <code>"key":"<i>myHexKeyString</i>"</code> |  
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage dataset change_key  </code>

Where *4* is .

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}} -->

### Checksum_Choices Command 
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

### Compression_Choices Command 
The `compression_choices` command lists compression alogrithms supported by ZFS. 

{{< expand "Using the Compression_Choices Command" "v" >}}
#### Description
The `commpression_choices` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table listing compression algorithms supported by ZFS.

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

### Create Command 
Use the `Create` command to create datasets or zvols.

{{< expand "Using the Create Command" "v" >}}
#### Description
The `create` command has one required property and 38 optional properties. 
Of these, set `share_type` and `casesensitivity` as these cannot be changed after creating a new dataset.
See **Create Properties** below for details.
The `create` command is a complex command. 
Enter the `storage dataset create --` command string to open the interactive argument editor/text user interface (TUI) and make configuring a dataset or zvol easier. 
Enter the CLI command string then press <kbd>Enter</kbd>.
The command creates a new dataset and returns an empty line.

{{< expand "Create Properties" "v" >}}
{{< truetable >}}
Enter property arguments using the `=` delimiter to separate property and value. Double-quote values that include special characters.
Property arguments enclosed in curly backets `{}` have double-quoted properties and values separated by the `:` delimiter, and separate multiple property arguments with a comma. For example:

`create name="tank/tank-e" type=FILESYSTEM share_type=GENERIC inherit_encryption=false encryption=true encryption_options= {"pbkdf2iters":"350000","passphrase":"abcd1234"}`

| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `name` | Yes | Enter the full name for the dataset as *pool/dataset*. Enter the value in double-quote. | <code>name="<i>tank/dataset</i>"</code> |
| `type` | No | Enter `FILESYSTEM` to create a dataset or `VOLUME` to create a zvol. Include the `volsize` property argument if using `VOLUME`.  | `type=FILESYSTEM` or `type=VOLUME` |
| `volsize` | Yes* | *Required if setting `type=VOLUME`. Enter the value which is a multiple of the block size. Options are `512`, `512B`, `1K`, `2K`, `4K`, `8K`, `16K`, `32K`, `64K`, `128K`. | <code>volsize=<i>8k</i></code> |
| `volblocksize` | No | Only used when setting `type=VOLUME`. Enter the block size for the zvol. For example, 10GiB. Use the [`recommended_zvol_blocksize` command](#recommended_zvol_blocksize-command) to get a blocksize value. | <code>volblocksize=<i>10GiB</i></code> |
| `sparse` | No | Only used when setting `type=VOLUME`. Enter `true` to or `false` | `sparse=true` or `sparse=false` |
| `force_size` | No | Only used when setting `type=VOLUME`. The system restricts creating a ZVol that brings a pool to over 80% capacity. Enter `true` to force creating of a zvol in this case (not recommended). Default is `false`. | `force_size=false` or `force_size=true` |
| `comments` | No | Enter comments using upper and lowercase alphanumeric and special characters as a description about this dataset. Enclose value in double quotes. |  |
| `sync` | No | Enter the option for the desired sync setting. <br><li>`STANDARD` to use the standard sync settings requested by the client software. <br><li>`ALWAYS` to wait for data write to complete. <br><li>`DISABLED` to never wait for writes to complete.</li>| <code>comments="<i>my comments</i>"</code> |
| `snapdev` | No | Enter the option to set whether the volume snapshot devices under /dev/zvol/*poolname* are `HIDDEN` or `VISIBLE`. Default inherits `HIDDEN`. | `snapdev=HIDDEN` or `snapdev=VISIBLE` |
| `compression` | No | Enter the compression level to use from the available ZFS supported options. Use `storage dataset compression_choices` to list ZFS supported compression algorithms. Enter the value in double quotes. | <code>compression=<i>OFF</></code> |
| `atime` | No | Set the access time for the dataset. Options are: <br><li>`ON` updates the access time for files when they are read. <br><li> `OFF` disables creating log traffic when reading files to maximize performance.</li> | `atime=ON` or `atime=OFF` |
| `exec` | No | Enter `ON` to allow executing processes from within the dataset or `OFF` to prevent executing processes from within the dataset. We recommend setting this to `ON`. | `exec=ON` or `exec=OFF` | 
| `managedby` | No | Not used. Query command includes a reference the router/switch by default. | N/A | 
| `quota` | No | Enter a value to define the maximum overall allowed space for the dataset and the dataset descendants. Default `0` disables quotas. Default is `Null`. |  |
| `quota_warning` | No | Enter a percentage value that when reached or exceeded generates a warning alert or enter `Null`. |  |
| `quota_crtical` | No |  Enter a percentage value that when reached or exceeded generates a critical alert or enter `Null`. |  | 
| `refquota` | No | Enter a value to define the maximum allow space for just the dataset. Default `0` disables quotas. Default is `Null`. |  |
| `rfquota_warning` | No | Enter a percentage value that when reached or exceeded generates a warning alert or enter `Null`. |  |
| `refquota_crtical` | No | Enter a percentage value that when reached or exceeded generates a critical alert or enter `Null`. |  | 
| `reservation` | No | Enter a value to reserve additional space for this dataset and the dataset descendants. `0` is unlimited. |  |
| `refreservation` | No | Enter a value to reserve additional space for just this dataset. `0` is unlimited. |  | 
| `special_small_block_size` | No | Enter the threshold block size for including small file blocks into the special allocation class [fusion pool]({{< relref "FusionPoolsScale.md" >}}). Blocks smaller than or equal to this value are assigned to to the special allocation class while greater blocks are assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. Default is `0` which means no small file blocks are allocated in the special class. Add a special class VDev to the pool before setting this value. | <code>special_small_block_size=<i>0</i></code> |
| `copies` | No | Enter a number for allowed duplicates of ZFS user data stored on this dataset.  | <code>copies=<i>2</i></code> |
| `snapdir` | No | Enter the visibility of the .zfs directory on the dataset as `HIDDEN` or `VISIBLE`. | `snapdir=HIDDEN` or `snapdir=VISIBLE` |
| `deduplication` | No | Enter the option to transparently reuse a single copy of duplicated data to save space. Options are: <br><li>`ON` to use deduplication. <br><li>`VERIFY` to do a byte-to-byte comparison when two blocks have the same signature to verify the block contents are identical. <br><li>`OFF` to not use deduplication</li> Deduplicating data is a one-way process. You cannot undo deduplicated data! | <code>deduplication=<i>OFF</i></code> |
| `checksum` | No | Enter the checksum to use from the options: `ON`, `OFF`, `FLETCHER2`, `FLETCHER4`, `SHA256`, `SHA512`, `SKEIN`, or `EDONR`. | <code>checksum=<i>OFF</i></code> |
| `readonly` | No | Enter `ON`to make the dataset readonly, or `OFF` to allow write access. | <code>readonly=<i>ON</i></code> |
| `recordsize` | No | Set the logical block size in the dataset matching the fixed size of data, as in a database. This can result in better performance. Use the [`recordsize_choices` command](#recordsize_choices-command) to return a list of options to use with this command. | <code>recordsize=<i>Null</i></code> |
| `casesensitivity` | No | Enter `SENSITIVE` to assume file names are case sensitive or `INSENSITIVE` for mixed case or case-insensitivity. You cannot change case sensitivity after saving the dataset. Default is `INSENSITIVE`. | <code>casesensitivity=<i>INSENSITIVE</i></code> |
| `aclmode` | No | Enter the option that determines how chmod behaves when adjusting file. See [zfs(8)](https://linux.die.net/man/8/zfs) `aclmod` property for more information. Options are: <br><li>`PASSTHROUGH` only updates ACL entries that are related to the file or directory mode. <br><li>`RESTRICTED` does not allow chmod to make changes to files or directories with a non-trivial ACL. A trivial ACL can be fully expressed as a file mode without losing any access rules. Use this to optimize a dataset for SMB sharing. <br><li>`DISCARD` </li> `acl_type` determines the acl_mode options available in the UI. | <code>aclmodes=<i>PASSTHROUGH</i></code> |
| `acltype` | No | `acltype` is inherited from the parent or root dataset. Enter the access control type from these options: <br><li>`OFF` specifies neither NFSV4 or POSIX protocols. <br><li>`NFSV4` is used to cleanly migrate Windows-style ACLs across Active Directory domains (or stand-alone servers) that use ACL models richer than POSIX. Use to maintain compatibility with TrueNAS CORE, FreeBSD, or other non-Linux ZFS implementations. <br><li>`POSIX` use when an organization data backup target does not support native NFSV4 ACLs. Linux platforms use POSIX and many backup products that access the server outside the SMB protocol cannot understand or preserve native NFSV4 ACLs. Datasets with `share_type` set to `GENERIC` or `APPS` have POSIX ACL types. </li> | <code>acltype=<i>POSIX</i></code> |
| `share_type` | Yes | Enter the option to define the type of data sharing the dataset uses to optimize the dataset for that sharing protocol. Options are: <br><li>`GENERIC` to use for all datasets except those using SMB shares. <br><li>`SMB` for datasets using SMB shares. <br><li>`APPS` for datasets created to use with applications and to optimize the dataset for use by any application.</li> | <code>share_type=<i>GENERIC</i></code> |
| `xattr` | No | Set `SA` to store extended attributes as System Attributes. This allows storing of tiny xattrs (~100 bytes) with the dnode and storing up to 64k of xattrs in the spill block. This results in fewer IO requests when extended attributes are in use. Set `ON` to store extended attributes in hidden sub directories but this can require multiple lookups when accessing a file.  | <code>xatter=<i>SA</i></code> |
| `encryption_options` | *No | Use to specify the type of encryption, hex-encoded key or passphrase. Enter the property arguments that apply: <br><li>`generate_key`enter `true` to have the system generate a hex-encoded key. Default is `false` to use `key` to enter a hex-encoded key of your choice. <br><li>`key_file` enter `true` to use a key file for key encryptiont. Default is `false` if not using an uploaded key file. <br><li>`pbkdf2iters` enter the number of password-based key deviations function 2 (PBKDF2) iterations to use for reducing vulnerability to brute-fore attacks. Enter a value greater than 100000 or use the default value `350000`. <br><li>`passphrase` enter the double-quoted password of your choice. Must be specified to use password encryption. Default value is `Null` or use any string of alpha-numeric and special characters of your choice. <br><li>`key` enter the hex-encoded key of your choice. Default is `Null`.</li> | <code>encryption_options={"generate_key":"<i>false</>",<wbr>"key":"</i>my_hex_ecoded_string</i>"} |
| `encryption` | No | Enter `true` to encrypt the dataset. Default is `false` if the parent dataset is not encrypted. You must enter `inherit_encryption=false` to change encryption for a child of an unencrypted dataset and if changing from key to passphrase encryption. | `encryption=true` or `encryption=false` |
| `inherit_encryption` | *No | Required if encrypting a dataset that is a child of an unencrypted dataset. Enter `true` to inherit encryption from the parent dataset or `false` to encrypt a dataset that is a child of an unencrypted dataset or changing or if changing from key to passphrase encryption. You cannot create an unencrypted child dataset of an encrypted parent dataset. | `inherit_encryption=true` or `inherit_encryption=false` |
| `user_properties` | No | Do not use. | N/A |
| `create_ancestors` | No | Enter `true` to create ancestors. Default is `false`. | `create_ancestors=true` or `create_ancestors=false` | 
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage dataset create name=<i>pool/dataset_name</i> share_type=<i>GENERIC</i></code>

Where:
* *pool/dataset_name* is the full name (including root/parent) for the dataset.
* *GENERIC* is the share type for the dataset

{{< expand "Command Example" "v" >}}
```
storage dataset create name=tank/apps share_type=GENERIC

```
{{< /expand >}}
{{< /expand >}}

### Delete Command 
Use the `delete` command to delete a dataset or zvol matching the ID entered.

{{< expand "Using the Delete Command" "v" >}}
#### Description
The `delete` command has one required property, `id`, and one optional property, `dataset_delete`.
`id` is the found in the output of the `storage dataset query` command.
Enter the property argument using the `=` delimiter to separate property and double-quoted value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line.

#### Usage
From the CLI prompt, enter:

<code>storage dataset delete id="<i>tank/tank-e3</i>"</code>

Where *tank/tank-e3* is identifier for the dataset.

{{< expand "Command Example" "v" >}}
```
storage dataset delete id="tank/tank-e3"

```
{{< /expand >}}
{{< /expand >}}

### Destroy_Snapshots Command 
Use the `destroy_snapshots` command to destroy snapshots for the dataset matching the ID entered.

Use the `storage snapshot query` command to obtain a list of snapshots on the system.
{{< hint type=info >}}
If the system is performing a snapshot task for the dataset specified, the command returns an error stating the dataset is busy.
{{< /hint >}}
{{< expand "Using the Destroy_Snapshots Command" "v" >}}
#### Description
The `destroy_snapshot` command has two required properties, `name` and `snapshots`.
`name` is the dataset name found in the output of the `storage dataset query` command.
`snapshots` has four optional properties. See **Snapshots Properties** below for details.
Use the default `{}` value to destroy all datasets for the dataset matching the ID entered.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns progress status in percentage validated and then the name of the snapshot.

{{< expand "Snapshots Properties" "v" >}}
{{< truetable >}}
Enter `snapshots` optional property arguments inside the curly brackets `{}`, where the properties and values are double-quoted and separated by the `:` delimiter, and with each argument separated with a comma. 
Use the default value `snapshots={}` without specifying any optional property to destroy all snapshots for the specified dataset.

| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `start` | Enter the start date and time for the snapshot range. | <code>"start":"<i>snapshot_start</i>"</code> |
| `end` | Enter the end date and time for the snapshot range. | <code>"start":"<i>snapshot_send</i>"</code> | 
| `snapshot_spec` | Enter the start and ending date and time range in an object array. | <code>"start":"<i>snapshot_start</i>,"<i>snapshot_end</i>"</code> |
| `snapshot_name` | Enter the name of the snapshot as found in the output of the `storage snapshot query` command. | <code>"snapshot_name":"<i>snapshotname</i>"</code> |  
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage dataset destroy_snapshots name="<i>tank/snapshots</i>" snapshots={}</code>

Where *tank/snapshots* is the name of the dataset.

{{< expand "Command Example" "v" >}}
```
storage dataset destroy_snapshots name="tank/snapshots" snapshots={}
[20%] Initial validation complete...
[100%] Initial validation complete...
tank/snapshots@auto-2023-09-05_08-35
```
{{< /expand >}}
{{< /expand >}}

### Details Command 
Use the `details` command to list all datasets on the system and the services or tasks that might be consuming them.

{{< expand "Using the Details Command" "v" >}}
#### Description
The `details` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with the same information found in the `query` command output and any services consuming the dataset.

#### Usage
From the CLI prompt, enter:

`storage dataset details`

{{< expand "Command Example" "v" >}}
```
storage dataset details
+--------------------------+------------+--------------------------+-------+-----------+-----------------+------------+--------------+----------------+-------------+-------------+---------------+-------------------------------+--------+-------------+--------+-------------+-------------+-------------+----------------+-------------+------------+----------------------+--------+----------------+---------------+-----------------+-----------+-----------------+--------+-------+---------------+----------+-------------------+--------------+--------------+--------------+--------------+--------------+-------------------------+----------------------+-----------------------+-------------------+
| id                       | type       | name                     | pool  | encrypted | encryption_root | key_loaded | children     | snapshot_count | comments    | managedby   | deduplication | mountpoint                    | sync   | compression | origin | quota       | refquota    | reservation | refreservation | volsize     | key_format | encryption_algorithm | used   | usedbychildren | usedbydataset | usedbysnapshots | available | user_properties | locked | atime | casesensitive | readonly | thick_provisioned | nfs_shares   | smb_shares   | iscsi_shares | vms          | apps         | replication_tasks_count | snapshot_tasks_count | cloudsync_tasks_count | rsync_tasks_count |
+--------------------------+------------+--------------------------+-------+-----------+-----------------+------------+--------------+----------------+-------------+-------------+---------------+-------------------------------+--------+-------------+--------+-------------+-------------+-------------+----------------+-------------+------------+----------------------+--------+----------------+---------------+-----------------+-----------+-----------------+--------+-------+---------------+----------+-------------------+--------------+--------------+--------------+--------------+--------------+-------------------------+----------------------+-----------------------+-------------------+
| tank                     | FILESYSTEM | tank                     | tank  | false     | <null>          | false      | <list>       | 0              | <undefined> | <undefined> | <dict>        | /mnt/tank                     | <dict> | <dict>      | <dict> | <dict>      | <dict>      | <dict>      | <dict>         | <undefined> | <dict>     | <dict>               | <dict> | <dict>         | <dict>        | <dict>          | <dict>    | <dict>          | false  | false | true          | false    | false             | <empty list> | <empty list> | <empty list> | <empty list> | <list>       | 0                       | 0                    | 0                     | 0                 |
| tank/zvols               | FILESYSTEM | tank/zvols               | tank  | false     | <null>          | false      | <list>       | 0              | <dict>      | <dict>      | <dict>        | /mnt/tank/zvols               | <dict> | <dict>      | <dict> | <dict>      | <dict>      | <dict>      | <dict>         | <undefined> | <dict>     | <dict>               | <dict> | <dict>         | <dict>        | <dict>          | <dict>    | <dict>          | false  | false | true          | false    | false             | <empty list> | <empty list> | <empty list> | <empty list> | <empty list> | 0                       | 0                    | 0                     | 0                 |
| tank/zvols/zvol1         | VOLUME     | tank/zvols/zvol1         | tank  | false     | <null>          | false      | <empty list> | 0              | <dict>      | <dict>      | <dict>        | <null>                        | <dict> | <dict>      | <dict> | <undefined> | <undefined> | <dict>      | <dict>         | <dict>      | <dict>     | <dict>               | <dict> | <dict>         | <dict>        | <dict>          | <dict>    | <dict>          | false  | true  | true          | false    | true              | <empty list> | <empty list> | <empty list> | <empty list> | <empty list> | 0                       | 0                    | 0                     | 0                 |
| tank/ix-applications     | FILESYSTEM | tank/ix-applications     | tank  | false     | <null>          | false      | <empty list> | 0              | <undefined> | <undefined> | <dict>        | /mnt/tank/ix-applications     | <dict> | <dict>      | <dict> | <dict>      | <dict>      | <dict>      | <dict>         | <undefined> | <dict>     | <dict>               | <dict> | <dict>         | <dict>        | <dict>          | <dict>    | <dict>          | false  | false | true          | false    | false             | <empty list> | <empty list> | <empty list> | <empty list> | <empty list> | 0                       | 0                    | 0                     | 0                 |
+--------------------------+------------+--------------------------+-------+-----------+-----------------+------------+--------------+----------------+-------------+-------------+---------------+-------------------------------+--------+-------------+--------+-------------+-------------+-------------+----------------+-------------+------------+----------------------+--------+----------------+---------------+-----------------+-----------+-----------------+--------+-------+---------------+----------+-------------------+--------------+--------------+--------------+--------------+--------------+-------------------------+----------------------+-----------------------+-------------------+
```
{{< /expand >}}
{{< /expand >}}

### Encryption_Algorithm_Choices Command 
Use the `encryption_alogorithm_choices` command to list encryption alogrithms supported by ZFS.

{{< expand "Using the Encryption_Algorithm_Choices Command" "v" >}}
#### Description
The `encryption_alogorithm_choices` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a list of ZFS-supported encryption alogrithms.

#### Usage
From the CLI prompt, enter:

<code>storage dataset encryption_algorithm_choices</code>

{{< expand "Command Example" "v" >}}
```
storage dataset encryption_algorithm_choices
+-------------+-------------+
| AES-128-CCM | AES-128-CCM |
| AES-192-CCM | AES-192-CCM |
| AES-256-CCM | AES-256-CCM |
| AES-128-GCM | AES-128-GCM |
| AES-192-GCM | AES-192-GCM |
| AES-256-GCM | AES-256-GCM |
+-------------+-------------+
```
{{< /expand >}}
{{< /expand >}}

### Encryption_Summary Command
Use the `encryption_summary` command to retrieve a summary of all encrypted root datasets under the entered ID.

{{< expand "Using the Encryption_Summary Command" "v" >}}
#### Description
The `encryption_summary` command has one required property, `id`.
`id` is the identifier for the dataset found in the output of the `storage dataset query`.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns progress in percentage complete followed by the encryption root datasets under the identifier entered or `(empty list)` if none exist.

#### Usage
From the CLI prompt, enter:

<code>storage dataset encryption_summary id="<i>tank</i>"</code>

Where *tank* is the identifier for the dataset.

{{< expand "Command Example" "v" >}}
```
storage dataset encryption_summary id="tank"
[0%] ...
[100%] ...
+--------------+------------+-------------------------+-----------+--------+--------------+-------------------+
| name         | key_format | key_present_in_database | valid_key | locked | unlock_error | unlock_successful |
+--------------+------------+-------------------------+-----------+--------+--------------+-------------------+
| tank/tank-e2 | PASSPHRASE | false                   | false     | false  | <null>       | true              |
| tank/tank-e  | PASSPHRASE | false                   | false     | false  | <null>       | true              |
+--------------+------------+-------------------------+-----------+--------+--------------+-------------------+
```
{{< /expand >}}
{{< /expand >}}

### Export_Key Command 
Use the `export_key` command to export the encryption key for the dataset matching the ID entered.

Use with `storage dataset encryption_summary` to identify dataset encryption types for datasets on the system.

{{< expand "Using the Export_Key Command" "v" >}}
#### Description
The `export_key` command has one required property, `id`.
`id` is the identifier for the dataset found in the output of the `storage dataset query`.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns the encryption key for the dataset matching the id entered.

#### Usage
From the CLI prompt, enter:

<code>storage dataset export_key id="<i>tank/tank-e</i>"</code>

Where *tank/tank-e2* is the identifier for the dataset.

{{< expand "Command Example" "v" >}}
```
storage dataset export_key id="tank/tank-e"
[0%] ...
[100%] ...
abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234
```
{{< /expand >}}
{{< /expand >}}

### Export_Keys Command 
Use the `export_keys` command to export keys for the ID entered and all children of it stored in the system.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- This command is not working, keep getting a filename.ext error
{{< expand "Using the Export_Keys Command" "v" >}}
#### Description
The `export_key` command has one required property, `id`.
`id` is the identifier for the dataset found in the output of the `storage dataset query`.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns the encryption key for the dataset matching the id entered.

#### Usage
From the CLI prompt, enter:

<code>storage dataset export_key id="<i>tank/tank-e</i>"</code>

Where *tank/tank-e2* is the identifier for the dataset.

{{< expand "Command Example" "v" >}}
```
storage dataset export_key id="tank/tank-e"
[0%] ...
[100%] ...
abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234
```
{{< /expand >}}
{{< /expand >}} -->

### Get_Instance Command 
Use the `get_instance` command to list detials for the dataset matching the ID entered.

{{< expand "Using the Get_Instance Command" "v" >}}
#### Description
The `get_instance` command has one required property, `id`.
`id` is the identifier for the dataset found in the output of the `storage dataset query`.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns the query information for the dataset matching the id entered.

#### Usage
From the CLI prompt, enter:

<code>storage dataset get_instance id="<i>tank/tank2</i>"</code>

Where *tank/tank2* is the id for the dataset.

{{< expand "Command Example" "v" >}}
```
storage dataset get_instance id="tank2"
+--------------------------+--------------+
|                       id | tank2        |
|                     type | FILESYSTEM   |
|                     name | tank2        |
|                     pool | tank2        |
|                encrypted | false        |
|          encryption_root | <null>       |
|               key_loaded | false        |
|                 children | <empty list> |
|            deduplication | <dict>       |
|               mountpoint | /mnt/tank2   |
|                  aclmode | <dict>       |
|                  acltype | <dict>       |
|                    xattr | <dict>       |
|                    atime | <dict>       |
|          casesensitivity | <dict>       |
|                 checksum | <dict>       |
|                     exec | <dict>       |
|                     sync | <dict>       |
|              compression | <dict>       |
|            compressratio | <dict>       |
|                   origin | <dict>       |
|                    quota | <dict>       |
|                 refquota | <dict>       |
|              reservation | <dict>       |
|           refreservation | <dict>       |
|                   copies | <dict>       |
|                  snapdir | <dict>       |
|                 readonly | <dict>       |
|               recordsize | <dict>       |
|               key_format | <dict>       |
|     encryption_algorithm | <dict>       |
|                     used | <dict>       |
|           usedbychildren | <dict>       |
|            usedbydataset | <dict>       |
|     usedbyrefreservation | <dict>       |
|          usedbysnapshots | <dict>       |
|                available | <dict>       |
| special_small_block_size | <dict>       |
|              pbkdf2iters | <dict>       |
|                 creation | <dict>       |
|                  snapdev | <dict>       |
|          user_properties | <dict>       |
|                   locked | false        |
+--------------------------+--------------+
```
{{< /expand >}}
{{< /expand >}}

### Get_Quota Command 
Use the `get_quota` command to return a list of the specified quota_type of quotas on the ZFS dataset `ds`.

{{< expand "Using the Get_Quota Command" "v" >}}
#### Description
The `get_quota` command has two required properties, `id` and `quota_type`.
`id` is the identifier for the dataset found in the output of the `storage dataset query`.
`quota_type` has four options: `USER`, `GROUP`, `DATASET`, or `PROJECT`.
`PROJECT` displays quotas on each user in the specified filesystem, snapshot, or path, and space consumed by the file system. 
If specifying a path, the file system containing that path is used. 
This corresponds to the userused@user, userobjused@user, userquota@user, and userobjquota@user properties.

Enter the property arguments using the `=` delimiter to separate properties and values.
Enter the command string then press <kbd>Enter</kbd>.
The command returns quota type details for the dataset matching the id entered. 
Details include the quota type, ID, name for the dataset, the quota, refquota, and bytes used values. 
If entering `quota_type=PROJECT`, information returned is the quota type and ID entered, the bytes used, and number of user objects.

#### Usage
From the CLI prompt, enter:

<code>storage dataset get_quota ds="<i>tank</i>" quota_type=<i>DATASET</i></code>

Where:
* *tank* is the identifier for the dataset.
* *DATASET* is the quota type to return details on. 

{{< expand "Command Example" "v" >}}
```
storage dataset get_quota ds="tank" quota_type= DATASET
+------------+------+------+-------+----------+-------------+
| quota_type | id   | name | quota | refquota | used_bytes  |
+------------+------+------+-------+----------+-------------+
| DATASET    | tank | tank | 0     | 0        | 26452549632 |
+------------+------+------+-------+----------+-------------+
```
{{< /expand >}}
{{< /expand >}}

### Inherit_Parent_Encryption_Properties Command 

The `inherit_parent_encryption_properties` command allows inheriting parent dataset encryption root disregarding the current encryption settings. 
Use only when the specified dataset ID is an encrypted parent and ID itself is an encryption root (parent to encrypted child datasets).

{{< expand "Using the Inherit_Parent_Encryption_Properties Command" "v" >}}
#### Description
The `inherit_parent_encryption_properties` command has one required property, `id`.
`id` is the identifier for the dataset found in the output of the `storage dataset query`.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>. 
The command returns an empty line.

#### Usage
From the CLI prompt, enter:

<code>storage dataset inherit_parent_encryption_properties id="<i>tank/tank-e/child-k</i>"</code>

Where *tank/tank-e/child-k* specifies the encrypted child dataset that is a root (parent) dataset to other encrypted datasets.

{{< expand "Command Example" "v" >}}
```
storage dataset inherit_parent_encryption_properties id="tank/tank-e/child-k"

```
{{< /expand >}}
{{< /expand >}}

### Lock Command 
Use the `lock` command to lock the dataset matching the ID entered. 

{{< hint type="info" >}}
Only works with datasets using passphrase encryption. Datasets with key encryption return an error.
{{< /hint >}}

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- commenting out, tried all variations on syntax and the TUI, nothing works
{{< expand "Using the Lock Command" "v" >}}
#### Description
The `lock` command has two required properties, `id` and `unlock_options`.
`id` is the identifier for the dataset found in the output of the `storage dataset query`.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns percentage complete status, then `true`.

#### Usage
From the CLI prompt, enter:

<code>storage dataset lock id="<i>tank/tank-e2</i>"</code>

Where *tank/tank-e2* is the identifier for a dataset with passphrase encryption.

{{< expand "Command Example" "v" >}}
```
storage dataset lock id="tank/tank-e2"
[100%] ...
true
```
{{< /expand >}}
{{< /expand >}} -->

### Mountpoint Command 
Use the `mountpoint` command to obtain the mountpoint for the dataset matching the ID entered.

{{< expand "Using the Mountpoint Command" "v" >}}
#### Description
The `mountpoint` command has one required property, `id`, and one optional property, `raise`.
`id` is the identifier for the dataset found in the output of the `storage dataset query`.
`raise` default value is `true`. 
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns the mount path for the dataset identifier entered.

#### Usage
From the CLI prompt, enter:

<code>storage dataset mountpoint id="<i>tank/minio</i>"</code>

Where *tank/minio* is the identifier for the dataset.

{{< expand "Command Example" "v" >}}
```
storage dataset mountpoint dataset="tank/minio"
/mnt/tank/minio
```
{{< /expand >}}
{{< /expand >}}

### Permission Command 
Use the `permission` command to set the owner and group, and other dataset permission options (i.e., recursive, traverse, etc.) for the dataset matching the ID entered. 

The `permissions` command is complex. Use either the UI [Edit ACL screen]({{< relref "EditACLScreens.md" >}}) or the the interactive arguments editor/text user interface (TUI) to configure ACL permissions.

{{< expand "Using the Permissions Command" "v" >}}
#### Description
The `permissions` command has two required properties, `id` and `pool_dataset_permissions`.
See **Pool_Dataset_Permissions Properties** below for details.
`id` is the identifier for the dataset found in the output of the `storage dataset query`.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with user and options for the specified dataset identifier.

{{< expand "Pool_Dataset_Permissions Properties" "v" >}}
Permissions are specified as either a POSIX or NFSV4 acl. This method is a wrapper around filesystem.setperm, filesystem.setacl, and filesystem.chown.

Enter the `pool_dataset_permissions` property arguments inside the curly brackets `{}`, use the `:` delimiter to separate double-quoted properties and values, and separate each argument with a comma and a space. For example:

<code>pool_dataset_permissions={"user":"<i>admin</i>", "group":"<i>admin</i>"}</code>

Enter `pool_dataset_permissions={}` 
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `user` | *Yes | *Must enter `user` but can enter both `user` and `group`. Enter the name if the user (owner) of permissions for the dataset matching the `id` entered. | <code>{"user":"<i>admin</i>"}</code> |
| `group` | No | Enter the name if the group (owner) of permissions for the dataset matching the `id` entered. | <code>{"group":"<i>admin</i>"}</code> |
| `mode` | No | Enter the ACL mode from these options: INHERIT, RESTRICTED, or PASSTHROUGH. If specified filesystem.perm is called. If neither `mode` or `acl` are specified, filesystem.chown is called. | <code>{"mode":"<i>??</i>"}</code> | 
<!-- 
| `acl` | No | Enter the ACL. If specified filesystem.setacl is called. If neither `mode` or `acl` are specified, filesystem.chown is called. | <code>{"acl":"<i>??</i>"}</code>| 
| `options` | No | Enter `true` or `false` for the following options: <br><li>`set_defalult_acl` enter `true` applies a default ACL appropriate for specified dataset. Default ACL is NFS4_RESTRICTED or POSIX_RESTRICTED ACL template builtin with additional entries builtin_users group and builtin_administrators group. See documentation for filesystem.acltemplate for more details. <br><li>`stripacl` enter `true` to (required in order) to apply a POSIX mode to a dataset that has a non-trivial ACL. The effect is to remove existing ACL and replace with specified mode. <br><li>`recursive` enter `true` to apply permissions recursively to dataset (all files and directories are impacted). <br><li>`traverse` enter `true` to permit recursive jobs to traverse file system boundaries (child datasets). </li> |  | -->
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage dataset permission id="tank/tank-e" pool_dataset_permission={"user":"<i>admin</i>"}}</code>

Where:
* *tank/tank-e* is the identifier for the dataset.
* *admin* is the user owner for the dataset permissions.

{{< expand "Command Example" "v" >}}
```
storage dataset permission id="tank/tank-e" pool_dataset_permission={"user":"admin"}
[100%] ...
+---------+--------+
|    user | admin  |
| options | <dict> |
+---------+--------+
```
{{< /expand >}}
{{< /expand >}}

### Processes Command 
Use the `processes` command lists the processes using the dataset matching the ID entered.

{{< expand "Using the Processes Command" "v" >}}
#### Description
The `processes` command has one required property, `id`.
`id` is the identifier for the dataset found in the output of the `storage dataset query`.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns `(empty list)` if no processes are using the dataset matching the `id` entered.

#### Usage
From the CLI prompt, enter:

<code>storage dataset processes id="<i>tank/ix-applications</i>"</code>

Where *tank/ix-applications* is the identifier for the dataset.

{{< expand "Command Example" "v" >}}
```
storage dataset processes id="tank/ix-applications"
(empty list)
```
{{< /expand >}}
{{< /expand >}}

### Promote Command 
Use the `promote` command to promote a the cloned dataset matching the ID entered.

Use the `storage snapshot query` command to list snapshots on the system.

{{< expand "Using the Promote Command" "v" >}}
#### Description
The `promote` command has one required property, `id`.
`id` is the identifier for the dataset found in the output of the `storage dataset query`.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line.

#### Usage
From the CLI prompt, enter:

<code>storage dataset promote id="<i>tank/minio-miniosnaps-clone</i>"</code>

Where *tank/minio-miniosnaps-clone* is the is the identifier for the dataset.

{{< expand "Command Example" "v" >}}
```
storage dataset promote id="tank/minio-miniosnaps-clone"

```
{{< /expand >}}
{{< /expand >}}

### Query Command 
Use the `query` command to list all configured datasets, enter `storage dataset query`. 
Information provided includes id (name), type, name, pool encryption settings, child datasets, comments, ACL mode and type, checksum, compression settings, quota settings, and other settings found on the Dataset add and edit screens in the UI. 
To include the services consuming the dataset use the `storage dataset details` command.

{{< expand "Using the Query Command" "v" >}}
#### Description
The `query` command does not require entering a property argument.
Enter with `id` or any other option to refine the output to the information requested
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
+----------------------+------------+----------------------+-------+-----------+-----------------+------------+--------------+-------------+-------------+---------------+-----------------------+---------+-------------+-------------+-------------+-----------------+----------+-------------+--------+-------------+---------------+--------+-------------+-------------+-------------+----------------+--------+-------------+----------+-------------+--------------+-------------+------------+----------------------+--------+----------------+---------------+----------------------+-----------------+-----------+--------------------------+-------------+----------+---------+-----------------+--------+
```
{{< /expand >}}
{{< /expand >}}

### Recommended_Zvol_Blocksize Command 
The `recommended_zvol_blocksize` command is a helper method to get recommended size for a new zvol (dataset of type VOLUME).

Use when creating a zvol using the `storage dataset create` command  `volblocksize` property argument to enter a blocksize.

{{< expand "Using the Recommended_Zvol_Blocksize Command" "v" >}}
#### Description
The `recommended_zvol_blocksize` command has one required property, `pool`.
`pool` is the name of the pool found in the output of the `storage pool query` or `storage dataset query id` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a blocksize recommendation.

#### Usage
From the CLI prompt, enter:

<code>storage dataset recommended_zvol_blocksize pool="<i>tank</i>"</code>

Where *tank* is the name of the pool.

{{< expand "Command Example" "v" >}}
```
storage dataset recommended_zvol_blocksize pool="tank"
16K
```
{{< /expand >}}
{{< /expand >}}

### Recordsize_Choices Command 
The `recordsize_choices` command lists record size options to use with the 

{{< expand "Using the Recordsize_Choices Command" "v" >}}
#### Description
The `recordsize_choices` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a list of record sizes.

#### Usage
From the CLI prompt, enter:

<code>storage dataset recordsize_choices</code>

{{< expand "Command Example" "v" >}}
```
storage dataset recordsize_choices
512
512B
1K
2K
4K
8K
16K
32K
64K
128K
256K
512K
1M
2M
4M
8M
16M
```
{{< /expand >}}
{{< /expand >}}

### Set_Quota Command 
Use the `set_quota` command to set quotas for the dataset matching the identifier specified.

There are three over-arching types of quotas for ZFS datasets:
* Dataset quotas and refquotas.  
  If specifying a `DATASET` quota type, then the command acts as a wrapper for pool.dataset.update.
* User and group quotas. 
  These limit the amount of disk space consumed by files that are owned by the specified users or groups. 
  If specifying object quota types is specified, then the quota limits the number of objects the specified user or group can own. 
* Project quotas. 
  These limit the amount of disk space consumed by files that are owned by the specified project. 
  Project quotas are not yet implemented.

This command allows users to set multiple quotas simultaneously by submitting a list of quotas. The list can contain all supported quota types.

Use the `account user query` command or the UI to obtain the UID for the user entered into the command string.

{{< expand "Using the Set_Qutoa Command" "v" >}}
#### Description
The `set_quota` command has two required properties, `ds` and `quotas`.
`ds` is the name of the target ZFS dataset found in the output of the `storage dataset query`.
See **Quota Properties** below for details on entering quota properties.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line.

{{< expand "Quotas Properties" "v" >}}
{{< truetable >}}
`quotas` specifies three required properties to apply to dataset. 
Enter property arguments inside curly brackets `{}`, using the `:` to separate double-quoted property and values, and separating with a comma and space. The `quota_value` property value does not require double quotes.
Enter the entire string inside square brackets `[]`. For example:

<code>quotas=[{"quota_type": "USER", "id": "<i>3000</i>", "quota_value": 0}]</code>

| Property | Description | 
|----------|-------------|
| `quota_type` | Enter the type of quota to apply to the dataset. Options are: <br><li>`USER` <br><li>`USEROBJ` limits the number of objects consumed by the specified user or group. <br><li>GROUP  <br><li>GROUPOBJ limits the number of objects consumed by the specified user or group. <br><li>DATASET </li> |
| `id` | Enter the uid, gid, or name to apply the quota to. If quota_type is `DATASET`, then `id` must be either `QUOTA` or `REFQUOTA`. Only the root user can specify `0` as the `id` value. |
| `quota_value` | the quota size in bytes. Setting a value of `0` removes the user or group quota. |  
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage dataset set_quota ds="tank/zvols" quotas= [{"quota_type": "<i>USER</i>", "id": "<i>3000</i>", "quota_value": <i>0</i>}] </code>

Where:
* *USER* is the quota type.
* *3000* is the UID for the user.
* *0* is the quota value.

{{< expand "Command Example" "v" >}}
```
storage dataset set_quota ds="tank/shares" quotas= [{"quota_type": "USER", "id": "3000", "quota_value": 0}]

```
{{< /expand >}}
{{< /expand >}}

### Snapshot_Count Command 
The `snapshot_count` command lists the snapshot count for the dataset matching the name entered.

{{< expand "Using the Snapshot_Count Command" "v" >}}
#### Description
The `snapshot_count` command has one required property, `dataset`.
`dataset` is the name of the dataset found in the output of the `storage dataset query`.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns the number of snapshots for the dataset specified.

#### Usage
From the CLI prompt, enter:

<code> storage dataset snapshot_count dataset="<i>tank/snapshots</i>"</code>

Where *tank/snapshots* is full name of the dataset.

{{< expand "Command Example" "v" >}}
```
 storage dataset snapshot_count dataset="tank/snapshots"
1
```
{{< /expand >}}
{{< /expand >}}

### Unlock Command 
Use the `unlock` command to unlock the dataset or zvol matching the ID entered. 

This command only works with datasets locked with a password.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}

<!-- Commenting out until I can get this command to work
If the dataset is not encrypted an exception is raised. One exception: when id is a root dataset and unlock_options.recursive is specified, encryption validation is not be performed for id. This allow unlocking encrypted children for the entire pool id.
There are two ways to supply the key(s)/passphrase(s) for unlocking a dataset:
Upload a json file which contains encrypted dataset keys (read from the input pipe if unlock_options.key_file is true). The format is the one that is used for exporting encrypted dataset keys (pool.export_keys).
Specify a key or a passphrase for each unlocked dataset using unlock_options.datasets.
If unlock_options.datasets.{i}.recursive is true, a key or a passphrase is applied to all the encrypted children of a dataset.
unlock_options.toggle_attachments controls whether attachments should be put in action after unlocking dataset(s). Toggling attachments can lead to service interruption when daemons configurations are reloaded (this should not happen, and if this happens it should be considered a bug). As TrueNAS does not have a state for resources that should be unlocked but are still locked, disabling this option will put the system into an inconsistent state so it should really never be disabled.
In some cases it's possible that the provided key/passphrase is valid but the path where the dataset is supposed to be mounted after being unlocked already exists and is not empty. In this case, unlock operation would fail. override by setting unlock_options.datasets.X.force boolean flag or by setting unlock_options.force flag. When any of these flags are set, system will rename the existing directory/file path where the dataset should be mounted resulting in successful unlock of the dataset.

{{< expand "Using the Unlock Command" "v" >}}
#### Description
The `unlock` command has two required properties, `id` and `unlock_options`.
`id` is the identifier for the dataset found in the output of the `storage dataset query`. 
`unlock_options` has five properties.
See **Unlock_Options** below for details.
Use `options` to unlock child datasets.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a .

{{< expand "Unlock_Options Properties" "v" >}}
{{< truetable >}}
Enter the `datasets` property arguments inside curly brackets `{}`, using the `:` to separate double-quoted property and values, and separating with a comma and space. 
For example:

<code>datasets={"force": "true", "name": "<i>datasetname</i>", "passphrase": "<i>datasetpassphrase</i>", "recursive":"<i>true</i>"}</code>

storage dataset unlock id="tank/tank-e2"  unlock_options={["datasets:{"passphrase": "abcd1234"}]}
Expected end of text, found 'u'
 id="tank/tank-e2"  unlock_options={["datasets:{"passphrase": "abcd1234"}]}

| Property | Description | 
|----------|-------------|
| `force` | Enter `true` to force unlocking the dataset. |
| `key_file` | Enter `true` if using a key file to unlock the dataset. |
| `recursive` | Enter `true` to use the password entered to unlock the specified dataset and all child datasets. |  
| `toggle_attachments` | Enter `true` toggle services dependent on the dataset matching the ID entered on after unlocking the dataset. |
| `datasets` | Enter the object array properties that apply: <br><li>`force` enter `true` to force unlocking the dataset matching the `name` specified. <br><li>`name` enter the name of the dataset to unlock. <br><li>`key` does not apply. Only datasets locked with a passphrase can be unlocked. <br><li>`passphrase` enter the double-quoted passphrase string. <br><li>`recursive` enter `true` to apply the password to, and unlock child datasets. </li>
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage dataset   </code>

Where * * is the 

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}} -->

### Unlock_Services_Restart_Choices Command 
Use the `unlock_services_restart_choices` command to get mapping of services identifiers and labels that can be restarted on dataset unlock.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- command fails commenting out until it works
{{< expand "Using the Unlock_Services_Restart_Choices Command" "v" >}}
#### Description
The `unlock_services_restart_choices` command has one required property, `dataset`.
`dataset` is the dataset name found in the output of the `storage dataset query`.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns ???.

#### Usage
From the CLI prompt, enter:

<code>storage dataset unlock_services_restart_choices dataset="<i>tank/tank-e2</i>"</code>

Where *tank/tank-e2* is the name of the dataset.

{{< expand "Command Example" "v" >}}
```
storage dataset unlock_services_restart_choices dataset="tank/tank-e2"
Error: TypeError("'NoneType' object is not iterable")
```
{{< /expand >}}
{{< /expand >}} -->

### Update Command done
Use the `update` command to update settings for the dataset or zvol matching the ID entered.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `Update` command has one required property, `id`.
`id` is the identifier for the dataset found in the output of the `storage dataset query`.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line.

{{< expand "Update Properties" "v" >}}
{{< truetable >}}
Enter property arguments using the `=` delimiter to separate property and value. Double-quote values that include special characters.
Property arguments enclosed in curly backets `{}` have double-quoted properties and values separated by the `:` delimiter, and separate multiple property arguments with a comma. For example:

`update id="tank/tank-e" sync=ALWAYS`

| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `volsize` | *Required if setting `type=VOLUME`. Enter the value which is a multiple of the block size. Options are `512`, `512B`, `1K`, `2K`, `4K`, `8K`, `16K`, `32K`, `64K`, `128K`. | <code>volsize=<i>8k</i></code> |
| `force_size` | Only used when setting `type=VOLUME`. The system restricts creating a zvol that brings a pool to over 80% capacity. Enter `true` to force creating of a zvol in this case (not recommended). Default is `false`. | `force_size=false` or `force_size=true` |
| `comments` | Enter comments using upper and lowercase alphanumeric and special characters as a description about this dataset. Enclose value in double quotes. |  |
| `sync` | Enter the option for the desired sync setting. <br><li>`STANDARD` to use the standard sync settings requested by the client software. <br><li>`ALWAYS` to wait for data write to complete. <br><li>`DISABLED` to never wait for writes to complete.</li>| <code>comments="<i>my comments</i>"</code> |
| `snapdev` | Enter the option to set whether the volume snapshot devices under /dev/zvol/*poolname* are `HIDDEN` or `VISIBLE`. Default inherits `HIDDEN`. | `snapdev=HIDDEN` or `snapdev=VISIBLE` |
| `compression` | Enter the compression level to use from the available ZFS supported options. Use `storage dataset compression_choices` to list ZFS supported compression algorithms. Enter the value in double quotes. | <code>compression=<i>OFF</></code> |
| `atime` | Set the access time for the dataset. Options are: <br><li>`ON` updates the access time for files when they are read. <br><li> `OFF` disables creating log traffic when reading files to maximize performance.</li> | `atime=ON` or `atime=OFF` |
| `exec` | Enter `ON` to allow executing processes from within the dataset or `OFF` to prevent executing processes from within the dataset. We recommend setting this to `ON`. | `exec=ON` or `exec=OFF` | 
| `managedby` | Not used. Query command includes a reference the router/switch by default. | N/A | 
| `quota` | Enter a value to define the maximum overall allowed space for the dataset and the dataset descendants. Default `0` disables quotas. Default is `Null`. | <code>quota=<i>Null</i></code> |
| `quota_warning` | Enter a percentage value that when reached or exceeded generates a warning alert or enter `Null`. | <code>quota_warning=<i>Null</i></code> |
| `quota_crtical` | Enter a percentage value that when reached or exceeded generates a critical alert or enter `Null`. | <code>quota_critical=<i>Null</i></code> | 
| `refquota` | Enter a value to define the maximum allow space for just the dataset. Default `0` disables quotas. Default is `Null`. | <code>refquota=<i>Null</i></code> |
| `rfquota_warning` | Enter a percentage value that when reached or exceeded generates a warning alert or enter `Null`. | <code>refquota_warning=<i>Null</i></code> |
| `refquota_crtical` | Enter a percentage value that when reached or exceeded generates a critical alert or enter `Null`. | <code>refquota_critical=<i>Null</i></code> | 
| `reservation` | Enter a value to reserve additional space for this dataset and the dataset descendants. `0` is unlimited. | <code>reservation=<i>0</i></code> |
| `refreservation` | Enter a value to reserve additional space for just this dataset. `0` is unlimited. | <code>refreservation=<i>0</i></code> | 
| `special_small_block_size` | Enter the threshold block size for including small file blocks into the special allocation class [fusion pool]({{< relref "FusionPoolsScale.md" >}}). Blocks smaller than or equal to this value are assigned to to the special allocation class while greater blocks are assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. Default is `0` which means no small file blocks are allocated in the special class. Add a special class VDev to the pool before setting this value. | <code>special_small_block_size=<i>0</i></code> |
| `copies` | Enter a number for allowed duplicates of ZFS user data stored on this dataset.  | <code>copies=<i>2</i></code> |
| `snapdir`  Enter the visibility of the .zfs directory on the dataset as `HIDDEN` or `VISIBLE`. | `snapdir=HIDDEN` or `snapdir=VISIBLE` |
| `deduplication` | Enter the option to transparently reuse a single copy of duplicated data to save space. Options are: <br><li>`ON` to use deduplication. <br><li>`VERIFY` to do a byte-to-byte comparison when two blocks have the same signature to verify the block contents are identical. <br><li>`OFF` to not use deduplication</li> Deduplicating data is a one-way process. You cannot undo deduplicated data! | <code>deduplication=<i>OFF</i></code> |
| `checksum` | Enter the checksum to use from the options: `ON`, `OFF`, `FLETCHER2`, `FLETCHER4`, `SHA256`, `SHA512`, `SKEIN`, or `EDONR`. | <code>checksum=<i>OFF</i></code> |
| `readonly` | Enter `ON`to make the dataset readonly, or `OFF` to allow write access. | <code>readonly=<i>ON</i></code> |
| `recordsize` | Set the logical block size in the dataset matching the fixed size of data, as in a database. This can result in better performance. Use the 
| `aclmode` | Enter the option that determines how chmod behaves when adjusting file. See [zfs(8)](https://linux.die.net/man/8/zfs) `aclmod` property for more information. Options are: <br><li>`PASSTHROUGH` only updates ACL entries that are related to the file or directory mode. <br><li>`RESTRICTED` does not allow chmod to make changes to files or directories with a non-trivial ACL. A trivial ACL can be fully expressed as a file mode without losing any access rules. Use this to optimize a dataset for SMB sharing. <br><li>`DISCARD` </li> `acl_type` determines the acl_mode options available in the UI. | <code>aclmodes=<i>PASSTHROUGH</i></code> |
| `acltype` | `acltype` is inherited from the parent or root dataset. Enter the access control type from these options: <br><li>`OFF` specifies neither NFSV4 or POSIX protocols. <br><li>`NFSV4` is used to cleanly migrate Windows-style ACLs across Active Directory domains (or stand-alone servers) that use ACL models richer than POSIX. Use to maintain compatibility with TrueNAS CORE, FreeBSD, or other non-Linux ZFS implementations. <br><li>`POSIX` use when an organization data backup target does not support native NFSV4 ACLs. Linux platforms use POSIX and many backup products that access the server outside the SMB protocol cannot understand or preserve native NFSV4 ACLs. Datasets with `share_type` set to `GENERIC` or `APPS` have POSIX ACL types. </li> | <code>acltype=<i>POSIX</i></code> |
| `xattr` | Set `SA` to store extended attributes as System Attributes. This allows storing of tiny xattrs (~100 bytes) with the dnode and storing up to 64k of xattrs in the spill block. This results in fewer IO requests when extended attributes are in use. Set `ON` to store extended attributes in hidden sub directories but this can require multiple lookups when accessing a file.  | <code>xatter=<i>SA</i></code> |
| `user_properties` | Do not use. | N/A |
| `create_ancestors` | Enter `true` to create ancestors. Default is `false`. | `create_ancestors=true` or `create_ancestors=false` |
| `user_properties_update` | Do not use. | N/A | 
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage dataset update id="<i>tank/shares</i>" <i>property</i>=<i>value</i></code>

Where:
* *tank/shares* is the identifier for the dataset.
* *property* is a property option and *value* is the new value for this property.

{{< expand "Command Example" "v" >}}
```
storage dataset update id="tank/zvols" sync= ALWAYS

```
{{< /expand >}}
{{< /expand >}}
