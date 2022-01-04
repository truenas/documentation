---
title: "Systems"
weight: 10
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

![Systems Options Menu](/images/TrueCommand/2.1/SystemScreenSystemActionsMenu.png "Systems Options Menu")

+ **Edit**: <i class="material-icons" aria-hidden="true" title="Configure">edit</i>
+ **Users and Groups**: <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-account-group mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-account-group" data-mat-icon-namespace="mdi"></mat-icon>
+ **Update** : <i class="material-icons" aria-hidden="true" title="Update">update</i>
+ **Launch TrueNAS Interface**: <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-monitor-screenshot mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-monitor-screenshot" data-mat-icon-namespace="mdi"></mat-icon>
+ **iSCSI Volumes**: <mat-icon role="img" fontset="mdi" fonticon="mdi-database" class="mat-icon mdi mdi-database mat-icon-no-color" aria-hidden="true"></mat-icon>
+ **Services**: <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-toolbox-outline mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-toolbox-outline" data-mat-icon-namespace="mdi"></mat-icon>
+ **Delete**: <i class="material-icons" aria-hidden="true" title="Delete">delete</i>

{{< tabs "System Control Options" >}}
{{< tab "Edit" >}}
Clicking the edit button <i class="material-icons" aria-hidden="true" title="Configure">edit</i> opens a panel on the right of the screen that displays the system setting fields you can edit. After making your changes, click **Save Changes** to update the system with the new values entered. 
Click **Reset** to clear the form and reset values to the previously saved settings for the NAS.

![Systems Edit](/images/TrueCommand/2.1/SystemsEditSystem.png "Systems Edit")

{{< /tab >}}
{{< tab "Users and Groups" >}}
Click the **Users and Groups** button to display the list of users or groups for the selected system.

![Systems Users and Groups](/images/TrueCommand/2.1/SystemsUsersAndGroups.png "Systems Users and Groups")

{{< /tab >}}
{{< tab "Update" >}}
If the system has **Available** in the **Updates** column, it has system updates ready to apply.
Click the **Update** button <i class="material-icons" aria-hidden="true" title="Update">update</i> on the option menu to open a dialog window with information on the update. 
Check the **Confirm** box, then click **OK** to update the system.   
Click **Cancel** to close the window without updating.

![Systems Update](/images/TrueCommand/2.1/SystemsUpdateNAS.png "Systems Update")

{{< /tab >}}
{{< tab "Launch TrueNAS Interface" >}}
Use the **Launch TrueNAS Interface** button <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-monitor-screenshot mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-monitor-screenshot" data-mat-icon-namespace="mdi"></mat-icon> to open a new browser tab with the TrueNAS dashboard for the system selected on the **System** screen.  

{{< /tab >}}
{{< tab "iSCSI Volumes" >}}
If a system is configures with iSCSI volumes, click the <mat-icon role="img" fontset="mdi" fonticon="mdi-database" class="mat-icon mdi mdi-database mat-icon-no-color" aria-hidden="true"></mat-icon> **iSCSI Volumes** button to displays the iSCSI volumes page for the selected server.

![Systems iSCSI Volumes](/images/TrueCommand/2.1/SystemsiSCSIoption.png "Systems iSCSI Volumes")

{{< /tab >}}
{{< tab "Services" >}}
Click the **Services** button <mat-icon _ngcontent-igf-c221="" role="img" fontset="mdi" class="mat-icon notranslate mdi mdi-toolbox-outline mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-toolbox-outline" data-mat-icon-namespace="mdi"></mat-icon> to display the **Services** window with a list of services running or stopped for the selected system. 

The options for services are adding it to start on boot-up, stopping, or starting/restarting. 
Click the **START ON BOOT** checkbox to add the selection to the services started at boot-up. 
Click the stop icon <i class="fa fa-stop" aria-hidden="true" title="stop"></i> to stop a running service. 
Click the start/restart icon <i class="material-icons" aria-hidden="true" title="Refresh">refresh</i> to start a stopped service. 

![Systems Services](/images/TrueCommand/2.1/SystemsServicesOption.png "Systems Services")

{{< /tab >}}
{{< tab "Delete" >}}
Clicking the <i class="material-icons" aria-hidden="true" title="Delete">delete</i> button displays a popup window to confirm you want to delete a selected system.

![Systems Delete](/images/TrueCommand/2.0/SystemsDeleteSystem.png "Systems Delete")

{{< hint warning >}}
Deleting a system purges all collected data from the database.
{{< /hint >}}
{{< /tab >}}
{{< /tabs >}}

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

+ Edit System : <i class="material-icons" aria-hidden="true" title="Configure">edit</i>
+ Delete System : <i class="material-icons" aria-hidden="true" title="Delete">delete</i>

{{< tabs "Group Control Options" >}}
{{< tab "Edit" >}}
Clicking the edit button <i class="material-icons" aria-hidden="true" title="Configure">edit</i> opens a side bar menu.  You can make adjustments to the Group in this manner.  Add or remove systems from the group by using the **Add System** button or the remove <i class="material-icons" aria-hidden="true" title="Delete">delete</i> button.  Click **Save Changes** when finished with your changes to update the group to the new group settings.

![Groups Edit](/images/TrueCommand/2.1/SystemsGroupsEditGroup.png "Groups Edit")

{{< /tab >}}
{{< tab "Delete" >}}

Clicking the <i class="material-icons" aria-hidden="true" title="Delete">delete</i> button displayss a popup confirmation box to delete a group. 

![Groups Delete](/images/TrueCommand/2.0/SystemsGroupsDeleteGroup.png "Group Delete")
{{< /tab >}}
{{< /tabs >}}
