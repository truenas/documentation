---
title: "Dynamic DNS"
description: "Using Dynamic DNS to configure a domain name for the TrueNAS system."
tags: ["DDNS", "networking"]
---

[Dynamic Domain Name Service (DDNS)](https://tools.ietf.org/html/rfc2136) is useful when TrueNAS is connected to an ISP that periodically changes the IP address of the system.
With dynamic DNS, the system can automatically associate its current IP address with a domain name and continue to provide access to TrueNAS even if the system IP address changes.

## Configuring Dynamic DNS

DDNS requires registration with a DDNS service such as [DynDNS](https://dyn.com/dns/) before configuring TrueNAS.
It's recommended to have the DDNS service settings available or open in another browser tab when configuring TrueNAS.
Log in to the TrueNAS web interface and go to **Services > Dynamic DNS**.

<img src="/images/DynamicDNSupdate.png">
<br><br>

The values for these fields are provided by the DDNS provider.
Be sure to start the DDNS service after choosing your provider options and saving the settings.

### DDNS Service Options

| Setting            | Value          | Description                                                                                                                                                                                                                                                                           |
|--------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Provider           | drop-down menu | Several providers are supported. If a specific provider is not listed, select *Custom Provider* and enter the information in the `Custom Server` and `Custom Path` fields.                                                                                                                  |
| CheckIP Server SSL | checkbox       | Use HTTPS for the connection to the *CheckIP Server*.                                                                                                                                                                                                                                   |
| CheckIP Server     | string         | Name and port of the server that reports the external IP address. For example, entering `checkip.dyndns.org:80` uses [Dyn IP detection](https://help.dyn.com/remote-access-api/checkip-tool/) to discover the remote socket IP address.                                                                                                         |
| CheckIP Path       | string         | Path to the `CheckIP Server`. For example, no-ip.com uses a CheckIP Server of `dynamic.zoneedit.com` and **CheckIP Path** of **/checkip.html**.                                                                                                                                                   |
| SSL                | checkbox       | Use HTTPS for the connection to the server that updates the DNS record.                                                                                                                                                                                                               |
| Custom Server      | string         | DDNS server name. For example, **members.dyndns.org** denotes a server similar to dyndns.org.                                                                                                                                                                                             |
| Custom Path        | string         | DDNS server path. Path syntax varies by provider and must be obtained from that provider. For example, **/update?hostname=** is a simple path for the `update.twodns.de` **Custom Server**. The hostname is automatically appended by default. More examples are in the [In-A-Dyn documentation](https://github.com/troglobit/inadyn#custom-ddns-providers). |
| Domain name        | string         | Fully qualified domain name of the host with the dynamic IP addess. Separate multiple domains with a space, comma (`,`), or semicolon (`;`). Example: *myname.dyndns.org*; *myothername.dyndns.org*                                                                                           |
| Update period      | integer        | How often the IP is checked in seconds.                                                                                                                                                                                                                                               |
| Username           | string         | Username for logging in to the provider and updating the record.                                                                                                                                                                                                                      |
| Password           | string         | Password for logging in to the provider and updating the record.                                                                                                                                                                                                                      
