---
title: Jobs Screens
description: "Describes the TrueNAS Jobs screen and how to view failed jobs and task logs."
weight: 40
tags:
- tasks
---

The **Jobs** screens, accessed from the **Running Jobs** window after clicking **Go to Jobs**, shows all jobs executed on the system.

There are three tab views, **All**, **Active** and **Failed**. **All** displays by default.

![JobsScreen](/images/SCALE/Dashboard/JobsScreen.png "Jobs Screen")

Use the <span class="iconify" data-icon="bi:caret-down-fill"></span> arrow display options to change the number of jobs per screen. Options are the default **10**, **50** or **100**.

Click **View** to display the argument passed for the selected job.

Use the <span class="material-icons-outlined">north</span> arrow beside the **State** or **ID** header to change the display order, or the <span class="material-icons-outlined">south</span> arrow to return to the top down display order.

## Failed Jobs Screen

The **Failed** screen lists failed jobs. 

![JobsFailed](/images/SCALE/Dashboard/JobsFailed.png "Failed Jobs")

Click **View** to show the job log. The system error for this failed job displays at the bottom of the log file.