---
title: "Configuring SED Settings"
description: "Provides information on adding or modifying self-encrypting drive (SED) user and global passwords in TrueNAS."
weight: 50
aliases:
tags:
 - sed
 - disks
 - settings
keywords:
- enterprise storage solutions
- nas devices
---

{{< include file="/static/includes/AdvancedSettingsWarningSCALE.md" >}}

{{< include file="/static/includes/SEDEnterprise.md" >}}

The **Self-Encrypting Drive(s)** widget on the **System > Advanced Settings** screen allows you set the user and global SED password in TrueNAS.

## Managing Self-Encrypting Drives

The **Self-Encrypting Drive** (SED) widget displays the ATA security user and password configured on the system.

![AdvancedSystemSEDWidget](/images/SCALE/SystemSettings/AdvancedSystemSEDWidget.png "TrueNAS Advanced Settings Self-Encrypting Drive Widget")

Click **Configure** to open the **Self-Encrypting Drive** configuration screen.
The **Self-Encrypting Drive** configuration screen allows users set the ATA security user and create a SED global password.

![AdvancedSystemSelfEncryptingDriveConfigScreen](/images/SCALE/SystemSettings/AdvancedSystemSelfEncryptingDriveConfigScreen.png "TrueNAS Advanced Settings Self-Encrypting Drive screen")

Select the user passed to *camcontrol security -u* to unlock SEDs from the **ATA Security User** dropdown list. Options are **USER** or **MASTER**.

Enter the global password to unlock SEDs in **SED Password** and in **Confirm SED Password**.

Click **Save**.
