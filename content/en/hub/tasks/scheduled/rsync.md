---
title: "Configuring an rsync Task"
description: "A how-to for configuring rysnc tasks."
---

Often times, data needs to be copied to another system for backups or when
migrating to a new system. A fast and secure way of doing this is by using
rsync in TrueNAS.

Rsync provides the ability to either *push* or *pull* data. When using rsync
to *push*, data is copied from a *host* system to a *remote* system. When using
rsync to *pull*, data is pulled from a *remote* system and put on the *host* system.
To do this, a dataset with data willing to be copied must exist on either the
*host* or the *remote* system. See
<a href="/hub/initial-setup/storage/datasets/">ZFS Datasets</a> for information
on creating a dataset in TrueNAS.

## Rsync Service

To turn the rsync service on, go to **Services** and click the slider for
*rsync*. If you wish to turn the service on automatically when the TrueNAS
system is turned on, check the *Start Automatically* box.

> NOTE: The rsync task will not work if the service is not turned on.

The rsync service settings can be configured by clicking
<i class="fas fa-pen"></i>. The default TCP port that rsync listens on can be
changed, and additional auxiliary parameters from
<a href="https://www.samba.org/ftp/rsync/rsyncd.conf.html">rsyncd.conf(5)</a>
can be added. Don't forget to click *SAVE* when changing the settings. Unless a
specific setting is needed, it is recommended to use the default settings for
the rsync service.

## Create Rsync Task

To create an rsync task, go to **Tasks > Rsync Tasks** and click *ADD*. There
are two primary rsync modes: *Module* and *SSH*. The requirements for each mode
are different. Refer to the appropriate section below for your desired rsync
mode.

### Rsync Mode: Module

First, turn on the rsync service on the *remote* system.
Before creating an rsync task on the *host* system, a module on the *remote*
system must be created. Create a module by going to **Services** and clicking
<i class="fas fa-pen"></i> for the rsync service. Then, click **Rsync Module >
ADD**. Give a descriptive name for the rsync module. Use the file browser to
select the path of the dataset. This is the dataset used when pushing and
pulling data from the *host* system. Select the permissions for the module by
selecting an option from the *Access Mode* dropdown. Set the *Max Connections*.
Entering *0* sets the amount of connections to unlimited. If running as a
specific user or group during data transfers to and from the module, select
them from the dropdowns. A list of hosts can also be allowed or denied from the
rsync module if desired.

> NOTE: If a *Hosts Allow* list is specified, **only** the IPs and hostnames
> on the list will be able to connect to the module.

Other options include specifying a comment for the rsync module and any
additional parameters from
<a href="https://www.samba.org/ftp/rsync/rsyncd.conf.html">rsyncd.conf(5)</a>.

Once a module has been created on the *remote* system, go to the *host* system
and create an rsync task. Go to **Tasks > Rsync Tasks** and click *ADD*. Select
the source dataset to be used for the rsync task. This dataset will be copied
to the remote module when *pushing*. Alternatively, this dataset will be used as
the destination when *pulling* data from the module. Select a user to run
the rsync task. The user selected must have write permissions to the
specified directory chosen for the module on the *remote* system. Choose a
direction for the rsync task. When *push* is selected, data from the *host*
dataset copies to the *remote* module. When *pull* is selected,
data form the *remote* module is copied into the *host* dataset. An optional
description can be specified. Select a schedule for the rsync task to run on.
If a custom schedule is desired, select *Custom* and fill out the custom
scheduler to meet your needs. The custom scheduler can accept standard
[cron input strings](https://www.freebsd.org/cgi/man.cgi?query=crontab&sektion=5)
for the *Minutes*, *Hours*, and *Days*. By default, the *Recursive* option is
set. If unset, the rsync task will not copy any subdirectories in the *host*
dataset.

Next, enter the *remote* host IP address or hostname.
Use the format *username@remote_host* if the username differs on the *remote*
host. Select *Module* in the *Rsync Mode* dropdown. Enter the
*Remote Module Name* exactly.

Setting the *Times* option preserves the modification times of files. Set
*Compress* to reduce the size of data to transmit. This is recommended for slow
connections. *Archives* can be set to run recursively preserving symlinks,
permissions, modification times, group, and special files. When run as root, the
owner, device files, and special files are also preserved. This is equivalent to
passing the flags `-rlptgoD` to rsync. When *Delete* is set, the rsync task
will delete files in the destination directory that do not exist in the source
directory. For example, if the task is set to *pull*, this option will delete
any files on the *host* dataset that do not existing on the *remote* module.
Alternatively, if the task is set to *push*, this option will delete any files
on the *remote* module that are not in the *host* dataset. This is a
**destructive** option. Use with caution as data can be deleted permanently.
Set the *Quiet* option to suppress informational messages from the *remote*
system. Set the option *Preserve Permissions* to preserve original file
permissions. This is useful when the user is set to root. Set
*Preserve Extended Attributes* to keep the advanced file system features and file metadata through the transfer
(see <a href="https://en.wikipedia.org/wiki/Extended_file_attributes">Extended attributes</a>).
Extended attributes must be supported by both systems. Set *Delay Updates* to
save the temporary files from updated files to a holding directory until the
end of the transfer when all transferred files are renamed into place.
Additional <a href="https://rsync.samba.org/ftp/rsync/rsync.html">rsync(1)</a>
options can be included in *Auxiliary Parameters*. Separate entries by pressing
<kbd>Enter</kbd>. The *\** character must be escaped with a backslash
(\\*.txt) or used inside single quotes ('\*.txt'). Unsetting *Enabled* only
keeps the task from automatically running. You can still save the rsync task and
run it manually.

### Rsync Mode: SSH

Using the *SSH* rsync mode requires the SSH service to be enabled
on the *remote* system. To enable SSH, go to **Services** and click the slider
for SSH. SSH settings can be configured by clicking <i class="fas fa-pen"></i>.
Take note of the TCP port set on the *remote* system. The default port for the
SSH service is port *22*. It is required when creating the rsync task.

Now, an ssh key pair must be created on the *host* system. Open up the **Shell**
on the *host* system. To create the ssh key pair, the `ssh-keygen` command is used.
Typically, the rsync task is ran as the root user. If running the command as
a different user, run <code>su - <i>username</i></code> where *username* is the
name of the user that will run the rsync task. When the appropriate user is
selected, run the command `ssh-keygen -t rsa` and follow the prompts. When
prompted for a password, press <kbd>Enter</kbd>. Setting a password will break
the scheduled rsync task since it is automatic. Below is an example of running
the command.

```shell
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

The default location for the
public key is `~/.ssh/id_rsa.pub`. Run the command `cat ~/.ssh/id_rsa.pub` to
view the key. Copy it to the corresponding user account on the *remote* system
in **Accounts > Users**. Click *EDIT* and paste the key in the *SSH Public Key*
field.

Next, copy the host key of the *remote* to the user's `.ssh/known_hosts`
directory on the *host* system. This is done using the `ssh-keyscan` command.
While on the *host* system, open up the **Shell** and run
<code>ssh-keyscan -t rsa <i>remoteIPaddress</i> >> <i>userknown_hostsDir</i></code>
where *remoteIPaddress* is the IP address of the *remote* system and
*userknown_hostsDir* is the known_hosts directory on the *host* system.
Here is an example of the command:
`ssh-keyscan -t rsa 192.168.2.6 >> /root/.ssh/known_hosts`.

Finally, the rsync task is ready to be created. Go to **Tasks > Rsync Tasks**
and click *ADD*. Select the source dataset to be used for the rsync task. This
dataset will be copied to the remote path chosen when *pushing*. Alternatively,
this dataset will be used as the destination when *pulling* data from the remote
path. Select the user to run the rsync task. Make sure this is the same user
the ssh key pair was created for. In the example given, the user is root. Choose
a direction for the rsync task. When *push* is selected, data from the *host*
dataset copies to the *remote* dataset. When *pull* is selected,
data from the *remote* dataset is copied into the *host* dataset. An optional
description can be specified. Select a schedule for the rsync task.
If a custom schedule is desired, select *Custom* and fill out the custom
scheduler to meet your needs. The custom scheduler can accept standard
[cron input strings](https://www.freebsd.org/cgi/man.cgi?query=crontab&sektion=5)
for the *Minutes*, *Hours*, and *Days*. By default, the *Recursive* option is
set. If unset, the rsync task will not copy any subdirectories in the *host*
dataset.

Next, enter the *remote* host IP address or hostname.
Use the format *username@remote_host* if the username differs on the *remote*
host. Select *SSH* in the *Rsync Mode* dropdown. Enter the
*TCP port* set on the *remote* system. The default is *22*. Enter the remote
path of the dataset for rsync to *push* or *pull*. Set *Validate Remote Path*
to automatically create the defined *Remote Path* if it does not exist on the
*remote* system.

Setting the *Times* option preserves modification times of the files. Set
*Compress* to reduce the size of data to transmit. This is recommended for slow
connections. *Archives* can be set to run recursively, preserving symlinks,
permissions, modification times, group, and special files. When run as root, the
owner, device files, and special files are also preserved. This is equivalent to
passing the flags `-rlptgoD` to rsync. When *Delete* is set, the rsync task
will delete files in the destination directory that do not exist in the source
directory. For example, if the task is set to *pull*, this option will delete
any files on the *host* dataset that do not existing on the *remote* module.
Alternatively, if the task is set to *push*, this option will delete any files
on the *remote* module that are not in the *host* dataset. This is a
**destructive** option. Use with caution as data can be deleted permanently.
Set the *Quiet* option to suppress informational messages from the *remote*
system. Set the option *Preserve Permissions* to preserve original file
permissions. This is useful when the user is set to root. Set
*Preserve Extended Attributes* to keep the advanced file system features and file metadata through the transfer
(see <a href="https://en.wikipedia.org/wiki/Extended_file_attributes">Extended attributes</a>).
Extended attributes must be supported by both systems. Set *Delay Updates* to
save the temporary files from updated files to a holding directory until the
end of the transfer when all transferred files are renamed into place.
Additional <a href="https://rsync.samba.org/ftp/rsync/rsync.html">rsync(1)</a>
options can be included in *Auxiliary Parameters*. Separate entries by pressing
<kbd>Enter</kbd>. The *\** character must be escaped with a backslash
(\\*.txt) or used inside single quotes ('\*.txt'). Unsetting *Enabled* only
keeps the task from automatically running. You can still save the rsync task and
run it manually.
