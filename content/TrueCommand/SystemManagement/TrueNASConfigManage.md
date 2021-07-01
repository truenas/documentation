---
title: "TrueNAS Configuration File Management"
weight: 25
---

TrueCommand automatically backs up the TrueNAS configuration every 24 hours as well as any time there is a database change or a TrueCommand Audit Log entry.
Users can create manual backups as needed.

## Viewing Backups

To view the current TrueNAS configuration backups, open the **Dashboard**.

![DashboardView](/images/TrueCommand/2.0/DashboardView.png "Dashboard View")

Click on the system name for a TrueNAS server to open the Single System view.

![DashboardSingleSystemView](/images/TrueCommand/2.0/DashboardSingleSystemView.png "Dashboard Single System View")

Click the **Config Backups** Button to open the config backup window.

The **Configuration Backup Window** shows a list of backups along with the time and date of their creation.


### Create a config backup

To create a new backup, click **Create Backup**.

![ConfigBackupsCreate](/images/TrueCommand/2.0/ConfigBackupsCreate.png "Config Backups Create")

A maximum of one config backup per day can exist.  
If a prior config backup for the current day exists, creating a new one will overwrite the previous backup.

{{< hint info >}}
By default, TrueCommand retains seven backups.
Local instances of TrueCommand can raise or lower this figure as desired. 
This can be changed in the Configuration Tab of the Administration Page.
{{< /hint >}}

### Apply a config backup

To reset a TrueNAS system to a previous configuration, click the <i class="material-icons" aria-hidden="true" title="History">history</i>icon.
Choose the configuration file to use.
You must reset the TrueNAS system to apply the configuration changes.

![ConfigBackupsList](/images/TrueCommand/2.0/ConfigBackupsList.png "Config Backups List")

### Delete a config backup

To Delete a backup, click the Delete Button delete button <i class="material-icons" aria-hidden="true" title="Delete">delete</i> or mark the checkbox and click **Delete Backups**.

![ConfigBackupDelete](/images/TrueCommand/2.0/ConfigBackupDelete.png "Config Backup Delete")
