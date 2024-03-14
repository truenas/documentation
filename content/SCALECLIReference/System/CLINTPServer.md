---
title: "NTP_Server"
description: "Provides information about the system ntp_server namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 80
aliases:
draft: false
tags:
- settings
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Ntp_Server Namespace
The **ntp_server** namespace has five commands and is based on NTP server management functions found in the SCALE API and web UI.
It provides access to system ntp server methods through the **ntp_server** commands.

## Ntp_Server Commands
The following **ntp-server** commands allow you to run jobs related to adding and managing NTP servers.

You can enter commands from the main CLI prompt or from the **ntp_server** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Create Command
Use the `create` command to add an NTP time server to the system and configure server properties.

{{< expand "Using the Create Command" "v" >}}
#### Description
The `create` command has one required property, `address`, and six optional properties (see **Create Properties** below for details.)
Enter property arguments using the `=` delimiter to separate property and value. Double-quote values with special characters.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line when successful. If unable to reach the server, use `force=true` to continue.

{{< expand "Create Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `address` | Yes | Enter the hostname or IP address of the NTP server. | <code>address="<i>ntpServerHostname</i>"</code> |
| `burst` | No | Enter `true` to enable and make sure that the  server is reachable and send a burst of eight packets instead of one. This is designed to improve timekeeping quality with the server command. Recommended when `maxpoll` is greater than 10. Only use on personal NTP servers or those under direct control. Do not enable when using public NTP servers. | `burst=true` or `burst=false` |
| `iburst` | No | Enter `true` to speed up the initial synchronization to take seconds rather than minutes. | `iburst=true` or `iburst=false` |
| `prefer` | No | Enter `true` to mark the specified server as preferred. When all other things are equal, this host is chosen for synchronization acquisition with the server command. We recommend using this for servers with time monitoring hardware. Should only be used for highly accurate NTP servers, such as those with time monitoring hardware. | `prefer=true` or `prefer=false` |
| `minpoll` | No| Enter a numeric value to specify minimum polling time in seconds. Value must be a power of 2 and less than the `maxpoll` value. For example, 6 means 2^6, or 64 seconds. The default is 6, minimum value is 4. | <code>minpoll=<i>6</i></code> |
| `maxpoll` | No | Enter a numeric value to specify the maximum polling time in seconds. It must be a power of 2 and greater than the `minpoll` value. For example, 10 means 2^10, or 1024 seconds. The default is 10, maximum value is 17. | <code>maxpoll=<i>10</i></code> |
| `force` | No | Enter `true` to force the addition of the NTP server, even if it is currently unreachable. | `force=true` |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system ntp_server create address="<i>0.uk.pool.ntp.org</i>"</code>

Where *0.uk.pool.ntp.org* is the hostname for an NTP time server.

{{< expand "Command Example" "v" >}}
```
system ntp_server create address="0.uk.pool.ntp.org" force=true

```
{{< /expand >}}
{{< /expand >}}

### Delete Command
The `delete` command removes the NTP server matching the system-assigned `id`.

Use the `system ntp_server query` command to get the ID numbers for all NTP servers configured on the system.

{{< expand "Using the Delete Command" "v" >}}
#### Description
The `delete` command has one required property, `id`.
`id` is the system-assigned number for the NTP server.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line when successful.

Use the `system ntp_server query` command to verify the server is deleted.

#### Usage
From the CLI prompt, enter:

<code>system ntp_server delete id=<i>4</i></code>

Where *4* is the system-assigned ID number for an NTP server.

{{< expand "Command Example" "v" >}}
```
system ntp_server delete id=4

```
{{< /expand >}}
{{< /expand >}}

### Get_Instance Command
The `get_instance` command returns the system-assigned ID number, address, and settings for the `id` entered.

Use the `system ntp_server query` command to obtain the NTP server ID numbers.

{{< expand "Using the Get_Instance Command" "v" >}}
#### Description
The `get_instance` command has one required property, `id`.
`id` is the system-assigned number for the NTP server.
Enter the command string then press <kbd>Enter</kbd>.
The command returns the system-assigned ID number, server address, and the burst, iburst, prefer, min and max poll settings.

#### Usage
From the CLI prompt, enter:

<code>system ntp_server get_instance id=<i>1</i></code>

Where *1* is the system-assigned ID number for an NTP server.

{{< expand "Command Example" "v" >}}
```
system ntp_server get_instance id=1
+---------+-----------------------+
|      id | 1                     |
| address | 0.debian.pool.ntp.org |
|   burst | false                 |
|  iburst | true                  |
|  prefer | false                 |
| minpoll | 6                     |
| maxpoll | 10                    |
+---------+-----------------------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command
The `query` command lists the system-assigned ID number, address, and settings for all NTP servers configured on the system.

{{< expand "Using the Query Command" "v" >}}
#### Description
The `query` command does not require entering a property argument, but you can specify one property to list only that information.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with the system-assigned ID number(s), server address(es), and the burst, iburst, prefer, min and max poll settings.

#### Usage
From the CLI prompt, enter:

<code>system ntp_server query</code>

{{< expand "Command Example" "v" >}}
```
system ntp_server query
+----+-----------------------+-------+--------+--------+---------+---------+
| id | address               | burst | iburst | prefer | minpoll | maxpoll |
+----+-----------------------+-------+--------+--------+---------+---------+
| 1  | 0.debian.pool.ntp.org | false | true   | false  | 6       | 10      |
| 2  | 1.debian.pool.ntp.org | false | true   | false  | 6       | 10      |
| 3  | 2.debian.pool.ntp.org | false | true   | false  | 6       | 10      |
| 4  | 0.uk.pool.ntp.org     | false | true   | false  | 6       | 10      |
+----+-----------------------+-------+--------+--------+---------+---------+
```
{{< /expand >}}
{{< /expand >}}

## Update Command
Use the `update` command to change the settings for an existing NTP server.

Use the `system ntp_server query` command to get the server ID.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `Update` command has one required property, `id`, and seven optional properties (see **Update Properties** below for details.)
`id` is the system-assigned number for an NTP server. Use the `system ntp_server query` command to get NTP server system IDs.

Enter property arguments using the `=` delimiter to separate property and value. Double-quote values with special characters.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line when successful. If unable to reach the server, use `force=true` to continue.

{{< expand "Update Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `address` | No | Enter the hostname or IP address of the NTP server. | <code>address="<i>ntpServerHostname</i>"</code> |
| `burst` | No | Enter `true` to enable and make sure that the server is reachable and send a burst of eight packets instead of one. This is designed to improve timekeeping quality with the server command. Recommended when `maxpoll` is greater than 10. Only use on personal NTP servers or those under direct control. Do not enable when using public NTP servers. | `burst=true` or `burst=false` |
| `iburst` | No | Enter `true` to speed up the initial synchronization to take seconds rather than minutes. | `iburst=true` or `iburst=false` |
| `prefer` | No | Enter `true` to mark the specified server as preferred. When all other things are equal, this host is chosen for synchronization acquisition with the server command. We recommend using this only for highly accurate NTP servers, such as those with time monitoring hardware. | `prefer=true` or `prefer=false` |
| `minpoll` | *Yes| Required when setting `maxpoll`. Enter a numeric value to specify minimum polling time in seconds. Value must be a power of 2 and less than the `maxpoll` value. For example, 6 means 2^6, or 64 seconds. The default is 6, minimum value is 4. | <code>minpoll=<i>6</i></code> |
| `maxpoll` | *Yes | Required when setting `minpoll`. Enter a numeric value to specify the maximum polling time in seconds. It must be a power of 2 and greater than the `minpoll` value. For example, 10 means 2^10, or 1024 seconds. The default is 10, maximum value is 17. | <code>maxpoll=<i>10</i></code> |
| `force` | No | Enter `true` to force the addition of the NTP server, even if it is currently unreachable. | `force=true` |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system ntp_server update id=<i>1</i> prefer=<i>true</i></code>

Where:
* *1* is the system-assigned ID for the NTP server.
* *true* makes this the preferred server.

{{< expand "Command Example" "v" >}}
```
system ntp_server update id=4 prefer=true

```
{{< /expand >}}
{{< /expand >}}
