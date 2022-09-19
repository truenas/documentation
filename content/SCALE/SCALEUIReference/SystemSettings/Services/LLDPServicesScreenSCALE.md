---
title: "LLDP Services Screen"
description: ""
weight: 20
alias: 
tags:
 - scaleservices
 - scalelldp
---


{{< toc >}}


Network devices use the [Link Layer Discovery Protocol (LLDP)](https://tools.ietf.org/html/rfc4957) to advertise their identity, capabilities, and neighbors on an Ethernet network.
TrueNAS uses the [ladvd](https://github.com/sspans/ladvd) LLDP implementation.
When the local network contains managed switches, configuring and starting LLDP tells TrueNAS to advertise itself on the network.

To configure LLDP, go to **System Settings > Services**, find **LLDP** and click the <i class="material-icons" aria-hidden="true">edit</i>.

![ServicesLLDPSCALE](/images/SCALE/ServicesLLDPSCALE.png "LLDP Service Options")

{{< include file="static/includes/Reference/ServicesLLDPFields.md.part" markdown="true" >}}

Set **Interface Description** and enter a **Country Code** before enabling the LLDP service.

{{< taglist tag="scalelldp" limit="10" >}}