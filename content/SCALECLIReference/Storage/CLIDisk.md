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

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

## Disk Namespace

### Get_Instance Command

get_instance

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

### Get_Unused Command

The `get_unused` command returns disks that are not in use by any zpool. It will also return disks that are in use by any zpool that is exported. You can add the optional `join_partitions` argument to list disk partitions as well.

{{< expand "Listing Unused Disks" "v" >}}

#### Description
The `get_unused` command does not require entering properties or arguments, but it does contain have the optional `join_partitions` argument.
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
The command returns a table containing the identifier, name, subsystem, number, serial, LUN ID, size, description, transfer mode, HDD standby status, S.M.A.R.T. status, S.M.A.R.T. options, expire time, criticality, difference, informational status, model, rotation rate, drive type, ZFS globally unique identifier, bus type, dev name, enclosure, S.M.A.R.T. support, and pool for every disk in the system.

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
| `critical`       | <!--Not sure about this one.-->                |
| `difference`     | <!--Not sure about this one.-->                |
| `informational`  | Temperature alert informational report status. |
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

The `resize` command allows you to resize disks to a scpecified amount of gigabytes.

{{< expand "Resizing Disks">}}

#### Description
The `resize` command has three properties. They are `disks`, `sync`, and `raise_error`.
Enter the command string, then press <kbd>Enter</kbd>.
The command completion percentages when successful.

#### Usage

From the CLI prompt, enter:

<code>storage disk resize disks={"name":"<i>diskname</i>,<i>diskname</i>", "size":"<i>number</i>"} sync=<i>true/false</i> raise_error=<i>true/false</i><code>

Where:
* *diskname* is the name of the disk you want to resize. Seperate multiple disks with commas
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

retaste

smart_attributes

temperature

temperature_agg

temperature_alerts

temperatures

update

wipe




[test1234]> storage disk man resize
Takes a list of disks. Each list entry is a dict that requires a key, value pair.
`name`: string (the name of the disk (i.e. sda))
`size`: integer (given in gigabytes)
`sync`: boolean, when true (default) will synchronize the new size of the disk(s)
    with the database cache.
`raise_error`: boolean
    when true, will raise a `CallError` if any failures occur
    when false, will will log the errors if any failures occur

NOTE:
    if `size` is given, the disk with `name` will be resized
        to `size` (overprovision).
    if `size` is not given, the disk with `name` will be resized
        to it's original size (unoverprovision).


























{{< taglist tag="scaleclistorage" limit="10" title="Related CLI Storage Articles" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Dataset Articles" >}}