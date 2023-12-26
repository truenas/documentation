---
title: "TrueNAS Configuration File Management"
description: "How to find and use TrueNAS system configuration files within TrueCommand."
weight: 25

---

When a system is connected for the first time, TrueCommand downloads and stores a copy of the TrueNAS system configuration file.
This file records all saved system configuration credentials, tasks, and other settings and can be used to restore the settings that were in place when TrueCommand downloaded the TrueNAS configuration file.

TrueCommand automatically checks connected TrueNAS systems hourly for configuration changes.
When changes are found, TrueCommand downloads a fresh copy of the TrueNAS configuration file.
Users can create manual backups as needed.

Every day, TrueCommand checks to see if any TrueNAS configuration files stored longer than seven days can be pruned from the system.
To adjust how many days that backup files are stored, go to the **Administration** page **Configuration** tab.
Removing a TrueNAS system from TrueCommand monitoring results in any related system configuration files being compressed and archived.

## Viewing Backups

To view the current TrueNAS configuration backups, open the **Dashboard**.

![DashboardView](/images/TrueCommand/Dashboard/DashboardView.png "Dashboard View")

Click on the system name of a TrueNAS server to open the single system view.

![DashboardSingleSystemView](/images/TrueCommand/Dashboard/DashboardSingleSystemView.png "Dashboard Single System View")

Click the **Config Backups** button to open the config backup window.

The **Configuration Backup** window displays a list of backups along with the time and date of their creation.

### Create a Config Backup

To create a new backup, click **Create Backup**.

![ConfigBackupsCreate](/images/TrueCommand/Dashboard/ConfigBackupsCreate.png "Config Backups Create")

### Apply a Config Backup

To reset a TrueNAS system to a previous configuration, click the <i class="material-icons" aria-hidden="true" title="History">history</i>icon.
Choose the configuration file to use.
You must reset the TrueNAS system to apply the configuration changes.

![ConfigBackupsList](/images/TrueCommand/Dashboard/ConfigBackupsList.png "Config Backups List")

### Delete a Config Backup

To delete a backup, click the delete <i class="material-icons" aria-hidden="true" title="Delete">delete</i> icon or mark the checkbox and click **Delete Backups**.

![ConfigBackupDelete](/images/TrueCommand/Dashboard/ConfigBackupDelete.png "Config Backup Delete")