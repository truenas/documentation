---
title: "Network"
description: "Provides information on using the Network Summary screen and lists other tutorials related to configuring CORE networking."
geekdocCollapseSection: true
weight: 80
related: false
aliases: 
 - /core/network/networksummary/
 - /core/coretutorials/network/networksummary/
tags:
- network
---

## Network Summary

The **Network Summary** screen gives a concise overview of the current network setup.
It provides information about the currently active interfaces, default routes, and name servers configured on the system.
These areas are not editable.

![**Network Summary**](/images/CORE/Network/NetworkSummary.png "Network Summary")

* [**Interfaces**]({{< relref "/CORE/CORETutorials/Network/Interfaces/_index.md" >}}) shows configured physical, [bridge]({{< relref "/CORE/CORETutorials/Network/Interfaces/BridgeCreate.md" >}}), link aggregation [LAGG]({{< relref "/CORE/CORETutorials/Network/Interfaces/LAGGCreate.md" >}}), and virtual LAN [vlan]({{< relref "/CORE/CORETutorials/Network/Interfaces/VLANCreate.md" >}}) interfaces.
  All detected physical interfaces are listed, even when unconfigured.
  The IPv4 or IPv6 address displays when a [static IP]({{< relref "/CORE/CORETutorials/Network/Interfaces/SettingStaticIP.md" >}}) is saved for an interface.

* **Default Routes** lists all saved TrueNAS default routes.
  Go to **Network > Global Configuration** to configure default routes.

* **Nameservers** lists any configured DNS name servers that TrueNAS uses. 
  To change this list, go to **Network > Global Configuration**. 
  **Network > Global Configuration** contains the TrueNAS host name and domain, and default gateway. It also contains other options.

Define a static route in **Network > [Static Routes]({{< relref "/CORE/CORETutorials/Network/StaticRoutes.md" >}})**.

Out-of-band management is managed from **Network > [IPMI]({{< relref "/CORE/CORETutorials/Network/IPMI.md" >}})**. 
This option is visible only when TrueNAS detects the appropriate physical hardware.

## Network Articles

{{< children depth="2" description="true" >}}
