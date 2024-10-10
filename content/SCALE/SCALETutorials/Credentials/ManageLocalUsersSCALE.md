---
title: "Managing Users"
description: "Provides instructions on adding and managing administrator and user accounts."
weight: 10
alias: /scale/scaleuireference/credentials/localusers/
tags:
- users
- accounts
keywords:
- enterprise storage solution
- nas storage
---

In TrueNAS, user accounts allow flexibility for accessing shared data.
Typically, administrators create users and assign them to [groups]({{< relref "ManageLocalGroups.md" >}}).
Doing so makes tuning permissions for large numbers of users more efficient.

When the network uses a directory service, import the existing account information using the instructions in [Directory Services]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}).

Using [Active Directory]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}) requires setting Windows user passwords in Windows.

To see user accounts, go to **Credentials > Users**.

{{< trueimage src="/images/SCALE/Credentials/AllUsersScreenSCALE.png" alt="Local User non-Built-in Accounts" id="Local User non-Built-in Accounts" >}}

TrueNAS hides all built-in users (except root) by default. Click the toggle **Show Built-In Users** to see all built-in users.

{{<include file="/static/includes/addcolumnorganizer.md">}}

## Creating an Administrator User Account

{{< include file="/static/includes/AddAdminUserAccount.md" >}}

### Assigning Administrative Group Privileges

SCALE 24.04 or newer supports administrator privileges for role-based administrator accounts.
Users can create new administrator accounts with limited privileges based on their needs.
Predefined administrator roles are read only, share admin, and the default full access local administrator account.
See [Using Administrator Logins]({{< relref "adminroles.md" >}}) for more information.

{{< include file="/static/includes/AddAdminGroup.md" >}}

## Creating User Accounts

When creating a user, you must:

* Enter a **Full Name** or description for the user, such as a first and last name.
* Enter a **Username** or accept the generated user name.
* Enter and enable a **Password**.
* Specify or accept the default user ID (**UID**)
* (Optional) Select the **Shell** the user has access to when they go to **System > Shell**. Not all users can select a shell.

All other settings are optional.
Click **Save** after configuring the user settings to add the user.

### Configuring a User
To create a new user, click **Add**.

{{< trueimage src="/images/SCALE/Credentials/AddUserIdentificationSettings.png" alt="Add User Identification Settings" id="Add User Identification Settings" >}}

Enter a personal name or description in **Full Name**, for example, *John Doe* or *Share Anonymous User*, then allow TrueNAS to suggest a simplified name derived from the **Full Name** or enter a name in **Username**.

Enter and confirm a password for the user.
Make sure the login password is enabled. Click the **Disable Password** toggle to enable/disable the login password.  
Setting the **Disable Password** toggle to active (blue toggle) disables these functions:
* The **Password** field becomes unavailable and TrueNAS removes any existing password from the account.
* The **Lock User** option disappears.
* The account is restricted from password-based logins for services like SMB shares and SSH sessions.

Enter a user account email address in the **Email** field if you want this user to receive notifications

Accept the default user ID or enter a new UID.
TrueNAS suggests a user ID starting at **3000**, but you can change it if you wish.
We recommend using an ID  of 3000 or greater for non-built-in users.

{{< trueimage src="/images/SCALE/Credentials/AddUser-UserIDAndGroupSettings.png" alt="Add User ID and Groups Settings" id="Add User ID and Groups Settings" >}}

Leave the **Create New Primary Group** toggle enabled to allow TrueNAS to create a new primary group with the same name as the user.
To add the user to a different existing primary group, disable the **Create New Primary Group** toggle and search for a group in the **Primary Group** field.
To add the user to more groups use the **Auxiliary Groups** dropdown list.

[Configure a home directory](#adding-home-directories) and permissions for the user. Some functions, such as replication tasks, require setting a home directory for the user configuring the task.

{{< trueimage src="/images/SCALE/Credentials/AddUserHomeDirPerm.png" alt="Add User Home Directory" id="Add User Home Directory" >}}

When creating a user, the default home directory path is set to **/var/empty**.
This directory is an immutable directory shared by service accounts and accounts that should not have a full home directory.
If set to this path TrueNAS does not create a home directory for the user. You must change this to the path for the dataset created for home directories.

To add a home directory, enter or browse to a path in **Home Directory**, then select **Create Home Directory**.
Select **Read**, **Write**, and **Execute** for each role (**User**, **Group**, and **Other**) to set access control for the user home directory.
Built-in users are read-only and can not modify these settings.

{{< expand "Why did this change in TrueNAS 24.04 (Dragonfish) and later?" "v" >}}
TrueNAS uses the `pam_mkhomdir` PAM module in the pam_open_session configuration file to automatically create user home directories if they do not exist.
`pam_mkhomedir` returns `PAM_PERM_DENIED` if it fails to create a home directory for a user, which eventually turns into a pam_open_session() failure.
This does not impact other PAM API calls, for example, `pam_authenticate()`.

TrueNAS SCALE does include the customized version of `pam_mkhomedir` used in TrueNAS CORE that specifically avoided trying to create the `/nonexistent` directory. This led to some circumstances where users could create the `/nonexistent` directory on SCALE versions before 24.04.

Starting in SCALE 24.04 (Dragonfish), the root filesystem of TrueNAS is read-only, which prevents `pam_mkhomdir` from creating the `/nonexistent` directory in cases where it previously did.
This results in a permissions error if `pam_open_session()` is called by an application for a user account that has **Home Directory** set to **/nonexistent**.
{{< /expand >}}

Assign a public SSH key to a user for key-based authentication by entering or pasting the public key into the **Authorized Keys** field.
You can click **Choose File** under **Upload SSH Key** and browse to the location of an SSH key file.

{{< trueimage src="/images/SCALE/Credentials/AddUserHomeDirAuth.png" alt="Add Authentication Settings" id="Add Authentication Settings" >}}

{{< hint type=important >}}
Do *not* paste the private key.
{{< /hint >}}

Always keep a backup of an SSH public key if you are using one.

As of SCALE 24.04, the **Shell** setting defaults to **nologin** for read only and sharing administrators, which means they cannot access the **Shell** screen.

Select the [shell]({{< relref "LocalUsersScreensSCALE.md" >}}) option for the admin user from the **Shell** dropdown list.
Options are **nologin**, **TrueNAS CLI**, **TrueNAS Console**, **sh**, **bash**, **rbash**, **dash**, **tmux**, and **zsh**.

To disable all password-based functionality for the account, select **Lock User**. Clear to unlock the user.

{{< include file="/static/includes/AdminSudo.md" >}}

Leave **SMB User** selected to allow using the account credentials to access data shared with [SMB]({{< relref "/SCALE/SCALEUIReference/Shares/_index.md" >}}).

Click **Save**.

### Adding Home Directories
To add a home directory for a user account, first create a dataset to use for user home directories, for example a dataset named *homedirs*.

Next, go to **Credentials > Users** and either click **Add** to add a new user and their home directory, or select an existing user, click **Edit**, and then add a home directory for the user.
While on the user configuration screen:

Enter the path to the new dataset for home directories in **Home Directory**. For example, change **/var/empty/** to the path to the new dataset */tank/homedirs*.

Next select **Create Home Directory**, and select the level of permissions you want to apply. We recommend leaving the default selections, **Read/Write/Execute** selected for the user home directory.

Click **Save**. TrueNAS creates the new home directory for the user.

## Editing User Accounts

To edit an existing user account, go to **Credentials > Users**.
Click anywhere on the user row to expand the user entry, then click **Edit** to open the **Edit User** configuration screen.
See [Local User Screens]({{< relref "LocalUsersScreensScale.md" >}}) for details on all settings.
