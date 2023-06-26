---
title: "Group"
description: "Provides information about the account group namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 15
aliases:
draft: false
tags:
- scalecliaccount
---

{{< toc >}}

{{< include file="/_includes/CLI/CLIGuideWIP.md" type="page" >}}

The **group** namespace contains eight commands and is based on functions found in the SCALE API and web UI. It provides access to group account creation, configuration, and management.

You can enter commands from the main CLI prompt or from the system namespace prompt.

## Create Command
The `create` command creates a new group.

{{< expand "Using the Create Command" "v" >}}

#### Description

`create` has seven configuration parameters.
They are `gid`, `name`, `smb`, `sudo_commands`, `sudo_commands_nopasswd`, `allow_duplicate_gid`, and `users`.
The only required parameter is `name`.
If a group identification number is not provided, it is automatically filled with the next one available.
For more details, see [Create Configuration Parameters]({{< relref "CLIgroup.md#create-configuration-parameters" >}}).

Enter the command, then press <kbd>Enter</kbd>.
The command returns a blank line.

To confirm the group is created, use [`get_group_obj`]({{< relref "CLIgroup.md#get_group_obj-command" >}}) or go to [**Credentials > Local Groups**]({{< relref "managelocalgroups.md" >}}) in the SCALE Web UI.

#### Usage

From the CLI prompt, enter:

<code>account group create name=<i>name</i></code>

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

<code>group create name=<i>name</i></code>

Press <kbd>Enter</kbd>

Where *name* is the desired group name.

{{< expand "Command Example" "v" >}}
<code>
account group create name=<i>TestGroup</i> gid=<i>3022</i> smb=<i>false</i> users=[<i>3000,3001</i>]
</code>

Where *3022* is the group id number, *TestGroup* is the group name, *false* is a boolean value, and *3000,3001* are user id numbers for group members.
{{< /expand >}}
{{< /expand >}}

### Create Interactive Arguments Editor

The `create --` option opens an **interactive arguments editor**.

{{< expand "Using the Create Interactive Arguments Editor" "v" >}}
{{< trueimage src="/images/SCALE/CLI/Account/GroupCreateInteractiveArgumentsEditor.png" alt="Group Create Interactive Arguments Editor" id="1: Group Create Interactive Arguments Editor" >}}

The interactive arguments editor provides a text user interface (TUI) where you can configure parameters and options. The TUI also provides some information on required parameters, defaults, and expected input types (string, boolean, integer, or array).

In the TUI, most parameters are initially marked as comments with the `#` symbol, indicating that they are not yet configured. However, `name:` is shown as a required field.

To provide values for the other parameters, you need to remove the `#` comment designator from the corresponding line in the TUI.

{{< hint type=tip >}}
A group name is the only required value for group creation. If a group identification number is not provided, it is automatically filled with the next one available. All other parameters are optional.

See the relevant rows in [Configuration parameters](#create-configuration-parameters) for more information.
{{< /hint >}}

A space is required between the provided parameters and entered values, for example `name: test_group`.

Press <kbd>F2</kbd> or click **Save** to save the modified file.

Press <kbd>F10</kbd>, <kbd>Esc</kbd>, or click **Quit** to exit the TUI.
The `create` command automatically executes upon exit.
{{< /expand >}}

### Create Configuration Parameters

`create` has seven available parameters for group configuration. They are `gid`, `name`, `smb`, `sudo_commands`, `sudo_commands_nopasswd`, `allow_duplicate_gid`, and `users`. See the table below for more details.

{{< expand "Parameter Functions and Examples" "v" >}}
{{< truetable >}}
| Parameter | Type | Function | Required? |
|-----------|-------------|-------------|-------------|
| `gid=` | Integer | Assigns the group identification number. If `gid` is not provided it is automatically filled with the next one available. <br> Ex. <code>gid=<i>3005</i></code> <br> &emsp; Where *3005* is an available GID number. | No |
| `name=` | String | Sets the group name. <br> Ex. <code>name=<i>TestGroup</i></code> <br> &emsp; Where *TestGroup* is the desired group name. | Yes |
| `smb=` | Boolean | Sets whether the group should be mapped into an NT group for Windows SMB sharing. Defaults to `true`. <br> Ex. <code>smb=<i>false</i></code> <br> &emsp; Where *false* is a boolean value. | No |
| `sudo_commands=` | Array | Sets any sudo commands group members are allowed to use. Security best practice is to limit sudo permissions to administrative users. <br> Ex. <code>sudo_commands="<i>path1</i>,<i>path2</i>"</code> <br> &emsp; Where <code><i>path1</i></code> and <code><i>path2</i></code> are absolute paths to the location of executable scripts or packages. <br> &emsp; You can also use `sudo_commands="ALL"` | No |
| `sudo_commands_nopasswd=` | Array | Sets any sudo commands group members are allowed to use without entering a password. Exercise caution when allowing sudo commands without password prompts. It is recommended to limit this privilege to trusted users and specific commands to minimize security risks. <br> Ex. <code>sudo_commands_nopasswd="<i>path1</i>,<i>path2</i>"</code> <br> &emsp; Where <code><i>path1</i></code> and <code><i>path2</i></code> are absolute paths to the location of executable scripts or packages. <br> &emsp; You can also use `sudo_commands_nopasswd="ALL"`, but this is not recommended. | No |
| `allow_duplicate_gid=` | Boolean | If set to true, allows distinct group names to share the same group identification number. Defaults to false. <br> Important: Use only if absolutely necessary. Duplicate GIDs can lead to unexpected behavior. <br> Ex. <code>allow_duplicate_gid=<i>true</i></code> <br> &emsp; Where *true* is a boolean value. | No |
| `users=` | Array or Integer | Assigns users to the group with a list of one or more user identification numbers (UIDs). <br> Ex. <code>users=[<i>3001,3002</i>]</code> <br> &emsp; Where *3001* and *3002* are UID numbers for group members.  | No |

{{< /truetable >}}
{{< /expand >}}

## Delete Command
The `delete` command erases an existing group.

{{< expand "Using the Delete Command" "v" >}}

#### Description

If the `delete_group` option is set to true, the command also deletes any user with the target as its primary group. `delete_group` defaults to false.

The command returns a blank line.

To confirm the group is deleted, use [`get_group_obj`]({{< relref "CLIgroup.md#get_group_obj-command" >}}) or navigate to [**Credentials > Local Groups**]({{< relref "managelocalgroups.md" >}}) in the SCALE Web UI.

#### Usage

From the CLI prompt, enter:

<code> account group delete id=<i>3000</i> </code>

Press <kbd>Enter</kbd>.

From the **account** prompt, enter:

<code> group delete id=<i>3000</i> </code>

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
<code>
account group delete id=<i>3000</i> options={"delete_group": <i>true</i>}
</code>

Where *3000* is the group identification number and *true* is a boolean value.

{{< hint type=important >}}
`options={"delete_group": true}` deletes any users whose primary group matches the deleted group.
Carefully consider affected users before adding this option.
{{< /hint >}}

{{< /expand >}}
{{< /expand >}}

## Get_Group_Obj Command

The `get_group_obj` command returns dictionary containing information from **struct grp** including group name, identification number, and group members.

{{< expand "Using the Get_Group_Obj Command" "v" >}}

#### Description

The target group can be specified by group name or GID.

The command returns a list of basic information about the group.

#### Usage

From the CLI prompt, enter:

<code>account group get_group_obj get_group_obj={"groupname": "<i>TestGroup</i>"}</code>

Press <kbd>Enter</kbd>.

From the **account** prompt, enter:

<code>group get_group_obj get_group_obj={"groupname": "<i>TestGroup</i>"}</code>

Press <kbd>Enter</kbd>.

Where *TestGroup* is the name of the target group.

{{< expand "Command Example" "v" >}}

<pre><code>
account group get_group_obj get_group_obj={"groupname": "<i>TestGroup</i>"}
+---------+------------+
| gr_name | TestGroup  |
|  gr_gid | 3002       |
|  gr_mem | testuser   |
|         | AttTest    |
+---------+------------+
</code></pre>

{{< /expand >}}

The target group can also be specified by group identification number.

{{< expand "Command Example" "v" >}}

<pre><code>
account group get_group_obj get_group_obj={"gid": <i>3002</i>}
+---------+------------+
| gr_name | TestGroup  |
|  gr_gid | 3002       |
|  gr_mem | testuser   |
|         | AttTest    |
+---------+------------+
</code></pre>

Where *3002* is the GID number for the target group.

{{< /expand >}}
{{< /expand >}}

## Get_Instance Command

{{< include file="/_includes/CLI/CLICommandWIP.md" type="page" >}}

The `get_instance` command retrieves information about a group.

{{< expand "Using the get_instance Command" "v" >}}
<!-- Unable to successfully use get_instance. Always returns that the group does not exist. -->
{{< /expand >}}

### Get_Instance Interactive Arguments Editor

Use the `get_instance --` option to open an interactive arguments editor TUI.

{{< expand "Using the get_instance Interactive Arguments Editor" "v" >}}
<!-- The get_instance TUI is not currently functioning, see https://ixsystems.atlassian.net/browse/NAS-122509. Update when resolved. -->

<!-- SCREEN IMAGE HERE

Placeholder text, will need to be confirmed once TUI is functional:

The interactive arguments editor provides a Text User Interface (TUI) where you can configure parameters and options. The TUI also provides some information on required parameters, defaults, and expected input types (string, boolean, integer, or array).

In the TUI, most parameters are initially marked as comments with the `#` symbol, indicating that they are not yet configured. However, `username:` and `full_name:` are shown as required fields.

To provide values for the other parameters, you need to remove the `#` comment designator from the corresponding line in the TUI.

A space is required between the provided parameter and entered data, for example `username: testuser`.

Press <kbd>F2</kbd> or click **Save** to save the modified file.

Press <kbd>F10</kbd>, <kbd>Esc</kbd>, or click **Quit** to exit the TUI.
The `get_instance` command automatically executes upon exit. -->

{{< /expand >}}

## Get_Next_Gid Command

The `get_next_gid` command displays the next available group identification (GID) number.

{{< expand "Using the get_next_gid Command" "v" >}}

#### Description

`get_next_gid` returns the next available GID in numerical order.
Default behavior begins identification number for local groups at 3000.

#### Usage

From the CLI prompt, enter:

`account group get_next_gid`

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

`group get_next_gid`

Press <kbd>Enter</kbd>

{{< expand "Command Example" "v" >}}

```
account group get_next_gid
3000
```

{{< /expand >}}
{{< /expand >}}

## Has_Password_Enabled_User Command

The `has_password_enabled_user` command checks whether at least one local user with a password enabled is a member of one or more provided groups.

{{< expand "Using the Has_Password_Enabled_User Command" "v" >}}

#### Description

Target groups are specified by group identification number (GID).
Returns a single boolean value for all targeted groups.

The `exclude_user_ids` option sets specified password enabled users to ignore.

{{< hint type=note >}}
`has_password_enabled_user` returns a single boolean value for the entire list of GIDs queried. If more than one group is included in the query, the command does not return group specific information.
{{< /hint >}}

#### Usage

From the CLI prompt, enter:

<code>account group has_password_enabled_user gids=<i>3001</i></code>

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

<code>group has_password_enabled_user gids=<i>3001</i></code>

Press <kbd>Enter</kbd>

Where *3001* represents the GID(s) to query.

{{< expand "Command Examples" "v" >}}

<pre><code>
account group has_password_enabled_user gids=<i>3001</i>
false
<br>
account group has_password_enabled_user gids=<i>3002</i>
true
<br>
account group has_password_enabled_user gids=<i>3001,3002</i>
true
</code></pre>

{{< /expand >}}
{{< /expand >}}

## Query Command

{{< include file="/_includes/CLI/CLICommandWIP.md" type="page" >}}

The `query` command retrieves information about a group or groups and can use various query-filters and query-options.

{{< expand "Using the Query Command" "v" >}}

#### Description

Enter the command with no additional attributes or parameters to perform a basic query of all local groups.

Add additional parameters to return the value of the specified key(s) for all groups.
There are 13 `query` parameters available.

{{< expand "Query Parameters" "v" >}}
{{< truetable >}}
| Parameter | Purpose |
|-----------|-------------|
| `gid`  | <!--To be filled in, with examples, once behavior in general and specified searches better established.--> |
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

#### Usage

From the CLI prompt, enter:

`account group query`

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

`group query`

Press <kbd>Enter</kbd>

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

Additional parameters included in the command string return specific information.

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

<!--
 Expanded information may be requested by specifying the extra option
`"extra": {"additional_information": []}`.
There are two `additional_information` options supported.

{{< truetable >}}
| Option | Purpose |
|-----------|-------------|
| `SMB`  | Includes Windows SID and NT Name for group. If this option is not specified, then these keys have `null` value. |
| `DS` | Includes groups from Directory Service (LDAP or Active Directory) in results |
{{< /truetable >}}
-->

{{< /expand >}}

## Update Command

The `update` command updates the attributes of an existing group. For available parameters, see [`create`](#create-configuration-parameters).

{{< expand "Using the Update Command" "v" >}}

#### Descripton

Syntax and available parameters for `update` closely follow those of [`create`](#create-command).

The command returns a blank line.

To confirm the group is updated, use [`get_group_obj`]({{< relref "CLIgroup.md#get_group_obj-command" >}}) or navigate to [**Credentials > Local Groups**]({{< relref "managelocalgroups.md" >}}) in the SCALE Web UI.

#### Usage

From the CLI prompt, enter:

<code>account group update gid_or_name=<i>3006</i> users=<i>3001</i></code>

From the **account** prompt, enter:

`group update`

Where *3006* is the identification number or GID for the target group and <code>users=<i>3001</i></code> represents the parameter(s) to update.

{{< expand "Command Example" "v" >}}
```
account group update gid_or_name=3006 users=3001
```

The command as written adds the user with UID 3001 to the group with GID 3006.
{{< /expand >}}

{{< /expand >}}

{{< taglist tag="scalecliaccount" limit="10" title="Related CLI Account Articles" >}}
{{< taglist tag="scalegroups" limit="10" title="Related SCALE Groups Articles" >}}
