---
title: "Dynamic DNS Screen"
redirect: "https://www.truenas.com/docs/core/13.0/uireference/services/dynamicdnsscreen/"
description: "Describes the DDNS screen in TrueNAS CORE."
weight: 20
aliases: core/services/dynamicdns/
tags:
- ddns
---

ISPs often change the IP address of the system. With [Dynamic Domain Name Service (DDNS)](https://tools.ietf.org/html/rfc2136) the current IP address continues to point to a domain name. This provides uninterrupted access to TrueNAS.

![ServicesDynamicDNSOptions](/images/CORE/Services/ServicesDynamicDNSOptions.png "Dynamic DNS Service Options")

{{< include file="/static/includes/ServicesDynamicDNSFields.md" markdown="true" >}}

The **SAVE** button activates after you enter your domain name in **Domain Name**. Click to save all settings.

After configuring your DDNS service, turn the service on using the **Services** screen.
