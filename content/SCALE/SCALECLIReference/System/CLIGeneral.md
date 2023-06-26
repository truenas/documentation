---
title: "General"
geekdocCollapseSection: true
description: "Provides information about the system general namespace in the TrueNAS CLI. Includes command syntax and common commands." 
weight: 55
aliases:
draft: false
tags:
- scaleclisystem
- scalesettings
---
{{< toc >}}


{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}


## System General Commands

The **system > general** namespace has 14 commands and is based on functions found in the SCALE API and web UI. 
It provides access to general system methods to configure time zone, language, HTTP protocol, UI address, and system certificate options. 
You can also restart the system through this namespace. 

You can enter commands from the main CLI prompt or from the **system** namespace prompt.

### Adding the SCALE UI to an Iframe

To add the SCALE UI to an inline frame (iframe) using the `system general update ui_x-frame_options` command.

An iframe allows you to  deploy the SCALE UI inside an existing HTML document. 
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


{{< taglist tag="scaleclisystem" limit="10" title="Related CLI System Articles" >}}
{{< taglist tag="scalesettings" limit="10" title="Related System Settings Articles" >}}