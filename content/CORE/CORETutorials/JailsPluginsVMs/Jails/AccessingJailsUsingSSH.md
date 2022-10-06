---
title: "Accessing Jails Using SSH"
description: "This article describes how to access Jails using SSH in TrueNAS CORE."
weight: 20
tags:
- corejails
---

{{< toc >}}

## Accessing a Jail Using SSH

You must enable the ssh daemon [sshd(8)](https://www.freebsd.org/cgi/man.cgi?query=sshd) in a jail to allow SSH access to that jail from another system.

The jail **STATE** must be up before the **SHELL** option is available.

### Starting a Jail

When the jail is not up, start it by clicking **Jails** > and then the jail <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i>, then click **START** for the desired jail.
Click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i>, then **SHELL** to open a shell inside the jail:

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
Open the **Shell** and enter command `iocage console jailname`.

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

After creating the user, set the jail root password to allow users to use `su` to gain superuser privileges.
To set the jail root password, use `passwd`.
Nothing echoes back when using `passwd`:

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

{{< taglist tag="corejails" limit="10" >}}
