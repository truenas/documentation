---
title: "Using Two-Factor Authentication"
description: "This article describes how the use two-factor authentication on TrueNAS CORE."
weight: 180
aliases:
  - /core/system/2fa
tags:
- core2fa
- coretwofactorauthentication
---

{{< toc >}}

We recommend two-factor authentication (2FA) for increased security.
TrueNAS offers 2FA to ensure that a compromised administrator (*root*) password alone cannot grant access to the administrator interface.
To utilize 2FA, you need a mobile device with Google Authenticator installed.

{{< expand "What is 2FA, and why would I want to enable it?" "v" >}}
Two-factor authentication (2FA) is an extra layer of security that prevents someone from logging in, even if they have your password. This extra security measure requires you to verify your identity using a randomized 6-digit code that regenerates every 30 seconds (unless modified).

## Setting Up Two-Factor Authentication.

{{< hint danger >}}
Set up a second 2FA device as a backup before proceeding.
{{< /hint >}}

Go to **System > 2FA** and click **ENABLE TWO-FACTOR AUTHENTICATION**. Then, click **CONFIRM**.

![System2FAOptionsNoSSH](/images/CORE/12.0/System2FAOptionsNoSSH.png "2FA Options: No SSH")

Click **SHOW QR**, then scan it using Google Authenticator on the mobile device.

![System2FAQRCode](/images/CORE/12.0/System2FAQRCode.png "2FA: QR Code")

## Using 2FA to Log In to TrueNAS

Enabling 2FA changes the login process for both the TrueNAS web interface and SSH logins:

### Web UI Login

![Login2FA](/images/CORE/12.0/Login2FA.png "2FA Login")

The login screen has another field for the randomized authenticator code. If this field isn't immediately visible, refresh the browser.

Enter the code from the mobile device (complete without the space) in the login window with the *root* username and password.

### SSH Login

![SSHConnect2FA](/images/CORE/SSHConnect2FA.png "SSH Connect 2FA")

Set **Enable Two-Factor Auth for SSH** in **System > 2FA**, then go to **Services > SSH** and click <span class="iconify" data-icon="mdi:pencil"></span>.

Set **Log in as Root with Password** and click **SAVE**. Toggle the **SSH** service and wait for the status to show that it is **RUNNING**.

Open a Command Prompt or Terminal and SSH into TrueNAS using the system hostname or IP address, *root* account username and password, and the 2FA code from the mobile device.
{{< /expand >}}

{{< taglist tag="core2fa" limit="10" >}}
