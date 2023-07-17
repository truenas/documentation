---
title: "Managing Local Groups"
description: "Provides instructions to manage local groups."
weight: 20
aliases: /scale/scaleuireference/credentials/localgroups/
tags:
 - scalegroups
---

{{< toc >}}

TrueNAS offers groups as an efficient way to manage permissions for many similar user accounts.
See [Users]({{< relref "ManageLocalUsersSCALE.md" >}}) for managing users.
The interface lets you manage UNIX-style groups.
If the network uses a directory service, import the existing account information using the instructions in [Active Directory]({{< relref "/content/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}).

## View Existing Groups

To see saved groups, go to **Credentials > Local Groups**.

{{< trueimage src="/images/SCALE/23.10/GroupsListedSCALE.png" alt="Local Groups Screen" id="1: Local Groups Screen" >}}

By default, TruNAS hides the system built-in groups.
To see built-in groups, click the **Show Built-In Groups** toggle. The toggle turns blue and all built-in groups display. Click the **Show Built-In Groups** toggle again to show only non-built-in groups on the system.

## Adding a New Group

To create a group, go to **Credentials > Local Groups** and click **Add**.

{{< trueimage src="/images/SCALE/23.10/AddGroupGIDConfigSCALE.png" alt="Add Group Screen" id="2: Add Group Screen" >}}

Enter a unique number for the group ID in **GID** that TrueNAS uses to identify a Unix group.
Enter a number above 3000 for a group with user accounts or enter the default port number as the GID for a system service.

Enter a name for the group.
The group name cannot begin with a hyphen (-) or contain a space, tab, or any of these characters: colon (:), plus (+), ampersand (&), hash (#), percent (%), carat (^), open or close parentheses ( ), exclamation mark (!), at symbol (@), tilde (~), asterisk (*), question mark (?) greater or less than (<) (>), equal (=).
You can only use the dollar sign ($) as the last character in a group name.

**Allowed sudo commands**, **Allow all sudo commands**, **Allowed sudo commands with no password** and **Allow all sudo commands with no password** allow members of the group to act as root using the [sudo](https://www.sudo.ws/) command.
To allow sudo commands, use **Allowed sudo commands** or **Allowed sudo commands with no password** to list the executable path(s) to specific sudo commands allowed for group members.
<file>/usr/bin/</file> is the default location for command executables.
Alternately, click the checkbox for **Allow all sudo commands** or **Allow all sudo commands with no password**.

Exercise caution when allowing sudo commands, especially without password prompts.
It is recommended to limit this privilege to trusted users and specific commands to minimize security risks.

To allow Samba permissions and authentication to use this group, select **Samba Authentication**.

To allow more than one group to have the same group ID (not recommended), select **Allow Duplicate GIDs**.
Use only if absolutely necessary, as duplicate GIDs can lead to unexpected behavior.

## Managing Groups

Click the <span class="material-icons">expand_more</span> arrow or anywhere on a row to expand that group and show the group management buttons.

{{< trueimage src="/images/SCALE/23.10/GroupsListedExpandedSCALE.png" alt="Expanded Group Screen" id="3: Expanded Group Screen" >}}

Use these buttons to add or remove group <i class="material-icons" aria-hidden="true" title="Members">group</i> [**Members**](#update-members), <i class="material-icons" aria-hidden="true" title="Edit">edit</i> [**Edit**](#edit-group) group configuration, or <i class="material-icons" aria-hidden="true" title="Delete">delete</i> **Delete** the group.

### Update Members

To manage group membership, go to **Credentials > Local Groups**, expand the group entry, and click **Members** to open the **Update Members** screen.

{{< trueimage src="/images/SCALE/23.10/GroupsManageMembersSCALE.png" alt="Update Members Screen" id="4: Update Members Screen" >}}

To add user accounts to the group, select users and then click the right arrow <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.
To remove user accounts from the group, select users and then click the left arrow <i class="fa fa-arrow-left" aria-hidden="true" title="Left Arrow"></i>.
Select multiple users by holding <kbd>Ctrl</kbd> while clicking each entry.

Click **Save**.

### Edit Group

To edit an existing group, go to **Credentials > Local Groups**, expand the group entry, and click <i class="material-icons" aria-hidden="true" title="Edit">edit</i> **Edit** to open the **Edit Group** configuration screen. See [Local Group Screens]({{< relref "LocalGroupsScreens.md" >}}) for details on all settings.

{{< taglist tag="scalegroups" limit="10" >}}
