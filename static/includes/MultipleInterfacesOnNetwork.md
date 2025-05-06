&NewLine;

{{< hint type="important" title="Configuring Multiple Interfaces" >}}
Multiple interfaces connected to a single TrueNAS system cannot be members of the same subnet but you can combine multiple interfaces with a link aggregation (LAGG) or network bridge.
Alternatively, you can assign multiple static IP addresses to a single interface by configuring aliases.

{{< expand "Multiple NICs on One Subnet" "v" >}}
When multiple network interface cards (NICs) connect to the same subnet, users might incorrectly assume that the interfaces automatically load balance.
However, ethernet network topology allows only one interface to communicate at a time.
Additionally, both interfaces must handle broadcast messages since they are listening on the same network.
This configuration adds complexity and significantly reduces network throughput.

If you require multiple NICs on a single network for performance optimization, use a link aggregation (LAGG) configured with Link Aggregation Control Protocol (LACP).
A single LAGG interface with multiple NICs shows as a single connection to the network.

While LACP is beneficial for larger deployments with many active clients, it might not be practical for smaller setups.
LACP provides additional bandwidth or redundancy for critical networking situations, but it is limited because it does not load balance packets.

On the other hand, if you need multiple IP addresses on a single subnet, configure one or more static IP aliases for a single NIC.

We recommend using LACP if you need multiple interfaces on a network.
If you need multiple IP addresses, define aliases. Deviation from these practices might result in unexpected behavior.

For a detailed explanation of ethernet networking concepts and best practices for networking multiple NICs, refer to this [discussion from National Instruments](https://www.ni.com/en-us/support/documentation/supplemental/11/best-practices-for-using-multiple-network-interfaces--nics--with.html).
{{< /expand >}}
{{< /hint >}}
