---
title: "Adding and Organizing Users in TrueCommand"
linkTitle: "User Management"
description: "How to add, configure, and organize users in TrueCommand"
type: docs
---

{{% pageinfo version="TrueCommand 1.2" %}}
{{% /pageinfo %}}

TrueCommand has a robust user management system designed to allow TrueCommand administrators to personalize the TrueCommand experience for each user account.
User accounts can be created within the TrueCommand interface or you can configure [LDAP]({{< relref "administration.md#ldap" >}}) to automatically create a new user account when someone logs into TrueCommand with their LDAP credentials.

User accounts can also be organized into Teams for simultaneous management of large numbers or related user accounts.

## Adding User Accounts

To create a new user account, open the **Configure (Gear)** menu and click **Users > + NEW USER**.
Enter a descriptive user name and an authentication method for the user.

The *DEFAULT* authentication method is used to create unique credentials for logging in to the TrueCommand web interface.
The administrator has to provide these credentials to the intended user.

*LDAP/AD* allows using single sign-on credentials from the [Lightweight Directory Access Protocol (LDAP)](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol) or [Active Directory (AD)](https://en.wikipedia.org/wiki/Active_Directory).
This means a user can log in with an LDAP or AD account without creating a separate TrueCommand login.

The LDAP server IP address or DNS hostname and Domain are required to use LDAP/AD.
The LDAP or AD Username (optional) is required when the TrueCommand user name does not match the LDAP or AD credentials.

<img src="/images/tc-users-create.png">
<br><br>

Users can also be assigned to existing Teams.
Select a team from the drop-down to add the user to that team.
Users can be members of multiple teams.

{{% alert title="Permanent Action" color="warning" %}}
Deleting a user account permanently removes the user and cannot be undone.
{{% /alert %}}

## Configuring User Accounts

To configure account details and permissions, open the **Configure (Gear)** menu, click **Users** and **Edit user (Pencil)**.

<img src="/images/tc-users-edit.png">
<br><br>

There are several different elements that can be configured for a user, including the user's avatar, personal details, Team membership, and system permissions.

### User Details

You can add personal details about the user in this form, designate the account as TrueCommand administrator, or change the account password.
Saving changes to a user's password requires entering the current password for that user.
To go back to the original contents of the fields, click RESET FORM.

### Joined Teams

The **CREATE A NEW TEAM** button appears if no TrueCommand teams exist.
When teams are present, the **JOIN TEAM** button appears.
Click JOIN TEAM to add the user to a team.
Users can be added to multiple teams.
Team permissions are applied to this user account, but setting a specific permission for this user can override a related team permission.

### System Permissions

To limit the access that non-administrative accounts have to the connected systems, configure the **System Access** and/or **System Groups** sections.
This requires [system connections]({{< relref "add-systems.md#connecting-systems-to-truecommand" >}}) and/or [system groups]({{< relref "add-systems.md#organizing-systems-into-groups" >}}) have already been configured in TrueCommand.

Click **ADD SYSTEM** and select a system from the drop-down to give the user access to that system.
To restrict the user to only viewing details about the system, set the *read* permission.
To remove a user’s access to a particular system, click minus on the desired system.

When system groups are available an **ADD GROUP** button appears.
Click **ADD GROUP** and select a group from the drop-down to give the user access to all the systems in that group.
To assign user's type of access to the group, choose *read* or *read/write* permissions.
To remove a user’s access to a particular system group, click *- (minus)* on the desired group.

## Organizing User Teams

Teams are a collection of users with permissions that are applied to all the joined user accounts.
They provide a more efficient way of managing large numbers of or related user accounts.
For example, changing the permissions of a *Metrics* team that has 20 joined user accounts is much faster than changing the permissions for each account.

To create a team, open the **Configure (Gear)** menu and click **TEAMS** > **+ NEW TEAM**.

<img src="/images/tc-teams-create.png">
<br><br>

Enter a name and select an avatar for the new team.
You can edit the permissions for a team after creating it.

### Configuring Teams

To adjust the team members or permissions, open the **Configure (Gear)** menu and click **Teams** > **Edit team (Pencil)**.

<img src="/images/tc-teams-edit.png">
<br><br>

You can adjust the team profile with a new avatar, change the team name, or grant team members permission to create new TrueCommand Alert Rules.

The **Members** section shows which user accounts are included in the team.
To add users to the team, click **ADD USER** and choose them from the drop-down.
To remove users from the team, click **- (minus)** on the desired user.

The system permissions are configured exactly the same way as described above for individual user accounts.
Note that individual user account permissions can override team permissions.