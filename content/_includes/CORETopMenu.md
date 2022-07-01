---
---

{{< toc >}}

Across the top row are links to outside resources and buttons to control the system.

![TopMenuEnterprise](/images/CORE/12.0/TopMenuEnterprise.png)

The options are described here from left to right:

### Logos and Side Panel Controls

The logo in the upper-left corner shows the installed TrueNAS software.
Clicking the image takes you to the system **Dashboard**.

The next two buttons control how the side menu displays.
Click the <span class="iconify" data-icon="ic:round-menu"></span> (menu icon) to hide or show the entire left side panel.
Click the <span class="iconify" data-icon="ic:baseline-chevron-left"></span> (chevron left icon) to collapse the left side panel to shortcut icons or expand to show icons and text.

Clicking the iXsystems logo opens a new browser tab for the iXsystems corporate website.

### Status Icons

The remaining icons in the top menu indicate various statuses and show system options.

The ![TrueCommand Logo](/favicon/tc-favicon-black-32x32.png) icon next to the iXsystems logo shows [TrueCommand Cloud](https://www.truenas.com/truecommand/) connection options.
Clicking the icon shows options for signing up or connecting/disconnecting from TrueCommand Cloud.
The icon is grayed out when the system in not connected to TrueCommand Cloud.

TrueNAS Enterprise compatible hardware has a <span class="iconify" data-icon="ic:baseline-cloud"></span> (cloud with HA text) icon that shows the current status of High Availability (HA) on the system.
A checkmark (<span class="iconify" data-icon="ic:sharp-cloud-done"></span>) cloud icon indicates HA is functional.
An <span class="iconify" data-icon="bi:x"></span> on top of the cloud icon indicates HA is disabled or otherwise unavailable.

#### Task Manager

The <span class="iconify" data-icon="ic:baseline-assignment"></span> (clipboard icon) is the system **Task Manager**.
Click the icon to show a list of running or completed TrueNAS tasks.
Tasks are sortable by their success or error **State**, task **Method**, and **Progress**.
Typing text in the <span class="iconify" data-icon="fa:search"></span> *Filter* field shows only those tasks that match the characters typed into the field.
Clicking an entry shows more details about that task, including start and end timestamps.

#### Alerts

The <span class="iconify" data-icon="clarity:bell-solid"></span> (bell icon) contains system notification messages.
The icon changes to <span class="iconify" data-icon="clarity:bell-solid-badged"></span> when TrueNAS creates a new alert.
Clicking the icon slides out a panel from the right side of the screen that lists each alert.
Alerts can be dismissed or reopened in this panel.
When an alert is dismissed, TrueNAS might create a new alert if the alert conditions continue to exist on the system.
The alert system is configured in [System > Alert Settings]({{< relref "AlertSettings.md" >}}).

### Settings

The <span class="iconify" data-icon="fa6-solid:gear"></span> (gear icon) contains links to various system specific options.

<span class="iconify" data-icon="ic:baseline-dialpad"></span> **Change Password** is a shortcut for changing the administrator (*root*) account password.
This password is required to log in to the TrueNAS web interface.
Please back up or otherwise memorize the updated password when changing it.

<span class="iconify" data-icon="ic:outline-settings-applications"></span> **Preferences** contains theme and other visual options for the web interface:

| Option | Description |
|--------|-------------|
| **Choose Theme** | Choose a preferred theme. There are several built-in themes designed for light and dark modes and high contrast viewing of the web interface. |
| **Prefer buttons with icons only** | Preserve screen space with icons and tooltips instead of text labels. |
| **Enable Password Toggle** | When set, an eye icon appears next to password fields. Clicking the icon reveals the password. |
| **Reset Table Columns to Default** | Reset all tables to display default columns. |
| **Retro Logo** | Revert branding back to FreeNAS. |
| **Reset All Preferences to Default** | Reset all user preferences to their default values. (Custom themes are preserved) |
| **Update Preferences** | Save changes to the **General Preferences**. |

Custom themes can also be created and managed on this screen.

### Power

The <span class="iconify" data-icon="clarity:bell-solid"></span> (power icon) has the options for changing the system state.

<span class="iconify" data-icon="ic:round-exit-to-app"></span> **Log Out** exits the web interface and shows the log in screen.
The system remains powered on.

<span class="iconify" data-icon="ic:baseline-replay"></span> **Restart** initiates a power cycle.
The web interface closes while power is discontinued to the system and then re-enabled.
The log in screen appears when the boot cycle completes.

<span class="iconify" data-icon="ic:baseline-power-settings-new"></span> **Shut Down** exits the web interface and initiates the process to safely discontinue power to the system.
The system remains offline until power is restored.
