---
title: System Management
weight: 30
geekdocCollapseSection: true
---

The TrueCommand dashboard gives a quick overview of the status of the TrueNAS systems it has been connected to.

![TrueCommandDashboard](/images/TrueCommand/2.0/TCDashBoard.png "TrueCommand Dashboard")

For information on the Top Bar and the options refer to [Interface Overview]({{< relref "/TrueCommand/TCGettingStarted/InterfaceOverview.md" >}}) article in the Getting Started Documentation.

### System Cards

Each system will have a unique card to display it stats.

![DashboardSingleSystemView](/images/TrueCommand/2.0/DashboardSingleSystemView.png "Dashboard Single System View")

#### Options menu

![DashboardSystemOptions](/images/TrueCommand/2.0/DashboardSystemOptions.png "Dashboard System Options")

The Options menu gives you several shortcuts to simple tasks.  **Edit** opens the edit window for the connection details for the TrueNAS and the nickname. **Update** initiates an update of the TrueNAS system. **NAS Portal** will open up a new tab for the full TrueNAS Web UI.  **iSCSI Volumes** opens up the iSCSI management page for the specific TrueNAS.  **Services** opens up the services page allowing a user direct control over current service status and enabling or disabling service autostart.  **Delete** will remove the system from TrueCommand.  Delete will not delete any data stored on the TrueNAS system, however Delete will delete all system metrics history saved in TrueCommand's database.

#### Services
![DashboardServices](/images/TrueCommand/2.0/DashboardServices.png "Dashboard Services")

#### Graphs

Clicking on the values for CPU, Disk, and Network will open up small popup windows giving you a quick glance at the statistical history for these systems.

+ CPU

![DashboardCPUGraph](/images/TrueCommand/2.0/DashboardCPUGraph.png "Dashboard CPU Graph")

+ Disk

![DashboardDiskGraph](/images/TrueCommand/2.0/DashboardDiskGraph.png "Dashboard Disk Graph")

+ Network

![DashboadNetworkGraph](/images/TrueCommand/2.0/DashboadNetworkGraph.png "Dashboad Network Graph")


#### Activity Wheel

When a TrueNAS is updating, a small rotating activity wheel will be visible to the right of the system nickname.

![DashboardSystemCardUpdating](/images/TrueCommand/2.0/DashboardSystemCardUpdating.png "Dashboard System Card Updating")

