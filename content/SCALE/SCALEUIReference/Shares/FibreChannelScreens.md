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

Enterprise systems with fibre channel hardware can access fibre Cchannel settings and screens through various iSCSI wizard and share screens.

## iSCSI Wizard Screens with Fibre Channel

The **Block (iSCSI) Shares Targets** widget shows iSCSI shares configured for fibre channel.
The **Wizard** button on the header opens the **Wizard iSCSI** wizard on the **Target** screen. See [Target Screens for Fibre Channel](#targets-screens-for-fibre-channel) below.

{{< trueimage src="/images/SCALE/Shares/SharesScreenFC.png" alt="Block (iSCSI) Shares Targets Widget with Fibre Channel" id="Block (iSCSI) Shares Targets Widget with Fibre Channel" >}}

The <span class="material-icons">more_vert</span> icon button shows two options: a toggle for **Turn On Service**/**Turn Off Service** and **Config Service**.
**Config Service** opens the ***[iSCSI Global Configuration]({{< relref "iSCSISharesScreens.md #iscsi-global-configuration-screen" >}})** screen. 

### iSCSI Target Wizard Screen

The **Wizard** button opens the iSCSI wizard on the **Targets** screen with the **Fibre Channel** option. The wizard has three screens:

* **Target**
* **Extent**
* **Protocol Options**

To access the individual iSCSI screens click on the iSCSI widget header.
The **Targets** screen opens by default.
For more information on iSCSI screens and settings, see [**iSCSI Screens**](#) below.

**Next** advances to the next wizard screen. **Back** shows the previous wizard screen. **Save** creates the iSCSI share.

### iSCSI Wizard Target Screen with Fibre Channel
The **iSCSI Wizard** opens showing the **Target** screen with the **Fibre Channel** option. Select to configure the target for fibre channel.

{{< trueimage src="/images/SCALE/Shares/iSCSIWizardTargetScreenFC.png" alt="iSCSI Wizard Target Screen for Fibre Channel" id="iSCSI Wizard Target Screen for Fibre Channel" >}}

The **Target** dropdown shows the default **Create New**. Selecting **Create New** creates a share, or selecting an existing target from the dropdown list allows you to edit it.

### iSCSI Wizard Extent Screen

{{< include file="/static/includes/iSCSIWizardExtentScreen.md" >}}

### iSCSI Wizard Protocol Options Screen for Fibre Channel
The iSCSI wizard **Protocol Options** screen for fibre channel shows three setting options configure fibre channel ports and initiators.

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

## iSCSI Share Screens for Fibre Channel

Clicking on the iSCSI widget header opens the iSCSI share screens.

**Global Target Configuration** opens the iSCSI service configuration screen.

**Wizard** opens the iSCSI wizard configuration screens.

The iSCSI shares screens opens showing **Targets** by default.
There are six tabs: *Targets**, **Extents**, **Initiators**, **Portals**, **Authorized Access**, and **Fibre Channels**.
Each shows a list of what is configured on the system, and provides access to the add and edit configuration screens for each functional area.

### iSCSI Global Configuration Screen

{{< include file="/static/includes/iSCSIGlobalConfigurationScreen.md" >}}

### Targets Screens for Fibre Channel
The **iSCSI Targets** screen shows a list of targets configured in the system and provides access to the add and edit configuration screens. Select a target to see details about that item.

{{< trueimage src="/images/SCALE/Shares/iSCSITargetsScreenwFC.png" alt="iSCSI Targets Screen for Fibre Channel" id="iSCSI Wizard Targets Screen for Fibre Channel" >}}

**Add** and **Edit** open the configuration screen for the selected target.
**Delete** opens a dialog with delete options.

#### Details for Target
The screen shows four widgets on the right side of the screen for the selected target: **Fibre Channel Port**, **Fibre Channel Connections**, **Extents**, and **iSCSI Connections**.

**Fibre Channle Port** shows the two fibre channel ports configured on the system, one for the HA primary controller and the other for the standby controller. Thes are created when you add the targets for an HA system.

**Fibre Channel Connections** shows the schema name for the ports assigned to each controller in an HA system.

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

#### Add and Edit iSCSI Target Screens - Fibre Channel
The **Add Target** and **Edit Target** screens show the same configuration settings.

{{< columns >}}
{{< trueimage src="/images/SCALE/Shares/AddiSCSITargetFibreChannel.png" alt="Add iSCSI Target Screen for Fibre Channel" id="Add iSCSI Target Screen for Fibre Channel" >}}
<--->
{{< trueimage src="/images/SCALE/Shares/EditiSCSITargetFibreChannel.png" alt="Edit iSCSI Target Screen for Fibre Channel" id="Edit iSCSI Target Screen for Fibre Channel" >}}
{{< /columns >}}

{{< expand "Target Basic Info Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Target Name** | Enter the name for the target using up to 64 lowercase alphanumeric and special characters. Allowed characters are dot (.), dash (-), and colon (:). A name longer than 64 characters is not allowed. See the “Constructing iSCSI names using the iqn.format” section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). The base name (from Target Global Configuration) is automatically prepended if the target name does not start with iqn. |
| **Target Alias** | Enter an optional user-friendly name. |
| **Mode** | **Mode** shows three options for a target:<br><li>**iSCSI** select to create a standard iSCSI share target.<br><li>**Fibre Channel** select to configure an iSCSI target the includes fibre channel.<br><li>**Both** select to use both modes.</li> |
| **Authorized Networks** | Authorized networks allow communication between initiators (client computers) and iSCSI targets (storage devices) over the IP network. **Add** shows the **Network** field. |
| **Network** | Shows after clicking **Add** to the right of **Authorized Networks**. Enter the IP address for the network and select the netmask (CIDR) from the dropdown list. Adds the network address to the authorized network list. |
| **Do not connect to a fibre channel port** | Select to set the target to not connect to a fibre channel port. Use for a standard iSCSI share target. |
| **Use an existing port** | Select to use an existing iSCSI port already configured on the system. Shows a dropdown list where you select the port. |
| **Create new virtual port** | Select to create a new virtual iSCSI port for fibre channel configuration. Shows the **Create a new virtual port** field. Select from the options on the dropdown list. |
{{< /truetable >}}
{{< /expand >}}

{{< include file="/static/includes/TargetiSCSIGroupSettings.md" >}}

### Portal Screens for Fibre Channel



#### Add and Edit iSCSI Portal Screens for Fibre Channel



### Fibre Channel Screens




#### Change Number of Virtual Ports Dialog

