---
title: "Connecting TrueNAS Systems"
weight: 40
---

{{< toc >}}

## Connecting Systems to TrueCommand

To connect a system to TrueCommand, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Systems**.
This menu is organized into two tabs: **Systems** and **System Groups**.
The **Systems** and **System Groups** tabs contain all the options to connect and organize systems in TrueCommand.
All added systems are listed in the **Systems** tab with the current connection status.

### Adding a System Manually

To connect a new system, click **+ NEW SYSTEM**.

Enter the system IP address or DNS hostname, the nickname, and the password.
If a mistake is made, the form can be reset by clicking **RESET FORM**.

![Systems List](/images/TrueCommand/2.0/SystemsPage.png "Systems List")

### Adjusting Systems

Systems that are misconfigured (e.g. if you entered an incorrect password) appear offline in both the TrueCommand **Dashboard** and **Systems** list.

You can edit a system from the Systems list and enter new connection details. To go back to the original contents of the fields, click **RESET FORM**.

To remove a system from TrueCommand monitoring, click **Delete**.

## Organizing Systems into Groups

Groups are collections of systems that are organized by TrueCommand administrators.
Grouping systems allows efficient management of system permissions and reporting.

Open the **System Groups** tab to view the list of created groups and the systems they contain.
Create a Group by clicking **Configure <i class="material-icons" aria-hidden="true" title="Settings">settings</i>&nbsp; > Systems > + NEW GROUP**.
Enter a name for the new group and click *ADD SYSTEM* to add a system to the group.
When all the desired systems are added to the group, click *CREATE GROUP*.

![SystemsNewGroup](/images/TrueCommand/2.0/SystemsGroupsNewGroup.png "New System Group")

Editing a group allows you to update the group name or change which systems are members of that group.

To delete a system group, click *Delete* <i class="material-icons" aria-hidden="true" title="Delete">delete</i>.
Confirm the deletion by clicking *YES*.

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
When all systems are connected to TrueCommand Cloud, refer to the [TrueCommand Administration articles]({{< relref "/TrueCommand/Administration/_index.md" >}}) for more instructions about setting up configuration backups, alerts, reports, and role-based access control.

## Manual Connections

To connect a system to TrueCommand, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click *Systems*.
This menu is organized into two tabs: **Systems** and **System Groups**.
These tabs contain all the options to connect and organize systems in TrueCommand.
All added systems are listed in the **Systems** tab with the current connection status.

To connect a new system, click *+ NEW SYSTEM*.

Enter the system IP address or DNS hostname, nickname, and password.
If a mistake is made, the contents of the fields can be reset by clicking *RESET FORM*.

![Systems List](/images/TrueCommand/2.0/SystemsPage.png "Systems List")
