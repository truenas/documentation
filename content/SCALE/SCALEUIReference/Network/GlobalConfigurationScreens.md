---
title: "Global Configuration Screens"
description: "The Global Configuration widget displays the general TrueNAS network settings not specific to any interface."
weight: 20
tags:
- network
---

The **Global Configuration** widget displays the general TrueNAS networking settings *not* specific to any interface.

![GlobalConfigurationSCALE](/images/SCALE/Network/GlobalConfiguration.png "Global Configuration")

Use **Settings** to display the **Global Configuration** screen where you can add or change global network settings.

{{< include file="/static/includes/NetworkWarn.md" >}}

![EditGlobalConfigurationSCALE](/images/SCALE/Network/EditGlobalConfiguration.png "Global Configuration Options")

## Hostname and Domain Settings
Many of these fields have default values, but users can change them to meet local network requirements.

TrueNAS displays the **Hostname** and **Domain** in the **Dashboard** **System Information** widget. 

{{< hint type=note >}}
Some fields only display in the **Global Configuration** screen when the appropriate hardware is present.
{{< /hint >}}  

{{< trueimage src="/images/SCALE/Network/GlobalConfigHostAndDomainNameSettings.png" alt="Global Configuration Host and Domain Name Settings" id="Global Configuration Host and Domain Name Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Hostname** | Enter the system host name. The default value is **truenas**. Some applications require setting this to a value other than **truenas**. |
| **Inherit domain from DHCP** | When selected, the domain is inherited from DHCP. |
| **Hostname (TrueNAS Controller 2)** | System host name for a second controller that shows only for High Availability (HA) systems where there is a second TrueNAS controller. A name can consist of upper and lower case alphanumeric and allowed special characters dot (.) and/or dash (-). |
| **Hostname (Virtual)** | Virtual host name that shows when using a virtual host. Also used as the Kerberos principal name. Enter the fully qualified host name plus the domain name. A name can consist of upper and lower case alphanumeric and allowed special characters dot (.) and/or dash (-). |
| **Domain** | Enter a system domain name, for example, *example.com*. |
| **Additional Domains** | Enter additional domains to search. Separate entries by pressing <kbd>Enter</kbd>. Adding search domains can cause slow DNS lookups. |
{{< /truetable >}}

### Service Announcement Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **NetBIOS-NS** | Select to use legacy NetBIOS name server. Advertises the SMB service NetBIOS name. Might be required for legacy SMB1 clients to discover the server. When advertised, the server appears in **Network Neighborhood**. |
| **mDNS** | Select to multicast DNS. Uses the system host name to advertise enabled and running services. For example, this controls if the server appears under **Network** on MacOS clients.|
| **WS-Discovery** | Select to use the SMB Service NetBIOS name to advertise the server to WS-Discovery clients. Can cause the computer to appear in the **Network Neighborhood** of modern Windows operating systems. |
{{< /truetable >}}

### DNS Servers and Default Gateway Settings

{{< trueimage src="/images/SCALE/Network/GlobalConfigNameserverSettings.png" alt="Global Configuration Nameserver Settings" id="Global Configuration Nameserver Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Nameserver 1** | Enter the IP address for the primary DNS server. |
| **Nameserver 2** | Enter the IP address for the secondary DNS server. |
| **Nameserver 3** | Enter the IP address for the third DNS server. |
{{< /truetable >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **IPv4 Default Gateway** | Enter the IPv4 address for the default gateway. This overrides the default gateway provided by DHCP. |
| **IPv6 Default Gateway** | Enter the IPv6 address for the default gateway of the IPv6 network. This overrides the default gateway provided by DHCP. |
{{< /truetable >}}

### Outbound Network and Other Settings
Select the setting that matches your preferred system services allowed to communicate externally, HTTP proxy, and host name database preferences.

{{< trueimage src="/images/SCALE/Network/GlobalConfigOutboundSettings.png" alt="Global Configuration Outbound Settings" id="Global Configuration Outbound Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Allow All** | Select to allow any system service to communicate externally. |
| **Deny All** | Select to restrict this system so it cannot communicate externally. |
| **Allow Specific** | Select to specify a limited set of system services to allow to communicate externally. All other external traffic is restricted. If selected, a **Services** dropdown list shows where you select the services to allow to communicate externally. |
| **Allow All Except** | Select to allow all system services to communicate externally except for the services you specify. If selected, a **Services** dropdown list shows where you select the services to deny external communication. |
{{< /truetable >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **HTTP Proxy** | When using a proxy, enter the proxy information for the network in the format *http://my.proxy.server:3128* or *http://user:password@my.proxy.server:3128*. |
| **Host Name Database** | Enter additional hosts to append to */etc/hosts*. Separate entries by pressing. Separate entries by pressing <kbd>Enter</kbd>. Use the format *`IP_address space hostname`* where multiple hostnames can be used if separated by a space. Hosts defined here are still accessible by name even when DNS is not available. See [hosts](https://manpages.debian.org/unstable/bind9-host/host.1.en.html) for additional information. |
{{< /truetable >}}
