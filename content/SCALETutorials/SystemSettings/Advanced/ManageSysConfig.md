---
title: "Managing the System Configuration"
description: "Provides information on downloading your TrueNAS configuration to back up system settings, uploading a new configuration file, and resetting back to default settings."
weight: 4
tags:
 - backup
 - settings
keywords:
 - enterprise storage solutions
 - nas storage solutions
 - software storage solutions
 - backup and recovery
 - hybrid storage
aliases:
 - /scaletutorials/systemsettings/general/managesysconfigscale/
---

TrueNAS allows users to manage the system configuration by uploading or downloading configurations or by resetting the system to the default configuration.

## System Configuration Options

The **Manage Configuration** option on the **System > Advanced Settings** screen provides three options:

* **Download File** that downloads your system configuration settings to a file on your system.
* **Upload File** that allows you to upload a replacement configuration file.
* **Reset to Defaults** resets system configuration settings back to factory settings.

### Downloading the File

The **Download File** option downloads your TrueNAS current configuration to the local machine.

A system config file is a database file containing your settings, including accounts, directory services, networking, services, shares, storage configuration, system settings, data protection tasks, and more.

{{< include file="/static/includes/DownloadSystemConfigFileSCALE.md" >}}

### Uploading the File

The **Upload File** option gives users the ability to replace the current system configuration with any previously saved TrueNAS configuration file.

{{< include file="/static/includes/WhyUploadConfig.md" >}}

If you do not save the secret seed by downloading the system config file, various services can break due to missing information.
Without the secret seed, encrypted fields are set to empty values. For example, SMB via local accounts and apps.
Always select the option to save the secret seed when downloading the system config file!

Uploading a configuration file from a FreeBSD-based release wipes any existing administrative users and replaces with the original root user and password from the uploaded configuration file.
To secure the system after restoring from a FreeBSD-based TrueNAS config file, log in with the original root user credentials, recreate an administrative account, and finally re-disable the root account password.

### Resetting to Defaults

{{< enterprise >}}
Enterprise High Availability (HA) systems should never reset their system configuration to defaults.
Contact TrueNAS Enterprise Support if a system configuration reset is required.

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
