---
title: "Managing Scrub Tasks"
description: "This article provides instruction on running scrub and resilver tasks."
weight: 10
aliases: /scale/scaleuireference/dataprotection/scrubtasksscreensscale/
tags:
 - scalescrub
 - scaleresilver
---

{{< toc >}}

When TrueNAS performs a scrub, ZFS scans the data on a pool.
Scrubs identify data integrity problems, detect silent data corruptions caused by transient hardware issues, and provide early disk failure alerts.

## Default Scrub Tasks

TrueNAS generates a default scrub task when you create a new pool and sets it to run every Sunday at 12:00 AM.

![ScrubTaskDefaultSCALE](/images/SCALE/22.02/scrubtaskpriority.png "Default Scrub Task")

## Adjust Scrub/Resilver Priority

![ScrubTaskPrioritySCALE](/images/SCALE/22.02/resilverscrubedit.png "Default Scrub Task")

To schedule a new resilver task to run at a higher priority, select the hour and minutes from the **Begin** dropdown list.

To schedule a new resilver task to run at a lower priority to other processes, select the hour and minutes from the **End** dropdown list. Running at a lower priority is a slower process and takes longer to complete. Schedule this for times when your server is at its lowest demand level.

## Creating New Scrub Tasks

TrueNAS needs at least one data [pool]({{< relref "/content/SCALE/SCALEUIReference/Storage/Pools/_index.md" >}}) to create scrub task.

To create a scrub task for a pool, go to **Data Protection** and click **ADD** in the **Scrub Tasks** window.

![AddScrubTaskSCALE](/images/SCALE/22.02/AddScrubTaskSCALE.png "Add New Scrub Task")

Select a preset schedule from the dropdown list or click **Custom** to create a new schedule for when to run a scrub task. **Custom** opens the **Advanced Scheduler** window.

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/SCALE/SCALEAdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

To view the progress of a scrub task, check the status under the **Next Run** column.

## Editing Scrub Tasks

To edit a scrub, go to **Data Protection** and click the scrub task you want to edit.

![ScrubTaskEditSCALE](/images/SCALE/ScrubTaskEditSCALE.png "Edit Scrub Task")

{{< taglist tag="scalescrub" limit="10" >}}
