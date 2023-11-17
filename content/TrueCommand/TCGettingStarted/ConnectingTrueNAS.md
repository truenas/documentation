---
title: "Connecting the First TrueNAS System"
description: "Provides instruction on connecting the first TrueNAS system in TrueCommand and adding, managing, and deleting systems and system groups."
weight: 40
aliases: 
 - /truecommand/tcgettingstarted/connectingtruenas/
tags:
- tccloud
- install
- tcconnect
- apikeys
---

{{< toc >}}

## Adding the First TrueNAS System with the TrueCommand UI

Before adding a TrueNAS system, log into that system, then take note of the system host name or IP address (on the **Network** screen).
Next, you need either a password or to obtain a system API key to use as a security credential.
Create an API key in the TrueNAS system and copy the API key to the clipboard to paste into the **Password/API Key** field on the **New System** screen.

The new **Fleet Dashboard** screen displays the first time you log into the TrueCommand interface.
To add your first TrueNAS system, click **NEW SYSTEM** on the main dashboard or in the **System** widget on the **Fleet Dashboard**.

![FleetDashboardNoSystems](/images/TrueCommand/Dashboard/FleetDashboardNoSystems.png "Fleet Dashboard No Systems Added")

To open the main dashboard, click the TrueCommand Icon on the left of the top toolbar.

![MainDashboardNoSystems](/images/TrueCommand/Dashboard/MainDashboardNoSystems.png "Main Dashboard No Systems Added")

Enter the system IP address or DNS host name, then enter a system nickname and password or paste the API key into the **Password/API Key** fields.

![AddNewSystem](/images/TrueCommand/Dashboard/AddNewSystem.png "Add New System")

{{< expand "New System Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **IP Address or Hostname** | Enter the TrueNAS system IP address or host name. |
| **Port** | (Required) Populated with the default **443**. TrueCommand communicates with the TrueNAS systems over this port. |
| **Nickname** | (Required) Enter a unique short-form identifier for this system. You cannot use the same system nickname more than once. |
| **Password / API Key** | Enter a password or API key issued by the TrueNAS system. TrueCommand hides characters for security. |
| **Password / API Key Confirm** | Re-enter the password or paste the API key issued by the TrueNAS system. |
{{< /truetable >}}
{{< /expand >}}

Click **RESET FORM** to clear the fields and reset the form if you make a mistake.
Click **ADD SYSTEM** to add the new system.
Click **ADD AND CONTINUE** to add this system and continue to add more systems.

## Connect Your First TrueNAS System Using TrueCommand Cloud

{{< expand "TrueCommand Cloud: Connecting Systems" "v" >}}
{{< include file="/_includes/TCCloudConnectSystems.md" >}}

When all systems are connected to TrueCommand Cloud, refer to the TrueCommand [User]({{< relref "/TrueCommand/UserGuide/_index.md" >}}) and [Administrator]({{< relref "/TrueCommand/AdminGuide/_index.md" >}}) Guides for instructions about setting up configuration backups, alerts, reports, and role-based access control.
{{< /expand >}}

## Managing Systems with the TrueCommand UI

Systems added in TrueCommand display on the **Fleet Dashboard**, main **Dashboard**, **System** screen, and **System Inventory** screen.
To display the list of systems in TrueCommand, click the <span class="material-icons">settings</span> icon, then click either **System Inventory** or **Systems**.

The **Systems** screen has two tabs: **Systems** and **System Groups**.
These tabs contain all the options to connect and organize systems in TrueCommand.
TrueCommand lists all added systems and their connection statuses in the **Systems** tab.

![SystemsScreen](/images/TrueCommand/Systems/SystemsPage.png "Systems Screen")

Click **+ NEW SYSTEM** on either the **System** or **System Inventory** screen opens the **New System** screen as described above.
Click on a system to see details for it, or on the more details <span class="material-icons">more_vert</span> icon to open the list of system actions.

![SystemInventoryScreen](/images/TrueCommand/SystemInventory/SystemInventoryScreen.png "System Inventory System Screen")

## Changing System Settings with the TrueCommand UI

Misconfigured systems (such as one created with an incorrect password) appear offline on the TrueCommand dashboards and system list screens.

To enter new connection details for a system, click the more details <span class="material-icons">more_vert</span> icon then click **Edit**.
Click **RESET** to clear the fields, enter the correct settings, then click **Save Changes**.
To remove a system from TrueCommand monitoring, click **Delete**.

## Organizing Systems into Groups with the TrueCommand UI

TrueCommand administrators can organize systems into collections called *groups*.
Grouping systems enables efficient system permissions and reporting management.

Click on the **System Groups** tab on the **Systems** screen to view a list of created groups and the systems they include.

To create a group, click **NEW GROUP** at the top right of the **Systems** screen.
Enter a name for the new group, then click **ADD SYSTEM** to add a system to the group.
After adding the desired system(s) to the group, click **SAVE GROUP**.

![SystemsNewGroup](/images/TrueCommand/Systems/SystemsGroupsNewGroup.png "Add New System Group")

Editing a group allows you to update the group name or change which systems are members of that group.

To delete a system group, click **Delete** <i class="material-icons" aria-hidden="true" title="Delete">delete</i>.
Click **Yes** to confirm the deletion.