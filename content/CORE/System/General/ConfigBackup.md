---
title: "System Config Backups"
weight: 20
---

We highly recommend backing up the system configuration regularly.
Doing so preserves settings when migrating, restoring, or fixing the system if it runs into any issues.
Save the configuration file each time the system configuration changes.

## Manual Backup

To back up the system configuration, go to **System > General** and click *SAVE CONFIG*.

{{< hint warning >}}
The configuration file contains sensitive data about the TrueNAS system.
Ensure that it is stored somewhere safe.
{{< /hint >}}

## Automatic Backup

TrueNAS automatically backs up the configuration database to the [system dataset]({{< relref "SystemDataset.md" >}}) every morning at 3:45 (relative to system time settings).
However, this backup does not occur if the system is shut down at that time.
When the system dataset is stored on the boot pool and the boot pool becomes unavailable, the backup also loses availability.

{{< hint warning >}}
SSH keys are not stored in the configuration database and must be backed up separately.
System host keys are files with names beginning with *ssh_host_* in <file>/usr/local/etc/ssh/</file>.
The root user keys are stored in <file>/root/.ssh</file>.
{{< /hint >}}

## Passwords
The system backup affects two types of passwords: hashed and encrypted:

{{< tabs "Backup Passwords" >}}
{{< tab "Hashed" >}}
TrueNAS stores user account passwords for the base operating system as hashed values.
The system will save them in the system configuration backup, so they do not need to be encrypted to be secure.
{{< /tab >}}
{{< tab "Encrypted" >}}
The system will save other passwords, like iSCSI CHAP passwords, Active Directory bind credentials, and cloud credentials in an encrypted form to prevent them from being visible as plain text in the saved system configuration.
The key or seed for this encryption is normally stored only on the operating system device.
{{< /tab >}}
{{< /tabs >}}

There are two options after clicking *SAVE CONFIG*:
1. *Export Password Secret Seed* includes encrypted passwords in the configuration file.
   This allows the configuration file to be restored to a different operating system device where the decryption seed is not already present.
   Users must physically secure configuration backups containing the seed to prevent unauthorized access or password decryption.
2. *Export Pool Encryption Keys* includes encrypted pools' encryption keys in the configuration file.
   Users can restore the encryption keys by uploading the configuration file to the system using *UPLOAD CONFIG*.
   
## Backup Contents

Backup configs store information for accounts, network, services, and system settings, as well as settings for tasks and virtual machines.   
  
Backup configs also index ID's and credentials for account, network, and system services.

Users can view the contents of the backup config using database viewing software like [SQLite DB Browser](https://sqlitebrowser.org/dl/).

## Resetting and Restoring Configurations

### Reset Configuration

Users can reset their system's configuration to factory settings by going to **System > General** and clicking *RESET CONFIG*.

{{< hint danger >}}
**Save the system's current configuration before clicking resetting the configuration.**
 
If you do not save the system configuration before resetting it, you may lose any data that was not backed up and will not be able to revert back the previous settings.
{{< /hint >}}

After resetting the system configuration, the system will restart and you will have to set a new login password.

### Restore Configuration

Users can restore configurations by going to **System > General** and clicking *UPLOAD CONFIG*.

When uploading a config, users can select any previously saved config files for their system. 


