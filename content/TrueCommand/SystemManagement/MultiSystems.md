---
title: "Multiple Systems"
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

![DashboardSingleSystemView](/images/TrueCommand/2.0/DashboardSingleSystemView.png "Dashboard Single System View")

Click **Config Backups** to open the **Config Backup** window.

The **Configuration Backup** window displays a list of backups with their creation times and dates.

Set the checkbox for the config to restore and click the <mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">restore</mat-icon> **Restore** icon.

![RestoreDatabase](/images/TrueCommand/2.0/RestoreDatabase.png "RestoreDatabase")

Click **ADD SYSTEM** to select a system that the config file restores.

![RestoreDatabaseAddSystem](/images/TrueCommand/2.0/RestoreDatabaseAddSystem.png "RestoreDatabaseAddSystem")

You can add more servers as needed.

![RestoreDatabaseSelectSystem](/images/TrueCommand/2.0/RestoreDatabaseSelectSystem.png "RestoreDatabaseSelectSystem")

Click **CONFIRM** to upload the config backup to the chosen TrueNAS systems.

![RestoreDatabaseSystemSelected](/images/TrueCommand/2.0/RestoreDatabaseSystemSelected.png "RestoreDatabaseSystemSelected")

## System Inventory

To access the **System Inventory** page, click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon and select **System Inventory**.

![SystemInventoryMenu](/images/TrueCommand/2.1/SystemInventoryMenu.png "Access the System Inventory Page")

{{< hint type=note >}}
To download a comma-delimited <file>CSV</file> file for the current inventory page, click **CSV** in the upper-right area of the screen.
{{< /hint >}}

There are three inventory information tabs:

{{< tabs "System Inventory" >}}
{{< tab "System" >}}
The **System** tab provides information on the **Manufacturer**, the controllers' **Serial** numbers, the system **Support Tier**, the support Contract expiration date, the active controller **Hostname**, the **CPU**, the number of **CPU Cores**, the amount of **Physical Memory**, what **OS** the system is running, and the **Uptime**.

![SystemInventorySystem](/images/TrueCommand/2.0/SystemInventorySystem.png "System Information")
{{< /tab >}}

{{< tab "Network" >}}
The **Network** tab provides information about the **Interface** names, **Type**, **Link State** and **MAC** address.

![SystemInventoryNetwork](/images/TrueCommand/2.0/SystemInventoryNetwork.png "System Network Information")
{{< /tab >}}

{{< tab "Storage" >}}
The **Storage** tab provides information about the **Drives**, such as **Name**, **Type**, **Size**, **Model**, **Serial** number, and **Enclosure** location.

![SystemInventoryStorage](/images/TrueCommand/2.0/SystemInventoryStorage.png "System Storage Information")
{{< /tab >}}
{{< /tabs >}}

## iSCSI Management

With TrueCommand, you can configure iSCSI volumes on multiple systems simultaneously.
Refer to the [iSCSI section]({{< relref "iscsimanagement.md" >}}) for more information.
