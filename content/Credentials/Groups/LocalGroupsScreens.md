---
title: "Groups Screens"
description: "Provides information on the Groups screens and settings."
weight: 50
tags:
 - groups
doctype: reference
---


## Groups Screen

The **Credentials > Groups** screen displays a list of groups configured on the screen. By default, built-in groups are hidden until you make them visible.

{{< trueimage src="/images/SCALE/Credentials/GroupsListedSCALE.png" alt="Groups Screen" id="Groups Screen" >}}

When enabled, the **Show Built-In Groups** toggle turns blue and shows built-in groups. When disabled, the toggle turns grey and shows only non-built-in groups.

The **Credentials > Groups** screen displays the **No groups** screen if no groups other than built-in groups are configured on the system.

**Add** opens the **[Add Group](#add-group-screen)** configuration screen.

**Privileges** opens the [**Privileges** screen](#privileges-screen)

Clicking on the <span class="material-icons">expand_more</span> arrow or anywhere on a group row expands it to show the group management buttons.

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
| **GID** | (Required) Assigns the entered unique number as the group ID (**GID**) TrueNAS uses to identify a Unix group. Enter a number above 1000 for a group with user accounts. If a system service uses the group, the group ID must match the default port number for the service.<br> Shows the group ID assigned at the time the group is created on the **Edit Group** screen but cannot be changed. |
| **Name** | (Required) Assigns the entered name to the group. A group name cannot begin with a hyphen (-) or contain a space, tab, or any of these characters: colon (:), plus (+), ampersand (&), hash (#), percent (%), carat (^), open or close parentheses ( ), exclamation mark (!), at symbol (@), tilde (~), asterisk (\*), question mark (?), greater or less than (<) (>), equal (=). You can only use the dollar sign ($) as the last character in a group name. Group names must also align with the [Portable Filename Character Set](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282) defined by *The Open Group*. |
| **Privileges** | Attaches a role privilege to the group as assigned and configured on the Add or **Edit Privileges** screens. <br>Using custom administrator roles aside from the defaults is an experimental feature and is not supported.<br>Do not modify the local administrator or default admin user privileges! Only use if you need users in this group to access limited areas of the TrueNAS UI or authentication for TrueNAS API calls. |
| **Allowed sudo commands** | Permits the group members to enter the specific [sudo](https://www.sudo.ws/) commands in this field. Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. <br> Grants limited root-like permissions for group members when using these commands. Using sudo prompts the user for their account password. |
| **Allow all sudo commands** | Enable to give group members permission to use all [sudo](https://www.sudo.ws/) commands. Using sudo prompts the user for their account password. |
| **Allowed sudo commands with no password** | Permits group memebers to enter the specific allowed [sudo](https://www.sudo.ws/) commands entered in this field without requiring the user to enter their password. Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. <br> Grants limited root-like permissions for group members when using these commands. Exercise caution when allowing sudo commands without password prompts. Recommended to limit the privilege to trusted users and specific commands to minimize security risks. |
| **Allow all sudo commands with no password** | Not recommended. Enable to give group members the ability to enter all [sudo](https://www.sudo.ws/) commands without needing to enter a password. Does not require specifying allowed commands. |
| **SMB Group** | Select to make the group available for permissions editors over [SMB protocol]({{< ref "/Shares" >}}) (and the share ACL editor). Not used for SMB authentication or determining the user session token or internal permissions checks. |
{{< /truetable >}}

## Update Members Screen

The **Update Members** screen manages group permissions and access for large numbers of user accounts.

{{< trueimage src="/images/SCALE/Credentials/GroupsManageMembersSCALE.png" alt="Update Members Screen" id="Update Members Screen" >}}

The right arrow <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> adds a user account to the group after selecting the user.
The left arrow <i class="fa fa-arrow-left" aria-hidden="true" title="Left Arrow"></i> removes the selected user account from the group.
Hold <kbd>Ctrl</kbd> while clicking each entry to select multiple groups.

{{< include file="/static/includes/addcolumnorganizer.md" >}}
