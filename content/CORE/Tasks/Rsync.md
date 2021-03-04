---
title: "Rsync Tasks"
weight: 30
---

{{< toc >}}

Data often needs to be copied to another system for backup or when migrating to a new system.
A fast and secure way of doing this is by using [rsync](https://rsync.samba.org/).
These instructions assume that TrueNAS systems are being used for both sides of the rsync task: *host* and *remote*.

## Basic Requirements

Rysnc requires a [dataset](/CORE/Storage/DataPool/datasets) with the needed data on the *host* or *remote* system.
Rsync provides the ability to either *push* or *pull* data.
When using rsync to *push*, data is copied from a *host* system to a *remote* system.
When using rsync to *pull*, data is pulled from a *remote* system and put on the *host* system.

The *remote* system must have the rsync service activated.
Additional requirements are listed further down for either *module* or *SSH* rsync tasks.


## Creating an Rsync Task

Go to **Tasks > Rsync Tasks** and click *ADD*.
There are two primary *Rsync Mode*s: *Module* and *SSH*.
The requirements for each mode are different.
Refer to the related tab for your desired *Rsync Mode*.

{{< tabs "Rsync Modes" >}}
{{< tab "Module" >}}
### Module Requirements

Before creating an rsync task on the *host* system, a module on the *remote* system must be created.
When TrueNAS is the *remote* system, create a module by going to **Services** and clicking <i class="fa fa-pencil" aria-hidden="true" title="Pen"></i> for the rsync service.
Click the **Rsync Module** tab and *ADD*.
Specific creation instructions are farther down, in the [Rsync Service section](#rsync-service-and-modules).

### Process

Log in to the *host* system interface, go to **Tasks > Rsync Tasks**, and click *ADD*.

![TasksRsyncTasksAddModeModule](/images/CORE/12.0/TasksRsyncTasksAddModeModule.png "Rsync Task: Module Mode")

Select the source dataset to use with the rsync task and a user account to run the rsync task.
Choose a direction for the rsync task.

Select a schedule for the rsync task.
When a custom schedule is required, select *Custom*.
{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/AdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

Next, enter the *Remote Host* IP address or hostname.
Use the format *username@remote_host* when the username differs on the *remote* host.
Select *Module* in the *Rsync Mode* dropdown. 
Enter the *Remote Module Name* exactly as it appears on the *remote* system.

Configure the remaining options according to your specific needs.
{{< expand "Options" "v" >}}

{{< include file="static/includes/TasksRsyncAddFields.md.part" markdown="true" >}}

The *Module* mode adds one field to the **Remote** section:

*Remote Module Name* : At least one module must be defined in [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) of the rsync server or in the Rsync Modules of another system.
{{< /expand >}}

Unsetting *Enabled* disables the task schedule.
You can still save the rsync task and run it manually.
{{< /tab >}}
{{< tab "SSH" >}}
### SSH Requirements

The *remote* system must have *SSH* enabled.
To enable SSH in TrueNAS, go to **Services** and toggle **SSH**.

The *host* system needs an established [SSH connection]() to the *remote* for the rsync task.
To create the connection, go to **System > SSH Connections** and click *Add*.
Configure a *Semi-automatic* connection and set *Private Key* to *Generate New*.

{{< expand "Can this be set up in a command line instead?" "v" >}}
To use a command line, go to the **Shell** on the *host* system.
When the rsync task is managed by a TrueNAS account other than *root*, enter `su - {USERNAME}`, where *{USERNAME}* is the TrueNAS user account that runs the rsync task.
Enter `ssh-keygen -t rsa` to create the key pair.
When prompted for a password, press <kbd>Enter</kbd> without setting a password, as a password breaks the automated task.
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
Copy it to the corresponding user account on the *remote* system in **Accounts > Users**.
Click *EDIT* and paste the key in *SSH Public Key*.

Next, copy the host key from the *remote* system to the *host* system user's <file>.ssh/known_hosts</file> directory, using `ssh-keyscan`.
On the *host* system, open the **Shell** and enter `ssh-keyscan -t rsa {remoteIPaddress} >> {userknown_hostsDir}` where *{remoteIPaddress}* is the *remote* system IP address and *{userknown_hostsDir}* is the <file>known_hosts</file> directory on the *host* system.
Example: `ssh-keyscan -t rsa 192.168.2.6 >> /root/.ssh/known_hosts`.
{{< /expand >}}

### Process

Go to **Tasks > Rsync Tasks** and click *ADD*.

![TasksRsyncTasksAddModeSSH](/images/CORE/12.0/TasksRsyncTasksAddModeSSH.png "Rsync Task: SSH Mode")

Configure the SSH settings first by selecting *SSH* in the *Rsync Mode* dropdown and entering the *Port* number and *Remote Path*.

Next, define the **Source** dataset to use for the rsync task and select a *User* account.
The *User* must be identical to the [SSH Connection]() *Username*.

Choose a direction for the rsync task, either *Push* or *Pull* and then define the task *Schedule*.
When a custom schedule is required, select *Custom*.
{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/AdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

Next, enter the *remote* host IP address or hostname.
Use the format *username@remote_host* if the username differs on the *remote*host.
Configure the remaining options according to your specific needs.

{{< expand "Options" "v" >}}
{{< include file="static/includes/TasksRsyncAddFields.md.part" markdown="true" >}}

Additional options for the *SSH Rsync Mode*:

* *Remote SSH Port* : Enter the SSH port number of the remote system. By default, *22* is reserved in TrueNAS.
* *Remote Path* : Browse to the existing path on the remote host to sync with. Maximum path length is *255* characters.
* *Validate Remote Path* : Set to automatically create the defined *Remote Path* when it does not exist.

{{< /expand >}}

Unsetting *Enabled* disables the task schedule without deleting the configuration.
The rsync task can still run by going to **Tasks > Rsync Tasks** and clicking <i class="fa fa-chevron-right"></i> and *Run Now*.
{{< /tab >}}
{{< /tabs >}}

## Rsync Service and Modules

The rsync task does not work when the related system service is not turned on.
To turn the rsync service on, go to **Services** and toggle *rsync*.
To activate the service whenever TrueNAS boots, set *Start Automatically*.

Click the <i class="fa fa-pencil" aria-hidden="true" title="pencil"></i> to configure the service.
There are two sections for rsync configuration: basic **Configure** options and **Rsync Module** creation and management.

{{< tabs "Rsync Service Options" >}}
{{< tab "Configure" >}}

![ServicesRsyncConfigure](/images/CORE/12.0/ServicesRsyncConfigure.png "rsync service options")

{{< include file="static/includes/ServicesRsyncConfigureFields.md.part" markdown="true" >}}

Use the default settings unless a specific change is required.
Don't forget to click *SAVE* after changing any settings.
{{< /tab >}}
{{< tab "Rsync Module" >}}

All created modules are listed here.
To create a new module, click *ADD*.

![ServicesRsyncModuleAdd](/images/CORE/12.0/ServicesRsyncModuleAdd.png "Creating a rsync module")

{{< include file="static/includes/ServicesRsyncConfigureRsyncModuleAdd.md.part" markdown="true" >}}

{{< hint info >}}
When a *Hosts Allow* list is defined, **only** the IPs and hostnames on the list are able to connect to the module.
{{< /hint >}}

To *Edit* or *Delete* a module, go to the **Rsync Modules** list and click <i class="fa fa-chevron-right"></i> for an entry.

{{< /tab >}}
{{< /tabs >}}
