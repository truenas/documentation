---
title: "Users"
redirect: "https://www.truenas.com/docs/core/13.0/uireference/accounts/users/"
description: "Describes the fields on the Users screens in TrueNAS CORE."
weight: 20
tags:
- users
- accounts
---

The **Users** screen lets you create and manage user accounts.

## Users List

![UIRefUsersList](/images/CORE/Accounts/UIRefUsersList.png "Accounts Users List")

{{< truetable >}}
| Name | Description |
|------|------|
| Filter Users | Filters users by keyword. |
| COLUMNS | Lets users display/hide list columns. Username, UID, Builtin, and Full Name are default. |
| ADD | Opens the **User ID and Groups** form  |
| <span class="iconify" data-icon="mdi:cog"></span> | Displays/hides built-in users |
| Username | Descriptive name for the user. |
| UID | User ID number. |
| Builtin | Whether or not the user is built-in. |
| Full Name | Shows the saved **Full Name** of the account. |
{{< /truetable >}}

## User Configuration

{{< include file="/static/includes/CORERequiredFields.md" >}}

![UIRefUsersAdd](/images/CORE/Accounts/UIRefUsersAdd.png "Accounts Users Add or Edit")

### Identification

{{< truetable >}}
| Name | Description |
|------|------|
| Full Name | Descriptive name for the user. |
| Username | User login name. |
| Email | User email address. |
| Password | User login password. |
| Confirm Password | Re-enter user password. |
{{< /truetable >}}

### User ID and Groups

{{< truetable >}}
| Name | Description |
|------|------|
| User ID | A unique number used to identify a user. |
| New Primary Group | Creates a new group with the same name as the user. |
| Primary Group | Primary group to add the user to. |
| Auxiliary Groups | Additional groups to add the user to. |
{{< /truetable >}}

### Directories and Permissions

{{< truetable >}}
| Name | Description |
|------|------|
| Home Directory | Path to the user home directory. |
| Home Directory Permissions | Default user home directory Unix permissions.  |
{{< /truetable >}}

### Authentication

{{< truetable >}}
| Name | Description |
|------|------|
| SSH Public Key | Public SSH key for key-based authentication. |
| Disable Password | Enables/Disables password field.  |
| Shell | The shell to use for local and SSH logins. |
| Lock User | Prevents user from logging in or using password-based services. |
| Permit Sudo | Enable or disable issuing commands as the root account with `sudo`. |
| Microsoft Account | Allows Windows authentication methods. |
| Samba Authentication | Lets users authenticate to Samba shares. |
{{< /truetable >}}
