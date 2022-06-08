---
title: "API Keys"
weight: 20
---

The **API Keys** option on the **Settings** dropdown menu displays the **API Keys** screen which lists API keys added to your TrueNAS.

![APIKeysScreen](/images/SCALE/22.02/APIKeysScreen.png "API Keys Screen")

Use the **Column** button to display options to customize information in the list of API keys. Options are **Unselect All**, **Created Date** and **Reset to Defaults**.

## Add API Keys

Click **Add** to display a dialog window that lets users add a new API key. API keys identify outside resources and applications without a principal. 

![AddAPIKey](/images/SCALE/22.02/AddAPIKey.png "Add API Key")

Type a descriptive name and click **Add**. The system displays a confirmation dialog and adds a new API key to the list.

## Edit or Delete API Keys

Select the for any API key on the list to display options to manage that API key. Options are **Edit** or **Delete**.

![EditAPIKey](/images/SCALE/22.02/EditAPIKey.png "Edit API Key")

Select the **Reset** to remove the existing API key and generate a new random key. The dialog displays the new key and the **Copy to Clipboard** option to copy the key to the clipboard.

{{< hint "warning" >}}
Always back up and secure keys. The key string displays only one time, at creation!
{{< /hint >}}

To delete, select **Confirm** to activate the **Delete** button.

## API Key Documentation

Users can also click **DOCS** to access their system API documentation.
