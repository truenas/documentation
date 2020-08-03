---
title: "Configuring System Alerts"
description: "How to configure basic system alerts"
---

TrueNAS provides the benefit of customizing alerts and alert services.

## Alert Services

To add a new alert service, go to **System > Alert Services > ADD**.
Enter a name for the alert service and select the type.
Next, decide on the severity of the alert and select an alert *Level* from the drop-down.
Finally, enter the authentication information for the alert service.

You can test the service before saving the configuration.
After all information has been entered, click *SEND TEST ALERT* to ensure the alert service is working properly.

## Alert Settings

To modify the default system alerts, go to **System > Alert Settings**.
The alerts are grouped into sections based on type.
For example, alerts that are related to pools appear in the *Storage* alert section.

Each alert warning level and frequency can be changed.
To customize alert importance, use the *Warning Level* drop-down.
To adjust how often alert notifications are sent, use the *Frequency* drop-down.
Setting the *Frequency* to *NEVER* prevents that alert from being added to alert notifications, but the alert will still show in the web interface if it is triggered.

To configure where alert notifications are sent, use **Alert Services**.

## TrueNAS System Alerts

The alert system provides a visual warning when system conditions require administrative attention.
The alert icon in the upper right corner has a notification badge that displays the total number of unread alerts.

<img src="/images/TN-12.0-NTP-1.PNG">
<br><br>

## Alert Levels

Alert icons indicate notification, warning, critical, and one-shot critical alerts. Critical messages are also emailed to the root account. One-shot critical alerts must be dismissed by the user.

| Alert Level       | Icon |   |
|-------------------|------|---|
| Notification      | <i class="fa fa-info-circle" aria-hidden="true"></i>    |   |
| Warning           | <i class="fas fa-clock" aria-hidden="true"></i>  |   |
| Critical          | <i class="fa fa-exclamation-circle" aria-hidden="true"></i>    |   |
| One-shot Critical | <i class="fa fa-bell" aria-hidden="true"></i>   |   |

## Email

An automatic script sends a nightly email to the root user account containing important information such as the health of the disks. Alert events are also emailed to the root user account. Problems with Scrub Tasks are reported separately in an email sent at 03:00AM.

*Note*: S.M.A.R.T. reports are mailed separately to the address configured in that service.

The administrator typically does not read emails directly on the system. Instead, these emails are usually sent to an external email address where they can be read more conveniently. It is important to configure the system so it can send these emails to the administrator’s remote email account so they are aware of problems or status changes.

The first step is to set the remote address where emails will be sent. Go to **Accounts ➞ Users**, click <i class="fas fa-ellipsis-v"></i> (Options) and **Edit** for the root user. In the *Email* field, enter the email address on the remote system where email is to be sent, like `admin@example.com`. Click **SAVE** to save the settings.

Additional configuration is performed with **System ➞ Email**.

<img src="/images/TN-12.0-email.PNG">
<br><br>

| Setting              | Value                | Description                                                                                                                                                                  |
|----------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| From E-mail          | string               | The envelope From address shown in the email. This can be set to make filtering mail on the receiving system easier.                                                         |
| From Name            | string               | The friendly name to show in front of the sending email address.                                                                                                             |
| Outgoing Mail Server | string or IP address | Hostname or IP address of SMTP server used for sending this email.                                                                                                           |
| Mail Server Port     | integer              | SMTP port number. Typically 25, 465 (secure SMTP), or 587 (submission).                                                                                                      |
| Security             | drop-down menu       | Choose an encryption type. Choices are Plain (No Encryption), SSL (Implicit TLS), or TLS (STARTTLS).                                                                         |
| SMTP Authentication  | checkbox             | Enable or disable SMTP AUTH using PLAIN SASL. Setting this enables the required Username and optional Password fields.                                                       |
| Username             | string               | Enter the SMTP username when the SMTP server requires authentication.                                                                                                        |
| Password             | string               | Enter the SMTP account password if needed for authentication. Only plain text characters (7-bit ASCII) are allowed in passwords. UTF or composed characters are not allowed. |

## Email Configuration Settings

Click the **SEND TEST MAIL** button to verify that the configured email settings are working. If the test email fails, double-check that the *Email* field of the root user is correctly configured by clicking the **Edit** button for the root account in **Accounts ➞ Users**.

Configuring email for TLS/SSL email providers is described in [Are you having trouble getting FreeNAS to email you in Gmail?](https://forums.freenas.org/index.php?threads/are-you-having-trouble-getting-freenas-to-email-you-in-gmail.22517/).
