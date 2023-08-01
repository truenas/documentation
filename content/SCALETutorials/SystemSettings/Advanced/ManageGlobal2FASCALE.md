---
title: "Managing Global 2FA (Two-Factor Authentication)"
description: "Provides information on SCALE two-factor authentication, setting it up, and logging in with it enabled."
weight: 70
alias:  
- /scale/scaletutorials/credentials/2fascale
tags:
- scale2fa
- scalessh
- scalecredentials
---

{{< toc >}}

Global Two-factor authentication (2FA) is great for increasing security.

TrueNAS offers global 2FA to ensure that entities cannot use a compromised administrator root password to access the administrator interface.

## About SCALE 2FA

To use 2FA, you need a mobile device with the current time and date, and an authenticator app installed. We recommend Google Authenticator.
You can use other authenticator applications, but you must confirm the settings and QR codes generated in TrueNAS are compatible with your particular app before permanently activating 2FA.

{{< hint type=important >}}
Two-factor authentication is time-based and requires a correct system time setting. 
Ensure Network Time Protocol (NTP) is functional before enabling is strongly recommended!
{{< /hint >}}

{{< expand "What is 2FA and why should I enable it?" "v" >}}
2FA adds an extra layer of security to your system to prevent someone from logging in, even if they have your password. 
2FA requires you to verify your identity using a randomized 6-digit code that regenerates every 30 seconds (unless modified) to use when you log in.
{{< /expand >}}
### Benefits of 2FA

Unauthorized users cannot log in since they do not have the randomized 6-digit code.

Authorized employees can securely access systems from any device or location without jeopardizing sensitive information.

Internet access on the TrueNAS system is not required to use 2FA.

### Drawbacks of 2FA

2FA requires an app to generate the 2FA code.

If the 2FA code is not working or users cannot get it, the system is inaccessible through the UI and SSH (if enabled). You can bypass or [unlock 2FA](#disabling-or-bypassing-2fa) using the CLI.

## Enabling 2FA

{{< hint type=warning >}}
Set up a second 2FA device as a backup before proceeding.
{{< /hint >}}

Before you begin, download Google Authenticator to your mobile device.

1. Go to **System Settings > Advanced**, scroll down to the **Global Two Factor Authentication** widget, and click **Config**.
   
   {{< trueimage src="/images/SCALE/23.10/GlobalTwoFactorAuthenticationWidget.png" alt="Global TwoFactor Authentication Widget" id="1 - Global Two Factor Authentication Settings Widget." >}}

2. Check **Enable Two Factor Authentication Globally**, then click **Save**.
  
   {{< trueimage src="/images/SCALE/23.10/Enable2FAGlobally.png" alt="Enable2FAGlobally" id="2: Check Enable Two Factor Authentication Globally." >}}

   If you want to enable two-factor authentication for SSH logins, select **Enable Two-Factor Auth for SSH** before you click **Save**.

   TrueNAS will take you to the **Two-Factor Authentication** screen to finish 2FA setup.

   {{< trueimage src="/images/SCALE/23.10/2FAScreenEnabled.png" alt="2FAScreenEnabled" id="3: 2FA Screen with Enabled Message." >}}

3. Click **Show QR** and scan the QR code using Google Authenticator.
   
   After scanning the code click **CLOSE** to close the dialog on the **Two-Factor Authentication** screen.

### Disabling or Bypassing 2FA

Go to **System Settings > Advanced**, scroll down to the **Global Two Factor Authentication** widget, and click **Config**. Uncheck **Enable Two-Factor Authentication Globally** and click **Save**.

{{< hint type=note >}}
If the device with the 2FA app is not available, you can use the system CLI to bypass 2FA with administrative IPMI or by physically accessing the system. 

To unlock 2FA in the SCALE CLI, enter:  `auth two_factor update enabled=false'`
{{< /hint >}}

### Reactivating 2FA

If you want to enable 2FA again, go to **System Settings > Advanced**, scroll down to the **Global Two Factor Authentication** widget, and click **Config**.

Check **Enable Two Factor Authentication Globally**, then click **Save**.

To change the system-generated **Secret**, go to **Credentials > 2FA** and click **Renew 2FA Secret**. 

## Using 2FA to Log in to TrueNAS

Enabling 2FA changes the login process for both the TrueNAS web interface and SSH logins.

### Logging In Using the Web Interface
The login screen adds another field for the randomized authenticator code. If this field is not immediately visible, try refreshing the browser.

Enter the code from the mobile device (without the space) in the login window and use the root User name and password. 

{{< trueimage src="/images/SCALE/23.10/2faSigninSplashScreen.png" alt="2FA Signin Splash Screen" id="4: 2FA Splash Screen." >}}

If you wait too long, a new number code displays in Google Authenticator so you can retry.

### Logging In Using SSH

1. Confirm that you set **Enable Two-Factor Auth for SSH** in **System Settings > Advenced > Global Two Factor Authentication**.

2. Go to **System Settings > Services** and edit the **SSH** service.

   a. Set **Log in as Admin with Password**, then click **Save**.

   b. Click the **SSH** toggle and wait for the service status to show that it is running.

3.  Open the Google Authentication app on your mobile device.

4. Open a terminal (such as Windows Shell) and SSH into the system using either the host name or IP address, the administrator account user name and password, and the 2FA code.
   

{{< taglist tag="scale2fa" limit="10" >}}
