---
title: "Managing Local Groups"
description: "This article provides instructions to manage local groups."
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

![LocalGroupsSCALE](/images/SCALE/22.02/LocalGroupsSCALE.png "Local Groups Built-In List")

By default, TruNAS hides the system built-in groups.
To see built-in groups, click <i class="material-icons" aria-hidden="true" title="Settings">settings</i> **Toggle Built-In Groups** icon. The **Show Built-In Groups** dialog opens. Click **Show**. 
Click <i class="material-icons" aria-hidden="true" title="Settings">settings</i> **Toggle Built-In Groups** icon again to open the **Hide Built-In Groups** dialog. Click **Hide** to show only non-built-in groups on the system.

## Adding a New Group

To create a group, go to **Credentials > Local Groups** and click **Add**.

![AddGroupSCALE](/images/SCALE/22.02/AddGroupSCALE.png "Add Group") 

Enter a unique number for the group ID in **GID**) that TrueNAS uses to identify a Unix group. Enter a number above 1000 for a group with user accounts or for a system service enter the default port number for the service as the GID.  Enter a name for the group. The group name cannot begin with a hyphen (-) or contain a space, tab, or any of these characters: colon (:), plus (+), ampersand (&), hash (#), percent (%), carat (^), open or close parentheses ( ), exclamation mark (!), at symbol (@), tilde (~), asterisk (*), question mark (?) greater or less than (<) (>), equal ). You can only use the dollar sign ($) as the last character in a user name.

If giving this group administration permissions, select **Permit Sudo**.

To allow Samba permissions and authentication to use this group, select **Samba Authentication**.

To allow more than one group to have the same group ID (not recommended), select **Allow Duplicate GIDs**.

## Managing Group Members

To manage group membership, go to **Credentials > Local Groups**, expand the group entry, and click **Members** to open the **Update Members** screen.

![LocalGroupsUpdateMembersSCALE](/images/SCALE/22.02/LocalGroupsUpdateMembersSCALE.png "Update Members Screen") 

To add user accounts to the group, select users and then click <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.
Select **All Users** to move all users to the selected group, or select multiple users by holding <kbd>Ctrl</kbd> while clicking each entry.

{{< taglist tag="scalegroups" limit="10" >}}