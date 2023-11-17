---
title: Dashboard
description: "Overview and usage notes for the main TrueCommand Dashboard."
weight: 10
tags:
- tcsystem
- tcdashboard
- tcalerts
- update
---

{{< toc >}}

The TrueCommand **Dashboard** provides an overview of each connected TrueNAS system in system widgets (information cards).

![TrueCommandDashboard](/images/TrueCommand/Dashboard/TCDashBoard.png "TrueCommand Dashboard")

The top banner includes two sort options, one to filter the view to show **All** or **Ungrouped** systems and the other to sort either by **Name** or **Order**.
The default view shows all widgets for all NAS systems added to and managed by TrueCommand.
Use the **Find** field to search for a system by name.
To add a new system, click **New System**.

For more information on the top toolbar icons, refer to the [Interface Overview]({{< relref "InterfaceOverview.md" >}}) article in the Getting Started Guide.

## Dashboard System Widgets

Each system has a unique widget (information card) that displays usage metrics including **CPU**, **Temp** and **Storage**, the number of pools and drives in the system, network, I/O read/writes and the disk verses cache usage.

![DashboardSingleSystemView](/images/TrueCommand/Dashboard/DashboardSingleSystemView.png "Dashboard Single System View")

The **Storage** graph shows how many pools and drives the system has and the storage consumed and available by size and percentage.

**ARC MISS** shows how often the system uses disks instead of the ARC cache. Anything above 0% means that the system is using RAM. The numbers vary by use case and workload.

Click the <span class="material-icons">keyboard_double_arrow_down</span> double down arrow to show more information on system hardware, serial number, hostname, CPU and memory, and uptime.

![DashboardSingleSystemViewExapnded](/images/TrueCommand/Dashboard/DashboardSingleSystemViewExapnded.png "Dashboard Single System Expanded View")

An alert bubble appears next to the system name and indicates the number of alerts detected for the system.
For details on system alerts click the gear <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon, then **All Alerts** to open the **Alerts** screen.
See [Alert Management]({{< relref "AlertManage.md" >}}) for further information.

Click on the system name to open an expanded view of the system with more [single system management options]({{< relref "/TrueCommand/UserGuide/SystemManagement/SingleSystem/_index.md" >}}).

Click on **DRIVES**, **DISK WRITE**, **DISK READ** to open the disk activity graph for each to view the system statistical history.

![DashboardDiskGraph](/images/TrueCommand/Dashboard/DashboardDiskGraph.png "Dashboard Disk Graph")

Click on **NET** opens a **Net Used** graph.

![DashboadNetworkGraph](/images/TrueCommand/Dashboard/DashboadNetworkGraph.png "Dashboard Network Graph")

Click on **CPU** to open the **CPU Usage** percentages graph.

![DashboardCPUGraph](/images/TrueCommand/Dashboard/DashboardCPUGraph.png "Dashboard CPU Graph")

Click on **TEMP** to open the CPU temperature percentages graph.

### System Options Menu

{{< include file="/_includes/TCSystemOptionsMenu.md" >}}

### Explore Options
The **Expore** button on individual system widgets opens the [**File Explorer**]({{< relref "TrueCommandStorageManagement.md" >}}) that provides access to dataset, zvol, share, snapshot, and replication information for that TrueNAS system.

