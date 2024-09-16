---
title: Dashboard
description: "Explains the main dashboard information cards (widgets) and provides basic information on synchronizing the system and TrueNAS server times, and on customizing the Dashboard display."
weight: 4
tags:
- dashboard
- timesync
keywords:
- nas storage software
- enterprise storage system
- data reporting
- storage provisioning
---

The **Dashboard** is the first screen you see after logging into the web interface after installing TrueNAS.
It displays a set of default widgets with system, help, storage, and network information, but you can customize the display to suit your needs and preferences.
**Dashboard** on the left side navigation panel returns to the main dashboard from any other screen in the UI.

{{< trueimage src="/images/SCALE/Dashboard/DashboardMainScreen.png" alt="TrueNAS Dashboard" id="TrueNAS Dashboard" >}}

The **Configure** button at the top right of the **Dashboard** changes the screen to [configuration mode](#dashboard-in-configuration-mode) and allows you to turn widget displays on or off.

## Dashboard Widgets
The **Dashboard** widgets show information about the TrueNAS system basic settings, CPU and memory usage, network traffic and link status, storage, and backup tasks.
Dashboard widgets are customizable. Options include changing which widgets layouts and the location on the screen, and adding custom or application widgets.

Pool and network interface widgets vary based on storage and network configurations on the system.

Click on the <span class="iconify" data-icon="ic:baseline-assessment"></span> **Reports** icon to display the data report screen that corresponds to the widget category.
For example, clicking the <span class="iconify" data-icon="ic:baseline-assessment"></span> assessment icon on the **CPU** widget opens the **Reporting > CPU** screen. 

{{< expand "System Information Widget" "v" >}} 
The **System Information** widget shows general information about the TrueNAS system.
The **Updates Available** button opens the **System > Update** screen.

{{< trueimage src="/images/SCALE/Dashboard/DashboardSystemInfoWidgetGeneric.png" alt="System Information Widget" id="System Information Widget" >}}

If installed on a customer-provided server, the widget shows a generic TrueNAS image.

If installed on iXsystems-provided hardware, the widget shows a picture of the system.
Click on the image to display the **View Enclosure** screen.

{{< trueimage src="/images/SCALE/Dashboard/DashboardSystemInfoWidget.png" alt="System Information Widget for iX Systems" id="System Information Widget for iX Systems" >}}

{{< truetable >}}
| Field | Description |
|-------|-------------|
| **Platform** | Shows as **Generic** for customer-provided server and hardware and displays the TrueNAS logo to the left of the **System Information** fields. The TrueNAS model number for the iXsystems-provided server and hardware and a picture of the server shows in the area to the left of the fields. |
| **Version** | Shows the currently-installed software release of TrueNAS. Use the clipboard <span class="material-icons-outlined">assignment</span> icon to display the full name of the release installed and to copy the version to the clipboard. |
| **Hostname** | Shows the host name for the TrueNAS system. Configure the host name on the **Network > Global Configuration** screen. |
| **Uptime** | Shows the number of consecutive days, and hours and minutes the system of runtime since the last reboot. |
| **Updates Available**<br>**Check for Updates** | Opens the **System Update** screen, or go to **System > Update** on the left-side main menu panel to open the **System Update** screen. **Updates Available** shows when systems updates are available for the current system release train. | 
{{< /truetable >}}
{{< /expand >}}

{{< expand "HA System Information Widgets" "v" >}}
{{< enterprise >}}
The two HA **Active** and **Standby** controller **System Information** widgets show only for systems licensed for HA.

Each HA active or standby **System Information** widget shows the same information found on the non-HA **System Information** widget but also shows the system serial number, and system license number and type.
The standby controller widget shows the **Initiate Failover** button.
The active controller widget shows the **Check for Updates** button.

{{< trueimage src="/images/SCALE/Dashboard/DashboardHASystemInformationWidgets.png" alt="HA System Information Widgets" id="HA System Information Widgets" >}}

{{< /enterprise >}}
{{< /expand >}}

{{< expand "CPU Widget" "v" >}}
The **CPU** widget shows dynamic gauges and graphs with CPU usage and temperature readings for system cores updated in realtime.

{{< trueimage src="/images/SCALE/Dashboard/DashboardCPUWidget.png" alt="CPU Widget" id="CPU Widget" >}}

The widget shows gauges and graphs showing CPU statistics:
* **CPU Usage** gauge that shows the average percentage of usage for the CPU cores.
* **CPU Recent Usage** gauge that shows recent CPU usage updated in realtime, and includes the CPU model number, number of cores and physical cores.
* **CPU Usage per Core** bar graph that shows CPU usage per core.
* **CPU Temperature per Core** bar graph that shows CPU **Usage** in blue and **Temperature** in orange.
{{< /expand >}}

{{< expand "Memory Widget" "v" >}}
The **Memory** widget shows current system memory consumption information.

{{< trueimage src="/images/SCALE/Dashboard/DashboardMemoryWidget.png" alt="Memory Widget" id="Memory Widget" >}}

The widget includes a gauge showing GiB **Free** in blue, **ZFS Cache** in fuchsia pink, and **Services** in orange.

You can configure the memory widget as a one large (100%) or one long (50%) plus two quarter size (25%) widget layouts.

{{< /expand >}}

{{< expand "Network and Interface Widgets" "v" >}}
The **Network** widget shows the status the configured primary system interface(s), link status, network I/O traffic, primary interface IP address, and media type and subtype if known.
It includes a dynamic graph showing the time of recorded traffic and the incoming (blue) and outgoing (orange) traffic in kbs.

{{< trueimage src="/images/SCALE/Dashboard/DashboardNetworkWidget.png" alt="Network Widget" id="Network Widget" >}}

You can configure an individual network interface (NIC) widgets in addition to the **Network** widget.
An **Interface** widget shows traffic, link status, interface media type and subtype, and any VLANS and the IP Address and port number.

{{< trueimage src="/images/SCALE/Dashboard/DashboardInterfaceWidget.png" alt="Interface Widget" id="Interface Widget" >}}

{{< /expand >}}

{{< expand "Storage and Pool Widgets" "v" >}}
The **Storage** widget shows information on the primary (root) pool status, path, and number of VDEVs configured in that pool.
It also shows the percentage of used and free space, and any caches.
It reports the number disks with errors, the total number of disks in the pool, and if a spare exists.

{{< trueimage src="/images/SCALE/Dashboard/DashboardStorageWidget.png" alt="Storage Widget" id="Storage Widget" >}}

You can configure individual pool widgets that show the same information as the root pool in the **Storage** widget.

{{< trueimage src="/images/SCALE/Dashboard/DashboardPoolWidget.png" alt="Pool Widget" id="Pool Widget" >}}

{{< /expand >}}

{{< expand "Backup Tasks Widget" "v" >}}
The **Backup Task** widget shows links to quickly set up an automated data backup schedule if a backup task does not exist.
Click <i class="material-icons" aria-hidden="true" title="Open Data Protection Screen">open_in_new</i> to open the **Data Protection** screen with all options for checking or backing up stored data.

{{< trueimage src="/images/SCALE/Dashboard/DashboardBackupTasksEmpty.png" alt="Empty Backup Tasks Widget" id="Empty Backup Tasks Widget" >}}

When a backup task exists, the widget shows details about the various backup tasks configured on the system.

{{< trueimage src="/images/SCALE/Dashboard/DashboardBackupTasks.png" alt="Backup Tasks Widget with Cloud Sync Example" id="Backup Tasks Widget with Cloud Sync Example" >}}

The widget shows the number of tasks for each type of backup, direction for data (sent or received), the number of times tasks failed and succeeded, and weekly success counters.
{{< /expand >}}

{{< expand "Help Widget" "v" >}}
The **TrueNAS Help** widget shows links to various TrueNAS websites.

{{< trueimage src="/images/SCALE/Dashboard/DashboardHelpWidget.png" alt="Help Widget" id="Help Widget" >}}

Links included are:

* [TrueNAS Documentation Site](https://www.truenas.com/docs/)
* [TrueNAS Community Forums](https://forums.truenas.com/)
* [TrueNAS Open Source software](https://github.com/truenas/)
* [iXsystems home page](https://www.ixsystems.com/) where users can access the GitHub web page.
* [TrueNAS Newsletter](https://www.truenas.com/newsletter/) where users can sign up for the newsletter.

Click on each link to open it in a new browser tab.
{{< /expand >}}

{{< expand "App Widget" "v" >}}
The **App** widget shows the app name, version, state (Deploying, Active, Stopped, etc.), release status, CPU usage in percentage, memory usage in MiB, network I/O traffic, and disk I/O traffic.
The TrueNAS logo shows in the the top left corner of the widget if a logo image for the app is unavailable.

{{< trueimage src="/images/SCALE/Dashboard/DashboardAppWidget.png" alt="App Widget" id="App Widget" >}}

The widget includes three icon function buttons at the top left:
* <span class="iconify" data-icon="mdi:web"></span> **Web Portal** to access the web portal for the app.
* <span class="iconify" data-icon="mdi:restart"></span> **Restart** to restart the app.
* <span class="iconify" data-icon="mdi:cog"></span> **App Details** to show the app settings.

{{< /expand >}}
<!-- Commenting out until this widget is completed by devs
{{< expand "Custom Widget" "v" >}}
The **Custom** widget shows l

{{< trueimage src="/images/SCALE/Dashboard/ .png" alt="Custom Widget" id="Custom Widget" >}}

{{< /expand >}} -->

## Dashboard in Configuration Mode
In configuration mode, dashboard widgets are enclosed in dotted-line boxes to show the *grouping area* for each widget.

**Add** opens a blank **Widget Editor** screen.

**Save** saves all changes made to the dashboard.

**Cancel** closes configuration mode without saving any changes. Changes made and saved on the [**Widget Editor**](#widget-editor) screen are discarded if you click **Cancel**.

{{< trueimage src="/images/SCALE/Dashboard/DashboardInConfigMode.png" alt="Dashboard Configuration Mode" id="Dashboard Configuration Mode" >}}

**Add** opens a blank **Widget Editor**.

**Save** saves any changes and exits configuration mode.
**Cancel** exists configuration mode without saving changes.

Pressing <kbd>Esc</kbd> (escape) also exits configuration mode and discards any changes made to widget group area configurations or placements.

### Widget Group Areas
Widget groups (areas) can use one of five layouts that consist of other widgets of different sizes and configurations.
Layouts options show on the [**Widget Editor**](#widget-editor) screen.

Each grouping area shows three function icons:

* <span class="iconify" data-icon="mdi:drag-horizontal"></span> Drag handle that allows you to grab and move the widget to a new location on the screen.
  Dragging a widget to a new location shifts the other widgets one position to the left or right depending on where the dragged widget is placed.

* <span class="iconify" data-icon="ic:round-edit"></span> **Edit** opens the **Widget Editor** populated with the settings for the existing widget.
 
* <span class="iconify" data-icon="ic:baseline-delete"></span> **Delete** removes the widget from the **Dashboard**.

Pressing <kbd>Tab</kbd> allows selecting the next button or function icon on the screen and across all widget groups.

## Widget Editor
Access to the **Widget Editor** screen is available when the **Dashboard** screen is in configuration mode.
The edit icon for any widget group opens the **Widget Editor** populated with the current settings for that widget group.
**Add** opens the **Widget Editor** with no settings.

{{< trueimage src="/images/SCALE/Dashboard/WidgetEditorAddNew.png" alt="Widget Editor for New Widget" id="Widget Editor for New Widget" >}}

{{< trueimage src="/images/SCALE/Dashboard/WidgetEditorExistingWidget.png" alt="Widget Editor for Existing Widget" id="Widget Editor for Existing Widget" >}}

Select an individual widget in a layout with multiple widgets to change the category and type and customize the display of the widget group.
### Widget Editor Settings
{{< truetable>}}
| Setting | Description |
|---------|-------------|
| **Layouts** | Click on the layout image to add one to four widgets in the group. Not all widget categories support all layouts. |
| **Widget Category** | Select the information category from the dropdown list of options:<br><li>**Empty** - Default selection for a new widget. Use to fill a grouping of multiple widgets where only two are defined and the others are not.<br><li>**Network** - Use to to set up a network widget.<br><li>**Storage** - Use to set up a storage or single pool widget.<br><li>**Help** - Use to include the widget with links to TrueNAS resources.<br><li>**Memory** - Use to set up a memory-usage widget.<br><li>**Backup Tasks** - Use to set up a widget showing either configured data protection tasks or links to locations to configure tasks.<br><li>**CPU** - Use to set up a CPU usage widget.<br><li>**System Information** - Use to add one of four system information widget types. <br><li>**Custom** - Use to set up a text-only widget with whatever text-based information you want to include on the **Dashboard**.<br></li> The **Widget Type** field shows after selecting the category. |
| **Widget Type** | Select the type of information to show in the selected widget. Options change based on the selected **Widget Category**. See [Widget Type Options by Category](#widget-type-options-by-category) for information on the options by the category and type selected. |
{{< /truetable >}}

### Widget Type Options by Category

{{< expand "Widget Type Options for Network" "v" >}}
There are four types available when **Widget Category** is set to **Network**.
Selecting **Network**, **IPv4 Address** or **IPv6 Address** as the type adds the **Interfaces** field to the screen.

**Hostname** can use a full, half, or quarter size widget. It does not add additional fields.

**IPv4 Address** and **IPv6 Address** can use a full, half, or quarter size widget. Shows the **Interface** field.

**Network** can use a full or half size widget with network information for a primary or other interface configured on the system. Shows the **Interface** field.

Select the interface to show in the widget from the **Interface** dropdown field.
{{< /expand >}}

{{< expand "Widget Type Options for Storage" "v" >}}
There are two widget types available when **Widget Category** is set to **Storage**: **Storage** and **Pool**.
The layout for the widget must be full size.

Selecting either **Storage** or **Pool** as the type adds the **Pool** field to the screen.
{{< /expand >}}

{{< expand "Widget Type Options for Help" "v" >}}
Only **Help** is the available widget type when **Widget Category** is set to **Help**.

The **Help** widget can use a full, half, or quarter size widget, but using the half or quarter size adds scrollbars to the widget to provide access to the full content in this widget category.
For best viewing and access to the content we recommend using the full size for the **Help** widget.
{{< /expand >}}

{{< expand "Widget Type Options for Memory" "v" >}}
Only **Memory** is the available widget type when **Widget Category** is set to **Memory**.

The **Memory** widget can use a full, half, or quarter size widget, and can be included in a widget group with other widget categories and types.
{{< /expand >}}

{{< expand "Widget Type Options for Backup Tasks" "v" >}}
Only **Backup Tasks** is the available widget type when **Widget Category** is set to **Backup Tasks**.

The **Backup Task** widget can only use a full size widget.
{{< /expand >}}

{{< expand "Widget Type Options for CPU" "v" >}}
Only **CPU** is the available widget type when **Widget Category** is set to **CPU**.

The **CPU** widget can only use a full size widget.
{{< /expand >}}

{{< expand "Widget Type Options for System Information" "v" >}}
There are four widget types available when **Widget Category** is set to **System Information**: **System Information Active Node**, **OS Version**, **System Uptime**, and **System Image**.

**System Information Active Node** shows system information for a single controller system in a full size widget.
<!-- Commenting out until I can verify this on a system
{{< enterprise >}}
If the system is an HA system with an Enterprise license, shows the active controller widget in a full size widget.
If an HA system with dual controllers, the **HA** option displays as a **Widget Category**.
{{< /enterprise >}}
-->

**OS Version**, **System Uptime**, or **System Image** can use a full, half, or quarter size widget.
These can be included in a widget group with other widget categories and types to create a mixed information widget.

{{< /expand >}}
<!-- Commenting out until apps is working in EE so I can verify the options for this widget
{{< expand "Widget Type Options for Apps" "v" >}}
Only **Application** is the available widget type when **Widget Category** is set to **Apps**.
The widget includes the app name and image, app status, and information on the app portal.

You can configure extra widgets for app CPU and/or memory usage, and network traffic for the selected app.

If you uninstall (delete) the app shown in the app widget, it is not automatically removed from the dashboard, rather it shows an error message that directs you to configure the widget for a new app.
Either reconfigure or delete the app widget to remove the error message.
{{< /expand >}} -->

{{< expand "Widget Type Options for Custom" "v" >}}
Only **Arbitrary Text** is the available widget type when **Widget Category** is set to **Custom**.

There are three additional fields to enter text strings in a full, half, or quarter-size widget.
Enter text in **Widget Title**, **Widget Text**, and **Widget Subtext** (if desired) that does not exceed the maximum character count.
The maximum number of character for the **Custom** widget is 200 upper and lower case alpha-numeric or special characters.
Spaces between characters count as characters.
{{< /expand >}}
