---
title: "FRG: Network"
linkTitle: "Network"
description: "Descriptions of each field in the Network section of the TrueNAS web interface."
weight: 50
tags: ["reference", "networking", "IPMI"]
---

## Global Configuration

**Hostname and Domain**

| | |
|-|-|
| Hostname | System hostname. |
| Domain | System domain name, like example.com |
| Additional Domains | Additional domains to search. Separate entries by pressing Enter. Adding search domains can cause slow DNS lookups. |

**DNS Servers**

| | |
|-|-|
| NameServer 1 | Primary DNS server. |
| NameServer 2 | Secondary DNS server. |
| NameServer 3 | Third DNS server. |

**Other Settings**

| | |
|-|-|
| HTTP Proxy | When using a proxy, enter the proxy information for the network in the format `http://my.proxy.server:3128` or `http://user:password@my.proxy.server:3128` |
| Enabled Netwait Features | Delays the start of network services until pings are returned from the IP addresses added to the Netwait IP List. |
| Host Name Database | Additional hosts to be appended to /etc/hosts. Separate entries by pressing Enter. Hosts defined here are still accessible by name even when DNS is not available. See hosts(5) for additional information. |
**Service Announcement**

| | |
|-|-|
| NetBIOS-NS | Legacy NetBIOS name server. Advertises the SMB service NetBIOS Name. Can be required for legacy SMB1 clients to discover the server. When advertised, the server appears in Network Neighborhood). |
| mDNS | Multicast DNS. Uses the system Hostname to advertise enabled and running services. For example, this controls if the server appears under Network on MacOS clients. |
| WS-Discovery | Uses the SMB Service NetBIOS Name to advertise the server to WS-Discovery clients. This causes the computer appear in the Network Neighborhood of modern Windows OSes. |
**Default Gateway**

| | |
|-|-|
| IPv4 Default Gateway | Enter an IPv4 address. This overrides the default gateway provided by DHCP. |
| IPv6 Default Gateway | Enter an IPv6 address. This overrides the default gateway provided by DHCP. |

## Interfaces

**Interface Settings**

| | |
|-|-|
| Type | Choose the type of interface. Bridge creates a logical link between multiple networks. Link Aggregation combines multiple network connections into a single interface. A Virtual LAN (VLAN) partitions and isolates a segment of the connection. Read-only when editing an interface. |
| Name | Enter a name for the interface. Use the format laggX, vlanX, or bridgeX where X is a number representing a non-parent interface. Read-only when editing an interface. |
| Description | Enter a description of the interface. |
| DHCP | Set to enable DHCP. Leave unset to create a static IPv4 or IPv6 configuration. Only one interface can be configured for DHCP. |
| Autoconfigure IPv6 | Set to automatically configure the IPv6 address with [rtsol(8)](https://www.freebsd.org/cgi/man.cgi?query=rtsol). Only one interface can be configured this way. |

**Other Settings**

| | |
|-|-|
| Disable Hardware Offloading | Turn off hardware offloading for network traffic processing. WARNING: disabling hardware offloading can reduce network performance. Disabling hardware offloading is only recommended when the interface is managing jails, plugins, or virtual machines. |
| MTU | Maximum Transmission Unit, the largest protocol data unit that can be communicated. The largest workable MTU size varies with network interfaces and equipment. 1500 and 9000 are standard Ethernet MTU sizes. Leaving blank restores the field to the default value of 1500. |
| Options | Enter additional parameters from [ifconfig(8)](https://www.freebsd.org/cgi/man.cgi?query=ifconfig). |

**IP Addresses**

| | |
|-|-|
| IP Address | Define an alias for the interface on this TrueNAS controller. The alias can be an IPv4 or IPv6 address. |

## Static Routes: Add

**General Options**

| | |
|-|-|
| Destination | Use the format A.B.C.D/E where E is the CIDR mask. |
| Gateway | Enter the IP address of the gateway. |
| Description | Enter a description of the static route. |

## IPMI

**IPMI Configuration**

| | |
|-|-|
| DHCP | Use DHCP. Unset to manually configure a static IPv4 connection. |
| IPv4 Address | Static IPv4 address of the IPMI web interface. |
| IPv4 Netmask | Subnet mask of the IPv4 address. |
| IPv4 Default Gateway | Enter the default gateway of the IPv4 connection. |
| VLAN ID | If the IPMI out-of-band management interface is on a different VLAN from the management network, enter the IPMI VLAN. |

**IPMI Password Reset**

| | |
|-|-|
| Password | Enter the password used to connect to the IPMI interface from a web browser. |
