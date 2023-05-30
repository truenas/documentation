---
title: "Setting Up a Network Bridge"
description: "Provides instructions on setting up a network bridge interface on TrueNAS CORE."
weight: 10
tags:
- corenetworkbridge
- corenetworkinterfaces
---

A [bridge](https://tools.ietf.org/html/rfc6325) generally refers to various methods of combining (aggregating) many network connections. These form a single total network. TrueNAS uses [bridge(4)](https://www.freebsd.org/cgi/man.cgi?bridge(4)) to manage bridges.

To set up a bridge interface, go to **Network > Interface > Add**.

![NetworkInterfaceAddBridgeScreen](/images/CORE/13.0/NetworkInterfaceAddBridgeScreen.png "Network Interface Add Bridge Screen")

Select **Bridge** as the **Type** and enter a name for the interface. The name must use the format **bridge**X*, where *X* is a number representing a non-parent interface.
It is also recommended to add any notes or reminders. Enter details about this particular bridge in **Description**.

The next section is  **Bridge Settings**. Use the dropdown list next to **Bridge Members** to select the correct interfaces. Configure the remaining interface options to match your networking needs.

See [Interfaces Screen]({{< relref "/CORE/UIReference/Network/InterfacesScreen.md" >}}) for more information on settings.

{{< include file="/content/_includes/InterfaceOptions.md" markdown="true" >}}

{{< taglist tag="corenetworkinterfaces" limit="10" >}}

{{< taglist tag="corejailspluginsvm" limit="10" title="Related Articles" >}}
