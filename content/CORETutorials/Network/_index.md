---
title: "Network"
description: "Provides information on using the Network Summary screen and lists other tutorials related to configuring CORE networking."
geekdocCollapseSection: true
weight: 80
related: false
tags:
- network
---

## Network Summary

The **Network Summary** screen gives a concise overview of the current network setup.
It provides information about the currently active interfaces, default routes, and name servers configured on the system.
These areas are not editable.

![**Network Summary**](/images/CORE/Network/NetworkSummary.png "Network Summary")

* [**Interfaces**]({{< ref "CORETutorials/Network/Interfaces/" >}}) shows configured physical, [bridge]({{< ref "BridgeCreate" >}}), link aggregation [LAGG]({{< ref "LAGGCreate" >}}), and virtual LAN [vlan]({{< ref "VLANCreate" >}}) interfaces.
  All detected physical interfaces are listed, even when unconfigured.
  The IPv4 or IPv6 address displays when a [static IP]({{< ref "SettingStaticIP" >}}) is saved for an interface.

* **Default Routes** lists all saved TrueNAS default routes.
  Go to **Network > Global Configuration** to configure default routes.

* **Nameservers** lists any configured DNS name servers that TrueNAS uses. 
  To change this list, go to **Network > Global Configuration**. 
  **Network > Global Configuration** contains the TrueNAS host name and domain, and default gateway. It also contains other options.

Define a static route in **Network > [Static Routes]({{< ref "StaticRoutes" >}})**.

Out-of-band management is managed from **Network > [IPMI]({{< ref "/CORETutorials/Network/IPMI" >}})**. 
This option is visible only when TrueNAS detects the appropriate physical hardware.

<div class="noprint">

## Network Articles

{{< children depth="2" description="true" >}}

</div>
