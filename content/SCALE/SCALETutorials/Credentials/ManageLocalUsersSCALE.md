---
title: "Managing Users"
description: "Provides instructions on adding and managing the administrator and local user accounts."
weight: 10
alias: /scale/scaleuireference/credentials/localusers/
tags:
- scaleusers
- scalelogin
- scaleadmin
- scaleshell
---

{{< toc >}}

In TrueNAS, user accounts allow flexibility for accessing shared data.
Typically, administrators create users and assign them to [groups]({{< relref "ManageLocalGroups.md" >}}).
Doing so makes tuning permissions for large numbers of users more efficient.

{{< hint type=important >}}

Only the **root** user account can log in to the TrueNAS web interface until the root user creates an admin user with the same permissions.
After logging in as root, TrueNAS alerts you to create the local administrator account.

As part of security hardening and to comply with Federal Information Processing standards (FIPS), iXsystems plans to completely disable root login in a future release.

System administrators should create and begin using a new admin user.
{{< /hint >}}

When the network uses a directory service, import the existing account information using the instructions in [Directory Services]({{< relref "/content/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}).

Using [Active Directory]({{< relref "/content/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}) requires setting Windows user passwords in Windows.

To see user accounts, go to **Credentials > Local Users**.

{{< trueimage src="/images/SCALE/23.10/AllUsersScreenSCALE.png" alt="Local User non-Built-in Accounts" id="1: Local User non-Built-in Accounts" >}}

TrueNAS hides all built-in users (except root) by default. Click the toggle **Show Built-In Users** to see all built-in users.

## Creating an Admin User Account
SCALE has implemented rootless log in. All systems should create and begin using an admin user as a replacement for the root user.  
If you upgraded to a 22.12.0 release instead of installing fresh from an iso file and setting up the admin user in that process, you can create an admin user with this procedure.

Go to **Credentials > Local Users** and click **Add**.

Enter the name you want to use for the administrator account.

Enter and confirm the admin user passwords.

Select the **builtin_administrators** group from the **Auxiliary Group** dropdown list.

{{< trueimage src="/images/SCALE/22.12/AddingAdminUserAuxiliaryGroup.png" alt="Add Admin User to builtin_administrators" id="2: Add Admin User to builtin_administrators" >}}

Scroll down to the **Authentication** settings and select the proper **Allow sudo** authorization settings.
Some applications, such as [Nextcloud]({{< relref "InstallNextCloudMedia.md" >}}), require sudo permissions for the administrator account.
By default, TrueNAS SCALE sets admin account authorization to **Allow all sudo commands**.
Click the checkbox to choose this configuration.

Click **Save**.

Log out of the TrueNAS system and then log back in using the admin user credentials. Once you are back in the TrueNAS web UI, determine that the admin user credentials are working properly with your network configuration.

## Creating User Accounts

To create a new user, click **Add**.

### Configuring User Identification Settings

{{< trueimage src="/images/SCALE/23.10/AddUserIdentificationSettings.png" alt="Add User Identification Settings" id="3: Add User Identification Settings" >}}

Enter the user's full name in **Full Name**.
TrueNAS suggests a simplified name in **Username**, derived from the **Full Name**, but you can override it with your own choice.

You can also assign a user account email address in the **Email** field.

By default, the **Disable Password** toggle is not enabled. In this case, set and confirm a password.

Setting **Disable Password** toggle to active (blue toggle) disables several options:

* The **Password** field becomes unavailable and TrueNAS removes any existing password from the account.
* The **Lock User** option disappears.
* The account is restricted from password-based logins for services like SMB shares and SSH sessions.

### Configuring User ID and Groups Settings

{{< trueimage src="/images/SCALE/23.10/AddUser-UserIDAndGroupSettings.png" alt="Add User ID and Groups Settings" id="4: Add User ID and Groups Settings" >}}

Next, you must set a user ID (UID).
TrueNAS suggests a user ID starting at **3000**, but you can change it if you wish.
We recommend using an ID of 3000 or greater for non-built-in users.

By default, TrueNAS creates a new primary group with the same name as the user. This happens when the **Create New Primary Group** toggle is enabled.
To add the user to an existing primary group instead, disable the **Create New Primary Group** toggle and search for a group in the **Primary Group** field.
You can add the user to more groups using the **Auxiliary Groups** drop-down list.

### Configuring Directories and Permissions Settings

{{< trueimage src="/images/SCALE/23.10/AddUserHomeDirPermSCALE.png" alt="Add User Home Directory" id="5: Add User Home Directory" >}}

When creating a user, the home directory path is set to <file>/nonexistent</file>, which does not create a home directory for the user.
To set a user home directory, enter a path in **Home Directory** or select it using the file browser.
If the directory exists and matches the username, TrueNAS sets it as the user home directory.
When the path does not end with a sub-directory matching the username, TrueNAS creates a new sub-directory if the **Create Home Directory** checkbox is enabled.
TrueNAS shows the path to the user home directory when editing a user.

Select the **Home Directory Permissions** (**Read**, **Write**, **Execute**) for each (**User**, **Group**, **Other**) to set Unix permissions for the user home directory. Built-in users are read-only and can not modify these permissions settings.

### Configuring Authentication Settings

{{< trueimage src="/images/SCALE/23.10/AddUserHomeDirAuthSCALE.png" alt="Add User Home Directory and Authentication Settings" id="6: Add User Home Directory and Authentication Settings" >}}

You can assign a public SSH key to a user for key-based authentication by entering or pasting the *public* key into the **Authorized Keys** field.

{{< hint type=important >}}
Do *not* paste the private key.
{{< /hint >}}

You can also click **Choose File** under **Upload SSH Key** and browse to the location of an SSH key file.

If you are using an SSH public key, always keep a backup of the key.

Select the [shell]({{< relref "LocalUsersScreensSCALE.md" >}}) option for the user from the **Shell** dropdown options.
Options are **nologin**, **bash**, **rbash**, **dash**, **sh**, **tmux**, and **zsh**.
Admin users can also use **TrueNAS CLI** to open shell in the TrueNAS CLI and **TrueNAS Console** to open in the Console Setup Menu for SCALE.

Selecting **Lock User** disables all password-based functionality for the account until you clear the checkbox.

**Allowed sudo commands**, **Allow all sudo commands**, **Allowed sudo commands with no password** and **Allow all sudo commands with no password** allow the account to act as root using the [sudo](https://www.sudo.ws/) command.
To allow sudo commands, use **Allowed sudo commands** or **Allowed sudo commands with no password** to list the executable path(s) to specific sudo commands allowed for this user.
<file>/usr/bin/</file> is the default location for command executables.
Alternately, click the checkbox for **Allow all sudo commands** or **Allow all sudo commands with no password**.

Exercise caution when allowing sudo commands, especially without password prompts.
It is recommended to limit this privilege to trusted users and specific commands to minimize security risks.

By default, **Samba Authentication** is enabled.
This allows using the account credentials to access data shared with [SMB]({{< relref "/content/SCALE/SCALEUIReference/Shares/_index.md" >}}).

## Editing User Accounts

To edit an existing user account, go to **Credentials > Local Users**, expand the user entry, and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> **Edit** to open the **Edit User** configuration screen. See [Local User Screens]({{< relref "LocalUsersScreensScale.md" >}}) for details on all settings.

{{< taglist tag="scaleusers" limit="10" >}}
