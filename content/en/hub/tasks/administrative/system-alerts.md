---
title: "Configuring System Alerts"
linkTitle: "Configuring System Alerts"
description: "A how-to guide on how to configure basic system alerts"
---

TrueNAS provides the benefit of customizing alerts and alert services.

## Alert Services

To add additional alert services, go to **System > Alert Services > ADD**.
Enter a name for the alert service and select the type. Next, decide on the
severity of the alert and select an alert *Level* from the drop-down. Finally,
enter the authentication information for the desired alert service type. One
nicety available is that a test alert can be sent before adding the alert
service. After all information has been filled out correctly, click
*SEND TEST ALERT* to ensure the alert service is working properly.

## Alert Settings

To modify alerts that TrueNAS provides, go to **System > Alert Settings**.
Each alert warning level and frequency can be changed. The warning level
represents the severity of the alert when it occurs. The frequency of the alert
is how often the alert appears after the alert has been triggered.

The alerts are grouped into sections based on the alert type. For example,
alerts that are related to pools appear in the alert section *Storage*.


## Email

An automatic script sends a nightly email to the root user account containing important information such as the health of the disks. Alert events are also emailed to the root user account. Problems with Scrub Tasks are reported separately in an email sent at 03:00AM.

*Note*: S.M.A.R.T. reports are mailed separately to the address configured in that service.

The administrator typically does not read emails directly on the TrueNAS® system. Instead, these emails are usually sent to an external email address where they can be read more conveniently. It is important to configure the system so it can send these emails to the administrator’s remote email account so they are aware of problems or status changes.

The first step is to set the remote address where email will be sent. Go to **Accounts** ➞ **Users**, click the three dot menu (Options) and **Edit** for the root user. In the `Email` field, enter the email address on the remote system where email is to be sent, like *admin@example.com*. Click **SAVE** to save the settings.

Additional configuration is performed with **System** ➞ **Email**.

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

Click the **SEND TEST MAIL** button to verify that the configured email settings are working. If the test email fails, double-check that the `Email` field of the root user is correctly configured by clicking the **Edit** button for the root account in **Accounts** ➞ **Users**.

Configuring email for TLS/SSL email providers is described in [Are you having trouble getting FreeNAS to email you in Gmail?](https://forums.freenas.org/index.php?threads/are-you-having-trouble-getting-freenas-to-email-you-in-gmail.22517/).
