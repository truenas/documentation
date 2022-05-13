---
title: "Setting Up a Network VLAN"
weight: 30
---

A virtual LAN (VLAN) is a domain that is partitioned and isolated in a computer network at the data link layer (OSI layer 2). See [here](https://www.ieee802.org/1/pages/802.1Q-2014.html) for more information on VLANs. TrueNAS uses [vlan(4)](https://www.freebsd.org/cgi/man.cgi?vlan(4)) to manage VLANS. 

To set up a VLAN interface, go to **Network > Interface > Add**.

![NetworkInterfacesAddVLAN](/images/CORE/12.0/NetworkInterfacesAddVLAN.png "Adding a new VLAN")

Set the **Type** to **VLAN** and enter a name for the interface in **Name**. The name must use the format **vlan***X*, where *X* is a number representing a non-parent interface.
It is also recommended to add any notes or reminders about this particular VLAN in **Description**.

Enabling **DHCP** or **Autoconfigure IPv6** requires understanding how this new interface functions inside your particular network environment. By default, TrueNAS allows only one network interface to have **DHCP** enabled.

The remaining **VLAN Settings** must be configured for the interface to function properly:

* **Parent Interface** where you select the VLAN parent interface. This is usually an Ethernet card connected to a switch port already configured for the VLAN.
* **Vlan Tag** where you enter a numeric tag for this interface. This is usually preconfigured in the switched network.
* **Priority Code Point** where you define the VLAN [Class of Service](https://tools.ietf.org/html/rfc4761#section-4.2.7).

With the VLAN-specific options set, there are a few additional interfaces options to review. 
See [Interfaces Screen]({{< relref "/CORE/UIReference/Network/InterfacesScreen.md" >}}) for more information on settings.

{{< include file="/content/_includes/InterfaceOptions.md" markdown="true" >}}

## Additional Information

[Managing Jails]({{< relref "/CORE/CORETutorials/JailsPluginsVMs/Jails/ManagingJails.md" >}})

[Managing Plugins]({{< relref "/CORE/CORETutorials/JailsPluginsVMs/Plugins/ManagingPlugins.md" >}})

[Creating Basic Virtual Machines]({{< relref "/CORE/CORETutorials/JailsPluginsVMs/VirtualMachines/CreatingBasicVM.md" >}})