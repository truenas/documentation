---
title: "Multiple Systems"
weight: 30
---

{{< toc >}}

TrueCommand has several multisystem management capabilities with more in development for future releases.

TrueCommand 2.0 added cluster capability , as well as applying TrueNAS configurations to multiuple systems at once. 

## Config Management

TrueCommand can manage TrueNAS [Config files]({{< relref "truenasconfigmanage.md" >}}).
TrueCommand can also restore a single config file to multiple systems.

To apply a config to multiple systems, first create a config backup from the TrueNAS system with the settings you want to apply to other TrueNAS units.

Click on the system name for a TrueNAS server to open the single system view.

![DashboardSingleSystemView](/images/TrueCommand/2.0/DashboardSingleSystemView.png "Dashboard Single System View")

Click **Config Backups** to open the **Config Backup** window.

The **Configuration Backup** window displays a list of backups with the time and date of their creation.

Set the checkbox for the config to restore and click the <mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">restore</mat-icon> **Restore** icon.

![RestoreDatabase](/images/TrueCommand/2.0/RestoreDatabase.png "RestoreDatabase")

Click **ADD SYSTEM** to select a system that the config file restores.

![RestoreDatabaseAddSystem](/images/TrueCommand/2.0/RestoreDatabaseAddSystem.png "RestoreDatabaseAddSystem")

You can add more servers as needed.

![RestoreDatabaseSelectSystem](/images/TrueCommand/2.0/RestoreDatabaseSelectSystem.png "RestoreDatabaseSelectSystem")

After choosing the systems, click **CONFIRM** to upload the config backup to the selected TrueNAS systems.

![RestoreDatabaseSystemSelected](/images/TrueCommand/2.0/RestoreDatabaseSystemSelected.png "RestoreDatabaseSystemSelected")

## System Inventory

To access the **System Inventory** page, click the **Gear** icon and select **System Inventory**.

![SystemInventoryMenu](/images/TrueCommand/2.1/SystemInventoryMenu.png "Access the System Inventory Page")

{{< hint info >}}
To download a comma deliminated .CVS file for the current inventory page, click **CVS** in the upper-right area of the screen.
{{< /hint >}}

There are three categories of inventory information:

**System** provides information on the **Manufacturer**, the **Serial** numbers of the controllers, the system's **Support Tier**, the support Contract's expiration date, the **Hostname** of the active controller, the **CPU**, the number of **CPU Cores**, the amount of **Physical Memory**, what **O*S* the system is running, and the **Uptime**.

![SystemInventorySystem](/images/TrueCommand/2.0/SystemInventorySystem.png "System Information")

**Network** provides information about the **Interface** names, **Type**, **Link State** and **MAC** Address.

![SystemInventoryNetwork](/images/TrueCommand/2.0/SystemInventoryNetwork.png "System Network Information")

**Storage** provides information about the **Drives** such as **Name**, **Type** of drive, **Size**, **Model**, **Serial** Number, and location in the **Enclosure**.

![SystemInventoryStorage](/images/TrueCommand/2.0/SystemInventoryStorage.png "System Storage Information")

## iSCSI Management

When creating an iSCSI volume with TrueCommand, you can configure the volume on multiple systems at the same time.
Refer to the [iSCSI section]({{< relref "iscsimanagement.md" >}}) for more information.

## Cluster Managemnet

By definition, clusters span across multiple systems.
TrueCommand instances that are connected to three or more TrueNAS SCALE systems can create clustered volumes.
Refer to the [Clustering section]({{< relref "TrueCommand/Clustering/_index.md" >}}) for more information.
