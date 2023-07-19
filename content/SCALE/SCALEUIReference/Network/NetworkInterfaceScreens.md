---
title: "Network Interface Screens"
description: "Provides information on the Network screen Interfaces widget and configuration screens."
weight: 10
tags:
 - scalenetwork
 - scaleinterface
---

{{< toc >}}

The **Interfaces** widget on the **Network** screen displays interface port names and IP addresses configured on your TrueNAS system, as well as their upload/download rates.

![NetworkInterfacesWidget](/images/SCALE/23.10/NetworkInterfacesWidget.png "Network Interfaces Widget")

Use **Add** to open the **Add Interface** configuration screen.

Click on an interface to open the **Edit Interface** configuration screen.

Click the <i class="material-icons" aria-hidden="true" title="edit">edit</i> icon next to an interface to open the **Edit Interface** configuration screen.

Click the <i class="material-icons" aria-hidden="true" title="reset configuration">refresh</i> icon next to a physical interface to reset configuration settings for that interface.

Click the <i class="material-icons" aria-hidden="true" title="delete">delete</i> icon next to any other interface to delete that interface.

{{< enterprise >}}
High Availability (HA) Enterprise systems are unable to reset or delete interfaces while HA is enabled.
On systems with HA enabled, the <i class="material-icons" aria-hidden="true" title="reset configuration">refresh</i> or <i class="material-icons" aria-hidden="true" title="delete">delete</i> icons are disabled.
Disable HA from the **System Settings > Failover** screen to modify interfaces.

![NetworkInterfacesWidgetHA](/images/SCALE/23.10/NetworkInterfacesWidgetHA.png "Network Interfaces Widget with HA Enabled")

{{< /enterprise >}}<!-- Enterprise tag in an expand, explain difference for an enterprise system and button disabling for HA enabled -->

## Add/Edit Interface Configuration Screens
The fields on the **Edit Interface** are almost identical to the **Add Interface** configuration screen except for the **Type** field that only displays on the **Add Interface** configuration screen. **Type** is a required field and after selecting the interface type additional configuration fields display for the type selected.

Use **Apply** to save your setting changes.

### Interface Settings
These settings display for all interface types. The **Type** setting is only available and required on the **Add Interface** configuration screen.

![AddInterfaceInterfaceSettings](/images/SCALE/23.10/AddInterfaceInterfaceSettings.png "Interface Settings")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Required field. Select the type of interface from the dropdown list or options **Bridge**, **Link Aggregation** or **VLAN**. Each option displays additional configuration settings for that type.<br> Select **Bridge** to create a logical link between multiple networks.<br> Select **Link Aggregation** to combine multiple network connections into a single interface.<br> Select **Virtual LAN** (VLAN) to partition and isolate a segment of the connection.<br> This field does not display on the **Edit Interface** screen. |
| **Name** | Required field. Enter a name for the interface. Use the format bond*X*, vlan*X*, or br*X* where *X* is a number representing a non-parent interface. You cannot change the interface name after you click **Apply**. It becomes a read-only field when editing an interface. |
| **Description** | Enter a description for the interface. |
| **DHCP** | Select to enable DHCP. Leave checkbox clear to create a static IPv4 or IPv6 configuration. Only one interface can be configured using DHCP. |
| **Autoconfigure IPv6** | Select to automatically configure the IPv6 address with [rtsol(8)](https://man.cx/rtsol(8)). Only one interface can be configured this way. |
{{< /truetable >}}

### Bridge Settings
Bridge Settings only display after you select **Bridge** in for **Type**.

![AddInterfaceBridgeSettings](/images/SCALE/23.10/AddInterfaceBridgeSettings.png "Bridge Settings")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Bridge Members** | Select the network interfaces to include in the bridge from the dropdown list of options. |
{{< /truetable >}}

### Link Aggregation Settings
Link aggregation settings only display after you select **Link Aggregation** as the **Type**.
Additional settings display based on the selection in **Link Aggregation Protocol**.

{{< expand "Click here for LACP settings" "v" >}}

![AddInterfaceLinkAggLACPSettings](/images/SCALE/23.10/AddInterfaceLinkAggLACPSettings.png "Link Aggregation LACP Protocol")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Link Aggregation Protocol** | Select the protocol to use  from the dropdown list of options. The protocol determines the outgoing and incoming traffic ports.<br> Select **LACP** if the network switch is capable of active LACP (this is the recommended protocol). **LACP** displays additional settings.<br> Select **Failover** if the network switch does not support active LACP. This is the default protocol choice and should be only used if the network switch does not support active LACP. **Failover** uses only the **Link Aggregation Interfaces** setting.<br> Select **Loadbalance** to set up loadbalancing. **Loadbalance** does not use any other link aggregation settings.|
| **Transmit Hash Policy** | Displays when the protocol is set to **LCAP** or **Loadbalance**. Select the hash policy from the dropdown list of options, **LAYER2**, **LAYER2+3** the default, or **LAYER3+4**.. |
| **LACPDU Rate** | Displays only when the protocol is set to **LCAP**. Select either **Slow** or **Fast** from the dropdown list of options. |
| **Link Aggregation Interfaces** | Displays when protocol is set to **LACP**, **Failover** or **Loadbalance**. This is a required field. Select the interfaces to use in the aggregation. <br> Warning! Link Aggregation creation fails if any of the selected interfaces have been manually configured! |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Click here for Failover settings" "v" >}}

![AddInterfaceLinkAggFailoverSettings](/images/SCALE/23.10/AddInterfaceLinkAggFailoverSettings.png "Link Aggregation Failover Protocol")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Link Aggregation Protocol** | Select the protocol to use  from the dropdown list of options. The protocol determines the outgoing and incoming traffic ports.<br> Select **LACP** if the network switch is capable of active LACP (this is the recommended protocol). **LACP** displays additional settings.<br> Select **Failover** if the network switch does not support active LACP. This is the default protocol choice and should be only used if the network switch does not support active LACP. **Failover** uses only the **Link Aggregation Interfaces** setting.<br> Select **Loadbalance** to set up loadbalancing. **Loadbalance** does not use any other link aggregation settings.|
| **Link Aggregation Interfaces** | This is a required field. Select the interfaces to use in the aggregation. <br> Warning! Link Aggregation creation fails if any of the selected interfaces have been manually configured! |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Click here for Loadbalance settings" "v" >}}

![AddInterfaceLinkAggLoadbalanceSettings](/images/SCALE/23.10/AddInterfaceLinkAggLoadbalanceSettings.png "Link Aggregation Loadbalance Protocol")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Link Aggregation Protocol** | Select the protocol to use  from the dropdown list of options. The protocol determines the outgoing and incoming traffic ports.<br> Select **LACP** if the network switch is capable of active LACP (this is the recommended protocol). **LACP** displays additional settings.<br> Select **Failover** if the network switch does not support active LACP. This is the default protocol choice and should be only used if the network switch does not support active LACP. **Failover** uses only the **Link Aggregation Interfaces** setting.<br> Select **Loadbalance** to set up loadbalancing. **Loadbalance** does not use any other link aggregation settings.|
| **Transmit Hash Policy** | Select the hash policy from the dropdown list of options, **LAYER2**, **LAYER2+3** the default, or **LAYER3+4**. |
| **Link Aggregation Interfaces** | This is a required field. Select the interfaces to use in the aggregation. <br> Warning! Link Aggregation creation fails if any of the selected interfaces have been manually configured! |
{{< /truetable >}}
{{< /expand >}}

### VLAN Settings
Link aggregation settings only display after you select **VLAN** as the **Type**.

![AddInterfaceVLANSettings](/images/SCALE/23.10/AddInterfaceVLANSettings.png "Interface Settings VLAN Type")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Parent Interface** | Select the VLAN parent interface from the dropdown list of options. Usually and Ethernet card connected to a switch port configured for the VLAN. New link aggregations are not available until you restart the system. |
| **VLAN Tag** |Required field. Enter the numeric tag configured in the switched network. |
| **Priority Code Point** | Select the Class of Service from the dropdown list of options. The available 802.1p Class of Service ranges from **Best effort (default)** to **Network control (highest)**. |
{{< /truetable >}}

### Other Settings
**Other Settings** display for all types of interfaces.

![AddInterfaceOtherSettings](/images/SCALE/23.10/AddInterfaceOtherSettings.png "Interface Other Settings")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **MTU** | *Maximum Transmission Unit* (MTU), or the largest protocol data unit that can be communicated. The largest workable MTU size varies with network interfaces and equipment. 1500 and 9000 are standard Ethernet MTU sizes. Leaving blank restores the field to the default value of **1500**. |
{{< /truetable >}}

### Aliases
Use the **Aliases** **Add** to define an alias for the interface on the TrueNAS controller. The alias can be an IPv4 or IPv6 address.

![AddInterfaceAliases](/images/SCALE/23.10/AddInterfaceAliases.png "Interface Aliases")

Users may also select how many bits are a part of the network address from the dropdown list of options.

{{< taglist tag="scaleinterface" limit="10" >}}

{{< taglist tag="scalenetwork" limit="10" title="Related Network Articles" >}}