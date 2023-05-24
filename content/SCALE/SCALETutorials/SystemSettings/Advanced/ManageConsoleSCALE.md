---
title: "Managing the Console Setup Menu"
description: "This article provides information on the Console setup menu configuration settings including the serial port, port speed, password protection, and the banner users see."
weight: 10
aliases:
tags:
 - scaleconsole
 - scalesettings
---

The **Console** widget on the **System Setting > Advanced** screen displays current console settings for TrueNAS.

![AdvancedSystemSettingsConsoleWidget](/images/SCALE/22.02/AdvancedSystemSettingsConsoleWidget.png "SCALE Advanced Settings Console Widget") 

Click **Configure** to open the **Console** configuration screen. The **Console** configuration settings determine how the [Console setup menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}) displays, the serial port it uses and the speed of the port, and the banner users see when it is accessed.

![ConsoleConfigScreen](/images/SCALE/22.02/ConsoleConfigScreen.png "SCALE Console Settings Screen") 

To display the console without being prompted to enter a password, select **Show Text Console without Password Prompt**. Leave it clear to add a login prompt to the system before showing the console menu. 

Select **Enable Serial Console** to enable the serial console but do not select this if the serial port is disabled. 

Enter the serial console port address in **Serial Port** and set the speed (in bits per second) from the **Serial Speed** dropdown list. Options are 9600, 19200, 38400, 57600 or 115200. 

Finally, enter the message you want to display when a user logs in with SSH in **MOTD Banner**. 

Click **Save**

{{< taglist tag="scaleconsole" limit="10" >}}