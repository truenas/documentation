---
title: "Init/Shutdown Scripts"
description: "Init/Shutdown Scripts" 
---

### Init/Shutdown Scripts

TrueNAS® provides the ability to schedule commands or scripts to run at system startup or shutdown.

Go to **Tasks** > **Init/Shutdown Scripts** and click `ADD`.

<img src="/images/TN-12.0-tasks-init-shutdown-scripts-add.PNG" width='700px'>
<br><br>

###  Init/Shutdown Options

<img src="/images/TN-12.0-tasks-init-shutdown-scripts.PNG" width='700px'>
<br><br>

| Setting           | Value          | Description   |
|-------------------|----------------|----------------|
| Type              | drop-down menu | Select *Command* for an executable or Script for an executable script. |
| Command or Script | string         | If Command is selected, enter the command with any options. When *Script* is selected, click <i class="fa fa-folder" aria-hidden="true" title="folder"></i>&nbsp (Browse) to select the script from an existing pool. |
| When              | drop-down menu | Select when the *Command* or *Script* runs: Pre Init: early in the boot process, after mounting filesystems and starting networking Post Init: at the end of the boot process, before TrueNAS® services start Shutdown: during the system power off process. |
| Enabled           | checkbox       | Enable this task. Unset to disable the task without deleting it. |
| Timeout           | integer        | Automatically stop the script or command after the specified number of seconds.  |

Scheduled commands must be in the default path. The full path to the command can also be included in the entry. The path can be tested with **which {commandname}** in the Shell. When available, the path to the command is shown:

```
[root@freenas ~]# which ls
/bin/ls
```

When scheduling a script, test the script first to verify it is executable and achieves the desired results.


{{% pageinfo %}}
Init/shutdown scripts are run with sh.
{{% /pageinfo %}}

Init/Shutdown tasks are shown in **Tasks** > **Init/Shutdown Scripts**. Click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp (Options) for a task to `Edit` or `Delete` that task.
