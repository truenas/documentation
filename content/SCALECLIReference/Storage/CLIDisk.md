---
title: "Disk"
description: "Provides information about the storage disk namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 15
aliases:
draft: false
tags:
- scaleclistorage
- scaledisks
---

{{< toc >}}

## Disk Namespace

The **disk** namespace has 12 commands and is based on disk management functions found in the SCALE API and web UI.
It provides access to disk management methods through the **disk** commands.

## Disk Commands

The following **disk** commands allow you to view and edit disk properties.

You can enter commands from the main CLI prompt or from the snapshot namespace prompt.

{{< include file="/_includes/CLIGuideWIP.md" >}}

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Get_Instance Command

The `get_instance` command returns all the settings for a specified disk.

{{< expand "Viewing Disk Settings" "v" >}}

#### Description
The `get_instance` command requires the `id` property.
Enter the command, then press <kbd>Enter</kbd>.
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

The `get_unused` command returns disks that are not in use by any zpool. 
It also returns disks that are in use by any zpool that is exported. 
You can add the optional `join_partitions` argument to list disk partitions as well.

{{< expand "Listing Unused Disks" "v" >}}

#### Description
The `get_unused` command does not require entering properties or arguments, but it does contain the optional `join_partitions` argument.
Enter the command, then press <kbd>Enter</kbd>.
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
| {serial_lunid}N4G20UVK_5000cca24503af7c     | sdn  | scsi      | 2256   | N4G20UVK     | 5000cca24503af7c | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>   | SCSI | testpool       | <null>                 | <empty list>     | <dict>    | <empty list> | sdn     |
| {serial_lunid}K5H4240A_5000cca25e3fc3ec     | sde  | scsi      | 2112   | K5H4240A     | 5000cca25e3fc3ec | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>   | SCSI | qaos           | <null>                 | <empty list>     | <dict>    | <empty list> | sde     |
| {serial_lunid}N4GA05ZY_5000cca2451231bc     | sdf  | scsi      | 2128   | N4GA05ZY     | 5000cca2451231bc | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>   | SCSI | qaos           | <null>                 | <empty list>     | <dict>    | <empty list> | sdf     |
| {serial_lunid}N4G123BK_5000cca24501f124     | sdg  | scsi      | 2144   | N4G123BK     | 5000cca24501f124 | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>   | SCSI | mymirror       | <null>                 | <empty list>     | <dict>    | <empty list> | sdg     |
| {serial_lunid}K5GS1SJA_5000cca25e29ec8c     | sdh  | scsi      | 2160   | K5GS1SJA     | 5000cca25e29ec8c | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>   | SCSI | mymirror       | <null>                 | <empty list>     | <dict>    | <empty list> | sdh     |
| {serial_lunid}K5H5G05A_5000cca25e4247bc     | sdi  | scsi      | 2176   | K5H5G05A     | 5000cca25e4247bc | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>   | SCSI | hotsparepool   | <null>                 | <empty list>     | <dict>    | <empty list> | sdi     |
| {serial_lunid}N4G9LPHY_5000cca24511760c     | sdj  | scsi      | 2192   | N4G9LPHY     | 5000cca24511760c | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>   | SCSI | ecrypt         | <null>                 | <empty list>     | <dict>    | <empty list> | sdj     |
| {serial_lunid}N4G2SZMY_5000cca245050b28     | sdk  | scsi      | 2208   | N4G2SZMY     | 5000cca245050b28 | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>   | SCSI | ecrypt         | <null>                 | <empty list>     | <dict>    | <empty list> | sdk     |
| {serial_lunid}N4G22WKK_5000cca24503ce58     | sdl  | scsi      | 2224   | N4G22WKK     | 5000cca24503ce58 | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>   | SCSI | <null>         | <null>                 | <empty list>     | <dict>    | <empty list> | sdl     |
+---------------------------------------------+------+-----------+--------+--------------+------------------+---------------+-------------+--------------+------------+--------------+-------------+--------------+------------+--------+----------+------------+---------------+---------------------------+--------------+------+----------+----------+------+----------------+------------------------+------------------+-----------+--------------+---------+
```
{{< /expand >}}
{{< /expand >}}

{{< expand "Listing Unused Disks with Partitions" "v" >}}

#### Description

The `join_partitions` argument determines if the `get_unused` command returns all partitions written to each disk. The default is false.
Enter the command, then press <kbd>Enter</kbd>.
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
| {serial_lunid}N4G20UVK_5000cca24503af7c     | sdn  | scsi      | 2256   | N4G20UVK     | 5000cca24503af7c | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>              | SCSI | testpool       | <null>                 | <empty list>     | <dict>    | <list>       | sdn     |
| {serial_lunid}K5H4240A_5000cca25e3fc3ec     | sde  | scsi      | 2112   | K5H4240A     | 5000cca25e3fc3ec | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | 7219490510887153759 | SCSI | <null>         | <null>                 | <empty list>     | <dict>    | <empty list> | sde     |
| {serial_lunid}N4GA05ZY_5000cca2451231bc     | sdf  | scsi      | 2128   | N4GA05ZY     | 5000cca2451231bc | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>              | SCSI | qaos           | <null>                 | <empty list>     | <dict>    | <list>       | sdf     |
| {serial_lunid}N4G123BK_5000cca24501f124     | sdg  | scsi      | 2144   | N4G123BK     | 5000cca24501f124 | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>              | SCSI | mymirror       | <null>                 | <empty list>     | <dict>    | <list>       | sdg     |
| {serial_lunid}K5GS1SJA_5000cca25e29ec8c     | sdh  | scsi      | 2160   | K5GS1SJA     | 5000cca25e29ec8c | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>              | SCSI | mymirror       | <null>                 | <empty list>     | <dict>    | <list>       | sdh     |
| {serial_lunid}K5H5G05A_5000cca25e4247bc     | sdi  | scsi      | 2176   | K5H5G05A     | 5000cca25e4247bc | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>              | SCSI | hotsparepool   | <null>                 | <empty list>     | <dict>    | <list>       | sdi     |
| {serial_lunid}N4G9LPHY_5000cca24511760c     | sdj  | scsi      | 2192   | N4G9LPHY     | 5000cca24511760c | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>              | SCSI | ecrypt         | <null>                 | <empty list>     | <dict>    | <list>       | sdj     |
| {serial_lunid}N4G2SZMY_5000cca245050b28     | sdk  | scsi      | 2208   | N4G2SZMY     | 5000cca245050b28 | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>              | SCSI | ecrypt         | <null>                 | <empty list>     | <dict>    | <list>       | sdk     |
| {serial_lunid}N4G22WKK_5000cca24503ce58     | sdl  | scsi      | 2224   | N4G22WKK     | 5000cca24503ce58 | 2000398934016 |             | Auto         | Always On  | Disabled     | true        |              | <null>     |        | <null>   | <null>     | <null>        | HUS726020AL4210           | 7200         | HDD  | <null>   | <null>              | SCSI | <null>         | <null>                 | <empty list>     | <dict>    | <list>       | sdl     |
+---------------------------------------------+------+-----------+--------+--------------+------------------+---------------+-------------+--------------+------------+--------------+-------------+--------------+------------+--------+----------+------------+---------------+---------------------------+--------------+------+----------+---------------------+------+----------------+------------------------+------------------+-----------+--------------+---------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command

The `query` command displays disk information.

{{< expand "Running a Simple Disk Query" "v" >}}

#### Description
Enter the  `query` command with no additional attributes to perform a basic query of all disks.
Enter the command, then press <kbd>Enter</kbd>.
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
| {serial_lunid}N4G0X7VK_5000cca24501a83c | sdd     | scsi      | 2096   | N4G0X7VK | 5000cca24501a83c | 2000398934016 |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | 7200         | HDD  | 243127   | SCSI | sdd     | <dict>    | <null>         | <null> |
| {serial_lunid}N4G22YKK_5000cca24503cf50 | sdm     | scsi      | 2240   | N4G22YKK | 5000cca24503cf50 | 2000398934016 |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | 7200         | HDD  | <null>   | SCSI | sdm     | <dict>    | <null>         | <null> |
| {serial_lunid}N4G20UVK_5000cca24503af7c | sdn     | scsi      | 2256   | N4G20UVK | 5000cca24503af7c | 2000398934016 |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | 7200         | HDD  | <null>   | SCSI | sdn     | <dict>    | <null>         | <null> |
| {serial_lunid}K5H4240A_5000cca25e3fc3ec | sde     | scsi      | 2112   | K5H4240A | 5000cca25e3fc3ec | 2000398934016 |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | 7200         | HDD  | <null>   | SCSI | sde     | <dict>    | <null>         | <null> |
| {serial_lunid}N4GA05ZY_5000cca2451231bc | sdf     | scsi      | 2128   | N4GA05ZY | 5000cca2451231bc | 2000398934016 |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | 7200         | HDD  | <null>   | SCSI | sdf     | <dict>    | <null>         | <null> |
| {serial_lunid}N4G123BK_5000cca24501f124 | sdg     | scsi      | 2144   | N4G123BK | 5000cca24501f124 | 2000398934016 |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | 7200         | HDD  | <null>   | SCSI | sdg     | <dict>    | <null>         | <null> |
| {serial_lunid}K5GS1SJA_5000cca25e29ec8c | sdh     | scsi      | 2160   | K5GS1SJA | 5000cca25e29ec8c | 2000398934016 |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | 7200         | HDD  | <null>   | SCSI | sdh     | <dict>    | <null>         | <null> |
| {serial_lunid}K5H5G05A_5000cca25e4247bc | sdi     | scsi      | 2176   | K5H5G05A | 5000cca25e4247bc | 2000398934016 |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | 7200         | HDD  | <null>   | SCSI | sdi     | <dict>    | <null>         | <null> |
| {serial_lunid}N4G9LPHY_5000cca24511760c | sdj     | scsi      | 2192   | N4G9LPHY | 5000cca24511760c | 2000398934016 |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | 7200         | HDD  | <null>   | SCSI | sdj     | <dict>    | <null>         | <null> |
| {serial_lunid}N4G2SZMY_5000cca245050b28 | sdk     | scsi      | 2208   | N4G2SZMY | 5000cca245050b28 | 2000398934016 |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | 7200         | HDD  | <null>   | SCSI | sdk     | <dict>    | <null>         | <null> |
| {serial_lunid}N4G22WKK_5000cca24503ce58 | sdl     | scsi      | 2224   | N4G22WKK | 5000cca24503ce58 | 2000398934016 |             | Auto         | ALWAYS ON  | DISABLED     | true        |              | <null>     | <null>   | <null>     | <null>        | HUS726020AL4210 | 7200         | HDD  | <null>   | SCSI | sdl     | <dict>    | <null>         | <null> |
+-----------------------------------------+---------+-----------+--------+----------+------------------+---------------+-------------+--------------+------------+--------------+-------------+--------------+------------+----------+------------+---------------+-----------------+--------------+------+----------+----- +---------+-----------+----------------+--------+

```
{{< /expand >}}
{{< /expand >}}

{{< expand "Running a Filtered Disk Query" "v" >}}
#### Description
Enter the query command with one of the additional attributes to filter out other attributes from the query return. 
There are 26 `query` attributes available.

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
| `informational`  | Report if drive temperature is at or above this temperature in Celsius. 0 disables the report. |
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
| sdd     |
| sdm     |
| sdn     |
| sde     |
| sdf     |
| sdg     |
| sdh     |
| sdi     |
| sdj     |
| sdk     |
| sdl     |
+---------+
```
{{< /expand >}}
{{< /expand >}}

### Resize Command

The `resize` command allows you to resize disks to a specific amount of gigabytes.

{{< expand "Resizing Disks">}}

#### Description
The `resize` command has three properties. They are `disks`, `sync`, and `raise_error`.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns completion percentages when successful.

#### Usage

From the CLI prompt, enter:

<code>storage disk resize disks={"name":"<i>diskname</i>,<i>diskname</i>", "size":"<i>number</i>"} sync=<i>true/false</i> raise_error=<i>true/false</i><code>

Where:
* *diskname* is the name of the disk you want to resize. Separate multiple disks with commas
* *number* is the size (in gigabytes) you want to resize the disk to.
* *true/false* in the `sync` property enables or disables synchronizing the new size of the disk(s) with the database cache. The default is true.
* *true/false* in the `raise_error` property sets whether the disk(s) raise a CallError upon failure (true) or will only log errors (false). The default is false.

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

{{< expand "Retasting Disks">}}

#### Description
The `retaste` command requires you to specify which disks you want to retaste.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns completion percentages when successful.

#### Usage

From the CLI prompt, enter:

<code>storage disk retaste disks=<i>name</i>,<i>name</i><code>

Where *name* is the name of a disk you want to retaste. Separate each disk name with a comma.

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

{{< hint type=note >}}
Only devices with the ATA bus type support S.M.A.R.T. attributes.
{{< /hint >}}

{{< expand "Viewing S.M.A.R.T. Attributes">}}

#### Description
The `smart_attributes` command requires you to specify which disk you want to view S.M.A.R.T. attributes for.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns a table with S.M.A.R.T. attributes when successful.

#### Usage

From the CLI prompt, enter:

<code>storage disk smart_attributes name=<i>diskname</i><code>

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

{{< expand "Checking Disk Temperature">}}

#### Description
The `temperature` command requires you to specify which disk you want to see the temperature for. You can also set the S.M.A.R.T. `powermode`, and retrieve previous temperatures using the `cache` option.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns a temperature (in Celsius) when successful.

#### Usage

From the CLI prompt, enter:

<code>storage disk temperature name=<i>diskname</i> options={"cache":"<i>seconds</i>","powermode":"<i>MODE</i>"}<code>

Where 
* *diskname* is the name of a disk.
* *seconds* is how far back in seconds you want to view the disk temperature. The default is null and returns the current temperature.
* *MODE* is the S.M.A.R.T. powermode you want to apply. The default is NEVER.

{{< expand "S.M.A.R.T. Powermodes">}}
{{< truetable >}}
| Mode      | Description                                                                                                                             |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------|
| `NEVER`   | The device is fully powered up and ready to send/receive data. The disk only undergoes S.M.A.R.T. tests when powermode is set to NEVER. |
| `IDLE`    | Disk completes commands slower than when set to NEVER but uses less power.                                                             |
| `STANDBY` | Disk completes commands slower than when set to IDLE but uses less power.                                                              |
| `SLEEP`   | Disk does not complete commands until reset. Uses the least amount of power
{{< /truetable >}}                                                             |
{{< /expand >}}


{{< expand "Command Example" "v" >}}
```
storage disk temperature name=sda options={"cache":"30","powermode":"NEVER"}
40
```
{{< /expand >}}
{{< /expand >}}

### Temperature_Agg Command

The `temperature_agg` command returns min/max/avg temperature for specified disks for a set amount of previous days.

{{< expand "Checking Disk Temperatures Over Time">}}

#### Description
The `temperature_agg` command requires you to specify which disks you want to see the temperatures for and the number of days you wish to include.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns a table with the minimum, maximum, and average temperatures over the specified amount of days.

#### Usage

From the CLI prompt, enter:

<code>storage disk temperature_agg names=<i>diskname</i>,<i>diskname</i> days=<i>number</i><code>

Where 
* *diskname* is the name of a disk.
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

{{< expand "Viewing Temperature Alerts" "v" >}}
#### Description
The `temperature_alerts` command requires you to specify the names of each disk for which you want to see existing temperature alerts.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns a list with all existing disk alerts.

#### Usage

From the CLI prompt, enter:

<code>storage disk temperature_alerts names=<i>diskname</i>,<i>diskname</i>

Where *diskname* is the name of a disk you want to view alerts for. Separate each disk name with a comma.

{{< expand "Command Example" "v" >}}
```
storage disk temperature_alerts names=sda,sdb
(empty list)
```
{{< /expand >}}
{{< /expand >}}

### Temperatures Command

The `temperatures` command

Returns temperatures for a list of specified disks and allows you to set the S.M.A.R.T. `powermode`.

{{< expand "Checking Temperatures For Multiple Disks">}}

#### Description
The `temperatures` command requires you to specify which disk you want to see the temperatures for. You can also set the S.M.A.R.T. `powermode`, and retrieve previous temperatures using the `cache` option.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns a table of disk temperatures (in Celsius) when successful.

#### Usage

From the CLI prompt, enter:

<code>storage disk temperatures name=<i>diskname</i> options=<i>MODE</i>

Where 
* *diskname* is the name of a disk. Separate each disk name with a comma.
* *MODE* is the S.M.A.R.T. powermode you want to apply. The default is NEVER.

{{< expand "S.M.A.R.T. Powermodes">}}
{{< truetable >}}
| Mode      | Description                                                                                                                             |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------|
| `NEVER`   | The device is fully powered up and ready to send/receive data. The disk only undergoes S.M.A.R.T. tests when powermode is set to NEVER. |
| `IDLE`    | Disk completes commands slower than when set to NEVER, but uses less power.                                                             |
| `STANDBY` | Disk completes commands slower than when set to IDLE, but uses less power.                                                              |
| `SLEEP`   | Disk does not complete commands until reset. Uses the least amount of power
{{< /truetable >}}                                                             |
{{< /expand >}}

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

{{< expand "Updating Disks">}}

#### Description
The `update` command has 15 configurable properties. After specifying the `id` of the disk you want to update, you must include at least one property to update.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns nothing when successful.

{{< expand "Update Properties">}}
{{< truetable >}}
| Property         | Description                                                                                                                                                              | Syntax Example                                                                                      |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `number`         | Disk number. Must be between 1 and 21 digits.                                                                                                                            | <code>number=<i>number</i></code>                                                                   |
| `lunid`          | Disk LUN ID. Can be numbers, letters, and symbols.                                                                                                                       | <code>lunid=<i>"lunid"</i></code>                                                                   |
| `description`    | Disk description.                                                                                                                                                        | <code>description=<i>"description"</i></code>                                                       |
| `hddstandby`     | HDD standby timer (in minutes). Options are ALWAYS ON, 5, 10, 20, 30, 60, and 120.                                                                                       | <code>hddstandby=<i>"option"</i></code>                                                             |
| `advpowermgmt`   | Advanced power management profile. Options are DISABLED, 1, 64, 127, 128, 192, and 254                                                                                   | <code>advpowermgmt=<i>"option"</i></code>                                                           |
| `togglesmart`    | S.M.A.R.T. status.                                                                                                                                                       | <code>togglesmart=<i>true/false</i></code>                                                          |
| `smartoptions`   | Applies S.M.A.R.T. options. Options are NEVER, IDLE, STANDBY, and SLEEP.                                                                                                 | <code>smartoptions=<i>option</i></code>                                                             |
| `critical`       | Threshold temperature in Celsius. If the drive temperature is higher than this value, a LOG_CRIT level log entry is created and an email is sent. 0 disables this check. | <code>critical=<i>number</i></code>                                                                 |
| `difference`     | Report if the temperature of a drive has changed by this many degrees Celsius since the last report. 0 disables the report.                                              | <code>difference=<i>number</i></code>                                                               |
| `informational`  | Report if drive temperature is at or above this temperature in Celsius. 0 disables the report.                                                                           | <code>informational=<i>number</i></code>                                                            |
| `bus`            | Disk bus type (ATA, SCSI, M.2).                                                                                                                                          | <code>bus=<i>"option"</i></code>                                                                    |
| `enclosure`      | Disk enclosure and slot.                                                                                                                                                 | <code>enclosure={"number":<i>"number"</i>,"slot":<i>"number"</i></code>                             |
| `supports_smart` | Disk S.M.A.R.T. support status.                                                                                                                                          | <code>togglesmart=<i>true/false/null</i></code>                                                     |
| `pool`           | Disk pool.                                                                                                                                                               | N/a <!--I don't think this command does anything since you can't move disks to different pools.-->  |
| `passwd`         | SED alphanumeric password.                                                                                                                                               | <code>password=<i>password</i></code>                                                               | 
{{< /truetable >}}
{{< /expand >}}

#### Usage

From the CLI prompt, enter:

<code>storage disk update id="<i>diskidentifier</i>" property=<i>option</i>

{{< expand "Command Example" "v" >}}
```
storage disk update id="{serial_lunid}N4G22WKK_5000cca24503ce58" enclosure={"number":"1","slot":"1"}
```
{{< /expand >}}
{{< /expand >}}

### Wipe Command

The `wipe` command wipes a specified disk using various wipe modes.

{{< expand "Wiping Disks">}}

The `wipe` command has three configurable properties. After specifying the `dev` name of the disk you want to update, you must include at least one property to update.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns nothing when successful.

#### Usage

From the CLI prompt, enter:

<code>storage disk wipe dev=<i>devname</i> mode=<i>wipemode</i> synccache=<i>true/false</i> swap_removal_options=<i>true/false</i>

	Where 
* *devname* is the dev name of a disk.
* *wipemode* is the wipe mode you want to use on the disc. Options are QUICK, FULL, and FULL_RANDOM.
* *true/false* for synccache determines if you want the disk to synchronize with the cache after it wipes. The default is true. 
* *true/false* for swap_removal_options determines if you want the disk to remove the entry for the swap file or swap partition after wiping. The default is true. 

{{< expand "Disk Wipe Modes">}}
{{< truetable >}}
| Mode        | Description                             |
|-------------|-----------------------------------------|
| QUICK       | Clean the first and last 32 megabytes.  |
| FULL        | Write whole disk with zeros.            |
| FULL_RANDOM | Write whole disk with random bytes.     |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Command Example" "v" >}}
```
<code>storage disk wipe dev=sdl mode=QUICK synccache=true swap_removal_options=true
```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scaleclistorage" limit="10" title="Related CLI Storage Articles" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Dataset Articles" >}}
