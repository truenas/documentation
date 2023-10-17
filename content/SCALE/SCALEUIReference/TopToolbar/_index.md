---
title: Top Toolbar Options
description: "All the icons and options contained in the TrueNAS SCALE top toolbar."
geekdocCollapseSection: true
tags:
- scaletaskmgr
- scalejobs
aliases:
 - /scale/scaleuireference/scaletopbar/
weight: 4
---


{{< toc >}}

The top toolbar icon buttons provide access to the iXsystems website, displays the status of TrueCommand and directory services configured on your system, and displays other configuration menu options.

{{< trueimage src="/images/SCALE/Dashboard/TopToolbar.png" alt="TrueNAS SCALE Top Toolbar Icons" id="TrueNAS SCALE Top Toolbar Icons" >}}

## Toolbar Icons

{{< truetable >}}
| Icon | Name | Description |
|------|------|-------------|
| <span class="iconify" data-icon="bytesize:menu"></span> | Toggle collapse | Click to expand or collapse the main menu panel on the left side of the screen. |
| ![iXsystemsLogo](/images/SCALE/Dashboard/iXsystemsLogo.png "iXsystems Logo") | iXsystems | Opens the [iXsystems home page](https://www.ixsystems.com/) website where users can find information about storage and server systems. Users can also use the iXsystems home page to access their customer portal and community section for support. |
| ![FeedbackIcon](/images/SCALE/Dashboard/FeedbackIcon.png "Feedback Icon") | How would you rate this page? | Opens the **How would you rate this page?** feedback window in prerelease versions of TrueNAS SCALE. |
| ![TrueCommandIcon](/images/SCALE/Dashboard/TrueCommandIcon.png "TrueCommand Icon") | Status of TrueCommand | Displays either the status of a TrueCommand cloud connection or a dialog that allows users to [sign up for a new TrueCommand cloud connection](https://portal.ixsystems.com/portal/signin/#login). |
| <span class="material-icons">info</span> | Directory Services status | Displays a dialog with the status of Active Directory and LDAP directory servers configured on the system. |
| <span class="material-icons">assignment</span> | Jobs | Displays the Jobs dialog. Click the **History** button to display the **Tasks** screen with a list of **All**, **Active** or **Failed** tasks or processes. |
| <span class="material-icons">notifications</span> | Alerts | Displays a list of system alerts and a dropdown list with the alert options **Alert Settings** and **Email**. |
| <span class="material-icons">account_circle</span> | Settings | Displays a dropdown list of setting options **Change Password**, **Two-Factor Authentication**, **API Keys**, **Guide** and **About**. |
| <span class="material-icons">power_settings_new</span> | Power options | Displays the power related options **Log Out**, **Restart** or **Shut Down**. |
{{< /truetable >}}

### How would you rate this page?

{{< include file="/_includes/FeedbackWindow.md" >}}

### Status of TrueCommand

{{< include file="/content/_includes/StatusOfTrueCommand.md" >}}

### Directory Services Monitor

{{< include file="/content/_includes/DirectoryServicesMonitor.md" >}}

### Jobs

{{< include file="/content/_includes/Jobs.md" >}}

### Alerts

{{< include file="/content/_includes/AlertsSCALE.md" >}}

### Settings

The <span class="material-icons">account_circle</span> **Settings** icon button displays a menu of general system settings options.
The options are **Change Password**, **Two-Factor Authentication**, **Preferences**, **API Keys**, **Guide** and **About**.

The <span class="material-icons">dialpad</span> **Change Password** icon button displays a dialog where you can change the login password for the currently logged-in administrator password.

The <span class="iconify" data-icon="mdi:two-factor-authentication"></span> **Two-Factor Authentication** icon button opens the [**Two-Factor Authentication Screen**]({{< relref "2fascreenscale.md" >}}).

The <span class="material-icons">laptop</span> **API Keys** icon button displays the [API Keys screen]({{< relref "APIKeysScreen.md" >}}) that lists current API keys and where you can add or manage API keys that identify outside resources and applications without a principal.

The <span class="material-icons">library_books</span> **Guide** icon button opens the TrueNAS Documentation Hub website in a new browser tab.

The <span class="material-icons-outlined">info</span> **About** icon button displays a window with links to the TrueNAS Documentation Hub, the TrueNAS Community Forums, the FreeNAS Open Source Storage Appliance GitHub repository, and the iXsystems home page. Use the **Close** button to close the window.

{{< trueimage src="/images/SCALE/Dashboard/AboutWindow.png" alt="About Window" id="About Window" >}}

### Power

The **Power** <span class="material-icons">power_settings_new</span> button provides three options that let the user log out of the web UI, restart, or shut down their TrueNAS system.

## Related Information

{{< children sort="name" depth="2" description="true" >}}
