---
title: Top Toolbar Options
geekdocCollapseSection: true
weight: 4
---


{{< toc >}}

The top toolbar icon buttons provide access to the iXsystems website, displays the status of TrueCommand and directory services configured on your system, and displays other configuration menu options.

![TopToolbar](/images/SCALE/22.02/TopToolbar.png "TrueNAS SCALE Top Toolbar Icons")

## Toolbar Icons

| Icon | Name | Description |
|------|------|-------------|
| <span class="iconify" data-icon="bytesize:menu"></span> | Toggle Collapse | Click to expand or collapse the main menu panel on the left side of the screen. |
| <img src="/images/SCALE/22.02/iXsystemsLogo.jpg" alt="iXsystems Website" width="150" height="60">  | iXsystems Website | Opens the [iXsystems home page](https://www.ixsystems.com/) website where users can find information about storage and server systems. Users can also use the iXsystems home page to access their customer portal and community section for support. |
| <img src="/images/SCALE/22.02/TrueCommandIcon.jpg" alt="TrueCommand Status" width="50" height="60"> | TrueCommand Status | Displays either the status of a TrueCommand cloud connection or a dialog that allows users to [sign up for a new TrueCommand cloud connection]({{< relref "/content/truecommand/tcgettingstarted/install/_index.md" >}}). Instructions are found in the **Cloud Deployment** section. |
| <span class="material-icons">info</span> | Directory Services Monitor | Displays a dialog with the status of Active Directory and LDAP directory servers configured on the TrueNAS. |
| <span class="material-icons">assignment</span> | Task Manager | Displays the Task Manager dialog. Click the **History** button to display the **Jobs** screen with a list of **All**, **Active** or **Failed** jobs or processes. |
| <span class="material-icons">notifications</span> | Alerts | Displays a list of system alerts and a dropdown list the alert options **Alert Settings**, **Alert Services** and **Email**. |
| <span class="material-icons">account_circle</span> | Settings | Displays a dropdown menu of setting options **Change Password**, **Preferences**, **API Keys**, **Guide** and **About**. |
| <span class="material-icons">power_settings_new</span> | Power options | Displays the power related options **Log Out**, **Restart** or **Shut Down**. |

### Status of TrueCommand

{{< include file="/content/_includes/StatusOfTrueCommand.md" type="page" >}}

### Directory Services Monitor

{{< include file="/content/_includes/DirectoryServicesMonitor.md" type="page" >}}

### Task Manager

{{< include file="/content/_includes/TaskManagerScale.md" type="page" >}}

### Alerts

{{< include file="/content/_includes/AlertsSCALE.md" type="page" >}}

### Settings

The <span class="material-icons">account_circle</span> **Settings** icon button displays a menu of general system settings options. 
The options are **Change Password**, **Preferences**, **API Keys**, **Guide** and **About**.

The <span class="material-icons">dialpad</span> **Change Password** icon button displays a dialog where you can change the login password for the currently logged-in administrator password.

The <span class="material-icons">settings_applications</span> **Preferences** icon button displays the [Web Interface Preferences screen]({{< relref "/SCALEUIReference/TopToolbar/Settings/WebUIPreferences.md" >}}) where you can select general preferences for the system, such as a color theme. 

The <span class="material-icons">laptop</span> **API Keys** icon button displays the [API Keys screen]({{< relref "/SCALEUIReference/TopToolbar/Settings/APIKeysScreen.md" >}}) that lists current API keys and where you can add or manage API keys that identify outside resources and applications without a principal. 

The <span class="material-icons">library_books</span> **Guide** icon button opens the TrueNAS Documentation Hub website in a new tab. 

The <span class="material-icons-outlined">info</span> **About** icon button displays a window with links to the TrueNAS Documentation Hub, the TrueNAS Community Forums, the FreeNAS Open Source Storage Appliance GitHub repository, and the iXsystems hom page. Use the **Close** button to close the window. 

![AboutWindow](/images/SCALE/22.02/AboutWindow.png "TrueNAS SCALE About Window")

### Power

The **Power** button provides three options that lets the user log out of the web UI, restart, or shut down their TrueNAS system.