---
title: "Managing the System Configuration"
description: "Provides information on downloading your TrueNAS configuration to back up system settings, uploading a new configuration file, and resetting back to default settings."
weight: 15
tags:
 - backup
 - settings
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
- backup and recovery
- hybrid storage
---

TrueNAS allows users to manage the system configuration by uploading or downloading configurations, or by resetting the system to the default configuration. 

## System Configuration Options
The **Manage Configuration** option on the **System > General Settings** screen provides three options:

* **Download File** that downloads your system configuration settings to a file on your system.
* **Upload File** that allows you to upload a replacement configuration file.
* **Reset to Defaults** that resets system configuration settings back to factory settings.

### Downloading the File
The **Download File** option downloads your TrueNAS current configuration to the local machine.

{{< include file="/static/includes/DownloadSystemConfigFileSCALE.md" >}}

### Uploading the File
The **Upload File** option gives users the ability to replace the current system configuration with any previously saved TrueNAS configuration file.

{{< hint type=warning >}}
All passwords are reset if the uploaded configuration file was saved without selecting **Save Password Secret Seed**.
{{< /hint >}}

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
After the configuration resets, the system restarts and users must set a new login password.

### Backing Up the Config File
TrueNAS does not automatically back up the system configuration file to the system dataset.

Users who want to schedule an automatic backup of the system configuration file should:
1. [Set up TrueCommand](https://www.truenas.com/docs/truecommand/tcgettingstarted/install/).
2. [Add their TrueNAS system](https://www.truenas.com/docs/truecommand/tcgettingstarted/connectingtruenas/).
3. Create and schedule the [configuration file backup](https://www.truenas.com/docs/truecommand/userguide/systemmanagement/truenasconfigmanage/#create-a-config-backup).

Users can manually back up the TrueNAS config file by downloading and saving the file to a location that is automatically backed up.
