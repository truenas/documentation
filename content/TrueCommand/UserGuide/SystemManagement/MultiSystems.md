---
title: "Managing Multiple Systems"
redirect: "https://www.truenas.com/docs/truecommand/3.0/userguide/systemmanagement/multisystems/"
description: "How to find and use TrueNAS fleet management features in TrueCommand."
weight: 30
aliases: 
 - /truecommand/systemmanagement/multisystems/
---

TrueCommand has several multisystem management capabilities including the [**Fleet Dashboard**}({{< relref "FleetDashboard.md" >}}) with more in development for future releases.

## Mupliptle System Configuration Management

TrueCommand can manage TrueNAS [Config files]({{< relref "ConfigBackups.md" >}}), and restore a single config file to multiple systems.

To apply a config to multiple systems, first create a config backup from the TrueNAS system with the settings to apply to other TrueNAS systems.

While on the main **Dashboard**, click on the TrueNAS system name to open the single system detailed view.

![DashboardSingleSystemView](/images/TrueCommand/Dashboard/DashboardSingleSystemView.png "Dashboard Single System View")

### Create a Config Backup

{{< include file="/static/includes/TCCreateConfigBackup.md" >}}

### Restore From Config Backup

{{< include file="/static/includes/TCRestoreConfigBackup.md" >}}

## Viewing Multiple Systems

Administrator accounts have access to the [**Systems**]({{< relref "Systems.md" >}}) screen that lists all TrueNAS systems managed by TrueCommand.

Non-administrator accounts have access to the [**Systems Inventory**]({{< relref "SystemInventory.md" >}}) screen which lists only the systems they have permissions to access.