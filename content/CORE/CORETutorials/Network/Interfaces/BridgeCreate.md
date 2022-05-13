---
title: "Setting Up a Network Bridge"
weight: 10
---

A [bridge](https://tools.ietf.org/html/rfc6325) generally refers to various methods of combining (aggregating) multiple network connections into a single aggregate network. TrueNAS uses [bridge(4)](https://www.freebsd.org/cgi/man.cgi?bridge(4)) to manage bridges.

To set up a bridge interface, go to **Network > Interface > Add**.

![NetworkInterfaceAddBridgeScreen](/images/CORE/13.0/NetworkInterfaceAddBridgeScreen.png "Network Interface Add Bridge Screen")

Select **Bridge** as the **Type** to  and enter a name for the interface. The name must use the format **bridge**X*, where *X* is a number representing a non-parent interface.
It is also recommended to add any notes or reminders about this particular bridge in **Description**.

Under **Bridge Settings**, select the interfaces in **Bridge Members** and then configure the remaining interface options to match your networking needs.

See [Interfaces Screen]({{< relref "/CORE/UIReference/Network/InterfacesScreen.md" >}}) for more information on settings.

{{< include file="/content/_includes/InterfaceOptions.md" markdown="true" >}}

## Additional Information

[Managing Jails]({{< relref "/CORE/CORETutorials/JailsPluginsVMs/Jails/ManagingJails.md" >}})

[Managing Plugins]({{< relref "/CORE/CORETutorials/JailsPluginsVMs/Plugins/ManagingPlugins.md" >}})

[Creating Basic Virtual Machines]({{< relref "/CORE/CORETutorials/JailsPluginsVMs/VirtualMachines/CreatingBasicVM.md" >}})