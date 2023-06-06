---
title: "Configuring LLDP Services"
description: "Provides instuctions on configuring the Link Layer Discovery Protocol (LLDP) service."
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

![LLDPServiceSettings](/images/SCALE/22.02/LLDPServiceSettings.png "Services LLDP Settings")

Enter the two-letter country code as found in [ISO 3166-1 alpha-2](https://www.iso.org/obp/ui/) used to enable LLDP location support.

Enter the physical location of the host in **Interface Description**.

To save any peer information received, select **Interface Description**.

Click **Save**.

Start the service.

{{< taglist tag="scalelldp" limit="10" >}}
