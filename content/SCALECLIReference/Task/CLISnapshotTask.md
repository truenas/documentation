---
title: "Snapshot (Task)"
description: "Provides information about the task snapshot namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 60
aliases:
draft: false
tags:
- snapshots
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Snapshot Namespace
The **snapshot** namespace has 11 commands and is based on snapshot creation and management functions found in the SCALE API and web UI.
It provides access to periodic snapshot task methods through the **snapshot** commands.

## Snapshot Commands
The following **snapshot** commands allow you to create new and manage existing periodic snapshot tasks.

You can enter commands from the main CLI prompt or from the task snapshot namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Create Command
The `create` command creates a periodic snapshot task for a given dataset at the specified schedule.

{{< expand "Using the Create Command" "v" >}}
#### Description  
`create` has six required properties and two optional properties.
The **Create Command Properties** section below lists the properties and provides syntax examples.
Enter a property argument using the `=` delimiter to separate property and value. Enter string values in double quotes.
Alternatively, enter `--` after entering `task snapshot create` to use the interactive arguments editor (TUI) and simplify entering the required and optional command properties.
<!-- comment out this until array syntax is verified
If entering a property argument with multiple values, enclose the double-quoted property and values in square brackets `[]`, and separate each with a comma and space.
Enclose array properties arguments in curly brackets `{}`. 
Enclose each property arguments in the array in `[]`square brackets, with double-quoted property and values and using `=` delimiter to separate them. 
Separate multiple array property arguments within the `{}` with a comma and space. -->
Enter the command string then press <kbd>Enter</kbd>.

`create` returns an empty line.
Use the `query` command to verify the snapshot task was created and to view details on the task.
{{< expand "Create Command Properties" "v" >}}
Use these properties when creating a snapshot.
{{< truetable >}}
| Property | Required | Description |Syntax Example |
|----------|----------|-------------|---------------|
| `dataset` | Yes | Enter the dataset path (pool/dataset) the task takes a snapshot of. Enclose the path in double quotes. | <code>dataset="<i>tank/minio</i>"</code> |
| `recursive` | Yes | Enter `true` to include child datasets of the chosen dataset or `false` to exclude child datasets. | `recursive=true` or `recursive=false` |
| `exclude` | No | Used with `recursive=true` to enter child datasets to exclude from the snapshot. Enter a child dataset name in double quotes. If entering multiple child datasets, use a comma and space to separate each entry. | <code>exclude="<i>child1<i/>", "<i>child2</i>"</code> |
| `lifetime_value`| Yes | Use with `lifetime_unit` to define the lifetime of the snapshot, the length of time to keep the snapshot on this system. After the time expires, the system removes snapshot. Snapshots replicated to other systems are not affected. `lifetime_unit` defines the unit of measure and `lifetime_value` specifies the duration. For example, `lifetime_value=2` and `lifetime_unit=weeks` retains the snapshot for two weeks. | <code>lifetime_value=<i>365</i></code> |
| `lifetime_unit`| Yes | Use with `lifetime_value` to define the lifetime of the snapshot, the length of time to keep the snapshot on this system. After the time expires, the system removes the snapshot. Snapshots replicated to other systems are not affected. `lifetime_unit` defines the unit of measure and `lifetime_value` specifies the duration. For example, `lifetime_value=364` and `lifetime_unit=DAY` retains the snapshot for 364 days. Lifetime units are `HOUR`, `DAY`, `WEEK`, `MONTH`, and `YEAR`. | <code>lifetime_unit=<i>DAY</i></code> |
| `naming_schema` | Yes | Enter a naming schema to generate a name for the snapshot instead of using `name`. Enter a new schema in double-quotes, the default **auto-%Y-%m-%d_%H-%M** schema, or a naming schema from a previously created periodic snapshot task. This allows replication of the snapshot. Naming schema must include the year %Y, month %m,day %d, hour %H, and minute %M. This adds the four-digit year, month, day of month, hour, and minute as defined in strftime(3). | <code>naming_schema="<i>custom-%Y-%m-%d_._%H-%M</i>"</code> |
| `schedule` | Yes | Enter an array of properties that specify the date and time when the task runs and creates the snapshot. The default setting is to run the task daily at 00:00 (0 0 * * *). Enter `{}` without property arguments to accept default values for schedule properties, or enter each property argument enclosed in square brackets with double-quoted properties and values. Separate each array property argument enclosed in square brackets `[]` with a comma and space. Properties are: <br><li>`minute` specified in the format of minutes:seconds or use the default 00:00 <br><li>`hour` specified in the format of 00 (0-23) or use the default `*` for every hour. <br><li>`dom` specifies the day of month in the format of `jan` through `dec` or use the default `*` for every month. <br><li>`month` specifies the month in the format of `jan` or use the default `*` for any month. <br><li>`dow` specifies the day(s) of week as `sun`, `mon`, `tue`, `wed`, `thu`, `fri`, or `sat` or use the default `*` for every day of the week. <br><li>`begin` specifies the earliest time the task starts in hour:minute or use the default `00:00`. <br><li>`end` specifies the latest time the task can end in hour:minute or use the default `00:00`.</li> Command example shows the default values for each property in the object array. | <code>schedule={["minute"="00"], ["hour"="&ast;"], ["dom"="&ast;"], ["month"="&ast;"], ["dow"="&ast;"], ["begin"="00:00"], ["end"="00:00"]}</code> |
| `allow_empty` | No | Enter `true` to create dataset snapshots even when there are no changes to the dataset from the last snapshot. Recommended for creating long-term restore points, multiple snapshot tasks pointed at the same datasets, or to be compatible with snapshot schedules or replications created in TrueNAS 11.2 and earlier. For example, allowing empty snapshots for a monthly snapshot schedule allows taking that monthly snapshot, even when a daily snapshot task has already taken a snapshot of changes to the dataset. Enter `false` to only take snapshots of datasets with data changes. | `allow_empty=true` or `allow_empty=false` |
| `enabled` | No |Enter `true` to activate this periodic snapshot task schedule or `false` to disable this task without deleting it. | `enabled=true` or `enabled=false` |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>task snapshot create dataset="<i>tank/minio</i>" recursive=<i>false</i> lifetime_value=<i>1</i> lifetime_unit=<i>WEEK</i> naming_schema="<i>new-%d-%m-%Y_%H-%M</i>" schedule=<i>{}</i></code>

Where:
* *tank/minio* is the name/path of the dataset to snapshot.
* *false* sets recursive to not include child datasets in the snapshot. *true* includes child datasets.
* *1* and *WEEK* set the length of time (lifetime of) the snapshot remains on the system.
* *new-%d-%m-%Y_%H-%M* creates a naming schema *new* that includes the *day-month-Year_Hour-Minute* in the name.
* *{}* is the default value for a task schedule that uses all default values schedule properties.

{{< expand "Command Example" "v" >}}
```
task snapshot create dataset="tank/minio" recursive=false lifetime_value=1 lifetime_unit=WEEK naming_schema="new-%d-%m-%Y_%H-%M" schedule={}

```
{{< /expand >}}
{{< /expand >}}

### Delete Command
The `delete` command deletes a snapshot task matching the ID entered.
Use the <code>[query](#query-command)</code> command to locate the snapshot task ID.

To disable a task but not delete it, use the <code>[update](#update-command)</code> command `enable=false` property argument.

{{< expand "Using the Delete Command" "v" >}}
#### Description  
`delete` has one required property, `id`.
Enter the property argument using the `=` delimiter separating the property and value.
Enter the command string then press <kbd>Enter</kbd>.

`delete` returns an empty line.

#### Usage
From the CLI prompt, enter:

<code>task snapshot delete id="<i>tank/minio@auto-2023-08-17_00-00</i>"</code>

Where *tank/minio@auto-2023-08-17_00-00* is the ID assigned to the share.

{{< expand "Command Example" "v" >}}
```
task snapshot delete id="tank/minio@auto-2023-08-17_00-00"

```
{{< /expand >}}
{{< /expand >}}

### Delete_Will_Change_Retention_For Command
The `delete_will_change_retention_for` command returns a list of snapshots that have their retention influenced by deleting a given snapshot.
Use this command before the <code>[delete](#delete-command)</code> command to verify other snapshot tasks on the system that might be adversely affected.

{{< expand "Using the Delete_Will_Change_Retention_For Command" "v" >}}
#### Description  
`delete_will_change_retention_for` has one required property, `id`.
Enter the property argument using the `=` delimiter separating the property and value.
Enter the command string then press <kbd>Enter</kbd>.

`delete` returns a list of snapshot tasks.

#### Usage
From the CLI prompt, enter:

<code>task snapshot delete_will_change_retention_for id=<i>11</i></code>

Where *11* is the ID assigned to the snapshot task.

{{< expand "Command Example" "v" >}}
```
task snapshot delete_will_change_retention_for id="tank/minio@auto-2023-08-17_00-00"
+------------+-----------------------+
| tank/minio | auto-2023-08-16_00-00 |
|            | auto-2023-08-21_00-00 |
|            | auto-2023-08-21_00-00 |
+------------+-----------------------+
```
{{< /expand >}}
{{< /expand >}}

### Forseen_Count Command  
The `forseen_count` command returns a list of snapshots that change the retention of the periodic snapshot task for the ID specified.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- commenting out until command syntax is verifed and working 
Use <code>[query](#query-command)</code> command to find the task ID number.

{{< expand "Using the Forseen_Count Command" "v" >}} 
#### Description 
The `forseen_count` command has one required property, `periodic_snapshot_forseen_count`.
`periodic_snapshot_forseen_count` has three required properties, `lifetime_value`, `lifetime_unit`, and `schedule` entered as an array.
#### Usage

{{< expand "Command Example" "v" >}}
```
```
{{< /expand >}}
{{< /expand >}} -->

### Get_Instance Command
The `get_instance` command retrieves information for a snapshot task matching the `id` entered in the command string.
Use to verify properties for the snapshot.
Use the <code>[query](#query-command)</code> command to find the list of snapshots and the ID for a snapshot task.

{{< expand "Using the Get_Instance Command" "v" >}}
#### Description  
`get_instance` has one required property, `id`.
Enter the property argument using the `=` delimiter separating the property and value.
Enter the command string then press <kbd>Enter</kbd>.
`get_instance` returns a table (dictionary) of properties for the ID entered.
The table (dictionary) includes the task ID, dataset, lifetime value and unit, naming schema, and schedule, and the state for recursive, enabled, allow_empty, vmware_sync, and the entries for exclude and state.

Use the `query` command to locate the ID number for the share.

#### Usage
From the CLI prompt, enter:

<code>task snapshot get_instance id=<i>11</i></code>

Where *11* is the ID number of the snapshot task.

{{< expand "Command Example" "v" >}}
```
sharing nfs get_instance id=11 
+----------------+--------------------+
|             id | 11                 |
|        dataset | tank/minio         |
|      recursive | false              |
| lifetime_value | 1                  |
|  lifetime_unit | DAY                |
|        enabled | true               |
|        exclude | <empty list>       |
|  naming_schema | new-%d-%m-%Y_%H-%M |
|    allow_empty | true               |
|       schedule | <dict>             |
|    vmware_sync | false              |
|          state | <dict>             |
+----------------+--------------------+
```
{{< /expand >}}
{{< /expand >}}

### Max_Count Command
The `max_count` command returns the maximum number of snapshots per dataset the system can sustain.

{{< expand "Using the Max_Count Command" "v" >}}
#### Description  
`max_count` does not require entering property arguments.
Enter the command then press <kbd>Enter</kbd>.

`max_count` returns a numeric value.

#### Usage
From the CLI prompt, enter:

`task snapshot max_count`

{{< expand "Command Example" "v" >}}
```
task snapshot max_count
512
```
{{< /expand >}}
{{< /expand >}}

### Max_Total_Count Command
The `max_total_count` command returns the maximum number of snapshots the system can sustain.

{{< expand "Using the Max_Total_Count Command" "v" >}}
#### Description  
`max_total_count` does not require entering property arguments.
Enter the command then press <kbd>Enter</kbd>.

`max_total_count` returns a numeric value.

#### Usage
From the CLI prompt, enter:

`task snapshot max_total_count`

{{< expand "Command Example" "v" >}}
```
task snapshot max_total_count
10000
```
{{< /expand >}}
{{< /expand >}}

### Query Command
The `query` command returns a table (dictionary) of all snapshot tasks on the system.

{{< expand "Using the Query Command" "v" >}}
#### Description  
`query` does not require entering property arguments.
Enter the command then press <kbd>Enter</kbd>.
The `query` returns a table (dictionary) of all snapshot tasks on the system.
Information includes the snapshot task ID, dataset path, recursive and encludes settings, lifetime value and unit settings, enabled, allow_empty and vmware_sync on/off state, naming schema, and state status.

#### Usage
From the CLI prompt, enter:

`task snapshot query'

{{< expand "Command Example" "v" >}}
```
storage snapshot query
+----+-----------------+-----------+----------------+---------------+---------+--------------+-----------------------------+-------------+----------+-------------+--------+
| id | dataset         | recursive | lifetime_value | lifetime_unit | enabled | exclude      | naming_schema               | allow_empty | schedule | vmware_sync | state  | 
+----+-----------------+-----------+----------------+---------------+---------+--------------+-----------------------------+-------------+----------+-------------+--------+
| 9  | tank/minio      | false     | 2              | DAY           | true    | <empty list >| auto-2023-08-16_00-00       | true        | <dict>   | false       | <dict> |
| 10 | tank/minio      | false     | 2              | DAY           | true    | <empty list >| customsnap-2023-08-16_00-00 | true        | <dict>   | false       | <dict> |
| 11 | tank2/snpashots | false     | 2              | DAY           | true    | <empty list >| new-2023-08-16_00-00        | true        | <dict>   | false       | <dict> |
| 12 | tank/snapshots  | false     | 2              | DAY           | true    | <empty list >| auto-2023-08-16_00-00       | true        | <dict>   | false       | <dict> |
+----+-----------------+-----------+----------------+---------------+---------+--------------+-----------------------------+-------------+----------+-------------+--------+
```
{{< /expand >}}
{{< /expand >}}

### Run Command
The `run` command starts the snapshot task for the task ID entered.
Use the <code>[query](#query-command)</code> command to locate the snapshot task ID.

{{< expand "Using the Run Command" "v" >}}
#### Description  
The `run` command has one required property, `id`.
Enter the property argument using the `=` delimiter separating the property and value.
Enter the command string then press <kbd>Enter</kbd>.

`run` returns an empty line.

#### Usage
From the CLI prompt, enter:

<code>task snapshot run id=<i>11</i></code>

Where *11* is the ID assigned to the snapshot task.

{{< expand "Command Example" "v" >}}
```
task snapshot run id=11

```
{{< /expand >}}
{{< /expand >}}

### Update Command
The `update` command updates the task matching the task ID entered.
Use the <code>[query](#query-command)</code> command to find the list of snapshot tasks and the task ID.
Use the <code>[get_instance](#get-instance-command)</code> command to list the properties of the task ID before and after making changes to verify the task configuration.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
{{< expand "Using the Update Command" "v" >}}
The `update` has one required property, `id`.
Enter any of the property arguments found in the **[Create Command Properties](#create-command)** table to change the task settings.
Enter the property argument for `id` using `=` to separate the property and value.
Enter property arguments with string values with the value double-quoted.
Enclose property arguments with array values in curly brackets `{}`, then enclose each property argument in square brackets `[]` and separate each with a comma and space.
Double-quote each property and value and using the `=` delimiter to separate them.
Alternatively, enter the `--` after the `id` property to open the interactive arguments editor (TUI).
Enter the command string then press <kbd>Enter</kbd>.

`update` returns an empty line.
Use the `get_instance` command to verify the changes made to the task.

#### Usage
To add or change a comment for a share, from the CLI prompt, enter:

<code>task snapshot update id=<i>11</i> <i>dataset</i>="<i>newDatasetName</i>"</code>

Where
* *11* is the ID number of the snapshot task to update.
* *dataset* is any of the editable properties and *newDatasetName* is the new dataset name/path to snapshot.

{{< expand "Command Example" "v" >}}
```
task snapshot update id= dataset="tank2/snapshots"

```
{{< /expand >}}
{{< /expand >}}

### Update_Will_Change_Retention_For Command update
The `update_will_change_retention_for` command returns a list of snapshots that have their retention influenced by deleting a given snapshot.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- commenting out until command syntax is verifed and working 

{{< expand "Using the Update_Will_Change_Retention_For Command" "v" >}} 
#### Description  
`update_will_change_retention_for` has one required property, `id`. 
Enter the property argument using the `=` delimiter to separate the property and value, and the value double-quoted.
Enter the command string then press <kbd>Enter</kbd>.

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
{{< /expand >}} -->
