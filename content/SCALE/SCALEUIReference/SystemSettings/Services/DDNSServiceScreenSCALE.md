---
title: "Dynamic DNS Service"
description: "This article provides information on Dynamic DNS screen settings."
weight: 5
alias: 
tags:
 - scaledynamicdns
 - scaleservices
---


{{< toc >}}

The **Services > DynamicDNS** screen settings specify settings so the system can automatically associate its current IP address with a domain name and continues to provide access to TrueNAS even if the system IP address changes.

To configure Dynamic DNS, go to **System Settings > Services** and find **DynamicDNS**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![DynamicDNSServiceSettings](/images/SCALE/22.02/DynamicDNSServiceSettings.png "Dynamic DNS Service Options")

| Settings | Description |
|----------|-------------|
| **Provider** | Select the provider from the dropdown list of supported providers. If a specific provider is not listed, select **Custom Provider** and enter the information in the **Custom Server** and **Custom Path** fields below the **SSL** checkbox. |
| **Custom Server** | Displays after selecting **Custom Provider** in the **Provider** field. Enter the DDNS server name. For example, *members.dyndns.org* denotes a server similar to dyndns.org. |
| **Custom Path** | Displays after selecting **Custom Provider** in the **Provider** field. Enter the DDNS server path. Paht syntax can vary by provider and must be obtained from that provider. For example, */update?hostname=* is a simple path for the update.twodns.de custom sever. The host name is automatically appended by default. For more examples see [In-A-Dyn documentation](https://github.com/troglobit/inadyn#custom-ddns-providers). |
| **CheckIP-Server SSL** | Select to use HTTPS for the connection to the CheckIP Server. |
| **CheckIP Server** | Enter the name and port of the server that reports the external IP address. For example, entering *checkip.dyndns.org:80* uses [Dyn IP detection](https://help.dyn.com/remote-access-api/checkip-tool/) to discover the remote socket IP address. |
| **CheckIP Path** | Enter the path to the CheckIP server. For example, *no-ip.com* uses a CheckIP Server of *dynamic.zoneedit.com* and CheckIP Path of */checkip.html*. |
| **SSL** | Select to use HTTPS for the connection to the server that updates the DNS record. |
| **Domain Name** | Enter the fully qualified domain name of the host with the dynamic IP address. Separate multiple domains with a space, comma (,), or semicolon (;). For example, *myname.dyndns.org; myothername.dyndns.org*. |
| **Update Period** | Enter the number of seconds for how often the IP is checked. |

**Credentials**

| Settings | Description |
|----------|-------------|
| **Username** | Enter the user name for logging in to the provider and updating the record. |
| **Password** | Enter the user password for logging in to the provider and updating the record. |

{{< taglist tag="scaledynamicdns" limit="10" >}}