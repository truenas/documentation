---
title: "Managing Cron Jobs"
description: "This article provides information on adding or modifying cron jobs in SCALE."
weight: 10
aliases:
tags:
 - scalecronjob
 - scalesettings
---


Cron jobs allow users to configure jobs that run specific commands or scripts on a regular schedule using [cron(8)](https://manpages.debian.org/testing/cron/cron.8.en.html "Cron Man Page"). Cron Jobs help users run repetitive tasks.

{{< include file="/_includes/AdvancedSettingsWarningSCALE.md" type="page" >}}

The **Cron Jobs** widget on the **System > Advanced** screen displays **No Cron Jobs configured** until you add a cron job, and then it displays information on cron job(s) configured on the system.

![AdvancedSettingsCronJobWidget](/images/SCALE/22.02/AdvancedSettingsCronJobWidget.png "SCALE Advanced Settings Cron Job Widget") 

Click **Add** to open the **Add Cron Job** configuration screen to create a new cron job, or if you want to modify an existing job, click anywhere on the item to open the **Edit Cron Jobs** configuration screen populated with the settings for that cron job. 
The **Add Cron Job** and **Edit Cron Job** configuration screens display the same settings. 

![AddCronJobsScreen](/images/SCALE/22.02/AddCronJobsScreen.png "SCALE Console Settings Screen") 

Enter a description for the cron job.

Next, enter the full path to the command or script to run in **Command**. For example, a command string to create a list of users on the system and write that list to a file enter `cat /etc/passwd > users_$(date +%F).txt`.

Select a user account to run the command from the **Run As User** dropdown list. The user must have permissions allowing them to run the command or script. 

Select a schedule preset or choose **Custom** to open the advanced scheduler. 
Note that an in-progress cron task postpones any later scheduled instance of the same task until the running task is complete. 

If you want to hide standard output (stdout) from the command, select **Hide Standard Output**. If left cleared, TrueNAS emails any standard output to the user account cron that ran the command. 

To hide error output (stderr) from the command, select **Hide Standard Error**. If left cleared, TrueNAS emails any error output to the user account cron that ran the command. 

Select **Enabled** to enable this cron job. If you leave this checkbox cleared it disables the cron job without deleting it.

Click **Save**.

{{< taglist tag="scalecronjob" limit="10" >}}
