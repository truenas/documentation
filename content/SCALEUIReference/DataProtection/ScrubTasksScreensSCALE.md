---
title: "Scrub Tasks Screens"
description: "Provides information on data protection Scrub Task screens and settings."
weight: 10
tags:
 - scrub
 - resilver
---

The **Data Protection** screen **Scrub Task** widget displays a list of scrub tasks configured on the system. Scrubs identify data integrity problems, detect silent data corruptions caused by transient hardware issues, and provide early disk failure alerts.
TrueNAS generates a default scrub task when you create a new pool and sets it to run every Sunday at 12:00 AM.

![ScrubTaskDefaultSCALE](/images/SCALE/DataProtection/scrubtaskpriority.png "Scrub Task Widget")

**Add** opens the **Add Scrub Task** screen.

Each task is a link that opens the **Edit Scrub Task** Screen.

The <span class="material-icons">delete</span> icon opens a delete confirmation dialog.

## Add and Edit Scrub Task Screen
The **Add Scrub Task** and **Edit Scrub Task** screens display the same settings that specify the pool, threshold, and schedule for when to run the ZFS scan on the data in a pool.

![AddScrubTaskSCALE](/images/SCALE/DataProtection/AddScrubTaskSCALE.png "Add Scrub Task")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Pool** | Select the pool to scrub from the dropdown list. |
| **Threshold days** | Enter the number of days before a completed scrub is allowed to run again. This controls the task schedule. For example, scheduling a scrub to run daily with **Threshold days** set to 7 means the scrub attempts to run daily. When the scrub succeeds, it continues to check daily but does not run again until seven days elapse. Using a multiple of seven ensures the scrub always occurs on the same weekday. |
| **Description** | Enter a description for this scrub tasks. |
| **Schedule** | Select a preset from the dropdown list that runs the scrub task according to that schedule time. Select **Custom** to use the advanced scheduler. |
| **Enabled** | Select to enable the scrub task to run. Leave checkbox clear to disable the task without deleting it. |
{{< /truetable >}}
{{< expand "Advanced Scheduler" "v" >}}
{{< include file="/static/includes/SCALEAdvancedScheduler.md" >}}
{{< /expand >}}

## Scrub/Resilver Priority Screen
The settings specify times when new resilver tasks can start, and run, at a higher priority or when a resilver task cannot run at a lower priority.

![ScrubTaskPrioritySCALE](/images/SCALE/DataProtection/resilverscrubedit.png "Default Scrub Task")

{{< include file="/static/includes/ResilverPrioritySetWhen.md" >}}
