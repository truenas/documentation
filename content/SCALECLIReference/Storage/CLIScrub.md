---
title: "Scrub"
description: "Provides information about the storage scrub namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 40
aliases:
draft: false
tags:
- scrub
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Scrub Namespace

The **scrub** namespace has 7 commands, and is based on data integrity check (scrub) functions found in the SCALE API and web UI.
It provides access to scrub task management methods through the **scrub** namespace commands.

## Scrub Commands
The following **scrub** namespace commands allow you to manage scheduled scrub task configuration and to start, pause, or stop a scrub.

You can enter commands from the main CLI prompt or from the **storage** namespace prompt.

### Create Command

The `create` command configures a new scheduled scrub task.

{{< expand "Using the Create Command" "v" >}}

#### Description

`create` has one required property, `pool`, and four optional properties (see Create Properties below).
The value for `pool` is the pool id number.
Use [`storage pool query`]({{< relref "CLIPool.md #query-command" >}}) to find the id for the selected pool and enter this integer.

Enter the full command string along with any optional properties you want to configure, or accept the default values, and then press <kbd>Enter</kbd>.
`create` returns an empty line when successful.
Use [`query`](#query-command) to confirm the task is created correctly.

{{< expand "Create Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|---------------|
| `pool` | Yes | Enter the id number for the selected pool.<br>Use [`storage pool query`]({{< relref "CLIPool.md #query-command" >}}) to find the id numbers for all pools on the system. | <code>pool=<em>1</em></code> |
| `threshold` | No | Enter the number of days before a completed scrub is allowed to run again. Default value is `35`. This controls the task schedule. For example, scheduling a scrub to run daily and setting Threshold days to 7 means the scrub attempts to run daily. When the scrub succeeds, it continues to check daily but does not run again until the seven days have elapsed. Using a multiple of seven ensures the scrub always occurs on the same weekday. | <code>threshold=<em>7</em></code> |
| `description` | No | Enter a human-readable name or description for the scrub task. | <code>description= "<em>scrub&nbsp;task&nbsp;1</em>"</code> |
| `schedule` | No | Enter an array of properties that specify the date and time when the scrub task runs. The default setting is to run the task weekly, every Sunday at 00:00 (0 0 * * 0). Enter `{}` without property arguments to accept default values for schedule properties, or enter each property argument enclosed in square brackets with double-quoted properties and values. Separate each array property argument enclosed in square brackets `[]` with a comma and space. Properties are:<br><ul><li>`minute` specified in the format of minutes:seconds or use the default `00`<br><li>`hour` specified in the format of 00 (0-23) or use the default `*` for every hour. <br><li>`dom` specifies the day of month in the format of `jan` through `dec` or use the default `*` for every month.<br><li>`month` specifies the month in the format of `jan` or use the default `*` for any month.<br><li>`dow` specifies the day(s) of the week as `sun`, `mon`, `tue`, `wed`, `thu`, `fri`, or `sat` or use the default `*` for every day of the week.</ul> Command example shows the default values for each property in the object array. | <code>schedule={["minute"="00"], ["hour"="&ast;"], ["dom"="&ast;"], ["month"="&ast;"], ["dow"="&ast;"]}</code> |
| `enabled` | No | Enter `false` to create but not allow it to execute or accept the default value of `true`. | <code>enabled=<em>false</em></code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage

From the CLI prompt, enter:

<code>storage scrub create pool=<em>1</em> </code>

Where *1* is the id number for the selected pool.
Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
storage scrub create pool=2 threshold=30 description="tank scrub" schedule={} enabled=true

```
{{< /expand >}}
{{< /expand >}}

### Delete Command

The `delete` command erases an existing scrub task.

{{< expand "Using the Delete Command" "v" >}}

#### Description

`delete` has one required property, `id`.
Use [`query`](#query-command) to find the id number of the scrub task you want to remove.

Enter the command string and then press <kbd>Enter</kbd>.
`delete` returns an empty line when successful.
Use [`query`](#query-command) or [`get_instance`](#get_instance-command) to confirm the task is deleted.

#### Usage

From the CLI prompt, enter:

<code>storage scrub delete id=<em>1</em> </code>

Where *1* is the scrub task id.
Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
storage scrub delete id=1

```
{{< /expand >}}
{{< /expand >}}

### Get_instance Command

The `get_instance` command returns the current configuration for an existing scrub task.

{{< expand "Using the Get_instance Command" "v" >}}

#### Description

`get_instance` has one required property, `id`.
Use [`query`](#query-command) to find the id number of the scrub task you want to view.

Enter the command string and then press <kbd>Enter</kbd>.
`get_instance` returns a table containing configured settings for that scrub task.

#### Usage

From the CLI prompt, enter:

<code>storage scrub get_instance id=<em>1</em></code>

Where *1* is the id number for the selected scrub task.
Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
storage scrub get_instance id=1
+-------------+------------+
|          id | 1          |
|   threshold | 30         |
| description | tank scrub |
|     enabled | true       |
|        pool | 2          |
|   pool_name | tank       |
|    schedule | <dict>     |
+-------------+------------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command

The `query` command returns information about all scheduled scrub tasks on the system.

{{< expand "Using the Query Command" "v" >}}

#### Description

`query` does not require entering properties or arguments.

Enter the command string and then press <kbd>Enter</kbd>.
`query` returns a table containing configured settings for all existing scrub tasks.

#### Usage

From the CLI prompt, enter:

`storage scrub query`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
storage scrub query
+----+-----------+-------------+---------+------+-----------+----------+
| id | threshold | description | enabled | pool | pool_name | schedule |
+----+-----------+-------------+---------+------+-----------+----------+
| 1  | 35        |             | true    | 2    | tank      | <dict>   |
+----+-----------+-------------+---------+------+-----------+----------+
```
{{< /expand >}}
{{< /expand >}}

### Run Command

The `run` command activates a one-time scrub task for the selected pool.

{{< expand "Using the Run Command" "v" >}}

#### Description

`run` has one required property, `name`, and one optional property, `threshold`.
To find the `name` of the pool you want to scrub, use [`storage pool query`]({{< relref "CLIPool.md #query-command" >}}) or [`storage dataset query id`]({{< relref "CLIDataset.md #query-command" >}}) to return the paths of all pools and child datasets on the system.

`threshold` defaults to 35 days.
To preserve system resources, the scrub runs only if time since the pool was last scrubbed is greater than the threshold value.
To override the threshold and run immediately, you can use `threshold=0`.

Enter the full command string and then press <kbd>Enter</kbd>.
`run` returns an empty line.
To check if the scrub starts successfully, you can use [`system alert list`]({{< relref "CLIAlert.md #list-command" >}}) to view system alerts.

#### Usage

From the CLI prompt, enter:

<code>storage scrub run name="<em>tank</em>"</code>

Where *tank* is the name of the pool you want to scrub.
Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
storage scrub run name="tank" threshold=35

```
{{< /expand >}}
{{< /expand >}}

### Scrub Command

The `scrub` command allows you to start a one-time scrub task for the selected pool and to pause or stop an active scrub.

{{< expand "Using the Scrub Command" "v" >}}

#### Description

`scrub` has two required properties, `name` and `action`.
To find the `name` of the pool you want to scrub, use [`storage pool query`]({{< relref "CLIPool.md #query-command" >}}) or [`storage dataset query id`]({{< relref "CLIDataset.md #query-command" >}}) to return the paths of all pools and child datasets on the system.

There are three possible values for `action`:

* `START`
* `PAUSE`
* `STOP`

Enter the full command string and then press <kbd>Enter</kbd>.
Returns the percentage status of `action`.

#### Usage

From the CLI prompt, enter:

<code>storage scrub scrub name="<em>tank</em>" action=<em>START</em></code>

Where *tank* is the name of the selected pool and *START* is one of the three possible actions.
Press <kbd>Enter</kbd>.

{{< expand "Command Examples" "v" >}}
#### `START`

```
storage scrub scrub name="tank" action=START
[0%] ...
[0%] Scrubbing...
[1%] Scrubbing...
[4%] Scrubbing...
...
[98%] Scrubbing...
[99%] Scrubbing...
[100%] Scrub finished...
```

#### `PAUSE`

```
storage scrub scrub name="tank" action=PAUSE
[0%] ...
[100%] ...
```

#### `STOP`

```
storage scrub scrub name="tank" action=STOP
[100%] ...
```

{{< /expand >}}
{{< /expand >}}

### Update Command

The `update` command allows you to change the configuration of an existing scheduled scrub task.

{{< expand "Using the Update Command" "v" >}}

#### Description

`update` has one required property, `id`, and eight optional properties.
Use [`query`](#query-command) to view the id numbers for existing scheduled scrub tasks.
For optional properties, see the [`create`](#create-command) properties.

Enter the command string with any optional properties you want to update and then press <kbd>Enter</kbd>.

#### Usage

From the CLI prompt, enter:

<code>storage scrub update id=<em>1</em> <em>property</em>=<em>value</em></code>

Where *1* is the id of the scrub task to update, *property* is one of the configuration properties, and *value* is the new setting for that property.
Press <kbd>Enter</kbd>.

`update` returns an empty line.
Use [`query`](#query-command) or [`get_instance`](#get_instance-command) to confirm the new settings are applied.

{{< expand "Command Example" "v" >}}
```
storage scrub update id=1 enabled=false
```
{{< /expand >}}
{{< /expand >}}
