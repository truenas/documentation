---
title: "Using ACME Certificates"
description: "How to use ACME for automated certificate issuing and renewal."
tags: ["networking","security","certificates"]
weight: 13
---

[Automatic Certificate Management Environment (ACME)](https://ietf-wg-acme.github.io/acme/draft-ietf-acme-acme.html) is available for automating certificate issuing and renewal.
The user must verify ownership of the domain before certificate automation is allowed.

To configure ACME certificate automation, you will need to add an ACME DNS authenticator to TrueNAS and have a [Certificate Signing Request](/hub/initial-setup/security/certificates/#certificate-signing-request) on the system.

## ACME DNS Authenticators

Go to **System > ACME DNS** and click **ADD**.

![System ACME DNS Add](/images/CORE/12.0/SystemACMEDNSAdd.png "System ACME DNS Add")
<br><br>

Enter a name for the authenticator.
This is only used to identify the authenticator in the TrueNAS web interface.
Choose a DNS provider and configure any required *Authenticator Attributes*:

* Route 53: Amazon DNS web service. Requires entering an Amazon account **Access ID Key** and **Secret Access Key**. See the [AWS documentation]() for more details about generating these keys.

Click **SUBMIT** to register the DNS Authenticator and add it to the list of authenticator options for ACME Certificates.

## Creating ACME Certificates

ACME certificates can be created for existing certificate signing requests.
These certificates use an ACME DNS authenticator to confirm domain ownership, then are automatically issued and renewed.
To create a new ACME certificate, go to **System > Certificates**, click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i> (Options) for an existing certificate signing request, and click **Create ACME Certificate**.

![System Certificates Add ACME Certificate](/images/CORE/12.0/SystemCertificatesAddACMECertificate.png "System Certificates Add ACME Certificate")
<br><br>

| Setting | Value |	Description |
|---------|-------|-------------|
| Identifier| string | Internal identifier of the certificate. Only alphanumeric characters, dash (`-`), and underline (`_`) are allowed. |
| Terms of Service | checkbox | Please accept the terms of service for the given ACME Server. |
| Renew Certificate Day | integer | Number of days to renew certificate before expiring. |
| ACME Server Directory URI | drop down | URI of the ACME Server Directory. Choose a preconfigured URI or enter a custom URI. |
| Authenticator for *Domain Name* (*Domain Name* dynamically changes) | drop down | Authenticator to validate the domain. Choose a previously configured ACME DNS authenticator. |
