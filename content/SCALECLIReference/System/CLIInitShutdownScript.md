---
title: "Init_Shutdown_Script"
description: "Provides information about the system init_shutdown_script namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 60
aliases:
draft: false
tags:
- scaleclisystem
- scaleinitshutdown
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}

{{< hint type=Danger >}}
<!-- CREATE ADMONITION AT THAT THIS CAN MAKE OS LEVEL CHANGES AND CAN CAUSE MAJOR ISSUES -- BEST KNOW WHAT YOU'RE DOING -->
{{< /hint >}}
## Init_shutdown Namespace

The **init_shutdown** namespace has 5 commands, and is based on init/shutdown script functions found in the SCALE API and web UI.
It provides access to init/shutdown script management methods through the **init_shutdown** namespace commands.

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
| `when` | Yes | Enter when the script should execute. Options are `PREINIT` (early in the boot process, before services have started), `POSTINIT` (late in the boot process, when most services have started), or `SHUTDOWN` (on shutdown). | <code>when=<em>SHUTDOWN</em></code> |
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

{{< taglist tag="scaleclisystem" limit="10" title="Related CLI System Articles" >}}
{{< taglist tag="scaleinitshutdown" limit="10" title="Related Init Shutdown Script Articles" >}}
