---
title: "LLDP"
weight: 30
---

Network devices use the [Link Layer Discovery Protocol (LLDP)](https://tools.ietf.org/html/rfc4957) to advertise their identity, capabilities, and neighbors on an Ethernet network.
TrueNAS uses the [ladvd](https://github.com/sspans/ladvd) LLDP implementation.
When the local network contains managed switches, configuring and starting the LLDP service tells the TrueNAS system to advertise itself on the network.

To configure LLDP, go to the **Services** page, find the **LLDP** entry, and click the <i class="fa fa-pencil" aria-hidden="true" title="Configure"></i>.

![ServicesLLDPOptions](/images/CORE/12.0/ServicesLLDPOptions.png "LLDP Service Options")

{{< include file="static/includes/ServicesLLDPFields.md.part" markdown="true" >}}

Set *Interface Description* and enter a *Country Code* before turning the LLDP service on.
