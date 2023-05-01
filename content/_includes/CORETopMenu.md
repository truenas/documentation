---
---

{{< toc >}}

Across the top row are links to outside resources and buttons to control the system.

![TopMenuEnterprise](/images/CORE/12.0/TopMenuEnterprise.png)

The options described from left to right:

### Logos and Side Panel Controls

The logo in the upper-left corner shows the installed TrueNAS software.
Clicking the image takes you to the system **Dashboard**.

The next two buttons control how the side menu displays.
Click the <span class="iconify" data-icon="ic:round-menu"></span> (menu icon) to hide or show the entire left side panel.
Click the <span class="iconify" data-icon="ic:baseline-chevron-left"></span> (chevron left icon) to collapse the left side panel to shortcut icons or expand to show icons and text.

Click the iXsystems logo to open the iXsystems corporate website in a new browser tab.

### Status Icons

The remaining icons in the top menu show various statuses. They also provide system options.

The ![TrueCommand Logo](/favicon/tc-favicon-black-32x32.png) icon next to the iXsystems logo shows [TrueCommand Cloud](https://www.truenas.com/truecommand/) connection options.
Clicking the icon shows options for signing up for TrueCommand Cloud. It also displays options for connecting/disconnecting from TrueCommand Cloud.
When the system is not connected to TrueCommand Cloud the options are not available. The icon appears but is gray in color.

TrueNAS Enterprise compatible hardware has a <span class="iconify" data-icon="ic:baseline-cloud"></span> (cloud with HA text) icon that shows the current status of High Availability (HA) on the system.
A checkmark (<span class="iconify" data-icon="ic:sharp-cloud-done"></span>) cloud icon indicates HA is functional.
An <span class="iconify" data-icon="bi:x"></span> on top of the cloud icon indicates HA disabled or otherwise unavailable.

#### Task Manager

The <span class="iconify" data-icon="ic:baseline-assignment"></span> (clipboard icon) is the system **Task Manager**.
Click the icon to show a list of running or completed TrueNAS tasks.
Tasks are sortable by their success or error **State**, task **Method**, and **Progress**.
Typing text in the <span class="iconify" data-icon="fa:search"></span> **Filter** field shows tasks that match the characters typed into the field.
Clicking an entry shows more details about that task. This includes start and end timestamps.

#### Alerts

The <span class="iconify" data-icon="clarity:bell-solid"></span> (bell icon) contains system notification messages.
The icon changes to <span class="iconify" data-icon="clarity:bell-solid-badged"></span> when TrueNAS creates a new alert.
Clicking the icon slides out a panel from the right side of the screen that lists each alert.
Dismiss or reopen alerts in this panel.
Dismissing an alert does not prevent it from recurring. TrueNAS might create a new alert if the alert conditions continue to exist on the system.
Configure the alert system in [System > Alert Settings]({{< relref "AlertSettings.md" >}}).

### Settings

The <span class="iconify" data-icon="fa6-solid:gear"></span> (gear icon) contains links to various system specific options.

<span class="iconify" data-icon="ic:baseline-dialpad"></span> **Change Password** is a shortcut for changing the administrator (*root*) account password.
Password required to log in to the TrueNAS web interface.
Please back up or otherwise memorize the updated password when changing it.

<span class="iconify" data-icon="ic:outline-settings-applications"></span> **Preferences** contains theme and other visual options for the web interface:

{{< truetable >}}
| Name | Description |
|--------|-------------|
| **Choose Theme** | Select a preferred theme from the dropdown list. There are several built-in themes designed for light and dark modes. High contrast viewing options of the web interface are also listed. |
| **Prefer buttons with icons only** | Select to preserve screen space using icons and tooltips instead of text labels. |
| **Enable Password Toggle** | Select to display an eye icon next to password fields. Clicking the icon reveals the password. |
| **Reset Table Columns to Default** | Select to reset all tables to display system default table columns. |
| **Retro Logo** | Select to revert branding back to FreeNAS. |
| **Reset All Preferences to Default** | Select to reset all user preferences to their default values. Preserves custom themes. |
| **Update Preferences** | Click to save changes to the **General Preferences**. |
{{< /truetable >}}

Create and manage custom themes on this screen.

### Power

The <span class="iconify" data-icon="clarity:bell-solid"></span> (power icon) has the options for changing the system state.

<span class="iconify" data-icon="ic:round-exit-to-app"></span> **Log Out** exits the web interface and shows the login screen.
The system remains powered on.

<span class="iconify" data-icon="ic:baseline-replay"></span> **Restart** initiates a power cycle.
The web interface closes. Discontinues power to the system which is then re-enabled.
The login screen appears when the boot cycle completes.

<span class="iconify" data-icon="ic:baseline-power-settings-new"></span> **Shut Down** exits the web interface. The process to safely discontinue power to the system begins.
The system remains offline until the power situation corrects.
