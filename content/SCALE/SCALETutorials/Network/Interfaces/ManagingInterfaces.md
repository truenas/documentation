---
title: "Managing Interfaces"
description: "Describes how to add, edit, and delete a network interface and how to add an alias to an interface."
weight: 15
tags:
- scalenetwork
- scaleinterface
---

{{< toc >}}


You can add new or edit existing network interfaces on the **Network** screen.

{{< expand "Why should I use different interface types?" "v" >}}
{{< include file="/_includes/NetworkInterfaceTypes.md" type="page" >}}
{{< /expand >}}

## One Static IP Address or Multiple Aliases?

{{< include file="/_includes/AliasOrStaticIP.md" type="page" >}}


## Adding an Interface

{{< hint type=tip >}}
You can only use DHCP to provide the IP address for one network interface and this is most likely for your primary network interface configured during the installation process.

To add another network interface leave the **DHCP** checkbox clear and click the **Add** button near the bottom of the **Add Interface** configuration panel so you can enter a static IP address for the interface.
{{< /hint>}}

Click **Add** on the **Interfaces** widget to display the **Add Interface** panel.

You must specify the type of interface you want to create. The **Type** field provides three options: **Bridge**, **Link Aggregation** or LAGG, and **VLAN** or virtual LAN. You cannot edit the interface type after you click **Save**. 

Each interface type displays new fields on the **Add Interface** panel. Links with more information on adding these specific types of interfaces are at the bottom of this article.

## Editing an Interface

Click on an existing interface in the **Interfaces** widget to display the **Edit Interface** configuration panel. 
The fields on the **Edit Interface** and **Add Interface** configuration panel fields are identical except for the **Type** and **Name** fields. 
Both of these fields are editable only on the **Add Interface** panel before you click **Save**. The **Type** field only appears on the **Add Interface** configuration panel.

Because you cannot edit the interface type or name after you click **Save**, if you make a mistake with either field you can only delete that interface and create a new one with the desired type. 

If you want to change from DHCP to a static IP, you must also add the new default gateway and DNS nameservers that work with the new IP address. See [Setting Up a Static IP]({{< relref "SettingUpStaticIPs.md" >}}) for more information.

{{< hint type=warning >}}
If you delete the primary network interface you can lose your TrueNAS connection and the ability to communicate with the TrueNAS through the web interface!

You might need command line knowledge or physical access to the TrueNAS system to fix misconfigured network settings. 
{{< /hint >}}

## Deleting an Interface

Click the <i class="material-icons" aria-hidden="true" title="delete">delete</i> icon next to the interface. The delete interface confirmation dialog displays.

{{< hint type=warning >}}
Do not delete the primary network interface!

If you delete the primary network interface you lose your TrueNAS connection and the ability to communicate with the TrueNAS through the web interface!
You might need command line knowledge or physical access to the TrueNAS system to fix misconfigured network settings. 
{{< /hint >}}

## Adding Alias IP Addresses

{{< include file="/_includes/MultipleInterfacesOnNetwork.md" type="page" >}}

If you want to configure alias IPs for access to internal portions of the network, from the **Network** screen:

1. Click on the interface to open the **Edit Interface** screen for the selected interface. 
   
   ![EditInterfaceNicDeviceSCALE](/images/SCALE/22.12/EditInterfaceNicDeviceSCALE.png "Add Alias")

2. Clear the checkmark for **DHCP** to show the **Aliases** fields, and then click **Add** for each alias you want to add to this interface.

3. Enter the IP address and CIDR values for the alias(es) you want to add.

4. Select **DHCP** to control the primary IP for the interface.

5. Click **Save**.

{{< taglist tag="scaleinterface" limit="10" >}}
