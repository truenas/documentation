---
title: "Dynamic DNS Service"
description: ""
weight: 5
alias: 
tags:
 - scale
---


{{< toc >}}

[Dynamic Domain Name Service (DDNS)](https://tools.ietf.org/html/rfc2136) is useful when you connect TrueNAS to an Internet service provider (ISP) that periodically changes the system's IP address.
With Dynamic DNS, the system automatically associates its current IP address with a domain name and continues to provide access to TrueNAS even if the system IP address changes.

## Configuring Dynamic DNS

DDNS requires registration with a DDNS service such as [DynDNS](https://dyn.com/dns/) before configuring TrueNAS.
Have the DDNS service settings available or open in another browser tab when configuring TrueNAS.
Log in to the TrueNAS web interface and go to **Services > Dynamic DNS**.

![DynamicDNSSCALE](/images/SCALE/DynamicDNSSCALE.png "Dynamic DNS Service Options")

{{< include file="static/includes/Reference/ServicesDynamicDNSFields.md.part" markdown="true" >}}

Your DDNS solution provides the required values for the fields.
Start the DDNS service after choosing your **Provider** options and saving the settings.

{{< taglist tag="scale" limit="10" >}}