---
title: "Managing API Keys"
description: "This tutorial shows how to add, create, or edit an API key in TrueNAS and access API Documentation."
weight: 30
aliases:
 - /scale/scaleclireference/auth/cliapikey/
tags:
- toolbar
- apikeys
---

TrueNAS 25.04 and later uses a versioned JSON-RPC 2.0 over WebSocket API with support for user-linked API access keys ([API Reference]({{< relref "/scale/api/_index.md" >}})).

User-linked API keys allow administrators to configure per-user access to the TrueNAS API.
Keys are revocable and can be configured to automatically expire on a preset date.

Click <i class="material-icons" aria-hidden="true" title="laptop" style="vertical-align: top;">laptop</i> **My API Keys** on the top right toolbar <i class="material-icons" aria-hidden="true">account_circle</i> user settings dropdown menu to open the **User API Keys** screen.

This screen displays a list of API keys added to your system and allows you to add, search, edit, or delete keys.
Click **API Docs** to view [API Documentation](#api-documentation).

{{< trueimage src="/images/SCALE/Dashboard/APIKeysScreen.png" alt="API Keys Screen" id="API Keys Screen" >}}

{{<include file="/static/includes/addcolumnorganizer.md">}}

## Adding an API Key

Click **Add** to open the **Add API Key** screen.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysAdd.png" alt="Add API Key" id="Add API Key" >}}

Type a descriptive name for the key.
Use the **Username** dropdown to select an administrative user to associate with this key.

{{< include file="/static/includes/API_AD.md" >}}

Accept the default **Non-expiring** to create a token with no expiration date.
A non-expiring key remains active until it is manually revoked or updated.

To create a key with a scheduled expiration, click to clear the **Non-expiring** checkbox.
Click on the **Expires On** field and use the calendar dropdown to select the expiration date.

{{< trueimage src="/images/SCALE/Dashboard/APIKeyExpires.png" alt="Key Expiration Settings" id="Key Expiration Settings" >}}

Click **Save** to generate the key.

TrueNAS displays an **API Key** dialog containing the generated key string.
TrueNAS API key strings are 64 characters long and randomly generated.

{{< trueimage src="/images/SCALE/Dashboard/APIKeyCopy.png" alt="API Key Success Dialog" id="API Key Success Dialog" >}}

Click **Copy to Clipboard** and save the API key string in a secure location.

{{< include file="/static/includes/APIKeyWarn.md" >}}

Click **Close** to return to the **User API Keys** screen.

## Managing API Keys

### Editing an API Key

Click <i class="material-icons" aria-hidden="true" title="Edit">edit</i> edit for any API key on the list to open the **Edit API Key** window and modify that key.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysEdit.png" alt="Edit API Key" id="Edit API Key" >}}

Select **Reset** to remove the existing API key string and generate a new random key.
The dialog displays the new key and the **Copy to Clipboard** option.
Click to copy the new API key string then save it in a secure location.
Update any clients using the reset API Key with the new key string.

### Deleting an API Key

Click <i class="material-icons" aria-hidden="true" title="Delete">delete</i> delete for any API key on the list to remove that key.
TrueNAS opens a **Delete API Key** dialog

{{< trueimage src="/images/SCALE/Dashboard/APIKeysDelete.png" alt="Delete API Key" id="Delete API Key" >}}

Select **Confirm** then click **Delete**.

## API Documentation

Click **API Docs** to access the TrueNAS API documentation built into the system.

{{< include file="/static/includes/APIDocs.md" >}}
