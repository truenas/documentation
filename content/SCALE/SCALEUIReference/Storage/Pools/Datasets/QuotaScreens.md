---
title: "User and Group Quota Screens "
description: "This article provides information on User and Group Quota screen settings and functions."
weight: 45
tags: 
 - scalequotas
 - scaledatasets
---

{{< toc >}}

TrueNAS allows administrator users to set data or object quotas for user and groups accounts cached on or connected to the system. View, set or mange quotas from the **Datasets** screen. Select the dataset then use the **Data Space Management** widget to access quotas configured on the system.

Users quotas and group quotas each have their own management screens.

**Manage User Quotas** opens the **[User Quotas](#user-quotas-screen)** screen.

**Manage Group Quotas** opens the **[Group Quotas](#group-quotas-screens) screen.

To manage the dataset overall capacity, use **Edit** to open the **[Capacity Settings]({{< relref "CapacitySettingsSCALE.md" >}})** screen.

## User Quotas Screen
{{< include file="/_includes/UserQuotasScreenSCALE.md" type="page" >}}

The <span class="material-icons">delete</span>icon opens the **Delete User Quota** dialog.

### Add User Quota Screen

The **Add User Quotas** screen allows you to configure individual user quotas.

![AddUserQuotasScreen](/images/SCALE/22.12/AddUserQuotasScreen.png "Add User Quotas Screen")

#### Set Quotas Settings
| Settings | Description |
|----------|-------------|
| **User Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected user can use. Entering **0** allows the user to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc.). If units are not specified, the value defaults to bytes. |
| **User Object Quota** | Enter the number of objects the selected user can own. Entering **0** allows unlimited objects. |

#### Apply Quotas to Selected Users Settings
| Settings | Description |
|----------|-------------|
| **Apply To Users** | Click in the field to view a list of system users including any users from a directory server properly connected to TrueNAS. Begin typing a user name to filter all users on the system to find the desired user. Click on the user to add the name. Add additional users by repeating the same process. A warning dialog displays if there are not matches found. |

Click **Save** to set the quotas or **Cancel** to exit without saving.

### Edit User Quotas Screen
Click anywhere on a user to open the **Edit User Quota** screen with the quota settings for that user. 

![EditUserQuotaScreen](/images/SCALE/22.12/EditUserQuotaScreen.png "Edit User Quotas Screen")

| Settings | Description |
|----------|-------------|
| **User** | Displays the name of the selected user. This field is read only and cannot be edited. |
| **User Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected user can use. Entering **0** allows the user to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc.). If units are not specified, the value defaults to bytes. |
| **User Object Quota** | Enter the number of objects the selected user can own. Entering **0** allows unlimited objects. |

## Group Quotas Screens
{{< include file="/_includes/GroupQuotasScreenSCALE.md" type="page" >}}

The <span class="material-icons">delete</span>icon opens the **Delete Group Quota** dialog.

### Add Group Quotas screen

The **Add Group Quotas** screen allows you to configure quotas for groups configured on the system

![AddGroupQuotasScreen](/images/SCALE/22.12/AddGroupQuotasScreen.png "Add Group Quotas")

### Set Quotas Settings
| Settings | Description |
|----------|-------------|
| **Group Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected group can use. Entering **0** allows the group to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc.). If units are not specified, the value defaults to bytes. |
| **Group Object Quota** | Enter the number of objects the selected group can own or use. Entering **0** allows unlimited objects. |

### Apply Quotas to Selected Groups Settings
| Settings | Description |
|----------|-------------|
| **Apply to Group** |  Click in the field to view a list of system groups. Begin typing a group name to filter all users on the system to find the desired group. Click on the group to add the name. Add additional groups by repeating the same process. A warning dialog displays if there are not matches found.  |

Click **Save** to set the quotas or **Cancel** to exit without saving.

## Edit Group Quotas
The **Edit Group Quotas** screen allows you to modify the group data quota and group object quota values for an individual group. Click anywhere on a group to open the **Edit Group Quota** screen.

![EditGroupQuotasScreen](/images/SCALE/22.12/EditGroupQuotasScreen.png "Edit Group Quota")

| Settings | Description |
|----------|-------------|
| **Group** | Displays the name of the selected group(s).  |
| **Group Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected group can use. Entering **0** allows the group to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc.). If units are not specified, the value defaults to bytes. |
| **Group Object Quota** | Enter the number of objects the selected group can own or use. Entering **0** allows unlimited objects. |

Click **Set Quota** to save changes or **Cancel** to close the window without saving.

{{< taglist tag="scalequotas" limit="10" >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Dataset Articles" >}}