---
title: "Configuring ACME DNS"
weight: 160
aliases:
  - /core/system/acmedns
---

{{< toc >}}

{{< hint info >}}
This feature is only available in the open-source supported TrueNAS CORE.
{{< /hint >}}

[Automatic Certificate Management Environment (ACME)](https://ietf-wg-acme.github.io/acme/draft-ietf-acme-acme.html) is available for automating certificate issuing and renewal.
The user must verify ownership of the domain before certificate automation is allowed.

ACME certificate automation requires an ACME DNS Authenticator and a [Certificate Signing Request]({{< relref "/CORE/UIReference/System/Certificates.md" >}}).

## Adding ACME DNS Authenticators

Go to **System > ACME DNS** and click **ADD**.

![SystemACMEDNSAdd](/images/CORE/12.0/SystemACMEDNSAdd.png "ACME DNS Add")

Name the authenticator, choose a DNS provider, and configure any required **Authenticator Attributes**:

{{< hint info >}}
The Route 53 Amazon DNS web service requires entering an Amazon account **Access ID Key** and **Secret Access Key**.
See the [AWS documentation](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/) for more details about generating these keys.
{{< /hint >}}

Click **SUBMIT** to register the DNS Authenticator and add it to the authenticator options for ACME Certificates.

## Creating ACME Certificates

![SystemCertificatesAddACMECertificate](/images/CORE/12.0/SystemCertificatesAddACMECertificate.png "Create an ACME Certificate")

You can create ACME certificates for existing certificate signing requests.
The certificates use an ACME DNS authenticator to confirm domain ownership. Then, they are automatically issued and renewed.

To create a new ACME certificate, go to **System > Certificates**, click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> (Options) for an existing certificate signing request, and select **Create ACME Certificate**.

Give the ACME certificate an identifier (name), and accept the TOS by setting **Terms of Service**.

For the **Authenticator**, select the ACME DNS authenticator you created, then click **SUBMIT**.