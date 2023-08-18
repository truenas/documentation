---
title: "Creating Scrub Tasks"
description: "Describes how to create scrub tasks on TrueNAS CORE."
weight: 80
tags:
- corescrubtasks
- corescrub
---

{{< toc >}}

A "scrub" is when ZFS scans the data on a pool.
Scrubs identify data integrity problems, detect silent data corruptions caused by transient hardware issues, and provide early disk failure alerts.

## Edit Default Scrub Tasks

By default, TrueNAS creates a scrub task when you create a new pool.
The default schedule for a scrub is to run every Sunday at 12:00 AM.
To edit the default scrub, go to **Tasks > Scrub Tasks**, click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>, and **EDIT**.

## Create New Scrub Tasks

To create a scrub task for a pool, go to **Tasks > Scrub Tasks** and click **ADD**.

![TasksScrubTasksAdd](/images/CORE/12.0/TasksScrubTasksAdd.png "Creating a new Scrub Task")

Select a **Pool**, enter the **Threshold** (in days), and give the scrub a description. Assign a **Schedule** and click **SUBMIT**.

{{< taglist tag="corescrub" limit="10" >}}
