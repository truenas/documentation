---
title: "Managing Groups"
description: "How to add or manage user account groups."
---

Using groups in TrueNAS can be an efficient way of managing permissions for many similar user accounts.
See <a href="/hub/initial-setup/security/accounts/users/">users</a> for managing users.
The interface provides management of UNIX-style groups.
If the network uses a directory service, import the existing account information using the instructions in
<a href="/hub/initial-setup/security/directory-services/activedirectory/">Directory Services</a>.

To see saved groups, go to **Accounts > Groups**

<img src="/images/AccountsGroupsList.png">
<br><br>

By default, groups that are built in to the system are hidden.
To see built-in groups, click <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp: and **SHOW**.

## Adding a New Group

To create a new group, go to **Accounts > Groups** and click **ADD**.

<img src="/images/AccountsGroupsAdd.png">
<br><br>

Each group is assigned a Group ID (**GID**).
Enter a number above *1000* for a group with user accounts.
The GID cannot be changed later.
Groups used by a service must have an ID that matches the default port number used by the service.

Next, enter a descriptive name for the group.
Group names cannot begin with a hyphen (`-`) or contain a space, tab, or these characters: `, : + & # % ^ ( ) ! @ ~ * ? < > =`.
The dollar sign (`$`) can only be used as the last character of the username.

By default, the **Permit Sudo** option is unset.
When set, it allows group members to act as the root account by using [sudo](https://www.sudo.ws/man/1.8.3/sudo.man.html).
It is recommended to leave this unset.

The option **Samba Authentication** is set by default.
<!-- markdown-link-check-disable-next-line -->
This option allows group members to be used for [SMB](/hub/sharing/smb/) permissions and authentication.

Finally, the **Allow Duplicate GIDs** option is unset by default.
This allows groups to have duplicate group IDs.
Leaving this option unset is recommended.

## Group Member Management

After a group is created, user accounts can then be added or removed from the group.
To manage existing group membership, go to **Accounts > Groups**, click <i class="fas fa-chevron-right" aria-hidden="true" title="Right Chevron"></i>, and **MEMBERS**.

<img src="/images/AccountsGroupsMembers.png">
<br><br>

To add user accounts to the group, select them from the list of *All users* and click <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.
Multiple users can be selected by holding <kbd>ctrl</kbd> while clicking each user.
