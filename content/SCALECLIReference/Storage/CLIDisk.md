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







### Query Command

The `query` command displays a table containing the identifier, name, subsystem, number, serial, LUN ID, size, description, transfer mode, HDD standby status, S.M.A.R.T. status, S.M.A.R.T. options, expire time, criticality, difference, informational status, model, rotation rate, drive type, ZFS globally unique identifier, bus type, dev name, enclosure, S.M.A.R.T. support, and pool for every disk in the system.

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































{{< taglist tag="scaleclistorage" limit="10" title="Related CLI Storage Articles" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Dataset Articles" >}}