---
title: Main Dashboard
description: "This article provides information on the main Dashboard information cards (widgets). It includes basic instructions on synchronizing system server and SCALE time and on customizing the display by moving, adding, or removing widgets."
weight: 3
tags:
- scaletimesync
- scaleenterprise
- scaledashboard
---

{{< toc >}}

The **Dashboard** screen displays the first time you log into the SCALE web interface. 
To display the **Dashboard** screen again click **Dashboard** on the left side panel. 

![DashboardMainScreenSCALE](/images/SCALE/22.12/DashboardMainScreenSCALE.png "TrueNAS SCALE Dashboard")

The **Dashboard** displays basic information about your TrueNAS system in widgets or information cards that group information about your TrueNAS by type. For example, CPU information appears in the CPU widget. 
These widgets display in a default layout that you can change.

Use the **Reorder** button to change the layout of the various widgets to suit your preference.

Use **Configure** turn the widget display on or off. When on, the widget displays on the dashboard.

## Dashboard Configuration Panel

The **Dashboard Configuration** panel allows you to turn widget displays on or off. 
There are three widget group types: **System Widgets**, **Storage Widgets** and **Network Widgets**. 
Storage and network widgets vary based on the pools and network interfaces configured on your TrueNAS. 

![DashboardConfigureScreenSCALE](/images/SCALE/22.12/DashboardConfigureScreenSCALE.png "Dashboard Configure Panel")

Click on the slider to turn the information display on or off.

**System Widgets** control the display of the **System Information**, **Help**, **CPU** and **Memory** widgets.

**Storage Widgets** control the display of the **Storage** widget and individual widgets for each pool configured on your TrueNAS.

**Network Widgets** control the display of the **Network** widget and any individual interfaces configured on your TruNAS.

Use **Save** to retain any setting changes you make. Click on the **X** or on any part of the UI screen away from the **Dashboard Configure** panel to close it without saving changes.

Click on the <span class="iconify" data-icon="ic:baseline-assessment"></span> assessment icon to display the report screen that corresponds to that widget. For example, clicking the <span class="iconify" data-icon="ic:baseline-assessment"></span> assessment icon on the **CPU** widget opens the **Reporting > CPU** screen. 

### System Information Widget
The **System Information** widget displays general information about the SCALE system. It includes an option to synchronize the system server time with TrueNAS SCALE time if they get out of sync.   
{{< expand "Click here for more information" "v" >}}
If installed on customer-provided servers the widget displays a generic TrueNAS image. 
If installed on iXsystems-provided hardware, a picture of the iXsystems hardware displays on the card above the **Check For Updates** button. Click on the image to display the **View Enclosure** screen.

![DashboardSystemInfoWidgetGeneric](/images/SCALE/22.02/DashboardSystemInfoWidgetGeneric.png "System Information Widget Generic Hardware")

![DashboardSystemInfoWidgetSCALE](/images/SCALE/22.12/DashboardSystemInfoWidgetSCALE.png "System Information Widget for iXsystems Hardware")

If TrueNAS SCALE time gets out of sync with the system server time, the **System Information** widget displays a message and provides a **Synchronize Time** link that executes a time-synchronization operation.

![DashboardSytemInfoWidgetTimeSync](/images/SCALE/22.12/DashboardSytemInfoWidgetTimeSync.png "System Information Widget with Time Sync")

{{< truetable >}}
| Field | Description |
|-------|-------------|
| **Platform** | Displays **Generic** for customer-provided server and hardware, and a TrueNAS logo displays to the left of the **System Information** fields. <br> Displays the TrueNAS model number for the iXsystems-provided server and hardware, and a picture of the server displays in the area to the left of the fields. |
| **Version** | Displays the currently-installed software release of TrueNAS SCALE. Use the clipboard <span class="material-icons-outlined">assignment</span> icon to display the full name of the release installed and to copy the version to the clipboard. |
| **Hostname** | Displays the host name for the TrueNAS system. Configure the host name on the **Network > Global Configuration** screen. |
| **Uptime** | Displays the number of consecutive days and the number of hours and minutes the system has run since the last reboot. |
| **Check For Updates** | Click to display the **System Update** screen. You can also display the **System Update** screen by selecting **System Settings > Update** on the main menu panel on the left side of the screen. | 
| **Synchronize Time** <span class="material-icons">loop</span> | Executes a time-synchronization operation to bring the system server and TrueNAS SCALE time into alignment when time gets out of sync. This operation is not designed to correct time that is weeks out of sync, and only displays when the system and SCALE time are out of sync. |
{{< /truetable >}}
{{< /expand >}}

### CPU Widget
The **CPU** widget displays information on the system CPU. 
{{< expand "Click here for more information" "v" >}}
The widget includes an **Avg Usage** dynamic spinner that displays the percentage of usage at that moment on the CPU. 
The **Stats Per Thread** bar graph displays **Usage** in blue and **Temperature** in orange with the x axis with the number threads and the y axis the percent usage in 20 increment counts. 
It also details the number **Cores** as ***x* cores (*y* threads)**, the **Highest Usage** as ***x*% (*y* threads at *x*%)**, and the **Hottest** temperature as ***x*&deg;C (*y* cores at *x*&deg;C)**.

![DashboardCPUWidgetSCALE](/images/SCALE/22.12/DashboardCPUWidgetSCALE.png "Dashboard CPU Widget")

{{< /expand >}}

### Memory Widget
The **Memory** widget displays information on the system memory. 
{{< expand "Click here for more information" "v" >}}
The widget displays a spinner showing the GiB **Free** in blue, **ZFS Cache** in fuchsia pink, and **Services** in orange. 

![DashboardMemoryWidgetSCALE](/images/SCALE/22.12/DashboardMemoryWidgetSCALE.png "Dashboard Memory Widget")

{{< /expand >}}

### Network and Interface Widgets
The **Network** widget displays network the status of the system interfaces, I/O stats, link status and the system IP address and port number.
{{< expand "Click here for more information" "v" >}}
The **Network** widget displays a dynamic graph of input (blue) and output (orange) I/O activity over the primary system interface. 

![DashboardNetworkWidgetSCALE](/images/SCALE/22.12/DashboardNetworkWidgetSCALE.png "Dashboard Network Widget")

{{< /expand >}}
The **Interface** widgets display I/O stats and link status, and provides more information on that interface media type and subtype, any VLANS and the IP Address and port number.
{{< expand "Click here for more information" "v" >}}
If more than one interface is configured on your TrueNAS you can use the **Dashboard Configuration** panel to add an interface widget for each interface. The **Interface** card displays the information for that interface.

![DashboardInterfaceWidgetSCALE](/images/SCALE/22.12/DashboardInterfaceWidgetSCALE.png "Dashboard Interface Widget")

Click on the **>** to display the **Addresses** widget for that interface. 

![DashboardInterfaceAddressesWidgetSCALE](/images/SCALE/22.12/DashboardInterfaceAddressesWidgetSCALE.png "Dashboard Interface Addresses Widget")

Click the <span class="iconify" data-icon="material-symbols:edit-outline"></span> edit icon to display the **Network** screen where you can select the interface to open the **Edit Interface** panel.
{{< /expand >}}

### Storage and Pool Widgets
The **Storage** widget displays information on the root and other storage pools configured on your system.
{{< expand "Click here for more information" "v" >}}
The **Storage** widget displays the root pool status, path, and the number of VDEVs configured. It also displays the percentage of used space, free space and any caches.
It reports on the number disks with errors, the total number of disks the root pool uses, and if a spare exists.

![DashboardStorageWidgetSCALE](/images/SCALE/22.12/DashboardStorageWidgetSCALE.png "Dashboard Storage Widget")

The individual pool information displayed in this widget includes the same information as the root pool.
{{< /expand >}}

### Help Widget
The **TrueNAS Help** widget displays links to the [TrueNAS Documentation Site](https://www.truenas.com/docs/) and [TrueNAS Community Forums](https://www.ixsystems.com/community/). It also includes a link where users can sign up for the [TrueNAS Newsletter](https://www.truenas.com/newsletter/), and a link to the Github web page for [TrueNAS Open Source software](https://github.com/truenas/). There is also a link for the [iXsystems home page](https://www.ixsystems.com/).

![DashboardHelpWidgetSCALE](/images/SCALE/22.12/DashboardHelpWidgetSCALE.png "Dashboard Help Widget")

Click on each link to open it in a new browser tab.

{{< taglist tag="scaletimesync" limit="10" >}}
{{< taglist tag="scaledashboard" limit="10" title="Related Dashboard Articles" >}}
