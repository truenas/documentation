---
title: "Dynamic DNS Screen"
description: "Use the DDNS screen to configure Dynamic Domain Name Service (DDNS) on your TrueNAS"
weight: 20
aliases: core/services/dynamicdns/
tags:
- coreddns
---

Use the **Services > Dynamic DNS** screen to configure [Dynamic Domain Name Service (DDNS)](https://tools.ietf.org/html/rfc2136) service for your TrueNAS. This is useful when TrueNAS is connected to an ISP that periodically changes the IP address of the system. 

![ServicesDynamicDNSOptions](/images/CORE/12.0/ServicesDynamicDNSOptions.png "Dynamic DNS Service Options")

{{< include file="/content/_includes/ServicesDynamicDNSFields.md" markdown="true" >}}

The **SAVE** button activates after you enter your domain name in **Domain Name**. Click to save all settings.

After configuration your DDNS service, turn on the service on the **Services** screen.

{{< taglist tag="coreddns" limit="10" >}}
