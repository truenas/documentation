---
title: "Systems"
description: "Provides information on the System screens, settings, and options."
weight: 10
tags:
- tcsystems
---

The **Systems** screen is only available to administrator users.

## Connecting Systems to TrueCommand
To connect a system to TrueCommand, open the gear <i class="material-icons" aria-hidden="true" title="Settings">settings</i> settings menu and click **Systems**.
The **Systems** screen has two tabs: **Systems** and **System Groups**.
The **Systems** and **System Groups** tabs contain all the options to connect and organize systems in TrueCommand.
The **Systems** tab lists all added systems and their current connection statuses.

![Systems List](/images/TrueCommand/Systems/SystemsPage.png "Systems List")

### Adding a System Manually
To connect a new system, click **+ NEW SYSTEM**.

Enter the system IP address or DNS hostname, the nickname, and the password.
If you make a mistake, you can reset the form by clicking **RESET**.

![Systems Add](/images/TrueCommand/Systems/SystemsAddNew.png "Systems Add")

{{< hint type=note >}}
TrueCommand reconnects to systems after reboot or failover. In the event of invalid auth credentials after failover,
reconnect after a few minutes by editing the system and re-authenticating. TrueCommand does not reconnect if it believes the credentials are invalid, which
is the case if it tries to connect too soon to the controller undergoing failover before the Virtual IP has migrated to the other controller.
{{< /hint >}}

If the system has alerts or alarms, a blue circle with the number of current alerts displays to the right of the system name.

### Adjusting Systems
Each TrueNAS system listed on the **Systems** screen has an options menu that allows you to edit, delete or modify configuration settings for that system.
Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> for the system to display the options menu.

![Systems Options Menu](/images/TrueCommand/Systems/SystemScreenSystemActionsMenu.png "Systems Options Menu")

{{< expand "Edit" "v" >}}
Click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> **Edit** to open a panel on the right of the screen that displays the system setting fields you can edit. After making your changes, click **SAVE CHANGES** to update the system with the new values entered. 
Click **RESET** to clear the form and reset values to the previously saved settings for the NAS.

![Systems Edit](/images/TrueCommand/Systems/SystemsEditSystem.png "Systems Edit")
{{< /expand >}}

{{< expand "Users and Groups" "v" >}}
Click <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-account-group mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-account-group" data-mat-icon-namespace="mdi"></mat-icon> **Users and Groups** to display the list of users or groups for the selected system.

![Systems Users and Groups](/images/TrueCommand/Systems/SystemsUsersAndGroups.png "Systems Users and Groups")
{{< /expand >}}

{{< expand "Update" "v" >}}
If the system has updates ready to apply, a green **Update** displays on the system information screen.

![UpdateNASWindow](/images/TrueCommand/Dashboard/UpdateNASWindow.png "Update NAS System")

Click **Update** on the systems option menu to open the **Update NAS** window with information on the update. 
Select **Confirm**, then click **OK** to update the system.   
Click **CANCEL** to close the window without updating.
{{< /expand >}}

{{< expand "Launch TrueNAS Interface" "v" >}}
Use <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-monitor-screenshot mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-monitor-screenshot" data-mat-icon-namespace="mdi"></mat-icon> **Launch TrueNAS Interface** to open a new browser tab with the TrueNAS dashboard for the system selected on the **System** screen.  
{{< /expand >}}

{{< expand "Services" "v" >}}
Click <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-toolbox-outline mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-toolbox-outline" data-mat-icon-namespace="mdi"></mat-icon> **Services** to display the **Services** window with a list of services running or stopped for the selected system. 

The options for services are adding it to start on boot-up, stopping, or starting/restarting. 
Select**START ON BOOT** to add the selection to the services started at boot-up. 
Click the stop icon <i class="fa fa-stop" aria-hidden="true" title="stop"></i> to stop a running service. 
Click the start/restart icon <i class="material-icons" aria-hidden="true" title="Refresh">refresh</i> to start a stopped service. 

![Systems Services](/images/TrueCommand/Systems/SystemsServicesOption.png "Systems Services")
{{< /expand >}}

{{< expand "Config Backups" "v" >}}
Click <span class="iconify" data-icon="mdi:database-refresh"></span>  **Config Backups** to display the **Config Backups** window.

![SystemsConfigBackups](/images/TrueCommand/Systems/SystemsConfigBackups.png "Systems Config Backups")

Click **CREATE BACKUP** to create a new system configuration backup.

Click <span class="iconify" data-icon="ic:file-download"></span> (**Download**) next to a listed config to download that config locally.

Click <span class="iconify" data-icon="ic:round-restore"></span> next to a listed config to restore the system to that configuration. 

Click <span class="iconify" data-icon="mdi:trash"></span> next to a listed config to delete it.

If you want to delete config backups in bulk, click the checkbox next to each config you want to delete, then click **DELETE SELECTED**.
{{< /expand >}}

{{< expand "Delete" "v" >}}
Click <i class="material-icons" aria-hidden="true" title="Delete">delete</i>  **Delete** to display a popup window and confirm you want to delete a selected system.

![Systems Delete](/images/TrueCommand/Systems/SystemsDeleteSystem.png "Systems Delete")

{{< hint type=important >}}
Deleting a system purges all collected data from the database but does not affect data stored on the TrueNAS system. TrueCommand archives all system metrics and backups.
{{< /hint >}}
{{< /expand >}}

## Organizing Systems into Groups
TrueCommand administrators can organize systems into collections called groups.
By grouping systems, you can efficiently manage system permissions and reporting.

{{< include file="/static/includes/TCPermissionsHierarchy.md" >}}

Open the **System Groups** tab to view the list of created groups and the systems they contain.

![SystemsGroups](/images/TrueCommand/Systems/SystemsGroups.png "System Groups")

To create a group, click **+ NEW GROUP** at the top of the **Systems** screen to open the **New Group** screen..
Enter a name for the new group, then click **ADD SYSTEM** to display a dropdown list of systems you can add to the group.
After adding the system(s) to the group, click **SAVE GROUP**.

![SystemsNewGroup](/images/TrueCommand/Systems/SystemsGroupsNewGroup.png "New System Group")

### Managing Groups
Each group has two management options:

{{< expand "Edit" "v" >}}
Clicking the edit button <i class="material-icons" aria-hidden="true" title="Configure">edit</i> opens a sidebar menu. You can make adjustments to the group in this manner. Add or remove systems from the group by using the **Add System** button or the remove <i class="material-icons" aria-hidden="true" title="Delete">delete</i> button. Click **Save Changes** when finished with your changes to update the group to the new group settings.

![Groups Edit](/images/TrueCommand/Systems/SystemsGroupsEditGroup.png "Groups Edit")

{{< /expand >}}
{{< expand "Delete" "v" >}}

Click <i class="material-icons" aria-hidden="true" title="Delete">delete</i> opens a confirmation dialog. 

![Groups Delete](/images/TrueCommand/Systems/SystemsGroupsDeleteGroup.png "Group Delete")

Select **Confirm**, then click **DELETE GROUP** to remove the TrueCommand group.
{{< /expand >}}
