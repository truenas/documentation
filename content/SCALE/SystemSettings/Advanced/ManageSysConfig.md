---
title: "Managing the System Configuration"
description: "Provides information on downloading your TrueNAS configuration to back up system settings, uploading a new configuration file, and resetting back to default settings."
weight: 15
aliases:
 - /scale/scaletutorials/systemsettings/advanced/managesysconfig/
 - /scale/scaletutorials/systemsettings/general/managesysconfigscale/
tags:
 - backup
 - settings
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
- backup and recovery
- hybrid storage
doctype: tutorial
---


TrueNAS allows users to manage the system configuration by uploading or downloading configurations or by resetting the system to the default configuration.

## System Configuration Options

The **Manage Configuration** option on the **System > Advanced Settings** screen provides three options:

* **Download File** downloads your system configuration settings to a file on your system.
* **Upload File** allows you to upload a replacement configuration file.
* **Reset to Defaults** resets system configuration settings back to factory settings.

### Downloading the File

The **Download File** option downloads your TrueNAS current configuration to the local machine.

A system config file is a database file containing your settings, including accounts, directory services, networking, services, shares, storage configuration, system settings, data protection tasks, and more.

{{< include file="/static/includes/DownloadSystemConfigFileSCALE.md" >}}

### Configuration Backup Contents

A downloaded configuration file always contains the full settings database.
The **Export Password Secret Seed** option determines whether TrueNAS can restore the sensitive, encrypted fields in that database.

The secret seed (the <file>pwenc_secret</file> file) is the key TrueNAS uses to decrypt protected fields in the configuration database.
When you download the configuration file without the secret seed and later restore it, TrueNAS cannot decrypt these fields.
It generates a new secret seed and clears the affected values.
It empties some values and removes others entirely.
For example, it disables SMB authentication for all local users and deletes saved cloud and SSH connection credentials.
Download the file with the secret seed to keep these values on restore.

In this table, **Yes** means the item is present and usable after a restore.
TrueNAS does not store items marked **Never** in the configuration file, so back them up separately.

{{< truetable >}}
| Item | Without Secret Seed | With Secret Seed |
|------|---------------------|------------------|
| User and root or admin login passwords | Yes | Yes |
| API keys | Yes | Yes |
| Local user SMB (NT) password hashes | No | Yes |
| Global and per-disk SED passwords | No | Yes |
| ZFS encryption keys (key-type datasets and pools) | No | Yes |
| ZFS encryption passphrases (passphrase-type datasets) | Never | Never |
| SSH host keys (server keypairs) | No | Yes |
| SSH connection keypairs (keychain credentials) | No | Yes |
| Cloud sync and cloud backup credentials | No | Yes |
| Certificate and CSR private keys | No | Yes |
| iSCSI CHAP secrets | No | Yes |
| Directory services credentials and Kerberos keytabs | No | Yes |
| Service passwords (email, UPS, SNMP v3, and similar) | No | Yes |
| App and container registry credentials | No | Yes |
| IPMI/BMC password | Never | Never |
{{< /truetable >}}

{{< hint type=info title="Notes on Backup Contents" >}}
TrueNAS stores login passwords and API keys as one-way hashes rather than encrypted values, so it restores them correctly with or without the secret seed.

Only you know ZFS passphrases, and TrueNAS never writes them to the configuration file.
The BMC hardware stores the IPMI/BMC password, not TrueNAS.

<!-- DOCS-2693 KMIP returned to draft for TrueNAS 26; reintroduce in TrueNAS 27 and restore the ConfiguringKMIP.md relref
When you configure KMIP, the KMIP server holds SED keys and ZFS key-type encryption keys, and the configuration file does not contain them.
-->

Always back up encryption key files and passphrases separately in a secure location.
{{< /hint >}}

### Uploading the File

The **Upload File** option gives users the ability to replace the current system configuration with any previously saved TrueNAS configuration file.

{{< include file="/static/includes/WhyUploadConfig.md" >}}

If you do not save the secret seed by downloading the system config file, various services can break due to missing information.
Without the secret seed, encrypted fields are set to empty values. For example, SMB via local accounts and apps.
Always select the option to save the secret seed when downloading the system config file!

Uploading a configuration file from a FreeBSD-based release wipes any existing administrative users and replaces them with the original root user and password from the uploaded configuration file.
To secure the system after restoring from a FreeBSD-based TrueNAS config file, log in with the original root user credentials, recreate an administrative account, and finally re-disable the root account password.

### Resetting to Defaults

{{< enterprise >}}
Enterprise High Availability (HA) systems should never reset their system configuration to defaults.
Contact TrueNAS Enterprise Support if you need to reset the system configuration.

{{< expand "TrueNAS Enterprise Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

Save the current system configuration with the **Download File** option before resetting the configuration to default settings!
If you do not save the system configuration before resetting it, you could lose data that was not backed up, and you cannot revert to the previous configuration.

The **Reset to Defaults** option resets the system configuration to factory settings.
After the configuration resets, the system restarts, and users must set a new login password.

### Remote Backups of the Config File

TrueCommand provides an easy solution for users who want to schedule an automatic remote backup of the system configuration file:
1. [Set up TrueCommand](https://www.truenas.com/docs/truecommand/tcgettingstarted/install/).
2. [Add their TrueNAS system](https://www.truenas.com/docs/truecommand/tcgettingstarted/connectingtruenas/).
3. Create and schedule the [configuration file backup](https://www.truenas.com/docs/truecommand/userguide/systemmanagement/truenasconfigmanage/#create-a-config-backup).
