---
title: "Active Directory"
weight: 10
---

{{< toc >}}

The Interfaces section displays network port names and IP addresses, as well as their upload/download rates. 

![InterfacesSCALE](/images/SCALE/InterfacesSCALE.png "Interfaces")

Users can edit interfaces by clicking them, delete them by clicking the trashcan icon next to them, or add new ones by clicking *Add*.

![AddInterfaceSCALE](/images/SCALE/AddInterfaceSCALE.png "Add Interface Form")

## Interface Settings

| Setting | Description |
|---------|-------------|
| Type | Choose the type of interface. Bridge creates a logical link between multiple networks. Link Aggregation combines multiple network connections into a single interface. A Virtual LAN (VLAN) partitions and isolates a segment of the connection. Read-only when editing an interface. |
| Name | Enter a name for the interface. Use the format bondX, vlanX, or brX where X is a number representing a non-parent interface. Read-only when editing an interface. |
| Description | Enter a description of the interface. |
| DHCP | Set to enable DHCP. Leave unset to create a static IPv4 or IPv6 configuration. Only one interface can be configured for DHCP. |
| Autoconfigure IPv6 | Set to automatically configure the IPv6 address with rtsol(8). Only one interface can be configured this way. |

## Other Settings

| Setting | Description |
|---------|-------------|
| Disable Hardware Offloading | Turn off hardware offloading for network traffic processing. |
| MTU | Maximum Transmission Unit, the largest protocol data unit that can be communicated. The largest workable MTU size varies with network interfaces and equipment. 1500 and 9000 are standard Ethernet MTU sizes. Leaving blank restores the field to the default value of 1500. |
| Options | Enter additional parameters from [ifconfig(8)](https://www.freebsd.org/cgi/man.cgi?query=ifconfig). |

{{< hint danger >}}
WARNING: disabling hardware offloading can reduce network performance. Disabling hardware offloading is only recommended when the interface is managing jails, plugins, or virtual machines.
{{< /hint >}}

## IP Addresses

The IP Address section lets users define an alias for the interface on the TrueNAS controller. The alias can be an IPv4 or IPv6 address.

Users may also select how many bits will be a part of the network address.
