---
title: "Managing Users"
description: "How to add or manage user accounts."
---

User accounts can be added to the TrueNAS system to allow flexibility for user permissions to access shared data.
Note that only the `root` user account can be used to log in to the TrueNAS web interface.
A common practice is to create users and assign them to <a href="/hub/tasks/administrative/groups/">groups</a>.
This allows for efficient permissions tuning for large numbers of users.

If the network uses a directory service, import the existing account information using the instructions in <a href="/hub/initial-setup/directory-services/">Directory Services</a>.
When using [Active Directory](/hub/initial-setup/security/directory-services/activedirectory/), Windows user passwords must be set from within Windows.

To see user accounts, go to **Accounts > Users**.

<img src="/images/AccountsUsersList.png">
<br><br>

TrueNAS hides all built-in users by default. To see all built-in users, click <i class="fas fa-cog" aria-hidden="true" title="Settings"></i> and **SHOW**.

## Creating User Accounts

To create a new user, go to **Accounts > Users** and click *ADD*.

<img src="/images/AccountsUsersAdd.png">
<br><br>

Account options are subdivided into groups of similar options.

### Identification

Enter the **Full Name** of the user.
A simplified **Username** is suggested from the **Full Name**, but can be overriden with your own choice.

An **Email** address can be associated with an user account.

Set and confirm a password for the user.

### User ID and Groups

Next, a user ID must be set.
TrueNAS automatically suggests the user ID, starting at `1000`.
This suggestion can be changed if desired.
It is recommended to use an ID of *1000* or more for non-builtin users.

By default, TrueNAS creates a new primary group with the same name as the user.
To add the user to an existing primary group, unset **New Primary Group** and select an existing group from the **Primary Group** drop-down.
The user can be added to additional groups using the **Auxillary Groups** drop-down.

### Directories and Permissions

When creating a user, a home directory path of `/nonexistent` is set.
This does not create a home directory for the user.
To set a home directory for the user, select a path using the file browser.
If the directory exists and matches the username, it is set as the user home directory.
When the path does not end with a subdirectory matching the username, a new subdirectory is created.
The full path to the user's home directory is shown here when editing a user.

Directly under the file browser, the home directory permissions can be set.
TrueNAS default user accounts cannot have their permissions changed.

### Authentication

A public SSH key can be assigned to a user for key based authentication.
Just paste the **public** key into the **SSH Public Key** field.
If you are using an SSH public key, it is always a good idea to keep a backup of the key.
Click **DOWNLOAD SSH PUBLIC KEY** to download the pasted key as a `.txt` file.

If **Disable Password** is *Yes*, it disables the **Password** field and removes the password from the account.
The *Lock User* and *Permit Sudo* options are also removed.
The account is then restricted from password-based logins for services.
For example, disabling the password prevents using account credentials to log in to an SMB share or open an SSH session on the system.
By default, **Disable Password** is set to *No*.

A specific [shell](/hub/tasks/administrative/gui-shell/) can be set for the user from the **Shell** drop-down.

Setting **Lock User** disables all password-based functionality for this account until the option is unset.

**Permit Sudo** allows this account to act as the system administrator using the `sudo` command.
It is recommended to leave this option unset.

When the user account is going to be using a Windows 8 or newer client to access data stored on TrueNAS, set **Microsoft Account**.
This enables additional authentication methods available from those operating systems.

By default, **Samba Authentication** is enabled.
This allows using the account credentials to access data shared with [SMB](/hub/sharing/smb/).
