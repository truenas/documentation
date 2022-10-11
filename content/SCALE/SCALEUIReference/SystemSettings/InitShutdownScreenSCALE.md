---
title: "Init/Shutdown Script Screens"
description: "This article provides information on the advanced system setting **Init/Shutdown Script** widget and configuration screen settings."
weight: 30
aliases:
tags:
 - scalesettings
 - scaleinitshutdown
---


The **System > Advanced** screen includes configuration settings for setting up init/shutdown scripts in SCALE. 

## Init/Shutdown Scripts Widget
The **Init/Shutdown Scripts** widget displays **No Init/Shutdown Scripts configured** unitl you add either a command or script, then the widget lists the scrips configured on the system.

![AdvancedSystemInitShutdownScriptWidget](/images/SCALE/22.02/AdvancedSystemInitShutdownScriptWidget.png "SCALE Advanced Settings Init/Shutdown Script Widget") 

**Add** opens the **[Add Init/Shutdown Script](#add-or-edit-initshutdown-script-configuration-screens)** configuration screen.
Any script listed is a link that opens the **[Edit Inti/Shutdown Script](#add-or-edit-initshutdown-script-configuration-screens)** configuration screen populated with the settings for that script.

### Add or Edit Init/Shutdown Script Configuration Screens
**Init/Shutdown Scripts** lets users schedule commands or scripts to run at system startup or shutdown. 

![AddInitShutdownScriptConfigScreen](/images/SCALE/22.02/AddInitShutdownScriptConfigScreen.png "SCALE Init/Shutdown Script Settings Screen") 

| Settings | Description |
|----------|-------------|
| **Description** | Comments about this script. |
| **Type **| Select Command for an executable or Script for an executable script. |
| **Command** | Enter the command with any options. |
| **Script** | Select the script. The script runs using [dash(1)](https://manpages.debian.org/testing/dash/sh.1.en.html "dash(1) Page"). |
| **When** | Select when the command or script runs from the dropdown list. Options are **Pre Init** for early in the boot process, after mounting file systems and starting networking. **Post Init** runs at the end of the boot process, before Linux services start. **Shutdown** runs during the system power-off process. |
| **Enabled** | Select to enable this script. When left cleared, it disable the script without deleting it. |
| **Timeout** | Automatically stop the script or command after the specified number of seconds. |


{{< taglist tag="scaleinitshutdown" limit="10" >}}
{{< taglist tag="scalesettings" limit="10" title="Related System Settings Articles" >}}