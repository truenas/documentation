---
title: "Users Screens"
description: "Provides information on the Users screens and settings in TrueNAS."
weight: 10
tags:
- users
- accounts
---

The **Credentials > Users** screen displays a list of user accounts added to the system.
By default built-in users, except for **root**, are hidden until you make them visible.

{{< trueimage src="/images/SCALE/Credentials/AllUsersScreenSCALE.png" alt="Local User non-Built-in Accounts" id="Local User non-Built-in Accounts" >}}

The **Show Built-in Users** toggle shows or hides built-in users. Enable it to display the list of built-in users.

{{< trueimage src="/images/SCALE/Credentials/AllUsersScreenBuiltInSCALE.png" alt="Local User Built-in Accounts" id="Local User Built-in Accounts" >}}

To hide built-in users, disable **Show Built-in Users**.

The **Users** screen shows the pre-defined administrator role assigned to the user.

**Add** opens the **[Add User](#add-or-edit-user-screens)** screen.

Click on a user row to show the user details screen.

### User Details Screen

The expanded view of each user includes details for that user, including API keys for the user, the home directory location, shell, Samba authentication, SSH key, and sudo command access (if assigned).
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
| **Username** | Required. Enter a user name of up to 32 characters in length. When using NIS or other legacy software with limited user name lengths, keep names to eight characters or less for compatibility. Do not begin the user name with a hyphen (-), and do not include a space, tab, the comma (,), plus (+), ampersand (&), percent (%), carat (^), open or close parenthesis ( ), exclamation mark (!), at symbol (@), tilde (~), question mark (?), greater or less than symbols (<)(>), or equals (+) in the name. |
| **Disable Password** | Use the toggle to disable the password for the selected user. Disabling password-based logins prevents an account from using credentials to log in to an SMB share or open an SSH session on the system. At least one user with administrative privileges must have a password enabled. |
| **Password** | Required. Text entry for a user password unless **Enable Password login** is set to **No**. A password cannot contain a question mark (?). Leaving an empty string as your password results in activating the **Disable Password** toggle. The **Edit User** screen displays **New Password**. |
| **Confirm Password** | Required. Re-enter the value entered in **Password**. The **Edit User** screen displays **Confirm New Password**. |
| **Email** | Enter the email address of the new user. This email address receives notifications, alerts, and messages based on configured settings. |
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

**Directory and Permissions** settings specify the home directory for the user and the permissions for the home directory.

{{< trueimage src="/images/SCALE/Credentials/AddUserHomeDirPerm.png" alt="Directories and Permissions Settings" id="Directories and Permissions Settings" >}}

{{< expand "Directories and Permissions Settings" "v" >}}
{{< truetable >}}

| Setting | Description |
|---------|-------------|
| **Home Directory** | Enter or browse to enter the path to the home directory for this user. If the directory exists and matches the value in **Username**, it is set as the home directory for the user. When the path does not end with a subdirectory matching the username, a new subdirectory is created if the **Create Home Directory** option above the **Save** button is selected. The full path to the user home directory shows in this field on the **Edit User** screen for this user. The default location is **/var/empty**. |
| **Home Directory Permissions** | Select the permissions in **Read**, **Write**, and **Execute** for each role (**User**, **Group**, and **Other**) to set access control for the user home directory. Built-in users are read-only and can not modify these settings.|
| **Create Home Directory** | Select to create a home directory for the user when the home directory path for this user does not end in the user name. Creates a home directory for the user within the selected path. |
{{< /truetable >}}

{{< /expand >}}

### Authentication settings

**Authentication** settings specify authentication methods, the public SSH key, user administration access, and enable/disable password authentication.
The add and edit user screens grant access to a shell option, but the [privilege screen **Web Shell Access** setting]({{< ref "LocalGroupsScreens.md#PrivilegesScreen" >}}) determines the ability to see the **System > Shell** screen.

{{< trueimage src="/images/SCALE/Credentials/AddUserHomeDirAuth.png" alt="Authentication Settings" id="Authentication Settings" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}

| Setting | Description |
|---------|-------------|
| **Authorized Keys** | Enter or paste the downloaded SSH public key of the user for any key-based authentication. Use **Download Authorized Keys** to obtain a public key text file. Keep a backup copy of the public key! Do not paste the private key in this field! |
| **Upload SSH Key** | Paste the public key text file for the user in this field. |
| **Shell** | Select the [shell](#shell-options) for local and SSH logins from the dropdown list. Options are **nologin**, **TrueNAS CLI**, **TrueNAS Console**, **sh**, **bash**, **rbash**, **dash**, **tmux**, and **zsh**. |
| **Lock User** | Select to prevent the user from logging in or using password-based services until you clear this checkbox. Locking an account is only possible when **Disable Password** is set to **No** and the account has a created password in **Password**. |
| **Allowed sudo commands** | Use to list specific [sudo](https://www.sudo.ws/) commands allowed for this user. Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example, */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. <br> Grants limited root-like permissions for this user when using these commands. Using sudo prompts the user for their account password. |
| **Allow all sudo commands** | Select to grant the user permission to use all [sudo](https://www.sudo.ws/) commands. Using sudo prompts the user to enter their account password. |
| **Allowed sudo commands with no password** | Use to list specific [sudo](https://www.sudo.ws/) commands allowed for this user with no password required. Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example, */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. <br> Grants limited root-like permissions for this user when using these commands. Exercise caution when allowing sudo commands without password prompts. We recommend limiting this privilege to trusted users and specific commands to minimize security risks. |
| **Allow all sudo commands with no password** | Select to give this user administrator permissions and the ability to use all [sudo](https://www.sudo.ws/) commands with no password required. <br> This is not recommended. |
| **SMB User** | Select to allow this user to authenticate to and access data share with [SMB]({{< ref "/SCALETutorials/Shares" >}}) samba shares. |
| **Download Authorized Keys** | Click to generate and download a public key text file. Displays on the **Edit User** screen. |
{{< /truetable >}}

#### Shell Options

You can set a specific [shell]({{< ref "UseScaleShell" >}}) for the user from the **Shell** dropdown list options.

{{< truetable >}}

| Shell | Description |
|-------|-------------|
| **nologin** | Use when creating a system account or to create a user account that can authenticate with shares but that cannot log in to the TrueNAS system using SSH. In rare cases where a TrueNAS 13.0 user has `/etc/netcli` set as the user shell. After migrating to TrueNAS 24.04, the user shell changes to `/user/sbin/nologin` as the default. |
| **bash** | [Bourne Again shell](https://www.gnu.org/software/bash/manual/bash.html) for the GNU operating system. |
| **rbash** | [Restricted bash](https://www.gnu.org/software/bash/manual/html_node/The-Restricted-Shell.html) |
| **dash** | [Debian Almquist shell](https://man7.org/linux/man-pages/man1/dash.1.html) |
| **sh** | [Bourne shell](https://www.in-ulm.de/~mascheck/bourne/v7/) |
| **tmux** | [terminal multiplexer](https://man7.org/linux/man-pages/man1/tmux.1.html)  |
| **zsh** | [Z shell](https://zsh.sourceforge.net/) |
| **TrueNAS CLI** | Use to open **Shell** in the CLI. Eliminates the need to enter `cli` at the Shell system prompt to enter the TrueNAS CLI. Enter `ls` to see the list of namespaces. |
| **TrueNAS Console** |Use to open **Shell** in the Console Setup menu. Eliminates the need to enter `menu`. Displays the console setup menu options. This option provides the user access to the Linux and TrueNAS CLI shells. |
{{< /truetable >}}
{{< /expand >}}

## Utilizing API Keys Feature

{{< trueimage src="/images/SCALE/Credentials/UsersAPIKeysButton.png" alt="Users API Keys Option" id="Users API Keys Option" >}}

To view API keys linked to different user accounts, visit **Credentials > Users** and click the **API Keys** button on the right side of the screen.

{{< trueimage src="/images/SCALE/Credentials/UsersAPIKeysMenu.png" alt="Users API Keys Menu" id="Users API Keys Menu" >}}

The **API Keys** selection takes users to the **Users API Keys** page, which provides a table of all API keys linked to user accounts on your TrueNAS.

{{< truetable >}}

| Value | Description |
|------------------|-----------------|
| Name  | The name given to the API key when it was created.  |
| Username  | The username of the TrueNAS user associated with the API key.  |
| Local  | Indication of whether the API key is for a local TrueNAS user account.  |
| Revoked  | Indication of whether the API key has been revoked and is no longer valid.  |
| Created Date  | The date and time the API key was created.  |
| Expires  | The expiration date of the API key.  |
{{< /truetable >}}

* Click <i class="material-icons" aria-hidden="true" title="Edit">edit</i> **Edit** to edit an API key
* Click <i class="material-icons" aria-hidden="true" title="Delete">delete</i> **Delete** to delete an API key
