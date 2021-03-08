---
title: "Init/Shutdown Scripts"
weight: 20
---

TrueNAS can schedule commands or scripts to run at system startup or shutdown.
To create a new script, go to **Tasks > Init/Shutdown Scripts** and click *ADD*.

![TasksInitShutdownScriptsAdd](/images/CORE/12.0/TasksInitShutdownScriptsAdd.png "Creating a new script")

{{< include file="static/includes/TasksInitShutdownScriptsAddFields.md.part" markdown="true" >}}

{{< expand "Can I use a path for the Command?" "v" >}}
The full path to a command can also be included in the entry.
Scheduled commands must be in the default path.
The path can be tested with `which {COMMAND}` in the **Shell**.
When available, the path to the command is shown:

```
[root@freenas ~]# which ls
/bin/ls
```
{{< /expand >}}

{{< hint info >}}
Always test the script first to verify it is executable and achieves the desired results.
All init/shutdown scripts are run with `sh`.
{{< /hint >}}

All saved Init/Shutdown tasks are shown in **Tasks > Init/Shutdown Scripts**.
Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> (Options) for a task to *Edit* or *Delete* that task.
