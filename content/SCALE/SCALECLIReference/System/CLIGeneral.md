---
title: "General"
geekdocCollapseSection: true
description: "Introduces the TrueNAS CLI general namespace that configures GUI and localization related settings found in the API and web UI." 
weight: 55
aliases:
draft: false
tags:
- settings
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## General Namespace
The **general** namespace has 14 commands, and is based on general settings functions found in the SCALE API and web UI.
It provides access to GUI and localization configuration settings through the **general** namespace commands.

## General Commands

The following **general** namespace commands allow you to configure time zone, language, HTTP protocol, UI address, and system certificate options.
You can also restart the system through this namespace.

You can enter commands from the main CLI prompt or from the **system** namespace prompt.

### Checkin Command

The `checkin` command accepts pending settings.

{{< expand "Using the Checkin Command" "v" >}}

#### Description
`checkin` does not require entering properties or arguments.
After UI settings are saved with `rollback_timeout`, see [`update`](#update-command) properties, this method needs to be called within that timeout limit to prevent reverting the pending changes.

Enter the command string and then press <kbd>Enter</kbd>.

The command returns an empty line.

#### Usage

From the CLI prompt, enter:

`system general checkin`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general checkin

```
{{< /expand >}}
{{< /expand >}}

### Checkin_waiting Command

The `checkin_waiting` command determines whether the system is waiting for a `checkin` to confirm pending changes.

{{< expand "Using the Checkin_waiting Command" "v" >}}

#### Description

`checkin_waiting` does not require entering properties or arguments.

Enter the command string and then press <kbd>Enter</kbd>.

If UI settings are saved with `rollback_timeout`, see [`update`](#update-command) properties, `checkin_waiting` returns the remaining time (in seconds) before the automatic rollback.
Returns null if there are no changes pending.

#### Usage

From the CLI prompt, enter:

`system general checkin_waiting`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general checkin_waiting
44
```
{{< /expand >}}
{{< /expand >}}

### Config Command

The `config` command returns current UI configuration.

{{< expand "Using the Config Command" "v" >}}

#### Description

`config` does not require entering properties or arguments.

Enter the command string and then press <kbd>Enter</kbd>.

Returns a table containing current UI and localization settings.
If UI settings are saved with `rollback_timeout` enabled, see [`update`](#update-command) properties, the table includes any pending changes.
An automatic rollback reverts pending changes if `checkin` is not called before the timeout limit.

#### Usage

From the CLI prompt, enter:

`system general config`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general config
+-------------------------+---------------------------+
|                      id | 1                         |
|                language | en                        |
|                  kbdmap | us                        |
|                birthday | 1970-01-01T00:00:00+00:00 |
|                timezone | America/Los_Angeles       |
|             wizardshown | false                     |
|        usage_collection | true                      |
|                 ds_auth | false                     |
|              ui_address | 0.0.0.0                   |
|            ui_v6address | ::                        |
|            ui_allowlist | <empty list>              |
|                 ui_port | 80                        |
|            ui_httpsport | 443                       |
|        ui_httpsredirect | false                     |
|       ui_httpsprotocols | TLSv1.2                   |
|                         | TLSv1.3                   |
|      ui_x_frame_options | SAMEORIGIN                |
|           ui_consolemsg | false                     |
|          ui_certificate | <dict>                    |
| usage_collection_is_set | false                     |
+-------------------------+---------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Country_choices Command

The `country_choices` command returns a list of available country options for use in creating certificates. See [`system certificate`]({{< relref "CLICertificate.md" >}}) for more information.

{{< expand "Using the Country_choices Command" "v" >}}

#### Description

`country_choices` does not require entering properties or arguments.

Enter the command string and then press <kbd>Enter</kbd>.

Returns a table containing the available country codes for use in certificates.

#### Usage

From the CLI prompt, enter:

`system general country_choices`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general country_choices
+----+------------------------------------------------------------------+
| AF | Afghanistan                                                      |
| AL | Albania                                                          |
| DZ | Algeria                                                          |
| AD | Andorra                                                          |
| AO | Angola                                                           |
| AG | Antigua and Barbuda                                              |
| AR | Argentina                                                        |
| AM | Armenia                                                          |
...
| SJ | Svalbard                                                         |
| AC | Ascension                                                        |
| TA | Tristan da Cunha                                                 |
| AQ | Australian Antarctic Territory + Ross Dependency + Peter I Is... |
+----+------------------------------------------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Kbdmap_choices Command

The `kbdmap_choices` command returns a list of available keyboard map options.

{{< expand "Using the Kbdmap_choices Command" "v" >}}

#### Description

`kbdmap_choices` does not require entering properties or arguments.

Enter the command string and then press <kbd>Enter</kbd>.

Returns a table containing the available keyboard maps.

#### Usage

From the CLI prompt, enter:

`system general kbdmap_choices`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general kbdmap_choices
+-------------------------------+------------------------------------------------------+
|                        custom | A user-defined custom Layout                         |
|                       gh.akan | Akan                                                 |
|                            al | Albanian                                             |
|                      al.plisi | Albanian (Plisi)                                     |
|                al.veqilharxhi | Albanian (Veqilharxhi)                               |
|                            et | Amharic                                              |
|                           ara | Arabic                                               |
...
|                         vn.us | Vietnamese (US)                                      |
|                            sn | Wolof                                                |
|                        ru.sah | Yakut                                                |
|                     ng.yoruba | Yoruba                                               |
+-------------------------------+------------------------------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Language_choices Command

The `language_choices` command returns a list of available language translation options for the TrueNAS SCALE web UI.

{{< expand "Using the Language_choices Command" "v" >}}

#### Description

English is the default language in TrueNAS SCALE.
However, users can contribute text string translations for the TrueNAS web interface to help make TrueNAS available in other languages.
For all language options, the web UI defaults to English text if a translated string is not available.
See [Web Interface Translations](https://www.truenas.com/docs/contributing/uitranslations/) for more information.

`language_choices` does not require entering properties or arguments.

Enter the command string and then press <kbd>Enter</kbd>.

Returns a table containing the available languages.

#### Usage

From the CLI prompt, enter:

`system general language_choices`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general language_choices
+---------+----------------------+
|      af | Afrikaans            |
|      ar | Arabic               |
|     ast | Asturian             |
...
|      ur | Urdu                 |
|      vi | Vietnamese           |
| zh-hans | Simplified Chinese   |
| zh-hant | Traditional Chinese  |
+---------+----------------------+
```
{{< /expand >}}
{{< /expand >}}

### Local_url Command

The `local_url` command returns the current local URL configuration for the TrueNAS SCALE web UI.

{{< expand "Using the Local_url Command" "v" >}}

#### Description

`local_url` does not require entering properties or arguments.

Enter the command string and then press <kbd>Enter</kbd>.

Returns the configured URL in the format of *protocol://host:port*.

#### Usage

From the CLI prompt, enter:

`system general local_url`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general local_url
https://8.8.8.8:443
```
{{< /expand >}}
{{< /expand >}}

### Timezone_choices Command

The `timezone_choices` command returns a list of available timezone options for system localization.

{{< expand "Using the Timezone_choices Command" "v" >}}

#### Description

`timezone_choices` does not require entering properties or arguments.

Enter the command string and then press <kbd>Enter</kbd>.

Returns a table containing all available timezones.

#### Usage

From the CLI prompt, enter:

`system general timezone_choices`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general timezone_choices
+----------------------------------+----------------------------------+
|                   Africa/Abidjan | Africa/Abidjan                   |
|                     Africa/Accra | Africa/Accra                     |
|               Africa/Addis_Ababa | Africa/Addis_Ababa               |
|                   Africa/Algiers | Africa/Algiers                   |
|                    Africa/Asmara | Africa/Asmara                    |
...
|                              UTC | UTC                              |
|                        Universal | Universal                        |
|                             W-SU | W-SU                             |
|                              WET | WET                              |
|                             Zulu | Zulu                             |
+----------------------------------+----------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### UI_address_choices Command

The `ui_address_choices` command returns IPv4 address options for the TrueNAS SCALE UI.

{{< expand "Using the UI_address_choices Command" "v" >}}

#### Description

`ui_address_choices` does not require entering properties or arguments.

Enter the command string and then press <kbd>Enter</kbd>.

Returns a table containing the available addresses.

#### Usage

From the CLI prompt, enter:

`system general ui_address_choices`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general ui_address_choices
+---------+---------+
| 0.0.0.0 | 0.0.0.0 |
+---------+---------+
```
{{< /expand >}}
{{< /expand >}}

### Ui_certificate_choices Command

The `ui_certificate_choices` command returns a list of certificates which can be used for configuring `ui_certificate` (see [`update`](#update-command) properties).

{{< expand "Using the Ui_certificate_choices Command" "v" >}}

#### Description

`ui_certificate_choices` does not require entering properties or arguments.

Enter the command string and then press <kbd>Enter</kbd>.

The command returns a table containing available certificate options.

#### Usage

From the CLI prompt, enter:

`system general ui_certificate_choices`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general ui_certificate_choices
+---+-----------------+
| 1 | truenas_default |
+---+-----------------+
```
{{< /expand >}}
{{< /expand >}}

### Ui_httpsprotocols_choices Command

The `ui_httpsprotocols_choices` command returns a table of available HTTPS protocols for the TrueNAS SCALE web UI.

{{< expand "Using the Ui_httpsprotocols_choices Command" "v" >}}

#### Description

`ui_httpsprotocols_choices` does not require entering properties or arguments.

Enter the command string and press <kbd>Enter</kbd>.

The command returns a table containing available protocols.

#### Usage

From the CLI prompt, enter:

`system general ui_httpsprotocols_choices`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general ui_httpsprotocols_choices
+---------+---------+
|   TLSv1 | TLSv1   |
| TLSv1.1 | TLSv1.1 |
| TLSv1.2 | TLSv1.2 |
| TLSv1.3 | TLSv1.3 |
+---------+---------+
```
{{< /expand >}}
{{< /expand >}}

### Ui_restart Command

The `ui_restart` command restarts the HTTP Server for the TrueNAS SCALE web UI.
This does not shut down and reboot the full system.

{{< expand "Using the Ui_restart Command" "v" >}}

#### Description

New UI settings, configured via [`update`](#update-command), are not applied automatically.
Use `ui_restart` to apply settings, include the optional `delay` property to apply settings after an amount of time (in seconds), for example the amount of time you need to receive the response for your settings update request, or use the `update` property `ui_restart_delay`.

`ui_restart` has one available property, `delay`.

Enter the command string and press <kbd>Enter</kbd>.

The command returns a blank line.
After any specified `delay` is exceeded, the web server restarts.
The screen briefly displays a "Connecting to TrueNAS..." dialogue, then the UI returns.

#### Usage

From the CLI prompt, enter:

<code>system general ui_restart delay=<i>30</i></code>

Where *30* is the amount of time (in seconds) to wait before the web server restarts.
Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general ui_restart delay=30

```
{{< /expand >}}
{{< /expand >}}

### Ui_v6address_choices Command

The `ui_v6address_choices` command returns IPv6 address choices for the TrueNAS SCALE web UI.

{{< expand "Using the Ui_v6address_choices Command" "v" >}}

#### Description

`ui_v6address_choices` does not require properties or arguments.

Enter the command string and then press <kbd>Enter</kbd>.

The command returns a table containing available addresses.

#### Usage

From the CLI prompt, enter:

`system general ui_v6address_choices`

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general ui_v6address_choices
+----+----+
| :: | :: |
+----+----+
```
{{< /expand >}}
{{< /expand >}}

### Update Command

The `update` command allows users to configure UI and localization settings for the TrueNAS SCALE web UI.

{{< expand "Using the Update Command" "v" >}}

#### Description

`update` has 18 available properties, see the table below.

Connect properties and value pairs using an `=` sign, for example <code><em>property</em>=<em>value</em></code>.
Enclose values using special characters in double quotes, for example <code>ui_address="<em>0.0.0.0</em>"</code>.
Separate multiple property and value pairs using a space.

List properties can accept a single value, for example <code>ui_httpsprotocols="<em>TLSv1.3</em>"</code>, multiple values enclosed in square brackets `[]` and separated by a comma and space, for example  <code>ui_httpsprotocols=["<em>TLSv1.2</em>", "<em>TLSv1.3</em>"]</code>, or an empty list `[]` to clear current configuration, for example  <code>ui_httpsprotocols=[]</code>.

Enter the command string with all properties you want to update and press <kbd>Enter</kbd>.

`update` returns an empty line. Use [`config`](#config-command) to confirm pending changes.

UI settings are not applied automatically.
Use [`ui_restart`](#ui_restart-command) to apply new settings or set the `ui_restart_delay` property to automatically apply settings after a set time (in seconds).

{{< hint type=important >}}
Incorrect UI configuration can result in lost web UI or even API connectivity!
To avoid problems, specify a `rollback_timeout` in seconds.
If a [`checkin`](#checkin-command) is not called before the `rollback_timeout` expires, the UI server automatically restarts and pending updates are reverted to previous settings.

Note: The automatic rollback only reverts UI settings. It does not affect localization properties, such as `language` or `timezone`.
{{< /hint >}}

{{< expand "Update Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|---------------|
| `ui_httpsport` | No | Sets the port number for HTTPS connection to the web UI. | <code>ui_httpsport=<em>443</em></code> |
| `ui_httpsredirect` | No | If true, all HTTP requests are redirected to HTTPS for enhanced security. A GUI SSL Certificate is required for HTTPS. Activating this also sets the [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) maximum age to 31536000 seconds (one year). This means that after a browser connects to the web interface for the first time, the browser continues to use HTTPS and renews this setting every year. | <code>ui_httpsredirect=<em>true</em></code> |
| `ui_httpsprotocols` | No | List. Sets the [Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) versions TrueNAS SCALE can use for connection security. Use [`ui_httpsprotocols_choices`](#ui_httpsprotocols_choices-command) to view available options. | <code>ui_httpsprotocols=["<em>TLSv1</em>", "<em>TLSv1.1</em>", "<em>TLSv1.2</em>", "<em>TLSv1.3</em>"]</code> |
| `ui_port` | No | List. Sets the port number for HTTP connection to the web UI. | <code>ui_port=<em>80</em></code> |
| `ui_address` | No | List. Sets the IPv4 address for access to the web UI. Use [`ui_address_choices`](#ui_address_choices-command) to view available options. | <code>ui_address="<em>0.0.0.0</em>"</code> |
| `ui_v6address` | No | List. Sets the IPv6 address for access to the web UI. Use [`ui_v6address_choices`](#ui_address_choices-command) to view available options. | <code>ui_v6address="<em>::</em>"</code> |
| `ui_allowlist` | No | List. Sets IP addresses and Networks that are allowed to access the API and web UI. If this list is empty, then all IP addresses are allowed. | <code>ui_allowlist=["<em>8.8.8.8</em>", "<em>1.2.3.4</em>"]</code> |
| `ui_consolemsg` | No | Set to true to display console messages in real-time at the bottom of the web UI browser. | <code>ui_consolemsg=<em>true</em></code> |
| `ui_x_frame_options` | No | Set to configure the UI &lt;iframe&gt; (inline frame) permissions. An &lt;iframe&gt; allows you to deploy the SCALE UI inside an HTML document. Options are `SAMEORIGIN`, `DENY`, and `ALLOW_ALL`. | <code>ui_x_frame_options=<em>ALLOW_ALL</em></code> |
| `kbdmap` | No | Sets the keyboard map the UI uses. Use [`kbdmap_choices`](#kbdmap_choices-command) to view available options. | <code>kbdmap=<em>us</em></code> |
| `language` | No | Sets the UI language option. Use [`language_choices`](#language_choices-command) to view available options. | <code>language=<em>en</em></code> |
| `timezone` | No | Sets the timezone for localization purposes. Use [`timezone_choices`](#timezone_choices-command) to view available options. | <code>timezone="<em>US/Eastern</em>"</code> |
| `usage_collection` | No | Set to true to enable sending anonymous usage statistics to iXsystems. If set to `null`, `config` reports `usage_collection` as `true` and `usage_collection_is_set` as `false`. <!-- Unclear if this state results in data being collected. --> | <code>usage_collection=<em>true</em></code> |
| `birthday` | No | Sets the epoch used for system time reference. Defaults to the Unix epoch, `1970-01-01T00:00:00+00:00`. We suggest you do not change the default value. |<!-- Could not discover working syntax, commenting it out since we're suggesting not to change it anyway. > <code>birthday=<em></em></code> --> |
| `ds_auth` | No | Set to true to allow configured Directory Service users to log in to the web UI or use the API. | <code>ds_auth=<em>true</em></code> |
| `ui_certificate` | No | Sets the SSL certificate the system uses to enable encrypted web interface connections. Identify the certificate using the integer associated with it in the results of [`ui_certificate_choices`](#ui_certificate_choices-command). | <code>ui_certificate=<em>1</em></code> |
| `rollback_timeout` | No | Sets a timeout limit (in seconds) for you to review pending UI settings. If a [`checkin`](#checkin-command) is not called before the `rollback_timeout` expires, the UI server automatically restarts and pending updates are reverted to previous settings.<br><br>Note: The automatic rollback only reverts UI settings. It does not affect localization properties, such as `language` or `timezone`. | <code>rollback_timeout=<em>60</em></code> |
| `ui_restart_delay` | No | Sets a delay time (in seconds), such as the time needed to receive the response to your settings update request, after which the UI automatically restarts to apply pending changes. Set to `0` to restart immediately after the `update` command completes. | <code>ui_restart_delay=<em>20</em></code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage

From the CLI prompt, enter:

<code>system general update <em>property</em>=<em>value</em></code>

Where *property* is the property to update and *value* is its configured value.
Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
```
system general update language=en timezone="US/Eastern" rollback_timeout=60 ui_restart_delay=5

```
{{< /expand >}}
{{< /expand >}}
