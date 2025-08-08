---
title: "SMB Shares Screens"
description: "Provides information on SMB share screens and settings."
weight: 20
aliases:
- /scale/scaleuireference/shares/smb/smbsharesscreens/
- /scale/scaleuireference/shares/smb/
- /scale/scaleclireference/sharing/clismb/
tags:
- smb
- afp
- acl
- data sharing
---

## Windows (SMB) Shares Widget

If you have not added SMB shares to the system, the SMB widget shows text stating general information about the Windows (SMB) Shares until a share is added.

{{< trueimage src="/images/SCALE/Shares/WindowsSMBShareWidgetNoShares.png" alt="Windows (SMB) Share Widget without Shares" id="Windows (SMB) Share Widget without Shares" >}}

**Add** at the top right of the widget opens the [**Add SMB** screen](#add-and-edit-smb-screens) where you configure SMB shares.

After adding an SMB share, it is listed in the table on the widget.

{{< trueimage src="/images/SCALE/Shares/WindowsSMBShareWidget.png" alt="Windows (SMB) Share Widget with Shares" id="Windows (SMB) Share Widget with Shares" >}}

The **Windows (SMB) Shares <span class="material-icons">launch</span>** header shows the status of the SMB service as either **STOPPED** (red) or **RUNNING** (green). Before adding the first share, the **STOPPED** status displays in the default color.
The header is a link that opens the [**Sharing > SMB** screen](#smb-screen).

The <span class="material-icons">more_vert</span> dropdown list shows four options available to SMB shares and the SMB service in general:

* **Turn Off/ON Service** toggles to **Turn Off Service** when the SMB service is enabled, and to **Turn On Service** when the SMB service is disabled.
* **Config Service** opens the [**SMB**]({{< ref "SMBServicesScreen" >}}) configuration screen.
* **SMB Sessions** opens the **SMB Status** screen with showing **Sessions**.
* **Audit Logs** opens the [**Audit** screen]({{< ref "AuditingSCALE" >}}) with a predefined filter applied to show the SMB logs.

The widget shows a table listing SMB shares created in TrueNAS.
Each SMB share row on the **Windows (SMB) Shares** widget shows the path to the shared dataset, a description if one is entered when the share is added, an **Enabled** toggle that allows you to enable or disable the share, and indicates if audit logging is turned on/off.

The <span class="material-icons">more_vert</span> dropdown list for each share shows four options:

* **<span class="material-icons">edit</span> Edit** opens the [**Edit SMB** screen](#add-and-edit-smb-screens).
* **Edit Share ACL** opens the [**Edit Share ACL**](#edit-share-acl-screen) screen.
* **Edit Filesystem ACL** opens the [**Edit ACL**](#edit-filesystem-acl-screen) screen.
* **<span class="material-icons">delete</span> Delete** opens the [**Delete** dialog](#delete-smb-share-dialog).

### Delete SMB Share Dialog

The <span class="material-icons">delete</span> delete icon opens the **Delete** dialog.

{{< trueimage src="/images/SCALE/Shares/DeleteSMBShareDialog.png" alt="Delete SMB Share" id="Delete SMB Shares" >}}

Select **Confirm** to activate the **Delete** button.

## SMB Screen

The **Shares > SMB** screen shows an expanded presentation of the table on the **Windows (SMB) Shares** widget.

{{< trueimage src="/images/SCALE/Shares/SharesSMBScreen.png" alt="Shares SMB Screen" id="Shares SMB Screen" >}}

**Shares** in the breadcrumb at the top of the screen returns you to the main **Shares** dashboard.

**SMB Sessions** opens the [**SMB Status**](#smb-status-screens) screen.

**Columns** shows a set of options to customize the list view.
Options include **Unselect All**, **Path**, **Description**, **Enabled** and **Reset to Defaults**.

**Add** opens the [**Add SMB**](#add-and-edit-smb-screens) configuration screen.

### SMB Table

The **SMB** table lists all SMB shares added to the system.
The table header shows the status of the SMB service as stopped or running.
The table columns show the share name, the path to the dataset for the share, and a description, if added during share creation.
The **Enabled** toggle allows you to enable/disable the share. When enabled, the share path is available when the SMB service is active.
If disabled, the share is disabled but not deleted from the system.
**Audit Logging** indicates whether auditing for the share is enabled or disabled.

The <span class="material-icons">more_vert</span> dropdown list at the right of each table row shows four options for a share:

* **[Edit](#add-and-edit-smb-screens)** opens the **Edit SMB** screen.
* **[Edit Share ACL](#edit-share-acl-screen)** opens the **Edit Share ACL** screen.
* **[Edit Filesystem ACL](#edit-filesystem-acl-screen)** opens the **Edit ACL** screen.
* **[Delete](#delete-smb-share-dialog)** displays the **Delete** dialog.

## Add and Edit SMB Screens

The two SMB share configuration screens, **Add SMB** and **Edit SMB**, have the same SMB share setting options.

The **Create Dataset** option becomes active after selecting a parent dataset in the **Path** file browse field.
It opens the [**Create Dataset**](#create-dataset) dialog.

**Save** creates the share (or saves an existing one) and adds it to the **Windows (SMB) Shares** widget and the **SMB** table on the **SMB** screen.

### Basic Settings

The **Basic Options** settings show by default on the **Add** and **Edit SMB** screens. Basic settings show for all share options in the **Purpose** dropdown list, only the **External Share** option shows the **Remote Path** setting.

{{< trueimage src="/images/SCALE/Shares/AddShareBasicOptions.png" alt="Add SMB Basic Options" id="Add SMB Basic Options" >}}

{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Path** | Specifies the mount path for the share. It includes a blank field and a file browser field directly below it. The blank field allows text entry of a share mount path or allows Truenas to populate it with the path to the dataset selected in the file browser field. The file browser allows selecting the mount path to the share dataset on the local file system that TrueNAS exports over the SMB protocol. Use the <span class="material-icons">arrow_right</span> icon to the left of <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21L3 9h18l-2 12zm5-6h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5z"/></svg> to expand the dataset directory tree. |
| **Create Dataset** | Creates a dataset for a share while configuring the share. Inactive until the parent dataset is selected. It opens the **Create Dataset** dialog, where you enter a name for a new dataset. The dataset name becomes the SMB share name. **Create** adds the dataset and populates **Name** field on the **Add SMB** screen. |
| **Name** | Sets the name for the share. This text entry field accepts manual entry or copy/paste of a name for the share that does not exceed 80 characters. A name must not exceed 80 characters because of how the SMB protocol uses the name. A name cannot have invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6. <br>**Name** is automatically populated with the name of the dataset when you use **Create Dataset**. If not supplied, the share name becomes the last component of the path. This forms part of the full share path name when SMB clients perform and SMB tree connect. <br>If changing the name, follow the naming conventions for [files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions) or [share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea). |
| **Purpose** | Sets the share type to one selected on the dropdown list. Options are: <br><li>**Default Share** -  <br><li>**Time Machine Share** - <br><li>**Multi-Protocol Share** - The SMB share is configured for multi-protocol (SMB and NFS) access. Set this if the path is shared through NFS, FTP, or used by containers or apps. Note: This setting can reduce SMB share performance because it turns off some SMB features for safer interoperability with external processes.<br><li>**Time Locked Share** - The SMB share makes files read-only through the SMB protocol after the set grace period ends. <br>**WARNINGS**: This setting does not work if the path is accessed locally or if another SMB share without the **Time Locked Share** purpose uses the same path.<br>This setting might not meet regulatory requirements for write-once storage.<br><li>**Private Datasets Share** - This server uses the specified dataset_naming_schema in options to make a new ZFS dataset when the client connects. The server uses this dataset as the share path during the SMB session.<br><li>**External Share** - The SMB share is a DFS proxy to a share hosted on an external SMB server.</li> The selected option applies predetermined settings and changes the settings shown in [**Other Options**](#other-options-settings) when showing advanced options. |
| **Remote Path** | Sets the path to a remote server and share. Each server entry must include a full domain name or IP address and the share name. Separate the server and share name with the `\` characters. Example: *192.168.0.200\SHARE*. This text entry field accepts copy/paste of a path to the external server and share. Shows when **Purpose** is set to **External Share**. |
| **Description** | A text-entry field for a brief description or notes about how this share is used. The description entered shows in the **Description** column on the **Windows (SMB) Shares** widget on the **Shares** dashboard and the **SMB** table on the **SMB** screen. |
| **Enabled** | A toggle that shows the status of the share and allows enabling or disabling the share. This does not enable or disable the SMB service. **Enabled** is the default setting. |
{{< /truetable >}}

### Advanced Options Settings

**Advanced Options** settings are grouped into three categories:

* [**Access**](#access-settings)
* [**Audit Logging**](#audit-logging)
* [**Other Options**](#other-options-settings)

**Access** and **Audit Logging** settings show for all share options in the **Purpose** dropdown list.
The **Other Options** settings change based on the share option selected in the **Purpose** dropdown list.

#### Access Settings

**Access** settings customize access to the share and files, and specify allowed or denied access for host names or IP addresses.
All share options listed in the **Purpose** dropdown show these settings.

{{< trueimage src="/images/SCALE/Shares/AddSMBAdvancedAccessSettings.png" alt="SMB Advanced Options Access" id="SMB Advanced Options Access" >}}

{{< hint type=note >}}
For datasets with **NFSv4** ACL type, SMB clients automatically use access-based enumeration. 
This means directory listings over SMB only include files and directories that the client has read permissions for. 
This behavior is enabled by default and matches FreeBSD behavior.
{{< /hint >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Export Read-Only** | Prohibits writes to the share when enabled. |
| **Browsable to Network Clients** | Determines  whether this share name is included when browsing shares when enabled. This is enabled by default. Private dataset shares (the replacement for home shares) are only visible to the owner, regardless of this setting. |
| **Access Based Share Enumeration** | Restricts share visibility to users with read or write access to the share. This setting applies to datasets with a POSIX ACL type. For datasets with NFSv4 ACL type, access-based enumeration is automatically enabled and does not allow disabling. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page. |
{{< /truetable >}}

#### Audit Logging

The **Audit Logging** settings enable the auditing function for the SMB share and allow configuring a watch list and ignore list groups that administrators want to monitor. All share options listed in the **Purpose** dropdown show these settings.

{{< trueimage src="/images/SCALE/Shares/AddSMBAdvancedAuditLoggingSettings.png" alt="SMB Audit Logging" id="SMB Audit Logging" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable Logging** | Enables audit logging for the SMB share, and shows two additional options: **Watch List** and **Ignore List**. This controls whether audit messages are generated for the share. <br>Note: Auditing might not be enabled if SMB1 support is enabled for the server. |
| **Watch List** | Sets up a list of groups for which you want to generate audit logging messages. Clicking in the field shows the dropdown list of group options. Leave blank to include all SMB users with access to the share. If also setting a limit list, the watch list takes precedence when a conflict occurs. |
| **Ignore List** | When selected, this sets up a list of groups to ignore when auditing. If conflict arises where the same groups are in the **Watch List** and **Ignore List** (based on user group membership), the watch listing takes precedence, and ops is audited. |
{{< /truetable >}}

#### Other Options Settings

The **Other Options** settings vary based on the option selected on the **Purpose** dropdown list.

{{< tabs "Settings by Purpose Type" >}}
{{< tab "Default, Multi-Purpose, and External Shares" >}}
When **Purpose** is set to **Default Share**, **Multi-Purpose Share** or **External Share**, the settings below show in **Other Options**.

{{< trueimage src="/images/SCALE/Shares/AddSMBAdvancedOtherSettingsDefaultShare.png" alt="Other Options Settings" id="Other Options Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use Apple-style Character Encoding** | Implements the default hashing algorithm for NTFS illegal characters that Samba uses. Enabling this option translates NTFS illegal characters to the Unicode private range. Shows for all share types except When **Purpose** is set to the **Time Machine Share** or **External Share**. |
{{< /truetable >}}
{{< /tab >}}
{{< tab "Time Machine Share" >}}
When **Purpose** is set to **Time Machine Share** the following settings show in **Other Options**.

{{< trueimage src="/images/SCALE/Shares/AddSMBAdvancedSettingsTimeMachineShare.png" alt="Other Options - Time Machine Share" id="Other Options - Time Machine Share" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Time Machine Quota** | Sets the quota for Time Machine shares in bytes. |
| **VUID** | Sets the user session identifier to a valid universally unique identifier that conforms to the UUID version 4 format (UUID4). A UUID4 string is defined by RFC 4122. UUID4 strings are randomly generated 128-bit values, typically represented as a 36-character hexadecimal string in the format 8-4-4-4-12 (e.g., 123e4567-e89b-12d3-a456-426614174000). Samba uses the UUID to identify the share uniquely for Mac OS Time Machine backups, ensuring the share is recognized as a valid backup destination. You can generate a UUID4 string using a variety of commands or through websites like https://www.uuidgenerator.net/. |
| **Auto Snapshot** | When selected, enables automatic snapshot creation for Time Machine shares. |
| **Auto Dataset Creation** | When selected, TrueNAS creates a dataset automatically if one does not exist. |
{{< /truetable >}}
{{< /tab >}}
{{< tab "Time Locked Share" >}}
When **Purpose** is set to **Time Locked Share**, these settings show in **Other Options**.

{{< trueimage src="/images/SCALE/Shares/AddSMBAdvancedSettingsTimeLockedShare.png" alt="Other Options - Time Locked Shares" id="Other Options - Time Locked Shares" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use Apple-style Character Encoding** | Implements the default hashing algorithm for NTFS illegal characters that Samba uses. Enabling this option translates NTFS illegal characters to the Unicode private range. |
| **Grace Period** | Sets the delay before access times out or the share locks. Only shows when **Purpose** is set to the **Time Locked Share** option. |
{{< /truetable >}}
{{< /tab >}}
{{< tab "Private Datasets Share" >}}
When **Purpose** is set to **Private Dataset Share** the following settings show in **Other Options**.

{{< trueimage src="/images/SCALE/Shares/AddSMBAdvancedSettingsPrivateDatasetslShare.png" alt="Other Options - Private Dataset Share" id="Other Options - Private Dataset Share" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use Apple-style Character Encoding** | Implements the default hashing algorithm for NTFS illegal characters that Samba uses. Enabling this option translates NTFS illegal characters to the Unicode private range. When **Purpose** is set to the **Time Machine Share** or **External Share** options, this setting does not show. |
| **Dataset Naming Schema**  | Sets TrueNAS to require the naming schema used when **Auto Dataset Creation** is enabled. If a schema is not set, the server uses the username if it is not joined to Active Directory. If the server is joined to Active Directory, it uses domain/username. Only shows when **Purpose** is set to the **Private Dataset Share** option. |
| **Auto Quota** | Sets the specified ZFS quota in gibibytes (GiB) on new datasets. If the value is zero, TrueNAS disables automatic quotas for the share. Only shows when **Purpose** is set to the **Private Dataset Share** option. |
{{< /truetable >}}
{{< /tab >}}
{{< /tabs >}}

<!-- Commenting out these settings, that apply to the Legacy Share option. Ex. mgmnt decided that this option is not to be exposed in the UI, but the following settings might show for shares from earlier releases that upgrade to Goldeye release. We need to validate what happens and what users see.

{{< include file="/static/includes/auxiliary-parameters-caution.md" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use as Home Share** | Select to allow the share to host user home directories. Each user has a personal home directory that they use when connecting to the share that is not accessible by other users. Home Shares allow for personal, dynamic shares. You can only use one share as the home share. See [Adding an SMB Home Share]({{< ref "SMBPrivateDatasetShare" >}}) for more information. |
| **Time Machine** | Enables [Apple Time Machine](https://support.apple.com/en-us/HT201250) backups on this share. This option requires SMB2/3 protocol extension support. You can enable this in the general SMB server configuration. |
| ** Time Machine Quota** | Visible when **Time Machine** is enabled. Sets a maximum limit on storage consumed by Time Machine backups. This applies to the entire share. |
| **Legacy AFP Compatibility** | Select to enable backend compatibility with metadata written by legacy netatalk implementations. This option configures Samba to properly read and present Apple Filing Protocol (AFP) metadata, such as resource forks to SMB clients. Only enable this option when migrating data that was previously shared via the AFP. Pure SMB shares and standard macOS SMB clients do not require this compatibility option. |
| **Enable Shadow Copies** | Select to export ZFS snapshots as [Shadow Copies](https://docs.microsoft.com/en-us/windows/win32/vss/shadow-copies-and-shadow-copy-sets) for Microsoft Volume Shadow Copy Service (VSS) clients. |
| **Export Recycle Bin** | Select to enable. Deleted files are renamed to a per-user subdirectory within the `.recycle` directory at either the root of the SMB share if the path is the same dataset as the SMB share (default is share and dataset have the same name), or at the root of the current dataset if datasets are nested. Nested datasets do not have automatic deletion based on file size. Do not rely on this function for backups or replacements of ZFS snapshots. |
| **Use Apple-style Character Encoding** | By default, Samba uses a hashing algorithm for NTFS illegal characters. Enabling this option translates NTFS illegal characters to the Unicode private range. Select to convert NTFS illegal characters in the same manner as macOS SMB clients. By default, Samba uses a hashing algorithm for NTFS illegal characters. Apple extension options cannot be set if **Purpose** is set to the multi-protocol option. |
| **Enable Alternate Data Streams** | Select to allow multiple [NTFS data streams](https://www.ntfs.com/ntfs-multiple.htm). Disabling this option causes macOS to write streams to files on the file system. |
| **Enable SMB2/3 Durable Handles** | Select to allow using open file handles that can withstand short disconnections. Support for POSIX byte-range locks in Samba is also disabled. This option is not recommended when configuring multi-protocol or local access to files. |
| **Enable FSRVP** | Select to enable support for the File Server Remote VSS Protocol ([FSVRP](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-fsrvp/dae107ec-8198-4778-a950-faa7edad125b)). This protocol allows remote procedure call (RPC) clients to manage snapshots for a specific SMB share. Requires setting the share path to a dataset mount point. Snapshots have the prefix `fss-` followed by a snapshot creation timestamp. A snapshot must have this prefix for an RPC user to delete it. |
| **Path Suffix** | Appends a suffix to the share connection path. Use to provide individualized shares on a per-user, per-computer, or per-IP address basis. Suffixes can contain a macro. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page for a list of supported macros. The connection path must be preset before a client connects. |
| **Additional Parameters String** | Shows a string of parameters associated with the share preset selected, or if no preset, enter additional smb4.conf parameters not covered by the TrueNAS API. | 
{{< /truetable >}} 

#### Other Options

The **Other Options** show after selecting **Advanced Options**. The **Purpose** setting sets default options and affects which other settings (presets) are selectable. Some options are available or locked based on the choice.
The expandable below provides a comparison table listing these preset options and shows whether the option is available or locked.

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
{{< /expand >}} -->

#### Create Dataset

The **Create Dataset** dialog adds a new dataset under the parent dataset selected in the file browser **Path** field on the **Add SMB** or **Edit SMB** share screens.

{{< trueimage src="/images/SCALE/Shares/CreateDatasetDialog.png" alt="Create Dataset Dialog" id="Create Dataset Dialog" >}}

## Edit Share ACL Screen

The **Share ACL for *sharename*** screen edits permissions at the share level for the selected share.
Settings configure new ACL entries for the selected SMB share and apply them at the entire SMB share level, but do not apply to the dataset.
It is separate from file system permissions.
To configure dataset permissions, use the **Edit Filesystem ACL** option.

The **Share ACL for *sharename*** screen opens after clicking on the <i class="material-icons" aria-hidden="true" title="share">share</i> **Edit Share ACL** icon on the **Windows (SMB) Shares** widget or the <span class="material-icons">more_vert</span> on the [**Sharing SMB** details screen](#sharing-smb-details-screen).

{{< trueimage src="/images/SCALE/Shares/SMBShareACLScreen.png" alt="SMB Share ACL Screen" id="SMB Share ACL Screen" >}}

**ACL Entries** shows a block of settings that specify who and the permissions they are granted.

**Add** shows a block of these settings to enter who, the permissions level, and type.

**Save** stores the share ACL and immediately applies it to the share.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **SID** | Shows the security identifier (SID) trustee value or to whom this ACL entry (ACE) applies. SID is a unique value of variable length that identifies the trustee. Shown as a [Windows Security Identifier](https://docs.microsoft.com/en-us/windows/win32/secauthz/security-identifiers). **Save** and re-open **Edit Share ACL** to update. |
| **Who** | Sets permissions to apply to the ACL entry for the domain for the selected account (who). Options are:<br><li>**User** - Select to show the **User** field. Enter or select a user (who) from the dropdown list to apply the permissions for this ACL entry, shown as a username.<br><li>**Group** - Select to show the **Group** field. Enter or select a group (who) from the dropdown to apply the permissions for this ACL entry, which is shown as a group name.<br><li>**everyone** - Select to apply the ACL entry permissions to everyone.</li> |
| **Permission** |Sets the level of access to a selected predefined permission combination from the dropdown list. Options are: <br><li>**FULL** - Grants read access, execute permission, write access, delete objects, change permissions, and take ownership (RXWDPO) permissions. <br><li>**CHANGE** - Grants read access, execute permission, write access, and delete object (RXWD) permissions. <br><li>**READ** - Grants read access and execute permission on the object (RX). For more details, see [smbacls(1)](https://www.samba.org/samba/docs/current/man-html/smbcacls.1.html).</li> |
| **Type** | Sets how TrueNAS applies permissions to the share to the selected option on the dropdown list. Options are: <br><li>**ALLOWED** - Denies all permissions by default, except manually defined permissions. <br><li>**DENIED** - Allows all permissions by default, except manually defined permissions.</li> |
{{< /truetable >}}

## Edit Filesystem ACL Screen

The **Edit Filesystem ACL** option sets permissions at the dataset level. It opens the **Edit ACL** screen for the dataset the share uses.
See [**Edit ACL Screen**]({{< ref "EditACLScreens" >}}) for more information on the settings found on this screen.

{{< trueimage src="/images/SCALE/Shares/SMBACLEditor.png" alt="SMB ACL Editor" id="SMB ACL Editor" >}}

Use the ACL editor screen to set file system permissions for the shared dataset.
See [Permissions]({{< ref "PermissionsSCALE" >}}) for more information on configuring permissions.

## SMB Status Screens

The **SMB Status** screen shows a table of SMB session IDs from the audit logs for SMB share sessions.
It opens after clicking **SMB** on the <i class="material-icons" aria-hidden="true" title="list">list</i> icon on the **System > Services** screen, or after clicking **SMB Sessions** on the <span class="material-icons">more_vert</span> dropdown list on the **Windows (SMB) Shares** widget.

{{< trueimage src="/images/SCALE/Shares/SMBStatusScreenSessionsTab.png" alt="SMB Status Sessions Tab" id="SMB Status Sessions Tab" >}}

The **SMB Status** screen shows information related to SMB sessions, for example:

* **Sessions ID** - The current SMB sessions (default view).
* **Hostname** - The host name associated with the session ID.
* **Remote machine** - The remote machine information.
* **Username** - The username associated with the session.
* **UID** - The user ID associated with the session.
* **GID** - The group ID for the user associated with the session.
* **Session Dialect** - The version of the SMB protocol.
* **Encryption** - The share encryption.
* **Signing** - The security mechanism used, such as an authentication algorithm like *AES-128-GCM*, etc.

**Refresh** updates the information shown on the screen.

**Column** shows a dropdown list of options to customize the information included in the table on the screen.

**Sharing** or **SBM** on the top breadcrumb returns to the selected screen name.

{{< include file="/static/includes/addcolumnorganizer.md" >}}
