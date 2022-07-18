---
title: "Setting Up a Network VLAN "
description: "This article provides instructions on setting up a network VLAN interface."
weight: 30
tags:
- scalenetwork
- scaleinterface
---


A virtual LAN (VLAN) is a partitioned and isolated domain in a computer network at the data link layer (OSI layer 2). Click [here](https://www.ieee802.org/1/pages/802.1Q-2014.html) for more information on VLANs.
TrueNAS uses [vlan(4)](https://man.cx/vlan(4)) to manage VLANs.

Before you begin, make sure you have an Ethernet card connected to a switch port and already configured for your VLAN.
Also that you have preconfigured the VLAN tag in the switched network.

To set up a VLAN interface, from the **Network** screen:

1. Click **Add** in the **Interfaces** widget. The **Add Interface** configuration screen displays.
   
   ![AddInterfaceVLANType](/images/SCALE/22.02/AddInterfaceVLANTypes.png "Add VLAN Interface Settings")

2. Select **VLAN** from the **Type** dropdown list. You cannot change the **Type** field value after you click **Apply**.

3. Enter a name for the interface using the format *vlanX* where *X* is a number representing a non-parent interface.
   You cannot change the **Name** of the interface after you click **Apply**.

3. (Optional but recommended) Enter any notes or reminders about this particular VLAN in the **Description** field.

4. Select the interface in the **Parent Interface** dropdown list. This is typically an Ethernet card connected to a switch port already configured for the VLAN.

5. Enter the numeric tag for the interface in the **Vlan Tab** field. This is typically preconfigured in the switched network.

6. Select the VLAN [Class of Service](https://tools.ietf.org/html/rfc4761#section-4.2.7)  from the **Priority Code Point** dropdown list.

7. (Optional) Click **Add** to enter another IP address if desired for this bridge interface. Click **Add** to display an IP address field for each IP address you want to add.

8. Click **Apply** when finished.

{{< taglist tag="scaleinterface" limit="10" >}}
{{< taglist tag="scalenetwork" limit="10" "Related Network Articles" >}}