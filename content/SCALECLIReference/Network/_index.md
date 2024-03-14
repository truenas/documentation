---
title: "network"
geekdocCollapseSection: true
description: "Provides information on network commands, command usage, optional and required command properties, syntax, and command examples." 
weight: 30
draft: false
tags:
- scalenetwork
- scaleinterface
- scaleipmi
- scalestaticroute
aliases:
 - /scale/scaleclireference/network/clidns/
 - /scale/scaleclireference/network/cliconfiguration/
 - /scale/scaleclireference/network/cligeneral/
 - /scale/scaleclireference/network/cliinterface/
 - /scale/scaleclireference/network/cliipmi/
 - /scale/scaleclireference/network/cliroute/
 - /scale/scaleclireference/network/clistaticroute/
---

{{< include file="/_includes/CLI/CLIGuideWIP.md" >}}

**network** commands are based on network functions found in the SCALE API and web UI. 
Use these commands to create and manage global network setting, interfaces, static routes, and IPMI connections.

Enter commands from the main CLI prompt or from the `network` namespace prompt.

{{< expand "Interactive Arguments Editor" >}}
{{< include file="/_includes/CLI/InteractiveArgsEditor.md" >}}
{{< /expand >}}

Enter {{< cli >}}network ls{{< /cli >}} to view the list of available commands and namespaces.

## network configuration config
The {{< cli >}}network configuration config{{< /cli >}} command displays the current system configuration network settings.

{{< cli >}}network configuration config{{< /cli >}} does not require entering a property argument.

Enter the command then press <kbd>Enter</kbd>.
The command returns a list of network configuration settings including the system-assigned id, hostname, domain, IPv4 and IPv6 gateways, nameservers 1-3, HTTP proxy, hosts, domains, service announcement, activity, local hostname and state.
{{< expand "Command Example" >}}
```
network configuration config

>>>

+----------------------+--------------+
|                   id | 1            |
|             hostname | truenas      |
|               domain | local        |
|          ipv4gateway |              |
|          ipv6gateway |              |
|          nameserver1 |              |
|          nameserver2 |              |
|          nameserver3 |              |
|            httpproxy |              |
|                hosts | <empty list> |
|              domains | <empty list> |
| service_announcement | <dict>       |
|             activity | <dict>       |
|       hostname_local | truenas      |
|                state | <dict>       |
+----------------------+--------------+
```
{{< /expand >}}

## network configuration update
Use the {{< cli >}}network configuration update{{< /cli >}} command to change global network configuration settings.

{{< cli >}}network configuration update{{< /cli >}} has 14 properties you can change. See **Update Properties** below for details.

Enter the command string then press <kbd>Enter</kbd> or enter {{< cli >}}--{{< /cli >}} to open the interactive command editor if changing multiple property values.
The command returns an empty line. Use {{< cli >}}network configuration config{{< /cli >}} to verify any changes made.

### network configuration update Properties
Enter property arguments using the `=` delimiter to separate property and value. Double-quote values that include special characters. For example:

Enter property arguments enclosed in curly brackets `{}` with double-quoted properties and values separated by the `:` delimiter. Separated multiple property arguments with a comma.
{{< truetable >}}
| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `hostname` | Enter the hostname for the TrueNAS SCALE system. Default hostname is `truenas`. | <code>hostname="<i>hostName</i>"</code> |
| `domain` | Enter the domain for the TrueNAS system. For example, *mycompany.com*. | <code>domain="<i>domainName</i>"</code> |
| `ipv4gateway` | Enter the IP address to use instead of the DHCP-provided IP address, if DHCP is enabled. Entering an IP address overrides the default gateway provided by DHCP. | <code>ipv4gateway="<i>IPaddress</i>"</code> |
| `ipv6gateway` | Enter the IP address to use instead of the DHCP-provided IP address, if DHCP is enabled on and IPV6 network. Entering an IP address overrides the default gateway provided by DHCP. | <code>ipv6gateway="<i>IPaddress</i>"</code> |
| `nameserver1` | Enter the IP address of the primary DNS server. | <code>nameserver1="<i>IPaddress</i>"</code> |
| `nameserver2` | Enter the IP address of the secondary DNS server. | <code>nameserver2="<i>IPaddress</i>"</code> |
| `nameserver3` | Enter the IP address for the third DNS server. | <code>nameserver3="<i>IPaddress</i>"</code> |
| `httpproxy` | Required if using a proxy for network operations. | <code>httpproxy="<i>proxyName</i>"</code> |
| `hosts` | Enter the host IP(s) as the value for the `host` property argument. Enter the property argument inside the `[]`, with each host IP address separated by a comma. | <code>hosts="<i>HostName</i>"</code> |
| `hostname_b` | Used in HA-licensed systems to enter the IP address or host name for controller 2. | <code>hostname_b="<i>HostName</i>"</code> |
| `hostname_virtual` | Used in HA-licensed systems as the virtual IP address or host name for access to the web UI regardless of which controller is active. | <code>hostname_virtual="<i>HostName</i>"</code> |
<!-- verify syntax | `domains` | Enter the domain name(s) as the value for the `domain` property argument. Enter the property argument inside the `[]`, with each double-quoted domain name separated by a comma. | <code>domains=[domain="<i>domain1,domain2</i>]"</code> |
| `service_announcement` | Enter `true` to enable or `false` to disable these `service_announcement` options: <br><li>`netbios` set to use legacty NetBIOS name server. Advertises the SMB service NetBIOS name. SMB1 clients might require this to discover the server. When advertized, the server appears in Network Neighborhood. <br><li>`mdns` use to select multicast DNS. Uses the system `hostname` value to advertize enabled and running services. <br><li>`wsd` set to use SMB Service NetBIOS name to advertize the server to WS-Discovery clients. System appears in Network Neighborhood of modern Windows operation systems. </li> | <code>service_announcement={"netbios":"<i>true</i>", "mdns":"<i>true</i>", "wsd:"<i>true</i>"}</code> |
| `activity` | Object that sets the outbound network `type` property value to either `ALLOW` or `DENY`. Enter argument inside the curly brackets `{}`, using the `:` to separate double-quoted property and value. | <code>activity={"type":"<i>ALLOW</i>"}</code> | -->
{{< /truetable >}}
{{< expand "Command Example" "v" >}}
{{< cli >}}network configuration update nameserver1="10.123.0.11"{{< /cli >}}
{{< /expand >}}

## network dns query

The {{< cli >}}network dns query{{< /cli >}} command displays a table listing the current DNS nameserver IP addresses configured on the system. 

{{< cli >}}network dns query{{< /cli >}} does not require entering a property argument. 

Enter the commmand then press <kbd>Enter</kbd>. 
The command returns the current DNS nameserver IP addresses configured on the system. 
{{< expand "Command Example" "v" >}}
```
[truenas]> network dns query
+-------------+
| nameserver  |
+-------------+
| 10.123.0.45 |
| 10.123.0.46 |
| 10.123.45.1 |
+-------------+
```
{{< /expand >}}

## network general summary
The {{< cli >}}network general summary{{< /cli >}} command lists network default routes and nameserver IP addresses.

{{< cli >}}network general summary{{< /cli >}} does not require entering property arguments.

Enter the command then press <kbd>Enter</kbd>.
The command returns a table with default routes, nameserver IP addresses, and a dictionary for IPs configured on the system.
{{< expand "Command Example" "v" >}}
```
Command: network general summary
Output:
+----------------+-------------+
|            ips | <dict>      |
| default_routes | 10.234.24.1 |
|    nameservers | 10.220.0.11 |
+----------------+-------------+
```
{{< /expand >}}

## network interfaces

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}

## network ipmi channels
The {{< cli >}}network ipmi channels{{< /cli >}} command displays a list of available IPMI channels.

{{< cli >}}network ipmi channels{{< /cli >}} does not require entering property arguments.

Enter the command, then press <kbd>Enter</kbd>.
The command returns the number of IPMI channels the system has available.

{{< expand "Command Example" "v" >}}
```
network ipmi channels
1
```
{{< /expand >}}

## network ipmi get_instance 
The {{< cli >}}network ipmi get_instance{{< /cli >}} command displays the settings for the IPMI channel ID entered.

Use the {{< cli >}}network ipmi query{{< /cli >}} command to obtain the channel ID.

{{< cli >}}network ipmi get_instance{{< /cli >}} has one required property, `id`.
`id` is the system-assinged number for an IPMI channel found in the output of the {{< cli >}}network ipmi query{{< /cli >}} command.

Enter the command string, then press <kbd>Enter</kbd>.
The command returns a table with the specified IPMI channel settings, including the IP address type, IP address, MAC address, subnet mask, gateway IP address, gateway MAC address, backup gateway IP, address, backup gateway MAC address, VLAN ID, VLAN ID status, and VLAN ID priority.
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

## network ipmi query
The {{< cli >}}network ipmi query{{< /cli >}} command displays a table of all IPMI channels and their settings.

{{< cli >}}network ipmi query{{< /cli >}} does not require entering properties or arguments.

Enter the command, then press <kbd>Enter</kbd>.
The command returns a table of all IPMI instances and their settings, including IP addresses type, IP addresses, MAC addresses, subnet masks, gateway IP addresses, gateway MAC addresses, backup gateway IP addresses, backup gateway MAC addresses, VLAN IDs, VLAN ID statuses, and VLAN ID priorities.
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

## network ipmi update 
The {{< cli >}}network ipmi update{{< /cli >}} command allows you to update the settings for a specified IPMI instance.

Use the {{< cli >}}network ipmi query{{< /cli >}} command to obtain the system-assigned channel ID, and to verify changes made.

{{< cli >}}network ipmi update{{< /cli >}} has one required property, `channel`, and six configuration properties. See **Update Properties** below for details.
`channel` is the ID number assigned to a network channel found in output of the {{< cli >}}network ipmi query{{< /cli >}} command.

Enter the command string then press <kbd>Enter</kbd>.
The command returns a blank line.
### network ipmi update Properties
{{< truetable >}}
| Property | Description | Syntax Example |
|-------------|-------------|-------------|
| `ipaddress` | Enter the IPv4 address to assign to the channel. | <code>ipaddress="<i>ipaddress</i>"</code> |
| `netmask` | Enter the subnet mask associated with the IP address. | <code>netmask="<i>expandednetmask"/i>"</code> |
| `gateway` | Enter the IPv4 address the IPMI `ipaddress` uses to reach outside the local subnet. | <code>gateway="<i>gateway</i>"</code> |
| `password` | Enter a password to assign to the channel. The password must be between 8 and 16 characters and contain at least 3 of the following categories: lowercase character, uppercase character, digits 0-9, special characters (!, $, #, %, etc.) | <code>password=<i>password</i></code> |
| `dhcp` | Enter `false` to define `ipaddress`, `netmask`, and `gateway`. | <code>dhcp=<i>true/false</i></code> |
| `vlan` | Enter a numeric VLAN ID. | <code>vlan=<i>integer</i></code> |
{{< /truetable >}}
{{< expand "Command Example" "v" >}}
```
network ipmi update channel=1 ipaddress="10.230.0.10" netmask="255.255.240.0" gateway="10.230.0.1"
```
{{< /expand >}}

## network route ipv4gw_reachable
The {{< cli >}}network route ipv4gw_reachable{{< /cli >}} verifies the ipv4 gateway is reachable by an interface.

Use the {{< cli >}}network route static_routes{{< /cli >}} command to locate the gateway (ipv4 gateway) configured on the system.

{{< cli >}}network route ipv4gw_reachable{{< /cli >}} has one required property, `ipv4_gateway`.
`ipv4_gateway` is the IP address for the ipv4 gateway.

Enter the property argument using the `=` delimiter to separate property and double-quoted value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns true if the gateway is reachable, false if not.
{{< expand "Command Example" "v" >}}
```
network route ipv4gw_reachable ipv4_gateway="10.123.24.1"
true
```
{{< /expand >}}

##  network route system_routes 
The {{< cli >}}network route system_routes{{< /cli >}} command lists network default routes and nameserver IP addresses.

{{< cli >}}network route system_routes{{< /cli >}} does not require entering property arguments.

Enter the command then press <kbd>Enter</kbd>.
The command returns a table with network, netmask, gatewaty, and preferred source IP addresses, interface type, the table ID and scope. It returns a dictionary for flags configured on the system.
{{< expand "Command Example" "v" >}}
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
{{< /expand >}}

## network static_route create
The {{< cli >}}network static_route create{{< /cli >}} command adds a single static route IP address and gateway to the system.

{{< cli >}}network static_route create{{< /cli >}} has three required properties, `destination`, `gateway`, and `description`.
See **network static_route create Properties** below for details.

Enter the property arguments using the `=` delimiter to separate property and value. Double-quote values with special characters.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line. Enter the {{< cli >}}network static_route query{{< /cli >}} command to verify creation of the static route.

### network static_route create Properties
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `destination` | Yes | Enter the IP address in the format a.b.c.d/e for the static route you want to create. | <code>destination="<i>a.b.c.d/e</i>"</code> |
| `gateway` | Yes | Enter the IP address for the gateway for the destination IP address in the format a.b.c.d. | <code>gateway="<i>a.b.c.d</i>"</code> |
| `description` | No | Enter optional text to describe the static route. | <code>description="<i>test</i>"</code> |
{{< /truetable >}}
{{< expand "Command Example" "v" >}}
```
network static_route create destination="10.123.0.123/20" gateway="10.123.0.1" description="test"

```
{{< /expand >}}

## network static_route delete
The {{< cli >}}network static_route delete{{< /cli >}} command deletes the static route matching the ID entered.

{{< cli >}}network static_route delete{{< /cli >}} has one required property, `id`.
`id` is the system-assigned ID for the static route found in the output of the {{< cli >}}network static_route query{{< /cli >}} command.

Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line. Enter the {{< cli >}}network static_route query{{< /cli >}} command to verify deletion of the static route.
{{< expand "Command Example" "v" >}}
```
network static_route delete id=1

```
{{< /expand >}}

## network static_route query
The {{< cli >}}network static_route query{{< /cli >}} command lists details on static routes added to the system.

{{< cli >}}network static_route query{{< /cli >}} does not require entering a property argument, but you can enter any one of the three properties as a flag to narrow the information returned to list just that property for all static routes.
Properties are `id`, `destination`, `gateway`, and `description`.

Enter the command then press <kbd>Enter</kbd>.
The command returns the values for all static routes configured on the system.
{{< expand "Command Example" "v" >}}
```
network static_route query
+----+-----------------+------------+-------------+
| id | destination     | gateway    | description |
+----+-----------------+------------+-------------+
| 1  | 10.123.0.123/20 | 10.123.0.1 | TEST        |
+----+-----------------+------------+-------------+
```
{{< /expand >}}

## network static_route update
Use the {{< cli >}}network static_route update{{< /cli >}} command to change the properties of the static route matching the ID entered.

{{< cli >}}network static_route update{{< /cli >}} has one required property, `id`, and three optional properties.
`id` is the system-assigned ID for the static route found in the output of the {{< cli >}}network static_route query{{< /cli >}} command.
See **Update Properties** below for details.

Enter the property arguments using the `=` delimiter to separate property and value. Double-quote values with special characters.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line. Enter the {{< cli >}}network static_route query{{< /cli >}} command to verify updates to the static route.

### network static_route update Properties
{{< truetable >}}
| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `destination` | Enter the IP address in the format a.b.c.d/e for the static route you want to create. | <code>destination="<i>a.b.c.d/e</i>"</code> |
| `gateway` | Enter the IP address for the gateway for the destination IP address in the format a.b.c.d. | <code>gateway="<i>a.b.c.d</i>"</code> |
| `description` | Enter optional text to describe the static route. | <code>description="<i>test</i>"</code> |
{{< /truetable >}}
{{< expand "Command Example" "v" >}}
```
network static_route update id=1 description="test route"

```
{{< /expand >}}
