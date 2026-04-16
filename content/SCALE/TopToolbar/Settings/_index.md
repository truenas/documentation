---
title: "Settings Options"
description: "Describes the top-level Settings options in TrueNAS."
geekdocCollapseSection: true
weight: 2
aliases:
 - /scale/scaleuireference/toptoolbar/settings/
tags:
- settings
- toolbar
---


The <span class="material-icons">account_circle</span> **Settings** icon button displays a menu of general system settings options.
The options are **Change Password**, **Preferences**, **My API Keys**, **Guide** and **About**.

## Change Password

{{< include file="/static/includes/ChangeLoggedInUserPassword.md" >}}

## Preferences

The **Preferences** screen settings configure the color theme, session duration before timing out and logging out the currently logged-in user, and localization settings for the logged-in user account.

{{< trueimage src="/images/SCALE/Dashboard/PreferencesScreen.png" alt="Preferences Screen" id="Preferences Screen" >}}

### Customizing UI Theme and Localization

The **Theme** settings customize the UI theme colors for the currently logged-in user. 
Options are: **ixDark** (default option), **ixBlue**, **Dracula**, **Nord**, **Paper**, **Solarized Dark**, **Midnight**, and **High Contrast**.
Selecting an option immediately changes the UI to the selected color theme.

**Session Timeout**, moved from the **System > Advanced Settings > Access** configuration screen, sets the number of seconds a session remains active or inactive before it is automatically ended by logging out the user.

**Localization** sets the screen language, date format, and time format for the currently logged-in user account. To see the keyboard map and timezone, use the **System > General Settings > Localization** configuration screen.

Select the desired language for the UI from the **Language** dropdown list. The default setting is **English** but might be customized to the language based on the country of origin for an Enterprise customer. You can filter the list by typing in the field after clearing the default value, or use the scroll option to find and select a language.

Select the desired format in the **Date Format** and **Time Format** that matches your geographic location.

Click **Save** to set all changes for the currently logged-in user.

### Changing UI Session Timeout

TrueNAS automatically terminates the currently logged-in user session when the default session timeout expires and shows the TrueNAS login splash screen.

To extend the allotted session time, go to the **Preferences** screen and change the **Session Timeout** to a value that suits the use case for the logged-in user. 

{{< hint type=tip >}}
The default lifetime setting is 300 seconds or five minutes.

The maximum is 2147482 seconds, or 596 hours (24 days and 20 hours), 31 minutes, and 22 seconds.
{{< /hint >}}

Click **Save**.

## My API Keys

Click on <span class="material-icons">laptop</span> **My API Keys** to display the **User API Keys** screen where you can add or manage API keys on your system.
Click **API Docs** on the **User API Keys** screen to view API documentation.

## Guide

Click on <span class="material-icons">library_books</span> **Guide** to display the TrueNAS Documentation Hub in a new tab.

## About

Click on <span class="iconify" data-icon="ant-design:info-circle-outlined"></span> **About** to display the information window links to the TrueNAS Documentation Hub, TrueNAS Community Forums, FreeNAS Open Source Storage Appliance GitHub repository, and iXsystems home page.

![AboutWindow](/images/SCALE/Dashboard/AboutWindow.png "About Window")

<div class="noprint">

## Contents

{{< children sort="name" depth="2" description="true" >}}

</div>
