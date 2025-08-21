---
title: "Managing Groups"
description: "Provides instructions on adding and managing groups."
weight: 20
aliases: /scale/scaleuireference/credentials/localgroups/
tags:
 - groups
keywords:
- enterprise storage solution
- nas storage 
---

TrueNAS offers groups as an efficient way to manage permissions for many similar user accounts.
See [Users]({{< ref "ManageLocalUsersSCALE" >}}) for managing users.
The interface lets you manage UNIX-style groups.
If the network uses a directory service, import the existing account information using the instructions in [Active Directory]({{< ref "/SCALEUIReference/Credentials/DirectoryServices" >}}).

{{< include file="archive/24.04PrivilegesWIP.md" >}}

## View Existing Groups

To see saved groups, go to **Credentials > Groups**.

{{< trueimage src="/images/SCALE/Credentials/GroupsListedSCALE.png" alt="Groups Screen" id="Groups Screen" >}}

By default, TrueNAS hides the built-in groups in the system.
To see built-in groups, click the **Show Built-In Groups** toggle. The toggle turns blue and shows all built-in groups.
Click the **Show Built-In Groups** toggle again to show only non-built-in groups on the system.

## Adding a New Group

To create a group, go to **Credentials > Groups** and click **Add**.

{{< trueimage src="/images/SCALE/Credentials/AddGroupScreen.png" alt="Add Group Screen" id="Add Group Screen" >}}

Enter a unique number for the group ID in **GID**. TrueNAS uses this to identify a Unix group.
Enter a number above 3000 for a group with user accounts or enter the default port number as the GID for a system service.

Enter a name for the group.
The group name cannot begin with a hyphen (-) or contain a space, tab, or any of these characters: colon (:), plus (+), ampersand (&), hash (#), percent (%), carat (^), open or close parentheses ( ), exclamation mark (!), at symbol (@), tilde (~), asterisk (*), question mark (?) greater or less than (<) (>), equal (=). The dollar sign ($) can be the last character in a group name. 

Group names must also align with the [Portable Filename Character Set](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_282) defined by *The Open Group*.

{{< include file="/static/includes/AdminSudo.md" >}}

To allow Samba permissions and authentication to use this group, select **SMB Group**.
{{< hint type=info >}}
Using the same group ID (GID) is not permitted as it can create confusion. The operating system treats it as the same group, even if a different name is assigned.
{{< /hint >}}

Select **SMB Group** to make this group available for permissions editors over SMB protocol, and add the share ACL editor.
This is not used for SMB authentication or when determining the user session token or internal permissions checks.

Click **Save**.

## Managing Groups

Click anywhere on a row to expand that group and show the group management buttons.

{{< trueimage src="/images/SCALE/Credentials/GroupsListedExpandedSCALE.png" alt="Expanded Group Screen" id="Expanded Group Screen" >}}

Use [**Members**](#update-members) to manage membership and [**Edit**](#edit-group) or **Delete** to manage the group.

### Update Members

To manage group membership, go to **Credentials > Groups**, click on the group entry to expand it, then click **Members** to open the **Update Members** screen.

{{< trueimage src="/images/SCALE/Credentials/GroupsManageMembersSCALE.png" alt="Update Members Screen" id="Update Members Screen" >}}

To add a user account to the group, select the user and then click the right arrow <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.

To remove a user account from the group, select the user and then click the left arrow <i class="fa fa-arrow-left" aria-hidden="true" title="Left Arrow"></i>.

To select multiple users, press <kbd>Ctrl</kbd> and click on each entry.

Click **Save**.

### Edit Group

To edit an existing group, go to **Credentials > Groups**, expand the group entry, and click <i class="material-icons" aria-hidden="true" title="Edit">edit</i> **Edit** to open the **Edit Group** configuration screen. See [Groups Screens]({{< ref "LocalGroupsScreens" >}}) for details on all settings.

## Managing Privileges

{{< hint type=warning >}}
Never modify the settings for the standard pre-defined privileges (listed below)! Changing these pre-defined roles can result in lost access to the UI!

Pre-defined TrueNAS privileges are:
* **Read-Only Administrator** - Allows the user to view settings but not make changes in the UI.
* **Sharing Administrator** - Allows the user to create new shares and the share dataset.
* **Local Administrator** - Gives full control (read/write/execute permissions) to the user.
{{< /hint >}}

Active Directory can provision groups in TrueNAS or you can add new groups that you assign to users in AD.
After adding a group, verify or edit the privilege(s) granted to the users in the group.

### Adding a Privilege

{{< include file="/static/includes/AddPrivilege.md" >}}
