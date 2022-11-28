---
title: "Configuring the System Email"
description: "This article provides information on how to set up system email on TrueNAS CORE."
weight: 60
aliases:
  - /core/system/email
tags:
- coreemail
---

{{< toc >}}

An automatic script sends a nightly email to the administrator (*root*) account containing important information such as the health of the disks.
TrueNAS also emails alert events to the root user account.
Configure the system to send these emails to the administrator’s remote email account for fast awareness and resolution of any critical issues.

## Configure the Root Email Address

Go to **Accounts > Users**, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the *root* user, then click **Edit**.
Enter a remote email address in the **Email** field that the system administrator regularly monitors, then click **SAVE**.

Configuring user email addresses follows the same process.

## Configure the System Email

Go to **System > Email** and enter a **From Name** for system emails.

Next, select a **Send Mail Method** and fill out the remaining fields (SMTP) or log in (GMail OAuth).

Click **SEND TEST MAIL** to verify the configured email settings are working.
If the test email fails, double-check that the root user **Email** field is correctly configured.

{{< taglist tag="coreemail" limit="10" >}}
