---
title: "Rsync Tasks"
weight: 30
---

{{< toc >}}

You often need to copy data to another system for backup or when migrating to a new system.
A fast and secure way of doing this is by using [rsync](https://rsync.samba.org/).
These instructions assume that both sides of the rsync task, host and remote, use a TrueNAS systems.

## Basic Requirements

Rysnc requires a [dataset]({{< relref "Datasets.md" >}}) with the needed data on the host or remote system.
Rsync provides the ability to either push or pull data.
When using the **Rsync Tasks** function to push, data is copied from a host system to a remote system.
When using the Rsync Tasks function to pull, it pulls data from a remote system and puts it on the host system.

The remote system must have the rsync service activated.
Additional requirements are listed further down for either rsynch module or SSH tasks.

## Creating an Rsync Task

Go to **Tasks > Rsync Tasks** and click **ADD**.
The **Rsync Mode** field has two primary rsync modes: **Module** and **SSH**.
Each mode has different requirements.
See the related tab for eac rsync mode.

{{< tabs "Rsync Modes" >}}
{{< tab "Module" >}}
### Module Requirements

Before you create an rsync task on the host system, you must create a module on the remote system.
When TrueNAS is the remote system, create a module. Go to **Services** and click <i class="material-icons" aria-hidden="true" title="edit">edit</i> for the rsync service.
Click the **Rsync Module** tab, then click **ADD**.
See the specific configuration instructions in the [Rsync Service section](#rsync-service-and-modules) of this article.

### Rsync Module Process

Log in to the host system interface, go to **Tasks > Rsync Tasks**, and click **ADD**.

![TasksRsyncTasksAddModeModule](/images/CORE/12.0/TasksRsyncTasksAddModeModule.png "Rsync Task: Module Mode")

Select the source dataset to use with the rsync task and a user account to run the rsync task.
Choose a direction for the rsync task.

Select a schedule for the rsync task.
If you need a custom schedule, select **Custom**.
{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/CORE/AdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

Next, enter the **Remote Host** IP address or hostname.
Use the format *username@remote_host* when the username differs from the host entered into the **Remote Host** field.
Select **Module** on the **Rsync Mode** drop-down. 
Enter the **Remote Module Name** exactly as it appears on the remote system.

Configure the remaining options according to your specific needs.
{{< expand "Options" "v" >}}

{{< include file="static/includes/Reference/TasksRsyncAddFields.md.part" markdown="true" >}}

The **Module** mode adds the **Remote Module Name** field to the **Remote** section:

You must define at least one module in [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) of the rsync server or in the rsync modules of another system.
{{< /expand >}}

If the **Enable** checkbox is not selected it disables the task schedule, but you can still save the rsync task and run it manually. 
{{< /tab >}}
{{< tab "SSH" >}}
### SSH Requirements

The remote system must have SSH enabled.
To enable SSH in TrueNAS, go to **Services** and toggle **SSH** on.

The *host* system needs an established [SSH connection]() to the remote for the rsync task.
To create the connection, go to **System > SSH Connections** and click **Add**.
Populate the SSH configuration screen fields as follows: 
Select **Semi-automatic** for the **Setup Method** and set **Private Ke*y* to **Generate New**.

{{< expand "Can this be set up in a command line instead?" "v" >}}
To use a command line, go to the **Shell** on the host system.
When a TrueNAS account other than root manages the rsync task, enter `su - {USERNAME}`, where *{USERNAME}* is the TrueNAS user account that runs the rsync task.
Enter `ssh-keygen -t rsa` to create the key pair.
When prompted for a password, press <kbd>Enter</kbd> without setting a password (a password breaks the automated task).
Here is an example of running the command:

```zsh
truenas# ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):
Created directory '/root/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:NZMgbuPvTHeEqi3SA/U5wW8un6AWrx8ZsRQdbJJHmR4 tester@truenas.local
The key's randomart image is:
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
Copy it to the corresponding user account on the remote system in **Accounts > Users**.
Click **EDIT** and paste the key in **SSH Public Key**.

Next, copy the host key from the remote system to the host system user's <file>.ssh/known_hosts</file> directory, using `ssh-keyscan`.
On the host system, open the **Shell** and enter `ssh-keyscan -t rsa {remoteIPaddress} >> {userknown_hostsDir}` where *{remoteIPaddress}* is the remote system IP address and *{userknown_hostsDir}* is the <file>known_hosts</file> directory on the host system.
Example: `ssh-keyscan -t rsa 192.168.2.6 >> /root/.ssh/known_hosts`.
{{< /expand >}}

### SSH Mode Process

Go to **Tasks > Rsync Tasks** and click **ADD**.

![TasksRsyncTasksAddModeSSH](/images/CORE/12.0/TasksRsyncTasksAddModeSSH.png "Rsync Task: SSH Mode")

Configure the SSH settings first by selecting **SSH** in the **Rsync Mode** drop-down and typing the **Port** number and **Remote Path**.

Next, define the **Source** dataset to use for the rsync task and select a **User** account.
The **User** field entry must be identical to the [SSH Connection]({{< relref "SystemSSH.md" >}}) **Username**.

Choose a **Direction** for the rsync task, either **Push** or **Pull** and then define the task **Schedule**.
If you need a custom schedule, select **Custom**.
{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/CORE/AdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

Next, enter the **Remote Host** IP address or hostname.
Use the format *username@remote_host* if the username differs on the remote host.
Configure the remaining options according to your specific needs.

{{< expand "Options" "v" >}}
{{< include file="static/includes/Reference/TasksRsyncAddFields.md.part" markdown="true" >}}

Additional options for the **SSH Rsync Mod*e*:

* **Remote SSH Port** : Enter the SSH port number of the remote system. By default, *22* is reserved in TrueNAS.
* **Remote Path** : Browse to the existing path on the remote host to sync with. Maximum path length is *255* characters.
* **Validate Remote Path** : Set to automatically create the defined **Remote Path** when it does not exist.

{{< /expand >}}

If the **Enabled** checkbox is not selected it disables the task schedule without deleting the configuration.
You can still run the rsync task by going to **Tasks > Rsync Tasks** and clicking <i class="fa fa-chevron-right"></i>, then the **RUN NOW** <i class="material-icons" aria-hidden="true" title="play_arrow">play_arrow</i> icon.
{{< /tab >}}
{{< /tabs >}}

## Rsync Service and Modules

The rsync task does not work unless the related system service is turned on.
To turn the rsync service on, go to **Services** and toggle **rsync** on.
To activate the service whenever TrueNAS boots, select the **Start Automatically** checkbox.

Click the <i class="material-icons" aria-hidden="true" title="edit">edit</i> to configure the service on the **Services > Rsync** screen.
There are two sections for rsync configuration: basic **Configure** options and **Rsync Module** creation and management.

{{< tabs "Rsync Service Options" >}}
{{< tab "Configure" >}}

![ServicesRsyncConfigure](/images/CORE/12.0/ServicesRsyncConfigure.png "rsync service options")

{{< include file="static/includes/Reference/ServicesRsyncConfigureFields.md.part" markdown="true" >}}

Use the default settings unless a specific change is required.
Remember to click **SAVE** after changing any settings.
{{< /tab >}}
{{< tab "Rsync Module" >}}

All created modules are listed on the **Rsync Module** tab.
To create a new module, click **ADD**.

![ServicesRsyncModuleAdd](/images/CORE/12.0/ServicesRsyncModuleAdd.png "Creating a rsync module")

{{< include file="static/includes/Reference/ServicesRsyncConfigureRsyncModuleAdd.md.part" markdown="true" >}}

{{< hint info >}}
When a **Hosts Allow** list is defined, *only* the IPs and hostnames on the list are able to connect to the module.
{{< /hint >}}

To **EDIT** or **DELETE** a module, go to the **Rsync Modules** list and click <i class="fa fa-chevron-right"></i> for an entry.

{{< /tab >}}
{{< /tabs >}}
