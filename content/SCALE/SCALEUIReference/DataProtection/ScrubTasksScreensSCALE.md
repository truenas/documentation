---
title: "Scrub Tasks Screens"
description: "This article provides information on data protection scrub task settings and screens."
weight: 10
aliases: /scale/scaleuireference/dataprotection/scrubtasksscreensscale/
tags:
 - scalescrub
 - scaleresilver
---

{{< toc >}}


The **Data Protection** screen **Scrub Task** widget displays a list of scrub tasks configured on the system. Scrubs identify data integrity problems, detect silent data corruptions caused by transient hardware issues, and provide early disk failure alerts.
TrueNAS generates a default scrub task when you create a new pool and sets it to run every Sunday at 12:00 AM.

![ScrubTaskDefaultSCALE](/images/SCALE/22.02/scrubtaskpriority.png "Scrub Task Widget")

**Add** opens the **Add Scrub Task** screen.

Each task is a link that opens the **Edit Scrub Task** Screen.

The <span class="material-icons">delete</span> icon opens a delete confirmation dialog.

## Add and Edit Scrub Task Screen
The **Add Scrub Task** and **Edit Scrub Task** screens display the same settings that specify the pool, threshold and schedule for when to run the ZFS scan on the data in a pool. 

![AddScrubTaskSCALE](/images/SCALE/22.02/AddScrubTaskSCALE.png "Add Scrub Task")

| Setting | Description |
|---------|-------------|
| **Pool** | Select the pool to scrub from the dropdown list. |
| **Threshold days** | Enter the number of days before a completed scrub is allowed to run again. This controls the task schedule. For example, scheduling a scrub to run daily and setting **Threshold days** to 7 means the scrub attempts to run daily. When the scrub succeeds, it continues to check daily but does not run again until the seven days have elapsed. Using a multiple of seven ensures the scrub always occurs on the same weekday. |
| **Description** | Enter a description for this scrub tasks. |
| **Schedule** | Select a preset from the dropdown list that runs the scrub task according to that schedule time. Select **Custom** to use the advanced scheduler. |
| **Enabled** | Select to enable the scrub task to run. Leave checkbox clear to disable the task without deleting it. |

## Scrub/Resilver Priority Screen
The settings specify times when a new resilver tasks can start and run at a higher priority, or when a resilver task cannot run at a lower priority. 

![ScrubTaskPrioritySCALE](/images/SCALE/22.02/resilverscrubedit.png "Default Scrub Task")

| Setting | Description |
|---------|-------------|
| **Enabled** | Select to run resilver tasks between the configured times. |
| **Begin** | Select the hour and minute when a resilver task can start from the dropdown list. The resilver process can run at a higher priority. |
| **End** | Select the hour and minute when new resilver tasks are not allowed to start. This does not affect active resilver tasks. The resilver process must return to running at a lower priority. A resilver process running after this time likely takes much longer to complete due to running at a lower priority compared to other disk and CPU activities, such as replications, SMB transfers, NFS transfers, Rsync transfers, S.M.A.R.T. tests, pool scrubs, user activity, etc. |
| **Days of the Week** | Select the days to run resilver tasks from the dropdown list. |

{{< taglist tag="scalescrub" limit="10" >}}
