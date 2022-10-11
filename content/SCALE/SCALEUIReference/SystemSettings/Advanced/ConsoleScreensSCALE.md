---
title: "Console Advanced Settings Screens"
description: "This article provides information on the advanced system setting **Console** widget and configuration screen settings that apply to the Console setup menu."
weight: 15
aliases:
tags:
 - scalesettings
 - scaleconsole
---

{{< toc >}}

The **System > Advanced** screen includes configuration settings for the Console setup menu.

## Console Widget
The **Console** widget on the **System Setting > Advanced** screen displays current console settings for TrueNAS.

![AdvancedSystemSettingsConsoleWidget](/images/SCALE/22.02/AdvancedSystemSettingsConsoleWidget.png "SCALE Advanced Settings Console Widget") 

**Configure** opens the **[Console](#console-configuration-screen)** configuration screen.

### Console Configuration Screen
**Console** settings configure how the [Console setup menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}) displays, the serial port it uses and the speed of the port, and the banner users see when it is accessed.

![ConsoleConfigScreen](/images/SCALE/22.02/ConsoleConfigScreen.png "SCALE Console Settings Screen") 

| Settings | Description |
|----------|-------------|
| **Show Text Console without Password Prompt** | Select to display the console without being prompted to enter a password. Leave clear to add a login prompt to the system before showing the console menu. |
| **Enable Serial Console** | Select to enable the serial console. Do not select this if the serial port is disabled. |
| **Serial Port** | Enter the serial console port address. |
| **Serial Speed** | Select the speed (in bits per second) the serial port uses from the dropdown list. Options are 9600, 19200, 38400, 57600 or 115200. |
| **MOTD Banner** | Enter the message you want to display when a user logs in with SSH. |

{{< taglist tag="scaleconsole" limit="10" >}}
{{< taglist tag="scalesettings" limit="10" title="Related System Settings Articles" >}}