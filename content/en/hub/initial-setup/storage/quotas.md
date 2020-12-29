---
title: "Quotas"
description: "How to set data or object quotas for user accounts and groups."
weight: 1
tags: ["Quotas"]
---

{{% pageinfo color="primary" %}}
A dataset is required to view and edit quotas.
See [ZFS Datasets]({{< ref "datasets.md" >}}).
{{% /pageinfo %}}

TrueNAS allows users to set data or object quotas for user accounts and groups cached on or connected to the system.

## Editing User Quotas

To view and edit user quotas, go to **Storage > Pools** and click the <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; button to open the **Dataset Actions** menu, then click **User Quotas**.

<img src="/images/Quotas1DatasetMenu.png">
<br><br>

The **User Quotas** page displays the names and quota data of any user accounts cached on or connected to the system.

<img src="/images/Quotas2UserPage.png">
<br><br>

To edit individual user quotas, go to the user's row and click the <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; button, then click **Edit**. 

The **Edit User** window allows you to edit the **User Data Quota**, which is the amount of disk space that can be used by the selected users, and the **User Object Quota**, which is the number of objects that can be owned by each of the selected users.

<img src="/images/Quotas3EditUser.png">
<br><br>

To edit user quotas in bulk, click **Actions** and select **Set Quotas (Bulk)**. The **Set Quotas** window allows you to edit user data and object quotas after selecting any cached or connected users that you want. 

<img src="/images/Quotas4UserBulk.png">
<br><br>

## Editing Group Quotas

The process for viewing and editing group quotas is similar. Go to **Storage > Pools** and click the <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; button to open the **Dataset Actions** menu, then click **Group Quotas**.

The **Group Quotas** page displays the names and quota data of any groups cached on or connected to the system.

To edit individual group quotas, go to the group's row and click the '>' button, then click <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>&nbsp;**Edit**.

The **Edit Group** window allows you to edit the **Group Data Quota** and **Group Object Quota** the same way you would for users.

To edit group quotas in bulk, click **Actions** and select **Set Quotas (Bulk)**. The **Set Quotas** window allows you to edit group data and object quotas the same way you would for users.	