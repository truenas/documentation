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

To use 2FA, you need a mobile device (or desktop application) with the correct time and date, and a TOTP-compatible authenticator app installed.

TrueNAS uses the TOTP (Time-based One-Time Password) standard (RFC 6238), which is compatible with most authenticator apps. Popular options include:

- **Microsoft Authenticator** (iOS, Android)
- **Google Authenticator** (iOS, Android)
- **Authy** (iOS, Android, desktop)
- **Bitwarden** (cross-platform, open source)
- **1Password** (cross-platform)

Choose an authenticator app based on your platform and preferences. All TOTP-compatible apps work with TrueNAS.

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

If the 2FA code is not working or users cannot get it, the system is inaccessible through the UI and SSH (if enabled).
You can bypass or [unlock 2FA](#disabling-global-2fa) using the CLI.

## Enabling Global 2FA

{{< hint type=warning >}}
Set up a second 2FA device as a backup before proceeding.
{{< /hint >}}

Before you begin, install a TOTP-compatible authenticator app on your mobile device or desktop computer. See [About TrueNAS 2FA](#about-truenas-2fa) for recommended options.

1. Go to **System > Advanced Settings**, scroll down to the **Global Two Factor Authentication** widget, and click **Configure**.

   {{< trueimage src="/images/SCALE/SystemSettings/GlobalTwoFactorAuthenticationWidget.png" alt="Global TwoFactor Authentication Widget" id="Global Two Factor Authentication Settings Widget" >}}

2. Select **Enable Two Factor Authentication Globally**, then click **Save**.

   {{< trueimage src="/images/SCALE/SystemSettings/Enable2FAGlobally.png" alt="Enable2FAGlobally" id="Check Enable Two Factor Authentication Globally" >}}

   If you want to enable two-factor authentication for SSH logins, select **Enable Two Factor Authentication for SSH** before you click **Save**.
   SSH 2FA only applies to users who configured a 2FA secret and are using password-based authentication.

   {{< hint type=tip >}}
   The **Window** setting extends the validity of authentication codes to include previously generated codes. This can be helpful in high-latency situations where there can be delays between code generation and entry. The default setting works for most environments - only adjust this if users experience authentication issues due to network delays.
   {{< /hint >}}

After enabling Global 2FA, the system prompts users to set up their individual 2FA configuration:

- Accounts that are already configured with individual 2FA are not prompted for 2FA login codes until **Global 2FA** is enabled.
- When **Global 2FA** is enabled, user accounts without 2FA settings configured are prompted with the **Two-Factor Authentication** screen on their next login to set up 2FA authentication for that account.

See [Setting Up Individual 2FA](#setting-up-individual-2fa) for detailed instructions on configuring 2FA for individual user accounts.

### Disabling Global 2FA

Go to **System > Advanced Settings**, scroll down to the **Global Two Factor Authentication** widget, and click **Configure**. Clear the **Enable Two Factor Authentication Globally** checkbox and click **Save**.

### Reactivating Global 2FA

If you want to enable 2FA again, go to **System > Advanced Settings**, scroll down to the **Global Two Factor Authentication** widget, and click **Configure**.

Select **Enable Two Factor Authentication Globally**, then click **Save**.
To change the system-generated **Secret**, go to **Credentials > Two Factor Auth** and click **Renew 2FA Secret**.

## Setting Up Individual 2FA

When administrators enable Global 2FA, users without 2FA configured are prompted to set it up on their next login. Users can also set up 2FA at any time by going to **Credentials > Two Factor Auth**, or by clicking the **Settings** icon on the top toolbar and selecting **Two-Factor Authentication** (this option only appears when Global 2FA is enabled).

{{< hint type=warning >}}
Set up a second 2FA device as a backup before proceeding.
{{< /hint >}}

Before you begin, install a TOTP-compatible authenticator app on your mobile device or desktop computer. See [About TrueNAS 2FA](#about-truenas-2fa) for recommended options.

**To set up individual 2FA:**

1. Go to **Credentials > Two Factor Auth** to open the **Two Factor Auth** screen.

   {{< trueimage src="/images/SCALE/SystemSettings/UserTwoFactorAuthenticationActionsScreen.png" alt="Two Factor Auth Screen" id="Two Factor Auth Screen" >}}

   {{< hint type="info">}}
   If Global 2FA is not enabled, the screen displays a warning message. You can still configure your personal 2FA settings, but they do not take effect until a system administrator enables Global 2FA.
   {{< /hint >}}

2. Click **Configure 2FA Secret** to view the QR code and setup options. The screen displays the unique key with a copy to clipboard button so you can configure 2FA using a non-camera method if necessary.

   {{< trueimage src="/images/SCALE/SystemSettings/SetUpTwoFactorAuthenticationScreen.png" alt="Set Up Two-Factor Authentication Screen" id="Set Up Two-Factor Authentication Screen" >}}

3. Scan the QR code using your authenticator app or manually enter the unique key.
   To generate a new QR code, click **Renew 2FA Secret**.

Your 2FA is now configured. You need to enter codes from your authenticator app when logging in.

If you prefer not to set up 2FA at this time, see [Skipping 2FA Setup](#skipping-2fa-setup).

### Skipping 2FA Setup

When administrators enable **Global 2FA**, users without 2FA configured are prompted to set it up on their next login. However, individual setup is optional and can be skipped. See [Setting Up Individual 2FA](#setting-up-individual-2fa) for the full setup process.

{{< hint type=note >}}
While 2FA significantly enhances security and is strongly recommended, skipping the initial setup does not prevent access to the system. Users can configure 2FA later by going to **Credentials > Two Factor Auth**.
{{< /hint >}}

The setup prompt appears once per login session. If you skip setup, you are prompted again on your next login until you configure 2FA.

### Removing Individual 2FA Configuration

Users can remove their personal 2FA configuration without disabling global 2FA:

1. Go to **Credentials > Two Factor Auth**.
2. Click **Unset 2FA Secret**.
3. Confirm the removal when prompted.

{{< hint type=warning >}}
Removing 2FA configuration reduces account security. Only remove 2FA if you plan to reconfigure it with a different authenticator device, or if you no longer have access to your current authenticator.
{{< /hint >}}

After removing your 2FA configuration:

- If **Global 2FA** is still enabled, you are prompted to set up 2FA again on your next login
- You can skip this prompt if needed using the **Skip Setup** button
- 2FA configurations for other users remain unaffected

### Administrator Clearing User 2FA

Administrators can clear 2FA for any user without needing to log in as that user. This is useful when:

- A user has lost access to their authenticator device
- A user is locked out due to 2FA issues
- Troubleshooting login problems for users

To clear 2FA for another user:

1. Go to **Credentials > Users**
2. Select the user whose 2FA needs to be cleared
3. Click **Clear Two-Factor Authentication** on the **Access** widget
4. Confirm the action in the dialog

After clearing, the user can log in without 2FA. If Global 2FA is still enabled, they are prompted to reconfigure 2FA on their next login.

For detailed step-by-step instructions, see [Managing Users - Clearing Two-Factor Authentication for a User]({{< ref "ManageUsers#clearing-two-factor-authentication-for-a-user" >}}).

{{< hint type=tip >}}
The **Clear Two-Factor Authentication** button only appears for users who have 2FA configured. If you do not see the button, the user has not set up 2FA.
{{< /hint >}}

## Using 2FA to Log in to TrueNAS

Enabling 2FA changes the login process for both the TrueNAS web interface and SSH logins.

### Logging In Using the Web Interface

The login screen adds another field for the randomized authenticator code. If this field is not immediately visible, try refreshing the browser.

Enter the code from the mobile device (without the space) in the login window and use the admin username and password.

{{< trueimage src="/images/SCALE/Login/2faSigninSplashScreen.png" alt="2FA Signin Splash Screen" id="2FA Splash Screen" >}}

TOTP codes regenerate every 30 seconds (by default). If a code expires while you are entering it, wait for your authenticator app to display a new code and retry.

### Logging In Using SSH

1. Confirm that you set **Enable Two Factor Authentication for SSH** in **System > Advanced Settings > Global Two Factor Authentication**.

2. Ensure the user configured a 2FA secret (see [Enabling 2FA](#enabling-2fa) above).

3. Go to **Credentials > Users** and edit the desired user account. Select **SSH password login enabled**, then click **Save**.

4. Go to **System Settings > Services** and click the **SSH** <span class="iconify" data-icon="mdi:play-circle" title="Start Service">Start Service</span> button to start the service. Wait for the service status to show that it is running.

4. Open your authenticator app on your mobile device or desktop.

6. Open a terminal (such as Windows Shell) and SSH into the system using either the host name or IP address, the administrator account user name and password, and the 2FA code.

Users without a configured 2FA secret can use password-based SSH without providing a 2FA code, even when global SSH 2FA is enabled.
