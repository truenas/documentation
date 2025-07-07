---
title: "Managing Network Global Configurations"
description: "Provides instructions on configuring or managing global configuration settings."
weight: 20
aliases:
 - /scale/scaletutorials/network/addingglobalconf/
tags:
- network
---

Use the **Global Configuration Settings** screen to manage existing general network settings like the default gateway and DNS servers.
Set DHCP to assign the IPv4 address, or manually set a static IP address, add IP address aliases, and set up services to allow external communication.

{{< include file="/static/includes/NetworkWarn.md" >}}

{{< expand "Tutorial Video" "v" >}}

{{< embed-video name="scaleangelfishstaticipglobalnetworking" >}}

{{< /expand >}}

{{< expand "Can I configure these options elsewhere?" "v" >}}
Users can configure many of the interface, DNS, and gateway options using the [Console Setup menu]({{< ref "ConsoleSetupMenuSCALE" >}}).
Be sure to check both locations when troubleshooting network connectivity issues.
{{< /expand >}}

## Adding Network Settings
Use the **Global Configuration Settings** screen to add general network settings like the default gateway and DNS name servers to allow external communication.

To add new or change existing network interfaces see [Interface Configurations]({{< ref "/SCALE/SCALETutorials/Network/Interfaces" >}}).


Go to **Network**, and click **Settings** on the **Global Configuration** widget to open the **Edit Global Configuration** screen.

1. Enter the host name for your TrueNAS in **Hostname**. For example, replace the default value *truenas* with something like *localnas*.

   {{< trueimage src="/images/SCALE/Network/GlobalConfigHostAndDomainNameSettings.png" alt="Global Configuration Host and Domain Name Settings" id="Global Configuration Host and Domain Name Settings" >}}

2. Enter the system domain name in **Domain**. For example, *example.com*.

3. Enter the IP addresses for your DNS name servers in **Nameserver 1**, **Nameserver 2**, and/or **Nameserver 3**.
   For home users, enter **8.8.8.8** in the **Nameserver 1** field so your TrueNAS can communicate externally with the Internet.

   {{< trueimage src="/images/SCALE/Network/GlobalConfigNameserverSettings.png" alt="Global Configuration Nameserver Settings" id="Global Configuration Nameserver Settings" >}}

4. Enter the IP address for your default gateway into the **IPv4 Default Gateway** if you are using IPv4 IP addresses.
   Enter the IPv6 address in the **IPv6 Default Gateway** if you are using IPv6 addresses.

5. Select **Allow All** for **Outbound Network** to permit external communication for all TrueNAS services or select **Deny All** to prevent external communication.
   Select **Allow Specific** and then use the **Services** dropdown list to pick a limited set of services to allow external communication. 
   Select **Allow All Except** and then use the **Services** dropdown list to pick services to deny external communication while allowing all other services.

   {{< trueimage src="/images/SCALE/Network/GlobalConfigOutboundSettings.png" alt="Global Configuration Outbound Settings" id="Global Configuration Outbound Settings" >}}

   {{< trueimage src="/images/SCALE/Network/GlobalConfigAllowSpecificServiceOptions.png" alt="Global Configuration Allow Specific Service Options" id="Global Configuration Allow Specific Service Options" >}}

   Click as many services as desired. For **Allow Specific**, unchecked services cannot communicate externally. For **Allow All Except**, checked services cannot communicate externally.

See [below](#setting-up-external-communication-for-services) for more information.

6. Click **Save**. The **Global Configuration** widget on the **Network** screen updates to show the new settings.

## Setting Up External Communication for Services
Use the **Global Configuration Outbound Network** settings to add services for external communication capability.

These services use external communication:
* ACME DNS-Authenticators
* Anonymous usage statistics
* Catalog(s) information exchanges
* Cloud sync
* KMIP
* Mail (email service)
* Replication
* Rsync
* Support
* TrueCommand iX portal
* Updates
* VMWare snapshots

Select **Allow All** to permit all of the above services to communicate externally. This is the default setting.

Select **Deny All** to prevent all of the above services from communicating externally.

Select **Allow Specific** to permit external communication only for the services you select.
**Allow Specific** displays a **Services** dropdown list of selectable services.

Select **Allow All Except** to deny external communication for the services you select while allowing all other services.
**Allow All Except** displays a **Services** dropdown list of selectable services.

Click on all that apply. A checkmark displays next to a selected service, and these services display in the field separated by a comma (,).

Click **Save** when finished.
