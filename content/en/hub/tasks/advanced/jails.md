---
title: "Jails"
description: "How to create, manage, and update a FreeBSD jail."
tags: ["jails"]
---

{{% alert title="Notice" color="info" %}}
The Jails feature is generally available in TrueNAS CORE and is supported by the open source TrueNAS community.
TrueNAS Enterprise does not show or support this feature unless it has been added to a TrueNAS Enterprise license.
For more details or to request jail support in TrueNAS Enterprise, please [contact iX Support](/hub/initial-setup/support/#contacting-ixsystems-support):
{{% /alert %}}

Jails are a lightweight, operating-system-level virtualization. One or multiple services can run in a jail, isolating those services from the host TrueNAS system. TrueNAS uses [iocage](https://github.com/iocage/iocage) for jail and plugin management. The main differences between a user-created jail and a plugin are that plugins are preconfigured and usually provide only a single service.

By default, jails run the [FreeBSD](https://www.freebsd.org/) operating system. These jails are independent instances of FreeBSD. The jail uses the host hardware and runs on the host kernel, avoiding most of the overhead usually associated with virtualization. The jail installs FreeBSD software management utilities so FreeBSD packages or ports can be installed from the jail command line. This allows for FreeBSD ports to be compiled and FreeBSD packages to be installed from the command line of the jail.

It is important to understand that users, groups, installed software, and configurations within a jail are isolated from both the TrueNAS host operating system and any other jails running on that system.

The ability to create multiple jails offers flexibility regarding software management. For example, an administrator can choose to provide application separation by installing different applications in each jail, to create one jail for all installed applications, or to mix and match how software is installed into each jail.

## Jail Storage

A [data storage pool](/hub/initial-setup/storage/pools/) must be created before using jails. Make sure the pool has enough storage for all the intended jails. The **Jails** screen displays a message and button to **CREATE POOL** if no pools exist on the TrueNAS system.

If pools exist, but none have been chosen for use with jails or plugins, a dialog appears to choose a pool. Select a pool and click **CHOOSE**.

To select a different pool for jail and plugin storage, click <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp; (Settings). A dialog shows the active pool. A different pool can be selected from the drop-down.

Jails and downloaded FreeBSD release files are stored in a dataset named `iocage/`.

Notes about the `iocage/` dataset:

+ At least 10 GiB of free space is recommended.
+ Cannot be located on a Share.
+ [iocage](http://iocage.readthedocs.io/en/latest/index.html) automatically uses the first pool that is not a root pool for the TrueNAS system.
+ A `defaults.json` file contains default settings used when a new jail is created. The file is created automatically if not already present. If the file is present but corrupted, iocage shows a warning and uses default settings from memory.
+ Each new jail installs into a new child dataset of `iocage/`. For example, with the `iocage/jails` dataset in *pool1*, a new jail called *jail1* installs into a new dataset named *pool1/iocage/jails/jail1*.
+ FreeBSD releases are fetched as a child dataset into the `/iocage/download` dataset. This datset is then extracted into the `/iocage/releases` dataset to be used in jail creation. The dataset in `/iocage/download` can then be removed without affecting the availability of fetched releases or an existing jail.
+ `iocage/` datasets on activated pools are independent of each other and do not share any data.

{{% pageinfo %}}
iocage jail configs are stored in `/mnt/poolname/iocage/jails/jailname`. When iocage is updated, the `config.json` configuration file is backed up as `/mnt/poolname/iocage/jails/jailname/config_backup.json`. The backup file can be renamed to `config.json` to restore previous jail settings.
{{% /pageinfo %}}

## Creating Jails

TrueNAS has two options to create a jail. The *Jail Wizard* makes it easy to quickly create a jail. *ADVANCED JAIL CREATION* is an alternate method, where every possible jail option is configurable. There are numerous options spread across four different primary sections. This form is recommended for advanced users with very specific requirements for a jail.

### Jail Wizard

New jails can be created quickly by going to **Jails > ADD**.

<img src="/images/jails-add-wizard-name.png" width='700px'>
<br><br>

The wizard provides the simplest process to create and configure a new jail.

Enter a `Jail Name`. Names can contain letters, numbers, periods (`.`), dashes (`-`), and underscores (`_`).

Choose a `Jail Type`: *Default (Clone Jail)* or *Basejail*. Clone jails are clones of the specified FreeBSD RELEASE. They are linked to that RELEASE, even if they are upgraded. Basejails mount the specified RELEASE directories as nullfs mounts over the jail directories. Basejails are not linked to the original RELEASE when upgraded.

Jails can run FreeBSD versions up to the same version as the host TrueNAS system. Newer releases are not shown.

Versions of FreeBSD are downloaded the first time they are used in a jail. Additional jails created with the same version of FreeBSD are created faster because the download has already been completed.

Click **NEXT** to see a simplified list of networking options.

Jails support several different networking solutions:

+ *VNET* can be set to add a virtual network interface to the jail. This interface can be used to set NAT, DHCP, or static jail network configurations. Since *VNET* provides the jail with an independent networking stack, it can broadcast an IP address, which is required by some applications.
* The jail can use [Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation), which uses the TrueNAS® IP address and sets a unique port for the jail to use. *VNET* is required when *NAT* is selected.
+ Configure the jail to receive its IP address from a DHCP server by setting **DHCP Autoconfigure IPv4**.
+ Networking can be manually configured by entering values for the **IPv4 Address** or **IPv6 Address** fields. Any combination of these fields can be configured. Multiple interfaces are supported for IPv4 and IPv6 addresses. To add more interfaces and addresses, click **ADD**. Setting the **IPv4 Default Router** and **IPv6 Default Router** fields to *auto* automatically configures these values. **VNET** must be set to enable the **IPv4 Default Router** field. If no interface is selected when manually configuring IP addresses, TrueNAS automatically assigns the given IP address of the jail to the current active interface of the host system.
+ Leaving all checkboxes unset and fields empty initializes the jail without any networking abilities. Networking can be added to the jail after creation by going to **Jails**, clicking **>**(Expand) for a jail, then <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>&nbsp; **EDIT > Basic Properties**.

Setting a proxy in the TrueNAS network settings also configures new jails to use the proxy settings, except when performing DNS lookups. Make sure a firewall is properly configured to maximize system security.

When pairing the jail with a physical interface, edit the network interface and set **Disable Hardware Offloading**. This prevents a network interface reset when the jail starts.

<img src="/images/jails-add-wizard-networking.png" width='700px'>
<br><br>

Click **NEXT** to view a summary screen of the chosen jail options. Click **SUBMIT** to create the new jail. After a few moments, the new jail is added to the primary jails list.

### Advanced Jail Creation

The advanced jail creation form is opened by clicking **Jails > ADD**, then **ADVANCED JAIL CREATION**.

<img src="/images/jails-add-advanced.png" width='700px'>
<br><br>

#### Simple Advanced Jail

A usable jail without any networking can be quickly created by setting only the required **Jail Name** and **Release**.
Configure the remaining `Basic Properties` when the jail needs to communicate over the local network or out to the internet.
Additional settings are in the `Jail Properties`, `Network Properties`, and `Custom Properties` sections.
See the [Jail Options Reference](/hub/additional-topics/reference/uifielddescriptions/jailsfields/) for a breakdown all of the options for `Jail Properties`, `Network Properties`, and `Custom Properties`.

### Creating Template Jails

Template jails are basejails that can be used as a template to efficiently create jails with the same configuration. These steps create a template jail:

+ Go to **Jails > ADD > ADVANCED JAIL CREATION**.
+ Select *Basejail* as the **Jail Type**. Configure the jail with desired options.
+ Set **template** in the `Custom Properties` section.
+ Click **SAVE**.
+ Click **ADD**.
+ Enter a name for the template jail. Leave **Jail Type** as *Default (Clone Jail)*. Set **Release** to *basejailname(template)*, where *basejailname* is the name of the base jail created earlier.
+ Complete the jail creation wizard.

## Managing Jails

Going to the *Jails* screen shows a list of installed jails.

<img src="/images/jails.png" width='700px'>
<br><br>

Operations can be applied to multiple jails by selecting those jails with the checkboxes on the left. After selecting one or more jails, icons appear which can be used to <i class="fas fa-play" aria-hidden="true" title="Start"></i>&nbsp; (Start), <i class="fas fa-stop" aria-hidden="true" title="Stop"></i>&nbsp; (Stop), <i class="fas fa-clock" aria-hidden="true" title="Update"></i>&nbsp; (Update), or <i class="fas fa-trash" aria-hidden="true" title="Delete"></i>&nbsp; (Delete) those jails.

More information such as *IPV4*, *IPV6*, *TYPE* of jail, and whether it is a *TEMPLATE* jail or *BASEJAIL* can be shown by clicking **>** (Expand) for a jail. Additional options for that jail are also displayed.

<img src="/images/jails-actions.png" width='700px'>
<br><br>

{{% alert title=Warning color=warning %}}
Modify the IP address information for a jail by clicking **>** (Expand) > **EDIT** instead of issuing the networking commands directly from the command line of the jail. This ensures the changes are saved and will survive a jail or TrueNAS reboot.
{{% /alert %}}

| Option       |   | Description                                                                                                                                                                                                                                                                                                      |
|--------------|---|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EDIT         | | Used to modify the settings described in Advanced Jail Creation. A jail cannot be edited while it is running. The settings can be viewed, but are read only.                                                                                                                                                     |
| MOUNT POINTS | | Select an existing mount point to **EDIT** or click **ACTIONS** > **Add Mount Point** to create a mount point for the jail. A mount point gives a jail access to storage located elsewhere on the system. A jail must be stopped before adding, editing, or deleting a mount point. See Additional Storage for more details. |
| RESTART      | | Stop and immediately start an *up* jail.                                                                                                                                                                                                                                                                           |
| START        | | Start a jail that has a current `STATE` of *down*.                                                                                                                                                                                                                                                                   |
| STOP        | | Stop a jail that has a current `STATE` of *up*.                                                                                                                                                                                                                                                                      |
| UPDATE       | | Runs [freebsd-update](https://www.freebsd.org/cgi/man.cgi?query=freebsd-update) to update the jail to the latest patch level of the installed FreeBSD release.                                                                                                                                                                                                               |
| SHELL        | | Access a *root* command prompt to interact with a jail directly from the command line. Type `exit` to leave the command prompt.                                                                                                                                                                                      |
| DELETE       | | Caution: deleting the jail also deletes all of the jail contents and all associated snapshots. Back up the jail data, configuration, and programs first. There is no way to recover the contents of a jail after deletion!                                                                                       |

{{% pageinfo %}}
Menu entries change depending on the jail state. For example, a stopped jail does not have a **STOP** or **SHELL** option.
{{% /pageinfo %}}

Jail status messages and command output are stored in `/var/log/iocage.log`.

## Jail Updates and Upgrades

Click **>** (Expand) > **Update** to update a jail to the most current patch level of the installed FreeBSD release. This does **not** change the release. For example, a jail installed with *FreeBSD 11.2-RELEASE* can update to *p15* or the latest patch of 11.2, but not an *11.3-RELEASE-p#* version of FreeBSD.

A jail *upgrade* replaces the jail FreeBSD operating system with a new release of FreeBSD, such as taking a jail from *FreeBSD 11.2-RELEASE* to *11.3-RELEASE*. Upgrade a jail by stopping it, opening the TrueNAS **Shell** and entering `iocage upgrade name -r release`, where *name* is the plugin jail name and *release* is the desired FreeBSD release.

It is possible to manually remove unused releases from the `/iocage/releases/` dataset after upgrading a jail. The release must not be in use by any jail on the system!

## Accessing a Jail Using SSH

The ssh daemon [sshd(8)](https://www.freebsd.org/cgi/man.cgi?query=sshd) must be enabled in a jail to allow SSH access to that jail from another system.

The jail `STATE` must be up before the `SHELL` option is available. If the jail is not up, start it by clicking **Jails** > **>** (Expand) > **START** for the desired jail. Click **>** (Expand), then **SHELL** to open a shell inside the jail:

```
FreeBSD 11.1-STABLE (FreeNAS.amd64) #0 0ale9f753(freenas/11-stable): FriApr 6 04:46:31 UTC 2018

Welcome to FreeBSD!

Release Notes, Errata: https://www.FreeBSD.org/releases/
Security Advisories:   https://www.FreeBSD.org/security/
FreeBSD Handbook:      https://www.FreeBSD.org/handbook/
FreeBSD FAQ:           https://www.FreeBSD.org/faq/
Questions List: https://lists.FreeBSD.org/mailman/listinfo/freebsd-questions/
FreeBSD Forums:        https://forums.FreeBSD.org/

Documents installed with the system are in the /usr/local/share/doc/freebsd/
directory, or can be installed later with: pkg install en-freebsd-doc
For other languages, replace "en" with a language code like de or fr.

Show the version of FreeBSD installed: freebsd-version ; uname -a
Please include that output and any error messages when posting questions.
Introduction to manual pages: man man
FreeBSD directory layout:     man hier

Edit /etc/motd to change this login announcement.
root@jailexamp:~ #
```

A root shell can also be opened for a jail using the TrueNAS Shell. Open the **Shell** then enter `iocage console jailname`.

Enable sshd:

```
sysrc sshd_enable="YES"
sshd_enable: NO -> YES
```

Using `sysrc` to enable sshd verifies that sshd is enabled.
Start the SSH daemon: `service sshd start`
The first time the service runs, the jail RSA key pair is generated and the key fingerprint is displayed. Add a user account with `adduser`. Follow the prompts, <kbd>Enter</kbd> accepts the default value. Users that require root access must also be a member of the `wheel` group. Enter `wheel` when prompted to `invite user into other groups`?

```
root@jailexamp:~ # adduser
Username: jailuser
Full name: Jail User
Uid (Leave empty for default):
Login group [jailuser]:
Login group is jailuser. Invite jailuser into other groups? []: wheel
Login class [default]:
Shell (sh csh tcsh git-shell zsh rzsh nologin) [sh]: csh
Home directory [/home/jailuser]:
Home directory permissions (Leave empty for default):
Use password-based authentication? [yes]:
Use an empty password? (yes/no) [no]:
Use a random password? (yes/no) [no]:
Enter password:
Enter password again:
Lock out the account after creation? [no]:
Username   : jailuser
Password   : *****
Full Name  : Jail User
Uid        : 1002
Class      :
Groups     : jailuser wheel
Home       : /home/jailuser
Home Mode  :
Shell      : /bin/csh
Locked     : no
OK? (yes/no): yes
adduser: INFO: Successfully added (jailuser) to the user database.
Add another user? (yes/no): no
Goodbye!
root@jailexamp:~
```

After creating the user, set the jail *root* password to allow users to use `su` to gain superuser privileges. To set the jail *root* password, use `passwd`. Nothing is echoed back when using `passwd`:

```
root@jailexamp:~ # passwd
Changing local password for root
New Password:
Retype New Password:
root@jailexamp:~ #
```

Finally, test that the user can successfully `ssh` into the jail from another system and gain superuser privileges. In this example, a user named `jailuser` uses `ssh` to access the jail at *192.168.2.3*. The host RSA key fingerprint must be verified the first time a user logs in.

```
ssh jailuser@192.168.2.3
The authenticity of host '192.168.2.3 (192.168.2.3)' can't be established.
RSA key fingerprint is 6f:93:e5:36:4f:54:ed:4b:9c:c8:c2:71:89:c1:58:f0.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '192.168.2.3' (RSA) to the list of known hosts.
Password:
```

Every jail has its own user accounts and service configuration. These steps must be repeated for each jail that requires SSH access.

## Additional Storage

Jails can be given access to an area of storage outside of the jail that is configured on the TrueNAS system. It is possible to give a FreeBSD jail access to an area of storage on the TrueNAS system. This is useful for applications or plugins that store large amounts of data or if an application in a jail needs access to data stored on the TrueNAS system. For example, *Transmission* is a plugin that stores data using BitTorrent. The TrueNAS external storage is added using the [mount_nullfs(8)](https://www.freebsd.org/cgi/man.cgi?query=mount_nullfs) mechanism, which links data that resides outside of the jail as a storage area within a jail.

**>** (Expand) > **MOUNT POINTS** shows any added storage and allows adding more storage.

A jail must have a **STATE** of *down* before adding a new mount point. Click **>** (Expand) and **STOP** for a jail to change the jail STATE to down.

Storage can be added by clicking **Jails** > **>** (Expand) > **MOUNT POINTS** for the desired jail. The `MOUNT POINT` section is a list of all of the currently defined mount points.

Go to **MOUNT POINTS** > **ACTIONS** > **Add Mount Point** to add storage to a jail.

<img src="/images/12.0-jails-mountpointadd.PNG" width='700px'>
<br><br>

Browse to the **Source** and **Destination**, where:

+ **Source** is the directory or dataset on the TrueNAS system which will be accessed by the jail. TrueNAS creates the directory if it does not exist. This directory must reside outside of the pool or dataset being used by the jail. This is why it is recommended to create a separate dataset to store jails. The dataset holding the jails is always separate from any datasets used for storage on the TrueNAS system.
+ **Destination** is an existing and empty directory within the jail to link to the **Source** storage area. It is also possible to add `/` and a name to the end of the path for TrueNAS to create a new directory. New directories created must be **within** the jail directory structure. Example: **/mnt/iocage/jails/samplejail/root/new-destination-directory**.

Storage is typically added because the user and group account associated with an application installed inside of a jail needs to access data stored on the TrueNAS system. Before selecting the **Source**, it is important to ensure that the permissions of the selected directory or dataset grant permission to the user or group account inside the jail. This is not the default, as the users and groups created inside a jail are separate from the users and groups created on the TrueNAS system.

Here is the typical workflow for adding storage:

+ Determine the name of the user and group account used by the application. For example, the installation of the *transmission* application automatically creates a user account named *transmission* and a group account also named *transmission*. When in doubt, check the files `/etc/passwd` (to find the user account) and `/etc/group` (to find the group account) inside the jail. Typically, the user and group names are similar to the application name. Also, the UID and GID are usually the same as the port number used by the service. A *media* user and group (GID 8675309) are part of the base system. Having applications run as this group or user makes it possible to share storage between multiple applications in a single jail, between multiple jails, or even between the host and jails.

+ On the TrueNAS system, create a user account and group account that match the user and group names used by the jail application.

+ Decide if the jail needs access to existing data or if a new storage area should be created.

+ If the jail needs to access existing data, [edit the permissions](/hub/tasks/advanced/editingacls/) of the pool or dataset so the user and group accounts have the desired read and write access. If multiple applications or jails need have access to the same data, create a new group and add each new user account to that group.

+ If a new storage area is being set aside for that jail or application, [create a dataset](/hub/initial-setup/storage/datasets/). Edit the dataset permissions so the user and group account has the desired read and write access.

+ Use the jail **>** (Expand) > **MOUNT POINTS** > **ACTIONS** > **Add Mount Point** to select the data **Source** and the **Destination** where it will be mounted in the jail.

To prevent writes to the storage, click **Read-Only**.

After storage has been added or created, it appears in the `MOUNT POINTS` for that jail. 

<img src="/images/12.0-jails-mountpoint-example.PNG" width='700px'>
<br><br>

Storage is automatically mounted as it is created.
Mounting a dataset does not automatically mount any child datasets inside it. Each dataset is a separate filesystem, so child datasets must each have separate mount points.

Click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; (Options) > **Delete** to delete the storage.

{{% alert title=Warning color=warning %}}
Remember that added storage is just a pointer to the selected storage directory on the TrueNAS system. It does not copy that data to the jail. Files that are deleted from the **Destination** directory in the jail are also deleted from the **Source** directory on the TrueNAS system. However, removing the jail storage entry only removes the pointer. This leaves the data intact but no longer accessible to the jail.
{{% /alert %}}
