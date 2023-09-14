---
title: "Scrub"
description: "Provides information about the storage scrub namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 40
aliases:
draft: false
tags:
- scaleclistorage
- scalescrub
---

{{< toc >}}

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
Use [`query`](#query-command) to find the id number for the scrub task you want to remove.

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
storage scrub> delete id=1

```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scaleclistorage" limit="10" title="Related CLI Storage Articles" >}}
