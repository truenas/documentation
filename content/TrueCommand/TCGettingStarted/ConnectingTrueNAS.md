---
title: "Connecting Your First TrueNAS System"
weight: 40
tags:
- tccloud
---

{{< toc >}}

## Connecting Your First TrueNAS System

![SystemsAddFirstSystem](/images/TrueCommand/2.0/SystemsAddFirstSystem.png "Adding Your First System")

To connect your first system to TrueCommand, click **NEW SYSTEM** on the dashboard.

![SystemsAddFirstSystemForm](/images/TrueCommand/2.0/SystemsAddFirstSystemForm.png "Adding Your First System")

| Setting | Description |
|---------|-------------|
| **IP Address or Hostname** | The system's IP address or DNS host name. |
| **Nickname** | Required short-form identifier for this system. You cannot use system nicknames more than once. |
| **Password / API Key** | New password or API key. TrueCommand hides characters for security. |
| **Password / API Key Confirm** | Re-enter the password or API key. |

Enter the system IP address or DNS host name, then enter a system nickname and password.

Click **RESET FORM** to clear the fields and reset the form if you make a mistake. To display the list of systems in TrueCommand, click the <span class="material-icons">settings</span> icon and select either **System Inventory** or **Systems**.

![Systems List](/images/TrueCommand/2.1/SystemsPage.png "Systems List")

### Adjusting Systems

Misconfigured systems (such as one created with an incorrect password) appear offline on both the TrueCommand **Dashboard** and **Systems** list.

You can edit a system from the **Systems** list by clicking the edit icon <i class="material-icons" aria-hidden="true" title="edit">edit</i> and then enter new connection details. Click **RESET FORM** to clear the fields and reset the form if you make a mistake.

To remove a system from TrueCommand monitoring, click **Delete**.

## Organizing Systems into Groups

TrueCommand administrators can organize systems into collections called *groups*.

Grouping systems enables efficient system permissions and reporting management.

Open the **System Groups** tab to view the list of created groups and the systems they contain.
Create a group by clicking **Configure <i class="material-icons" aria-hidden="true" title="Settings">settings</i>&nbsp; > Systems > + NEW GROUP**.
Enter a name for the new group and click **ADD SYSTEM** to add a system to the group.
After you add all the desired systems to the group, click **CREATE GROUP**.

![SystemsNewGroup](/images/TrueCommand/2.0/SystemsGroupsNewGroup.png "New System Group")

Editing a group allows you to update the group name or change which systems are members of that group.

To delete a system group, click **Delete** <i class="material-icons" aria-hidden="true" title="Delete">delete</i>.
Click **Yes** to confirm the deletion.

## Connecting Systems to a TrueCommand Cloud Instance

### Getting an API Key

Log into the ixSystems cloud account and click **Manage**.
Under **Service Details**, copy the **TrueCommand API Key**.

![SystemsAddFirstSystemCloudAccount](/images/TrueCommand/2.0/SystemsAddFirstSystemCloudAccount.png "Connecting from TrueCommand Cloud")

Log into your [ixSystems cloud account](https://portal.ixsystems.com) and click **Manage** next to your TrueCommand subscription.

![SystemsAddFirstSystemAPIKey](/images/TrueCommand/2.0/SystemsAddFirstSystemAPIKey.png "Connecting from TrueCommand Cloud")

Copy the **API Key** under **Service Details**.

### Connecting from the TrueNAS UI

Log into a TrueNAS system and click the TrueCommand icon in the upper right.

![SystemsAddFirstSystemTCButton](/images/TrueCommand/2.0/SystemsAddFirstSystemTCButton.png "Connecting from TrueNAS")

Paste the TrueCommand API Key copied from the iXsystems Account Portal into the TrueNAS dialog window. 

![SystemsAddFirstSystemTCConnect](/images/TrueCommand/2.0/SystemsAddFirstSystemTCConnect.png "Connecting TrueNAS to TrueCommand Cloud")

### Approving the Connection Request

When the TrueCommand logo starts moving, check the TrueCommand Cloud email address for a verification message.
The email contains a link to the portal to confirm the connection and activate the TrueNAS system.

Click on the **New System** alert, fill in the information from the TrueNAS system, and click **Add System**.

![ConnNewSystemCreds](/images/TrueCommand/2.0/TC20NewSystemCreds.png "Registering TrueNAS in TrueCommand Cloud")

It can take 10 to 15 minutes for the TrueNAS instance to fully sync up with TrueCommand Cloud.
When all systems are connected to TrueCommand Cloud, refer to the [TrueCommand Administration articles]({{< relref "/TrueCommand/Administration/_index.md" >}}) for more instructions about setting up configuration backups, alerts, reports, and role-based access control.

## Making Manual Connections

To connect a system to TrueCommand, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Systems**.
The **Systems** menu has two tabs: **Systems** and **System Groups**.
These tabs contain all the options to connect and organize systems in TrueCommand.
TrueCommand lists all added systems and their connection statuses in the **Systems** tab.

To connect a new system, click **+ NEW SYSTEM**.

Enter the system IP address or DNS host name, then enter a system nickname and password.
Click **RESET FORM** to clear the fields and reset the form if you make a mistake.

![Systems List](/images/TrueCommand/2.1/SystemsPage.png "Systems List")
