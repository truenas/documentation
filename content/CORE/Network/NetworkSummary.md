---
title: "Network Summary"
weight: 10
---

It is recommended to set up your system connections before setting up data sharing.
This allows integrating TrueNAS into your specific security and network environment before attempting to store or share critical data.

## Network Summary
The Network Summary gives a concise overview of the current network setup. Information about the Interfaces, Default Routes, and Nameservers are provided.
These areas are not editable.

![**Network Summary**](/images/CORE/12.0/NetworkSummary.png "Network Summary")

* [**Interfaces**]({{< relref "documentation/content/CORE/Network/Interfaces/_index.md" >}}) - Lists configured [Static IP]({{< relref "documentation/content/CORE/Network/Interfaces/SettingStaticIP.md" >}}), [Bridge]({{< relref "documentation/content/CORE/Network/Interfaces/BridgeCreate.md" >}}), [LAGG]({{< relref "documentation/content/CORE/Network/Interfaces/LAGGCreate.md" >}}), and [Vlan's]({{< relref "documentation/content/CORE/Network/Interfaces/VLANCreate.md" >}}).

* **Default Routes** lists configured Default Routes information. Click the **Global Configuration** link in the left menu to configure Default Routes.

* **NameServers** lists configured nameservers. Click the **Global Configuration** link in the left menu to configure Nameservers.

You can configure Hostname and Domain, DNS Servers, Default Gateway and other realted options by clicking the **Global Configuration** link in tyhe left menu.
You can configure the Out of Band Management by clicking the [**IPMI**]({{< relref "IPMI.md" >}}) link in the left menu.
You can Configure Static Routes by clicking the [**Static Routes**]({{< relref "StaticRoutes.md" >}}) link in the left menu.
