---
title: "Groups Screens"
description: "Provides information on the Groups screens and settings."
weight: 20
aliases:
 - /scale/scaleclireference/account/cligroup/
 - /scale/scaleclireference/auth/cliprivilege/
tags:
 - groups
---

## Groups Screen

The **Credentials > Groups** screen displays a list of groups configured on the screen. By default, built-in groups are hidden until you make them visible.

{{< trueimage src="/images/SCALE/Credentials/GroupsListedSCALE.png" alt="Groups Screen" id="Groups Screen" >}}

To see built-in groups, click the **Show Built-In Groups** toggle.
The toggle turns blue and all built-in groups display. Click the **Show Built-In Groups** toggle again to show only non-built-in groups on the system.

The **Credentials > Groups** screen displays the **No groups** screen if no groups other than built-in groups are configured on the system.

**Add** opens the **[Add Group](#add-group-screen)** configuration screen.

**Privileges** opens the [**Privileges** screen](#privileges-screen)

Click the <span class="material-icons">expand_more</span> arrow or anywhere on a row to expand that group and show the group management buttons.

{{< trueimage src="/images/SCALE/Credentials/GroupsListedExpandedSCALE.png" alt="Expanded Group Screen" id="Expanded Group Screen" >}}

{{< include file="archive/24.04PrivilegesWIP.md" >}}

Use [**Members**](#update-members) to manage membership and [**Edit**](#edit-group) or **Delete** to manage the group.

## Add and Edit Group Screens

The **Add Group** and **Edit Group** screens show the same settings but the GID is not editable after saving changes on the **Add Group** screen.
**Add** opens the **Add Group** configuration screen.
The <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg> **Edit** icon opens the **Edit Group** screen.

{{< trueimage src="/images/SCALE/Credentials/AddGroupScreen.png" alt="Add Group Screen" id="Add Group Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **GID** | (Required) Enter a unique number for the group ID (**GID**) TrueNAS uses to identify a Unix group. Enter a number above 1000 for a group with user accounts. If a system service uses the group, the group ID must match the default port number for the service.<br> Shows the group ID assigned at the time the group is created on the **Edit Group** screen but cannot be changed. |
| **Name** | (Required) Enter a name for the group. The group name cannot begin with a hyphen (-) or contain a space, tab, or any of these characters: colon (:), plus (+), ampersand (&), hash (#), percent (%), carat (^), open or close parentheses ( ), exclamation mark (!), at symbol (@), tilde (~), asterisk (*), question mark (?) greater or less than (<) (>), equal (=). You can only use the dollar sign ($) as the last character in a group or user name. |
| **Privileges** | Attaches defined role privileges to the group as configured on the Add or Edit Privileges screens. Using custom administrator roles aside from the defaults is an **experimental** feature and is not supported. Do not modify the local administrator or default admin user privileges! Only use if you need users in this group to access limited areas of the TrueNAS UI or authentication for TrueNAS API calls. |
| **Allowed sudo commands** | Enter specific [sudo](https://www.sudo.ws/) commands group members are allowed to enter. Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. <br> Grants limited root-like permissions for group members when using these commands. Using sudo prompts the user for their account password. |
| **Allow all sudo commands** | Select to give group members permission to use all [sudo](https://www.sudo.ws/) commands. Using sudo prompts the user for their account password. |
| **Allowed sudo commands with no password** | Enter specific allowed [sudo](https://www.sudo.ws/) commands users in the group members can enter without needing to enter their password. Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. <br> Grants limited root-like permissions for group members when using these commands. Exercise caution when allowing sudo commands without password prompts. Recommended to limit the privilege to trusted users and specific commands to minimize security risks. |
| **Allow all sudo commands with no password** | Not recommended. Select to give group members the ability to enter all [sudo](https://www.sudo.ws/) commands without needing to enter a password. |
| **SMB Group** | Select to make the group available for permissions editors over [SMB protocol]({{< relref "/SCALE/SCALETutorials/Shares/_index.md" >}}) (and the share ACL editor). Not used for SMB authentication or determining the user session token or internal permissions checks. |
{{< /truetable >}}

## Update Members Screen

Use the **Update Members** screen to manage group permissions and access for large numbers of user accounts.

{{< trueimage src="/images/SCALE/Credentials/GroupsManageMembersSCALE.png" alt="Update Members Screen" id="Update Members Screen" >}}

The right arrow <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> adds a user account to the group after selecting the user.
The left arrow <i class="fa fa-arrow-left" aria-hidden="true" title="Left Arrow"></i> removes the selected user account from the group.
Hold <kbd>Ctrl</kbd> while clicking each entry to select multiple groups.

## Privileges Screen

{{< hint type="warning" title="Experimental Feature" >}}
The **Privileges** feature is an early-release experimental feature.
The **Privileges** screens show the default administrator groups and roles and define customized groupings of roles for different local or directory service-imported account groups.

The TrueNAS UI shows the **Readonly Admin**, **Sharing Admin**.

Do not edit the existing predefined administrator roles!
Editing the unrestricted administrator account privilege can result in lost access to the system!
{{< /hint >}}

{{< trueimage src="/images/SCALE/Credentials/PrivilegesScreen.png" alt="Privileges Screen" id="Privileges Screen" >}}

### Add and Edit Privilege Screens

**Add** opens the **New Privilege** screen.
The <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg> **Edit** icon opens the **Edit Privilege** screen.
The new and edit privilege screens show the same settings but not all settings are editable.

{{< trueimage src="/images/SCALE/Credentials/AddNewPrivilegeScreen.png" alt="New Privilege Screen" id="New Privilege Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Enter a name for the new privilege. Names can include the dash (-) or underscore(_) special characters, and upper and lowercase alphanumeric characters. Enter a descriptive name for the privilege. **Name** shows on the **Edit Privilege** screen but is not editable. |
| **Groups** | Shows a list of groups configured on the system to select from a dropdown list after clicking in the field. Select the group(s) to apply the privilege to. Do not add the predefined administrator or builtin groups! Only select new user groups created if you experiment with this function. |
| **Directory Services Groups** | Shows a list of available groups to select after clicking in the field. Applies the privilege to selected groups. |
| **Roles** |Select from a dropdown list of all available roles available to assign to the new privilege, or change in an existing privilege. |
| **Web Shell Access** | Select to allow a user to assign the new privilege access to the **System > Shell** screen. |
{{< /truetable >}}

Assigned administrator roles show on the [Users Screen]({{< relref "LocalUsersScreensSCALE.md" >}}).

{{< include file="/static/includes/addcolumnorganizer.md" >}}
