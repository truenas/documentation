---
title: Dashboard
weight: 3
---

The **Dashboard** screen displays as the default screen the first time you log into the SCALE web interface or after clicking **Dashboard** on the left side panel.

![DashboardScreen](/images/SCALE/22.02/DashboardScreen.png "TrueNAS SCALE Dashboard")

The **Dashboard** has several widgets or information cards that display information about your TrueNAS. 
These widgets are presented in a default layout. 
Use the **Reorder** button to change the layout of the various widgets to suit your preference.

Use **Configure** turn the widget display on or off. When on the widget displays on the dashbard.

## Dashboard Configuration Panel

The **Dashboard Configuration** panel allows you to turn widget displays on or off. 
Widgets are grouped in three sections, **System Widgets**, **Storage Widgets** and **Network Widgets**. 
Storage and network widgets vary based on the pools and network interfaces configured on your TrueNAS. 

![DashboardConfigurePanel](/images/SCALE/22.02/DashboardConfigurePanel.png "Dashboard Configuration Panel")

Click on the slider to turn the information display on or off.

**System Widgets** control the display of the **System Information**, **CPU**, **Memory** and **Help** widgets.

**Storage Widgets** control the display of the **Storage** widget and individual widgets for each pool configured on your TrueNAS.

**Network Widgets** control the dsplay of the **Network** widget and any individual interfaces configured on your TruNAS.

Use **Save** to retain any setting changes you make. Click on the **X** or on any part of the UI screen away from the **Dashboard Configuration** panel to close it without saving changes.

### System Information Widget
The **System Information** widget displays general information on the SCALE system.   
{{< expand "Chick here for more information" "v" >}}
If installed on customer-provided servers the widget displays a generic TrueNAS image. 
If installed on iXsystems-provided hardware, a picture of the iXsystems hardware displays on the card just above the **Updates Available** button. Click on the image to display the **System Enclosure** screen.

![DashboardTNHardware](/images/SCALE/22.02/DashboardTNHardware.png "System Information for iXsystems Hardware")

System Information Widget Details
| Field | Description |
|-------|-------------|
| **Platform** | Displays **Generic** for customer-provided server and hardware, and a TrueNAS logo displays to the left of the **System Information** fields. <br> Displays the TrueNAS model number for the iXsystems-provided server and hardware, and a picture of the server displays in the area to the left of the fields. |
| **Version** | Displays the currently-installed software release of TrueNAS SCALE. Use the clipboard <span class="material-icons-outlined">assignment</span> icon to display the full name of the release installed and to copy the version to the clipboard. |
| **HostName** | Displays the host name for the TrueNAS system. Host name is configured on the **Network > Global Configuration** screen. |
| **Uptime** | Displays the number of consequetive days and the number of hours and minutes the system has run since the last reboot. |
| **UPdates Available** | Click to display the **System Update** screen. You can also display the **System Update** screen by selecting **System > Updates** on the main menu panel on the left side of the screen. |
{{< /expand >}}

### CPU Widget
The **CPU** widget displays details on the system CPU for either customer or iXystems-provided system hardware. 



The CPU information includes and average usage counter that displays the percentage of the CPU currently in use.


## Dashboard

{{< embed-video name="scaletour" >}}

After logging in, you see the system **Dashboard**.
**Dashboard** displays basic information about the installed version, systems component usage, and network traffic. For users with compatible TrueNAS
Hardware, clicking the system image takes you to the **System Settings > Enclosure** page. 

![DashboardSCALE](/images/SCALE/DashboardSCALE.png "TrueNAS SCALE Dashboard")

The **Dashboard** provides access to all TrueNAS management options.
The top row has links to outside resources and buttons to control the system.
The left-hand column lets users navigate to the various TrueNAS Configuration screens.

You can reorder dashboard widgets by clicking **Reorder** and then dragging them into your preferred order. You can also choose which widgets appear on the dashboard by clicking **Configure**.

![ConfigureWidgetsSCALE](/images/SCALE/ConfigureWidgetsSCALE.png "Dashboard Configuration")
