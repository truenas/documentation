---
title: "Scrub Tasks Screens"
description: "Provides information on scrub task configuration through pool settings."
weight: 10
aliases:
 - /scale/scaleuireference/dataprotection/scrubtasksscreensscale/
 - /scale/scaleclireference/storage/cliresilver/
 - /scale/scaleclireference/storage/cliscrub/
tags:
 - scrub
 - resilver
---

{{< hint type=note >}}
Starting in TrueNAS 25.10, scrub tasks are no longer managed as separate scheduled tasks in Data Protection. Scrub configuration has been integrated directly into the settings of each pool on the Storage Dashboard for a simplified user experience.
{{< /hint >}}

Scrubs identify data integrity problems, detect silent data corruptions caused by transient hardware issues, and provide early disk failure alerts.
TrueNAS automatically creates a scheduled scrub for each pool that runs every Sunday at 12:00 AM by default.

## Pool Scrub Integration

Scrub tasks are now configured and managed directly from each pool's **Storage Health** widget on the Storage Dashboard:

- **Scrub Now** button runs an immediate scrub
- **Scheduled Scrub** status shows current schedule or "None Set"
- **Schedule** link (when no task exists) or **Configure** link (when task exists) opens the scrub configuration form

## Configure Scheduled Scrub Screen

The **Configure Scheduled Scrub** form is accessed from the **Storage Health** widget on each pool.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enabled** | Select to enable the scheduled scrub task. Clear to disable without removing the configuration. |
| **Threshold days** | Enter the number of days before a completed scrub is allowed to run again. This controls the task schedule. For example, scheduling a scrub to run daily with **Threshold days** set to 7 means the scrub attempts to run daily. When the scrub succeeds, it continues to check daily but does not run again until seven days elapse. Using a multiple of seven ensures the scrub always occurs on the same weekday. |
| **Schedule** | Select a preset from the dropdown list that runs the scrub task according to that schedule time. Select **Custom** to use the advanced scheduler. |
{{< /truetable >}}

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="/static/includes/SCALEAdvancedScheduler.md" >}}
{{< /expand >}}

For detailed pool scrub management, see [Storage Dashboard]({{< ref "/SCALE/SCALEUIReference/Storage/_index.md#storage-health-widget" >}}).

## Resilver Priority Configuration

{{< hint type=note >}}
Resilver priority settings have moved to **System Settings > Advanced Settings > Storage** in TrueNAS 25.10.
{{< /hint >}}

Resilver tasks can run at any time, but by default they have low priority. You can specify a time window during which resilvering is given higher priority.

The **Advanced Settings > Storage** configuration includes:

- **Run Resilvering At Higher Priority At Certain Times** - enables priority scheduling
- Time window configuration for when higher priority resilvering occurs
- Days of the week selection for the priority schedule
