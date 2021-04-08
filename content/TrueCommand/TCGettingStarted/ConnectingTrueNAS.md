---
title: "Connecting TrueNAS Systems"
weight: 40
---

{{< toc >}}

## Connecting Systems to a TrueCommand Cloud Instance

### Get an API Key

Log into the ixSystems cloud account and click *Manage*.
Under **Service Details**, copy the *TrueCommand API Key*.

![CloudSubscriptionServiceDetailsWireGuardClient](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetailsWireGuardClient.png "Account Services: TrueCommand API Key")

### Connecting from the TrueNAS UI

Log into a TrueNAS system and click the TrueCommand icon in the upper right.

Paste the TrueCommand API Key copied from the iXsystems Account Portal into the TrueNAS dialog window. 

![TrueCommandCloudConnectAPIKey](/images/SCALE/TrueCommandCloudConnectAPIKey.png "Connecting TrueNAS to TrueCommand Cloud")

### Approve the Connection Request

When the True Command logo starts moving, check the TrueCommand Cloud email address for a verification message.
The email contains a link to the Portal to confirm the connection and activate the TrueNAS system.

Click on the **New System** alert, fill in the information from the TrueNAS system, and click *Add System*.

![NewSystemCreds](/images/TrueCommand/1.3/NewSystemCreds.png "Registering TrueNAS in TrueCommand Cloud")

It can take 10 to 15 minutes for the TrueNAS instance to fully sync up with TrueCommand Cloud.
When all systems are connected to TrueCommand Cloud, refer to the [TrueCommand Administration articles](/TrueCommand/Administration/) for more instructions about setting up configuration backups, alerts, reports, and role-based access control.

## Manual Connections

To connect a system to TrueCommand, open the **Configure** <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> menu and click *Systems*.
This menu is organized into two tabs: **Systems** and **System Groups**.
These tabs contain all the options to connect and organize systems in TrueCommand.
All added systems are listed in the **Systems** tab with the current connection status.

To connect a new system, click *+ NEW SYSTEM*.

Enter the system IP address or DNS hostname, nickname, and password.
If a mistake is made, the contents of the fields can be reset by clicking *RESET FORM*.

![Systems List](/images/TrueCommand/1.3/SystemsList.png "Systems List")
