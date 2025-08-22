---
title: "Block (iSCSI) Share Target Screens"
description: "Provides information on Block (iSCSI) Share Targets screens and settings."
weight: 40
tags:
- iscsi
- shares
- iscsi
---


## Block (iSCSI) Shares Targets Widget

If you have not added iSCSI shares to the system, the iSCSI widget shows text stating general information about the block (iSCSI) share targets until a share is added.

{{< trueimage src="/images/SCALE/Shares/iSCSIBlockSharesWidgetNoShares.png" alt="Block (iSCSI) Share Target Widget without Shares" id="Block (iSCSI) Share Target Widget without Shares" >}}

After adding a share, the widget lists them in a table.

{{< trueimage src="/images/SCALE/Shares/iSCSIBlockSharesWidget.png" alt="Block (iSCSI) Share Target Widget without Shares" id="Block (iSCSI) Share Target Widget without Shares" >}}

The **Block (iSCSI) Shares Targets** widget header shows the status of the iSCSI service as  **STOPPED** (red) or **RUNNING** (green).
Before adding the first share, the **STOPPED** status displays in the default color.
The header includes the **Wizard** button and the <span class="material-icons">more_vert</span> dropdown list of iSCSI share and service options. 
The header is a link that opens the [**iSCSI**]() screen.

**Wizard** opens the **Wizard iSCSI** wizard on the **Target** screen. See [Target Screens](#targets-screens) below.

The <span class="material-icons">more_vert</span> dropdown list shows two options available to iSCSI shares and the iSCSI service in general:
* **Turn Off/ON Service** toggles to **Turn Off Service** when the iSCSI service is enabled, and to **Turn On Service** when the iSCSI service is disabled.
* **Config Service** opens the **[iSCSI Global Configuration](#target-global-configuration-screen)** screen.

The <span class="material-icons">more_vert</span> dropdown list for each target shows two options:
* **<span class="material-icons">edit</span> Edit** opens the [**Edit iSCSI Target** screen](#add-or-edit-target-screens).
* **<span class="material-icons">delete</span> Delete** opens the [**Delete** dialog](#delete-target-dialog).

### Start iSCSI Service Dialog

The **Start iSCSI Service** dialog shows after adding the first share.
It includes an **Enable this service to start automatically** toggle and two buttons: **Start** and **No**.
**Start** starts the service and changes the status on the iSCSI widget toolbar from **STOPPED** (in red)  to **RUNNING** (in blue).

{{< trueimage src="/images/SCALE/Shares/StartiCSIServicedialog.png" alt="Start iSCSI Service Dialog" id="Start iSCSI Service Dialog" >}}

### Delete Target Dialog

{{< include file="/static/includes/iSCSITargetDelete.md" >}}

## iSCSI Global Configuration Screen

{{< include file="/static/includes/iSCSIGlobalConfigurationScreen.md" >}}

## iSCSI Wizard Screens

The **Wizard** button opens the iSCSI wizard on the **Targets** screen. The wizard has three screens:

* [**Target**](#iscsi-wizard-target-screen)
* [**Extent**](#iscsi-wizard-extent-screen)
* [**Protocol Options**](#iscsi-wizard-protocol-options-screen)

The wizard steps you through creating an iSCSI target, adding the extent for the target, including setting up the storage (device or file) it uses, and setting up the portal and initiators for the target.

{{< include file="/static/include/FibreChannelEnterpriseScreen.md" >}}

Alternatively, you can use the [individual iSCSI screens](#iscsi-screens), accessible by clicking on the iSCSI widget header, to manually configure targets, extents, portals, etc.
The **Targets** screen opens by default.
For more information on iSCSI screens and settings, see [**iSCSI Screens**](#iscsi-screens) below.

**Next** advances to the next wizard screen. **Back** shows the previous wizard screen. **Save** creates the iSCSI share.

### iSCSI Wizard Target Screen

The **iSCSI Wizard** opens and shows the **Target** screen.

{{< trueimage src="/images/SCALE/Shares/iSCSIWizardTargetScreen.png" alt="iSCSI Wizard Target Screen" id="iSCSI Wizard Target Screen" >}}

The **Target** dropdown shows **Create New** and any other existing targets on the system. 
**Create New** creates a target.
Selecting an existing target from the dropdown list allows you to edit it, but we recommend using the [**iSCSI Target**](#iscsi-target-screen) screen to edit an existing target rather than using the wizard screens.

### iSCSI Wizard Extent Screen

{{< include file="/static/includes/iSCSIWizardExtentScreen.md" >}}

### iSCSI Wizard Protocol Options Screen

The iSCSI wizard **Protocol Options** screen shows settings to add a portal and initiators.
**Create New** shows settings to add a new portal if one does not exist.

{{< trueimage src="/images/SCALE/Shares/iSCSIWizardProtocolOptionsCreateNewPortal.png" alt="iSCSI Wizard Protocol Options Screen Settings" id="iSCSI Wizard Protocol Options Screen Settings" >}}

{{< expand "Wizard Protocol Options Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Portal** | Sets the portal for the target and extent. Shows a dropdown list with the **Create New** option and lists existing portals on the system available for the target and extent. Selecting **Create New** shows the **IP Address** field and **Add** button. **Add** shows another **IP Address** field each time it is clicked to allow adding multiple portals. |
| **IP Address** | Sets the network address used for the portal. The dropdown list shows several options for setting up a portal: <br><li>**0.0.0.0** - Listens on all IPv4 addresses. <br><li>**::** - Listens on all IPv6 addresses. <br><li>TrueNAS server IP address - Uses the IP address assigned to the primary network interface for the TrueNAS server being configured.</li>|
| **Initiators** | Initiators send commands over the TCP/IP network to the target and receive responses from the target. Leave blank to allow all (recommended) or enter a list of initiator host names (to limit access). Separate each host name by pressing <kbd>Enter</kbd> after entering each host name. |
{{< /truetable >}}
{{< /expand >}}

## iSCSI Screens

The **iSCSI** screen provides access to manage targets, and the extents, initiators (clients), portals, and authorized access for the targets.
The **iSCSI** screen shows five tabs: **Targets**, **Extents**, **Initiators**, **Portals**, and **Autorized Access**.
The **iSCSI** screen opens with the **Targets** tab selected by default.

{{< include file="/static/include/FibreChannelEnterpriseScreen.md" >}}

The **Block (iSCSI) Shares Targets** widget header opens the **iSCSI** screens.

**Global Target Configuration** opens the [iSCSI service configuration](#iscsi-global-configuration-screen) screen.

**Wizard** opens the [iSCSI wizard](#iscsi-wizard-screens) configuration screens.

### iSCSI Target Screen

iSCSI targets are storage resources on an iSCSI server that are made available to iSCSI initiators (clients) over a TCP/IP network.
The target is a server-side torage object that encapuslates a block storage resource (e.g., a phyical disk, logical volume, or file) and makes it accessible to initiators via the iSCSI protocol.
A target is identified by a unique iSCSI qualified name (IQN), and is associated with portal groups for network access and initiator groups for access control.

The **Target** tab shows by default when opening the **iSCSI** screen. Use it to manage iSCSI targets.

{{< include file="/static/include/FibreChannelEnterpriseScreen.md" >}}

{{< trueimage src="/images/SCALE/Shares/iSCSITargetsScreen.png" alt="iSCSI Target Screen" id="iSCSI Target Screen" >}}

The **Targets** table lists all targets added to the system. It shows the target name and alias if one is configured for it.
The first row of the table is selected by default.

Each target shows three **Details for *targetname*** widgets:
* **iSCSI Authorized Networks** shows networks added on the [**Add** or **Edit iSCSI Target**](#add-and-edit-iscsi-target-screens) screens.
* **iSCSI Connections** shows active connections between an authorized client and the target.
  Connections show the IQN and IP address of the client connecting to the target.
* **Extents** shows extents associated with the target.

**Add** opens the **[Add iSCSI Target](#add-and-edit-iscsi-target-screens)** screen.

**Edit** opens the **[Edit iSCSI Target](#add-or-edit-target-screens)** screen for the target selected in the table.

**Delete** opens the [**Delete Target**](#delete-target-dialog) dialog.

#### Target Detail Widgets

The screen shows three widgets on the right side of the screen for the selected target:
* **Extents**- Shows a list of LUNs, and includes two options:
  * [**Associate** button](#associate-dialog)
  * [**Remove Extent Association**](#remove-extent-association) <span class="material-icons">link_off</span> icon.
  
* **iSCSI Authorized Networks** - Shows a list of authorized networks configured when you create the target or using the **Authorized Network** settings on the [**Add** or **Edit iSCSI Target**](#add-and-edit-iscsi-target-screens) screens.

* **iSCSI Connections** - Shows a list of the connections.

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
| **Target Name** | The name of the target, consisting of a maximum of 64 lowercase alphanumeric and special characters. Allowed characters are dot (.), dash (-), and colon (:). A name longer than 64 characters is not allowed. See the “Constructing iSCSI names using the iqn.format” section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). The base name (from Target Global Configuration) is automatically prepended if the target name does not start with iqn. |
| **Target Alias** | An alternative, optional user-friendly name for the target. |
| **Authorized Networks** | Networks authorized or allowed to communicate between initiators (client computers) and iSCSI targets (storage devices) over the IP network. **Add** shows the **Network** field. |
| **Network** | Network addresses for authorized networks. Shows after clicking **Add** to the right of **Authorized Networks**. Enter the IP address for the network and select the netmask (CIDR) from the dropdown list. Address must be a public address. Adds the network address to the **iSCSI Authorized Network** widget. |
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

The **Initators Groups** screen manages iSCSI initiator groups for targets.
*Initiator groups* are a logical grouping of iSCSI initiators (clients), identified by their iSCSI qualified name (IQN), that control access to iSCSI targets they are associated with, and define what operations clients can perform on storage for those targets.

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

The **Portals** screen manages iSCSI portal groups for the target.
A *portal group* is a set of network portals (IP addresses and port combinations) within an iSCSI node that collectively supports the coordination of an iSCSI session.
Each portal group is identified by a 16-bit numerical identifier (portal group tag) unique within the iSCSI node.
Portal groups allow an iSCSI initiator (client) to connect to a target through multiple network paths.

The **Portals** screen shows after clicking on the **Portals** tab on the **iSCSI** screen. A **Portals** table lists portal ID groups on the TrueNAS system.

{{< trueimage src="/images/SCALE/Shares/iSCSIPortalsScreen.png" alt="iSCSI Portals Screen" id="iSCSI Portals Screen" >}}

**Delete** opens the **Delete** dialog for the selected portal ID. Click **Confirm** and then **Delete** to delete the selected portal.

**Add** opens the **Add Portal** screen. **Edit** opens the **Edit Portal** screen. Both screens have the same setting options.

#### Add or Edit Portals Screens

{{< include file="/static/includes/iSCSIAddEditPortalsScreens.md" >}}

### Authorized Access Screens

The **Authorized Access** screen shows a table listing groups allowed to access the target.
The **Authorized Access** table lists the group ID, user, and peer users. settings to create new authorized access networks or edit existing ones in the list.

The table shows **No records have been added yet** until you add access.

{{< trueimage src="/images/SCALE/Shares/iSCSAuthorizedAccessScreen.png" alt="iSCSI Authorized Access Screen" id="iSCSI Authorized Access Screen" >}}

**Add** opens the **Add Authorized Access** screen.

The <span class="material-icons">more_vert</span> dropdown list for each group ID shows two options:
* **<span class="material-icons">edit</span> Edit** opens the [**Edit iSCSI Assoicated Access** screen](#).
* **<span class="material-icons">delete</span> Delete** opens the [**Delete** dialog](#).

**Delete** opens the **Delete** dialog for the selected portal ID. **Confirm** enables the delete option. 
**Delete** deletes authorized access for the selected user and closes the dialog.

**Edit** opens the **Edit Authorized Access** screen. 

The **Add** and **Edit** screens display the same settings. Both screens have the same setting options.

#### Add or Edit Authorized Access Screens

{{< include file="/static/includes/iSCSIAddEditAuthorizedAccesssScreens.md" >}}
