---
title: "Rsync Tasks"
description: "This article provides information on how to set up remote sync (rsync) tasks on your TrueNAS."
weight: 30
tags:
- corersync
---

Remote sync is a utility that copies data across a network. Rsync sends only the data that is different between the source and the destination files after the initial data is copied. This reduces network traffic. Rsync is used to create backups, and to synchronize data across systems.

## Create a New Rsync Task

Go to **Tasks > Rsync Tasks**. The Rsync Tasks menu displays.

![RsyncTaskAdd](/images/CORE/13.0/RsyncTaskAdd.png "Rsync Task: Add Module")

Click **ADD**.  

![TasksRsyncTasksAddModeModule](/images/CORE/12.0/TasksRsyncTasksAddModeModule.png "Rsync Task: Module Mode")

{{< include file="static/includes/Reference/TasksRsyncAddFields.md.part" markdown="true" >}}

{{< taglist tag="corersync" limit="10" >}}
