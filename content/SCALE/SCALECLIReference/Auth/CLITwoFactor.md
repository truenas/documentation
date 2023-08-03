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

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

{{< taglist tag="scalecliauth" limit="10" title="Related CLI Auth Articles" >}}

## Two_Factor Commands

The **two_factor** namespace has five commands is based on functions found in the SCALE API and web UI. 
It provides access to two-factor authentication (2FA) configuration methods through the five **two_factor** commands. 

### Config Command

The `config` command displays current 2FA settings

{{< expand "Viewing the 2FA Configuration" "v" >}}
The `config` command has no options and displays a table of current 2FA configuration settings.

From the CLI prompt, enter:

`auth two_factor config`

From the **two_factor** prompt, enter:

`config`

{{< expand "Command Example" "v" >}}
```
auth> two_factor config
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


### Provisioning_URI Command

The `provisioning_uri` command displays the provisioning URI for the OTP, which can then be encoded in a QR Code and used to
provision an OTP app like Google Authenticator.

{{< hint type=note >}}
The `provisioning_uri` command only displays part of the provisioning URI. For the full URI, access the TrueNAS web UI and go to **Credentials > 2FA**. 
{{< /hint >}}

{{< expand "Viewing the Provisioning URI">}}
The `provisioning_uri` command has no options. It displays the OTP provisioning URI for authenticator app QR encoding.

From the CLI prompt, enter:

`auth two_factor provisioning_uri`

From the **two_factor** prompt, enter:

`provisioning_uri`

{{< expand "Command Example" "v" >}}
```
auth> two_factor provisioning_uri
otpauth://totp/mysystems:truenas%50TrueNAS?secret=Noni&is...
```
{{< /expand >}}
{{< /expand >}}


### Renew_Secret Command

The `renew_secret` command ggenerates a new secret for 2FA and returns **true** on success.

{{< expand "Renewing the 2FA Secret">}}
The `renew_secret` command has no options. It returns **true** when successful, and displays an error if run when 2FA is not enabled.

From the CLI prompt, enter:

`auth two_factor renew_secret`

From the **two_factor** prompt, enter:

`renew_secret`

{{< expand "Command Example" "v" >}}
```
auth> two_factor renew_secret
true
```
{{< /expand >}}
{{< /expand >}}


### Update Command

The `update` command changes 2FA settings. 

{{< expand "Updating 2FA Settings" "v" >}}
The `update` command requires one of five options in the command string: `enabled`, `otp_digits`, `window`, `interval`, and `services`.

{{< expand "Enabling and Disabling 2FA">}}
The `update enabled` command requires you to include either the `true` or `false` option.

From the CLI prompt, enter:

<code>auth two_factor update enable=<i>true/false</i></code>

From the **two_factor** prompt, enter:

<code>update enable=<i>true/false</i></code>

Where:
* `true/false` enables (true) or disables (false) 2FA.

{{< expand "Command Example" "v" >}}
```
auth> two_factor uodate enabled=true

```
{{< /expand >}}
{{< /expand >}}


{{< expand "Updating OTP Digits" "v" >}}
The `otp_digits` command requires one of five options in the command string: `enabled`, `otp_digits`, `window`, `interval`, and `services`.

{{< expand "Enabling and Disabling 2FA">}}
The `update enabled` command requires you to include either the `true` or `false` option.

From the CLI prompt, enter:

<code>auth two_factor update enable=<i>true/false</i></code>

From the **two_factor** prompt, enter:

<code>update enable=<i>true/false</i></code>

Where:
* `true/false` enables (true) or disables (false) 2FA.

{{< expand "Command Example" "v" >}}
```
auth> two_factor uodate enabled=true

```
{{< /expand >}}
{{< /expand >}}






`enabled` set 2FA on (true) or off (false)

`otp_digits` represents number of allowed digits in the OTP.

`window` extends the validity to `window` many counter ticks before and after the current one. Use Window to extend the validity of passwords beyond the Interval setting. For example, a window setting of 1 means that one password before and after the current one is valid. leaving three valid passwords. Extending the window can be useful in high-latency situations. IMPORTANT: Two-factor authentication is time-based and requires that the system time is set correctly.

`interval` is time duration in seconds specifying OTP expiration time from it's creation time. The lifespan (in seconds) of each One-Time Password. Default is 30 seconds. The minimum lifetime is 5 seconds.

### Verify Command

Returns boolean true if provided `token` is successfully authenticated.