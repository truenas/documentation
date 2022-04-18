---
title: "System Email"
weight: 15
---

{{< toc >}}

An automatic script sends a nightly email to the administrator (*root*) account containing important information such as the health of the disks.
Alert events are also emailed to the root user account.
Configure the system to send these emails to the administrator’s remote email account for fast awareness and resolution of any critical issues.

{{< hint info >}}
[Scrub Task]({{< relref "ScrubTasksSCALE.md" >}}) issues and [S.M.A.R.T. reports]({{< relref "SMARTTestsSCALE.md" >}}) are mailed separately to the address configured in those services.
{{< /hint >}}

## TrueNAS Root Email Address

Before configuring anything else, set the *root* account email address.
Go to **Credentials > Local Users**, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and **Edit** for the *root* user.
In the **Email** field, enter a remote email address that the system administrator regularly monitors (like *admin@example.com*) and click **Save**.

## Email Options

For the next step, you must go to the **System Email** screen.

Click the **Alerts** <span class="iconify" data-icon="mdi:bell"></span> icon in the top right of the UI, then click the gear <span class="iconify" data-icon="mdi:cog"></span> icon and select **Email**.

Changing the *Send Mail Method* shows different options:

{{< tabs "Send Mail Methods" >}}
{{< tab "SMTP" >}}
![AlertEmailSMTP](/images/SCALE/AlertEmailSMTP.png "Email General Options")

| Name | Description |
|------|-------------|
| From Email | The user account Email address to use for the envelope From email address. The user account Email in Accounts > Users > Edit must be configured first. |
| From Name | The friendly name to show in front of the sending email address. Example: *Storage System 01<it@example.com>* |
| Outgoing Mail Server | Hostname or IP address of SMTP server used for sending email. |
| Mail Server Port | SMTP port number. Typically `25`/`465` (secure SMTP), or `587` (submission). |
| Security | Choose an encryption type. Choices are *Plain (No Encryption)*, *SSL (Implicit TLS)*, or *TLS (STARTTLS)*. |
| SMTP Authentication | Set when the SMTP server uses authentication credentials. Shows additional credentials options. |
{{< /tab >}}
{{< tab "GMail OAuth" >}}

To use Gmail OAuth, select the option and click **Log In To GMail**.

![AlertEmailGMail](/images/SCALE/AlertEmailGmail.png "Email General Options")

Log into a GMail account as normal for TrueNAS to autoconfigure the connection to GMail.
{{< /tab >}}
{{< /tabs >}}

Click **Send Test Mail** to verify the configured email settings are working.
If the test email fails, verify that the root user **Email** field is correctly configured by clicking the **Edit** button for the *root* account in **Credentials > Local Users**.
