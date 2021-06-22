---
title: "General Settings"
geekdocCollapseSection: true
weight: 20
---

The TrueNAS SCALE General Settings section provides settings options for support, graphic user interface, localization, NTP servers, and system configuration. 

![GeneralSettingsSCALE](/images/SCALE/GeneralSettingsSCALE.png "SCALE General Settings Screen")

## Manage Configuration

TrueNAS SCALE allows users to manage the system configuration via uploading/downloading configurations or restting the system to the default configuration. 

{{< tabs "Configuration Options" >}}
{{< tab "Download File" >}}
The *Download File* option downloads your TrueNAS SCALE's current configuration to the local machine.

When you download the configuration file, you have the option to *Export Password Secret Seed*, which includes encrypted passwords in the configuration file. This allows the configuration file to be restored to a different operating system device where the decryption seed is not already present. Users must physically secure configuration backups containing the seed to prevent unauthorized access or password decryption.

We recommend backing up the system configuration regularly. Doing so preserves settings when migrating, restoring, or fixing the system if it runs into any issues. Save the configuration file each time the system configuration changes.
{{< /tab >}}
{{< tab "Upload File" >}}
The *Upload File* option gives users the ability to replace the current system configuration with any previously saved TrueNAS SCALE configuration file.

{{< hint danger >}}
All passwords will be reset if the uploaded configuration file was saved without the Password Secret Seed.
{{< /hint >}}
{{< /tab >}}
{{< tab "Reset to Defaults" >}}
The *Reset to Defaults* option resets the system's configuration to factory settings. After the configuration resets, the system will restart and users must set a new login password.

{{< hint danger >}}
**Save the system's current configuration with the _Download File_ option before resetting the configuration to defualt settings.**
 
If you do not save the system configuration before resetting it, you may lose data that was not backed up, and you will not be able to revert back the previous configuration.
{{< /hint >}}
{{< /tab >}}
{{< /tabs >}}



