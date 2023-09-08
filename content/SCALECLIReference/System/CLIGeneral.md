---
title: "General"
geekdocCollapseSection: true
description: "Introduces the TrueNAS CLI general namespace that configures GUI and localization related settings found in the API and web UI." 
weight: 55
aliases:
draft: false
tags:
- scaleclisystem
- scalesettings
---

{{< toc >}}

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
system general> config
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

The `language_choices` command returns a list of available language options for the TrueNAS SCALE UI.

{{< expand "Using the Language_choices Command" "v" >}}

#### Description

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

#### Adding the SCALE UI to an Iframe

To add the SCALE UI to an inline frame (iframe), use the `system general update ui_x-frame_options` command.

{{< expand "Click for more information" "v" >}}
An iframe allows you to deploy the SCALE UI inside an existing HTML document.
Iframes are commonly used to host third-party content safely inside the frame where it cannot access the content of the host and the host cannot access the content of the iframe.

From the CLI prompt, enter:

`system general update ui_x-frame_options=ALLOW_All`

From the **general** prompt, enter:

`update ui_x-frame_options=ALLOW_All`

{{< expand "Command Example" "v" >}}
```
system general update ui_x-frame_options=ALLOW_All

```
{{< /expand>}}
{{< /expand >}}

{{< taglist tag="scaleclisystem" limit="10" title="Related CLI System Articles" >}}
{{< taglist tag="scalesettings" limit="10" title="Related System Settings Articles" >}}
