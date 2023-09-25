---
title: "Tunable"
description: "Provides information about the system tunable namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 110
aliases:
draft: false
tags:
- scaleclisystem
- scalesettings
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Tunable Namespace

The **tunable** namespace has 6 commands, and is based on tunables functions found in the SCALE API and web UI.
It provides access to tunable configuration methods through the **tunable** namespace commands.

## Tunable Commands
The following **tunable** namespace commands allow you to create and manage system tunables.
sysctl tunables are used to configure kernel parameters while the system is running and generally take effect immediately.

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
| `update_initramfs` | No | If `update_initramfs` is `false` then initramfs is not updated after creating a ZFS tunable. If needed, use [`update`](#update-command) on an existing tunable to change `update_initramfs` to `true`. | <code>update_initramfs=<em>true</em></code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage

From the CLI prompt, enter:

<code>system tunable create type=<em>SYSCTL</em> var="<em>kernel.watchdog</em>" value="<em>0</em>" </code>

Where *SYSCTL* is the type of tunable, *kernel.watchdog* is the name of the variable to configure, and *0* is the value of the named variable.

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system tunable create type=SYSCTL var="kernel.watchdog" value="0" comment="Watchdog" enabled=true update_initramfs=true
[0%] ...
[100%] ...
```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scaleclisystem" limit="10" title="Related CLI System Articles" >}}
{{< taglist tag="scalesettings" limit="10" title="Related System Settings Articles" >}}
