---
title: "NFS Shares Screens"
description: "Provides information on NFS Shares screens and settings."
weight: 30
aliases:
- /scale/scaleuireference/shares/nfs/nfssharesscreens/
- /scale/scaleuireference/shares/nfs/
- /scale/scaleclireference/sharing/clinfs/
tags:
- nfs
- shares
---


## Unix (NFS) Share Widget

If you have not added NFS shares to the system, the NFS widget shows text stating general information about the Unix (NFS) shares until a share is added.

{{< trueimage src="/images/SCALE/Shares/NFSShareWidgetNoShare.png" alt="Unix (NFS) Share Widget" id="Unix (NFS) Share Widget" >}}

**Add** at the top right of the widget opens the [**Add NFS** screen](#add-and-edit-nfs-screens) where you configure NFS shares.

After adding an NFS share, it is listed in the table on the widget.

{{< trueimage src="/images/SCALE/Shares/NFSShareWidgetWithShares.png" alt="Unix (NFS) Share Widget with Shares" id="Unix (NFS) Share Widget with Shares" >}}

The **Unix (NFS) Share <span class="material-icons">launch</span>** header shows the status of the NFS service as either **STOPPED** (red) or **RUNNING** (green).
Before adding the first share, the **STOPPED** status displays in the default color.
The header is a link that opens the [**NFS** screen](#nfs-screen).

The <span class="material-icons">more_vert</span> dropdown list shows three options available to NFS shares and the NFS service in general:

* **Turn Off/ON Service** toggles to **Turn Off Service** when the NFS service is enabled, and to **Turn On Service** when the NFS service is disabled.
* **Config Service** opens the [**NFS**]({{< ref "NFSServiceScreen" >}}) configuration screen.
* **NFS Sessions** that opens the [**NFS Sessions** screen](#nfs-sessions-screen).

The widget shows a table listing nfs shares created in TrueNAS.
Each NFS share row on the **Unix (NFS) Shares** widget shows the path to the shared dataset, a description if one is entered when the share is added, an **Enabled** toggle that allows you to enable or disable the share.
The <span class="material-icons">more_vert</span> dropdown list for each share shows two options:

* **<span class="material-icons">edit</span> Edit** opens the [**Edit NFS** screen](#add-and-edit-nfs-screens).
* **<span class="material-icons">delete</span> Delete** opens the [**Delete** dialog](#delete-nfs-share-dialog).

### Enable Service Dialog

After adding the first NFS share, the system opens an enable service dialog.

{{< trueimage src="/images/SCALE/Shares/SharingNFSEnableServiceDialog.png" alt="Unix Enable Service" id="Unix Enable Service" >}}
**Enable Service** turns the NFS service on and changes the toolbar status to **Running**.

The **Enable** toggle for each share shows the current status of the share.
Disabling the share does not delete the configuration from the system.

### Delete NFS Share Dialog

The <span class="material-icons">delete</span> delete icon displays a delete confirmation dialog that removes the share from the system.

{{< trueimage src="/images/SCALE/Shares/SharingNFSDeleteDialog.png" alt="Sharing NFS Delete" id="Sharing NFS Delete" >}}

Select **Confirm** to activate the **Delete** button.

## NFS Screen

The **NFS** screen shows an expanded presentation of the table on the **Unix (NFS) Shares** widget.

{{< trueimage src="/images/SCALE/Shares/NFSSharesScreen.png" alt="Shares NFS Screen" id="Shares NFS Screen" >}}

**Shares** in the breadcrumb at the top of the screen returns you to the main **Shares** dashboard.

**NFS Sessions** opens the [**NFS Session**](#nfs-sessions-screen) screen.

**Add** opens the [**Add NFS**](#add-and-edit-nfs-screens) configuration screen.

### NFS Table

The **NFS** table lists all NFS shares added to the system.
The table header shows the status of the NFS service as stopped or running.
The table columns show the path to the dataset for the share, the share description if added during share creation, networks, and hosts.
The **Enabled** toggle allows you to enable/disable the share. When enabled, the share path is available when the NFS service is active.
If disabled, the share is disabled but not deleted from the system.

**Columns** shows a set of options to customize the list view.
Options include **Unselect All**, **Path**, **Description**, **Enabled** and **Reset to Defaults**.

The <span class="material-icons">more_vert</span> dropdown list at the right of each table row shows two options for a share:

* **Edit** opens the **[Edit NFS](#add-and-edit-nfs-screens)** screen.
* **Delete** displays the **[Delete](#delete-nfs-share-dialog)** dialog.

## Add and Edit NFS Screens

The **Add NFS** and **Edit NFS** show the same **Basic Options** and **Advanced Options** settings.

{{< hint type=info title="UDP Protocol and NFS" >}}
{{< include file="/static/includes/NFSServiceUDPWarning.md" >}}
{{< /hint >}}

### Basic Options

The **Basic Options** settings on the **Add** and **Edit NFS** screens show by default, and at the top of the screen when **Advanced Options** is selected.

{{< trueimage src="/images/SCALE/Shares/AddNFSScreen.png" alt="Add NFS Basic Options" id="Add NFS Basic Options" >}}

{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Path** | Specifies the mount path for the share. It includes a blank field and a file browser field directly below it. The blank field allows text entry of a share mount path or allows Truenas to populate it with the path to the dataset selected in the file browser field. The file browser selects the mount path to the share dataset on the local file system that TrueNAS exports over the NFS protocol. Use the <span class="material-icons">arrow_right</span> icon to the left of <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21L3 9h18l-2 12zm5-6h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5z"/></svg> to expand the dataset directory tree. |
| **Create Dataset** | Creates a dataset for a share while configuring the share. Inactive until the parent dataset is selected. It opens the **Create Dataset** dialog, where you enter a name for a new dataset. The dataset name becomes the last part of the NFS share path. **Create** adds the dataset and populates **Path** field on the **Add NFS** screen. |
| **Description** | A text-entry field for a brief description or notes about how this share is used. The description entered shows in the **Description** column on the **Unix (NFS) Shares** widget on the **Shares** dashboard and the **NFS** table on the **NFS** screen. |
| **Enabled** | Select to enable this NFS share. Clear the checkbox to disable this NFS share without deleting the configuration. |
| **Networks** | Defines an authorized network, and any added, restricts access to all other networks. Leave empty to allow all networks. **Add** shows the **Networks** IP address and CIDR fields to enter an allowed network IP and select the mask CIDR notation. Click **Add** for each network address and CIDR you want to define as an authorized network. |
| **Add hosts** | Defines allowed clients (hosts) you want to allow to connect to the share. Defining authorized systems restricts access to all other systems. Leave the field empty to allow all systems access to the share. **Add** shows the **Authorized Hosts and IP addresses** field. Enter a host name or IP address to allow that system access to the NFS share. Click **Add** for each allowed system you want to define.  |
{{< /truetable >}}

### Advanced Options Settings

**Advanced Options** settings tune the share access permissions and define authorized networks. **Advanced Options** shows the **Access** settings listed below.

{{< trueimage src="/images/SCALE/Shares/AddNFSAdvancedOptionsAccessSettings.png" alt="Add NSF Advanced Options Access Settings" id="Add NSF Advanced Options Access Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Read-Only** | Selecting this to enable read-only prohibits writing to the share. |
| **Maproot User** | Text entry field that allows manual entry of a user name or selecting a user from the dropdown list. Typing in the field filters the dropdown list to match what is entered. Entering a user applies permissions for that user to the **root** user, and limits the root user to the permissions of that user. |
| **Maproot Group** | Text entry field that allows manual entry of a group name or selecting a group from the dropdown list. Typing in the field filters the dropdown list to match what is entered. Entering a group applies permissions for that group to the **root** user and the root user is limited to the permissions of that group. |
| **Mapall User** | Text entry field that allows manual entry of a user name or selecting a user from the dropdown list. Typing in the field filters the dropdown list to match what is entered. Entering a user applies permission for the chosen user to all clients, and the specified permissions of that user are used by all clients. |
| **Mapall Group** | Text entry field that allows manual entry of a group name or selecting a group from the dropdown list. Typing in the field filters the dropdown list to match what is entered. Entering a group applies permissions for the chosen group to all clients, and the specified permissions of that group are used by all clients. |
| **Security** | Sets the level of authentication and cryptographic protection to the option selected on the dropdown list. Options are **SYS**, **KRB5**, **KRB5I**, **KRB5P**. Selecting **KRB5** allows you to use a Kerberos ticket. **SYS** or none should be used if no KDC is available. If a KDC is available, e.g., Active Directory, **KRB5** is recommended. If desired **KRB5I** (integrity protection) and/or **KRB5P** (privacy protection) can be included with **KRB5**. |
{{< /truetable >}}

#### Security Types

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **SYS** | Uses locally acquired UIDs and GIDs. No cryptographic security. |
| **KRB5** | Uses Kerberos for authentication. |
| **KRB5I** | Uses Kerberos for authentication and includes a hash with each transaction to ensure integrity. |
| **KRB5P** | Uses Kerberos for authentication and encrypts all traffic between the client and server. KRB5P is the most secure but also incurs the most load. |
{{< /truetable >}}

## NFS Sessions Screen

The **NFS Sessions** screen shows a table of sessions with the IP address and Export status of each session listed.
You can access the **NFS Sessions** screen from the :

* <i class="material-icons" aria-hidden="true" title="list">list</i> icon on the **NFS** service row on the **System > Services** screen
* <span class="material-icons">more_vert</span> on the **Shares > Unix (NFS) Shares** widget
* **NFS Sessions** on the **NFS** screen

{{< trueimage src="/images/SCALE/Shares/NFSSessionsScreen.png" alt="NFS Sessions Screen" id="NFS Sessions Screen" >}}

This screen shows NFSv3 clients that have successfully completed an MNT request by reading the NFS **[rmtab](https://linux.die.net/man/8/mountd)** file.
Clients with appropriate permissions are removed from the list on a successful UMNT request.

However, this list can become inaccurate due to the different ways that a client can disconnect from a share.
To help prevent stale entries from accumulating, the sessions list is cleared on each system boot.

**Refresh** updates the information displayed on the screen.

**Column** shows a dropdown list of options for the selected tab to customize the information included on the screen.

The breadcrumb links at the top of the screen return you to the screen you click.

{{<include file="/static/includes/addcolumnorganizer.md">}}
