---
title: "Managing Scrub Tasks"
description: "Provides instruction on running scrub and resilver tasks."
weight: 10
tags:
 - scrub
 - resilver
keywords:
- enterprise data storage 
- nas data storage
- data protection
---

When TrueNAS performs a scrub, ZFS scans the data on a pool.
Scrubs identify data integrity problems, detect silent data corruptions caused by transient hardware issues, and provide early disk failure alerts.

## Default Scrub Tasks
TrueNAS generates a default scrub task when you create a new pool and sets it to run every Sunday at 12:00 AM.

![ScrubTaskDefaultSCALE](/images/SCALE/DataProtection/scrubtaskpriority.png "Default Scrub Task")

{{<include file="/static/includes/addcolumnorganizer.md">}}

## Adjusting Scrub/Resilver Priority

{{< include file="/static/includes/ResilverPriority.md" >}}

![ScrubTaskPrioritySCALE](/images/SCALE/DataProtection/resilverscrubedit.png "Default Scrub Task")

{{< include file="/static/includes/ResilverPrioritySetWhen.md" >}}

## Creating New Scrub Tasks
TrueNAS needs at least one data [pool]({{< ref "/SCALEUIReference/Storage/" >}}) to create scrub task.

To create a scrub task for a pool, go to **Data Protection** and click **ADD** in the **Scrub Tasks** window.

![AddScrubTaskSCALE](/images/SCALE/DataProtection/AddScrubTaskSCALE.png "Add New Scrub Task")

Select a preset schedule from the dropdown list or click **Custom** to create a new schedule for when to run a scrub task. **Custom** opens the **Advanced Scheduler** window.

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="/static/includes/SCALEAdvancedScheduler.md" >}}
{{< /expand >}}

To view the progress of a scrub task, check the status under the **Next Run** column.

## Editing Scrub Tasks
To edit a scrub, go to **Data Protection** and click the scrub task to edit.

![ScrubTaskEditSCALE](/images/SCALE/DataProtection/ScrubTaskEditSCALE.png "Edit Scrub Task")
