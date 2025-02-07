---
title: "Groups Screens"
description: "Provides information on the Groups screens and settings."
weight: 20
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

## Add Group Screen

Click **Add** to open the **Add Group** configuration screen.

{{< trueimage src="/images/SCALE/Credentials/AddGroupScreen.png" alt="Add Group Screen" id="Add Group Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **GID** | Required. Enter a unique number for the group ID (**GID**) TrueNAS uses to identify a Unix group. Enter a number above 1000 for a group with user accounts (you cannot change the GID later). If a system service uses a group, the group ID must match the default port number for the service. |
| **Name** | Required. Enter a name for the group. The group name cannot begin with a hyphen (-) or contain a space, tab, or any of these characters: colon (:), plus (+), ampersand (&), hash (#), percent (%), carat (^), open or close parentheses ( ), exclamation mark (!), at symbol (@), tilde (~), asterisk (*), question mark (?) greater or less than (<) (>), equal (=). You can only use the dollar sign ($) as the last character in a user name. |
| **Privileges** | Attaches administrator role privileges to the group. Using custom administrator roles aside from the defaults is an **experimental** feature and is not supported. Do not modify the local administrator or default admin user privileges! Only use if you need users in this group to access limited areas of the web UI or authentication for TrueNAS API calls. |
| **Allowed sudo commands** | Use to list specific [sudo](https://www.sudo.ws/) commands allowed for group members. Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. <br> Grants limited root-like permissions for group members when using these commands. Using sudo prompts the user for their account password. |
| **Allow all sudo commands** | Select to give group members permission to use all [sudo](https://www.sudo.ws/) commands. Using sudo prompts the user for their account password. |
| **Allowed sudo commands with no password** | Use to list specific [sudo](https://www.sudo.ws/) commands allowed for group members with no password required. Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example */usr/bin/nano*. <file>/usr/bin/</file> is the default location for commands. <br> Grants limited root-like permissions for group members when using these commands. Exercise caution when allowing sudo commands without password prompts. It is recommended to limit this privilege to trusted users and specific commands to minimize security risks. |
| **Allow all sudo commands with no password** | Not recommended. Select to give group members the ability to use all [sudo](https://www.sudo.ws/) commands with no password required. |
| **SMB Group** | Select to make this group available for permissions editors over [SMB protocol]({{< relref "/SCALETutorials/Shares/_index.md" >}}) (and the share ACL editor). It is not used for SMB authentication or determining the user session token or internal permissions checks. |
| **Allow Duplicate GIDs** | Not recommended. Select to allow more than one group to have the same group ID. Use only if absolutely necessary, as duplicate GIDs can lead to unexpected behavior. |
{{< /truetable >}}

## Edit Group Screen

Click **Edit** on an expanded group in the **Groups** screen to open the **Edit Group** screen.

{{< trueimage src="/images/SCALE/Credentials/EditGroup.png" alt="Edit Group Screen" id="Edit Group Screen" >}}

**Edit Group** has the same fields and checkboxes as [**Add Group**](#add-group-screen), except that it does not include **Allow Duplicate GIDs**.

## Update Members Screen

Use the **Update Members** screen to manage group permissions and access for large numbers of user accounts.

{{< trueimage src="/images/SCALE/Credentials/GroupsManageMembersSCALE.png" alt="Update Members Screen" id="Update Members Screen" >}}

To add user accounts to the group, select users and then click the right arrow <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.
To remove user accounts from the group, select users and then click the left arrow <i class="fa fa-arrow-left" aria-hidden="true" title="Left Arrow"></i>.
Select multiple users by holding <kbd>Ctrl</kbd> while clicking each entry.

Click **Save**.

## Privileges Screen

{{< hint type="warning" title="Experimental Feature" >}}
The **Privileges** feature is an early release experimental feature.
Use the **Privileges** screens to view default administrator groups and roles, or define customized groupings of roles for different local or Directory Service-imported account groups.

Only the **Readonly Admin**, **Sharing Admin**, and **Full Admin** roles are supported in the Web UI.
Users can experiment with defining a new privilege but should **NOT** edit the existing predefined administrator roles!
Editing the unrestricted administrator account privilege can result in lost access to the system!

{{< /hint >}}

{{< trueimage src="/images/SCALE/Credentials/PrivilegesScreen.png" alt="Privileges Screen" id="Privileges Screen" >}}

**Add** opens the **New Privilege** screen.

{{< trueimage src="/images/SCALE/Credentials/AddNewPrivilegeScreen.png" alt="New Privilege Screen" id="New Privilege Screen" >}}

Click on a listed privilege to expand the row and show details on the privilege.
Edit opens the **Edit Privilege** screen.

The new and edit privilege screens show the same settings but not all settings are editable.

{{<include file="/static/includes/addcolumnorganizer.md">}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Enter a name for the new privilege. Names can include the dash (-) or underscore(_) special characters, and upper and lowercase alphanumeric characters. Enter a descriptive name for the privilege.  |
| **Groups** | Click in the field to see a dropdown list of available groups to apply the privilege to. Do not add the predefined administrator or builtin groups! Only select new user groups created if you experiment with this function. |
| **Directory Services Groups** | Click in the field to see a dropdown list of available groups to apply the privilege to. |
| **Roles** | Click in the field to see a dropdown list of all available roles available to assign to the new privilege. |
| **Web Shell Access** | Select to allow a user assign the new privilege access to the **System > Shell** screen.  |
{{< /truetable >}}

Assigned administrator roles display on the [Users Screen]({{< relref "LocalUsersScreensSCALE.md" >}}).
