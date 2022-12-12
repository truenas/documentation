---
title: "Setting Up Let's Encrypt Certificates"
geekdocCollapseSection: true
weight: 10
tags:
- scalecertificates
- scaleacme
---

{{< toc >}}

TrueNAS SCALE allows users to automatically generate custom domain certificates using [Let's Encrypt](https://letsencrypt.org/). 

## Requirements

* An email address for your TrueNAS SCALE Admin user.
* A custom domain that uses either Cloudflare or AWS Route 53.
* A DNS server that doesn't cache for your TrueNAS SCALE system.

## Create an ACME DNS-Authenticator

Go to **Credentials > Certificates** and click **ADD** in the **ACME DNS-Authenticators** widget.

![LetsEncryptAcmeDNSAuthenticator](/images/SCALE/22.12/LetsEncryptAcmeDNSAuthenticator.png "Add ACME DNS Authenticator")

Enter the required fields depending on your provider, then click **Save**.

For Cloudflare, enter either your **Cloudflare Email** and **API Key**, or enter an **API Token**.

For Route53, enter your **Access Key ID** and **Secret Access Key**.

## Create a Certificate Signing Request (CSR)

Next, click **ADD** in the **Certificate Signing Requests** widget.

You can use default settings except for the **Common Name** and **Subject Alternate Names** fields. 

![LetsEncryptCSR](/images/SCALE/22.12/LetsEncryptCSR.png "Add CSR")

Enter your primary domain name in the **Common Name** field, then enter additional domains you wish to secure in the **Subject Alternate Names** field. 

For example, if your primary domain is *domain1.com*, entering `www.domain1.com` secures both addresses.

## Create ACME Certificate

Click the <span class="iconify" data-icon="mdi:wrench"></span> icon next to the new CSR.

![LetsEncryptACMECertificate](/images/SCALE/22.12/LetsEncryptACMECertificate.png "Add ACME Certificate")

Fill out the ACME Certificate form. Under **Domains**, select the ACME DNS Authenticator you created for both domains, then click **Save**.

You can create testing and staging certificates for your domain.

{{< taglist tag="scalecas" limit="10" >}}
