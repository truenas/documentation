---
title: "Managing SEDs"
description: "This article provides information on adding or modifying self-encrypting drive (SED) user and global passwords in SCALE."
weight: 50
aliases:
tags:
 - scalesed
 - scaledisks
 - scalesettings
---


The **Self-Encrypting Drive(s)** widget on the **System > Advanced** screen allows you set the user and global SED password in SCALE.

## Managing Self-Encrypting Drives

The **Self-Encrypting Drive** (SED) widget displays the ATA security user and password configured on the system. 

![AdvancedSystemSEDWidget](/images/SCALE/22.02/AdvancedSystemSEDWidget.png "SCALE Advanced Settings Self-Encrypting Drive Widget") 

Click **Configure** to open the **Self-Encrypting Drive** configuration screen. 
The **Self-Encrypting Drive** configuration screen allows users set the ATA security user and create a SED global password.

![AdvancedSystemSelfEncryptingDriveConfigScreen](/images/SCALE/22.02/AdvancedSystemSelfEncryptingDriveConfigScreen.png "SCALE Advanced Settings Self-Encrypting Drive screen") 

Select the user passed to camcontrol security -u to unlock SEDs from the **ATA Security User** dropdoan list. Options are **USER** or **MASTER**.

Enter the global password to unlock SEDs in **SED Password** and in **Confirm SED Password**.

Click **Save**.

{{< taglist tag="scalesed" limit="10" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Disks Articles" >}}