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


TrueNAS allows setting data or object quotas for user accounts and groups cached on or connected to the system. You can use the quota settings on the **Add Dataset** or **Edit Dataset** configuration screens in the **Advanced Options** settings to set up alarms and set aside more space in a dataset. See [Adding and Managing Datasets]({{< relref "DatasetsScale.md" >}}) for more information.

## Configuring User Quotas

Select **User Quotas** to set data or object quotas for user accounts cached on or connected to the system.

To view and edit user quotas, go to **Storage** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; next to a dataset to open the **Dataset Actions** menu, then select **User Quotas**.

![UserQuotasScreenListView](/images/SCALE/22.02/UserQuotasScreenListView.png "User Quotas List View")

The **User Quotas** page displays the names and quota data of any user accounts cached on or connected to the system.

To edit individual user quotas, go to the user row and click the <span class="material-icons">expand_more</span> icon to display a detailed individual user quota screen. 
Click <i class="material-icons" aria-hidden="true" title="edit">edit</i> **Edit**.

![EditUserQuotaWindow](/images/SCALE/22.02/EditUserQuotaWindow.png "Edit User Quota")

The **Edit User** window lets users edit the **User Data Quota** and **User Object Quota** values.

**User Data Quota** is the amount of disk space that selected users can use. **User Object Quota** is the number of objects selected users can own.

To edit user quotas in bulk, click **Actions** and select **Set Quotas (Bulk)**.

![DatasetUserQuotasBulkSCALE](/images/SCALE/DatasetUserQuotasBulkSCALE.png "Bulk-Editing User Quotas")

The **Set Quotas** window lets you edit user data and object quotas after selecting any cached or connected users.

## Configuring Group Quotas

Select **Group Quotas** to set data or object quotas for user groups cached on or connected to the system. 

Go to **Storage** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; next to a dataset to open the **Dataset Actions** menu, then select **Group Quotas**.

![EditGroupQuotasListView](/images/SCALE/22.02/EditGroupQuotasListView.png "Group Quotas List View")

The **Group Quotas** page displays the names and quota data of any groups cached on or connected to the system.

To edit individual group quotas, go to the group row and click <span class="material-icons">expand_more</span> icon, then click <i class="material-icons" aria-hidden="true" title="edit">edit</i> **Edit**.

![EditGroupQuotaWindow](/images/SCALE/22.02/EditGroupQuotaWindow.png "Edit Qroup Quota")

The **Edit Group** window lets users edit the **Group Data Quota** and **Group Object Quota** values.

To edit group quotas in bulk, click **Actions** and select **Set Quotas (Bulk)**.

![DatasetGroupQuotasBulkSCALE](/images/SCALE/DatasetGroupQuotasBulkSCALE.png "Bulk-Editing Group Quotas")

TrueNAS presents the same options for single groups and lets users choose groups for the new quota rules.

{{< taglist tag="scalequotas" limit="10" >}}
