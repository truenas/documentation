---
title: "Managing TLS Ciphers"
description: "Controlling which TLS Ciphers are enabled for TrueNAS"
---

> This feature was introduced in TrueNAS 12.0

You can adjust which TLS cipher suites TrueNAS accepts for secure connections to the web interface. By default, all TLS cipher suites are allowed, but you might need to adjust this setting to match your particular network environment or security concerns.

## Allowing or Restricting TLS Ciphers

Go to the **System** ➞ **General** page:

<img src="/images/TN-12.0-TLS-1.PNG">
<br><br>

Click on *HTTPS Protocols* to open a dropdown menu with the various cipher suites.
Unsetting a cipher restricts its use in TrueNAS.
After enabling or disabling a cipher, the TrueNAS system must be rebooted.

<img src="/images/TN-12.0-TLS-2.PNG">
<br><br>
