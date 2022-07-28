---
title: "LLDP Screen"
description: "Use the LLDP screen to configure Link Layer Discovery Protocol (LLDP) on your TrueNAS"
weight: 50
tags:
- corelldp
---

Link Layer Discovery Protocol is used by network devices to communicate information about their identities, abilities and peers on a LAN, typically wired Ethernet. Use the **LLDP** services screen to configure Link Layer Discovery Protocol (LLDP) service on your TrueNAS.


![ServicesLLDPOptions](/images/CORE/12.0/ServicesLLDPOptions.png "LLDP Service Options")

**General Options**

| Name | Description |
|------|-------------|
| **Interface Description** | Select to enable receive mode. Any received peer information is saved in interface descriptions. |
| **County Code** | Select the two-letter [ISO 3166-1 alpha-2](https://www.iso.org/obp/ui/) code used to enable LLDP location support. The dropdown list includes a comprehensive list of two-character country codes. |
| **Location** | Enter the physical location of the host. |

{{< taglist tag="corelldp" limit="10" >}}
