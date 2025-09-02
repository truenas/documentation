---
title: "Managing Network Configurations"
description: "Provides instructions on configuring or managing global network configuration settings."
weight: 20
aliases:
 - /scale/scaletutorials/network/addingglobalconf/
tags:
- network
---

Use the **Network Configuration Settings** widget shows existing general network settings like the default gateway and DNS servers, set services allowed to externally communicate, enter an HTTP proxy, or host name database.

{{< include file="/static/includes/NetworkWarn.md" >}}

{{< expand "Can I configure these options elsewhere?" "v" >}}
Users can configure many of the interface, DNS, and gateway options using the [Console Setup menu]({{< ref "ConsoleSetupMenuSCALE" >}}).
Be sure to check both locations when troubleshooting network connectivity issues.
{{< /expand >}}

## Adding Network Settings

Use the **Network Configuration** widget to add general network settings like the default gateway and DNS name servers to allow external communication.

To add new or change existing network interfaces see [Interface Configurations]({{< ref "/SCALE/SCALETutorials/Network/Interfaces" >}}).

Go to **System > Network**, and click **Settings** on the **Network Configuration** widget to open the **Edit Global Configuration** screen.

1. Enter the host name for your TrueNAS in **Hostname**. For example, replace the default value *truenas* with something like *localnas*.

   {{< trueimage src="/images/SCALE/Network/GlobalConfigHostAndDomainNameSettings.png" alt="Global Configuration Host and Domain Name Settings" id="Global Configuration Host and Domain Name Settings" >}}

2. Enter the system domain name in **Domain**. For example, replace the default **local** with *example.com*.

3. Enter the IP addresses for your DNS name servers in **Primary**, **Secondary**, and/or **Tertiary**.
   For home users, enter **8.8.8.8** in the **Primary** field so your TrueNAS can communicate externally with the Internet.

   {{< trueimage src="/images/SCALE/Network/GlobalConfigNameserverSettings.png" alt="Global Configuration Nameserver Settings" id="Global Configuration Nameserver Settings" >}}

4. Enter the IP address for your default gateway into the **IPv4 Default Gateway** if you are using IPv4 IP addresses.
   Enter the IPv6 address in the **IPv6 Default Gateway** if you are using IPv6 addresses.

5. Select the desired **Outbound Network** option.

   * Selecting **Allow All** permits all services to communicate externally.

   * Selecting **Deny All** prevents services from communicating externally.

   * Selecting **Allow Specific** shows a dropdown list of services that you can choose to allow to communicate externally.
     Services not selected cannot communicate externally.

   * Selecting **Allow All Except** shows the same dropdown list of services that you can choose to deny the ability to communicate externally.
     Services not selected for this option are allowed external communication

   {{< trueimage src="/images/SCALE/Network/GlobalConfigOutboundSettings.png" alt="Global Configuration Outbound Settings" id="Global Configuration Outbound Settings" >}}

   Select as many services as desired.
<!--   See [below](#setting-up-external-communication-for-services) for more information. commenting out until the list below is updated with more details -->

6. Click **Save**. The **Network Configuration** widget on the **Network** screen shows the new settings.

<!-- Commenting out this section until more information on what each service allows or requires, then use a snippet for this content in the UI ref and here.
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

Click **Save** when finished. -->
