---
title: "Rsync Tasks"
description: "Provides information about the Rsync Tasks screen on TrueNAS CORE."
weight: 30
tags:
- corersync
---

Remote sync is a utility that copies data across a network. Rsync first copies the initial data. Later copies contain only the data that is different between the source and destination files. This reduces network traffic. Use Rsync to create backups, and to synchronize data across systems.

## Create a New Rsync Task

Go to **Tasks > Rsync Tasks**. The Rsync Tasks menu displays.

![RsyncTaskAdd](/images/CORE/Tasks/RsyncTaskAdd.png "Rsync Task: Add Module")

Click **ADD**.  

![TasksRsyncTasksAddModeModule](/images/CORE/Tasks/TasksRsyncTasksAddModeModule.png "Rsync Task: Module Mode")

{{< include file="content/_includes/TasksRsyncAddFields.md" >}}

{{< taglist tag="corersync" vol="CORE" limit="5" >}}
