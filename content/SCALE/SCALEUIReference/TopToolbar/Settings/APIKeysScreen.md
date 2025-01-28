---
title: "User API Keys Screen"
description: "Describes how the User API Keys screen in TrueNAS and access API Documentation"
weight: 20
aliases: 
 - /scale/scaleclireference/auth/cliapikey/
tags:
- apikeys
- toolbar
---

<i class="material-icons" aria-hidden="true" title="laptop" style="vertical-align: top;">laptop</i> **My API Keys** on the top right toolbar <i class="material-icons" aria-hidden="true">account_circle</i> user settings dropdown menu to opens the **User API Keys** screen.

This screen displays a list of API keys added to your system and allows you to add, search, edit, or delete keys.
**API Docs** opens the [API Documentation](#api-documentation).

{{< trueimage src="/images/SCALE/Dashboard/APIKeysScreen.png" alt="API Keys Screen" id="API Keys Screen" >}}

**Add** opens the **Add API Key** screen.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysAdd.png" alt="Add API Key" id="Add API Key" >}}

{{< include file="/static/includes/APIKeyWarn.md" >}}

<i class="material-icons" aria-hidden="true" title="Edit">edit</i> edit for any API key on the list opens the **Edit API Key** window to modify that key.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysEdit.png" alt="Edit API Key" id="Edit API Key" >}}

**Reset** removes the existing API key and generates a new random key.

<i class="material-icons" aria-hidden="true" title="Delete">delete</i> delete for any API key on the list opens a **Delete API Key** dialog to remove that key.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysDelete.png" alt="Delete API Key" id="Delete API Key" >}}

## API Documentation

**API Docs** opens the TrueNAS API documentation that is built into the system.

{{< include file="/static/includes/APIDocs.md" >}}
