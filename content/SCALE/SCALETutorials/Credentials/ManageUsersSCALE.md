---
title: "Managing Users"
description: "Provides instructions on adding and managing administrator and user accounts."
weight: 10
aliases:
- /scale/scaleuireference/credentials/localusersscreensscale/
tags:
- users
- accounts
keywords:
- enterprise storage solution
- nas storage
---

In TrueNAS, user accounts allow flexibility for accessing shared data.
Typically, administrators create users and assign them to [groups]({{< ref "ManageLocalGroups" >}}).
Doing so makes tuning permissions for large numbers of users more efficient.

When the network uses a directory service, import the existing account information using the instructions in [Directory Services]({{< ref "/SCALE/SCALEUIReference/Credentials/DirectoryServices" >}}).

Using [Active Directory]({{< ref "/SCALE/SCALEUIReference/Credentials/DirectoryServices" >}}) requires setting Windows user passwords in Windows.

To see user accounts, go to **Credentials > Users**.

{{< trueimage src="/images/SCALE/Credentials/UsersScreen.png" alt="User Screen" id="User Screen" >}}

TrueNAS hides all built-in users (except root) by default.
Click the down arrow in the **Filter by Type** dropdown field to see all user options, including **Built-In**, **Local** (default option), and **Directory Services**.
You can select any or all options to show all users configured in TrueNAS.
To filter the user table, click the header column name to sort as ascending/descending order or use the advanced search option to select the criteria you want to use to search for a user or type of user.

{{<include file="/static/includes/addcolumnorganizer.md">}}

## Creating an Administrator User Account

{{< include file="/static/includes/AddAdminUserAccount.md" >}}

### Assigning Administrative Group Privileges

TrueNAS 24.04 or newer supports administrator privileges for role-based administrator accounts.
Users can create new administrator accounts with limited privileges based on their needs.
Predefined administrator roles are read-only, share admin, and the default full access administrator account.
See [Using Administrator Logins]({{< ref "adminroles" >}}) for more information.

{{< include file="/static/includes/AddAdminGroup.md" >}}

## Creating User Accounts

**SMB User** is selected by default to allow using the account credentials to access data shared with [SMB]({{< ref "/SCALE/SCALEUIReference/Shares" >}}).

When creating a user, you must:

* Enter a **Full Name** or description for the user, such as a first and last name.
* Enter a **Username**.
* Enter a **Password**.
* Specify or accept the default user ID (**UID**)

Other options are required based on the level of access and role assigned to the user.
The **Shell** option only shows for users with **Shell Access** or **SSH Access** selected.

{{< include file="/static/includes/AddingAUser.md" >}}

### Disabling a Password

To disable a password, select the user, click **Edit**, and then select **Disable Password**.
Setting **Disable Password** hides the **Password** widget, and TrueNAS removes any existing password from the account.
The account is restricted from password-based logins for services like SMB shares and SSH sessions.

To disable all password-based functionality for the account, select **Lock User** option on the **Access** widget.
This toggles to **Unlock User** when locked.

### Adding Home Directories

You can add a home directory to a new or an existing user account.
You can create a dataset to use for user home directories if one does not exist before you add or edit a user or create it while adding or editing the user.

To add a home directory to an existing user, go to **Credentials > Users**, click on the user row, and then click **Edit** to open the **Edit User** screen.
Scroll down to the **Home Directory** option, click in the field to show the settings.

Select **Create Home Directory**, then enter or browse to select the path to the dataset for home directories in **Home Directory**. For example, change **/var/empty/** to the path to a new dataset.For example, */tank/homedirs*.

Accept the default permissions or clear the checkmark to select the level of permissions you want to apply.
We recommend leaving the default selections, **Read/Write/Execute** selected for the user home directory.

Click **Save**. TrueNAS creates a new home directory for the user.

## Editing User Accounts

To edit an existing user account, go to **Credentials > Users**.
Click anywhere on the user row, then click **Edit** to open the **Edit User** configuration screen.
See [Users Screen]({{< ref "UsersScreen" >}}) for details on all settings.

## Setting Up and Using API Keys

To view API keys that are linked to different user accounts, go to the **Settings** icon on the top toolbar and select **My API Keys**, or go to **Credentials > Users**, select the user row, and then click the **View API Keys** link on the **Access** widget to open the **User API Keys** screen.
If a key does not exist for the user, click on the **Add API Key** link to open the **Add API Key** screen.

The **Users API Keys** screen shows a table of all API keys linked to user accounts on your TrueNAS.

You can edit or delete your API keys in the **User API Keys** screen.
Click <i class="material-icons" aria-hidden="true" title="Edit">edit</i> **Edit** to open the **Edit API Key** screen.
Click <i class="material-icons" aria-hidden="true" title="Delete">delete</i> **Delete** to delete an API key.

### Adding An API Key

To add an API key for a user, select the user row on the **Users** table, and then click **Add API Key** to open the **Add API Key** screen.
Enter a name for the key, select the user in the **Username** dropdown list field if not already populated with the correct username, and click **Save**.

To set the API key to expire, clear the checkmark in **Non-expiring**, then select the date using the calendar option in the field to set when this key expires.

{{< trueimage src="/images/SCALE/Credentials/AddAPIKeyExpiration.png" alt="Set API Key Expiration" id="Set API Key Expiration" >}}

After setting the date, click **Save**. The **Access** widget for this user shows the API Key icon and the **View API Keys** link.