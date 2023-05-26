---
title: "Local Users Screens"
description: "Provides information on the Users screens and settings and information on settings for the TrueNAS SCALE Shell screen."
weight: 10
alias: 
tags:
- scaleusers
- scaleshell
- scalelogin
- scaleadmin
---

{{< toc >}}


The **Credentials > Users** screen displays a list of user accounts added to the system. 
By default built-in users except for **root** are hidden until you make them visible.

{{< trueimage src="/images/SCALE/22.12/AllUsersScreenSCALE.png" alt="Local User non-Built-in Accounts" id="1 Local User non-Built-in Accounts" >}}

**Toggle Build-In Users** displays either the **Show Built-In Users** or **Hide Built-in Users** dialogs based on the current **Users** list view. 
If hidden, the **Show Built-in Users** dialog opens. Click **Show** to display the list of users. 

{{< trueimage src="/images/SCALE/22.12/AllUsersScreenBuiltInSCALE.png" alt="Local User Built-in Accounts" id="2 Local User Built-in Accounts" >}}

To hide built-in users, click **Toggle Built-In Users** again to open the **Hide Built-in Users** dialog. Click **Hide** to only display non-built-in users again.

**Add** opens the **[Add User](#add-or-edit-user-screens)** screen.

### User Details Screen

The expanded view of each user includes details for that user, and provides the option to edit or delete the user. 
Click on the user row to show the user details screen.

{{< trueimage src="/images/SCALE/22.12/UserScreenUserDetails.png" alt="Local User Details" id="3 Local User Details" >}}

**Edit** opens the **[Edit User](#add-or-edit-user-screens)** screen. **Delete** opens a delete confirmation dialog.

### Add or Edit User Screens

The **Add User** and **Edit User** configuration screens display the same setting options. 
Built-in users (except the **root** user) do not include the **Home Directory Permissions** settings, but all new users created, such as those for an SMB share like the **smbguest** user, do.

### Identification Settings
**Identification** settings specify the name, user name, password, and email for the user.
{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/22.12/AddUserIdentificationSettings.png" alt="Add User Identification Settings" id="4 Add User Identification Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Full Name** | Required. Enter a name for the user without spaces. |  
| **Username** | Required. Enter a user name of up to 16 characters in length. When using NIS or other legacy software with limited user name lengths, keep names to eight characters or less for compatibility. Do not begin the user name with a hyphen (-), and do not include a space, tab, the comma (,), plus (+), ampersand (&), percent (%), carat (^), open or close parenthesis ( ), exclamation mark (!), at symbol (@), tilde (~), question mark (?), greater or less than symbols (<)(>), or equals (+) in the name. You can use the dollar sign ($) as the last character of the user name. |  
| **Disable Password** | Use the toggle to disable the password for the selected user. If you disable the admin account the admin user cannot login. If you disable the root and admin user passwords you see a **Set new root account password** sign-in splash screen. |
| **Password** | Required. Enter a user password unless you set **Enable Password login** to **No**. A password cannot contain a question mark (?). The **Edit User** screen displays **New Password**. |  
| **Confirm Password** | Required. Re-enter the value entered in **Password**. The **Edit User** screen displays **Confirm New Password**. |  
| **Email** | Enter the email address of the new user. This email address receives notifications, alerts, messages based on the settings configured. | 
{{< /truetable >}}

{{< trueimage src="/images/SCALE/22.12/EditUserIdentificationSCALE.png" alt="Edit User Identification Settings" id="5 Edit User Identification Settings" >}}

{{< /expand >}}

### User ID and Groups Settings
**User ID and Group** settings specify the user ID and groups this user belongs to.
{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/22.12/AddUser-UserIDAndGroupSettings.png" alt="Add User User ID and Groups Settings" id="6 Add User User ID and Groups Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User ID** | Required. Enter a number greater than 1000 for user accounts. System accounts use an ID equal to the default port number used by the service. |  
| **Primary Group** | Select a group from the dropdown list. New users are not assigned **su** permissions if **wheel** is their primary group. |  
| **Auxiliary Groups** | Select group(s) from the dropdown list to add this new user to additional groups. |  
| **New Primary Group** | Click the toggle to create a new primary group with the same name as the user. Clear to select an existing group from the **Primary Group** dropdown list. |  
{{< /truetable >}}

{{< /expand >}}

### Directories and Permissions settings
**Directory and Permissions** settings specify the user home directory and the permissions for that home directory.
{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/22.12/AddUserHomeDirPermSCALE.png" alt="Add User Directories, Permissions and Authentication Settings" id="7 Add User Directories, Permissions and Authentication Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Home Directory** | Enter or browse to enter the path to the home directory for this user. If the directory exists and matches the **Username**, it is set as the home directory for the user. When the path does not end with a subdirectory matching the username, a new subdirectory is created if **Create Home Directory** is selected (enabled). The full path to the user home directory displays in this field on the **Edit User** screen for this user. |  
| **Home Directory Permissions** | Select the permissions checkboxes (**Read**, **Write**, **Execute**) for each (**User**, **Group**, **Other**) to set default Unix permissions for the user home directory. Built-in users are read-only and do not see these permissions settings.|
| **Create Home Directory** | Select to create a home directory for the user when the home directory path for this user does not end in the user name. Creates a home directory for the user within the selected path. |
{{< /truetable >}}

{{< /expand >}}
### Authentication settings
**Authentication** settings specify authentication methods, the public SSH key, user administration access, and enables/disables password authentication. 
It also includes the **Shell** screen options.
{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/22.12/AddUserHomeDirAuthSCALE.png" alt="Add User Home Directory and Authentication Settings" id="8 Add User Home Directory and Authentication Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Authorized Keys** | Enter or paste the downloaded SSH *public* key of the user for any key-based authentication. Use **Download Authorized Keys** to obtain a public key text file. Keep a backup copy of the public key! Do not paste the private key in this field! | 
| **Upload SSH Key** | Browse to the public key text file. |  
| **Shell** | Select the [shell](#shell-options) to use for local and SSH logins from the dropdown list. Options are **bash**, **rbash**, **dash**, **sh**, **zsh**, **tmux**, **TrueNAS CLI**, **TrueNAS Console**, and **nologin**. |  
| **Lock User** | Select to prevent the user from logging in or using password-based services until you clear this checkbox. Locking an account is only possible when **Disable Password** is set to **No** and the account has a created password in **Password**. |  
| **Allowed sudo commands** | Enter specific [sudo](https://www.sudo.ws/) commands allowed for this user. Grants administrator permissions for this user when using these commands. When using sudo, a user is prompted for their account password. |
| **Allow all sudo commands** | Select to give this user administrator permissions and the ability to use all [sudo](https://www.sudo.ws/) commands. When using sudo, a user is prompted for their account password. | 
| **Allowed sudo commands with no password** | Enter specific [sudo](https://www.sudo.ws/) commands allowed with no password required for this user, grants administrator permissions for this user when using these commands. |
| **Allow all sudo commands with no password** | Select to give this user administrator permissions and the ability to use all [sudo](https://www.sudo.ws/) commands with no password required. |
| **Samba Authentication** | Select to allow this user to authenticate to and access data share with [SMB]({{< relref "AddSMBShares.md" >}}) samba shares. |  
| **Download Authorized Keys** | Click to generate and download a public key text file. Displays on the **Edit User** screen. |
{{< /truetable >}}

#### Shell Options
You can set a specific [shell]({{< relref "UseScaleShell.md" >}}) for the user from the **Shell** dropdown list options:

{{< truetable >}}
| Shell | Description |
|-------|-------------|
| **bash**	| [Bourne Again shell](https://www.gnu.org/software/bash/manual/bash.html) for the GNU operating system. |
| **rbash**	| [Restricted bash](https://www.gnu.org/software/bash/manual/html_node/The-Restricted-Shell.html) |
| **dash** | [Debian Almquist shell](https://man7.org/linux/man-pages/man1/dash.1.html) |
| **sh**	| [Bourne shell](https://www.in-ulm.de/~mascheck/bourne/v7/) |
| **zsh**	| [Z shell](http://zsh.sourceforge.net/) |
| **tmux** | [terminal multiplexer](https://man7.org/linux/man-pages/man1/tmux.1.html)  |
| **nologin** | Use when creating a system account or to create a user account that can authenticate with shares but that cannot log in to the TrueNAS system using SSH. In rare cases where a CORE user has `/etc/netcli` set as the user shell, then migrates to SCALE the user shell changes to `/user/sbin/nologin` as the default. |
| **TrueNAS CLI** | Use to open **Shell** in the CLI. Eliminates the need to enter `cli` at the Shell system prompt to enter the TrueNAS CLI. Enter `ls` to see the list of namespaces. |
| **TrueNAS Console** |Use to open **Shell** in the Console Setup Menu. Eliminates the need to enter `menu`. Displays the console setup mene options. |
{{< /truetable >}}
{{< /expand >}}

{{< taglist tag="scaleusers" limit="10" >}}
{{< taglist tag="scaleshell" limit="10" title="Related Shell Articles" >}}
