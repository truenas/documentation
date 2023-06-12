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

The **account user** namespace has 14 commands and is based on functions found in the SCALE API and web UI. It provides access to user account creation, configuration, and attribute management. You can also set up a local administrator account using this namespace.

You can enter commands from the main CLI prompt or from the system namespace prompt.
### The create Command
The **create** command creates a new user account.

{{< expand "Using the create Command" "v" >}}

{{< /expand >}}

### The delete Command
The **delete** command deletes an existing user account.

{{< expand "Using the delete Command" "v" >}}

{{< /expand >}}

### The get_instance Command
The **get_instance** command retrieves information about a user such as their username, UID (User ID), group membership, permissions, and other relevant attributes.

{{< expand "Using the get_instance Command" "v" >}}

{{< /expand >}}

### The get_next_uid Command
The **get_next_uid** command displays the next available/free UID number.

{{< expand "Using the get_next_uid Command" "v" >}}

{{< /expand >}}

### The get_user_obj Command
The **get_user_obj** command returns dictionary containing information from struct passwd for the user specified by either the username or uid and bypasses user cache..

{{< expand "Using the get_user_obj Command" "v" >}}

{{< /expand >}}

### The has_local_administrator_set_up Command
The **has_local_administrator_set_up** command returns whether a local administrator account with a valid password exists.

{{< expand "Using the has_local_administrator_set_up Command" "v" >}}

{{< /expand >}}

### The has_root_password Command
The **has_root_password** command is a deprecated method. Use the [**has_local_administrator_set_up**](#the-has_local_administrator_set_up-command) command instead.

{{< expand "Deprecation Notice" "v" >}}
{{< include file="RootLoginWarnSCALE.md" type="page" >}}
{{< /expand >}}

### The pop_attribute Command
The **pop_attribute** command removes attributes, defined by a key, from a user dictionary.

{{< expand "Using the pop_attribute Command" "v" >}}

{{< /expand >}}

### The query Command
The **query** command queries users and can use various query-filters and query-options.

{{< expand "Using the query Command" "v" >}}

{{< /expand >}}

### The set_attribute Command
The **set_attribute** command sets a user's general purpose attributes dictionary key to a specified value.

{{< expand "Using the set_attribute Command" "v" >}}

{{< /expand >}}

### The set_root_password Command
The **set_root_password** command is a deprecated method. Use the [**setup_local_administrator**](#the-setup_local_administrator-command) command instead.

{{< expand "Deprecation Notice" "v" >}}
{{< include file="RootLoginWarnSCALE.md" type="page" >}}
{{< /expand >}}

### The setup_local_administrator Command
The **setup_local_administrator** command creates and configures an admin account. This method does not require authentication if a local administrator is not already set up.

{{< expand "Using the setup_local_administrator Command" "v" >}}

{{< /expand >}}

### The shell_choices Command
The **shell_choices** command returns the available shell choices to be used by a user account.

{{< expand "Using the shell_choices Command" "v" >}}

{{< /expand >}}

### The update Command
The **update** command updates the attributes of an existing user.

{{< expand "Using the update Command" "v" >}}

{{< /expand >}}

{{< taglist tag="scalecliaccount" limit="10" title="Related CLI Account Articles" >}}
