---
title: "User"
description: "Provides information about the account user namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 10
aliases:
draft: false
tags:
- scalecliaccount
---

{{< toc >}}


{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

## Account User Commands

The **user** namespace has 14 commands and is based on functions found in the SCALE API and web UI. It provides access to user account creation, configuration, and attribute management. You can also set up a local administrator account using this namespace.

You can enter commands from the main CLI prompt or from the system namespace prompt.
### The create Command
The `create` command creates a new user account.

{{< expand "Using the create Command" "v" >}}
From the CLI prompt, enter:

`account user create`

From the account prompt, enter:

`user create`

### Options

`create` has one command option and 19 arguments.

A full `create` command string with the minimum required arguments could look like:

{{< include file="/_includes/CLI/AccountUserCreateExample.md" type="page" >}}

If there is an issue with the command string or a required argument is not defined, the CLI displays a validation error.
If the user account is successfully created, the CLI displays a new prompt.

{{< trueimage src="/images/SCALE/CLI/Account/UserCreateErrorAndCorrect.png" alt="user create Validation Error and Success" id="1: user create Validation Error and Success" >}}

Entering the `create --` option will open an **interactive arguments editor**.

{{< expand "Interactive Arguments Editor" "v" >}}
{{< trueimage src="/images/SCALE/CLI/Account/UserCreateInteractiveArgumentsEditor.png" alt="Interactive Arguments Editor" id="2: Interactive Arguments Editor" >}}

The interactive arguments editor provides a Text User Interface (TUI) where arguments and options can be configured. The TUI also provides some information on required arguments, defaults, and expected input types (string, boolean, integer, or array).

A space is required between the TUI provided argument and entered data, for example `username: testuser`.
{{< /expand >}}

### Configuration Arguments

{{< truetable >}}
| Argument | Type | Function | Required? |
|-----------|-------------|-------------|-------------|
| `uid=` | Integer | Specifies the User Identification number (UID). If a UID is not provided, it is automatically filled with the next one available. <br> Ex: `uid=3000` <br> &emsp; Where `3000` is an available UID number. | No |
| `username=` | String | Sets the account username. <br> Ex. `username=testuser` <br> &emsp; Where `testuser` is the desired username. | **Yes** |
| `group=` | Integer or String | Assigns the account to an existing group. <br> Ex. `create group=value`<br> &emsp; Where `value` is the group name or Group Identification number (GID). | **Yes**, if `group_create` is set to false. |
| `group_create=` | Boolean | If set to `true`, creates a new group based on `username` and assigns the account to it. Default state is `false`. <br> Ex. `group_create=true` <br> &emsp; Where `true` is a boolean variable. | **Yes**, if an existing `group` is not assigned. |
| `home=` | String | Sets a home directory for the account. Defaults to `/nonexistent` if not defined. <br> Ex. ##### | No |
| `home_mode=` | String | ##### | No |
| `home_create=` | Boolean | ##### | No |
| `shell=` | String | Sets which shell option the user will access when entering **Shell** via the TrueNAS SCALE Web UI. Defaults to `/usr/bin/zsh` if not defined. <br> Available choices can be retrieved with `user.shell_choices`. <br> Ex. `shell="/usr/bin/bash"` <br> &emsp; Where `/usr/bin/bash` is the desired shell choice. | No |
| `full_name=` | String | Sets the user full name for the account. <br> Ex. `full_name="Test User"` <br> &emsp; Where `Test User` is the user's full name. | **Yes** |
| `email=` | String or Null | Sets the account email address. <br> Ex. `email="testuser@gmail.com"` <br> &emsp; Where `testuser@gmail.com` is the user email address. | No |
| `password=` | String | Assigns a password to the account. <br> Ex. `password=passwort1234` <br> &emsp; Where `passwort1234` is the desired password. | **Yes**, if `password_disabled` is set to false. |
| `password_disabled=` | Boolean | Sets whether to disable or require a password for account log in. Default state is `false`, password required. <br> Ex. `password_disabled=true` <br> &emsp; Where `true` is a boolean variable.  | **Yes**, if `password` is not defined. |
| `locked=` | Boolean | If set to `true`, prevents the user from logging in or using password-based services until this option is unset. Locking an account is only possible when Disable Password is false and a Password has been created for the account. Defaults to `false`. <br> Ex. `locked=true` <br> &emsp; Where `true` is a boolean variable. | No |
| `smb=` | Boolean | Enables or disables authentication of SMB shares for the user. Defaults to `true`. <br> Enabling SMB authentication on an account where it was previously disabled requires setting a new `password`. <br> Ex. `smb=false` <br> &emsp; Where `false` is a boolean variable. | No |
| `sudo_commands=` | Array | ##### | No |
| `sudo_commands_nopasswd=` | Array | ##### | No |
| `sshpubkey=` | String or Null | ##### | No |
| `groups=` | Array | Assigns the user to one or more auxiliary groups. <br> Ex. `groups=news,staff,testuser` <br> &emsp; Where `news,staff,testuser` are the names of desired groups. | No |
| `attributes=` | Object | A general-purpose object for storing arbitrary user information. <br> Ex. ##### | No |
{{< /truetable >}}

{{< /expand >}}
### The delete Command
The `delete` command deletes an existing user account.

{{< expand "Using the delete Command" "v" >}}

{{< /expand >}}

### The get_instance Command
The `get_instance` command retrieves information about a user such as their username, UID (User ID), group membership, permissions, and other relevant attributes.

{{< expand "Using the get_instance Command" "v" >}}

{{< /expand >}}

### The get_next_uid Command
The `get_next_uid` command displays the next available/free UID number.

{{< expand "Using the get_next_uid Command" "v" >}}

{{< /expand >}}

### The get_user_obj Command
The `get_user_obj` command returns dictionary containing information from struct passwd for the user specified by either the username or uid and bypasses user cache..

{{< expand "Using the get_user_obj Command" "v" >}}

{{< /expand >}}

### The has_local_administrator_set_up Command
The `has_local_administrator_set_up` command returns whether a local administrator account with a valid password exists.

{{< expand "Using the has_local_administrator_set_up Command" "v" >}}

{{< /expand >}}

### The has_root_password Command
The `has_root_password` command is a deprecated method. Use the [`has_local_administrator_set_up`](#the-has_local_administrator_set_up-command) command instead.

{{< expand "Deprecation Notice" "v" >}}
{{< include file="RootLoginWarnSCALE.md" type="page" >}}
{{< /expand >}}

### The pop_attribute Command
The `pop_attribute` command removes attributes, defined by a key, from a user dictionary.

{{< expand "Using the pop_attribute Command" "v" >}}

{{< /expand >}}

### The query Command
The `query` command queries users and can use various query-filters and query-options.

{{< expand "Using the query Command" "v" >}}

{{< /expand >}}

### The set_attribute Command
The `set_attribute` command sets a user's general purpose attributes dictionary key to a specified value.

{{< expand "Using the set_attribute Command" "v" >}}

{{< /expand >}}

### The set_root_password Command
The `set_root_password` command is a deprecated method. Use the [`setup_local_administrator`](#the-setup_local_administrator-command) command instead.

{{< expand "Deprecation Notice" "v" >}}
{{< include file="RootLoginWarnSCALE.md" type="page" >}}
{{< /expand >}}

### The setup_local_administrator Command
The `setup_local_administrator` command creates and configures an admin account. This method does not require authentication if a local administrator is not already set up.

{{< expand "Using the setup_local_administrator Command" "v" >}}

{{< /expand >}}

### The shell_choices Command
The `shell_choices` command returns the available shell choices to be used by a user account.

{{< expand "Using the shell_choices Command" "v" >}}

{{< /expand >}}

### The update Command
The `update` command updates the attributes of an existing user.

{{< expand "Using the update Command" "v" >}}

{{< /expand >}}

{{< taglist tag="scalecliaccount" limit="10" title="Related CLI Account Articles" >}}
