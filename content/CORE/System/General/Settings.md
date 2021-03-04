---
title: "Settings"
weight: 10
---

{{< toc >}}

TrueNAS has numerous settings contained inside **System > General**.
These allow a wide range of system customization, from changing the web interface address, localization options, and data collection to SED, console, and storage options.

![System General](/images/CORE/12.0/SystemGeneral.png "System General")

{{< include file="static/includes/SystemGeneralFields.md.part" markdown="true" >}}

After making any changes, click **SAVE**.
Changes to any of the web interface fields can interrupt web interface connectivity while the new settings are applied.

This screen also contains these buttons:

{{< tabs "System General Buttons" >}}
{{< tab "SAVE CONFIG" >}}
Saves a backup copy of the current configuration database in the format *hostname-version-architecture*.
This file is downloaded to the computer accessing the web interface.
Saving the configuration after making any configuration changes is highly recommended.

See [System Config Backups](/CORE/System/General/GeneralSettings/) for more details about backing up the system configuration.
{{< /tab >}}
{{< tab "UPLOAD CONFIG" >}}
Changes the system configuration settings.
Browse to a previously saved configuration file to restore that configuration.

{{< hint warning >}}
This can cause unexpected changes to system settings.
Investigate both the current system settings and the settings stored in the other configuration file before uploading a config file to TrueNAS.
{{< /hint >}}
{{< /tab >}}
{{< tab "RESET CONFIG" >}}
Reset the configuration database to the default base version.
This does not delete user SSH keys or any other data stored in a user home directory.
Since configuration changes stored in the configuration database are erased, this option is useful when correcting mistakes or returning a test system to the original configuration.
{{< /tab >}}
{{< /tabs >}}
