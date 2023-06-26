---
title: "User"
description: "Provides information about the account user namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 10
aliases:
draft: false
tags:
- scalecliaccount
- scaleusers
---

{{< toc >}}

{{< include file="/_includes/CLI/CLIGuideWIP.md" type="page" >}}

The **user** namespace has 14 commands and is based on functions found in the SCALE API and web UI. It provides access to user account creation, configuration, and attribute management. You can also set up a local administrator account using this namespace.

You can enter commands from the main CLI prompt or from the system namespace prompt.

## Create Command

The `create` command configures a new user account.

{{< expand "Using the create Command" "v" >}}

#### Description

`create` has 19 configuration parameters.
They are uid, username, group, group_create, home, home_mode, home_create, shell, full_name, email, password, password_disabled, locked, smb, sudo_commands, sudo_commands_nopasswd, sshpubkey, groups, and attributes.
A username, full name, primary group, and password status are all required for user creation.
For more details, see [Create Configuration Parameters](#create-configuration-parameters).

The command returns a blank line.

To confirm the user is created, use [`get_user_obj`](#get_user_obj-command) or go to [**Credentials > Local Users**]({{< relref "managelocalusersscale.md" >}}) in the SCALE Web UI.

#### Usage

From the CLI prompt, enter:

<code>account user create username=<i>testuser</i> full_name="<i>Test User</i>" group_create=<i>true</i> password=<i>passwort1234</i></code>

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

<code>user create username=<i>testuser</i> full_name="<i>Test User</i>" group_create=<i>true</i> password=<i>passwort1234</i></code>

Press <kbd>Enter</kbd>

Where *testuser* is the desired username, *Test User* is the user's full name, *true* is a boolean value, and *passwort1234* is the desired password for the account.

{{< hint type=note >}}
This command contains the minimum required parameters to successfully create a user.
{{< /hint >}}

{{< expand "Command Example" "v" >}}
```
account user create username=testuser full_name="Test User" group_create=true password=passwort1234
```
{{< /expand >}}
{{< /expand >}}

### Create Interactive Arguments Editor

Entering the `create --` option will open an **interactive arguments editor**.

{{< expand "Using the create Interactive Arguments Editor" "v" >}}
{{< trueimage src="/images/SCALE/CLI/Account/UserCreateInteractiveArgumentsEditor.png" alt="Interactive Arguments Editor" id="1: Interactive Arguments Editor" >}}

The interactive arguments editor provides a Text User Interface (TUI) where arguments and options can be configured. The TUI also provides some information on required arguments, defaults, and expected input types (string, boolean, integer, or array).

In the TUI, most arguments are initially marked as comments with the `#` symbol, indicating that they are not yet configured. However, `username:` and `full_name:` are shown as required fields.

To provide values for the other arguments, you need to remove the `#` comment designator from the corresponding line in the TUI.

{{< hint type=tip >}}
A username, full name, primary group, and password status are all required for user creation.
You must remove the `#` comment designator and enter a value for either `group:` or `group_create:` and `password:` or `password_disabled:`.

See the relevant rows in [Create Configuration Parameters](#create-configuration-parameters) for more information.
{{< /hint >}}

A space is required between the provided argument and entered data, for example `username: testuser`.

Press <kbd>F2</kbd> or click **Save** to save the modified file.

Press <kbd>F10</kbd>, <kbd>Esc</kbd>, or click **Quit** to exit the TUI.
The `create` command will automatically execute upon exit.
{{< /expand >}}

### Create Configuration Parameters

`create` has 19 available parameters for account configuration.
They are uid, username, group, group_create, home, home_mode, home_create, shell, full_name, email, password, password_disabled, locked, smb, sudo_commands, sudo_commands_nopasswd, sshpubkey, groups, and attributes.
See the table below for more details.

{{< expand "Parameter Functions and Examples" "v" >}}
{{< truetable >}}
| Parameter | Type | Function | Required? |
|-----------|-------------|-------------|-------------|
| `uid=` | Integer | Specifies the User Identification number (UID). If a UID is not provided, it is automatically filled with the next one available. <br> Ex: `uid=3000` <br> &emsp; Where `3000` is an available UID number. | No |
| `username=` | String | Sets the account username. <br> Ex. `username=testuser` <br> &emsp; Where `testuser` is the desired username. | **Yes** |
| `group=` | Integer or String | Assigns the account to an existing group. <br> Ex. `group=value`<br> &emsp; Where `value` is the group name or Group Identification number (GID). | **Yes**, if `group_create` is set to false. |
| `group_create=` | Boolean | If set to `true`, creates a new group based on `username` and assigns the account to it. Default state is `false`. <br> Ex. `group_create=true` <br> &emsp; Where `true` is a boolean variable. | **Yes**, if an existing `group` is not assigned. |
| `home=` | String | Sets a home directory for the account. Defaults to `/nonexistent` if not defined. <br> Requires `home_create=true` if the desired directory does not exist. <br> Ex. `home="/mnt/tank/staff/"` <br> &emsp; Where `/mnt/tank/staff/` is an existing directory. | No |
| `home_mode=` | String | Sets home directory permissions using octal permission values. Defaults to `700`. <br> Ex. `home_mode= 700` <br> &emsp; Where `700` is an octal value representing the desired permission mode.  | No |
| `home_create=` | Boolean | If set to `true`, creates a new home directory for the user within a selected path defined by `home`. Default state is `false`. Reverts to default after the directory is created. <br> Ex. `home="/mnt/tank/" home_create=true` <br> &emsp; Where `/mnt/tank/` is the desired parent path and `true` is a boolean variable. <br> &emsp; This command will create a new home directory at **/mnt/tank/**. The directory name will be the account username. | No |
| `shell=` | String | Sets which shell option the user will access when entering **Shell** via the TrueNAS SCALE Web UI. Defaults to `/usr/bin/zsh` if not defined. <br> Available choices can be retrieved with `user.shell_choices`. <br> Ex. `shell="/usr/bin/bash"` <br> &emsp; Where `/usr/bin/bash` is the desired shell choice. | No |
| `full_name=` | String | Sets the user full name for the account. <br> Ex. `full_name="Test User"` <br> &emsp; Where `Test User` is the user's full name. | **Yes** |
| `email=` | String or Null | Sets the account email address. <br> Ex. `email="testuser@gmail.com"` <br> &emsp; Where `testuser@gmail.com` is the user email address. | No |
| `password=` | String | Assigns a password to the account. <br> Ex. `password=passw0rt` <br> &emsp; Where `passw0rt` is the desired password. | **Yes**, if `password_disabled` is set to false. |
| `password_disabled=` | Boolean | Sets whether to disable or require a password for account log in. Default state is `false`, password required. <br> Ex. `password_disabled=true` <br> &emsp; Where `true` is a boolean variable.  | **Yes**, if `password` is not defined. |
| `locked=` | Boolean | If set to `true`, prevents the user from logging in or using password-based services until this option is unset. Locking an account is only possible when Disable Password is false and a Password has been created for the account. Defaults to `false`. <br> Ex. `locked=true` <br> &emsp; Where `true` is a boolean variable. | No |
| `smb=` | Boolean | Enables or disables authentication of SMB shares for the user. Defaults to `true`. <br> Enabling SMB authentication on an account where it was previously disabled requires setting a new `password`. <br> Ex. `smb=false` <br> &emsp; Where `false` is a boolean variable. | No |
| `sudo_commands=` | Array | Sets any sudo commands the user is allowed to use. Security best practice is to limit sudo permissions to administrative users. <br> Ex. `sudo_commands="</path1/>,</path2/>"` <br> &emsp; Where `</path1/>` and `</path2/>` are absolute paths to the location of executable scripts or packages. <br> &emsp; You can also use `sudo_commands="ALL"` | No |
| `sudo_commands_nopasswd=` | Array | Sets any sudo commands the user is allowed to use without entering a password. Exercise caution when allowing sudo commands without password prompts. It is recommended to limit this privilege to trusted users and specific commands to minimize security risks. <br> Ex. `sudo_commands_nopasswd="</path1/>,</path2/>"` <br> &emsp; Where `</path1/>` and `</path2/>` are absolute paths to the location of executable scripts or packages. <br> &emsp; You can also use `sudo_commands_nopasswd="ALL"`, but this is not recommended. | No |
| `sshpubkey=` | String or Null | Adds a public SSH key of the user for any key-based authentication. Do not enter the private key. <br> User account must have a defined home directory to store an SSH key.  <br> Ex. `sshpubkey="<key>"` <br> &emsp; Where `<key>` is the SSH public key string. | No |
| `groups=` | Array | Assigns the user to one or more auxiliary groups. <br> Ex. `groups=news,staff,testuser` <br> &emsp; Where `news,staff,testuser` are the names of desired groups. | No |
| `attributes=` | Object | The **attributes** dictionary is a general-purpose object for storing arbitrary user information. This argument can be used to store custom metadata and other information relevant to the user. Custom keys and corresponding values can relate to specfic needs and use cases. <br> Ex. `attributes={"favorite_color": "blue"}` <br> &emsp; Where `favorite_color` is a new or existing key and `blue` is a corresponding value. | No |
{{< /truetable >}}
{{< /expand >}}
## Delete Command

The `delete` command erases an existing user account.

{{< expand "Using the delete Command" "v" >}}

#### Description

The command returns a blank line.

To confirm the user is deleted, use [`get_user_obj`](#get_user_obj-command) or go to [**Credentials > Local Users**]({{< relref "managelocalusersscale.md" >}}) in the SCALE Web UI.

By default, the `user delete` command also deletes the users's primary group if it is not being used by another user.
The `delete_group` option set to `false` retains the user's primary group.

#### Usage

From the CLI prompt, enter:

<code>account user delete id=<i>3001</i></code>

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

<code>user delete id=<i>3001</i></code>

Press <kbd>Enter</kbd>

Where *3001* is the user ID number for the account.

{{< expand "Command Example" "v" >}}
```
account user delete id=<UID>
```
{{< /expand >}}

Use the `delete_group` option to retain the user's primary group.

{{< expand "Command Example" "v" >}}
```
account user delete id=<UID> options={"delete_group": false}
```
{{< /expand >}}
{{< /expand >}}

## Get_Instance Command

{{< include file="/_includes/CLI/CLICommandWIP.md" type="page" >}}

The `get_instance` command retrieves information about a user such as their username, UID (User ID), group membership, permissions, and other relevant attributes.

{{< expand "Using the get_instance Command" "v" >}}
<!-- Unable to successfully use get_instance. Always returns that the user does not exist. -->
{{< /expand >}}

### Get_Instance Interactive Arguments Editor

Entering the `get_instance --` option will open an **interactive arguments editor**.

{{< expand "Using the get_instance Interactive Arguments Editor" "v" >}}
<!-- The get_instance TUI is not currently functioning, see https://ixsystems.atlassian.net/browse/NAS-122509. Update when resolved. -->

<!-- SCREEN IMAGE HERE

Placeholder text, will need to be confirmed once TUI is functional:

The interactive arguments editor provides a Text User Interface (TUI) where arguments and options can be configured. The TUI also provides some information on required arguments, defaults, and expected input types (string, boolean, integer, or array).

In the TUI, most arguments are initially marked as comments with the `#` symbol, indicating that they are not yet configured. However, `username:` and `full_name:` are shown as required fields.

To provide values for the other arguments, you need to remove the `#` comment designator from the corresponding line in the TUI.

A space is required between the provided argument and entered data, for example `username: testuser`.

Press <kbd>F2</kbd> or click **Save** to save the modified file.

Press <kbd>F10</kbd>, <kbd>Esc</kbd>, or click **Quit** to exit the TUI.
The `get_instance` command will automatically execute upon exit. -->

{{< /expand >}}

## Get_Next_Uid Command

The `get_next_uid` command displays the next available user identification number (UID).

{{< expand "Using the get_next_uid Command" "v" >}}
From the CLI prompt, enter:

`account user get_next_uid`

From the **account** prompt, enter:

`user get_next_uid`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountUserGetNextUIDExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}

## Get_User_Obj Command

The `get_user_obj` command returns dictionary containing information from struct passwd for the user specified by either the username or uid and bypasses user cache.

`get_user_obj` has two positional argument options and one additional option. 

{{< expand "Using the get_user_obj Command" "v" >}}
From the CLI prompt, enter:

`account user get_user_obj`

From the **account** prompt, enter:

`user get_user_obj`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountUserGetUserObjExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}

## Has_Local_Administrator_Set_Up Command

The `has_local_administrator_set_up` command returns whether a local administrator account with a valid password exists.

{{< expand "Using the has_local_administrator_set_up Command" "v" >}}
From the CLI prompt, enter:

`account user has_local_administrator_set_up`

From the **account** prompt, enter:

`user has_local_administrator_set_up`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountUserHasLocalAdministratorSetUpExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}

## Has_Root_Password Command

The `has_root_password` command is a deprecated method. Use the [`has_local_administrator_set_up`](#the-has_local_administrator_set_up-command) command instead.

{{< expand "Deprecation Notice" "v" >}}
{{< include file="RootLoginWarnSCALE.md" type="page" >}}
{{< /expand >}}

## Pop_Attribute Command

The `pop_attribute` command removes attributes, defined by a key, from a user dictionary. See also [`set_attribute`](#the-set_attribute-command) and [`create attributes=`](#create-configuration-parameters).

{{< expand "Using the pop_attribute Command" "v" >}}
From the CLI prompt, enter:

`account user pop_attribute`

From the **account** prompt, enter:

`user pop_attribute`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountUserPopAttributeExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}

## Query Command

{{< include file="/_includes/CLI/CLICommandWIP.md" type="page" >}}

The `query` command queries users and can use various query-filters and query-options.

{{< expand "Using the query Command" "v" >}}
From the CLI prompt, enter:

`account user query`

From the **account** prompt, enter:

`user query`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountUserQueryExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}
## Set_Attribute Command

The `set_attribute` command sets a user's general purpose attributes dictionary key to a specified value. See also [`pop_attribute`](#the-pop_attribute-command) and [`create attributes=`](#create-configuration-parameters).

{{< expand "Using the set_attribute Command" "v" >}}
From the CLI prompt, enter:

`account user set_attribute`

From the **account** prompt, enter:

`user set_attribute`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountUserSetAttributeExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}

## Set_Root_Password Command

The `set_root_password` command is a deprecated method. Use the [`setup_local_administrator`](#the-setup_local_administrator-command) command instead.

{{< expand "Deprecation Notice" "v" >}}
{{< include file="RootLoginWarnSCALE.md" type="page" >}}
{{< /expand >}}

## Setup_Local_Administrator Command

The `setup_local_administrator` command creates and configures an admin account. It can be used during initial configuration.

{{< hint type=important >}}
The `setup_local_administrator` command only works if both a local administrator and root password have not been configured. If either a local administrator or a root password exist, this command will return "Error: Local administrator is already set up."
{{< /hint >}}

{{< expand "Using the setup_local_administrator Command" "v" >}}

{{< hint type=note >}}
These instructions are only applicable if a local administrator and root password have not yet been configured.
This means that you have either performed a fresh install of SCALE and chose to not configure an admin or root password in the TrueNAS Console installer, or you have reset configuration to defaults and have not yet logged in to the SCALE Web UI.
{{< /hint >}}

Enter the CLI from the [Console setup menu]({{< relref "ConsoleSetupMenuScale.md" >}}) before configuring a local administrator or root user account. 

From the CLI prompt, enter:

`account user setup_local_administrator`

From the **account** prompt, enter:

`user setup_local_administrator`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountUserSetUpLocalAdministratorExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}

## Shell_Choices Command

The `shell_choices` command returns the available shell choices to be used by a user account.

{{< expand "Using the shell_choices Command" "v" >}}
From the CLI prompt, enter:

`account user shell_choices`

From the **account** prompt, enter:

`user shell_choices`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountUserShellChoicesExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}
## Update Command

The `update` command updates the attributes of an existing user. For available arguments, see [`create`](#create-configuration-parameters).

{{< expand "Using the update Command" "v" >}}
From the CLI prompt, enter:

`account user update`

From the **account** prompt, enter:

`user update`

{{< expand "Command Example" "v" >}}
{{< include file="content/_includes/CLI/AccountUserUpdateExample.md" type="page" >}}
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scalecliaccount" limit="10" title="Related CLI Account Articles" >}}
{{< taglist tag="scaleusers" limit="10" title="Related SCALE Users Articles" >}}
