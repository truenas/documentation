---
title: "Link Aggregations"
weight: 20
---

A [Link Aggregation (LAGG)](https://tools.ietf.org/html/rfc7424) is a general method of combining (aggregating) multiple network connections in parallel or a series to provide additional bandwidth or redundancy for critical networking situations. TrueNAS uses [lagg(4)](https://www.freebsd.org/cgi/man.cgi?lagg(4)) to manage LAGGs.

To set up a LAGG interface, go to **Network > Interface > Add**.

<img src="/images/CORE/12.0/NetworkInterfacesAddLAGG.png">
<br><br>

Set the *Type* to *Link Aggregation*.

Enter a name for the interface. The name must use the format *laggX*, where *X* is a number representing a non-parent interface.
It is also recommended to add any notes or reminders about this particular LAGG in the *Description*.

Under **LAGG Settings**, set the *Lagg Protocol* to configure the interface ports to match your networking needs:

{{< tabs "Lagg Protocol Options" >}}
{{< tab "LACP" >}}
The most commonly used LAGG protocol and is one part of [IEEE specification 802.3ad](https://www.ieee802.org/3/hssg/public/apr07/frazier_01_0407.pdf). In LACP mode, negotiation is performed with the network switch to form a group of ports that are all active at the same time. The network switch must support LACP for this option to function.
{{< /tab >}}
{{< tab "Failover" >}}
Failover causes traffic to be sent through the primary interface of the group. If the primary interface fails, traffic diverts to the next available interface in the LAGG.
{{< /tab >}}
{{< tab "Load Balance" >}}
Load Balance accepts inbound traffic on any port of the LAGG group and then balances the outgoing traffic on the active ports in the LAGG group. It is a static setup that does not monitor the link state nor does it negotiate with the switch.
{{< /tab >}}
{{< tab "RoundRobin" >}}
Round robin accepts inbound traffic on any port of the LAGG group and sends outbound traffic using a round robin scheduling algorithm. Traffic is sent out in sequence using each LAGG interface in turn.
{{< /tab >}}
{{< tab "None" >}}
This mode disables traffic on the LAGG interface without disabling the LAGG interface.
{{< /tab >}}
{{< /tabs >}}

Now define the *Lagg Interfaces* and review the remaining interface options.

{{< include file="static/includes/InterfaceOptions.md.part" markdown="true" >}}
