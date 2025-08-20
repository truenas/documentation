---
title: "Managing Scrub Tasks"
description: "Provides instruction on running scrub and resilver tasks."
weight: 10
aliases: /scale/scaleuireference/dataprotection/scrubtasksscreensscale/
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

{{< hint type=note >}}
Starting in TrueNAS 25.10, scrub tasks are managed directly from each pool's settings on the Storage Dashboard instead of as separate scheduled tasks. This article covers the integrated scrub management approach.
{{< /hint >}}

## Running Scrub Tasks

TrueNAS automatically creates a scheduled scrub for each pool that runs every Sunday at 12:00 AM by default.

To run a scrub immediately:

1. Go to **Storage** on the main navigation panel.
2. Locate the **Storage Health** widget for your pool.
3. Click **Scrub Now**.
4. Click **Start Scrub**.

## Scheduling Scrub Tasks

Each pool displays its scrub schedule status on the **Storage Health** widget:

- **Scheduled Scrub: None Set** with a **Schedule** link if no scrub task exists
- **Scheduled Scrub: [when]** with a **Configure** link if a scrub task is configured and enabled

To schedule or modify scrub tasks:

1. Click **Schedule** (for new tasks) or **Configure** (for existing tasks) on the **Storage Health** widget.
2. The **Configure Scheduled Scrub** form opens.
3. Configure the schedule, threshold days, and enable or disable the scheduled scrub.
4. Click **Save**.

For detailed information about scrub settings and options, see [Configure Scheduled Scrub Screen]({{< ref "/SCALE/SCALEUIReference/Storage/_index.md#configure-scheduled-scrub-screen" >}}).

## Adjusting Resilver Priority

{{< hint type=note >}}
Starting in TrueNAS 25.10, resilver priority settings have moved to **System Settings > Advanced Settings > Storage**.
{{< /hint >}}

Resilver tasks can run at any time, but by default they have low priority - lower than regular ZFS I/O operations. You can specify a time window during which resilvering is given higher priority, useful for scheduling it during non-business hours.

To configure resilver priority:

1. Go to **System Settings > Advanced Settings**.
2. Click **Configure** on the **Storage** widget.
3. Select **Run Resilvering At Higher Priority At Certain Times** to enable priority scheduling.
4. Configure the time window and days when higher priority resilvering should occur.
5. Click **Save**.

![ScrubTaskEditSCALE](/images/SCALE/DataProtection/PriorityResilveringForm.png "Edit Scrub Task")
