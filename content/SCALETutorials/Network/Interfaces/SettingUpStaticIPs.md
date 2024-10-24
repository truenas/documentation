---
title: "Setting Up Static IPs"
description: "Provides instructions on setting up and testing a network interface static IP address."
weight: 45
tags:
- network
- interfaces
- staticroutes
- DHCP
---

This article describes setting up a network interface with a static IP address or changing the main interface from a DHCP-assigned to a manually-entered static IP address.
You must know the DNS name server and default gateway addresses for your IP address.

{{< include file="/static/includes/NetworkWarn.md" >}}

{{< include file="/static/includes/MultipleInterfacesOnNetwork.md" >}}

## DHCP or Static IP?
By default, during installation, TrueNAS SCALE configures the primary network interface for Dynamic Host Configuration Protocol (DHCP) IP address management.
However, some administrators might choose to assign a static IP address to the primary network interface.
This choice may be made if TrueNAS is deployed on a system that does not allow DHCP for security, stability, or other reasons.

In all deployments, only one interface can be set up for DHCP, which is typically the primary network interface configured during the installation process.
Any additional interfaces must be manually configured with one or more static IP addresses.

## One Static IP Address or Multiple Aliases?

{{< include file="/static/includes/AliasOrStaticIP.md" >}}

## Before You Begin
Have the DNS name server addresses, the default gateway for the new IP address, and any static IP addresses on hand to prevent lost communication with the server while making and testing network changes.
You have only 60 seconds to change and test these network settings before they revert back to the current settings, for example back to DHCP assigned if moving from DHCP to a static IP.

Back up your system to preserve your data and system settings. Save the system configuration file and a system debug.

As a precaution, grab a screenshot of your current settings in the **Global Configuration** widget.

If your network changes result in lost communication with the network and you need to return to the DHCP configuration, you can refer to this information to restore communication with your server.
Lost communication might require reconfiguring your network settings using the [Console Setup menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}).

## Changing to a Static IP Address
To view a demonstration of this procedure see the tutorial video in the [Managing Global Configuration]({{< relref "ManagingGlobalConfig.md" >}}) article.

To change an interface from using DHCP to a static IP address:

1. Click on the **Edit** icon for the interface on the **Interfaces** widget to open the **Edit Interface** screen, then clear the **DHCP** checkbox.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceClearDHCP.png" alt="Clear DHCP Checkbox" id="Clear DHCP Checkbox" >}}

2. Click **Add** to the right of **Aliases** to add IP address fields, then enter the new static IP. Select the CIDR number from the dropdown list.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceAddAlias.png" alt="Add Alias IP Address" id="Add Alias IP Address" >}}

   {{< hint type=important >}}
   Multiple interfaces cannot be members of the same subnet.

   If an error displays or the **Save** button is inactive when setting the IP addresses on multiple interfaces, check the subnet and ensure the CIDR numbers differ.
   {{< /hint >}}

3. Click **Save**.
   A dialog opens where you can select to either **Test Changes** or **Revert Changes**.
   If you have only one active network interface the system protects your connection to the interface by displaying the **Test Changes** dialog.

   You have 60 seconds to test and save the change before the system discards the change and reverts back to the DHCP-configured IP address.

4. Check the name servers and default router information in the **Global Information** widget.
   If the current settings are not on the same network, click **Settings** and modify each setting as needed to allow the static IP to communicate over the network.

   Add the IP addresses for the DNS name servers in the **Nameserver 1**, **Nameserver 2**, and **Nameserver 3** fields.

   {{< trueimage src="/images/SCALE/Network/EditGlobalConfiguration.png" alt="Edit Global Configuration" id="Add Name Server and Default Gateway" >}}

   For home users, use **8.8.8.8** for a DNS name server address so you can communicate with external networks.

   Add the IP address for the default gateway in the appropriate field.
   If the static network is IPv4 enter the gateway in **IPv4 Default Gateway**, if the static network is IPv6 use **IPv6 Default Gateway**.

   Click **Save**.

5. Test the network changes. Click **Test Changes**. Select **Confirm** to activate **Test Changes** button.

   {{< trueimage src="/images/SCALE/Network/InterfaceTestStaticIPChange.png" alt="Test Changes" id="Test Changes" >}}

   The system attempts to connect to the new static IP address. If successful the **Save Changes** dialog displays.

   {{< trueimage src="/images/SCALE/Network/InterfaceSavetStaticIPChange.png" alt="Save Changes" id="Save Changes" >}}

6. Click **Save Changes** to make the change to the static IP address permanent or click **Revert Changes** to discard changes and return to previous settings.
   The **Save Changes** confirmation dialog displays. Click **SAVE**. The system displays a final confirmation that the change is in effect.

   {{< trueimage src="/images/SCALE/Network/InterfaceStaticIPChangeIsPermanent.png" alt="Network Change Made Permanent" id="Network Change Made Permanent" >}}

## Returning to DHCP from Static IP
Only one interface can use DHCP to assign the IP address and that is likely the primary network interface.
If you do not have an existing network interface set to use DHCP you can convert an interface from static IP to DHCP.

To switch/return to using DHCP:

1. Click **Settings** on the **Global Configuration** widget.

2. Clear the name server fields and the default gateway, and then click **Save**.

3. Click on the **Edit** icon for the interface to display the **Edit Interface** screen.

4. Select **DHCP**.

5. Remove the static IP address from the **IP Address** field.

6. Click **Apply**.

7. Click **Settings** to display the **Global Configuration** screen, then enter the name server and default gateway addresses for the new DHCP-provided IP address.

   Home users can enter 8.8.8.8 in the **Nameserver 1** field.

8. Click **Test Change**. If the network settings are correct, the screen displays the **Save Changes** widget. Click **Save Changes**.

   If the test network operation fails or the system times out, your system returns to the network settings before you attempted the change.
   Verify the name server and default gateway information to try again.
