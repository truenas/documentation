---
title: "Local Groups"
geekdocCollapseSection: true
weight: 20
---

{{< toc >}}

TrueNAS offers groups as an efficient way to manage permissions for many similar user accounts.
See [Users]({{< relref "ManageLocalUsersSCALE.md" >}}) for managing users.
The interface lets you manage UNIX-style groups.
If the network uses a directory service, import the existing account information using the instructions in [Active Directory]({{< relref "/content/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}).

## View Existing Groups

To see saved groups, go to **Credentials > Local Groups**.

![LocalGroupsSCALE](/images/SCALE/LocalGroupsSCALE.png "Local Groups List")

By default, TruNAS hides the system's built-in groups.
To see built-in groups, click <i class="material-icons" aria-hidden="true" title="Settings">settings</i> then click *Show*.

## Add a New Group

To create a group, go to **Credentials > Local Groups** and click *Add*.

![NewGroupSCALE](/images/SCALE/NewGroupSCALE.png "New Local Groups")

| Setting | Description |
|------|------|
| GID | The Group ID (*GID*) is a unique number TrueNAS uses to identify a Unix group. Enter a number above *1000* for a group with user accounts (you cannot change the *GID* later). If a system service uses a group, the group ID must match the service's default port number. |
| Name | Group name cannot begin with a hyphen `(-)`. Group name cannot contain a space, tab, or any of these characters: `, : + & # % ^ ( ) ! @ ~ * ? < > =`. You may only use `$` as a username's last character. |
| Permit Sudo | Allow group members to use [sudo](https://www.sudo.ws/). TrueNAS prompts group members for their password when using sudo. Leave *Permit Sudo* disabled for better security. |
| Samba Authentication | Set to let Samba permissions and authentication use group. |
| *Allow Duplicate GIDs* | Allows more than one group to have the same group ID. **We do not recommend enabling this.** |

## Group Member Management

Register user accounts to a group to simplify permissions and access to large numbers of user accounts.
To manage group membership, go to **Credentials > Local Groups**, expand the group entry, and click <i class="material-icons" aria-hidden="true" title="Group">group</i> **Members**:

![GroupMembersSCALE](/images/SCALE/GroupMembersSCALE.png "Managing Group Members")

To add user accounts to the group, select them in All users and click <i class="fa fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.
Select multiple users by holding <kbd>CTRL</kbd> while clicking each entry.
