---
title: "2FA (Two-Factor Authentication)"
weight: 190
---

{{< toc >}}

For increased security, two-factor authentication is highly desirable.
TrueNAS offers Two-Factor Authentication (2FA) to ensure that a compromised administrator (*root*) password cannot be used by itself to gain access to the administrator interface.
In order to utilize 2FA a mobile device that has Google Authenticator installed is required.

{{< expand "What is 2FA and why would I want to enable it?" "v" >}}
Two-Factor Authentication (2FA) is an extra layer of security that is added to your system to prevent someone from logging in, even if they have your password. This extra security measure requires you to verify your identity using a randomized 6-digit code that is re-generated every 30 seconds, unless the interval is modified, to use when you to log in.

### Benefits

* 2FA provides an extra layer of security: By requiring a second form of identification 2FA decreases the probability that an a unauthorized user can gain access to the system.
  An unauthorized user won’t have the second element required to authenticate their login.

* Increase productivity and flexibility: As the workforce becomes more mobile, employees can securely access systems from virtually any device or location-without putting sensitive information at risk.

### Drawbacks

* An app is required to access the generated 2FA Code.

* If the the 2FA code isn't working, or there is no access to the 2FA Password, the system is inaccessable through the UI and SSH (if that option has been set).
  {{< hint info >}}
  When the mobile device with the authenication app isn't available, access the system CLI to bypass 2FA. This requires administrative IPMI or physical access to the system.
  To unlock 2FA in the cli, enter:  `midclt call auth.twofactor.update '{ "enabled":false }'`
  {{< /hint >}}
{{< /expand >}}

## 2FA Options

![System2FAEnable](/images/CORE/12.0/System2FAEnable.png "Enabling 2FA")

{{< hint warning >}}
Two-factor authentication is time-based and requires that the system time is set correctly.
{{< /hint >}}

{{< include file="static/includes/System2FAFields.md.part" markdown="true" >}}

## Enabling Two-Factor Authentication.

{{< hint danger >}}
Set up a second 2FA device as a backup before proceeding.
{{< /hint >}}

* Go to **System > 2FA**.

* Click *Enable Two Factor Authentication* and *Save*.

![System2FAOptionsNoSSH](/images/CORE/12.0/System2FAOptionsNoSSH.png "2FA Options: No SSH")

* Click *Confirm*.

* Click *Show QR*.

![System2FAQRCode](/images/CORE/12.0/System2FAQRCode.png "2FA: QR Code")

* On the mobile device start Google Authentication and scan the QR code.

## Using 2FA to Log in to TrueNAS

Enabling 2FA changes the log in process for both the TrueNAS web interface and SSH logins:

{{< tabs "2FA Logins" >}}
{{< tab "Web Interface" >}}
* Log out of TrueNAS and back in.
* Enter the code on the mobile device (complete without the space) in the login window with the *root* *Username* and *Password*.

![Login2FA](/images/CORE/12.0/Login2FA.png "2FA Login")
{{< /tab >}}
{{< tab "SSH Logins" >}}

* Confirm that *Enable Two-Factor Auth for SSH* is set in **System > 2FA**.
* Go to **Services > SSH** and edit the service.
  Set *Log in with root password* and *SAVE*.
  Toggle the **SSH** service and wait for the status to show that it is **Running**.
* Open the Google Authentication app on your mobile device.
* Open a Terminal window and SSH into the system using the system hostname or IP address, *root* account username and password, and the 2FA code from the mobile device.
  
  ![SSHConnect2FA](/images/CORE/SSHConnect2FA.png "SSH Connect 2FA")
{{< /tab >}}
{{< /tabs >}}
