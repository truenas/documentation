---
title: "User and Group Quotas "
description: "Provides information on the settings and functions found on the User and Group Quota screens."
weight: 35
aliases:
 - /scale/scaleuireference/storage/datasets/quotascreens/
tags: 
 - quotas
 - datasets
---

TrueNAS allows setting data or object quotas for user accounts and groups cached on or connected to the system.

## User Quotas Screen
Select **Manage User Quotas** on the **Dataset Space Management** widget to open the **User Quotas** screen.
The **User Quotas** screen displays the names and quota data of any user accounts cached on or connected to the system.
If no users exist, the screen displays **No User Quotas** in the center of the screen.

{{< trueimage src="/images/SCALE/Datasets/UserQuotasNoQuotasSCALE.png" alt="User Quotas Screen" id="User Quotas Screen" >}}

The **Show All Users** toggle button displays all users or hides built-in users.

{< trueimage src="/images/SCALE/Datasets/UserQuotasDataQuotaSCALE.png" alt="User Quotas List View" id="User Quotas List View" >}}

**Add** opens the **[Set User Quotas](#set-user-quotas-screen)** screen.

If you have a number of user quotas set up, the **Actions** options include **Set Quotas (Bulk)**.

Click on the name of the user to display the **[Edit User](#edit-user-configuration-window)** window.

### Edit User Configuration Window
The **Edit User Quota** window allows you to modify the user data quota and user object quota values for an individual user.

{{< trueimage src="/images/SCALE/Datasets/EditUserQuotasSCALE.png" alt="Edit User Quota" id="Edit User Quota" >}}

Click **Save** to save changes or click on the "X" to close the window without saving.
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **User** | Displays the name of the selected user. |
| **User Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected user can use. Entering **0** allows the user to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc. If units are not specified, the value defaults to bytes.  |
| **User Object Quota** | Enter the number of objects the selected user can own. Entering **0** allows unlimited objects. |
{{< /truetable >}}

### Set User Quotas Screen
To display the **Set User Quotas** screen click the **Add** button.

{{< trueimage src="/images/SCALE/Datasets/AddUserQuotasSetQuotasSCALE.png" alt="Set User Quotas" id="Set User Quotas" >}}

{{< expand "Set Quotas Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **User Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected user can use. Entering **0** allows the user to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc. If units are not specified, the value defaults to bytes. |
| **User Object Quota** | Enter the number of objects the selected user can own. Entering **0** allows unlimited objects. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Apply Quotas to Selected Users Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Apply To Users** | Select the users from the dropdown list of options. |
{{< /truetable >}}

Click **Save** to set the quotas or click the "X" to exit without saving.
{{< /expand >}}

## Group Quotas Screens
Click **Manage Group Quotas** on the **Dataset Space Management** widget to open the **Group Quotas** screen.

The **Group Quotas** screen displays the names and quota data of any groups cached on or connected to the system.
If no groups exist, the screen displays **No Group Quotas** in the center of the screen.

{{< trueimage src="/images/SCALE/Datasets/GroupQuotasNoQuotaSCALE.png" alt="Group Quotas Screen" id="Group Quotas Screen" >}}

The **Show All Groups** toggle button displays all groups or hides built-in groups. **Add** displays the **[Set Group Quotas](#set-group-quotas-screen)** screen.

If you have a number of group quotas set up, the **Actions** options include **Set Quotas (Bulk)**.

Click on the name of the group to display the **[Edit Group](#edit-group-configuration-window)** window.

!{{< trueimage src="/images/SCALE/Datasets/GroupQuotasVideoQuotaSCALE.png" alt="Group Quotas List View" id="Group Quotas List View" >}}

### Edit Group Configuration Window
The **Edit Group** window allows you to modify the group data quota and group object quota values for an individual group.

{{< trueimage src="/images/SCALE/Datasets/EditGroupQuotasScreen.png" alt="Edit Group Quota" id="Edit Group Quota" >}}

Click **Save** to set the quotas or click the "X" to exit without saving.

{{< expand "Edit Group Configuration Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Group** | Displays the name of the selected group(s).  |
| **Group Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected group can use. Entering **0** allows the group to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc. If units are not specified, the value defaults to bytes. |
| **Group Object Quota** | Enter the number of objects the selected group can own or use. Entering **0** allows unlimited objects. |
{{< /truetable >}}
{{< /expand >}}

### Set Group Quotas Screen
To display the **Set Group Quotas** screen, click the **Add** button.

{{< trueimage src="/images/SCALE/Datasets/AddGroupQuotasSetQuotaSCALE.png" alt="Set Group Quotas" id="Set Group Quotas" >}}

{{< expand "Set Quotas Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Group Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected group can use. Entering **0** allows the group to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc. If units are not specified, the value defaults to bytes. |
| **Group Object Quota** | Enter the number of objects the selected group can own or use. Entering **0** allows unlimited objects. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Apply Quotas to Selected Groups Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Apply To Groups** | Select groups from the dropdown list of options. |
{{< /truetable >}}
{{< /expand >}}