---
title: "Jail Management"
weight: 10
---

{{< toc >}}

{{< hint info >}}
Jails feature are available to and supported by the TrueNAS CORE community.
{{< /hint >}}

Jails are a lightweight, operating-system-level virtualization.
One or multiple services can run in a jail, isolating those services from the host TrueNAS system.
TrueNAS uses [iocage](https://github.com/iocage/iocage) for jail and plugin management.
The main differences between a user-created jail and a plugin are that plugins are preconfigured and usually provide only a single service.

{{< expand "Why use a Jail instead of a VM?" "v" >}}
By default, jails run the [FreeBSD](https://www.freebsd.org/) operating system.
These jails are independent instances of FreeBSD.
The jail uses the host hardware and runs on the host kernel, avoiding most of the overhead usually associated with virtualization.
The jail installs FreeBSD software management utilities so FreeBSD packages or ports can be installed from the jail command line.
This allows for FreeBSD ports to be compiled and FreeBSD packages to be installed from the command line of the jail.
{{< /expand >}}

It is important to understand that users, groups, installed software, and configurations within a jail are isolated from both the TrueNAS host operating system and any other jails running on that system.

The ability to create multiple jails offers flexibility regarding software management.
For example, an administrator can choose to provide application separation by installing different applications in each jail, to create one jail for all installed applications, or to mix and match how software is installed into each jail.

## Jail Storage

A [data storage pool](/CORE/Storage/Pools/) must be created before using jails.
Make sure the pool has enough storage for all the intended jails.
The **Jails** screen displays a message and button to **CREATE POOL** if no pools exist on the TrueNAS system.

If pools exist, but none have been chosen for use with jails or plugins, a dialog appears to choose a pool. Select a pool and click **CHOOSE**.

To select a different pool for jail and plugin storage, click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i>&nbsp; (Settings). A dialog shows the active pool. A different pool can be selected from the drop-down.

Jails and downloaded FreeBSD release files are stored in a dataset named `iocage/`.

{{< expand "The iocage dataset" "v" >}}

* At least *10* GiB of free space is recommended.
* Cannot be located on a Share.
* [iocage](http://iocage.readthedocs.io/en/latest/index.html) automatically uses the first pool that is not a root pool for the TrueNAS system.
* A <file>defaults.json</file> file contains default settings used when a new jail is created.
  The file is created automatically when not already present.
  When the file is present but corrupted, iocage shows a warning and uses default settings from memory.
* Each new jail installs into a new child dataset of <file>iocage/</file>.
  For example, with the <file>iocage/jails</file> dataset in *pool1*, a new jail called *jail1* installs into a new dataset named *pool1/iocage/jails/jail1*.
* FreeBSD releases are fetched as a child dataset into the <file>/iocage/download</file> dataset.
  This datset is then extracted into the <file>/iocage/releases</file> dataset to be used in jail creation.
  The dataset in <file>/iocage/download</file> can then be removed without affecting the availability of fetched releases or an existing jail.
* <file>iocage/</file> datasets on activated pools are independent of each other and do not share any data.

iocage jail configs are stored in <file>/mnt/poolname/iocage/jails/jailname</file>.
When iocage is updated, the <file>config.json</file> configuration file is backed up as <file>/mnt/poolname/iocage/jails/jailname/config_backup.json</file>.
The backup file can be renamed to <file>config.json</file> to restore previous jail settings.
{{< /expand>}}

## Creating Jails

TrueNAS has two options to create a jail. The *Jail Wizard* makes it easy to quickly create a jail. *ADVANCED JAIL CREATION* is an alternate method, where every possible jail option is configurable. There are numerous options spread across four different primary sections. This form is recommended for advanced users with very specific requirements for a jail.

{{< tabs "Jail Create Options" >}}
{{< tab "Jail Wizard" >}}
New jails can be created quickly by going to **Jails > ADD**.

![JailsAddName](/images/CORE/12.0/JailsAddName.png "Jails Add Name")

The wizard provides the simplest process to create and configure a new jail.

Enter a `Jail Name`. Names can contain letters, numbers, periods (`.`), dashes (`-`), and underscores (`_`).

Choose a `Jail Type`: *Default (Clone Jail)* or *Basejail*. Clone jails are clones of the specified FreeBSD RELEASE. They are linked to that RELEASE, even if they are upgraded. Basejails mount the specified RELEASE directories as nullfs mounts over the jail directories. Basejails are not linked to the original RELEASE when upgraded.

Jails can run FreeBSD versions up to the same version as the host TrueNAS system. Newer releases are not shown.

Versions of FreeBSD are downloaded the first time they are used in a jail. Additional jails created with the same version of FreeBSD are created faster because the download has already been completed.

Click *NEXT* to see a simplified list of networking options.

Jails support several different networking solutions:

* *VNET* adds a virtual network interface to the jail.
  This interface can set NAT, DHCP, or static jail network configurations.
  Since *VNET* provides the jail with an independent networking stack, it can broadcast an IP address, which is required by some applications.
* [Network Address Translation (NAT)](https://tools.ietf.org/html/rfc2663), which uses the TrueNAS IP address and sets a unique port for the jail to use.
  *VNET* is required when *NAT* is selected.
* Set *DHCP Autoconfigure IPv4* for the jail to receive its IP address from a DHCP server.
* Manually configure networking by entering values for the *IPv4 Address* or *IPv6 Address* fields.
  Any combination of these fields can be configured.
  Multiple interfaces are supported for IPv4 and IPv6 addresses.
  To add more interfaces and addresses, click *ADD*.

  Setting the *IPv4 Default Router* and *IPv6 Default Router* fields to *auto* automatically configures these values.
  *VNET* must be set to enable the **IPv4 Default Router** field.
  When no interface is selected when manually configuring IP addresses, TrueNAS automatically assigns the given jail IP address to the current active interface of the host system.
* Leaving all checkboxes unset and fields empty initializes the jail without any networking abilities.
  Networking is added to the jail after creation by going to **Jails**, clicking **>**(Expand) for a jail, then <i class="fa fa-pencil" aria-hidden="true" title="Pen"></i> **EDIT > Basic Properties**.

Setting a proxy in the TrueNAS network settings also configures new jails to use the proxy settings, except when performing DNS lookups.
Make sure a firewall is properly configured to maximize system security.

{{< hint warning >}}
When pairing the jail with a physical interface, edit the network interface and set *Disable Hardware Offloading*.
This prevents a network interface reset when the jail starts.
{{< /hint >}}

![JailsAddNetworking](/images/CORE/12.0/JailsAddNetworking.png "Jails Add Networking")

Click **NEXT** to view a summary screen of the chosen jail options. Click **SUBMIT** to create the new jail. After a few moments, the new jail is added to the primary jails list.
{{< /tab >}}
{{< tab "Advanced Jail Creation" >}}
The advanced jail creation form is opened by clicking **Jails > ADD**, then *ADVANCED JAIL CREATION*.

![JailsAddAdvanced](/images/CORE/12.0/JailsAddAdvanced.png "Jails Add Advanced")

### Options

A usable jail without any networking can be quickly created by setting only the required *Jail Name* and *Release*.
Configure the remaining **Basic Properties** when the jail needs to communicate over the local network or out to the internet.

{{< include file="static/includes/JailsAdvancedFields.md.part" markdown="true" >}}

Additional settings are in the **Jail Properties**, **Network Properties**, and **Custom Properties** sections.

{{< expand "Jail Properties" "v" >}}
{{< include file="static/includes/JailsPropertiesFields.md.part" markdown="true" >}}
{{< /expand >}}

{{< expand "Network Properties" "v" >}}
{{< include file="static/includes/JailsNetworkPropertiesFields.md.part" markdown="true" >}}
{{< /expand >}}

{{< expand "Custom Properties" "v" >}}
{{< include file="static/includes/JailsCustomPropertiesFields.md.part" markdown="true" >}}
{{< /expand >}}

{{< /tab >}}
{{< /tabs >}}

## Creating Template Jails

Template jails are basejails that can efficiently create jails with the same configuration.
These steps create a template jail:

* Go to **Jails > ADD > ADVANCED JAIL CREATION**.
* Select *Basejail* as the *Jail Type*.
  Configure the jail with desired options.
* Set *template* in the `Custom Properties` section.
* Click *SAVE*.
* Click *ADD*.
* Enter a name for the template jail.
  Leave *Jail Type* as *Default (Clone Jail)*.
  Set *Release* to *basejailname(template)*, where *basejailname* is the name of the base jail created earlier.
* Complete the jail creation wizard.

## Managing Jails

Going to the *Jails* screen shows a list of installed jails.

![Jails](/images/CORE/12.0/Jails.png "Jails List")

Operations can be applied to multiple jails by selecting those jails with the checkboxes on the left.
After selecting one or more jails, icons appear which can be used to <i class="fa fa-play" aria-hidden="true" title="Start"></i> (Start), <i class="fa fa-stop" aria-hidden="true" title="Stop"></i> (Stop), <i class="fa fa-clock-o" aria-hidden="true" title="Update"></i> (Update), or <i class="fa fa-trash" aria-hidden="true" title="Delete"></i> (Delete) those jails.

More information such as **IPV4**, **IPV6**, jail **TYPE**, and whether it is a **TEMPLATE** or **BASEJAIL** is seen by clicking **>** (Expand) for a jail.
Additional options for that jail are also displayed.

![Jails Options](/images/CORE/12.0/JailsOptions.png "Jails Options")

{{< hint warning >}}
Modify the IP address information for a jail by clicking **>** (Expand) > *EDIT* instead of issuing the networking commands directly from the command line of the jail.
This ensures changes are saved and survive a jail or TrueNAS reboot.
{{< /hint >}}

| Name | Description |
|------|-------------|
| EDIT | Used to modify the settings described in Advanced Jail Creation. A jail cannot be edited while it is running. The settings can be viewed, but are read only. |
| MOUNT POINTS | Select an existing mount point to **EDIT** or click **ACTIONS** > **Add Mount Point** to create a mount point for the jail. A mount point gives a jail access to storage located elsewhere on the system. A jail must be stopped before adding, editing, or deleting a mount point. See Additional Storage for more details. |
| RESTART | Stop and immediately start an *up* jail. |
| START | Start a jail that has a current **STATE** of *down*. |
| STOP | Stop a jail that has a current **STATE** of *up*. |
| UPDATE | Runs [freebsd-update](https://www.freebsd.org/cgi/man.cgi?query=freebsd-update) to update the jail to the latest patch level of the installed FreeBSD release. |
| SHELL | Access a *root* command prompt to interact with a jail directly from the command line. Type `exit` to leave the command prompt. |
| DELETE | Caution: deleting the jail also deletes all of the jail contents and all associated snapshots. Back up the jail data, configuration, and programs first. There is no way to recover the contents of a jail after deletion! |

{{< hint info >}}
Menu entries change depending on the jail state. For example, a stopped jail does not have a *STOP* or *SHELL* option.
{{< /hint >}}

Jail status messages and command output are stored in <file>/var/log/iocage.log</file>.

## Updates and Upgrades

Click **>** (Expand) > *Update* to update a jail to the most current patch level of the installed FreeBSD release.
This does **not** change the release.
For example, a jail installed with *FreeBSD 11.2-RELEASE* can update to *p15* or the latest patch of 11.2, but not an *11.3-RELEASE-p#* version of FreeBSD.

A jail *upgrade* replaces the jail FreeBSD operating system with a new release of FreeBSD, such as taking a jail from *FreeBSD 11.2-RELEASE* to *11.3-RELEASE*.
Upgrade a jail by stopping it, opening the TrueNAS **Shell** and entering `iocage upgrade name -r release`, where *name* is the plugin jail name and *release* is the desired FreeBSD release.

It is possible to manually remove unused releases from the `/iocage/releases/` dataset after upgrading a jail.
The release must not be in use by any jail on the system!

## Accessing a Jail Using SSH

The ssh daemon [sshd(8)](https://www.freebsd.org/cgi/man.cgi?query=sshd) must be enabled in a jail to allow SSH access to that jail from another system.

The jail **STATE** must be up before the *SHELL* option is available.
When the jail is not up, start it by clicking **Jails** > **>** (Expand) > **START** for the desired jail.
Click **>** (Expand), then **SHELL** to open a shell inside the jail:

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
The **Shell** can also open a jail root shell.
Open the **Shell** and enter `iocage console jailname`.

Enable sshd:

```
sysrc sshd_enable="YES"
sshd_enable: NO -> YES
```

Start the SSH daemon: `service sshd start`.
The first time the service runs, the jail RSA key pair is generated and the key fingerprint is displayed.
Add a user account with `adduser` and follow the prompts.
<kbd>Enter</kbd> accepts the default value.
Users that require root access must also be a member of the `wheel` group.
Enter `wheel` when prompted to `invite user into other groups`?

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

After creating the user, set the jail *root* password to allow users to use `su` to gain superuser privileges.
To set the jail *root* password, use `passwd`.
Nothing is echoed back when using `passwd`:

```
root@jailexamp:~ # passwd
Changing local password for root
New Password:
Retype New Password:
root@jailexamp:~ #
```

Finally, test that the user can successfully `ssh` into the jail from another system and gain superuser privileges.
In this example, a user named `jailuser` uses `ssh` to access the jail at *192.168.2.3*.
The host RSA key fingerprint must be verified the first time a user logs in.

```
ssh jailuser@192.168.2.3
The authenticity of host '192.168.2.3 (192.168.2.3)' can't be established.
RSA key fingerprint is 6f:93:e5:36:4f:54:ed:4b:9c:c8:c2:71:89:c1:58:f0.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '192.168.2.3' (RSA) to the list of known hosts.
Password:
```

Every jail has its own user accounts and service configuration.
These steps must be repeated for each jail that requires SSH access.
