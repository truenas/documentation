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

### Attachments
The `attachments` command lists services dependent on the dataset matching the ID entered.

Use the `storage dataset query` or `storage dataset details` command to obtian dataset IDs.

{{< expand "Using the Attachments Command" "v" >}}
#### Description
The `attachments` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage pool attachments id=<i> </i></code>

Where * * is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```
storage dataset attachments id= 
+---------------+------------+--------------------------+
| type          | service    | attachments              |
+---------------+------------+--------------------------+
| snapshot Task | <null>     | tank/minio               |
|               |            | tank/minio               |
|               |            | tank/snapshots           |
| NFS Share     | nfs  >     | /mnt/tank/share/nfs      |
|               |            | /mnt/tank/share/nfs/nfs2 |
|               |            | /mnt/tank/share/nfs/nfs3 |
|               |            | /mnt/tank/share/nfs/nf42 |
| Rsync Task    | <null>     | /mnt/tank/minio          |
| Kubernetes    | kubernetes | tank                     |
+---------------+------------+--------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Change_Key Command
Use the `change_key` command to change the encryption key properties for the dataset matching the ID entered.

{{< expand "Using the Change_key Command" "v" >}}
#### Description
The `change_key` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage dataset change_key  </code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Checksum_Choices Command
The `checksum_choices` command lists checksums supported for the ZFS dataset.

{{< expand "Using the Checksum_Choices Command" "v" >}}
#### Description
The `checksum_choices` command has one required property, `id`.
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

### Compression_Choices Command
The `compression_choices` command lists compression alogrithms supported by ZFS. 

{{< expand "Using the Compression_Choices Command" "v" >}}
#### Description
The ` ` command has one required property, `id`.
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

### Create Command
Use the `Create` command to create datasets or ZVols.

{{< expand "Using the Create Command" "v" >}}
#### Description
The `create` command has one required property, `id`.
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

### Query Command
Use the `query` command to list all configured datasets, enter `storage dataset query`.

![TrueNASCLIstoragedatasetquery](/images/SCALE/TrueNASCLIstoragedatasetquery.png "Dataset Query")

Enter `q` to exit the query.
{{< expand "Using the Query Command" "v" >}}
#### Description
The `query` command has one required property, `id`.
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