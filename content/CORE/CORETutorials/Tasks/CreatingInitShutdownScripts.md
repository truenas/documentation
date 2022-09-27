---
title: "Creating Init/Shutdown Scripts"
description: "This article explains how to create scheduled scripts on TrueNAS CORE."
weight: 20
aliases:
  - /core/tasks/initshutdownscripts
tags:
- coreinitshutdownscripts
- coresystemleveltasks
---

{{< toc >}}

## Create an Init/Shutdown Script

TrueNAS can schedule commands or scripts to run at system startup or shutdown.

Go to **Tasks > Init/Shutdown Scripts** and click **ADD**.

![TasksInitShutdownScriptsAdd](/images/CORE/12.0/TasksInitShutdownScriptsAdd.png "Creating a new script")

Enter a **Description**, then select a **Type**.

### Command Type

Enter a command with any options you want. You can find commands [here](https://www.truenas.com/community/resources/github-repository-for-freenas-scripts-including-disk-burnin-and-rsync-support.28/) or on our [Community Forums](https://www.truenas.com/community/).

{{< expand "Can I use a path for the Command?" "v" >}}
You can also include the full path to a command in the entry.
Scheduled commands must be in the default path.
You can test the path with `which {COMMAND}` in the **Shell**.
When available, the path to the command displays:

```
[root@freenas ~]# which ls
/bin/ls
```
{{< /expand >}}

Select when you want the **Command** to run and fill out the rest of the fields to your needs, then click **SUBMIT**.

### Script Type

Select the path to the **Script**. The **Script** runs using [sh(1)](https://www.freebsd.org/cgi/man.cgi?query=sh). You can find some helpful scripts on our [Community Forums](https://www.truenas.com/community/).

Select when you want the **Script** to run and fill out the rest of the fields to your needs, then click **SUBMIT**.

## Managing an Init/Shutdown Script

{{< hint info >}}
Always test the script to verify it executes and achieves the desired results.
All init/shutdown scripts are run with `sh`.
{{< /hint >}}

All saved Init/Shutdown tasks are in **Tasks > Init/Shutdown Scripts**.
Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> (Options) next to a task to **EDIT** or **DELETE** that task.

{{< taglist tag="coreinitshutdownscripts" limit="10" >}}

{{< taglist tag="coresystemleveltasks" limit="10" title="Related System Level Tasks Articles" >}}
