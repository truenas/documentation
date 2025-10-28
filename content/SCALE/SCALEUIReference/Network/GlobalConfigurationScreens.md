---
title: "Network Configuration Screens"
description: "The Network Configuration widget shows the general TrueNAS network settings not specific to any interface."
weight: 20
tags:
- network
---

The **Network Configuration** widget shows the general networking settings for the TrueNAS system.

{{< trueimage src="/images/SCALE/Network/NetworkConfigurationWidget.png" alt="Newtork Configuration Widget" id="Network Configuration Widget" >}}

**DNS Servers** shows the IP addresses for the primary and secondary name servers.

**Default Route** shows the IP address for the default gateway.

The remaining general network settings shown in the widget are the system host name, domain name, HTTP proxy address, any configured service announcement, additional domains, the host name database, and the outbound network setting.

**Settings** opens the **Edit Global Configuration** screen where you can add or change global network settings for the TrueNAS system.

{{< include file="/static/includes/NetworkWarn.md" >}}

## Edit Global Configuration Screen

The **Edit Global Configuration** screen manages general network settings for your TrueNAS system that are *not* specific to any interface.

{{< trueimage src="/images/SCALE/Network/EditGlobalConfiguration.png" alt="Edit Global Configuration" id="Edit Global Configuration" >}}

### Hostname and Domain Settings

Many of these fields have default values, but users can change them to meet local network requirements.

{{< hint type=note >}}
Some fields only show in the **Edit Global Configuration** screen when the appropriate hardware is present.
{{< /hint >}}  

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Hostname** | Sets the system host name. The default value is **truenas**. Some applications require setting this to a value other than **truenas**. |
| **Inherit domain from DHCP** | Sets the domain is inherited from DHCP when selected. |
| **Hostname (TrueNAS Controller 2)** | Sets the system host name for a second controller in High Availability (HA) systems where there is a second TrueNAS controller. A name can consist of upper and lower case alphanumeric and allowed special characters dot (.) and/or dash (-). |
| **Hostname (Virtual)** | Sets a virtual host name that shows when using a virtual host, for example, on a TrueNAS High Availability system. Also used as the Kerberos principal name. Enter the fully qualified host name plus the domain name. A name can consist of upper and lower case alphanumeric and the allowed special characters, dot (.) and/or dash (-). |
| **Domain** | Enter a system domain name, for example, *example.com*. |
| **Additional Domains** | Specifies additional domains to search. Separate entries by pressing <kbd>Enter</kbd>. Adding search domains can cause slow DNS lookups. |
{{< /truetable >}}

### Service Announcement Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **NetBIOS-NS** | Sets TrueNAS to use a legacy NetBIOS name server. This advertises the SMB service NetBIOS name. Setting this might be required for legacy SMB1 clients to discover the server. When advertised, the server appears in **Network Neighborhood**. |
| **mDNS** | Sets TrueNAS to use multicast DNS. This uses the system host name to advertise enabled and running services. For example, it controls whether the server shows under **Network** on MacOS clients.|
| **WS-Discovery** | Sets TrueNAS to use the SMB service NetBIOS name to advertise the server to WS-Discovery clients. This can cause the computer to appear in the **Network Neighborhood** of modern Windows operating systems. |
{{< /truetable >}}

### DNS Servers and Default Gateway Settings

{{< trueimage src="/images/SCALE/Network/GlobalConfigNameserverSettings.png" alt="Global Configuration Nameserver Settings" id="Global Configuration Nameserver Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Primary** | Sets the IP address for the primary DNS server (nameserver 1). |
| **Secondary** | Sets the IP address for the secondary DNS server (nameserver 2). |
| **Tertiary** | Sets the IP address for the third DNS server (nameserver 3). |
{{< /truetable >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **IPv4 Default Gateway** | Sets the IPv4 address for the default gateway. This overrides a default gateway provided by DHCP. |
| **IPv6 Default Gateway** | Sets the IPv6 address for the default gateway of the IPv6 network. This overrides a default gateway provided by DHCP. |
{{< /truetable >}}

### Outbound Network and Other Settings

The **Outbound Network** setting should matches preferred system services allowed to communicate externally for your use case.
The **Other Settings** allow setting an HTTP proxy, and any host name database preferences.

{{< trueimage src="/images/SCALE/Network/GlobalConfigOutboundSettings.png" alt="Global Configuration Outbound Settings" id="Global Configuration Outbound Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Allow All** | Allows any system service to communicate externally. |
| **Deny All** | Restricts this system from communicating externally. |
| **Allow Specific** | Allows a limited set of system services to allow to communicate externally to those selected on the dropdown list. All other external traffic is restricted. A dropdown list shows the services you select to allow external communication. |
| **Allow All Except** | Allows all system services to communicate externally except for the services selected on the dropdown list. A dropdown list shows the services you select to deny external communication. |
{{< /truetable >}}
<!-- comment out until information on what is allowed for each service, and if there are any other requirements associated with the selections.
{{< expand "Allowed Services" "v">}}
Selecting any of these services either allows or denies external communications when selected on the dropdown list for **Allow Specific** or **Allow All Except**. Service options:
{{< truetable >}}
| Service | Allow Specific | Allow All Except |
|---------|----------------|------------------|
| **ACME** |  |  |
| **Anonymous usage statistics** |  |  |
| **Catalog(s) information** |  |  |
| **Cloud backup** |  |  |
| **Cloud sync** |  |  |
| **KMIP** |  |  |
| **Mail** |  |  |
| **Replication** |  |  |
| **Rsync** |  |  |
| **Support** |  |  |
| **TrueCommand iX portal** |  |  |
| **Update** |  |  |
| **VMware Snapshots** |  |  |
{{< /truetable >}}
{{< /expand >}} -->

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **HTTP Proxy** | Specifies an HTTP proxy address when using a proxy. Accepts manual or copy/paste entry of the network proxy information in the format *http://my.proxy.server:3128* or *http://user:password@my.proxy.server:3128*. |
| **Host Name Database** | Specifies additional hosts to append to */etc/hosts*. Accepts manual or copy/paste entry in the format *`IP_address space hostname`* where multiple host names can be used if separated by a space. Separate entries by pressing <kbd>Enter</kbd>. Hosts defined here are still accessible by name even when DNS is not available. See [hosts](https://manpages.debian.org/unstable/bind9-host/host.1.en.html) for additional information. |
{{< /truetable >}}