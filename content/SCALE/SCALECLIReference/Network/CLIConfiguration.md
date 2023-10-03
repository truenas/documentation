---
title: "Configuration"
description: "Provides information about the network configuration namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 10
aliases:
draft: false
tags:
- scaleclinetwork
---

{{< toc >}}


{{< include file="/_includes/CLIGuideWIP.md" >}}

## Configuration Commands

The **configuration** namespace has three commands that are based on functions found in the SCALE API and web UI. 
These commands return allowed network activity choices, and allow you to add or change global network configuration settings. 
Options can vary by the type of system and license applied (i.e., an HA system). 

You can enter commands from the main CLI prompt or from a **network** namespace prompt.

### Activity_choices Command
The `activity_choices` command returns a list of system activities choices, for example, Cloud Backup, KMIP, etc. This is a list output command.

{{< expand "Using Activity_Choices Command" "v" >}}
#### Description
The `activity_choices` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a list of system activity choices choices.

#### Usage
From the CLI prompt, enter:

`network configuration activity_choices`

{{< expand "Command Example" "v" >}}
```
network configuration activity_choices
acme
ACME
usage
Anonymous usage statistics
catalog
Catalog(s) information
cloud_backup
Cloud backup
cloud_sync
Cloud sync
kmip
KMIP
mail
Mail
replication
Replication
rsync
Rsync
support
Support
truecommand
TrueCommand iX portal
update
Update
vmware
VMware Snapshots
```
{{< /expand >}}
{{< /expand >}}

### Config Command
The `config` command displays the current system configuration network settings. 

{{< expand "Using config Command" "v" >}}
#### Description
The `config` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a list of network configuration settings including the id assigned by the system, hostname, domain, ipv4 and ipv6 gateways, nameservers 1-3, http proxy, hosts, domains, service_announcement, activity, local hostname and state.

#### Usage

From the CLI prompt, enter:

`network configuration config`

{{< expand "Command Example" "v" >}}
```
network configuration config
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
{{< /expand >}}

### Update Command
Use the `update` command to change global network configuration settings.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `update` command has 14 properties you can change. See **Update Properties** below for details.
Enter `--` to open the interactive command editor if changing multiple property values.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line. Use `network configuration query` to verify any changes made.

{{< expand "Update Properties" "v" >}}
{{< truetable >}}
Enter property arguments using the `=` delimiter to separate property and value. Double-quote values that include special characters. For example:

`update hostname="truenas"`

Property arguments enclosed in curly backets `{}` have double-quoted properties and values separated by the `:` delimiter, and separate multiple property arguments with a comma.

| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `hostname` | Enter the hostname for the TrueNAS SCALE system. Default hostname is `truenas`. | <code>hostname="<i>hostName</i>"</code> |
| `domain` | Enter the domain for the TrueNAS system. For example, *mycompany.com*. | <code>domain="<i>domainName</i>"</code> |
| `ipv4gateway` | Enter the IP address to use instead of the DHCP-provided IP address, if DHCP is enabled. Entering an IP address overrides the default gateway provided by DHCP. | <code>ipv4gateway="<i>IPaddress</i>"</code> |
| `ipv6gateway` | Enter the IP address to use instead of the DHCP-provided IP address, if DHCP is enabled on and IPV6 network. Entering an IP address overrides the default gateway provided by DHCP. | <code>ipv6gateway="<i>IPaddress</i>"</code> |
| `nameserver1` | Enter the IP address of the primary DNS server. | <code>nameserver1="<i>IPaddress</i>"</code> |
| `nameserver2` | Enter the IP address of the secondary DNS server. | <code>nameserver2="<i>IPaddress</i>"</code> |
| `nameserver3` | Enter the IP address for the third DNS server. | <code>nameserver3="<i>IPaddress</i>"</code> |
| `httpprox` | Required if using a proxy for network operations. | <code>httpproxy="<i>proxyName</i>"</code> |
| `hosts` | Enter the host IP(s) as the value for the `host` property argument. Enter the property argument inside the `[]`, with each host IP address separated by a comma. | <code>hosts="<i>HostName</i>"</code> |
| `hostname_b` | Used in HA-licensed systems to enter the IP address or host name for controller 2. | <code>hostname_b="<i>HostName</i>"</code> |
| `hostname_virtual` | Used in HA-licensed systems as the virtual IP address or host name for access to the web UI regardless of which controller is active. | <code>hostname_virtual="<i>HostName</i>"</code> |
<!-- verify syntax | `domains` | Enter the domain name(s) as the value for the `domain` property argument. Enter the property argument inside the `[]`, with each double-quoted domain name separated by a comma. | <code>domains=[domain="<i>domain1,domain2</i>]"</code> |
| `service_announcement` | Enter `true` to enable or `false` to disable these `service_announcement` options: <br><li>`netbios` set to use legacty NetBIOS name server. Advertises the SMB service NetBIOS name. SMB1 clients might require this to discover the server. When advertized, the server appears in Network Neighborhood. <br><li>`mdns` use to select multicast DNS. Uses the system `hostname` value to advertize enabled and running services. <br><li>`wsd` set to use SMB Service NetBIOS name to advertize the server to WS-Discovery clients. System appears in Network Neighborhood of modern Windows operation systems. </li> | <code>service_announcement={"netbios":"<i>true</i>", "mdns":"<i>true</i>", "wsd:"<i>true</i>"}</code> |
| `activity` | Object that sets the outbound network `type` property value to either `ALLOW` or `DENY`. Enter argument inside the curly brackets `{}`, using the `:` to separate double-quoted property and value. | <code>activity={"type":"<i>ALLOW</i>"}</code> | -->
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>network configuration update ipv4gateway="<i>a.b.c.d</i>"</code>

Where *a.b.c.d* is the IP address for the ipv4gateway.

{{< expand "Command Example" "v" >}}
```
network configuration update nameserver1="10.123.0.11"

```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scaleclinetwork" limit="10" title="Related CLI Network Articles" >}}
