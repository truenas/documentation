---
title: "Configuring LLDP"
weight: 50
aliases: /core/services/lldp/
---

Network devices use the [Link Layer Discovery Protocol (LLDP)](https://tools.ietf.org/html/rfc4957) to advertise their identity, capabilities, and neighbors on an Ethernet network.
TrueNAS uses the [ladvd](https://github.com/sspans/ladvd) LLDP implementation.
When the local network contains managed switches, configuring and starting the LLDP service tells the TrueNAS system to advertise itself on the network.

To configure LLDP, go to the **Services** page, find the **LLDP** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> icon. 

![ServicesLLDPOptions](/images/CORE/12.0/ServicesLLDPOptions.png "LLDP Service Options")

Select **Interface Description** and enter a **Country Code**. The location of the system is optional.

Turn on the LLDP service on.

See [LLDP Screen]({{< relref "/CORE/UIReference/Services/LLDPScreen.md" >}}) for more information on the settings.
