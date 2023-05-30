---
title: "Certificates"
description: "This article explains the fields located on the Certificates screen in TrueNAS CORE."
weight: 160
tags:
- corecertificates
- coreca
---

{{< toc >}}

![CAInternalIntermediate](/images/CORE/13.0/CAInternalIntermediate.png "CA Internal and Intermediate")

## Identifier and Type

{{< truetable >}}
| Name | Description |
|------|-------------|
| Name | Descriptive identifier for this certificate. |
| Type | Internal Certificate is used for internal or local systems. Certificate Signing Request is used to get a CA signature. Import Certificate allows an existing certificate to be imported onto the system. Import Certificate Signing Request allows an existing CSR to be imported onto the system.  |
| Profiles | Predefined certificate extensions. Choose a profile that best matches your certificate usage scenario. |
{{< /truetable >}}

## Internal Certificate and Certificate Signing Request

{{< include file="content/_includes/CertificatesInternalandCSR.md" type="page" >}}

## Import Certificate and Import Certificate Signing Request

{{< include file="content/_includes/CertificatesImportCertificateCSR.md" type="page" >}}

{{< taglist tag="corecertificates" limit="10" >}}
