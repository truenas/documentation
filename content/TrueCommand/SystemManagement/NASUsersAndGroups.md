---
title: "NAS Users and Groups"
weight: 40
---

TrueCommand lets you create NAS users and groups across multiple systems.

## NAS Users

### Adding a New User

![NASUsersAndGroups1](/images/TrueCommand/2.0/NASUsersAndGroups1.png "Users and Groups")

To add a NAS user to one or more systems, go to your dashboard and click the <i class="material-icons" aria-hidden="true" >more_vert</i> in a system's window, then select **Users and Groups**.

![NASUsersAndGroups2](/images/TrueCommand/2.0/TCUsersAndGroups2.png "Users and Groups Screen")

Click the **+ User** button to open the user creation wizard.

{{< tabs "New NAS User" >}}
{{< tab "Systems" >}}
![NASUser1](/images/TrueCommand/2.0/NASUser1.png "Creating a New NAS User")

Choose one or more systems for this user. Users and groups created across multiple systems will share Ids.

Click **+ Add System** and select the systems you want to add the new user to, then click **NEXT**.
{{< /tab >}}

{{< tab "User/Groups" >}}
![NASUser2](/images/TrueCommand/2.0/NASUser2.png "Creating a New NAS User")

Configure the user's details. Optionally choose associated groups.

Enter a *Username*, *Password*, *Email* (optional), and *Uid* (user ID). You can also select groups to associate the user with or create a new group using the **+ GROUP** button. 

Once you are finished, click **NEXT**.
{{< /tab >}}

{{< tab "Home" >}}
![NASUser3](/images/TrueCommand/2.0/NASUser3.png "Creating a New NAS User")

Set the user's home directory. This step is optional.

If you want the user to have a home directory, enter the path to the directory and set the default UNIX permissions, then click **NEXT**.
{{< /tab >}}

{{< tab "Authentication" >}}
![NASUser4](/images/TrueCommand/2.0/NASUser4.png "Creating a New NAS User")

Configure the user's authorization settings.

You can enter or paste the user's public SSH key in the *Sshpubkey* field.

You can also allow the user to authenticate with Samba, connect from a Windows machine with their Microsoft account, and use sudo commands. 

Enable **Locked** to prevent the user from logging in or using password-based services. 

Once you have configured the user's authorization settings, click **NEXT**.
{{< /tab >}}

{{< tab "Create" >}}
![NASUser5](/images/TrueCommand/2.0/NASUser5.png "Creating a New NAS User")

Review the new user's settings. If you are satisfied, click **CREATE**. You can also click **BACK** to edit the user's setting again before you finish.
{{< /tab >}}
{{< /tabs >}}

### Managing Users

To manage NAS user accounts, go to your dashboard and click the <i class="material-icons" aria-hidden="true" >more_vert</i> in a system's window, then select **Users and Groups**.

To edit a user, click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> in that user's row.

To delete a single user, click the <i class="material-icons" aria-hidden="true" title="Delete">delete</i> in that user's row.

To delete multiple users, check every user you want to delete and click **REMOVE**.

![NASUserRemove](/images/TrueCommand/2.0/NASUserRemove.png "Removing multiple NAS users")

## NAS Groups

### Adding a New Group

To add a NAS group, go to your dashboard and click the <i class="material-icons" aria-hidden="true" >more_vert</i> in a system's window and select **Users and Groups**, then click the **USERS** drop-down and selects **GROUPS**. 

![NASGroup1](/images/TrueCommand/2.0/NASGroup1.png "Creating a New NAS Group")

Enter a *Gid* and a *Name*, then select Smb and Sudo permissions. 

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