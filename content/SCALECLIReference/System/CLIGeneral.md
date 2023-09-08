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

The `checkin` command allows you to accept configured settings.
After UI settings are saved with `rollback_timeout`, (see [`update`](#update-command) properties), this method needs to be called within that timeout limit to prevent reverting the changes.

{{< expand "Using the Checkin Command" "v" >}}

#### Description
`checkin` does not require entering properties or arguments.
Enter the command string and then press <kbd>Enter</kbd>.

The command returns an empty line.

#### Usage

From the CLI prompt, enter:

`system general checkin`

{{< expand "Command Example" "v" >}}
`system general checkin`

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