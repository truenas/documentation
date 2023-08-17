---
title: "Snapshot"
description: "Provides information about the storage snapshot namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 45
aliases:
draft: false
tags:
- scaleclistorage
- scalesnapshots
- scaledatasets
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

## Snapshot Namespace
The **snapshot** namespace has 10 command(s), and is based on snapshot creation and management functions found in the SCALE API and web UI.
It provides access to storage snapshot methods through the **snapshot** commands.

You can enter commands from the main CLI prompt or from the **snapshot** namespace prompt.

## Snapshot Commands 
The following **snapshot** commands allow you to create new snapshots, and manage existing snapshots.

You can enter commands from the main CLI prompt or from the namespace namespace prompt.

{{< include file="/_includes/CLI/CLIGuideWIP.md" type="page" >}}

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" type="page" >}}

### Clone Command
The `clone` command clones an existing snapshot to a new dataset. 

{{< include file="/_includes/CLI/CLICommandWIP.md" type="page" >}}
<!-- cannot get the command to work, commenting out until syntax verfied and that command works
Use the <code>[query](#query-command)</code> command to locate the snapshot property values this command needs.

{{< expand "Using the Clone Command" "v" >}} 
#### Description  
`clone` has one required property, `snapshot_clone`.
`snapshot_clone` has two required properties and one optional property.
See **Snapshot_Clone Properties** below for more information on these properties.
Enclose the array property argument in curly brackets `{}`. 
Enclose each `snapshot_clone` property argument in the array in `[]`square brackets, with both property and values double-quoted and using the `=` delimiter to separate them. 
Separate multiple property arguments within the `{}` with a comma and space. 
Enter the command string, then press <kbd>Enter</kbd>
See array example in the **Usage** section below.

`clone` returns true if successful, false if not.
{{< expand "Snapshot_Clone Properties" "v" >}}
{{< truetable >}}
| Command | Description |Syntax Example |
|---------|-------------|---------------| 
| `snapshot` | Enter the ID or name of the snapshot to clone. Enter property and value double-qouted with the `=` delimiter sparating property and value. | <code>snapshot=["<i>snapshotname</i>"]</code> |
| `dataset_dst` | Enter the name of the new dataset created from the cloned snapshot. Enter property and value double-qouted with the `=` delimiter sparating property and value. | <code>dataset_dst=["<i>destinationdatasetname</i>"]</code> |
| `dataset_properties` | Optional property entered as an array that includes the `snapshot` and `dataset_dst` property artuments. | <code>dataset_properties={["snapshot"="<i>snapshotname</i>"], ["dataset_dst"="<i>destinationdatasetname</i>]}</code> |
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
{{< /expand >}}
-->
### Create Command 
The `create` command takes a snapshot of a given dataset.  

{{< expand "Using the Create Command" "v" >}} Update section
#### Description  
The `create` has nine properties, x required property, ` `.
The **Create Command Optional Properties** section below lists the xx optional properties. 
Enter a property argument using the `=` delimiter to separate property and value. Enter a string value enclosed in double quotes. 
If entering a property argument with multiple values, enclose the values in square brackets `[]`, use double quotes around each value, and separate each with a comma and space.
Properties arguments for an array use the `{}` curly brackets to enclose property arguments. 
Enclose array property arguments in `[]`square brackets, with both property and values double-quoted and using either the `:` or `=` delimiter to separate them. 
Separate multiple array property arguments within the `{}` with a comma and space. 
Enter the command string, then press <kbd>Enter</kbd>
See array example in the **Usage** section below.

`create` returns and empty line. 
Use the `query` command to verify the snapshot was created and to view details on the snapshot.
{{< expand "Create Command Optional Properties" "v" >}}
{{< truetable >}}
These optional properties are also used with the `update` command.Enter the values enclosed in square brackets `[]`. Enclose each value in double quouts and separate multiple network values with a comma and space.
| Command | Description |Syntax Example |
|---------|-------------|---------------| 
| `dataset` | Enter dataset or zvol. UI is dropdown list of pool/dataset/child names. |  |
| `name` | Unique snapshot name. Cannot be used with a Naming Schema.  Enclose the string in double quotes. | <code>="<i></i>" |
| `naming_schema` | Generate a name for the snapshot using the naming schema from a previously created Periodic Snapshot Task. This allows the snapshot to be replicated. Cannot be used with a Name. UI has dropdown list to enter or select auto-%Y-%m-%d_%H-%M . From Add Periodic Snapshot Task, Snapshot name format string. The default is auto-%Y-%m-%d_%H-%M. Must include the strings %Y, %m, %d, %H, and %M, which are replaced with the four-digit year, month, day of month, hour, and minute as defined in strftime(3). For example, snapshots of pool1 with a Naming Schema of customsnap-%Y%m%d.%H%M have names like pool1@customsnap-20190315.0527.  | <code>=["<i><i/>", "<i></i>"]</code> |
| `recursive` | Set to include child datasets of the chosen dataset.  | <code>=["<i><i/>", "<i></i>"]</code> |
| `exclude` | found in Add periodic snapshot task, Exclude specific child datasets from the snapshot. Use with recursive snapshots. List paths to any child datasets to exclude. Example: pool1/dataset1/child1. A recursive snapshot of pool1/dataset1 will include all child datasets except child1. Separate entries by pressing Enter. | `=true` or `=false` |
| `suspend_vms` | Set to `true` to xxxxx , or `false` to xxxxx . | `=true` or `=false` |
| `vmware_sync` | | <code>=<i></i></code>. |
| `properties` | . | <code>=<i></i></code>.  |
| `snapshot_create` | . | <code>=<i></i></code>.  |
{{< /truetable >}}
{{< /expand >}}

#### Usage 
From the CLI prompt, enter:

<code>sharing nfs create path="<i>/mnt/tank/shares/nfs2</i>"</code>

Where *mnt/tank/shares/nfs2* is the path to the dataset created for the share.

If using optional property arguments, for example, to set networks and read only access, enter:

<code>sharing nfs create path="<i>/mnt/tank/shares/nfs2</i>" networks=<i>10.123.12.1/24 10.123.11.2/23</i> ro=<i>true</i><code>

Where:
* *mnt/tank/shares/nfs2* is the path to the dataset created for the share.
* *10.123.12.1/24 10.123.11.2/23* are the space-separated IP addresses with CIDR notation for each network you allow to connect to the share.
* *true* sets the share to read only, or *false* to allow write access to the share.

{{< expand "Command Example" "v" >}}
```
sharing nfs create path=/mnt/tank/shares/nfs2

```
{{< /expand >}}
{{< /expand >}}

### Delete Command  updated
The `delete` command deletes a snapshot matching the ID entered. 
Use the <code>[query](#query-command)</code> command to locate the snapshot ID.

{{< expand "Using the Delete Command" "v" >}}
#### Description  
`delete`  has one required property, `id`. 
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

### Get_Instance Command updated
The `get_instance` command retrieves information for a snapshot matching the `id` entered in the command string. 
Use to verify properties for the snapshot. 
Use the <code>[query](#query-command)</code> command to find the list of snapshots and the ID for a snapshot.

{{< expand "Using the Get_Instance Command" "v" >}} 
#### Description  
`get_instance` has one required property, `id`. 
Enter the property argument using the `=` delimiter separating the property and value, and the value double-quoted.
Enter the command string, then press <kbd>Enter</kbd>.
`get_instance` returns a table (dictionary) of properties for the ID entered. 
The table (dictionary) includes the properties, pool, id and name, snapshot name, dataset and the create transfer group.

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

### Query Command  updated
The `query` command returns a table (dictionary) of all snapshots on the system. 

{{< expand "Using the Query Command" "v" >}} 
#### Description  
`query` does not require entering property arguments.
Enter the command, then press <kbd>Enter</kbd>.
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

### Release Command updated
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

### Remove Command updated
The `remove` command removes a snapshot from a given dataset.
Use the <code>[query](#query-command)</code> command to locate the snapshot ID.

{{< include file="/_includes/CLI/CLICommandWIP.md" type="page" >}}
<!-- cannot get the command to work, commenting out until syntax verfied and that command works
{{< expand "Using the Remove Command" "v" >}} 
#### Description  
`remove` command has one required property, `snapshot_remove`. 
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
| Command | Description |Syntax Example |
|---------|-------------|---------------| 
| `dataset` | Enter the dataset name/path. Enclose the property argument in square brackets `[]`. Enter the property and value double-qouted with the `=` delimiter sparating them. | <code>["dataset"="<i>datasetname</i>"]</code> |
| `name` | Enter the name of the snapshot. Enclose the property argument in square brackets `[]`. Enter the property and value double-qouted with the `=` delimiter sparating them. | <code>["name"=["<i>snapshotname</i>"]</code> |
| `defer_delete` | Optional property to defer removing the snapshot. Enter `true` to defer removal, `false` to not defer removal of the snapshot. Enclose the property argument in square brackets `[]`. Enter the property and value double-qouted with the `=` delimiter sparating them. | <code>["defer_delete"="true"]</code> or<code>["defer_delete"="false"]</code> |
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

### Rollback Command updated
The `rollback` command replaces data in the specified dataset with the information save in the snapshot matching the ID entered. 

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
The `update` command returns a table (dictionary) of all NFS shares on the system. 
Use to locate the share ID number and other configuration information.

{{< expand "Using the Update Command" "v" >}} Update section
#### Description  
The `update` has one required property, `id`. 
This command also uses the optional share properties listed in **Create Command Optional Properties** found in the **[Create Command](#create-command)** section. 
Follow the syntax examples provided for each property.
Enter the command string, then press <kbd>Enter</kbd>.
`update` returns an empty line.

#### Usage 
To add or change a comment for a share, from the CLI prompt, enter:

<code>sharing nfs update id=<i>4</i> comment="<i>test share</i>"</code>

Where
* *4* is the ID number assigned to the share to update.
* *test share* is the comment to add to the share.

{{< expand "Command Example" "v" >}}
```
sharing nfs update id=4 comment="test share"

```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scaleclistorage" limit="10" title="Related CLI Storage Articles" >}}
{{< taglist tag="scalesnapshots" limit="10" title="Related Snapshot Articles" >}}