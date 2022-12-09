---
title: "ACME DNS-Authenticators Screens"
description: "This article provides information on SCALE Certificates screens and settings."
weight: 40
aliases: 
tags:
 - scalecertificates
 - scaleacme
---

{{< toc >}}

The **Certificates** screen includes the **ACME DNS-Authenticators** widget that displays a list of configured authenticators. 
The Automatic Certificate Management Environment (ACME) DNS-Authenticators screen allows users to automate certificate issuing and renewal. The user must verify they own the domain before TrueNAS allows certificate automation.

![ACMEDNSAuthenticatorWidgetNoAuthtenticators](/images/SCALE/22.02/ACMEDNSAuthenticatorWidgetNoAuthtenticators.png "ACME DNS-Authenticator Widget No Authenticators")

Each authenticator listed is a link that opens the **Edit ACME DNS-Authenticator** screen.

<span class="material-icons">delete</span> deletes the authenticator from your server.

**Add** opens the **[Add ACME DNS-Authenticator](#add-dns-authenticator)** screen.

{{< hint ok >}}
The system requires an ACME DNS authenticator and CSR to configure ACME certificate automation.
{{< /hint >}}

### Add DNS Authenticator
The settings change based on the **Authenticator** selection.

![AddDNSAuthenticatorCloudflare](/images/SCALE/22.02/AddDNSAuthenticatorCloudflare.png "Add ACME DNS-Authenticator Cloudflare")

| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter an internal identifier for the authenticator. |
| **Authenticator** | Select a DNS provider from the dropdown list and configure any required authenticator attributes. Options are **[cloudflare](https://www.cloudflare.com)** and Amazon **[route53](https://aws.amazon.com/route53/)**. |
| **Cloudflare Email** | Enter the email address for the Cloudflare account. |
| **API Key** | Displays when **Authenticator** is set to **Cloudflare**. Enter the API Key. |
| **API Token** | Displays when **Authenticator** is set to **Cloudflare**. Enter the API token. |
| **Access Key Id** | Required. Displays when **Authenticator** is set to **route53**. Enter the access key ID.|
| **Secret Access Key** | Required. Displays when **Authenticator** is set to **route53**. Enter the secret access key. |

{{< taglist tag="scaleacme" limit="10" >}}