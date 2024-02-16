---
title: "Snapshot"
description: "Provides information about the storage snapshot namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 45
aliases:
draft: false
tags:
- snapshots
- datasets
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Snapshot Namespace
The **snapshot** namespace has 10 commands, and is based on snapshot creation and management functions found in the SCALE API and web UI.
It provides access to storage snapshot methods through the **snapshot** commands.

## Snapshot Commands 
The following **snapshot** commands allow you to create new snapshots and manage existing snapshots.

You can enter commands from the main CLI prompt or from the snapshot namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Clone Command
The `clone` command clones an existing snapshot to a new dataset. 

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- cannot get the command to work, commenting out until syntax verified and that command works
Use the <code>[query](#query-command)</code> command to locate the snapshot property values this command needs.

{{< expand "Using the Clone Command" "v" >}} 
#### Description  
`clone` has one required property, `snapshot_clone`.
`snapshot_clone` has two required properties and one optional property.
See **Snapshot_Clone Properties** below for more information on these properties.
Enclose the array property argument in curly brackets `{}`. 
Enclose each `snapshot_clone` property argument in the array in `[]`square brackets, with both property and values double-quoted and using the `=` delimiter to separate them. 
Separate multiple property arguments within the `{}` with a comma and space. 
Enter the command string, then press <kbd>Enter</kbd>.
See array example in the **Usage** section below.

`clone` returns true if successful, false if not.
{{< expand "Snapshot_Clone Properties" "v" >}}
{{< truetable >}}
| Property | Description |Syntax Example |
|----------|-------------|---------------| 
| `snapshot` | Enter the ID or name of the snapshot to clone. Enter property and value double-quoted with the `=` delimiter separating property and value. | <code>snapshot=["<i>snapshotname</i>"]</code> |
| `dataset_dst` | Enter the name of the new dataset created from the cloned snapshot. Enter property and value double-quoted with the `=` delimiter separating property and value. | <code>dataset_dst=["<i>destinationdatasetname</i>"]</code> |
| `dataset_properties` | Optional property entered as an array that includes the `snapshot` and `dataset_dst` property arguments. | <code>dataset_properties={["snapshot"="<i>snapshotname</i>"], ["dataset_dst"="<i>destinationdatasetname</i>]}</code> |
{{< /truetable >}}
{{< /expand >}}
#### Usage
From the CLI prompt, enter:

<code>storage snapshot clone snapshot_clone={["snapshot"="<i> </i>"],["dataset_dst"="<i> </i>"]}

{{< expand "Command Example" "v" >}}
```
storage snapshot clone snapshot_clone={}
true
```
{{< /expand >}}
{{< /expand >}} -->

### Create Command 
The `create` command takes a snapshot of a given dataset.  

{{< expand "Using the Create Command" "v" >}} 
#### Description  
The `create` command has one required property, `dataset`, and seven optional properties.
The **Create Command Optional Properties** section below lists the seven optional properties and provides syntax examples. 
`dataset` defines the pool/dataset path for the snapshot you want to create. For example, *tank/minio*.
Enter a property argument using the `=` delimiter to separate property and value. Enter string values in double quotes. 
<!-- comment out this until array syntax is verified
If entering a property argument with multiple values, enclose the double-quoted property and values in square brackets `[]`, and separate each with a comma and space.
Enclose array properties arguments in curly brackets `{}`. 
Enclose each property arguments in the array in `[]`square brackets, with double-quoted property and values and using `=` delimiter to separate them. 
Separate multiple array property arguments within the `{}` with a comma and space. -->
Enter the command string then press <kbd>Enter</kbd>.

`create` returns an empty line. 
Use the `query` command to verify the snapshot was created and to view details on the snapshot.
{{< expand "Create Command Optional Properties" "v" >}}
Use these optional properties when creating a snapshot.
<!-- commenting out until I can verify how this array works
Enter an array of `create` command required and optional properties to define snapshot settings. Enter each property in square brackets `[]` with the property and value double-quoted. Separate each property argument in the array with a comma and space. | <code>={["dataset"="<i>tank/data1</i>"], ["recursive"="<i>r</i>"], [""="<i></i>"]}</code>.  | 
No information on suspend_vms option -->
{{< truetable >}}
| Property | Description |Syntax Example |
|----------|-------------|---------------|
| `name` | Enter a unique snapshot name. Use either `name` or `naming schema` in the same snapshot but not both, one or the other is required. Entering a name does not require using double quotes, but if entering a name string (two words or including a special character), enclose the string in double quotes. | <code>name=<i>miniosnaps</i> or <code>name="<i>rep_snaps</i>" |
| `naming_schema` | Enter a naming schema to generate a name for the snapshot instead of using `name`. Enter a new schema in double-quotes, the default **auto-%Y-%m-%d_%H-%M** schema, or a naming schema from a previously created periodic snapshot task. This allows replication of the snapshot. Naming schema must include the year %Y, month %m,day %d, hour %H, and minute %M. These are replaced with the four-digit year, month, day of month, hour, and minute as defined in strftime(3). For example, snapshots of pool1 entering `naming_schema=customsnap-%Y%m%d.%H%M` have snapshots named *pool1@customsnap-20190315.0527*. Use either `naming_schema` or `name` in the same snapshot but not both. | <code>naming_schema="<i>customsnap-%Y%m%d.%H%M<i/>"</code> |
| `recursive` | Enter `true` to include child datasets of the chosen dataset or `false` to exclude child datasets. | `recursive=true` or `recursive=false` |
| `exclude` | Use with `recursive=true` to enter child datasets to exclude from the snapshot. Enter a child dataset name in double quotes. If entering multiple child datasets, use a comma and space to separate each entry. | <code>exclude="<i>child1<i/>", "<i>child2</i>"</code> |
| `suspend_vms` | This option is a work in progress. |  |
| `vmware_sync` | Enter `true` to synchronize the snapshot with VMWare or `false` if VMWare is not in use or to not synchronize with it. | `vmware_sync=true` or `vmware_sync=false` |
| `properties` | This option is a work in progress. |  |
{{< /truetable >}}
{{< /expand >}}

#### Usage 
From the CLI prompt, enter:

<code>storage snapshot create dataset="<i>tank/minio</i>" name=<i>miniosnaps</i></code>

Where: 
* *tank/minio* is the path to the dataset you want to create a snapshot of.
* *miniosnaps* is the name for the snapshot. 

If using additional optional property arguments, for example, including/excluding child datasets, enter:

<code>storage snapshot create dataset="<i>tank/minio</i>" name=<i>miniosnaps</i> recursive=<i>true</i> exclude="<i>child1</i>", "<i>child3</i>"</code>

Where:
* *tank/minio* is the path to the dataset you want to create a snapshot of.
* *miniosnaps* is the name for the snapshot. 
* *true* for recursive includes child datasets in the snapshot of the specified dataset. *false* excludes child datasets.
* *child1* and *child3* are child datasets excluded from the snapshot.

{{< expand "Command Example" "v" >}}
```
storage snapshot create dataset="tank/minio" name=miniosnaps

```
{{< /expand >}}
{{< /expand >}}

### Delete Command 
The `delete` command deletes a snapshot matching the ID entered. 
Use the <code>[query](#query-command)</code> command to locate the snapshot ID.

{{< expand "Using the Delete Command" "v" >}}
#### Description  
`delete` has one required property, `id`. 
Enter the property argument using the `=` delimiter separating the property and value, and the value double-quoted.
Enter the command string, then press <kbd>Enter</kbd>.

`delete` returns an empty line.

#### Usage 
From the CLI prompt, enter:

<code>storage snapshot delete id="<i>tank/minio@auto-2023-08-17_00-00</i>"</code>

Where *tank/minio@auto-2023-08-17_00-00* is the ID assigned to the share.

{{< expand "Command Example" "v" >}}
```
storage snapshot delete id="tank/minio@auto-2023-08-17_00-00"

```
{{< /expand >}}
{{< /expand >}}

### Get_Instance Command 
The `get_instance` command retrieves information for a snapshot matching the `id` entered in the command string. 
Use to verify properties for the snapshot. 
Use the <code>[query](#query-command)</code> command to find the list of snapshots and the ID for a snapshot.

{{< expand "Using the Get_Instance Command" "v" >}} 
#### Description  
`get_instance` has one required property, `id`. 
Enter the property argument using the `=` delimiter separating the property and value, and the value double-quoted.
Enter the command string, then press <kbd>Enter</kbd>.
`get_instance` returns a table (dictionary) of properties for the ID entered. 
The table (dictionary) includes the properties, pool, id and name, snapshot name, dataset, and the create transfer group.

Use the `query` command to locate the ID number for the share.

#### Usage 
From the CLI prompt, enter:

<code>storage snapshot get_instance id="<i>tank/minio@auto-2023-08-16_00-00</i>"</code>

Where *tank/minio@auto-2023-08-16_00-00* is the ID number for the snapshot.

{{< expand "Command Example" "v" >}}
```
sharing nfs get_instance id="tank/minio@auto-2023-08-16_00-00" 
+---------------+----------------------------------+
|    properties | <dict>                           |
|          pool | tank                             |
|          name | tank/minio@auto-2023-08-16_00-00 |
|          type | SNAPSHOT                         |
| snapshot_name | auto-2023-08-16_00-00            |
|       dataset | tank2/reptests                   |
|            id | tank/minio@auto-2023-08-16_00-00 |
|     createtxg | 27256                            |
+---------------+----------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Hold Command 
The `hold` command holds a snapshot matching the ID entered. Holding a snapshot prevents it from being deleted.
Use the <code>[query](#query-command)</code> command to locate the snapshot ID.
Use the <code>[release](#release-command)</code> command to unlock the snapshot to remove the hold on the snapshot.

{{< expand "Using the Hold Command" "v" >}} 
#### Description  
`hold` has one required property, `id`. 
Enter the property argument using the `=` delimiter separating the property and value, and the value double-quoted.
Enter the command string, then press <kbd>Enter</kbd>.

`hold` returns an empty line.

#### Usage 
From the CLI prompt, enter:

<code>storage snapshot hold id="<i>tank/minio@auto-2023-08-16_00-00</i>"</code>

Where *tank/minio@auto-2023-08-16_00-00* is the ID assigned to the share.

{{< expand "Command Example" "v" >}}
```
storage snapshot hold id="tank/minio@auto-2023-08-16_00-00"

```
{{< /expand >}}
{{< /expand >}}

### Query Command 
The `query` command returns a table (dictionary) of all snapshots on the system. 

{{< expand "Using the Query Command" "v" >}} 
#### Description  
`query` does not require entering property arguments.
Enter the command then press <kbd>Enter</kbd>.
The `query` returns a table (dictionary) of all snapshots on the system. 
Information includes the ID, path, aliases, any comments, networks hosts, read only status, maproot user and group, mapall user and group, security, enabled, and locked status.

#### Usage 
From the CLI prompt, enter:

`storage snapshot query'

{{< expand "Command Example" "v" >}}
```
storage snapshot query
+------------+-------+--------------------------------------+----------+-----------------------+----------------+-------------------------------------+-----------+
| properties | pool  | name                                 | type     | snapshot_name         | dataset        | id                                  | createtxg | 
+------------+-------+--------------------------------------+----------+-----------------------+----------------+-------------------------------------+-----------+
| <dict>     | tank  | tank/minio@auto-2023-08-16_00-00     | SNAPSHOT | auto-2023-08016_00-00 | tank/minio     | tank/minio@auto-2023-08-16_00-00    | 111001    |
| <dict>     | tank2 | tank2/reptest@auto-2023-08-17_00-00  | SNAPSHOT | auto-2023-08-17_00-00 | tank2/reptests | tank2/reptest@auto-2023-08-17_00-00 | 111001    |
+------------+-------+--------------------------------------+----------+-----------------------+----------------+-------------------------------------+-----------+
```
{{< /expand >}}
{{< /expand >}}

### Release Command 
The `release` command removes the hold on a snapshot allowing it to be deleted.
Use the <code>[query](#query-command)</code> command to locate the snapshot ID.

{{< expand "Using the Release Command" "v" >}} 
#### Description  
`release` has one required property, `id`. 
Enter the property argument using the `=` delimiter separating the property and value, and the value double-quoted.
Enter the command string, then press <kbd>Enter</kbd>.

`release` returns an empty line.

#### Usage 
From the CLI prompt, enter:

<code>storage snapshot release id="<i>tank/minio@auto-2023-08-16_00-00</i>"</code>

Where *tank/minio@auto-2023-08-16_00-00* is the ID assigned to the share.

{{< expand "Command Example" "v" >}}
```
storage snapshot release id="tank/minio@auto-2023-08-16_00-00"

```
{{< /expand >}}
{{< /expand >}}

### Remove Command  
The `remove` command removes a snapshot from a given dataset.
Use the <code>[query](#query-command)</code> command to locate the snapshot ID.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- cannot get the command to work, commenting out until syntax verified and that command works
{{< expand "Using the Remove Command" "v" >}} 
#### Description  
`remove` has one required property, `snapshot_remove`. 
`snapshot_remove` has two required properties and one optional property.
See **Snapshot_Remove Properties** below for more information on these properties.
Enclose the array property argument in curly brackets `{}`. 
Enclose each `snapshot_remove` property argument in the array in `[]`square brackets, with both property and values double-quoted and using the `=` delimiter to separate them. 
Separate multiple property arguments within the `{}` with a comma and space. 
Enter the command string, then press <kbd>Enter</kbd>
See array example in the **Usage** section below.

`remove` returns true if successful, false if not.
{{< expand "Snapshot_Remove Properties" "v" >}}
{{< truetable >}}
| Property | Description |Syntax Example |
|---------|-------------|---------------| 
| `dataset` | Enter the dataset name/path. Enclose the property argument in square brackets `[]`. Enter the property and value double-quoted with the `=` delimiter separating them. | <code>["dataset"="<i>datasetname</i>"]</code> |
| `name` | Enter the name of the snapshot. Enclose the property argument in square brackets `[]`. Enter the property and value double-quoted with the `=` delimiter separating them. | <code>["name"=["<i>snapshotname</i>"]</code> |
| `defer_delete` | Optional property to defer removal of the snapshot. Enter `true` to defer removal, `false` to not defer removal of the snapshot. Enclose the property argument in square brackets `[]`. Enter the property and value double-quoted with the `=` delimiter separating them. | <code>["defer_delete"="true"]</code> or<code>["defer_delete"="false"]</code> |
{{< /truetable >}}
{{< /expand >}} 

#### Usage
From the CLI prompt, enter:

<code>storage snapshot clone snapshot_remove={["snapshot"="<i>tank/minio@auto-2023-08-16_00-00</i>"], ["dataset_dst"="<i>tank2/snapshots</i>"]}</code>

Where:
* *tank/minio@auto-2023-08-16_00-00* is the id for the snapshot.
* *tank2/snapshots* is the dataset path/name.

{{< expand "Command Example" "v" >}}
```
storage snapshot clone snapshot_remove={["snapshot"="tank/minio@auto-2023-08-16_00-00"], ["dataset_dst"="tank2/snapshots"]}
true
```
{{< /expand >}}
{{< /expand >}} -->

### Rollback Command  
The `rollback` command replaces data in the specified dataset with the information saved in the snapshot matching the ID entered. 

Use the <code>[query](#query-command)</code> command to locate the snapshot ID.

{{< expand "Using the Rollback Command" "v" >}} 
#### Description  
`rollback` has one required property, `id`. 
Enter the property argument using the `=` delimiter separating the property and value, and the value double-quoted.
Enter the command string, then press <kbd>Enter</kbd>.
`rollback` returns an empty line.
The `options` property is a work in progress.

Use the `query` command to locate the ID number for the snapshot.

#### Usage 
From the CLI prompt, enter:

<code>storage snapshot rollback id=<i>tank/minio@auto-2023-08-16_00-00</i>"</code>

Where *tank/minio@auto-2023-08-16_00-00* is the ID number for the snapshot.

{{< expand "Command Example" "v" >}}
```
storage snapshot rollback id=tank/minio@auto-2023-08-16_00-00

```
{{< /expand >}}
{{< /expand >}}

### Update Command 

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- cannot get the command to work, commenting out this command until I can verify what it does and how to use the `user_properties_update` options: what they are, where to find them or if they even belong in this command.
#### Description  
The `update` has one required property, `id`. 
`id` has one required property, `user_properties_update`. 
Enter the property argument for `id` using `=` to separate the property and double-quoted value, then press <kbd>Enter</kbd> to open the ``[Interactive Argument Editor](#interactive-argument-editor-tui)**. 
Click in the **key** row to enter the required value, then in **Value** to enter that required value, and finally in **remove** to enter either true or false.
Click **Save**, then **Quit**.
`update` returns an empty line.
{{< truetable >}}

| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `key` | what is this?  |  |
| `value` | what is this? |  |
| `remove` | Enter `true` to remove ??? |  |

#### Usage 
To add or change a comment for a share, from the CLI prompt, enter:

<code>storage snapshot update id=<i>tank/minio@auto-2023-08-16_00-00</i> user_properties_update="<i></i>"</code>

Where
* *tank/minio@auto-2023-08-16_00-00* is the ID number assigned to the snapshot to update.
* * * is the comment to add to the share.

{{< expand "Command Example" "v" >}}
```
storage snapshot update id=4 comment="test share"

```
{{< /expand >}}
{{< /expand >}} -->
