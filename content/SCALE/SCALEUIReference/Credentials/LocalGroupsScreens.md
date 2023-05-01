---
title: "Local Groups Screens"
description: "This article provides information on group settings and screens."
weight: 20
aliases:
tags:
 - scalegroups
---

{{< toc >}}

The **Credentials > Local Groups** screen displays a list of groups configured on the screen. By default, built-in groups are hidden until you make them visible. 


![GroupsListedSCALE](/images/SCALE/22.12/GroupsListedSCALE.png "Local Groups Hide Built-in Accounts") 

To see built-in groups, click the **Show Built-In Groups** toggle. The toggle turns blue and all built-in groups display. Click the **Show Built-In Groups** toggle again to show only non-built-in groups on the system.

The **Credentials > Local Groups** screen displays the **No groups** screen if no groups other than built-in groups are configured on the system.

**Add** or **Add Groups** opens the **[Add Group](#add-group-screen)** configuration screen.

## Groups Details Screen

The expanded view of each group includes details on that group and provides the option to edit members. Click the <span class="material-icons">expand_more</span> arrow to show the group details screen.

![GroupsListedExpandedSCALE](/images/SCALE/22.12/GroupsListedExpandedSCALE.png "Local Group Details") 

**Members** opens the **[Update Members](#update-members-screen)** screen. **Delete** opens a delete confirmation dialog.

## Add Group Screen

The **Add User** and **Edit User** configuration screens display the same setting options. 
Built-in users (except the **root** user) do not include the **Home Directory Permissions** settings, but all new users created, such as those for an SMB share like the **smbguest** user do.

![AddGroupGIDConfigSCALE](/images/SCALE/22.12/AddGroupGIDConfigSCALE.png "Add Group") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **GID** | Required. Enter a unique number for the group ID (**GID**) TrueNAS uses to identify a Unix group. Enter a number above 1000 for a group with user accounts (you cannot change the GID later). If a system service uses a group, the group ID must match the default port number for the service. |
| **Name** | Required. Enter a name for the group. The group name cannot begin with a hyphen (-) or contain a space, tab, or any of these characters: colon (:), plus (+), ampersand (&), hash (#), percent (%), carat (^), open or close parentheses ( ), exclamation mark (!), at symbol (@), tilde (~), asterisk (*), question mark (?) greater or less than (<) (>), equal (=). You can only use the dollar sign ($) as the last character in a user name. |
| **Allowed sudo commands** | Enter specific [sudo](https://www.sudo.ws/) commands allowed for this group member, grants administrator permissions for this group member when using these commands. When using sudo, a group member is prompted for their account password. |
| **Allow all sudo commands** | Select to give this group member administrator permissions and the ability to use all [sudo](https://www.sudo.ws/) commands. When using sudo, a group member is prompted for their account password. | 
| **Allowed sudo commands with no password** | Enter specific [sudo](https://www.sudo.ws/) commands allowed with no password required for this group member, grants administrator permissions for this group member when using these commands. |
| **Allow all sudo commands with no password** | Select to give this group member administrator permissions and the ability to use all [sudo](https://www.sudo.ws/) commands with no password required. |
| **Samba Authentication** | Select to allow this group to authenticate to and access data shares with [SMB]({{< relref "/SCALE/SCALETutorials/Shares/SMB/AddSMBShares.md" >}}) samba shares. |
| **Allow Duplicate GIDs** | Not recommended. Select to allow more than one group to have the same group ID. |
{{< /truetable >}}

## Update Members Screen 

Use the **Update Members** screen to manage group permissions and access for large numbers of user accounts. 

![GroupsManageMembersSCALE](/images/SCALE/22.12/GroupsManageMembersSCALE.png "Update Members Screen") 

To add user accounts to the group, select users and then click <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.
Select **All Users** to move all users to the selected group, or select multiple users by holding <kbd>Ctrl</kbd> while clicking each entry.

{{< taglist tag="scalegroups" limit="10" >}}