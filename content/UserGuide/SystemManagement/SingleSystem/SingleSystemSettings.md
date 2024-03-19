---
title: "Managing Single Systems"
description: "Provides instructions on adding and managing individual TrueNAS systems in TrueCommand."
weight: 10
---

TrueCommand allows administrator and non-administrator users with permissions to customize select settings when managing a single system through the systems options menu. 

## System Options Menu
{{< include file="/static/includes/TCSystemOptionsMenu.md" >}}

### Editing System Settings
To edit system settings, click **Edit** on the system options menu. 
The **Edit *system*** screen opens and allows users change the system IP address/host name, system name (**Nickname**), and enter a new TrueNAS administrator password/API key for authentications. 
Do not change the port number TrueCommand listens on.

Click **SAVE CHANGES** to keep your changes, or **RESET** to clear settings and start over. 

![EditSystemScreen](/images/TrueCommand/Dashboard/EditSystemScreen.png "Edit System Settings")

### Managing TrueNAS Users and Groups
To displays a list of TrueNAS users or groups for the selected system, click **Users and Groups** <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-account-group mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-account-group" data-mat-icon-namespace="mdi"></mat-icon> to open the TrueNAS **Users** screen. 
The **Users and Groups** option opens the **Users** screen for the selected system. This is a list of users on the TrueNAS system.

![NASUsersAndGroups2](/images/TrueCommand/Dashboard/NASUsersAndGroups2.png "TrueNAS System Users Screen")

To view TrueNAS system groups, select **GROUPS** from the dropdown list on the top page banner.

{{< hint type=important >}}
The TrueNAS **Users and Groups** function is an experimental feature that could be radically changed or removed in future releases. Use with caution!
{{< /hint >}}

### Adding TrueNAS Users
Only administrators can view and edit TrueNAS users and groups.

{{< include file="/static/includes/TCNASUserAndGroup.md" >}}

For information on managing TrueNAS users groups, see [NAS Users and Groups]({{< relref "NASUsersAndGroups.md" >}})

## Updating the TrueNAS System
If an update is available, the **Systems** widget on the **Fleet Dashboard** and system widget on the main **Dashboard** show a green **Update** icon. 
The expanded main dashboard system widget shows a different update icon but it functions the same way.
Click either update icon to open the **Update NAS** window.

![UpdateNASWindow](/images/TrueCommand/Dashboard/UpdateNASWindow.png "Update NAS System")

To update the NAS system, select **Confirm**, then click **OK**. 
During a system update, the system card changes to indicate that the system is offline and finishing the update.

## Launching the TrueNAS Interface 
Click the **Launch TrueNAS Interface** button <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-monitor-screenshot mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-monitor-screenshot" data-mat-icon-namespace="mdi"></mat-icon> on the system options menu to open a new browser tab with the TrueNAS sign-in screen for the selected TrueNAS system.

### Viewing TrueNAS Services
TrueCommand offers limited control over system services. Click on **Services** <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-toolbox-outline mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-toolbox-outline" data-mat-icon-namespace="mdi"></mat-icon> on the system options menu to open **Services** screen with a list of services on the selected system and the current status of the service.

You cannot edit service parameters with TrueCommand, but can set them to start automatically on boot, stop, and start.

![TrueCommandSystemSettingsServices](/images/TrueCommand/Dashboard/SystemSettingsServices.png "System Settings Services")

### Deleting a TrueNAS System
Click the **Delete** <i class="material-icons" aria-hidden="true" title="Delete">delete</i> on the system options menu to remove the selected system from TrueCommand. 
Deleting does not affect data stored on the TrueNAS system, but it does delete all system metrics saved in TrueCommand.

![TrueCommandSystemSettingsDelete](/images/TrueCommand/Dashboard/SystemSettingsDelete.png "System Settings Delete")

Select **Confirm** on the confirmation dialog displays, then click **OK** to remove the system from TrueCommand. 
Click **CANCEL** to close the window without deleting the selected system.
