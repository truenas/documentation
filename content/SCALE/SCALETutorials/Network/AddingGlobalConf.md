---
title: "Adding Network Settings"
description: "Provides instructions on adding network settings during initial SCALE installation or after a clean install of SCALE."
weight: 15
tags:
- network
---

Use the **Global Configuration Settings** screen to add general network settings like the default gateway and DNS name servers to allow external communication.

To add new or change existing network interfaces see [Managing Interfaces]({{< relref "/SCALE/SCALETutorials/Network/Interfaces/_index.md" >}}).

{{< include file="/static/includes/NetworkWarn.md" >}}

## Adding Network Settings

Go to **Network** and click **Settings** on the **Global Configuration** widget to open the **Edit Global Configuration** screen, then:

1. Enter the host name for your TrueNAS in **Hostname**. For example, *host*.

   {{< trueimage src="/images/SCALE/Network/GlobalConfigHostAndDomainNameSettings.png" alt="Global Configuration Host and Domain Name Settings" id="Global Configuration Host and Domain Name Settings" >}}

2. Enter the system domain name in **Domain**. For example, *example.com*.

3. Enter the IP addresses for your DNS name servers in the **Nameserver 1**, **Nameserver 2**, and/or **Nameserver 3** fields.
   For home users, enter **8.8.8.8** in the **Nameserver 1** field so your TrueNAS SCALE can communicate externally with the Internet.

   {{< trueimage src="/images/SCALE/Network/GlobalConfigNameserverSettings.png" alt="Global Configuration Nameserver Settings" id="Global Configuration Nameserver Settings" >}}

4. Enter the IP address for your default gateway into the **IPv4 Default Gateway** if you are using IPv4 IP addresses.
   Enter the IP address in the **IPv6 Default Gateway** if you are using IPv6 addresses.

5. Select the **Outbound Network** radio button for outbound service capability.

   {{< trueimage src="/images/SCALE/Network/GlobalConfigOutboundSettings.png" alt="Global Configuration Outbound Settings" id="Global Configuration Outbound Settings" >}}

   Select **Allow All** to permit all TrueNAS SCALE services that need external communication to do that or select **Deny All** to prevent that external communication. Select **Allow Specific** and then use the dropdown list to pick the services you want to allow to communicate externally.

   {{< trueimage src="/images/SCALE/Network/GlobalConfigAllowSpecificServiceOptions.png" alt="Global Configuration Allow Specific Service Options" id="Global Configuration Allow Specific Service Options" >}}

   Click on as many services for which you want to permit external communications. Unchecked services cannot communicate externally.

6. Click **Save**. The **Global Configuration** widget on the **Network** screen updates to show the new settings.
