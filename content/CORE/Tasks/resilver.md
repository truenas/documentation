---
title: "Disk Resilver Scheduling"
description: "How to optimize disk resilvering."
tags: ["ZFS"]
weight: 70
---

Resilvering, or the process of copying data to a replacement disk, is best completed as quickly as possible.
Increasing the priority of resilvers can help them to complete more quickly.
The Resilver Priority menu makes it possible to increase the priority of resilvering at times where the additional I/O or CPU usage will not affect normal usage.

Go to **Tasks > Resilver Priority** to configure the priority to a time that most effective for your environment.

![Tasks Resilver Priority](/images/CORE/12.0/TasksResilverPriority.png "Tasks Resilver Priority")
<br><br>

| Setting | Value | Description |
|---------|-------|-------------|
| Enabled |	checkbox | Set to run resilver tasks between the configured times. |
| Begin   | drop-down | Choose the hour and minute when resilver tasks can be started. |
| End     | drop-down | Choose the hour and minute when new resilver tasks can no longer be started. This does not affect active resilver tasks. |
| Days of the Week | checkboxes | Select the days to run resilver tasks. |
