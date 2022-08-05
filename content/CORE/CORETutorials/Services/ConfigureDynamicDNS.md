---
title: "Configuring Dynamic DNS"
description: "This article provides instructions on how to configure Dynamic Domain Name Service (DDNS) on your TrueNAS system."
weight: 20
aliases: /core/services/dynamicdns/
tags:
- coreddns
---

ISPs often change the IP address of the system. With [Dynamic Domain Name Service (DDNS)](https://tools.ietf.org/html/rfc2136) the current IP address continues to point to a domain name to provide access to TrueNAS.

DDNS requires registration with a DDNS service such as [DynDNS](https://dyn.com/dns/) before configuring TrueNAS.
The DDNS service settings should be available or open in another browser tab.
Log in to the TrueNAS web interface and go to **Services > Dynamic DNS**.

![ServicesDynamicDNSOptions](/images/CORE/13.0/ServicesDynamicDNSOptions.png "Dynamic DNS Service Options")

Your DDNS solution provides the required values for these fields.
Start the DDNS service after choosing your **Provider** options and saving the settings.

{{< taglist tag="coreddns" limit="10" >}}