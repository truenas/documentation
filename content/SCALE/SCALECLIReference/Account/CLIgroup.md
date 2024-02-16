---
title: "Group"
description: "Introduces the TrueNAS CLI account group namespace that configures Groups related settings found in the API and web UI."
weight: 15
aliases:
draft: false
tags:
- accounts
- groups
---

{{< include file="/_includes/CLI/CLIGuideWIP.md" >}}

The **group** namespace contains eight commands and is based on functions found in the SCALE API and web UI. 
It provides access to group account creation, configuration, and management functions. 

## Group Commands

The following **group** namespace commands allow you to manage group settings.

You can enter commands from the main CLI prompt or from the **account** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/HintInteractiveArgsEditor.md" >}}

### Create Command
The `create` command creates a new group.

{{< expand "Using the Create Command" "v" >}}
#### Description
`create` has seven configuration properties.
They are `gid`, `name`, `smb`, `sudo_commands`, `sudo_commands_nopasswd`, `allow_duplicate_gid`, and `users`.
The only required property is `name`.
If a group identification number is not provided, it is automatically filled with the next one available.
For more details, see **Create Configuration Properties** below.

{{< expand "Create Configuration Properties" "v" >}}

{{< include file="content/_includes/CLI/AccountGroupProperties.md" >}}

{{< /expand >}}

Enter the command string with the property argument(s) using the `=' delimiter to separate the properties and values, then press <kbd>Enter</kbd>.
The command returns a blank line.

To confirm the group is created, use [`get_group_obj`]({{< relref "CLIgroup.md#get_group_obj-command" >}}) or go to [**Credentials > Local Groups**]({{< relref "managelocalgroups.md" >}}) in the SCALE Web UI.

#### Usage

From the CLI prompt, enter:

<code>account group create name=<i>name</i></code>

Where *name* is the desired group name.

To create a group that also sets Samba authentication and adds group members, enter:

<code> account group create name=<i>TestGroup</i> gid=<i>3022</i> smb=<i>false</i> users=[<i>3000,3001</i>] </code>

Where:
* *3022* is the group id number.
* *TestGroup* is a group name.
* *false* does not set Samba authentication. Enter *true* to include Samba authentication.
* *3000,3001* are user id numbers to add as group members.

{{< expand "Command Example" "v" >}}
```
account group create name=TestGroup

```
{{< /expand >}}
{{< /expand >}}

### Delete Command
The `delete` command erases an existing group.

{{< expand "Using the Delete Command" "v" >}}
#### Description
The `delete` command has one required property, `id`.
Enter property arguments using the `=` delimiter to separate the property and value.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns a blank line.

If using the `options` property with the `delete_group` property argument set to true, the command also deletes any user with the target as its primary group. `delete_group` defaults to false. 
Carefully consider affected users before adding this option.

To confirm the group is deleted, use [`get_group_obj`]({{< relref "CLIgroup.md#get_group_obj-command" >}}) or navigate to [**Credentials > Local Groups**]({{< relref "managelocalgroups.md" >}}) in the SCALE Web UI.

#### Usage
From the CLI prompt, enter:

<code> account group delete id=<i>3000</i></code>

Where *3000* is the group identification number.

Or to enter the command using the `option` property and the `delete_group` property argument, enter:

<code> account group delete id=<i>3000</i> options={"delete_group":<i>true</i>}</code>

Where:
* *3000* is a group ID.
* `delete_group` is a property you can include in the `options` property array.
* *true* sets the `delete_group` option to delete users with the specified group. If set to *false* the users are not deleted.
{{< expand "Command Example" "v" >}}
```
account group delete id=3000

```
{{< /expand >}}
{{< /expand >}}

### Get_Group_Obj Command

The `get_group_obj` command returns dictionary containing information from **struct grp** including group name, identification number, and group members.

{{< expand "Using the Get_Group_Obj Command" "v" >}}

#### Description

The `get_group_obj` command has one required property, `get_group_obj` that expects you to enter property arguments formatted as an array.
Enter the command string, using `=` followed by the curly brackets that enclose the property argument. 
You can enter either the `gid` or `groupname` property in this command string.
Enter the property enclosed in double quotes, then the `:` delimiter followed by the value enclosed in double quotes, with no space after the colon. Press<kbd>Enter</kbd>.
The command returns a table for the GID that includes the **gr_name**, **gr_gid**, and **gr_mem** values.

#### Usage

From the CLI prompt, enter:

<code>account group get_group_obj get_group_obj={"groupname":"<i>TestGroup</i>"}</code>

Where *TestGroup* is the name of the target group.

Or, enter the command using the group ID:

<code>account group get_group_obj get_group_obj={"gid":<i>3002</i>}</code>

Where *3002* is the GID number for the target group.
{{< expand "Command Example" "v" >}}
```
account group get_group_obj get_group_obj={"groupname":"TestGroup"}
+---------+------------+
| gr_name | TestGroup  |
|  gr_gid | 3002       |
|  gr_mem | testuser   |
|         | AttTest    |
+---------+------------+
```
{{< /expand >}}
{{< /expand >}}

### Get_Instance Command
The `get_instance` command retrieves information about a group.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}

{{< expand "Using Get_Instance Command" "v" >}}
#### Description
The `get_instance` command has one required property, `id`.
Enter property arguments with the `=` delimiter separating property and value.
Enter the command string, then then press <kbd>Enter</kbd>.
The command returns a table of information about the UID entered.

#### Usage
From the CLI prompt, enter:

<code>account group get_instance id=<i>1</i></code>

Where *1* is the database id for the group, in this case root.

{{< expand "Command Example" "v" >}}
```
account group get_instance id=1
+------------------------------------------+
|                        id | 1            |
|                       gid | 0            |
|                     group | wheel        |
|                   builtin | true         |
|             sudo_commands | <empty list> |
|  sudo_commands_nopassword | <empty list> |
|                       smb | false        |
|                      name | wheel        |
|                     users | 1            |
|                     local | true         |
|              id_type_both | false        |
|                   nt_name | <null>       |
|                       sid | <null>       |
+------------------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Get_Next_Gid Command

The `get_next_gid` command displays the next available group identification (GID) number.

{{< expand "Using the get_next_gid Command" "v" >}}
#### Description
The `get_next_gid` command does not require entering properties or values.
Enter the command, then press <kbd>Enter</kbd>
The command returns the next available GID in numerical order.
Default behavior begins identification number for local groups at 3000.

#### Usage
From the CLI prompt, enter:

`account group get_next_gid`

{{< expand "Command Example" "v" >}}
```
account group get_next_gid
3000
```
{{< /expand >}}
{{< /expand >}}

### Has_Password_Enabled_User Command

The `has_password_enabled_user` command checks whether at least one local user with a password enabled is a member of one or more provided groups.

{{< expand "Using the Has_Password_Enabled_User Command" "v" >}}
#### Description
The `has_password_enabled_user` command has one required property, `gids`.
The `exclude_user_ids` property sets specified password enabled users to ignore.
Target groups are specified by group identification number (GID).
Enter property arguments using the `=` delimiter to separate property and value.
Enter the command string, then press <kbd>Enter</kbd>.
Returns a single true if any targeted groups have at least one user with a password enabled, false if all groups have no users with passwords enabled. 
If more than one group is included in the query, the command does not return group specific information.

#### Usage
From the CLI prompt, enter:

<code>account group has_password_enabled_user gids=<i>3001</i></code>

Where *3001* represents the GID(s) to query.

{{< expand "Command Examples" "v" >}}
```
account group has_password_enabled_user gids=3001
false
```
Or if specifying multiple gids:
```
account group has_password_enabled_user gids=3001,3002
true
```
{{< /expand >}}
{{< /expand >}}

### Query Command
The `query` command retrieves information about a group or groups or the query-options-get_instance value specified.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}

{{< expand "Using the Query Command" "v" >}}
#### Description
The `query` command has no required properties or arguments, but you can use various query-filters and query-options specified in an array.
Enter the command, then press <kbd>Enter</kbd>.
Returns a table of all groups in the system.

<!--commenting out this information until we get commands using them working, and the output result. 

Add additional properties to return the value of the specified key(s) for all groups.
There are 13 `query` properties available.

{{< expand "Query Properties" "v" >}}
{{< truetable >}}
| Property | Purpose |
|-----------|-------------|
| `gid`  | <!--To be filled in, with examples, once behavior in general and specified searches better established. |
| `name` |  |
| `smb` |  |
| `sudo_commands` |  |
| `sudo_commands_nopasswd` |  |
| `users` |  |
| `id` |  |
| `group` |  |
| `builtin` |  |
| `id_type_both` |  |
| `local` |  |
| `nt_name` |  |
| `sid` |  |
{{< /truetable >}}
{{< /expand >}}

Expanded information may be requested by specifying the extra option
`"extra": {"additional_information": []}`.

There are two `additional_information` options supported.

{{< truetable >}}
| Option | Purpose |
|-----------|-------------|
| `SMB`  | Includes Windows SID and NT Name for group. If this option is not specified, then these keys have `null` value. |
| `DS` | Includes groups from Directory Service (LDAP or Active Directory) in results |
{{< /truetable >}}-->

<!-- Note: Exploring this command a bit more, I've found you can specify multiple properties to return a custom list of all groups, for example `account group query name, gid, users` returns a table with all groups' gid | name | users -->

#### Usage

From the CLI prompt, enter:

`account group query`

{{< expand "Command Example" "v" >}}

```
account group query
+-------+------------------------+---------+---------------+------------------------+-------+------------------+-------+--------------+---------+--------+
| gid   | name                   | builtin | sudo_commands | sudo_commands_nopasswd | smb   | users            | local | id_type_both | nt_name | sid    |
+-------+------------------------+---------+---------------+------------------------+-------+------------------+-------+--------------+---------+--------+
| 0     | wheel                  | true    | <empty list>  | <empty list>           | false | root             | true  | false        | <null>  | <null> |
| 1     | daemon                 | true    | <empty list>  | <empty list>           | false | daemon           | true  | false        | <null>  | <null> |
| 15    | kmem                   | true    | <empty list>  | <empty list>           | false | <empty list>     | true  | false        | <null>  | <null> |
| 3     | sys                    | true    | <empty list>  | <empty list>           | false | sys              | true  | false        | <null>  | <null> |
| 5     | tty                    | true    | <empty list>  | <empty list>           | false | <empty list>     | true  | false        | <null>  | <null> |
| 37    | operator               | true    | <empty list>  | <empty list>           | false | uucp             | true  | false        | <null>  | <null> |
| 8     | mail                   | true    | <empty list>  | <empty list>           | false | mail             | true  | false        | <null>  | <null> |
| 2     | bin                    | true    | <empty list>  | <empty list>           | false | bin              | true  | false        | <null>  | <null> |
| 9     | news                   | true    | <empty list>  | <empty list>           | false | news             | true  | false        | <null>  | <null> |
...
```
{{< /expand >}}
<!-- commenting out until we validate commands using this information 
Additional properties included in the command string return specific information.

{{< expand "Command Example" "v" >}}

```
account group query gid
+-------+
| gid   |
+-------+
| 0     |
| 1     |
| 15    |
| 3     |
| 5     |
| 37    |
| 8     |
| 2     |
| 9     |
...
```
{{< /expand >}}

`query` can also return information about a specific group.

<!--Example to be added-->
{{< /expand >}}

### Update Command

The `update` command updates the attributes of an existing group. 

{{< expand "Using the Update Command" "v" >}}
#### Descripton
The `update` command uses the same properties as the [`create`](#create-command) command.

{{< expand "Update Configuration Properties" "v" >}}
{{< include file="content/_includes/CLI/AccountGroupProperties.md" >}}
{{< /expand >}}

The required property is `uid_or_username`.
Enter property arguments with the `=` delimiter separating property and values, then press <kbd>Enter</kbd>.
The command returns a blank line.

To confirm the group is updated, use [`get_group_obj`]({{< relref "CLIgroup.md#get_group_obj-command" >}}) or navigate to [**Credentials > Local Groups**]({{< relref "managelocalgroups.md" >}}) in the SCALE Web UI.

#### Usage

From the CLI prompt, enter:

<code>account group update gid_or_name=<i>3006</i> users=<i>3001</i></code>

Where:
* *3006* is the identification number or GID for the target group.
* *3001 represents the property to update.

The command as written adds the user with UID 3001 to the group with GID 3006.

{{< expand "Command Example" "v" >}}
```
account group update gid_or_name=3006 users=3001
```
{{< /expand >}}
{{< /expand >}}
