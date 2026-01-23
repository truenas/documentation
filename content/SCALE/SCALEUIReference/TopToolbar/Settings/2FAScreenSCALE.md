---
title: "Two Factor Auth Screen"
description: "Provides information on the Two Factor Auth screen settings."
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

The **Two Factor Auth** screen allows managing user-level two-factor authentication (2FA) credentials. Access this screen by going to **Credentials > Two Factor Auth**, or from the **Settings** menu on the top toolbar when Global 2FA is enabled.

Administrators can enable Global 2FA on the [**Advanced Settings**]({{< ref "AdvancedSettingsScreen" >}}) screen.
For more information, see the [Managing Global 2FA]({{< ref "ManageGlobal2FASCALE" >}}) tutorial.

## Screen States

The **Two Factor Auth** screen displays different information depending on the Global 2FA and user 2FA configuration status.

### Global 2FA Disabled

When Global 2FA is not enabled, the screen displays a warning message:

**Two-Factor authentication is not enabled on this system. You can configure your personal settings, but they will have no effect until two-factor authentication is enabled globally by system administrator.**

Users can still configure their personal 2FA settings, but authentication codes are not required for login until a system administrator enables Global 2FA.

### Global 2FA Enabled, User Not Configured

{{< trueimage src="/images/SCALE/SystemSettings/2FAEnabledNotConfigured.png" alt="Unconfigured 2FA Dialog" id="Unconfigured 2FA Dialog" >}}

When Global 2FA is enabled but the current user has not configured their personal 2FA, the screen displays the following messages:

**Two-Factor authentication is enabled on this system, but it's not yet configured for your user. Please configure it now.**

**Two-Factor Authentication has been enabled on this system. It is strongly recommended to set up 2FA for your account to enhance security. Make sure to scan the QR code with your authenticator app before logging out or navigating away, otherwise you may have difficulty accessing your account later.**

Users should configure their 2FA immediately to maintain secure access to their account.

### 2FA Configured

When the user has configured 2FA, the screen displays a green confirmation message:

**Two-Factor authentication has been configured.**

The screen also displays the QR code and text code for the user's 2FA secret.

## Set Up Two-Factor Authentication Card

The **Set Up Two-Factor Authentication** card contains the following elements:

### Actions

**Configure 2FA Secret** appears when the user has not yet configured 2FA. Click to generate a new 2FA secret and display the QR code.

**Renew 2FA Secret** appears after 2FA is configured. Click to generate a new secret and QR code. A confirmation dialog appears with the message:

**Renewing the secret will cause a new URI and a new QR code to be generated, making it necessary to update your two-factor device or app.**

Click **Renew** to confirm or **Cancel** to keep the existing secret.

{{< trueimage src="/images/SCALE/Credentials/2FARenewSecretDialog.png" alt="2FA Renew Secret" id="Renew Secret Dialog" >}}

**Unset 2FA Secret** removes the existing 2FA configuration for the user. A confirmation dialog appears with the message:

**Are you sure you want to unset two-factor authentication? This will remove your current 2FA configuration and you will need to set it up again to use 2FA.**

**Unset 2FA** confirms changes. **Cancel** keeps the existing configuration.

{{< trueimage src="/images/SCALE/Credentials/Unset2FASecret.png" alt="Unset Two-Factor Authentication Dialog" id="Unset Two-Factor Authentication Dialog" >}}

{{< hint type=warning >}}
Removing your 2FA configuration reduces account security. If Global 2FA is enabled, you are prompted to set up 2FA again on your next login.
{{< /hint >}}

### QR Code Section

After configuring 2FA, the screen displays a QR code that users scan with their authenticator app. The screen also displays the following warning:

**Scan this QR Code with your authenticator app of choice. The next time you try to login, you will be asked to enter an One Time Password (OTP) from your authenticator app. This step is extremely important. Without the OTP you will be locked out of this system.**

### Text Code Section

Below the QR code, the screen displays the text version of the 2FA secret with a copy-to-clipboard button. 
The copy-to-clipboard button allows users save the code and then manually enter it into their authenticator app if they cannot scan the QR code.
