---
title: "NAS Users and Groups"
description: "How to bulk create user and group accounts across many connected TrueNAS systems."
weight: 40
---

TrueCommand allows administrator users to create TrueNAS users and groups across multiple systems. 

## NAS Users and Groups
To add a NAS user  or group to TrueNAS systems using TrueCommand, click the <i class="material-icons" aria-hidden="true" >more_vert</i> button found on system widgets on the main **Dashboard**, the systems listed on the **Fleet Dashboard > Systems** widget, and for administrator users, on the system rows listed on the **Systems** screen. 

The [**Users**]({{< ref "/AdminGuide/Users" >}}) option on the main settings dropdown menu only manages TrueCommand users and groups.

### Adding TrueNAS Users

{{< include file="/static/includes/TCNASUserAndGroup.md" >}}

### Managing TrueNAS Users

To manage TrueNAS user accounts, while on the TrueNAS **Users** screen, click **Edit** on the user row to open the **Edit NAS User** for that user.

To delete a single user, click the <i class="material-icons" aria-hidden="true" title="Delete">delete</i> in that user row.

To delete multiple users, select the users, then click **REMOVE**.

![NASUserRemove](/images/TrueCommand/Dashboard/NASUserRemove.png "Removing multiple NAS users")

### Adding a New Group

Click the <i class="material-icons" aria-hidden="true" >more_vert</i> button, then click **Users and Groups**. 
Select **GROUPS** as the filter option on top banner of the **USERS** screen. The TrueNAS group list displays. 
Click **+ GROUP** to open the **Create NAS Group** screen.

![NASGroup1](/images/TrueCommand/Dashboard/NASGroup1.png "Creating a New NAS Group")

Enter a **Gid** and **Name**. Leave **Smb** selected to allow  using this group for Samba permissions and authentication. 

Click **SAVE** to create the group.

To add groups to another system, use the filter option on the top banner to select the system.

![NASGroup3](/images/TrueCommand/Dashboard/NASGroup3.png "Creating a New NAS Group on a Different System")

### Managing Groups
While on the TrueNAS **GROUPS** screen, you can edit or delete an existing NAS group.

![NASGroupRemove](/images/TrueCommand/Dashboard/NASGroupRemove.png "Removing multiple NAS groups")

To edit a group, click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> in the group row.

To delete a single group, click the <i class="material-icons" aria-hidden="true" title="Delete">delete</i> in the group row.

To delete multiple groups, select the groups to delete, then click **REMOVE**.
