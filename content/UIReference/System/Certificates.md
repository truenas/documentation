---
title: "Certificates"
description: "Explains the fields located on the Certificates screen in TrueNAS CORE."
weight: 160
tags:
- corecertificates
- coreca
---

{{< toc >}}

{{< hint type=important >}}
After you create or import a new certificate, bind it to the relevant service. For HTTPS binding, go to **System > General** and select the certificate you want to bind in the **GUI SSL Certificate** field. 

For other services, such as SMB or FTP, bind the certificate within the **Services** screen. Click the **Configure** button next to the service you want to bind to, then select the certificate within the **Certificate** field.
{{< /hint >}}

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

{{< include file="/static/includes/CertificatesInternalandCSR.md" >}}

## Import Certificate and Import Certificate Signing Request

{{< include file="/static/includes/CertificatesImportCertificateCSR.md" >}}

{{< taglist tag="corecertificates" limit="10" >}}
