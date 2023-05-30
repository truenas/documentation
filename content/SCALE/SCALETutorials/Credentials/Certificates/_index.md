---
title: "Certificates"
description: "Information about adding and managing certificates, CSRs, CAs and ACME DNS-Authenticators in TrueNAS SCALE."
geekdocCollapseSection: true
aliases: 
weight: 50
tags:
 - scalecertificates
---


Use the **Credentials > Certificates** screen **Certificates**, **Certificate Signing Requests** (CSRs), **Certificate Authorities** (CA), and **ACME DNS-Authenticators** widgets to manage certificates, certificate signing requests (CSRs), certificate authorities (CA), and ACME DNS-authenticators. 

![CredentialsCertificatesScreen](/images/SCALE/22.02/CredentialsCertificatesScreen.png "Credentials Certificates Screen")

Each TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface, but users can make custom certificates for authentication and validation while sharing data.

## Contents

{{< children depth="2" description="true" >}}
