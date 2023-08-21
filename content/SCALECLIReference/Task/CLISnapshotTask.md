---
title: "Snapshot (Task)"
description: "Provides information about the task snapshot namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 60
aliases:
draft: false
tags:
- scaleclitask
- scalesnapshots
---

{{< toc >}}

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

## Snapshot Namespace
The **snapshot** namespace has xx command(s), and is based on snapshot creation and management functions found in the SCALE API and web UI.
It provides access to periodic snapshot task methods through the **snapshot** commands.

## Snapshot Commands 
The following **snapshot** commands allow you to create new and manage existing periodic snapshot tasks.

You can enter commands from the main CLI prompt or from the task snapshot namespace prompt.

{{< include file="/_includes/CLI/CLIGuideWIP.md" type="page" >}}

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" type="page" >}}

### Create Command update
The `create` command takes a snapshot of a given dataset.  

{{< expand "Using the Create Command" "v" >}} 
#### Description  
The `create` has six required properties and two optional properties.
The **Create Command Properties** section below lists the properties and provides syntax examples.
Enter a property argument using the `=` delimiter to separate property and value. Enter string values in double quotes. 
<!-- comment out this until array syntax is verified
If entering a property argument with multiple values, enclose the double-quoted property and values in square brackets `[]`, and separate each with a comma and space.
Enclose array properties arguments in curly brackets `{}`. 
Enclose each property arguments in the array in `[]`square brackets, with double-quoted property and values and using `=` delimiter to separate them. 
Separate multiple array property arguments within the `{}` with a comma and space. -->
Enter the command string, then press <kbd>Enter</kbd>.

`create` returns an empty line. 
Use the `query` command to verify the snapshot task was created and to view details on the task.
{{< expand "Create Command Properties" "v" >}}
Use these  properties when creating a snapshot.
<!-- commenting out until I can verify how this array works
Enter an array of `create` command required and optional properties to define snapshot settings. Enter each property in square brackets `[]` with the property and value double-quoted. Separate each property argument in the array with a comma and space. | <code>={["dataset"="<i>tank/data1</i>"], ["recursive"="<i>r</i>"], [""="<i></i>"]}</code>.  | 
-->
{{< truetable >}} verify these properties
| Command | Required | Description |Syntax Example |
|---------|----------|-------------|---------------|
| `dataset` | Yes | Enter the dataset path (pool/dataset) the task takes a snapshot of. Enclose the path in double quotes. | <code>dataset="<i>tank/minio</i>" |
| `recursive` | Yes | Enter `true` to include child datasets of the chosen dataset or `false` to exclude child datasets. | `recursive=true` or "`recursive=false` |
| `exclude` | No | Used with `recursive=true` to enter child datasets to exclude from the snapshot. Enter a child dataset name in double quotes. If entering multiple child datasets, use a comma and space to separate each entry. | <code>exclude="<i>child1<i/>", "<i>child2</i>"</code> |
| `lifetime_value`| Yes | Use with `lifetime_unit` to enter the lifetime of the snapshot, or to define a length of time to retain the snapshot on this system. After the time expires, the snapshot is removed. Snapshots replicated to other systems are not affected. `lifetime_unit` defines the unit of measure and `lifetime_value` specifies the duration. For example, lifetime_value=2 and lifetime_unit=weeks retains the snapshot for two weeks. | <code>lifetime_value=<i>365</i></code> |
| `lifetime_unit`| Yes | Use with `lifetime_value` to enter the lifetime of the snapshot, or o define a length of time to retain the snapshot on this system. After the time expires, the snapshot is removed. Snapshots replicated to other systems are not affected. `lifetime_unit` defines the unit of measure and `lifetime_value` specifies the duration. For example, lifetime_value=364 and lifetime_unit=DAY retains the snapshot for 364 days. Lifecycle units are `HOUR`, `DAY`, `WEEK`, `MONTH`, and `YEAR`. | <code>lifetime_unit=<i>DAY</i></code> |
| `naming_schema` | Yes | Enter a naming schema to generate a name for the snapshot instead of using `name`. Enter a new schema in double-quotes, the default **auto-%Y-%m-%d_%H-%M** schema, or a naming schema from a previously created periodic snapshot task. This allows replication of the snapshot. Naming schema must include the year %Y, month %m,day %d, hour %H, and minute %M. These are replaced with the four-digit year, month, day of month, hour, and minute as defined in strftime(3). For example, snapshots of pool1 entering `naming_schema=customsnap-%Y%m%d.%H%M` have snapshots named *pool1@customsnap-20190315.0527*. You cannot use `naming_schema` and `name` in the same snapshot. Use either `naming_schema` or `name` in the same snapshot but not both, one or the other is required. | <code>naming_schema="<i>customsnap-%Y%m%d.%H%M<i/>"</code> |
| `schedule` | Yes | Enter an array of properties that specify the date and time when the task runs and creates the snapshot. Default value is the `{}` with no property arguments, or enter each property argument enclosed in square brackets with both property and value double-quoted. Separate each property argument with a comma and space. Properties are: <br><li>`minute` to specify the time in minutes and seconds in the format of minutes:seconds, or use the default 00:00 <br><li>`hour` to specify the hour (0-23) in the format of 00, or use the default `*` for every hour. <br><li>`dom` to specify the day of month in the format of `Jan` through `Dec`, or use the default `*` for every month. <br><li>`dow` to specify the day of week, specified as `sun`, `mon`, `tue`, `wed`, `thu`, `fri`, or `sat`, or use the default `*` for every day of the week. <br><li>`begin` to specify the earliest time the task starts in hour:minute or use the default `00:00`. <br><li>`end` to specify the latest time the task can end in hour:minute, or use the default `00:00`.</li> Command example shows the default values for each property in the array. | <code>schedule={["minute"="00"], ["hour"="*"], ["dom"="*"], ["month"="*"], ["dow"="*"],["begin"="00:00"], ["end"="00:00"]}</code> |
| `allow_empty` | No | Enter `true` to create dataset snapshots even when there are changes to the dataset from the last snapshot. Recommended for creating long-term restore points, multiple snapshot tasks pointed at the same datasets, or to be compatible with snapshot schedules or replications created in TrueNAS 11.2 and earlier.For example, allowing empty snapshots for a monthly snapshot schedule allows taking that monthly snapshot, even when a daily snapshot task has already taken a snapshot of any changes to the dataset. `false` only take snapshots of datasets with data changes. | `allow_empty=true` or `allow_empty=false` |
| `enabled` | No |Enter `true` to activate this periodic snapshot schedule, or `false` to disable this task without deleting it. | `enabled=true` or `enabled=false` | verify
| `periodic_snapshot_create` | No | This option is a work in progress. |  |
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
* *child1* and *child3* are child datasets excluded from the snapshot that recursively includes child datasets of the specified dataset.

{{< expand "Command Example" "v" >}}
```
storage snapshot create dataset="tank/minio" name=miniosnaps

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

### Delete_Will_Change_Retention_For Command  update
The `delete_will_change_retention_for` command returns a list of snapshots that have their retention influenced by deleting a given snapshot. 
Use before the <code>[delete](#delete-command)</code> command to verify any other snapshot tasks on the system are not adversely affected.

{{< expand "Using the Delete_Will_Change_Retention_For Command" "v" >}}
#### Description  
`delete_will_change_retention_for  has one required property, `id`. 
Enter the property argument using the `=` delimiter separating the property and value, and the value double-quoted.
Enter the command string, then press <kbd>Enter</kbd>.

`delete` returns a list of snapshot tasks.

#### Usage 
From the CLI prompt, enter:

<code>storage snapshot delete_will_change_retention_for id="<i>tank/minio@auto-2023-08-17_00-00</i>"</code>

Where *tank/minio@auto-2023-08-17_00-00* is the ID assigned to the share.

{{< expand "Command Example" "v" >}}
```
storage snapshot delete_will_change_retention_for id="tank/minio@auto-2023-08-17_00-00"
+---------+------------------------------+

```
{{< /expand >}}
{{< /expand >}}

### Forseen_Count Command  update

{{< expand "Using the Forseen_Count Command" "v" >}} 
#### Description 

#### Usage


{{< expand "Command Example" "v" >}}
```

```
{{< /expand >}}
{{< /expand >}}

### Get_Instance Command update
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

### Max_Count Command update
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

### Max_Total_Count Command update
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

### Query Command  update
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

### Run Command update
The `run` command removes the hold on a snapshot allowing it to be deleted.
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

### Update Command 

{{< include file="/_includes/CLI/CLICommandWIP.md" type="page" >}}
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

### Update_Will_Change_Retention_For Command update
The `update_will_change_retention_for` command returns a list of snapshots that have their retention influenced by deleting a given snapshot. 
Use before the <code>[update](#update-command)</code> command to verify any other snapshot tasks on the system are not adversely affected.
Use the <code>[query](#query-command)</code> command to locate the snapshot ID.

{{< expand "Using the Hold Command" "v" >}} 
#### Description  
`update_will_change_retention_for` has one required property, `id`. 
Enter the property argument using the `=` delimiter separating the property and value, and the value double-quoted.
Enter the command string, then press <kbd>Enter</kbd>.

`update_will_change_retention_for` returns a list of snapshots.

#### Usage 
From the CLI prompt, enter:

<code>task snapshot update_will_change_retention_for id="<i>tank/minio@auto-2023-08-16_00-00</i>"</code>

Where *tank/minio@auto-2023-08-16_00-00* is the ID assigned to the share.

{{< expand "Command Example" "v" >}}
```
task snapshot update_will_change_retention_for id="tank/minio@auto-2023-08-16_00-00"



```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scaleclitask" limit="10" title="Related CLI Task Articles" >}}
{{< taglist tag="scalesnapshot" limit="10" title="Related Snapshot Articles" >}}