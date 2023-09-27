---
title: "Block (iSCSI) Share Target Screens"
description: "Provides information on Block (iSCSI) Share Targets screens and settings."
weight: 40
aliases:
- /scale/scaleuireference/shares/iscsi/iscsisharesscreens/
- /scale/scaleuireference/shares/iscsi/
- /scaleuireference/systemsettings/services/iscsiservicescreen/
tags:
- scaleiscsi
- scaleshares
- tciscsi
---

{{< toc >}}

The **Sharing** screen opens after you click **Shares** on the main navigation panel.  

## Block (iSCSI) Shares Targets Widget

The **Block (iSCSI) Shares Targets** widget displays the widget toolbar with the status of the iSCSI service. 
Click **Configure** to open the **iSCSI** screen on the **[Target Global Configuration](#target-global-configuration-screen)** tab. 
Click **Wizard** to open the **Wizard iSCSI** screen.

![iSCSIBlockSharesWidget](/images/SCALE/Shares/iSCSIBlockSharesWidget.png "Block (iSCSI) Share Target Widget Toolbar")

After adding an iSCSI target or share, the widget toolbar displays the **STOPPED** service status in red and includes the share below.

Before you add your first iSCSI block share, click anywhere on **Block (iSCSI) Shares Targets <span class="material-icons">launch</span>** to open the **Sharing > iSCSI** screen with the **Targets** iSCSI configuration tab displayed.
Click **Add** in the top right or **Add Target** in the middle of the screen to open the **[Add ISCSI Target](#add-and-edit-iscsi-target-screens)** screen. 
Click **Wizard** to open the **Wizard iSCSI** screen. After adding a block share, the widget displays shares below the toolbar.
The **No Targets** screen opens only when the system does not have an iSCSI target configured on the system.  

![iSCSINoTargetsScreen](/images/SCALE/Shares/iSCSINoTargetsScreen.png "iSCSI No Targets screen")

The <span class="material-icons">more_vert</span> on the toolbar displays options to turn the iSCSI service on or off. 
**Turn Off Service** displays if the service is running. Otherwise, **Turn On Service** displays. 
The **Config Service** option opens the configuration tabs **[Target Global Configuration](#target-global-configuration-screen)** screen.

If you have other share types added to your TrueNAS system, the widget displays as a card on the **Sharing** screen.

![SharingScreenWithiSCSIShareAdded](/images/SCALE/Shares/SharingScreenWithiSCSIShareAdded.png "Sharing Screen with iSCSI Share")

**View Details** also opens the iSCSI configuration tabs. Each tab includes details on the block shares added to the system.

### Basic Info Settings

![iSCSIManualAddTargets](/images/SCALE/Shares/iSCSIManualAddTargets.png "Add iSCSI Target Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Target Name** | Required. Enter a name using up to 64 lowercase alphanumeric and special characters. Allowed characters are dot (.), dash (-), and colon (:). A name longer than 64 characters is not allowed. See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). The base name (**from Target Global Configuration**) is automatically prepended if the target name does not start with **iqn**. |
| **Target Alias** | Enter an optional user-friendly name. |
{{< /truetable >}}

### iSCSI Group Settings

To display the **iSCSI Group** settings, click **Add**.
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Portal Group ID** | Required if specifying an iSCSI Group. Select the number of the existing portal to use. This is the portal group ID created in **Portals**. |
| **Initiator Group ID** | Select the existing initiator group ID that has access to the target from the dropdown list of options. When initiator groups exist, the dropdown populates with options to select a created group by ID, allow all groups, or allow no groups. |
| **Authentication Method** | Select the method from the dropdown list of options. **None**, **CHAP** or **Mutual Chap**. iSCSI supports multiple authentication methods that targets can use to discover valid devices. **None** allows anonymous discovery. If set to **None** you can leave **Discovery Authentication Group** set to **None** or empty. If set to **CHAP** or **Mutual CHAP** you must enter or create a new group in **Discovery Authentication Group**. |
| **Authentication Group Number** | Select the option from the dropdown list. This is the group ID created in **Authorized Access**. Required when the **Discovery Authentication Method** is set to **CHAP** or **Mutual CHAP**. Select **None** or the value representing the number of the existing authorized accesses. |
{{< /truetable >}}

## iSCSI Configuration Screens

{{< include file="/_includes/iSCSIConfigurationScreens.md" >}}

### Target Global Configuration Screen

{{< include file="/_includes/iscsiTargetGlobalConfig.md" >}}

### Portals Screens

{{< include file="/_includes/iscsiPortals.md" >}}

### Initiators Groups Screen

{{< include file="/_includes/iscsiInitiatorsGroups.md" >}}

### Authorized Access Screen

{{< include file="/_includes/iscsiAuthorizedAccess.md" >}}

### Targets Screen

{{< include file="/_includes/iscsiTargets.md" >}}

### Extents Screen

{{< include file="/_includes/iscsiExtents.md" >}}

### Associated Targets Screen

{{< include file="/_includes/iscsiAssociatedTargets.md" >}}

{{< taglist tag="scaleiscsi" limit="10" >}}
