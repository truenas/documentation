---
title: "Block (iSCSI) Share Target Screens"
description: "Provides information on Block (iSCSI) Share Targets screens and settings."
weight: 40
aliases:
- /scale/scaleuireference/shares/iscsi/iscsisharesscreens/
- /scale/scaleuireference/shares/iscsi/
- /scaleuireference/systemsettings/services/iscsiservicescreen/
- /scale/scaleclireference/sharing/cliiscsi/
tags:
- iscsi
- shares
- iscsi
---

The **Sharing** screen opens after you click **Shares** on the main navigation panel.  

## Block (iSCSI) Shares Targets Widget

The **Block (iSCSI) Shares Targets** widget header shows the status of the iSCSI service, the **Wizard** button, and the <span class="material-icons">more_vert</span> icon button. 
**Wizard** opens the **Wizard iSCSI** wizard on the **Target** screen. See [Target Screens](#targets-screens) below.

{{< trueimage src="/images/SCALE/Shares/iSCSIBlockSharesWidget.png" alt="Block (iSCSI) Share Target Widget Toolbar" id="Block (iSCSI) Share Target Widget Toolbar" >}}

The <span class="material-icons">more_vert</span> shows two options: a toggle for **Turn On Service**/**Turn Off Service** and **Config Service**.
**Config Service** opens the ***[iSCSI Global Configuration](#target-global-configuration-screen)** screen. 

The **Start iSCSI Service** dialog shows after adding the first share. It includes an **Enable this service to start automatically** toggle and two buttons: **Start** and **No**.
**Start** starts the service and changes the status on the iSCSI widget toolbar from **STOPPED** (in red)  to **RUNNING** (in blue).

{{< trueimage src="/images/SCALE/Shares/StartiCSIServicedialog.png" alt="Start iSCSI Service Dialog" id="Start iSCSI Service Dialog" >}}

Click anywhere on **Block (iSCSI) Shares Targets <span class="material-icons">launch</span>** header to open the **Sharing > iSCSI > Targets** screen.

{{< trueimage src="/images/SCALE/Shares/iSCSITargetsScreen.png" alt="iSCSI Target Screen" id="iSCSI Target Screen" >}}

**Add** opens the **[Add ISCSI Target](#add-and-edit-iscsi-target-screens)** screen.
**Edit** opens the **[Edit iSCSI Target]()** screen.

## iSCSI Wizard Screens
The **Wizard** button opens the iSCSI wizard on the **Targets** screen. The wizard has three screens:

* **Target**
* **Extent**
* **Protocol Options**

The individual iSCSI screens are accessed by clicking on the iSCSI widget header.
The **Targets** screen opens by default.
For more information on iSCSI screens and settings, see [**Shares iSCSI Screens**](#shares-iscsi-screens) below.

**Next** advances to the next wizard screen. **Back** shows the previous wizard screen. **Save** creates the iSCSI share.

### iSCSI Wizard Target Screen
The **iSCSI Wizard** opens showing the **Target** screen.

{{< trueimage src="/images/SCALE/Shares/iSCSIWizardTargetScreen.png" alt="iSCSI Wizard Target Screen" id="iSCSI Wizard Target Screen" >}}

The **Target** dropdown shows the default **Create New**. Selecting **Create New** creates a share, or selecting an existing target from the dropdown list allows you to edit it.
### iSCSI Wizard Extent Screen

{{< include file="/static/includes/iSCSIWizardExtentScreen.md" >}}

### iSCSI Wizard Protocol Options Screen
The iSCSI wizard **Protocol Options** screen shows settings to add a portal and initiators. If a portal does not exist, create one by selecting **Create New**.

{{< trueimage src="/images/SCALE/Shares/iSCSIWizardProtocolOptionsCreateNewPortal.png" alt="iSCSI Wizard Protocol Options Screen Portal Settings" id="iSCSI Wizard Protocol Options Screen Portal Settings" >}}

{{< expand "Wizard Protocol Options Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Portal** | Select an exiting portal from the dropdown list or select **Create New** to show the **IP Address** field and **Add** button. **Add** shows another **IP Address** field each time it is clicked to allow adding multiple portals. |
| **IP Address**  | Shows several options for setting up a portal. Select from these options:<br><li>**0.0.0.0** - Select to listen on all IPv4 addresses.<br><li>**::** - Select to listen on all IPv6 addresses. <br><li>TrueNAS server IP address - Select to use the IP address assigned to the primary network interface for the TrueNAS server being configured.</li>|
| **Initiators** | Leave blank to allow all or enter a list of initiator host names. Separate each host name by pressing <kbd>Enter</kbd> after entering each host name. Initiators send commands over the TCP/IP network to the target and receive responses from the target. |
{{< /truetable >}}
{{< /expand >}}

## Shares iSCSI Screens

Clicking on the iSCSI widget header opens the iSCSI share screens.

**Global Target Configuration** opens the iSCSI service configuration screen.

**Wizard** opens the iSCSI wizard configuration screens.

The iSCSI shares screens opens showing **Targets** by default.
It shows five tabs: *Targets**, **Extents**, **Initiators**, **Portals**, and **Authorized Access**. Each provides access to the iSCSI configuration information, and access to the add and edit configuration screens for each functional area.

### iSCSI Global Configuration Screen

{{< include file="/static/includes/iSCSIGlobalConfigurationScreen.md" >}}

### Targets Screens
The **iSCSI Targets** screen shows a list of targets configured in the system and provides access to the add and edit configuration screens. Select a target to see details about that item.

{{< trueimage src="/images/SCALE/Shares/iSCSITargetsScreen.png" alt="iSCSI Targets Screen" id="iSCSI Wizard Targets Screen" >}}

**Add** and **Edit** open the configuration screen for the selected target.
**Delete** opens a dialog with delete options.

#### Details for Target
The screen shows three widgets on the right side of the screen for the selected target: **iSCSI Authorized Networks**, **Extents**, and **iSCSI Connections**.

**iSCSI Authorized Networks** shows a list of authorized networks configured when you create the target. Edit the target to add networks to an existing target. 

**Extents** shows a list of LUNs, and includes two options: [**Associate** button](#associate-dialog) and a [**Remove Extent Association**](#remove-extent-association) <span class="material-icons">link_off</span> icon.

**iSCSI Connections** shows a list of the connections configured on the system.

#### Delete Target Dialog
**Delete** opens a confiration dialog with two options: **Delete *1* associated extent** and **Force Delete**. Select the options to include in the delete operation.

{{< trueimage src="/images/SCALE/Shares/DeleteiSCSITargetdialog.png" alt="iSCSI Target Delete Dialog" id="iSCSI Target Delete Dialog" >}}

**Delete *1* associated extent** shows the number of associated extend for the selected target.

**Force Delete** deletes the target even if the share is still in use.

**Cancel** closes the dialog without deleting.
**Delete** deletes the target but does not delete the iSCSI volumes associated with the extents.

#### Remove Extent Association Dialog
The **Remove Extent Association** <span class="material-icons">link_off</span> icon opens the **Remove extent association** dialog that shows the LUN link association and two buttons: **Cancel** and **Remove**. Removing the association activates the **Associate** button on the widget.

{{< trueimage src="/images/SCALE/Shares/RemoveExtentAssociationDialog.png" alt="Remove Extent Association Dialog" id="Remove Extent Association Dialog" >}}

#### Associate Dialog
The **Associate** button is inactive when the extent is associated with a LUN. Removing the association activates the button. Clicking the button opens the **Associate *target*** dialog. 

{{< trueimage src="/images/SCALE/Shares/ISCSIExtentAssociateDialog.png" alt="Extent Associate Dialog" id="Extent Associate Dialog" >}}

Enter a LUN ID between 0 and 1023 into **LUN ID**. SCALE requires at least one LUN 0.
Some initiators expect a value between 0 and 256. Leaving this field blank automatically assigns the next available ID.

Select the target on the **Extent** dropdown list.

#### Add or Edit Target Screens
The **Add Target** and **Edit Target** screens show the same configuration settings.

{{< columns >}}
{{< trueimage src="/images/SCALE/Shares/AddiSCSITargetScreen.png" alt="Add iSCSI Target Screen" id="Add iSCSI Target Screen" >}}
<--->
{{< trueimage src="/images/SCALE/Shares/EditISCSITargetScreen.png" alt="Edit iSCSI Target Screen" id="Edit iSCSI Target Screen" >}}
{{< /columns >}}

{{< expand "Target Basic Info Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Target Name** | Enter the name for the target using up to 64 lowercase alphanumeric and special characters. Allowed characters are dot (.), dash (-), and colon (:). A name longer than 64 characters is not allowed. See the “Constructing iSCSI names using the iqn.format” section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). The base name (from Target Global Configuration) is automatically prepended if the target name does not start with iqn. |
| **Target Alias** | Enter an optional user-friendly name. |
| **Authorized Networks** | Authorized networks allow communication between initiators (client computers) and iSCSI targets (storage devices) over the IP network. **Add** shows the **Network** field. |
| **Network** | Shows after clicking **Add** to the right of **Authorized Networks**. Enter the IP address for the network and select the netmask (CIDR) from the dropdown list. Adds the network address to the authorized network list. |
{{< /truetable >}}
{{< /expand >}}

{{< include file="/static/includes/TargetiSCSIGroupSettings.md" >}}

### Extents Screens
The **Extents** screen shows a table listing extents configured on the system. Extents are shared storage units.

{{< trueimage src="/images/SCALE/Shares/iSCSIExtentsScreen.png" alt="iSCSI Extents Screen" id="iSCSI Extents Screen" >}}

**Add** and **Edit** open the configuration screen for the selected target.
**Delete** opens a dialog with delete options.

#### Delete Extend Dialog
The **Delete iSCSI Extent *name*** deletes the specified extend. The name of the extent shows in the dialog title.

{{< trueimage src="/images/SCALE/Shares/DelteExtentDialog.png" alt="Delete iSCSI Extent Dialog" id="Deleted iSCSI Extent Dialog" >}}

**Force** allows deleting the extend even if the share is active.

**Delete** deletes the extent and closes the dialog. **Cancel** closes the dialog without deleting the extent.

#### Add or Edit Extent Screens
The **Add Extent** and **Edit Extent** screens show the same configuration settings.

{{< columns >}}
{{< trueimage src="/images/SCALE/Shares/AddExtentScreenDeviceType.png" alt="Add iSCSI Extent Device Type" id="Add iSCSI Extent Device Type" >}}
<--->
{{< trueimage src="/images/SCALE/Shares/AddExtentScreenFileType.png" alt="Edit iSCSI Extent File Type" id="Edit iSCSI Extent File type" >}}
{{< /columns >}}

{{< expand "Extent Basic Info Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Enter a name for the extent. An **Extent** where the size is not **0**, cannot be an existing file within the pool or dataset. |
| **Description** | Enter any notes about this extent. |
| **Enabled** | Select to enable the iSCSI extent. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Extent Compatibility Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable TCP** | Select to allow an initiator to bypass normal access control and access any scannable target. This allows [xcopy](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/cc771254(v=ws.11)) operations that are otherwise blocked by access control. |
| **Xen initiator compat mode** | Select when using Xen as the iSCSI initiator. |
| **LUN RPM** | Select the option from the dropdown list. Options are **UNKNOWN**, **SSD**, **5400**, **7200**, **10000** or **15000**. Do *not* change this setting when using Windows as the initiator. Only change LUN RPM in large environments where the number of systems using a specific RPM is needed for accurate reporting statistics. |
| **Read-only** | Select to prevent the initiator from initializing this LUN. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Extent Type Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Extent Type** | Provides virtual storage access to zvols, zvol snapshots, or physical devices. Select the extent (zvol) option from the dropdown list. Dropdown options:<br><li>**Device** - Select to specify a device (default option). **Device** provides virtual storage access to zvols, zvol snapshots, or physical devices. Shows the **Device** field.<br><li>**File** - Select to specify a path to a file. **File** provides virtual storage access to a single file. Shows the **Path to the Extent** and **Filesize** fields. </li> |
| **Device** | Shows after specifying **Device** in **Extent Type**. Select the unused zvol or zvol snapshot from the dropdown list. |
| **Path to the Extent** | Enter or browse to select the path to an existing file. Enter a slash (/) followed by a file name to create a file in a dataset and append the file name to the path (/*filename.ext*). |
| **Filesize** | Enter 0 to use the actual file size of an existing file, or specify the file size for the new file added in **Path to the Extent**. |
| **Logical Block Size** | Shows the default **512** size. If the initiator requires a different block size, enter the numerical value. |
| **Disable Physical Block Size Reporting** | Select if the initiator does not support physical block size values over 4K (MS SQL). |
{{< /truetable >}}
{{< /expand >}}

### Initiators Groups Screen
The **Initiators Groups** screen shows after clicking the **Initiator** tab. It shows a table listing initiator groups configured on the system.

{{< trueimage src="/images/SCALE/Shares/iSCSIInitiatorsScreen.png" alt="iSCSI Initiator Screen" id="iSCSI Initiator Screen" >}}

**Add** opens the **Add Initiator** screen.
**Edit** opens a version of the **Add Initiator** screen with only two fields.
**Delete** opens a dialog to delete an initiator group.

#### Add Initiator Screen
**Add** opens the **Add Initiator** screen showing the settings to create new authorized access client groups or edit existing ones in the list.

{{< trueimage src="/images/SCALE/Shares/AddInitiatorScreen.png" alt="Add Initiator Screen" id="Add Initiator Screen" >}}

{{< expand "Add Initiator Group Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Allow All Initiators** | Select to allows all initiators. |
| **Allowed Initiators (IQN)** | Enter initiators allowed access to this system. Enter an [iSCSI Qualified Name (IQN)](https://tools.ietf.org/html/rfc3720#section-3.2.6) and click **+** to add it to the list. Example: *iqn.1994-09.org.freebsd:freenas.local*. |
| **Description** | Enter any notes about the initiators. |
| **Connected Initiators** | Shows the list of connected initiators on the system. |
| **Allowed Initiators** | Shows the list of allowed initiators on the system. |
| **Refresh** | Updates the screen. |
{{< /truetable >}}
{{< /expand >}}

#### Edit Initiator Screen
**Edit** opens the **Add Initiator** edit screen showing two options: **Allow All Initiators** and **Description**.
**Save** saves changes and closes the screen. **Cancel** closes the screen without saving changes.

{{< trueimage src="/images/SCALE/Shares/EditInitiatorScreen.png" alt="Edit Initiator Screen" id="Edit Initiator Screen" >}}

### Portals Screens
The configuration tabs **Portals** screen displays a list of portal ID groups on the TrueNAS system.

{{< trueimage src="/images/SCALE/Shares/iSCSIPortalsScreen.png" alt="iSCSI Portals Screen" id="iSCSI Portals Screen" >}}

**Delete** opens the **Delete** dialog for the selected portal ID. Click **Confirm** and then **Delete** to delete the selected portal.

**Add** opens the **Add Portal** screen. **Edit** opens the **Edit Portal** screen. Both screens have the same setting options.

#### Add or Edit Target Screens
The **Add Target** and **Edit Target** screens show the same configuration settings.

{{< columns >}}
{{< trueimage src="/images/SCALE/Shares/AddPortalScreen.png" alt="Add Portal Screen" id="Add Portal Screen" >}}
<--->
{{< trueimage src="/images/SCALE/Shares/EditPortalScreen.png" alt="Edit Portal Screen" id="Edit Portal Screen" >}}
{{< /columns >}}

{{< expand "Portal Basic Info Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Description** | Enter an optional description. Portals are automatically assigned a numeric group. |
| **Add Listen** | Click **Add** to show the **IP Address** field where you add the IP address and netmask (CIDR) for the portal. |
| **IP Address**  | Shows several options for setting up a portal. Select from these options:<br><li>**0.0.0.0** - Select to listen on all IPv4 addresses.<br><li>**::** - Select to listen on all IPv6 addresses. <br><li>TrueNAS server IP address - Select to use the IPv4 address assigned to the primary network interface for the TrueNAS server being configured.<br><li>IPv6 address assigned to the system.</li> |
{{< /truetable >}}
{{< /expand >}}

### Authorized Access Screens
The **Authorized Access** screen displays settings to create new authorized access networks or edit existing ones in the list.

If you have not set up authorized access yet, the **No Authorized Access** screen displays with the **Add Authorized Access** button in the center of the screen. **Add Authorized Access** or **Add** at the top of the screen opens the **Add Authorized Access** screen.

{{< trueimage src="/images/SCALE/Shares/iSCSAuthorizedAccessScreen.png" alt="iSCSI Authorized Access Screen" id="iSCSI Authorized Access Screen" >}}

After adding authorized access to the system, the **Authorized Access** screen displays a list of users.
**Delete** opens the **Delete** dialog for the selected portal ID. **Confirm** enables the delete option. 
**Delete** deletes the selected portal and closes the dialog.

**Add** opens the **Add Authorized Access** screen.

**Edit** opens the **Edit Authorized Access** screen. **Delete** opens a dialog to delete the authorized access for the selected user.

The **Add** and **Edit** screens display the same settings. Both screens have the same setting options.

#### Add or Edit Authorized Access Screens
The **Add Target** and **Edit Target** screens show the same configuration settings.

{{< trueimage src="/images/SCALE/Shares/AddAuthorizedAccessScreen.png" alt="Add Authorized Access Screen" id="Add Authorized Access Screen" >}}

{{< expand "Authentication Method and Group Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Group ID** | Enter a number. Allows configuring different groups with different authentication profiles. For example, all users with a group ID of *1* inherit the authentication profile associated with *Group 1*. |
| **Discover Authentication** | Select the discovery method for authentication from the dropdown list. iSCSI supports multiple authentication methods that targets use to discover valid devices. Options are: <br><li>**None** - Select to allow anonymous discovery. When set to **None**, you can leave an iSCSI Group **Authentication Method** set to **None** or empty.<br><li>**CHAP** - Select to use CHAP as the authentication method. If set to **CHAP** enter or create a new group on the **Add iSCSI Target**screen. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "User Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User** | User account to create CHAP authentication with the user on the remote system. Many initiators use the initiator name as the user name. |
| **Secret** | Enter the user password. Secret must be at least 12 and no more than 16 characters long. The screen displays a **Password does not match** error until you enter the same password in **Secret (Confirm)**. |
| **Secret (Confirm)** | Enter the same password to confirm the user password. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Peer Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Peer User** | (Optional) Enter only when configuring mutual CHAP. Usually the same value as **User**. |
| **Peer Secret** | Enter the mutual secret password. Required if entering a **Peer User**. Peer user must use a different password than the password in **Secret**. |
| **Peer Secret (Confirm)** | Enter the same password to confirm the mutual secret password. |
{{< /truetable >}}
{{< /expand >}}
