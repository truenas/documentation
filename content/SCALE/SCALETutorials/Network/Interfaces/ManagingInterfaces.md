---
title: "Managing Interfaces"
description: "Provides instructions on how to add, edit, and delete a network interface and how to add an alias to an interface."
weight: 15
tags:
- network
- interfaces
---

The **Network** screen allows you to add new or edit existing network interfaces, and configure static and alias IP addresses.

{{< expand "Why should I use different interface types?" "v" >}}
{{< include file="/static/includes/NetworkInterfaceTypes.md" >}}
{{< /expand >}}

{{< include file="/static/includes/BeforeYouBridge.md" >}}

## One Static IP Address or Multiple Aliases?

{{< include file="/static/includes/AliasOrStaticIP.md" >}}

## Adding an Interface
{{< hint type=tip >}}
You can use DHCP to provide the IP address for only one network interface and this is most likely for your primary network interface configured during the installation process.

To add another network interface, click **Add** on the **Interfaces** widget to display the **Add Interface** panel.
Leave the **DHCP** checkbox clear.
Click **Add** to the right of **Aliases**, near the bottom of the **Add Interface** screen and enter a static IP address for the interface.
{{< /hint>}}

Click **Add** on the **Interfaces** widget to display the **Add Interface** panel.

You must specify the type of interface you want to create.
Select the type of interface from the **Type** dropdown options: **Bridge**, **Link Aggregation** or LAGG, and **VLAN** or virtual LAN.
You cannot edit the interface type after you click **Save**. 

Each interface type displays new fields on the **Add Interface** panel.
Links with more information on adding these specific types of interfaces are at the bottom of this article.

## Editing an Interface
Click on an existing interface in the **Interfaces** widget then click on the **Edit** icon to open the **Edit Interface** screen. 
The **Edit Interface** and **Add Interface** settings are identical except for **Type** and **Name**.
You cannot edit these settings after you click **Save**.
**Name** shows on the **Edit Interface** screen but you cannot change the name. 
**Type** only shows on the **Add Interface** screen.
If you make a mistake with either field you can only delete the interface and create a new one with the desired type. 

If you want to change from DHCP to a static IP, you must also add the new default gateway and DNS nameservers that work with the new IP address.
See [Setting Up a Static IP]({{< relref "SettingUpStaticIPs.md" >}}) for more information.

{{< hint type=warning >}}
If you delete the primary network interface you can lose your TrueNAS connection and the ability to communicate with the TrueNAS through the web interface!

You might need command line knowledge or physical access to the TrueNAS system to fix misconfigured network settings. 
{{< /hint >}}

## Deleting an Interface
Click the <i class="material-icons" aria-hidden="true" title="delete">delete</i> icon for the interface.
A delete interface confirmation dialog opens.

{{< hint type=warning >}}
Do not delete the primary network interface!

If you delete the primary network interface you lose your TrueNAS connection and the ability to communicate with the TrueNAS through the web interface!
You might need command line knowledge or physical access to the TrueNAS system to fix misconfigured network settings. 
{{< /hint >}}

## Adding Alias IP Addresses
{{< include file="/static/includes/MultipleInterfacesOnNetwork.md" >}}

To configure alias IPs to provide access to internal portions of the network, go to the **Network** screen:

1. Click on the **Edit** icon for the interface to open the **Edit Interface** screen for the selected interface. 

   {{< trueimage src="/images/SCALE/Network/EditInterfaceNicDeviceSCALE.png" alt="Add Alias" id="Add Alias" >}}

2. Clear the **DHCP** checkbox to show **Aliases**. Click **Add** for each alias you want to add to this interface.

3. Enter the IP address and CIDR values for the alias(es).

4. Select **DHCP** to control the primary IP for the interface.

5. Click **Save**.
