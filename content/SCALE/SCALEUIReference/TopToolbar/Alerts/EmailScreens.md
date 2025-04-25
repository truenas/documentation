---
title: "Email Screens"
description: "Provides information on the email configuration screens for SMTP and GMail OAuth."
weight: 20
aliases:
 - /scale/scaleclireference/system/climail/
tags:
- email
- alerts
- toolbar
---

The top toolbar **Alerts** <span class="material-icons">notifications</span> icon button and <span class="material-icons">settings</span> icon display the **Alerts** dropdown list with two options: **Alert Settings** and **Email**.

Select **Email** to go to the [**General**]({{< ref "GeneralSettingsScreens" >}}) settings screen and find the **Email** widget.

## Email Widget

The **Email** widget on the **General Settings** screen displays information about current system mail settings.

{{< trueimage src="/images/SCALE/Dashboard/EmailWidget.png" alt="Email Widget" id="Email Widget" >}}

**Settings** opens the **Email Options** screen that allows users to configure the system email send method.

## Email Options Screen

{{< include file="/static/includes/EmailOptions.md" >}}

### SMTP

{{< include file="/static/includes/EmailOptionsSMTP.md" >}}

### Gmail OAuth

{{< include file="/static/includes/EmailOptionsGmail.md" >}}

### Outlook OAuth

{{< include file="/static/includes/EmailOptionsOutlook.md" >}}
