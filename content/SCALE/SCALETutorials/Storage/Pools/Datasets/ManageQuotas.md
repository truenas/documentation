---
title: "Managing User or Group Quotas"
description: "This article provides information on managing user and group quotas."
weight: 45
aliases:
- /scale/scaletutorials/storage/pools/managequotas/
tags: 
 - scalequotas
 - scaledatasets
 - scalestorage
---

{{< toc >}}


TrueNAS allows setting data or object quotas for user accounts and groups cached on or connected to the system. 
You can use the quota settings on the **Add Dataset** or **Edit Dataset** configuration screens in the **Advanced Options** settings to set up alarms and set aside more space in a dataset. 
See [Adding and Managing Datasets]({{< relref "DatasetsScale.md" >}}) for more information.

To manage the dataset overall capacity, use **Edit** on the **Dataset Space Management** widget to open the **[Capacity Settings]({{< relref "CapacitySettingsSCALE.md" >}})** screen.

## Configuring User Quotas

To view and edit user quotas, go to **Datasets** and click **Manage User Quotas** on the **Dataset Space Management** widget to open the **User Quotas** screen.

{{< include file="/_includes/UserQuotasScreenSCALE.md" type="page" >}}

Click **Add** to open the **Add User Quota** screen.

Click in the field to view a list of system users including any users from a directory server properly connected to TrueNAS. 
Begin typing a user name to filter all users on the system to find the desired user, then click on the user to add the name. 
Add additional users by repeating the same process. A warning dialog displays if there are not matches found. 

To edit individual user quotas, click anywhere on a user row to open the **Edit User Quota** screen where you can edit the **User Data Quota** and **User Object Quota** values. 

![EditUserQuotaScreen](/images/SCALE/22.12/EditUserQuotaScreen.png "Edit User Quotas Screen")
 
**User Data Quota** is the amount of disk space that selected users can use. **User Object Quota** is the number of objects selected users can own.
 
## Configuring Group Quotas

{{< include file="/_includes/GroupQuotasScreenSCALE.md" type="page" >}}

Click **Add** to open the **Add Group Quota** screen.

Click in the **Group** field to view a list of system groups on the system. 
Begin typing a name to filter all groups on the system to find the desired group, then click on the group to add the name. 
Add additional groups by repeating the same process. A warning dialog displays if there are not matches found. 

To edit individual group quotas, click anywhere on a group name to open the **Edit Group Quota** screen where you can edit the **Group Data Quota** and **Group Object Quota** values. 

![EditGroupQuotasScreen](/images/SCALE/22.12/EditGroupQuotasScreen.png "Edit Group Quota")

**Group Data Quota** is the amount of disk space that the selected group can use. **Group Object Quota** is the number of objects the selected group can own.

{{< taglist tag="scalequotas" limit="10" >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Dataset Articles" >}}
