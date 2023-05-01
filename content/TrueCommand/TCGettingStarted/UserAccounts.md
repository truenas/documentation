---
title: "Creating User Accounts"
description: "This article describes how to create user accounts in TrueCommand."
weight: 20
tags:
- tcinstall
- tcuser
- scaletoptoolbar
- coretoptoolbar
---

{{< toc >}}

TrueCommand has a robust user management system designed to allow TrueCommand administrators to personalize the TrueCommand experience for each user account.
You can create user accounts in the TrueCommand interface. Alternatively, LDAP can automatically create new user accounts when someone logs into TrueCommand with their LDAP credentials.

TrueCommand also organizes user accounts into *teams* so admins can simultaneously manage many user accounts.

## Administrator Accounts

TrueCommand has two levels of accounts - administrators, and users:

Administrators can add and remove users and servers.
Administrators can also assign users to teams and servers to groups.
Administrators have full access to all alerts and reports.

Users, however, can only interact with the servers they are assigned by an administrator.  
Users can configure alerts and generate reports on their respective systems.

## Users Accounts

To create a new user account, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Users > + NEW USER**.
Enter a descriptive user name and an authentication method for the user.

TrueCommand uses the *default* authentication method to create unique credentials for logging in to the web interface.
The administrator must provide these credentials to the intended user.

![UsersAdd](/images/TrueCommand/2.0/UsersNewUser.png "Adding a new user")

## Two Factor Authentication


Two-factor authentication double-checks the authentication of an account user.
The first verification occurs when the user logs in with a username and a password.
Two-factor authentication adds an extra step in the process, a second security layer, that re-confirms their identity.
If basic password security measures are in place, two-factor authentication makes it more difficult for unverified users to log in to your account.

Enabling two-factor authentication requires an already-authenticated email address. Authenticating a user email address requires first setting up [SMTP Email]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) in **Settings-> Alert Services**.

To verify a user email address and set 2FA:

![2faSet](/images/TrueCommand/2.0/2fa_setup.png "Setting Two Factor Authentication")

* Enter the email address for the user and click **Save Changes**.
* Check the user's email account for the verification code. Copy the code from the email.
* Paste the code in the **Confirmation code** field in the confirmation window. Click **OK**.
* Set **Enable 2FA** and click **Save Changes**.

## Automatic Creation with LDAP

{{< include file="content/_includes/TrueCommandLDAP.md" type="page" >}}

## Teams and Permissions

You can assign users to existing teams by selecting a team from the **Teams** drop-down to add the user to that team.
You can assign users to multiple teams.
TrueCommand applies team permissions to any user added to a team, but setting specific permissions for the user can override related team permissions.
For more indepth information regarding teams, see the [Teams Documentation]({{< relref "/TrueCommand/Administration/Users.md" >}}).

To limit non-administrative account access to connected systems, configure the **System Access** and/or **System Groups** sections.
This requires first configuring [system connections]({{< relref "/content/TrueCommand/Administration/Systems.md" >}}) and/or system groups in TrueCommand.

Click **ADD SYSTEM** and select a system from the drop-down to give the user access to that system.
To restrict the user to only viewing details about the system, set the **read** permission.
To remove user access to a particular system, click **-** (minus) on that system.

When system groups are available, an **ADD GROUP** button displays.
Click **ADD GROUP** and select a group from the drop-down list to give the user access to all the systems in that group.
To assign a user a type of access to the group, choose **read** or **read/write** permissions.
To remove user access to a particular system group, click **-** (minus) on the desired group.

## Resetting a User Password at Login

{{< include file="content/_includes/TCResettingUserPassword.md" type="page" >}}

{{< taglist tag="tcinstall" limit="10" >}}
