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
**Edit** opens the **[Edit iSCSI Target](#add-or-edit-target-screens)** screen.

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

The iSCSI shares screen opens showing **Targets** by default.

Five tabs show for each of the following screens: **Targets**, **Extents**, **Initiators**, **Portals**, and **Authorized Access**.
Each shows what is configured on the system, and provides access to the add and edit configuration screens for each functional area.

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

{{< include file="/static/includes/iSCSITargetDelete.md" >}}

#### Remove Extent Association Dialog

{{< include file="/static/includes/iSCSIRemoveExtentAssociation.md" >}}

#### Associate Dialog

{{< include file="/static/includes/iSCSITargetAssociate.md" >}}

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

#### Delete Extent Dialog

{{< include file="/static/includes/iSCSIDeleteExtent.md" >}}

#### Add or Edit Extent Screens

{{< include file="/static/includes/iSCSIAddEditExtentSettings.md" >}}

### Initiators Groups Screen
The **Initiators Groups** screen shows after clicking the **Initiator** tab. The table lists initiator groups configured on the system.

{{< trueimage src="/images/SCALE/Shares/iSCSIInitiatorsScreen.png" alt="iSCSI Initiator Screen" id="iSCSI Initiator Screen" >}}

**Add** opens the **Add Initiator** screen.
**Edit** opens a version of the **Add Initiator** screen with only two fields.
**Delete** opens a dialog to delete an initiator group.

#### Add Initiator Screen

{{< include file="/static/includes/iSCSIAddInitiatorSettings.md" >}}

#### Edit Initiator Screen

{{< include file="/static/includes/iSCSIEditInitiatorSettings.md" >}}

### Portals Screens

The configuration tabs **Portals** screen displays a list of portal ID groups on the TrueNAS system.

{{< trueimage src="/images/SCALE/Shares/iSCSIPortalsScreen.png" alt="iSCSI Portals Screen" id="iSCSI Portals Screen" >}}

**Delete** opens the **Delete** dialog for the selected portal ID. Click **Confirm** and then **Delete** to delete the selected portal.

**Add** opens the **Add Portal** screen. **Edit** opens the **Edit Portal** screen. Both screens have the same setting options.

#### Add or Edit Portals Screens

{{< include file="/static/includes/iSCSIAddEditPortalsScreens.md" >}}

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

{{< include file="/static/includes/iSCSIAddEditAuthorizedAccesssScreens.md" >}}
