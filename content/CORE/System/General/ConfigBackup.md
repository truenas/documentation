---
title: "System Config Backups"
weight: 20
---

It is highly recommended to back up the system configuration regularly.
This preserves settings when migrating, restoring, or if the system runs into any issues.
Save the configuration file each time the system configuration changes.

To back up the system configuration, go to **System > General** and click *SAVE CONFIG*.

{{< hint warning >}}
The configuration file contains sensitive data about the TrueNAS system.
Ensure that it is stored somewhere safe.
{{< /hint >}}

TrueNAS automatically backs up the configuration database to the [system dataset](/CORE/System/SystemDataset/) every morning at 3:45 (relative to system time settings).
However, this backup does not occur if the system is shut down at that time.
When the system dataset is stored on the boot pool and the boot pool becomes unavailable, the backup also loses availability.

{{< hint warning >}}
SSH keys are not stored in the configuration database and must be backed up separately.
System host keys are files with names beginning with *ssh_host_* in <file>/usr/local/etc/ssh/</file>.
The root user keys are stored in <file>/root/.ssh</file>.
{{< /hint >}}

There are two types of passwords affected by the system backup: hashed and encrypted:

{{< tabs "Backup Passwords" >}}
{{< tab "Hashed" >}}
User account passwords for the base operating system are stored as hashed values.
These do not need to be encrypted to be secure and are saved in the system configuration backup.
{{< /tab >}}
{{< tab "Encrypted" >}}
Other passwords, like iSCSI CHAP passwords, Active Directory bind credentials, and cloud credentials are stored in an encrypted form to prevent them from being visible as plain text in the saved system configuration.
The key or seed for this encryption is normally stored only on the operating system device.
{{< /tab >}}
{{< /tabs >}}

When *SAVE CONFIG* is chosen, a dialog gives two options:
1. *Export Password Secret Seed* includes encrypted passwords in the configuration file.
   This allows the configuration file to be restored to a different operating system device where the decryption seed is not already present.
   Configuration backups containing the seed must be physically secured to prevent decryption of passwords and unauthorized access.
2. *Export Pool Encryption Keys* includes the encryption keys of encrypted pools in the configuration file.
   The encryption keys are restored if the configuration file is uploaded to the system using *UPLOAD CONFIG*.
