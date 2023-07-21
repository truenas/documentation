---
title: "Block (iSCSI) Share Target Screens"
description: "Provides information on Block (iSCSI) Share Targets screens and settings."
weight: 40
aliases:
- /scale/scaleuireference/shares/iscsi/iscsisharesscreens/
- /scale/scaleuireference/shares/iscsi/
tags:
- scaleiscsi
- scaleshares
- tciscsi
---

{{< toc >}}

The **Sharing** screen opens after you click **Shares** on the main navigation panel.  

## Block (iSCSI) Shares Targets Widget

The **Block (iSCSI) Shares Targets** widget displays the widget toolbar with the status of the iSCSI service and two buttons, **Configure** and **Add**. After adding a block share, the widget displays shares below the toolbar.

![iSCSIBlockSharesWidget](/images/SCALE/22.12/iSCSIBlockSharesWidget.png "Block (iSCSI) Share Target Widget Toolbar") 

After adding an iSCSI target or share, the widget toolbar displays the **STOPPED** service status in red and includes the share below.

Before you add your first iSCSI block share, click anywhere on **Block (iSCSI) Shares Targets <span class="material-icons">launch</span>** to open the **Sharing > iSCSI** screen with the **Targets** iSCSI configuration tab displayed. 

The **No Targets** screen opens only when the system does not have an iSCSI target configured on the system.  

![iSCSINoTargetsScreen](/images/SCALE/22.12/iSCSINoTargetsScreen.png "iSCSI No Targets screen") 

**Add Targets** and the **Add** button on the toolbar opens the **[Add ISCSI Target](#add-and-edit-iscsi-target-screens)** screen. 

**Configure** on the widget toolbar opens the **Sharing > iSCSI** screen with the configuration tabs displayed. 
**[Target Global Configuration](#target-global-configuration-screen)** displays the first time you click **Configure**.

The <span class="material-icons">more_vert</span> on the toolbar displays options to turn the iSCSI service on or off. **Turn Off Service** displays if the service is running. Otherwise, **Turn On Service** displays. The **Config Service** option opens the configuration tabs **[Target Global Configuration](#target-global-configuration-screen)** screen.

If you have other share types added to your TrueNAS, the widget displays as a card occupying a quarter of the **Sharing** screen.

![SharingScreenWithiSCSIShareAdded](/images/SCALE/22.12/SharingScreenWithiSCSIShareAdded.png "Sharing Screen with iSCSI Share") 

**View Details** also opens the iSCSI configuration tabs. Each tab includes details on the block shares added to the system. 

### Basic Info Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Target Name** | Required. Enter a name using lowercase alphanumeric characters. Allowed characters are plus dot (.), dash (-), and colon (:). A name longer than 63 characters can prevent access to the block. See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). The base name is automatically prepended if the target name does not start with **iqn**. |
| **Target Alias** | Enter an optional user-friendly name. |
{{< /truetable >}}

### iSCSI Group Settings

To display the **iSCSI Group** settings, click **Add**.
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Portal Group ID** | Required. Select the number of the existing portal to use or leave it empty. |
| **Initiator Group ID** | Select the existing initiator group ID that has access to the target from the dropdown list of options. **None**, **1(init1)**, or **3(ALL initiators Allowed)**. |
| **Authentication Method** | Select the method from the dropdown list of options. **None**, **CHAP** or **Mutual Chap**. iSCSI supports multiple authentication methods that targets can use to discover valid devices. **None** allows anonymous discovery. If set to **None** you can leave **Discovery Authentication Group** set to **None** or empty. If set to **CHAP** or **Mutual CHAP** you must enter or create a new group in **Discovery Authentication Group**. |
| **Authentication Group Number** | Select the option from the dropdown list. This is the group ID created in **Authorized Access**. Required when the **Discovery Authentication Method** is set to **CHAP** or **Mutual CHAP**. Select **None** or the value representing the number of the existing authorized accesses. |
{{< /truetable >}}

## iSCSI Configuration Screens

The iSCSI configuration screens display seven tabs, one for each of the share configuration areas.  

![iSCSIManualAddPortalNoAuth](/images/SCALE/22.12/iSCSIManualAddPortalNoAuth.png "iSCSI Add Portal")

The **Add** button at the top of the **Sharing > iSCSI** screen works with the currently selected tab or screen. For example, if **Portals** is the current tab/screen, the **Add** button opens the **Add Portal** screen.

The <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> on configure tab screens with list views display the **Edit** and **Delete** options. **Edit** opens the **Edit** screen for the selected tab screen. For example, when on the **Portals** tab/screen, the **Sharing > iSCSI > Portals > Edit** screen opens.

The **Delete** option opens the delete dialog for the screen currently selected.

The **Add** and **Edit** screens display the same settings.

### Target Global Configuration Screen

The **Target Global Configuration** displays configuration settings that apply to all iSCSI shares. 
There are no add, edit, or delete options for this screen.
It opens after you click **Configure** on the **Block (iSCSI) Share Target** widget on the **Sharing** screen. It also opens when you click **Config Service**.

The **System Settings > Services > iSCSI** displays the **Target Global Configuration** and all the other configuration screens after you click the iSCSI **Config** option on the **Services** screen.

![iSCSIManualTargetGlobalConfig](/images/SCALE/22.12/iSCSIManualTargetGlobalConfig.png "iSCSI Target Global Configuration")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Base Name** | Enter a name using lowercase alphanumeric characters. Allowed characters include the dot (.), dash (-), and colon (:). See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). |
| **ISNS Servers** | Enter host names or IP addresses of the ISNS servers to register with the iSCSI targets and portals of the system. Separate entries by pressing <kbd>Enter</kbd>. |
| **Pool Available Space Threshold (%)** | Enters a value for the threshold percentage that generates an alert when the pool has this percent space remaining. This is typically configured at the pool level when using zvols or at the extent level for both file and device-based extents. |
| **iSCSI listen port** | The TCP port number that the controller uses to listen for iSCSI logins from host iSCSI initiators. |
{{< /truetable >}}

### Portal Screens

The configuration tabs **Portals** screen displays a list of portal ID groups on the TrueNAS system. 

![SharingiSCSIPortalsScreen](/images/SCALE/22.02/SharingiSCSIPortalsScreen.png "iSCSI Portals Screen") 

The <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the portal displays the **Edit** and **Delete** options. 
**Delete** opens the **Delete** dialog for the selected portal ID. Click **Confirm** and then **Delete** to delete the selected portal.

**Add** opens the **Add Portal** screen. **Edit** opens the **Edit Portal** screen. Both screens have the same setting options.

![iSCSIManualAddPortalNoAuth](/images/SCALE/22.12/iSCSIManualAddPortalNoAuth.png "Sharing iSCSI Portals Add Screen") 

#### Basic Info Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Description** | Enter an optional description. Portals are automatically assigned a numeric group. |
{{< /truetable >}}

#### Authentication Method and Group Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Discovery Authentication Method** | Select the discovery method you want to use for authentication from the dropdown list. iSCSI supports multiple authentication methods that targets can use to discover valid devices. **None** allows anonymous discovery. If set to **None**, you can leave **Discovery Authentication Group** set to **None** or empty. If set to **CHAP** or **Mutual CHAP**, you must enter or create a new group in **Discovery Authentication Group**. |
| **Discovery Authentication Group** | Select the discovery authentication group you want to use from the dropdown list. This is the group ID created in **Authorized Access**. Required when the **Discovery Authentication Method** is **CHAP** or **Mutual CHAP**. Select **None** or **Create New**. **Create New** displays [additional setting options](#create-new-discovery-authentication-group-settings). |
{{< /truetable >}}

#### IP Address Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **IP Address** | Select the IP addresses the portal listens to. Click **Add** to add IP addresses with a different network port. **0.0.0.0** listens on all IPv4 addresses, and **::** listens on all IPv6 addresses. |
| **Port** | TCP port used to access the iSCSI target. The default is **3260**. |
| **Add** | Adds another IP address row. |
{{< /truetable >}}

### Initiators Groups Screen

The **Initiators Groups** screen display settings to create new authorized access client groups or edit existing ones in the list.

![SharingiSCSIInitiatorsGroupsScreen](/images/SCALE/22.12/SharingiSCSIInitiatorsGroupsScreen.png "iSCSI Initiators Groups Screen")

The <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the initiator group displays the **Edit** and **Delete** options. 
**Delete** opens the **Delete** dialog for the selected group ID. Click **Confirm** and then **Delete** to delete the selected portal.

**Add** opens the **Sharing > iSCSI > Initiators > Add** screen. **Edit** opens the **Sharing > iSCSI > Initiators > Edit** screen. Both screens have the same setting options.

![iSCSIManualAddInitiators](/images/SCALE/22.12/iSCSIManualAddInitiators.png "Sharing iSCSI Initiators Add Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Allow All Initiators** | Select to allows all initiators. |
| **Allowed Initiators (IQN)** | Enter initiators allowed access to this system. Enter an [iSCSI Qualified Name (IQN)](https://tools.ietf.org/html/rfc3720#section-3.2.6) and click **+** to add it to the list. Example: *iqn.1994-09.org.freebsd:freenas.local*. |
| **Description** | Enter any notes about the initiators. |
{{< /truetable >}}

### Authorized Access Screen

The **Authorized Access** screen displays settings to create new authorized access networks or edit existing ones in the list. 

If you have not set up authorized access yet, the **No Authorized Access** screen displays with the **Add Authorized Access** button in the center of the screen. **Add Authorized Access** or **Add** at the top of the screen opens the **Add Authorized Access**  screen. 

![iSCSIManualNoAuthAccess](/images/SCALE/22.12/iSCSIManualNoAuthAccess.png "iSCSI No Authorized Access")

After adding authorized access to the system, the **Authorized Access** screen displays a list of users.

![SharingiSCSIAuthorizedAccessScreen](/images/SCALE/22.02/SharingiSCSIAuthorizedAccessScreen.png "iSCSI Authorized Access Screen")

**Add** opens the **Add Authorized Access** screen. 

The <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to each entry displays two options, **Edit** and **Delete**. **Edit** opens the **Edit Authorized Access** screen, and **Delete** opens a dialog to delete the authorized access for the selected user. 
The **Add** and **Edit** screens display the same settings.

![iSCSIManualAddAuthAccess](/images/SCALE/22.12/iSCSIManualAddAuthAccess.png "iSCSI Add Authorized Access Screen")

#### Group Settings

{{< truetable >}}
| Setting | Description |
|---------|-------|
| **Group ID** | Enter a number. This allows configuring different groups with different authentication profiles. Example: all users with a group ID of *1* inherit the authentication profile associated with *Group 1*. |
{{< /truetable >}}

#### User Settings

{{< truetable >}}
| Setting | Description |
|---------|-------|
| **User** | User account to create CHAP authentication with the user on the remote system. Many initiators use the initiator name as the user name. |
| **Secret** | Enter the user password. Secret must be at least 12 and no more than 16 characters long. The screen displays a "password does not match" error until you enter the same password in **Secret (Confirm)**.  |
| **Secret (Confirm)** | Enter the same password to confirm the user password. |
{{< /truetable >}}

#### Peer User Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Peer User** | Optional. Enter only when configuring mutual CHAP. Usually the same value as **User**. |
| **Peer Secret** | Enter the mutual secret password. Required if entering a **Peer User**. Must be a different password than the password in **Secret**. |
| **Peer Secret (Confirm)** | Enter the same password to confirm the mutual secret password. |
{{< /truetable >}}

### Targets Screen

The **Targets** screen displays settings to create new TrueNAS storage resources or edit existing ones in the list.

![SharingiSCSITargetsScreen](/images/SCALE/22.02/SharingiSCSITargetsScreen.png "iSCSI Targets")

**Add** opens the **Add iSCSI Targets** screen. 

The <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to each entry displays two options, **Edit** and **Delete**. **Edit** opens the **Edit iSCSI Targets** screen, and **Delete** opens a dialog to delete the select target. 
The **Add iSCSI Targets** and **Edit iSCSI Targets** screens display the same settings.

#### Add and Edit iSCSI Target Screens

The **Add iSCSI Target** and **Edit iSCSI Target** screens display the same settings, but the current settings populate the **Edit iSCSI Target** screen settings for the selected share.

To access the **Add iSCSI Target** screen from the **Sharing > iSCSI** screen, while on the **Targets** tab, click **Add** at the top of the screen. 
To access the **Edit iSCSI Target** screen from the **Sharing > iSCSI** screen, while on the **Targets** tab, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the share and then click **Edit**.

![iSCSIManualAddTargets](/images/SCALE/22.12/iSCSIManualAddTargets.png "Add iSCSI Target Screen")

### Extents Screen

The **Extents** screen displays settings to create new shared storage units or edit existing ones in the list.

![SharingiSCSIExtentsScreen](/images/SCALE/22.02/SharingiSCSIExtentsScreen.png "iSCSI Extents Screen")

**Add** opens the **Add Extent** screen. 

The <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to each entry opens two options, **Edit** and **Delete**. **Edit** opens the **Edit Extent** screen, and **Delete** opens a dialog to delete the extents for the selected user. 
The **Add** and **Edit** screens display the same settings.

![iSCSIManualAddExtentDevice](/images/SCALE/22.12/iSCSIManualAddExtentDevice.png "iSCSI Extents Screen Device")

#### Basic Info Settings

{{< truetable >}}
| Setting | Description |
|---------|-------|
| **Name** | Enter a name for the extent. An **Extent** where the size is not **0**, cannot be an existing file within the pool or dataset. |
| **Description** | Enter any notes about this extent. |
| **Enabled** | Select to enable the iSCSI extent. |
{{< /truetable >}}

#### Type Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Extent Type** | Select the extent (zvol) option from the dropdown list. **Device** provides virtual storage access to zvols, zvol snapshots, or physical devices. **File** provides virtual storage access to a single file. **Device** provides virtual storage access to zvols, zvol snapshots, or physical devices. **File** provides virtual storage access to a single file. |
| **Device** | Required. Displays if **Extent Type** is set to **Device**. Select the unformatted disk, controller, or zvol snapshot. |
| **Path to the Extent** | Displays when **Extent Type** is set to **File**. Click the <span class="material-icons">play_arrow</span> to browse an existing file. Create a new file by browsing to a dataset and appending /\{filename.ext\} to the path. Users cannot create extents inside a jail root directory. |
| **Filesize** | Only appears if **File** is selected. Entering **0** uses the actual file size and requires that the file already exists. Otherwise, specify the file size for the new file. |
| **Logical Block Size** | Enter a new value or leave it at the default of **512** unless the initiator requires a different block size. |
| **Disable Physical Block Size Reporting** | Select if the initiator does not support physical block size values over 4K (MS SQL). |
{{< /truetable >}}

#### Compatibility Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable TPC** | Select to allow an initiator to bypass normal access control and access any scannable target. This allows [xcopy](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/cc771254(v=ws.11)) operations that are otherwise blocked by access control. |
| **Xen initiator compat mode** | Select when using Xen as the iSCSI initiator. |
| **LUN RPM** | Select the option from the dropdown list. Options are **UNKNOWN**, **5400**, **7200**, **10000** or **15000**. Do *not* change this setting when using Windows as the initiator. Only change LUN RPM in large environments where the number of systems using a specific RPM is needed for accurate reporting statistics. |
| **Read-only** | Select to prevent the initiator from initializing this LUN. |
{{< /truetable >}}

### Associated Targets Screen

The **Associated Targets** screen displays settings to create new associated TrueNAS storage resources or edit existing ones in the list.

![SharingiSCSIAssociatedTargetsScreen](/images/SCALE/22.02/SharingiSCSIAssociatedTargetsScreen.png "iSCSI Associated Targets Screen")

**Add** opens the **Add Associated Target** screen. 

The <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to each entry displays two options, **Edit** and **Delete**. **Edit** opens the **Edit Associated Target** screen, and **Delete** opens a dialog to delete the associated targets for the selected user. 
The **Add** and **Edit** screens display the same settings.

![iSCSIManualAddAssocAuthTargets](/images/SCALE/22.12/iSCSIManualAddAssocAuthTargets.png "iSCSI Associated Targets Add") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Target** | Required. Select an existing target. |
| **LUN ID** | Select the value or enter a value between 0 and 1023. Some initiators expect a value below 256. Leave this field blank to automatically assign the next available ID. |
| **Extent** | Required. Select an existing extent. |
{{< /truetable >}}

{{< taglist tag="scaleiscsi" limit="10" >}}
