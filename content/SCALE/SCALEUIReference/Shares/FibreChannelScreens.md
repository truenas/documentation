---
title: "Fibre Channel Screens"
description: "Provides information on iSCSI Fibre Channel screens and settings."
weight: 45
aliases:
tags:
- iscsi
- shares
- fibre channel
- block shares
---



{{< enterprise >}}
Fibre Channel is a TrueNAS Enterprise feature. Only TrueNAS systems licensed for Fibre Channel show iSCSI Fibre Channel screens and settings found by going to **Sharing > Block Shares (iSCSI)**.
{{< /enterprise >}}

Enterprise systems with fibre channel hardware can access fibre channel settings and screens through various iSCSI wizard and share screens.

## iSCSI Wizard Screens - Fibre Channel

The **Block (iSCSI) Shares Targets** widget shows iSCSI shares configured for fibre channels.
The **Wizard** button on the header opens the **Wizard iSCSI** wizard on the **Target** screen. See [Target Screens - Fibre Channel](#iscsi-wizard-target-screen---fibre-channel) below.

{{< trueimage src="/images/SCALE/Shares/SharesScreenFC.png" alt="Block (iSCSI) Shares Targets Widget with Fibre Channel" id="Block (iSCSI) Shares Targets Widget with Fibre Channel" >}}

The <span class="material-icons">more_vert</span> icon button shows two options: a toggle for **Turn On Service**/**Turn Off Service** and **Config Service**.
**Config Service** opens the **[iSCSI Global Configuration]({{< relref "iSCSISharesScreens.md #iscsi-global-configuration-screen" >}})** screen. 

### iSCSI Target Wizard Screen - Fibre Channel

The **Wizard** button opens the iSCSI wizard on the **Targets** screen with the **Fibre Channel** option. The wizard has three screens:

* **Target**
* **Extent**
* **Protocol Options**

To access the individual iSCSI screens click on the iSCSI widget header.
The **Targets** screen opens by default.
For more information on iSCSI screens and settings, see [**iSCSI Screens - Fibre Channel**](#iscsi-share-screens---fibre-channel) below.

**Next** advances to the next wizard screen. **Back** shows the previous wizard screen. **Save** creates the iSCSI share.

### iSCSI Wizard Target Screen - Fibre Channel

The **iSCSI Wizard** opens showing the **Target** screen with the **Fibre Channel** option. Select to configure the target for fibre channel.

{{< trueimage src="/images/SCALE/Shares/iSCSIWizardTargetScreenFC.png" alt="iSCSI Wizard Target Screen - Fibre Channel" id="iSCSI Wizard Target Screen - Fibre Channel" >}}

The **Target** dropdown shows the default **Create New**. Selecting **Create New** creates a share, or selecting an existing target from the dropdown list allows you to edit it.

### iSCSI Wizard Extent Screen - Fibre Channel

{{< include file="/static/includes/iSCSIWizardExtentScreen.md" >}}

### iSCSI Wizard Protocol Options Screen - Fibre Channel

The iSCSI wizard **Protocol Options** screen for fibre channel shows three setting options to configure fibre channel ports and initiators.

{{< trueimage src="/images/SCALE/Shares/iSCSIWizardProtocolOptionsScreenCreateNewVirtualPort.png" alt="iSCSI Wizard Protocol Options Create New Virtual Port" id="iSCSI Wizard Protocol Options Create New Virtual Port" >}}

{{< expand "Wizard Protocol Options for Fibre Channel Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Do not connect to a fibre channel port** | Select to configure the share to not connect to a fibre channel port. |
| **Use an existing port**  | Select to connect the share to an existing fibre channel port. |
| **Create a new virtual port** | Select to create a new virtual port. Shows the **Create a new virtual port** field. Select from the options on the dropdown list. |
{{< /truetable >}}
{{< /expand >}}

## iSCSI Share Screens - Fibre Channel

Clicking on the iSCSI widget header opens the iSCSI share screens.

**Global Target Configuration** opens the iSCSI service configuration screen.

**Wizard** opens the iSCSI wizard configuration screens.

The iSCSI shares screen opens showing **Targets** by default. 

Six tabs show for each of the following screens: **Targets**, **Extents**, **Initiators**, **Portals**, **Authorized Access**, and **Fibre Channel Ports**.
Each shows what is configured on the system, and provides access to the add and edit configuration screens for each functional area.

### iSCSI Global Configuration Screen

{{< include file="/static/includes/iSCSIGlobalConfigurationScreen.md" >}}

### Targets Screens - Fibre Channel

The **iSCSI Targets** screen shows a list of targets configured in the system and provides access to the add and edit configuration screens. Select a target to see details about that item.

{{< trueimage src="/images/SCALE/Shares/iSCSITargetsScreenwFC.png" alt="iSCSI Targets Screen - Fibre Channel" id="iSCSI Wizard Targets Screen - Fibre Channel" >}}

**Add** and **Edit** open the configuration screen for the selected target.
**Delete** opens a dialog with delete options.

#### Details for Target

The screen shows four widgets on the right side of the screen for the selected target: **Fibre Channel Port**, **Fibre Channel Connections**, **Extents**, and **iSCSI Connections**.

**Fibre Channel Port** shows the fibre channel port showing the two HA assignments configured on the system, one for the HA primary controller and the other for the standby controller. These are created when you add the targets for an HA system or migrate existing from an earlier TrueNAS (13.0 or 13.3) release to the latest release.

**Fibre Channel Connections** shows the schema name for the ports assigned to each controller in an HA system.

**Extents** shows a list of LUNs, and includes two options: [**Associate** button](#associate-dialog) and a [**Remove Extent Association**](#remove-extent-association) <span class="material-icons">link_off</span> icon.

**iSCSI Connections** shows a list of the connections configured on the system.

#### Delete Target Dialog

{{< include file="/static/includes/iSCSITargetDelete.md" >}}

#### Remove Extent Association Dialog

{{< include file="/static/includes/iSCSIRemoveExtentAssociation.md" >}}

#### Associate Dialog

{{< include file="/static/includes/iSCSITargetAssociate.md" >}}

#### Add and Edit iSCSI Target Screens - Fibre Channel

The **Add Target** and **Edit Target** screens show the same configuration settings.

{{< columns >}}
{{< trueimage src="/images/SCALE/Shares/AddiSCSITargetFC.png" alt="Add iSCSI Target Screen - Fibre Channel" id="Add iSCSI Target Screen - Fibre Channel" >}}
<--->
{{< trueimage src="/images/SCALE/Shares/EditiSCSITargetFC.png" alt="Edit iSCSI Target Screen - Fibre Channel" id="Edit iSCSI Target Screen - Fibre Channel" >}}
{{< /columns >}}

{{< expand "Target Basic Info Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Target Name** | Enter the name for the target using up to 64 lowercase alphanumeric and special characters. Allowed characters are dot (.), dash (-), and colon (:). A name longer than 64 characters is not allowed. See the “Constructing iSCSI names using the iqn.format” section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). The base name (from Target Global Configuration) is automatically prepended if the target name does not start with iqn. |
| **Target Alias** | Enter an optional user-friendly name. |
| **Mode** | **Mode** shows three options for a target:<br><li>**iSCSI** - Select to create a standard iSCSI share target.<br><li>**Fibre Channel** - Select to configure an iSCSI target that includes fibre channel.<br><li>**Both** - Select to use both modes.</li> |
| **Authorized Networks** | Authorized networks allow communication between initiators (client computers) and iSCSI targets (storage devices) over the IP network. **Add** shows the **Network** field. |
| **Network** | Shows after clicking **Add** to the right of **Authorized Networks**. Enter the IP address for the network and select the netmask (CIDR) from the dropdown list. Adds the network address to the authorized network list. |
| **Do not connect to a fibre channel port** | Select to set the target to not connect to a fibre channel port. Use for a standard iSCSI share target. |
| **Use an existing port** | Select to use an existing iSCSI port already configured on the system. Shows a dropdown list where you select the port. |
| **Create new virtual port** | Select to create a new virtual iSCSI port for fibre channel configuration. Shows the **Create a new virtual port** field. Select from the options on the dropdown list. |
{{< /truetable >}}
{{< /expand >}}

{{< include file="/static/includes/TargetiSCSIGroupSettings.md" >}}

### Extents Screens - Fibre Channel

The **Extents** screen shows a table listing extents configured on the system. Extents are shared storage units.

{{< trueimage src="/images/SCALE/Shares/iSCSIExtentsScreenFC.png" alt="iSCSI Extents Screen - Fibre Channel" id="iSCSI Extents Screen - Fibre Channel" >}}

**Add** and **Edit** open the configuration screen for the selected target.
**Delete** opens a dialog with delete options.

#### Delete Extent Dialog

{{< include file="/static/includes/iSCSIDeleteExtent.md" >}}

#### Add or Edit Extent Screens - Fibre Channel

{{< include file="/static/includes/iSCSIAddEditExtentSettings.md" >}}

### Initiators Screens - Fibre Channel

The **Initiators Groups** screen shows a table listing initiator groups configured on the system.

{{< trueimage src="/images/SCALE/Shares/iSCSIInitiatorsScreenFC.png" alt="iSCSI Initiator Screen - Fibre Channel" id="iSCSI Initiator Screen - Fibre Channel" >}}

**Add** opens the **Add Initiator** screen.
**Edit** opens a version of the **Add Initiator** screen with only two fields.
**Delete** opens a dialog to delete an initiator group.

#### Add Initiator Screen - Fibre Channel

{{< include file="/static/includes/iSCSIAddInitiatorSettings.md" >}}

#### Edit Initiator Screen - Fibre Channel

{{< include file="/static/includes/iSCSIEditInitiatorSettings.md" >}}

### Portal Screens - Fibre Channel

The configuration tabs **Portals** screen displays a list of portal ID groups on the TrueNAS system.

{{< trueimage src="/images/SCALE/Shares/iSCSIPortalsScreenFC.png" alt="iSCSI Portals Screen - Fibre Channel" id="iSCSI Portals Screen - Fibre Channel" >}}

**Delete** opens the **Delete** dialog for the selected portal ID. Click **Confirm** and then **Delete** to delete the selected portal.

**Add** opens the **Add Portal** screen. **Edit** opens the **Edit Portal** screen. Both screens have the same setting options.

#### Add and Edit Portal Screens - Fibre Channel

{{< include file="/static/includes/iSCSIAddEditPortalsScreens.md" >}}

### Authorized Access Screens - Fibre Channel

The **Authorized Access** screen displays settings to create new authorized access networks or edit existing ones in the list.

If you have not set up authorized access yet, the **No Authorized Access** screen displays with the **Add Authorized Access** button in the center of the screen. **Add Authorized Access** or **Add** at the top of the screen opens the **Add Authorized Access** screen.

{{< trueimage src="/images/SCALE/Shares/iSCSAuthorizedAccessScreenFC.png" alt="iSCSI Authorized Access Screen - Fibre Channel" id="iSCSI Authorized Access Screen - Fibre Channel" >}}

After adding authorized access to the system, the **Authorized Access** screen displays a list of users.
**Delete** opens the **Delete** dialog for the selected portal ID. **Confirm** enables the delete option. 
**Delete** deletes the selected portal and closes the dialog.

**Add** opens the **Add Authorized Access** screen.

**Edit** opens the **Edit Authorized Access** screen. **Delete** opens a dialog to delete the authorized access for the selected user.

The **Add** and **Edit** screens display the same settings.

#### Add Authorized Access Screen - Fibre Channel

{{< include file="/static/includes/iSCSIAddEditAuthorizedAccesssScreens.md" >}}

### Fibre Channel Ports Screens

The **Fibre Channel Ports** screen shows a table listing fibre channels configured on the system.

{{< trueimage src="/images/SCALE/Shares/iSCSIFibreChannelPortsScreen.png" alt="iSCSI Fibre Channel Ports Screen" id="iSCSI Fibre Channel Ports Screen" >}}

Ports are configured while setting up targets and extents. When migrating from earlier versions of TrueNAS, ports map from the earlier release to the latest TrueNAS release.

The **Edit** icon opens the **Change Number of Virtual Ports** dialog.

#### Change Number of Virtual Ports Dialog

The **Change Number of Virtual Ports** dialog shows the **Virtual Ports** field where you enter a numeric value to specify the number of ports for the selected fibre channel.

{{< trueimage src="/images/SCALE/Shares/ChangeNumberofVirtualPortsDialog.png" alt="Change Number of Virtual Ports Dialog" id="Change Number of Virtual Ports Dialog" >}}
