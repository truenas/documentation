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
To use 2FA, you need a mobile device with the current time and date, and an authenticator app installed.
We recommend Google Authenticator.
You can use other authenticator applications, but you must confirm the settings and QR codes generated in TrueNAS are compatible with your particular app before permanently activating 2FA.

{{< hint type=important >}}
Two-factor authentication is time-based and requires a correct system time setting.
We strongly recommend ensuring Network Time Protocol (NTP) is functional before enabling two-factor authentication!
{{< /hint >}}

{{< expand "What is 2FA and why should I enable it?" "v" >}}
2FA adds an extra layer of security to your system to prevent someone from logging in, even if they have your password.
2FA requires you to verify your identity using a randomized six-digit code that regenerates every 30 seconds (unless modified) to use when you log in.
{{< /expand >}}

### Benefits of 2FA
Unauthorized users cannot log in since they do not have the randomized six-digit code.

Authorized employees can securely access systems from any device or location without jeopardizing sensitive information.

Internet access on the TrueNAS system is not required to use 2FA.

### Drawbacks of 2FA
2FA requires an app to generate the 2FA code.

If the 2FA code is not working or users cannot get it, the system is inaccessible through the UI and SSH (if enabled).
You can bypass or [unlock 2FA](#disabling-or-bypassing-2fa) using the CLI.

## Enabling 2FA
{{< hint type=warning >}}
Set up a second 2FA device as a backup before proceeding.
{{< /hint >}}

Before you begin, download Google Authenticator to your mobile device.

1. Go to **System > Advanced Settings**, scroll down to the **Global Two Factor Authentication** widget, and click **Config**.

   {{< trueimage src="/images/SCALE/SystemSettings/GlobalTwoFactorAuthenticationWidget.png" alt="Global TwoFactor Authentication Widget" id="1 - Global Two Factor Authentication Settings Widget" >}}

2. Check **Enable Two Factor Authentication Globally**, then click **Save**.
  
   {{< trueimage src="/images/SCALE/SystemSettings/Enable2FAGlobally.png" alt="Enable2FAGlobally" id="Check Enable Two Factor Authentication Globally" >}}

   If you want to enable two-factor authentication for SSH logins, select **Enable Two-Factor Auth for SSH** before you click **Save**.

   TrueNAS takes you to the **Two-Factor Authentication** screen to finish 2FA setup.

   You can also access the two-factor authentication settings for the currently logged-in user from the **Settings** option on the top toolbar.
   Click the **Settings** icon, then select **Two-Factor Authentication** to open the **User Two-Factor Authentication Actions** screen.

   {{< trueimage src="/images/SCALE/SystemSettings/UserTwoFactorAuthenticationActionsScreen.png" alt="User Two-Factor Authentication Actions Screen" id="User Two-Factor Authentication Actions Screen" >}}

   Click **Configure 2FA Secret** to view the QR code.

   {{< hint type="info">}}
   You can configure two-factor authentication and get the QR code for an authenticator app for the logged-in user at any time, but you must configure global two-factor authentication to enable it.
   {{< /hint >}}
   
   When using Google Authenticator, set **Interval** to **30** or the authenticator code might not function when logging in.

3. Click **Configure 2FA Secret** to open the **User Two-Factor Authentication Actions** screen where you scan the QR code using Google Authenticator.
   To generate a new QR code click **Renew 2FA Secret**.

   After scanning the code click **CLOSE** to close the dialog on the **Two-Factor Authentication** screen.

Accounts that are already configured with individual 2FA are not prompted for 2FA login codes until **Global 2FA** is enabled.
When **Global 2FA** is enabled, user accounts without 2FA settings configured see the **Two-Factor Authentication** screen on their next login to configure and enable 2FA authentication for that account.

### Disabling or Bypassing 2FA
Go to **System > Advanced Settings**, scroll down to the **Global Two Factor Authentication** widget, and click **Config**. Clear the **Enable Two-Factor Authentication Globally** checkbox and click **Save**.

### Reactivating 2FA
If you want to enable 2FA again, go to **System > Advanced Settings**, scroll down to the **Global Two Factor Authentication** widget, and click **Config**.

Check **Enable Two Factor Authentication Globally**, then click **Save**.
To change the system-generated **Secret**, click on the **Settings** icon on the top toolbar and select **Two-Factor Authentication**. 
Click **Renew 2FA Secret**.

## Using 2FA to Log in to TrueNAS
Enabling 2FA changes the login process for both the TrueNAS web interface and SSH logins.

### Logging In Using the Web Interface
The login screen adds another field for the randomized authenticator code. If this field is not immediately visible, try refreshing the browser.

Enter the code from the mobile device (without the space) in the login window and use the admin username and password.

{{< trueimage src="/images/SCALE/Login/2faSigninSplashScreen.png" alt="2FA Signin Splash Screen" id="2FA Splash Screen" >}}

If you wait too long, a new number code displays in Google Authenticator so you can retry.

### Logging In Using SSH
1. Confirm that you set **Enable Two-Factor Auth for SSH** in **System > Advanced > Global Two Factor Authentication**.

2. Go to **Credentials > Users** and edit the desired user account. Set **SSH password login enabled**, then click **Save**.

3. Go to **System Settings > Services** and click the **SSH** toggle. Wait for the service status to show that it is running.

4. Open the Google Authentication app on your mobile device.

5. Open a terminal (such as Windows Shell) and SSH into the system using either the host name or IP address, the administrator account user name and password, and the 2FA code.
