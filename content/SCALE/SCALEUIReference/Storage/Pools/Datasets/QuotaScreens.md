---
title: "User and Group Quota Screens "
description: "This article provides information on User and Group Quota screen settings and functions."
weight: 45
aliases:
 - /scale/scaleuireference/storage/pools/quotascreens/
tags: 
 - scalequotas
 - scaledatasets
---

{{< toc >}}

TrueNAS allows setting data or object quotas for user accounts and groups cached on or connected to the system. 

## User Quotas Screen
Select **User Quotas** on the **Dataset Actions** list of options to display the **User Quotas** screen.
The **User Quotas** screen displays the names and quota data of any user accounts cached on or connected to the system. If no users exist, the screen displays the **Add Users Quotas** button in the center of the screen.

![UserQuotasScreenNoQuotas](/images/SCALE/22.02/UserQuotasScreenNoQuotas.png "User Quotas Screen")

The **Actions** button displays two options, **Add** which displays the **Set User Quotas** screen and **Toggle Display**.
**Toggle Display** changes the view from filter view to a list view. Click when the screen filters out all users except those with quotas. The **Show all Users** confirmation dialog displays. Click **Show** to display the list of all users. 
If you have a number of user quotas set up, the **Actions** options include **Set Quotas (Bulk)**.

![UserQuotasScreenListView](/images/SCALE/22.02/UserQuotasScreenListView.png "User Quotas List View")

Use the **Columns** button to displays options to customize the table view to add or remove information. Options are **Select All**, **ID**, **Data Quota**, **DQ Used**, **DQ % Used**, **Object Quota**, **Objects Used**, **OQ % Used**, and **Reset to Defaults**. After selecting **Select All** the option toggles to **Unselect All**.

### User Expanded View
Click the <span class="material-icons">expand_more</span> icon to display a detailed individual user quota screen.

![UserQuotasRootUserExpanded](/images/SCALE/22.02/UserQuotasRootUserExpanded.png "User Quotas Expanded View")

Click the <span class="material-icons">edit</span> **Edit** button to display the **[Edit User](#edit-user-configuration-window)** window.

### Edit User Configuration Window
The **Edit User** window allows you to modify the user data quota and user object quota values for an individual user.

![EditUserQuotaWindow](/images/SCALE/22.02/EditUserQuotaWindow.png "Edit User Quota")

| Settings | Description |
|----------|-------------|
| **User** | Displays the name of the selected user. |
| **User Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected user can use. Entering **0** allows the user to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc.). If units are not specified, the value defaults to bytes.  |
| **User Object Quota** | Enter the number of objects the selected user can own. Entering **0** allows unlimited objects. |

Click **Set Quota** to save changes or **Cancel** to close the window without saving.

### Set User Quotas Screen
To display the **Set User Quotas** screen click **Actions** or if the system does not have user quotas configured, click the **Add User Quotas** button.

![SetUserQuotasScreen](/images/SCALE/22.02/SetUserQuotasScreen.png "Set User Quotas")

#### Set Quotas Settings
| Settings | Description |
|----------|-------------|
| **User Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected user can use. Entering **0** allows the user to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc.). If units are not specified, the value defaults to bytes. |
| **User Object Quota** | Enter the number of objects the selected user can own. Entering **0** allows unlimited objects. |

#### Apply Quotas to Selected Users Settings
| Settings | Description |
|----------|-------------|
| **Select Users Cached by this System** | Select the users from the dropdown list of options. |
| **Search for Connected Users** | Click in the field to see the list of users on the system or type a user name and press <kbd>Enter</kbd>. A clickable list displays of found matches as you type. Click on the user to add the name. A warning dialog displays if there are not matches found. |

Click **Save** to set the quotas or **Cancel** to exit without saving.

## Group Quotas Screens
Select **Group Quotas** on the **Dataset Actions** list of options to display the **Edit Group Quotas** screen.

The **Edit Group Quotas** screen displays the names and quota data of any groups cached on or connected to the system. If no groups exist, the screen displays the **Add Groups Quotas** button in the center of the screen.

![EditGroupQuotasNoGroups](/images/SCALE/22.02/EditGroupQuotasNoGroups.png "Group Quotas Screen")

The **Actions** button displays two options, **Add** which displays the **Set Group Quotas** screen and **Toggle Display**.
**Toggle Display** changes the view from filter view to a list view. Click when the screen filters out all groups except those with quotas. The **Show all Groups** confirmation dialog displays. Click **Show** to display the list of all groups. 

![EditGroupQuotasListView](/images/SCALE/22.02/EditGroupQuotasListView.png "Group Quotas List View")

Use the **Columns** button to displays options to customize the table view to add or remove information. Options are **Select All**, **ID**, **Data Quota**, **DQ Used**, **DQ % Used**, **Object Quota**, **Objects Used**, **OQ % Used**, and **Reset to Defaults**. After selecting **Select All** the option toggles to **Unselect All**.

### Group Expanded View
Click the <span class="material-icons">expand_more</span> icon to display a detailed individual group quota screen.

![EditGroupQuotasExpandedView](/images/SCALE/22.02/EditGroupQuotasExpandedView.png "Group Quotas Expanded View")

Click the <span class="material-icons">edit</span> **Edit** button to display the **[Edit Group](#edit-group-configuration-window)** window.

### Edit Group Configuration Window
The **Edit Group** window allows you to modify the group data quota and group object quota values for an individual group.

![EditGroupQuotaWindow](/images/SCALE/22.02/EditGroupQuotaWindow.png "Edit Qroup Quota")

| Settings | Description |
|----------|-------------|
| **Group** | Displays the name of the selected group(s).  |
| **Group Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected group can use. Entering **0** allows the group to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc.). If units are not specified, the value defaults to bytes. |
| **Group Object Quota** | Enter the number of objects the selected group can own or use. Entering **0** allows unlimited objects. |

Click **Set Quota** to save changes or **Cancel** to close the window without saving.

### Set User Quotas Screen
To display the **Set Group Quotas** screen click **Actions** or if the system does not have group quotas configured, click the **Add Group Quotas** button.

![SetGroupQuotasScreen](/images/SCALE/22.02/SetGroupQuotasScreen.png "Set Group Quotas")

#### Set Quotas Settings
| Settings | Description |
|----------|-------------|
| **Group Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected group can use. Entering **0** allows the group to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc.). If units are not specified, the value defaults to bytes. |
| **Group Object Quota** | Enter the number of objects the selected group can own or use. Entering **0** allows unlimited objects. |

#### Apply Quotas to Selected Groups Settings
| Settings | Description |
|----------|-------------|
| **Select Groups Cached by this System** | Select the users from the dropdown list of options. |
| **Search for Connected Groups** | Click in the field to see the list of groups on the system or type a group name and press <kbd>Enter</kbd>. A clickable list displays of found matches as you type. Click on the group to add the name. A warning dialog displays if there are no matches found. |

Click **Save** to set the quotas or **Cancel** to exit without saving.

{{< taglist tag="scalequotas" limit="10" >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Dataset Articles" >}}