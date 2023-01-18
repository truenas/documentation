---
title: "Users"
weight: 20
---

{{< toc >}}

TrueCommand has a robust user management system that lets administrators personalize the experience for each user account.
You can create user accounts in the TrueCommand interface. Alternatively, LDAP can automatically create new user accounts when someone logs into TrueCommand with their LDAP credentials.

You can also manage many user accounts simultaneously by organizing them into Teams.

## Adding Local User Accounts

To create a new user account, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Users > + NEW USER**.
Assign them a descriptive name and authentication method.

TrueCommand uses the default authentication method to create unique credentials for logging in to the web interface.
User names and passwords are case-sensitive.
The administrator must provide the user with their login credentials.

![UsersAdd](/images/TrueCommand/2.0/UsersNewUser.png "Adding a new user")

You can assign users to existing teams. After creating the team, you can add the user in the **New User** configuration panel by selecting **Teams** on the drop-down menu.
You can assign users to multiple teams.

If the user needs to be an administrator, check the **TrueCommand Administrator** box.

When finished, click **Create User**.

## Configuring User Accounts

To configure account details and permissions, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Users**.

![UsersList](/images/TrueCommand/2.1/UsersList.png "List of Users")

To edit a user, click the edit icon <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![Users Edit](/images/TrueCommand/2.0/UsersEditUser21.png "Users Edit")

There are several different user elements that you can configure, including their avatar, personal details, contact email address, team membership, and system permissions.

### User Details

Users or admins can add personal details about the user on this page. 

To revert to the original field contents, click **RESET FORM** before you click **SAVE CHANGES**.

| Setting | Description |
|---------|-------------|
| **Username** | Enter or change the username. |
| **Full Name** | Enter or change the user full name. |
| **Title** | Enter or change the user title. |
| **Email** | Enter or change the user email. If [SMTP]({{< relref "TrueCommand/Alerts/AlertManage.md" >}}) is not set up, an error message displays at the bottom of the screen stating **Failed to send email. Are your SMTP settings configured?**. Admins can click the **CONFIGURE** button to open the SMTP settings window. Before adding a user email, go to **Alert Services** and verify you have set up the SMTP service. |
| **Phone** | Enter or change the user phone number. |
| **Two Factor Authentication** | Enables [Two Factor Authentication]({{< relref "truecommand/tcgettingstarted/useraccounts.md" >}}), which requires the user to enter a validation code emailed to them after they enter their username, password, and click **SIGN IN** on the login screen. |
| **TrueCommand Administrator** | Designates the account as an administrator. |
| **Password** | New user password. |
| **Password Confirm** | Confirms new user password. |

### Joined Teams

The **CREATE A NEW TEAM** button displays if a TrueCommand team does not exist.
When teams exist, the **JOIN TEAM** button displays instead.

Click **JOIN TEAM** to display the list of existing teams, then select a team to add the user to it.
You can add users to multiple teams.
TrueCommand applies team permissions to any user added to a team, but setting specific permissions for users can override related team permissions.
Use the **Teams** screen to create new teams or edit existing ones.

### System Access

To limit non-administrative account access to connected systems, configure the **System Access** and **System Groups** sections.
You must first configure [system connections]({{< relref "ConnectingTrueNAS.md" >}}) and/or [system groups]({{< relref "ConnectingTrueNAS.md" >}}) in TrueCommand. Add systems from either the **Dashboard** or **Systems** screens.

Click **ADD SYSTEM** and select a system from the drop-down to give the user access to that system.
To restrict them to viewing system details, select the **read** permission.
To remove their access to a particular system, click **-** minus on that system.

When TrueCommand has system groups, the **ADD GROUP** button displays.
Click **ADD GROUP** and select a group from the drop-down to give the user access to all the systems in that group.
To choose the user group permissions, select **read** or **read/write**.
To remove their access to a particular system group, click **-** (minus) on that group.

## Resetting a User Password at Login

{{< include file="static/includes/TrueCommand/2.1/ResettingUserPassword.md.part" markdown="true" >}}

## Resetting a User Password from the Command Line

The Docker version of TrueCommand allows you to reset user passwords from the command line.
Open the **Shell** on the TrueNAS system running the TrueCommand container and use the following command, replacing the values in brackets with their appropriate values. 

```
docker exec -it [docker instance ID] resetpw [username]
```

## Deleting User Accounts

To delete an account, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Users**.
On the **Users** page, click the delete icon <i class="material-icons" aria-hidden="true" title="Delete">delete</i> to the right of the user you want to delete.
A popup displays to confirm user deletion.

![Users Delete](/images/TrueCommand/2.0/UsersDeleteUser.png "Users Delete")

## Organizing Users into Teams

To create a team, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Teams**.

![TeamsList](/images/TrueCommand/2.1/TeamsList.png "Teams List")

Clicking **NEW TEAM** displays the **New Team** configuration panel.

![TeamsAdd](/images/TrueCommand/2.0/TeamsNewTeam.png "Teams: Add")

Type a name and select an avatar for the new team.
You can edit team permissions and settings after creating it.

### Configuring Teams

To configure a team, click on the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon and then click **Teams**. 
To change team members or permissions, click on the edit icon <i class="material-icons" aria-hidden="true" title="Configure">edit</i> for the team you selected on the list. 

![Teams Edit](/images/TrueCommand/2.0/TeamsEdit.png "Teams Edit")

You can change a team profile avatar or name or grant team members permission to create new TrueCommand alert rules by selecting the **Enable alert creation** checkbox.

The **Members** section shows which accounts are in the team.
To add users to the team, click **ADD USER** and select users on the drop-down list.
To remove users from the team, click the **-** (minus) next to the users you want to remove.

You can configure system permissions the same way as individual user system access.
Note that individual user account permissions can override team permissions.

## Deleting Teams

To delete account details and permissions, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Teams**.
On the **Users** page, click the delete icon <i class="material-icons" aria-hidden="true" title="Delete">delete</i> to the right of the user you want to delete.
A popup displays to confirm the team deletion.

![Teams Delete](/images/TrueCommand/2.0/TeamsDeleteTeam.png "Teams Delete")

{{< hint info >}}
Deleting a team does not remove users or systems assigned to that team.
{{< /hint >}}
