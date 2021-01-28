---
title: "Link Aggregations"
description: "How to combine network connections into a Link Aggregation (LAGG)."
tags: ["LAGG", "networking"]
---

A [Link Aggregation (LAGG)](https://tools.ietf.org/html/rfc7424) generally refers to various methods of combining (aggregating) multiple network connections in parallel or series to provide additional bandwidth or to provide redundancy for critical connections. TrueNAS uses [lagg(4)](https://www.freebsd.org/cgi/man.cgi?lagg(4)) to manage LAGGs. 

To set up a LAGG interface, go to **Network > Interface > Add**.

<img src="/images/tn-add-lagg-interface.png">
<br><br>

Set **Type** to *Link Aggregation*.

Enter a name for the interface. The name must use the format, *laggX*, where *X* is a number representing a non-parent interface.
It is also recommended to add any notes or reminders about this particular LAGG in the **Description**.

Under LAGG Settings, set the **Lagg Protocol** to configure the interface ports to match your networking needs:

+ *LACP* : The most commonly used LAGG protocol. Link Aggregation Control Protocol (LACP) is one element of [IEEE specification 802.3ad](https://www.ieee802.org/3/hssg/public/apr07/frazier_01_0407.pdf). In LACP mode, negotiation is performed with the network switch to form a group of ports that are all active at the same time. Your network switch must support LACP for this option to function.

+ *Failover* : Failover causes traffic to be sent through the primary interface of the group. If the primary interface fails, traffic diverts to the next available interface in the LAGG.

+ *Load Balance* : Load Balance accepts inbound traffic on any port of the LAGG group and then balances the outgoing traffic on the active ports in the LAGG group. It is a static setup that does not monitor the link state nor does it negotiate with the switch.

+ *RoundRobin* : Round robin accepts inbound traffic on any port of the LAGG group and sends outbound traffic using a round robin scheduling algorithm. Traffic is sent out in sequence using each LAGG interface in turn.

+ *None* : This mode disables traffic on the LAGG interface without disabling the LAGG interface.

Next, select the interfaces to add to the LAGG.  

Disabling **Hardware Offloading** is discouraged as it can reduce network performance.
Disabling this is only recommended when the interface is managing [Jails](/hub/tasks/advanced/jails/), [Plugins](/hub/tasks/advanced/plugins/), or [Virtual Machines](/hub/tasks/advanced/virtual-machines/).

The Maximum Transmission Unit (MTU) is the largest protocol data unit that can be communicated.
What the largest workable MTU size can be will change according to your available network interfaces and other physical hardware.
`1500` and `9000` are standard Ethernet MTU sizes and TrueNAS recommends leaving this at the default `1500`.
The permissable range of MTU values is 1492 to 9216. 
Leaving this field blank restores the field to the default value of 1500.

If additional tuning is needed, you can enter additional [ifconfig](https://www.freebsd.org/cgi/man.cgi?query=ifconfig) settings in the **Options**

You can also define additional aliases for the LAGG interface.
Either IPv4 or IPv6 interfaces can be defined.
