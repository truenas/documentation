---
title: "S3 Access Keys Screen"
description: "Provides information on the S3 Access Keys screen and settings in TrueNAS."
weight: 85
tags:
- s3
- object storage
- credentials
doctype: reference
---

The **Credentials > S3 Access Keys** screen shows the access keys S3 clients use to connect to S3 buckets on the TrueNAS system.

An *S3 access key* is a credential pair made up of an access key ID and a secret access key.
S3 clients use the pair to sign each request.
Each access key belongs to a TrueNAS user account, and the S3 service runs requests signed with that key as that user.
An S3 access key cannot sign in to the TrueNAS web UI or API.

To open the screen, go to **Credentials > S3 Access Keys**.
You can also select **Access Keys** from the <span class="material-icons">more_vert</span> dropdown list on the **Object Storage (S3) Buckets** widget, or click **Access Keys** on the **S3 Buckets** screen.

{{< trueimage src="/images/SCALE/Credentials/S3AccessKeysScreenEmpty.png" alt="S3 Access Keys Screen without Access Keys" id="S3 Access Keys Screen without Access Keys" >}}

**Buckets** opens the [**S3 Buckets** screen]({{< ref "S3BucketsScreens" >}}).

**Columns** shows options to customize the table view.

**Add** opens the [**Add S3 Access Key**](#add-and-edit-s3-access-key-screens) screen.

## S3 Access Keys Table

After you add an access key, the **S3 Access Keys** table lists the access keys on the system.

{{< trueimage src="/images/SCALE/Credentials/S3AccessKeysScreenPopulated.png" alt="S3 Access Keys Screen with Access Key" id="S3 Access Keys Screen with Access Key" >}}

{{< truetable >}}
| Column | Description |
|--------|-------------|
| **Name** | Shows the name of the access key. |
| **User** | Shows the user account the access key belongs to. Shows **Missing** if the account no longer exists. |
| **Access Key ID** | Shows the access key ID that clients use to identify the key. |
| **Status** | Shows the state of the access key. Only an access key with the **Enabled** status can sign requests. Statuses are:<ul><li>**Enabled** - The access key is active.</li><li>**Disabled** - An administrator cleared **Enabled** for the access key.</li><li>**Expired** - The access key passed its expiration date.</li><li>**User Missing** - The directory services account the access key belongs to no longer resolves.</li><li>**Secret Lost** - The secret access key was lost after restoring a system configuration file that did not include the secret seed. Rotate the secret to create a new one.</li></ul> |
| **Expires On** | Shows when the access key expires, or **Never** for an access key that does not expire. |
| **Last Used** | Shows when the S3 service last accepted a request signed with the access key, or **Never**. The S3 service updates this value at intervals, so a recent request might not show immediately. |
| **Manage Buckets** | Shows **Yes** if the access key can create and delete buckets through the S3 protocol, or **No**. |
| **Created** | Shows when the access key was created. Hidden by default. |
{{< /truetable >}}

The <span class="material-icons">more_vert</span> icon on an access key row shows these options:

* **<span class="material-icons">edit</span> Edit** opens the [**Edit S3 Access Key**](#add-and-edit-s3-access-key-screens) screen.
* **<span class="material-icons">refresh</span> Rotate Secret** opens a confirmation dialog to create a new secret access key for the same access key ID.
  Clients that use the current secret stop working.
  The new secret shows one time in the [**S3 Access Key** dialog](#s3-access-key-dialog).
* **<span class="material-icons">delete</span> Delete** opens a confirmation dialog to delete the access key.
  The S3 service refuses requests signed with a deleted key.

Deleting a local user account also deletes the access keys that belong to that account.

{{< include file="/static/includes/addcolumnorganizer.md" >}}

## Add and Edit S3 Access Key Screens

The **Add S3 Access Key** and **Edit S3 Access Key** screens show the same settings.
On the **Edit S3 Access Key** screen, **User** is read-only because you cannot change the account an access key belongs to.

TrueNAS generates the access key ID and secret access key when you save a new access key.

**Save** creates the access key or saves changes to an existing access key.

{{< trueimage src="/images/SCALE/Credentials/AddS3AccessKeyWizard.png" alt="Add S3 Access Key Screen" id="Add S3 Access Key Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | (Required) Enter a unique name for the access key. |
| **User** | (Required) Select the user account the access key belongs to. The S3 service runs requests signed with this key as that account, so select an account that has access only to the buckets the client needs. The root account cannot own an access key. The list shows non-built-in user accounts. **Add New** opens the **Add User** screen with **SMB Access** cleared and **Disable Password** selected, because an account created for S3 access does not need to sign in. |
| **Enabled** | Selected by default. Select to allow clients to use the access key. Clear to disable the access key without deleting it. |
| **Manage Buckets** | Select to allow clients that sign requests with this key to create and delete buckets through the S3 protocol. The user account must have a privilege that includes the **SHARING_S3_WRITE** role. Creating buckets also requires a **Managed Root Dataset** on the S3 service configuration screen. This setting does not affect other access keys that belong to the same account. |
| **Non-expiring** | Select to create an access key that does not expire. Leave cleared to set an expiration date in **Expires On**. |
| **Expires On** | (Required) Shows when **Non-expiring** is cleared. Click the calendar icon to select the date the access key expires. The S3 service refuses requests signed with an expired key. |
{{< /truetable >}}

## S3 Access Key Dialog

The **S3 Access Key** dialog opens after you create an access key or rotate the secret.
It shows the **Access Key ID** and **Secret Access Key** values for the key.

{{< trueimage src="/images/SCALE/Credentials/S3AccessKeyDialog.png" alt="S3 Access Key Dialog" id="S3 Access Key Dialog" >}}

{{< hint type=important >}}
The dialog is the only place the web UI shows the secret access key.
Copy the secret access key and store it in a secure location before you close the dialog.
If you lose the secret, rotate the key to create a new secret.
{{< /hint >}}

**Copy Access Key ID** copies the access key ID to the clipboard.
**Copy Secret** copies the secret access key to the clipboard.
**Close** closes the dialog.
