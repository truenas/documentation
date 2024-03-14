---
title: "Tunable"
description: "Introduces the TrueNAS CLI tunable namespace that configures settings tuning related settings found in the API and web UI."
weight: 110
aliases:
draft: false
tags:
- settings
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Tunable Namespace

The **tunable** namespace has six commands, and is based on tuned settings functions found in the SCALE API and web UI.
It provides access to tunable configuration methods through the **tunable** namespace commands.

## Tunable Commands
The following **tunable** namespace commands allow you to create and manage tuned settings.
Tunables configure kernel parameters while the system is running.
Configured settings generally take effect immediately.

You can enter commands from the main CLI prompt or from the **system** namespace prompt.

### Create Command
The `create` command allows you to configure a new tunable.

{{< expand "Using the Create Command" "v" >}}

#### Description
`create` has three required and three optional properties (see table below).
Enter the command string with all required and any optional properties you want and then press <kbd>Enter<kbd>.
`create` returns the percent complete status of the tunable create job.

{{< expand "Create Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|---------------|
| `type` | Yes | Enter the type of tunable to configure. Options are `SYSCTL`, `UDEV`, or `ZFS`. | <code>type=<em>SYSCTL</em></code> |
| `var` | Yes | Enter the name of the variable to configure. If `type` is:<br><ul><li>`SYSCTL` then `var` is a sysctl name (e.g. *kernel.watchdog*).<br><li>`UDEV` then `var` is an udev rules file name (e.g. *10-disable-usb*). Automatically adds the <file>.rules</file> suffix to the file name.<br><li>`ZFS` then `var` is a ZFS kernel module parameter name (e.g. *zfs_dirty_data_max_max*). | <code>var=<em>kernel.watchdog</em></code> |
| `value` | Yes | Enter the value of the variable. If `type` is:<br><ul><li>`SYSCTL` then `value` is the corresponding value (e.g. *0*) for the sysctl name in `var`.<br><li>`UDEV` then `value` is the contents (e.g. *BUS=="usb", OPTIONS+="ignore_device"*) of the udev rules file in `var`.<br><li>`ZFS` then `value` is the corresponding value for the ZFS kernel module parameter in `var`. | <code>value=<em>0</em></code> |
| `comment` | No | Enter a human-readable description for the tunable. | <code>comment=<em>TunableDescription</em></code> |
| `enabled` | No | If `enabled` is `false`, creates and saves the tunable without activating it. Update to `false` to disable a tunable without deleting it. Defaults to `true`. | <code>enabled=<em>true</em></code> |
| `update_initramfs` | No | If `update_initramfs` is `false`, initramfs is not updated after creating a ZFS tunable. If needed, use [`update`](#update-command) on an existing tunable to reconfigure `update_initramfs` to `true`. | <code>update_initramfs=<em>true</em></code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system tunable create type=<em>SYSCTL</em> var="<em>kernel.watchdog</em>" value="<em>0</em>" </code>

Where
* *SYSCTL* is the type of tunable
* *kernel.watchdog* is the name of the variable to configure
* *0* is the value of the named variable.

{{< expand "Command Example" "v" >}}
```
system tunable create type=SYSCTL var="kernel.watchdog" value="0" comment="Watchdog" enabled=true update_initramfs=true
[0%] ...
[100%] ...
```
{{< /expand >}}
{{< /expand >}}

### Delete Command
The `delete` command removes a configured tunable from the system.

{{< expand "Using the Delete Command" "v" >}}

#### Description
`delete` has one required property, `id`.
Use [`query`](#query-command) to find the id number of the tunable to remove.
Enter the command then press <kbd>Enter</kbd>.
`delete` returns the percent complete status of the delete task.

#### Usage
From the CLI prompt, enter:

<code>system tunable delete id=<em>1</em></code>

Where *1* is the id number of the tunable to delete.

{{< expand "Command Example" "v" >}}
```
system tunable delete id=1
[0%] ...
[100%] ...

```
{{< /expand >}}
{{< /expand >}}

### Get_instance Command
The `get_instance` command allows you to inspect the configuration of an existing tunable.

{{< expand "Using the Get_instance Command" "v" >}}
#### Description
`get_instance` has one required property, `id`.
Use [`query`](#query-command) to find the id number of the tunable to inspect.
Enter the command then press <kbd>Enter</kbd>.
`get_instance` returns a table containing configured settings for the tunable matching `id`.

#### Usage
From the CLI prompt, enter:

<code>system tunable get_instance id=<em>1</em></code>

Where *1* is the id of the tunable to query.

{{< expand "Command Example" "v" >}}
```
system tunable get_instance id=1
+------------+-----------------+
|         id | 1               |
|       type | SYSCTL          |
|        var | kernel.watchdog |
|      value | 0               |
| orig_value | 1               |
|    comment | Watchdog        |
|    enabled | true            |
+------------+-----------------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command
The `query` command allows you to inspect all tuned settings on the system.

{{< expand "Using the Query Command" "v" >}}
#### Description
`query` does not require entering properties or arguments.
Enter the command and then press <kbd>Enter</kbd>.
`query` returns a table containing all configured tunable settings.

#### Usage
From the CLI prompt, enter:

<code>system tunable query</code>

{{< expand "Command Example" "v" >}}
```
system tunable query
+----+--------+------------------------+-----------+------------+----------+---------+
| id | type   | var                    | value     | orig_value | comment  | enabled |
+----+--------+------------------------+-----------+------------+----------+---------+
| 2  | ZFS    | zfs_dirty_data_max_max | 783091712 | 2076269568 |          | true    |
| 3  | SYSCTL | kernel.watchdog        | 0         | 1          | Watchdog | true    |
+----+--------+------------------------+-----------+------------+----------+---------+
```
{{< /expand >}}
{{< /expand >}}

### Tunable_type_choices Command
The `tunable_type_choices` command allows you to view the available tunable types.

{{< expand "Using the Tunable_type_choices Command" "v" >}}
#### Description
`tunable_type_choices` does not require entering properties or arguments.
Enter the command and then press <kbd>Enter</kbd>.
`tunable_type_choices` returns a table containing the available choices.

#### Usage
From the CLI prompt, enter:

<code>system tunable tunable_type_choices</code>

{{< expand "Command Example" "v" >}}
```
system tunable tunable_type_choices
+--------+--------+
| SYSCTL | SYSCTL |
|   UDEV | UDEV   |
|    ZFS | ZFS    |
+--------+--------+
```
{{< /expand >}}
{{< /expand >}}

### Update Command
The `update` command allows you to reconfigure an existing tuned setting.

{{< expand "Using the Update Command" "v" >}}
#### Description
`update` has one required property, `id`, and four optional properties (see table below).
Use [`query`](#query-command) to find the id number of the tunable to update.
Enter the command string with the required property and any optional properties to change.
Separate multiple property and value pairs with a space.
Then press <kbd>Enter</kbd>.
`update` returns the percent complete status of the update task.

{{< expand "Update Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|---------------|
| `id` | Yes | Enter the id number of an existing tuned setting. Use [`query`](#query-command) to find the id number of the tunable to update. | <code>id=<em>1</em></code> |
| `value` | No | Enter the new value for the existing `type` and variable (`var`) matching `id`. If `type` is:<br><ul><li>`SYSCTL` then `value` is the corresponding value (e.g. *0*) for the sysctl name in `var`.<br><li>`UDEV` then `value` is the contents (e.g. *BUS=="usb", OPTIONS+="ignore_device"*) of the udev rules file in `var`.<br><li>`ZFS` then `value` is the corresponding value for the ZFS kernel module parameter in `var`. | <code>value=<em>0</em></code> |
| `comment` | No | Enter a human-readable description for the tunable. | <code>comment=<em>TunableDescription</em></code> |
| `enabled` | No | Update `enabled` to `false` to disable a tunable without deleting it. | <code>enabled=<em>true</em></code> |
| `update_initramfs` | No | Set to `false` to update the tuned setting but not update initramfs. To to update initramfs for an existing tunable (if `false` at creation), reconfigure `update_initramfs` to `true`. | <code>update_initramfs=<em>true</em></code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system tunable update id=<em>1</em> <em>PROPERTY</em>=<em>VALUE</em></code>

Where:
* *1* is the id of an existing tuned setting
* *PROPERTY* is an optional property to update
* *VALUE* is the new setting for that property.

{{< expand "Command Example" "v" >}}
```
system tunable update id=3 value=1 comment=KernelWatchdog
[0%] ...
[100%] ...

```
{{< /expand >}}
{{< /expand >}}
