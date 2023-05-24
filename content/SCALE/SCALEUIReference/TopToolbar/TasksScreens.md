---
title: Tasks Screens
description: "This article describes the TrueNAS SCALE task manager and how to use the task manager to view failed jobs and task logs."
weight: 40
tags:
- scaletaskmgr
- scaletasks
- scalejobs
alias:
 - /scale/scaleuireference/jobsscreens/
 - /scale/scaleuireference/toptoolbar/jobsscreens/
---


The **Tasks** screens, accessed from the **Jobs** list after clicking **History**, displays all jobs executed on the system.

There are three tab views, **All**, **Active** and **Failed**. **All** displays by default.

![TasksScreen](/images/SCALE/TasksScreen.png "Task Manager Jobs")

Use the <span class="iconify" data-icon="bi:caret-down-fill"></span> arrow display options to change the number of jobs per screen. Options are the default **10**, **50** or **100**.

Click **View** to display the argument passed for the selected job.

Use the <span class="material-icons-outlined">north</span> arrow beside the **State** or **ID** header to change the display order, or the <span class="material-icons-outlined">south</span> arrow to return to the top down display order.

## Failed Jobs Screen

The **Failed** screen displays the list of failed jobs. 

![TasksFailed](/images/SCALE/TasksFailed.png "Failed Tasks")

Use the **View** button to display the task log. The system error for this failed job displays at the bottom of the log file.

{{< taglist tag="scaletaskmgr" limit="10" >}}
