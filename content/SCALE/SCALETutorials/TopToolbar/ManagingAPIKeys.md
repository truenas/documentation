---
title: "Managing API Keys"
weight: 30
tags:
- scaleapikeys
---

The **API Keys** option on the top toolbar **Settings** dropdown menu displays the **API Keys** screen. This screen displays a list of API keys added to your TrueNAS.

![APIKeysScreen](/images/SCALE/22.02/APIKeysScreen.png "API Keys Screen")

## Adding an API Key

Click **Add** to display a dialog window that lets users add a new API key. API keys identify outside resources and applications without a principal. 

![AddAPIKey](/images/SCALE/22.02/AddAPIKey.png "Add API Key")

Type a descriptive name and click **Add**. The system displays a confirmation dialog and adds a new API key to the list.

## Editing or Deleting an API Key

Select the <span class="iconify" data-icon="eva:more-vertical-outline"></span> icon for any API key on the list to display options to manage that API key. Options are **Edit** or **Delete**.

![EditAPIKey](/images/SCALE/22.02/EditAPIKey.png "Edit API Key")

Select the **Reset** to remove the existing API key and generate a new random key. The dialog displays the new key and the **Copy to Clipboard** option to copy the key to the clipboard.

{{< hint "danger" >}}
Always back up and secure keys. The key string displays only one time, at creation!
{{< /hint >}}

To delete, select **Confirm** on the delete dialog to activate the **Delete** button.

![DeleteAPIKeydialog](/images/SCALE/22.02/DeleteAPIKeydialog.png "Delete API Key")

## API Key Documentation

Click **DOCS** to access API documentation for your system.

{{< taglist tag="scaleapikeys" limit="10" >}}

