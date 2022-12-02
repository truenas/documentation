---
title: "Two-Factor Auth Screen"
description: "This article provides information on two-factor authentication screen settings."
weight: 60
alias:
tags:
 - scale2fa
 - scalecredentials
---

{{< toc >}}

The **Two-Factor Auth** screen displays settings to configure and enable two-factor authentication (2FA) on TrueNAS SCALE.

{{< hint warning >}}
Two-factor authentication is time-based and requires a correct system time setting.
{{< /hint >}}
### User Settings

![2FAUserSettings](/images/SCALE/2fabluefinscreen.png "2FA User Settings")

| Name | Description |
|------|-------------|
| **One Time Password (OTP) Digits** | Select the number of digits for the length of the one-time password (OTP). The default is **6**, which is the standard OTP length for Google OTPs. Check your app/device settings before selecting a value. |
| **Interval** | Enter the number of seconds for the lifespan of each OTP. Default is **30** seconds. The minimum is 5 seconds. |
| **Window** | Enter the number of valid passwords. Extends password validity beyond the **Interval** setting. For example, *1* means that one password before and after the current password is valid, leaving three valid passwords. Extending the window is useful in high-latency situations. |
| **Enable Two-Factor Auth for SSH** | Select to enable 2FA for system SSH access. Leave this disabled until you complete a successful test of 2FA with the UI. |

### System Generated Settings

| Name | Description |
|------|-------------|
| **Secret (Read-only)** | TrueNAS creates the secret and uses it to generate OTPs when you first enable 2FA. |
| **Provisioning URI (includes Secret - Read-only)** | TrueNAS created the URI used to provision an OTP. TrueNAS encodes the URI (which contains the secret) in a QR Code. To set up an OTP app like Google Authenticator, use the app to scan the QR code or enter the secret manually into the app. TrueNAS produces the URI when you first activate 2FA. |
  
**Enable Two Factor Authentication** opens the **Enable Two-Factor Authentication** confirmation dialog. Click **Confirm** to enable 2F. 

![Enable2FAConfirmationDialog](/images/SCALE/22.02/Enable2FAConfirmationDialog.png "Enable 2FA")

The enable button changes to **Disable Two-Factor Authentication**. 

**Show QR** opens a QR code dialog. Scan with a mobile device that has the Google Authenticator app.

![2FAQRCodeDialog](/images/SCALE/22.02/2FAQRCodeDialog.png "2FA QR Code")

**Renew Secret** changes the system-generated **Secret** and **Provisioning URI** values. 

![2FARenewSecretDialog](/images/SCALE/22.02/2FARenewSecretDialog.png "2FA Renew Secret")

The <span class="material-icons">visibility_off</span> icon in the **Secret** and **Provisioning URI** fields displays the alphanumeric string. The <span class="material-icons">visibility</span> converts the alphanumeric characters back to asterisks.

{{< taglist tag="scale2fa" limit="10" >}}
