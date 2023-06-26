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

<!-- NOTE: Text in comment tags marks changes to be made as CLI documentation develops, remove comment tags as needed  -->

The **user** namespace has 14 commands and is based on functions found in the SCALE API and web UI. It provides access to user account creation, configuration, and attribute management. You can also set up a local administrator account using this namespace.

You can enter commands from the main CLI prompt or from the system namespace prompt.

## Create Command

The `create` command configures a new user account.

{{< expand "Using the Create Command" "v" >}}

#### Description

`create` has 19 configuration properties.
They are uid, username, group, group_create, home, home_mode, home_create, shell, full_name, email, password, password_disabled, locked, smb, sudo_commands, sudo_commands_nopasswd, sshpubkey, groups, and attributes.
A username, full name, primary group, and password status are all required for user creation.
For more details, see [Create Configuration Properties](#create-configuration-properties).

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
This command contains the minimum required properties to successfully create a user.
{{< /hint >}}

{{< expand "Command Example" "v" >}}
```
account user create username=testuser full_name="Test User" group_create=true password=passwort1234
```
{{< /expand >}}
{{< /expand >}}

### Create Interactive Arguments Editor

Entering the `create --` option opens an **interactive arguments editor**.

{{< expand "Using the Create Interactive Arguments Editor" "v" >}}
{{< trueimage src="/images/SCALE/CLI/Account/UserCreateInteractiveArgumentsEditor.png" alt="Interactive Arguments Editor" id="1: Interactive Arguments Editor" >}}

The interactive arguments editor provides a Text User Interface (TUI) where properties and options can be configured. The TUI also provides some information on required properties, defaults, and expected input types (string, boolean, integer, or array).

In the TUI, most properties are initially marked as comments with the `#` symbol, indicating that they are not yet configured. However, `username:` and `full_name:` are shown as required fields.

To provide values for the other properties, you need to remove the `#` comment designator from the corresponding line in the TUI.

{{< hint type=tip >}}
A username, full name, primary group, and password status are all required for user creation.
You must remove the `#` comment designator and enter a value for either `group:` or `group_create:` and `password:` or `password_disabled:`.

See the relevant rows in [Create Configuration Properties](#create-configuration-properties) for more information.
{{< /hint >}}

A space is required between the provided property and entered data, for example `username: testuser`.

Press <kbd>F2</kbd> or click **Save** to save the modified file.

Press <kbd>F10</kbd>, <kbd>Esc</kbd>, or click **Quit** to exit the TUI.
The `create` command automatically executes upon exit.
{{< /expand >}}

### Create Configuration Properties

`create` has 19 available properties for account configuration.
They are uid, username, group, group_create, home, home_mode, home_create, shell, full_name, email, password, password_disabled, locked, smb, sudo_commands, sudo_commands_nopasswd, sshpubkey, groups, and attributes.
See the table below for more details.

{{< expand "Property Functions and Examples" "v" >}}
{{< truetable >}}
| Property | Type | Function | Required? |
|-----------|-------------|-------------|-------------|
| `uid=` | Integer | Specifies the User Identification number (UID). If a UID is not provided, it is automatically filled with the next one available. <br> Ex: `uid=3000` <br> &emsp; Where `3000` is an available UID number. | No |
| `username=` | String | Sets the account username. <br> Ex. `username=testuser` <br> &emsp; Where `testuser` is the desired username. | **Yes** |
| `group=` | Integer or String | Assigns the account to an existing group. <br> Ex. `group=value`<br> &emsp; Where `value` is the group name or Group Identification number (GID). | **Yes**, if `group_create` is set to false. |
| `group_create=` | Boolean | If set to `true`, creates a new group based on `username` and assigns the account to it. Default state is `false`. <br> Ex. `group_create=true` <br> &emsp; Where `true` is a boolean variable. | **Yes**, if an existing `group` is not assigned. |
| `home=` | String | Sets a home directory for the account. Defaults to `/nonexistent` if not defined. <br> Requires `home_create=true` if the desired directory does not exist. <br> Ex. `home="/mnt/tank/staff/"` <br> &emsp; Where `/mnt/tank/staff/` is an existing directory. | No |
| `home_mode=` | String | Sets home directory permissions using octal permission values. Defaults to `700`. <br> Ex. `home_mode= 700` <br> &emsp; Where `700` is an octal value representing the desired permission mode.  | No |
| `home_create=` | Boolean | If set to `true`, creates a new home directory for the user within a selected path defined by `home`. Default state is `false`. Reverts to default after the directory is created. <br> Ex. `home="/mnt/tank/" home_create=true` <br> &emsp; Where `/mnt/tank/` is the desired parent path and `true` is a boolean variable. <br> &emsp; This command creates a new home directory at **/mnt/tank/**. The directory name is the account username. | No |
| `shell=` | String | Sets which shell option the user accesses when entering **Shell** via the TrueNAS SCALE Web UI. Defaults to `/usr/bin/zsh` if not defined. <br> Available choices can be retrieved with `user.shell_choices`. <br> Ex. `shell="/usr/bin/bash"` <br> &emsp; Where `/usr/bin/bash` is the desired shell choice. | No |
| `full_name=` | String | Sets the user full name for the account. <br> Ex. `full_name="Test User"` <br> &emsp; Where `Test User` is the user's full name. | **Yes** |
| `email=` | String or Null | Sets the account email address. <br> Ex. `email="testuser@gmail.com"` <br> &emsp; Where `testuser@gmail.com` is the user email address. | No |
| `password=` | String | Assigns a password to the account. <br> Ex. `password=passw0rt` <br> &emsp; Where `passw0rt` is the desired password. | **Yes**, if `password_disabled` is set to false. |
| `password_disabled=` | Boolean | Sets whether to disable or require a password for account log in. Default state is `false`, password required. <br> Ex. `password_disabled=true` <br> &emsp; Where `true` is a boolean variable.  | **Yes**, if `password` is not defined. |
| `locked=` | Boolean | If set to `true`, prevents the user from logging in or using password-based services until this property is unset. Locking an account is only possible when Disable Password is false and a Password has been created for the account. Defaults to `false`. <br> Ex. `locked=true` <br> &emsp; Where `true` is a boolean variable. | No |
| `smb=` | Boolean | Enables or disables authentication of SMB shares for the user. Defaults to `true`. <br> Enabling SMB authentication on an account where it was previously disabled requires setting a new `password`. <br> Ex. `smb=false` <br> &emsp; Where `false` is a boolean variable. | No |
| `sudo_commands=` | Array | Sets any sudo commands the user is allowed to use. Security best practice is to limit sudo permissions to administrative users. <br> Ex. `sudo_commands="</path1/>,</path2/>"` <br> &emsp; Where `</path1/>` and `</path2/>` are absolute paths to the location of executable scripts or packages. <br> &emsp; You can also use `sudo_commands="ALL"` | No |
| `sudo_commands_nopasswd=` | Array | Sets any sudo commands the user is allowed to use without entering a password. Exercise caution when allowing sudo commands without password prompts. It is recommended to limit this privilege to trusted users and specific commands to minimize security risks. <br> Ex. `sudo_commands_nopasswd="</path1/>,</path2/>"` <br> &emsp; Where `</path1/>` and `</path2/>` are absolute paths to the location of executable scripts or packages. <br> &emsp; You can also use `sudo_commands_nopasswd="ALL"`, but this is not recommended. | No |
| `sshpubkey=` | String or Null | Adds a public SSH key of the user for any key-based authentication. Do not enter the private key. <br> User account must have a defined home directory to store an SSH key.  <br> Ex. `sshpubkey="<key>"` <br> &emsp; Where `<key>` is the SSH public key string. | No |
| `groups=` | Array | Assigns the user to one or more auxiliary groups. <br> Ex. `groups=news,staff,testuser` <br> &emsp; Where `news,staff,testuser` are the names of desired groups. | No |
| `attributes=` | Object | The **attributes** dictionary is a general-purpose object for storing arbitrary user information. This property can be used to store custom metadata and other information relevant to the user. Custom keys and corresponding values can relate to specfic needs and use cases. <br> Ex. `attributes={"favorite_color": "blue"}` <br> &emsp; Where `favorite_color` is a new or existing key and `blue` is a corresponding value. | No |
{{< /truetable >}}
{{< /expand >}}
## Delete Command

The `delete` command erases an existing user account.

{{< expand "Using the Delete Command" "v" >}}

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

<!-- {{< expand "Using the Get_Instance Command" "v" >}}
Unable to successfully use get_instance. Always returns that the user does not exist.
{{< /expand >}} -->

### Get_Instance Interactive Arguments Editor

Entering the `get_instance --` option opens an **interactive arguments editor**.

<!-- {{< expand "Using the Get_Instance Interactive Arguments Editor" "v" >}}
The get_instance TUI is not currently functioning, see https://ixsystems.atlassian.net/browse/NAS-122509. Update when resolved. 

<!-- SCREEN IMAGE HERE

Placeholder text, will need to be confirmed once TUI is functional:

The interactive arguments editor provides a Text User Interface (TUI) where properties and options can be configured. The TUI also provides some information on required properties, defaults, and expected input types (string, boolean, integer, or array).

In the TUI, most properties are initially marked as comments with the `#` symbol, indicating that they are not yet configured. However, `username:` and `full_name:` are shown as required fields.

To provide values for the other properties, you need to remove the `#` comment designator from the corresponding line in the TUI.

A space is required between the provided property and entered data, for example `username: testuser`.

Press <kbd>F2</kbd> or click **Save** to save the modified file.

Press <kbd>F10</kbd>, <kbd>Esc</kbd>, or click **Quit** to exit the TUI.
The `get_instance` command automatically executes upon exit.

{{< /expand >}} -->

## Get_Next_Uid Command

The `get_next_uid` command displays the next available user identification number (UID).

{{< expand "Using the Get_Next_Uid Command" "v" >}}

#### Description

The `get_next_uid` command does not require entering properties or values.

`get_next_uid` returns the next available UID in numerical order.
Default behavior begins identification number for local users at 3000.

#### Usage

From the CLI prompt, enter:

`account user get_next_uid`

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

`user get_next_uid`

Press <kbd>Enter</kbd>

{{< expand "Command Example" "v" >}}
```
account user get_next_uid
3003
```
{{< /expand >}}
{{< /expand >}}

## Get_User_Obj Command

The `get_user_obj` command returns dictionary containing information from **struct passwd** for the user and bypasses user cache.

{{< expand "Using the Get_User_Obj Command" "v" >}}

#### Description

The `get_user_obj` command returns username, account UID, primary group GID, full name (displayed as `pw_gecos`), home directory, and shell preference setting.

The user account can be specified using either the username or UID.

`get_user_obj` has two additional options.
The `get_groups` option includes the user's assigned groups in the command results.
Results do not include nested groups for Active Directory users.

The `sid_info` option retrieves the Security Identifier (SID) and domain information for the user.
In some instances retrieving SID and domain information makes the operation hang until the winbindd request timeout has been reached if the winbindd connection manager has not yet marked the domain as offline. Check the Active Directory service state prior to batch operations using this option.

#### Usage

From the CLI prompt, enter:

<code>account user get_user_obj get_user_obj={"uid": <i>3001</i>}</code>

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

<code>user get_user_obj get_user_obj={"uid": <i>3001</i>}</code>

Press <kbd>Enter</kbd>

Where *3001* is the id number for the targeted account.

You can also use <code>get_user_obj={"username": "<i>testuser</i>"}</code>, where *testuser* is the username of the targeted account.

{{< expand "Command Example" "v" >}}
<pre><code>
account user get_user_obj get_user_obj={"username": "<i>testuser</i>", "get_groups": <i>true</i>, "sid_info": <i>true</i>}
+-----------+--------------+
|   pw_name | testuser     |
|    pw_uid | 3000         |
|    pw_gid | 65534        |
|  pw_gecos | Test User    |
|    pw_dir | /nonexistent |
|  pw_shell | /usr/bin/zsh |
| grouplist | 65534        |
|           | 3000         |
|           | 3009         |
|           | 545          |
|           | 3022         |
|           | 3002         |
|  sid_info | &lt;null&gt;       |
+-----------+--------------+
</code></pre>
{{< /expand >}}
{{< /expand >}}


## Has_Local_Administrator_Set_Up Command

The `has_local_administrator_set_up` command returns whether a local administrator account with a valid password exists.

{{< expand "Using the Has_Local_Administrator_Set_Up Command" "v" >}}

#### Description

The `has_local_administrator_set_up` command does not require entering properties or values.

#### Usage

From the CLI prompt, enter:

`account user has_local_administrator_set_up`

From the **account** prompt, enter:

`user has_local_administrator_set_up`

{{< expand "Command Example" "v" >}}
```
account user has_local_administrator_set_up
true
```
{{< /expand >}}
{{< /expand >}}

## Has_Root_Password Command

The `has_root_password` command is a deprecated method. Use the [`has_local_administrator_set_up`](#the-has_local_administrator_set_up-command) command instead.

{{< expand "Deprecation Notice" "v" >}}
{{< include file="RootLoginWarnSCALE.md" type="page" >}}
{{< /expand >}}

## Pop_Attribute Command

The `pop_attribute` command removes attributes, defined by a key, from a user dictionary. See also [`set_attribute`](#the-set_attribute-command) and [`create attributes=`](#create-configuration-properties).

{{< expand "Using the Pop_Attribute Command" "v" >}}

#### Description

Use `pop_attribute` to manage custom account attributes.
Use cases for the attributes storage object include custom user metadata, access control, user categorization, integration with external systems, and automation and policies.

The command returns `true` if the attribute is successfully deleted.
The command returns `false` if the specified key or user attribute does not exist.

#### Usage

From the CLI prompt, enter:

<code>account user pop_attribute id=<i>3001</i> key="<i>favorite_color</i>"</code>

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

<code>account user pop_attribute id=<i>3001</i> key="<i>favorite_color</i>"</code>

Press <kbd>Enter</kbd>

Where *3001* is the UID of the target account and *favorite_color* is the account dictionary key to erase.

{{< expand "Command Example" "v" >}}

<pre><code>
account user pop_attribute id=<i>3001</i> key="<i>favorite_color</i>"
true
</code></pre>

{{< /expand >}}
{{< /expand >}}

## Query Command

{{< include file="/_includes/CLI/CLICommandWIP.md" type="page" >}}

The `query` command retrieves information about a user or users and can use various query-filters and query-options.

{{< expand "Using the Query Command" "v" >}}

#### Description

Enter the command with no additional attributes or properties to perform a basic query of all local users.

Add additional properties to return the value of the specified key(s) for all users.
There are 23 `query` properties available.

{{< expand "Query Properties" "v" >}}
{{< truetable >}}
| Property | Purpose |
|-----------|-------------|
| `uid`  | <!--These should be filled in, with examples, once behavior in general and specified searches is known.--> |
| `username` |  |
| `home` |  |
| `shell` |  |
| `full_name` |  |
| `email` |  |
| `password_disabled` |  |
| `locked` |  |
| `smb` |  |
| `sudo_commands` |  |
| `sudo_commands_nopasswd` |  |
| `sshpubkey` |  |
| `group` |  |
| `attributes` |  |
| `group` |  |
| `id` |  |
| `builtin` |  |
| `id_type_both` |  |
| `local` |  |
| `unixhash` |  |
| `smbhash` |  |
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
| `SMB`  | Includes Windows SID and NT Name for user. If this option is not specified, then these keys have `null` value. |
| `DS` | Includes users from Directory Service (LDAP or Active Directory) in results |
{{< /truetable >}}

#### Usage

From the CLI prompt, enter:

`account user query`

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

`user query`

Press <kbd>Enter</kbd>

{{< expand "Command Example" "v" >}}
```
+-----+-----------+------------+------------+----------+-------+--------------+---------+---------+-----------------+--------+---------------+------------------------+------------+------------+--------+-------------+-----------+-----------+
| uid | username  | unixhash   | smbhash    | home     | shell | full_name    | builtin | smb     | password_disabled | locked | sudo_commands | sudo_commands_nopasswd | attributes | email      | group  | groups      | sshpubkey | immutable |
+-----+-----------+------------+------------+----------+-------+--------------+---------+---------+-----------------+--------+---------------+------------------------+------------+------------+--------+-------------+-----------+-----------+
| 0   | root      | *          |            | /root    | /...  | root         | true    | false   | true            | false  | <empty list>  | <empty list>           | <dict>     | <null>     | <dict> | b..._administrators | <null>    | true      |
| 1   | daemon    | *          |            | /root    | /...  | Owner...     | true    | false   | false           | false  | <empty list>  | <empty list>           | <dict>     | <null>     | <dict> | <empty list> | <null>    | true      |
...
```
{{< /expand >}}

Additional properties included in the command string return specific information.

{{< expand "Command Example" "v" >}}
```
account user query uid
+-------+
| uid   |
+-------+
| 0     |
| 1     |
| 2     |
| 5     |
| 9     |
| 6     |
| 111   |
| 13    |
| 10    |
...
```
{{< /expand >}}

`query` can also return information about a specific user.

<!--Example to be added once this mechanism syntax is discovered
```
```-->

{{< /expand >}}
## Set_Attribute Command

The `set_attribute` command sets a user's general purpose attributes dictionary key to a specified value. See also [`pop_attribute`](#the-pop_attribute-command) and [`create attributes=`](#create-configuration-properties).

{{< expand "Using the Set_Attribute Command" "v" >}}

#### Description

Use `set_attribute` to manage custom account attributes.
Use cases for the attributes storage object include custom user metadata, access control, user categorization, integration with external systems, and automation and policies.

#### Usage

From the CLI prompt, enter:

<code>account user set_attribute id=<i>3001</i> key="<i>favorite_color</i>" value="<i>blue</i>"</code>

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

<code>user set_attribute id=<i>3001</i> key="<i>favorite_color</i>" value="<i>blue</i>"</code>

Press <kbd>Enter</kbd>

Where *3001* is the UID of the account to update, *favorite_color* is the desired property, and *blue* is the corresponding value.

{{< expand "Command Example" "v" >}}
<pre><code>
account user set_attribute id=<i>3001</i> key="<i>favorite_color</i>" value="<i>blue</i>"
true
</code></pre>
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
The `setup_local_administrator` command only works if both a local administrator and root password have not been configured.
This means that you have either performed a fresh install of SCALE, and chose to not configure an admin or root password in the TrueNAS Console installer, or you have reset configuration to defaults and have not yet logged in to the SCALE Web UI.
If either a local administrator or a root password exist, this command returns `Error: Local administrator is already set up.`
{{< /hint >}}

{{< expand "Using the Setup_Local_Administrator Command" "v" >}}

#### Description

Enter the CLI from the [Console setup menu]({{< relref "ConsoleSetupMenuScale.md" >}}) before configuring a local administrator or root user account.

The command returns a blank line.

To confirm the administrator is set up, use [`has_local_administrator_set_up`](#has_local_administrator_set_up-command), [`get_user_obj`](#get_user_obj-command), or log in to the SCALE Web UI using the admin username and password.

#### Usage

From the CLI prompt, enter:

<code>account user setup_local_administrator username:admin password:<i>passw0rt</i></code>

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

<code>user setup_local_administrator username:admin password:<i>passw0rt</i></code>

Press <kbd>Enter</kbd>

Where *passw0rt* is the desired admin account password.

{{< hint type=note >}}
`setup_local_administrator` accepts only "admin" or "root" for **username**.
It is recommended to use "admin." Root user access is a deprecated method.
{{< /hint >}}

{{< expand "Command Example" "v" >}}
<code>account user setup_local_administrator username:admin password:<i>passw0rt</i></code>
{{< /expand >}}
{{< /expand >}}

## Shell_Choices Command

The `shell_choices` command returns the shell choices available to user accounts.

{{< expand "Using the Shell_Choices Command" "v" >}}

#### Description

Enter the command with no additional properties to return shell choices available to all users.

Add a UID number to return the available shell choices for a specific account.

#### Usage

From the CLI prompt, enter:

<code>account user shell_choices</code>

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

<code>user shell_choices</code>

Press <kbd>Enter</kbd>

{{< expand "Command Example" "v" >}}
<pre><code>
account user shell_choices
+-------------------+---------+
| /usr/sbin/nologin | nologin |
|     /usr/bin/bash | bash    |
|    /usr/bin/rbash | rbash   |
|     /usr/bin/dash | dash    |
|       /usr/bin/sh | sh      |
|      /usr/bin/zsh | zsh     |
|     /usr/bin/tmux | tmux    |
+-------------------+---------+
<br>
account user shell_choices user_id=<i>3000</i>
+-------------------+---------+
| /usr/sbin/nologin | nologin |
|     /usr/bin/bash | bash    |
|    /usr/bin/rbash | rbash   |
|     /usr/bin/dash | dash    |
|       /usr/bin/sh | sh      |
|      /usr/bin/zsh | zsh     |
|     /usr/bin/tmux | tmux    |
+-------------------+---------+
<!-- Add Admin -->
</code></pre>

Where *3000* <!-- Add Admin --> is the UID of the target account.
{{< /expand >}}
{{< /expand >}}
## Update Command

The `update` command updates the attributes of an existing user. For available properties, see [`create`](#create-configuration-properties).

{{< expand "Using the Update Command" "v" >}}
#### Descripton

Syntax and available properties for `update` closely follow those of [`create`](#create-command).

The command returns a blank line.

To confirm the user is updated, use [`get_user_obj`](#get_user_obj-command) or go to [**Credentials > Local Users**]({{< relref "managelocalusersscale.md" >}}) in the SCALE Web UI.

#### Usage

From the CLI prompt, enter:

<code>account user update uid_or_username=<i>3001</i></code>

Enter all properties and corresponding values to update.

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

<code>user update uid_or_username=<i>3001</i></code>

Enter all properties and corresponding values to update.

Press <kbd>Enter</kbd>

Where *3001* represents the UID or user name of the target account.

{{< expand "Command Example" "v" >}}
<code>account user update uid_or_username=<i>3001</i> email="<i>mail&#64;email.com</i>"</code>

The command as written updates the email address for the account with UID 3001 to <i>mail&#64;email.com</i>.
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scalecliaccount" limit="10" title="Related CLI Account Articles" >}}
{{< taglist tag="scaleusers" limit="10" title="Related SCALE Users Articles" >}}
