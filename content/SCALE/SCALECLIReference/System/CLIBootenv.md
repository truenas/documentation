---
title: "Bootenv"
description: "Provides information about the system bootenv namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 25
aliases:
draft: false
tags:
- boot
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Bootenv Namespace

The **bootenv** namespace has 7 commands, and is based on boot environment functions found in the SCALE API and web UI.
It provides access to environment management methods through the **bootenv** namespace commands.

## Bootenv Commands
The following **bootenv** namespace commands allow you to create or delete boot environments, manage existing environments, and activate an environment.

You can enter commands from the main CLI prompt or from the **system** namespace prompt.

### Activate Command

The `activate` command sets a boot environment to activate on reboot.

{{< expand "Using the Activate Command" "v" >}}

#### Description

`activate` has one required property, `id`.
Use [`query`](#query-command) to find the boot environment `id`.

`activate` returns `true` when successful.
`query` returns `active` values of `N` (now) for the current boot environment and `R` (reboot) for the pending one.
Enter [`system reboot`]({{< relref "/scale/scaleclireference/system/_index.md #reboot-command" >}}) to reboot the system and activate the pending boot environment.

#### Usage

From the CLI prompt, enter:

<code>system bootenv activate id="<em>TEST</em>"</code>

Where *TEST* is the id of the boot environment to activate.

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system bootenv activate id="TEST"
true
```
{{< /expand >}}
{{< /expand >}}

### Create Command

The `create` command adds a new boot environment.

{{< expand "Using the Create Command" "v" >}}

#### Description

`create` has one required property, `name`, and one optional property, `source`.

The boot environment `name` may include only alphanumeric characters, dashes (-), underscores (_), or periods (.).

If `source` is defined, the new boot environment is created as a clone of an existing boot environment.
Use [`query`](#query-command) to find the id of an existing boot environment.

`create` returns a blank line when successful. Use `query` to confirm.

#### Usage

From the CLI prompt, enter:

<code>system bootenv create name="<em>TEST2</em>" source="<em>TEST</em>"</code>

Where *TEST2* is a name for the new boot environment and *TEST* is the id of an existing boot environment to clone, if needed.

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system bootenv create name="TEST2" source="TEST"

```
{{< /expand >}}
{{< /expand >}}

### Delete Command

The `delete` command removes an existing boot environment from the system.

{{< expand "Using the Delete Command" "v" >}}

#### Description

`delete` has one required property, `id`.
Use [`query`](#query-command) to find the boot environment id.

You cannot delete the default or any active entries.
To delete the active boot environment, first activate another entry and then delete the environment you want to remove.

`delete` returns the task progress as a percentage.

#### Usage

From the CLI prompt, enter:

<code>system bootenv delete id="<em>TEST</em>"</code>

Where *TEST* is the id of an existing boot environment.

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system bootenv delete id="TEST"
[0%] ...
[100%] ...
```
{{< /expand >}}
{{< /expand >}}

### Get_instance Command

The `get_instance` command returns configuration for an existing boot environment.

{{< expand "Using the Get_instance Command" "v" >}}

#### Description

`get_instance` has one required property, `id`.
Use [`query`](#query-command) to find the boot environment id.

`get_instance` returns a table containing boot environment information.

#### Usage

From the CLI prompt, enter:

<code>system bootenv get_instance id="<em>TEST</em>"</code>

Where *TEST* is the id of an existing boot environment.

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system bootenv get_instance id="TEST"
+--------------+---------------------------+
|           id | TEST                      |
|     realname | TEST                      |
|         name | TEST                      |
|       active |                           |
|    activated | false                     |
| can_activate | true                      |
|   mountpoint | -                         |
|        space | 8.0K                      |
|      created | 2023-09-22T11:56:00+00:00 |
|         keep | false                     |
|     rawspace | 8192                      |
+--------------+---------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command

The `query` command allows you to view all boot environments stored on the system.
It indicates the current active boot environment and which environment activates on system reboot.

{{< expand "Using the Query Command" "v" >}}

#### Description

`query` does not require entering properties or arguments. Enter the command, then press <kbd>Enter</kbd>.

`query` returns a table containing information about all stored boot environments on the system.
The active boot environment is identified with `N` (now) under `active` and `R` (reboot).
If a boot environment [`activate`](#activate-command) is pending, the current environment is identified with `N` and the pending environment with `R`.

#### Usage

From the CLI prompt, enter:

<code>system reboot query</code>

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system bootenv query
+------------------------------+------------------------------+------------------------------+--------+-----------+--------------+------------+-------+---------------------------+-------+------------+
| id                           | realname                     | name                         | active | activated | can_activate | mountpoint | space | created                   | keep  | rawspace   |
+------------------------------+------------------------------+------------------------------+--------+-----------+--------------+------------+-------+---------------------------+-------+------------+
| 23.10-RC.1-INTERNAL.9        | 23.10-RC.1-INTERNAL.9        | 23.10-RC.1-INTERNAL.9        |        | false     | true         | -          | 2.35G | 2023-09-15T09:04:00+00:00 | false | 2527326208 |
| 23.10-MASTER-20230922-042925 | 23.10-MASTER-20230922-042925 | 23.10-MASTER-20230922-042925 | NR     | true      | true         | legacy     | 2.33G | 2023-09-22T11:26:00+00:00 | false | 2497949696 |
| Initial-Install              | Initial-Install              | Initial-Install              |        | false     | true         | -          | 7.1M  | 2023-08-31T09:02:00+00:00 | true  | 7442432    |
| 23.10-BETA.1                 | 23.10-BETA.1                 | 23.10-BETA.1                 |        | false     | true         | -          | 2.31G | 2023-08-31T08:47:00+00:00 | false | 2484695040 |
+------------------------------+------------------------------+------------------------------+--------+-----------+--------------+------------+-------+---------------------------+-------+------------+
```
{{< /expand >}}
{{< /expand >}}

### Set_attribute Command

The `set_attribute` command is used to set the `keep` flag, which determines whether the TrueNAS updater can automatically delete this boot environment if there is not enough space to proceed with an update.

{{< expand "Using the Set_attribute Command" "v" >}}

#### Description

`set_attribute` has one required property, `id`, one optional property, `attributes`.
Currently, `keep` is the only available attribute.
Use [`query`](#query-command) to find the boot environment id.

`set_attribute` returns `true` when successful.

#### Usage

From the CLI prompt, enter:

<code>system bootenv set_attribute id="<em>TEST</em>" attributes={"keep":<em>true</em>}</code>

Where *TEST* is the boot environment id and *true* is a boolean value.

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system bootenv set_attribute id="23.10-BETA.1" attributes={"keep":true}
true
```
{{< /expand >}}
{{< /expand >}}

### Update Command

The `update` command allows you to change the name of an existing boot environment.

{{< expand "Using the Update Command" "v" >}}

#### Description

`update` has two required properties, `id` and `name`.
Use [`query`](#query-command) to find the boot environment id.

The new boot environment name may include only alphanumeric characters, dashes (-), underscores (_), or periods (.).

`update` returns a blank line when successful.
Use `query` to confirm.

#### Usage

From the CLI prompt, enter:

<code>system bootenv update id="<em>TEST</em>" name="<em>RETEST</em>"</code>

Where *TEST* is the boot environment id to update and *RETEST* is the new name.

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system bootenv update id="TEST" name="RETEST"

```
{{< /expand >}}
{{< /expand >}}
