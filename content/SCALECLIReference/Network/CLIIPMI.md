---
title: "IPMI"
description: "Provides information about the network ipmi namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 40
aliases:
draft: false
tags:
- scaleclinetwork
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

## IPMI Namespace

The **ipmi** namespace has four commans and is based on user functions found in the SCALE API and web UI. It provides access to IPMI (Intelligent Platform Management Interface) configuration and management options. 

## IPMI Commands

The following **ipmi** namespace commands allow you to configure and manage IPMI access.

You can enter commands from the main CLI prompt or from the **network** namespace prompt.

### Channels Command

The `channels` command returns a list of available IPMI channels.

{{< expand "Viewing Available Channels" "v" >}}

#### Description

The `channels` command does not require entering properties or arguments.
Enter the command, then press <kbd>Enter</kbd>.
The command returns a number showing how many IPMI channels the system has available.

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
The `get_instance` command requires the `id` property.
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
The command returns a table of all IPMI instances and their settings, including IP addresses type, IP addresses, MAC addresess, subnet masks, gateway IP addresses, gateway MAC addresses, backup gateway IP addresses, backup gateway MAC addresses, VLAN IDs, VLAN ID statuses, and VLAN ID priorities.

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

### Interactive Argument Editor (TUI)

{{< include file="HintInteractiveArgsEditor.md" type="page" >}}

{{< expand "Updating IPMI Settings" "v" >}}

#### Description
The `update` command has seven configuration properties. They are channel, ipaddress, netmask, gateway, password, dhcp, and vlan.
You must enter at least one of the properties for the command to succeed. 
Enter the command string, then press <kbd>Enter</kbd>.
The command returns





























{{< taglist tag="scaleclinetwork" limit="10" title="Related CLI Network Articles" >}}