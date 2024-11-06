---
title: "Interface Configurations"
description: "Tutorials about configuring the various types of network interfaces available in TrueNAS SCALE."
geekdocCollapseSection: true
weight: 10
aliases:
 - /scale/scaletutorials/network/interfaces/managinginterfaces/
related: false
tags:
 - network
 - interfaces
---

TrueNAS SCALE supports configuring different network interface types as part of the various backup, sharing, and virtualization features in TrueNAS.
The tutorials in this section guide you through each type of configuration.

Use the **Network** screen access interface and other network settings.
This article covers adding new or changing existing network interfaces, and configuring static and alias IPv4 addresses.
For information on configuring IPv6 addresses, see [Configuring IPv6]({{< relref "ConfigureIPv6.md" >}}).

{{< expand "Why should I use different interface types?" "v" >}}
{{< include file="/static/includes/NetworkInterfaceTypes.md" >}}
{{< /expand >}}

{{< include file="/static/includes/BeforeYouBridge.md" >}}

## One Static IP Address or Multiple Aliases?

{{< include file="/static/includes/AliasOrStaticIP.md" >}}

## Adding an Interface
{{< hint type=tip >}}
You can use DHCP to provide the IP address for only one network interface. The DHCP IP address is most likely for your primary network interface configured during installation.

To add another network interface, click **Add** on the **Interfaces** widget to display the **Add Interface** panel.
Leave the **DHCP** checkbox clear.
Click **Add** to the right of **Aliases**, near the bottom of the **Add Interface** screen, and enter a static IP address for the interface.
{{< /hint>}}

You must specify the type of interface you want to create.
Select the interface type from the **Type** dropdown options: **Bridge**, **Link Aggregation** or LAGG, and **VLAN** or virtual LAN.
You cannot edit the interface type after you click **Save**.

Each interface type displays new fields on the **Add Interface** panel.
Links with more information on adding these specific types of interfaces are at the bottom of this article.

## Testing Network Interface Changes
After adding a new interface or changing an existing interface that can impact access to the UI, SCALE displays a **Test Changes** dialog.
This function is intended to prevent changes that can break access to the UI.

{{< trueimage src="/images/SCALE/Network/TestNetworkChanges.png" alt="Test Network Changes" id="Test Network Changes" >}}

Click **Test Changes**. You have 60 seconds to test the change. Keep the browser session open, and open a new browser window.
Enter the IP address in the URL field and press <kbd>Enter</kbd>.
The SCALE login screen should display. Enter the administrator login credentials to access the system.

Go to **Network** in the new browser session and click **Save Changes**.

If you cannot access the UI, return to the original browser session and click **Revert Changes** on the **Network** screen.

Check your configuration, make the necessary changes, and then repeat the test to validate access to the UI.
If the change allows access to the UI but is not what you want, click **Revert Changes** in either the new or original browser session.
If the 60 seconds elapses and you do not click **Save Changes**, the system discards the changes made.

## Editing an Interface
To change an existing interface, click on the existing interface in the **Interfaces** widget and then click on the **Edit** icon to open the **Edit Interface** screen.

The **Edit Interface** and **Add Interface** settings are identical except for **Type** and **Name** which are not editable after adding and saving an interface.

**Name** shows on the **Edit Interface** screen, but you cannot change the name.
**Type** only shows on the **Add Interface** screen. You cannot edit these settings after saving the interface.
If you made a mistake with either field and clicked **Save**, the only option to change either setting is to delete the interface and create a new one with the desired name and type.

If you want to change from a DHCP-provided IP address to a static IP, you must also add the new default gateway and DNS nameservers that work with the new IP address.
See [Setting Up a Static IP]({{< relref "SettingUpStaticIPs.md" >}}) for more information.

After making the changes, click **Save**.

Test the change as described in [Testing Network Interface Changes](#testing-network-interface-changes).

{{< include file="/static/includes/NetworkWarn.md" >}}

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

6. Click **Test Changes** when prompted.

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
