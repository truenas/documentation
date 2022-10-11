---
title: "Self-Encrypting Drives Advanced Settings Screens"
description: "This article provides information on the advanced system setting **Self-Encrypting Drives** widget and configuration screen settings."
weight: 0
aliases:
tags:
 - scalesettings
 - scalesed
 - scaledisks
---


The **System > Advanced** screen includes configuration settings for setting up self-encrypting drives (SEDs) in the system. 

## Self-Encrypting Drive
The **Self-Encrypting Drive** (SED) widget displays the ATA security user and password configured on the system. 

![AdvancedSystemSEDWidget](/images/SCALE/22.02/AdvancedSystemSEDWidget.png "SCALE Advanced Settings Self-Encrypting Drive Widget") 

**Configure** opens the **[Self-Encrypting Drive](#self-encrypting-drive-configuration-screen)** configuration screen.

### Self-Encrypting Drive Configuration Screen
The **Self-Encrypting Drive** configuration screen allows users set the ATA security user and create a SED global password.
{{< expand "Click Here for More Information" "v" >}}

![AdvancedSystemSelfEncryptingDriveConfigScreen](/images/SCALE/22.02/AdvancedSystemSelfEncryptingDriveConfigScreen.png "SCALE Advanced Settings Self-Encrypting Drive screen") 

| Settings | Description |
|----------|-------------|
| **ATA Security User** | Select the user passed to camcontrol security -u to unlock SEDs from the dropdoan list. Options are **USER** or **MASTER**. |
| **SED Password** | Enter the global password to unlock SEDs. |
| **Confirm SED Password** | Re-enter the global password to unlock SEDs. |
{{< /expand >}}

{{< taglist tag="scalesed" limit="10" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Disk Articles" >}}
{{< taglist tag="scalesettings" limit="10" title="Related System Settings Articles" >}}