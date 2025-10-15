---
title: "Two-Factor Authentication Screen"
description: "Provides information on two-factor authentication screen settings."
weight: 60
aliases:
 - /scale/scaleclireference/auth/clitwofactor/
tags:
 - 2fa
 - credentials
---

{{< hint type=important >}}
Two-factor authentication is time-based and requires a correct system time setting.
{{< /hint >}}

The **Two-Factor Authentication** screen, accessed from the **Settings** menu on the top toolbar, displays user-level two-factor authentication (2FA) settings. The screen shows a different message if 2FA is enabled than when not configured or disabled.

This screen allows users to configure, renew, or remove their individual 2FA secrets.

Global 2FA settings are configured on the [**Advanced Settings**]({{< ref "AdvancedSettingsScreen" >}}) screen.
For more information, see the [Managing Global 2FA]({{< ref "ManageGlobal2FASCALE" >}}) tutorial.

{{< trueimage src="/images/SCALE/Credentials/2FAScreenDisabled.png" alt="2FAScreenDisabled" id="2FA Screen with Disabled Message" >}}

{{< trueimage src="/images/SCALE/SystemSettings/2FAScreenEnabled.png" alt="2FAScreenEnabled" id="2FA Screen with Enabled Message" >}}

## Actions

**Configure 2FA Secret** opens the **Set Up Two-Factor Authentication** screen that displays a QR code and unique key for use with an authenticator app. The screen includes a **Skip Setup** button.

**Renew Secret** changes the system-generated **Secret** and **Provisioning URI** values and generates a new QR code and unique key.

{{< trueimage src="/images/SCALE/Credentials/2FARenewSecretDialog.png" alt="2FA Renew Secret" id="Renew Secret Dialog" >}}

**Unset 2FA Secret** removes the user's configured 2FA secret. This action displays a confirmation dialog before proceeding.

{{< trueimage src="/images/SCALE/Credentials/Unset2FA.png" alt="2FA Unset Dialog" id="2FA Unset Dialog" >}}
