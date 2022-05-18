---
title: "Network Summary"
weight: 10
aliases: /core/network/networksummary/
---

It is recommended to set up your system connections before setting up data sharing.
This allows integrating TrueNAS into your specific security and network environment before attempting to store or share critical data.

## Network Summary

The Network Summary gives a concise overview of the current network setup.
Information about the currently active **Interfaces**, **Default Routes**, and **Nameservers** is provided.
These areas are not editable.

![**Network Summary**](/images/CORE/12.0/NetworkSummary.png "Network Summary")

* [**Interfaces**]({{< relref "/CORE/CORETutorials/Network/Interfaces/_index.md" >}}) shows any configured physical, [bridge]({{< relref "/CORE/CORETutorials/Network/Interfaces/BridgeCreate.md" >}}), [LAGG]({{< relref "/CORE/CORETutorials/Network/Interfaces/LAGGCreate.md" >}}), and [vlan]({{< relref "/CORE/CORETutorials/Network/Interfaces/VLANCreate.md" >}}) interfaces.
  All detected physical interfaces are listed, even when unconfigured.
  The IPv4 or IPv6 address displays when a [Static IP]({{< relref "/CORE/CORETutorials/Network/Interfaces/SettingStaticIP.md" >}}) is saved for an interface.

* **Default Routes** lists all saved TrueNAS Default Routes.
  Go to **Network > Global Configuration** to configure Default Routes.

* **Nameservers** lists any configured DNS name servers that TrueNAS uses. To change this list, go to **Network > Global Configuration**. The TrueNAS **Hostname and Domain**, **Default Gateway**, and other options are available in **Network > Global Configuration**.

## Additional Network Configuration Screens

Define any Static Routes in **Network > [Static Routes]({{< relref "/CORE/CORETutorials/Network/StaticRoutes.md" >}})**.

Out of Band Management is managed from **Network > [IPMI]({{< relref "/CORE/CORETutorials/Network/IPMI.md" >}})**. This option is visible only when TrueNAS detects the appropriate physical hardware.
