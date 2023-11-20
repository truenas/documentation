---
title: "two_factor"
description: "Provides information about the auth two_factor commands, command usage, optional and required command properties, syntax, and command examples."
weight: 70
aliases:
draft: false
tags:
- 2fa
---

{{< include file="/_includes/CLI/CLIGuideWIP.md" >}}

**auth two_factor** commands are based on authentiation functions found in the SCALE API and web UI. 
Use to set up user two-factor authentication and view status for the user.

Enter `auth ls` to view the list of available commands and namespaces.
{{< truetable >}}
| Commands | Description |
|----------|-------------|
| [`auth two_factor config`](#auth-two_factor-config) | Displays current 2FA settings for the currently logged-in user. |
| [`auth two_factor update`](#auth-two_factor-update) | Updates two-factor authentication settings for the ID entered. |
{{< /truetable >}}

## Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/InteractiveArgsEditor.md" >}}
## auth two_factor config
The `auth two_factor config` displays current 2FA settings for the currently logged-in user.

`auth two_factor config` does not require entering properties or arguments.

Enter the command, then press <kbd>Enter</kbd>.
The command returns a table with two-factor authentication properties for the currently logged-in user.
### two_factor config Properties
{{< truetable >}}
| Property |  Description |
|----------|--------------|
| `id` | Displays the system-assigned ID number for the currently logged-in user. |
| `otp_digits` | Displays the length (number of digits) allowed for a one-time password. |
| `secret` | Displays `<null>`. |
| `window` | Displays the number of passwords before and after the current remain valid for the currently logged-in user. |
| `interval` | Displays the lifespan of a one-time password for the currently logged-in user. |
| `services` | Displays `<dict>`. At present, viewing the contents of a dictionary is not available in the SCALE CLI. |
| `enabled` | Displays `true` if two factor authentication is enabled for the currently logged-in user, or `false` if not configured or disabled. | 
{{< /truetable >}}
{{< expand "Command Example" "v" >}}
```
auth two_factor config
+------------+--------+
|         id | 1      |
| otp_digits | 6      |
|     secret | <null> |
|     window | 0      |
|   interval | 30     |
|   services | <dict> |
|    enabled | false  |
+------------+--------+
```
{{< /expand >}}

## auth two_factor update
The `auth two_factor update` command changes 2FA settings.

`auth two_factor update` has five property arguments. Enter at least one property arguments. 
See **two_factor update Properties** for details.

Enter the command string then press <kbd>Enter</kbd>.
The command returns nothing when successful.
### two_factor update Properties
{{< truetable >}}
| Property |  Description | Syntax Example |
|----------|--------------|----------------|
| `enabled` | Enter `true` to enable two_factor authentication for the currently logged-in user, or `false` to disable 2fa. | `enabled=true` or `enabled=false` |
| `otp_digits` | Enter a number from six to eight to set the length of a one-time password. | <code>otp_digits=<i>6</i></code> |
| `window` | Enter a number of passwords before and after the current remain valid. This extends the validity of one-time passwords. | <code>window=<i>2</i></code>  |
| `interval` | Enter a number to set the lifespan of a one-time password. | <code>interval=<i>30</i></code> |
| `services` | Enter the `true` to enable or `false to disable 2FA for SSH logins. | <code>services={"ssh":<i>true/false</i></code> |
{{< /truetable >}}
{{< expand "Command Example" "v" >}}
```
auth two_factor update enabled=true update interval=30

```
{{< /expand >}}

{{< taglist tag="scale2fa" limit="10" title="Related Two-Factor Authentication Articles" >}}