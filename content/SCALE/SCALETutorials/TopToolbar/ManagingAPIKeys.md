---
title: "Managing API Keys"
description: "This tutorial shows how to add, create, or edit an API key in TrueNAS SCALE."
weight: 30
tags:
- scaleapikeys
---

The **API Keys** option on the top right toolbar **Settings** (user icon) dropdown menu displays the **API Keys** screen.
This screen displays a list of API keys added to your system and allows you to add, edit, or delete keys.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysScreen.png" alt="API Keys Screen" id="API Keys Screen" >}}

{{< include file="/_includes/APIKeyCLI.md" >}}

## Adding an API Key

Click **Add** to display a dialog window that lets users add a new API key.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysAdd.png" alt="Add API Key" id="Add API Key" >}}

Type a descriptive name and click **Add**. The system displays a confirmation dialog and adds a new API key to the list.

## Editing or Deleting an API Key

Select the <span class="iconify" data-icon="eva:more-vertical-outline"></span> icon for any API key on the list to display options to manage that API key. Options are **Edit** or **Delete**.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysEdit.png" alt="Edit API Key" id="Edit API Key" >}}

Select the **Reset** to remove the existing API key and generate a new random key. The dialog displays the new key and the **Copy to Clipboard** option to copy the key to the clipboard.

{{< include file="/_includes/APIKeyWarn.md" >}}

To delete, select **Confirm** on the delete dialog to activate the **Delete** button.

{{< trueimage src="/images/SCALE/Dashboard/APIKeysDelete.png" alt="Delete API Key" id="Delete API Key" >}}

## API Key Documentation

Click **API Docs** to access API documentation that is built into the system.

{{< taglist tag="scaleapikeys" limit="10" >}}
