---
title: "Enclosure"
description: "Provides information about the storage enclosure namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 20
aliases:
draft: false
tags:
- enclosure
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Enclosure Commands

The **enclosure** namespace has four commands and is based on functions found in the SCALE API and web UI. 
It provides access to enclosure management methods through the four **enclosure** commands. 

You can enter commands from the main CLI prompt or from the **enclosure** namespace prompt.

### Get_Instance Command

The `get_instance` command displays the status of a specified enclosure.

{{< expand "Using the Get_Instance Command" "v" >}}
#### Description
The `get_instance` command only requires the `id` option. 
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
Command returns a table of values when entered correctly.

#### Usage
From the CLI prompt, enter:

<code>storage enclosure get_instance id=<i>name</i></code>

Where `id` is the enclosure id. For example, mapped_enclosure_0.

{{< expand "Command Example" "v" >}}
```
storage enclosure get_instance id=mapped_enclosure_0
+------------+--------------------+
|         id | mapped_enclosure_0 |
|       name | Drive Bays         |
|      model | R40                |
| controller | true               |
|   elements | <list>             |
|     number | 0                  |
|      label | Drive_Bays         |
+------------+--------------------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command

The `query` command lists all enclosures in the system.

{{< expand "Using the Query Command" "v" >}}
#### Description
The `query` command has no additional requirements. 
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with multiple outputs.

#### Usage
From the CLI prompt, enter:

`storage enclosure query`

{{< expand "Command Example" "v" >}}
```
storage enclosure query
+--------------------+------------+-------+------------+----------+--------+------------+
| id                 | name       | model | controller | elements | number | label      |
+----+---------------+------------+-------+------------+----------+--------+------------+
| mapped_enclosure_0 | Drive Bays | R40   | true       | <list>   | 0      | Drive_Bays |
+--------------------+------------+-------+------------+----------+--------+------------+
```
{{< /expand >}}
{{< /expand >}}

### Set_Slot_Status Command

The `set_slot_status` command forces a drive slot into a specified state. 

{{< expand "Using the Set_Slot_Status Command" "v" >}}
#### Description
The `set_slot_status` command has three required options, `enclosure_id`, `slot`, and `status`. 
`enclosure_id` is the ID assigned the enclosure and found in the output of the `storage enclosure query` command.
`slot` is the drive slot number.
`status` is the state you want to place the drive slot in. Options are `IDENTIFY`, `FAULT`, and `CLEAR`.
Enter the property arguments using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
Command returns an empty line when entered correctly.

#### Usage
From the CLI prompt, enter:

<code>storage enclosure set_slot_status enclosure_id=<i>idofenclosure</i> slot=<i>number</i> status=<i>CLEAR</i></code>

Where:
* `idofenclosure` is the enclosure id. For example, mapped_enclosure_0.
* `number` is the drive slot number. For example, to change the status of the first drive in the system, enter 1.
* `CLEAR` is the state you want to place the drive slot in.

{{< expand "Command Example" "v" >}}
```
storage enclosure set_slot_status enclosure_id=mapped_enclosure_0 slot=1 status=IDENTIFY

```
{{< /expand >}}
{{< /expand >}}

### Update Command

The `update` command lets you change the label in a specified enclosure, use to set the drive slot status. 

{{< expand "Using the Update Command" "v" >}}
#### Description
The `update` command has two required options, `id`, and `label`. 
`id` is the enclosure id found in the output of the `storage enclosure query` command. For example, mapped_enclosure_0.
`label` is the new name you want to give the label. For example, Front_Drive_Bays.
Enter the property argument using the `=` delimiter to separate property and values.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with multiple outputs.

#### Usage
From the CLI prompt, enter:

<code>storage enclosure update id=<i>idofenclosure</i> label=<i>string</i></code>

Where:
* `idofenclosure` is the enclosure id. For example, mapped_enclosure_0.
* `string` is the new name you want to give the label. For example, Front_Drive_Bays.

{{< expand "Command Example" "v" >}}
```
storage enclosure update id=mapped_enclosure_0 label=Front_Drive_Bays
```
{{< /expand >}}
{{< /expand >}}
