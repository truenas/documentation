---
title: "Groups"
weight: 10
---

{{< toc >}}

Using groups in TrueNAS can be an efficient way of managing permissions for many similar user accounts.
See [Users]({{< relref "Users.md" >}})for managing users.
The interface provides management of UNIX-style groups.
If the network uses a directory service, import the existing account information using the instructions in [Active Directory]({{< relref "ActiveDirectory.md" >}}).

## View Existing Groups

To see saved groups, go to **Accounts > Groups**

![AccountsGroupsList](/images/CORE/12.0/AccountsGroupsList.png "Accounts Groups List")

By default, groups built in to the system are hidden.
To see built-in groups, click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> and *SHOW*.

## Add a New Group

To create a new group, go to **Accounts > Groups** and click *ADD*.

![AccountsGroupsAdd](/images/CORE/12.0/AccountsGroupsAdd.png "Accounts Groups Add")

Each group is assigned a Group ID (*GID*).
Enter a number above *1000* for a group with user accounts.
The GID cannot be changed later.
Groups used by a system service must have an ID that matches the default port number used by the service.

Next, enter a descriptive group *Name*.
Group names cannot begin with a hyphen (`-`) or contain a space, tab, or these characters: `, : + & # % ^ ( ) ! @ ~ * ? < > =`.

By default, the *Permit Sudo* option is unset.
Setting allows group members to act as the root account by using [sudo](https://www.sudo.ws/man/1.8.3/sudo.man.html).
A common security practice is to leave this disabled.

The option **Samba Authentication** is set by default.
This allows group members to be used for [SMB]({{< relref "SMBShare.md" >}}) permissions and authentication.

Finally, *Allow Duplicate GIDs* allows setting a duplicate group ID, but can greatly complicate system configurations.
Leaving this option unset is recommended.

## Group Member Management

Register user accounts to a group to simplify permissions and access to large numbers of user accounts.
To manage group membership, go to **Accounts > Groups**, click the <i class="fa fa-chevron-right" aria-hidden="true" title="Right Chevron"></i> for a group, and click <i class="material-icons" aria-hidden="true" title="Group">group</i> **MEMBERS**:

![AccountsGroupsMembers](/images/CORE/12.0/AccountsGroupsMembers.png "Managing Group Members")

To add user accounts to the group, select them in **All users** and click <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.
Select multiple users by holding <kbd>CTRL</kbd> while clicking each entry.
