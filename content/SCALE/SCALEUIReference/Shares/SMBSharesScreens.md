---
title: "SMB Shares Screens"
description: "Provides information on SMB share screens and settings."
weight: 20
aliases:
- /scale/scaleuireference/shares/smb/smbsharesscreens/
- /scale/scaleuireference/shares/smb/
tags:
- smb
- afp
- acl
---

## Windows (SMB) Shares Widget
If you have not added SMB shares to the system, the SMB widget shows **No records have been added yet**.

{{< trueimage src="/images/SCALE/Shares/WindowsSMBShareWidgetNoShares.png" alt="Windows (SMB) Share Widget without Shares" id="Windows (SMB) Share Widget without Shares" >}}

**Add** at the top right of the widget opens the [**Add SMB** screen](#add-and-edit-smb-screens) where you configure SMB shares.
After adding an SMB share it displays on the widget.

{{< trueimage src="/images/SCALE/Shares/WindowsSMBShareWidget.png" alt="Windows (SMB) Share Widget with Shares" id="Windows (SMB) Share Widget with Shares" >}}

Click on **Windows (SMB) Shares <span class="material-icons">launch</span>** to open the [**Sharing > SMB** screen](#sharing-smb-details-screen).

Each SMB share includes a toggle that provides quick access to enable or disable the share, and four icons for different individual share functions:
* <span class="material-icons">share</span> **Edit Share ACL** icon opens the [**Edit Share ACL**](#edit-share-acl-screen) screen.
* <span class="material-icons">security</span> **Edit Filesystem ACL** icon opens the [**Edit ACL**](#edit-filesystem-acl-screen) screen.
* <span class="iconify" data-icon="ic:baseline-edit"></span> edit icon opens the [**Edit SMB** screen](#add-and-edit-smb-screens).
* <span class="material-icons">delete</span> opens the [**Delete** dialog](#delete-smb-share-dialog).

The **Windows (SMB) Shares <span class="material-icons">launch</span>** toolbar displays the status of the SMB service as either **STOPPED** (red) or **RUNNING** (blue).
Before adding the first share, the **STOPPED** status displays in the default color.

Click on the widget header to open the [**Sharing > SMB** details](#sharing-smb-details-screen) screen.

**Add** opens the **[Add SMB](#add-and-edit-smb-screens)** share configuration screen.

The <span class="material-icons">more_vert</span> icon displays four options available to SMB shares in general:
* **Turn Off Service** what shows when the SMB service is enabled and that toggles to **Turn On Service** when the SMB service is disabled.
* **Config Service** that opens the [**System Settings > SMB**]({{< relref "SMBServicesScreen.md" >}}).
* **SMB Sessions** that opens the **SMB Status** screen with four tabs: **Sessions**, **Locks**, **Shares**, and **Notifications**.
* **Audit Logs** that opens the [**Audit** screen]({{< relref "AuditingSCALE.md" >}}) with a predefined filter for and showing the SMB share logs.

### Delete SMB Share Dialog
The <span class="material-icons">delete</span> trash can icon displays the **Delete** dialog.

{{< trueimage src="/images/SCALE/Shares/DeleteSMBShareDialog.png" alt="Delete SMB Share" id="Delete SMB Shares" >}}

Select **Confirm** to activate the **Delete** button.

## Sharing SMB Details Screen
The **Sharing >SMB** details screen, lists all SMB shares added to the system.

{{< trueimage src="/images/SCALE/Shares/SharingSMBScreen.png" alt="Sharing SMB Screen" id="Sharing SMB Screen" >}}

**Add** opens the **Add SMB** configuration screen.

**Columns** displays a set of options to customize the list view.
Options include **Unselect All**, **Path**, **Description**, **Enabled** and **Reset to Defaults**.

**Enabled** indicates whether the share is enabled or disabled. If selected, the share path is available when the SMB service is active.
If cleared, the share is disabled but not deleted from the system.

The <span class="material-icons">more_vert</span> displays a dropdown list of options for each share:
* **[Edit](#add-and-edit-smb-screens)** opens the **Edit SMB** screen.
* **[Edit Share ACL](#edit-share-acl-screen)** opens the **Edit Share ACL** screen.
* **[Edit Filesystem ACL](#edit-filesystem-acl-screen)** opens the **Edit ACL** screen.
* **[Delete](#delete-smb-share-dialog)** displays the **Delete** dialog.

To return to the **Share** screen, click **Shares** on the main navigation panel or **Sharing** on the breadcrumb at the top of the screen.

## Add and Edit SMB Screens
The two SMB share configuration screens, **Add SMB** and **Edit SMB**, display the same setting options.
The **Create Dataset** option does not show on the **Edit SMB** screen, but you can change to another existing dataset on the system.

Click **Save** to create the share (or save an existing one) and add it to the **Windows (SMB) Shares** widget and **Sharing SMB** details screen.

### Basic Options Settings
The **Basic Options** settings in this section also display in the **Advanced Options**.

{{< trueimage src="/images/SCALE/Shares/AddShareBasicOptions.png" alt="Add SMB Basic Options" id="Add SMB Basic Options" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Path** | Enter the path or use the <span class="material-icons">arrow_right</span> icon to the left of **<span class="material-icons">folder</span>/mnt** to locate the dataset and populate the path. **Path** is the directory tree on the local file system that TrueNAS exports over the SMB protocol. |
| **<span class="material-icons">folder</span>/mnt** | Click the <span class="material-icons">arrow_right</span> icon to expand the path at each dataset until you get to the SMB share dataset you want to use. This populates the **Path**. |
| **Create Dataset** | Click to open the **Create Dataset** dialog. Enter a name to create a new dataset for the share. Click **Create** to add the dataset and populate the **Name** field on the **Add SMB** screen. |
| **Name** | Enter a name for this share that is less than or equal to 80 characters. Because of how the SMB protocol uses the name, the name must not exceed 80 characters. The name cannot have invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6. If not supplied, the share name becomes the last component of the path. This forms part of the full share path name when SMB clients perform and SMB tree connect. If you change the name, follow the naming conventions for [files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions) or [share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea). |
| **Purpose** | Select a [preset option](#purpose-setting-options) from the dropdown list. The option applies predetermined settings ([presets](#advanced-options-presets)) and disables changing some share setting options. |
| **Description** | Enter a brief description or notes on how you use this share.  |
| **Enabled** | Selected by default to enable sharing the path when the SMB service is activated. Clear to disable this SMB share without deleting it. |
{{< /truetable >}}

#### Purpose Setting Options
This table details the options found on the **Purpose** dropdown list.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **No presets** | Select  to retain control over all **Advanced Options** settings.|
| **Default share parameters** | The default option when you open the **Add SMB** screen and to use for any basic SMB share. |
| **Basic time machine share** | Select to set up a basic time machine share. |
| **Multi-User time machine** | Select to set up a multi-user time machine share. |
|  **Multi-Protocol (NFSv3/SMB) shares**| Select for multi-protocol (NFSv3/SMB) shares. |
| **Private SMB Datasets and Shares** | Select to use private SMB datasets and shares. |
| **SMB WORM. Files become read-only via SMB after 5 minutes** | The **SMB WORM** preset only impacts writes over the SMB protocol. Before deploying this option in a production environment, the user should determine whether the feature meets their requirements. |
{{< /truetable >}}

### Advanced Options Settings
Click **Advanced Options** to display settings made available or locked based on the option selected in **Purpose**.

#### Access Settings
The **Access** settings customize access to the share and files, and also specifying allow or deny access for host names or IP addresses.

{{< trueimage src="/images/SCALE/Shares/AddSMBAdvancedAccessSettings.png" alt="SMB Advanced Options Access" id="SMB Advanced Options Access" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable ACL** | Select to enable ACL support for the SMB share. A warning displays if you clear this option and the SMB dataset has an ACL, and you are required to strip the ACL from the dataset prior to creating the SMB share. |
| **Export Read-Only** | Select to prohibit writes to the share. |
| **Browsable to Network Clients** | Select to determine whether this share name is included when browsing shares. Home shares are only visible to the owner regardless of this setting. Enabled by default. |
| **Allow Guest Access** | Select to enable. Privileges are the same as the guest account. Guest access is disabled by default in Windows 10 version 1709 and Windows Server version 1903. Additional client-side configuration is required to provide guest access to these clients. <br>**MacOS clients**: Attempting to connect as a user that does not exist in FreeNAS *does not* automatically connect as the guest account. You must specifically select the **Connect As: Guest** option in macOS to log in as the guest account. See the [Apple documentation](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac) for more details. |
| **Access Based Share Enumeration** | Select to restrict share visibility to users with read or write access to the share. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page. |
| **Hosts Allow** | Enter a list of allowed host names or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. You can find a more detailed description with examples [here](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html#HOSTSALLOW).
| **Hosts Deny** | Enter a list of denied host names or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. |
{{< /truetable >}}

#### Audit Logging
The **Audit Logging** settings enable the auditing function for the SMB share, and allow configuring a watch and ignore list for groups administrators want to monitor.

{{< trueimage src="/images/SCALE/Shares/AddSMBAdvancedAuditLoggingSettings.png" alt="SMB Audit Logging" id="SMB Audit Logging" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enabled** | Select to enable audit logging for the SMB share. |
| **Watch List** | Select groups from the dropdown list that you want to generate audit logging message for. Leaving this blank includes all SMB users with access to the share. If also setting a limit list, when a conflict exists the watch list takes precedence. |
| **Limit List** | Select groups from the dropdown list that you want to ignore or exclude from audit logging. If a group is a member of both the watch and limit lists, the watch list takes precedence and the group generates audit messages. |
{{< /truetable >}}

#### Other Settings
The **Other Options** settings include improving Apple software compatibility, ZFS snapshot features, and other advanced features.

{{< trueimage src="/images/SCALE/Shares/AddSMBAdvancedOtherSettings.png" alt="SMB Advanced Options Other" id="SMB Advanced Options Other" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use as Home Share** | Select to allow the share to host user home directories. Each user has a personal home directory they use when connecting to the share that is not accessible by other users. Home Shares allow for personal, dynamic shares. You can only use one share as the home share. See [Adding an SMB Home Share]({{< relref "AddSMBHomeShare.md" >}}) for more information. |
| **Time Machine** | Enables [Apple Time Machine](https://support.apple.com/en-us/HT201250) backups on this share. This option requires SMB2/3 protocol extension support. You can enable this in the general SMB server configuration. |
| **Legacy AFP Compatibility** | Select to enable the share to behave like the deprecated Apple Filing Protocol (AFP). Leave cleared for the share to behave like a normal SMB share. This option controls how the SMB share reads and writes data. Only enable this when this share originated as an AFP sharing configuration. You do not need legacy compatibility for pure SMB shares or macOS SMB clients. This option requires SMB2/3 protocol extension support. You can enable this in the general SMB server configuration. |
| **Enable Shadow Copies** | Select to export ZFS snapshots as [Shadow Copies](https://docs.microsoft.com/en-us/windows/win32/vss/shadow-copies-and-shadow-copy-sets) for Microsoft Volume Shadow Copy Service (VSS) clients. |
| **Export Recycle Bin** | Select to enable. Deleted files from the same dataset move to a **Recycle Bin** in that dataset and do not take any additional space. |
| **Use Apple-style Character Encoding** | Select to convert NTFS illegal characters in the same manner as macOS SMB clients. By default, Samba uses a hashing algorithm for NTFS illegal characters. |
| **Enable Alternate Data Streams** | Select to allow multiple [NTFS data streams](https://www.ntfs.com/ntfs-multiple.htm). Disabling this option causes macOS to write streams to files on the file system. |
| **Enable SMB2/3 Durable Handles** | Select to allow using open file handles that can withstand short disconnections. Support for POSIX byte-range locks in Samba is also disabled. We do not recommend this option when configuring multi-protocol or local access to files. |
| **Enable FSRVP** | Select to enable support for the File Server Remote VSS Protocol ([FSVRP](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-fsrvp/dae107ec-8198-4778-a950-faa7edad125b)). This protocol allows remote procedure call (RPC) clients to manage snapshots for a specific SMB share. The share path must be a dataset mount point. Snapshots have the prefix `fss-` followed by a snapshot creation timestamp. A snapshot must have this prefix for an RPC user to delete it. |
| **Path Suffix** | Appends a suffix to the share connection path. Use to provide individualized shares on a per-user, per-computer, or per-IP address basis. Suffixes can contain a macro. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page for a list of supported macros. The connect path must be preset before a client connects. |
{{< /truetable >}}

#### Advanced Options Presets
The **Purpose** setting you select in the **Basic Options** affects which **Advanced Options** settings (presets) you can select.
Some presets are available or locked based on your choice.
The expandable below provides a comparison table listing these presets and shows whether the option is available or locked.

{{< expand "What do all the presets do?" "v" >}}
The following table shows the preset options for the different **Purpose** options and if those are locked.
A <i class="material-icons" aria-hidden="true" title="System Update">check_box</i> indicates the option is enabled while <i class="material-icons" aria-hidden="true" title="System Update">check_box_outline_blank</i> means the option is disabled. [ ] indicates empty text fields, and [%U] indicates the option the preset created.

{{< truetable >}}
| Setting | Default Share Parameters | Multi-User Time Machine | Multi-Protocol (NFSv3/SMB) Shares | Private SMB Datasets and Shares | SMB Files become Read Only after 5 minutes |
|---------|--------------------------|-------------------------|-----------------------------------|---------------------------------|----------------------------------------|
| **Enable ACL** | <i class="material-icons" aria-hidden="true">check_box</i> (locked) | <i class="material-icons" aria-hidden="true">check_box</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| **Export Read Only** | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>  | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| **Browsable to Network Clients** | <i class="material-icons" aria-hidden="true">check_box</i> (locked) | <i class="material-icons" aria-hidden="true">check_box</i> | <i class="material-icons" aria-hidden="true">check_box</i> | <i class="material-icons" aria-hidden="true">check_box</i> | <i class="material-icons" aria-hidden="true">check_box</i> |
| **Allow Guest Access** | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| **Access Based Share Enumeration** | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| **Hosts Allow** | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| **Hosts Deny** | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| **Use as Home Share** | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>  | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| **Time Machine** | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| **Enable Shadow Copies** | <i class="material-icons" aria-hidden="true">check_box</i> (locked) | <i class="material-icons" aria-hidden="true">check_box</i> | <i class="material-icons" aria-hidden="true">check_box</i> | <i class="material-icons" aria-hidden="true">check_box</i> | <i class="material-icons" aria-hidden="true">check_box</i> |
| **Export Recycle Bin** | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| **Use Apple-style Character Encoding** | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box</i> | <i class="material-icons" aria-hidden="true">check_box</i> | <i class="material-icons" aria-hidden="true">check_box</i> |
| **Enable Alternate Data Streams** | <i class="material-icons" aria-hidden="true">check_box</i> (locked) | <i class="material-icons" aria-hidden="true">check_box</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| **Enable SMB2/3 Durable Handles** | <i class="material-icons" aria-hidden="true">check_box</i> (locked) | <i class="material-icons" aria-hidden="true">check_box</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| **Enable FSRVP** | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| **Path Suffix** | [ ] (locked) | [%U] (locked) | [%U] | [%U] (locked) | [ ] (locked) |
{{< /truetable >}}
[Back to Advanced Options Settings](#advanced-options-settings)
{{< /expand >}}

## Edit Share ACL Screen
The **Share ACL for *sharename*** screen opens when you click the <i class="material-icons" aria-hidden="true" title="share">share</i> **Edit Share ACL** icon on the **Windows (SMB) Shares** widget or the <span class="material-icons">more_vert</span> on the [**Sharing SMB** details screen](#sharing-smb-details-screen).
These settings configure new ACL entries for the selected SMB share and apply them at the entire SMB share level. It is separate from file system permissions.

{{< trueimage src="/images/SCALE/Shares/SMBShareACLScreen.png" alt="SMB Share ACL Screen" id="SMB Share ACL Screen" >}}

**ACL Entries** are listed as a block of settings. Click **Add** to add a new entry.
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **SID** | Shows the SID trustee value (who) this ACL entry (ACE) applies to. SID is a unique value of variable length that identifies the trustee. Shown as a [Windows Security Identifier](https://docs.microsoft.com/en-us/windows/win32/secauthz/security-identifiers). Click **Save** and re-open **Edit Share ACL** to update. |
| **Who** | Select the domain for account (who) this ACL entry applies to. Options are:<br><li>**User** - Select to show the **User** field. Enter or select from the dropdown a user (who) this ACL entry applies to, shown as a user name.<br><li>**Group** - Select to show the **Group** field. Enter or select from the dropdown a group (who) this ACL entry applies to, shown as a group name.<br><li>**everyone** - Select to apply the ACL entry to everyone.</li> |
| **Permission** | Select predefined permission combinations from the dropdown list. Options are:<br><li>**FULL** - Select to grant read access, execute permission, write access, delete objects, change permissions, and take ownership (RXWDPO) permissions.<br><li>**CHANGE** - Select to grant read access, execute permission, write access, and delete object (RXWD) permissions.<br><li>**READ** - Select to grant read access and execute permission on the object (RX). For more details, see [smbacls(1)](https://www.samba.org/samba/docs/current/man-html/smbcacls.1.html).</li> |
| **Type** | Select the option from the dropdown list that specifies how TrueNAS applies permissions to the share. Options are:<br><li>**ALLOWED** - Select to deny all permissions by default, except manually defined permissions.<br><li>**DENIED** - Select to allow all permissions by default, except manually defined permissions.</li> |
{{< /truetable >}}

**Save** stores the share ACL and immediately applies it to the share.

## Edit Filesystem ACL Screen
The **Edit Filesystem ACL** option opens the **Edit ACL** screen for the dataset the share uses.
See [**Edit ACL Screen]({{< relref "EditACLScreens.md" >}}) more information on the settings found on this screen.

{{< trueimage src="/images/SCALE/Shares/SMBACLEditor.png" alt="SMB ACL Editor" id="SMB ACL Editor" >}}

Use the ACL editor screen to set filesystem permissions for the shared dataset.
See [Permissions]({{< relref "PermissionsSCALE.md" >}}) for more information on configuring permissions.

## SMB Status Screens
You can access the **SMB Status** screen from the **SMB** option on the **System Settings > Services** screen with the <i class="material-icons" aria-hidden="true" title="list">list</i> icon and from the <span class="material-icons">more_vert</span> on the **Shares > Windows (SMB) Shares** widget.

{{< trueimage src="/images/SCALE/Shares/SMBStatusScreenSessionsTab.png" alt="SMB Status Sessions Tab" id="SMB Status Sessions Tab" >}}

The **SMB Status** screen has four tabs with information related to SMB shares:
* **Sessions** shows current SMB sessions (default view).
* **Locks** shows locked files.
* **Shares** shows open files.
* **Notifications** shows file notification subscriptions.

**Refresh** updates the information displayed on the selected tab.

**Column** displays a dropdown list of options for the selected tab to customize the information included on the screen.

Click **Sharing** or **SBM** on the top breadcrumb to open the selected screen.
The breadcrumb displays when you access the SMB Status screen from the **System Settings > Services SMB** row.
