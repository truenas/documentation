---
title: "General"
description: "Provides information about the network general namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 20
aliases:
draft: false
tags:
- scaleclinetwork
- scalenetwork
book: SCALECLIReference
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}

## General Namespace
The **General** namespace has 1 command and is based on network creation and management functions found in the SCALE API and web UI.
It provides access to general network methods through the **general** commands.

## General Commands 
The following **General** commands allow you to view and manage existing general network settings.

You can enter commands from the main CLI prompt or from the **general** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Summary Command 
The `summary` command lists network default routes and nameserver IP addresses.

{{< expand "Using the Summary Command" "v" >}}
#### Description
The `summary` command does not require entering property arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with default routes, nameserver IP addresses, and a dictionary for IPs configured on the system.

#### Usage
From the CLI prompt, enter:

`network general summary`

{{< nest-expand "Command Example" "v" >}}
```
network general summary
+----------------+-------------+
|            ips | <dict>      |
| default_routes | 10.234.24.1 |
|    nameservers | 10.220.0.11 |
+----------------+-------------+
```
{{< /nest-expand >}}
{{< /expand >}}

{{< taglist tag="scaleclinetwork" vol="SCALE" limit="5" title="Related CLI Network Articles" >}}
{{< taglist tag="scalenetwork" vol="SCALE" limit="5" title="Related Network Articles" >}}
