---
title: "Local Users"
geekdocCollapseSection: true
weight: 10
---

{{< toc >}}

In TrueNAS, user accounts allow flexibility for accessing shared data.
Typically, administrators will create users and assign them to [groups]({{< relref "LocalGroups.md" >}}).
Doing so makes tuning permissions for large numbers of users more efficient.

{{< hint info >}}
Only the *root* user account can log in to the TrueNAS web interface.
{{< /hint >}}

When the network uses a directory service, import the existing account information using the instructions in [Directory Services]({{< relref "/content/SCALE/Credentials/DirectoryServices/_index.md" >}}.

Using [Active Directory]({{< relref "/content/SCALE/Credentials/DirectoryServices/_index.md" >}}) requires setting Windows user passwords inside Windows.

To see user accounts, go to **Credentials > Local Users**.

![LocalUsersSCALE](/images/SCALE/LocalUsersSCALE.png "List of Local User Accounts")

TrueNAS hides all built-in users (except root) by default. Click the <i class="material-icons" aria-hidden="true">settings</i>, then click **SHOW** to see all built-in users.

## Creating User Accounts

To create a new user, click *Add*.

![NewUserSCALE](/images/SCALE/NewUserSCALE.png "Adding a New User Account")

TrueNAS lets users configure four different user account traits. 

{{< tabs "Account Options" >}}
{{< tab "Identification" >}}
### Identification

Enter the user's *Full Name*.
TrueNAS will suggest a simplified *Username* from the *Full Name*, but you can override it with your own choice.

You can also assign an *Email* address to user accounts.

Set and confirm a password.
{{< /tab >}}

{{< tab "User ID and Groups" >}}
### User ID and Groups

Next, you must set a user ID.
TrueNAS will suggest a user ID starting at *1000*, but you can change it if you wish.
We recommend using an ID of *1000* or greater for non-built-in users.

By default, TrueNAS creates a new primary group with the same name as the user.
To add the user to an existing primary group instead, unset *New Primary Group* and select a group from the *Primary Group* drop-down.
You can add the user to more groups using the *Auxiliary Groups* drop-down.
{{< /tab >}}

{{< tab "Directories and Permissions" >}}
### Directories and Permissions

When creating a user, the home directory path is set to <file>/nonexistent</file>, which does not create a home directory for the user.
To set a user home directory, select a path using the file browser.
If the directory exists and matches the user name, TrueNAS will set it as the user home directory.
When the path does not end with a sub-directory matching the user name, TrueNAS creates a new sub-directory.
TrueNAS shows the path to the user home directory when editing a user.

You can set the home directory permissions directly under the file browser. 
You cannot change TrueNAS default user account permissions.
{{< /tab >}}

{{< tab "Authentication" >}}
### Authentication
You can assign a public SSH key to a user for key-based authentication by pasting the *public* key into the *SSH Public Key* field.
If you are using an SSH public key, always keep a backup of the key.
Click *Download SSH Public Key* to download the pasted key as a <file>.txt</file> file.

By default, *Disable Password* is *No*.

Setting *Disable Password* to *Yes* disables several options: 
* The *Password* field becomes unavailable, and TrueNAS removes any existing password from the account.
* The *Lock User* and *Permit Sudo* options will disappear.
* The account will be restricted from password-based logins for services like SMB shares and SSH sessions.

You can set a specific [shell]({{< relref "ScaleShell.md" >}}) for the user from the *Shell* drop-down:

| Shell | Description |
|-------|-------------|
| csh	| [C shell](https://docs.freebsd.org/44doc/usd/04.csh/paper.html) for UNIX system interactions. |
| sh	| [Bourne shell](https://www.in-ulm.de/~mascheck/bourne/v7/) |
| tcsh	| [Enhanced C shell](https://www.tcsh.org) that includes editing and name completion. |
| bash	| [Bourne Again shell](https://www.gnu.org/software/bash/manual/bash.html) for the GNU operating system. |
| ksh93	| [Korn shell](http://www.kornshell.com) that incorporates features from both *csh* and *sh*. |
| mksh	| [MirBSD Korn Shell](https://www.mirbsd.org/mksh.htm) |
| rbash	| [Restricted bash](https://www.gnu.org/software/bash/manual/html_node/The-Restricted-Shell.html) |
| rzsh	| [Restricted zsh](https://www.csse.uwa.edu.au/programming/linux/zsh-doc/zsh_14.html) |
| scponly | [scponly](https://github.com/scponly/scponly/wiki) restricts the user's SSH usage to only the `scp` and `sftp` commands. |
| zsh	| [Z shell](http://zsh.sourceforge.net/) |
| git-shell | [restricted git shell](https://git-scm.com/docs/git-shell) |
| nologin | Use when creating a system account or to create a user account that can authenticate with shares but which cannot log in to the TrueNAS system using `ssh`.

Setting *Lock User* disables all password-based functionality for the account until you unset it.

*Permit Sudo* allows the account to act as the system administrator using the `sudo` command. Leave it disabled for better security.

If the user will access TrueNAS data using *Windows 8* or newer, set *Microsoft Account* to enable those systems' additional authentication methods.

By default, *Samba Authentication* is enabled.
This allows using the account credentials to access data shared with [SMB]({{< relref "/content/SCALE/Shares/_index.md" >}}).
{{< /tab >}}
{{< /tabs >}}
