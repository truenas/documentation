---
title: "Backing up the System Configuration"
weight: 20
---

It is highly recommended to back up the system configuration regularly. This
preserves settings when migrating, restoring, or if the system runs into any
issues. It is recommended to save the configuration file after changing
the system configuration.

To back up the system configuration, go to **System > General** and click
*SAVE CONFIG*.
> NOTE: The configuration file contains sensitive data about the TrueNAS system.
> Ensure that it is stored somewhere safe.

TrueNAS automatically backs up the configuration database to the system dataset
every morning at 3:45. However, this backup does not occur if the system is shut
down at that time. If the system dataset is stored on the boot pool and the boot
pool becomes unavailable, the backup will also not be available.

{{% alert title=Warning color=warning %}}
SSH keys are not stored in the configuration database and must be backed up
separately. System host keys are files with names beginning with `ssh_host_` in
`/usr/local/etc/ssh/`. The root user keys are stored in `/root/.ssh`.
{{% /alert %}}

There are two types of passwords. User account passwords for the base operating
system are stored as hashed values, do not need to be encrypted to be secure,
and are saved in the system configuration backup. Other passwords, like iSCSI
CHAP passwords, Active Directory bind credentials, and cloud credentials are
stored in an encrypted form to prevent them from being visible as plain text in
the saved system configuration. The key or seed for this encryption is normally
stored only on the operating system device. When *SAVE CONFIG* is chosen, a
dialog gives two options. *Export Password Secret Seed* includes passwords in
the configuration file which allows the configuration file to be restored to a
different operating system device where the decryption seed is not already
present. Configuration backups containing the seed must be physically secured
to prevent decryption of passwords and unauthorized access.
*Export Pool Encryption Keys* includes the encryption keys of encrypted pools
in the configuration file. The encryption keys are restored if the configuration
file is uploaded to the system using *UPLOAD CONFIG*.

