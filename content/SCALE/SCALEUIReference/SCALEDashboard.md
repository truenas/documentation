---
title: Dashboard
description: "Explains the main dashboard information cards (cards) and provides basic information on synchronizing the system and TrueNAS server times, and on customizing the Dashboard display."
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
<!-- ticket submitted to rename Widget Editor, Widget Type, Widget Category to Card Editor, Card Type, and Card Category.-->
The **Dashboard** is the first screen you see after logging into the web interface after installing TrueNAS.
It displays a set of default cards with system, help, storage, and network information, but you can customize the display to suit your needs and preferences.
**Dashboard** on the left side navigation panel returns to the main dashboard from any other screen in the UI.

{{< trueimage src="/images/SCALE/Dashboard/DashboardMainScreen.png" alt="TrueNAS Main Dashboard" id="TrueNAS Main Dashboard" >}}

The **Configure** button at the top right of the **Dashboard** changes the screen to [configuration mode](#dashboard-in-configuration-mode) and allows you to turn card displays on or off.

## Dashboard Cards
The **Dashboard** cards show information about the TrueNAS system basic settings, CPU and memory usage, network traffic and link status, storage, and backup tasks.
Dashboard cards are customizable. Options include changing card layouts and the location on the screen and adding custom or application cards.

Pool and network interface cards vary based on system storage and network configurations.

Click on the <span class="iconify" data-icon="ic:baseline-assessment"></span> **Reports** icon to display the data report screen that corresponds to the card category.
For example, clicking the <span class="iconify" data-icon="ic:baseline-assessment"></span> assessment icon on the **CPU** card opens the **Reporting > CPU** screen. 

{{< expand "System Information Card" "v" >}} 
The **System Information** card shows general information about the TrueNAS system.
The **Updates Available** button opens the **System > Update** screen.

{{< trueimage src="/images/SCALE/Dashboard/DashboardSystemInfoWidgetGeneric.png" alt="System Information Card" id="System Information Card" >}}

If installed on a customer-provided server, the card shows a generic TrueNAS image.

If installed on iXsystems-provided hardware, the card shows a picture of the system.
Click on the image to display the **View Enclosure** screen.

{{< trueimage src="/images/SCALE/Dashboard/DashboardSystemInfoWidget.png" alt="System Information Card for iX Systems" id="System Information Card for iX Systems" >}}

{{< truetable >}}
| Field | Description |
|-------|-------------|
| **Platform** | Shows as **Generic** for customer-provided server and hardware and displays the TrueNAS logo to the left of the **System Information** fields. The TrueNAS model number for the iXsystems-provided server and hardware and a picture of the server shows in the area to the left of the fields. |
| **Version** | Shows the currently installed software release of TrueNAS. Use the clipboard <span class="material-icons-outlined">assignment</span> icon to display the full name of the release installed and to copy the version to the clipboard. |
| **Edition** | Shows the edition of the currently installed software release of TrueNAS. |
| **Uptime** | Shows the number of consecutive days, hours, and minutes of system runtime since the last restart. |
| **Updates Available**<br>**Check for Updates** | Opens the **System Update** screen, or go to **System > Update** on the left-side main menu panel to open the **System Update** screen. **Updates Available** shows when systems updates are available for the current system release train. | 
| **System Serial** | Shows the unique serial number of the attached TrueNAS system. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "HA System Information Cards" "v" >}}
{{< enterprise >}}
The two HA **Active** and **Standby** controller **System Information** cards show only for systems licensed for HA.

Each HA active or standby **System Information** card shows the same information found on the non-HA **System Information** card but also shows the system serial number, system license number, and type.
The standby controller card shows the **Initiate Failover** button.
The active controller card shows the **Check for Updates** button.

{{< trueimage src="/images/SCALE/Dashboard/DashboardHASystemInformationWidgets.png" alt="HA System Information Cards" id="HA System Information Cards" >}}

{{< /enterprise >}}
{{< /expand >}}

{{< expand "CPU Card" "v" >}}
The **CPU** cards show the CPU model, dynamic gauges, and graphs of CPU usage and recent usage, and CPU usage and temperature per system core. All values are updated in real time.

{{< trueimage src="/images/SCALE/Dashboard/DashboardCPUWidget.png" alt="CPU Cardts" id="CPU Cards" >}}

The card shows gauges and graphs showing CPU statistics:
* **CPU Model** card shows the CPU model.
* **CPU Usage** gauge shows the average percent of usage for the CPU cores.
* **CPU Recent Usage** gauge that shows recent CPU usage updated in realtime, and includes the CPU model number, number of cores, and physical cores.
* **CPU Usage per Core** bar graph that shows CPU usage per core.
* **CPU Temperature per Core** bar graph that shows CPU **Usage** in blue and **Temperature** in orange.
* **CPU Recent Temperature** gauge that shows recent CPU temperatures updated in real time.
* **CPU Overview** card shows the CPU model, number of cores, number of threads, highest usage percentage, hottest measured temperature, CPU average usage gauge, and bar graph of CPU usage per core.
* **CPU Temp** card shows the current temperature of the system CPU.
{{< /expand >}}

{{< expand "Memory Card" "v" >}}
The **Memory** card shows current system memory consumption information.

{{< trueimage src="/images/SCALE/Dashboard/DashboardMemoryWidget.png" alt="Memory Card" id="Memory Card" >}}

The card includes a gauge showing GiB **Free** in blue, **ZFS Cache** in fuchsia pink, and **Services** in orange.

You can configure the memory card as one large (100%) or one long (50%) plus two quarter-size (25%) card layouts.

{{< /expand >}}

{{< expand "Network and Interface Cards" "v" >}}
The **Network** card shows two cards, one with a dynamic bar graph showing the time of recorded traffic and the incoming (blue) and outgoing (orange) traffic in kbs, and the status of the configured primary system interface(s), link status, network I/O traffic, and media type and subtype if known, and the other shows the primary interface IP address.

{{< trueimage src="/images/SCALE/Dashboard/DashboardNetworkWidget.png" alt="Network Card" id="Network Card" >}}

For systems with multiple interfaces, switch the card to the **Interface** card and set each to the interfaces on your system.
An **Interface** card shows traffic, link status, interface media type and subtype, and any VLANS and the IP Address and port number.
{{< /expand >}}

{{< expand "Storage and Pool Cards" "v" >}}
The **Storage** card shows the primary (root) pool status, path, and number of VDEVs configured in that pool.
It also shows the percentage of used and free space and any caches.
It reports the number of disks with errors, the total number of disks in the pool, and if a spare exists.

{{< trueimage src="/images/SCALE/Dashboard/DashboardStorageWidget.png" alt="Storage Card" id="Storage Card" >}}

The **Storage** card includes the **Create Pool** card that when clicked, opens the **Pool Creation Wizard** screen.
You can configure individual pool cards that show the same information as the root pool in the **Storage** card.

{{< trueimage src="/images/SCALE/Dashboard/DashboardPoolWidget.png" alt="Pool Card" id="Pool Card" >}}

{{< /expand >}}

{{< expand "Backup Tasks Card" "v" >}}
The **Backup Task** card shows links to quickly set up an automated data backup schedule if a backup task does not exist.
Click <i class="material-icons" aria-hidden="true" title="Open Data Protection Screen">open_in_new</i> to open the **Data Protection** screen with all options for checking or backing up stored data.

{{< trueimage src="/images/SCALE/Dashboard/DashboardBackupTasksEmpty.png" alt="Empty Backup Tasks Card" id="Empty Backup Tasks Card" >}}

When a backup task exists, the card shows details about the various backup tasks configured on the system.

{{< trueimage src="/images/SCALE/Dashboard/DashboardBackupTasks.png" alt="Backup Tasks card with Cloud Sync Example" id="Backup Tasks Card with Cloud Sync Example" >}}

The card shows the number of tasks for each type of backup, the direction of data (sent or received), the number of times tasks failed and succeeded, and weekly success counters.
{{< /expand >}}

{{< expand "Help Card" "v" >}}
The **TrueNAS Help** card shows links to various TrueNAS websites.

{{< trueimage src="/images/SCALE/Dashboard/DashboardHelpWidget.png" alt="Help Card" id="Help Card" >}}

Links included are:

* [TrueNAS Documentation Site](https://www.truenas.com/docs/)
* [TrueNAS Community Forums](https://forums.truenas.com/)
* [TrueNAS Newsletter](https://www.truenas.com/newsletter/) where users can sign up for the newsletter.
* [TrueNAS Open Source software](https://github.com/truenas/)

Click on each link to open it in a new browser tab.
{{< /expand >}}
<!-- Commenting out as this card category is not showing on the Widget Category list right now 
{{< expand "App Widget" "v" >}}
The **App** widget shows the app name, version, state (Deploying, Active, Stopped, etc.), release status, CPU usage in percentage, memory usage in MiB, network I/O traffic, and disk I/O traffic.
The TrueNAS logo shows in the top left corner of the card if a logo image for the app is unavailable.

{{< trueimage src="/images/SCALE/Dashboard/DashboardAppWidget.png" alt="App Card" id="App Card" >}}

The card includes three icon function buttons at the top left:
* <span class="iconify" data-icon="mdi:web"></span> **Web Portal** to access the web portal for the app.
* <span class="iconify" data-icon="mdi:restart"></span> **Restart** to restart the app.
* <span class="iconify" data-icon="mdi:cog"></span> **App Details** to show the app settings.

{{< /expand >}}-->
<!-- Commenting out until this card is completed by devs
{{< expand "Custom Card" "v" >}}
The **Custom** card shows l

{{< trueimage src="/images/SCALE/Dashboard/ .png" alt="Custom Card" id="Custom Card" >}}

{{< /expand >}} -->

## Dashboard in Configuration Mode
In configuration mode, dashboard cards are enclosed in dotted-line boxes to show the *grouping area* for each card.

**Add** opens a blank **Widget Editor** screen.

**Save** saves all changes made to the dashboard.

**Cancel** closes configuration mode without saving any changes. Changes made and saved on the [**Widget Editor**](#widget-editor) screen are discarded if you click **Cancel**.

{{< trueimage src="/images/SCALE/Dashboard/DashboardInConfigMode.png" alt="Dashboard Configuration Mode" id="Dashboard Configuration Mode" >}}

**Add** opens a blank **Widget Editor**.

**Save** saves any changes and exits configuration mode.
**Cancel** exits configuration mode without saving changes.

Pressing <kbd>Esc</kbd> (escape) also exits configuration mode and discards any changes made to widget group area configurations or placements.

### Card Group Areas
Card groups (areas) can use one of five layouts that consist of other cards of different sizes and configurations.
Layout options show on the [**Widget Editor**](#widget-editor) screen.

Each grouping area shows three function icons:

* <span class="iconify" data-icon="mdi:drag-horizontal"></span> Drag handle that allows you to grab and move the card to a new location on the screen.
 Dragging a card to a new location shifts the other cards one position to the left or right depending on where the dragged card is placed.

* <span class="iconify" data-icon="ic:round-edit"></span> **Edit** opens the **Widget Editor** populated with the settings for the existing card.
 
* <span class="iconify" data-icon="ic:baseline-delete"></span> **Delete** removes the card from the **Dashboard**.

Pressing <kbd>Tab</kbd> allows selecting the next button or function icon on the screen and across all card groups.

## Widget Editor
Access to the **Widget Editor** screen is available when the **Dashboard** screen is in configuration mode.
The edit icon for any card group opens the **Widget Editor** populated with the current settings for that card group.
**Add** opens the **Widget Editor** with no settings.

{{< trueimage src="/images/SCALE/Dashboard/WidgetEditorAddNew.png" alt="Widget Editor for New Cards" id="Widget Editor for New Card" >}}

{{< trueimage src="/images/SCALE/Dashboard/WidgetEditorExistingWidget.png" alt="Widget Editor for Existing Card" id="Widget Editor for Existing Card" >}}

Select an individual card in a layout with multiple cards to change the category and type and customize the display of the card group.

### Widget Editor Settings {id="dashbd_config"}
<div id="dashbd_config"></div>

{{< truetable>}}
| Setting | Description |
|---------|-------------|
| **Layouts** | Set the layout image to add one or up to four cards in a group. Not all card categories support all layouts. |
| **Widget Category** | Select the information category from the dropdown list of options:<br><li>**Empty** - Default selection for a new card. Use to fill a grouping of multiple cards where only two are defined and the others are not.<br><li>**Storage** - Use to set up a storage or single pool card.<br><li>**Network** - Use to set up a network card.<br><li>**Help** - Use to include the card with links to TrueNAS resources.<br><li>**Memory** - Use to set up a memory-usage card.<br><li>**Backup Tasks** - Use to set up a card showing either configured data protection tasks or links to locations to configure tasks.<br><li>**CPU** - Use to set up a CPU usage card.<br><li>**System Information** - Use to add one of four system information card types. <br><li>**Custom** - Use to set up a text-only card with whatever text-based information you want to include on the **Dashboard**.<br></li> The **Widget Type** field shows after selecting the category. |
| **Widget Type** | Select the type of information to show in the selected card. Options change based on the selected **Widget Category**. See [Cards Type Options by Category](#card-type-options-by-category) for information on the options by the category and type selected. |
{{< /truetable >}}

### Card Type Options by Category

{{< expand "Card Type Options for Network" "v" >}} {id="dashbd_config_interface"}
There are three types available when **Widget Category** is set to **Network**.
Selecting **Interface**, **IPv4 Address** or **IPv6 Address** as the type adds the **Interfaces** field to the screen.

**Interface** shows the interface ID, link state, I/O traffic, media type and subtype, and IP address assigned to the interface, and the dynamic bar graph for the I/O traffic. 
Can use a full or half-size card.

**IPv4 Address** and **IPv6 Address** can use a full, half, or quarter-size card. Shows the IP address for the selected interface.

Select the interface to show in the card from the **Interface** dropdown field.
{{< /expand >}}

{{< expand "Card Type Options for Storage" "v" >}} {id="dashbd_config_storage"}
There are three card categories available when **Widget Category** is set to **Storage**: **Storage**, **Pool**, and **Pool Usage**.
The layout for the card must be full-size.

Selecting any of the **Storage** categories adds the **Pool** field to the screen.

**Pool** shows three options that can be assigned to a quarter-size card: 
* **Pool Usage**
* **Disks w/ZFS Errors**
* **Last Scan Errors**. 
{{< /expand >}}

{{< expand "Card Type Options for Help" "v" >}}
Only **Help** is the available card type when **Widget Category** is set to **Help**.

The **Help** card can use a full, half, or quarter-size card, but using the half or quarter size adds scrollbars to the card to provide access to the full content in this card category.
For best viewing and access to the content, we recommend using the full size for the **Help** card.
{{< /expand >}}

{{< expand "Card Type Options for Memory" "v" >}}
Only **Memory** is the available card type when **Widget Category** is set to **Memory**.

The **Memory** card can use a full, half, or quarter-size card, and can be included in a card group with other card categories and types.
{{< /expand >}}

{{< expand "Card Type Options for Backup Tasks" "v" >}}
Only **Backup Tasks** is the available card type when **Widget Category** is set to **Backup Tasks**.

The **Backup Task** card can only use a full-size card.
{{< /expand >}}

{{< expand "Card Type Options for CPU" "v" >}}
Only **CPU Model**, **CPU Overview**, and **CPU Temp** are available as card types when **Widget Category** is set to **CPU** and a full layout is selected.

**CPU Recent Temperature**, **CPU Recent Usage**, **CPU Usage Per Core**, **CPU Temperature Per Core**, and **CPU Usage** become available as a **Widget Type** when full, half, or quarter-sized layouts are selected.
{{< /expand >}}

{{< expand "Card Type Options for System Information" "v" >}}
The **System Information** card has six **Widget Type** options, **Hostname-Active**, **OS Version**, **Serial-Active**, and **System Image**, **System Information-Active**, and **System Uptime**.
HA systems, with two controllers and an HA license, show the **Hostname-Standby**, **Serial-Standby**, and **System Information-Standby** card types.

{{< enterprise >}}
The dashboard in larger systems with hundreds of drives have a slower response when populating the screen cards in normal and configuration mode.
Be patient and wait until your system is fully online before attempting to customize dashboard cards.

HA-licensed system dashboards show the active and standby controller cards in a full-size card.

{{< trueimage src="/images/SCALE/Dashboard/DashboardMainHAScreen.png" alt="TrueNAS HA System Dashboard" id="TrueNAS HA System Dashboard" >}}

The **System Information** card displays the following **Widget Type** options: **Hostname - Active**, **Hostname - Passive**, **OS Version**, **Serial - Active**, **Serial - Passive**, **System Image**, **System Information - Active**, **System Information - Standby**, and **System Uptime**.
{{< /enterprise >}}

**OS Version**, **System Uptime**, or **System Image** can use a full, half, or quarter-size card.
These can be included in a card group with other card categories and types to create a mixed information card.
{{< /expand >}}
<!-- Commenting out until apps is working in EE so I can verify the options for this card
{{< expand "Card Type Options for Apps" "v" >}}
Only **Application** is the available card type when **Widget Category** is set to **Apps**.
The card includes the app name and image, app status, and information on the app portal.

You can configure extra cards for app CPU and/or memory usage, and network traffic for the selected app.

If you uninstall (delete) the app shown in the app card, it is not automatically removed from the dashboard, rather it shows an error message that directs you to configure the card for a new app.
Either reconfigure or delete the app card to remove the error message.
{{< /expand >}} -->

{{< expand "Card Type Options for Custom" "v" >}} {id="dashbd_config_custom"}
The **Custom** card has only the **Arbitrary Text** as the card type but also shows the **Widget Title**, **Widget Text**, and **Widget Subtext** fields.
Enter text that does not exceed the maximum character count for the **Custom** card, which is 200 upper and lower case alpha-numeric or special characters.
Spaces between characters count as characters.
{{< /expand >}}
