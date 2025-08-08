---
title: "Setting Up a Network VLAN "
description: "Provides instructions on setting up a network VLAN interface."
weight: 30
tags:
- network
- interfaces
---

A virtual LAN (VLAN) is a partitioned and isolated domain in a computer network at the data link layer (OSI layer 2).
Click [here](https://www.ieee802.org/1/pages/802.1Q-2014.html) for more information on VLANs.

TrueNAS uses [vlan(4)](https://man.cx/vlan(4)) to manage VLANs.

Before you begin, make sure you have an Ethernet card connected to a switch port and configured for your VLAN.
Ensure that you have also preconfigured the VLAN tag in the switched network.
Consult with your IT department to obtain this VLAN tag if you are not the network administrator for your systems.

To set up a VLAN interface, go to **Network**, click **Add** on the **Interfaces** widget to open the **Add Interface** screen, then:

1. Select **VLAN** from the **Type** dropdown list. You cannot change the **Type** field value after clicking **Apply**.

   {{< trueimage src="/images/SCALE/Network/AddInterfaceVLANType.png" alt="Add VLAN Interface Settings" id="Add VLAN Interface Settings" >}}

2. Enter a name for the interface using the format **vlan*X*** where *X* is a number representing a non-parent interface.
   Assing the first VLAN bridge **vlan0**.

   You cannot change the **Name** of the interface after clicking **Save**.

3. (Optional, but recommended) Enter any notes or reminders about this VLAN in **Description**.

4. Select the interface in the **Parent Interface** dropdown list. This is typically an Ethernet card connected to a switch port already configured for the VLAN.

5. Enter the numeric tag for the interface in the **VLAN Tag** field. This is typically preconfigured in the switched network.

6. Select the VLAN [Class of Service](https://tools.ietf.org/html/rfc4761#section-4.2.7)  from the **Priority Code Point** dropdown list.

7. (Optional) Click **Add** to the right of **Aliases** to show additional IP address fields for each additional IP address to add to this VLAN interface.

8. Click **Save**.

9. Test the network change when prompted.
