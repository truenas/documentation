---
title: "Users"
weight: 15
---

{{< toc >}}

TrueCommand has a robust user management system designed to allow TrueCommand administrators to personalize the TrueCommand experience for each user account.
You can create user accounts in the TrueCommand interface. Alternatively, LDAP can automatically create new user accounts when someone logs into TrueCommand with their LDAP credentials.

User accounts also organize into "Teams" for simultaneous management of large numbers or related user accounts.

## Adding Local User Accounts

To create a new user account, open the **Configure** <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> menu and click *Users > + NEW USER*.
Enter a descriptive user name and an authentication method for the user.

TrueCommand uses the *DEFAULT* authentication method to create unique credentials for logging in to the web interface.
The administrator has to provide these credentials to the intended user.

![UsersAdd](/images/TrueCommand/1.3/UsersAdd.png "Adding a new user")

You can assign users to existing *Teams* by selecting a team from the drop-down to add the user to that team.
You can assign users to multiple teams.

{{< hint warning >}}
Deleting a user account permanently removes the user and cannot be undone.
{{< /hint >}}

## Using LDAP to Add User Accounts

LDAP is also available for user accounts.
See the [TrueCommand Administration]({{< relref "settings.md#ldap" >}}) guide for details on LDAP configuration.

*LDAP/AD* allows using single sign-on credentials from the [Lightweight Directory Access Protocol (LDAP)](https://tools.ietf.org/html/rfc4511) or [Active Directory (AD)](https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/active-directory-domain-services).
This means a user can log in with an LDAP or AD account without creating a separate TrueCommand login.

The LDAP server IP address or DNS hostname and Domain are required to use LDAP/AD.
The LDAP or AD Username (optional) is required when the TrueCommand user name does not match the LDAP or AD credentials.

## Configuring User Accounts

To configure account details and permissions, open the *Configure* <i class="fa fa-cog" aria-hidden="true" title="Settings"></i>menu and click *Users > Edit user* <i class="fa fa-pencil" aria-hidden="true" title="Edit"></i>.

![Users Edit](/images/TrueCommand/1.3/UsersEdit.png "Users Edit")

There are several different elements that you can configure for a user, including the user's avatar, personal details, Team membership, and system permissions.

### User Details

You can add personal details about the user in this form. You may also designate the account as TrueCommand administrator or change the account password.
Saving changes to a user's password requires entering the current password for that user.
To go back to the original contents of the fields, click RESET FORM.

### Joined Teams

The *CREATE A NEW TEAM* button appears if no TrueCommand teams exist.
When teams are present, the *JOIN TEAM* button appears.
Click JOIN TEAM to add the user to a team.
You can add users to multiple teams.
TrueCommand applies team permissions to any user added to a team, but setting a specific permission for the user can override a related team permission.

### System Permissions

To limit the access that non-administrative accounts have to the connected systems, configure the **System Access** and/or **System Groups** sections.
This requires [system connections]({{< relref "/TrueCommand/GettingStarted/AddSystems.md#connecting-systems-to-truecommand" >}}) and/or [system groups]({{< relref "/TrueCommand/GettingStarted/AddSystems.md#organizing-systems-into-groups" >}}) have already been configured in TrueCommand.

Click *ADD SYSTEM* and select a system from the drop-down to give the user access to that system.
To restrict the user to only viewing details about the system, set the *read* permission.
To remove a user’s access to a particular system, click minus on the desired system.

When system groups are available, an *ADD GROUP* button appears.
Click *ADD GROUP* and select a group from the drop-down to give the user access to all the systems in that group.
To assign user's type of access to the group, choose *read* or *read/write* permissions.
To remove a user’s access to a particular system group, click *- (minus)* on the desired group.

## Organizing User Teams

Teams are collections of users with permissions that apply to all the joined user accounts.
Teams provide a more efficient way of managing large numbers of or related user accounts.
For example, changing the permissions of a *Metrics* team that has 20 joined user accounts is much faster than changing the permissions for each account.

To create a team, open the **Configure** <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> menu and click *TEAMS > + NEW TEAM*.

![TeamsAdd](/images/TrueCommand/1.3/TeamsAdd.png "Teams: Add")

Enter a name and select an avatar for the new team.
You can edit the permissions for a team after creating it.

### Configuring Teams

To adjust the team members or permissions, open the **Configure** <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> menu and click *Teams > Edit team* <i class="fas fa-pencil" aria-hidden="true" title="Edit"></i>.

![Teams Edit](/images/TrueCommand/1.3/TeamsEdit.png "Teams Edit")

You can adjust the team profile with a new avatar, change the team name, or grant team members permission to create new TrueCommand Alert Rules.

The **Members** section shows which user accounts are included in the team.
To add users to the team, click *ADD USER* and choose them from the drop-down.
To remove users from the team, click *- (minus)* on the desired user.

System permissions are configured exactly the same way as described above for individual user accounts.
Note that individual user account permissions can override team permissions.

## Resetting a User Password from the Command Line

The Docker version of TrueCommand allows you to reset user passwords from the command line.
Open the shell on the system running the TrueCommand Container and use the following command, replacing the values in brackets with their appropriate values. 

```
docker exec -it [docker instance ID] resetpw [username]
```
