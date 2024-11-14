---
title: System Management
redirect: "https://www.truenas.com/docs/truecommand/3.0/userguide/systemmanagement/"
description: "TrueCommand Dashboard overview and TrueNAS management options descriptions."
weight: 17
aliases: 
 - /truecommand/systemmanagement/
geekdocCollapseSection: true
related: false
---

The TrueCommand dashboard provides status overviews of each connected TrueNAS system.

![TrueCommandDashboard](/images/TrueCommand/Dashboard/TCDashBoard.png "TrueCommand Dashboard")

For information on the Top Bar and its options, refer to the [Interface Overview]({{< relref "/TrueCommand/TCGettingStarted/InterfaceOverview.md" >}}) article in the Getting Started Documentation.

### System Cards

Each system has a unique card to display statistics.
When the system has an alert, an **Alerts** bubble appears next to the system version to show how many alerts there are for that specific system.
See [Alert Management]({{< relref "AlertManage.md" >}}) for further information.

![DashboardSingleSystemView](/images/TrueCommand/Dashboard/DashboardSingleSystemView.png "Dashboard Single System View")

The **Storage** graph shows how many pools and drives the system is using. It also displays used and available storage by size and percentage.

**ARC MISS** shows how often the system is using disks instead of the ARC cache. Anything above 0% means that the system is using RAM. The numbers vary by use case and workload.

**There are also several "hot spots" on the card that open system-specific areas for management.** 

Clicking the system name on the card shows an expanded view of the system with more [Single System Management options]({{< relref "/TrueCommand/UserGuide/SystemManagement/SingleSystem/_index.md" >}}).

Clicking the **Alerts** bubble next to the system version opens an expanded system information screen that lists the current system alerts.

Clicking **DRIVES**, **DISK WRITE**, **DISK READ** displays the disk activity graph.

Clicking **NET** displays the Net Activity graph.

Clicking **CPU** displays the CPU Usage percentages graph.

Clicking **TEMP** displays the CPU Temperature percentages graph.

Clicking  **NFS** and **SMB** opens a **Services** window that allows users to stop/start services for the system.

Clicking **VM** opens a **Virtual Machines** window that allows users to start/stop VMs on the system.

Clicking **APPS** (SCALE) or **Jails** (CORE 12.x) allows users to start/stop apps/jails on the system.

#### Options Menu

![DashboardSystemOptions](/images/TrueCommand/Dashboard/DashboardSystemOptions.png "Dashboard System Options")

The *Options* menu has several shortcuts to simple tasks.

* <span class="iconify" data-icon="mdi:pencil"></span> **Edit** opens the edit window for the TrueNAS connection details and nickname.
* <span class="iconify" data-icon="mdi:account-group"></span> **Users and Groups** lets users manage NAS users and groups.
* <span class="iconify" data-icon="mdi:update"></span> **Update** updates the TrueNAS system.
* <span class="iconify" data-icon="mdi:monitor-screenshot"></span> **Launch TrueNAS Interface** opens a new tab for the full TrueNAS Web UI.
* <span class="iconify" data-icon="mdi:toolbox-outline"></span> **Services** lets users see service statuses and control service actions.
* <span class="iconify" data-icon="mdi:database-refresh"></span> **Config Backups** opens the TrueNAS configuration backup management screen and allows creating, deleting, downloading, and restoring the saved backups of the connected TrueNAS system configuration.
* <span class="iconify" data-icon="mdi:delete"></span> **Delete** removes the system from TrueCommand. Deleting does not affect any data stored on the TrueNAS system. However, it does delete all system metrics saved in TrueCommand.

#### Services

![DashboardServices](/images/TrueCommand/Dashboard/DashboardServices.png "Dashboard Services")

#### Graphs

Click on the **CPU**, **Disk**, and **Network** values displays the system statistical history.

+ CPU

![DashboardCPUGraph](/images/TrueCommand/Dashboard/DashboardCPUGraph.png "Dashboard CPU Graph")

+ Disk

![DashboardDiskGraph](/images/TrueCommand/Dashboard/DashboardDiskGraph.png "Dashboard Disk Graph")

+ Network

![DashboadNetworkGraph](/images/TrueCommand/Dashboard/DashboadNetworkGraph.png "Dashboad Network Graph")

#### Activity Indicator Icons

TrueCommand's activity icons provide an at-a-glance indication of what the system is doing. The indicators appear next to the system nickname.

![DashboardSystemCardMultipleIndicators](/images/TrueCommand/Dashboard/TC20MultipleActivityIndicators.png "System Card Multiple Indicators") 

* Update: ![DashboardSystemUpdateIndicator](/images/TrueCommand/Dashboard/TC20UpgradeIndicator.png "System Update")
* Replication: ![DashboardSystemReplicationIndicator](/images/TrueCommand/Dashboard/DashboardSystemReplicationIndicator.png "Replication")
* Resilver/Scrub : ![DashboardSystemResilverScrubIndicator](/images/TrueCommand/Dashboard/TC20ResilverScrubIndicator.png "System Resilver/Scrub")

<div class="noprint">

## Additional Articles in this Section

{{< children depth="2" description="true" >}}

</div>
