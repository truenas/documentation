---
title: "Adding Users"
weight: 50
---

{{< toc >}}

TrueCommand has a robust user management system designed to allow TrueCommand administrators to personalize the TrueCommand experience for each user account.
You can create user accounts in the TrueCommand interface. Alternatively, LDAP can automatically create new user accounts when someone logs into TrueCommand with their LDAP credentials.

User accounts also organize into "Teams" for simultaneous management of large numbers or related user accounts.

## Adding Local User Accounts

To create a new user account, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click *Users > + NEW USER*.
Enter a descriptive user name and an authentication method for the user.

TrueCommand uses the *DEFAULT* authentication method to create unique credentials for logging in to the web interface.
The administrator has to provide these credentials to the intended user.

![UsersAdd](/images/TrueCommand/2.0/UsersAddUser.png "Adding a new user")

You can assign users to existing *Teams* by selecting a team from the drop-down to add the user to that team.
You can assign users to multiple teams.

If the user needs to be an Administrator, check the *TrueCommand Administrator* box.

When the form is completed, click **Create User**.



## Using LDAP to Add User Accounts

{{< include file="static/includes/TrueCommandLDAP.md.part" markdown="true" >}}


## Configuring User Accounts

To configure account details and permissions, open the *Configure* <i class="material-icons" aria-hidden="true" title="Settings">settings</i>menu and click **Users**

![UsersList](/images/TrueCommand/1.3/UsersList.png "List of Users")

To edit a user click the Edit button <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![Users Edit](/images/TrueCommand/1.3/UsersEdit.png "Users Edit")

There are several different elements that you can configure for a user, including the user's avatar, personal details, Team membership, and System permissions.

### User Details

You can add personal details about the user in this form. You may also designate the account as TrueCommand administrator or change the account password.
Saving changes to a user's password requires entering the current password for that user.
To go back to the original contents of the fields, click RESET FORM.

### Joined Teams

The **CREATE A NEW TEAM** button appears if no TrueCommand teams exist.
When teams are present, the **JOIN TEAM** button appears.
Click **JOIN TEAM** to add the user to a team.
You can add users to multiple teams.
TrueCommand applies team permissions to any user added to a team, but setting a specific permission for the user can override a related team permission.
Team Configuration can be accomplished in the [Team Page]({{< relref "/TrueCommand/GettingStarted/AddTeams.md" >}})

### System Permissions

To limit the access that non-administrative accounts have to the connected systems, configure the **System Access** and/or **System Groups** sections.
This requires [system connections]({{< relref "/TrueCommand/GettingStarted/AddSystems.md#connecting-systems-to-truecommand" >}}) and/or [system groups]({{< relref "/TrueCommand/GettingStarted/AddSystems.md#organizing-systems-into-groups" >}}) have already been configured in TrueCommand.

Click **ADD SYSTEM** and select a system from the drop-down to give the user access to that system.
To restrict the user to only viewing details about the system, set the *read* permission.
To remove a user’s access to a particular system, click minus on the desired system.

When system groups are available, an *ADD GROUP* button appears.
Click **ADD GROUP** and select a group from the drop-down to give the user access to all the systems in that group.
To assign user's type of access to the group, choose *read* or *read/write* permissions.
To remove a user’s access to a particular system group, click *- (minus)* on the desired group.



## Resetting a User Password from the Command Line

The Docker version of TrueCommand allows you to reset user passwords from the command line.
Open the shell on the system running the TrueCommand Container and use the following command, replacing the values in brackets with their appropriate values. 

```
docker exec -it [docker instance ID] resetpw [username]
```

## Deleting User Accounts

To delete an account details and permissions, open the *Configure* <i class="material-icons" aria-hidden="true" title="Settings">settings</i>menu and click **Users**
When the users page loads, click the delete button <i class="material-icons" aria-hidden="true" title="Delete">delete</i> to the right of the user you wish to delete.
A popup will appear to confirm deletion of the user.
![Users Delete](/images/TrueCommand/1.3/UsersDeleteUser.png "Users Delete")

