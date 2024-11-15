---
title: "Creating Init/Shutdown Scripts"
redirect: "https://www.truenas.com/docs/core/13.0/coretutorials/tasks/creatinginitshutdownscripts/"
description: "Explains how to create scheduled scripts on TrueNAS CORE."
weight: 20
aliases:
  - /core/tasks/initshutdownscripts
tags:
- initshutdown
- systemleveltasks
---

## Create an Init/Shutdown Script

TrueNAS can schedule commands or scripts to run at system startup or shutdown.

Go to **Tasks > Init/Shutdown Scripts** and click **ADD**.

![TasksInitShutdownScriptsAdd](/images/CORE/Tasks/TasksInitShutdownScriptsAdd.png "Creating a new script")

Enter a **Description**, then select a **Type**.

### Command Type

Enter a command with any options you want. You can find commands [here](https://www.truenas.com/community/resources/github-repository-for-freenas-scripts-including-disk-burnin-and-rsync-support.28/) or on our [Community Forums](https://forums.truenas.com/).

{{< expand "Can I use a path for the Command?" "v" >}}
You can also include the full path to a command in the entry.
Scheduled commands must be in the default path.
You can find the path to a command by entering <code>which <em>COMMAND</em></code> in the shell, where *COMMAND* is the command you want to locate.
When available, the path to the command displays:

```
[root@freenas ~]# which ls
/bin/ls
```
{{< /expand >}}

Select when you want the **Command** to run and fill out the rest of the fields to your needs, then click **SUBMIT**.

### Script Type

Select the path to the **Script**. The **Script** runs using [sh(1)](https://www.freebsd.org/cgi/man.cgi?query=sh). You can find some helpful scripts on our [Community Forums](https://forums.truenas.com/).

Select when you want the **Script** to run and fill out the rest of the fields to your needs, then click **SUBMIT**.

## Managing an Init/Shutdown Script

{{< hint type=note >}}
Always test the script to verify it executes and achieves the desired results.
All init/shutdown scripts are run with `sh`.
{{< /hint >}}

All saved Init/Shutdown tasks are in **Tasks > Init/Shutdown Scripts**.
Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> (Options) next to a task to **EDIT** or **DELETE** that task.
