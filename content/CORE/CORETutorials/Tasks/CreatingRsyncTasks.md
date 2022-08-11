---
title: "Creating Rsync Tasks"
description: "This article provides information on how to create an remote sync (rsync) task on your TrueNAS."
weight: 30
tags:
- corersync
---

{{< toc >}}

Rsync is a fast and secure way to copy data to another system, either for backup or data migration purposes.
An [rsync](https://rsync.samba.org/) task requires configuration of both a **Host** and **Remote** system. These instructions assume a TrueNAS system for both the **Host** and **Remote** configurations.

## Basic Requirements

Rysnc requires a [dataset]({{< relref "CORE/CORETutorials/Storage/Pools/Datasets.md" >}}) with the needed data on the **Host** or **Remote** system.
Rsync provides the ability to either push or pull data.
When using rsync to push, data copies from a **Host** system to a **Remote** system.
When using rsync to pull, data pulls from a **Remote** system. It is then put on the **Host** system.

TrueNAS has extra requirements depending on if you choose the **Module** or **SSH** rsync mode.

### Rsync Services Requirements

Before you create an rsync task on the **Host** system, you must create a module on the **Remote** system. The **Remote** system must have rsync service activated. 
When TrueNAS is the **Remote** system, create a module by going to **Services** and clicking <i class="material-icons" aria-hidden="true" title="edit">edit</i> for the rsync service. Click the **Rsync Module** tab, then click **ADD**. See [ConfiguringRsync]({{< relref "ConfiguringRsync.md" >}}) for more information.

## Creating a Module Mode Rsync Task

Log in to the **Host** system interface, go to **Tasks > Rsync Tasks**, and click **ADD**.

![TasksRsyncTasksAddModeModule](/images/CORE/12.0/TasksRsyncTasksAddModeModule.png "Rsync Task: Module Mode")

Select the **Source** dataset to use with the rsync task and a **User** account to run the rsync task.
Select a **Direction** for the rsync task.

Select a **Schedule** for the rsync task.

Enter the **Remote Host** IP address or host name.
Use the format `username@remote_host` when the user name differs on the **Remote** host.
Select **Module** in the **Rsync Mode** dropdown list. 
Enter the **Remote Module Name** as it appears on the **Remote** system.

Configure the remaining options according to your specific needs.

Clearing **Enabled** disables the task schedule.
You can still save the rsync task and run it as a manual task.

## Creating an SSH Mode Rsync Task

### SSH Requirements

The **Remote** system must have **SSH** enabled.
To enable SSH in TrueNAS, go to **Services** and click the **SSH** toggle button. The toggle button turns blue when the service is on.

The **Host** system needs an established [SSH connection]({{< relref "CORE/CORETutorials/SystemConfiguration/ConfiguringSSHConnections.md" >}}) to the **Remote** for the rsync task.
To create the connection, go to **System > SSH Connections** and click **ADD**.
Configure a **Semi-automatic** connection and from the **Private Key** dropdown list select **Generate New**.

{{< expand "Can this be set up in a command line instead?" "v" >}}
Go to the **Shell** on the **Host** system.
When a TrueNAS account other than *root* manages the rsync task, enter `su - USERNAME`, where *USERNAME* is the TrueNAS user account that runs the rsync task.
Enter `ssh-keygen -t rsa` to create the key pair.
When prompted for a password, press <kbd>Enter</kbd> without setting a password (a password breaks the automated task).
Here is an example of running the command:

```zsh
truenas# ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):
Created directory '/root/.ssh'.
Enter passphrase (empty for no passphrase):
Enter the same passphrase again:
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:NZMgbuPvTHeEqi3SA/U5wW8un6AWrx8ZsRQdbJJHmR4 tester@truenas.local
The key randomart image is:
+---[RSA 2048]----+
|      . o=o+     |
|     . .ooE.     |
|      +.o==.     |
|     o.oo+.+     |
|     ...S+. .    |
|    . ..++o.     |
|     o oB+. .    |
|    . =Bo+.o     |
|     o+==oo      |
+----[SHA256]-----+
```
The default public key location is <file>\~/.ssh/id_rsa.pub</file>.
Enter `cat ~/.ssh/id_rsa.pub` to see the key and copy the file contents.
Copy it to the corresponding user account on the **Remote** system in **Accounts > Users**.
Click **EDIT** and paste the key into **SSH Public Key**.

Next, copy the host key from the **Remote** system to the **Host** system user <file>.ssh/known_hosts</file> directory, using `ssh-keyscan`.

On the **Host** system, open the **Shell** and enter `ssh-keyscan -t rsa {remoteIPaddress} >> {userknown_hostsDir}` where *remoteIPaddress* is the **Remote** system IP address and *userknown_hostsDir* is the <file>known_hosts</file> directory on the **Host** system.
Example: `ssh-keyscan -t rsa 192.168.2.6 >> /root/.ssh/known_hosts`.
{{< /expand >}}

### SSH Mode Process

Go to **Tasks > Rsync Tasks** and click **ADD**.

![TasksRsyncTasksAddModeSSH](/images/CORE/12.0/TasksRsyncTasksAddModeSSH.png "Rsync Task: SSH Mode")

Configure the SSH settings first by selecting **SSH** in the **Rsync Mode** dropdown list. Enter the **Port** number and **Remote Path**.

Define the **Source** dataset for the rsync task and select an account in **User**.
The name in **User** must be identical to the [SSH Connection]({{< relref "CORE/CORETutorials/SystemConfiguration/ConfiguringSSHConnections" >}}) **Username**.

Select a direction for the rsync task, either **Push** or **Pull**, and define the task **Schedule**.

Enter the **Remote** host IP address or host name.
Use the format `username@remote_host` if the user name differs on the **Remote** host.
Configure the remaining options according to your specific needs.

Clearing the **Enabled** checkbox disables the task schedule without deleting the configuration.
You can still run the rsync task by going to **Tasks > Rsync Tasks** and clicking <i class="fa fa-chevron-right"></i>, then **RUN NOW**.

## Rsync Service and Modules

The rsync task does not work when the related system service is off.
To turn the rsync service on, go to **Services** and click the **rsync** toggle button. The toggle button turns blue when the service is on.
See [ConfiguringRsync]({{< relref "ConfiguringRsync.md" >}}) for more information on rsync configuration and module creation.

{{< taglist tag="corersync" limit="10" >}}
