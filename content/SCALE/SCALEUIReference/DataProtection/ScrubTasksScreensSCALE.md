---
title: "Scrub Tasks Screens"
description: "Provides information on data protection Scrub Task screens and settings."
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
Starting in TrueNAS 25.10, scrub tasks are managed directly from each pool settings on the **Storage Dashboard** instead of as separate scheduled tasks. This article covers the integrated scrub management approach.
{{< /hint >}}

Scrubs identify data integrity problems, detect silent data corruptions caused by transient hardware issues, and provide early disk failure alerts.
TrueNAS automatically creates a scheduled scrub for each pool that runs every Sunday at 12:00 AM by default.

## Pool Scrub Integration

Scrub tasks are now configured and managed directly individually from the **Storage Health** widget on the Storage Dashboard:

- **Scrub Now** runs an immediate scrub.
- **Scheduled Scrub** shows the current schedule or shows **None Set** when not configured.
- **Schedule** link (when no task exists) or **Configure** link (when task exists) opens the **Schedule Scrub** or **Configured Scheduled Scrub** form.

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

## Resilver Priority Configuration

{{< hint type=note >}}
Resilver priority settings have moved to **System Settings > Advanced Settings > Storage** in TrueNAS 25.10.
{{< /hint >}}

Resilver tasks can run at any time, but by default they have low priority. You can specify a time window during which resilvering is given higher priority.

The **Advanced Settings > Storage** configuration includes:

- **Run Resilvering At Higher Priority At Certain Times** - enables priority scheduling
- Time window configuration for when higher priority resilvering occurs
- Days of the week selection for the priority schedule
