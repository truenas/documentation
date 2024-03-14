---
title: "Init_Shutdown_Script"
description: "Provides information about the system init_shutdown_script namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 60
aliases:
draft: false
tags:
- initshutdown
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Init_shutdown Namespace

The **init_shutdown** namespace has 5 commands, and is based on init/shutdown script functions found in the SCALE API and web UI.
It provides access to init/shutdown script management methods through the **init_shutdown** namespace commands.

{{< include file="/content/_includes/InitShutdownWarning.md" >}}

## Init_shutdown Commands
The following **init_shutdown** namespace commands allow you to create, view, update, and delete init/shutdown script tasks.

You can enter commands from the main CLI prompt or from the **system** namespace prompt.

#### Create Command

The `create` command creates a new init/shutdown script task.

Init/shutdown scripts allow you to run scripted tasks before or after initialization (start-up), or at shutdown.
All init/shutdown scripts run using [`sh(1)`](https://manpages.debian.org/testing/dash/sh.1.en.html).

{{< expand "Using the Create Command" "v" >}}

#### Description

`create` has two required properties, `type` and `when`, and three optional properties (see Create Properties below).
`type` has two possible values, `SCRIPT` or `COMMAND`, that each require one additional property.
`SCRIPT` requires either the `script` or `script_text` property.
`COMMAND` requires the `command` property.

Enter all required and any optional properties you want, surround string values with double quotes `"`, and then press <kbd>Enter</kbd>.

{{< expand "Create Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|---------------|
| `type` | Yes | Specifies the type of init/shutdown task. Options are `SCRIPT` or `COMMAND`. | <code>type=<em>SCRIPT</em></code> |
| `command` | Yes* | Required when `type` is `COMMAND`. Enter a command with any options you want or the path to a command stored on the system. | <code>command="<em>touch /mnt/tank/data/cmdTest.txt</em>"</code> |
| `script_text` | Yes* | Either `script_text` or `script` is required when `type` is `SCRIPT`. Enter the full text for the script. | <code>script_text="<em>touch /mnt/tank/data/ScriptTest.txt</em>"</code> |
| `script` | Yes* | Either `script_text` or `script` is required when `type` is `SCRIPT`. Enter the path to a script stored on the system. | <code>script="<em>/mnt/tank/data/&#8203;scripts/shutdown_script.sh</em>"</code> |
| `when` | Yes | Enter when the script should execute. Options are:<br><ul><li> `PREINIT` -- early in the boot process, before services have started<br><li>`POSTINIT` -- late in the boot process, when most services have started<br><li>`SHUTDOWN` -- on shutdown</ul> | <code>when=<em>SHUTDOWN</em></code> |
| `enabled` | No | Set to `false` to create the script but not enable it. Defaults to `true`. | <code>enabled=<em>true</em></code> |
| `timeout` | No | Enter the time (in seconds) that the system should wait for the script or command to execute. Default value is `10`.<br><br>Note: A hard timeout limit is configured by the base OS, so when a script or command is set to execute on SHUTDOWN, the timeout specified by script or command is added to the base timeout, so that it is not interrupted by the base limit. | <code>timeout=<em>10</em></code> |
| `comment` | No | Enter a human-readable description for the command or script. | <code>comment="<em>Shutdown Task</em>"</code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage

From the CLI prompt, enter:

<code>system init_shutdown_script create type=<em>SCRIPT</em> <em>script</em>="<em>path/to/file.sh</em>" when=<em>SHUTDOWN</em> </code>

Where *SCRIPT* is the task type, *script* is the property for defining the task, *path/to/file.sh* is the path to an executable script, and *SHUTDOWN* is when the task executes.

Press <kbd>Enter</kbd>.

Returns an empty line when successful.
Use [`query`](#query-command) to confirm the task was created.

{{< hint type=tip >}}
Always test the script to verify it executes and achieves the desired results.
{{< /hint >}}

{{< expand "Command Example" "v" >}}
```
system init_shutdown_script create type=SCRIPT script="path/to/file.sh" when=SHUTDOWN comment="Shutdown Task"

```
{{< /expand >}}
{{< /expand >}}

### Delete Command

The `delete` command removes an existing init/shutdown script task.

{{< expand "Using the Delete Command" "v" >}}

#### Description

`delete` has one required property, `id`.
Use [`query`](#query-command) to view the id numbers for existing script or command tasks.

Enter the command string and press <kbd>Enter</kbd>.
Deletes the task matching `id`.

#### Usage

From the CLI prompt, enter:

<code>system init_shutdown_script delete id=<em>1</em></code>

Where *1* is the id of the task to delete.
Press <kbd>Enter</kbd>.

`delete` returns an empty line.
Use [`query`](#query-command) or [`get_instance`](#get_instance-command) to confirm the task is deleted.

{{< expand "Command Example" "v" >}}
```
system init_shutdown_script delete id=1

```
{{< /expand >}}
{{< /expand >}}

### Get_instance Command

The `get_instance` command returns configured settings for an existing init/shutdown script task.

{{< expand "Using the Get_instance Command" "v" >}}

#### Description

`get_instance` has one required property, `id`.
Use [`query`](#query-command) to view the id numbers for existing script or command tasks.
<!-- there is also an optional `query-options-get_instance` property, but I'm commenting that out until we can validate it.-->

Enter the command string and press <kbd>Enter</kbd>.
`get_instance` returns a table containing information about the task matching `id`.

#### Usage

From the CLI prompt, enter:

<code>system init_shutdown_script get_instance id=<em>1</em></code>

Where *1* is the id of the task.
Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
[truenas] system init_shutdown_script> get_instance id=1
+-------------+--------------------------------------------+
|          id | 1                                          |
|        type | SCRIPT                                     |
|     command |                                            |
|      script | /mnt/tank/data/scripts/post_init_script.sh |
|        when | POSTINIT                                   |
|     enabled | true                                       |
|     timeout | 10                                         |
|     comment | Post Init Report                           |
| script_text |                                            |
+-------------+--------------------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command

The `query` command returns information about all existing init/shutdown script tasks on the system.

{{< expand "Using the Query Command" "v" >}}

#### Description

`query` does not require entering properties or arguments.

Enter the command string and press <kbd>Enter</kbd>.

Returns a table containing settings for all configured scripts or commands.

#### Usage

From the CLI prompt, enter:

`system init_shutdown_script query`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
[truenas] system init_shutdown_script> query
+----+---------+----------------------------------+--------------------------------------------+----------+---------+---------+------------------------+-------------------------------------+
| id | type    | command                          | script                                     | when     | enabled | timeout | comment                | script_text                         |
+----+---------+----------------------------------+--------------------------------------------+----------+---------+---------+------------------------+-------------------------------------+
| 1  | SCRIPT  |                                  | /mnt/tank/data/scripts/post_init_script.sh | POSTINIT | true    | 10      | Post Init Report       |                                     |
| 2  | SCRIPT  |                                  | /mnt/tank/data/scripts/pre_init_script.sh  | PREINIT  | true    | 10      | Pre-Init System Checks |                                     |
| 3  | SCRIPT  |                                  | /mnt/tank/data/scripts/shutdown_script.sh  | SHUTDOWN | true    | 10      | Shutdown Backup        |                                     |
| 4  | COMMAND | touch /mnt/tank/data/cmdTest.txt |                                            | POSTINIT | true    | 10      | Command Test           |                                     |
| 5  | SCRIPT  |                                  |                                            | POSTINIT | true    | 10      | Script Test            | touch /mnt/tank/data/ScriptTest.txt |
+----+---------+----------------------------------+--------------------------------------------+----------+---------+---------+------------------------+-------------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Update Command

The `update` command modifies configured settings for an existing init/shutdown script task.

{{< expand "Using the Update Command" "v" >}}

#### Description

`update` has one required property, `id`, and eight optional properties.
Use [`query`](#query-command) to view the id numbers for existing script or command tasks.
For optional properties, see the [`create`](#create-command) properties.

Enter the command string with any optional properties you want to update and then press <kbd>Enter</kbd>.

#### Usage

From the CLI prompt, enter:

<code>system init_shutdown_script update id=<em>1</em> <em>property</em>=<em>value</em></code>

Where *1* is the id of the task to update, *property* is one of the configuration properties, and *value* is the new setting for that property.
Press <kbd>Enter</kbd>.

`update` returns an empty line.
Use [`query`](#query-command) or [`get_instance`](#get_instance-command) to confirm the task is deleted.

{{< expand "Command Example" "v" >}}
```
[truenas] system init_shutdown_script> update id=1 when=PREINIT

```
{{< /expand >}}
{{< /expand >}}
