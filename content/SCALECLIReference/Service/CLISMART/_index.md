---
title: "SMART"
description: "Provides information about the service smart namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 
aliases: 70
draft: false
tags:
 - smart
---

## SMART Namespace

The **smart** namespace has two commands and is based on S.M.A.R.T. service functions found in the SCALE API and web UI.
It provides access to S.M.A.R.T. service management methods through the **smart** commands.

## SMART Commands

The following **smart** commands allow you to view and edit smart properties.

You can enter commands from the main CLI prompt or from the smart namespace prompt.

{{< include file="/_includes/CLIGuideWIP.md" >}}

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Config Command

The `config` command returns a table with current UPS settings. 

{{< expand "Using the Config Command">}}
#### Description
The `config` command has no required properties.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of current S.M.A.R.T. service settings when successful.

#### Usage
From the CLI prompt, enter:

`service smart config`

{{< expand "Command Example" "v" >}}
````
service smart config
+---------------+-------+
|            id | 1     |
|      interval | 30    |
|     powermode | NEVER |
|    difference | 0     |
| informational | 0     |
|      critical | 0     |
+---------------+-------+
````
{{< /expand >}}
{{< /expand >}}

### Update Command
The `update` command allows you to update S.M.A.R.T. service settings.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `update` command has five optional properties; `interval`, `powermode`, `difference`, `informational`, and `critical`.
See **Update Command Properties** below for details.
After entering `update`, you must include at least one property to update. Separate additional properties with a space.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a blank line when successful.

{{< expand "Update Command Properties">}}
{{< truetable >}}
| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `interval` | Defines the value in minutes for [smartd](https://linux.die.net/man/8/smartd) to wake up and check if any tests are configured to run. | <code>interval=<i>number</i></code> |
| `powermode` | S.M.A.R.T. power mode to apply. <br><li>`NEVER` where the device is fully powered up and ready to send/receive data. The disk only undergoes S.M.A.R.T. tests when powermode is set to `NEVER`. Default value is `NEVER`. <br><li>`IDLE` where the disk completes commands slower than when set to `NEVER` but uses less power. <br><li>`STANDBY` where the disk completes commands slower than when set to `IDLE` but uses less power. <br><li>`SLEEP` where the disk does not complete commands until reset. Uses the least amount of power.</li> | powermode=:<i>MODE<i/></code> |
| `difference` | Enter the threshold temperature in Celsius. Report if the temperature of a drive has changed by this many degrees Celsius since the last report. 0 disables the report. Enter the property argument using the `=` to separate the property and double-quoted value. | <code>difference=<i>number</i></code> |
| `informational` | Enter the threshold temperature in Celsius. Report if the drive temperature is at or above this temperature in Celsius. 0 disables the report. Enter the property argument using the `=` to separate the property and double-quoted value. | <code>informational=<i>number</i></code> |
| `critical` | Enter the threshold temperature in Celsius. If the drive temperature is higher than this value, a LOG_CRIT level log entry is created and an email is sent. 0 disables this check. Enter the property argument using the `=` to separate the property and double-quoted value. | <code>critical=<i>number</i></code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>service smart update <i>property</i>=<i>value</i></code>

Where:
* *property* is the property you want to update.
* *value* is the value you want to specify for the *property*.

{{< expand "Command Example" "v" >}}
```
service smart update interval=30 powermode=NEVER difference=0 informational=0 critical=0
```
{{< /expand >}}
{{< /expand >}}
