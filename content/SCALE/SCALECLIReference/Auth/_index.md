---
title: "Auth"
geekdocCollapseSection: true
description: "This article introduces authentication functions in the SCALE CLI." 
weight: 15
draft: false
---

{{< toc >}}


{{< hint type=tip >}}
The SCALE CLI guide is a work in progress!
New namespace and command documentation is continually added and maintained, so check back here often to see what is new!
{{< /hint >}}

The **Auth** namespace provides access to authentication methods, organized into four child namespaces and commands based on functions found in the SCALE API documentation and web UI.

## Auth Commands
The **auth** namespace includes five commands that verify usernames and passwords, generate authentication tokens, return information about the current logged-in user, and whether two-factor authentication for the user login is required.

You can enter commands from the main cli prompt or from the **auth** namespace prompt.
### Check_User Command

The **check_user** and **check_password** commands verify the logged-in credentials. 

{{< expand "Verify Username and Password" "v" >}}
The **check_user** command has two required options, **username** and **password** to include in the command string. 
Command returns **true** if the values entered for the username and password are correct.

From the CLI prompt, enter:

<code>auth check_user username=<i>name</i> password=<i>password</i></code>

From the **auth** prompt, enter:

<code>check_user username=<i>name</i> password=<i>password</i></code>

Where:
* `username` is the name assigned to the user logged in. For example, if the admin user is logged in and named admin, enter admin as the value.

* `password` is the password assigned to the user logged in.
{{< /expand >}}

### Check_Password Command

The **check_password** and **check_user** commands verify the logged-in user credentials.

{{< expand "Verify Username and Password" "v" >}}
The **check_password** command has two required options, **username** and **password** to include in the command string. 
Command returns **true** if the values entered for the username and password are correct.

From the CLI prompt, enter:

<code>auth check_password username=<i>name</i> password=<i>password</i></code>

From the **auth** prompt, enter:

<code>check_password username=<i>name</i> password=<i>password</i></code>

Where:
* `username` is the name assigned to the user logged in. For example, if the admin user is logged in and named admin, enter admin as the value.

* `password` is the password assigned to the user logged in.
{{< /expand >}}
### Generate_Token Command
The **generate_token** command generates an authentication token to use for access. The setting determines when the current session expires.
{{< expand "Generate Access Token" "v" >}}
The **generate_token** command has three required options, **ttl**, **attrs**, and **match_origin** to include in the command string. 

From the CLI prompt, enter:

<code>auth generate_token ttl=<i>value</i> attrs= {} match_origin=<i>value</i></code>

From the **auth** namespace prompt, enter:

<code>generate_token ttl=<i>value</i> attrs= {} match_origin=<i>value</i></code>

where:
* `ttl=` represents the time to live (ttl) value is in seconds. Values are either `600` or `null`.  
  `600`equates to an idle authentication session lasting 10 minutes before the token expires and the user must log back into the UI. 
  `null` means the session does not expire, and is not recommended as a best practice for system security.

* `attrs= {}` represents attribute options for the token. 
  `{}` is the default. (Optional) Enter options in the curly brackets to define specific values.

* `match_origin=`*value* represents a boolean (true/false) value.

{{< /expand >}}
### Me Command
The **me** command returns password, user and group information about the currently logged-in user.
{{< expand "Generate Access Token" "v" >}}
The **me** does not require entering additional options or arguments. Enter the command, then press <kbd>Enter</kbd>.

From the CLI promp, enter:

`auth me`

From the auth namespace prompt, enter:
`me`

Output includes:
| Property | Description |
|----------|-------------|
| **pw_name** | Displays the logged-in user name. For example, *admin*. |
| **pw_uid** | Displays the user ID (UID) number for the logged-in user. For example, *3000*. |
| **pw_gid** | Displays the group ID (GID) number for the logged-in user. For example, *3000*. |
| **pw_gecos** | Displays the GECOS, or record in the /etc/psswd file, which is the fifth of seven fields in a record that records general information about the account or user. For example, *admin*. |
| **pw_dir** | Displays the password or home directory for the logged-in user. For example, *mnt/tank/homedir*. |
| **pw_shell** | Displays the logged-in user shell setting. For example, **/usr/bin/*bash*** displays when the **Shell** setting on the **Add User** or **Edit User** screen is set to **bash**. |
{{< /expand >}}

### Two-Factor_Auth Command
The **two_factor_auth** command returns the state of two-factor authentication for the logged-in user.

{{< expand "Verify Two Factor Authentication Setting" "v" >}}
The **two_factor_auth** command does not require entering options. Enter the command, then press <kbd>Enter</kbd>.

From the CLI promp, enter:

`auth two_factor_auth`

From the auth namespace prompt, enter:
`two_factor_auth`
{{< /expand >}}

## Auth Namespace Articles
The following articles provide information on **auth** child authentication namespaces:

{{< children depth="2" description="true" >}}
