---
title: "Pool"
description: "Provides information about the storage pool namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 30
aliases:
draft: false
tags:
- scaleclistorage
- scalepools
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Snapshot Namespace
The **pool** namespace has 23 commands, and is based on pool creation and management functions found in the SCALE API and web UI.
It provides access to storage pool methods through the **pool** commands.

## Snapshot Commands 
The following **pool** commands allow you to create new pools and manage existing pools.

You can enter commands from the main CLI prompt or from the snapshot namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Attach Command


{{< expand "Using the Attach Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Attachments Command


{{< expand "Using the Attachments Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Create Command


{{< expand "Using the Create Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Detach Command


{{< expand "Using the Detach Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Expand Command


{{< expand "Using the Expand Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Export Command


{{< expand "Using the Export Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Filesystem_Choices Command
The `filesystem_choices` command lists the dataset paths available on the system. Use the properties to modify the list to only include zvols (volumes) on the system.

{{< expand "Using the Filesystem_Choices Command" "v" >}}
#### Description
The `filesystem_choices` command has one optional property, `types`.
Enter the `filesystem_choices` command without the `types` property to list the dataset paths on the system.
`type` has two properties, `FILESYSTEM` and `VOLUME`. The default value for `type` includes both properties.
Use the `VOLUME` property to list only the zvols (paths) configured on the system.
Enter the `filesystem_choices` commmand using the `types` property argument with either the default value or with only the `FILESYSTEM` property to obtain the same list of dataset paths.
Enter property arguments using the `=` delimiter to separate propery and double-quoted values. 
Enclose the property value in the square brackets `[]`.
#### Usage
From the CLI prompt, enter:

`storage pool filesystem_choices`

To list only the storage volumes (zvols), enter:

`storage pool filesystem_choices types=["VOLUME"]`

{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Get_Disks Command done
The `get_disks` command lists the disks found in the pool matching the ID entered, or if no ID is entered, all disks on the system.

{{< expand "Using the Get_Disks Command" "v" >}}
#### Description
The `get_disks` has one optional property, `id`.
Enter the `get_disks` command without the `id` property argument to get a list of all disks (names) on the system.
Enter with the `id` property argument to get the disks in the pool matching the number entered.
`id` is the number given to the pool by the system at creation.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a list of disks (names) in the pool or on the system.

#### Usage
From the CLI prompt, enter:

`storage pool get_disks`

or to get the disks used in a specific pool, enter:

<code>storage pool get_disks id=<i>5</i></code>

Where *5* is the ID number assigned to the pool by the system at creation.
{{< expand "Command Example" "v> }}
```
storage pool get_disks
sdc
sda
sdd
sde
```
{{< /expand >}}
{{< /expand >}}

### Get_Instance Command done
The `get_instance` command returns a table of properties for the pool matching the ID entered. 

To view the same properties for all pools on the system use the [`query`](#query-command) command.

{{< expand "Using the Get_Instance_By_Name Command" "v" >}}
#### Description
The `get_instance` has one required property, `id`.
`id` is the number given to the pool by the system at creation.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table for the pool that includes the ID, name, GUID, path, status, healthy, warning, and status code status; a dictionary value for scan, topology, and autotrim, and storage values for pool size, allocated and free space, fragmentation and freeing, and the string values for size, allocated, free, and freeing.
If the name entered is not found the system returns a validation error.

#### Usage
From the CLI prompt, enter:

<code>storage pool get_instance=<i>5</i></code>

Where *5* is the pool ID number assigned by the system at pool creation.
{{< expand "Command Example" "v> }}
```
storage pool get_instance_by_name=tank
+---------------+--------------------+
|            id | 5                  |
|          name | tank2              |
|          guid | 981158589697766753 | 
|          path | /mnt/tank2         |
|        status | ONLINE             |
|          scan | <dict>             |
|      topology | <dict>             |
|       healthy | true               |
|       warning | false              |
|   status_code | OK                 |
| status_detail | true               |
|          size | 2989297238016      |
|     allocated | 3194880            |
|          free | 2989294043136      |
|       freeing | 0                  |
| fragmentation | 0                  |
|      size_str | 2989297238016      |
| allocated_str | 3194880            |
|      free_str | 2989294043136      |
|   freeing_str | 0                  |
|      autotrim | <dict>             |
+---------------+--------------------+
```
{{< /expand >}}
{{< /expand >}}

### Get_Instance_By_Name Command done
The `get_instance_by_name` command returns a table of properties for the pool matching the name entered. 
Use when you do not have the ID number required to use the `get_instance` command.

To view properties for all pools on the system use the [`query`](#query-command) command.

{{< expand "Using the Get_Instance_By_Name Command" "v" >}}
#### Description
The `get_instance_by_name` has one required property, `name`.
`name` is the name given the pool at creation.
Enter the property argument using the `=` delimiter to separate the property and value.
Double-quote the name if it includes a special character.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table for the pool that includes the ID, name, GUID, path, status, healthy, warning, and status code status; a dictionary value for scan, topology, and autotrim, and storage values for pool size, allocated and free space, fragmentation and freeing, and the string values for size, allocated, free, and freeing.
If the name entered is not found the system returns a validation error.

#### Usage
From the CLI prompt, enter:

<code>storage pool get_instance_by_name=<i>tank</i></code>

Where *tank* is the pool name assigned at pool creation.
{{< expand "Command Example" "v> }}
```
storage pool get_instance_by_name=tank
+---------------+--------------------+
|            id | 5                  |
|          name | tank2              |
|          guid | 981158589697766753 | 
|          path | /mnt/tank2         |
|        status | ONLINE             |
|          scan | <dict>             |
|      topology | <dict>             |
|       healthy | true               |
|       warning | false              |
|   status_code | OK                 |
| status_detail | true               |
|          size | 2989297238016      |
|     allocated | 3194880            |
|          free | 2989294043136      |
|       freeing | 0                  |
| fragmentation | 0                  |
|      size_str | 2989297238016      |
| allocated_str | 3194880            |
|      free_str | 2989294043136      |
|   freeing_str | 0                  |
|      autotrim | <dict>             |
+---------------+--------------------+
```
{{< /expand >}}
{{< /expand >}}

### Import_Find Command


{{< expand "Using the Import_Find Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Import_Pool Command


{{< expand "Using the Import_Pool Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Is_Upgraded


{{< expand "Using the Is_Upgraded Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Offline Command


{{< expand "Using the Offline Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Online Command



{{< expand "Using the Online Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Processes Command



{{< expand "Using the Processes Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Query Command 
The `query` command returns a table (dictionary) of all pools on the system. 

{{< expand "Using the Query Command" "v" >}} 
#### Description  
`query` does not require entering property arguments.
Enter the command then press <kbd>Enter</kbd>.
The `query` returns a table (dictionary) of all pools on the system. 
Information includes the ID, GUID, mount path, status, scan, topology, health and warning status and status code, size including allocated and free, freeing, fragmentation, and the size, allocated, free and freengin string, and the autotrim state. 

#### Usage 
From the CLI prompt, enter:

`storage pool query'

{{< expand "Command Example" "v" >}}
```
storage pool query
+----+-------+---------------------+------------+---------+--------+----------+---------+---------+-------------+---------------+---------------+------------+------------+ +-------+---------------+---------------+---------------+-------------+----------+
| id | name  | guid                | path       | status  | scan   | topology | healthy | warning | status_code | status_detail | size          | allocated  | free       | freeing | fragmentation | size_str      | allocated_str | freeing_str | autotrim |
+----+-------+---------------------+------------+---------+--------+----------+---------+---------+-------------+---------------+---------------+------------+------------+ +-------+---------------+---------------+---------------+-------------+----------+
| 4  | tank  | 1016066042284556131 | /mnt/tank  | ONLINE  | <dict> | <dict>   | true    | false   | OK          | <null>        | 2989297238016 | 4627304448 | 2984669933568 | 0       | 0             | 2989297238016 | 4627304448    | 0           | <dict>   |
| 5  | tank2 | 98111585897766753   | /mnt/tank2 | ONLINE  | <dict> | <dict>   | true    | false   | OK          | <null>        | 2989297238016 | 31994880   | 2989294043136 | 0       | 0             | 2989297238016 | 31994880   | 0           | <dict>   |
+----+-------+---------------------+------------+---------+--------+----------+---------+---------+-------------+---------------+---------------+------------+------------+ +-------+---------------+---------------+---------------+-------------+----------+
```
{{< /expand >}}
{{< /expand >}}

### Remove Command


{{< expand "Using the Remove Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Replace Command


{{< expand "Using the Replace Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Scrub Command


{{< expand "Using the Scrub Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Update Command


{{< expand "Using the Update Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Upgrade Command


{{< expand "Using the Upgrade Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}

### Validate_Name Command


{{< expand "Using the Validate_Name Command" "v" >}}
#### Description


#### Usage


{{< expand "Command Example" "v> }}


{{< /expand >}}
{{< /expand >}}


{{< taglist tag="scaleclistorage" limit="10" title="Related CLI Storage Articles" >}}
{{< taglist tag="scalepools" limit="10" title="Related Pool Articles" >}}