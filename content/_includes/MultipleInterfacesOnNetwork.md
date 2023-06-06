---
---

{{< hint type=important >}}
Multiple interfaces cannot be members of the same subnet.

Multiple physical interfaces can be networked with Link Aggregation (LAGG) or a Network Bridge, depending on use case.

{{< expand "Interface Types" "v" >}}

{{< include file="/_includes/NetworkInterfaceTypes.md" type="page" >}}

{{< /expand >}}

Alternatively, multiple static IP addresses can be assigned to a single network by configuring aliases.

{{< expand "Click for more information" "v" >}}
If you require multiple interfaces on a single network for performance optimization, the recommended approach is to use a Link Aggregation (LAGG) configured for Link Aggregation Control Protocol (LACP). A single LAGG interface with multiple Ethernet interfaces is perceived as a single connection to the network.

While LACP is beneficial for larger deployments with many active clients, it may not be practical for smaller setups. It can be used to provide additional bandwidth or redundancy for critical networking situations. However LACP does have limitations, as packets are not load-balanced.

On the other hand, if you need multiple IP addresses on a single subnet, you can use static IP aliases. It is not necessary to have multiple physical interfaces on the network. It is worth noting that multiple physical interfaces on the same network may not function as anticipated.

In summary, if you require multiple interfaces on a network, it is recommended to use LACP. If you need multiple IP addresses on a network, you can define aliases. Deviation from these practices may lead to unexpected behavior.
{{< /expand >}}

{{< /hint >}}