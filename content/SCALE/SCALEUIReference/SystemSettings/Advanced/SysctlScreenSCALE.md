---
title: "Sysctl Advanced Settings Screens"
description: "This article provides information on the advanced system setting **Sysctl** widget and configuration screen settings."
weight: 35
aliases:
tags:
 - scalesettings
 - scalesysctl
---


The **System > Advanced** screen includes configuration settings for using the **Sysctl** widget and configuration screen. 

## Sysctl Widget
The **Sysctl** widget displays either **No Sysctl configured** or the existing sysctl settings on the system. 

![AdvancedSysctlWidgetNoSysctl](/images/SCALE/22.02/AdvancedSysctlWidgetNoSysctl.png "SCALE Advanced Settings Sysctl Widget") 

**Add** to add a tunable tha configures a kernel parameter at runtime.

### Add or Edit Sysctl Configuration Screen
The **Add Sysctl** or **Edit Sysctl** configuration screen settings lets users set up tunables that configure kernel parameters at runtime.

![AddSysctlConfigScreens](/images/SCALE/22.02/AddSysctlConfigScreen.png "SCALE Add Sysctl Screen") 

| Settings | Description |
|----------|-------------|
| **Variable** | Enter the name of the sysctl variable to configure. sysctl tunables are used to configure kernel parameters while the system is running and generally take effect immediately. |
| **Value** | Enter a [sysctl](https://man7.org/linux/man-pages/man8/sysctl.8.html) value to use for the loader, **sysctl**, or **rc.conf** variable. |
| **Description** | Enter a description for the tunable. |
| **Enabled** | Select to enable this tunable. Leave clear to disable this tunable without deleting it. |


{{< taglist tag="scalesysctl" limit="10" >}}
{{< taglist tag="scalesettings" limit="10" title="Related System Settings Articles" >}}