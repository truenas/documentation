---
title: "SMB Shares Screens"
description: "This article provides information on SMB share screens and settings."
weight: 10
aliases: 
tags:
- scalesmb
- scaleafp
---

{{< toc >}}

The first SMB share screen to display after you click **Shares** is the **Sharing** screen with the service widgets for the four supported share types.

{{< include file="/_includes/SMBShareMSDOSalert.md" type="page" >}}

## Sharing SMB Screen
If you have not added SMB shares to the system, clicking the **Windows (SMB) Shares** option on the **Sharing** screen displays the **No SMB Shares have been configured yet** screen with the **Add SMB Share** button in the center of the screen. 

![SMBShareScreenNoShare](/images/SCALE/22.12/SMBShareScreenNoShare.png "Add SMB Share Screen")

Use this button or the **Add** button at the top right of the screen to configure your first SMB share.
After adding the first SMB share, the **Sharing SMB** screen displays.

If you return to the **Share** option (click **Shares** on the main navigation panel), the **Windows (SMB) Shares <span class="material-icons">launch</span>** widget displays. It includes the current service status and a list of the SMB shares below it. 

![SMBServiceWidgetFirstShare](/images/SCALE/22.12/SMBServiceWidgetFirstShare.png "First SMB Share Added Screen")

### Windows (SMB) Shares Widget

The **Windows (SMB) Shares <span class="material-icons">launch</span>** widget updates after adding SMB shares, and every time you click **Shares** on the main navigation panel to return to the **Sharing** screen. 

![SharingSMBServiceStatusScreen](/images/SCALE/22.12/SharingSMBServiceStatusScreen.png "Status of SMB Service Screen")

Each SMB share toggle provides quick access to enable or disable the share.
Each share also has a <span class="material-icons">delete</span> [delete option](#delete-smb-share-dialog). 
The SMB share row is a link to the [**Edit SMB** screen](#add-and-edit-smb-screens).

#### Windows (SMB) Shares Service Toolbar

The **Windows (SMB) Shares <span class="material-icons">launch</span>** toolbar displays the status of the SMB service as either **STOPPED** (red) or **RUNNING** (blue).
Before adding the first share, **STOPPED** status displays in the default color.

![SMBServiceStatusAfterFirstShareAdded](/images/SCALE/22.12/SMBServiceStatusAfterFirstShareAdded.png "SMB Service After First Share Added")

Both **Windows (SMB) Shares** and **View Details** at the bottom of the widget display the [**Sharing > SMB** details](#sharing-smb-details-screen) screen. 

The **Add** button displays the **[Add SMB](#add-and-edit-smb-screens)** share configuration screen.

The <span class="material-icons">more_vert</span> displays options to turn the SMB service on or off. **Turn Off Service** displays if the service is running, otherwise, **Turn On Service** displays. The **Config Service** option displays the **[System Settings > SMB]({{< relref "SMBServicesScreen.md" >}})** configuration screen. 

![SharingSMBOptions](/images/SCALE/22.12/SharingSMBOptions.png "SMB Service Options")

The <span class="material-icons">share</span> Edit Share ACL icon displays the [**Edit Share ACL**](#smb-share-acl-screen) screen.

The <span class="material-icons">security</span> Edit Filesystem ACL icon opens the [**Edit Filesystem ACL**](#edit-filesystem-acl-screen) screen.

#### Delete SMB Share Dialog

The <span class="material-icons">delete</span> trash can icon displays the **Delete** dialog.

![DeleteSMBShareDialog](/images/SCALE/22.12/DeleteSMBShareDialog.png "Delete SMB Share")

Select **Confirm** to activate the **Delete** button.

## Sharing SMB Details Screen

**Windows SMB Share <span class="material-icons">launch</span>** displays The **Sharing >SMB** details screen. From this screen, you can add or edit an SMB share on the list. 

![SharingSMBScreen](/images/SCALE/22.12/SharingSMBScreen.png "Sharing SMB Screen")

**Add** displays the **Add SMB** configuration screen.

**Column** button displays a dropdown list of options to customize the list view. Options include **Unselect All**, **Path**, **Description**, **Enabled** and **Reset to Defaults**. 

The **Enabled** checkbox provides the share status. If selected, it indicates the share path is available when the SMB service is active. If cleared, it disables but does not delete the share.

The <span class="material-icons">more_vert</span> displays a dropdown list of options for each share. The options include **[Edit](#add-and-edit-smb-screens)** that displays the **Edit SMB** screen, **[Edit Share ACL](#smb-share-acl-screen)** that displays the **Edit Share ACL** screen, **[Edit Filesystem ACL](#edit-filesystem-acl-screen)** that opens the **Edit Filesystem ACL** screen, and **[Delete](#delete-smb-share-dialog)** that displays the **Delete** dialog.

## Add and Edit SMB Screens

The two SMB share configuration screens, **Add SMB** and **Edit SMB**, display the same setting options. 

Click **Save** to create the share (or save an existing one) and add it to the **Shares > Windows (SMB) Shares** and **Sharing SMB** details lists.

### Basic Options Settings
The **Basic Options** settings in this section display on the **Advanced Options** settings screen.

![AddShareBasicOptions](/images/SCALE/22.02/AddShareBasicOptions.png "Add SMB Basic Options")

| Setting | Description |
|---------|-------------|
| **Path** | Enter the path or use the <span class="material-icons">arrow_right</span> icon to the left of **<span class="material-icons">folder</span>/mnt** to locate the dataset and populate the path. **Path** is the directory tree on the local file system that TrueNAS exports over the SMB protocol. |
| **<span class="material-icons">folder</span>/mnt** | Click the <span class="material-icons">arrow_right</span> icon to expand the path at each dataset until you get to the SMB share dataset you want to use. This populates the **Path**. |
| **Name** | Enter a name for this share that is less than or equal to 80 characters. Because of how the SMB protocol uses the name, the name must not exceed 80 characters. The name cannot have invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6. If not supplied, the share name becomes the last component of the path. This forms part of the full share path name when SMB clients perform and SMB tree connect. If you change the name follow the naming conventions for [files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions) or [share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea). |
| **Purpose** | Select a preset option from the dropdown list. The option applies predetermined settings ([presets](#advanced-options-presets)) and disables changing some share setting options. Select **No presets** to retain control over all **Advanced Options** settings. Select  **Default parameters for cluster share** when setting up an SMB cluster share. **Default share parameters** is the default option when you open the **Add SMB** screen and to use for any basic SMB share. Other options are **Multi-User time machine**, **Multi-Protocol (NFSv3/SMB) shares**, **Private SMB Datasets and Shares**, or **SMB WORM. Files become read-only via SMB after 5 minutes**. Note: The **SMB WORM** preset only impacts writes over the SMB protocol. Prior to deploying this option in a production environment the user needs to determine whether the feature meets his / her requirements. |
| **Description** | Enter a brief description or notes on how you use this share.  |
| **Enabled** | Selected by default to enable sharing the path when the SMB service is activated. Clear to disable this SMB share without deleting it. |

### Advanced Options Settings

Click **Advanced Options** to display settings made available or locked based on the option selected in **Purpose**. 

#### Access Settings

The **Access** settings let you customize access to the share and files. They also let you specify allow or deny access for host names or IP addresses.

![AddSMBAdvancedAccessSettings](/images/SCALE/22.02/AddSMBAdvancedAccessSettings.png "Add SMB Advanced Options Access")

| Setting | Description |
|---------|-------------|
| **Enable ACL** | Select to enable ACL support for the SMB share. A warning displays if you clear this option and the SMB dataset has a ACL, and you are required to strip the ACL from the dataset prior to creating the SMB share. |
| **Export Read Only** | Select to prohibit writes to the share. |
| **Browsable to Network Clients** | Select to determine whether this share name is included when browsing shares. Home shares are only visible to the owner regardless of this setting. Enabled by default. |
| **Allow Guest Access** | Select to enable. Privileges are the same as the guest account. Guest access is disabled by default in Windows 10 version 1709 and Windows Server version 1903. Additional client-side configuration is required to provide guest access to these clients.<br><br> **MacOS clients**: Attempting to connect as a user that does not exist in FreeNAS *does not* automatically connect as the guest account. You must specifically select the **Connect As: Guest** option in macOS to log in as the guest account. See the [Apple documentation](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac) for more details. |
| **Access Based Share Enumeration** | Select to restrict share visibility to users with read or write access to the share. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page. |
| **Hosts Allow** | Enter a list of allowed host names or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. You can find a more detailed description with examples [here](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html#HOSTSALLOW).
| **Hosts Deny** | Enter a list of denied host names or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. |

#### Other Settings

The **Other Options** settings are for improving Apple software compatibility, ZFS snapshot features, and other advanced features.

![AddSMBAdvancedOtherSettings](/images/SCALE/22.02/AddSMBAdvancedOtherSettings.png "Add SMB Advanced Options Other")

| Setting | Description |
|---------|-------------|
| **Use as Home Share** | Select to allow the share to host user home directories. Each user has a personal home directory they use when connecting to the share that is not accessible by other users. Home Shares allow for personal, dynamic shares. You can only use one share as the home share. See [Adding an SMB Home Share]({{< relref "AddSMBHomeShare.md" >}}) for more information. |
| **Time Machine** | Enables [Apple Time Machine](https://support.apple.com/en-us/HT201250) backups on this share. This option requires SMB2/3 protocol extension support. You can enable this in the general SMB server configuration. |
| **Legacy AFP Compatibility** | Select to enable the share to behave like the deprecated Apple Filing Protocol (AFP). Leave cleared for the share to behave like a normal SMB share. This option controls how the SMB share reads and writes data. Only enable this when this share originated as an AFP sharing configuration. You do not need legacy compatibility for pure SMB shares or macOS SMB clients. This option requires SMB2/3 protocol extension support. You can enable this in the general SMB server configuration. |
| **Enable Shadow Copies** | Select to export ZFS snapshots as [Shadow Copies](https://docs.microsoft.com/en-us/windows/win32/vss/shadow-copies-and-shadow-copy-sets) for Microsoft Volume Shadow Copy Service (VSS) clients. |
| **Export Recycle Bin** | Select to enable. Deleted files from the same dataset move to the **Recycle Bin** and do not take any additional space. Deleting files over NFS removes the files permanently. Files in a different dataset or a child dataset copy to the dataset with the recycle bin. To prevent excessive space usage, TrueNAS deletes files larger than 20 MiB rather than move them. Adjust the **Auxiliary Parameter** by adding the `crossrename:sizelimit=` setting to allow larger files. For example, `crossrename:sizelimit=<i>50</i>` allows moves of files up to 50 MiB in size. Export Recycle Bin permanently deletes or moves files from the recycle bin. It is not a replacement for ZFS snapshots. |
| **Use Apple-style Character Encoding** | Select to convert NTFS illegal characters in the same manner as macOS SMB clients. By default, Samba uses a hashing algorithm for NTFS illegal characters. |
| **Enable Alternate Data Streams** | Select to allow multiple [NTFS data streams](https://www.ntfs.com/ntfs-multiple.htm). Disabling this option causes macOS to write streams to files on the file system. |
| **Enable SMB2/3 Durable Handles** | Select to allow using open file handles that can withstand short disconnections. Support for POSIX byte-range locks in Samba is also disabled. We don't recommend this option when configuring multi-protocol or local access to files. |
| **Enable FSRVP** | Select to enable support for the File Server Remote VSS Protocol ([FSVRP](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-fsrvp/dae107ec-8198-4778-a950-faa7edad125b)). This protocol allows remote procedure call (RPC) clients to manage snapshots for a specific SMB share. The share path must be a dataset mount point. Snapshots have the prefix `fss-` followed by a snapshot creation timestamp. A snapshot must have this prefix for an RPC user to delete it. |

#### Path Suffix and Auxiliary Parameters Settings

Use **Path Suffix** to provide individualized shares on a per-user, computer, or IP address basis. Use **Auxiliary Parameters** to enter additional settings.

![AddSMBAdvancedPathSuffixAuxParam](/images/SCALE/22.02/AddSMBAdvancedPathSuffixAuxParam.png "Add SMB Advanced Path Suffix")

| Setting | Description |
|---------|-------------|
| **Path Suffix** | Appends a suffix to the share connection path. Use this to provide individualized shares on a per-user, per-computer, or per-IP address basis. Suffixes can contain a macro. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page for a list of supported macros. The connect path must be preset before a client connects. |
| **Auxiliary Parameters** | Enter additional [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) settings. |

#### Advanced Options Presets

The **Purpose** setting you select in the **Basic Options** affects which **Advanced Options** settings (presets) you can select. Some presets are available or locked based on your choice. 
The expandable below provides a comparison table that lists these presets and shows whether the option is available or locked.

{{< expand "What do all the presets do?" "v" >}}
The following table shows the preset options for the different **Purpose** options and if those are locked.      
A <i class="material-icons" aria-hidden="true" title="System Update">check_box</i> indicates the option is enabled while <i class="material-icons" aria-hidden="true" title="System Update">check_box_outline_blank</i> means the option is disabled. [ ] indicates empty text fields, and [%U] indicates the option the preset created.

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
| **Auxiliary Parameters** | [ ] | [ ] | [ ] | [ ] | [ ] |

[Back to Advanced Options Settings](#advanced-options-settings)
{{< /expand >}}

## SMB Share ACL Screen

The **SMB Share ACL** screen displays when you click **Edit Share ACL** from the <span class="material-icons">more_vert</span> options list on the [**Sharing SMB** details screen](#sharing-smb-details-screen). 
These settings configure new ACL entries for the selected SMB share and apply at the entire SMB share level. It is separate from file system permissions.

![SMBShareACLScreen](/images/SCALE/22.02/SMBShareACLScreen.png "SMB Share ACL Screen")

### Basic Settings

| Setting | Description |
|---------|-------------|
| **Share Name** | Displays the share name. This field is read-only. |

### ACL Entries Settings

**ACL Entries** are listed as a block of settings. Click **Add** to add a new entry.

| Setting | Description |
|---------|-------------|
| **SID** | Enter a SID trustee value (who) this ACL entry (ACE) applies to. SID is a unique value of variable length that identifies the trustee. Shown as a [Windows Security Identifier](https://docs.microsoft.com/en-us/windows/win32/secauthz/security-identifiers). If not specified, you must enter a value in **Domain**. |
| **Domain** | Enter the domain for the user specified in **Name**. Required when no **SID** value is present. Local users have the SMB server NetBIOS name: *truenas\\smbusers*. |
| **Name** | Enter a user name (who) this ACL entry applies to, shown as a user name. Requires adding the user **Domain**. |
| **Permission** | Select predefined permission combinations from the dropdown list. Select **Read** to grant read access and execute permission on the object (RX). Select **Change** to grant read access, execute permission, write access, and delete object (RXWD) permissions. Select **Full** to grant read access, execute permission, write access, delete objects, change permissions, and take ownership (RXWDPO) permissions. For more details, see [smbacls(1)](https://www.samba.org/samba/docs/current/man-html/smbcacls.1.html). |
| **Type** | Select the option from the dropdown list that specifies how TrueNAS applies permissions to the share. Select **Allowed** to deny all permissions by default, except manually defined permissions. Select **Denied** to allow all permissions by default, except manually defined permissions. |

**Save** stores the share ACL and immediately applies it to the share.

## Edit Filesystem ACL Screen

**Edit Filesystem ACL** opens **Storage > Edit *POSIX.1e* ACL** with an **ACL Editor** screen. 

![SMBACLEditor](/images/SCALE/22.12/SMBACLEditor.png "SMB ACL Editor")

The ACL editor screen type depends on the SMB dataset **ACL Type** selection. 
If set to **NFSv4**, the editor displayed is an NFSv4-type editor. If set to **POSIX**, the first screen displayed is the **Select a preset** window followed by the POSIX type editor.
See [Edit ACL Screens]({{< relref "EditACLScreens.md" >}}) or [Permissions]({{< relref "PermissionsScale.md" >}}) for more information on configuring permissions.

{{< taglist tag="scalesmb" limit="10" >}}
{{< taglist tag="scaleafp" limit="10" title="Related AFP Articles" >}}
