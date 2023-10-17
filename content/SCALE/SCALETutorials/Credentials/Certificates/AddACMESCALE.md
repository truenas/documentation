---
title: "Adding ACME DNS-Authenticators"
description: "Provides basic instructions on adding and managing SCALE ACME DNS-authenticators."
weight: 40
aliases:
tags:
 - scalecertificates
 - scalecas
 - scalecsrs
 - scaleacme
---

{{< toc >}}

Automatic Certificate Management Environment (ACME) DNS authenticators allow users to automate certificate issuing and renewal. The user must verify ownership of the domain before TrueNAS allows certificate automation.

{{< hint type=important >}}
ACME DNS is an advanced feature intended for network administrators or AWS professionals. Misconfiguring ACME DNS can prevent you from accessing TrueNAS.
{{< /hint >}}

The system requires an ACME DNS Authenticator and CSR to configure ACME certificate automation.

## Adding a DNS Authenticator

To add an authenticator,

Click **Add** on the **ACME DNS-Authenticator** widget to open the **Add DNS Authenticator** screen.

{{< trueimage src="/images/SCALE/Credentials/AddDNSAuthenticatorCloudflare.png" alt="Add DNS Authenticator" id="Add DNS Authenticator" >}}

Enter a name, and select the authenticator you want to configure.
Options are **[cloudflare](https://www.cloudflare.com)**, Amazon **[route53](https://aws.amazon.com/route53/)**, [**OVH**](https://www.ovhcloud.com/en/domains/), and **shell**.
**Authenticator** selection changes the configuration fields.

If you select **cloudflare** as the authenticator, you must enter your Cloudflare account email address, API key, and API token.

If you select **route53** as the authenticator, you must enter your Route53 Access key ID and secret access key.

If you select **OVH** as the authenticator, you must enter your OVH application key, application secret, consumer key, and endpoint.  

Click **Save** to add the authenticator.

### Adding an Authenticator with a Shell Script

{{< hint type=warning >}}
The **shell** authenticator option is meant for advanced users. Improperly configured scripts can result in system instability or unexpected behavior.
{{< /hint >}}

If you select **shell** as the authenticator, you must enter the path to an authenticator script, the running user, a certificate timeout, and a domain propagation delay.

Advanced users can select this option to pass an authenticator script, such as *acme.sh*, to shell and add an external DNS authenticator.
Requires an ACME authenticator script saved to the system.

{{< taglist tag="scaleacme" limit="10" >}}
