---
title: "FRG: Accounts"
linkTitle: "Accounts"
description: "Descriptions of each field in the Accounts section of the TrueNAS web interface."
weight: 20
tags: ["reference"]
---

## Groups: Add

**Group Configuration**

| | |
|-|-|
| GID | The Group ID (GID) is a unique number used to identify a Unix group. Enter a number above *1000* for a group with user accounts. Groups used by a service must have an ID that matches the default port number used by the service. |
| Name | Group name cannot begin with a hyphen (`-`) or contain a space, tab, or these characters: `, : + & # % ^ ( ) ! @ ~ * ? < > =`. `$` can only be used as the last character of the username. |
| Permit Sudo | Allow group members to use [sudo](https://www.freebsd.org/cgi/man.cgi?query=sudo&manpath=FreeBSD+11.1-RELEASE+and+Ports). Group members are prompted for their password when using sudo. |
| Samba Authentication | Set to allow group to be used for Samba permissions and authentication. |
| Allow Duplicate GIDs | Not recommended. Allow more than one group to have the same group ID. |

## Users: Add

**Identification**

| | |
|-|-|
| Full Name | Spaces are allowed. |
| Username | Usernames can be up to 16 characters long. When using NIS or other legacy software with limited username lengths, keep usernames to eight characters or less for compatibility. Usernames cannot begin with a hyphen (-) or contain a space, tab, or these characters: , : + & # % ^ ( ) ! @ ~ * ? < > =. $ can only be used as the last character of the username. |
| Email | Enter the email address of the new user. |
| Password | Required unless Enable password login is No. Passwords cannot contain a ?. |

**User ID and Groups**

| | |
|-|-|
| User ID | User accounts have an ID greater than 1000 and system accounts have an ID equal to the default port number used by the service. |
| New Primary Group | Set to create a new primary group with the same name as the user. Unset to select an existing group for the user. |
| Primary Group | New users are not given su permissions if wheel is their primary group. |
| Auxiliary Group | Add this user to additional groups. |

**Directories and Permissions**

| | |
|-|-|
| Home Directory | Choose a path to the user's home directory. If the directory exists and matches the username, it is set as the user's home directory. When the path does not end with a subdirectory matching the username, a new subdirectory is created. The full path to the user's home directory is shown here when editing a user. |
| Home Directory Permissions | Sets default Unix permissions of the user home directory. This is read-only for built-in users. |

**Authentication**

| | |
|-|-|
| SSH Public Key | Enter or paste the public SSH key of the user for any key-based authentication. Do not paste the private key. |
| Disable Password | Yes: Disables the Password fields and removes the password from the account. The account cannot use password-based logins for services. For example, disabling the password prevents using account credentials to log in to an SMB share or open an SSH session on the system. The Lock User and Permit Sudo options are also removed. No: Requires adding a Password to the account. The account can use the saved Password to authenticate with password-based services. |
| Shell | Select the shell to use for local and SSH logins. |
| Lock User | Prevent the user from logging in or using password-based services until this option is unset. Locking an account is only possible when **Disable Password** is *No* and a **Password** has been created for the account. |
| Permit Sudo | Allow group members to use [sudo](https://www.freebsd.org/cgi/man.cgi?query=sudo&manpath=FreeBSD+11.1-RELEASE+and+Ports). Group members are prompted for their password when using sudo. |
| Microsoft Account | Set to allow additional username authentication methods when the user is connecting from a Windows 8 or newer operating system. |
| Samba Authentication | Set to allow user to authenticate to Samba shares. |
