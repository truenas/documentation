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

The **Network** screen provides access interface and other network settings.
This article covers adding new or changing existing network interfaces, and configuring static routes, and alias IPv4 addresses.
For information on configuring IPv6 addresses, see [Configuring IPv6]({{< relref "ConfigureIPv6.md" >}}).

{{< expand "Why should I use different interface types?" "v" >}}
{{< include file="/static/includes/NetworkInterfaceTypes.md" >}}
{{< /expand >}}

{{< include file="/static/includes/AliasOrStaticIP.md" >}}
## Before Adding a Bridge

{{< include file="/static/includes/BeforeYouBridge.md" >}}

## Adding an Interface
{{< hint type=tip >}}
DHCP provides the IP address for only one network interface.
TrueNAS uses DHCP to assign an IP address to the primary network interface during installation to provide access to the web UI.
You can changes this to a static, or fixed IP address using the Console Setup menu before accessing the web UI or after logging into the UI from the **Network** screen.
We recommend using the UI to make network changes because of the safeguards in place to prevent you from losing access to the system due to incorrectly configured interfaces.

To add another network interface, go to **Network** and click **Add** on the **Interfaces** widget to display the **Add Interface** screen.
Leave the **DHCP** checkbox clear.
Scroll down to the bottom of the screen and click **Add** to the right of **Aliases**, and enter the static IP address for the interface.
{{< /hint>}}

You must specify the type of interface to create.
Select the interface type from the **Type** dropdown options: **Bridge**, **Link Aggregation** (LAGG), or **VLAN** (virtual LAN).
The interface type cannot be changed after clicking **Save**.
To change the interface type, delete the interface and then add a new interface with the correct type selected. 

Each interface type displays new fields on the **Add Interface** screen.

## Testing Network Interface Changes
After adding a new or changing an existing interface that can impact access to the UI, TrueNAS displays the **Test Changes** button.
This function is intended to prevent changes that can break access to the UI. You have 60 seconds to test a change. 

{{< trueimage src="/images/SCALE/Network/TestNetworkChanges.png" alt="Test Network Changes" id="Test Network Changes" >}}

To test the change:
1. Click **Test Changes**. 
2. Keep the browser session open, and open a new browser window.
3. Enter the IP address in the browser URL field and press <kbd>Enter</kbd>.
   The TrueNAS login screen displays.
4. Enter the administrator login credentials to access the system.
5. Go to **Network** and click **Save Changes**.

If you cannot access the UI, return to the original browser session and click **Revert Changes** on the **Network** screen.

Check your configuration, make the necessary changes, and then repeat the test to validate access to the UI.

If the change allows access to the UI but is not what you want, click **Revert Changes** in either the new or original browser session.
If you do not click **Save Changes** before the 60 seconds elapses, the system discards the changes made.

## Editing an Interface
To change an existing interface, select the existing interface listed on the **Interfaces** widget and click **Edit** to open the **Edit Interface** screen.

The **Edit Interface** and **Add Interface** settings are identical but the **Type** and **Name** fields are not editable after saving an interface.
**Name** shows on the **Edit Interface** screen, but you cannot change the name.
**Type** only shows on the **Add Interface** screen.
If you make a mistake with either and clicked **Save**, the only option to change either setting is to delete the interface and create a new one with the desired name and type.

To change from a DHCP-provided IP address to a static IP, you must also add the new default gateway and DNS name servers that work with the new IP address.
See [Setting Up a Static IP]({{< relref "SettingUpStaticIPs.md" >}}) for more information.

Click **Save** after making all changes.

Test the change as described  above in [Testing Network Interface Changes](#testing-network-interface-changes).

## Deleting an Interface
{{< hint type=warning >}}
Deleting the primary network interface can result in lost access to the TrueNAS UI and losing the connection to TrueNAS!

If saved changes cause lost access to the UI, you might need command line knowledge and/or physical access to the TrueNAS system to fix misconfigured network settings.

Do not delete the primary network interface!
{{< /hint >}}

Click the <i class="material-icons" aria-hidden="true" title="delete">delete</i> icon for the interface.
A delete interface confirmation dialog opens.

## Adding Alias IP Addresses
TrueNAS allows adding aliases to an interface.
An *alias* is an additional IP address assigned to a network interface.
Aliases are often used for running multiple service or applications that need different IP addresses, or to achieve high availability and network load balancing.

The **Aliases** option on the **Add Interface** and **Edit Interface** forms is used to enter a non-DHCP-assigned IP address to the interface whether it is the primary IP address or additional alias addresses for other purposes.

{{< include file="/static/includes/MultipleInterfacesOnNetwork.md" >}}

To configure IP addresses as aliases that provide access to internal portions of the network on an existing interface:

1. Go to **Network**, select the interface and click **Edit** to open the **Edit Interface**.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceNicDeviceSCALE.png" alt="Add Alias" id="Add Alias" >}}

2. Clear the **DHCP** checkbox to show the **Aliases** fields. Click **Add** for each alias to add to this interface.

3. Enter the IP address and CIDR values for each alias.

4. Select **DHCP** to control the primary IP for the interface.

5. Click **Save**.

6. Click [**Test Changes**](#testing-network-interface-changes) when prompted.

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
