---
title: "Two-Factor Authentication Screen"
description: "Provides information on two-factor authentication screen settings."
weight: 60
alias:
tags:
 - scale2fa
 - scalecredentials
---

{{< toc >}}

{{< hint type=important >}}
Two-factor authentication is time-based and requires a correct system time setting.
{{< /hint >}}

The **Two-Factor Authentication** screen has buttons to manage two-factor authentication (2FA) credentials, and it displays a different message depending on if you have 2FA enabled or disabled.

{{< trueimage src="/images/SCALE/23.10/2FAScreenDisabled.png" alt="2FAScreenDisabled" id="1: 2FA Screen with Disabled Message." >}}

{{< trueimage src="/images/SCALE/23.10/2FAScreenEnabled.png" alt="2FAScreenEnabled" id="2: 2FA Screen with Enabled Message." >}}

## Actions

**Renew Secret** changes the system-generated **Secret** and **Provisioning URI** values. 

{{< trueimage src="/images/SCALE/22.02/2FARenewSecretDialog.png" alt="2FA Renew Secret" id="3: Renew secret dialogue.." >}}

**Show QR** opens a QR code dialog. Scan with an authenticator app on your mobile device. We recommend Google Authenticator.

{{< trueimage src="/images/SCALE/23.10/2FAQRCodeDialog.png" alt="2FA QR Code" id="4: 2FA QR Code Dialogue." >}}

{{< taglist tag="scale2fa" limit="10" >}}