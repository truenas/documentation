---
title: "User and Group Quota Screens"
description: "Provides information on the settings and functions found on the User and Group Quota screens."
weight: 60
aliases:
 - /scale/scaleuireference/datasets/quotascreens/
 - /scale/scaleuireference/storage/datasets/quotascreens/
 - /scale/datasets/quotascreens/
tags: 
 - quotas
 - datasets
doctype: reference
---


TrueNAS allows setting data or object quotas for user accounts and groups cached on, or connected to the system.

## User Quotas Screen

**Manage User Quotas** on the **Dataset Space Management** card opens the **User Quotas** screen.
The **User Quotas** screen shows the names and quota data for user accounts cached on or connected to the system.
When no user quotas exist, the screen shows **No Search Results** and **No matching results found** in the center of the screen.

{{< trueimage src="/images/SCALE/Datasets/UserQuotasNoQuotas.png" alt="User Quotas Screen Without Quotas" id="User Quotas Screen Withoug Quotas" >}}

**Show All Users** shows the hidden builtin user quotas for the root and current logged-in admin user.

{{< trueimage src="/images/SCALE/Datasets/UserQuotaScreenWithBuiltinUsers.png" alt="User Quotas Showing Builtin Users" id="User Quotas Showing Builtin Users" >}}

**Add** opens the **[Add User Quotas](#add-user-quotas-screen)** screen.

The **Edit** icon for a user opens the **[Edit User Quota ](#edit-user-configuration-window)** screen.

### Show All Users Dialogs

The **Show All Users** toggle opens the **Show All Users** dialog.

{{< trueimage src="/images/SCALE/Datasets/ShowAllUsersDialog.png" alt="Show All Users Dialog" id="Show All Users Dialog" >}}

Clicking the **Show All Users** toggle again to hide builtin users, opens the **Filter Users** dialog.

{{< trueimage src="/images/SCALE/Datasets/FilterUsersDialog.png" alt="Filter Users Dialog" id="Filter Users Dialog" >}}

**Filter** hides the builtin users on the **Users Quotas** screen.

### Add User Quotas Screen

The **Add User Quotas** screen shows settings in two sections: **Set Quotas** and **Apply Quotas to Selected Users**.

{{< trueimage src="/images/SCALE/Datasets/AddUserQuotaScreen.png" alt="Add User Quotas" id="Add User Quotas" >}}

{{< expand "Set Quotas Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **User Data Quota (Examples: 500KiB, 500M, 2 TB)** | Specifies the amount of disk space the selected user can use. Entering **0** allows using all disk space. Values are entered as 50 GiB, 500M, 2 TB, etc. Not specifying a value defaults to bytes. |
| **User Object Quota** | Specfies the number of objects the selected user can own. Entering **0** allows unlimited objects. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Apply Quotas to Selected Users Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Apply To Users** | Sets the user from the dropdown list of options. |
{{< /truetable >}}
{{< /expand >}}

**Save** sets the quotas and closes the screen.
Clicking the **X** closes the screen without saving changes.

### Edit User Configuration Window

The **Edit User Quota** window allows you to modify the user data quota and user object quota values for an individual user.

{{< trueimage src="/images/SCALE/Datasets/EditUserQuotaScreen.png" alt="Edit User Quota" id="Edit User Quota" >}}

**Save** sets the quota changes and closes the screen.
Clicking the "X" closes the screen without saving changes.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **User** | Shows the name of the selected user and it is not editable. |
| **User Data Quota (Examples: 500KiB, 500M, 2 TB)** | Specifies the amount of disk space the selected user can use. Entering **0** allows using all disk space. Values are entered as 50 GiB, 500M, 2 TB, etc. Not specifying a value defaults to bytes. |
| **User Object Quota** | Specifies the number of objects the selected user can own. Entering **0** allows unlimited objects. |
{{< /truetable >}}

## Group Quotas Screens

**Manage Group Quotas** on the **Dataset Space Management** card opens the **Group Quotas** screen.

The **Group Quotas** screen shows the names and quota data of any groups cached on or connected to the system.
When no group quotas exist, the screen shows **No Search Results** and **No matching results found** in the center of the screen.

{{< trueimage src="/images/SCALE/Datasets/GroupQuotasScreenNoQuotas.png" alt="Group Quotas Screen Without Quotas" id="Group Quotas Screen Witout Quotas" >}}

The **Show All Groups** toggle opens the **Show All Groups** dialog. **Show** shows the hidden builtin user group quotas for the root and current logged-in admin user.

{{< trueimage src="/images/SCALE/Datasets/GroupQuotaScreenWithBuiltinGroups.png" alt="User Quotas Showing Builtin Groups" id="User Quotas Showing Builtin Groups" >}}

**Add** opens the **[Add Group Quotas](#add-group-quotas-screen)** screen.

The **Edit** icon for a group opens the **[Edit Group Quota ](#edit-group-configuration-window)** screen.

### Show All Groups Dialogs

The **Show All Groups** toggle opens the **Show All Groups** dialog.

{{< trueimage src="/images/SCALE/Datasets/ShowAllGroupsDialog.png" alt="Show All Groups Dialog" id="Show All Groups Dialog" >}}

Clicking the **Show All Groups** toggle again to hide builtin users, opens the **Filter Groups** dialog.

{{< trueimage src="/images/SCALE/Datasets/FilterGroupsDialog.png" alt="Filter Groups Dialog" id="Filter Gilter Dialog" >}}

**Filter** hides the builtin groups on the **Group Quotas** screen.

### Add Group Quotas Screen

The **Add Group Quotas** screen shows settings in two sections: **Set Quotas** and **Apply Quotas to Selected Groups**.

{{< trueimage src="/images/SCALE/Datasets/AddGroupQuotasScreen.png" alt="Add Group Quotas Screen" id="Add Group Quotas Screen" >}}

{{< expand "Set Quotas Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Group Data Quota (Examples: 500KiB, 500M, 2 TB)** | Specifies the amount of disk space the selected group can use. ntering **0** allows using all disk space. Values are entered as 50 GiB, 500M, 2 TB, etc. Not specifying a value defaults to bytes. |
| **Group Object Quota** | Specifies the number of objects the selected group can own or use. Entering **0** allows unlimited objects. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Apply Quotas to Selected Groups Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Apply To Groups** | Sets the group from the dropdown list of options. |
{{< /truetable >}}
{{< /expand >}}

**Save** sets the quota changes and closes the screen.
Clicking the "X" closes the screen without saving changes.

### Edit Group Quotas Screen

The **Edit Group** window allows you to modify the group data quota and group object quota values for an individual group.

{{< trueimage src="/images/SCALE/Datasets/EditGroupQuotasScreen.png" alt="Edit Group Quota" id="Edit Group Quota" >}}

**Save** sets the quota changes and closes the screen.
Clicking the "X" closes the screen without saving changes.

{{< expand "Edit Group Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Group** | Shows the name of the selected groupand it is not editable. |
| **Group Data Quota (Examples: 500KiB, 500M, 2 TB)** | Specifies the amount of disk space the selected group can use. ntering **0** allows using all disk space. Values are entered as 50 GiB, 500M, 2 TB, etc. Not specifying a value defaults to bytes. |
| **Group Object Quota** | Sets the number of objects the selected group can own or use. Entering **0** allows unlimited objects. |
{{< /truetable >}}
{{< /expand >}}
