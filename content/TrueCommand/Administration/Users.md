---
title: "Users"
weight: 20
---

{{< toc >}}

TrueCommand has a robust user management system designed to allow TrueCommand administrators to personalize the TrueCommand experience for each user account.
You can create user accounts in the TrueCommand interface. Alternatively, LDAP can automatically create new user accounts when someone logs into TrueCommand with their LDAP credentials.

User accounts also organize into Teams for simultaneous management of large numbers or related user accounts.

## Adding Local User Accounts

To create a new user account, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Users > + NEW USER**.
Enter a descriptive user name and an authentication method for the user.

TrueCommand uses the default authentication method to create unique credentials for logging in to the web interface.
The administrator must provide log in credentials to the intended user.

![UsersAdd](/images/TrueCommand/2.0/UsersNewUser.png "Adding a new user")

You can assign users to existing teams. After creating the team, you can add the user in the **New User** configuration panel by selecting **Teams** on the drop-down menu.
You can assign users to multiple teams.

If the user needs to be an administrator, check the **TrueCommand Administrator** box.

When the form is completed, click **Create User**.

## Configuring User Accounts

To configure account details and permissions, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Users**.

![UsersList](/images/TrueCommand/2.1/UsersList.png "List of Users")

To edit a user click the edit icon <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![Users Edit](/images/TrueCommand/2.0/UsersEditUser21.png "Users Edit")

There are several different elements that you can configure for a user, including the user's avatar, personal details, add a contact email address, team membership, and system permissions.

### User Details

Users or admins can add personal details about the user in this page. 

To go back to the original contents of the fields, click **RESET FORM** before you click **SAVE CHANGES**.

{{< tabs "User Options Tabs" >}}
{{< tab "Administrator" >}}
You can select the **TrueCommand Administrator** checkbox to designate the account as an administrator. 

{{< /tab >}}
{{< tab "Change Password" >}}

You can change the account password by typing the new password into both the **Password** and **Password Confirm** fields, and when prompted enter the existing password for the user. Click **SAVE CHANGES** to make the change.

{{< /tab >}}
{{< tab "Email" >}}

You can set up or change a user's email on this screen. If [SMTP]({{< relref "TrueCommand/Alerts/AlertManage.md" >}}) is not set up an error message displays at the bottom of the screen stating **Failed to send email. Are your SMTP settings configured?** Admins can click the **CONFIGURE** button to open the SMTP settings window. Note, before adding a user's email here verify the SMTP service is set up on the **Alert Services** screen.

{{< /tab >}}
{{< tab "Two Factor Authentication" >}}

You can set [Two Factor Authentication]({{< relref "truecommand/tcgettingstarted/useraccounts.md" >}}) for the user which requires the user to enter a validation code emailed to them after they enter their username, password and click **SIGN IN** on the login screen.

{{< /tab >}}
{{< /tabs >}}

### Joined Teams

The **CREATE A NEW TEAM** button displays if a TrueCommand teams does not exist.
When teams are present, the **JOIN TEAM** button displays.

Click **JOIN TEAM** to display the list of existing teams. Select a team to add the user to that team.
You can add users to multiple teams.
TrueCommand applies team permissions to any user added to a team, but setting a specific permission for the user can override a related team permission.
Use the **Teams** screen to configure new or change an existing team.

### System Access

To limit the access that non-administrative accounts have to connected systems, configure the **System Access** and/or **System Groups** sections.
You must first configure [system connections]({{< relref "ConnectingTrueNAS.md" >}}) and/or [system groups]({{< relref "ConnectingTrueNAS.md" >}}) in TrueCommand. Add systems from either the **Dashboard** or **Systems** screens.

Click **ADD SYSTEM** and select a system from the drop-down to give the user access to that system.
To restrict the user to only viewing details about the system, select the **read** permission.
To remove a user’s access to a particular system, click **-** minus on the desired system to remove that user's system access.

When system groups are available, an **ADD GROUP** button displays.
Click **ADD GROUP** and select a group from the drop-down to give the user access to all the systems in that group.
To assign user's type of access to the group, select either the **read** or **read/write** permissions.
To remove a user’s access to a particular system group, click **-** (minus) on the desired group to remove that user from that system group.

## Resetting a User Password at Login

{{< include file="static/includes/TrueCommand/2.1/ResettingUserPassword.md.part" markdown="true" >}}

## Resetting a User Password from the Command Line

The Docker version of TrueCommand allows you to reset user passwords from the command line.
Open the shell on the system running the TrueCommand container and use the following command, replacing the values in brackets with their appropriate values. 

```
docker exec -it [docker instance ID] resetpw [username]
```

## Deleting User Accounts

To delete an account details and permissions, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Users**.
On the **Users** page, click the delete icon <i class="material-icons" aria-hidden="true" title="Delete">delete</i> to the right of the user you want to delete.
A popup displays to confirm deletion of the user.

![Users Delete](/images/TrueCommand/2.0/UsersDeleteUser.png "Users Delete")

## Organizing Users into Teams

To create a team, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Teams**.

![TeamsList](/images/TrueCommand/2.1/TeamsList.png "Teams List")

Clicking **NEW TEAM** displays the **New Team** configuration panel.

![TeamsAdd](/images/TrueCommand/2.0/TeamsNewTeam.png "Teams: Add")

Type a name and select an avatar for the new team.
You can edit the team permissions and settings after creating it.

### Configuring Teams

To configure a team, click on the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon and then click **Teams**. 
To change team members or permissions, click on the edit icon <i class="material-icons" aria-hidden="true" title="Configure">edit</i> for the team you selected on the list. 

![Teams Edit](/images/TrueCommand/2.0/TeamsEdit.png "Teams Edit")

You can change a team profile avatar, the team name, or grant team members permission to create new TrueCommand alert rules by selecting the **Enable alert creation** checkbox.

The **Members** section shows which user accounts are included in the team.
To add users to the team, click **ADD USER** and select users from the drop-down list.
To remove users from the team, click the **-** (minus) for the desired user.

System permissions are configured exactly the same way as described above for individual user system access.
Note that individual user account permissions can override team permissions.

## Deleting Teams

To delete an account details and permissions, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Teams**.
On the **Users** page, click the delete icon <i class="material-icons" aria-hidden="true" title="Delete">delete</i> to the right of the user you want to delete.
A popup displays to confirm deletion of the Team.

![Teams Delete](/images/TrueCommand/2.0/TeamsDeleteTeam.png "Teams Delete")

{{< hint info >}}
Deleting a team does not remove users or systems assigned to that team.
{{< /hint >}}
