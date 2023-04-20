---
title: "Adding ACME DNS-Authenticators"
description: "This article provides basic instructions on adding and managing SCALE ACME DNS-authenticators."
weight: 40
aliases:
tags:
 - scalecertificates
 - scalecas
 - scalecsrs
 - scaleacme
---



Automatic Certificate Management Environment (ACME) DNS authenticators allow users to automate certificate issuing and renewal. The user must verify ownership of the domain before TrueNAS allows certificate automation.

{{< hint type=important >}}
ACME DNS is an advanced feature intended for network administrators or AWS professionals. Misconfiguring ACME DNS can prevent you from accessing TrueNAS.
{{< /hint >}}

The system requires an ACME DNS Authenticator and CSR to configure ACME certificate automation.

To add an authenticator,

Click **Add** on the **ACME DNS-Authenticator** widget to open the **Add DNS Authenticator** screen.

Enter a name, and select the authenticator you want to configure. The selection changes the screen settings.

If you select **[Cloudflare](https://www.cloudflare.com)** as the authenticator, you must enter your Cloudflare account email address, API key, and API token. 

If you select **[Route53](https://aws.amazon.com/route53/)** as the authenticator, you must enter your Route53 Access key ID and secret access key.

Click **Save** to add the authenticator.

{{< taglist tag="scaleacme" limit="10" >}}