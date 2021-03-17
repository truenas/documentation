---
title: "Email"
weight: 55
---

{{< toc >}}

An automatic script sends a nightly email to the administrator (*root*) account containing important information such as the health of the disks.
Alert events are also emailed to the root user account.
Configure the system to send these emails to the administrator’s remote email account for fast awareness and resolution of any critical issues.

{{< hint info >}}
[Scrub Task]({{< relref "ScrubTasks.md" >}}) issues and [S.M.A.R.T. reports]({{< relref "SMARTTests.md" >}}) are mailed separately to the address configured in those services.
{{< /hint >}}

## TrueNAS Root Email Address

Before configuring anything else, set the *root* account email address.
Go to **Accounts > Users**, click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> (Options) and *Edit* for the `root` user.
In the *Email* field, enter a remote email address that is regularly monitored by the system administrator, like *admin@example.com* and click *SAVE*.

## Email Options

The remaining configuration is done from **System > Email**.

{{< include file="static/includes/SystemEmailFields.md.part" markdown="true" >}}

Changing the *Send Mail Method* shows different options:

{{< tabs "Send Mail Methods" >}}
{{< tab "SMTP" >}}
![System Email SMTP Options](/images/CORE/12.0/SystemEmailSMTPOptions.png "System Email SMTP Options")

| Name | Description |
|------|-------------|
| Outgoing Mail Server | Hostname or IP address of SMTP server used for sending email. |
| Mail Server Port | SMTP port number. Typically `25`/`465` (secure SMTP), or `587` (submission). |
| Security | Choose an encryption type. Choices are *Plain (No Encryption)*, *SSL (Implicit TLS)*, or *TLS (STARTTLS)*. |
| SMTP Authentication | Set when the SMTP server uses authentication credentials. Shows additional credentials options. |
| Username | Enter the SMTP username when the SMTP server requires authentication. |
| Password | Enter the SMTP account password if needed for authentication. Only plain text characters (7-bit ASCII) are allowed in passwords. UTF or composed characters are not allowed. |

{{< /tab >}}
{{< tab "GMail OAuth" >}}

To use Gmail OAuth, select the option and click **LOG IN TO GMAIL**.

![SystemEmailGMailOAuth](/images/CORE/12.0/SystemEmailGMailOAuth.png "GMail OAuth Options")

Log into a GMail account as normal for TrueNAS to autoconfigure the connection to GMail.
{{< /tab >}}
{{< /tabs >}}

Click *SEND TEST MAIL* to verify the configured email settings are working.
If the test email fails, double-check that the *Email* field of the root user is correctly configured by clicking the **Edit** button for the *root* account in **Accounts > Users**.
