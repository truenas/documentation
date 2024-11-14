---
title: "Configuring LLDP"
redirect: "https://www.truenas.com/docs/core/13.0/coretutorials/services/configuringlldp/"
description: "Provides information on how to configure Link Layer Discovery Protocol (LLDP) on your TrueNAS."
weight: 50
aliases: /core/services/lldp/
tags:
- network
---

Network devices use the [Link Layer Discovery Protocol (LLDP)](https://tools.ietf.org/html/rfc4957) to advertise their identity, capabilities, and neighbors on an Ethernet network.
TrueNAS uses the [ladvd](https://github.com/sspans/ladvd) LLDP implementation.
LLDP service is often used in a local network environment with managed switches. Configuring and starting the LLDP service allows the TrueNAS system to advertise itself on the network.

To configure LLDP, go to the **Services** page, find the **LLDP** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> icon.

![ServicesLLDPOptions](/images/CORE/Services/ServicesLLDPOptions.png "LLDP Service Options")

Select **Interface Description** and enter a **Country Code**. The location of the system is optional.  

Click **SAVE** to save the current selections and return to the **Services** screen.

Click the toggle on the **Services** screen to turn the LLDP service on. The toggle turns blue when it is running.
