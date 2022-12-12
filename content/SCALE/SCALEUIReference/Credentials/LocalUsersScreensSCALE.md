---
title: "Local Users Screens"
description: "This article provides information on the user screens and settings, and information on settings for the SCALE **Shell** screen."
weight: 10
alias: 
tags:
- scaleusers
- scaleshell
---

{{< toc >}}


The **Credentials > Users** screen displays a list of user accounts added to the system. By default built-in users except for **root** are hidden until you make them visible.

![UsersScreen](/images/SCALE/22.12/UsersScreen.png "Local User non-Built-in Accounts") 

**Toggle Build-In Users** displays either the **Show Built-In Users** or **Hide Built-in Users** dialogs based on the current **Users** list view. 
If built-in users are hidden, the **Show Built-in Users** dialog opens. Click **Show** to display the hidden list of users. 

![UserScreenWithBuiltinUsers](/images/SCALE/22.12/UserScreenWithBuiltinUsers.png "Local User Built-in Accounts") 

To hide the built-in users, click **Toggle Built-In Users** again to open the **Hide Built-in Users** dialog. Click **Hide** to only display non-built-in users again.

**Add** opens the **[Add User](#add-or-edit-user-screens)** screen.

### User Details Screen

The expanded view of each user includes details on that user and provides the option to edit or delete the user. Click the <span class="material-icons">expand_more</span> arrow to show the user details screen.

![UserScreenUserDetails](/images/SCALE/22.12/UserScreenUserDetails.png "Local User Details") 

**Edit** opens the **[Edit User](#add-or-edit-user-screens)** screen. **Delete** opens a delete confirmation dialog.

### Add or Edit User Screens

The **Add User** and **Edit User** configuration screens display the same setting options. 
Built-in users (except the **root** user) do not include the **Home Directory Permissions** settings, but all new users created, such as those for an SMB share like the **smbguest** user, do.

### Identification Settings
**Identification** settings specify the name, user name, password and email for the user.
{{< expand "Click Here for More Information" "v" >}}

![AddUserIdentificationSettings](/images/SCALE/22.12/AddUserIdentificationSettings.png "Add User Identification Settings") 

| Setting | Description |
|---------|-------------|
| **Full Name** | Required. Enter a name for the user with our without spaces. |  
| **Username** | Required. Enter a user name of up to 16 characters in length. When using NIS or other legacy software with limited user name lengths, keep names to eight characters or less for compatibility. Do not begin the user name with a hyphen (-), and do not include a space, tab, the comma (,), plus (+), ampersand (&), percent (%), carat (^), open or close parenthesis ( ), exclamation mark (!), at symbol (@), tilde (~), question mark (?), greater or less than symbols (<)(>), or equals (+) in the name. You can use the dollar sign ($) as the last character of the user name. |  
| **Disable Password** | Use the toggle to disable the password for the selected user. If you disable the admin account the admin user cannot login. If you disable the root and admin user passwords you see a **Set new root account password** signin splash screen. |
| **Password** | Required. Enter a user password unless **Enable Password login** is set to **No**. The password cannot contain a question mark (?). |  
| **Confirm Password** | Required. Re-enter the value entered in **Password**. |  
| **Email** | Enter the email address of the new user. This email address receives notifications, alerts, messages based on the settings configured. |  

{{< /expand >}}

### User ID and Groups Settings
**User ID and Group** settings specify the user ID and groups this user belongs to.
{{< expand "Click Here for More Information" "v" >}}

![AddUser-UserIDAndGroupSettings](/images/SCALE/22.12/AddUser-UserIDAndGroupSettings.png "Add User User Id an Groups Settings") 

| Setting | Description |
|---------|-------------|
| **User ID** | Required. Enter a number greater than 1000 for user accounts. For system accounts use an ID equal to the default port number used by the service. |  
| **Primary Group** | Select a group from the dropdown list. New users are not assigned **su** permissions if **wheel** is their primary group. |  
| **Auxiliary Groups** | Select group(s) from the dropdown list to add this new user to additional groups. |  
| **New Primary Group** | Click the toggle to create a new primary group with the same name as the user. Clear to select an existing group from the **Primary Group** dropdown list. |  

{{< /expand >}}

### Directories and Permissions settings
**Directory and Permissions** settings specify the user home directory and the permissions for that home directory.
{{< expand "Click Here for More Information" "v" >}}

![AddUserDirPermsAuthSettings](/images/SCALE/22.02/AddUserDirPermsAuthSettings.png "Add User Directories, Permissions and Authentication Settings") 

| Setting | Description |
|---------|-------------|
| **Home Directory** | Enter or browse to enter the path to the home directory for this user. If the directory exists and matches the **Username**, it is set as the home directory for the user. When the path does not end with a subdirectory matching the username, a new subdirectory is created. The full path to the user home directory displays here on the **Edit User** screen when editing this user. |  
| **Home Directory Permissions** | Select the permissions checkboxes (**Read**, **Write**, **Execute**) for each (**User**, **Group**, **Other**) to set default Unix permissions for the user home directory. Built-in users are read-only and do not see these permissions settings.|  

{{< /expand >}}
### Authentication settings
**Authentication** settings specify authentication methods, the public SSH key, user administration access, and enables/disables password authentication. It also covers the Shell options.
{{< expand "Click Here for More Information" "v" >}}

![AddUserDirPermsAuthSettings](/images/SCALE/22.12/AddUserDirPermsAuthSettings.png "Add User Directories, Permissions and Authentication Settings") 

| Setting | Description |
|---------|-------------|
| **SSH Public Key** | Enter or paste the **public** SSH key of the user for any key-based authentication. Use **Download SSH Public Key** to obtain a public key text file. Keep a backup copy of the public key! Do not paste the private key in this field! |  
| **Disable Password** | Select the password option from the dropdown list. Select **Yes** to disable the **Password** and **Confirm Password** fields and remove the password from the account. The account cannot use password-based logins for services. For example, disabling the password prevents using account credentials to log into an SMB share or open and SSH session on the system. This also removes the **Lock User** and **Permit Sudo** options. Select **No** to requires adding a password to the account. The account can us the saved **Password** to authenticate with password-based services. |  
| **Shell** | Select the [shell](#shell-options) to use for local and SSH logins from the dropdown list. Options are **bash**, **rbash**, **dash**, **sh**, **zsh**, **tmux** and **nologin**. |  
| **Lock User** | Select to prevent the user from logging in or using password-based services until you clear this checkbox. Locking an account is only possible when **Disable Password** is set to **No** and the account has a created password in **Password**. |  
| **Permit Sudo** | Select to give this user administrator permissions and the ability to use [sudo](https://www.sudo.ws/). When using sudo, a user is prompted for their account password. |  
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

{{< taglist tag="scaleusers" limit="10" >}}
{{< taglist tag="scaleshell" limit="10" title="Related Shell Articles" >}}