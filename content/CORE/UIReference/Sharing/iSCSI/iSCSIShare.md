---
title: "iSCSI Shares"
description: "This article describes how to configure iSCSI block share on TrueNAS CORE."
weight: 10
alias: /core/sharing/iscsi/iscsishare/
tags:
- coreiscsi
- corefibrechannel
---

{{< toc >}}

Users can configure an iSCSI block share using either the wizard or the individual configuration screens. The wizard steps users through the configuration process in an ordered sequence. Using the seven tabs on the **iSCSI** screen allows users to configure settings in any order they choose (a manual process). 

## iSCSI Wizard Configuration Screens

The iSCSI Wizard configuration forms guide users through the process of setting up an iSCSI block share. Click **WIZARD** to display the first configuration screen.

### Wizard Navigation

Use **Next** to advance to the next wizard configuration form.
Use **Back** to return to a previous wizard configuration form.
Use **Cancel** to exit the configuration wizard.

{{< expand "Wizard Configuration Screens and Settings" >}}
{{< expand "Create or Choose Block Device Screen Settings">}} 
### Create or Choose Block Device

![SharingISCSIWizardDevice](/images/CORE/12.0/SharingISCSIWizardDevice.png "iSCSI Wizard: Block Device")

| Setting | Description |
|---------|-------------|
| **Name** | Type a lower case alphanumeric character string that can include a dot (.), dash (-), or colon (:). Keep the string short and do not exceed 63 characters. |
| **Extent Type** | Choose either **Device** or **File**. If selecting **Device** use a zvol created for the share. If selecting **File** also select the path to the extent and include the file size. |
| **Device** | Required field. Create New or select from devices listed |
| **Sharing Platform** | Select from the options provided:<br> **VMware: extent block size 512b, TCP enabled, no Xen compat mode, SSD speed** <br> **Xen: Extent block size 512b, TCP enabled, Xen compat mode enabled, SSD speed** <br> **Legacy OS: Extent block size 512b, TCP enabled, no Xen compat mode, SSD speed** <br> **Modern OS: Extent block size 4k, TCP enabled, no Xen compat mode, SSD speed** <br> Use Moderon OS for updated operating systems like Linux OS. |
{{< /expand >}}
{{< expand "Portal Screen Settings" >}}
### Portal 

The Wizard **Portal** configuration form includes only the **Portal** field unless you select **Create New** on the dropdown list. 

![iSCSIWizardPortalAfterCreateNewAndAddIPAddress](/images/CORE/12.0/iSCSIWizardPortalAfterCreateNewAndAddIPAddress.png "iSCSI Wizard: Portal")  

| Setting | Description |
|---------|-------------|
| **Portal** | Select either **Create New** or an existing portal from the dropdown list. Selecting **Create New** displays the **Discovery Authentication Method**, **Discovery Authentication Group**, **IP Address** and **Port** fields. |
| **Discovery Authentication Method** | Required if creating a new portal. Select either **NONE**, **CHAP** or **Mutual CHAP** from the dropdown list. If **NONE** you can leave **Discovery Authentication Group** set to **NONE** as well. |
| **Discovery Authentication Group** | Required if the discovery authentication method is set to CHAP or MUTUAL CHAP. Select either **NONE** or **Create New** on the dropdown list. If **Discovery Authentication Method** is set to **NONE** you can select **NONE** here but if **Discovery Authentication Method** is set to **CHAP** or **MUTUAL CHAP** select **CREATE NEW**. This displays the **Group ID**, **User**, **Secret** and **Secret (Confirm)** configuration fields. | 
| **Group ID** | Displays after selecting **Create New** in the **Discovery Authentication Group** field. Group IDs allow you to configure different groups with different authentication profiles. For example, all users with a group ID of 1 inherits the authentication profile associated with group 1. Type a number for the group ID. |
| **User** | Displays after selecting **Create New** in for the discovery authentication group. Type the name of the user account to create for the CHAP authentication with the user on the remote system. For example, you could use the initiator name as the user name. |
| **Secret** | Displays after selecting **Create New** as the discovery authentication group. Type a user password of at least 12 but no more than 16 characters. |
| **Secret (Confirm)** | Displays after selecting **Create New** as the discovery authentication group. Retype the user password entered into the **Secret** field. Click the <i class="fa fa-eye-slash" aria-hidden="true"></i> icon to display the characters you typed to verify you typed the desired password string. Click <i class="fa fa-eye" aria-hidden="true"></i> to hide the password string. |
| **IP Address** | Select the IP address from the dropdown list. This is the IP address to list on the portal. Click **ADD** to add more IP addresses if desired or necessary. Click **DELETE** to remove any IP addresses and ports you added after clicking **ADD**. Use **0.0.0.0** to listen on all IPv4 addresses or use **::** to listen on all IPv6 IP addresses. |
| **Port** | Type the TCP port used to access the iSCSI target. The default port is **3260**. |
| **ADD** | Saves the selected IP address and allows the user to add another IP address. New IP address and port entry fields includes the **DELETE** button allows you to remove the new entry if necessary. |
| **DELETE** | Displays after clicking **ADD**. Removes the new IP address and port line created after clicking **ADD**. |
{{< /expand >}}
{{< expand "Initiator Screen Settings" >}}
### Initiator 

![SharingISCSIWizardInitiator](/images/CORE/12.0/SharingISCSIWizardInitiator.png "iSCSI Wizard: Initiator")

| Setting | Description |
|---------|-------------|
| **Initiators** | Leave blank to allow all host names or to enter a list of initiator host names. Use the keyboard <kbd>Enter</kbd> after entering each host name to save. |
| **Authorized Networks** | Network addresses allowed to use this initiator. Leave blank to allow all networks or list all network addresses with a CIDR mask. Separate each entry with the keyboard  <kbd>Enter</kbd>. |
{{< /expand >}}
{{< expand "Confirm Options Screen Settings" >}}
### Confirm Options Form

![SharingISCSIWizardSummary](/images/CORE/12.0/SharingISCSIWizardSummary.png "iSCSI Wizard: Summary")

Use **Back** to return to a previous configuration form to make any changes on that form.
Use **SUBMIT** to save the settings and the new iSCSI share.
{{< /expand >}}
{{< /expand >}}

## Manual Setup Screens

The manual configuration screens allow you to add or edit an iSCSI block share. 
There are seven configuration screens accessed from tabs at the top of the **iSCSI** screen. 
Unlike the wizard configuration option, you can move from one screen to another in any sequence.

{{< expand "Manual Configuration Screens and Settings" >}}
{{< expand "Target Global Configuration Tab" >}}

The **Target Global Configuration** screen allows user to add or edit global configuration settings that apply to all iSCSI shares. 

![SharingISCSIManualTargetGlobalConfig](/images/CORE/12.0/SharingISCSIManualTargetGlobalConfig.png "iSCSI Target Global Configuration")

| Setting | Description |
|---------|-------------|
| **Base Name** | Lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) are allowed. See the "Constructing iSCSI names using the *iqn.format*" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). |
| **ISNS Servers** | Host names or IP addresses of the ISNS servers to register with the iSCSI targets and portals of the system. Use keyboard <kbd>Enter</kbd>. to separate entries. |
| **Pool Available Space Threshold (%)** | Generates an alert when the pool has this percent space remaining. It is typical to configure this at the pool level when using zvols or at the extent level for both file and device-based extents. |

Click **SAVE** before leaving the global configuration settings screen.
{{< /expand >}}
{{< expand "Portals Tab" >}}

The **Portals** screen displays a list of configured portals. It lets users create new portals or edit the existing ones in the list. 
Use the blue **Columns** dropdown list to display a list of available options to add or remove columns in the **Portals** table. Select from **Unselect All**, **Listen**, **Description**, **Discovery Auth Method**, **Discover Auth Group** or **Reset to Defaults** to reverse any changes you made to the table.

![SharingISCSIManualPortals](/images/CORE/12.0/SharingISCSIManualPortals.png "iSCSI Portal")

Use **ADD** to display the **Portals Add** configuration form. 
Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for the portal and select **Edit** to display the **Portal Edit** configuration form. 
Both the **Add** and **Edit** forms have the same settings fields.

![SharingISCSIManualPortalsForm](/images/CORE/12.0/SharingISCSIManualPortalsForm.png "iSCSI Portals Form")

**Basic Info**
| Setting | Description |
|---------|-------------|
| **Description** | Optional description. Portals are automatically assigned a numeric group. |

**Authentication Method and Group**
| Setting | Description |
|---------|-------------|
| **Discovery Authentication Method** | iSCSI supports multiple authentication methods that the target uses to discover valid devices. **None** allows anonymous discovery while **CHAP** and **Mutual CHAP** require authentication. |
| **Discovery Authentication Group** | Group ID created in Authorized Access. Required when the discovery authentication method is CHAP or Mutual CHAP. |

**IP Address**
| Setting | Description |
|---------|-------------|
| **IP Address** | Select the IP addresses the portal uses to listened on. Click **ADD** to add IP addresses with a different network port. **0.0.0.0** listens on all IPv4 addresses and **::** listens on all IPv6 addresses. |
| **Port** | TCP port used to access the iSCSI target. Default is **3260**. |
| **ADD** | Adds another IP address row. |
{{< /expand >}}
{{< expand "Initiators Groups Tab" >}}

The **Initiators Groups** screen displays a lis of configured initiators. It lets users create new authorized access client groups or edit existing ones on the list. 
Use the blue **Columns** dropdown list to display a list of available options to add or remove columns in the **Initiator Groups** table. Select from **Unselect All**, **Initiators**, **Authorized Networks**, **Description** or **Reset to Defaults** to reverse any changes you made to the table.

![SharingISCSIManualInitiators](/images/CORE/12.0/SharingISCSIManualInitiators.png "iSCSI Initiators Groups")

Use **ADD** to display the **Initiators Add** configuration screen. 
Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for the initiator and select **Edit** to display the **Initiators Edit** configuration form. 
Both the **Add** and **Edit** forms have the same settings fields.

![iSCSIAddInitiators](/images/CORE/13.0/iSCSIAddInitiators.png "iSCSI Add Initiators") 

| Setting | Description |
|---------|-------------|
| **Connected Initiators** | Initiators currently connected to the system, displayed in the IQN format with an IP address. Set initiators and click an <i class="fa fa-arrow-right" aria-hidden="true"></i> to add the initiators to either the **Allowed Initiators** or **Authorized Networks** lists. Click **Refresh** to update the list of connected initiators. |
| **Allow All Initiators** | Allows all initiators when selected. If not selected, configure your own allowed initiators and authorized networks. |
| **Allowed Initiators (IQN)** | Initiators allowed access to this system. Enter an [iSCSI Qualified Name (IQN)](https://tools.ietf.org/html/rfc3720#section-3.2.6) and click the <i class="fa fa-plus" aria-hidden="true"></i> to add it to the list. Example: *iqn.1994-09.org.freebsd:freenas.local*. |
| **Authorized Networks** | Network addresses allowed use this initiator. Each address can include an optional [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) netmask. Click <i class="fa fa-plus" aria-hidden="true"></i> to add the network address to the list. Example: *192.168.2.0/24*. |
| **Description** | Enter any notes about initiators. |
| **REFRESH** | Refreshes the list displayed in **Connected Initiators**.|
| **SAVE** | Saves changes made on the **Add** or **Edit** initiator screens. |
| **CANCEL**| Discards changes made on and closes the **Add** or **Edit** initiator screens. |
{{< /expand >}}
{{< expand "Authorized Access Tab" >}}

The **Authorized Access** screen displays a list of authorized access networks. It lets users create new authorized access networks or edit existing ones in the list. 
Use the blue **Columns** dropdown list to display a list of available options to add or remove columns in the **Initiator Groups** table. Select from **Unselect All**, **User**, **Peer User** or **Reset to Defaults** to reverse any changes you made to the table.

![SharingISCSIManualAuthorizedAccess](/images/CORE/12.0/SharingISCSIManualAuthorizedAccess.png "iSCSI Authorized Access")

Use **ADD** to display the **Authorized Access Add** configuration screen. 
Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for the authorized access and select **Edit** to display the **Authorized Access Edit** configuration form. 
Both the **Add** and **Edit** forms have the same settings fields.

![SharingISCSIManualAuthorizedAccessForm](/images/CORE/12.0/SharingISCSIManualAuthorizedAccessForm.png "iSCSI Authorized Access Form")

**Group**
| Setting | Description |
|---------|-------------|
| **Group ID** | Allow you to configure different groups with different authentication profiles. For example, all users with a group ID of *1* inherit the authentication profile associated with Group *1*. |

**User**
| Setting | Description |
|---------|-------------|
| **User** | User account to create for CHAP authentication with the user on the remote system. Many initiators use the initiator name as the user name. |
| **Secret** | User password of at least 12 but no more than 16 characters. Click the <i class="fa fa-eye-slash" aria-hidden="true"></i> icon to display the characters you typed to verify you typed the desired password string. Click <i class="fa fa-eye" aria-hidden="true"></i> to hide the password string. |
| **Secret (Confirm)** | Confirm the user password. |

**Peer User**
| Setting | Description |
|---------|-------------|
| **Peer User** | Only entered when configuring mutual CHAP. Usually the same value as **User**. |
| **Peer Secret** | Mutual secret password. Required when Peer User is set up. Must be different than the password used in **Secret**. Click the <i class="fa fa-eye-slash" aria-hidden="true"></i> icon to display the characters you typed to verify you typed the desired password string. Click <i class="fa fa-eye" aria-hidden="true"></i> to hide the password string. |
| **Peer Secret (Confirm)** | Confirm the mutual secret password. |
{{< /expand >}}
{{< expand "Targets Tab" >}}

The **Targets** screen displays a list of storage resources configured in the system. It lets users create new TrueNAS storage resources or edit existing ones in the list. 
Use the blue **Columns** dropdown list to display a list of available options to add or remove columns in the **Targets** table. Select from **Unselect All**, **Target Alias** or **Reset to Defaults** to reverse any changes you made to the table.

![SharingISCSIManualTargets](/images/CORE/12.0/SharingISCSIManualTargets.png "iSCSI Targets")

Use **ADD** to display the **Targets Add** configuration screen. 
Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for the target and select **Edit** to display the **Targets Edit** configuration form. 
Both the **Add** and **Edit** forms have the same settings fields.

![SharingISCSIManualTargetsForm](/images/CORE/12.0/SharingISCSIManualTargetsForm.png "iSCSI Targets Form")

**Basic Info**
| Setting | Description |
|---------|-------------|
| **Target Name** | The base name for the target. It is automatically prepended if the target name does not start with **iqn**. Allowed characters are lowercase alphanumeric characters plus dot (.), dash (-), and colon (:). See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). |
| **Target Alias** | Optional user-friendly name for the **Target Name**. |

**iSCSI Group**
| Setting | Description |
|---------|-------------|
| **Portal Group ID** | Leave empty or select an existing portal to use. If you click the dropdown arrow, you must select a portal group ID from the list. |
| **Initiator Group ID** | Select the existing initiator group that has access to the target. Leave empty if **Portal Group ID** is empty. |
| **Authentication Method** | Select **None**, **CHAP**, or **Mutual CHAP**. |
| **Authentication Group Number** | Select **None** or an integer. This value represents the number of existing authorized accesses. |
{{< /expand >}}
{{< expand "Extents Tab" >}}

The **Extents** screen displays a list of available shared storage units configured on the system. It lets users create new shared storage units or edit existing ones in the list.
Use the blue **Columns** dropdown list to display a list of available options to add or remove columns in the **Extents** table. Select from **Unselect All**, **Description**, **Serial**, **NAA**, **Enabled** or **Reset to Defaults** to reverse any changes you made to the table.

![SharingISCSIManualExtents](/images/CORE/12.0/SharingISCSIManualExtents.png "iSCSI Extents")

Use **ADD** to display the **Extents Add** configuration screen. 
Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for the shared storage unit and select **Edit** to display the **Extents Edit** configuration form. 
Both the **Add** and **Edit** forms have the same settings fields.

![SharingISCSIManualExtentsForm](/images/CORE/12.0/SharingISCSIManualExtentsForm.png "iSCSI Extents Form")

**Basic Info**
| Setting | Description |
|---------|-------------|
| **Name** | Name of the extent. An extent with a size of zero can be an existing file within the pool or dataset. An extent with a size other than zero cannot be an existing file within the pool or dataset. |
| **Description** | Type any notes about this extent. |
| **Enabled** | Select to enable the iSCSI extent. |

**Type**
| Setting | Description |
|---------|-------------|
| **Extent Type** | Specify the storage unit type. Select **Device** or **File** from the dropdown list. **Device** provides virtual storage access to zvols, zvol snapshots, or physical devices. **File** provides virtual storage access to a single file. |
| **Device** | Only displays only if **Device** is the selected in **Extent Type**. Select the unformatted disk, controller, or zvol snapshot. |
| **Path to the Extent** | Only displays if the **Extent Type** is set to **File**. Browse to an existing file. Create a new file by browsing to a dataset and appending /\{filename.ext\} to the path. Users cannot create extents inside a jail root directory. |
| **Filesize** | Only displays if the **Extent Type** is set to **File**. Enter **0** to use the actual file size and it requires that the file already exists. Otherwise, specify the file size for the new file. |
| **Logical Block Size** | Leave at the default of **512** unless the initiator requires a different block size. Select from **512**, **1024**, **2048** or **4096** on the dropdown list.|
| **Disable Physical Block Size Reporting** | Select if the initiator does not support physical block size values over 4K (MS SQL). |

**Compatibility**
| Setting | Description |
|---------|-------------|
| **Enable TPC** | Select to allow an initiator to bypass normal access control and access any scannable target. This allows [xcopy](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/cc771254(v=ws.11)) operations that are otherwise blocked by access control. |
| **Xen initiator compat mode** | Select when using Xen as the iSCSI initiator. |
| **LUN RPM** | *Do not* change this setting when using Windows as the initiator! Only change the default **SSD** setting if in a large environment where you need a number of systems using a specific RPM for accurate reporting statistics. Options are **SSD**, **5400**, **7200**, **10000** or **15000**. |
| **Read-only** | Select to prevent the initiator from initializing this LUN. |
{{< /expand >}}
{{< expand "Associated Targets Tab" >}}

The **Associated Targets** screen displays a list of associated TrueNAS storage resources configured on the system. It lets users create new associated TrueNAS storage resources or edit existing ones in the list.
Use the blue **Columns** dropdown list to display a list of available options to add or remove columns in the **Associated Targets** table. Select from **Unselect All**, **LUN ID**, **Extent** or **Reset to Defaults** to reverse any changes you made to the table.

![SharingISCSIManualAssociatedTargets](/images/CORE/12.0/SharingISCSIManualAssociatedTargets.png "iSCSI Associated Targets")

Use **ADD** to display the **Associated Targets Add** configuration screen. 
Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for the associated TrueNAS storage resource and select **Edit** to display the **Associated Targets Edit** configuration form. 
Both the **Add** and **Edit** forms have the same settings fields.

![SharingISCSIManualAssociatedTargetsForm](/images/CORE/12.0/SharingISCSIManualAssociatedTargetsForm.png "iSCSI Associated Targets Form")

| Setting | Description |
|---------|-------------|
| **Target** | Select an existing target. This is a required field. |
| **LUN ID** | Select the value or enter a value between 0 and 1023. Some initiators expect a value below 256. Leave this field blank to automatically assign the next available ID. |
| **Extent** | Select an existing extent. This is a required field. |

{{< /expand >}}
{{< /expand >}}

{{< taglist tag="coreiscsi" limit="10" >}}
