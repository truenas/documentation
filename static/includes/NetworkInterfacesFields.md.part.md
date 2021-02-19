## Interfaces

**Interface Settings**

| | |
|-|-|
| Type | Choose the type of interface. Bridge creates a logical link between multiple networks. Link Aggregation combines multiple network connections into a single interface. A Virtual LAN (VLAN) partitions and isolates a segment of the connection. Read-only when editing an interface. |
| Name | Enter a name for the interface. Use the format laggX, vlanX, or bridgeX where X is a number representing a non-parent interface. Read-only when editing an interface. |
| Description | Enter a description of the interface. |
| DHCP | Set to enable DHCP. Leave unset to create a static IPv4 or IPv6 configuration. Only one interface can be configured for DHCP. |
| Autoconfigure IPv6 | Set to automatically configure the IPv6 address with [rtsol(8)](https://www.freebsd.org/cgi/man.cgi?query=rtsol). Only one interface can be configured this way. |

**Bridge Settings**

| | |
|-|-|
| Bridge Members | Network interfaces to include in the bridge. | 


**LAGG Settings**

| | |
|-|-|
| Lagg Protocol | Determines the outgoing and incoming traffic ports. LACP is the recommended protocol if the network switch is capable of active LACP. Failover is the default protocol choice and should only be used if the network switch does not support active LACP. See [lagg(4)](https://www.freebsd.org/cgi/man.cgi?query=lagg) for more details. | 
| Lagg Interfaces | Select the interfaces to use in the aggregation. Warning: Lagg creation fails if any of the selected interfaces have been manually configured. |


**VLAN Settings**

| | |
|-|-|
| Parent Interface | Select the VLAN Parent Interface. Usually an Ethernet card connected to a switch port configured for the VLAN. New link aggregations are not available until the system is restarted. |
| Vlan Tag | Enter the numeric tag configured in the switched network. | 
| Priority Code Point | Select the Class of Service. The available 802.1p Class of Service ranges from Best effort (default) to Network control (highest). |


**Other Settings**

| | |
|-|-|
| Disable Hardware Offloading | Turn off hardware offloading for network traffic processing. WARNING: disabling hardware offloading can reduce network performance. Disabling hardware offloading is only recommended when the interface is managing jails, plugins, or virtual machines. |
| MTU | Maximum Transmission Unit, the largest protocol data unit that can be communicated. The largest workable MTU size varies with network interfaces and equipment. 1500 and 9000 are standard Ethernet MTU sizes, however the permissable range of values is 1492 to 9216. Leaving blank restores the field to the default value of 1500. |
| Options | Enter additional parameters from [ifconfig(8)](https://www.freebsd.org/cgi/man.cgi?query=ifconfig). |

**IP Addresses**

| | |
|-|-|
| IP Address | Define an alias for the interface on this TrueNAS controller. The alias can be an IPv4 or IPv6 address. |