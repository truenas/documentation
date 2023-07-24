---
title: "Enclosure"
description: "Provides information about the storage enclosure namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 20
aliases:
draft: false
tags:
- scaleclistorage
- scaleenclosure
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

## Enclosure Commands

The **enclosure** namespace has four commands and is based on functions found in the SCALE API and web UI. 
It provides access to enclosure management methods through the four **enclosure** commands. 

You can enter commands from the main CLI prompt or from the **enclosure** namespace prompt.

### Get_Instance Command

The `get_instance` command displays the status of a specified enclosure.

{{< expand "Listing Encloaures" "v" >}}

The `get_instance` command only requires the `id` option. Command returns a table of values when entered correctly.

From the CLI prompt, enter:

<code>enclosure get_instance id=<i>name</i></code>

From the **enclosure** prompt, enter:

<code>get_instance id=<i>name</i></code>

*If there are variables in the command include this section:*
Where:
* `id` is the enclosure id. For example, mapped_enclosure_0.

{{< expand "Command Example" "v" >}}
```
get_instance id=mapped_enclosure_0
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

{{< expand "Running a Simple Query" "v" >}}
The `query` command has no additional requirements. After entering the command, it returns a table with multiple outputs.

From the CLI prompt, enter:

<code>enclosure query</code>

From the **service** prompt, enter:

<code>query</code>

{{< expand "Command Example" "v" >}}
```
enclosure> query
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

{{< expand "Setting Drive Slot Status" "v" >}}
The `set_slot_status` command has three required options, `enclosure_id`, `slot`, and `status` to include in the command string. Command returns an empty line when entered correctly.

From the CLI prompt, enter:

<code>enclosure set_slot_status enclosure_id=<i>idofenclosure</i> slot=<i>number</i> status=<i>STATUS</i></code>

From the **enclosure** prompt, enter:

<code>set_slot_status enclosure_id=<i>idofenclosure</i> slot=<i>number</i> status=<i>IDENTIFY/FAULT/CLEAR</i></code>

Where:
* `enclosure_id` is the enclosure id. For example, mapped_enclosure_0.

* `slot` is the drive slot number. For example, to change the status of the virst drive in the system, enter 1.

* `status` is the state you want to place the drive slot in. Options are IDENTIFY, FAULT, and CLEAR.

{{< expand "Command Example" "v" >}}
```
set_slot_status enclosure_id=mapped_enclosure_0 slot=1 status=IDENTIFY
```
{{< /expand >}}
{{< /expand >}}

### Update Command

The `update` command lets you change the label in a specified enclosure. After entering the command, it returns a table with multiple outputs.

{{< expand "Setting Drive Slot Status" "v" >}}
The `update` command has two required options, `id`, and `label` to include in the command string. Command returns an empty line when entered correctly.

From the CLI prompt, enter:

<code>enclosure update id=<i>idofenclosure</i> label=<i>string</i></code>

From the **enclosure** prompt, enter:

<code>update id=<i>idofenclosure</i> label=<i>string</i></code>

Where:
* `id` is the enclosure id. For example, mapped_enclosure_0.

* `label` is the new name you want to give the label. For example, Front_Drive_Bays.

{{< expand "Command Example" "v" >}}
```
update id=mapped_enclosure_0 label=Front_Drive_Bays
```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scaleclistorage" limit="10" title="Related CLI Storage Articles" >}}
{{< taglist tag="scaleenclosure" limit="10" title="Related Enclosure Articles" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Disks Articles" >}}