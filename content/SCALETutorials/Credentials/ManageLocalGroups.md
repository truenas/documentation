---
title: "Managing Local Groups"
description: "Provides instructions to manage local groups."
weight: 20
tags:
 - groups
---

TrueNAS offers groups as an efficient way to manage permissions for many similar user accounts.
See [Users]({{< ref "ManageLocalUsersSCALE" >}}) for managing users.
The interface lets you manage UNIX-style groups.
If the network uses a directory service, import the existing account information using the instructions in [Active Directory]({{< ref "/SCALEUIReference/Credentials/DirectoryServices/" >}}).

{{< include file="/static/includes/24.04PrivilegesWIP.md" >}}

## View Existing Groups

To see saved groups, go to **Credentials > Local Groups**.

{{< trueimage src="/images/SCALE/Credentials/GroupsListedSCALE.png" alt="Local Groups Screen" id="Local Groups Screen" >}}

By default, TrueNAS hides the system built-in groups.
To see built-in groups, click the **Show Built-In Groups** toggle. The toggle turns blue and all built-in groups display. Click the **Show Built-In Groups** toggle again to show only non-built-in groups on the system.

## Adding a New Group

To create a group, go to **Credentials > Local Groups** and click **Add**.

{{< trueimage src="/images/SCALE/Credentials/AddGroupGIDConfigSCALE.png" alt="Add Group Screen" id="Add Group Screen" >}}

Enter a unique number for the group ID in **GID** that TrueNAS uses to identify a Unix group.
Enter a number above 3000 for a group with user accounts or enter the default port number as the GID for a system service.

Enter a name for the group.
The group name cannot begin with a hyphen (-) or contain a space, tab, or any of these characters: colon (:), plus (+), ampersand (&), hash (#), percent (%), carat (^), open or close parentheses ( ), exclamation mark (!), at symbol (@), tilde (~), asterisk (*), question mark (?) greater or less than (<) (>), equal (=).
You can only use the dollar sign ($) as the last character in a group name.

**Allowed sudo commands**, **Allow all sudo commands**, **Allowed sudo commands with no password** and **Allow all sudo commands with no password** grant members of the group limited root-like permissions using the [sudo](https://www.sudo.ws/) command.
Use **Allowed sudo commands** or **Allowed sudo commands with no password** to list specific sudo commands allowed for group members.
Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example */usr/bin/nano*.
<file>/usr/bin/</file> is the default location for commands.
Or click **Allow all sudo commands** or **Allow all sudo commands with no password**.

Exercise caution when allowing sudo commands, especially without password prompts.
We recommend limiting this privilege to trusted users and specific commands to minimize security risks.

To allow Samba permissions and authentication to use this group, select **Samba Authentication**.

To allow more than one group to have the same group ID (not recommended), select **Allow Duplicate GIDs**.
Use only if absolutely necessary, as duplicate GIDs can lead to unexpected behavior.

## Managing Groups

Click anywhere on a row to expand that group and show the group management buttons.

{{< trueimage src="/images/SCALE/Credentials/GroupsListedExpandedSCALE.png" alt="Expanded Group Screen" id="Expanded Group Screen" >}}

Use [**Members**](#update-members) to manage membership and [**Edit**](#edit-group) or **Delete** to manage the group.

### Update Members

To manage group membership, go to **Credentials > Local Groups**, expand the group entry, and click **Members** to open the **Update Members** screen.

{{< trueimage src="/images/SCALE/Credentials/GroupsManageMembersSCALE.png" alt="Update Members Screen" id="Update Members Screen" >}}

To add a user account to the group, select the user and then click the right arrow <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.

To remove a user account from the group, select the user and then click the left arrow <i class="fa fa-arrow-left" aria-hidden="true" title="Left Arrow"></i>.

To select multiple users, press <kbd>Ctrl</kbd> and click on each entry.

Click **Save**.

### Edit Group

To edit an existing group, go to **Credentials > Local Groups**, expand the group entry, and click <i class="material-icons" aria-hidden="true" title="Edit">edit</i> **Edit** to open the **Edit Group** configuration screen. See [Local Group Screens]({{< ref "LocalGroupsScreens" >}}) for details on all settings.
