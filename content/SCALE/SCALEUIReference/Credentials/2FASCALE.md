---
title: "2FA (Two-Factor Authentication)"
weight: 60
---

{{< toc >}}

Two-factor authentication (2FA) is great for increasing security.

TrueNAS offers 2FA to ensure that entities cannot use a compromised administrator *root* password to access the administrator interface.

You need a mobile device with the current time and date that has Google Authenticator installed to use 2FA.

{{< hint warning >}}
Two-Factor authentication is time based and requires that the system is set correctly.
Making sure NTP is functional before enabling is strongly recommended!
{{< /hint >}}

{{< expand "What is 2FA and why should I enable it?" "v" >}}
2FA adds an extra layer of security to your system to prevent someone from logging in, even if they have your password. 2FA requires you to verify your identity using a randomized 6-digit code that regenerates every 30 seconds (unless modified) to use when you log in.

### Benefits

Unauthorized users can't log in since they won't have the randomized 6-digit code.

Authorized employees can securely access systems from any device or location without jeopardizing sensitive information.

Internet access on the TrueNAS system is not required to use 2FA.

### Drawbacks

Requires an app to generate 2FA code.

If the 2FA code isn't working or users can't get it, the system is inaccessible through the UI and SSH (if enabled).

{{< hint info >}}
If the device with the 2FA app isn't available, you can use the system CLI to bypass 2FA with administrative IPMI or by physically accessing the system. 

To unlock 2FA in the CLI, enter:  `midclt call auth.twofactor.update '{ "enabled":false }'`
{{< /hint >}}
{{< /expand >}}


## 2FA Options

![2FAEnableSCALE](/images/SCALE/2FAEnableSCALE.png "Enabling 2FA")

{{< hint warning >}}
Two-factor authentication is time-based and requires that you correctly set the system time.
{{< /hint >}}

{{< include file="static/includes/Reference/System2FAFields.md.part" markdown="true" >}}

## Enabling Two-Factor Authentication.

{{< expand "Video Tutorial" "v" >}}
This short video demonstrates adding 2FA. 
{{< embed-video name="scaleangelfish2fa" >}}
{{< /expand >}}

{{< hint danger >}}
Set up a second 2FA device as a backup before proceeding.
{{< /hint >}}

1 Go to **Credentials > 2FA**.

2 Click **Enable Two Factor Authentication**, then click **Confirm**.

 ![2FAOptionsSCALE](/images/SCALE/2FAOptionsSCALE.png "2FA Options")

3 Click **Show QR**.

 ![2FAQRSCALE](/images/SCALE/2FAQRSCALE.png "2FA: QR Code")

4 Start Google Authenticator on the mobile device and scan the QR code.

## Using 2FA to Log in to TrueNAS

Enabling 2FA changes the login process for both the TrueNAS web interface and SSH logins:

{{< tabs "2FA Logins" >}}
{{< tab "Web Interface" >}}
The login screen adds another field for the randomized authenticator code. If this field isn't immediately visible, try refreshing the browser.

Enter the code from the mobile device (without the space) in the login window with the *root* *Username* and *Password*.

![2FALoginSCALE](/images/SCALE/2FALoginSCALE.png "2FA Login")
{{< /tab >}}
{{< tab "SSH Logins" >}}

1 Confirm that you set **Enable Two-Factor Auth for SSH** in **Credentials > 2FA**.
2 Go to **System Settings > Services** and edit the **SSH** service.
  Set **Log in as Root with Password**, then click **Save**.
  Toggle the **SSH** service and wait for the status to show that it is running.
3 Open the Google Authentication app on your mobile device.
4 Open a terminal and SSH into the system using its hostname or IP address, *root* account username and password, and the 2FA code.
  
  ![2FASSHSCALE](/images/SCALE/2FASSHSCALE.png "2FA SSH Connection")
{{< /tab >}}
{{< /tabs >}}
