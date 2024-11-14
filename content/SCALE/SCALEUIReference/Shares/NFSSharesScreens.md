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

The **Sharing** screen opens after you click **Shares** on the main navigation panel.  

## Unix (NFS) Share Widget
The **Unix (NFS) Share <span class="material-icons">launch</span>** widget includes the widget toolbar that displays the status of the NFS service and the **Add** button.
After adding NFS shares, the widget displays a list of the shares below the toolbar.

{{< trueimage src="/images/SCALE/Shares/NFSShareWidgetNoShare.png" alt="Unix (NFS) Share Widget" id="Unix (NFS) Share Widget" >}}

After adding the first NFS share, the system opens an enable service dialog.

{{< trueimage src="/images/SCALE/Shares/SharingNFSEnableServiceDialog.png" alt="Unix Enable Service" id="Unix Enable Service" >}}

**Enable Service** turns the NFS service on and changes the toolbar status to **Running**.

The **Enable** toggle for each share shows the current status of the share.
Disabling the share does not delete the configuration from the system.

The <span class="material-icons">delete</span> delete icon displays a delete confirmation dialog that removes the share from the system.

{{< trueimage src="/images/SCALE/Shares/NFSShareWidgetDeleteDialog.png" alt="Unix (NFS) Share Delete" id="Unix (NFS) Share Delete" >}}

Click on **Unix (NFS) Share** to open the **Sharing > NFS** screen with the list view of NFS shares.

The NFS share on the widget opens the **[Edit NFS](#add-and-edit-nfs-screens)** screen.

**Add** opens the [**Add NFS** screen](#add-and-edit-nfs-screens).

{{< trueimage src="/images/SCALE/Shares/NFSWidgetOptions.png" alt="Unix (NFS) Share Widget Options" id="Unix (NFS) Share Widget Options" >}}

The <span class="material-icons">more_vert</span> icon displays three options available to NFS shares in general:
* **Turn Off Service** what shows when the NFS service is enabled and that toggles to **Turn On Service** when the NFS service is disabled.
* **Config Service** that opens the [**NFS**]({{< relref "NFSServiceScreen.md" >}}) configuration screen.
* **NFS Sessions** that opens the [**NFS Sessions** screen](#nfs-sessions-screen).

The toolbar displays the **STOPPED** service status in red before you start the service or click **Enable Service** when the dialog displays.
When service starts, it displays **RUNNING** in blue.

## Sharing NFS Details Screen
The **Sharing > NFS** details screen displays the same list of NFS shares as the **Unix (NFS) Share** widget.

Customize the information using the **Columns** dropdown list.
Select from the **Unselect All,** **Description**, **Enabled**, and **Reset to Defaults** options.

Each share includes these options:
* **Edit** opens the **Edit NFS** configuration screen.
* **Delete** opens an **Unshare *path*** confirmation dialog.

{{< trueimage src="/images/SCALE/Shares/SharingNFSDeleteDialog.png" alt="Sharing NFS Delete" id="Sharing NFS Delete" >}}

Select **Confirm** and then **UNSHARE** to remove the share without affecting the data in the shared dataset.

## Add and Edit NFS Screens
The **Add NFS** and **Edit NFS** display the same **Basic Options** and **Advanced Options** settings.

{{< hint type=info title="UDP Protocol and NFS" >}}
{{< include file="/static/includes/NFSServiceUDPWarning.md" >}}
{{< /hint >}}

### Basic Options Settings
The **Basic Options** settings display by default and also show in the **Advanced Options** settings.

{{< trueimage src="/images/SCALE/Shares/AddNFSScreen.png" alt="Add NFS Basic Options" id="Add NFS Basic Options" >}}

{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Path** | Enter the path or use the <span class="material-icons">arrow_right</span> icon to the left of **<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21L3 9h18l-2 12zm5-6h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5z"/></svg>/mnt** to locate the dataset and populate the path. **Path** is the directory tree on the local file system that TrueNAS exports over the SMB protocol. |
| **<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21L3 9h18l-2 12zm5-6h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5z"/></svg>/mnt** | Click the <span class="material-icons">arrow_right</span> icon to expand the path at each dataset until you get to the SMB share dataset you want to use. This populates the **Path**. |
| **Create Dataset** | Click to open the **Create Dataset** dialog. Enter a name to create a new dataset for the share. Click **Create** to add the dataset and populate the **Name** field on the **Add NFS** screen. |
| **Description** | Enter any notes or reminders about the share. |
| **Enabled** | Select to enable this NFS share. Clear the checkbox to disable this NFS share without deleting the configuration. |
| **Networks** | Click **Add** to display the **Networks** IP address and CIDR fields. Enter an allowed network IP and select the mask CIDR notation. Click **Add** for each network address and CIDR you want to define as an authorized network. Defining an authorized network restricts access to all other networks. Leave empty to allow all networks. |
| **Add hosts** | Click **Add** to display the **Authorized Hosts and IP addresses** field. Enter a host name or IP address to allow that system access to the NFS share. Click **Add** for each allowed system you want to define. Defining authorized systems restricts access to all other systems. Leave the field empty to allow all systems access to the share. |
{{< /truetable >}}

### Advanced Options Settings
**Advanced Options** settings tune the share access permissions and define authorized networks.
Only the **Access** settings display on the **Advanced Options** screen.

{{< trueimage src="/images/SCALE/Shares/AddNFSAdvancedOptionsAccessSettings.png" alt="Add NSF Advanced Options Access Settings" id="Add NSF Advanced Options Access Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Read-Only** | Select to prohibit writing to the share. |
| **Maproot User** | Enter a string or select a user from the dropdown to apply permissions for that user to the *root* user. |
| **Maproot Group** | Enter a string or select a group from the dropdown to apply permissions for that group to the *root* user. |
| **Mapall User** | Enter a string or select a user to apply permission for the chosen user to all clients. |
| **Mapall Group** | Enter a string or select a group to apply permission for the chosen group to all clients. |
| **Security** | Select a security option from the dropdown list. Options are **SYS**, **KRB5**, **KRB5I**, **KRB5P**. Selecting **KRB5** allows you to use a Kerberos ticket. |
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
You can access the **NFS Sessions** screen from the **NFS** option on the **System > Services** screen with the <i class="material-icons" aria-hidden="true" title="list">list</i> icon and from the <span class="material-icons">more_vert</span> on the **Shares > Unix (NFS) Shares** widget.

{{< trueimage src="/images/SCALE/Shares/NFSSessionsScreen.png" alt="NFS Sessions Screen" id="NFS Sessions Screen" >}}

The **NFS Sessions** screen shows current NFS sessions.

**Refresh** updates the information displayed on the screen.

**Column** displays a dropdown list of options for the selected tab to customize the information included on the screen.

Click **Sharing** on the top breadcrumb to open the Shares dashboard.

{{<include file="/static/includes/addcolumnorganizer.md">}}
