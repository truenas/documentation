---
title: "Local Groups Screens"
description: "Provides information on the Local Groups screens and settings."
weight: 20
aliases:
tags:
 - scalegroups
---

{{< toc >}}

## Groups Screen

The **Credentials > Local Groups** screen displays a list of groups configured on the screen. By default, built-in groups are hidden until you make them visible. 

{{< trueimage src="/images/SCALE/23.10/GroupsListedSCALE.png" alt="Local Groups Screen" id="1: Local Groups Screen" >}}

To see built-in groups, click the **Show Built-In Groups** toggle. The toggle turns blue and all built-in groups display. Click the **Show Built-In Groups** toggle again to show only non-built-in groups on the system.

The **Credentials > Local Groups** screen displays the **No groups** screen if no groups other than built-in groups are configured on the system.

**Add** opens the **[Add Group](#add-group-screen)** configuration screen.

Click the <span class="material-icons">expand_more</span> arrow or anywhere on a row to expand that group and show the group management buttons.

{{< trueimage src="/images/SCALE/23.10/GroupsListedExpandedSCALE.png" alt="Expanded Group Screen" id="2: Expanded Group Screen" >}}

Use these buttons to add or remove group <i class="material-icons" aria-hidden="true" title="Members">group</i> [**Members**](#update-members-screen), <i class="material-icons" aria-hidden="true" title="Edit">edit</i> [**Edit**](#edit-group-screen) group configuration, or <i class="material-icons" aria-hidden="true" title="Delete">delete</i> **Delete** the group.

## Add Group Screen

Click **Add** in the upper right corner of the **Groups** screen to display the **Add Group** configuration screen.

{{< trueimage src="/images/SCALE/23.10/AddGroupGIDConfigSCALE.png" alt="Add Group Screen" id="3: Add Group Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **GID** | Required. Enter a unique number for the group ID (**GID**) TrueNAS uses to identify a Unix group. Enter a number above 1000 for a group with user accounts (you cannot change the GID later). If a system service uses a group, the group ID must match the default port number for the service. |
| **Name** | Required. Enter a name for the group. The group name cannot begin with a hyphen (-) or contain a space, tab, or any of these characters: colon (:), plus (+), ampersand (&), hash (#), percent (%), carat (^), open or close parentheses ( ), exclamation mark (!), at symbol (@), tilde (~), asterisk (*), question mark (?) greater or less than (<) (>), equal (=). You can only use the dollar sign ($) as the last character in a user name. |
| **Allowed sudo commands** | Enter the executable path(s) to specific [sudo](https://www.sudo.ws/) commands allowed for members of this group. `/usr/bin/` is the default location for command executables. <br> Grants administrator permissions for group members when using these commands. When using sudo, a user is prompted for their account password. |
| **Allow all sudo commands** | Select to give group members permission to use all [sudo](https://www.sudo.ws/) commands. When using sudo, a user is prompted for their account password. |
| **Allowed sudo commands with no password** | Enter the executable path(s) to specific [sudo](https://www.sudo.ws/) commands allowed for group members with no password required. `/usr/bin/` is the default location for command executables. <br> Grants administrator permissions for group members when using these commands. Exercise caution when allowing sudo commands without password prompts. It is recommended to limit this privilege to trusted users and specific commands to minimize security risks. |
| **Allow all sudo commands with no password** | Not recommended. Select to give this group member administrator permissions and the ability to use all [sudo](https://www.sudo.ws/) commands with no password required. |
| **Samba Authentication** | Select to allow this group to authenticate to and access data shares with [SMB]({{< relref "/SCALE/SCALETutorials/Shares/SMB/AddSMBShares.md" >}}) samba shares. |
| **Allow Duplicate GIDs** | Not recommended. Select to allow more than one group to have the same group ID. Use only if absolutely necessary, as duplicate GIDs can lead to unexpected behavior. |
{{< /truetable >}}

## Edit Group Screen

**Click** the **Edit** button on an expanded group in the **Groups** screen to open the **Edit Group** screen.

{{< trueimage src="/images/SCALE/23.10/EditGroup.png" alt="Edit Group Screen" id="4: Edit Group Screen" >}}

**Edit Group** has the same fields and checkboxes as [**Add Group**](#add-group-screen), except that it does not include **Allow Duplicate GIDs**.

## Update Members Screen

Use the **Update Members** screen to manage group permissions and access for large numbers of user accounts.

{{< trueimage src="/images/SCALE/23.10/GroupsManageMembersSCALE.png" alt="Update Members Screen" id="5: Update Members Screen" >}}

To add user accounts to the group, select users and then click the right arrow <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.
To remove user accounts from the group, select users and then click the left arrow <i class="fa fa-arrow-left" aria-hidden="true" title="Left Arrow"></i>.
Select multiple users by holding <kbd>Ctrl</kbd> while clicking each entry.

Click **Save**.

{{< taglist tag="scalegroups" limit="10" >}}
