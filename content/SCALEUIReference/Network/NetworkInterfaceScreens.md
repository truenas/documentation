---
title: "Network Interface Screens"
description: "Provides information on the Network screen Interfaces widget and configuration screens."
weight: 10
tags:
 - network
 - interfaces
---

The **Interfaces** widget on the **Network** screen shows interface port names and IP addresses configured on your TrueNAS system and their upload/download rates.

![NetworkInterfacesWidget](/images/SCALE/Network/NetworkInterfacesWidget.png "Network Interfaces Widget")

Use **Add** to open the **Add Interface** configuration screen.

Click on an interface to open the **Edit Interface** configuration screen.

Click the <i class="material-icons" aria-hidden="true" title="edit">edit</i> icon next to an interface to open the **Edit Interface** configuration screen.

Click the <i class="material-icons" aria-hidden="true" title="reset configuration">refresh</i> icon next to a physical interface to reset configuration settings for that interface.

Click the <i class="material-icons" aria-hidden="true" title="delete">delete</i> icon next to any other interface to delete that interface.

{{< enterprise >}}
High Availability (HA) Enterprise systems cannot reset or delete interfaces while failover is enabled.
On systems with HA failover enabled, the <i class="material-icons" aria-hidden="true" title="reset configuration">refresh</i> or <i class="material-icons" aria-hidden="true" title="delete">delete</i> icons are disabled.
Go to **System > Failover** to disable failover before attempting to modify interfaces on HA systems.

![NetworkInterfacesWidgetHA](/images/SCALE/Network/NetworkInterfacesWidgetHA.png "Network Interfaces Widget with HA Enabled")

{{< /enterprise >}}

## Add/Edit Interface Configuration Screens
The fields on the **Add Interface** and **Edit Interface** configuration screens are almost identical. 
The **Type** field only shows on the **Add Interface** configuration screen.
**Type** is a required field, and after selecting the interface type additional configuration fields show based on the selected type.

**Apply** saves setting changes.

{{<include file="/static/includes/addcolumnorganizer.md">}}

### Interface Settings
These settings are common to all interface types. The **Type** setting is only available and required on the **Add Interface** configuration screen.

![AddInterfaceInterfaceSettings](/images/SCALE/Network/AddInterfaceInterfaceSettings.png "Interface Settings")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | (Required) Select the type of interface from the dropdown list, Options are:<br><li> **Bridge** - Select to create a logical link between multiple networks.<br><li>**Link Aggregation** - Select to combine multiple network connections into a single interface.<br><li>**VLAN** - Select to partition and isolate a segment of the connection.<br></li>Each type of interface shows additional configuration settings for that type. The **Type** field does not display on the **Edit Interface** screen. |
| **Name** | (Required) Enter a name for the interface. Use the format bond*X*, vlan*X*, or br*X* where *X* is a number representing a non-parent interface. Assign the first interface of any type the appropriate name plus zero, for example, **br0** for the first bridge interface created. You cannot change the interface name after clicking **Apply**. After saving, **Name** becomes a read-only field when editing an interface. |
| **Description** | Enter a description for the interface. |
| **DHCP** | Select to enable DHCP. Leave the checkbox clear to create a static IPv4 or IPv6 configuration. Only one interface can be configured using DHCP. |
| **Autoconfigure IPv6** | Select to automatically configure the IPv6 address with [rtsol(8)](https://man.cx/rtsol(8)). Only one interface can be configured this way. |
{{< /truetable >}}

### Bridge Settings
**Bridge Settings** only shows after selecting **Bridge** in **Type**.

![AddInterfaceBridgeSettings](/images/SCALE/Network/AddInterfaceBridgeSettings.png "Bridge Settings")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Bridge Members** | Select the network interfaces to include in the bridge from the dropdown list of options. |
{{< /truetable >}}

### Link Aggregation Settings
Link aggregation settings only show after selecting **Link Aggregation** as the **Type**.
Additional settings show based on the selection in **Link Aggregation Protocol**.

{{< expand "Click here for LACP settings" "v" >}}

![AddInterfaceLinkAggLACPSettings](/images/SCALE/Network/AddInterfaceLinkAggLACPSettings.png "Link Aggregation LACP Protocol")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Link Aggregation Protocol** | Select the protocol to use from the dropdown list of options. The protocol determines the outgoing and incoming traffic ports.<br><li>**LACP** - Select if the network switch is capable of active LACP (this is the recommended protocol). **LACP** shows additional settings.<br><li>**Failover** - Select if the network switch does not support active LACP. This is the default protocol choice and is only used if the network switch does not support active LACP. **Failover** uses only the **Link Aggregation Interfaces** setting.<li>**Loadbalance** - Select to set up loadbalancing. **Loadbalance** does not use any other link aggregation settings.</li> |
| **Transmit Hash Policy** | Shows when the protocol is set to **LACP** or **Loadbalance**. Select the hash policy from the dropdown list of options, **LAYER2**, **LAYER2+3** the default, or **LAYER3+4**. |
| **LACPDU Rate** | Shows only when the protocol is set to **LACP**. Select either **Slow** or **Fast** from the dropdown list of options. |
| **Link Aggregation Interfaces** | (Required) Shows when protocol is set to **LACP**, **Failover** or **Loadbalance**. Select the interfaces to use in the aggregation.<br> Warning! Link Aggregation creation fails if any of the selected interfaces are manually configured! |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Click here for Failover settings" "v" >}}

![AddInterfaceLinkAggFailoverSettings](/images/SCALE/Network/AddInterfaceLinkAggFailoverSettings.png "Link Aggregation Failover Protocol")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Link Aggregation Protocol** | Select the protocol to use  from the dropdown list of options. The protocol determines the outgoing and incoming traffic ports. Options are:<br><li>**LACP** - Select if the network switch is capable of active LACP (this is the recommended protocol). **LACP** Shows additional settings.<br><li>**Failover** - Select if the network switch does not support active LACP. This is the default protocol choice and is only used if the network switch does not support active LACP. **Failover** uses only the **Link Aggregation Interfaces** setting.<br><li>**Loadbalance** - Select to set up loadbalancing. **Loadbalance** does not use any other link aggregation settings.</li> |
| **Link Aggregation Interfaces** | (Required) Select the interfaces to use in the aggregation. <br> Warning! Link Aggregation creation fails if any of the selected interfaces are manually configured! |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Click here for Loadbalance settings" "v" >}}

![AddInterfaceLinkAggLoadbalanceSettings](/images/SCALE/Network/AddInterfaceLinkAggLoadbalanceSettings.png "Link Aggregation Loadbalance Protocol")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Link Aggregation Protocol** | Select the protocol to use  from the dropdown list of options. The protocol determines the outgoing and incoming traffic ports.<br><li>**LACP** - Select if the network switch is capable of active LACP (this is the recommended protocol). **LACP** shows additional settings.<br><li>**Failover** - Select if the network switch does not support active LACP. This is the default protocol choice and should be only used if the network switch does not support active LACP. **Failover** uses only the **Link Aggregation Interfaces** setting.<br><li>**Loadbalance**  Select to set up loadbalancing. **Loadbalance** does not use any other link aggregation settings</li>|
| **Transmit Hash Policy** | Select the hash policy from the dropdown list of options, **LAYER2**, **LAYER2+3** the default, or **LAYER3+4**. |
| **Link Aggregation Interfaces** | Required. Select the interfaces to use in the aggregation. <br> Warning! Link Aggregation creation fails if any of the selected interfaces have been manually configured! |
{{< /truetable >}}
{{< /expand >}}

### VLAN Settings
VLAN settings only display after you select **VLAN** as the **Type**.

![AddInterfaceVLANSettings](/images/SCALE/Network/AddInterfaceVLANSettings.png "Interface Settings VLAN Type")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Parent Interface** | Select the VLAN parent interface from the dropdown list of options. This is usually an Ethernet card connected to a switch port configured for the VLAN. New link aggregations are not available until you restart the system. |
| **VLAN Tag** |(Required) Enter the numeric tag configured in the switched network. Request this from your IT department if you are not the network administrator for your systems. |
| **Priority Code Point** | Select the class of service from the dropdown list of options. The available 802.1p class of service ranges from **Best effort (default)** to **Network control (highest)**. |
{{< /truetable >}}

### Other Settings
**Other Settings** show for all types of interfaces.

![AddInterfaceOtherSettings](/images/SCALE/Network/AddInterfaceOtherSettings.png "Interface Other Settings")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **MTU** | *Maximum Transmission Unit* (MTU), or the largest protocol data unit that can be communicated. The largest workable MTU size varies with network interfaces and equipment. 1500 and 9000 are standard Ethernet MTU sizes. Leaving blank restores the field to the default value of **1500**. |
{{< /truetable >}}

### Aliases
**Add** the right of **Aliases** shows fields to define an alias IP address and netmask (CIDR) for the interface on the TrueNAS controller. The alias can be an IPv4 or IPv6 address.

![AddInterfaceAliases](/images/SCALE/Network/AddInterfaceAliases.png "Interface Aliases")

Users can also select the CIDR bits that are a part of the network address from the dropdown list of options.

## Testing Changes
The option to test network changes shows when creating a new or changing an existing network interface that can affect access to the UI.

{{< trueimage src="/images/SCALE/Network/TestNetworkChanges.png" alt="Test Network Changes" id="Test Network Changes" >}}

**Test Changes** starts the 60-second timer. 
**Revert Changes** discards changes made within the 60-second period.
**Save Changes** makes changes permanent. Shows in the new browser window opened as part of the [esting Network Interface Changes]({{< ref "/SCALETutorials/Network/Interfaces/#testing-network-interface-changes" >}}) process.
