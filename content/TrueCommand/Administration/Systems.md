---
title: "Systems"
description: "This article provides information on the System screens, settings and options."
weight: 10
aliases:
tags:
- tcsystems
---

{{< toc >}}

## Connecting Systems to TrueCommand

To connect a system to TrueCommand, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Systems**.
The **Systems** menu has two tabs: **Systems** and **System Groups**.
The **Systems** and **System Groups** tabs contain all the options to connect and organize systems in TrueCommand.
The **Systems** tab lists all added systems and their current connection statuses.

![Systems List](/images/TrueCommand/2.1/SystemsPage.png "Systems List")

### Adding a System Manually

To connect a new system, click **+ NEW SYSTEM**.

Enter the system IP address or DNS hostname, the nickname, and the password.
If you make a mistake, you can reset the form by clicking **RESET**.

![Systems Add](/images/TrueCommand/2.1/SystemsAddNew.png "Systems Add")

If the system has alerts or alarms, a blue circle with the number of current alerts displays to the right of the system name.

### Adjusting Systems

Each TrueNAS system listed on the **Systems** screen has an options menu that allows you to edit, delete or modify configuration settings for that system.
Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> for the system to display the options menu.

![Systems Options Menu](/images/TrueCommand/2.2/SystemScreenSystemActionsMenu.png "Systems Options Menu")

{{< expand "Edit" "v" >}}
Click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> **Edit** to open a panel on the right of the screen that displays the system setting fields you can edit. After making your changes, click **SAVE CHANGES** to update the system with the new values entered. 
Click **RESET** to clear the form and reset values to the previously saved settings for the NAS.

![Systems Edit](/images/TrueCommand/2.1/SystemsEditSystem.png "Systems Edit")
{{< /expand >}}

{{< expand "Users and Groups" "v" >}}
Click <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-account-group mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-account-group" data-mat-icon-namespace="mdi"></mat-icon> **Users and Groups** to display the list of users or groups for the selected system.

![Systems Users and Groups](/images/TrueCommand/2.1/SystemsUsersAndGroups.png "Systems Users and Groups")
{{< /expand >}}


{{< expand "Update" "v" >}}
If the system has updates ready to apply, a green updates displays on the system information screen.

![SystenUpdateAvailable](/images/TrueCommand/2.3.2/SystenUpdateAvailable.png "System Update Available")

Click on the green <span class="material-icons">arrow_circle_up</span> icon to open the **Update** dialog with information on the update. 
Select **Confirm**, then click **OK** to update the system.   
Click **CANCEL** to close the window without updating.

![Systems Update](/images/TrueCommand/2.1/SystemsUpdateNAS.png "Systems Update")
{{< /expand >}}

{{< expand "Launch TrueNAS Interface" "v" >}}
Use <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-monitor-screenshot mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-monitor-screenshot" data-mat-icon-namespace="mdi"></mat-icon> **Launch TrueNAS Interface** to open a new browser tab with the TrueNAS dashboard for the system selected on the **System** screen.  
{{< /expand >}}

{{< expand "iSCSI Volumes" "v" >}}
If a system has iSCSI volumes, click <mat-icon role="img" fontset="mdi" fonticon="mdi-database" class="mat-icon mdi mdi-database mat-icon-no-color" aria-hidden="true"></mat-icon> **iSCSI Volumes** to display the iSCSI volumes page for the server.

![Systems iSCSI Volumes](/images/TrueCommand/2.1/SystemsiSCSIoption.png "Systems iSCSI Volumes")
{{< /expand >}}

{{< expand "Services" "v" >}}
Click <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-toolbox-outline mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-toolbox-outline" data-mat-icon-namespace="mdi"></mat-icon> **Services** to display the **Services** window with a list of services running or stopped for the selected system. 

The options for services are adding it to start on boot-up, stopping, or starting/restarting. 
Select**START ON BOOT** to add the selection to the services started at boot-up. 
Click the stop icon <i class="fa fa-stop" aria-hidden="true" title="stop"></i> to stop a running service. 
Click the start/restart icon <i class="material-icons" aria-hidden="true" title="Refresh">refresh</i> to start a stopped service. 

![Systems Services](/images/TrueCommand/2.1/SystemsServicesOption.png "Systems Services")
{{< /expand >}}

{{< expand "Config Backups" "v" >}}
Click <span class="iconify" data-icon="mdi:database-refresh"></span>  **Config Backups** to display the **Config Backups** window.

![SystemsConfigBackups](/images/TrueCommand/2.2/SystemsConfigBackups.png "Systems Config Backups")

Click **CREATE BACKUP** to create a new system configuration backup.

Click <span class="iconify" data-icon="ic:file-download"></span> (**Download**) next to a listed config to download that config locally.

Click <span class="iconify" data-icon="ic:round-restore"></span> next to a listed config to restore the system to that configuration. 

Click <span class="iconify" data-icon="mdi:trash"></span> next to a listed config to delete it.

If you want to delete config backups in bulk, click the checkbox next to each config you want to delete, then click **DELETE SELECTED**.
{{< /expand >}}

{{< expand "Delete" "v" >}}
Click <i class="material-icons" aria-hidden="true" title="Delete">delete</i>  **Delete** to display a popup window and confirm you want to delete a selected system.

![Systems Delete](/images/TrueCommand/2.0/SystemsDeleteSystem.png "Systems Delete")

{{< hint warning >}}
Deleting a system purges all collected data from the database.
{{< /hint >}}
{{< /expand >}}

## Organizing Systems into Groups

TrueCommand administrators can organize systems into collections called Groups.
Grouping systems lets you efficiently manage system permissions and reporting.

Open the **System Groups** tab to view the list of created groups and the systems they contain.

![SystemsGroups](/images/TrueCommand/2.1/SystemsGroups.png "System Groups")

Create a group by clicking **Configure <i class="material-icons" aria-hidden="true" title="Settings">settings</i>&nbsp; > Systems > + NEW GROUP**.
Type a name for the new group and click **ADD SYSTEM** to add a system to the group.
After adding all the desired systems to the group, click **CREATE GROUP**.

![SystemsNewGroup](/images/TrueCommand/2.1/SystemsGroupsNewGroup.png "New System Group")

### Managing Groups

Each group has two management options:

{{< expand "Edit" "v" >}}
Clicking the edit button <i class="material-icons" aria-hidden="true" title="Configure">edit</i> opens a sidebar menu. You can make adjustments to the group in this manner. Add or remove systems from the group by using the **Add System** button or the remove <i class="material-icons" aria-hidden="true" title="Delete">delete</i> button. Click **Save Changes** when finished with your changes to update the group to the new group settings.

![Groups Edit](/images/TrueCommand/2.1/SystemsGroupsEditGroup.png "Groups Edit")

{{< /expand >}}
{{< expand "Delete" "v" >}}

Clicking the <i class="material-icons" aria-hidden="true" title="Delete">delete</i> button displays a popup confirmation box to delete a group. 

![Groups Delete](/images/TrueCommand/2.0/SystemsGroupsDeleteGroup.png "Group Delete")
{{< /expand >}}