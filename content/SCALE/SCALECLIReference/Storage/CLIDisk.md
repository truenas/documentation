---
title: "Disk"
description: "Provides information about the storage disk namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 15
aliases:
draft: false
tags:
- disks
---

## Disk Namespace

The **disk** namespace has 12 commands and is based on disk management functions found in the SCALE API and web UI.
It provides access to disk management methods through the **disk** commands.

## Disk Commands

The following **disk** commands allow you to view and edit disk properties.

You can enter commands from the main CLI prompt or from the disk namespace prompt.

{{< include file="/_includes/CLIGuideWIP.md" >}}

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Get_Instance Command

The `get_instance` command returns all the settings for a specified disk.

Use the [`query`](#query-command) command to locate the identification number for system disks.

{{< expand "Using the Get_Instance Command" "v" >}}
#### Description
The `get_instance` command has one property, `id`.
Enter the entire string listed as the **identifier** in the [`query`](#query-command) command output for the `identifier` property value.
Enter the property argument using the `=` delimiter separating the property and double-quoted value.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table containing the identifier, name, subsystem, number, serial, lunid, size, description, transfermode, hddstandby, advpowermgmt, togglesmart, smartoptions, expiretime, passwd, critical, difference, informational, model, rotationrate, type, kmip_uid, zfs_guid, bus, exported_zpool, unsupported_md_devices, duplicate_serial, enclosure, partitions, add devname properties for the specified disk.

#### Usage
From the CLI prompt, enter:

<code>storage disk get_instance id="<i>diskidentifier</i>"</code>

Where *diskidentifier* is the identifier of the disk you want to view.

{{< expand "Command Example" "v" >}}

```
[test1234] storage disk> get_instance id="{serial_lunid}N4G22WKK_5000cca24503ce58"
+----------------+-----------------------------------------+
|     identifier | {serial_lunid}N4G22WKK_5000cca24503ce58 |
|           name | sdl                                     |
|      subsystem | scsi                                    |
|         number | 2224                                    |
|         serial | N4G22WKK                                |
|          lunid | 5000cca24503ce58                        |
|           size | 2000398934016                           |
|    description |                                         |
|   transfermode | Auto                                    |
|     hddstandby | ALWAYS ON                               |
|   advpowermgmt | DISABLED                                |
|    togglesmart | true                                    |
|   smartoptions |                                         |
|     expiretime | <null>                                  |
|       critical | <null>                                  |
|     difference | <null>                                  |
|  informational | <null>                                  |
|          model | HUS726020AL4210                         |
|   rotationrate | 7200                                    |
|           type | HDD                                     |
|       zfs_guid | 5249139309134546836                     |
|            bus | SCSI                                    |
|        devname | sdl                                     |
|      enclosure | <dict>                                  |
| supports_smart | <null>                                  |
|           pool | <null>                                  |
+----------------+-----------------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Get_Unused Command

The `get_unused` command returns disks that are not in use by any zpool. It also returns disks used by any  exported zpool.
You can add the optional `join_partitions` property argument to list disk partitions as well.

{{< expand "Using the Get_Unused Command" "v" >}}
#### Description
The `get_unused` command does not require entering properties or arguments but has one optional `join_partitions` property.
Enter `join_partitions=true` to include disk partitions in the command output, or `false` to not include partition information.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table containing the identifier, name, subsystem, number, serial, lunid, size, description, transfermode, hddstandby, advpowermgmt, togglesmart, smartoptions, expiretime, passwd, critical, difference, informational, model, rotationrate, type, kmip_uid, zfs_guid, bus, exported_zpool, unsupported_md_devices, duplicate_serial, enclosure, partitions, add devname properties for every unused disk.

#### Usage
From the CLI prompt, enter:

`storage disk get_unused`

{{< expand "Command Example" "v" >}}

```
storage disk get_unused
+---------------------------------------------+------+-----------+--------+--------------+------------------+---------------+-------------+--------------+------------+--------------+-------------+--------------+------------+--------+----------+------------+---------------+---------------------------+--------------+------+----------+----------+------+----------------+------------------------+------------------+-----------+--------------+---------+
| identifier                                  | name | subsystem | number | serial       | lunid            | size          | description | transfermode | hddstandby | advpowermgmt | togglesmart | smartoptions | expiretime | passwd | critical | difference | informational | model                     | rotationrate | type | kmip_uid | zfs_guid | bus  | exported_zpool | unsupported_md_devices | duplicate_serial | enclosure | partitions   | devname |
+---------------------------------------------+------+-----------+--------+--------------+------------------+---------------+-------------+--------------+------------+--------------+-------------+--------------+------------+--------+----------+------------+---------------+---------------------------+--------------+------+----------+----------+------+----------------+------------------------+------------------+-----------+--------------+---------+
| {serial_lunid}1922221D389E_500a0751221d389e | sdb  | scsi      | 2064   | 1922221D389E | 500a0751221d389e | 3840755982336 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | Micron_5210_MTFDDAK3T8QDE | <null>       | SSD  | <null>   | <null>   | ATA  | pool           | <null>                 | <empty list>     | <dict>    | <empty list> | sdb     |
| {serial_lunid}195027AFFE1B_500a075127affe1b | sda  | scsi      | 2048   | 195027AFFE1B | 500a075127affe1b | 960197124096  |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | Micron_5210_MTFDDAK960QDE | <null>       | SSD  | <null>   | <null>   | ATA  | pool           | <null>                 | <empty list>     | <dict>    | <empty list> | sda     |
| {serial_lunid}N4G22YKK_5000cca24503cf50     | sdm  | scsi      | 2240   | N4G22YKK     | 5000cca24503cf50 | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>   | SCSI | <null>         | <null>                 | <empty list>     | <dict>    | <empty list> | sdm     |
...
+---------------------------------------------+------+-----------+--------+--------------+------------------+---------------+-------------+--------------+------------+--------------+-------------+--------------+------------+--------+----------+------------+---------------+---------------------------+--------------+------+----------+----------+------+----------------+------------------------+------------------+-----------+--------------+---------+
```
{{< /expand >}}
{{< /expand >}}

{{< expand "Listing Unused Disks with Partitions" "v" >}}

#### Description

Enter the `join_partitions` argument to return all partitions written to each disk. The default is false.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table containing the identifier, name, subsystem, number, serial, lunid, size, description, transfermode, hddstandby, advpowermgmt, togglesmart, smartoptions, expiretime, passwd, critical, difference, informational, model, rotationrate, type, kmip_uid, zfs_guid, bus, exported_zpool, unsupported_md_devices, duplicate_serial, enclosure, partitions, add devname properties for every unused disk.

#### Usage

From the CLI prompt, enter:

`storage disk get_unused join_partitions=true`

{{< expand "Command Example" "v" >}}
```
storage disk get_unused join_partition=true
+---------------------------------------------+------+-----------+--------+--------------+------------------+---------------+-------------+--------------+------------+--------------+-------------+--------------+------------+--------+----------+------------+---------------+---------------------------+--------------+------+----------+---------------------+------+----------------+------------------------+------------------+-----------+--------------+---------+
| identifier                                  | name | subsystem | number | serial       | lunid            | size          | description | transfermode | hddstandby | advpowermgmt | togglesmart | smartoptions | expiretime | passwd | critical | difference | informational | model                     | rotationrate | type | kmip_uid | zfs_guid            | bus  | exported_zpool | unsupported_md_devices | duplicate_serial | enclosure | partitions   | devname |
+---------------------------------------------+------+-----------+--------+--------------+------------------+---------------+-------------+--------------+------------+--------------+-------------+--------------+------------+--------+----------+------------+---------------+---------------------------+--------------+------+----------+---------------------+------+----------------+------------------------+------------------+-----------+--------------+---------+
| {serial_lunid}1922221D389E_500a0751221d389e | sda  | scsi      | 2048   | 1922221D389E | 500a0751221d389e | 3840755982336 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | Micron_5210_MTFDDAK3T8QDE | <null>       | SSD  | <null>   | 610162502926887568  | ATA  | <null>         | <null>                 | <empty list>     | <dict>    | <empty list> | sda     |
| {serial_lunid}195027AFFE1B_500a075127affe1b | sdb  | scsi      | 2064   | 195027AFFE1B | 500a075127affe1b | 960197124096  |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | Micron_5210_MTFDDAK960QDE | <null>       | SSD  | <null>   | <null>              | ATA  | pool           | <null>                 | <empty list>     | <dict>    | <list>       | sdb     |
| {serial_lunid}N4G22YKK_5000cca24503cf50     | sdm  | scsi      | 2240   | N4G22YKK     | 5000cca24503cf50 | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>              | SCSI | <null>         | <null>                 | <empty list>     | <dict>    | <empty list> | sdm     |
...
+---------------------------------------------+------+-----------+--------+--------------+------------------+---------------+-------------+--------------+------------+--------------+-------------+--------------+------------+--------+----------+------------+---------------+---------------------------+--------------+------+----------+---------------------+------+----------------+------------------------+------------------+-----------+--------------+---------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command

The `query` command displays information about all disks on the system.

{{< expand "Using the Query Command" "v" >}}
#### Description
The `query` command does not require entering property arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table containing the identifier, name, subsystem, number, serial, LUN ID, size, description, transfer mode, HDD standby status, S.M.A.R.T. status, S.M.A.R.T. options, expiration time, criticality, difference, informational status, model, rotation rate, drive type, ZFS globally unique identifier, bus type, dev name, enclosure, S.M.A.R.T. support, and pool for every disk in the system.

#### Usage
From the CLI prompt, enter:

`storage disk query`

{{< expand "Command Example" "v" >}}
```
storage disk query
+-----------------------------------------+---------+-----------+--------+----------+------------------+---------------+-------------+--------------+------------+--------------+-------------+--------------+------------+----------+------------+---------------+-----------------+--------------+------+----------+----- +---------+-----------+----------------+--------+
| identifier                              | name    | subsystem | number | serial   | lunid            | size          | description | transfermode | hddstandby | advpowermgmt | togglesmart | smartoptions | expiretime | critical | difference | informational | model           | rotationrate | type | zfs_guid | bus  | devname | enclosure | supports_smart | pool   |
+-----------------------------------------+---------+-----------+--------+----------+------------------+---------------+-------------+--------------+------------+--------------+-------------+--------------+------------+----------+------------+---------------+-----------------+--------------+------+----------+----- +---------+-----------+----------------+--------+
| {serial_lunid}1922221D389E_500a0751221d | sdb     | scsi      | 2064   | 1922221D | 500a0751221d389e | 3840755982336 |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | <null>       | SSD  | <null>   | ATA  | sdb     | <dict>    | <null>         | <null> |
| {serial_lunid}195027AFFE1B_500a075127af | sda     | scsi      | 2048   | 195027AF | 500a075127affe1b | 960197124096  |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | <null>       | SSD  | <null>   | ATA  | sda     | <dict>    | <null>         | <null> |
| {serial_lunid}201933800364_e8238fa6bf53 | nvme0n1 | nvme      | 66304  | 20193380 | e8238fa6bf530001 | 250059350016  |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | WDC WDS250G2B0C | <null>       | SSD  | <null>   | M.2  | nvme0n1 | <null>    | <null>         | <null> |
| {serial_lunid}K5H570LA_5000cca25e41ded4 | sdc     | scsi      | 2080   | K5H570LA | 5000cca25e41ded4 | 2000398934016 |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | 7200         | HDD  | 149036   | SCSI | sdc     | <dict>    | <null>         | <null> |
...
+-----------------------------------------+---------+-----------+--------+----------+------------------+---------------+-------------+--------------+------------+--------------+-------------+--------------+------------+----------+------------+---------------+-----------------+--------------+------+----------+----- +---------+-----------+----------------+--------+

```
{{< /expand >}}
{{< /expand >}}

{{< expand "Running a Filtered Disk Query" "v" >}}
#### Description
Enter the query command with one of the optional attributes to filter out other attributes from the query return.
See **Query Attributes** below for the list of 26 available `query` attributes.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with the specified attribute.

{{< expand "Query Attributes" "v" >}}
{{< truetable >}}
| Attribute        | Purpose                                        |
|------------------|------------------------------------------------|
| `identifier`     | Disk serial number and LUN ID.                 |
| `name`           | Disk name.                                     |
| `subsystem`      | Disk subsystem (SAS, SCSI, NVME)               |
| `number`         | Disk number.                                   |
| `serial`         | Disk serial.                                   |
| `lunid`          | Disk LUN ID.                                   |
| `size`           | Disk size in bytes.                            |
| `description`    | Disk description.                              |
| `transfermode`   | Disk transfer mode.                            |
| `hddstandby`     | HDD standby timer.                             |
| `advpowermgmt`   | Advanced power management profile.             |
| `togglesmart`    | S.M.A.R.T. status.                             |
| `smartoptions`   | Applied S.M.A.R.T. options.                    |
| `expiretime`     | <!--Not sure about this one.-->                |
| `critical`       | Threshold temperature in Celsius               |
| `difference`     | Report if the temperature of a drive has changed by this many degrees Celsius since the last report. |
| `informational`  | Report if the drive temperature is at or above this temperature in Celsius. 0 disables the report. |
| `model`          | Disk model number.                             |
| `rotationrate`   | Disk rotation rate.                            |
| `type`           | Disk type (HDD, SSD, NVME).                    |
| `zfs_guid`       | Disk ZFS ID.                                   |
| `bus`            | Disk bus type (ATA, SCSI, M.2).                |
| `devname`        | Disk developer name.                           |
| `enclosure`      | Disk enclosure.                                |
| `supports_smart` | Disk S.M.A.R.T. support status.                |
| `pool`           | Disk pool.                                     |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage disk query <i>attribute</i></code>

Where:
* *attribute* is the attribute you want to filter in the query.

{{< expand "Command Example" "v" >}}
```
storage disk query name
+---------+
| name    |
+---------+
| sdb     |
| sda     |
| nvme0n1 |
| sdc     |
...
+---------+
```
{{< /expand >}}
{{< /expand >}}

### Resize Command

The `resize` command allows you to resize disks to a specific size in gigabytes.

Use the [`query`](#query-command) command to locate the name for system disks.

{{< expand "Using the Resize Command">}}
#### Description
The `resize` command has one required property, `disks`, and two optional properties, `sync`, and `raise_error`.
See **Resize Properties** below for details.
Enter the command string then press <kbd>Enter</kbd>.
The command returns completion percentages when successful.

{{< expand "Resize Command Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `disks` | Yes | Use to specify the disks and size (optional) in gigabytes. Enter the `name` property argument using `:` to separate double-quoted property and value. Separate multiple disk values with a comma. Enter the `size` property argument using `:` to separate double-quoted property and value. The default value for `size` is null. Enclose both `name` and `size` in curly brackets `{}`.<br><br> If `size` is smaller than the physical space available on the disk, the remaining space is reserved for over-provisioning. If `size` is not given, the disk reverts to its original size (un-overprovision). | <code>disks={"name":"<i>diskname1</i>","<i>diskname2</i>", "size":"<i>number</i>"}</code> |
| `sync` | No | Enter `true` to synchronize new sizes of the disks with the database cache. The default is true. | `sync=true` or `sync=false` |
| `raise_error` | No | Enter `true` to set the disk(s) to raise a CallError upon failure, or `false` to only log errors. The default is false. | `raise_error=true` or `raise_error=false` |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage disk resize disks={"name":"<i>diskname1</i>,<i>diskname2</i>", "size":"<i>number</i>"} sync=<i>true/false</i> raise_error=<i>true/false</i></code>

Where:
* *diskname1* and *diskname2* are the names of the disk you want to resize.
* *number* is the size (in gigabytes) to resize the disk(s) to.
* *true/false* in the `sync` property enables or disables synchronizing the new size of the disk(s) with the database cache.
* *true/false* in the `raise_error` property sets whether the disk(s) raise a CallError upon failure (true) or only log errors (false).

{{< expand "Command Example" "v" >}}
```
storage disk resize disks={"name":"sda,sdb", "size":"894"} sync=true raise_error=false
[0%] ...
[100%] ...
```
{{< /expand >}}
{{< /expand >}}

### Retaste Command

The `retaste` command forces the system to re-read specified disks and update their data.

Use the [`query`](#query-command) command to locate the identification number for system disks.

{{< expand "Using the Retaste Command">}}
#### Description
The `retaste` command has one required property, `disks`.
Enter the `disks` property argument using `=` to separate property and value. Separate multiple disks with a comma.
Enter the command string then press <kbd>Enter</kbd>.
The command returns completion percentages when successful.

#### Usage
From the CLI prompt, enter:

<code>storage disk retaste disks=<i>name1</i>,<i>name2</i></code>

Where *name1* and *name2* are the names of the disks you want to retaste.

{{< expand "Command Example" "v" >}}
````
storage disk retaste disks=sdl
[85%] Retasting disks...
[95%] Waiting for disk events to settle...
[100%] Retasting disks done...
SUCCESS
````
{{< /expand >}}
{{< /expand >}}

### Smart_Attributes Command

The `smart_attributes` command returns S.M.A.R.T. attributes values for specified disk.

Use the [`query`](#query-command) command to locate the identification number for system disks.

{{< hint type=note >}}
Only devices with the ATA bus type support S.M.A.R.T. attributes.
{{< /hint >}}
{{< expand "Using the Smart_Attributes Command" "v" >}}
#### Description
The `smart_attributes` command has one required property, `disks`, which specifies the disk you want to view S.M.A.R.T. attributes for.
Enter the property argument using `=` to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with S.M.A.R.T. attributes when successful.

#### Usage
From the CLI prompt, enter:

<code>storage disk smart_attributes name=<i>diskname</i></code>

Where *diskname* is the name of the disk you want to view S.M.A.R.T. attributes for.

{{< expand "Command Example" "v" >}}
```
storage disk smart_attributes name=sda
+-----+-------------------------+-------+-------+--------+-------------+--------+--------+
| id  | name                    | value | worst | thresh | when_failed | flags  | raw    |
+-----+-------------------------+-------+-------+--------+-------------+--------+--------+
| 1   | Raw_Read_Error_Rate     | 100   | 100   | 50     |             | <dict> | <dict> |
| 5   | Reallocated_Sector_Ct   | 100   | 100   | 1      |             | <dict> | <dict> |
| 9   | Power_On_Hours          | 100   | 100   | 0      |             | <dict> | <dict> |
| 12  | Power_Cycle_Count       | 100   | 100   | 1      |             | <dict> | <dict> |
| 170 | Reserved_Block_Pct      | 100   | 100   | 10     |             | <dict> | <dict> |
| 171 | Program_Fail_Count      | 100   | 100   | 0      |             | <dict> | <dict> |
| 172 | Erase_Fail_Count        | 100   | 100   | 1      |             | <dict> | <dict> |
| 173 | Avg_Block-Erase_Count   | 100   | 100   | 0      |             | <dict> | <dict> |
| 174 | Unexpect_Power_Loss_Ct  | 100   | 100   | 0      |             | <dict> | <dict> |
| 183 | SATA_Int_Downshift_Ct   | 100   | 100   | 0      |             | <dict> | <dict> |
| 184 | End-to-End_Error        | 100   | 100   | 0      |             | <dict> | <dict> |
| 187 | Reported_Uncorrect      | 100   | 100   | 0      |             | <dict> | <dict> |
| 188 | Command_Timeout         | 100   | 100   | 0      |             | <dict> | <dict> |
| 194 | Temperature_Celsius     | 59    | 48    | 0      |             | <dict> | <dict> |
| 195 | Hardware_ECC_Recovered  | 100   | 100   | 0      |             | <dict> | <dict> |
| 196 | Reallocated_Event_Count | 100   | 100   | 0      |             | <dict> | <dict> |
| 197 | Current_Pending_Sector  | 100   | 100   | 0      |             | <dict> | <dict> |
| 198 | Offline_Uncorrectable   | 100   | 100   | 0      |             | <dict> | <dict> |
| 199 | UDMA_CRC_Error_Count    | 100   | 100   | 0      |             | <dict> | <dict> |
| 202 | Percent_Lifetime_Remain | 100   | 100   | 1      |             | <dict> | <dict> |
| 206 | Write_Error_Rate        | 100   | 100   | 0      |             | <dict> | <dict> |
| 246 | Total_LBAs_Written      | 100   | 100   | 0      |             | <dict> | <dict> |
| 247 | Host_Program_Page_Count | 100   | 100   | 0      |             | <dict> | <dict> |
| 248 | Bckgnd_Program_Page_Cnt | 100   | 100   | 0      |             | <dict> | <dict> |
| 180 | Unused_Rsvd_Blk_Cnt_Tot | 1     | 1     | 0      |             | <dict> | <dict> |
| 210 | RAIN_Success_Recovered  | 100   | 100   | 0      |             | <dict> | <dict> |
+-----+-------------------------+-------+-------+--------+-------------+--------+--------+
```
{{< /expand >}}
{{< /expand >}}

### Temperature Command

The `temperature` command returns the temperature of a specified disk.

Use the [`query`](#query-command) command to locate the identification number for system disks.

{{< expand "Using the Temperature Command">}}
#### Description
The `temperature` command has two required properties, `name` and `options`.
`options` has two required properties, `cache` and `powermode`.
See **Temperature Command Properties** below for details.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a temperature (in Celsius) when successful.

{{< expand "Temperature Command Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `name` | Yes | Use to specify the disk to see temperature for. Enter the `name` property argument using `:` to separate double-quoted property and value. Separate multiple disk values with a comma. Enter the `size` property argument using `:` to separate double-quoted property and value. The default value for `size` is null. Enclose both `name` and `size` in curly brackets `{}`. | <code>disks={"name":"<i>diskname1</i>","<i>diskname2</i>", "size":"<i>number</i>"}</code> |
| `options` | Yes | Use to retrieve previous temperatures for the disk by specifying how far back in seconds to go in the cache and to specify the power mode to apply. `cache` specifies the number of seconds to go in the cached temperature values to go to retrieve information. Enter the number property argument using `:` to separate double-quoted property and value. The default is null which returns the current temperature. `powermode` specifies the S.M.A.R.T. power mode to apply: <br><li>`NEVER` where the device is fully powered up and ready to send/receive data. The disk only undergoes S.M.A.R.T. tests when powermode is set to `NEVER`. The default value is `NEVER`. <br><li>`IDLE` where the disk completes commands slower than when set to `NEVER` but uses less power. <br><li>`STANDBY` where the disk completes commands slower than when set to `IDLE` but uses less power. <br><li>`SLEEP` where the disk does not complete commands until reset. Uses the least amount of power.</li> Enter property argument enclosed in curly brackets `{}`, with both `cache` and `powermode` using `:` to separate double-quoted properties and values, and each argument is separated with a comma. | <code>options={"cache"="<i>numberofseconds</i>","powermode":"<i>NEVER<i/>"}</code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage disk temperature name=<i>diskname</i> options={"cache":"<i>seconds</i>","powermode":"<i>MODE</i>"}</code>

Where:
* *diskname* is the name of a disk.
* *seconds* is how far back in seconds you want to view the disk temperature.
* *MODE* is the S.M.A.R.T. powermode you want to apply.

{{< expand "Command Example" "v" >}}
```
storage disk temperature name=sda options={"cache":"30","powermode":"NEVER"}
40
```
{{< /expand >}}
{{< /expand >}}

### Temperature_Agg Command

The `temperature_agg` command returns min/max/avg temperature for specified disks for a set amount of previous days.

Use the [`query`](#query-command) command to locate the identification number for system disks.

{{< expand "Using the Temperature_Agg Command">}}

#### Description
The `temperature_agg` command has one required property, `name`, and one optional property, `days`.
`days` specifies the number of days to include in the result. The default is 7.
Enter the property argument using `=` to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with the minimum, maximum, and average temperatures over the specified amount of days.

#### Usage

From the CLI prompt, enter:

<code>storage disk temperature_agg names=<i>diskname1</i>,<i>diskname2</i> days=<i>number</i></code>

Where
* *diskname1* and *diskname2* are the names of disks to include in the command output.
* *number* is the number of days you want to view temperatures for.

{{< expand "Command Example" "v" >}}
```
storage disk temperature_agg names=sda,sdb days=5
+-----+--------+
| sdb | <dict> |
| sda | <dict> |
+-----+--------+
```
{{< /expand >}}
{{< /expand >}}

### Temperature_Alerts Command

The `temperature_alerts` command returns existing temperature alerts for specified disks.

Use the [`query`](#query-command) command to locate the identification number for system disks.

{{< expand "Using the Temperature_Alerts Command" "v" >}}
#### Description
The `temperature_alerts` command has one required property, `name`.
Enter the property argument using the `=` to separate the property and value. Separate multiple values with a comma.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a list with all existing disk alerts.

#### Usage
From the CLI prompt, enter:

<code>storage disk temperature_alerts names=<i>diskname1</i>,<i>diskname2</i></code>

Where *diskname1* and *diskname2* are the names of the disks you want to view alerts for. Separate each disk name with a comma.

{{< expand "Command Example" "v" >}}
```
storage disk temperature_alerts names=sda,sdb
(empty list)
```
{{< /expand >}}
{{< /expand >}}

### Temperatures Command

The `temperatures` command returns temperatures for a list of specified disks and allows you to set the S.M.A.R.T. `powermode`.

Use the [`query`](#query-command) command to locate the identification number for system disks.

{{< expand "Checking Temperatures For Multiple Disks">}}

#### Description
The `temperatures` command has two required properties, `name` and `options`.
`options` has two required properties, `cache` and `powermode`.
See **Temperature Command Properties** found in the [`temperature`](#temperature-command) command section.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table of disk temperatures (in Celsius) when successful.

#### Usage
From the CLI prompt, enter:

<code>storage disk temperatures name=<i>diskname</i> options=<i>MODE</i></code>

Where
* *diskname* is the name of a disk.
* *MODE* is the S.M.A.R.T. powermode you want to apply.

{{< expand "Command Example" "v" >}}
```
storage disk temperatures name=sda,sdb options=NEVER
+-----+----+
| sda | 40 |
| sdb | 40 |
+-----+----+
```
{{< /expand >}}
{{< /expand >}}

### Update Command

The `update` command allows you to update settings for a specified disk.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `update` command requires entering `id` and has 12 additional required properties and three optional  properties.
See **Update Command Properties** below for details.
After specifying the `id` of the disk you want to update, you must include at least one property to update.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns nothing when successful.

{{< expand "Update Command Properties">}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `id` | Yes | Enter the full string found in the **identifier** column in the `query` command output.  Enter the property argument using the `=` to separate the property and double-quoted value. Value can be null. | <code>id="<i>identifiervalue</i>"</code> |
| `number` | Yes | Enter the disk number. Must be between 1 and 21 digits. Enter the property argument using the `=` to separate the propery and value. | <code>number=<i>number</i></code> |
| `lunid` | Yes | Enter the disk LUN ID. Can be numbers, letters, and symbols. Enter the property argument using the `=` to separate the property and double-quoted value. Value can be null. | <code>lunid=<i>"lunid"</i></code> |
| `description` | Yes | Enter the disk description. Enter the property argument using the `=` to separate the property and double-quoted value. | <code>description=<i>"description"</i></code> |
| `hddstandby` | Yes | Enter the HDD standby timer (in minutes). Options are `ALWAYS ON`, `5`, `10`, `20`, `30`, `60`, and `120`. Enter the property argument using the `=` to separate the property and double-quoted value. | <code>hddstandby=<i>"option"</i></code> |
| `advpowermgmt` | Yes | Enter the advanced power management profile. Options are `DISABLED`, `1`, `64`, `127`, `128`, `192`, and `254`. Enter the property argument using the `=` to separate the property and double-quoted value. | <code>advpowermgmt=<i>"option"</i></code> |
| `togglesmart` | Yes | Enter `true` to enable S.M.A.R.T. status. | <code>togglesmart=<i>true/false</i></code> |
| `smartoptions` | Yes | Enter the S.M.A.R.T. options to apply. Options are `NEVER`, `IDLE`, `STANDBY`, and `SLEEP`. Enter the property argument using the `=` to separate the property and double-quoted value. | <code>smartoptions=<i>option</i></code> |
| `critical` | Yes | Enter the threshold temperature in Celsius. If the drive temperature is higher than this value, a LOG_CRIT level log entry is created and an email is sent. 0 disables this check. Enter the property argument using the `=` to separate the property and double-quoted value. | <code>critical=<i>number</i></code> |
| `difference` | Yes | Enter the threshold temperature in Celsius. Report if the temperature of a drive has changed by this many degrees Celsius since the last report. 0 disables the report. Enter the property argument using the `=` to separate the property and double-quoted value. | <code>difference=<i>number</i></code> |
| `informational` | Yes | Enter the threshold temperature in Celsius. Report if the drive temperature is at or above this temperature in Celsius. 0 disables the report. Enter the property argument using the `=` to separate the property and double-quoted value. | <code>informational=<i>number</i></code> |
| `bus` | Yes | Enter the disk bus type (ATA, SCSI, M.2). Enter the property argument using the `=` to separate the property and double-quoted value. | <code>bus=<i>"option"</i></code> |
| `enclosure` | No | Enter a number for the disk enclosure. `enclosure` has two properties, `number` and `slot`. Enclose these property arguments in curly brackets `{}`. Enter the property arguments using the `:` to separate the double-quoted property and value of each property argument. Separate the `number` and `slot` property arguments with a comma. | <code>enclosure={"number":<i>"number"</i>,"slot":<i>"number"</i></code> |
| `pool` | Yes | Enter the disk pool or use null. Enter the property argument using the `=` to separate the property and double-quoted value. | N/a <!--I don't think this command does anything since you can't move disks to different pools.-->  |
| `passwd` | No | SED alphanumeric password. Enter the property argument using the `=` to separate the property and double-quoted value. | <code>password=<i>password</i></code> |
| `supports_smart` | No | Enter `true` to enable disk S.M.A.R.T. support status. | `supports_smart=true` or `supports_smart=false` |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage disk update id="<i>diskidentifier</i>" property=<i>option</i></code>

Where:
* *diskidentifier* is the full string value found in the **identifier** column of the `query` command output.
* *option* is any of the properties listed in the **Update Command Properties** table above.

{{< expand "Command Example" "v" >}}
```
storage disk update id="{serial_lunid}N4G22WKK_5000cca24503ce58" enclosure={"number":"1","slot":"1"}
```
{{< /expand >}}
{{< /expand >}}

### Wipe Command

The `wipe` command wipes a specified disk using various wipe modes.

{{< expand "Using the Wipe Command" "v" >}}

The `wipe` command has four required properties, `dev`, `mode`, `synccache`, and `swap_removal_options`.
See the **Wipe Command Properties** below for details.
After specifying the `dev` name of the disk you want to update, you must include at least one property to update.
Enter the command string then press <kbd>Enter</kbd>.
The command returns nothing when successful.

{{< expand "Wipe Command Properties">}}
{{< truetable >}}
| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `dev` | Enter the name of the disk (device). Enter the property argument using the `=` to separate the property and value. | <code>dev=<i>devname</i></code> |
| `mode` | Enter the mode to use when wiping the disk. Options are: <br><li>`QUICK` to clean the first and last 32 megabytes. <br><li>`FULL` to write the whole disk with zeros. <br><li>`FULL_RANDOM` to write the whole disk with random bytes.</li> Enter the property argument using the `=` to separate the property and value.| <code>mode=<i>wipemode</i></code> |
| `syncchace` | Enter `true` to enable synchronization with the cache after wiping the disk. The default is true. | `synccache=true` or `synccache=false` |
| `swap_removal_options` | Enter `true` to remove the swap file entry or swap partition after wiping the disk. The default is true. | `swap_removal_options=true` or `swap_removal_options=false` |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage disk wipe dev=<i>devname</i> mode=<i>wipemode</i> synccache=<i>true/false</i> swap_removal_options=<i>true/false</i></code>

Where:
* *devname* is the dev name of a disk.
* *wipemode* is the wipe mode to use on the disc.
* *true/false* to enable/disable synchronizing with the cache after wiping the disk.
* *true/false* to enable/disable swap_removal_options.

{{< expand "Command Example" "v" >}}
```
storage disk wipe dev=sdl mode=QUICK synccache=true swap_removal_options=true
```
{{< /expand >}}
{{< /expand >}}
