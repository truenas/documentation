---
title: "Multiple Systems"
description: "How to find and use TrueNAS fleet management features in TrueCommand."
weight: 30
---

{{< toc >}}

TrueCommand has several multisystem management capabilities with more in development for future releases.

TrueCommand 2.0 added cluster capability. It can also apply TrueNAS configurations to multiple systems at once.

## Config Management

TrueCommand can manage TrueNAS [Config files]({{< relref "truenasconfigmanage.md" >}}).
TrueCommand can also restore a single config file to multiple systems.

To apply a config to multiple systems, you must first create a config backup from the TrueNAS system with the settings you want to apply to other TrueNAS units.

Click on the system name for a TrueNAS server to open the single system view.

![DashboardSingleSystemView](/images/TrueCommand/Dashboard/DashboardSingleSystemView.png "Dashboard Single System View")

Click **Config Backups** to open the **Config Backup** window.

The **Configuration Backup** window displays a list of backups with their creation times and dates.

Set the checkbox for the config to restore and click the <mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">restore</mat-icon> **Restore** icon.

![RestoreDatabase](/images/TrueCommand/Dashboard/RestoreDatabase.png "RestoreDatabase")

Click **ADD SYSTEM** to select a system that the config file restores.

![RestoreDatabaseAddSystem](/images/TrueCommand/Dashboard/RestoreDatabaseAddSystem.png "RestoreDatabaseAddSystem")

You can add more servers as needed.

![RestoreDatabaseSelectSystem](/images/TrueCommand/Dashboard/RestoreDatabaseSelectSystem.png "RestoreDatabaseSelectSystem")

Click **CONFIRM** to upload the config backup to the chosen TrueNAS systems.

![RestoreDatabaseSystemSelected](/images/TrueCommand/Dashboard/RestoreDatabaseSystemSelected.png "RestoreDatabaseSystemSelected")
