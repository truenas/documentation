---
---
Log into your [iXsystems cloud account](https://portal.ixsystems.com) and click **Manage** next to your TrueCommand subscription.

Under **Service Details**, copy the **TrueCommand API Key**.

![CloudSubscriptionServiceDetailsWireGuardClient](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetailsWireGuardClient.png "Account Services: TrueCommand API Key")

Log into a TrueNAS system and click the TrueCommand icon in the upper right.

![SystemsAddFirstSystemTCButton](/images/TrueCommand/2.0/SystemsAddFirstSystemTCButton.png "Connecting from TrueNAS")

Paste the TrueCommand API key copied from the iXsystems Account Portal into the TrueNAS dialog window. 

![TrueCommandCloudConnectAPIKey](/images/SCALE/TrueCommandCloudConnectAPIKey.png "Connecting TrueNAS to TrueCommand Cloud")

### Approving the Connection Request

When the True Command logo starts moving, check the TrueCommand Cloud email address for a verification message.
The email contains a link to the portal to confirm the connection and activate the TrueNAS system.

Click the **Discovered Systems** icon and select the TrueNAS system. TrueCommand automatically fills out the IP field using the WireGuard address. Fill in the TrueNAS system nickname and password information from the TrueNAS system, then click **Add System**.

![NewSystemCreds](/images/TrueCommand/2.0/TC20NewSystemCreds.png "Registering TrueNAS in TrueCommand Cloud")

The TrueNAS instance can take 10 to 15 minutes to fully sync up with TrueCommand Cloud.