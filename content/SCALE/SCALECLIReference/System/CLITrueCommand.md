---
title: "TrueCommand"
description: "Provides information about the system truecommand namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 100
aliases:
draft: false
tags:
- scaleclisystem
- scaleapikeys
---


{{< toc >}}

## Truecommand Namespace
The **truecommand** namespace has three commands, and is based on TrueCommand management functions found in the SCALE API and web UI.
It provides access to system TrueCommand setting methods through the **truecommand** commands.

## Truecommand Commands 
The following **truecommands** commands allow you to configure view current TrueCommand configuration settings, add an API key, or enable/disable the TrueCommand connection in SCALE.

You can enter commands from the main CLI prompt or from the **truecommand** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Config Command
The `config` command returns a table with SCALE TrueCommand configuration settings.

{{< expand "Using the Config Command" "v" >}}
#### Description
The `config` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a dictionary with the system-assigned ID number for the TrueCommand configuration, the API key, remote IP address, and enabled and service status. 

#### Usage
From the CLI prompt, enter:

<code>system truecommand config</code>

{{< expand "Command Example" "v" >}}
```
system truecommand config
+-------------------+----------------------------------+
|                id | 1                                |
|           api_key | <null>                           |
|           enabled | false                            |
| remote_ip_address | <null>                           |
|        remote_url | <null>                           |
|            status | DISABLED                         |
|     status_reason | Truecommand service is disabled. |
+-------------------+----------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Connected Command
The `connected` command returns a table with SCALE TrueCommand connection settings and status.

{{< expand "Using the Connection Command" "v" >}}
#### Description
The `connection` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a dictionary with the TrueCommand IP and URL, and connection and status information. 

#### Usage
From the CLI prompt, enter:

<code>system truecommand connected</code>

{{< expand "Command Example" "v" >}}
```
system truecommand connected
+-----------------+----------------------------------+
|       connected | false                            |
|  truecommand_ip | <null>                           |
| truecommand_url | <null>                           |
|          status | DISABLED                         |
|   status_reason | Truecommand service is disabled. |
+-----------------+----------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Update Command
The `update` command returns a table with SCALE TrueCommand connection settings and status.

Use `auth api_key create` to obtain a new API key.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `update` command has two property arguments, `enabled` and `api_key`.
If `enable` is set to `true` the TrueCommand instance is connected and enabled. It prompts you to enter the `api_key` argument.
Use `api_key` to add a new or replace an existing API key with a new key generated using either the UI or the `auth api_key create` command.
Enter property arguments using the `=` to separate propery and value. Double-quote values with special characters.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line. 

#### Usage
From the CLI prompt, enter:

<code>system truecommand update enabled=<i>true</i> api_key="<i>apiKeyString</i>"</code>

{{< expand "Command Example" "v" >}}
```
system truecommand update enabled=false

```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scaleclisystem" limit="10" title="Related CLI System Articles" >}}
{{< taglist tag="scaleapikeys" limit="10" title="Related API Key Articles" >}}