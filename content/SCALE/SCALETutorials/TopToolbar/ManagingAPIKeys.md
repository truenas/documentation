---
title: "Managing API Keys"
description: "This tutorial shows how to add, create, or edit an API key in TrueNAS."
weight: 30
aliases:
 - /scale/scaleclireference/auth/cliapikey/
tags:
- toolbar
- apikeys
---

The <i class="material-icons" aria-hidden="true" title="laptop" style="vertical-align: top;">laptop</i> **My API Keys** option on the top right toolbar **Settings** (user icon) dropdown menu displays the **User API Keys** screen.
This screen displays a list of API keys added to your system and allows you to add, edit, or delete keys.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysScreen.png" alt="API Keys Screen" id="API Keys Screen" >}}

{{<include file="/static/includes/addcolumnorganizer.md">}}

## Adding an API Key

Click **Add** to open the **Add API Key** screen.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysAdd.png" alt="Add API Key" id="Add API Key" >}}

Type a descriptive name for the key.
Use the **Username** dropdown to select an administrative user to associate with this key.

Accept the default **Non-epiring** to create a token with no expiration date.
A non-expiring key remains active until it is manually revoked or updated.

To create a key with a set expiration date and time, click to clear the **Non-expiring** checkbox.
Click on the **Expires at** field and use the calendar to select the expiration date.

{{< trueimage src="/images/SCALE/Dashboard/APIKeyExpires.png" alt="Key Expiration Settings" id="Key Expiration Settings" >}}

Click **Save** to generate the key.

TrueNAS displays an **API Key** dialog containing the generated key value.

{{< trueimage src="/images/SCALE/Dashboard/APIKeyCopy.png" alt="API Key Success Dialog" id="API Key Success Dialog" >}}

Click **Copy to Clipboard** and save the API key string in a secure location.

{{< include file="/static/includes/APIKeyWarn.md" >}}

Click **Close** to return to the **User API Keys** screen.
<!-- Continue -->
## Editing or Deleting an API Key

Select the <span class="iconify" data-icon="eva:more-vertical-outline"></span> icon for any API key on the list to display options to manage that API key. Options are **Edit** or **Delete**.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysEdit.png" alt="Edit API Key" id="Edit API Key" >}}

Select the **Reset** to remove the existing API key and generate a new random key. The dialog displays the new key and the **Copy to Clipboard** option to copy the key to the clipboard.

{{< include file="/static/includes/APIKeyWarn.md" >}}

To delete, select **Confirm** on the delete dialog to activate the **Delete** button.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysDelete.png" alt="Delete API Key" id="Delete API Key" >}}

## API Key Documentation

Click **API Docs** to access API documentation that is built into the system.
