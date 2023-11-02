---
title: "Creating User Accounts"
description: "Describes creating and managing user accounts, system permissions, and user two-factor authentication in TrueCommand."
weight: 45
tags:
- tcadmin
- tcusers
- tcconfig
- tc2fa
---

{{< toc >}}

TrueCommand has a robust user management system designed to allow TrueCommand administrators to personalize the TrueCommand experience for each user account.
You can either individually create user accounts in the TrueCommand interface or allow LDAP to automatically create new user accounts when someone logs into TrueCommand with their LDAP credentials.

TrueCommand also organizes user accounts into *teams* which allows admins to simultaneously manage many user accounts.

## TrueCommand Account Types

TrueCommand has two types of accounts, administrators and users.

Administrators can add and remove users and servers and assign users to teams and servers to groups. 
Administrators have full access to all alerts and reports and system LDAP configuration settings.

Users, can only interact with the systems assigned to them by an administrator.  
Users can configure alerts, add datasets, shares, snapshots and snapshot tasks, create and generate reports, and manage systems assigned to them, but cannot add or manage users, systems, or perform tasks for other systems.

## Creating User Accounts

To create a new user account, click the gear <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon, then click **Users > NEW USER**.
Enter a descriptive user name and an authentication method for the user.

TrueCommand uses the default authentication method to create unique credentials for logging in to the web interface.
The administrator must provide these credentials to the intended user.

![UsersAdd](/images/TrueCommand/Users/UsersNewUser.png "Adding a new user")

To create an administrator account, select **TrueCommand Administrator**.

## Using Two Factor Authentication

Two-factor authentication double-checks the authentication of an account user.
The first verification occurs when the user logs in with a username and a password.
Two-factor authentication adds an extra step in the process, a second security layer, that reconfirms their identity.
If basic password security measures are in place, two-factor authentication makes it more difficult for unverified users to log in to your account.

Enabling two-factor authentication requires an already-authenticated email address. 
Authenticating a user email address requires first setting up [SMTP email]({{< relref "AlertManage.md" >}}) on the **Alert Services** screen.

To verify a user email address and set 2FA:

![2faSet](/images/TrueCommand/Users/2fa_setup.png "Setting Two Factor Authentication")

1. Enter the email address for the user and click **Save Changes**.
2. Check the user email account for the verification code. Copy the code from the email.
3. Paste the code in the **Confirmation code** field in the confirmation window. Click **OK**.
4. Set **Enable 2FA** and click **Save Changes**.

## Using LDAP Automatic User Creation

{{< include file="content/_includes/TrueCommandLDAP.md" >}}

## Adding Teams and Permissions

You can assign users to existing teams by selecting a team from the **Teams** dropdown to add the user to that team.
You can assign users to multiple teams.
For more indepth information regarding teams, see the [Teams Documentation]({{< relref "/TrueCommand/AdminGuide/Users.md" >}}).

To limit non-administrative account access to connected systems, configure the **System Access** and/or **System Groups** sections.
This requires first configuring [system connections]({{< relref "Systems.md" >}}) and/or system groups in TrueCommand.

Click **ADD SYSTEM** and select a system from the dropdown to give the user access to that system.
To restrict the user to only viewing details about the system, set the **read** permission.
To remove user access to a particular system, click **-** (minus) on that system.

When system groups are available, the **ADD GROUP** button displays.
Click **ADD GROUP** and select a group from the dropdown list to give the user access to all the systems in that group.
To assign a user a type of access to the group, choose **read** or **read/write** permissions.
To remove user access to a particular system group, click **-** (minus) on the desired group.

{{< include file="content/_includes/TCPermissionsHierarchy.md" >}}

## Resetting a User Password at Login

{{< include file="content/_includes/TCResettingUserPassword.md" >}}

{{< taglist tag="tcusers" limit="10" title="Related User Articles" >}}