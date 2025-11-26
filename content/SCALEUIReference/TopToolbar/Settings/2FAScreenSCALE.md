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

The **Two-Factor Authentication** screen, accessed from the **Settings** menu on the top toolbar, allows managing user-level two-factor authentication (2FA) credentials. This option only appears in the Settings menu when an administrator has enabled Global 2FA.

Administrators can enable Global 2FA on the [**Advanced Settings**]({{< ref "AdvancedSettingsScreen" >}}) screen.
For more information, see the [Managing Global 2FA]({{< ref "ManageGlobal2FASCALE" >}}) tutorial.

{{< trueimage src="/images/SCALE/SystemSettings/2FAScreenEnabled.png" alt="2FAScreenEnabled" id="2FA Screen with Enabled Message" >}}

## Actions

**Renew Secret** changes the system-generated **Secret** and **Provisioning URI** values. 

{{< trueimage src="/images/SCALE/Credentials/2FARenewSecretDialog.png" alt="2FA Renew Secret" id="Renew Secret Dialog" >}}

**Unset 2FA Secret** removes the user's existing 2FA setup. A confirmation dialog appears before removing the configuration.

{{< trueimage src="/images/SCALE/Credentials/Unset2FASecret.png" alt="Unset Two-Factor Authentication Dialog" id="Unset Two-Factor Authentication Dialog" >}}

{{< hint type=warning >}}
Removing your 2FA configuration reduces account security. If global 2FA is enabled, you will be prompted to set up 2FA again on your next login, though you can skip this prompt if needed.
{{< /hint >}}
