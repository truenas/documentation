---
title: "Local Groups Screens"
description: "This article provides information on group settings and screens."
weight: 20
aliases:
tags:
 - scalegroups
---

{{< toc >}}

The **Credentials > Groups** screen displays a list of groups configured on the screen. By default built-in groups are hidden until you make them visible. 


![LocalGroupsSCALE](/images/SCALE/22.02/LocalGroupsSCALE.png "Local Groups Built-in Accounts") 

To see built-in groups, click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> **Toggle Built-In Groups** icon to open the **Show Built-In Groups** dialog. Click **Show**.
To hide the built-in groups, click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> **Toggle Built-In Groups** icon again to open the **Hide Built-in Groups** dialog. click **Hide**.

The **Credentials > Groups** screen displays the **No groups** screen if no groups other than built-in groups are configured on the system.

![LocalGroupsNoGroups](/images/SCALE/22.02/LocalGroupsNoGroups.png "Local Groups No Groups") 

**Add** or **Add Groups** opens the **[Add Group](#add-group-screen)** configuration screen.

## Groups Details Screen

The expanded view of each group includes details on that group and provides the option to edit members. Click the <span class="material-icons">expand_more</span> arrow to show the group details screen.

![LocalGroupDetailsSCALE](/images/SCALE/22.02/LocalGroupDetailsSCALE.png "Local Group Details") 

**Members** opens the **[Update Members](#update-members-screen)** screen. **Delete** opens a delete confirmation dialog.

## Add Group Screen

The **Add User** and **Edit User** configuration screens display the same setting options. 
Built-in users (except the **root** user) do not include the **Home Directory Permissions** settings, but all new users created, such as those for an SMB share like the **smbguest** user do.

![AddGroupSCALE](/images/SCALE/22.02/AddGroupSCALE.png "Add Group") 

| Setting | Description |
|---------|-------------|
| **GID** | Required. Enter a unique number for the group ID (**GID**) TrueNAS uses to identify a Unix group. Enter a number above 1000 for a group with user accounts (you cannot change the GID later). If a system service uses a group, the group ID must match the default port number for the service. |
| **Name** | Required. Enter a name for the group. The group name cannot begin with a hyphen (-) or contain a space, tab, or any of these characters: colon (:), plus (+), ampersand (&), hash (#), percent (%), carat (^), open or close parentheses ( ), exclamation mark (!), at symbol (@), tilde (~), asterisk (*), question mark (?) greater or less than (<) (>), equal ). You can only use the dollar sign ($) as the last character in a user name. |
| **Permit Sudo** | Select to give this group administrator permissions and the ability to use [sudo](https://www.sudo.ws/). When using sudo, a group is prompted for their account password. Leave **Permit Sudo** checkbox clear for better security. |
| **Samba Authentication** | Select to allow Samba permissions and authentication to use this group. |
| **Allow Duplicate GIDs** | Not recommended. Select to allow more than one group to have the same group ID. |

## Update Members Screen 

Use the **Update Members** screen to manage group permissions and access for large numbers of user accounts. 

![LocalGroupsUpdateMembersSCALE](/images/SCALE/22.02/LocalGroupsUpdateMembersSCALE.png "Update Members Screen") 

To add user accounts to the group, select users and then click <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.
Select **All Users** to move all users to the selected group, or select multiple users by holding <kbd>Ctrl</kbd> while clicking each entry.

{{< taglist tag="scalegroups" limit="10" >}}