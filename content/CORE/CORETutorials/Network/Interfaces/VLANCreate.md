---
title: "Setting Up a Network VLAN"
description: "This article provides instructions on setting up a network VLAN interface on TrueNAS CORE."
weight: 30
tags:
- corevlan
- corenetworkinterfaces
---

A virtual LAN (VLAN) is a specialized domain in a computer network. It is a domain partitioned and isolated at the data link layer (OSI layer 2). See [here](https://www.ieee802.org/1/pages/802.1Q-2014.html) for more information on VLANs. TrueNAS uses [vlan(4)](https://www.freebsd.org/cgi/man.cgi?vlan(4)) to manage VLANS. 

To set up a VLAN interface, go to **Network > Interface > Add**.

![NetworkInterfacesAddVLAN](/images/CORE/12.0/NetworkInterfacesAddVLAN.png "Adding a new VLAN")

Set the **Type** to **VLAN** and enter a name for the interface in **Name**. The name must use the format **vlan***X*, where *X* is a number representing a non-parent interface.
Enter any notes or reminders about this VLAN in the **Description** field.

Determine the requirements of your network environment before enabling **DHCP** or **AutoconfigureIPv6**.
It is important to understand how this new interface functions in your situation. By default, TrueNAS allows only one network interface to have **DHCP** enabled.

Give careful attention to the remaining **VLAN Settings**. These need proper configuration in order for the network interface to function.

* **Parent Interface** where you select the VLAN parent interface. This is usually an Ethernet card connected to a switch port already configured for the VLAN.
* **Vlan Tag** where you enter a numeric tag for this interface. This is usually preconfigured in the switched network.
* **Priority Code Point** where you define the VLAN [Class of Service](https://tools.ietf.org/html/rfc4761#section-4.2.7).

There are a few extra interface options to review after the VLAN options are set.  
See [Interfaces Screen]({{< relref "/CORE/UIReference/Network/InterfacesScreen.md" >}}) for more information on settings.

{{< include file="/content/_includes/InterfaceOptions.md" markdown="true" >}}

{{< taglist tag="corenetworkinterfaces" limit="10" >}}

{{< taglist tag="corejailspluginsvm" limit="10" title="Related Articles" >}}
