---
title: "Managing Global 2FA (Two-Factor Authentication)"
description: "Provides information on setting up and managing global two-factor authentication, and logging in with it enabled."
weight: 70
aliases:
 - /scale/scaletutorials/credentials/2fascale
tags:
 - 2fa
 - ssh
 - credentials
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

Global Two-factor authentication (2FA) is great for increasing security.

TrueNAS offers global 2FA to ensure that entities cannot use a compromised administrator or root password to access the administrator interface.

{{< include file="/static/includes/AdvancedSettingsWarningSCALE.md" >}}

## About TrueNAS 2FA
TrueNAS offers two levels of 2FA configuration:

1. **Global 2FA settings** enable 2FA system-wide and configure options such as the time window and SSH authentication requirements.
2. **Per-user 2FA secrets** allow individual users to set up their own 2FA secrets using an authenticator app.

When global 2FA is enabled, it impacts services differently based on whether individual users configured their 2FA secrets:

* **UI/API authentication:**
  * Users with a configured 2FA secret must provide the 2FA code to log in.
  * Users without a configured 2FA secret can log in without 2FA but are prompted once per session to set it up. Users can skip this setup.
* **SSH authentication:** If both global 2FA and SSH 2FA options are enabled, users with configured 2FA secrets must provide the code for password-based SSH access. Key-based authentication is not affected.

{{< hint type=note >}}
In GPOS STIG compatibility mode, 2FA for UI access is mandatory for all users.
{{< /hint >}}

To use 2FA, you need a mobile device with the current time and date, and an authenticator app installed.
We recommend Google Authenticator.
You can use other authenticator applications, but you must confirm the settings, unique keys, and QR codes generated in TrueNAS are compatible with your particular app before permanently activating 2FA.

{{< hint type=important >}}
Two-factor authentication is time-based and requires a correct system time setting.
We strongly recommend ensuring Network Time Protocol (NTP) is functional before enabling two-factor authentication!
{{< /hint >}}

{{< expand "What is 2FA and why should I enable it?" "v" >}}
2FA adds an extra layer of security to your system to prevent someone from logging in, even if they have your password.
2FA requires you to verify your identity using a randomized six-digit code that regenerates every 30 seconds (unless modified) to use when you log in.

Enabling global 2FA prompts users to set up their individual 2FA secrets but does not require it unless the system is in STIG compatibility mode.
{{< /expand >}}

### Benefits of 2FA
Unauthorized users cannot log in since they do not have the randomized six-digit code.

Authorized employees can securely access systems from any device or location without jeopardizing sensitive information.

Internet access on the TrueNAS system is not required to use 2FA.

### Drawbacks of 2FA
2FA requires an app to generate the 2FA code.

If a user configured a 2FA secret and the 2FA code is not working or the user cannot access it, the system is inaccessible to that user through the UI and SSH (if SSH 2FA is enabled).
Users can [remove their 2FA secret](#removing-user-2fa-secrets) to regain access, or administrators can bypass or [disable global 2FA](#disabling-or-bypassing-2fa) using the CLI.

## Enabling 2FA
{{< hint type=warning >}}
Set up a second 2FA device as a backup before proceeding.
{{< /hint >}}

Before you begin, download Google Authenticator to your mobile device.

1. Go to **System > Advanced Settings**, scroll down to the **Global Two Factor Authentication** widget, and click **Configure**.

   {{< trueimage src="/images/SCALE/SystemSettings/GlobalTwoFactorAuthenticationWidget.png" alt="Global TwoFactor Authentication Widget" id="1 - Global Two Factor Authentication Settings Widget" >}}

2. Select **Enable Two Factor Authentication Globally**, then click **Save**.

   {{< trueimage src="/images/SCALE/SystemSettings/Enable2FAGlobally.png" alt="Enable2FAGlobally" id="Check Enable Two Factor Authentication Globally" >}}

   If you want to enable two-factor authentication for SSH logins, select **Enable Two-Factor Auth for SSH** before you click **Save**.
   SSH 2FA only applies to users who configured a 2FA secret and are using password-based authentication.

   TrueNAS takes you to the **Two-Factor Authentication** screen to set up your 2FA secret.

   You can also access the two-factor authentication settings for the currently logged-in user from the **Settings** option on the top toolbar.
   Click the **Settings** icon, then select **Two-Factor Authentication** to open the **User Two-Factor Authentication Actions** screen.

   {{< trueimage src="/images/SCALE/SystemSettings/UserTwoFactorAuthenticationActionsScreen.png" alt="User Two-Factor Authentication Actions Screen" id="User Two-Factor Authentication Actions Screen" >}}

   Click **Configure 2FA Secret** to open the **Set Up Two-Factor Authentication** screen and view the QR code.  The **Set Up Two-Factor Authentication** screen also has the unique key with a copy to clipboard button so you can configure 2FA using a non-camera method if necessary.

   {{< hint type="info">}}
   You can configure two-factor authentication and get the QR code for an authenticator app for the logged-in user at any time, but you must configure global two-factor authentication to enable it.
   {{< /hint >}}
   
   When using Google Authenticator, set **Interval** to **30** or the authenticator code might not function when logging in.

3. Click **Configure 2FA Secret** to open the **Set Up Two-Factor Authentication** screen where you scan the QR code using Google Authenticator or copy the unique key.
   To generate a new QR code, click **Renew 2FA Secret**.

   {{< trueimage src="/images/SCALE/SystemSettings/SetUpTwoFactorAuthenticationScreen.png" alt="Set Up Two-Factor Authentication Screen" id="Set Up Two-Factor Authentication Screen" >}}

   After scanning the code, click **Finish** to close the dialog on the **Two-Factor Authentication** screen.

   {{< hint type=info >}}
   You can click **Skip Setup** if you want to set up 2FA later. Users without a configured 2FA secret can log in without providing a 2FA code.
   {{< /hint >}}

When **Global 2FA** is enabled, user accounts without configured 2FA secrets are prompted once per session after login to set up 2FA for their account.
Users can skip this setup and proceed without 2FA. However, users who configured a 2FA secret must provide the 2FA code to log in.

### Disabling or Bypassing 2FA
Go to **System > Advanced Settings**, scroll down to the **Global Two Factor Authentication** widget, and click **Config**. Clear the **Enable Two-Factor Authentication Globally** checkbox and click **Save**.

### Removing User 2FA Secrets
Users can remove their configured 2FA secret at any time. This allows them to log in without providing a 2FA code.

1. Click the **Settings** icon on the top toolbar and select **Two-Factor Authentication** to open the **User Two-Factor Authentication Actions** screen.

2. Click **Unset 2FA Secret** and confirm the action.

After removing the 2FA secret, the user can log in without 2FA and can set up a new secret later if desired.

### Reactivating 2FA
If you want to enable 2FA again, go to **System > Advanced Settings**, scroll down to the **Global Two Factor Authentication** widget, and click **Config**.

Select **Enable Two Factor Authentication Globally**, then click **Save**.
To change the system-generated **Secret**, click the **Settings** icon on the top toolbar and select **Two-Factor Authentication**.
Click **Renew 2FA Secret**.

## Using 2FA to Log in to TrueNAS
Enabling 2FA changes the login process for both the TrueNAS web interface and SSH logins.

### Logging In Using the Web Interface
If a user configured a 2FA secret, the login screen adds another field for the randomized authenticator code. If this field is not immediately visible, try refreshing the browser.

Enter the code from the mobile device (without the space) in the login window and use the admin username and password.

{{< trueimage src="/images/SCALE/Login/2faSigninSplashScreen.png" alt="2FA Signin Splash Screen" id="2FA Splash Screen" >}}

If you wait too long, a new number code displays in Google Authenticator so you can retry.

Users who have not configured a 2FA secret can log in with just their username and password.

### Logging In Using SSH
SSH 2FA only applies to users who configured a 2FA secret and are using password-based authentication. Key-based SSH authentication is not affected by 2FA settings.

1. Confirm that you set **Enable Two-Factor Auth for SSH** in **System > Advanced > Global Two Factor Authentication**.

2. Ensure the user configured a 2FA secret (see [Enabling 2FA](#enabling-2fa) above).

3. Go to **Credentials > Users** and edit the desired user account. Select **SSH password login enabled**, then click **Save**.

4. Go to **System Settings > Services** and click the **SSH** toggle. Wait for the service status to show that it is running.

5. Open the Google Authentication app on your mobile device.

6. Open a terminal (such as Windows Shell) and SSH into the system using either the host name or IP address, the administrator account user name and password, and the 2FA code.

Users without a configured 2FA secret can use password-based SSH without providing a 2FA code, even when global SSH 2FA is enabled.
