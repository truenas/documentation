---
title: "Certificates"
description: "Information about adding and managing certificates, CSRs, CAs, and ACME DNS-Authenticators in TrueNAS."
geekdocCollapseSection: true
aliases:
 - /scale/scaleclireference/system/clicertificate/
weight: 50
tags:
 - certificates
related: false
keywords:
- enterprise storage solution
- nas storage 
---

Use the **Credentials > Certificates** screen to manage certificates, certificate signing requests (CSRs), and DNS authenticators with the **Certificates**, **Certificate Signing Requests** (CSRs), and **ACME DNS-Authenticators** widgets.

{{< trueimage src="/images/SCALE/Credentials/CredentialsCertificatesScreen.png" alt="Credentials Certificates Screen" id="Credentials Certificates Screen" >}}

Each TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface, but users can import custom certificates for authentication and validation while sharing data.

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
