---
title: "Managing TLS Ciphers"
description: "This article describes how to manage TLS ciphers on TrueNAS CORE." 
weight: 30
aliases:
  - /core/system/general/uitlsciphers
tags:
- coretlsciphers
---

{{< toc >}}

TrueNAS accepts different Transport Layer Security (TLS) cipher suites for secure web interface connections.
Only use [TLS 1.2](https://tools.ietf.org/html/rfc5246) or newer for best security.
By default, all options are available if you need to adjust this setting to match your particular network environment or security concerns.

## Allow or Restrict TLS Ciphers

Go to **System > General** and click on **HTTPS Protocols** to open a drop-down menu with the various cipher suites.

Unsetting a cipher restricts its use in TrueNAS.
After enabling or disabling a cipher, you must reboot the TrueNAS system.

![SystemGeneralHTTPSProtocols](/images/CORE/12.0/SystemGeneralHTTPSProtocols.png "HTTPS Protocols")

### TLSv1
[TLSv1](https://tools.ietf.org/html/rfc2246) provides Internet communication security using encryption and other secure messaging techniques.
While not officially deprecated, TLSv1 was considered obsolete in 2008.
For security, we discourage enabling TLSv1 unless your network environment requires it.

### TLSv1.1
[TLSv1.1](https://tools.ietf.org/html/rfc4346) is a revision of v1.0 with additional protections against CBC attacks.
While not officially deprecated, TLSv1.1 was considered obsolete in 2008.
For security reasons, users are encouraged to avoid enabling this suite unless required by the network environment.

### TLSv1.2
[TLSv1.2](https://tools.ietf.org/html/rfc5246) increases the protocol's ability to handle cryptographic algorithms.
TLSv1.2 represented a major step forward in security effectiveness and resulted in the "soft" deprecation of TLS versions 1.0 and 1.1.

### TLSv1.3
[TLSv1.3](https://www.rfc-editor.org/rfc/rfc8446.html) represents another major improvement to the protocol.
TLSv1.3 removes legacy or insecure encryption algorithms, adds encryption for handshake messages, and separates authentication and key exchange concepts.  

{{< taglist tag="coreopenvpn" limit="10" title="Related Articles">}}
