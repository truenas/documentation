---
title: "ACME DNS-Authenticators Screens"
description: "Provides information on the ACME DNS-Authenticators widget and settings."
weight: 40
aliases: 
tags:
 - scalecertificates
 - scaleacme
---

{{< toc >}}

The **Certificates** screen includes the **ACME DNS-Authenticators** widget that displays a list of configured authenticators.
The Automatic Certificate Management Environment (ACME) DNS-Authenticators screen allows users to automate certificate issuing and renewal. The user must verify ownership of the domain before TrueNAS allows certificate automation.

{{< hint type=important >}}
ACME DNS is an advanced feature intended for network administrators or AWS professionals. Misconfiguring ACME DNS can prevent you from accessing TrueNAS.
{{< /hint >}}

{{< trueimage src="/images/SCALE/Credentials/ACMEDNSAuthenticatorWidgetNoAuthtenticators.png" alt="ACME DNS-Authenticators Widget with No Authenticators" id="ACME DNS-Authenticators Widget with No Authenticators" >}}

Each authenticator listed is a link that opens the **Edit ACME DNS-Authenticator** screen for the selected authenticator.

<span class="material-icons">delete</span> deletes the authenticator from your server.

**Add** opens the **[Add ACME DNS-Authenticator](#add-dns-authenticator)** screen.

{{< hint type=tip >}}
The system requires an ACME DNS authenticator and CSR to configure ACME certificate automation.
{{< /hint >}}

## Add DNS Authenticator
Fields change based on **Authenticator** selection.

{{< trueimage src="/images/SCALE/Credentials/AddDNSAuthenticator.png" alt="Add DNS Authenticator" id="Add DNS Authenticator" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter an internal identifier for the authenticator. |
| **Authenticator** | Select a DNS provider from the dropdown list and configure any required authenticator attributes. Options are **[cloudflare](https://www.cloudflare.com)**, Amazon **[route53](https://aws.amazon.com/route53/)**, [**OVH**](https://www.ovhcloud.com/en/domains/), and **shell**. |
{{< /truetable >}}

### Cloudflare

**cloudflare** activates the **Cloudflare Email**, **API Key**, and **API Token** fields.

{{< trueimage src="/images/SCALE/Credentials/AddDNSAuthenticatorCloudflare.png" alt="Add DNS Authenticator - Cloudflare" id="Add DNS Authenticator - Cloudflare" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Cloudflare Email** | Enter the email address for the Cloudflare account. |
| **API Key** | Enter the API Key. |
| **API Token** | Enter the API token. |
{{< /truetable >}}

### Route 53

**route53** activates the **Access Key Id** and **Secret Access Key** fields.

{{< trueimage src="/images/SCALE/Credentials/AddDNSAuthenticatorRoute53.png" alt="Add DNS Authenticator - Route 53" id="Add DNS Authenticator - Route 53" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Access Key Id** | Enter the access key ID. |
| **Secret Access Key** | Enter the secret access key. |
{{< /truetable >}}

### OVH

**OVH** activates the **OVH Application Key**, **OVH Application Secret**, **OVH Consumer Key**, and **OVH Endpoint** fields.

{{< trueimage src="/images/SCALE/Credentials/AddDNSAuthenticatorOVH.png" alt="Add DNS Authenticator - OVH" id="Add DNS Authenticator - OVH" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **OVH Application Key** | Enter the application key. |
| **OVH Application Secret** | Enter the application secret. |
| **OVH Consumer Key** | Enter the consumer key. |
| **OVH Endpoint** | Enter the endpoint. |
{{< /truetable >}}

### Shell

Enables users to pass an authenticator script, such as *acme.sh*, to shell and add an external DNS authenticator. **shell** activates the **Authenticator script**, **Running user**, **Timeout**, and **Propagation delay** fields.

{{< hint type=warning >}}
The **shell** authenticator option is meant for advanced users. Improperly configured scripts can result in system instability or unexpected behavior.
{{< /hint >}}

{{< trueimage src="/images/SCALE/Credentials/AddDNSAuthenticatorShell.png" alt="Add DNS Authenticator - Shell" id="Add DNS Authenticator - Shell" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Authenticator script** | Enter the path to an ACME DNS authenticator script on the system. |
| **Running user** | Enter the username of the account that initiates the script, usually admin. |
| **Timeout** | Enter a timeout length (in seconds) for generated certificates. |
| **Propagation delay** | Enter a DNS propagation delay time (in seconds) for ISP domain caching. |
{{< /truetable >}}

{{< taglist tag="scaleacme" limit="10" >}}
