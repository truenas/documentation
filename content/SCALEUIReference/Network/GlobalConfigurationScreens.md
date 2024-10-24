---
title: "Global Configuration Screens"
description: "The Global Configuratio* widget displays the general TrueNAS SCALE network settings not specific to any interface."
weight: 20
tags:
- network
---

The **Global Configuration** widget displays the general TrueNAS networking settings *not* specific to any interface. 

{{< hint type=note >}}
The SCALE information dislplayed the **Global Configuration** widget is the equivalent of the information displayed on the TrueNAS CORE **Network Summary** screen. **Global Configuration** settings configuration screens are similar in both SCALE and CORE but SCALE includes external communication settings.
{{< /hint >}}

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

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Hostname** | System host name. |
| **Inherit domain from DHCP** | When this checkbox is checked, the domain is inherited from DHCP. |
| **Hostname (TrueNAS Controller 2)** | System host name for a second controller that displays only for High Availability (HA) systems where there is a second TrueNAS controller. Upper and lower case alphanumeric, (.) and (-) characters are allowed. |
| **Hostname (Virtual)** | Virtual host name that displays when using a virtual host; this is also used as the Kerberos principal name. Enter the fully qualified host name plus the domain name. Upper and lower case alphanumeric, (.), and (-) characters are allowed. |
| **Domain** | System domain name, like example.com |
| **Additional Domains** | Additional domains to search. Separate entries by pressing <kbd>Enter</kbd>. Adding search domains can cause slow DNS lookups. |
{{< /truetable >}}

### Service Announcement Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **NetBIOS-NS** | Select to use legacy NetBIOS name server. Advertises the SMB service NetBIOS name. Can be required for legacy SMB1 clients to discover the server. When advertised, the server appears in **Network Neighborhood**. |
| **mDNS** | Select to multicast DNS. Uses the system host name to advertise enabled and running services. For example, this controls if the server appears under **Network** on MacOS clients.|
| **WS-Discovery** | Select to use the SMB Service NetBIOS name to advertise the server to WS-Discovery clients. This causes the computer to appear in the **Network Neighborhood** of modern Windows OSes. |
{{< /truetable >}}

### DNS Servers Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Nameserver 1** | Primary DNS server. |
| **Nameserver 2** | Secondary DNS server. |
| **Nameserver 3** | Third DNS server. |
{{< /truetable >}}

### Default Gateway Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **IPv4 Default Gateway** | Enter an IPv4 address. This overrides the default gateway provided by DHCP. |
| **IPv6 Default Gateway** | Enter an IPv6 address. This overrides the default gateway provided by DHCP. |
{{< /truetable >}}

### Outbound Network Settings
Select the radio button for the setting that matches your prefered system services external communicate ability.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Allow All** | Select to allow any system service to communicate externally. |
| **Deny All** | Select to restrict this system so it cannot communicate externally. |
| **Allow Specific** | select to define the system services that are allowed to communicate externally. All other external traffic is restricted. If selected, a dropdown list field displays where you can select the services to enable external communication. |
{{< /truetable >}}

### Other Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **HTTP Proxy** | When using a proxy, enter the proxy information for the network in the format *http://my.proxy.server:3128* or *http://user:password@my.proxy.server:3128*.
| **Enable Netwait Feature** | Select to delay the start of network services until pings return from the IP addresses added to the **Netwait IP List** field that displays only after you select the checkbox. |
| **Netwait IP List** | Displays only after selecting the **Enable Netwait Feature** checkbox. Enter a list of IP addresses to [ping](https://manpages.debian.org/unstable/inetutils-ping/ping.1.en.html). Separate entries by pressing <kbd>Enter</kbd>. Each address is tried until one is successful or the list is exhausted. Leave empty to use the default gateway.
| **Host Name Database** | Enter additional hosts to append to */etc/hosts*. Separate entries by pressing. Separate entries by pressing <kbd>Enter</kbd>. Use the format *`IP_address space hostname`* where multiple hostnames can be used if separated by a space. Hosts defined here are still accessible by name even when DNS is not available. See [hosts](https://manpages.debian.org/unstable/bind9-host/host.1.en.html) for additional information. |
{{< /truetable >}}
