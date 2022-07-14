---
title: "Rsync Tasks"
description: "This article provides information on how to set up remote sync (rsync) tasks on your TrueNAS."
weight: 30
tags:
- corersync
---

Rsync is a utility that copies specified data from one system to another over a network. Once the initial data is copied, rsync reduces the amount of data sent over the network by sending only the differences between the source and destination files. Rsync is used for backups, mirroring data on multiple systems, or for copying files between systems.

## Create a New Rsync Task

Go to **Tasks > Rsync Tasks**. The Rsync Tasks menu displays.

![RsyncTaskAdd](/images/CORE/13.0/RsyncTaskAdd.png "Rsync Task: Add Module")

Click **ADD**.  

![TasksRsyncTasksAddModeModule](/images/CORE/12.0/TasksRsyncTasksAddModeModule.png "Rsync Task: Module Mode")

{{< include file="static/includes/Reference/TasksRsyncAddFields.md.part" markdown="true" >}}

{{< taglist tag="corersync" limit="10" >}}
