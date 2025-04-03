---
title: "Creating Rsync Tasks"
description: "Provides information on how to create a remote sync (rsync) task on your TrueNAS."
weight: 30
tags:
- corersync
- coredatabackuptasks
---

{{< toc >}}

Rsync is a fast and secure way to copy data to another system, either for backup or data migration purposes.
An [rsync](https://rsync.samba.org/) task requires the configuration of both a **Host** and **Remote** system. These instructions assume a TrueNAS system for both the **Host** and **Remote** configurations.

## Basic Requirements

Rysnc requires a [dataset]({{< relref "/CORETutorials/Storage/Pools/Datasets.md" >}}) with the needed data on the **Host** or **Remote** system.
Rsync provides the ability to either push or pull data.
When using rsync to push, data copies from alocal host system to a remote system.
When using rsync to pull, data comes from a remote system. It is then put on the local host system.

TrueNAS has extra requirements depending on if you choose the **Module** or **SSH** rsync mode.

### Rsync Services Requirements

Before you create an rsync task on the **Host** system, you must create a module on the **Remote** system. The **Remote** system must have rsync service activated. 
When TrueNAS is the **Remote** system, create a module by going to **Services** and clicking <i class="material-icons" aria-hidden="true" title="edit">edit</i> for the rsync service. Click the **Rsync Module** tab, then click **ADD**. See [ConfiguringRsync]({{< relref "ConfiguringRsync.md" >}}) for more information.

## Creating a Module Mode Rsync Task

Log in to the **Host** system interface, go to **Tasks > Rsync Tasks**, and click **ADD**.

![TasksRsyncTasksAddModeModule](/images/CORE/12.0/TasksRsyncTasksAddModeModule.png "Rsync Task: Module Mode")

Select the **Source** dataset and use it in the rsync task and a **User** account to run the rsync task.
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

Before creating an rsync task on the host system, you need the following on the local and remote host systems:

* A unique administration user with identical configurations.

* An SSH connection keypair is manually added in an SSH session.

* The public key is copied into the **SSH Public Key** field for the unique administration user.

* SSH service enabled and a session established.

The [Configuring an Rsync SSH Mode Task](#configuring-an-rsync-ssh-mode-task) below explains when and how to create each requirement above.

### Configuring an Rsync SSH Mode Task

{{< hint type=info >}}
Rsync task in SSH mode requires following a specific series of steps, in the correct order or the task fails to complete.

Only enable the SSH service on the local and remote systems while using it!
To keep your system security-hardened, disable the SSH service when not in use.
{{< /hint >}}

To enable SSH in TrueNAS, go to **Services** and click the **SSH** toggle to enable (or disable) it. The toggle turns blue when the service is on or grey when it is disabled.

Establish an SSH connection with the local host system and manually create the SSH connection keypair in that session.
Configuring the SSH Connection keypair in the UI can result in an error when running the rsync task.

Open two browser sessions, one for the local host system UI and the other for the remote host system UI. Log into the UI of both systems.

Establish an SSH session with the local host and one with the remote system receiving transferred data. Log into the SSH systems of both systems.

On the remote host system:

1. Create a unique administration user in the UI. For this example, we created *chester*.
   Add **wheel** in **Auxiliary Group**, and assign read/write permissions to all files and directories.

2. Go to or create the dataset that receives synced information from the local host system. For example, we created *rsync-rec*.
   Add an ACE entry for the **wheel** group and give it with read/write permissions.
   Open the dataset permissions to full for **Other** if desired. This might be required if you receive a permission error executing the rsync task.

3. In the SSH session, create a receive directory in the receive dataset. Creating a directory requires using the command-line interface.

Go to the local system to create the same unique user, and to generate the SSH keypair described below.
After completing steps 1 through 3 below, return to the remote host system to add the public key part of the SSH keypair to the remote system (described in step 3.a. below).

Log into the UI for the local host system:

1. Create the identical unique user (*chester*), add **wheel** in **Auxiliary Group**, and give it read/write permissions to all files and directories.
   You can do this in the UI. 

2. In the SSH session, create an SSH connection keypair and assign it to the new user *chester*. Run the following commands.

   a. Activate the account by entering the <code>su <i>chester</i> command in the SSH session.

      Generate the SSH keypair by entering the <code>ssh-keygen -t rsa -b 4096 "<i>chester</i>@<i>hostname</i>"</code> command.

      Where *chester* is the unique user created for the rsync operation, and *hostname* is the host name given to the local system.

      Look at the randomart image to verify the keypair generated. Do not add a passphrase.
   
3. Change directory to the <file>/mnt/<i>poolname</i>/SMBHomeDataset/<i>chester</i>/.ssh/</file> location>
   View the generated keypair [id_rsa (private key) and id_rsa.pub (public key)] files, and then:

   a. Copy the SSH keypair public key to paste into the remote receiving system unique user record (see step 3.b. below)

   b. Go to the remote receiving system UI, edit the *chester* user, and paste the SSH keypair public key into the **SSH Public Key** field. Click **Save**.

   c. Go back to the local system UI, edit the *chester* user, and paste the public key into the **SSH Public Key** field. Click **Save**

   d. Go to the SSH session with the remote receiving host system to accept the key exchange. Run this command:
      
      <code>su <i>chester</i></code> to activate the user, then accept the key exchange.

4. Return to the local host system UI, and configure the rsync task. Go to **Tasks > Rsync Tasks** and click **ADD**. Enter the following parameters:
   
   ![TasksRsyncTasksAddModeSSH](/images/CORE/12.0/TasksRsyncTasksAddModeSSH.png "Rsync Task: SSH Mode")

   - User = *chester* (the name must match the unique administration user created on both systems for the rsync task to work)
   - Remote Path = paste or manually enter the path to the receiving dataset on the remote host system <file>/mnt/<i>poolname</>/<i>rsync-rec</i>/sshreceive/<file>
     Where *poolname* is the name of the pool on the remote host system with the receiving dataset, and *rsync-rec* is the dataset created to receive the rsync file (copy) transfer.

   Configure the SSH settings by selecting **SSH** on the **Rsync Mode** dropdown list. Enter the **Port** number and **Remote Path**.

   Populate any other settings for your use case. Define the **Source** dataset for the rsync task and select an account in **User**.
   
   Select a direction for the rsync task, either **Push** or **Pull**, and define the task **Schedule**.
   
   Enter the **Remote** host IP address or host name. Use the format `username@remote_host` if the user name differs on the **Remote** host.
   
   Configure the remaining options according to your specific needs, then click **Save**.

   Run the rsync task by going to **Tasks > Rsync Tasks** and clicking <i class="fa fa-chevron-right"></i>, then **RUN NOW**.
   
   {{< expand "Testing the Sync Operation" "v" >}}
   Run the task now to test the sync operation.

   After the rsync completes, check the contents of the receiving dataset on the remote system to compare it to the source sending dataset.
   Verifyg the contents using either the SSH session or an SMB share. The sending dataset contents should be the same as what is in the receiving dataset.

   To further verify the data transfer, reconfigure the rsync task to a **PULL** operation and run the task again.
   Check the file contents in the local dataset against the remote dataset contents to verify the local dataset reflects the contents in the remote system dataset.
   {{< /expand >}}

### Tips

When a TrueNAS account other than root manages the rsync task, enter <code>su - <i>username</i></code>, where *username* is the name of the TrueNAS user account that runs the rsync task.

#### Manually Generating an SSH Keypair in an SSH Session
To generate an SSH keypair in an SSH session and associate it with a user, refer to the command provided in the procedure in [Configuring an Rsync SSH Mode Task](#configuring-an-rsync-ssh-mode-task)

To generate an SSH keypair in an SSH session, enter `ssh-keygen -t rsa` to create the key pair. For example:

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
#### Viewing SSH Keypair File in an SSH Session

The default public key location is <file>\~/.ssh/id_rsa.pub</file>.

Enter `cat ~/.ssh/id_rsa.pub` to see the key and copy the file contents.

## Rsync Service and Modules

The rsync task does not work when the related system service is off.
To turn the rsync service on, go to **Services** and click the **rsync** toggle. The toggle is blue when the service is on, grey when it is off.
See [ConfiguringRsync]({{< relref "ConfiguringRsync.md" >}}) for more information on rsync configuration and module creation.

{{< taglist tag="corersync" limit="10" >}}

{{< taglist tag="coredatabackuptasks" limit="10" title="Related Data Backup Articles" >}}
