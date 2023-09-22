---
title: "IPMI"
description: "Provides information about the network ipmi namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 40
aliases:
draft: false
tags:
- scaleclinetwork
- scalecliipmi
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}

## IPMI Namespace

The **ipmi** namespace has four commands and is based on user functions found in the SCALE API and web UI.
It provides access to IPMI (Intelligent Platform Management Interface) configuration and management options.

## IPMI Commands

The following **ipmi** namespace commands allow you to configure and manage IPMI access.

You can enter commands from the main CLI prompt or from the **network** namespace prompt.

### Channels Command

The `channels` command returns a list of available IPMI channels.

{{< expand "Viewing Available Channels" "v" >}}

#### Description

The `channels` command does not require entering properties or arguments.
Enter the command, then press <kbd>Enter</kbd>.
The command returns the number of IPMI channels the system has available.

#### Usage

From the CLI prompt, enter:

`network ipmi channels`

{{< expand "Command Example" "v" >}}
```
network ipmi channels
1
```
{{< /expand >}}
{{< /expand >}}

### Get_Instance Command

The `get_instance` command returns the settings for a user-specified IPMI channel.

{{< expand "Viewing IPMI Instances" "v" >}}

### Description
The `get_instance` command requires the `id` property, which is a single integer you can find using the `query` command.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns a table with the specified IPMI channel settings, including the IP address type, IP address, MAC address, subnet mask, gateway IP address, gateway MAC address, backup gateway IP, address, backup gateway MAC address, VLAN ID, VLAN ID status, and VLAN ID priority.

### Usage

From the CLI prompt, enter:

<code>network ipmi get_instance id=<i>number</i></code>

Where *number* is the IPMI channel ID you want to return settings for.

{{< expand "Command Example" "v" >}}
```
network ipmi get_instance id=1
+-----------------------------+-------------------+
|                     channel | 1                 |
|                          id | 1                 |
|           ip_address_source | static            |
|                  ip_address | 10.10.10.10       |
|                 mac_address | 3c:ec:de:5b:5e:58 |
|                 subnet_mask | 255.255.255.0     |
|  default_gateway_ip_address | 10.200.0.1        |
| default_gateway_mac_address | 00:00:00:00:00:00 |
|   backup_gateway_ip_address | 0.0.0.0           |
|  backup_gateway_mac_address | 00:00:00:00:00:00 |
|                     vlan_id | 0                 |
|              vlan_id_enable | false             |
|               vlan_priority | 0                 |
+-----------------------------+-------------------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command

The `query` command returns a table of all IPMI channels and their settings.

{{< expand "Running a Simple Query" "v" >}}

#### Description
The `query` command does not require entering properties or arguments.
Enter the command, then press <kbd>Enter</kbd>.
The command returns a table of all IPMI instances and their settings, including IP addresses type, IP addresses, MAC addresses, subnet masks, gateway IP addresses, gateway MAC addresses, backup gateway IP addresses, backup gateway MAC addresses, VLAN IDs, VLAN ID statuses, and VLAN ID priorities.

#### Usage

From the CLI prompt, enter:

`network ipmi query`

{{< expand "Command Example" "v" >}}
```
network ipmi query
+---------+----+-------------------+-------------+-------------------+---------------+----------------------------+-----------------------------+---------------------------+----------------------------+---------+----------------+---------------+
| channel | id | ip_address_source | ip_address  | mac_address       | subnet_mask   | default_gateway_ip_address | default_gateway_mac_address | backup_gateway_ip_address | backup_gateway_mac_address | vlan_id | vlan_id_enable | vlan_priority |
+---------+----+-------------------+-------------+-------------------+---------------+----------------------------+-----------------------------+---------------------------+----------------------------+---------+----------------+---------------+
| 1       | 1  | static            | 10.10.10.10 | 3c:ec:de:5b:5e:70 | 255.255.255.0 | 10.200.0.1                 | 00:00:00:00:00:00           | 0.0.0.0                   | 00:00:00:00:00:00          | 0       | false          | 0             |
+---------+----+-------------------+-------------+-------------------+---------------+----------------------------+-----------------------------+---------------------------+----------------------------+---------+----------------+---------------+
```
{{< /expand >}}
{{< /expand >}}

### Update Command

The `update` command allows you to update the settings for a specified IPMI instance.

{{< expand "Updating IPMI Settings" "v" >}}

#### Description
The `update` command has six configuration properties. They are `ipaddress`, `netmask`, `gateway`, `password`, `dhcp`, and `vlan` explained in detail in **Update Properties** below.
You must enter a channel and at least one property for the command to succeed.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns a blank line.

{{< expand "Update Properties" "v" >}}

{{< truetable >}}
| Property | Description | Syntax Example |
|-------------|-------------|-------------|
| `ipaddress` | IPv4 address to assign to the channel. | <code>ipaddress="<i>ipaddress</i>"</code> |
| `netmask` | Subnet mask associated with the IP address. | <code>netmask="<i>expandednetmask"/i>"</code> |
| `gateway` | IPv4 address used by the `ipaddress` to reach outside the local subnet. | <code>gateway="<i>gateway</i>"</code> |
| `password` | Password to assign to the channel. The password must be between 8 and 16 characters and contain at least 3 of the following categories: lowercase character, uppercase character, digits 0-9, special characters (!, $, #, %, etc.) | <code>password=<i>password</i></code> |
| `dhcp` | If `false`, you must define `ipaddress`, `netmask`, and `gateway`. | <code>dhcp=<i>true/false</i></code> |
| `vlan` | Numeric VLAN ID. | <code>vlan=<i>integer</i></code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage

From the CLI prompt, enter:

<code>network ipmi update channel=<i>channelid</i> ipaddress="<i>ipaddress</i>" netmask="<i>netmask</i>" gateway="<i>gateway</i>"</code>

Where
* *channelid* is the numeric channel ID.
* *ipaddress* is the IPMI IP address.
* *netmask* is the expanded netmask for the `ipaddress`.
* *gateway* is the IPv4 address used by the `ipaddress` to reach outside the local subnet.

{{< expand "Command Example" "v" >}}
```
network ipmi update channel=1 ipaddress="10.230.0.10" netmask="255.255.240.0" gateway="10.230.0.1"
```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scalecliipmi" limit="10" title="Related CLI IPMI Articles" >}}
{{< taglist tag="scaleclinetwork" limit="10" title="Related CLI Network Articles" >}}
