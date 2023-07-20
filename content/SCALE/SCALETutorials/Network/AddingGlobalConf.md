---
title: "Adding Network Settings"
description: "Provides instructions on adding network settings during initial SCALE installation or after a clean install of SCALE."
weight: 15
tags:
- scalenetwork
- scaleinstall
---


Use the **Global Configuration Settings** screen to add general network settings like the default gateway, DNS name servers to allow external communication.

To add new or change existing network interfaces see [Managing Interfaces]({{< relref "ManagingInterfaces.md" >}}).

{{< hint type=warning >}}
**Disruptive Change**

You can lose your TrueNAS connection if you change the network interface that the web interface uses!  
You might need command line knowledge or physical access to the TrueNAS system to fix misconfigured network settings.
{{< /hint >}}

## Adding Network Settings

From the **Network > Global Configuration** screen click **Settings** to display the **Global Configuration** configuration form and then:

1. Enter the host name for your TrueNAS in **Hostname**. For example, *host*.
   
   ![GlobalConfigHostAndDomainNameSettings](/images/SCALE/23.10/GlobalConfigHostAndDomainNameSettings.png "Global Configuration Host and Domain Name Settings")

2. Enter the system domain name in **Domain**. For example, *example.com*.

3. Enter the IP addresses for your DNS name servers in the **Nameserver 1**, **Nameserver 2**, and/or **Nameserver 3** fields. 
   For home users, enter **8.8.8.8** in the **Nameserver 1** field so your TrueNAS SCALE can communicate externally with the Internet.
   
   ![GlobalConfigNameserverSettings](/images/SCALE/23.10/GlobalConfigNameserverSettings.png "Global Configuration Nameserver Settings")

4. Enter the IP address for your default gateway into the **IPv4 Defalut Gateway** if you are using IPv4 IP addresses.
   Enter the IP address in the **IPv6 Default Gateway** if you are using IPv6 addresses.

5. Select the **Outbound Network** radio button for outbound service capability. 
      
   ![GlobalConfigOutboundSettings](/images/SCALE/23.10/GlobalConfigOutboundSettings.png "Global Configuration Outbound Settings")

   Select **Allow All** to permit all TrueNAS SCALE services that need external communication to do that or select **Deny All** to prevent that external communication. Select **Allow Specific** and then use the dropdown list to pick the services you want to allow to communicate externally.

   ![GlobalConfigAllowSpecificServiceOptions](/images/SCALE/23.10/GlobalConfigAllowSpecificServiceOptions.png "Global Configuration Allow Specific Service Options")

   Click on as many services as you want to permit external communications for. Unchecked services cannot communication externally.

6. Click **Save**. The **Global Configuration** widget on the **Network** screen update to show the new settings.

{{< taglist tag="scalenetwork" limit="10" >}}