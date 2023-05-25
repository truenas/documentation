---
title: "NAS Users and Groups"
description: "How to bulk create user and group accounts across many connected TrueNAS systems."
weight: 40
---

TrueCommand lets you create NAS users and groups across multiple systems.

## NAS Users

### Adding a New User

![NASUsersAndGroups1](/images/TrueCommand/2.0/NASUsersAndGroups1.png "Users and Groups")

To add a NAS user to one or more systems, go to the dashboard and click the <i class="material-icons" aria-hidden="true" >more_vert</i> in a system window, then select **Users and Groups**.

![NASUsersAndGroups2](/images/TrueCommand/2.0/NASUsersAndGroups2.png "Users and Groups Screen")

Click **+ User** to open the user creation wizard.

{{< tabs "New NAS User" >}}
{{< tab "Systems" >}}
![NASUser1](/images/TrueCommand/2.0/NASUser1.png "Creating a New NAS User")

You can add users to one or several TrueNAS systems. 
Click **+ Add System** and select one or more systems, then click **NEXT**. Users and groups created across multiple systems will share IDs.
{{< /tab >}}

{{< tab "User/Groups" >}}
![NASUser2](/images/TrueCommand/2.0/NASUser2.png "Creating a New NAS User")

Enter a **Username**, **Password**, **Email** (optional), and **Uid** (user ID). You can also associate the user with existing groups or create new ones using the **+ GROUP** button (optional). 

Once you are finished, click **NEXT**.
{{< /tab >}}

{{< tab "Home" >}}
![NASUser3](/images/TrueCommand/2.0/NASUser3.png "Creating a New NAS User")

If you want the user to have a home directory, enter the path to the directory and set the default UNIX permissions, then click **NEXT**.
{{< /tab >}}

{{< tab "Authentication" >}}
![NASUser4](/images/TrueCommand/2.0/NASUser4.png "Creating a New NAS User")

You can enter or paste the user public SSH key in the **Sshpubkey** field.

You can also allow users to authenticate with Samba, connect from a Windows machine with their Microsoft account, and use sudo commands. 

Check **Locked** to prevent users from logging in or using password-based services. 

After configuring the user authorization settings, click **NEXT**.
{{< /tab >}}

{{< tab "Create" >}}
![NASUser5](/images/TrueCommand/2.0/NASUser5.png "Creating a New NAS User")

Review the settings. If you are satisfied, click **CREATE**. You can also click **BACK** to edit their settings again before finishing.
{{< /tab >}}
{{< /tabs >}}

### Managing Users

To manage NAS user accounts, go to your dashboard and click the <i class="material-icons" aria-hidden="true" >more_vert</i> in a system's window, then select **Users and Groups**.

To edit a user, click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> in that user's row.

To delete a single user, click the <i class="material-icons" aria-hidden="true" title="Delete">delete</i> in that user row.

To delete multiple users, check them and click **REMOVE**.

![NASUserRemove](/images/TrueCommand/2.0/NASUserRemove.png "Removing multiple NAS users")

## NAS Groups

### Adding a New Group

Go to the dashboard and click the <i class="material-icons" aria-hidden="true" >more_vert</i> in a system card and select **Users and Groups**, then click the **USERS** drop-down and select **GROUPS**. 

![NASGroup1](/images/TrueCommand/2.0/NASGroup1.png "Creating a New NAS Group")

Enter a **Gid** and a **Name**, then select **Smb** and **Sudo** permissions. 

![NASGroup2](/images/TrueCommand/2.0/NASGroup2.png "Creating a New NAS Group")

Click **SAVE** to create the group.

If you want to add groups to other systems, switch to them using the system drop-down.

![NASGroup3](/images/TrueCommand/2.0/NASGroup3.png "Creating a New NAS Group on a Different System")

### Managing Groups

To manage NAS user accounts, go to your dashboard and click the <i class="material-icons" aria-hidden="true" >more_vert</i> in a system's window, then select **Users and Groups**.

To edit a group, click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> in that group's row.

To delete a single group, click the <i class="material-icons" aria-hidden="true" title="Delete">delete</i> in that group's row.

To delete multiple groups, check every group you want to delete and click **REMOVE**.

![NASGroupRemove](/images/TrueCommand/2.0/NASGroupRemove.png "Removing multiple NAS groups")