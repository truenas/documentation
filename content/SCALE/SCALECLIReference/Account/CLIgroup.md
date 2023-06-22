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

{{< include file="content/_includes/CLI/AccountGroupCreateExample.md" type="page" >}}

### Create Interactive Arguments Editor

The `create --` option opens an **interactive arguments editor**.

{{< expand "Using the Create Interactive Arguments Editor" "v" >}}
{{< trueimage src="/images/SCALE/CLI/Account/GroupCreateInteractiveArgumentsEditor.png" alt="Group Create Interactive Arguments Editor" id="1: Group Create Interactive Arguments Editor" >}}

The interactive arguments editor provides a text user interface (TUI) where you can configure arguments and options. The TUI also provides some information on required arguments, defaults, and expected input types (string, boolean, integer, or array).

In the TUI, most arguments are initially marked as comments with the `#` symbol, indicating that they are not yet configured. However, `name:` is shown as a required field.

To provide values for the other arguments, you need to remove the `#` comment designator from the corresponding line in the TUI.

{{< hint type=tip >}}
A group name is the only required value for group creation. If a group identification number is not provided, it is automatically filled with the next one available. All other arguments are optional.

See the relevant rows in [Configuration Arguments](#create-configuration-arguments) for more information.
{{< /hint >}}

A space is required between the provided argument and entered data, for example `name: test_group`.

Press <kbd>F2</kbd> or click **Save** to save the modified file.

Press <kbd>F10</kbd>, <kbd>Esc</kbd>, or click **Quit** to exit the TUI.
The `create` command automatically executes upon exit.
{{< /expand >}}

### Create Configuration Arguments

`create` has seven available arguments for group configuration. They are `gid`, `name`, `smb`, `sudo_commands`, `sudo_commands_nopasswd`, `allow_duplicate_gid`, and `users`. See the table below for more details.

{{< expand "Argument Functions and Examples" "v" >}}
{{< truetable >}}
| Argument | Type | Function | Required? |
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
The `delete` command deletes an existing group.

{{< include file="content/_includes/CLI/AccountGroupDeleteExample.md" type="page" >}}

## Get_Group_Obj Command

The `get_group_obj` command returns dictionary containing information from **struct grp** for the group targeted by group name or group identification number (GID).

{{< expand "Using the get_group_obj Command" "v" >}}
From the CLI prompt, enter:

`account group get_group_obj`

From the **account** prompt, enter:

`group get_group_obj`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountGroupGetGroupObjExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}

## Get_Instance Command

{{< include file="/_includes/CLI/CLICommandWIP.md" type="page" >}}

The `get_instance` command retrieves information about a group.

{{< expand "Using the get_instance Command" "v" >}}
<!-- Unable to successfully use get_instance. Always returns that the group does not exist. -->
{{< /expand >}}

`get_instance` has one command option.

### Get_Instance Interactive Arguments Editor

The `get_instance --` option opens an **interactive arguments editor**.

{{< expand "Using the get_instance Interactive Arguments Editor" "v" >}}
<!-- The get_instance TUI is not currently functioning, see https://ixsystems.atlassian.net/browse/NAS-122509. Update when resolved. -->

<!-- SCREEN IMAGE HERE

Placeholder text, will need to be confirmed once TUI is functional:

The interactive arguments editor provides a Text User Interface (TUI) where you can configure arguments and options. The TUI also provides some information on required arguments, defaults, and expected input types (string, boolean, integer, or array).

In the TUI, most arguments are initially marked as comments with the `#` symbol, indicating that they are not yet configured. However, `username:` and `full_name:` are shown as required fields.

To provide values for the other arguments, you need to remove the `#` comment designator from the corresponding line in the TUI.

A space is required between the provided argument and entered data, for example `username: testuser`.

Press <kbd>F2</kbd> or click **Save** to save the modified file.

Press <kbd>F10</kbd>, <kbd>Esc</kbd>, or click **Quit** to exit the TUI.
The `get_instance` command automatically executes upon exit. -->

{{< /expand >}}

## Get_Next_Gid Command

The `get_next_gid` command displays the next available group identification (GID) number.

{{< expand "Using the get_next_gid Command" "v" >}}
From the CLI prompt, enter:

`account group get_next_gid`

From the **account** prompt, enter:

`group get_next_gid`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountGroupGetNextGIDExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}

## Has_Password_Enabled_User Command

The `has_password_enabled_user` command checks whether at least one local user with a password enabled is a member of any of the provided groups. Target groups are specified by group identification number (GID).

The option `exclude_user_ids` ignores specified password enabled users, but is not neccessary.

{{< expand "Using the has_password_enabled_user Command" "v" >}}
From the CLI prompt, enter:

`account group has_password_enabled_user`

From the **account** prompt, enter:

`group has_password_enabled_user`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountGroupHasPasswordEnabledUserExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}

## Query Command

{{< include file="/_includes/CLI/CLICommandWIP.md" type="page" >}}

The `query` command queries groups and can use various query-filters and query-options.

{{< expand "Using the query Command" "v" >}}
From the CLI prompt, enter:

`account group query`

From the **account** prompt, enter:

`group query`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountGroupQueryExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}

## Update Command

The `update` command updates the attributes of an existing group. For available arguments, see [`create`](#create-configuration-arguments).

{{< expand "Using the update Command" "v" >}}
From the CLI prompt, enter:

`account group update`

From the **account** prompt, enter:

`group update`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountGroupUpdateExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scalecliaccount" limit="10" title="Related CLI Account Articles" >}}
{{< taglist tag="scalegroups" limit="10" title="Related SCALE Groups Articles" >}}
