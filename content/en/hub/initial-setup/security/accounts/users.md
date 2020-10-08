---
title: "Managing Users"
description: "How to add or manage user accounts."
---

User accounts can be added to the TrueNAS system to allow flexibility for user permissions to access shared data. A common practice is to create users and assign them to <a href="/hub/tasks/administrative/groups/">groups</a>. This practice allows for easy and efficient permission tuning. If the network uses a directory service, import the existing account information using the instructions in <a href="/hub/initial-setup/directory-services/">Directory Services</a>. 

{{% pageinfo %}}
TrueNAS hides all built-in users by default. To show all built-in users, go to **Accounts > Users** and click <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>.
{{% /pageinfo %}}

## Identification

To create a user, go to **Accounts > Users** and click *ADD*. Enter the full name of the user. The username is set based off the full name. However, the username can be changed if desired. An optional email can be associated with an user account. Set a password for the user.

## User ID and Groups

Next, a user ID must be set. TrueNAS automatically sets the user ID starting at 1000. The user ID can be changed if desired. It is recommended to use an ID of 1000 or more for non-builtin users. By default, TrueNAS creates a new primary group with the same name as the user. To add the user to an existing primary group, unset *New Primary Group* and select an existing group from the *Primary Group* drop-down. The user can be added to additional groups using the *Auxillary Groups* drop-down.

## Directories and Permissions

When creating a user, a home directory path of /nonexistent is set. This does not create a home directory for the user. To set a home directory for the user, select a path using the file browser. If the directory exists and matches the username, it is set as the user's home directory. When the path does not end with a subdirectory matching the username, a new subdirectory is created. The full path to the user's home directory is shown here when editing a user. Directly under the file browser, the home directory permissions can be set. 

## Authentication

A public SSH key can be assigned to a user for key based authentication. Just paste the **public** key into the *SSH Public Key* field. If you are using an SSH public key, it is always a good idea to keep a backup of the key. Click *DOWNLOAD SSH PUBLIC KEY* to download the pasted key as a `.txt` file. If *Disable Password* is set to *Yes*, it disables the *Password* field and removes the password from the account. The account cannot use password-based logins for services. For example, disabling the password prevents using account credentials to log in to an SMB share or open an SSH session on the system. The *Lock User* and *Permit Sudo* options are also removed. By default, it is set to *No*. A specific shell can be set for the user from the *Shell* drop-down.
