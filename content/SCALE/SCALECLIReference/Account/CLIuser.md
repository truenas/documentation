---
title: "User"
description: "Provides information about the account user namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 10
aliases:
draft: false
tags:
- scalecliaccount
- scalecliauth
- scaleusers
- scale2fa
---

{{< toc >}}

{{< include file="/_includes/CLI/CLIGuideWIP.md" type="page" >}}

<!-- NOTE: Text in comment tags marks changes to be made as CLI documentation develops, remove comment tags as needed  -->

The **user** namespace has 14 commands and is based on functions found in the SCALE API and web UI. It provides access to user account creation, configuration, and attribute management. You can also set up a local administrator account using this namespace.

<<<<<<< HEAD
You can enter commands from the main CLI prompt or from the system namespace prompt.
=======
The **user** namespace has 14 commands and is based on Users functions found in the SCALE API and web UI. 
It provides access to user account creation, configuration, and attribute management functions. 
You can also set up a local administrator account using this namespace.
>>>>>>> 9b234ba0d (PD-552 Update CLIUser.md to Template)

## Create Command

The `create` command configures a new user account.

{{< expand "Using the Create Command" "v" >}}
#### Description

`create` has 19 configuration properties.
They are `uid`, `username`, `group`, `group_create`, `home`, `home_mode`, `home_create`, `shell`, `full_name`, `email`, `password`, `password_disabled`, `locked`, `smb`, `sudo_commands`, `sudo_commands_nopasswd`, `sshpubkey`, `groups`, and `attributes`.
The `username`, `full_name`, `primary_group`, and `password_status` are all required properties for user creation.
For more details, see the table below in **Create Command Properties**.
{{< expand "Create Command Properties" "v" >}}

{{< truetable >}}
| Property | Accepts | Required | Function |
|-----------|-------------|-------------|-------------|
| `uid` | Integer | No | Specifies the User Identification number (UID). If a UID is not provided, it is automatically filled with the next one available. <br> Ex: <code>uid=<i>3000</i></code> <br> &emsp; Where *3000* is an available UID number. |
| `username` | String | Yes | Sets the account username. <br> Ex. <code>username=<i>testuser</id></code> <br> &emsp; Where *testuser* is the username. |
| `group` | Integer or String | Yes* | Assigns the account to an existing group. <br> Ex. <code>group=<i>value</i></code> <br> &emsp; Where *value* is either the group name or Group Identification number (GID). <br> *Required when `group_create` is set to false. |
| `group_create` | Boolean | Yes*| Set to `true` to create a new group based on the `username` value and assign the account to it. Default state is `false`. <br> Ex. <code>group_create=<i>true</i></code> <br> &emsp; Where *true* is a boolean variable. <br> *Required when an existing group is not assigned. |
| `home` | String | No | Sets a home directory for the account. Defaults to `/nonexistent` if not defined. <br> Requires `home_create=true` if the desired directory does not exist. <br> Ex. <code>home="<i>/mnt/tank/staff/</i>"</code> <br> &emsp; Where */mnt/tank/staff/* is an existing directory. |
| `home_mode` | String | No | Sets home directory permissions using octal permission values. Defaults to `700`. <br> Ex. <code>home_mode=<i>700</i></code> <br> &emsp; Where *700* is an octal value representing the desired permission mode. |
| `home_create` | Boolean | No | If set to `true`, creates a new home directory for the user within a selected path defined by `home`. Default state is `false`. Reverts to default after the directory is created. <br> Ex. <code>home="<i>/mnt/tank/</i>" home_create=<i>true</i></code> <br> &emsp; Where */mnt/tank/* is the desired parent path and *true* is the boolean variable. <br> &emsp; This command creates a new home directory at **/mnt/tank/**. The directory name is the account username. |
| `shell` | String | No | Sets which shell option the user accesses when entering **Shell** via the TrueNAS SCALE Web UI. Defaults to `/usr/bin/zsh` if not defined. <br> Retrieve available choices using `user.shell_choices`. <br> Ex. <code>shell="/usr/bin/<i>bash</i>"</code> <br> &emsp; Where *bash* is the desired shell choice in the **/usr/bin** directory. |
| `full_name` | String | Yes | Sets the user full name for the account. <br> Ex. <code>full_name="<i>Test User</i>"</code> <br> &emsp; Where *Test User* is the full name of the user. |
| `email` | String or Null | No | Sets the account email address. <br> Ex. <code>email="<i>testuser@gmail.com</i>"</code> <br> &emsp; Where *testuser@gmail.com* is the email address for the user. |
| `password` | String | Yes* | Assigns a password to the account. <br> Ex. <code>password=<i>passw0rt</i></code> <br> &emsp; Where *passw0rt* is the desired password. <br> *Required when `password_disabled` is set to false. |
| `password_disabled` | Boolean | Yes* | Sets whether to disable or require a password for account log in. Default state is `false`, which makes a password required. <br> Ex. <code>password_disabled=<i>true</i></code> <br> &emsp; Where *true* is a boolean variable. <br> *Required when `password` is not defined. |
| `locked` | Boolean | No | If set to `true`, prevents the user from logging in or using password-based services until this property is unset. Locking an account is only possible when `disable_password` is false and a password is created for the account. Defaults to `false`. <br> Ex. <code>locked=<i>true</i></code> <br> &emsp; Where *true* is a boolean variable. |
| `smb` | Boolean | No | Enables or disables authentication to Samba shares for the user. Defaults to `true`. <br> Enabling SMB authentication on an account where it was previously disabled requires setting a new `password`. <br> Ex. <code>smb=<i>false</i></code> <br> &emsp; Where *false* is a boolean variable. |
| `sudo_commands` | Array | No | Sets any sudo commands the user is allowed to use. Security best practice is to limit sudo permissions to administrative users. <br> Ex. <code>sudo_commands="<i>/path1/</i>, <i>/path2/</i>"</code> <br> &emsp; Where <i>/path1/</i> and <i>/path2/</i> are absolute paths to the location of executable scripts or packages. <br> &emsp; You can also use `sudo_commands="ALL"` |
| `sudo_commands_nopasswd` | Array | No | Sets any sudo commands the user is allowed to use without entering a password. Exercise caution when allowing sudo commands without password prompts. We recommend limiting this privilege to trusted users and specific commands to minimize security risks. <br> Ex. <code>sudo_commands_nopasswd="<i>/path1/</i>,<i</path2/</i>" <br> &emsp; Where <i>/path1/</i> and <i>/path2/</i> are absolute paths to the location of executable scripts or packages. <br> &emsp; You can also use `sudo_commands_nopasswd="ALL"`, but this is not recommended. |
| `sshpubkey` | String or Null | No | Adds a public SSH key of the user for any key-based authentication. Do not enter the private key. <br> User account must have a defined home directory to store an SSH key. <br> Ex. <code>sshpubkey="<i>key</i>"</code> <br> &emsp; Where *key* is the SSH public key string. |
| `groups` | Array | No | Assigns the user to one or more auxiliary groups. <br>Ex. <code>groups=<i>news,staff,testuser</i></code> <br> &emsp; Where *news,staff,testuser* are the names of desired groups. |
| `attributes` | Object | No | The **attributes** dictionary is a general-purpose object for storing arbitrary user information. Use this property to store custom metadata and other information relevant to the user. Custom keys and corresponding values can relate to specfic needs and use cases. <br>Ex. <code>attributes={"<i>favorite_color</i>": "<i>blue</i>"} <br> &emsp; Where <code><i>favorite_color</i></code> is a new or existing key and *blue* is a corresponding value. |
{{< /truetable >}}
{{< /expand >}}

Enter the command string with property arguments using the `=` delimiter to separate property and value, then press <kbd>Enter</kbd>. 
For example, `uid=3000`.
The command returns a blank line.

To confirm the user is created, use [`get_user_obj`](#get_user_obj-command) or go to [**Credentials > Local Users**]({{< relref "managelocalusersscale.md" >}}) in the SCALE Web UI.

#### Usage
{{< hint type=note >}}
This command contains the minimum required properties to successfully create a user.
{{< /hint >}}

From the CLI prompt, enter:

<code>account user create username=<i>testuser</i> full_name="<i>Test User</i>" group_create=<i>true</i> password=<i>passwort1234</i></code>

Where:
* *testuser* is the desired username
* *Test User* is the user full name for the user
* *true* is either true or false. True creates the group at the same time, false does not create the group.
* *passwort1234* is the password for the user

{{< expand "Command Example" "v" >}}
```
account user create username=testuser full_name="Test User" group_create=true password=passwort1234

```
{{< /expand >}}
{{< /expand >}}

<<<<<<< HEAD
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
| `shell=` | String | Sets which shell option the user accesses when entering **Shell** via the TrueNAS SCALE Web UI. Defaults to `/usr/bin/zsh` if not defined. <br> Use `shell_choices` to retrieve available path options. Valid shell options differ for administrative and non-administrative users. See [Shell_Choices Command](#shell_choices-command) for more information. <br> Ex. `shell="/usr/bin/bash"` <br> &emsp; Where `/usr/bin/bash` is the desired shell choice. | No |
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
=======

### Delete Command
>>>>>>> 9b234ba0d (PD-552 Update CLIUser.md to Template)

The `delete` command removes an existing user account from the system.

{{< expand "Using the Delete Command" "v" >}}
#### Description
The `delete` command has one required property, `id`.
Enter the command string, with the property argument using the `=` delimiter to seprate the property and value, then press <kbd>Enter</kbd>.
The command returns a blank line.

To confirm the user is deleted, use [`get_user_obj`](#get_user_obj-command) or go to [**Credentials > Local Users**]({{< relref "managelocalusersscale.md" >}}) in the SCALE Web UI.

By default, the `user delete` command also deletes the primary group for the user if it is not used by another user.
Use the `delete_group` property set to `false` to retain the primary group for the user.

#### Usage

From the CLI prompt, enter:

<code>account user delete id=<i>3001</i></code>

Where *3001* is the user ID number for the account.

{{< expand "Command Example" "v" >}}
```
account user delete id=3001
```
{{< /expand >}}

Use the `delete_group` option to keep the primary group of the user.

{{< expand "Command Example" "v" >}}
```
account user delete id=3001 options={"delete_group":false}
```
{{< /expand >}}
{{< /expand >}}

<<<<<<< HEAD
## Get_Instance Command

{{< include file="/_includes/CLI/CLICommandWIP.md" type="page" >}}
=======
### Get_Instance Command
or the query-options-get_instance value specified.
>>>>>>> 9b234ba0d (PD-552 Update CLIUser.md to Template)

The `get_instance` command retrieves information about a user such as their username, UID (User ID), group membership, permissions, and other relevant attributes.

{{< expand "Using Get_Instance Command" "v" >}}
#### Description
The `get_instance` command has one requireproperties, `id`.
Enter the command string, then then press <kbd>Enter</kbd>.
The command returns a table of information about the UID entered.

#### Usage
From the CLI prompt, enter:

<code>account user get_instance id=<i>1</></code>

Where *1* is the UID for the user, in this case root.

{{< expand "Command Example" "v" >}}
```
account user get_instance id=1
+------------------------------------------+
|                        id | 1            |
|                       uid | 0            |
|                  username | root         |
|                  unixhash | *            |
|                      home | /root        |
|                     shell | /usr/bin/zsh |
|                 full_name | root         |
|                   builtin | true         |
|                       smb | false        |
|         password_disabled | true         |
|      ssh_password_enabled | false        |
|                    locked | false        |
|             sudo_commands | <empty list> |
|  sudo_commands_nopassword | <empty list> |
|                     email | <null>       |
|                     group | <dict>       |
|                    groups | 40           |
|                 sshpugkey | <null>       |
|                 immutable | true         |
| twofactor_auth_configured | false        |
|                     local | true         |
|              id_type_both | false        |
|                   nt_name | <null>       |
|                       sid | <null>       |
+------------------------------------------+
```
{{< /expand >}}

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
Enter the command, then press <kbd>Enter</kbd>
The command returns the next available UID in numerical order.
Default behavior begins identification number for local users at 3000.

#### Usage

From the CLI prompt, enter:

`account user get_next_uid`

{{< expand "Command Example" "v" >}}
```
account user get_next_uid
3003
```
{{< /expand >}}
{{< /expand >}}

## Get_User_Obj Command

The `get_user_obj` command returns a table containing information from **struct passwd** for the user and bypasses user cache.

{{< expand "Using the Get_User_Obj Command" "v" >}}
#### Description
The `get_user_obj` command has one required property, `get_user_obj` that expects you to enter property arguments formatted as an array.
Enter the command string, using `=` followed by the curly brackets that enclose the property argument. 
You can enter either the `uid` or `username` property in this command string.
Enter the property enclosed in double quotes, then the `:` delimiter followed by the value enclosed in double quotes, with no space after the colon. Press<kbd>Enter</kbd>.
The command returns a table for the UID that includes the **pw_name**, **pw_uid**, **pw_gid**, **pw_gecos**, **pw_dir**, and **pw_shell** values.

#### Usage

From the CLI prompt, enter:

<code>account user get_user_obj get_user_obj={"uid": <i>3001</i>}</code>

Where *3001* is the id number for the targeted account.

Alternately enter:

<code>get_user_obj={"username":"<i>testuser</i>"}</code>

Where *testuser* is the username of the targeted account.

{{< expand "Command Example" "v" >}}
<code>
account user get_user_obj get_user_obj={"username": "<i>testuser</i>"}
+-----------+--------------+
|   pw_name | testuser     |
|    pw_uid | 3000         |
|    pw_gid | 65534        |
|  pw_gecos | Test User    |
|    pw_dir | /nonexistent |
|  pw_shell | /usr/bin/zsh |
+-----------+--------------+
</code></pre>
{{< /expand >}}
{{< /expand >}}

<<<<<<< HEAD

## Has_Local_Administrator_Set_Up Command
=======
### Has_Local_Administrator_Set_Up Command
>>>>>>> 9b234ba0d (PD-552 Update CLIUser.md to Template)

The `has_local_administrator_set_up` command returns whether a local administrator account with a valid password exists.

{{< expand "Using the Has_Local_Administrator_Set_Up Command" "v" >}}

#### Description
The `has_local_administrator_set_up` command does not require entering properties or values.
Enter the command, then press<kbd>Enter</kbd>.
The command returns true if the admin account has a password, false if it does not.

#### Usage

From the CLI prompt, enter:

`account user has_local_administrator_set_up`

{{< expand "Command Example" "v" >}}
```
account user has_local_administrator_set_up
true
```
{{< /expand >}}
{{< /expand >}}

## Has_Root_Password Command

<<<<<<< HEAD
The `has_root_password` command is a deprecated method. Use the [`has_local_administrator_set_up`](#the-has_local_administrator_set_up-command) command instead.
=======
The `has_root_password` command is a deprecated command. Use the [`has_local_administrator_set_up`](#has_local_administrator_set_up-command) command instead.
>>>>>>> 9b234ba0d (PD-552 Update CLIUser.md to Template)

{{< expand "Deprecation Notice" "v" >}}
{{< include file="RootLoginWarnSCALE.md" type="page" >}}
{{< /expand >}}
<<<<<<< HEAD

## Pop_Attribute Command

The `pop_attribute` command removes attributes, defined by a key, from a user dictionary. See also [`set_attribute`](#the-set_attribute-command) and [`create attributes=`](#create-configuration-properties).

{{< expand "Using the Pop_Attribute Command" "v" >}}

#### Description
=======
<!-- Not in Cobia CLI
### Pop_Attribute Command

The `pop_attribute` command removes attributes, defined by a key, from a user dictionary. 
See also [`set_attribute`](#set_attribute-command) and [Create Configuration Properties](#create-configuration-properties).
>>>>>>> 9b234ba0d (PD-552 Update CLIUser.md to Template)

Use `pop_attribute` to manage custom account attributes.
Use cases for the attributes storage object include custom user metadata, access control, user categorization, integration with external systems, and automation and policies.

{{< expand "Using the Pop_Attribute Command" "v" >}}
#### Description
The `pop_attribute` command has two properties, `id` and `key`.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns `true` if the attribute is successfully deleted.
The command returns `false` if the specified key or user attribute does not exist.

#### Usage

From the CLI prompt, enter:

<code>account user pop_attribute id=<i>3001</i> key="<i>favorite_color</i>"</code>

Where *3001* is the UID of the target account and *favorite_color* is the account attribute (dictionary) key to erase.

{{< expand "Command Example" "v" >}}
<code>
account user pop_attribute id=<i>3001</i> key="<i>favorite_color</i>"
true
</code>
{{< /expand >}}
{{< /expand >}}
-->
### Provisioning_URI Command

The `provisioning_uri` command provides the provisioning URI for the one-time password (OTP) for the username entered. 

{{< include file="CLICommandWIP.md" type="page" >}}

## Query Command

{{< include file="/_includes/CLI/CLICommandWIP.md" type="page" >}}

The `query` command retrieves information about a user or users or or the query-options-get_instance value specified..

{{< expand "Using the Query Command" "v" >}}
#### Description
The `query` command has no required properties or arguments, but you can use various query-filters and query-options specified in an arrry.
Enter the command, then press <kbd>Enter</kbd>.
Returns a table of all users in the system.

<!--commenting out this information until we get commands using them working, and the output result. 
These should be filled in, with examples, once behavior in general and specified searches is known.
Add additional properties to return the value of the specified key(s) for all users.
There are 23 `query` properties available.

{{< expand "Query Properties" "v" >}}
{{< truetable >}}
| Property | Purpose |
|-----------|-------------|
| `uid` |  |
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

There are two `additional_information` options supported.

{{< truetable >}}
| Option | Purpose |
|-----------|-------------|
| `SMB`  | Includes Windows SID and NT Name for user. If not specified, then these keys have `null` value. |
| `DS` | Includes users from Directory Service (LDAP or Active Directory) in the result. |
{{< /truetable >}} -->

#### Usage

To enter a simple `query` command, from the CLI prompt, enter:

`account user query`

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
<!-- 
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
<<<<<<< HEAD
## Set_Attribute Command

The `set_attribute` command sets a user's general purpose attributes dictionary key to a specified value. See also [`pop_attribute`](#the-pop_attribute-command) and [`create attributes=`](#create-configuration-properties).

{{< expand "Using the Set_Attribute Command" "v" >}}

#### Description
=======
<!-- not in Cobia cli>
### Set_Attribute Command

The `set_attribute` command sets the general purpose attribute dictionary key for a user to a specified value. 
See also [`pop_attribute`](#pop_attribute-command) and [Create Configuration Properties](#create-configuration-properties).
>>>>>>> 9b234ba0d (PD-552 Update CLIUser.md to Template)

Use `set_attribute` to manage custom account attributes.
{{< expand "Using the Set_Attribute Command" "v" >}}
#### Description
The `set_attribute` command 
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
<<<<<<< HEAD

## Set_Root_Password Command

The `set_root_password` command is a deprecated method. Use the [`setup_local_administrator`](#the-setup_local_administrator-command) command instead.

{{< expand "Deprecation Notice" "v" >}}
{{< include file="RootLoginWarnSCALE.md" type="page" >}}
{{< /expand >}}
=======
-->
### Set_Root_Password Command

The `set_root_password` command is a deprecated method. 
Use the [`setup_local_administrator`](#setup_local_administrator-command) command instead.
>>>>>>> 9b234ba0d (PD-552 Update CLIUser.md to Template)

## Setup_Local_Administrator Command

The `setup_local_administrator` command creates and configures an admin account. 
It can be used during initial configuration.

{{< hint type=important >}}
The `setup_local_administrator` command only works if both a local administrator and root password are not configured.
This means that you have either performed a fresh install of SCALE using option 3 to configure using the Web UI and not configured an admin or root password, or you reset the configuration to defaults and have not yet logged in to the SCALE Web UI.
If either a local administrator or a root password exist, this command returns `Error: Local administrator is already set up.`
{{< /hint >}}

{{< include file="CLICommandWIP.md" type="page" >}}

{{< expand "Using the Setup_Local_Administrator Command" "v" >}}
#### Description
The `setup_local_administrator` command has two required properties, `username`, `password`. 
The `options` property is not required and is entered as an array.
Enter property arguments using the `=` delimiter to separate the property and value, then enter <kbd>Enter</kbd>.
The command returns a blank line.
<!-- Commenting this out until it is verifed in cobia.
Enter the CLI from the [Console setup menu]({{< relref "ConsoleSetupMenuScale.md" >}}) before configuring a local administrator or root user account. -->
{{< hint type=note >}}
`setup_local_administrator` accepts only "admin" or "root" for **username**.
It is recommended to use "admin." Root user access is a deprecated method.
{{< /hint >}}

To confirm the administrator is set up, use [`has_local_administrator_set_up`](#has_local_administrator_set_up-command), [`get_user_obj`](#get_user_obj-command), or log in to the SCALE Web UI using the admin username and password.

#### Usage

From the CLI prompt, enter:

<code>account user setup_local_administrator username:<i>admin</i> password:<i>passw0rt</i></code>

Where:
* *passw0rt* is the password for the admin account.
* *admin* is the administration user. If the `username` value is *root* it sets up the root user.

{{< expand "Command Example" "v" >}}
<code>account user setup_local_administrator username:admin password:<i>passw0rt</i></code>
{{< /expand >}}
{{< /expand >}}

## Shell_Choices Command

The `shell_choices` command returns the shell choices available to user accounts. 

{{< expand "Using the Shell_Choices Command" "v" >}}
#### Description
<<<<<<< HEAD

Enter the command with no additional properties to return shell choices available to all users.

Additional shell choices are available to users with administrative privileges (members of the **builtin_administrators** group).
Use `group_ids` to retrieve all options available to members of that group.
=======
Enter the command does not require entering properties  or arguments to return shell choices available to all users.
Enter the the `uid` property using the `=` to separate the property and value to return the available shell choices for a specific account.
Enter the command or command string, then press <kbd>Enter</kbd>.
The command returns a table of shell choices for the user.
>>>>>>> 9b234ba0d (PD-552 Update CLIUser.md to Template)

#### Usage

From the CLI prompt, enter:

<code>account user shell_choices</code>

Or to specify a user ID, enter:

account user shell_choices user_id=<i>3000</i>

Where *3000* is the UID of the target account.<!-- Add Admin --> 

{{< expand "Command Example" "v" >}}
```
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
```
{{< /expand >}}
<<<<<<< HEAD

To view available shell options for accounts with admin privileges, use `group_ids`.
Target the **builtin_administrators** group by GID or group name.

{{< expand "Command Example" "v" >}}
```
account user shell_choices group_ids=[544]
+----------------------+-----------------+
|    /usr/sbin/nologin | nologin         |
|         /usr/bin/cli | TrueNAS CLI     |
| /usr/bin/cli_console | TrueNAS Console |
|        /usr/bin/bash | bash            |
|       /usr/bin/rbash | rbash           |
|        /usr/bin/dash | dash            |
|          /usr/bin/sh | sh              |
|        /usr/bin/tmux | tmux            |
|         /usr/bin/zsh | zsh             |
+----------------------+-----------------+
```
```
[qe-scale-04]> account user shell_choices group_ids=["builtin_administrators"]
+----------------------+-----------------+
|    /usr/sbin/nologin | nologin         |
|         /usr/bin/cli | TrueNAS CLI     |
| /usr/bin/cli_console | TrueNAS Console |
|        /usr/bin/bash | bash            |
|       /usr/bin/rbash | rbash           |
|        /usr/bin/dash | dash            |
|          /usr/bin/sh | sh              |
|        /usr/bin/tmux | tmux            |
|         /usr/bin/zsh | zsh             |
+----------------------+-----------------+
```
{{< /expand >}}
{{< /expand >}}

## Update Command

The `update` command updates the attributes of an existing user. For available properties, see [`create`](#create-configuration-properties).
=======
{{< /expand >}}

### Update Command
The `update` command updates the attributes of an existing user. 
>>>>>>> 9b234ba0d (PD-552 Update CLIUser.md to Template)

{{< expand "Using the Update Command" "v" >}}
#### Descripton
The `update` command uses the the same properties as the [`create`](#create-command) command. 
The required property is `uid_or_username`.
Enter property arguments with the `=` delimiter separating property and values, then press <kbd>Enter</kbd>.
The command returns a blank line.

To confirm the user is updated, use [`get_user_obj`](#get_user_obj-command) or go to [**Credentials > Local Users**]({{< relref "managelocalusersscale.md" >}}) in the SCALE Web UI.

#### Usage
From the CLI prompt, enter:

<code>account user update uid_or_username=<i>3001</i></code>

Where *3001* is the UID or username of the account.

To update the email address for an account, enter:

<code>account user update uid_or_username=<i>3001</i> email="<i>mail&#64;email.com</i>"</code>

Where:
* *3001* is the UID or username of the account to update.
* *mail&#64;email.com* is the update made to the email for the user specified.

{{< expand "Command Example" "v" >}}
```
account user update uid_or_username=3001

```
{{< /expand >}}
{{< /expand >}}

### Verify_Twofactor_Token Command
The `verify_twofactor_token` command verifes the token for the username specified is successfully authenticated.

Two factor authenticate is configured using the [auth two_factor command]({{< relref "CLITwoFactor.md" >}}).

{{< include file="CLICommandWIP.md" type="page" >}}


{{< taglist tag="scalecliaccount" limit="10" title="Related CLI Account Articles" >}}
{{< taglist tag="scaleusers" limit="10" title="Related SCALE Users Articles" >}}
{{< taglist tag="scale2fa" limit="10" title="Related Two-Factor Authentication Articles" >}}
