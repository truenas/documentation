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

*ARC MISS* shows how often the system is using disks instead of the ARC cache. Anything above 0% means that the system is using RAM. The numbers vary on use case and work load.

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

![DashboardSystemOptions](/images/TrueCommand/2.0/DashboardSystemOptions202.png "Dashboard System Options")

The *Options* menu has several shortcuts to simple tasks.

* **Edit** opens the edit window for the TrueNAS connection details and nickname.
* **Update** updates the TrueNAS system.
* **Launch TrueNAS Interface** opens a new tab for the full TrueNAS Web UI.
* **iSCSI Volumes** opens the specific TrueNAS's iSCSI management page.
* **Services** opens the services page, which allows users to directly control current service status and autostart.
* **Delete** removes the system from TrueCommand. This does not delete any data stored on the TrueNAS system. However, it does delete all system metrics that are saved in TrueCommand's database.

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


#### Activity Indicator Icons

TrueCommand's individual indicators provide a better, "at-a-glance", indication of what the system is up to. The indicators will be visible to the right of the system nickname.

* Update: ![DashboardSystemUpdateIndicator](/images/TrueCommand/2.0/TC20UpgradeIndicator.png "System Update")
* Replication
* Resilver/Scrub : [DashboardSystemResilverScrubIndicator](/images/TrueCommand/2.0/TC20ResilverScrubIndicator.png "System Resilver/Scrub")


![DashboardSystemCardMultipleIndicators](/images/TrueCommand/2.0/TC20MultipleActivityIndicators.png "System Card Multiple Indicators")
