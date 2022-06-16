---
title: Email Screens
weight: 40
tags:
- scaleemail
---


The **Email** screens lets you set up a system email address using one of two options to set up email. Select either an **SMTP** or **GMail OAuth** setup. The screen changes based on the selected radio button. **Gmail OAutH** is the default screen and option.

## Email GMail OAuth Screen
The default **GMail OAuth** screen display changes after you select **Login In To GMail** and complete the authentication process for Gmail. 

![AlertEmailScreen](/images/SCALE/22.02/AlertEmailScreen.png "Alert Email Screen")

The **Send Test Mail** button generates a test email to confirm the system email works correctly.

## Email SMTP Screen

![AlertEmailSMTPScreen](/images/SCALE/22.02/AlertEmailSMTPScreen.png "Alert Email SMTP Screen")

| Setting | Description |
|---------|-------------|
| **From Email** | The user account Email address to use for the envelope From email address. You must configure the user account email first in **Accounts > Users > Edit**. |
| **From Name** | The friendly name to show in front of the sending email address. Example: *Storage System 01<it@example.com>* |
| **Outgoing Mail Server** | Host name or IP address of SMTP server to use for sending this email. |
| **Mail Server Port** | MTP port number. Typically 25,465 (secure SMTP), or 587 (submission). |
| **Security** | Select the securty option from the dropdown list. Options are **Plain (No Encryption)**, **SSL (Implicit TLS)**, or **TLS (STARTTLS)**. See [email encryption](https://www.fastmail.com/help/technical/ssltlsstarttls.html) for more information on types. |
| **SMTP Authentication** | Select to enable [SMTP AUTH](https://en.wikipedia.org/wiki/SMTP_Authentication) using PLAIN SASL. Requires a valid user name and password. |


