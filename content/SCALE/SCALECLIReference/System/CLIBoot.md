---
title: "Boot"
description: "Provides information about the system boot namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 20
aliases:
draft: false
tags:
- boot
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Boot Namespace
The **boot** namespace has eight commands and is based on boot pool management functions found in the SCALE API and web UI.
It provides access to system boot pool methods through the **boot** commands.

## Boot Commands
The following **boot** commands allow you to run jobs related to the boot pool and manage the boot pool.

You can enter commands from the main CLI prompt or from the **boot** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Attach
The `attach` command runs a job that attaches a device (disk) to the boot pool.

Before running this command, use these commands:
* [`storage disk query`]({{< relref "CLIDisk.md #query-command" >}}) to locate the names and size of disks.
* [`storage disk get_unused`]({{< relref "CLIDisk.md #get_unused-command" >}}) to locate unused disks on the system.
* [`system boot get_disks`](#get_disks-command) to get the name of the boot pool disk.

{{< expand "Using the Attach Command" "v" >}}
#### Description
The `attach` command has two required properties, `dev` and `options`.
`dev` is the disk name found in the output of the `storage disk query` command.
`options` has one required property, `expand`, that is set to `true` by default.
Enter the property argument using the `=` delimiter to separate property and value.
Use the default `options` property argument, `options={}`.
Enter the command string then press <kbd>Enter</kbd>.
The command returns progress status in percentage of job completed, returns an error if the disk entered does not have enough space to hold the required partitions.

#### Usage
From the CLI prompt, enter:

<code>system boot attach dev=<i>sdd</i> options={}</code>

Where *sdd* is the name of the disk (device) to add to the boot pool.

{{< expand "Command Example" "v" >}}
```
system boot attach dev=sdd options={}
[0%] ...
[100%] ...
```
{{< /expand >}}
{{< /expand >}}

### Detach Command
The `detach` command runs a job that removes a device (disk) from the boot pool.
Use to remove additional boot devices.
Use `system boot replace` to change the boot pool disk.

Before running this command, use [`system boot get_disks`](#get_disks-command) to get the name(s) of the boot pool disk(s).

{{< expand "Using the Detach Command" "v" >}}
#### Description
The `detach` command has one required property, `dev`.
`dev` is the vdev label for the device, which is the device name and the digit 3.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line.

To verify the disk is removed, use the [`system boot get_disks`](#get_disks-command) command.

#### Usage
From the CLI prompt, enter:

<code>system boot detach dev=<i>sdd3</i></code>

Where *sdd* is the name of the vdev disk (device) to remove from the boot pool.

{{< expand "Command Example" "v" >}}
```
system boot detach dev=sdd3

```
{{< /expand >}}
{{< /expand >}}

### Get_Disks Command
Use the `get_disks` command to obtain the name(s) of the disk(s) in the boot pool.

{{< expand "Using the Get_Disks Command" "v" >}}
#### Description
The `get_disks` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns the names of disks in the boot pool.

#### Usage
From the CLI prompt, enter:

<code>system boot get_disks</code>

{{< expand "Command Example" "v" >}}
```
system boot get_disks
xvda
```
{{< /expand >}}
{{< /expand >}}

### Get_Scrub_Interval Command
Use the `get_scrub_interval` command to obtain the number of days between boot pool scrubs.

The [`system advanced config`]({{< relref "CLIAdvanced.md #config-command" >}}) result also shows the `boot_scrub` interval.

{{< expand "Using the Get_Scrub_Interval Command" "v" >}}
#### Description
The `get_scrub_interval` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns the number of days between boot scrubs.

#### Usage
From the CLI prompt, enter:

<code>system boot get_scrub_interval</code>

{{< expand "Command Example" "v" >}}
```
system boot get_scrub_interval
8
```
{{< /expand >}}
{{< /expand >}}

### Get_State Command
The `get_state` command provides information on the boot pool.

{{< expand "Using the Get_State Command" "v" >}}
#### Description
The `get_state` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns the boot pool name, path, online status, healthy and warning settings, status code and status detail, boot pool size including allocated and free space, and fragmentation information.
It includes dictionary mentions for the scan, topology, and autotrim settings.

#### Usage
From the CLI prompt, enter:

<code>system boot get_state</code>

{{< expand "Command Example" "v" >}}
```
system boot get_state
+---------------+------------------------------------------------------------------+
|          name | boot-pool                                                        |
|          path | /                                                                |
|        status | ONLINE                                                           |
|          scan | <dict>                                                           |
|      topology | <dict>                                                           |
|       healthy | true                                                             |
|       warning | true                                                             |
|   status_code | FEAT_DISABLED                                                    |
| status_detail | Some supported features are not enabled on the pool. The pool... |
|          size | 20401094656                                                      |
|     allocated | 10421198848                                                      |
|          free | 9979895808                                                       |
|       freeing | 0                                                                |
| fragmentation | 12                                                               |
|      size_str | 20401094656                                                      |
| allocated_str | 10421198848                                                      |
|      free_str | 9979895808                                                       |
|   freeing_str | 0                                                                |
|      autotrim | <dict>                                                           |
+---------------+---------------------------------------------------------------
```
{{< /expand >}}
{{< /expand >}}

### Replace Command
Use the `replace` command to remove a device (drive) from the boot pool and replace it with a device of at least the same size. This command resilvers the boot pool and installs the boot loader on the new device.

Before running this command, use these commands:
* [`storage disk query`]({{< relref "CLIDisk.md #query-command" >}}) to locate the names and size of disks.
* [`storage disk get_unused`]({{< relref "CLIDisk.md #get_unused-command" >}}) to locate unused disks on the system.
* [`system boot get_disks`](#get_disks-command) to get the name of the boot pool disk.

{{< expand "Using the Replace Command" "v" >}}
#### Description
The `replace` command has two required property arguments, `label` and `dev`.
`label` is the vdev name for the current device (drive in the pool). This is the disk name and the digit 3.
Use the UI **Replace** option on the **System > Boot > Boot Status** screen to view a list of device options and the names.
`dev` is the name of the disk replacing the device in the boot pool.
Enter the command string then press <kbd>Enter</kbd>.
The command returns progress in percentage complete as it replaces the device, resilvers the boot pool, and installs the boot loader on the new device.

#### Usage
From the CLI prompt, enter:

<code>system boot get_state</code>

{{< expand "Command Example" "v" >}}
```
system boot replace label=sda3 dev=sdd
[0%] ...
[0%] Formatting sdd...
[0%] Replacing sda3 with sdd...
[3%] Resilvering boot pool, 30 seconds left...
[99%] Resilvering boot pool, unknown seconds left...
[100%] Installing boot loader...
```
{{< /expand >}}
{{< /expand >}}

### Scrub Command
Use the `scrub` command to initiate a manual boot pool scrub.

{{< expand "Using the Scrub Command" "v" >}}
#### Description
The `scrub` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns progress in percentage complete the boot pool scrub operation.

#### Usage
From the CLI prompt, enter:

<code>system boot scrub</code>

{{< expand "Command Example" "v" >}}
```
system boot scrub
[0%] ...
[0%] Scrubbing...
[2%] Scrubbing...
[3%] Scrubbing...
[5%] Scrubbing...
[6%] Scrubbing...
[7%] Scrubbing...
[8%] Scrubbing...
...
[98%] Scrubbing...
[99%] Scrubbing...
[100%] Scrub finished...
```
{{< /expand >}}
{{< /expand >}}

### Set_Scrub_Interval Command
Use the `set_scrub_interval` to set or change the interval (in days) between boot pool scrub operations.

You can also use the [`system advanced update boot_scrub=`]({{< relref "CLIAdvanced.md #update-command" >}}) command to set the boot pool scrub interval.
{{< expand "Using the Set_Scrub_Interval Command" "v" >}}
#### Description
The `set_scrub_interval` command has one required property, `interval`.
`interval` is the number of days between boot pool scrubs.
Enter the command string then press <kbd>Enter</kbd>.
The command returns the number now set for the interval.

#### Usage
From the CLI prompt, enter:

<code>system boot set_scrub_interval interval=<i>8</i></code>

{{< expand "Command Example" "v" >}}
```
system boot set_scrub_interval interval=8
8
```
{{< /expand >}}
{{< /expand >}}
