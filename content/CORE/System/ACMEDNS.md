---
title: "ACME DNS"
weight: 170
---

{{< toc >}}

{{< hint info >}}
This feature is only available in the open source supported TrueNAS CORE.
{{< /hint >}}

[Automatic Certificate Management Environment (ACME)](https://ietf-wg-acme.github.io/acme/draft-ietf-acme-acme.html) is available for automating certificate issuing and renewal.
The user must verify ownership of the domain before certificate automation is allowed.

An ACME DNS Authenticator is required to configure ACME certificate automation.
This also requires a [Certificate Signing Request]({{< relref "Certificates.md" >}}).

## ACME DNS Authenticators

Go to **System > ACME DNS** and click *ADD*.

![SystemACMEDNSAdd](/images/CORE/12.0/SystemACMEDNSAdd.png "ACME DNS Add")

Enter a name for the authenticator.
This is only used to identify the authenticator in the TrueNAS web interface.
Choose a DNS provider and configure any required *Authenticator Attributes*:

* *Route 53*: Amazon DNS web service.
  Requires entering an Amazon account *Access ID Key* and *Secret Access Key*.
  See the [AWS documentation](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/) for more details about generating these keys.

Click *SUBMIT* to register the DNS Authenticator and add it to the list of authenticator options for ACME Certificates.

## Creating ACME Certificates

ACME certificates can be created for existing certificate signing requests.
These certificates use an ACME DNS authenticator to confirm domain ownership, then are automatically issued and renewed.
To create a new ACME certificate, go to **System > Certificates**, click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> (Options) for an existing certificate signing request, and click *Create ACME Certificate*.

![SystemCertificatesAddACMECertificate](/images/CORE/12.0/SystemCertificatesAddACMECertificate.png "Create an ACME Certificate")

| Name | Description |
|------|-------------|
| Identifier| Internal identifier of the certificate. Only alphanumeric characters, dash (`-`), and underline (`_`) are allowed. |
| Terms of Service | Please accept the terms of service for the given ACME Server. |
| Renew Certificate Day | Number of days to renew certificate before expiring. |
| ACME Server Directory URI | URI of the ACME Server Directory. Choose a preconfigured URI or enter a custom URI. |
| Authenticator for *Domain Name* (*Domain Name* dynamically changes) | Authenticator to validate the domain. Choose a previously configured ACME DNS authenticator. |
