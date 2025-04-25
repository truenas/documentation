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
An [rsync](https://rsync.samba.org/) task requires configuring the local and remote host systems.
These instructions assume the task uses TrueNAS systems for the local host and remote host configurations.

## Basic Requirements

Rysnc requires a [dataset]({{< ref "/CORETutorials/Storage/Pools/Datasets" >}}) on the local host and remote host systems.
Rsync provides the ability to either push or pull data.
When configuring a push rsync, data is copied from a local host system to a remote system.
When configuring a pull rsync, data comes from a remote system. It is then put on the local host system.

TrueNAS has extra requirements depending on if you choose the **Module** or **SSH** rsync mode.

### Rsync Services Requirements

Before creating an rsync task on the local host system, configure a module on the remote host system. The remote host system must have the rsync service activated. 
When TrueNAS is the remote host system, create a module by going to **Services** and clicking <i class="material-icons" aria-hidden="true" title="edit">edit</i> for the rsync service. Click the **Rsync Module** tab, then click **ADD**. See [ConfiguringRsync]({{< ref "ConfiguringRsync" >}}) for more information.

## Creating a Module Mode Rsync Task

Configure the local and remote TrueNAS systems for an rsync task using module mode.

1. Log into the local host system UI, go to **Tasks > Rsync Tasks**, and click **ADD**.
   Select **Module** in the **Rsync Mode** dropdown list.

   ![TasksRsyncTasksAddModeModule](/images/CORE/12.0/TasksRsyncTasksAddModeModule.png "Rsync Task: Module Mode")

   a. Select the **Source** dataset and use it in the rsync task and a **User** account to run the rsync task.
      Select a **Direction** for the rsync task.

   b. Select a **Schedule** for the rsync task.

   c. Enter the **Remote Host** IP address or host name.
      Do not add http or https to the host IP address, and do not append a port number to the IP address.
      Use the format `username@remote_host` when the user name differs on the **Remote** host.

   d. Enter the **Remote Module Name** as it appears on the **Remote** system.

   e. Configure the remaining options according to your specific needs.

      Clearing **Enabled** disables the task schedule.

   f. Enable **Recursive**, and leave the default values for all other settings. Do not enable **Preserve Permissions**.

   g. Click **Save**.

2. Enable the rsysnc service. Go to **System > Services** and toggle the service on.

3. Log into the remote host system and configure the rsync task.

   You do not need to add a value in **Hosts Allow**, but if adding an IP address of the local host (source) system, do not include http or https.

   a. Enter the name given to the local host task.

   b. Enter or browse to populate the path to the dataset/directory receiving the synced data from the local system.

   c. Leave **Enable** selected.

   d. Set **Access Mode** to read and write.

   e. Leave **Max Connections** set to **0**.

   f. Add **wheel** to **Group**.

   g. Click **Save**.

4. Run the local host system task based on the schedule or run it manually.

## Creating an SSH Mode Rsync Task

Before creating an rsync task on the host system, you need the following on the local and remote host systems:

* A unique administration user with identical configurations.

* An SSH connection keypair is manually added in **Shell** or an SSH session.

* The public key is copied into the **SSH Public Key** field for the unique administration user.

* SSH service enabled and a session established.

The [Configuring an Rsync SSH Mode Task](#configuring-an-rsync-ssh-mode-task) below explains when and how to create each requirement above.

### Configuring an Rsync SSH Mode Task

{{< hint type=info >}}
Rsync task in SSH mode requires following a specific series of steps, in the correct order or the task fails to complete.

Only enable the SSH service on the local and remote systems while using it!
To keep your system security-hardened, disable the SSH service when not in use.
{{< /hint >}}

To enable SSH in TrueNAS, go to **Services** and click the **SSH** toggle to enable (or disable) it.
The toggle turns blue when the service is on or grey when it is disabled.

Establish an SSH connection with the local host system and manually create the SSH connection keypair in that session.
Configuring the SSH Connection keypair in the UI can result in an error when running the rsync task.

Open two browser sessions, one for the local host system UI and the other for the remote host system UI. Log into the UI of both systems.

Use **Shell** or establish an SSH session with the local host and one with the remote system receiving transferred data.
Log into the SSH systems of both systems.

On the remote host system:

1. Create a unique administration user in the UI. For this example, we created *chester*.
   Add **wheel** in **Auxiliary Group**, set up a home directory for this user, and assign read/write permissions to all files and directories.
   Take note of the home directory path. For this example, we created */pool/SMBHomeDataset/chester* for the home directory location

2. Go to or create the dataset that receives synced information from the local host system. For example, we created *rsync-rec*.
   Add an ACE entry for the **wheel** group and give it with read/write permissions.
   Open the dataset permissions to full for **Other** if desired. This might be required if you receive a permission error executing the rsync task.

3. In **shell** or an SSH session, create a receive directory in the destination dataset. Creating a directory requires using the command-line interface.

Go to the local system to create the same unique user, and to generate the SSH keypair described below.
After completing steps 1 through 3 below, return to the remote host system to add the public key part of the SSH keypair to the remote system (described in step 3.a. below).

Log into the UI for the local host system:

1. Create the identical unique user (*chester*), add **wheel** in **Auxiliary Group**, and give it read/write permissions to all files and directories.
   You can do this in the UI. 

2. In **Shell** or the SSH session, create an SSH connection keypair and assign it to the new user *chester*. Run the following commands.

   a. Activate the account by entering the <code>su <i>chester</i></code> command in the SSH session.

      Generate the SSH keypair by entering the <code>ssh-keygen -t rsa -b 4096 "<i>chester</i>@<i>hostname</i>"</code> command.

      Where *chester* is the unique user created for the rsync operation, and *hostname* is the host name given to the local system.

{{< expand "Command Example" "v" >}} 
```
root@truenas[~]# su chester 
$ ssh-keygen -t rsa -b 4096 "chester@gremlin2"
  Too many arguments.
  usage: ssh-keygen [-q] [-a rounds] [-b bits] [-C comment] [-f output_keyfile]
   [-m format] [-N new_passphrase] [-O option]
   [-t dsa | ecdsa | ecdsa-sk | ed25519 | ed25519-sk | rsa]
   [-w provider] [-Z cipher]
  ssh-keygen -p [-a rounds] [-f keyfile] [-m format] [-N new_passphrase]
   [-P old_passphrase] [-Z cipher]
  ssh-keygen -i [-f input_keyfile] [-m key_format]
  ssh-keygen -e [-f input_keyfile] [-m key_format]
  ssh-keygen -y [-f input_keyfile]
  ssh-keygen -c [-a rounds] [-C comment] [-f keyfile] [-P passphrase]
  ssh-keygen -l [-v] [-E fingerprint_hash] [-f input_keyfile]
  ssh-keygen -B [-f input_keyfile]
  ssh-keygen -D pkcs11
  ssh-keygen -F hostname [-lv] [-f known_hosts_file]
  ssh-keygen -H [-f known_hosts_file]
  ssh-keygen -K [-a rounds] [-w provider]
  ssh-keygen -R hostname [-f known_hosts_file]
  ssh-keygen -r hostname [-g] [-f input_keyfile]
  ssh-keygen -M generate [-O option] output_file
  ssh-keygen -M screen [-f input_file] [-O option] output_file
  ssh-keygen -I certificate_identity -s ca_key [-hU] [-D pkcs11_provider]
   [-n principals] [-O option] [-V validity_interval]
   [-z serial_number] file ...
  ssh-keygen -L [-f input_keyfile]
  ssh-keygen -A [-a rounds] [-f prefix_path]
  ssh-keygen -k -f krl_file [-u] [-s ca_public] [-z version_number]
   file ...al_number] file ...
  ssh-keygen -Q [-1] -f krl_file [file ...]           
  ssh-keygen -Y find-principasl -s signature_file -f allowed_signers_file
  ssh-keygen -Y check-novlidate -n namespace -s signature_file
  ssh-keygen -Y sign -f key_file -n namespace file ...
  ssh-keygen -Y verify -f allowed_signers_file -I signer_identiy
   -n namespace -s signature_file [-r revocation_file]
$
 ```
{{< /expand >}}

      Look at the randomart image to verify the keypair generated. Do not add a passphrase.
   
3. Change directory to the <file>/mnt/<i>poolname</i>/SMBHomeDataset/<i>chester</i>/.ssh/</file> location>
   View the generated keypair [id_rsa (private key) and id_rsa.pub (public key)] files. While in **Shell** enter the following command to view the keypair:

   <code>cat /mnt/<i>poolname</i>/<i>SMBHomeData<i>/<i>chester</i>/.ssh/id_rsa</code>

   {{< expand "Command Example to Generate the SSH Keypair" "v" >}}
```
root@truenas[~]# su chester
$ ssh-keygen -t rsa -b 4096 -C "chester@hostname"
>
Created directory '/mnt/pool/SMBHomeDataset/chester/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:

Generating public/private rsa key pair.
Enter file in which to save the key (/mnt/pool/SMBHomeDataset/chester/.ssh/id_rsa):
/mnt/pool/SMBHomeDataset/chester/.ssh/id_rsa already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /mnt/pool/SMBHomeDataset/chester/.ssh/id_rsa
Your public key has been saved in /mnt/pool/SMBHomeDataset/chester/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:QjIMODOFoGKMY/d6bhn5AlONGtTnF0BFX0dKKUJssJM chester@hostname
The key's randomart image is:
+---[RSA 4096]----+
|o+o . .+B+   ooo |
|X  + . .o=..o.o  |
|=B..+ *E. o...   |
|+....* o..       |
|    +.o S        |
|   +.o .         |
|   .o.+          |
|    o+ .         |
|    ...          |
+----[SHA256]-----+
$
```
{{< /expand >}}

{{< expand "Command Example to View the SSH Keypair" "v" >}}
```
$ cat /mnt/pool/SMBHomeDataset/chester/.ssh/id_rsa

-----BEGIN OPENSSH PRIVATE KEY-----
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
-----END OPENSSH PRIVATE KEY-----
$
```
{{< /expand >}}

{{< expand "Command to View the SSH Public Key" "v" >}}

```
$
$ cat /mnt/pool/SMBHomeDataset/chester/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDD/hHzypIAHlH1dqBgwDlXvM5BaMfpS+Cy1OCRKs98Vm2NtJkipaojwyoog4DTFVwnXFQB5Xd27bdQBWRlq0jKoQ7xiqAzBQ0TXNB3PbHKAk09QKLNQNC+ZpCOVWpMHosR88OjD6vFMyhQt9PE0++BdSAyQL6EiF+Pp8Yh002UUuKcZ9JdzUj7N7DN4UurbOXyiDT2Im4z1Hbd30R9OP7MHsTfygwpNyOtb6a8lBh7EFwBj5X/1JIAcOARGjcVk1Utr8O5b01ITpE3YhXoHremvfwh65GG66Z9+rCPgu5TE2CEq8KMBcs74ySg0aq0TOc8eCXTAdKlHWKp2vne/2lA4p1D4E0Goa3EAywJCTdPgTTaMy10vcLgcx6jzpe6TWRy9sreUvvhYHBPnpcI/iNDFj2dAQMJpN2Sswi/t7WAU1ELQpmrd0LIQl1OZ8bXmI0UTWQsBLaJ/hzOGe3WsSUgvHCdKzjI35G25GzlqDkAznLeUDmNaUCJHln5q0iSy2xsD8YF2cR9gC/LD4HHxGp74RWv/TGJJvoy8mBjEzYs3S6uh5cU4SS3ArscFM+p+1CAv0HUuT+XdOngW4z5ssHzIPBfbsihoyS1JGBf5kp3NwKSSBQTzTY7jOadnvbvrCivN4iub/5hDB+ZqxjCSo4PD66egJvhLUDOnOH9U8c2pw== chester@hostname
$
```
{{< /expand >}}

   a. Copy the SSH keypair public key to paste into the remote receiving system unique user record (see step 3.b. below)

   b. Go to the remote receiving system UI, edit the *chester* user, and paste the SSH keypair public key into the **SSH Public Key** field. Click **Save**.

   c. Go to the **Shell** and SSH into the remote receiving host system to accept the key exchange. Run this command:
      
      <code>su <i>chester</i></code> to activate the user, then accept the key exchange.

4. Return to the local host system UI, and configure the rsync task. Go to **Tasks > Rsync Tasks** and click **ADD**. Enter the following parameters:
   
   ![TasksRsyncTasksAddModeSSH](/images/CORE/12.0/TasksRsyncTasksAddModeSSH.png "Rsync Task: SSH Mode")

   - User = *chester* (the name must match the unique administration user created on both systems for the rsync task to work)
   - Remote Path = paste or manually enter the path to the receiving dataset on the remote host system <file>/mnt/<i>poolname</>/<i>rsync-rec</i>/sshreceive/<file>
     Where *poolname* is the name of the pool on the remote host system with the receiving dataset, and *rsync-rec* is the dataset created to receive the rsync file (copy) transfer.

   a. Configure the SSH settings by selecting **SSH** on the **Rsync Mode** dropdown list. Enter the **Port** number and **Remote Path**.

   b. Populate any other settings for your use case. Define the **Source** dataset for the rsync task and select an account in **User**.
   
   c. Select a direction for the rsync task, either **Push** or **Pull**, and define the task **Schedule**.
   
   d. Enter the **Remote** host IP address or host name. Use the format `username@remote_host` if the user name differs on the **Remote** host.
   
   e. Enter the remote host path. You cannot browse to select the remote system receiving dataset, you must manually enter the path to this dataset.

   f. Enter the remaining options according to your specific needs, then click **Save**.

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

#### Viewing SSH Keypair File in an SSH Session

The default public key location is <file>\~/.ssh/id_rsa.pub</file>.

Enter `cat ~/.ssh/id_rsa.pub` to see the key and copy the file contents.

## Rsync Service and Modules

The rsync task does not work when the related system service is off.
To turn the rsync service on, go to **Services** and click the **rsync** toggle. The toggle is blue when the service is on, grey when it is off.
See [ConfiguringRsync]({{< ref "ConfiguringRsync" >}}) for more information on rsync configuration and module creation.

{{< taglist tag="corersync" limit="10" >}}

{{< taglist tag="coredatabackuptasks" limit="10" title="Related Data Backup Articles" >}}
