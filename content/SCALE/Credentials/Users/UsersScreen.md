---
title: "Users Screens"
description: "Provides information on the Users screens and settings in TrueNAS."
weight: 50
aliases:
 - /scale/scaleuireference/credentials/usersscreen/
 - /scale/scaleuireference/credentials/localusersscreensscale/
tags:
- users
- accounts
doctype: reference
---



The **Credentials > Users** screen shows a table with all users created on the system. A set of cards shows for the selected user row (the first row is selected by default).
The truenas_admin user is the first user row, and it therefore shows by default when you first access the screen.

{{< trueimage src="/images/SCALE/Credentials/UsersScreen.png" alt="Users screen" id="Users Screen" >}}

**Add** opens the **[Add User](#add-or-edit-user-screens)** screen.

**Edit** opens the **[Edit user](#add-or-edit-user-screens)** screen for the selected or default user row.

**Delete** opens the **[Delete User](#delete-user)** dialog for the selected user.

### User Search Options

The **Users** screen search is set to the basic, or simple search option by default. It accepts any word entered, such as a username, user type, or role.

{{< trueimage src="/images/SCALE/Credentials/UsersScreenBasicSearch.png" alt="Users Screen Basic search" id="Users Screen Basic Search" >}}

**Switch to Advanced** link shows in the search field when in basic search mode.

**Switch to Advanced** shows advanced search options, an advanced search syntax example in the search field, and several **Add Filter** buttons directly below the search field for common search options. The users table shows all users in the system.

{{< trueimage src="/images/SCALE/Credentials/UserAdvancedSearchOptions.png" alt="Users screen advanced search interface with filters" id="Users Screen Advanced Search Options" >}}

**Switch to Basic** option shows in the search field when in advanced search mode. **Switch to Basic** returns to the basic user table view.

### User Table

The **Users** screen user table shows the **Username**, **Full Name**, **Type**, and pre-defined administrator role assigned to the user (**Access**) for each user.
**Username**, **Full Name**, and **Type** sort the list in ascending or descending order.
Each user row also shows an icon showing the level of access given to the user.

{{< truetable title="User Icon Table" >}}
| Icon | Description |
|------|-------------|
| ![UserTruenasAccessIcon](/images/SCALE/credentials/UserTruenasAccessIcon.png "TrueNAS Access Icon") | Indicates the user has TrueNAS Access. |
| ![DatasetRolesSMBShareIcon](/images/SCALE/Datasets/DatasetRolesSMBShareIcon.png " SMB Share Access Icon") | Indicates the user has SMB access. |
| <span class="material-icons">share</span> | Indicates the user has WebShare access. |
| <span class="material-icons">power</span> | Indicates the user has an API key. |
| <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 9c-.6 0-1 .5-1 1v1.75c0 .5.4 1 1 1H7v.75H3.5V15h4c.6 0 1-.5 1-1v-1.75c0-.5-.4-1-1-1H5v-.75h3.5V9zm6 0c-.6 0-1 .5-1 1v1.75c0 .5.4 1 1 1H13v.75H9.5V15h4c.6 0 1-.5 1-1v-1.75c0-.5-.4-1-1-1H11v-.75h3.5V9zm5 0v6H17v-2.5h2V15h1.5V9H19v2h-2V9z"/></svg> | Indicates the user has SSH access. |
{{< /truetable >}}

By default, only local users show in the user table. The **Filter by Type** dropdown list has three options to show all users in the system:
* **Built-in** - Shows all built-in users.
* **Local** - Shows all users added by an administrator account.
* **Directory Services** - Shows all users added by a directory service like LDAP, FreeIPA, or Active Directory.

**Filter by Type** allows selecting multiple filter options.

The selected user row shows values for that user in the **Details for *user*** cards.

## User Cards

The **User** screen shows up to three cards for each user based on the type of user:

* [**Profile**](#profile-card) - Shows for all user types (local, built-in, directory service created users).
* [**Password**](#password-card) - Shows for users that require access to the UI, SSH, or communication to or with external services or users.
* [**Access**](#access-card) - Shows for all user types.

**Edit** opens the **[Edit User](#add-or-edit-user-screens)** screen.

### Profile Card

The **Profile** card shows the full name, group membership, type of user (Local, Built-in, or Directory Service), home directory path, and the user ID.

{{< trueimage src="/images/SCALE/Credentials/UsersScreenProfileWidget.png" alt="User profile card showing user information" id="Users Screen Profile Card" >}}

### Password Card

The **Password** card shows for users who require credentials to access the UI, an SSH session, or have external communication capabilities (Built-in users).
The card shows the password age, which is how long that password has been in use, and the date and time it was last changed.

{{< trueimage src="/images/SCALE/Credentials/UsersScreenPasswordWidget.png" alt="User Password Card" id="User Password Card" >}}

The **Password** card for the **truenas_admin** and admin users not currently logged in shows the **Generate One-Time Password** button. To see this button, the selected user must not be the user currently logged into TrueNAS, must not be a built-in user, and the user has **TrueNAS Acccess** selected and a role assigned that has account write permisions (e.g., the Full Admin role).

{{< trueimage src="/images/SCALE/Credentials/UsersScreenPasswordCardWithOneTimePassword.png" alt="Password Card With Generatee One-Time Password" id="Password Card With Generate One-Time Password" >}}

**Generate One-Time Password** opens the **One-Time Password** dialog showing a system-generated password for single (one time) use.

{{< trueimage src="/images/SCALE/Credentials/OneTimePasswordWindow.png" alt="One-time password generation window" id="One Time Password Window" >}}

**Copy to Clipboard** copies the password key to the clipboard so you can paste it into a saved text file for later use when TrueNAS prompts you to enter it.

<!-- Note, Configuring STIG Or FIPS requires a one-time password to be configured for the user of these features. The OTP lasts 24 hrs before it times out. Configure the OTP before setting up 2fa for that user! -->

### Access Card

The **Access** card has three sections: last action, password status, and any roles, API keys, or access privileges granted to SSH and shell, and shows the Shell settings and access path. When global two-factor authentication is set, it shows the **Clear Two-Factor Authentication** button.

<div style="display: flex; gap: 20px; align-items: flex-start;">
    <div style="flex: 1;">
      <img src="/images/SCALE/Credentials/UsersScreenAccessWidget.png" alt="Access Card No API Key" style="width: 100%; max-width: 400px; height: auto;">
    </div>
    <div style="flex: 1;">
      <img src="/images/SCALE/Credentials/UsersScreenAccessCardWithAPIKey.png" alt="Access Card with API Key" style="width: 100%; max-width: 400px; height: auto;">
    </div>
  </div>

Information details on the **Access** card:
- **Last Action** can be a method call for the action taken (like opening a log file), log in or log out, or none. It shows the date and time of that last action.

- **See Logs** link opens the [**Audit** screen]({{< ref "AuditScreen" >}}) for the selected user.

- **Password Login** status is Enabled or Disabled. A key icon when the user has a password or an inactive key icon when the user does not have a password. Users with passwords show the **Password** card.

- Service access, such as **SMB Access** or **WebShare Accesss** indicates the user has that access granted.

- **TrueNAS Access** and the role assigned to the user, such as **Full Admin**, **Share Admin**, **Read Only Admin**.

- API keys assigned or not. When a key exists, the icon changes and shows a number with the key, for example, *1 key*.
  - **Add API Keys** link shows when a does not key exist and it opens the [**Add API Key** screen]({{< ref "APIKeysScreen" >}}).
  - **View API Keys** link shows when a key exists and opens the [**User API Key** screen]({{< ref "APIKeysScreen" >}}).
  
- **SSH Acces**s is active or inactive if not granted.
  
- **Shell Access** path.

- **Sudo Command Access** granted.
    - **Allowed Sudo Commands** setting
    - **Allowed Sudo Commands (No Password)** setting

The following table legend shows the icons found on the **Access** card:
{{< truetable >}}
| Icon | Description |
|------|-------------|
| <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 18v4h-4v-3h-3v-3h-3l-2.26-2.26c-.55.17-1.13.26-1.74.26a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6c0 .61-.09 1.19-.26 1.74zM7 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg> | Indicates user has a password. |
| ![UserTruenasAccessIcon](/images/SCALE/Credentials/UserTruenasAccessIcon.png "TrueNAS Access Icon")  | Indicates the user has TrueNAS Access. |
| ![DatasetRolesSMBShareIcon](/images/SCALE/Datasets/DatasetRolesSMBShareIcon.png " SMB Share Access Icon") | Indicates the user has SMB access. |
| <span class="material-icons">share</span> | Indicates the user has WebShare access. |
| <span class="material-icons">power</span> | Indicates the user has an API key. |
| <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 9c-.6 0-1 .5-1 1v1.75c0 .5.4 1 1 1H7v.75H3.5V15h4c.6 0 1-.5 1-1v-1.75c0-.5-.4-1-1-1H5v-.75h3.5V9zm6 0c-.6 0-1 .5-1 1v1.75c0 .5.4 1 1 1H13v.75H9.5V15h4c.6 0 1-.5 1-1v-1.75c0-.5-.4-1-1-1H11v-.75h3.5V9zm5 0v6H17v-2.5h2V15h1.5V9H19v2h-2V9z"/></svg> | Indicates the user has SSH access. |
| <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M30.906 4.104c.76 0 1.234.615 1.057 1.38l-4.88 21.307c-.172.76-.927 1.38-1.682 1.38H1.094c-.76 0-1.234-.62-1.057-1.38l4.88-21.307c.172-.766.927-1.38 1.682-1.38zM19.74 16.563c.339-.526.302-1.208-.12-1.656l-7.458-7.938c-.505-.536-1.38-.542-1.953-.005c-.573.542-.625 1.411-.12 1.948l6.219 6.615v.146L6.412 22.84c-.599.432-.708 1.302-.25 1.938c.464.635 1.323.797 1.922.359l10.974-7.88c.37-.26.583-.49.682-.693zm-3.724 5.864a1.24 1.24 0 0 0-1.25 1.229a1.24 1.24 0 0 0 1.25 1.234h5.906a1.24 1.24 0 0 0 1.25-1.234a1.24 1.24 0 0 0-1.25-1.229z"/></svg> | Indicates the user has shell access. |
{{< /truetable >}}

#### Lock User/Unlock User

**Lock User** opens a confirmation dialog before locking the user. A locked user is prevented from logging in or using password-based services while locked.
This button toggles to **Unlock User**, which shows a confirmation dialog before unlocking the user.

{{< trueimage src="/images/SCALE/Credentials/LockUserDialog.png" alt="Lock User Dialog" id="Lock User Dialog" >}}

#### Clear Two-Factor Authentication

**Clear Two-Factor Authentication** shows when the user has 2FA configured. Opens a confirmation dialog before clearing the two-factor authentication settings for the user.
This administrative function helps users who have lost access to their authenticator device or are experiencing 2FA-related login issues.
When cleared, the user can log in without 2FA. If Global 2FA is enabled, the user is prompted to reconfigure 2FA on their next login.

{{< trueimage src="/images/SCALE/Credentials/Clear2FADialog.png" alt="Clear Two-Factor Authentication Dialog" id="Clear Two-Factor Authentication Dialog" >}}

{{< hint type=important >}}
Only clear 2FA for a user when it is necessary, such as when the user has lost access to their authenticator device. This action temporarily reduces account security until 2FA is reconfigured.
{{< /hint >}}

## Delete User

The **Delete User** dialog shows the name of the user selected in the user table on the **Users** screen.

{{< trueimage src="/images/SCALE/Credentials/DeleteUserDialog.png" alt="Delete User Dialog" id="Delete User Dialog" >}}

**Deleted user primary group *name*** removes the primary group created for the user (of the same name as the username) from TrueNAS.

**Delete** removes the user profile from TrueNAS and the primary group if the option is selected.

## Add or Edit User Screens

The **Add User** and **Edit User** configuration screens show the same setting options, but a few options are not editable.
Built-in users (except the **root** user) do not show the home directory settings, but all new users created and the SMB share **smbguest** user do.

{{<include file="/static/includes/addcolumnorganizer.md">}}

### Username and Allow Access Settings

The **Username** and **Allow Access** settings specify the username and level of access (privileges granted) given to the user.
Each access option changes the settings shown in other sections of the **Add User** and **Edit User** screens.

{{< trueimage src="/images/SCALE/Credentials/AddUsernameAndAccessSettings.png" alt="Username and Allow Access Settings" id="Username and Allow Access Settings" >}}

{{< truetable >}}

| Setting | Description |
|---------|-------------|
| **Username** | Specifies the required name for the user. A user name consists of up to 32 characters. When using NIS or other legacy software with limited user name lengths, keep names to eight characters or less for compatibility. Names should not begin with a hyphen (-), include a space, tab, or these special characters: comma (,), plus (+), ampersand (&), percent (%), carat (^), open or close parenthesis ( ), exclamation mark (!), at symbol (@), tilde (~), question mark (?), greater or less than symbols (<)(>), or equal (=). |
| **Allow Access** | Specifies the access granted to the user account. Each option shows different settings. Access options are: <ul><li>**SMB Access** - The default option is pre-selected.</li><li>**WebShare Access** - Adds WebShare access for the user.</li><li>**TrueNAS Access** - Shows the **Select Role** dropdown and the **custom roles** link that opens the TrueNAS documentation article on pre-defined administrator roles.</li><li>**Shell Access** - Adds the **Shell** and **Sudo Commands** options to the [**Additional Details**](#additional-details) section.</li><li>**SSH Access** - Deactivates the **Shell Access** option, but shows the **Shell** and **Sudo Commands** options found with **Shell Access**. Shows the **Allow SSH Login with Password (not recommended)** option, and the **Public SSH Key** field.</li></ul> |
| **Select Role** | Sets the privilege level for the user to one of the predefined user roles (**Full Admin**, **Sharing Admin**, or **Readonly Admin**). Shows after selecting **TrueNAS Access**. Each role adds the appropriate group to the **Groups** option under [**Additional Details**](#additional-details). |
{{< /truetable >}}

### Authentication Settings

Authentication settings show after selecting **Shell Access** or **SSH Access** options under **Allow Access**. **Password** shows for all access options.

{{< trueimage src="/images/SCALE/Credentials/AddUserAuthenticationSettings.png" alt="Authentication Settings" id="Authentication Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Password** | (Required) Text entry field for the password or passphrase the user enters when logging into the UI or an SSH session. A password cannot contain a question mark (?). |
| **Disable Password** | Disables password-based authentication for the user account. When selected, TrueNAS removes the existing password and hides the **Password** card. Users with disabled passwords cannot access password-based services like SMB shares or SSH password authentication. This option is not available (grayed out) when **SMB Access** is selected. |
| **Public SSH Key** | Only shows after selecting **SSH Access**. Text entry field that accepts manual or copy/paste entry of the public SSH key for any key-based authentication. Do not paste the private key in this field! |
{{< /truetable >}}

### Additional Details Settings

The <span class="material-icons">edit</span> edit icon or on the field shows a text entry, dropdown list, or other setting fields.
Some settings show additional settings, for example, the **Group**, **Home Directory**, and **Sudo Commands**.

{{< trueimage src="/images/SCALE/Credentials/AddUserAdditionallDetailsSettings.png" alt="Additional Details Settings" id="Additional Details Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Full Name** | Specifies the full name (first and last) for the user. |
| **Email** | Specifies the email address of the new user. This email address receives notifications, alerts, and messages based on configured settings. |
| **Groups** | Sets the group membership for the user. Shows the **Create New Primary Group** pre-selected by default, and **Auxiliary Groups** settings after clicking the edit icon. Shows **Create New Primary Group** with the same name entered in **Username**. Disabling **Create New Primary Group** shows the **Primary Group** dropdown list with group options. |
| **Create New Primary Group** | Sets TrueNAS to automatically create a new primary group for the user named the same as the username. Selected by default. Shows after clicking in the **Group** field. Disabling shows the **Primary Group** setting. |
| **Primary Group** | Sets the name of the primary group for the user from the options on the dropdown list. Shows after clicking in the **Group** field and disabling **Create New Primary Group**. |
| **Auxiliary Groups** | Sets membership in the selected auxiliary group. Shows after clicking in the **Groups** field. For example, to add **built-in administrator** or **truenas_readonly_administrator** group privileges. |
| **UID** | Shows the default **Next Available**. Shows a text entry field that accepts manual entry of a new number for the user ID after clicking edit. Enter a number greater than 1000 for user accounts. System accounts use an ID equal to the default port number used by the service. |
| **Home Directory** | Sets the home directory for the user. Shows the default **New directory under /var/empty** when not configured. Shows **Create Home Directory** preselected by default, and the **Create Home Directory Under** mount path and file browser fields show after clicking edit. D</li><li>**Default Permissions** is preselected by default. It  <br>Disabling **Default Permissions** shows the .</li></ul> |
| **Shell** | Select the [shell](#shell-options) for local and SSH logins from the dropdown list. Options are **bash** **dash**, **rbash**, **sh**, **tmux**, **TrueNAS CLI**, **TrueNAS Console**, and **zsh**. |
| **Create Home Directory** | Sets the mount path for the home directory for the selected user. Selected by default. Disabling hides the **Default Permissions** option, and **Create Home Directory** changes the mount path and browser fields to **Home Directory**.  |
| **Home Directory** | Sets the mount path to the location for the home directory. Shows a pair of fields: a blank mount path field and a file browser directly under the blank field. The blank field allows typing the mount path or using the file browser to set the mount path. The file browser allows creating a new dataset after clicking on an existing dataset. If the directory exists and matches the value in **Username**, it is set as the home directory for the user. When the path does not end with a subdirectory matching the username, a new subdirectory is created if the **Create Home Directory** option is selected. |
| **Default Permissions** | sets the home directory ACL permissions to **700 or owner - all, others-none**. Enabled by default. Disable to show the **Home Directory Permissions** permission options. |
| **Home Directory Permissions** | Sets custom  home directory  permissions using the **Read/Write/Execute** and **User/Group/Other** checkboxes. |
| **Sudo Commands** | Shows options for entering [`sudo`](https://www.sudo.ws/) commands. Options are: <ul><li>**Allowed Sudo Commands**, **Allow all sudo commands**, **Allowed sudo commands with no password**, and **Allow all sudo commands with no password**. |
| **Allowed Sudo Commands** | Limits this user to the specific `sudo` commands entered in the field. Enter allowed commands as an absolute path to the ELF (Executable and Linkable Format) executable file, for example, */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. Grants limited root-like permissions for this user when using these commands, and prompts the user for their account password. |
| **Allow all sudo commands** | Grants the user permission to use all `sudo` commands, but prompts the user to enter their password. |
| **Allowed sudo commands with no password** | Limits the `sudo` commands the user can enter without seeing a prompt to enter their password. Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example, */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. Grants limited root-like permissions for this user when using these commands. Exercise caution when allowing `sudo` commands without password prompts. We recommend limiting this privilege to trusted users and specific commands to minimize security risks. |
| **Allow all sudo commands with no password** | Gives this user administrator permissions and the ability to use all `sudo` commands without seeing a prompt to enter their password. This is not recommended! |
{{< /truetable >}}

{{< expand "Shell Options" "v" >}}

You can set a specific [shell]({{< ref "UseScaleShell" >}}) for the user from the **Shell** dropdown list options.

{{< truetable >}}
| Shell | Description |
|-------|-------------|
| **nologin** | Use when creating a system account or creating a user account that can authenticate with shares, but cannot log in to the TrueNAS system using SSH. In rare cases, where a TrueNAS 13.0 user has `/etc/netcli` set as the user shell, and then after migrating to TrueNAS 24.04 or later, the user shell changes to `/user/sbin/nologin` as the default. |
| **bash** | Opens a [Bourne Again shell](https://www.gnu.org/software/bash/manual/bash.html) for the GNU operating system. |
| **rbash** | Opens a [Restricted bash](https://www.gnu.org/software/bash/manual/html_node/The-Restricted-Shell.html) shell. |
| **dash** | Opens a [Debian Almquist shell](https://man7.org/linux/man-pages/man1/dash.1.html). |
| **sh** | Opens a [Bourne shell](https://www.in-ulm.de/~mascheck/bourne/v7/). |
| **tmux** | Opens a [terminal multiplexer](https://man7.org/linux/man-pages/man1/tmux.1.html) shell. |
| **zsh** | Opens a [Z shell](https://zsh.sourceforge.net/). |
| **TrueNAS CLI** | Opens **Shell** in the CLI. Eliminates the need to enter `cli` at the Shell system prompt to enter the TrueNAS CLI. Enter `ls` to see the list of namespaces. |
| **TrueNAS Console** | Opens **Shell** in the Console Setup menu. Eliminates the need to enter `menu`. This option provides the user access to the Linux and TrueNAS CLI shells. |
{{< /truetable >}}
{{< /expand >}}

{{<include file="/static/includes/addcolumnorganizer.md">}}
