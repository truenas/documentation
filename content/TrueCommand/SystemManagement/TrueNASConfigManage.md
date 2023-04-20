---
title: "TrueNAS Configuration File Management"
weight: 25
---

TrueCommand automatically backs up the TrueNAS configuration every 24 hours and any time users make database changes or TrueCommand audit log entries.

Users can create manual backups as needed.

## Viewing Backups

To view the current TrueNAS configuration backups, open the **Dashboard**.

![DashboardView](/images/TrueCommand/2.1/DashboardView.png "Dashboard View")

Click on the system name of a TrueNAS server to open the single system view.

![DashboardSingleSystemView](/images/TrueCommand/2.0/DashboardSingleSystemView.png "Dashboard Single System View")

Click the **Config Backups** button to open the config backup window.

The **Configuration Backup** window displays a list of backups along with the time and date of their creation.


### Create a Config Backup

To create a new backup, click **Create Backup**.

![ConfigBackupsCreate](/images/TrueCommand/2.0/ConfigBackupsCreate.png "Config Backups Create")

A maximum of one config backup per day can exist.  
If a prior config backup for the current day exists, creating a new one overwrites the previous one.

{{< hint type=note >}}
By default, TrueCommand retains seven backups. You can increase or decrease the number on the **Administration** page **Configuration** tab.
Local instances of TrueCommand can increase or decrease this figure as desired. 
{{< /hint >}}

### Apply a Config Backup

To reset a TrueNAS system to a previous configuration, click the <i class="material-icons" aria-hidden="true" title="History">history</i>icon.
Choose the configuration file to use.
You must reset the TrueNAS system to apply the configuration changes.

![ConfigBackupsList](/images/TrueCommand/2.0/ConfigBackupsList.png "Config Backups List")

### Delete a Config Backup

To delete a backup, click the delete <i class="material-icons" aria-hidden="true" title="Delete">delete</i> icon or mark the checkbox and click **Delete Backups**.

![ConfigBackupDelete](/images/TrueCommand/2.0/ConfigBackupDelete.png "Config Backup Delete")