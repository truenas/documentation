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

TrueNAS 25.04 and later uses a versioned [JSON-RPC 2.0 over WebSocket API](https://api.truenas.com) with support for user-linked API access keys ([API Reference]({{< ref "/scale/api" >}})).

User-linked API keys allow administrators to configure per-user access to the TrueNAS API.
Keys are revocable and can be configured to expire on a preset date.

Click <i class="material-icons" aria-hidden="true" title="laptop" style="vertical-align: top;">laptop</i> **My API Keys** on the top right toolbar <i class="material-icons" aria-hidden="true">account_circle</i> user settings dropdown menu to open the **User API Keys** screen.

The **User API Keys** screen shows a table listing API keys added to the system, and allows adding, searching for, editing, or deleting keys.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysScreen.png" alt="API Keys Screen" id="API Keys Screen" >}}

Click **API Docs** to view [API Documentation](#api-documentation) embedded within the system.

{{<include file="/static/includes/addcolumnorganizer.md">}}

## Adding an API Key

{{< include file="/static/includes/API_AD.md" >}}

{{< include file="/static/includes/APIKeyWarn.md" >}}

Open the **User API Keys** screen by clicking **Settings** on the top toolbar or **API Keys** on the **Users** screen.

Click **Add** to open the **Add API Key** screen.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysAdd.png" alt="Add API Key" id="Add API Key" >}}

Enter a descriptive name for the key.
Select an administrative user to associate with this key from the **Username** dropdown.

To add a user API key token that does not expire (no expiration date), leave **Non-expiring** enabled.
A non-expiring key remains active until it is manually revoked or changed to expire.

To create a key with a scheduled expiration, disable **Non-expiring** by clearing the checkbox.
Click on the calendar icon in the **Expires On** field and select the expiration date. The field does not allow typing a date.

{{< trueimage src="/images/SCALE/Dashboard/APIKeyExpires.png" alt="Key Expiration Settings" id="Key Expiration Settings" >}}

Click **Save**. The **API Key** dialog opens with a generated key string.
TrueNAS API key strings are 64 randomly generated characters long.

{{< trueimage src="/images/SCALE/Dashboard/APIKeyCopy.png" alt="API Key Success Dialog" id="API Key Success Dialog" >}}

The token only shows in the **API Key** dialog.
To save the key for use as an authentication token, click **Copy to Clipboard**, paste it into a text file, then save the fle in a secure location.

{{< expand "Can I view the API Key again after closing the API Key dialog?" "v" >}}
You cannot view the API key string after closing the **API Key** dialog.

If you close the dialog before copying the key, select the user row and click **Edit** to open the **Edit API Key** screen.
Select **Reset**. TrueNAS opens the **API Key** dialog showing a new key string. Copy the key before closing the dialog.
Remember to update settings using the API key token.
{{< /expand >}}

Click **Close** to return to the **User API Keys** screen.

## Migrating API Keys

{{< include file="/static/includes/APIKeyMigrate.md" >}}

## Editing an API Key

Select the user row and then click <i class="material-icons" aria-hidden="true" title="Edit">edit</i> edit to open the **Edit API Key** screen.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysEdit.png" alt="Edit API Key" id="Edit API Key" >}}

Make the desired changes and click **Save**.

To remove the existing API key string and generate a new random key, select **Reset**.
The **API Key** dialog opens, showing a new key string.
Click **Copy to Clipboard** to copy the token, then paste it into a text file and save it in a secure location.

Update any clients using the reset API Key with the new key string.

## Deleting an API Key

Click <i class="material-icons" aria-hidden="true" title="Delete">delete</i> delete for any API key on the list to remove that key.
TrueNAS opens a **Delete API Key** dialog.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysDelete.png" alt="Delete API Key" id="Delete API Key" >}}

Select **Confirm**, then click **Delete**.

## Embedded API Documentation

Click **API Docs** on the **User** or **User API Keys** screen to access the TrueNAS API documentation built into the system.
A new browser window opens, showing the API documentation Table of Contents.

{{< trueimage src="/images/SCALE/Dashboard/APIDocsTableOfContentsScreen.png" alt="API Docs Table of Contents" id="API Docs Table of Contents" >}}

Click the link for the content you want to access:
* JSON-RPC 2.0 over WebSocketAPI shows an overview of the JSON-RPC 2.0 format with example objects.
* API Methods shows a table of contents listing TrueNAS API methods
* API Events shows the list of API methods with query call options
* Jobs shows an overview of the job options, uploading/downloading file example scripts, and information on running a query for job status.
* Query Methods shows query basic usage, supported operators, and information on query operations and syntax.

{{< include file="/static/includes/APIDocs.md" >}}
