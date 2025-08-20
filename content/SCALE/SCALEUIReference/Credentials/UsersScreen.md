---
title: "Users (WIP) Screens"
description: "Provides information on the new Users (WIP) screens and settings in TrueNAS."
weight: 
aliases: 
tags:
- users
- accounts
---


The **Credentials > Users (WIP)** screen sows a table with all users created on the system, and a set of widgets for a selected user row (first row is selected by default).

{{< trueimage src="/images/SCALE/Credentials/UsersWIPScreen.png" alt="User (WIP) Screen" id="User (WIP) Screen" >}}

**Add** opens the **[Add User](#add-or-edit-user-screens)** screen.

**Edit** opens the **[Edit user]()** screen.

**Delete** opens the **[Delete User]()** dialog.

### User Search Options

The **Users (WIP)** screen search is set to the basic, or simple search option by default. It accepts any word entered, such as a username, user type, or role.

{{< trueimage src="/images/SCALE/Credentials/UserWIPScreenBasicSearch.png" alt="Advanced Search Options" id="Advanced Search Options" >}}

**Switch to Advanced** link shows in the search field when in basic search mode.

**Switch to Advanced** shows advanced search options, an advanced search syntax example in the search field, and several **Add Filter** buttons directly below the search field for common search options. The users table shows all users in the system.

{{< trueimage src="/images/SCALE/Credentials/UserWIPAdvancedSearchOptions.png" alt="Advanced Search Options" id="Advanced Search Options" >}}

**Switch to Basic** option shows in the search field when in advanced search mode. **Switch to Basic** returns to the basic user table view.

### User Table

The **Users (WIP)**screen user table shows the **Username**, **Full Name**, **Type**, and pre-defined administrator role assigned to the user (**Access**) for each user.
**Username**, **Full Name**, and **Type** sort the list in an ascending or descending order.
Each user row also shows an icon showing the level of access given to the user.

{{< truetable title="User Icon Table" >}}
| Icon | Description |
|------|-------------|
| ![UserTruenasAccessIcon](/images/SCALE/credentials/UserTruenasAccessIcon.png "TrueNAS Access Icon") | Indicates the user has TrueNAS Access. |
| ![DatasetRolesSMBShareIcon](/images/SCALE/Datasets/DatasetRolesSMBShareIcon.png " SMB Share Access Icon") | Indicates the user has SMB access. |
| <span class="material-icons">power</span> | Indicates the user has an API key. |
{{< /truetable >}}

By default only local users show in the user table. The **Filter by Type** dropdown list has three options to show all users in the system:
-**Built-in** - Shows all built-in users.
- **Local** - Shows all users added by an administrator account.
- **Directory Services** - Shows all users added by a directory service like LDAP, FreeIPA, or Active Directory.

**Filter by Type** allows selecting multiple filter options.

The selected user row shows values for that user in the **Details for *user*** widgets.

### User Widgets

The **User (WIP)** screen shows up to three widgets for each user based on the type of user:

* [**Profile**](#profile-widget) - Shows for all user types (local, built-in, directory service created users).
* [**Password**](#password-widget) - Shows for users that require access to the UI, SSH, or communication to or with external services or users.
* [**Access**](#access-widget) - Shows for all user types.

{{< trueimage src="/images/SCALE/Credentials/UserScreenUserDetails.png" alt="Local User Details" id="Local User Details" >}}

**Edit** opens the **[Edit User](#add-or-edit-user-screens)** screen.

#### Profile Widget

The **Profile** widget shows the full name, group membership, type of user (Local, Built-in, or Directory Service), home directory paty and the user ID.

{{< trueimage src="/images/SCALE/Credentials/UsersScreenWIPProfileWidget.png" alt="Local User Details" id="Local User Details" >}}

#### Password Widget

The **Password** widget shows for users that require credentials to access the UI, an SSH session, or have external communication capabilities (Built-in users).
The widget shows the password age, which is how long that password has been in use, and the date and time it was last changed.

{{< trueimage src="/images/SCALE/Credentials/UsersScreenWIPPasswordWidget.png" alt="Local User Details" id="Local User Details" >}}

The **Password** widget for the **truenas_admin** and admin users not currently logged in show the **Generate One-Time Password** button.

**Generate One-Time Password** opens the **One-Time Password** window showing a system generated password.

{{< trueimage src="/images/SCALE/Credentials/OneTimePasswordWindow.png" alt="OneTime Password Window" id="OneTime Password Window" >}}

**Copy to Clipboard** copys the key to the clipboard so you can paste it into a text file and save it for use later when TrueNAS prompts you to enter it.

#### Access Widget

The **Access** widget has three sections: last action, password status, and any roles, API keys, or access privileges granted to SSH and shell, and shows the Shell settings and access path.

{{< trueimage src="/images/SCALE/Credentials/UsersScreenWIPAccessWidget.png" alt="Local User Details" id="Local User Details" >}}

Information details on the **Access** widget:
- **Last Action** can be a method call for the action taken (like opening a log file), log in or log out, or none. It shows the date and time of that last action.

- The password shows an active key icon when the user has a password or an inactive key icon when the user does not have a password. Users with passwords show the **Password** widget.

- The access area shows:
  - Services such as **SMB Access** and indicates it is active or inactive when not granted.
  - Pre-defined privilege or role assigned to the user, such as **Full Admin**, **Share Admin**, **Read Only Admin**.
  - API keys assigned or not. When a key exists the icon changes and shows a number with key, for example, *1key*.
  - SSH access as active or inactive if not granted.
  - Shell access path.
    - Allowed sudo commands setting
    - Allowed Sudo Commands (No Password) setting

The following table legend shows the icons found on the **Access** widget:
{{< truetable >}}
| Icon | Description |
|------|-------------|
| <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 18v4h-4v-3h-3v-3h-3l-2.26-2.26c-.55.17-1.13.26-1.74.26a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6c0 .61-.09 1.19-.26 1.74zM7 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg> | Indicates user has a password. |
| ![UserTruenasAccessIcon](/images/SCALE/credentials/UserTruenasAccessIcon.png "TrueNAS Access Icon") | Indicates the user has TrueNAS Access. |
| ![DatasetRolesSMBShareIcon](/images/SCALE/Datasets/DatasetRolesSMBShareIcon.png " SMB Share Access Icon") | Indicates the user has SMB access. |
| <span class="material-icons">power</span> | Indicates the user has an API key. |
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 9c-.6 0-1 .5-1 1v1.75c0 .5.4 1 1 1H7v.75H3.5V15h4c.6 0 1-.5 1-1v-1.75c0-.5-.4-1-1-1H5v-.75h3.5V9zm6 0c-.6 0-1 .5-1 1v1.75c0 .5.4 1 1 1H13v.75H9.5V15h4c.6 0 1-.5 1-1v-1.75c0-.5-.4-1-1-1H11v-.75h3.5V9zm5 0v6H17v-2.5h2V15h1.5V9H19v2h-2V9z"/></svg> | Indicates the user has SSH access. |
 | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M30.906 4.104c.76 0 1.234.615 1.057 1.38l-4.88 21.307c-.172.76-.927 1.38-1.682 1.38H1.094c-.76 0-1.234-.62-1.057-1.38l4.88-21.307c.172-.766.927-1.38 1.682-1.38zM19.74 16.563c.339-.526.302-1.208-.12-1.656l-7.458-7.938c-.505-.536-1.38-.542-1.953-.005c-.573.542-.625 1.411-.12 1.948l6.219 6.615v.146L6.412 22.84c-.599.432-.708 1.302-.25 1.938c.464.635 1.323.797 1.922.359l10.974-7.88c.37-.26.583-.49.682-.693zm-3.724 5.864a1.24 1.24 0 0 0-1.25 1.229a1.24 1.24 0 0 0 1.25 1.234h5.906a1.24 1.24 0 0 0 1.25-1.234a1.24 1.24 0 0 0-1.25-1.229z"/></svg> | Indicates the user has shell access. |
{{< /truetable >}}
    
**See Logs** opens the **Audit** screen showing log details for activity associated with that user.

**Add API Key** link that opens the **Add API Key** screen.
When the user has an API key, **View API Keys** shows and opens the **user API Keys** screen.

**Lock User** opens a confirmation dialog before locking the user. A locked user is prevented  from logging in or using password-based services while locked.
This button toggles to **Unlock User**, which shows a confirmation dialog before unlocking the user.

## Add or Edit User Screens

The **Add User** and **Edit User** configuration screens show the same setting options, but a few options are not editable.
Built-in users (except the **root** user) do not show the home directory settings, but all new users created, such as those for an SMB share like the **smbguest** user, do.

{{<include file="/static/includes/addcolumnorganizer.md">}}

### Username and Allow Access Settings

The **Username** and **Allow Access** settings specify the username, and level of access (privileges granted) given to the user.
Each access option changes settings shown in other sections of the **Add User** and **Edit User** screens.

{{< trueimage src="/images/SCALE/Credentials/AddUsernameAndAccessSettings.png" alt="Username and Allow Access Settings" id="Username and Allow Access Settings" >}}

{{< truetable >}}

| Setting | Description |
|---------|-------------|
| **Username** | (Required) Text entry field that accepts manual or copy/paste entry of a name for the user. A user name consists of up to 32 characters. When using NIS or other legacy software with limited user name lengths, keep names to eight characters or less for compatibility. Names should not begin with a hyphen (-), include a space, tab, or these special characters: comma (,), plus (+), ampersand (&), percent (%), carat (^), open or close parenthesis ( ), exclamation mark (!), at symbol (@), tilde (~), question mark (?), greater or less than symbols (<)(>), or equals (+). |
| **Allow Access** | Specifies the access granted to this user account. Each options shows different settings. Access options are: <br><li>**SMB Access** - The default option pre-selected. <br><li>**TrueNAS Access** - Shows the **Select Role** dropdown and the **custom roles** link that opens the TrueNAS documentation article on pre-defined administator roles.<br><li>**Shell Acccess** - Adds the **Shell** and **Sudo Commands** options to the [**Aditional Details**](#additional-details) section. <br><li>**SSH Access** - Deactivates the **Shell Access** option, but shows the **Shell** and **Sudo Commands** options found with **Shell Access**. Shows the **Allow SSH Login with Password (not recommended)** option, the **Public SSH Key** field.</li> |
| **Select Role** | Shows after selecting **TrueNAS Access**. Each role adds the appropriate group to the **Groups** option uner [**Aditional Details**](#additional-details). |
{{< /truetable >}}

### Authentication Settings

Authentication settings change base on the **Allow Access** option selected, but **Password** shows for all access options.

{{< trueimage src="/images/SCALE/Credentials/AddUserAuthenticationSettings.png" alt="Authentication Settings" id="Authentication Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Password** | (Required) Text entry field for the password or passphrase the user enters when logging into the UI or an SSH session. A password cannot contain a question mark (?). |
| **Public SSH Key** | Only shows when **SSH Access** is selected. Text entry field that accepts manual or copy/pasty entry of the public SSH key for any key-based authentication. Do not paste the private key in this field! |
{{< /truetable >}}

### Additional Details

The <span class="material-icons">edit</span> edit icon shows a text entry or dropdown list field to enter a value for the setting in this section.
Some settings show additional settings, for example the **Group**, **Home Directory**, and **Sudo Commands** all show additional setting options.

{{< trueimage src="/images/SCALE/Credentials/AddUserAdditionallDetailsSettings.png" alt="Additional Details Settings" id="Additional Details Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Full Name** | Text entry field that accepts manual entry of the full name (first and last) for the user. |
| **Email** | Enter the email address of the new user. This email address receives notifications, alerts, and messages based on configured settings. |
| **Groups** | Shows the **Create New Primary Group** and **Auxiliary Groups** settings after clicking the edit icon. **Create New Primary Group** creates a new primary group with the same name entered in **Username**. <br>Select a  group from the dropdown list, this sets the **Auxiliary Group** membership. For example, to add **built-in administrator** or **truenas_readonly_administrator** group privileges. |
| **UID** | Shows the default **Next Available**. After clicking the edit icon, shows a text entry field that accepts manual entry of a new number for the user ID. Enter a number greater than 1000 for user accounts. System accounts use an ID equal to the default port number used by the service. |
| **Home Directory** | Shows the default **New directory under /var/empty** when not configured. Clicking the edit icon shows the **Create Home Directory** option, and the mount path and file browser fields. **Default Permissions** sets the home directory ACL permissions to **700 or wonder - all, others-none**. The mount path field allows manual entry of the path to the home directory for this user, or populates with the path selected with the file browser directly below. If the directory exists and matches the value in **Username**, it is set as the home directory for the user. When the path does not end with a subdirectory matching the username, a new subdirectory is created if the **Create Home Directory** option is selected. |
| **Shell** | Select the [shell](#shell-options) for local and SSH logins from the dropdown list. Options are **bash** **dash**, **rbash**, **sh**, **tmux**, **TrueNAS CLI**, **TrueNAS Console**, and **zsh**. |
| **Sudo Commands** | Shows options for entering [`sudo`](https://www.sudo.ws/) commands. Options are: <br><lil>**Allowed Sudo Commands** - Limits this user to the specific `sudo` commands entered as an absolute path to the ELF (Executable and Linkable Format) executable file, for example, */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. <br> Grants limited root-like permissions for this user when using these commands and prompts the user for their account password. <br><li>**Allow all sudo commands** - Grants the user permission to use all `sudo` commands, but prompts the user to enter their password. <br><li>**Allowed sudo commands with no password** - Limits the `sudo` commands the user can enter without being prompted to enter their password. Each command is entered as an absolute path to the ELF (Executable and Linkable Format) executable file, for example, */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. Grants limited root-like permissions for this user when using these commands. <br>Exercise caution when allowing `sudo` commands without password prompts. We recommend limiting this privilege to trusted users and specific commands to minimize security risks. <br><li>**Allow all sudo commands with no password** - Gives this user administrator permissions and the ability to use all `sudo` commands without being prompted to enter their password. <br> This is not recommended.</li> |
{{< /truetable >}}

{{< expand "Shell Options" "v" >}}

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

{{<include file="/static/includes/addcolumnorganizer.md">}}