---
title: "Connecting Your First TrueNAS System"
description: "This article describes how to connect your first TrueNAS system in TrueCommand."
weight: 40
tags:
- tccloud
- tcinstall
- tcconnect
---

{{< toc >}}

## Connect Your First TrueNAS System Using the TrueCommand UI

To add your first system to TrueCommand, click **NEW SYSTEM** on the dashboard.

![TrueCommand231DashboardNoListings](/images/TrueCommand/2.3.1/TrueCommand231DashboardNoListings.png "TrueCommand Dashboard No Systems Configured")

Enter the system IP address or DNS host name, then enter a system nickname and password.

![TrueCommand231AddNewSystem](/images/TrueCommand/2.3.1/TrueCommand231AddNewSystem.png "+ New System Menu")

| Setting | Description |
|---------|-------------|
| **IP Address or Hostname** | The system's IP address or DNS host name. |
| **Nickname** | Required short-form identifier for this system. You cannot use system nicknames more than once. |
| **Password / API Key** | New password or API key. TrueCommand hides characters for security. |
| **Password / API Key Confirm** | Re-enter the password or API key. |

Click **RESET FORM** to clear the fields and reset the form if you make a mistake. Click **ADD SYSTEM** to add the new system. Click **ADD AND CONTINUE** to add this system and then continue to add more systems.

## Connect Your First TrueNAS System Using TrueCommand Cloud

{{< expand "TrueCommand Cloud: Connecting Systems" "v" >}}
{{< include file="/_includes/TCCloudConnectSystems.md" type="page" >}}
 
When all systems are connected to TrueCommand Cloud, refer to the [TrueCommand Administration articles]({{< relref "/TrueCommand/Administration/_index.md" >}}) for more instructions about setting up configuration backups, alerts, reports, and role-based access control.
{{< /expand >}}

## Managing Systems in TrueCommand UI

To display the list of systems in TrueCommand, click the <span class="material-icons">settings</span> icon and select either **System Inventory** or **Systems**.

The **Systems** menu has two tabs: **Systems** and **System Groups**.
These tabs contain all the options to connect and organize systems in TrueCommand.
TrueCommand lists all added systems and their connection statuses in the **Systems** tab.

To connect a new system, click **+ NEW SYSTEM**. Enter the system IP address or DNS host name, then enter a system nickname and password. Click **RESET FORM** to clear the fields and reset the form if you make a mistake.

Clicking the more details icon <span class="material-icons">more_vert</span> allows you to enter new connection details for a system in the list.

![Systems List](/images/TrueCommand/2.1/SystemsPage.png "Systems List")

## Adjusting Systems using the TrueCommand UI

Misconfigured systems (such as one created with an incorrect password) appear offline on both the TrueCommand **Dashboard** and **Systems** list.

To enter new connection details for a system in the list, click the more details icon <span class="material-icons">
more_vert
</span>. Click **RESET FORM** to clear the fields and reset the form if you make a mistake. To remove a system from TrueCommand monitoring, click **Delete**.

## Organizing Systems into Groups using the TrueCommand UI

TrueCommand administrators can organize systems into collections called *groups*. Grouping systems enables efficient system permissions and reporting management.

Open the **System Groups** tab to view the list of created groups and the systems they contain.
Create a group by clicking **Configure <i class="material-icons" aria-hidden="true" title="Settings">settings</i>&nbsp; > Systems > + NEW GROUP**.
Enter a name for the new group and click **ADD SYSTEM** to add a system to the group.
After you add all the desired systems to the group, click **SAVE GROUP**.

![SystemsNewGroup](/images/TrueCommand/2.0/SystemsGroupsNewGroup.png "New System Group")

Editing a group allows you to update the group name or change which systems are members of that group.

To delete a system group, click **Delete** <i class="material-icons" aria-hidden="true" title="Delete">delete</i>.
Click **Yes** to confirm the deletion.

{{< taglist tag="tcinstall" limit="10" >}}
