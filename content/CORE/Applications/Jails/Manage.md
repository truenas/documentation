---
title: "Manage"
weight: 10
---

{{< toc >}}

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
