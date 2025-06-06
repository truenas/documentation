---
title: Top Toolbar
description: "All the icons and options contained in the TrueNAS top toolbar."
geekdocCollapseSection: true
tags:
- tasks
aliases:
 - /scale/scaleuireference/scaletopbar/
 - /contributing/issuereporting/prereleaseuserfeedback/
weight: 3
tags:
- toolbar
- keywords:
- nas storage software
- enterprise storage system
---

The top toolbar icon buttons allows for quick software feedback, displays the status of TrueCommand and directory services configured on your system, active alerts, and shows other system management options.

{{< trueimage src="/images/SCALE/Dashboard/TopToolbar.png" alt="TrueNAS Top Toolbar Icons" id="TrueNAS Top Toolbar Icons" >}}

## Toolbar Icons

{{< truetable >}}
| Icon | Name | Description |
|------|------|-------------|
| <span class="iconify" data-icon="bytesize:menu"></span> | Toggle collapse | Click to expand or collapse the main menu panel on the left side of the screen. |
| ![SearchUI](/images/SCALE/Dashboard/GlobalSearchSelected.png "Search UI") | Search UI | Searches UI screens and elements or redirects queries to the TrueNAS Documentation Hub. |
| ![FeedbackIcon](/images/SCALE/Dashboard/FeedbackIcon.png "Feedback Icon") | Send Feedback | Opens the **Send Feedback** feedback window for sending UI ratings and bug reports to the TrueNAS developers. |
| ![TrueCommandIcon](/images/SCALE/Dashboard/TrueCommandIcon.png "TrueCommand Icon") | Status of TrueCommand | Displays either the status of a TrueCommand cloud connection or a dialog that allows users to [sign up for a new TrueCommand cloud connection](https://portal.ixsystems.com/portal/signin/#login). |
| <span class="iconify" data-icon="ic:sharp-system-update-alt" style="font-size:150%;"></span> | Update Status | Shows the system update progress and which user account started the update. Only appears in the top bar when a TrueNAS system update starts. |
| <span class="material-icons">info</span> | Directory Services status | Displays a dialog with the status of Active Directory and LDAP directory servers configured on the system. |
| <span class="material-icons">assignment</span> | Running Jobs | Displays the **Running Jobs** dialog. Click the **History** button to display the **Tasks** screen with a list of **All**, **Active** or **Failed** tasks or processes. |
| <span class="material-icons">notifications</span> | Alerts | Displays a list of system alerts and a dropdown list with the alert options **Alert Settings** and **Email**. |
| <span class="material-icons">account_circle</span> | Settings | Displays a dropdown list of setting options **Change Password**, **Two-Factor Authentication**, **API Keys**, **Guide**, **About**, and **Log Out**. |
| <span class="material-icons">power_settings_new</span> | Power options | Displays the power related options **Restart** or **Shut Down**. |
{{< /truetable >}}

### Search UI

The **Search UI** global search bar allows users to search for screens and elements within the TrueNAS UI or to redirect search terms to the TrueNAS Documentation Hub.

{{< expand "Using Global Search" "v" >}}
{{< include file="/static/includes/UsingGlobalSearch.md" >}}
{{< /expand >}}

### Send Feedback

{{< include file="/static/includes/FeedbackWindow.md" >}}

### Status of TrueCommand

{{< include file="/static/includes/StatusOfTrueCommand.md" >}}

### Directory Services Monitor

{{< include file="/static/includes/DirectoryServicesMonitor.md" >}}

### Jobs

{{< include file="/static/includes/Jobs.md" >}}

### Alerts

{{< include file="/static/includes/AlertsSCALE.md" >}}

### Settings

The <span class="material-icons">account_circle</span> **Settings** icon button displays a menu of general system settings options.
The options are **Change Password**, **Two-Factor Authentication**, **Preferences**, **API Keys**, **Guide** and **About**.

The <span class="material-icons">dialpad</span> **Change Password** icon button displays a dialog where you can change the login password for the currently logged-in administrator password.

The <span class="iconify" data-icon="mdi:two-factor-authentication"></span> **Two-Factor Authentication** icon button opens the [**Two-Factor Authentication Screen**]({{< ref "2fascreenscale" >}}).

The <span class="material-icons">laptop</span> **API Keys** icon button displays the [API Keys screen]({{< ref "APIKeysScreen" >}}) that lists current API keys and where you can add or manage API keys that identify outside resources and applications without a principal.

The <span class="material-icons">library_books</span> **Guide** icon button opens the TrueNAS Documentation Hub website in a new browser tab.

The <span class="material-icons-outlined">info</span> **About** icon button opens the dashboard **Help** widget with links to the TrueNAS Documentation Hub, the TrueNAS Community Forums, and the TrueNAS GitHub repository in a window. Use the **Close** button to close the window.

{{< trueimage src="/images/SCALE/Dashboard/DashboardHelpWidget.png" alt="Help Window" id="Help Window" >}}

The <span class="iconify" data-icon="bx:exit">info</span> **Log Out** icon button logs the currently logged in user out of the TrueNAS UI.

### Power

The **Power** <span class="material-icons">power_settings_new</span> button provides two options that let the user restart or shut down their TrueNAS system.

<div class="noprint">

## Related Information

{{< children sort="name" depth="2" description="true" >}}

</div>
