---
title: "Global Configuration"
weight: 20
---

{{< toc >}}

**Network > Global Configuration** has all the general TrueNAS networking settings that *are not* specific to any [interface]({{< relref "/CORE/Network/Interfaces/_index.md" >}}).

{{< hint danger >}}
**Disruptive Change**

Making changes to the network interface the web interface uses can result in losing connection to TrueNAS!
Fixing any misconfigured network settings might require command line knowledge or physical access to the TrueNAS system.
{{< /hint >}}

## Global Configuration Settings

![NetworkGlobalConfiguration](/images/CORE/12.0/NetworkGlobalConfiguration.png "Global Configuration Options")

Options are organized into several categories.

{{< expand "Can these options be configured elsewhere?" "v" >}}
Many of these Interface, DNS, and Gateway options are also configured in the [Console Setup Menu]({{< relref "ConsoleSetupMenu.md" >}}).
Be sure to check both locations when troubleshooting network connectivity issues.
{{< /expand >}}

### Hostname and Domain

Many of these fields have default values, but can be changed to meet requirements of the local network.
The *Hostname* and *Domain* display in the **Dashboard > System Information** card.
Some options only display when the appropriate hardware is present.

| Setting | Value | Description |
|---------|-------|-------------|
| Hostname | string | Host name of first TrueNAS controller. Upper and lower case alphanumeric, `.`, and `-` characters are allowed. |
| Hostname (TrueNAS Controller 2) | string | Host name of second TrueNAS controller (for HA only). Upper and lower case alphanumeric, `.`, and `-` characters are allowed. |
| Hostname (Virtual) | string | Virtual host name. When using a virtualhost, this is also used as the Kerberos principal name. Enter the fully qualified hostname plus the domain name. Upper and lower case alphanumeric, `.`, and `-` characters are allowed. |
| Domain | string | System domain name. |
| Additional Domains | string | Additional domains to search. Separate entries by pressing <kbd>Enter</kbd>. Adding search domains can cause slow DNS lookups |

### Service Announcement

| Setting | Value | Description |
|---------|-------|-------------|
| NetBIOS-NS | checkbox | Legacy NetBIOS name server. Advertises the SMB service NetBIOS Name. Can be required for legacy SMB1 clients to discover the server. When advertised, the server appears in Network Neighborhood. |
| mDNS | checkbox | Multicast DNS. Uses the system *Hostname* to advertise enabled and running services. For example, this controls if the server appears under **Network** on MacOS clients.|
| WS-Discovery | checkbox | Uses the SMB Service *NetBIOS Name* to advertise the server to WS-Discovery clients. This causes the computer to appear in the **Network Neighborhood** of modern Windows OSes. |

### DNS Servers

| Setting | Value | Description |
|---------|-------|-------------|
| Nameserver 1 | IP address | Primary DNS server. |
| Nameserver 2 | IP address | Secondary DNS server. |
| Nameserver 3 | IP address | Tertiary DNS server. |

### Default Gateway

| Setting | Value | Description |
|---------|-------|-------------|
| IPv4 Default Gateway | IP address | Typically not set.  If set, used instead of the default gateway provided by DHCP |
| IPv6 Default Gateway | IP address | Typically not set. |

### Other Settings

| Setting | Value | Description |
|---------|-------|-------------|
| HTTP Proxy | string | Enter the proxy information for the network in the format *`http://my.proxy.server:3128`* or *`http://user:password@my.proxy.server:3128`*.
| Enable Netwait Feature | checkbox | Setting this prevents network services from starting until the interface can ping the addresses listed in the **Netwait IP list**. |
| Netwait IP List | string | Only appears when *Enable Netwait Feature* is set. Enter a list of IP addresses to ping. Separate entries by pressing <kbd>Enter</kbd>. Each address is tried until one is successful or the list is exhausted. Leave empty to use the default gateway.
| Host Name Database | string | Used to add one entry per line which will be appended to <file>/etc/hosts</file>. Separate entries by pressing <kbd>Enter</kbd>.  Use the format *`IP_address space hostname`* where multiple hostnames can be used if separated by a space. Hosts defined here are still accessible by name even when DNS is not available. See <a href="https://www.freebsd.org/cgi/man.cgi?query=hosts">hosts</a> for additional information. |
