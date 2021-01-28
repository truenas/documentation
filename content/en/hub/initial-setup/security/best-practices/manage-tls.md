---
title: "Managing TLS Ciphers"
description: "Controlling which TLS Ciphers are enabled for TrueNAS"
tags: ["security"]
---

> This feature was introduced in TrueNAS 12.0

You can adjust which Transport Layer Security (TLS) cipher suites TrueNAS accepts for secure connections to the web interface.
For best security, only use [TLS 1.2](https://tools.ietf.org/html/rfc5246) or newer versions.
By default, all options are available if you need to adjust this setting to match your particular network environment or security concerns.

## Allowing or Restricting TLS Ciphers

Log in to the web interface and go to **System > General**:

<img src="/images/12.0-SystemGeneral.png">
<br><br>

Click on *HTTPS Protocols* to open a dropdown menu with the various cipher suites.
Unsetting a cipher restricts its use in TrueNAS.
After enabling or disabling a cipher, the TrueNAS system must be rebooted.

<img src="/images/SystemGeneralHTTPSProtocols.png">
<br><br>
