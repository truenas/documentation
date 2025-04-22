---
title: "Two-Factor Authentication Screen"
description: "Provides information on two-factor authentication screen settings."
weight: 60
alias:
tags:
 - 2fa
 - credentials
---

{{< hint type=important >}}
Two-factor authentication is time-based and requires a correct system time setting.
{{< /hint >}}

The **Two-Factor Authentication** screen has buttons to manage two-factor authentication (2FA) credentials, and it displays a different message depending on if you have 2FA enabled or disabled.

To configure 2FA settings go to the [**Advanced**]({{< ref "AdvancedSettingsScreen" >}}) settings screen. For more information, see the [Managing Global 2FA]({{< ref "ManageGlobal2FASCALE" >}}) tutorial.

{{< trueimage src="/images/SCALE/Credentials/2FAScreenDisabled.png" alt="2FAScreenDisabled" id="2FA Screen with Disabled Message" >}}

{{< trueimage src="/images/SCALE/SystemSettings/2FAScreenEnabled.png" alt="2FAScreenEnabled" id="2FA Screen with Enabled Message" >}}

## Actions

**Renew Secret** changes the system-generated **Secret** and **Provisioning URI** values. 

{{< trueimage src="/images/SCALE/Credentials/2FARenewSecretDialog.png" alt="2FA Renew Secret" id="Renew Secret Dialog" >}}

**Show QR** opens a QR code dialog. Scan with an authenticator app on your mobile device. We recommend Google Authenticator.

{{< trueimage src="/images/SCALE/Credentials/2FAQRCodeDialog.png" alt="2FA QR Code" id="2FA QR Code Dialog" >}}
