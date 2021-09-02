---
title: "Multiple Systems"
weight: 30
---

{{< toc >}}

TrueCommand has several multisystem management capabilities with more in development for future releases.

Cluster capability has been added with TrueCommand 2.0, as well as applying TrueNAS configurations to multiuple systems at once. 


## Config Management

TrueCommand can manage TrueNAS [Config files]({{< relref "truenasconfigmanage.md" >}}).  TrueCommand can also restore those files to multiple systems.

To apply a config to multiple systems, first create a config backup from the TrueNAS system you with the settings you wish to apply to other TrueNAS units. 

Click on the system name for a TrueNAS server to open the Single System view.

![DashboardSingleSystemView](/images/TrueCommand/2.0/DashboardSingleSystemView.png "Dashboard Single System View")

Click the **Config Backups** Button to open the config backup window.

The **Configuration Backup Window** shows a list of backups along with the time and date of their creation.

Click the checkbox for the config you wish to restore and click the <mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">restore</mat-icon> Restore Icon.

![RestoreDatabase](/images/TrueCommand/2.0/RestoreDatabase.png "RestoreDatabase")

Click **ADD SYSTEM** to select a system to restore the config to.

![RestoreDatabaseAddSystem](/images/TrueCommand/2.0/RestoreDatabaseAddSystem.png "RestoreDatabaseAddSystem")

Additional servers can be added individualy as needed.

![RestoreDatabaseSelectSystem](/images/TrueCommand/2.0/RestoreDatabaseSelectSystem.png "RestoreDatabaseSelectSystem")

Once the systems have been chosen, click **CONFIRM** to upload the config backup to the selected TrueNAS systems.

![RestoreDatabaseSystemSelected](/images/TrueCommand/2.0/RestoreDatabaseSystemSelected.png "RestoreDatabaseSystemSelected")

## System Inventory

## iSCSI Management

When creating an iSCSI Volume with TrueCommand they can be configured on multiple systems at the same time.
Refer to the [iSCSI section]({{< relref "iscsimanagement.md" >}}) for more information.

## Cluster Managemnet

By definition, clusters span across multiple systems.
TrueCommand instances that are connected to three or more TrueNAS SCALE systems can create clustered volumes.
Refer to the [Clustering section]({{< relref "TrueCommand/Clustering/_index.md" >}}) for more information.
