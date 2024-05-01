---
title: "Email"
description: "Describes the Email screen and settings on TrueNAS CORE."
weight: 50
tags:
- email
---

## General Options

{{< include file="/static/includes/SystemEmailFields.md" >}}

## Send Mail Method

### SMTP

![System Email SMTP Options](/images/CORE/System/SystemEmailSMTPOptions.png "System Email SMTP Options")

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Outgoing Mail Server** | Hostname or IP address of SMTP server used for sending email. |
| **Mail Server Port** | SMTP port number. Typically 25/465 (secure SMTP), or 587 (submission). |
| **Security** | Choose an encryption type. Choices are *Plain (No Encryption)*, *SSL (Implicit TLS)*, or *TLS (STARTTLS)*. |
| **SMTP Authentication** | Set when the SMTP server uses authentication credentials. Shows additional credentials options. |
| **Username** | Displays after selecing **SMTP Authentication**. The user name for the sending email account, typically the full email address. |
| **Password** | Displays after selecting **SMTP Authentication**. The password for the sending email account. |
{{< /truetable >}}

### GMail OAuth

![SystemEmailGMailOAuth](/images/CORE/System/SystemEmailGMailOAuth.png "GMail OAuth Options")

{{< truetable >}}
| Name | Description |
|------|-------------|
| **LOG IN TO GMAIL** | Login to Gmail using OAuth. |
{{< /truetable >}}
