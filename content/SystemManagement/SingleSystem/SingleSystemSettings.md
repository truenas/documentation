---
title: "System Settings"
description: "How to edit individual TrueNAS system settings in TrueCommand."
weight: 10
---

TrueCommand lets users customize select settings when managing a single system. To see the system settings menu, click the three-dot icon in a system card window on the TrueCommand dashboard to display the menu.

![TrueCommandSystemSettingsMenu](/images/TrueCommand/2.1/TrueCommandSystemSettingsMenu.png "System Settings Menu")

{{< tabs "System Menu" >}}
{{< tab "Edit" >}}

To edit system general settings, click the **Edit** button in the system settings menu.

The **General Settings** window lets users edit the system IP address/hostname, nickname, password/API key, and alert options. 
Click **SAVE CHANGES** to keep your changes, or **RESET** reset and start over. 
Click off the window back to the dashboard to close the edit window without making changes. 

![TrueCommandSystemSettingsEdit](/images/TrueCommand/2.1/TrueCommandSystemSettingsEdit.png "System Settings Edit")

{{< /tab >}}
{{< tab "Users and Groups" >}}

To displays a list of users or groups on the selected system, click the **Users and Groups** button <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-account-group mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-account-group" data-mat-icon-namespace="mdi"></mat-icon>.  
Click the **Users** dropdown to select **Groups** to change the list to groups on the system.

{{< hint type=important >}}
This new 2.1 Users And Groups function is an experimental feature that could be radically changed or removed in future releases. Use with caution!
{{< /hint >}}

![SystemSettingsUsersAndGroups](/images/TrueCommand/2.1/SystemUsersAndGroups.png "System Settings Users and Groups")

Click the edit icon <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to display the edit user window. 

![SystemSettingsEditUser](/images/TrueCommand/2.1/SystemSettingsEditUser.png "System Settings Edit User")

Scroll down to view all edit fields. Click **SAVE** to keep changes or **CANCEL** to discard any changes made. Click the **X** to close the window.

![SystemSettingsEditUserSave](/images/TrueCommand/2.1/SystemSettingsEditUserSave.png "System Settings Edit User Save")

{{< /tab >}}
{{< tab "Update" >}}

Click the **Update** button <i class="material-icons" aria-hidden="true" title="Update">update</i> in the system settings menu to update the system to the latest build. After clicking the **Update** button, an update window with system and update information displays. Click **Confirm** and then **OK** to begin the update, or click **CANCEL** to exit without updating. During a system update, the system card changes to indicate that the system is offline and finishing the update.

![SystemUpdate](/images/TrueCommand/2.1/SystemSettingUpdate.png "System Update")

{{< /tab >}}
{{< tab "Launch TrueNAS Interface" >}} 

Click the **Launch TrueNAS Interface** button <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-monitor-screenshot mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-monitor-screenshot" data-mat-icon-namespace="mdi"></mat-icon> on the system settings menu to open a new browser tab pointed at the selected system's web interface.

{{< /tab >}}
{{< tab "iSCSI Volumes" >}} 

Click the **iSCSI Volumes** button <mat-icon role="img" fontset="mdi" fonticon="mdi-database" class="mat-icon mdi mdi-database mat-icon-no-color" aria-hidden="true"></mat-icon> on the system settings menu to display the **iSCSI Volumes** screen. It allows users to filter, create, and delete one or more iSCSI volumes.

![TrueCommandSystemSettingsiSCSI](/images/TrueCommand/2.1/SystemSettingsiSCSI.png "System Settings iSCSI")

See the full [iSCSI Management]({{< relref "iSCSIManagement.md" >}}) article for more information.

{{< /tab >}}
{{< tab "Services" >}}

TrueCommand offers limited control over system services. Click on the **Services** button <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-toolbox-outline mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-toolbox-outline" data-mat-icon-namespace="mdi"></mat-icon> on the system settings menu to display the list of services on the selected system. The **Services** window displays the current status of the service.

You cannot edit service parameters with TrueCommand, but you can set them to start automatically on boot, stop, and start.

![TrueCommandSystemSettingsServices](/images/TrueCommand/2.1/SystemSettingsServices.png "System Settings Services")

{{< /tab >}}
{{< tab "Delete" >}}

Click the **Delete** button <i class="material-icons" aria-hidden="true" title="Delete">delete</i> on the system settings menu to delete the selected system from TrueCommand. A confirmation window displays prompting you to confirm by selecting the **Confirm** checkbox and then click **OK** to delete the system. Click **CANCEL** to close the window without deleting the selected system.

![TrueCommandSystemSettingsDelete](/images/TrueCommand/2.1/SystemSettingsDelete.png "System Settings Delete")

{{< /tab >}}
{{< /tabs >}}