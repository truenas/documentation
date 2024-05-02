---
title: "Configuring the System Email"
description: "Provides information on how to set up system email on TrueNAS CORE."
weight: 60
tags:
- coreemail
---

{{< toc >}}

An automatic script sends a nightly email to the administrator (root) account containing important information such as issues with the health of the disks, or other system functions. 
Alerts sent are based on the default options set on the **Alerts Settings** screen.
TrueNAS emails alert events to the email set up for the root user account.

## Configure the Root Email Address

Go to **Accounts > Users**, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the **root** user, then click **Edit**.
Enter a remote email address for the system administrator that regularly monitors the system in **Email**, then click **SAVE**.

Configuring user email addresses follows the same process.

## Configure the System Email

Go to **System > Email** and enter a **From Name** for system emails.

Next, select a **Send Mail Method** and fill out the remaining fields (SMTP) or log in (GMail OAuth).

Click **SEND TEST MAIL** to verify the configured email settings are working.
If the test email fails, double-check that the root user **Email** field is correctly configured.

{{< taglist tag="coreemail" limit="10" >}}
