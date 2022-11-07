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

### Creating API Keys in the Shell

TrueNAS SCALE supports creating API keys in the **Shell** with an allow list of permissions for the keys.

Go to **System Settings > Shell** and enter `midclt call api_key.create '{"name":"KEYNAME", "allowlist": [{"method": "HTTPMETHOD", "resource": "METHODNAME"}]}'` using your desired `allowlist` parameters.

{{< expand "Example of a Call" "v" >}}
Example of a call: midclt call api_key.create '{"name":"api key 1", "allowlist": [{"method": "SUBSCRIBE", "resource": "certificate.query"}]}'

In this case, the HTTP `method` is `SUBSCRIBE`, which is a websocket API event subscription. The `resource` is `certificate.query`, which is the event name. 
{{< /expand >}}
{{< expand "Example of a Wildcard Call" "v" >}}
Example of a wildcard call: `midclt call api_key.create '{"name":"api key 2", "allowlist": [{"method": "CALL", "resource": "zfs.snapshot.*"}]}'`

In this case, the HTTP `method` is `CALL`, which is a websocket API method call. The `resource` is `zfs.snapshot.*`, which is the method name wildcard.
{{< /expand >}}

After you enter the command, the **Shell** displays the API Key in the output.

![CreateAPIKeyInShell](/images/SCALE/CreateAPIKeyInShell.png "Create an API Key in the Shell")

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
