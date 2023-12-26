---
title: Fleet Dashboard
description: "Overview and usage notes for the Fleet Dashboard Screen."
weight: 15
tags:
- dashboard
- alerts
- update
---

In addition to the main TrueCommand [**Dashboard**]({{< relref "/UserGuide/Dashboard.md" >}}) that shows individual system widgets (information cards) with performance information for each system managed by TrueCommand, release 3.0 introduces a new **Fleet Dashboard** with new function widgets.

![FleetDashboard](/images/TrueCommand/Dashboard/FleetDashboard.png "Fleet Dashboard")

The **Fleet Dashboard** provides an overview of system information organized into six widgets:

* [Systems](#systems-widget) - Lists each system managed by TrueCommand.
* [Alerts](#alerts-widget) - Lists alerts detected on systems managed by TrueCommand.
* [Pools](#pools-widget) - Lists all pools detected on systems managed by TrueCommand.
* [Shares](#shares-widget) - Lists all shares (SMB, NFS) detected on systems managed by TrueCommand.
* [Data Protection](#data-protection-widget) - Lists data protection tasks configured on TrueNAS systems and detected by TrueCommand.
* [S.M.A.R.T. Results](#smart-results-widget) - Shows the number of S.M.A.R.T. tests completed on TrueNAS systems and detected by TrueCommand.

To view more information on shares, replication, pools, and alerts, go to the setting menu option an open the related system or alert screen.

## Systems Widget

The **Systems** widget lists all systems added to and managed by TrueCommand.

![FleetDashboardSystemsWidget](/images/TrueCommand/Dashboard/FleetDashboardSystemsWidget.png "Fleet Dashboard Systems Widget")

The card includes the **SYSTEM** button that opens the **New System** screen, and the [system options menu](#system-options-menu) that provides access to other functions available to each system managed by the TrueCommand interface.

To access system details and management functions, click the gear <span class="material-icons">settings</span> icon, then select either **System Inventory**, or if an administration user, **Systems** to open those screens.

### System Options Menu

{{< include file="/_includes/TCSystemOptionsMenu.md" >}}

## Alerts Widget
The **Alerts** widget lists alerts detected by TrueCommand and provides the option to dismiss each alert.

![FleetDashboardAlertsWidget](/images/TrueCommand/Dashboard/FleetDashboardAlertsWidget.png "Fleet Dashboard Alerts Widget")

For more alert options, click the gear <span class="material-icons">settings</span> icon, then select **All Alerts** to open the **Alerts** screen and access more alert management options.
See [Alert Management]({{< relref "AlertManage.md" >}}) for further information.

## Pools Widget
The **Pools** widget displays pools configured on each NAS system added to and managed by TrueCommand.

![FleetDashboardPoolsWidget](/images/TrueCommand/Dashboard/FleetDashboardPoolsWidget.png "Fleet Dashboard Pools Widget")

## Shares Widget
The **Shares** widget lists all shares by type (SMB, NFS) detected on systems added to and managed by TrueCommand.

![FleetDashboardSharesWidget](/images/TrueCommand/Dashboard/FleetDashboardSharesWidget.png "Fleet Dashboard Shares Widget")

Active shares display the type in green with a checkmark that indicates the service starts automatically after a system reboot.

## Data Protection Widget
The **Data Protection** widget lists all data protection tasks detected on the systems added to and managed by TrueCommand.

![FleetDashboardDataProtectionWidget](/images/TrueCommand/Dashboard/FleetDashboardDataProtectionWidget.png "Fleet Dashboard Data Protection Widget")

Tasks include replication, rsync, cloud sync, periodic snapshot tasks, and S.M.A.R.T. tests configured and scheduled on the TrueNAS system.

## S.M.A.R.T. Results Widget
The **S.M.A.R.T. Results** widget displays the number of successful S.M.A.R.T. tests performed on each system added to and managed by TrueCommand.

![FleetDashboardSMARTResultWidget](/images/TrueCommand/Dashboard/FleetDashboardSMARTResultWidget.png "Fleet Dashboard S.M.A.R.T. Results Widget")
