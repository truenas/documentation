---
title: "Managing the System Configuration"
description: "This article provides information on downloading your TrueNAS configuration to back up system settings, or uploading a new configuration file, and resetting back to default settings."
weight: 15
aliases:
tags:
 - scalebackup
 - scalesettings
---


TrueNAS SCALE allows users to manage the system configuration by uploading or downloading configurations, or by resetting the system to the default configuration. 

## System Configuration Options

The **Manage Configuration** option on the **system Settings > General** screen provides three options:

* **Download File** that downloads your system configuration settings to a file on your system.
* **Upload File** that allows you to upload a replacement configuration file.
* **Reset to Defaults** that resets system configuration settings back to factory settings.

### Downloading the File
The **Download File** option downloads your TrueNAS SCALE current configuration to the local machine.

When you download the configuration file, you have the option to **Export Password Secret Seed**, which includes encrypted passwords in the configuration file. 
This allows you to restore the configuration file to a different operating system device where the decryption seed is not already present. 
Users must physically secure configuration backups containing the seed to prevent unauthorized access or password decryption.

We recommend backing up the system configuration regularly. 
Doing so preserves settings when migrating, restoring, or fixing the system if it runs into any issues. 
Save the configuration file each time the system configuration changes.

### Uploading the File
The **Upload File** option gives users the ability to replace the current system configuration with any previously saved TrueNAS SCALE configuration file.

{{< hint danger >}}
All passwords are reset if the uploaded configuration file was saved without the selecting **Save Password Secret Seed**.
{{< /hint >}}

### Resetting to Defaults
The **Reset to Defaults** option resets the system configuration to factory settings. 
After the configuration resets, the system restarts and users must set a new login password.

{{< hint danger >}}
Save the system current configuration with the **Download File** option before resetting the configuration to default settings!
 
If you do not save the system configuration before resetting it, you could lose data that was not backed up, and you cannot revert to the previous configuration.
{{< /hint >}}

{{< taglist tag="scalesettings" limit="10" >}}
{{< taglist tag="scalebackup" limit="10" title="Related Backup Articles" >}}
