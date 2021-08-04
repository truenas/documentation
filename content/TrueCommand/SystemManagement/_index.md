---
title: System Management
weight: 30
geekdocCollapseSection: true
---

The TrueCommand dashboard gives quick status overviews of the TrueNAS systems it is connected to.

![TrueCommandDashboard](/images/TrueCommand/2.0/TCDashBoard.png "TrueCommand Dashboard")

For information on the Top Bar and its options, refer to the [Interface Overview]({{< relref "/TrueCommand/TCGettingStarted/InterfaceOverview.md" >}}) article in the Getting Started Documentation.

### System Cards

Each system has a unique card to display statistics.
When the system has an alert, an *Alerts* bubble appears next to the system version to show how many alerts there are for that specific system.
See [Alert Management]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) for further information.

![DashboardSingleSystemView](/images/TrueCommand/2.0/DashboardSingleSystemView.png "Dashboard Single System View")


*Storage* lists how many pools and drives are being used by the system. It also shows how much storage is used and available by size and percentage.

*ARC MISS* shows how often the system is going to disk rather than using the ARC cache. Anything above 0% means that the system is using ram. The numbers may vary depending on use case and work load.

**There are also several "hot spots" on the card that will open system specific areas for management.** 

Clicking the system name on the card shows an expanded view of the system with more [Single System Management options]({{< relref "/TrueCommand/SystemManagement/SingleSystem/_index.md" >}}).

Clicking the *Alerts* bubble after the system version on the card will open an expanded system information screen that lists the current system alerts.

Clicking *DRIVE*, *DISK WRITE*, *DISK READ* displays the disk activity graph.

Clicking *NET* displays the Net Activity graph.

Clicking *CPU* displays the CPU Usage percentages graph.

Clicking *TEMP* displays the CPU Temperature percentages graph.

Clicking  *ISCSI*, *NFS*, and *SMB* opens a *Services* window that allows users to stop/start Services for the system.

Clicking *VM* opens a *Virtual Machines* window that allows users to start/stop VM's on the system.

Clicking *APPS* (Scale) or *Jails* (TrueNAS 12.x) opens a window that allows users to start/stop APPS/Jails on the system.



#### Options Menu

![DashboardSystemOptions](/images/TrueCommand/2.0/DashboardSystemOptions.png "Dashboard System Options")

The Options menu gives you several shortcuts to simple tasks.  **Edit** opens the edit window for the TrueNAS connection details and nickname.  **Update** updates the TrueNAS system.  **NAS Portal** opens a new tab for the full TrueNAS Web UI.  **iSCSI Volumes** opens the specific TrueNAS's iSCSI management page.  **Services** opens the services page, which allows users to directly control current service status and autostart.  **Delete** removes the system from TrueCommand. **Delete** will not delete any data stored on the TrueNAS system, however it will delete all system metrics history saved in TrueCommand's database.

#### Services
![DashboardServices](/images/TrueCommand/2.0/DashboardServices.png "Dashboard Services")

#### Graphs

Clicking on the values for CPU, Disk, and Network will open small popup windows that display the statistical history for systems.

+ CPU

![DashboardCPUGraph](/images/TrueCommand/2.0/DashboardCPUGraph.png "Dashboard CPU Graph")

+ Disk

![DashboardDiskGraph](/images/TrueCommand/2.0/DashboardDiskGraph.png "Dashboard Disk Graph")

+ Network

![DashboadNetworkGraph](/images/TrueCommand/2.0/DashboadNetworkGraph.png "Dashboad Network Graph")


#### Activity Wheel

When a TrueNAS is updating, a small rotating activity wheel will be visible to the right of the system nickname.

![DashboardSystemCardUpdating](/images/TrueCommand/2.0/DashboardSystemCardUpdating.png "Dashboard System Card Updating")

