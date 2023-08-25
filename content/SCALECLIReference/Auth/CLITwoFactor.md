---
title: "Two_Factor"
description: "Provides information about the auth two_factor namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 70
aliases:
draft: false
tags:
- scalecliauth
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Two_Factor Commands

The **two_factor** namespace has two commands is based on functions found in the SCALE API and web UI.
It provides access to two-factor authentication (2FA) configuration methods through the two **two_factor** commands.

### Config Command

The `config` command displays current 2FA settings

{{< expand "Viewing the 2FA Configuration" "v" >}}

#### Description
The `config` command does not require entering properties or arguments.
Enter the command, then press <kbd>Enter</kbd>.
The command returns a table with the current two-factor settings.

#### Usage

From the CLI prompt, enter:

`auth two_factor config`

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
{{< /expand >}}

### Update Command

The `update` command updates 2FA settings and requires one of five arguments in the command string: `enabled`, `otp_digits`, `window`, `interval`, and `services`.

{{< expand "Enabling and Disabling 2FA">}}

#### Description
The `update enabled` command requires you to include either the `true` (enable) or `false` (disable) option.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns nothing when successful.

#### Usage

From the CLI prompt, enter:

<code>auth two_factor update enable=<i>true/false</i></code>

Where true* enables two-factor authentication, and *false* disables it.

{{< expand "Command Example" "v" >}}
```
auth two_factor update enabled=true

```
{{< /expand >}}
{{< /expand >}}

{{< expand "Setting the One-Time Password (OTP) Digit Amount">}}

#### Description
The `update otp_digits` command requires you to include a number from six to eight.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns nothing when successful, and returns an error when you enter an invalid integer.

#### Usage

From the CLI prompt, enter:

<code>auth two_factor update otp_digits=<i>number</i></code>

Where *number* is the number of digits from six to eight.

{{< expand "Command Example" "v" >}}
```
auth two_factor update otp_digits=6

```
{{< /expand >}}
{{< /expand >}}

{{< expand "Setting the Password Validity Window">}}

#### Description
The `update window` command extends the validity of one-time passwords and requires you to include an integer.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns nothing when successful, and returns an error when you enter an invalid integer.

#### Usage

From the CLI prompt, enter:

<code>auth two_factor update window=<i>number</i></code>

Where *number* is the number of passwords before and after the current one that are still valid. Must be between 0 and 999999999999999999.

{{< expand "Command Example" "v" >}}
```
auth two_factor update window=1

```
{{< /expand >}}
{{< /expand >}}

{{< expand "Setting the One-Time Password Lifespan">}}

#### Description
The `update interval` command sets the lifespans of one-time passwords and requires you to include an integer.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns nothing when successful, and returns an error when you enter an invalid integer.

#### Usage

From the CLI prompt, enter:

<code>auth two_factor update interval=<i>number</i></code>

Where *number* is the number (in seconds) an OTP will last before expiring. Must be between 5 and 999999999999999999.

{{< expand "Command Example" "v" >}}s
```
auth two_factor update interval=30

```
{{< /expand >}}
{{< /expand >}}

{{< expand "Enabling 2FA for SSH Logins">}}

#### Description
The `update services` command enables or disables 2FA for SSH logins, and requires you to include an argument.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns nothing when successful.

#### Usage

From the CLI prompt, enter:

<code>auth two_factor update services={"ssh":<i>true/false</i></code>

Where *true/false* enables (true) or disables (false) SSH 2FA authentication.
{{< expand "Command Example" "v" >}}
```
auth two_factor update services={"ssh":true}

```
{{< /expand >}}
{{< /expand >}}
