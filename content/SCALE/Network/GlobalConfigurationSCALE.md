---
title: "Global Configuration"
weight: 30
---

{{< toc >}}

The *Global Configuration* section has all the general TrueNAS networking settings *not* specific to any [interfaces]({{< relref "InterfacesSCALE.md" >}}).

{{< expand "Can I configure these options elsewhere?" "v" >}}
Users can configure many of these Interface, DNS, and Gateway options in the [Console Setup Menu]({{< relref "Post-installConfiguration.md" >}}).
Be sure to check both locations when troubleshooting network connectivity issues.
{{< /expand >}}

![GlobalConfigurationSCALE](/images/SCALE/GlobalConfigurationSCALE.png "Global Configuration")

{{< hint danger >}}
**Disruptive Change**

You can lose your TrueNAS connection if you change the network interface that the web interface uses!  
You may need command line knowledge or physical access to the TrueNAS system to fix misconfigured network settings.
{{< /hint >}}

![EditGlobalConfigurationSCALE](/images/SCALE/EditGlobalConfigurationSCALE.png "Global Configuration Options")

### Hostname and Domain

Many of these fields have default values, but users can be change them to meet local network requirements.

TrueNAS displays the *Hostname* and *Domain* in the **Dashboard** *System Information* window. 

**Note:** The *Global Configuration* window will only display some options when the appropriate hardware is present.  

| Setting | Description |
|---------|-------------|
| Hostname | System hostname. |
| Hostname (TrueNAS Controller 2) | Host name of second TrueNAS controller (for HA only). Upper and lower case alphanumeric, `.`, and `-` characters are allowed. |
| Hostname (Virtual) | Virtual host name. When using a virtualhost, this is also used as the Kerberos principal name. Enter the fully qualified hostname plus the domain name. Upper and lower case alphanumeric, `.`, and `-` characters are allowed. |
| Domain | System domain name, like example.com |
| Additional Domains | Additional domains to search. Separate entries by pressing <kbd>Enter</kbd>. Adding search domains can cause slow DNS lookups |

### Service Announcement

| Setting | Description |
|---------|-------------|
| NetBIOS-NS | Legacy NetBIOS name server. Advertises the SMB service NetBIOS Name. Can be required for legacy SMB1 clients to discover the server. When advertised, the server appears in Network Neighborhood. |
| mDNS | Multicast DNS. Uses the system *Hostname* to advertise enabled and running services. For example, this controls if the server appears under **Network** on MacOS clients.|
| WS-Discovery | Uses the SMB Service *NetBIOS Name* to advertise the server to WS-Discovery clients. This causes the computer to appear in the **Network Neighborhood** of modern Windows OSes. |

### DNS Servers

| Setting | Description |
|---------|-------------|
| Nameserver 1 | Primary DNS server. |
| Nameserver 2 | Secondary DNS server. |
| Nameserver 3 | Third DNS server. |

### Default Gateway

| Setting | Description |
|---------|-------------|
| IPv4 Default Gateway | Enter an IPv4 address. This overrides the default gateway provided by DHCP. |
| IPv6 Default Gateway | Enter an IPv6 address. This overrides the default gateway provided by DHCP. |

### Outbound Network

| Setting | Description |
|---------|-------------|
| Allow All | Any system service can communicate externally. |
| Deny All | This system cannot communicate externally. |
| Allow Specific | Define the system services that are allowed to communicate externally. All other external traffic is restricted. |

### Other Settings

| Setting | Description |
|---------|-------------|
| HTTP Proxy | When using a proxy, enter the proxy information for the network in the format *`http://my.proxy.server:3128`* or *`http://user:password@my.proxy.server:3128`*.
| Enable Netwait Feature | Delays the start of network services until pings are returned from the IP addresses added to the *Netwait IP List*. |
| Netwait IP List | Only appears when *Enable Netwait Feature* is set. Enter a list of IP addresses to [ping](https://www.freebsd.org/cgi/man.cgi?query=ping). Separate entries by pressing <kbd>Enter</kbd>. Each address is tried until one is successful or the list is exhausted. Leave empty to use the default gateway.
| Host Name Database | Additional hosts to be appended to */etc/hosts*. Separate entries by pressing. Separate entries by pressing <kbd>Enter</kbd>.  Use the format *`IP_address space hostname`* where multiple hostnames can be used if separated by a space. Hosts defined here are still accessible by name even when DNS is not available. See <a href="https://www.freebsd.org/cgi/man.cgi?query=hosts">hosts</a> for additional information. |
