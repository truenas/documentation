---
title: "Reporting"
description: "Introduces the TrueNAS CLI Reporting namespace that configures system reporting database related settings found in the API and web UI."
weight: 85
aliases:
draft: false
tags:
- reporting
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Reporting Namespace
The **reporting** namespace has 3 commands, and is based on system reporting functions found in the SCALE API and web UI.
It provides access to reporting database configuration methods through the **reporting** namespace commands and the child namespaces and their commands.

To view reporting graphs, go to [**Reporting**]({{< relref "/SCALE/SCALEUIReference/ReportingScreensSCALE.md" >}}) in the TrueNAS SCALE web UI.

<!-- The get/query related commands do not work in the CLI and are being removed, see: https://ixsystems.atlassian.net/browse/NAS-124086 -->

## Reporting Commands
The following **reporting** namespace commands allow you to configure the system reporting database.

You can enter commands from the main CLI prompt or from the **system** namespace prompt.

### Clear Command

The `clear` command erases all existing data from the system reporting database.

{{< expand "Using the Clear Command" "v" >}}

#### Description

`clear` does not require entering properties or arguments.

Enter the command string and then press <kbd>Enter</kbd>.

#### Usage

From the CLI prompt, enter:

`system reporting clear`

Press <kbd>Enter</kbd>.

The command returns an empty line.

{{< expand "Command Example" "v" >}}
```
system reporting clear

```
{{< /expand >}}
{{< /expand >}}

### Config Command

The `config` command returns the current system reporting configuration.

{{< expand "Using the Config Command" "v" >}}

#### Description

`config` does not require entering properties or arguments.

Enter the command string and then press <kbd>Enter</kbd>.

#### Usage

From the CLI prompt, enter:

`system reporting config`

Press <kbd>Enter</kbd>.

Returns a table containing current configuration properties.

{{< expand "Command Example" "v" >}}
```
system reporting config
+----------------------------+-------+
|                         id | 1     |
|                   graphite |       |
|                  graph_age | 12    |
|               graph_points | 1200  |
| graphite_separateinstances | false |
+----------------------------+-------+
```
{{< /expand >}}
{{< /expand >}}

### Update Command

The `update` command allows you to change system reporting configuration settings.

{{< expand "Using the Update Command" "v" >}}

#### Description

`update` has 5 optional properties, see table below.

Separate multiple properties with a single space.
Enter the full command string and then press <kbd>Enter</kbd>.

{{< expand "Update Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|---------------|
| `graphite` | No | Graphite integration is deprecated in TrueNAS SCALE 23.10 (Cobia). | |
| `graphite_separateinstances` | No | Graphite integration is deprecated in TrueNAS SCALE 23.10 (Cobia). | |
| `graph_age` | No | Sets the maximum age of stored reporting graphs in months. Requires the `confirm_rrd_destroy=true` flag to erase existing reporting data. | <code>graph_age=<em>12</em></code> |
| `graph_points` | No | Sets the number of points for each hourly, daily, weekly, monthly, and yearly graph. Requires the `confirm_rrd_destroy=true` flag to erase existing reporting data. | <code>graph_points=<em>1200</em></code> |
| `confirm_rrd_destroy` | Yes* | Required for either `graph_age` or `graph_points`. Erases all existing reporting database data. | <code>confirm_rrd_destroy=<em>true</em></code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage

From the CLI prompt, enter:

<code>system reporting update graph_age=<em>12</em> graph_points=<em>1200</em> confirm_rrd_destroy=true</code>

Where *12* is the maximum age of stored graphs in months and *1200* is the number of points for each graph.
Press <kbd>Enter</kbd>.

The command returns an empty line.
Use [`config`](#config-command) to confirm changes.

{{< expand "Command Example" "v" >}}
```
system reporting update graph_age=12 graph_points=1200 confirm_rrd_destroy=true
```
{{< /expand >}}
{{< /expand >}}
