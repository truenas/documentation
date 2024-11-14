---
title: "Interface Configurations"
description: "Tutorials about configuring the various types of network interfaces available in TrueNAS SCALE."
geekdocCollapseSection: true
weight: 10
aliases:
 - /scale/scaletutorials/network/interfaces/managinginterfaces/
 - /scale/scaletutorials/network/interfaces/settingupstaticips/ 
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

You must know the DNS name server and default gateway addresses for your IP address.

{{< expand "Static IP or DHCP-Assigned?" "v" >}}
By default, TrueNAS SCALE configures the primary network interface for Dynamic Host Configuration Protocol (DHCP) IP address management during installation.
However, some administrators might choose to assign a static IP address to the primary network interface.
This choice can be made if TrueNAS is deployed on a system that does not allow DHCP for security, stability, or other reasons.

In all deployments, only one interface can be set up for DHCP, which is typically the primary network interface configured during the installation process.
Any additional interfaces must be manually configured with one or more static IP addresses.
{{< /expand >}}
{{< hint type=warning >}}
**Disruptive Change!**

You can lose your TrueNAS connection if you change the network interface that the web interface uses!

Command line knowledge and physical access to the TrueNAS system are often required to fix misconfigured network settings.
{{< /hint >}}

## Before You Begin
Have the DNS name server addresses, the default gateway for the new IP address, and any static IP addresses on hand to prevent lost communication with the server while making and testing network changes.
You have only 60 seconds to change and test these network settings before they revert back to the current settings, for example back to DHCP assigned if moving from DHCP to a static IP.

Back up your system to preserve your data and system settings. Save the system configuration file and a system debug.

As a precaution, grab a screenshot of your current settings in the **Global Configuration** widget.

If your network changes result in lost communication with the network and you need to return to the DHCP configuration, you can refer to this information to restore communication with your server.
Lost communication might require reconfiguring your network settings using the [Console Setup menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}).

{{< include file="/static/includes/BeforeYouBridge.md" >}}

## Adding an Interface
{{< hint type=tip >}}
DHCP provides the IP address for only one network interface.
TrueNAS uses DHCP to assign an IP address to the primary network interface during installation to provide access to the web UI.
You can changes this to a static, or fixed IP address using the Console Setup menu before accessing the web UI or after logging into the UI from the **Network** screen.
We recommend using the UI to make network changes because of the safeguards in place to prevent you from losing access to the system due to incorrectly configured interfaces.

To add another network interface, go to **Network** and click **Add** on the **Interfaces** widget to open the **Add Interface** screen.
Leave the **DHCP** checkbox clear.
Scroll down to the bottom of the screen and click **Add** to the right of **Aliases**, and enter the static IP address for the interface.
{{< /hint>}}

You must specify the type of interface to create.
Select the interface type from the **Type** dropdown options: **Bridge**, **Link Aggregation** (LAGG), or **VLAN** (virtual LAN).
The interface type cannot be changed after clicking **Save**.
To change the interface type, delete the interface and then add a new interface with the correct type selected. 

Each interface type displays new fields on the **Add Interface** screen.

### Testing Network Interface Changes
If you have only one active network interface the system protects your connection to the interface by displaying the **Test Changes** dialog.

After adding a new or changing an existing interface that can impact access to the UI, TrueNAS displays the **Test Changes** and **Revert Changes** button.
**Test Changes** is intended to prevent changes that can break access to the UI. You have 60 seconds to test and save a change.
**Revert Changes** discards any changes made to the interface within the same 60 second period.

{{< trueimage src="/images/SCALE/Network/TestNetworkChanges.png" alt="Test Network Changes" id="Test Network Changes" >}}

To test the change:
1. Click **Test Changes**. You have 60 seconds to test the network change.

2. Open a new browser window while keeping current the browser session open.

3. Enter the IP address in the browser URL field of the new window and press <kbd>Enter</kbd>.
   The TrueNAS login screen displays.

4. Enter the administrator login credentials to access the system.

5. Go to **Network** and click **Save Changes**.

If you cannot access the UI, return to the original browser session and click **Revert Changes** on the **Network** screen.
Click **Test Changes** to verify the change does not interfere with UI access, or **Revert Changes** to discard the changes.

## Editing an Interface
To change an existing interface, select the existing interface listed on the **Interfaces** widget and click **Edit** to open the **Edit Interface** screen.

The **Edit Interface** and **Add Interface** settings are identical but the **Type** and **Name** fields are not editable after saving an interface.
**Name** shows on the **Edit Interface** screen, but you cannot change the name.
**Type** only shows on the **Add Interface** screen.
If you make a mistake with either and clicked **Save**, the only option to change either setting is to delete the interface and create a new one with the desired name and type.

To change from a DHCP-provided IP address to a static IP, you must also add the new default gateway and DNS name servers that work with the new IP address.

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

## Adding Static or Alias IP Addresses
TrueNAS allows assigning static IP addresses to an interface when not using a DHCP-assigned address, and adding static IP addresses as aliases.
Static IP addresses set a fixed address for an interface that external devices or websites need to access or remember, such as for VPN access.
An *alias* is an additional IP address assigned to a network interface configured with another primary IP address.

{{< hint type="info" >}}
Use the **Aliases** option on the **Add Interface** and **Edit Interface** screens to enter a non-DHCP-assigned IP address to an interface whether it is the primary fixed IP address or additional alias addresses for other purposes.
{{< /hint >}}

From the [Console Setup menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}), select option 1 to configure network settings or add alias IP addresses.

{{< include file="/static/includes/MultipleInterfacesOnNetwork.md" >}}

To configure IP addresses as aliases that provide access to internal portions of the network on an existing interface:

1. Go to **Network**, select the interface and click **Edit** to open the **Edit Interface**.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceNicDeviceSCALE.png" alt="Add Alias" id="Add Alias" >}}

2. Clear the **DHCP** checkbox to show the **Aliases** fields. 

3. Click **Add** for each alias to add to this interface. Enter the IP address and CIDR values for each alias.

5. Click **Save**.

6. Click [**Test Changes**](#testing-network-interface-changes) when prompted.

### Changing from DHCP to a Static IP Address
To change an interface from using DHCP to a static IP address:

1. Click on the **Edit** icon for the interface on the **Interfaces** widget to open the **Edit Interface** screen, then clear the **DHCP** checkbox.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceClearDHCP.png" alt="Clear DHCP Checkbox" id="Clear DHCP Checkbox" >}}

2. Click **Add** to the right of **Aliases** to show the IP address fields, then enter the new static IP and select the CIDR number from the dropdown list.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceAddAlias.png" alt="Add Alias IP Address" id="Add Alias IP Address" >}}

   Multiple interfaces cannot be members of the same subnet!

   {{< include file="/static/includes/MultipleInterfacesOnNetwork.md" >}}

   If an error displays or the **Save** button remains inactive when setting the IP addresses on multiple interfaces, check the subnet and ensure the CIDR numbers are different.
  
3. Click **Save**.
   
4. Check the name servers and default router information in the **Global Information** widget.
   If the current settings are not on the same network, click **Settings** and modify each setting as needed to allow the static IP to communicate over the network.

   Enter the IP addresses for the DNS name servers in the **Nameserver 1**, **Nameserver 2**, and **Nameserver 3** fields.

   {{< trueimage src="/images/SCALE/Network/EditGlobalConfiguration.png" alt="Edit Global Configuration" id="Add Name Server and Default Gateway" >}}

   For home users, use **8.8.8.8** for a DNS name server address so you can communicate with external networks.

   Enter the IP address for the default gateway in the appropriate field.   
   If the static network is IPv4 enter the gateway in **IPv4 Default Gateway**, if the static network is IPv6 use **IPv6 Default Gateway**.

   Click **Save**.

5. Click [**Test Changes**](#testing-network-interface-changes) to verify the change does not interfere with UI access

### Returning to a DHCP-Assigned IP Address
Only one interface can use DHCP to assign the IP address and that is likely the primary network interface.
If you do not have an existing network interface set to use DHCP you can convert an interface from static IP to DHCP.

To switch back to using DHCP:

1. Click **Settings** on the **Global Configuration** widget.

2. Clear the name server fields and the default gateway, and then click **Save**.

3. Click on the **Edit** icon for the interface to display the **Edit Interface** screen.

4. Select **DHCP**.

5. Delete the static IP address in the **IP Address** fields.

6. Click **Save**.

7. Click **Settings** on the **Global Configuration** widget to open the **Global Configuration** screen, enter the name server and default gateway addresses for the new DHCP-provided IP address, then click **Save**.

   Home users can enter 8.8.8.8 in the **Nameserver 1** field.

8. Click [test the network change](#testing-network-interface-changes)

   If the test network operation fails or the system times out, your system returns to the network settings before you attempted the change.
   Verify the name server and default gateway information to try again.

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
