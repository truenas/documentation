---
title: "Email Screens"
description: "This article provides information on the email configuration screens for SMTP and GMail OAuth."
weight: 40
tags:
- scaleemail
- scalealerts
---


{{< toc >}}


The **Email** screens lets you set up a system email address using one of two options to set up email. Select either **SMTP** or **GMail OAuth**. 
The configuration screen settings change based on the selected radio button. 

## Email GMail OAuth Screens
The default **GMail OAuth** screen display changes after you select **Login In To GMail** and complete the authentication process for Gmail. 

![EmailGmailOAuthConfigurationScreen1](/images/SCALE/22.12/EmailGmailOAuthConfigurationScreen1.png "Email Gmail OAuth Screen")

The **Send Test Mail** button generates a test email to confirm the system email works correctly.

After setting up Gmail OAuth authentication, the screen displays **Gmail credentials have been applied** and the login button changes to **Log In To Gmail Again**.

![EmailGmailOAuthConfigurationScree2](/images/SCALE/22.12/EmailGmailOAuthConfigurationScreen2.png "Email Gmail OAuth Saved")

**Save** stores the email configuration but does not close the **Email** screen. Select an option from the main navigation panel on the left side of the screen to move away from the **Email** screen.

## Email SMTP Screen

![EmailSMTPConfigurationScreen](/images/SCALE/22.12/EmailSMTPConfigurationScreen.png "Email SMTP Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **From Email** | The user account email address to use for the envelope From email address. You must first [configure the user account email]({{< relref "SettingUpSystemEmail.md" >}}) in **Credentials > Local Users**. |
| **From Name** | The friendly name to show in front of the sending email address. Example: `StorageSystem01it@example.com` |
| **Outgoing Mail Server** | Host name or IP address of SMTP server to use for sending this email. |
| **Mail Server Port** | MTP port number. Typically 25, or use 465 (secure SMTP) or 587 (submission). |
| **Security** | Select the security option from the dropdown list. Options are **Plain (No Encryption)**, **SSL (Implicit TLS)**, or **TLS (STARTTLS)**. See [email encryption](https://www.fastmail.com/help/technical/ssltlsstarttls.html) for more information on types. |
| **SMTP Authentication** | Select to enable [SMTP AUTH](https://en.wikipedia.org/wiki/SMTP_Authentication) using PLAIN SASL. Requires a valid user name and password. |
{{< /truetable >}}

{{< taglist tag="scaleemail" limit="10" >}}
{{< taglist tag="scalealerts" limit="10" title="Related Alert Articles" >}}