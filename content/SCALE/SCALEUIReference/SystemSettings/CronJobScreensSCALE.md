---
title: "Cron Job Screens"
description: "This article provides information on the advanced system setting **Cron Job** widget and configuration screen settings."
weight: 25
aliases:
tags:
 - scalesettings
 - scaleinitshutdown
---


The **System > Advanced** screen includes configuration settings for setting up cron jobs in SCALE. 

## Cron Jobs Widget
The **Cron Jobs** widget displays **No Cron Jobs configured** unitl you add a cron job, then it displays information on cron job(s) configured on the system.

![AdvancedSettingsCronJobWidget](/images/SCALE/22.02/AdvancedSettingsCronJobWidget.png "SCALE Advanced Settings Cron Job Widget") 

**Add** opens the **[Add Cron Job](#add-or-edit-cron-job-configuration-screen) configuration sceen.
Click on any job listed in the widget to open the **[Edit Cron Jobs](#add-or-edit-cron-job-configuration-screen) configuration screen populated with the settings for that cron job.

### Add or Edit Cron Job Configuration Screen
The **Add Cron Job** and **Edit Cron Job** configuration screens display the same settings. **Cron Jobs** lets users configure jobs that run specific commands or scripts on a regular schedule using [cron(8)](https://manpages.debian.org/testing/cron/cron.8.en.html "Cron Man Page"). Cron Jobs help users run repetitive tasks.

![ConsoleConfigScreen](/images/SCALE/22.02/ConsoleConfigScreen.png "SCALE Console Settings Screen") change

| Settings | Description |
|----------|-------------|
| **Description** | Enter a description for the cron job. |
| **Command** | Enter the full path to the command or script to run. For example, a command string to create a list of users on the system and write that list to a file enter `cat /etc/passwd > users_$(date +%F).txt`.  |
| **Run As User** | Select a user account to run the command. The user must have permissions allowing them to run the command or script. |
| **Schedule** | Select a schedule preset or choose **Custom** to open the advanced scheduler. Note that an in-progress cron task postpones any later scheduled instance of the same task until the running task is complete. |
| **Hide Standard Output** | Select to hide standard output (stdout) from the command. If left cleared, TrueNAS mails any standard output to the user account cron that ran the command. |
| **Hide Standard Error** | Select to hide error output (stderr) from the command. If left cleared, TrueNAS mails any error output to the user account cron that ran the command. |
| **Enabled** | Select to enable this cron job. Leave cleared to disable the cron job without deleting it. |


{{< taglist tag="scalecronjob" limit="10" >}}
{{< taglist tag="scalesettings" limit="10" title="Related System Settings Articles" >}}