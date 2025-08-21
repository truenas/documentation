---
title: "Managing Init/Shutdown Scripts"
description: "Provides information on adding or modifying init/shutdown scripts in TrueNAS."
weight: 50
aliases:
tags:
 - initshutdown
 - settings
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

The **Init/Shutdown Scripts** widget on the **System > Advanced Settings** screen allows you to add scripts to run before or after initialization (start-up), or at shutdown. For example, creating a script to backup your system or run a systemd command before exiting and shutting down the system.

{{< include file="/static/includes/InitShutdownWarning.md" >}}

## Adding an Init/Shutdown Script

The **Init/Shutdown Scripts** widget displays **No Init/Shutdown Scripts configured** until you add either a command or script, and then the widget lists the scripts configured on the system.

Note that the table(s) below can be reorganized by clicking on the column titles. This allows you to toggle the information in each toggle between a descending and ascending order.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemInitShutdownScriptWidget.png" alt="Init/Shutdown Scripts Widget" id="Init/Shutdown Scripts Widget" >}}

Click **Add** to open the **Add Init/Shutdown Script** configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/AddInitShutdownScriptConfigScreen.png" alt="Add Init/Shutdown Script" id="Add Init/Shutdown Script" >}}

Enter a description and then select **Command** or **Script** from the **Type** dropdown list. Selecting **Script** displays additional options.

Enter the command string in **Command**, or if using a script, enter or use the browse to the path in **Script**. The script runs using [dash(1)](https://manpages.debian.org/testing/dash/sh.1.en.html "dash(1) Page").

Select the option from the **When** dropdown list for the time this command or script runs.

Enter the number of seconds after the script runs that the command should stop in **Timeout**.

Select **Enable** to enable the script. Leave clear to disable but not delete the script.

Click **Save**.

## Editing an Init/Shutdown Script

Click a script listed on the **Init/Shutdown Scripts** widget to open the **Edit Init/Shutdown Script** configuration screen populated with the settings for that script.

You can change from a command to a script, and modify the script or command as needed.

To disable but not delete the command or script, clear the **Enabled** checkbox.

Click **Save**.
