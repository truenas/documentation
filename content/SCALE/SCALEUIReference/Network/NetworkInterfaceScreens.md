---
title: "Network Interface Screens"
description: "Provides information on the Network screen Interfaces widget and configuration screens."
weight: 10
tags:
 - network
 - interfaces
---

The **Interfaces** widget on the **Network** screen shows the configured interface port names and IP addresses, and the MAC addresses associated with network interface cards in your TrueNAS system.

{{< trueimage src="/images/SCALE/Network/NetworkInterfacesWidget.png" alt="Network Interfaces Widget" id="Network Interfaces Widgets" >}}

**Add** opens the [**Add Interface**](#addedit-interface-screens) screen.

The <span class="material-icons">more_vert</span> at the right of each interface shows a dropdown list with two options:
* **<i class="material-icons" aria-hidden="true" title="edit">edit</i> Edit** - Opens the [**Edit Interface**](#addedit-interface-screens) screen.
* **<i class="material-icons" aria-hidden="true" title="reset configuration">refresh</i> Reset Configuration** - Opens the [**Reset Configuration**](#refresh-configuration-dialog) dialog.

{{< enterprise >}}
High Availability (HA) Enterprise systems cannot reset or edit interface settings with failover enabled.
On systems with HA failover enabled, the **<i class="material-icons" aria-hidden="true" title="reset configuration">refresh</i> Reset Configuration** or **<i class="material-icons" aria-hidden="true" title="edit">edit</i> Edit** options are disabled.
Go to **System > Failover** to disable failover before attempting to modify interfaces on HA systems.

{{< trueimage src="/images/SCALE/Network/NetworkInterfacesWidgetHA.png" alt="Network Interfaces Widget with HA Enabled" id="Network Interfaces Widget with HA Enabled" >}}

{{< /enterprise >}}

### Reset Configuration Dialog

The **Reset Configuration** dialog allows you to reset the configuration settings for that interface.

{{< trueimage src="/images/SCALE/Network/RefreshConfigurationDialog.png" alt="Refresh Configuration Dialog" id="Refresh Configuration Dialog" >}}

**Confirm** validates the reset activity and activates the **Reset** button.

**Reset** resets the configuration for that interface. Resetting the configuration shows the [test change](#test-changes) options to prevent losing access to that interface and the TrueNAS system.

## Add/Edit Interface Screens

The **Add Interface** screen allows you to configure the settings for a new interface.
The **Edit Interface** screen allows changes to settings for an existing interface.
Both screens show the [test changes](#test-changes) options to validate settings and prevent losing access to the TrueNAS system if the interface is incorrectly configured.

The setting on the **Add Interface** and **Edit Interface** screens are almost identical.

**Type** only shows on the **Add Interface** screen. It cannot be changed on the **Edit Interface** screen.
**Type** is a required field. The additional settings show on the **Add Interface** screen based on the selected type.

**Apply** saves setting changes, and shows the test changes options.

{{<include file="/static/includes/addcolumnorganizer.md">}}

### Interface Settings

Interface settings configure the network interface name, type, and IP address assignment. These settings are common to the three interface types.

{{< trueimage src="/images/SCALE/Network/AddInterfaceInterfaceSettings.png" alt="Interface Setting" id="Interface Setting" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | (Required) Only shows on the **Add Interface** screen. Sets the type of interface based on the selection on the dropdown list. Options are: <br><li> **Bridge** - Creates a logical link between multiple networks. <br><li>**Link Aggregation** (LAGG) - Combines multiple network connections into a single interface. <br><li>**VLAN** - Partitions and isolates a segment of the connection. <br></li>Each type of interface shows additional configuration settings for that type. The type cannot be changed after clicking **Apply**, and testing and accepting the interface change. |
| **Name** | (Required) Accepts manual or copy/paste entry of a name for the interface. Names must use the format bond*X* for a LAGG, vlan*X* for a VLAN, or br*X* for a bridge, and where *X* is a number representing a non-parent interface. Assign the first interface of any type the appropriate name plus zero, for example, **br0** for the first bridge interface created. You cannot change the interface name after clicking **Apply**. After saving, **Name** becomes a read-only field when editing an interface. |
| **Description** | Accepts manual or copy/paste entry of a description for the interface. Descritpions can provide additional information about how the interface is used or what it connects to. |
| **DHCP** | Enable DHCP, allowing it to assign IP addresses to the interface. Shows two options: **Get IP Address Automatically from DHCP** and **Define Static IP Addresses**. reate a static IPv4 or IPv6 configuration.  |
| **Get IP Address Automatically from DHCP** | Allows DHCP to assign the IP address for the interface. Only one interface can be configured using DHCP. |
| **Define Static IP Addresses** | Allows adding a static IP address to the interface using the **Static IP Addresses** fields. |
| **Static IP Addresses** | Shows IP address and netmask (CIDR) fields after clicking **Add**. Click **Add** for each static IP address to add to/associate with the interface. |
| **Autoconfigure IPv6** | Select to automatically configure the IPv6 address with [rtsol(8)](https://man.cx/rtsol(8)). Only one interface can be configured this way. |
| **MTU** | Sets the maximum transmission unit (MTU), which is the largest protocol data unit that can be communicated. The largest workable MTU size varies  with network interfaces and equipment. 1500 and 9000 are standard Ethernet MTU sizes. Leaving blank restores the field to the default value of **1500**. |
{{< /truetable >}}

### Bridge Settings

Bridge settings show after setting **Type** to **Bridge**. TrueNAS automatically populates the **Name** with the default **br1**.
Use **Description** to further define or clarify how or where the bridge is used.

{{< trueimage src="/images/SCALE/Network/AddInterfaceBridgeSettings.png" alt="Bridge Interface Settings" id="Bridge Interface Settings" >}}

**Bridge Members** sets the network interfaces to include in the bridge to the option selected on the dropdown list. |

### Link Aggregation Settings

Link aggregation (LAGG) settings show after setting  **Type** to **Link Aggregation**. TrueNAS automatically populates **Name** with the default **bond1**.
Use **Description** to further define or clarify how or where the LAGG is used.

{{< trueimage src="/images/SCALE/Network/AddInterfaceLinkAggLACPSettings.png" alt="Link Aggregation LACP Protocol" id="Link Aggregation LACP Protocol" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Link Aggregation Protocol** | The protocol determines the outgoing and incoming traffic ports. Shows a dropdown list with three Link Aggregation (LAGG) protocol options:  <br><li>**LACP** - Use if the network switch is capable of active LACP (this is the recommended protocol). **LACP** shows additional settings.<br><li>**Failover** - Use if the network switch does not support active LACP. This is the default protocol choice and is only used if the network switch does not support active LACP. **Failover** uses only the **Link Aggregation Interfaces** setting. <br<li>**Loadbalance** - Use to set up loadbalancing. This does not use any other link aggregation settings.</li> |
| **Link Aggregation Interfaces** | (Required) Shows a dropdown list of interfaces in the system. Select the interfaces to use in the aggregation.<br> Warning! Link Aggregation creation fails if any of the selected interfaces are manually configured!<br><li>Failover shows the interfaces that can be enabled for failover. Enabling the toggle select the interface.<br><li>Loadbalance shows the **Transmit Hash Policy** setting. |
| **Transmit Hash Policy** | Shows when the protocol is set to **LCAP** or **Loadbalance**. Dropdown list shows three hash policy options, **LAYER2**, **LAYER2+3** the default, or **LAYER3+4**. |
| **LACPDU Rate** | Shows when the protocol is set to **LCAP**. Shows a dropdown list with two options: **Slow** or **Fast**. |
{{< /truetable >}}

### VLAN Settings

VLAN settings show after setting **Type** to **VLAN**. TrueNAS automatically populates the **Name** with the default **vlan1**.
Use **Description** to further define or clarify how or where the bridge is used.

{{< trueimage src="/images/SCALE/Network/AddInterfaceVLANSettings.png" alt="VLAN Settings" id="VLAN Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Parent Interface** | Shows a dropdown list of VLAN parent interface options. Options are usually an Ethernet card connected to a switch port configured for the VLAN. New link aggregations are not available until you restart the system. |
| **VLAN Tag** |(Required) Accepts manual or copy/paste entry of the numeric tag configured in the switched network. Request this tag from your IT department if you are not the network administrator for your systems. |
| **Priority Code Point** | Shows a dropdown list of the class of service options. The available 802.1p class of service ranges from **Best effort (default)** to **Network control (highest)**. |
{{< /truetable >}}

## Test Changes

These options show above the **Interfaces** widget after applying changes to a network interface  that can affect access to the UI., and are used to test network changes when creating a new or changing an existing network interface

{{< trueimage src="/images/SCALE/Network/TestNetworkChanges.png" alt="Test Network Changes" id="Test Network Changes" >}}

**Test Changes** starts the 60-second timer.

**Revert Changes** discards changes made within the 60-second period.

**Save Changes** shows after logging into the UI in a new browser window. Makes network changes permanent. Shows as the final part of the [testing network interface changes]({{< ref "/SCALE/SCALETutorials/Network/Interfaces#testing-network-interface-changes" >}}) process.
