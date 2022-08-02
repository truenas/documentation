---
title: "Using Configuration Backups"
weight: 10
aliases:
  - /core/system/general/configbackup
---

We highly recommend backing up the system configuration regularly.
Doing so preserves settings when migrating, restoring, or fixing the system if it runs into any issues.
Save the configuration file each time the system configuration changes.

Backup configs store information for accounts, network, services, tasks, virtual machines, and system settings. 
Backup configs also index ID's and credentials for account, network, and system services.
Users can view the contents of the backup config using database viewing software like [SQLite DB Browser](https://sqlitebrowser.org/dl/).

## Backing Up System Configurations

### Manual Backup

Go to **System > General** and click **SAVE CONFIG**, then enter your password. 

![SaveUploadResetConfig](/images/CORE/12.0/SaveUploadResetConfig.png "Save, Upload, Reset Config")

{{< hint warning >}}
The configuration file contains sensitive data about the TrueNAS system.
Ensure that it is stored somewhere safe.
{{< /hint >}}

### Automatic Backup

TrueNAS automatically backs up the configuration database to the [system dataset]({{< relref "/CORE/UIReference/System/SystemDataset.md" >}}) every morning at 3:45 (relative to system time settings).
However, this backup does not occur if the system is off at that time.
If the system dataset is on the boot pool and it becomes unavailable, the backup also loses availability.

{{< hint warning >}}
You must backup SSH keys separately. TrueNAS does not store them in the configuration database.
System host keys are files with names beginning with ssh_host_ in <file>/usr/local/etc/ssh/</file>.
The root user keys are stored in <file>/root/.ssh</file>.
{{< /hint >}}

### Passwords
The system backup affects two types of passwords: hashed and encrypted.

**Hashed**: TrueNAS stores user account passwords for the base operating system as hashed values. The system saves them in the system configuration backup, so they do not need to be encrypted to be secure.

**Encrypted**: The system saves other passwords, like iSCSI CHAP passwords, Active Directory bind credentials, and cloud credentials in an encrypted form to prevent them from being visible as plain text in the saved system configuration. The key or seed for this encryption is usually only on the operating system device.

There are two options after clicking **SAVE CONFIG**:

**Export Password Secret Seed** includes encrypted passwords in the configuration file. Encrypted passwords allow you to restore the configuration file to a different operating system device where the decryption seed is not present. Users must physically secure configuration backups containing the seed to prevent unauthorized access or password decryption.

**Export Legacy Encryption (GELI) Keys** includes encrypted legacy encryption keys in the configuration file. Users can restore the encryption keys by uploading the configuration file to the system using **UPLOAD CONFIG**.
   
![SaveConfiguration](/images/CORE/12.0/SaveConfiguration.png "Save Configuration")

## Resetting and Restoring Configurations

### Reset Configuration

To reset the system configuration to factory settings, go to **System > General** and click **RESET CONFIG**.

{{< hint danger >}}
**Save the system's current configuration before resetting.**
 
If you do not save the system config before resetting it, you may lose any data that you did not back up. You cannot revert to the previous settings.
{{< /hint >}}

After resetting the system configuration, the system restarts, and you must set a new login password.

### Restore Configuration

Users can restore configurations by going to **System > General** and clicking **UPLOAD CONFIG**.

When uploading a config, you can select any previously saved config files for their system. 
