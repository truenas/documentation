---
title: "Global Configuration"
weight: 20
---

{{< hint warning >}}
Making changes to the network interface the web interface uses can result in losing connection to the TrueNAS® system! Misconfiguring network settings might require 
command line knowledge or physical access to the TrueNAS® system to fix. Be very careful when configuring Interfaces and Link Aggregations.
{{< /hint >}}

**Network > Global Configuration** is for general network settings that are not unique to any particluar network interface.

<img src="/images/CORE/12.0/GlobalConfig.png">
<br><br>

## Global Configuration Settings ##

The following table summarizes the settings within the Global Configuration section of the UI.  **Hostname** and **Domain** fields are pre-filled, but can be changed
to meet requirements of the local network.

| Setting | Value | Description |
|---------|-------|-------------|
| Hostname | string | Host name of first TrueNAS controller. Upper and lower case alphanumeric, ., and - characters are allowed. |
| Hostname (TrueNAS Controller 2) | string | Host name of second TrueNAS controller (for HA only). Upper and lower case alphanumeric, ., and - characters are allowed. |
| Hostname (Virtual) | string | Virtual host name. When using a virtualhost, this is also used as the Kerberos principal name. Enter the fully qualified hostname plus the domain name. Upper and lower case alphanumeric, ., and - characters are allowed. |
| Domain | string | System domain name. The Hostname and Domain are also displayed under **System Information** on the **Dashboard** of the WebUI. |
| Additional Domains | string | Additional space-delimited domains to search. Adding search domains can cause slow DNS lookups. |
| IPv4 Default Gateway | IP address | Typically not set.  If set, used instead of the default gateway provided by DHCP |
| IPv6 Default Gateway | IP address | Typically not set. |
| Nameserver 1 | IP address | Primary DNS server. |
| Nameserver 2 | IP address | Secondary DNS server. |
| Nameserver 3 | IP address | Tertiary DNS server. |
| HTTP Proxy | string | Enter the proxy information for the network in the format *`http://my.proxy.server:3128`* or *`http://user:password@my.proxy.server:3128`*.
| Enable Netwait Feature | checkbox | If enabled, network services do not start at boot until the interface is able to ping the addresses listed in the **Netwait IP list**. |
| Netwait IP List | string | Only appears when **Enable Netwait Feature** is set. Enter a list of IP addresses to ping. Separate entries by pressing <kbd>Enter</kbd>. Each address is tried until one is successful or the list is exhausted. Leave empty to use the default gateway.
| Host Name Database | string | Used to add one entry per line which will be appended to **/etc/hosts**. Separate entries by pressing <kbd>Enter</kbd>.  Use the format *`IP_address space hostname`* where multiple hostnames can be used if separated by a space.  Hosts defined here are still accessible by name even when DNS is not available. See <a href="https://www.freebsd.org/cgi/man.cgi?query=hosts">hosts</a> for additional information. |
| NetBIOS-NS | checkbox | Legacy NetBIOS name server. Advertises the SMB service NetBIOS Name. Can be required for legacy SMB1 clients to discover the server. When advertised, the server appears in Network Neighborhood. |
| mDNS | checkbox | Multicast DNS. Uses the system Hostname to advertise enabled and running services. For example, this controls if the server appears under Network on MacOS clients.|
| WS-Discovery | checkbox | Uses the SMB Service *NetBIOS Name* to advertise the server to WS-Discovery clients. This causes the computer to appear in the *Network Neighborhood* of modern Windows OSes. |
