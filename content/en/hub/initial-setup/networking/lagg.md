---
title: "LAGG"
description: "Setting up Ling Aggregation on TrueNAS"
tags: ["LAGG", "networking"]
---

The [Link Aggregation (LAGG)](https://tools.ietf.org/html/rfc7424) refers to various methods of combining (aggregating) multiple network connections in parallel or series  in order to provide additional bandwidth or to provide redundancy.

On TrueNAS Link aggregation is managed by [lagg(4)](https://www.freebsd.org/cgi/man.cgi?lagg(4)). LAGG combines multiple physical interfaces together as one logical interface. There are various ways LAGG can be configured.  LAGG can provide, extra bandwidth, redundancy, or some combination of the two.

To set up a LAGG interface, navigate to **Network > Interface > Add**.

<img src="/images/tn-add-lagg-interface.png">
<br><br>


Set Type to *Link Aggregation*

Enter a name for the interface needs to use the format, laggX, vlanX, or bridgeX where X is a number representing a non-parent interface.


Under LAGG Settings, set the *Lagg Protocol* to the desired Protocol.  The options available are:

+ LACP
 > The most commonly used LAGG protocol.  Link Aggregation Control Protocol or LACP is one element of an IEEE specification (802.3ad). In LACP mode, negotiation is performed with the switch – which must also support LACP – to form a group of ports that are all active at the same time.

+ Failover
 > The Failover mode causes traffic to be sent on the primary interface of the group. If the primary interface fails, traffic will then use the next available interface.

+ Load Balance
 > The Load Balance mode accepts inbound traffic on any port of the LAGG group and then balances the outgoing traffic on the active ports in the LAGG group. It is a static setup that does not monitor the link state nor does it negotiate with the switch.

+ RoundRobin
 > This mode accepts inbound traffic on any port of the LAGG group and sends outbound traffic using a round robin scheduling algorithm. This means the traffic will be sent out in sequence using each interface in the group in turn.

+ None
 > This mode disbales traffic on the LAGG interface without disabling the LAGG interface.


Next, select the interfaces to add.to the LAGG.  
You can disable Hardare Offloading, however this is discourged.
Disabling hardware offloading can reduce network performance. 
Disabling hardware offloading is only recommended when the interface is managing jails, plugins, or virtual machines.
Unless you need to change the MTU, leave it at its default of 1500. The Maximum Transmission Unit (MTU), is the largest protocol data unit that can be communicated. What the largest workable MTU size can be varies with network interfaces and equipment. 1500 and 9000 are standard Ethernet MTU sizes. Leaving blank restores the field to the default value of 1500.

Lastly, set the IP address for the LAGG.
