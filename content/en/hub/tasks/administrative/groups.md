---
title: "Managing Groups"
description: "How to add or manage user account Groups."
---

Using groups in TrueNAS can be an efficient way of managing permissions for many similar user accounts. See <a href="/hub/tasks/administrative/users/">users</a> for managing users. The interface provides management of UNIX-style groups. If the network uses a directory service, import the existing account information using the instructions in
<a href="/hub/initial-setup/directory-services/">Directory Services</a>.

{{% pageinfo %}}
TrueNAS hides all built-in groups by default. To show all built-in groups, go to **Accounts > Groups** and click <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>.
{{% /pageinfo %}}

## Group Configuration

Each group is assigned a Group ID (GID). Enter a number above *1000* for a group with user accounts. The GID cannot be changed later. Groups used by a service must have an ID that matches the default port number used by the service.

Next, enter a descriptive name for the group. Group names cannot begin with a hyphen (-) or contain a space, tab, or these characters: *, : + & # % ^ ( ) ! @ ~ \* ? < > =*. The dollar sign ($) can only be used as the last character of the username.

By default, the *Permit Sudo* option is unset. When set, it allows group members to act as the root account by using `sudo`. It is recommended to leave this unset.

The option *Samba Authentication* is set by default. This option allows the group to be used for Samba permissions and authentication.

Finally, the *Allow Duplicate GIDs* option is unset by default. This setting allows groups to have duplicate group IDs. Leaving this option unset is recommended.

## Group Member Management

To manage existing group membership, go to **Accounts > Groups** and click <i class="fas fa-chevron-right" aria-hidden="true" title="Right Chevron"></i>. Here, you can edit group options,  manage members, or delete the group. Click *MEMBERS*. To add user accounts to the group, select them from the list of *All users* and click <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>. Multiple users can be selected by holding <kbd>ctrl</kbd> while clicking each user.
