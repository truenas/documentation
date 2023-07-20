---
title: "Auth"
geekdocCollapseSection: true
description: "Introduces the TrueNAS CLI auth namespace, used for currently logged-in user authentication and generating an access token for the web UI." 
weight: 15
draft: false
---

{{< toc >}}

{{< include file="/_includes/CLI/CLIGuideWIP.md" type="page" >}}

## Auth Commands

The **auth** namespace has five commands and four child namespaces and is based on functions found in the SCALE API and web UI. 
It provides access to authentication methods for the logged-in user and a method to generate an access token for web UI session through the five **auth** commands. 
The four child namespaces have their own commands.

You can enter commands from the main CLI prompt or from an **auth** namespace prompt.

### Check_User Command

The `check_user` and `check_password` commands verify the logged-in credentials. 

{{< expand "Verifying Username and Password" "v" >}}
#### Description
The `check_user` command has two required properties, `username` and `password` to include in the command string. 
`username` is the name of the user and `password` is the authentication for the user.
Command returns **true** if the values entered for username and password are correct.

#### Usage

From the CLI prompt, enter:

<code>auth check_user username=<i>name</i> password=<i>password</i></code>

Where:

* *name* is the name assigned to the user to log into the UI with. 
* *password* is the password assigned to the user.

{{< expand "Command Example" "v" >}}
```
auth check_user username=admin password=securePassw0rd
true
```
{{< /expand>}}
{{< /expand >}}

### Check_Password Command

The `check_password` and `check_user` commands verify the logged-in user credentials.

{{< expand "Verify Username and Password" "v" >}}
#### Description
The `check_password` command has two required properties, `username` and `password` to include in the command string. 
`username` is the name of the user and `password` is the authentication for the user.
Command returns **true** if the values entered for username and password are correct.

#### Usage

From the CLI prompt, enter:

<code>auth check_password username=<i>name</i> password=<i>password</i></code>

Where:

* *name* is the name assigned to the user to log into the UI with. 
* *password* is the password assigned to the user.

{{< expand "Command Example" "v" >}}
```
auth check_password username=admin password=securePassw0rd
true
```
{{< /expand>}}
{{< /expand >}}

### Generate_Token Command
The `generate_token` command generates an authentication token to use for access. This token determines when the current session expires.

{{< expand "Generating an Access Token" "v" >}}
#### Description
The `generate_token` command has three required properties, `ttl`, `attrs`, and `match_origin` to include in the command string. 
Enter the command string, then press <kbd>Enter</kbd>.
Command returns an authentication token.

#### Usage
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
* <code>match_origin=<i>value</i></code> represents a boolean (true/false) value.

{{< expand "Command Example" "v" >}}
```
auth generate_token ttl=600 atters={} match_origin=true
SER140235708avernneruou390854RMV2357098-AERV235Wbyo
```
{{< /expand>}}
{{< /expand >}}
### Me Command
The `me` command returns password, user and group information about the currently logged-in user.

{{< expand "Generate Access Token" "v" >}}
#### Description
The `me` command does not require entering  entering properties or arguments. 
Enter the command, then press <kbd>Enter</kbd>.

#### Usage
From the CLI prompt, enter:

`auth me`

From the auth namespace prompt, enter:
`me`

Output includes:
{{< truetable >}}
| Property | Description |
|----------|-------------|
| **pw_name** | Displays the logged-in user name. For example, *admin*. |
| **pw_uid** | Displays the user ID (UID) number for the logged-in user. For example, *3000*. |
| **pw_gid** | Displays the group ID (GID) number for the logged-in user. For example, *3000*. |
| **pw_gecos** | Displays the record in the /etc/passwd file, which is general information about the account or user. For example, for the *admin* user. |
| **pw_dir** | Displays the password or home directory for the logged-in user. For example, *mnt/tank/homedir*. |
| **pw_shell** | Displays the logged-in user shell setting. For example, **/usr/bin/*bash*** displays when the **Shell** setting on the **Add User** or **Edit User** screen is set to **bash**. |
{{< /truetable >}}
{{< expand "Command Example" "v" >}}
```
auth me
+----------+-------------------+
|  pw_name | admin             |
|   pw_uid | 3000              |
|   pw-gid | 3000              |
| pw_gecos | admin             |
|   pw-dir | /mnt/tank/homedir |
| pw-shell | /usr/bin/bash     |
+----------+-------------------+
```
{{< /expand>}}
{{< /expand >}}

### Two-Factor_Auth Command
The `two_factor_auth` command returns the state of two-factor authentication for the logged-in user.

{{< expand "Verify Two Factor Authentication Setting" "v" >}}
#### Description
The `two_factor_auth` command does not require entering properties or arguments. 
Enter the command, then press <kbd>Enter</kbd>.
The command returns true if two-factor authentication enabled, false if not enabled.

#### Usage
From the CLI prompt, enter:

`auth two_factor_auth`

{{< expand "Command Example" "v" >}}
```
auth two_factor_auth
false
```
{{< /expand>}}
{{< /expand >}}

## Auth Namespaces

The following articles provide information on **auth** child authentication namespaces:

{{< children depth="2" description="true" >}}
