---
title: "Setting Up Static IPs"
description: "This article provides instructions on setting up a network interface static IP address."
weight: 10
tags:
- scalenetwork
- scaleinterface
---

{{< toc >}}

This article provides instructions to set up a static IP address for a new interface or to change the main interface from a DHCP assigned to a manually-entered static IP address, DNS nameservers and default gateway.

{{< hint danger >}}
**Disruptive Change!**

You can lose your TrueNAS connection if you change the network interface that the web interface uses!  
You might need command line knowledge or physical access to the TrueNAS system to fix misconfigured network settings.
{{< /hint >}}

## Before you Begin

Have the DNS name server addresses and the default gateway for the new IP address, and the new static IP address on hand to prevent lost communication with the server. 
You have only 60 seconds to change and test these network settings before they revert back to the current settings, for example back to DHCP assigned if moving from DHCP to a static IP.

Back up your system to preserve your data and system settings.

As a precaution, grab a screenshot of your current settings in the **Global Configuration** widget. 

If your network changes result in lost communication with the network and you need to return to the DHCP configuration you had before, you can refer to this information to restore communication with your server.
Lost communicatation could require you to reconfigure your network settings using the Console Setup Menu.

## Changing the Interface to a Static IP Address

To view a demonstration of this procedure see the tutorial video in the [Managing Global Configuration]({{< relref "/SCALETutorials/Network/ManagingGlobalConfig.md" >}}) article.

To change an interface from using DHCP to a static IP address:

1. Select the interface on the **Interfaces** widget to open the **Edit Interface** configuration screen to turn off **DHCP** and add the new static IP. Click **Apply**. 
   
   ![EditInterfaceClearDHCP](/images/SCALE/22.02/EditInterfaceClearDHCP.png "Clear DHCP Checkbox")

{{< expand "Click here for more help with this." "v" >}}
   a. Clear the checkmark from the **DHCP** checkbox.

   b. Click **Add** in the **IP Addresses** section of the form and then enter the new static IP address into the field displayed. Select the CIDR number from the dropdown list.
      
      ![EditInterfaceAddStaticIP](/images/SCALE/22.02/EditInterfaceAddStaticIP.png "Add IP Addresses")

   c. Click **Apply**. The **Network** screen displays with a new widget where you can select to either **Test Changes** or **Revert Changes**. 
      
      ![NetworkTestChangesWidget](/images/SCALE/22.02/NetworkTestChangesWidget.png "Test Change Widget")

{{< /expand >}}
2. Check the name servers and default router information in the **Global Information** card. 
   If the current settings are not on the same network click **Settings** and modify each as needed to allow the static IP to communicate over the network. 

{{< expand "Click here for more help with this." "v" >}}
   a. Add the IP addresses for the DNS name servers in the **Nameserver 1**, **Nameserver2**, and **Nameserver3** fields.
      
      ![EditGlobalConfiguration](/images/SCALE/22.02/EditGlobalConfiguration.png "Add Nameserver and Default Gateway")

   b. Add the IP address for the default gateway in the appropriate field. If the static network is IPv4 enter the gateway in **IPv4 Default Gateway**, if the static network is IPv6 use **IPv6 Default Gateway**.

   c. Click **Save**.

{{< /expand >}}
5. Test the network changes. Click **Test Changes**. Select **Confirm** to activate **Test Changes** button. Click the button and then click **Save** on the **Save Changes** dialog. 
   
   ![InterfaceTestStaticIPChange](/images/SCALE/22.02/InterfaceTestStaticIPChange.png "Test Changes")

   The system attempts to connect to the new static IP address. If successful the **Save Changes** widget displays.

   ![InterfaceSavetStaticIPChange](/images/SCALE/22.02/InterfaceSavetStaticIPChange.png "Save Changes")
   
6. Click **Save Changes** to make the change to the static IP address permanent or click **Revert Changes** to discard changes and return to your previous settings.
   The **Save Changes** confirmation dialog displays. Click **SAVE**. The system displays a final confirmation that the change is in effect.

   ![InterfaceStaticIPChangeIsPermanent](/images/SCALE/22.02/InterfaceStaticIPChangeIsPermanent.png "Network Change Made Permanent")

## Changing from Static IP to DHCP

To return to using DHCP for your network interface:

1. Click **Settings** on the **Global Configuration** widget.

2. Clear the name server fields and the default gateway, and then click **Save**.

3. Click on the interface to display the **Edit Interface** screen.

4. Select the **DHCP** checkbox.

5. Remove the static IP address from the **IP Address** field.

6. Click **Apply**.

7. Click **Test Change**. If the network settings are correct, the screen displays the **Save Changes** widget. Click **Save Changes** to return to using DHCP to assign the IP address, nameserver and default gateway addresses.

{{< taglist tag="scaleinterface" limit="10" >}}
{{< taglist tag="scalenetwork" limit="10" "Related Network Articles" >}}