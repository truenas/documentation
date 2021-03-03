---
title: "Managing TLS Ciphers"
weight: 30
---

{{< hint info >}}
This feature was introduced in TrueNAS 12.0
{{< /hint >}}

TrueNAS accepts different Transport Layer Security (TLS) cipher suites for secure connections to the web interface.
For best security, only use [TLS 1.2](https://tools.ietf.org/html/rfc5246) or newer.
By default, all options are available if you need to adjust this setting to match your particular network environment or security concerns.

## Allowing or Restricting TLS Ciphers

Log in to the web interface and go to **System > General**:

![SystemGeneral](/images/CORE/12.0/SystemGeneral.png "System General")

Click on *HTTPS Protocols* to open a dropdown menu with the various cipher suites.

{{< tabs "Supported Cipher Suites" >}}
{{< tab "TLSv1" >}}
Introduced in 1999, [TLSv1](https://tools.ietf.org/html/rfc2246) provides Internet communication security using encryption and other secure messaging techniques.
While not officially deprecated, this suite has been considered obsolete since 2008 and replaced by newer versions of the suite.
For security reasons, users are encouraged to avoid enabling this suite unless required by the network environment.
{{< /tab >}}
{{< tab "TLSv1.1" >}}
Introduced in 2006, [TLSv1.1](https://tools.ietf.org/html/rfc4346) is a small revision of v1.0 with additional protections against CBC attacks.
While not officially deprecated, this suite has been considered obsolete since 2008 and replaced by newer versions of the suite.
For security reasons, users are encouraged to avoid enabling this suite unless required by the network environment.
{{< /tab >}}
{{< tab "TLSv1.2" >}}
Introduced in 2008, [TLSv1.2](https://tools.ietf.org/html/rfc5246) greatly increases the protocol's ability to handle cryptographic algorithms.
This represents a major step forward in security effectiveness and resulted in the "soft" deprecation of TLS versions 1.0 and 1.1.
{{< /tab >}}
{{< tab "TLSv1.3" >}}
Introduced in 2018, [TLSv1.3](https://www.rfc-editor.org/rfc/rfc8446.html) represents another major improvement to the protocol.
Legacy or insecure encryption algorithms are removed, additional encryption for handshake messages added, and authentication and key exchange concepts are separated.
{{< /tab >}}
{{< /tabs >}}


Unsetting a cipher restricts its use in TrueNAS.
After enabling or disabling a cipher, the TrueNAS system must be rebooted.

![SystemGeneralHTTPSProtocols](/images/CORE/12.0/SystemGeneralHTTPSProtocols.png "HTTPS Protocols")
