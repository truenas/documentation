---
title: "Two-Factor Authentication Screen"
description: "Provides information on two-factor authentication screen settings."
weight: 60
tags:
 - 2fa
 - credentials
---

{{< hint type=important >}}
Two-factor authentication is time-based and requires a correct system time setting.
{{< /hint >}}

The **Two-Factor Authentication** screen, accessed from the **Settings** menu on the top toolbar, allows managing user-level two-factor authentication (2FA) credentials. It shows a different message if 2FA enabled than when not configured or disabled.

To configure 2FA settings go to the [**Advanced Settings**]({{< relref "AdvancedSettingsScreen.md" >}}) screen.
For more information, see the [Managing Global 2FA]({{< relref "ManageGlobal2FASCALE.md" >}}) tutorial.

{{< trueimage src="/images/SCALE/Credentials/2FAScreenDisabled.png" alt="2FAScreenDisabled" id="2FA Screen with Disabled Message" >}}

{{< trueimage src="/images/SCALE/SystemSettings/2FAScreenEnabled.png" alt="2FAScreenEnabled" id="2FA Screen with Enabled Message" >}}

## Actions

**Renew Secret** changes the system-generated **Secret** and **Provisioning URI** values. 

{{< trueimage src="/images/SCALE/Credentials/2FARenewSecretDialog.png" alt="2FA Renew Secret" id="Renew Secret Dialog" >}}

**Show QR** opens a QR code dialog. Scan with an authenticator app on your mobile device. We recommend Google Authenticator.

{{< trueimage src="/images/SCALE/Credentials/2FAQRCodeDialog.png" alt="2FA QR Code" id="2FA QR Code Dialog" >}}
