---
title: "Interface Configuration"
description: "Tutorials about configuring the various types of network interfaces available in TrueNAS."
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


TrueNAS supports configuring different types of network interfaces such as a standard interface, network bridge, LAGG, and VLAN interfaces to use as part of the various backup, sharing, and virtualization features in TrueNAS.
The tutorials in this section guide you through each of the various network interface configurations.

{{< expand "Why should I use different interface types?" "v" >}}
{{< include file="/static/includes/NetworkInterfaceTypes.md" >}}
{{< /expand >}}

The **Network** screen shows network settings for interfaces, global network settings, adding static routes, and IPMI connections.
This article describes adding new or changing existing network interfaces.
For information on configuring IPv6 addresses, see [Configuring IPv6]({{< ref "ConfigureIPv6" >}}).

You must know the DNS name server and default gateway addresses for your IP address.

{{< expand "Static IP or DHCP-Assigned?" "v" >}}
By default, TrueNAS configures the primary network interface for Dynamic Host Configuration Protocol (DHCP) IP address management during installation.
However, some administrators might choose to assign a static IP address to the primary network interface.
This choice can be made if TrueNAS is deployed on a system that does not allow DHCP for security, stability, or other reasons.

In all deployments, only one interface can be set up for DHCP, which is typically the primary network interface configured during the installation process.
Any additional interfaces must be manually configured with one or more static IP addresses.
{{< /expand >}}

## Before You Begin

{{< include file="/static/includes/InterfaceBeforeYouBegin.md" >}}
{{< include file="/static/includes/BeforeYouBridge.md" >}}

## Adding an Interface

{{< hint type=tip >}}
TrueNAS uses DHCP to assign an IP address to the primary network interface during installation to provide access to the web UI.
DHCP provides the IP address for only one network interface.

After initially installing TrueNAS, you can change the DHCP-assigned IP address to a static IP address by:
* Using the [Console Setup menu]({{< ref "ConsoleSetupMenuSCALE" >}})
* Logging into the UI using the DHCP-assigned IP address, and going to the **Network** screen and editing the interface

We recommend using the UI to make network changes as it has safeguards in place to prevent you from losing access to the system due to incorrectly configured interfaces.
{{< /hint>}}

To add another network interface in the UI, go to **System > Network** and click **Add** on the **Interfaces** widget to open the **Add Interface** screen.

{{< trueimage src="/images/SCALE/Network/AddInterfaceScreen.png" alt="Add Interface Screen" id="Add Interface Screen" >}}

You must specify the type of interface to create.
Select the interface type from the **Type** dropdown options: **Bridge**, **Link Aggregation** (LAGG), or **VLAN** (virtual LAN).
The interface type cannot be changed after clicking **Save**.

To revert the interface to default network settings, select **Reset Configuration** on the <span class="material-icons">more_vert</span> for the interface.
This resets the interface from a static IP address to a DHCP-assigned address and resets the domain to the TrueNAS default **local**.

Enter a name for the interface using the format that corresponds to the type of interface you are adding. Naming differs between physical and virtual interfaces.
The name assigned to the primary physical network interface on your system is based on the systemd predictable naming scheme, and reflects the hardware type and location. The names vary based on your hardware configuration.
For example, *eno1* for onboard NICs, *ens3* for PCIe slot NICs, and you might see *eno1np0*, which is an onboard NIC with more than one port on the NIC.

When selecting a virtual interface type, enter a name based on the type.
For example, **bond*X***, **vlan*X***, or **br*X*** and where *X* is a number.

To allow DHCP to assign the interface IP address, select **Get IP address Automatically from DHCP**.

To use a fixed (static) IP address, select the **Define Static IP Addresses**, and then click **Add** to the right of **Static IP Addresses** to show the IP address and netmask (CIDR) fields. Enter the assigned IP address and select the netmask from the dropdown list.

Click **Add** for each IP address you want to associate with the interface.

If adding an IPv6 IP address, refer to [Configuring IPv6]({{< ref "ConfigureIpv6" >}}) for details on this type of network configuration.

Click **Save** when you are certain of your configuration. You cannot change the interface type or name after clicking **Save**!

{{< include file="/static/includes/TestingNetworkChanges.md" >}}

## Editing an Interface

To change an existing interface, click on the <span class="material-icons">more_vert</span> icon at the right of the interface, and then click **Edit** to open the **Edit Interface** screen.

The **Edit Interface** and **Add Interface** screen settings are identical, but the **Type** and **Name** fields are not editable for an existing interface.
If you created the wrong type of virtual interface (i.e., a bridge, vlan, lagg), delete the interface and add a new interface with the correct type.

When changing from a DHCP-provided IP address to a static IP, first verify your current default gateway and name servers work with the new IP address.
You must add the new default gateway and DNS name servers that work with the new IP address to the global configuration.
If you need to change these settings, do this before you change the interface so you can test the interface change.

Click **Save** after making all changes.

Test the change as described  above in **Testing Network Interface Changes**.

### Resetting an Interface Configuration

{{< hint type=warning >}}
Resetting the configuration for a network interface can result in lost access to the TrueNAS UI and losing the connection to TrueNAS!

Clicking **Reset Configuration** resets the domain name back to the default value, and changes the static IP address to DHCP-assigned.

When saved, changes cause lost access to the UI. You might need command line knowledge, and either IPMI or physical access to the TrueNAS system to fix misconfigured network settings.
If using IPMI or a physical connect to the system, you can change network and interface settings through the Console Setup menu.

The TrueNAS UI does not offer a way to delete the interface. Do not delete the primary network interface in the CLI!
{{< /hint >}}

Click on the <span class="material-icons">more_vert</span> dropdown list for the interface, then select **Reset Configuration**.
The current IP address resets to a DHCP-assigned IP address and the domain name reverts to the default setting.

{{< trueimage src="/images/SCALE/Network/RefreshConfigurationDialog.png" alt="Refresh Configuration Dialog" id="Refresh Configuration Dialog" >}}

**Confirm** validates the reset activity and activates the **Reset** button.

**Reset** clears the configuration for that interface.
After making the changes and clicking **Save**, the [test change](#testing-network-interface-changes) options show on the **Network** screen. 
Follow the procedure above to test your changes and validate you still have access to the UI and the TrueNAS system.

### Changing from DHCP to a Static IP Address

TrueNAS allows assigning static IP addresses to an interface when not using a DHCP-assigned address.
Static IP addresses set a fixed address for an interface that external devices or websites need to access or remember, such as for VPN access.
You can add an additional IP address for a network interface configured with another primary IP address.

Verify the default gateway and nameservers for the DHCP-assigned address and new static IP address are the same before making a change.
If not the same, edit the global network settings before changing the interface so you can properly test the change.

{{< expand "Changing the Global Network Settings" "v" >}}

Go to **System > Network**:

1. Check the name servers and default router information in the **Global Information** widget.
   If the current settings are not on the same network, click **Settings** and modify each setting as needed to allow the static IP to communicate over the network.

2. Enter the IP addresses for the DNS name servers in the **Primary**, **Secondary**, and the optional **Tertiary** fields.

   {{< trueimage src="/images/SCALE/Network/EditGlobalConfiguration.png" alt="Edit Global Configuration" id="Add Name Server and Default Gateway" >}}

   For home users, enter **8.8.8.8** for a DNS name server address so you can communicate with external networks.

3. Enter the IP address for the default gateway in the appropriate field.
   If the static network is IPv4 enter the gateway in **IPv4 Default Gateway**, if the static network is IPv6 use **IPv6 Default Gateway**.

4. Click **Save**.
{{< /expand >}}

If in an IPMI session, you can use the [Console Setup menu]({{< ref "ConsoleSetupMenuSCALE" >}}) to change settings.
Enter 2 to configure general network settings like the default gateway and name servers.

{{< include file="/static/includes/MultipleInterfacesOnNetwork.md" >}}

To use the UI to change an interface from DHCP to a static IP address, go to **System > Network**: 

1. Verify the default gateway and name servers work with the new static IP address.
   If not, click the link above and follow the instructions to update the global network settings.

2. Click on the <span class="material-icons">more_vert</span> icon for the interface, and then click **Edit** to open the **Edit Interface** screen.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceScreen.png" alt="Adding a Static IP Address" id="Adding a Static IP Address" >}}

3. Select the **Define Static IP Addresses** option.

4. Click **Add** to the right of **Static IP Addresses** to show the IP address and netmask (CIDR) fields.
   Click **Add** for each static IP address you want to add to this interface.

5. Enter the IP address and select the netmask value for each static address you add.
   Multiple interfaces cannot be members of the same subnet!

   {{< include file="/static/includes/MultipleInterfacesOnNetwork.md" >}}

   If an error displays or the **Save** button remains inactive when setting the IP addresses on multiple interfaces, check the subnet and ensure the netmask (CIDR) numbers are different.

6. Click **Save**.

7. Click **Test Changes** when prompted. Follow the procedure above to test nework changes.

### Returning to a DHCP-Assigned IP Address

Only one interface can use DHCP to assign the IP address and that is likely the primary network interface.
If you do not have an existing network interface set to use DHCP you can convert an interface from static IP to DHCP.

To switch back to using DHCP:

1. Click on the <span class="material-icons">more_vert</span> icon for the interface, and then click **Edit** to open the **Edit Interface** screen.

2. Select **Get IP Address Automatically from DHCP**.

3. Click **Save**.

4. Verify the current default gateway and name servers work with the new DHCP-assigned IP address.
   If yes, test the network change. Click on **60** above the **Test Changes** button to extend the number of seconds you have to test the network change.

   If the current settings do not work with the new DHCP-assigned IP address, click the link in the [Changing from DHCP to a static IP Address](#changing-from-dhcp-to-a-static-ip-address) section, and follow the directions to change these settings.

5. Click [test the network change](#testing-network-interface-changes)

If the test network operation fails or the system times out, your system returns to the network settings before you attempted the change.
Edit the global network settings and click save, then edit the interface and click save. Test the network changes again.

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
