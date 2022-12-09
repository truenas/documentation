---
title: "Local Users Screens"
description: "This article provides information on the **Local User** screens and settings."
weight: 10
alias: 
tags:
 - scaleusers
---

{{< toc >}}


The **Credentials > Users** screen displays a list of user accounts added to the system. By default built-in users except for **root** are hidden until you make them visible.

![LocalUsersSCALE](/images/SCALE/22.02/LocalUsersSCALE.png "Local User non-Built-in Accounts") 

**Toggle Build-In Users** displays either the **Show Built-In Users** or **Hide Built-in Users** dialogs based on the current **Users** list view. 
If built-in users are hidden, the **Show Built-in Users** dialog opens. Click **Show** to displays the hidden list of users. 

![LocalUsersBuilt-InUsersSCALE](/images/SCALE/22.02/LocalUsersBuilt-InUsersSCALE.png "Local User Built-in Accounts") 

![LocalUsersSCALE](/images/SCALE/22.12/LocalUsersSCALE.png "List of Local User Accounts") 

TrueNAS hides all built-in users (except root) by default. Click the toggle **Show Built-In Users** to see all built-in users.

### User Details Screen

The expanded view of each users includes details on that user and provides the option to edit or delete the user. Click the <span class="material-icons">expand_more</span> arrow to show the user details screen.

![LocalUserDetailsSCALE](/images/SCALE/22.02/LocalUserDetailsSCALE.png "Local User Details") 

![AddUserIdentificationSettings](/images/SCALE/22.12/AddUserIdentificationSettings.png "Add User Identification Settings") 

### Add or Edit User Screens

The **Add User** and **Edit User** configuration screens display the same setting options. 
Built-in users (except the **root** user) do not include the **Home Directory Permissions** settings, but all new users created, such as those for an SMB share like the **smbguest** user do.

### Identification Settings
**Identification** settings specify the name, user name, password and email for the user.
{{< expand "Click Here for More Information" "v" >}}

![AddUserIdentificationSettings](/images/SCALE/22.02/AddUserIdentificationSettings.png "Add User Identification Settings") 

By default, the **Disable Password** toggle is not enabled. In this case, set and confirm a password.

Setting **Disable Password** toggle to active (blue toggle) disables several options: 
* The **Password** field becomes unavailable, and TrueNAS removes any existing password from the account.
* The **Lock User** and **Permit Sudo** options disappear.
* The account is restricted from password-based logins for services like SMB shares and SSH sessions.

![AddUserUserIDAndGroupsSettings](/images/SCALE/22.12/AddUserUserIDAndGroupsSettings.png "Add User User Id an Groups Settings") 

{{< /expand >}}

### User ID and Groups Settings
**User ID and Group** settings specify the user ID and groups this user belongs to.

{{< expand "Click Here for More Information" "v" >}}
By default, TrueNAS creates a new primary group with the same name as the user. This happens when the **Create New Primary Group** toggle is enabled.

To add the user to an existing primary group instead, disable the **Create New Primary Group** toggle and search for a group in the **Primary Group** field.
You can add the user to more groups using the **Auxiliary Groups** drop-down list.

![AddUserDirPermsAuthSettings](/images/SCALE/22.12/AddUserDirPermsAuthSettings.png "Add User Directories, Permissions and Authentication Settings")

{{< /expand >}}

### Directories and Permissions settings

![AddUserDirPermsAuthSettings](/images/SCALE/22.02/AddUserDirPermsAuthSettings.png "Add User Directories, Permissions and Authentication Settings") 

**Directory and Permissions** settings specify the user home directory and the permissions for that home directory.
{{< expand "Click Here for More Information" "v" >}}

| Setting | Description |
|---------|-------------|
| **Home Directory** | Enter or browse to enter the path to the home directory for this user. If the directory exists and matches the **Username**, it is set as the home directory for the user. When the path does not end with a subdirectory matching the username, a new subdirectory is created. The full path to the user home directory displays here on the **Edit User** screen when editing this user. |  
| **Home Directory Permissions** | Select the permissions checkboxes (**Read**, **Write**, **Execute**) for each (**User**, **Group**, **Other**) to set default Unix permissions for the user home directory. Built-in users are read-only and do not see these permissions settings.|  

{{< /expand >}}

### Authentication

You can assign a public SSH key to a user for key-based authentication by entering or pasting the *public* key into the **Authorized Keys** field.

{{< hint warning >}}
Do *not* paste the private key.
{{< /hint >}}

If you are using an SSH public key, always keep a backup of the key.

### Authentication settings
**Authentication** settings specify authentication methods, the public SSH key, user administration access, and enables/disables password authentication. It also covers the Shell options.
{{< expand "Click Here for More Information" "v" >}}

![AddUserDirPermsAuthSettings](/images/SCALE/22.02/AddUserDirPermsAuthSettings.png "Add User Directories, Permissions and Authentication Settings") 

| Setting | Description |
|---------|-------------|
| **SSH Public Key** | Enter or paste the **public** SSH key of the user for any key-based authentication. Use **Download SSH Public Key** to obtain a public key text file. Keep a backup copy of the public key! Do not paste the private key in this field! |  
| **Disable Password** | Select the password option from the dropdown list. Select **Yes** to disable the **Password** and **Confirm Password** fields and remove the password from the account. The account cannot use password-based logins for services. For example, disabling the password prevents using account credentials to log into an SMB share or open and SSH session on the system. This also removes the **Lock User** and **Permit Sudo** options. Select **No** to requires adding a password to the account. The account can us the saved **Password** to authenticate with password-based services. |  
| **Shell** | Select the [shell](#shell-options) to use for local and SSH logins from the dropdown list. Options are **bash**, **rbash**, **dash**, **sh**, **zsh**, **tmux** and **nologin**. |  
| **Lock User** | Select to prevent the user from logging in or using password-based services until you clear this checkbox. Locking an account is only possible when **Disable Password** is set to **No** and the account has a created password in **Password**. |  
| **Permit Sudo** | Select to give this user administrator permissions and the ability to use [sudo](https://www.sudo.ws/). When using sudo, a user is prompted for their account password. |  
| **Microsoft Account** | Select to allow additional user name authentication methods when the user connects from a Windows 8 or newer operating system. |  
| **Samba Authentication** | Select to allow this user to authenticate to and access data share with [SMB]({{< relref "/SCALE/SCALETutorials/Shares/SMB/AddSMBShares.md" >}}) samba shares. |  
| **Download SSH Public Key** | Click to generate and download a public key text file to past into **SSH Public Key**. |  

#### Shell Options
You can set a specific [shell]({{< relref "UseScaleShell.md" >}}) for the user from the **Shell** dropdown list options:

| Shell | Description |
|-------|-------------|
| bash	| [Bourne Again shell](https://www.gnu.org/software/bash/manual/bash.html) for the GNU operating system. |
| rbash	| [Restricted bash](https://www.gnu.org/software/bash/manual/html_node/The-Restricted-Shell.html) |
| dash | [Debian Almquist shell](https://man7.org/linux/man-pages/man1/dash.1.html) |
| sh	| [Bourne shell](https://www.in-ulm.de/~mascheck/bourne/v7/) |
| zsh	| [Z shell](http://zsh.sourceforge.net/) |
| tmux | [terminal multiplexer](https://man7.org/linux/man-pages/man1/tmux.1.html)  |
| nologin | Use when creating a system account or to create a user account that can authenticate with shares but that cannot log in to the TrueNAS system using `ssh`.

{{< /expand >}}

Selecting **Lock User** disables all password-based functionality for the account until you clear the checkbox.

**Permit Sudo** allows the account to act as the system administrator using the `sudo` command. Leave it disabled for better security.

By default, **Samba Authentication** is enabled.
This allows using the account credentials to access data shared with [SMB]({{< relref "/content/SCALE/SCALEUIReference/Shares/_index.md" >}}).

## Editing User Accounts

To edit an existing user account, go to **Credentials > Local Users**, expand the User entry, and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> **Edit**:

{{< taglist tag="scaleusers" limit="10" >}}
