---
title: "Connecting Your First TrueNAS System"
weight: 40
---

{{< toc >}}

## Connecting Your First TrueNAS System

![SystemsAddFirstSystem](/images/TrueCommand/2.0/SystemsAddFirstSystem.png "Adding Your First System")

To connect your first system to TrueCommand, click **NEW SYSTEM** on the dashboard.

![SystemsAddFirstSystemForm](/images/TrueCommand/2.0/SystemsAddFirstSystemForm.png "Adding Your First System")

Fill out the New System form and click **ADD SYSTEM**.

| Setting | Description |
|------|------|
| IP Address or Hostname | The system's IP address or DNS hostname. |
| Nickname | Required short-form identifier for this system. You cannot use system nicknames more than once. |
| Password / API Key | New password or API key. TrueCommand hades characters for security. |
| Password / API Key Confirm | Re-enter the password or API key. |

## Connecting Systems to a TrueCommand Cloud Instance

### Get an API Key

![SystemsAddFirstSystemCloudAccount](/images/TrueCommand/2.0/SystemsAddFirstSystemCloudAccount.png "Connecting from TrueCommand Cloud")

Log into your [ixSystems cloud account](https://portal.ixsystems.com/portal/login/index.php#login) and click **Manage** next to your TrueCommand subscription.

![SystemsAddFirstSystemAPIKey](/images/TrueCommand/2.0/SystemsAddFirstSystemAPIKey.png "Connecting from TrueCommand Cloud")

Copy the **API Key** under **Service Details**.

### Connecting from the TrueNAS UI

Log into a TrueNAS system and click the TrueCommand icon in the upper right.

![SystemsAddFirstSystemTCButton](/images/TrueCommand/2.0/SystemsAddFirstSystemTCButton.png "Connecting from TrueNAS")

Paste the TrueCommand API Key copied from the iXsystems Account Portal into the TrueNAS dialog window. 

![SystemsAddFirstSystemTCConnect](/images/SCALE/SystemsAddFirstSystemTCConnect.png "Connecting TrueNAS to TrueCommand Cloud")

### Approve the Connection Request

When the TrueCommand logo starts moving, check your TrueCommand Cloud email address for a verification message.
The email links to the Portal where you confirm the connection and activate the TrueNAS system.

Click on the **Discovered Systems** alert, fill in the TrueNAS system's information, and click **Add System**.

It can take 10 to 15 minutes for the TrueNAS instance to fully sync up with TrueCommand Cloud.
Once your system is connected to TrueCommand Cloud, refer to the [TrueCommand Administration articles]({{< relref "/TrueCommand/Administration/_index.md" >}}) for more instructions about setting up configuration backups, alerts, reports, and role-based access control.