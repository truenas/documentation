---
title: System Management
weight: 30
geekdocCollapseSection: true
---

The TrueCommand dashboard gives a quick overview of the status of the TrueNAS systems it has been connected to.

![TrueCommandDashboard](/images/TrueCommand/2.0/TCDashBoard.png "TrueCommand Dashboard")

For information on the Top Bar and the options refer to [Interface Overview]({{< relref "/TrueCommand/GettingStarted/InterfaceOverview.md" >}}) article in the Getting Started Documentation.

### System Cards

Each system will have a unique card to display it stats.

![DashboardSystemCard](/images/TrueCommand/2.0/DashboardSystemCard.png "DashboardSystemCard")

#### Options menu

![DashboardSystemOptions](/images/TrueCommand/2.0/DashboardSystemOptions.png "DashboardSystemOptions")

The Options menu gives you several shortcuts to simple tasks.  **Edit** opens the edit window for the connection details for the TrueNAS and the nickname. **Update** initiates an update of the TrueNAS system. **NAS Portal** will open up a new tab for the full TrueNAS Web UI.  **iSCSI Volumes** opens up the iSCSI management page for the specific TrueNAS.  **Services** opens up the services page allowing a user direct control over current service status and enabling or disabling service autostart.  **Delete** will remove the system from TrueCommand.  Delete will not delete any data stored on the TrueNAS system, however Delete will delete all system metrics history saved in TrueCommand's database.

#### Services
![DashboardServices](/images/TrueCommand/2.0/DashboardServices.png "DashboardServices")

#### Graphs

Clicking on the values for CPU, Disk, and Network will open up small popup windows giving you a quick glance at the statistical history for these systems.

+ CPU
![DashboardCPUGraph](/images/TrueCommand/2.0/DashboardCPUGraph.png "DashboardCPUGraph")

+ Disk
![DashboardDiskGraph](/images/TrueCommand/2.0/DashboardDiskGraph.png "DashboardDiskGraph")

+ Network
![DashboadNetworkGraph](/images/TrueCommand/2.0/DashboadNetworkGraph.png "DashboadNetworkGraph")


#### Updating Wheel

When a TrueNAS is updating, a small rotating wheel will be visible to the right of the system nickname.

![DashboardSystemCardUpdating](/images/TrueCommand/2.0/DashboardSystemCardUpdating.png "DashboardSystemCardUpdating")

