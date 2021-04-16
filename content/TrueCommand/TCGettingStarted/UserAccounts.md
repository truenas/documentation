---
title: "Creating User Accounts"
weight: 30
---

{{< toc >}}

TrueCommand has a robust user management system designed to allow TrueCommand administrators to personalize the TrueCommand experience for each user account.
You can create user accounts in the TrueCommand interface. Alternatively, LDAP can automatically create new user accounts when someone logs into TrueCommand with their LDAP credentials.

User accounts also organize into "Teams" for simultaneous management of large numbers or related user accounts.


## Administrator Accounts

TrueCommand has two levels of accounts: Administrators and Users.
Administrators can add and remove users and servers.
Administrators can also assign Users to Teams and Servers to Groups.
Administrators have full access to all Alerts and Reports.
Users on the other other hand can only interact with the servers they have been assigned by an Administrator.  
Users can configure alerts and generate reports on their respective systems.


## Users and Teams

To create a new user account, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click *Users > + NEW USER*.
Enter a descriptive user name and an authentication method for the user.

TrueCommand uses the *DEFAULT* authentication method to create unique credentials for logging in to the web interface.
The administrator has to provide these credentials to the intended user.

![UsersAdd](/images/TrueCommand/2.0/UsersNewUser.png "Adding a new user")

## Automatic Creation with LDAP

{{< include file="static/includes/TrueCommand/2.0/TrueCommandLDAP.md.part" markdown="true" >}}

### Teams and Permissions

You can assign users to existing *Teams* by selecting a team from the drop-down to add the user to that team.
You can assign users to multiple teams.
TrueCommand applies team permissions to any user added to a team, but setting a specific permission for the user can override a related team permission.
For more indepth inforamation regarding teams, see the [Teams Documentation]({{< relref "/TrueCommand/Administration/Users.md#organizing-user-teams" >}}).

To limit the access that non-administrative accounts have to the connected systems, configure the **System Access** and/or **System Groups** sections.
This requires that [system connections]({{< relref "/TrueCommand/TCGettingStarted/ConnectingTrueNAS.md#connecting-systems-to-truecommand" >}}) and/or system groups have already been configured in TrueCommand.

Click *ADD SYSTEM* and select a system from the drop-down to give the user access to that system.
To restrict the user to only viewing details about the system, set the *read* permission.
To remove a user’s access to a particular system, click minus on the desired system.

When system groups are available, an *ADD GROUP* button appears.
Click *ADD GROUP* and select a group from the drop-down to give the user access to all the systems in that group.
To assign user's type of access to the group, choose *read* or *read/write* permissions.
To remove a user’s access to a particular system group, click *- (minus)* on the desired group.
