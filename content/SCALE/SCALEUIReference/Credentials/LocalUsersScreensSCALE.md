---
title: "Users Screens"
description: "Provides information on the Users screens and settings in TrueNAS."
weight: 10
aliases: 
 - /scale/scaleclireference/account/
 - /scale/scaleclireference/account/cliuser/
 - /scale/scaleuireference/credentials/localusers/
tags:
- users
- accounts
---

The **Credentials > Users** screen displays a list of user accounts added to the system.
By default built-in users, except for **root**, are hidden until you make them visible.

{{< trueimage src="/images/SCALE/Credentials/AllUsersScreenSCALE.png" alt="Local User non-Built-in Accounts" id="Local User non-Built-in Accounts" >}}

**Toggle Build-In Users** displays either the **Show Built-In Users** or **Hide Built-in Users** dialogs based on the current **Users** list view.
If hidden, the **Show Built-in Users** dialog opens. Click **Show** to display the list of users.

{{< trueimage src="/images/SCALE/Credentials/AllUsersScreenBuiltInSCALE.png" alt="Local User Built-in Accounts" id="Local User Built-in Accounts" >}}

To hide built-in users, click **Toggle Built-In Users** again to open the **Hide Built-in Users** dialog. Click **Hide** to display only non-built-in users again.

The **Users** screen shows the pre-defined administrator role assigned to the user.

**Add** opens the **[Add User](#add-or-edit-user-screens)** screen.

Click on a user row to show the user details screen.

### User Details Screen

The expanded view of each user includes details for that user, including the home directory location, shell, Samba authentication, SSH key, and sudo command access (if assigned).
It provides the option to edit or delete the user, and access user audit logs.

{{< trueimage src="/images/SCALE/Credentials/UserScreenUserDetails.png" alt="Local User Details" id="Local User Details" >}}

**Edit** opens the **[Edit User](#add-or-edit-user-screens)** screen. **Delete** opens a delete confirmation dialog.

### Add or Edit User Screens

The **Add User** and **Edit User** configuration screens display the same setting options. 
Built-in users (except the **root** user) do not include the **Home Directory Permissions** settings, but all new users created, such as those for an SMB share like the **smbguest** user, do.

{{<include file="/static/includes/addcolumnorganizer.md">}}

### Identification Settings
**Identification** settings specify the name, user name, password, and user email.

{{< trueimage src="/images/SCALE/Credentials/AddUserIdentificationSettings.png" alt="Identification Settings" id="Identification Settings" >}}

{{< expand "Identification Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Full Name** | Required. Enter a description for the user, such as a first and last name. |  
| **Username** | Required. Enter a user name of up to 16 characters in length. When using NIS or other legacy software with limited user name lengths, keep names to eight characters or less for compatibility. Do not begin the user name with a hyphen (-), and do not include a space, tab, the comma (,), plus (+), ampersand (&), percent (%), carat (^), open or close parenthesis ( ), exclamation mark (!), at symbol (@), tilde (~), question mark (?), greater or less than symbols (<)(>), or equals (+) in the name. You can use the dollar sign ($) as the last character of the user name. |  
| **Disable Password** | Use the toggle to disable the password for the selected user. At least one user with administrative privileges must have a password enabled. |
| **Password** | Required. Enter a user password unless you set **Enable Password login** to **No**. A password cannot contain a question mark (?). The **Edit User** screen displays **New Password**. |  
| **Confirm Password** | Required. Re-enter the value entered in **Password**. The **Edit User** screen displays **Confirm New Password**. |  
| **Email** | Enter the email address of the new user. This email address receives notifications, alerts, and messages based on the settings configured. |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/Credentials/EditUserIdentificationSCALE.png" alt="Edit User Identification Settings" id="Edit User Identification Settings" >}}

{{< /expand >}}

### User ID and Groups Settings
**User ID and Group** settings specify the user ID and groups this user belongs to.

{{< trueimage src="/images/SCALE/Credentials/AddUser-UserIDAndGroupSettings.png" alt="User ID and Groups Settings" id="User ID and Groups Settings" >}}

{{< expand "User ID and Group Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User ID** | Required. Enter a number greater than 1000 for user accounts. System accounts use an ID equal to the default port number used by the service. |  
| **Primary Group** | Select a group from the dropdown list. New users are not assigned **su** permissions if **wheel** is their primary group. |  
| **Auxiliary Groups** | Select group(s) from the dropdown list to add this new user to additional groups. To assign a pre-defined administrator role, scroll down the list to select the desired role. |  
| **Create New Primary Group** | Select to create a new primary group with the same name as the user. Clear to select an existing group from the **Primary Group** dropdown list. |  
{{< /truetable >}}
{{< /expand >}}

### Directories and Permissions settings
**Directory and Permissions** settings specify the user home directory and the permissions for that home directory.

{{< trueimage src="/images/SCALE/Credentials/AddUserHomeDirPerm.png" alt="Directories and Permissions Settings" id="Directories and Permissions Settings" >}}

{{< expand "Directories and Permissions Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Home Directory** | Enter or browse to enter the path to the home directory for this user. If the directory exists and matches the **Username**, it is set as the home directory for the user. When the path does not end with a subdirectory matching the username, a new subdirectory is created if **Create Home Directory** is selected (enabled). The full path to the user home directory displays in this field on the **Edit User** screen for this user. The default location is **/var/empty**. |   
| **Home Directory Permissions** | Select the permissions in **Read**, **Write**, and **Execute** for each role (**User**, **Group**, and **Other**) to set access control for the user home directory. Built-in users are read-only and can not modify these settings.|
| **Create Home Directory** | Select to create a home directory for the user when the home directory path for this user does not end in the user name. Creates a home directory for the user within the selected path. |
{{< /truetable >}}

{{< /expand >}}

### Authentication settings
**Authentication** settings specify authentication methods, the public SSH key, user administration access, and enable/disable password authentication.
The add and edit user screens grant access to a shell option, but the [privilege screen **Web Shell Access** setting]({{< relref "LocalGroupsScreens.md#PrivilegesScreen" >}}) determines the ability to see the **System > Shell** screen.

{{< trueimage src="/images/SCALE/Credentials/AddUserHomeDirAuth.png" alt="Authentication Settings" id="Authentication Settings" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Authorized Keys** | Enter or paste the downloaded SSH public key of the user for any key-based authentication. Use **Download Authorized Keys** to obtain a public key text file. Keep a backup copy of the public key! Do not paste the private key in this field! |
| **Upload SSH Key** | Browse to the public key text file. |  
| **Shell** | Select the [shell](#shell-options) to use for local and SSH logins from the dropdown list. Options are **nologin**, **TrueNAS CLI**, **TrueNAS Console**, **sh**, **bash**, **rbash**, **dash**, **tmux**, and **zsh**. |  
| **Lock User** | Select to prevent the user from logging in or using password-based services until you clear this checkbox. Locking an account is only possible when **Disable Password** is set to **No** and the account has a created password in **Password**. |  
| **Allowed sudo commands** | Use to list specific [sudo](https://www.sudo.ws/) commands allowed for this user. Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example, */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. <br> Grants limited root-like permissions for this user when using these commands. Using sudo prompts the user for their account password. |
| **Allow all sudo commands** | Select to give this user permission to use all [sudo](https://www.sudo.ws/) commands. Using sudo prompts the user for their account password. |
| **Allowed sudo commands with no password** | Use to list specific [sudo](https://www.sudo.ws/) commands allowed for this user with no password required. Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example, */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. <br> Grants limited root-like permissions for this user when using these commands. Exercise caution when allowing sudo commands without password prompts. We recommend limiting this privilege to trusted users and specific commands to minimize security risks. |
| **Allow all sudo commands with no password** | Select to give this user administrator permissions and the ability to use all [sudo](https://www.sudo.ws/) commands with no password required. <br> This is not recommended. |
| **SMB User** | Select to allow this user to authenticate to and access data share with [SMB]({{< relref "/SCALE/SCALETutorials/Shares/_index.md" >}}) samba shares. |  
| **Download Authorized Keys** | Click to generate and download a public key text file. Displays on the **Edit User** screen. |
{{< /truetable >}}

#### Shell Options
You can set a specific [shell]({{< relref "UseScaleShell.md" >}}) for the user from the **Shell** dropdown list options.

{{< truetable >}}
| Shell | Description |
|-------|-------------|
| **nologin** | Use when creating a system account or to create a user account that can authenticate with shares but that cannot log in to the TrueNAS system using SSH. In rare cases where a TrueNAS 13.0 user has `/etc/netcli` set as the user shell then migrates to TrueNAS 24.04, the user shell changes to `/user/sbin/nologin` as the default. |
| **bash** | [Bourne Again shell](https://www.gnu.org/software/bash/manual/bash.html) for the GNU operating system. |
| **rbash** | [Restricted bash](https://www.gnu.org/software/bash/manual/html_node/The-Restricted-Shell.html) |
| **dash** | [Debian Almquist shell](https://man7.org/linux/man-pages/man1/dash.1.html) |
| **sh** | [Bourne shell](https://www.in-ulm.de/~mascheck/bourne/v7/) |
| **tmux** | [terminal multiplexer](https://man7.org/linux/man-pages/man1/tmux.1.html)  |
| **zsh** | [Z shell](https://zsh.sourceforge.net/) |
| **TrueNAS CLI** | Use to open **Shell** in the CLI. Eliminates the need to enter `cli` at the Shell system prompt to enter the TrueNAS CLI. Enter `ls` to see the list of namespaces. |
| **TrueNAS Console** |Use to open **Shell** in the Console Setup menu. Eliminates the need to enter `menu`. Displays the console setup menu options. This option provides the user with access to the Linux and TrueNAS CLI shells. |
{{< /truetable >}}
{{< /expand >}}
