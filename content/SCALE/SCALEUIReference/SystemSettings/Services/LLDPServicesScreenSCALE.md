---
title: "LLDP Services Screen"
description: "This article provides information on the LLDP service settings."
weight: 20
alias: 
tags:
 - scaleservices
 - scalelldp
---


{{< toc >}}

The **Services > LLDP** screen settings specify settings so TrueNAS can advertise itself on the network.

To configure LLDP, go to **System Settings > Services** and find **LLDP**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![LLDPServiceSettings](/images/SCALE/22.02/LLDPServiceSettings.png "Services LLDP Settings")

| Settings | Description |
|----------|-------------|
| **Interface Description** | Enables receive mode. Any received peer information is saved in interface descriptions. |
| **County Code** | Two-letter [ISO 3166-1 alpha-2](https://www.iso.org/obp/ui/) code used to enable LLDP location support. |
| **Location** | The physical location of the host. |


{{< taglist tag="scalelldp" limit="10" >}}