---
title: "Configuring System Alerts"
description: "How to configure basic system alerts and add an email address for alert notifications."
tags: ["SNMP"]
weight: 55
---

After setting up storage, you'll want to set up the alert system with an email address, then customize how alerts are reported and which alerts are displayed or prioritized.

## Alert Services

Alert Services are the various methods built into to TrueNAS that can notify you of a system alert. Note that some of these services are third-party services that might charge for message or data usage.

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

The first step is to set the remote address where emails will be sent. Go to **Accounts > Users**, click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; (Options) and **Edit** for the root user. In the *Email* field, enter the email address on the remote system where email is to be sent, like `admin@example.com`. Click **SAVE** to save the settings.

Additional configuration is performed with **System > Email**.

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

Click the **SEND TEST MAIL** button to verify that the configured email settings are working. If the test email fails, double-check that the *Email* field of the root user is correctly configured by clicking the **Edit** button for the root account in **Accounts > Users**.

Configuring email for TLS/SSL email providers is described in [Are you having trouble getting FreeNAS to email you in Gmail?](https://forums.freenas.org/index.php?threads/are-you-having-trouble-getting-freenas-to-email-you-in-gmail.22517/).

## SNMP

[SNMP (Simple Network Management Protocol)](https://tools.ietf.org/html/rfc1157) is used to monitor network-attached devices for conditions that warrant administrative attention.
TrueNAS uses [Net-SNMP](http://net-snmp.sourceforge.net/) to provide SNMP.
Go to **Services > SNMP** to configure SNMP.
When starting the SNMP service, this port will be enabled on the TrueNAS system:

+ `UDP 161` (listens here for SNMP requests)

Available Management Information Bases (MIBs) are located in `/usr/local/share/snmp/mibs`.

<img src="/images/TN-12.0-services-snmp.png" width='700px'>
<br><br>

### SNMP Service Options

| Setting                 | Value          | Description                                                                                                                                                                                     |
|-------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Location                | string         | Enter the location of the system.                                                                                                                                                               |
| Contact                 | string         | Enter an email address to receive messages from the SNMP service.                                                                                                                               |
| Community               | string         | Change from *public* to increase system security. Can only contain alphanumeric characters, underscores, dashes, periods, and spaces. This can be left empty for SNMPv3 networks.                 |
| SNMP v3 Support         | checkbox       | Set to enable support for [SNMP version 3](https://tools.ietf.org/html/rfc3410). See [snmpd.conf(5)](http://net-snmp.sourceforge.net/docs/man/snmpd.conf.html) for more information about configuring this and the `Authentication Type`, `Password`, `Privacy Protocol`, and `Privacy Passphrase` fields. |
| Username                | string         | Only applies if `SNMP v3 Support` is set. Enter a username to register with this service.                                                                                                         |
| Authentication Type     | drop-down menu | Only applies if `SNMP v3 Support` is enabled. Choices are *MD5* or *SHA*.                                                                                                                             |
| Password                | string         | Only applies if `SNMP v3 Support` is enabled. Enter and confirm a password of at least eight characters.                                                                                          |
| Privacy Protocol        | drop-down menu | Only applies if `SNMP v3 Support` is enabled. Choices are *AES* or *DES*.                                                                                                                             |
| Privacy Passphrase      | string         | Enter a separate privacy passphrase. `Password` is used when this is left empty.                                                                                                                  |
| Auxiliary Parameters    | string         | Enter additional [snmpd.conf(5)](https://www.freebsd.org/cgi/man.cgi?query=snmpd.conf) options. Add one option for each line.                                                                                                                           |
| Expose zilstat via SNMP | checkbox       | Enabling this option may have pool performance implications.                                                                                                                                    |
| Log Level               | drop-down menu | Choose how many log entries to create. Choices range from the least log entries (Emergency) to the most (Debug).                                                                                |
