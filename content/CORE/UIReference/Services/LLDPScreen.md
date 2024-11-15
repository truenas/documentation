---
title: "LLDP Screen"
redirect: "https://www.truenas.com/docs/core/13.0/uireference/services/lldpscreen/"
description: "Describes the LLDP screen in TrueNAS CORE."
weight: 50
tags:
- network
---

Network devices often use Link Layer Discovery Protocol (LLDP) to communicate information. This information includes their identities, abilities and peers on a LAN. The LAN is typically wired Ethernet. The TrueNAS **LLDP** services screen configures LLDP on the system.

![ServicesLLDPOptions](/images/CORE/Services/ServicesLLDPOptions.png "LLDP Service Options")

**General Options**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Interface Description** | Select to enable receive mode. Interface description stores any peer information received. |
| **County Code** | Select the two-letter [ISO 3166-1 alpha-2](https://www.iso.org/obp/ui/) code used to enable LLDP location support. The dropdown list is a comprehensive list of two-character country codes. |
| **Location** | Enter the physical location of the host. |
{{< /truetable >}}
