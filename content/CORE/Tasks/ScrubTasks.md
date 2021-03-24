---
title: "Scrub Tasks"
weight: 80
---

{{< toc >}}

A "scrub" is when ZFS scans the data on a pool.
Scrubs identify data integrity problems, detect silent data corruptions caused by transient hardware issues, and provide early disk failure alerts.

## Default Scrub Tasks

By default, TrueNAS creates a scrub task when you create a new pool.
The default schedule for a scrub is to run every Sunday at 12:00 AM.
To edit the default scrub, go to **Tasks > Scrub Tasks**, click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>, and **EDIT**.

## Creating New Scrub Tasks

A data [pool]({{< relref "PoolCreate.md" >}}) must exist before creating a scrub task.

To create a scrub task for a pool, go to **Tasks > Scrub Tasks** and click **ADD**.

![TasksScrubTasksAdd](/images/CORE/12.0/TasksScrubTasksAdd.png "Creating a new Scrub Task")

{{< include file="static/includes/TasksScrubTasksAddFields.md.part" markdown="true" >}}

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/AdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}
