---
title: "API Reference"
description: "Instructions to access built-in TrueNAS API documentation and links to static copies of the API documentation."
geekdocCollapseSection: true
weight: 50
related: false
---


{{< include file="/static/includes/RESTAPIDeprecationNotice.md" >}}

{{< include file="/static/includes/APIKeyMigrate.md" >}}

## API Documentation

You can access TrueNAS API documentation in the web interface by clicking <i class="material-icons" aria-hidden="true" title="laptop" style="vertical-align: top;">laptop</i> **My API Keys** on the top right toolbar <i class="material-icons" aria-hidden="true">account_circle</i> user settings dropdown menu to open the **User API Keys** screen.
Click **API Docs** to view API documentation.

![SCALEapidocs](/images/SCALE/Dashboard/APIKeysScreen.png "API Docs location")

Alternatively, append `/api/docs/` to your TrueNAS host name or IP address in a browser to access the API documentation.

{{< include file="/static/includes/APIDocs.md" >}}

## API Access

User-linked API access keys allow administrators to configure per-user access to the TrueNAS API.
Keys are revocable and can be configured to automatically expire on a preset date.
  
{{< include file="/static/includes/API_AD.md" >}}

User-linked API keys allow for better integration of TrueNAS into third-party solutions.
Use this as a reference for projects that require direct TrueNAS integration.

{{< include file="/static/includes/APIKeyWarn.md" >}}

See [Managing API Keys]({{< ref "/scale/scaletutorials/toptoolbar/managingapikeys" >}}) for more information.
