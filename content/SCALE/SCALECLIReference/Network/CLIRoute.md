---
title: "Route"
description: "Provides information about the network route namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 50
aliases:
draft: false
tags:
- network
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Route Namespace
The **Route** namespace has two commands and is based on network route creation and management functions found in the SCALE API and web UI.
It provides access to network route information through the **route** commands.

## General Commands 
The following **Route** commands allow you to view and manage existing network route settings.

You can enter commands from the main CLI prompt or from the **Route** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Ipv4gw_Reachable  Command
The `ipv4gw_reachable` verifies the ipv4 gateway is reachable by an interface.

{{< expand "Using the Ipv4gw_Reachable Command" "v" >}}
#### Description
The `ipv4gw_reachable` command has one required property, `ipv4_gateway`.
`ipv4_gateway` is the IP address for the ipv4 gateway.
Use the `network route static_routes` command to locate the gateway (ipv4 gateway) configured on the system.

Enter the property argument using the `=` delimiter to separate property and double-quoted value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns true if the gateway is reachable, false if not.

#### Usage
From the CLI prompt, enter:

<code>network route ipv4gw_reachable ipv4_gateway="<i>10.123.24.1</i>"</code>

{{< nest-expand "Command Example" "v" >}}
```
network route ipv4gw_reachable ipv4_gateway="10.123.24.1"
true
```
{{< /nest-expand >}}
{{< /expand >}}

###  System_Routes Command 
The `system_routes` command lists network default routes and nameserver IP addresses.

{{< expand "Using the System_Routes Command" "v" >}}
#### Description
The `system_routes` command does not require entering property arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with network, netmask, gatewaty, and preferred source IP addresses, interface type, the table ID and scope. It returns a dictionary for flags configured on the system.

#### Usage
From the CLI prompt, enter:

`network route system_routes`

{{< nest-expand "Command Example" "v" >}}
```
network route system_routes
+---------------------------+-----------------------------------------+-------------+---------------+--------------+----------+-------+------------------+
| network                   | netmask                                 | gateway     | interface     | flags        | table_id | scope | preferred_source |
+---------------------------+-----------------------------------------+-------------+---------------+--------------+----------+-------+------------------+
| 172.16.0.0                | 255.255.0.0                             | <null>      | kube-bridge   | <empty list> | 77       | 253   | 172.16.0.1       |
| 0.0.0.0                   | 0.0.0.0                                 | <null>      | lo            | <empty list> | 78       | 254   | <null>           |
| 0.0.0.0                   | 0.0.0.0                                 | 10.234.24.1 | enX0          | <empty list> | 254      | 0     | <null>           |
| 10.234.24.0               | 255.255.252.0                           | <null>      | enX0          | <empty list> | 254      | 253   | 10.234.27.252    |
| 172.16.0.0                | 255.255.0.0                             | <null>      | kube-bridge   | <empty list> | 254      | 253   | 172.16.0.1       |
| 10.234.27.252             | 255.255.255.255                         | <null>      | enX0          | <empty list> | 255      | 254   | 10.234.27.252    |
| 10.234.27.255             | 255.255.255.255                         | <null>      | enX0          | <empty list> | 255      | 253   | 10.234.27.252    |
| 127.0.0.0                 | 255.0.0.0                               | <null>      | lo            | <empty list> | 255      | 254   | 127.0.0.1        |
| 127.0.0.1                 | 255.255.255.255                         | <null>      | lo            | <empty list> | 255      | 254   | 127.0.0.1        |
| 127.255.255.255           | 255.255.255.255                         | <null>      | lo            | <empty list> | 255      | 253   | 127.0.0.1        |
| 172.16.0.1                | 255.255.255.255                         | <null>      | kube-bridge   | <empty list> | 255      | 254   | 172.16.0.1       |
| 172.16.255.255            | 255.255.255.255                         | <null>      | kube-bridge   | <empty list> | 255      | 253   | 172.16.0.1       |
| 172.17.0.1                | 255.255.255.255                         | <null>      | kube-dummy-if | <empty list> | 255      | 254   | 10.234.27.252    |
| 172.17.0.10               | 255.255.255.255                         | <null>      | kube-dummy-if | <empty list> | 255      | 254   | 10.234.27.252    |
| fe80::                    | ffff:ffff:ffff:ffff::                   | <null>      | kube-bridge   | <empty list> | 77       | 0     | <null>           |
| ::1                       | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff | <null>      | lo            | <empty list> | 254      | 0     | <null>           |
| fe80::                    | ffff:ffff:ffff:ffff::                   | <null>      | enX0          | <empty list> | 254      | 0     | <null>           |
| fe80::                    | ffff:ffff:ffff:ffff::                   | <null>      | kube-bridge   | <empty list> | 254      | 0     | <null>           |
| fe80::                    | ffff:ffff:ffff:ffff::                   | <null>      | kube-dummy-if | <empty list> | 254      | 0     | <null>           |
| fe80::                    | ffff:ffff:ffff:ffff::                   | <null>      | veth400353c2  | <empty list> | 254      | 0     | <null>           |
| fe80::                    | ffff:ffff:ffff:ffff::                   | <null>      | veth35f76096  | <empty list> | 254      | 0     | <null>           |
| fe80::                    | ffff:ffff:ffff:ffff::                   | <null>      | veth5473be81  | <empty list> | 254      | 0     | <null>           |
| fe80::                    | ffff:ffff:ffff:ffff::                   | <null>      | veth6ecbbda6  | <empty list> | 254      | 0     | <null>           |
| ::1                       | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff | <null>      | lo            | <empty list> | 255      | 0     | <null>           |
| fe80::cd7:95ff:fecd:5907  | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff | <null>      | enX0          | <empty list> | 255      | 0     | <null>           |
| fe80::3012:eeff:fe29:b6c  | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff | <null>      | veth35f76096  | <empty list> | 255      | 0     | <null>           |
| fe80::34b6:e7ff:fe77:eab7 | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff | <null>      | veth400353c2  | <empty list> | 255      | 0     | <null>           |
| fe80::706c:6ff:fe80:2b51  | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff | <null>      | kube-dummy-if | <empty list> | 255      | 0     | <null>           |
| fe80::8c78:e2ff:fe0a:7e37 | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff | <null>      | kube-bridge   | <empty list> | 255      | 0     | <null>           |
| fe80::944f:ceff:fef9:b269 | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff | <null>      | veth6ecbbda6  | <empty list> | 255      | 0     | <null>           |
| fe80::b8f4:ceff:fea6:a529 | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff | <null>      | veth5473be81  | <empty list> | 255      | 0     | <null>           |
| ff00::                    | ff00::                                  | <null>      | enX0          | <empty list> | 255      | 0     | <null>           |
| ff00::                    | ff00::                                  | <null>      | kube-bridge   | <empty list> | 255      | 0     | <null>           |
| ff00::                    | ff00::                                  | <null>      | kube-dummy-if | <empty list> | 255      | 0     | <null>           |
| ff00::                    | ff00::                                  | <null>      | veth400353c2  | <empty list> | 255      | 0     | <null>           |
| ff00::                    | ff00::                                  | <null>      | veth35f76096  | <empty list> | 255      | 0     | <null>           |
| ff00::                    | ff00::                                  | <null>      | veth5473be81  | <empty list> | 255      | 0     | <null>           |
| ff00::                    | ff00::                                  | <null>      | veth6ecbbda6  | <empty list> | 255      | 0     | <null>           |
+---------------------------+-----------------------------------------+-------------+---------------+--------------+----------+-------+------------------+
```
{{< /nest-expand >}}
{{< /expand >}}
