---
title: "System_Dataset"
description: "Provides information about the system system_dataset namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 95
aliases:
draft: false
tags:
- settings
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## System_dataset Namespace

The **system_dataset** namespace has 3 commands, and is based on system dataset storage functions found in the SCALE API and web UI.
It provides access to storage configuration methods through the **system_dataset** namespace commands.

## System_dataset Commands
The following **system_dataset** namespace commands allow you to review and update the configured system dataset.
The system dataset stores core files for debugging and keys for encrypted pools.
It also stores Samba4 metadata, such as the user and group cache and share-level permissions.

You can enter commands from the main CLI prompt or from the **system** namespace prompt.

### Config Command

The `config` command returns the current system dataset configuration.

{{< expand "Using the Config Command" "v" >}}

#### Description

`config` does not require entering properties or arguments.
Enter the command and then press <kbd>Enter</kbd>.

`config` returns a table showing information about the current system dataset pool as well as the `path` for system log storage.

#### Usage

From the CLI prompt, enter:

<code>system system_dataset config</code>

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system system_dataset config
+----------+----------------------------------+
|       id | 1                                |
|     pool | tank                             |
|     uuid | ae32c386e13840b2bf9c0083275e7941 |
|   uuid_b | <null>                           |
| pool_set | true                             |
| basename | tank/.system                     |
|   uuid_a | ae32c386e13840b2bf9c0083275e7941 |
|     path | /var/db/system                   |
+----------+----------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Pool_choices Command

The `pool_choices` command allows you to view all available pools that can host the system dataset.

{{< expand "Using the Pool_choices Command" "v" >}}

#### Description

`pool_choices` has one optional property, `include_current_pool` (default true). If `false` the query excludes the current system dataset pool.

`pool_choices` returns a table containing all available pools.

#### Usage

From the CLI prompt, enter:

<code>system dataset pool_choices include_current_pool=<em>true</em></code>

Where *true* is a boolean value.

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system system_dataset pool_choices include_current_pool=true
+-----------+-----------+
| boot-pool | boot-pool |
|      tank | tank      |
|     tank2 | tank2     |
+-----------+-----------+
```
{{< /expand >}}
{{< /expand >}}

### Update Command

The `update` command allows you to select a pool for the system dataset.
You can also use it to exclude a pool from being automatically selected, if a pool is not defined.

{{< expand "Using the Update Command" "v" >}}

#### Description

`update` has one required property, `pool`, and one optional property, `pool_exclude`.
Use [`pool_choices`](#pool_choices-command) to view the available pool options for either property.

`update` returns the percent complete status of the update.

#### Usage

From the CLI prompt, enter:

<code>system system_dataset update pool="<em>Tank</em>" pool_exclude="<em>Tank2</em>"</code>

Where *Tank* is the name of a valid pool to host the system dataset and *Tank2* is the name of a pool to remove from the options for automatic system dataset selection, if `pool` is not provided.

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system system_dataset update pool="Tank" pool_exclude="Tank2"
[0%] ...
[100%] ...

```
{{< /expand >}}
{{< /expand >}}
