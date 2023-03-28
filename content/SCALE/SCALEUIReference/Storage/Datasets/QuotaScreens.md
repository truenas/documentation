---
title: "User and Group Quota Screens "
description: "This article provides information on User and Group Quota screen settings and functions."
weight: 35
tags: 
 - scalequotas
 - scaledatasets
---

{{< toc >}}

TrueNAS allows setting data or object quotas for user accounts and groups cached on or connected to the system. 

## User Quotas Screen
Select **User Quotas** on the **Dataset Actions** list of options to display the **User Quotas** screen.
The **User Quotas** screen displays the names and quota data of any user accounts cached on or connected to the system. If no users exist, the screen displays **No User Quotas** in the center of the screen.

![UserQuotasNoQuotasSCALE](/images/SCALE/22.12/UserQuotasNoQuotasSCALE.png "User Quotas Screen")

![UserQuotasDataQuotaSCALE](/images/SCALE/22.12/UserQuotasDataQuotaSCALE.png "User Quotas List View")

The **Show All Users** toggle button displays all users, or hides built-in users. **Add** displays the **[Set User Quotas](#set-user-quotas-screen)** screen. 

If you have a number of user quotas set up, the **Actions** options include **Set Quotas (Bulk)**.

Click on the name of the user to display the **[Edit User](#edit-user-configuration-window)** window.

### Edit User Configuration Window
The **Edit User Quota** window allows you to modify the user data quota and user object quota values for an individual user.

![EditUserQuotasSCALE](/images/SCALE/22.12/EditUserQuotasSCALE.png "Edit User Quota")

| Settings | Description |
|----------|-------------|
| **User** | Displays the name of the selected user. |
| **User Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected user can use. Entering **0** allows the user to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc. If units are not specified, the value defaults to bytes.  |
| **User Object Quota** | Enter the number of objects the selected user can own. Entering **0** allows unlimited objects. |

Click **Save** to save changes or click on the "X" to close the window without saving.

### Set User Quotas Screen
To display the **Set User Quotas** screen click the **Add** button.

![AddUserQuotasSetQuotasSCALE](/images/SCALE/22.12/AddUserQuotasSetQuotasSCALE.png "Set User Quotas")

#### Set Quotas Settings
| Settings | Description |
|----------|-------------|
| **User Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected user can use. Entering **0** allows the user to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc. If units are not specified, the value defaults to bytes. |
| **User Object Quota** | Enter the number of objects the selected user can own. Entering **0** allows unlimited objects. |

#### Apply Quotas to Selected Users Settings
| Settings | Description |
|----------|-------------|
| **Apply To Users** | Select the users from the dropdown list of options. |

Click **Save** to set the quotas or click the "X" to exit without saving.

## Group Quotas Screens
Select **Group Quotas** on the **Dataset Actions** list of options to display the **Group Quotas** screen.

The **Group Quotas** screen displays the names and quota data of any groups cached on or connected to the system. If no groups exist, the screen displays **No Group Quotas** in the center of the screen.

![GroupQuotasNoQuotaSCALE](/images/SCALE/22.12/GroupQuotasNoQuotaSCALE.png "Group Quotas Screen")

The **Show All Groups** toggle button displays all groups, or hides built-in groups. **Add** displays the **[Set Group Quotas](#set-group-quotas-screen)** screen. 

If you have a number of group quotas set up, the **Actions** options include **Set Quotas (Bulk)**.

Click on the name of the group to display the **[Edit Group](#edit-group-configuration-window)** window.

![GroupQuotasVideoQuotaSCALE](/images/SCALE/22.12/GroupQuotasVideoQuotaSCALE.png "Group Quotas List View")

### Edit Group Configuration Window
The **Edit Group** window allows you to modify the group data quota and group object quota values for an individual group.

![EditGroupQuotasSCALE](/images/SCALE/22.12/EditGroupQuotasSCALE.png "Edit Qroup Quota")

| Settings | Description |
|----------|-------------|
| **Group** | Displays the name of the selected group(s).  |
| **Group Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected group can use. Entering **0** allows the group to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc. If units are not specified, the value defaults to bytes. |
| **Group Object Quota** | Enter the number of objects the selected group can own or use. Entering **0** allows unlimited objects. |

Click **Save** to set the quotas or click the "X" to exit without saving.

### Set Group Quotas Screen
To display the **Set Group Quotas** screen, click the **Add** button.

![AddGroupQuotasSetQuotaSCALE](/images/SCALE/22.12/AddGroupQuotasSetQuotaSCALE.png "Set Group Quotas")

#### Set Quotas Settings
| Settings | Description |
|----------|-------------|
| **Group Data Quota (Examples: 500KiB, 500M, 2 TB)** | Enter the amount of disk space the selected group can use. Entering **0** allows the group to use all disk space. You can enter human-readable values such as 50 GiB, 500M, 2 TB, etc. If units are not specified, the value defaults to bytes. |
| **Group Object Quota** | Enter the number of objects the selected group can own or use. Entering **0** allows unlimited objects. |

#### Apply Quotas to Selected Groups Settings
| Settings | Description |
|----------|-------------|
| **Apply To Groups** | Select groups from the dropdown list of options. |

Click **Save** to set the quotas or click the "X" to exit without saving.

{{< taglist tag="scalequotas" limit="10" >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Dataset Articles" >}}