---
title: "Advanced Settings Screen"
geekdocCollapseSection: true
weight: 30
description: "This article provides information on the **System Settings > Advanced** screen and widget articles."
aliases: /scale/scaleuireference/systemsettings/advancedsettings/
tags:
 - scalesettings
---

{{< toc >}}

TrueNAS SCALE advanced settings screen provides configuration options for the console, syslog, sysctl, replication, cron jobs, init/shutdown scripts, system dataset pool, isolated GPU device(s), and self-encrypting drives.

{{< hint warning >}} 
Advanced settings have reasonable defaults in place. A warning message displays for some settings advising of the dangers making changes.
Changing advanced settings can be dangerous when done incorrectly. Use caution before saving changes. 

![ChangingAdvancedSettingsWarning](/images/SCALE/22.02/ChangingAdvancedSettingsWarning.png "Chaning Advanced Settings Warning") 

Make sure you are comfortable with ZFS, Linux, and system [configuration backup and restoration]({{< relref "GeneralSettings.md" >}}) before making any changes. 
{{< /hint >}}

![SystemAdvancedScreen](/images/SCALE/22.02/SystemAdvancedScreen.png "SCALE Advanced Settings Screen") 


## Article Summaries

{{< children depth="2" description="true" >}}
