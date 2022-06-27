---
title: "Scrub Tasks"
weight: 10
---

{{< toc >}}

When TrueNAS performs a scrub, ZFS scans the data on a pool.
Scrubs identify data integrity problems, detect silent data corruptions caused by transient hardware issues, and provide early disk failure alerts.

## Default Scrub Tasks

TrueNAS generates a default scrub task when you create a new pool and sets it to run every Sunday at 12:00 AM.

![ScrubTaskDefaultSCALE](/images/SCALE/ScrubTaskDefaultSCALE.png "Default Scrub Task")

## Adjust Scrub/Resilver Priority


## Creating New Scrub Tasks

TrueNAS needs at least one data [pool]({{< relref "/content/SCALE/SCALEUIReference/Storage/Pools/_index.md" >}}) to create scrub task.

To create a scrub task for a pool, go to **Data Protection** and click **ADD** in the **Scrub Tasks** window.

![ScrubTaskNewSCALE](/images/SCALE/ScrubTaskNewSCALE.png "New Scrub Task")

{{< include file="static/includes/Reference/TasksScrubTasksAddFields.md.part" markdown="true" >}}

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/SCALE/SCALEAdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

## Editing Scrub Tasks

To edit a scrub, go to **Data Protection** and click the scrub task you want to edit.

![ScrubTaskEditSCALE](/images/SCALE/ScrubTaskEditSCALE.png "Edit Scrub Task")
