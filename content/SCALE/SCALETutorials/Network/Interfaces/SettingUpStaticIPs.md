---
title: "Setting Up Static IPs"
description: "Provides instructions on setting up a network interface static IP address."
weight: 45
tags:
- scalenetwork
- scaleinterface
- scalestaticip
---

{{< toc >}}

This article provides instructions on setting up a network interface with a static IP address or changing the main interface from a DHCP-assigned to a manually-entered static IP address. You must know the DNS name server and default gateway addresses for your IP address.

{{< hint type=warning >}}
**Disruptive Change!**

You can lose your TrueNAS connection if you change the network interface that the web interface uses!  
You might need command line knowledge or physical access to the TrueNAS system to fix misconfigured network settings.
{{< /hint >}}

## Static or Aliases IP?

{{< include file="/_includes/AliasOrStaticIP.md" type="page" >}}

## Before you Begin

Have the DNS name server addresses and the default gateway for the new IP address, and any static IP address on hand to prevent lost communication with the server. 
You have only 60 seconds to change and test these network settings before they revert back to the current settings, for example back to DHCP assigned if moving from DHCP to a static IP.

Back up your system to preserve your data and system settings.

As a precaution, grab a screenshot of your current settings in the **Global Configuration** widget. 

If your network changes result in lost communication with the network and you need to return to the DHCP configuration, you can refer to this information to restore communication with your server.
Lost communication could require you to reconfigure your network settings using the [Console setup menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}).

## Changing to a Static IP Address

To view a demonstration of this procedure see the tutorial video in the [Managing Global Configuration]({{< relref "ManagingGlobalConfig.md" >}}) article.

To change an interface from using DHCP to a static IP address:

1. Click on the interface on the **Interfaces** widget to open the **Edit Interface** configuration screen, turn off **DHCP** and add the new static IP. Click **Apply**. 
   
   ![EditInterfaceClearDHCP](/images/SCALE/22.02/EditInterfaceClearDHCP.png "Clear DHCP Checkbox")

   If you have only one active network interface the system protects your connection to the interface by displaying the **Test Changes** dialog. 
   You have 60 seconds to test and save the change before the system discards the change and reverts back to the DHCP-configured IP address. 

{{< expand "Click here for help with this." "v" >}}
   a. Clear the checkmark from the **DHCP** checkbox.

   b. Click **Add** in the **IP Addresses** section of the form and then enter the new static IP address into the field displayed. 
      Select the CIDR number from the dropdown list.
      
      ![EditInterfaceAddStaticIP](/images/SCALE/22.02/EditInterfaceAddStaticIP.png "Add IP Addresses")

   c. Click **Apply**. The **Network** screen displays with a new widget where you can select to either **Test Changes** or **Revert Changes**. 
      
      ![NetworkTestChangesWidget](/images/SCALE/22.02/NetworkTestChangesWidget.png "Test Change Widget")
{{< /expand >}}
2. Check the name servers and default router information in the **Global Information** card. 
   If the current settings are not on the same network, click **Settings** and modify each as needed to allow the static IP to communicate over the network. 

   For home users, use **8.8.8.8** for a DNS name sever address so you can communicate with external networks.

{{< expand "Click here for help with this." "v" >}}
   a. Add the IP addresses for the DNS name servers in the **Nameserver 1**, **Nameserver2**, and **Nameserver3** fields.
      
      ![EditGlobalConfiguration](/images/SCALE/22.02/EditGlobalConfiguration.png "Add Nameserver and Default Gateway")

   b. Add the IP address for the default gateway in the appropriate field. 
      If the static network is IPv4 enter the gateway in **IPv4 Default Gateway**, if the static network is IPv6 use **IPv6 Default Gateway**.

   c. Click **Save**.
{{< /expand >}}
5. Test the network changes. Click **Test Changes**. Select **Confirm** to activate **Test Changes** button. 
   Click the button and then click **Save** on the **Save Changes** dialog. 
   
   ![InterfaceTestStaticIPChange](/images/SCALE/22.02/InterfaceTestStaticIPChange.png "Test Changes")

   The system attempts to connect to the new static IP address. If successful the **Save Changes** widget displays.

   ![InterfaceSavetStaticIPChange](/images/SCALE/22.02/InterfaceSavetStaticIPChange.png "Save Changes")
   
6. Click **Save Changes** to make the change to the static IP address permanent or click **Revert Changes** to discard changes and return to previous settings.
   The **Save Changes** confirmation dialog displays. Click **SAVE**. The system displays a final confirmation that the change is in effect.

   ![InterfaceStaticIPChangeIsPermanent](/images/SCALE/22.12/InterfaceStaticIPChangeIsPermanent.png "Network Change Made Permanent")

## Changing from Static IP to DHCP

Only one interface can use DHCP to assign the IP address and that is likely the primary network interface. If you do not have a existing network interface set to use DHCP you can use it to convert from static IP to DHCP.

To return to using DHCP:

1. Click **Settings** on the **Global Configuration** widget.

2. Clear the name server fields and the default gateway, and then click **Save**.

3. Click on the interface to display the **Edit Interface** screen.

4. Select **DHCP**.

5. Remove the static IP address from the **IP Address** field.

6. Click **Apply**.

7. Click **Settings** to display the **Global Configuration** configuration form and enter name server and default gateway addresses for the new DHCP-provided IP address.
   Home user can enter 8.8.8.8 in the **Nameserver 1** field.

7. Click **Test Change**. If the network settings are correct, the screen displays the **Save Changes** widget. Click **Save Changes**. 

   If the test network operation fails or the system times out, your system returns to the network settings before you attempted the change. Verify the name server and default gateway information to try again.


{{< taglist tag="scaleinterface" limit="10" >}}
{{< taglist tag="scalenetwork" limit="10" title="Related Network Articles" >}}