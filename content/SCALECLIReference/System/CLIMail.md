---
title: "Mail"
description: "Introduces the TrueNAS CLI Mail namespace that configures system email related settings found in the API and web UI."
weight: 75
aliases:
draft: false
tags:
- scaleclisystem
- scaleemail
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}
{{< include file="/_includes/SCALECLIIntroduction.md" >}}

## Mail Namespace
The **mail** namespace has three commands and is based on configuration management functions found in the SCALE API and web UI.
It provides access to email configuration methods through the system namespace commands.

## Mail Commands
The following **mail** commands allow you to view or edit mail settings and to send an email using configured settings.
You can enter commands from the main CLI prompt or from the **system** namespace prompt.

### Config Command

The `config` command displays the current system email configuration.

{{< expand "Using the Config Command" "v" >}}

#### Description

`config` does not require entering properties or arguments.
Enter the command and then press <kbd>Enter</kbd>.
The command returns a table containing current email configuration settings.

#### Usage

From the CLI prompt, enter:

`system mail config`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system mail config
+----------------+---------------------+
|             id | 1                   |
|      fromemail | test@test.com       |
| outgoingserver | smtp.mailserver.com |
|           port | 587                 |
|       security | TLS                 |
|           smtp | true                |
|           user | test@test.com       |
|           pass | passw0rt            |
|       fromname | TrueNAS             |
|          oauth | <dict>              |
+----------------+---------------------+
```
{{< /expand >}}
{{< /expand >}}

### Send Command

The `send` command sends an email from the system. A valid email send method must be configured before sending an email.

{{< expand "Using the Send Command" "v" >}}

#### Description

The `send` command has one required property, `mail_message`, which has two required sub-properties, `subject` and `text`, and nine optional sub-properties (see chart below), and one optional property, `mail_update`, which uses the same properties as the [`update` command](#update-command).

Enter `mail_message` or `mail_update` properties as an array enclosed in curly brackets `{}`.
Enclose properties and values in double quotes, do not double quote boolean values, separate properties from values using a colon, and separate property/value pairs using a comma.

{{< expand "mail_message Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|---------------|
| `subject` | Yes | Enter a subject for the email. | <code>"subject":"<em>test</em>"</code> |
| `text` | Yes* | Required if `html` is not set. Enter the email body text. Text is formatted to HTML using Markdown and rendered using the default email template. | <code>"text":"<em>Test message</em>"</code> |
| `html` | Yes* | Required if `text` is not set. Enter the email body text and HTML formatting. | <code>"html":"<em>Some HTML</em>" |
| `to` | No | Enter the address to receive the email. If not set, defaults to the configured admin email address. | <code>"to":"<em>test&#64;email.com</em>"</code> |
| `cc` | No | Enter an address to carbon copy (CC) on the email. | <code>"cc":"<em>test&#64;email.com</em>"</code> |
| `interval` | No | Use to define a minimum interval in seconds for the email job to forbid duplicate emails within a given time frame. Defaults to `null`. | <code>"interval":"<em>60</em>"</code> |
| `channel` | No | Enter the name of the channel to receive the email, if needed. | <code>"channel":"<em>notifications</em>"</code> |
| `timeout` | No | Enter the send operation timeout limit in seconds. If not set, `timeout` defaults to 300, or five minutes. | <code>"timeout":"<em>300</em>"</code> |
| `attachments` | No | Full documentation for this property is being developed. <!-- Unable to discover syntax for including the expected attachments dict --> <!--If `attachments` is `true`, provide a dictionary containing `headers`(list), `name`(str), `value` (str), `params` (dict), and `content` (str)--> | <!-- <code>"attachments":<em>true</em></code> --> |
| `queue` | No | Set `true` to allow email queuing or `false` to disallow. Defaults to `true`. | <code>"queue":<em>false</em></code> |
| `extra_headers` | No | Use to specify any additional email headers, such as to designate the email priority. | <code>"extra_headers":{"<em>priority</em>":"<em>urgent</em>"}</code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage

From the CLI prompt, enter:

<code>system mail send mail_message={"subject":"<em>test</em>","text":"<em>Test message</em>"}</code>

Where *test* is the email subject and *Test message* is the email body text.
Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system mail send mail_message={"subject":"test","text":"Test message."}
[0%] ...
[100%] ...
true
```
{{< /expand >}}
{{< /expand >}}

Update Command

{{< taglist tag="scaleclisystem" limit="10" title="Related CLI System Articles" >}}
{{< taglist tag="scaleemail" limit="10" title="Related Mail Articles" >}}
