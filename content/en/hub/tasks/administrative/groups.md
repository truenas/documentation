---
title: "Managing Groups"
description: "A how-to for managing Groups in TrueNAS."
---

Using groups in TrueNAS can be an efficient way of managing permissions for
users. See <a href="/docs/tasks/administrative/users/">users</a> for managing
users. The interface provides management of UNIX-style groups. If the network
uses a directory service, import the existing account information using the
instructions in
<a href="/docs/initial-setup/directory-services/">Directory Services</a>.

> NOTE: TrueNAS hides all builtin groups by default. To show all builtin groups,
> go to **Accounts > Groups** and click <i class="fas fa-cog"></i>.

## Group Configuration

Each group is assigned a Group ID (GID). Enter a number above 1000 for a group
with user accounts. The GID cannot be changed later. Groups used by a service
must have an ID that matches the default port number used by the service. Next,
enter a descriptive name for the group. Group names cannot begin with a hyphen
(-) or contain a space, tab, or these characters: *, : + & # % ^ ( ) ! @ ~ \* ?
< > =*. The dollar sign ($) can only be used as the last character of the
username. By default, the *Permit Sudo* option is unset. When set, it allows
group members to act as the root account by using `sudo`. It is recommended to
leave this unset. The option *Samba Authentication* is set by default. This
option allows the group to be used for Samba permissions and authentication.
Finally, the *Allow Duplicate GIDs* option is unset by default. This setting
allows groups to have duplicate group IDs. Leaving this option unset is
recommended.

## Group Member Management

To manage existing groups, go to **Accounts > Groups** and click
<i class="fas fa-chevron-right"></i>. Here, you can edit group options,
manage members, or delete the group. Click *MEMBERS*. To add members to the
group, select them from the list of *All users* and click
<i class="fas fa-arrow-right"></i>. Multiple users can be selected by holding
<kbd>ctrl</kbd> while clicking each user.
