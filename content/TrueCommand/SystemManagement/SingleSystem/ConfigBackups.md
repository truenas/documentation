---
title: "Config Backups"
weight: 20
---

{{< toc >}}

## Create a Backup

To create a config backup for a single system, select that system from the dashboard drop-down or click the system's name in the dashboard window.

On the system's management page, click the *Config Backups* button, then click *CREATE BACKUP*.

![TrueCommandConfigBackups](/images/TrueCommand/2.0/TC20TrueCommandConfigBackups.png "Config Backups")

TrueCommand will create a config backup and display the date it was created, as well as what version of TrueNAS the system was using at the time.

![TrueCommandBackupStats](/images/TrueCommand/2.0/TC20TrueCommandBackupStats.png "Config Backup Info")

## Restore a Database

To restore the system to a backed-up config, click the *Config Backups* button on the system's management page, then click the *Restore database* button to the right of the config.

![TrueCommandRestoreDatabase](/images/TrueCommand/2.0/TC20TrueCommandRestoreDatabase.png "Restore Database")

## Delete Config Backups

To delete a backup config, click the *Config Backups* button on the system's management page, then click the *Delete backup* button to the right of the config.

To delete multiple backup configs, check the boxes to the left of any configs you want to delete, the click the *DELETE SELECTED* button.

![TrueCommandDeleteBackups](/images/TrueCommand/2.0/TC20TrueCommandDeleteBackups.png "DeleteBackups")
