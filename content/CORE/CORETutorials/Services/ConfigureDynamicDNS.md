---
title: "Configuring Dynamic DNS"
description: "This article provides instructions on how to configure Dynamic Domain Name Service (DDNS) on your TrueNAS system."
weight: 20
aliases: /core/services/dynamicdns/
tags:
- coreddns
---

[Dynamic Domain Name Service (DDNS)](https://tools.ietf.org/html/rfc2136) is useful when TrueNAS is connected to an ISP that periodically changes the IP address of the system.
With dynamic DNS, the system can automatically associate its current IP address with a domain name and continue to provide access to TrueNAS even if the system IP address changes.

DDNS requires registration with a DDNS service such as [DynDNS](https://dyn.com/dns/) before configuring TrueNAS.
Have the DDNS service settings available or open in another browser tab when configuring TrueNAS.
Log in to the TrueNAS web interface and go to **Services > Dynamic DNS**.

![ServicesDynamicDNSOptions](/images/CORE/13.0/ServicesDynamicDNSOptions.png "Dynamic DNS Service Options")

The required values for these fields are provided by your DDNS solution.
Start the DDNS service after choosing your **Provider** options and saving the settings.

{{< taglist tag="coreddns" limit="10" >}}