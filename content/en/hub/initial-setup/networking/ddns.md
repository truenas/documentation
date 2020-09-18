---
title: "Dynamic DNS"
description: "Dynamic DNS on TrueNAS"
tags: ["DDNS"]
---


### Dynamic DNS

Dynamic DNS (DDNS) is useful if the TrueNAS® system is connected to an ISP that periodically changes the IP address of the system. With dynamic DNS, the system can automatically associate its current IP address with a domain name, allowing access to the TrueNAS® system even if the IP address changes. DDNS requires registration with a DDNS service such as [DynDNS](https://dyn.com/dns/.

The values for these fields are provided by the DDNS provider. After configuring DDNS, remember to start the DDNS service in **Services** ➞ **Dynamic DNS**.

<img src="/images/TN-12.0-services-dynamic-dns.png" width='700px'>
<br><br>


### DYDNS onfiguration options

| Setting            | Value          | Description                                                                                                                                                                                                                                                                           |
|--------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Provider           | drop-down menu | Several providers are supported. If a specific provider is not listed, select *Custom Provider* and enter the information in the `Custom Server` and `Custom Path` fields.                                                                                                                  |
| CheckIP Server SSL | checkbox       | Use HTTPS for the connection to the *CheckIP Server*.                                                                                                                                                                                                                                   |
| CheckIP Server     | string         | Name and port of the server that reports the external IP address. For example, entering **checkip.dyndns.org:80** uses [Dyn IP detection](https://help.dyn.com/remote-access-api/checkip-tool/) to discover the remote socket IP address.                                                                                                         |
| CheckIP Path       | string         | Path to the `CheckIP Server`. For example, no-ip.com uses a CheckIP Server of **dynamic.zoneedit.com** and `CheckIP Path` of **/checkip.html**.                                                                                                                                                   |
| SSL                | checkbox       | Use HTTPS for the connection to the server that updates the DNS record.                                                                                                                                                                                                               |
| Custom Server      | string         | DDNS server name. For example, **members.dyndns.org** denotes a server similar to dyndns.org.                                                                                                                                                                                             |
| Custom Path        | string         | DDNS server path. Path syntax varies by provider and must be obtained from that provider. For example, **/update?hostname=** is a simple path for the update.twodns.de `Custom Server`. The hostname is automatically appended by default. More examples are in the [In-A-Dyn documentation](https://github.com/troglobit/inadyn#custom-ddns-providers. |
| Domain name        | string         | Fully qualified domain name of the host with the dynamic IP addess. Separate multiple domains with a space, comma (,), or semicolon (;). Example: *myname.dyndns.org*; *myothername.dyndns.org*                                                                                           |
| Username           | string         | Username for logging in to the provider and updating the record.                                                                                                                                                                                                                      |
| Password           | string         | Password for logging in to the provider and updating the record.                                                                                                                                                                                                                      |
| Update period      | integer        | How often the IP is checked in seconds.                
