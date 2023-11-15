---
title: "auth"
geekdocCollapseSection: true
description: "Provides information on auth commands, command usage, optional and required command properties, syntax, and command examples." 
weight: 15
draft: false
tags:
- scale2fa
aliases:
 - /scale/scaleclireference/auth/clisessions/
---

{{< include file="/_includes/CLI/CLIGuideWIP.md" >}}

**auth** commands are based on authentiation functions found in the SCALE API and web UI. 
Use these commands to access to authentication methods for the currently logged-in user, to generate an access token for web UI session, to access websocket session information, terminate sessions, set up user two-factor authentication and view status for the user.

Enter commands from the main CLI prompt or from the `auth` namespace prompt.

Enter `auth ls` to view the list of available commands and namespaces.
{{< truetable >}}
| Commands | Description |
|----------|-------------|
| [`auth api_key`]({{< relref "CLIApiKey.md" >}}) | Provides access to API key creation and management methods. |
| [`auth api_key create`]({{< relref "CLIApiKey.md#auth-api_key-create" >}}) | Creates an API key. |
| [`auth api_key delete`]({{< relref "CLIApiKey.md#auth-api_key-delete" >}}) | Deletes the API key matching the ID entered. |
| [`auth api_key get_instance`]({{< relref "CLIApiKey.md#auth-api_key-get_instance" >}}) | Provides API key information for the ID entered. |
| [`auth api_key query`]({{< relref "CLIApiKey.md#auth-api_key-query" >}}) | Provides information on all API keys configured in the system. |
| [`auth api_key update`]({{< relref "CLIApiKey.md#auth-api_key-update" >}}) | Updates the API key matching the ID entered. |
| [`auth generate_token`](#auth-generate_token) | Generates a system-access authentication token. |
| [`auth me`](#auth-me) | Lists password, and user and group information for the currently logged-in user. |
| [`auth privilege`]({{< relref "CLIPrivilege.md" >}}) | This command is a Work in Progress. Do not use! |
| [`auth privilege create`]({{< relref "CLIPrivilege.md" >}}) | Creates a privilege. |
| [`auth privilege delete`]({{< relref "CLIPrivilege.md" >}}) | Deletes the privilege matching the ID entered. |
| [`auth privilege get_instance`]({{< relref "CLIPrivilege.md" >}}) | Provides privilege information for the ID entered. |
| [`auth privilege query`]({{< relref "CLIPrivilege.md" >}}) | Provides information on all privilege in the system. |
| [`auth privilege update`]({{< relref "CLIPrivilege.md" >}}) | Updates privilege settings for the ID entered. |
| [`auth sessions`](#auth-sessions) | Provides information on all system sessions. |
| [`auth set_attribute`](#auth-set_attribute) | This command is a Work in Progress. Do not use!|
| [`auth terminate_other_sessions`](#auth-terminate_other_sessions) | Terminates all websocket sessions except the currently-logged in SSH session. |
| [`auth terminate_session`](#auth-terminate-session) | Terminates the websocket session matching the ID entered. |
| [`auth two_factor`]({{< relref "CLITwoFactor.md" >}}) | Provides access to user two-factor authentication methods. |
| [`auth two_factor config`]({{< relref "CLITwoFactor.md#auth-two_factor-config" >}}) | Displays current 2FA settings for the currently logged-in user. |
| [`auth two_factor update`]({{< relref "CLITwoFactor.md#auth-two_factor-update" >}}) | Updates two-factor authentication settings for the ID entered. |
| [`auth two_factor_auth`](#auth-two-factor_auth) | Provides the current state of two-factor authentication for currently logged-in user. |
{{< /truetable >}}

## auth generate_token
The {{< cli >}}auth generate_token{{< /cli >}} command generates an authentication token to use for access. The token then determines when the current session expires. 

{{< cli >}}auth generate_token{{< /cli >}} has three optional properties: `ttl`, `attrs`, and `match_origin`. 
See **Optional generate_token Properties** below for details on these properties.

Enter property arguments using the `=` delimiter to separate property and value. 
Enter the command string, then press <kbd>Enter</kbd>.
Command returns a authentication token.

### Optional generate_token Properties
{{< truetable >}}
| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `ttl` | Set time to live (ttl) value in seconds to either: <br><li>`600` sets session to expire after 10 minutes before the token expires and the user must log back into the U. Equates to an idle authentication sessionI. <br><li>`null` sets the session to not expire. Not recommended as a system security best practice.</li> | `ttl=600` or `ttl=null` |
| `attrs` | `attrs` is a general purpose object/dictionary to hold information about the token. The default value `{}`, represents attribute options for the token. Entering attr properties inside the curly brackets is not required. | `attrs={}` | 
| `match_origin` | Enter `true` sets the token to only allow using it from the same IP address or with the same user UID. Default value is `false`. | `match_origin=true` or `mathc_origin=false` |
{{< /truetable >}}
{{< expand "Command Example" "v" >}}
```
--Input--
auth generate_token ttl=600 attrs={} match_origin=true

--Output--
SER140235708avernneruou390854RMV2357098-AERV235Wbyo
```
{{< /expand>}}

## auth me
The `auth me` command provides the currently logged-in user name, user and group IDs, home directory, and user shell.

`auth me` does not require entering property arguments.
Enter the command, then press <kbd>Enter</kbd>.
The command returns a table with the following information:
{{< truetable >}}
| Property | Description |
|----------|-------------|
| **pw_name** | Logged-in user name. For example, *admin*. |
| **pw_uid** | Logged-in user ID (UID) number. For example, *3000*. |
| **pw_gid** | Logged-in user group ID (GID) number. For example, *3000*. |
| **pw_gecos** | The record in the /etc/passwd file, which is general information about the account or user. For example, for the *admin* user. |
| **pw_dir** | Logged-in user password or home directory. For example, *mnt/tank/homedir*. |
| **pw_shell** | Logged-in user shell setting. For example, **/usr/bin/*bash*** displays when **Shell** on either the **Add User** or **Edit User** screen is set to **bash**. |
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

## auth sessions
The `auth sessions` command returns a table with session IDs, type, origin, credential type used, and the date and time the session started.

Use the `auth sessions` to obtain session IDs to use in the `auth terminate_session` command.

`auth sessions` does not require entering a property argument but you can include one of six properties as a flag to limit the command output to just that information.
See **sessions Property Flags** below for details on the optional properties.

Enter the command then press <kbd>Enter</kbd>.
The command returns a table populated with all system sessions, current and internal type, origin, credential type and creation date and time. 
### sessions Property Flags
{{< truetable >}}
| Property | Description | 
|----------|-------------|
| `id` | Displays a list of session IDs. |
| `current` | Displays a list of current sessions. `true` indicates an active session. | 
| `internal` | Displays a list of internally-created sessions. `true` indicates an internally-created via the web UI, or `false for an externally-created via SSH connection. |
| `origin` | Displays a list of login origin for all sessions. |
| `credentials` | Displays a list of credentials used to authenticate each session. |
| `created_at` | Displays a list of all session creation dates and times. |
{{< /truetable >}}
{{< expand "Command Example" "v" >}} 
```
auth sessions
+--------------------------------------+---------+----------+--------------------------------------------+----------------+------------------+---------------------------+
| id                                   | current | internal | origin                                     | credentials    | credentials_data | created_at                |
+--------------------------------------+---------+----------+--------------------------------------------+----------------+------------------+---------------------------+
| b6796f90-d78b-48d0-8ef7-97833678dd7b | false   | false    | 10.150.69.70:55200                         | API_KEY        | <dict>           | 2023-10-18T13:54:28+00:00 |
| 39ef39b6-fcf3-4209-8c8d-2c9a4a1b7d93 | false   | false    | 10.150.69.70:55204                         | API_KEY        | <dict>           | 2023-10-18T13:54:30+00:00 |
| 9e839a9c-9ce1-40f1-bbf4-cfe2f9488ede | false   | false    | 10.150.69.70:55208                         | API_KEY        | <dict>           | 2023-10-18T13:54:34+00:00 |
| 22545c31-c8fc-478d-b832-79053d459057 | false   | false    | 10.150.69.70:55212                         | API_KEY        | <dict>           | 2023-10-18T13:54:39+00:00 |
| 0427e58a-9429-4b9e-8223-53b992a99ed5 | false   | true     | UNIX socket (pid=145340 uid=0 gid=0)       | UNIX_SOCKET    | <dict>           | 2023-10-18T17:34:30+00:00 |
| a32656f8-567a-45c7-a44f-09a5ef9b097a | false   | true     | UNIX socket (pid=145349 uid=0 gid=0)       | UNIX_SOCKET    | <dict>           | 2023-10-18T17:34:32+00:00 |
| 29d69fda-1d95-4407-b095-f351b86776dd | false   | true     | UNIX socket (pid=145430 uid=0 gid=0)       | UNIX_SOCKET    | <dict>           | 2023-10-18T17:34:36+00:00 |
| e0048a57-664f-4f1a-83ae-686766b857ad | false   | true     | UNIX socket (pid=145872 uid=0 gid=0)       | UNIX_SOCKET    | <dict>           | 2023-10-18T17:35:14+00:00 |
| aff38a64-6f72-4920-a99f-c384d13667a3 | false   | false    | 10.230.46.29:49243                         | LOGIN_PASSWORD | <dict>           | 2023-10-18T17:35:32+00:00 |
| 04394aed-e41a-4b1f-91c0-0686b97ccb36 | true    | false    | UNIX socket (pid=146358 uid=3000 gid=3000) | UNIX_SOCKET    | <dict>           | 2023-10-18T17:35:56+00:00 |
+--------------------------------------+---------+----------+--------------------------------------------+----------------+------------------+---------------------------+
```
{{< /expand >}}

## auth set_attribute
The `auth set_attribute` command changes the attributes dictionary `key` to the `value` entered for the currently logged-in user.
Do Not Use this command.

## auth terminate_other_sessions 
The `auth terminate_other_sessions` ends all system websocket sessions except the currently logged-in user if it is an SSH session. 

`auth terminate_other_sessions` does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command terminates all websocket sessions, except if the current user is in an SSH session. When complete, the web UI sign-in splash screen displays.
{{< expand "Command Example" "v" >}}
```
auth terminate_other_sessions 
```
{{< /expand >}}

## auth terminate_session 
The `auth terminate_session` ends a system websocket session matching the ID entered. 

Use `auth sessions` to obtain session IDs, and again after terminating a session to verify the session ended.

`auth terminate_session` has one required property, `id`.
`id` is the system-assigned identification for a websocket session found in the output of the `auth sessions` command.

Enter the property argument using the `=` delimiter to separate the property and double-quoted value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns `<null>` if successful.
{{< expand "Command Example" "v" >}}
```
auth terminate_session id="aff38a64-6f72-4920-a99f-c384d13667a3"
<null>
```
{{< /expand >}}

### auth two-factor_auth
The `auth two-factor_auth` command validates if two-factor authentication is configured for the user entered.

`auth two-factor_auth` has two required properties, `username` and `password`.

Enter property arguments using the `=` delimiter to separate property and value. Double-quote values with spaces or special characters.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns `true` if two-factor authentication is enabled, `false` if not enabled.
{{< expand "Command Example" "v" >}}
```
auth two_factor_auth username=bella password=mypa$$w0rd
false
```
{{< /expand >}}


{{< taglist tag="scale2fa" limit="10" title="Related Two-Factor Authentication Articles" >}}