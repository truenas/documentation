---
title: "Network Summary"
description: "Provides information about the Network Summary screen on TrueNAS CORE."
weight: 10
tags:
- corenetwork
- corenetworksettings
- corenetworksummary
---

We recommend setting up your system connections before setting up data sharing.
This integrates TrueNAS into your specific security and network environment. Configure these settings before attempting to store or share critical data.

## Network Summary

The Network Summary gives a concise overview of the current network setup.
It provides information about the currently active **Interfaces**, **Default Routes** and **Nameservers**.
These areas are not editable.

![**Network Summary**](/images/CORE/12.0/NetworkSummary.png "Network Summary")

* [**Interfaces**]({{< ref "/CORETutorials/Network/Interfaces/" >}}) shows any configured physical, [bridge]({{< ref "/CORETutorials/Network/Interfaces/BridgeCreate" >}}), [LAGG]({{< ref "/CORETutorials/Network/Interfaces/LAGGCreate" >}}), and [vlan]({{< ref "/CORETutorials/Network/Interfaces/VLANCreate" >}}) interfaces.
  All detected physical interfaces are listed, even when unconfigured.
  The IPv4 or IPv6 address displays when a [Static IP]({{< ref "/CORETutorials/Network/Interfaces/SettingStaticIP" >}}) is saved for an interface.

* **Default Routes** lists all saved TrueNAS Default Routes.
  Go to **Network > Global Configuration** to configure Default Routes.

* **Nameservers** lists any configured DNS name servers that TrueNAS uses. To change this list, go to **Network > Global Configuration**. **Network > Global Configuration** contains the TrueNAS **Hostname and Domain** and **Default Gateway**. It also contains other options.

## Additional Network Configuration Screens

Define any Static Routes in **Network > [Static Routes]({{< ref "/CORETutorials/Network/StaticRoutes" >}})**.

Out of Band Management is managed from **Network > [IPMI]({{< ref "/CORETutorials/Network/IPMI" >}})**. This option is visible only when TrueNAS detects the appropriate physical hardware.

{{< taglist tag="corenetwork" limit="10" >}}
