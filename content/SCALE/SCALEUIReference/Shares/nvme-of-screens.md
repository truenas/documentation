---
title: "NVMe-oF Share Screens"
description: "Provides information on NVMe-oF share screens and settings."
weight: 60
aliases:
- 
tags:
- nvme-of
- fibre channel
- rdma
- tcp
- NVME over Fabric
---


The **NVMe-oF** screens provide access to screens, widgets, settings, and dialogs to add, manage, or delete NVMe over Fabric shares.
NVMe-oF (NVMe over Fabric) is a specification that extends NVMe storage access over network fabrics like Ethernet, Fibre Channel, and InfiniBand.
It allows hosts to access NVMe storage remotely while maintaining the high performance and low latency benefits of the protocol.

{{< include file="/static/includes/NVMe-oF-Overview.md" >}}

## NVMe-oF Subsystems Widget

The **NVMe-oF Subsystems** widget shows on the **Shares** screen.
The header shows the status of the NVMe service as **Stopped** or **Running**, the **Add** button, and the <span class="material-icons">more_vert</span> dropdown menu with two options:
* **Turn Service On/Off** toggle.
  You can also turn the service on/off from the **System > Services** screen, where you can set it to automatically start after a system restart.
* **Config Service** that opens the [NVMe-oF Global Configuration](#nvme-of-global-configuration-screen) screen.
  You can access this configuration screen by going to **System > Services** or using the **Global Configuration** button on the **NVMe-oF** screen.

{{< trueimage src="/images/SCALE/Shares/SharesScreenWithNVMeRunning.png" alt="NVMe-oF Screen without Subsystems" id="NVMe-oF Screen without Subsystems" >}}

The table in the **NVMe-oF Subsystems** widget lists each subsystem added in TrueNAS.

Each row shows the subsystem name, the number of namespaces associated with the subsystem, the number of ports available through the subsystem, and the number of hosts allowed or restricted from accessing the subsystem.

The <span class="material-icons">more_vert</span> dropdown menu for each subsystem shows two options:
* **View** - Opens the [**NVMe-oF**](#nvme-of-screen) screen showing the widgets for the selected subsystem.
* **Delete** - Opens [**Delete Subsystem**](#delete-subsystem-dialog) dialog.

### Delete Subsystem Dialog

The **Delete Subsystem** dialog confirms you want to delete the subsystem before it is actually deleted from the TrueNAS system.

{{< trueimage src="/images/SCALE/Shares/DeleteSubsystemDialog.png" alt="Delete Subsystem Dialog" id="Delete Subsystem Dialog" >}}

**Force** forces the delete operation if it is in use.
**Cancel** closes the dialog without deleting the subsystem. 
**Delete** removes the subsystem from the TrueNAS system.

## NVMe-oF Screen

Prior to adding an NVMe-oF subsystem, the NVMe-oF screen shows a general widget with information about subsystems, and a basic comparison to iSCSI.

{{< trueimage src="/images/SCALE/Shares/NVMe-oFScreenWithoutSubsystems.png" alt="NVMe-oF Screen without Subsystems" id="NVMe-oF Screen without Subsystems" >}}

**Global Configuration** opens the [**NVMe-oF Global Configuration**](#nvme-of-global-configuration-screen) screen.

**Add Subsystem** opens the [**Add Subsystem**](#add-subsystem-wizard) screen.

After adding a subsystem, the table lists it.
The first row of the table is selected by default and shows the subsystem details widgets for that subsystem.
Select the row for any listed subsystem to view the detail widgets for that subsystem.

### Subsystems Table and Details Widgets

After adding a subsystem, the screen shows a table listing subsystems added to TrueNAS, and the four subsystem widgets for a selected row, usually the first subsystem listed in the table.
Each row in the **Subsystems** table shows the name of the subsystem, the number of namespaces associated with the subsystem, the number of ports available through the subsystem, and the number of hosts allowed or restricted from accessing the subsystem.

Each subsystem shows a group of four widgets listed as **Details for *subsystemName*** where *subsystemName* is the name given to the subsystem (i.e., *test*).

{{< trueimage src="/images/SCALE/Shares/NVMe-oFScreenWithSubsystems.png" alt="NVMe-oF Screen with Subsystems" id="NVMe-oF Screen with Subsystems" >}}

Each subsystem has four widgets:
* **Details**
* **Namespaces**
* **Ports**
* **Associated Hosts**

#### Details

The **Details** widget shows the name and NQN ID associated with the subsystem. Each includes and edit <span class="material-icons">edit</span> icon that opens an edit field.

{{< trueimage src="/images/SCALE/Shares/SubsystemDetailsWidget.png" alt="Subsystem Details Widget" id="Subsystem Details Widget" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | The name given to the subsystem at creation. The edit <span class="material-icons">edit</span> icon opens an edit field. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_),  |
| **NQN** | The NVMe Qualified Name (NQN) is used to identify the subsystem. The edit <span class="material-icons">edit</span> icon changes the NQN ID to an entry field. Enter a new number formatted as an NQN ID number. |
| **Copy** | Copies the NQN number to the clipboard. |
{{< /truetable >}}

#### Namespaces Widget

The **Namespaces** widget shows the type of input devices (zvol or file) and a path to that input device.

{{< trueimage src="/images/SCALE/Shares/SubsystemNamespacesWidget.png" alt="Subsystem Namespaces Widget" id="Subsystem Namespaces Widget" >}}

**Add** opens the [**Add Namespace**]() form.

**Edit** opens the [**Edit Namespace**]() form.

**Delete** opens a [confirmation dialog]() for the namespace.

#### Ports Widget

The **Ports** widget show the port type and ID associated with the subsystem.

{{< trueimage src="/images/SCALE/Shares/SubsystemPortsWidget.png" alt="Subsystem Ports Widget" id="Subsystem Ports Widget" >}}

**Add** shows a dropdown list with two options:
* **Create New** - Opens the [**Add Port**](#add-port-screen) screen.
* **Manage Ports** - Opens the [**Ports**](#ports-dialog) dialog.

The **Remove this port from the subsystem** port action ![SubsystemPortActionIcon]("/images/SCALE/Shares/SubsystemPortActionIcon.png" Port Action Icon) icon removes the port from the subsystem.
After removing a port, the **Add** button lists any available port on the system. Selecta port on the list to add it to the subsystem.

#### Associated Hosts Widget

The **Associated Hosts** widget shows a list of hosts associated with the subsystem.
Shows **All hosts are allowed** if a host is not specified.

{{< trueimage src="/images/SCALE/Shares/SubsystemAssociatedHostsWidget.png" alt="Subsystem Assoicated Hosts Widget" id="Subsystem Associated Hosts Widget" >}}

**Add** opens the [**Add Host**](#add-and-edit-host-screens) screen.

## NVMe-oF Global Configuration Screen

Use to set system-wide NVMe-oF settings. **Config Service** on the **NVMe-oF Subsystem** widget dropdown menu,
**Global Configuration** on the **NVMe-oF** screen, and the <span class="material-icons">edit</span> edit icon on the **NVMe-iF** row on the **System > Services** screen open the **NVMe-of Global Configuration** screen.

{{< trueimage src="/images/SCALE/Shares/NVMeoFGlobalConfigurationScreen.png" alt="Add Subsystem Screen" id="Add Subsystem Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Edit** | The name given to the subsystem at creation. The edit <span class="material-icons">edit</span> icon opens an edit field. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_),  |
| **Delete** | The NVMe Qualified Name (NQN) is used to identify the subsystem. The edit <span class="material-icons">edit</span> icon changes the NQN ID to an entry field. Enter a new number formatted as an NQN ID number. |
| **Add** | Copies the NQN number to the clipboard. |
{{< /truetable >}}

## Add Subsystem Wizard

The **Add Subsystem** wizard opens after clicking **Add** on the **NVMe-of Subsystem** widget or **Add Subsystem** on the **NVMe-oF** screen.
The wizard has two parts, **What to Share** and **Access**. **What to Share** shows by default.

### What to Share

Use to configure the subsystem and add a namespace.

{{< trueimage src="/images/SCALE/Shares/AddSubsystemWhatToShare.png" alt="Add Subsystem What to Share Screen" id="Add Subsystem What to Share Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Subsystem Name** | The name given to the subsystem. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), ampersand (&), at (@), or hashtag (#). |
| **NQN** | Shows **Generate from global setting**s** and the <span class="material-icons">edit</span> edit icon. Clicking on the edit <span class="material-icons">edit</span> icon or the text changes this to an edit field that allows manual entery of an NQN id. The NVMe Qualified Name (NQN) is used to identify the subsystem. |
| **Add** | Opens the [**Add Namespaces**](#add-namespace-screen) screen. |
{{< /truetable >}}

### Access

Use the **Access** screen in the **Add Subsystem** wizard to configure hosts allowed to connect to the subsystem and ports the target uses to communicate with hosts.

{{< trueimage src="/images/SCALE/Shares/AddSubSystemAccess.png" alt="Add Subsystem Access Screen" id="Add Subsystem Access Screen" >}}

**Allow any host to connect** is selected by default.
When selected, it allows connections to any host.
When not selected, it shows the **Allow Hosts** option with an **Add** button that opens the [**Add Host**](#add-and-edit-host-screens) screen.

{{< trueimage src="/images/SCALE/Shares/AsddSubsystemAccessWithAllowedHosts.png" alt="Add Subsystem Access with Allowed Hosts" id="Add Subsystem Access with Allowed Hosts" >}}

The **Add** button to the right of **Ports** shows a dropdown list of options:
* **TCP - *xx.xxx.x.xxx*:*####*** if a TCP port is assigned this does not show on the list.
  If a port is not assigned, it shows any available port *IP address:port* number for a host.
* **Create New** - Opens the [**Add Ports**](#add-port-screen) screen.
* **Manage Ports** - Opens the [**Ports**](#ports-dialog) dialog.

**Save** saves changes and creates the subsystem, closes the wizard screen, and returns to the previous screen.

## Add and Edit Namespace Screens

The **Add Namespace** and **Edit Namespace** screens show the same settings and options.
Use to select or create the storage device (zvol or file) for the NVMe-oF share.
**Add** to the right of **Namespaces** on the **What to Share** option of the **Add Subsystem** wizard opens the **Add Namespace** screen.
**Add** on the **Namespaces** widget on the **NVMe-of** screen opens the **Add Namespaces** screen.
The <span class="material-icons">edit</span> edit icon on the **Namespaces** widget opens the **Edit Namespaces** screen.

{{< trueimage src="/images/SCALE/Shares/AddNamespaceScreen.png" alt="Add Namespace Screen" id="Add Namespace Screen" >}}

The <span class="material-icons">edit</span> edit icon on the **Namespaces** widget for a selected subsystem on the **NVMe-oF** screen opens the **Edit Namespace** screen.

{{< trueimage src="/images/SCALE/Shares/EditNamespaceScreenZvolTab.png" alt="Edit Namespace Zvol Tab" id="Edit Namespace Zvol Tab" >}}

Theses two screens show three tabs:
* [**Zvol**](#zvol-tab) (selected by default) 
* [**Existing File**](#existing-file-tab)
* [**New File**](#new-file-tab)

### Zvol tab

The **Zvol** tab on the **Edit Namespace** screen shows the **Path to Zvol** fields.
The top blank field populates with the path to existing zvol or parent dataset selected using the file browser field below it.

{{< trueimage src="/images/SCALE/Shares/EditNamespaceScreenZvolTab.png" alt="Edit Namespace Zvol Tab" id="Edit Namespace Zvol Tab" >}}

**Create Zvol** activates after selecting the parent dataset. It opens the [**Add Zvol**](#add-zvol-screen) screen.
Only the **Zvol** tab has the **Create Zvol** option.

### Existing File Tab

Use the **Existing File** tab on the **Edit Namespace** screen to browse and select the path to the parent dataset, enter the **/*filename*** for an existing file to assoicate with the namespace.

{{< trueimage src="/images/SCALE/Shares/EditNamespaceExistingFileTab.png" alt="Edit Namespace Existing File Tab" id="Edit Namespace Existing File Tab" >}}

**Path to File** field shows the mount path to the file location selected.

### New File Tab

Use the **New File** tab on the **Edit Namespace** screen to create a new file to assoicate with the namespace.

{{< trueimage src="/images/SCALE/Shares/EditNamespaceNewFileTab.png" alt="Edit Namespace New File Tab" id="Edit Namespace New File Tab" >}}

Shows three settings:

| Setting | Description |
|---------|-------------|
| **Parent Directory** | Use to browse and select the path to the parent dataset. Populates the field with the mount path. |
| **Filename** | Specifies the name for the file. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), ampersand (&), at (@), or hashtag (#). |
| **File Size** | The storage capacity (size) you want to grant this file. |
{{< /truetable >}}

**Save** saves the settings, closes the screen and returns to the previous screen.

## Add Zvol Screen

Use to create a new zvol for the namespace to use for storage.
**Create Zvol** on the **Add Namespace** screen with the **Zvol** tab selected opens this screen.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreen.png" alt="Add Zvol screen" id="Add Zvol Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | The name given to the zvol. Best practice is to keep the name short and not exceeding 63 character to prevent issues with accessing the zvil as a device. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), ampersand (&), at (@), or hashtag (#). |
| **Size** | Specity the size and value such as 10 GiB. |
| **Force size** | The system restricts creating a zvol that brings the pool to over 80% capacity. Set to force creation of the zvol (NOT Recommended). |
| **Sparse** | Enable to use thin provisioning where disk space for this volume is allocated ‘on demand’ as new writes are received. Use caution when enabling this feature, as writes can fail when the pool is low on space. |
| **Sync** | Sets the data write synchronization. Inherit takes the sync settings from the parent dataset, Standard uses the settings that have been requested by the client software, Always waits for data writes to complete, and Disabled never waits for writes to complete. |
| **Compression** | Encode information in less space than the  original data occupies. It is recommended to choose a compression algorithm  that balances disk performance with the amount of saved space.
 LZ4 is  generally recommended as it maximizes performance and dynamically identifies  the best files to compress.
 GZIP options range from 1 for least  compression, best performance, through 9 for maximum compression with  greatest performance impact.
 ZLE is a fast algorithm that only  eliminates runs of zeroes. |
| **ZFS Deduplication** | Transparently reuse a single copy of duplicated  data to save space. Deduplication can improve storage capacity, but is RAM intensive.  Compressing data is generally recommended before using deduplication. Deduplicating data is  a one-way process. Deduplicated data cannot be undeduplicated! |
| **Read-only** |Set to prevent the zvol from being modified.  |
| **Block size** | The zvol default block size is automatically chosen based on the number of the disks in the pool for a general use case. |
| **Snapdev** | Controls whether the volume snapshot devices under /dev/zvol/⟨pool⟩  are hidden or visible. The default value is hidden. |
{{< /truetable >}}

### Encryption Settings

Encryption settings secure data within this zvol. Thes setting estbalish the level and type of encryption applied.
The default setting is **Inherit (non-encrypted)** if the root or parent dataset for the new storage is unencrypted.
If encrypted this shows **Inherit (encrypted)**. 

Clearing the checkbox, shows the **Encryption Type** setting with two options: **Key** and **Passphrase**. Each option shows different setting options.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreenEncryption.png" alt="Add Zvol Encryption" id="Add Zvol Encryption" >}}

#### Key Type Settings

The **Key** settings allow using a system-generated key or entering your own encryption key. 
Creating a new key file invalidates any previously downloaded key file for this dataset. Delete any previous key file backups and back up the new key file.
Shows with **Generate Key** selected by default. This automatically generates an encryption key for the zvol. Clearing the checkmark shows the additional key encryption settings.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreenKeyEncryption.png" alt="Add Zvol Key Encryption" id="Add Zvol Key Encryption" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Generate Key** | Randomly generates an encryption key for securing this dataset. Disabling this option requires manually defining an encryption key.
 WARNING: the encryption key is the only means to decrypt the information stored in this dataset. Store the encryption key in a secure location. |
| **Key** | Enter or paste a string to use as the encryption key for this zvol. |
| **Algorithm** | Mathematical instruction sets that determine how plain text is converted into cipher text. See Advanced Encryption Standard (AES) for more details. |
{{< /truetable >}}

#### Passphrase Type Settings

The **Passphrase** settings set encryption to a passphrase of your choice to encrypt the data in the zvol.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreenPassphraseEncryption.png" alt="Add Zvol Passphrase Encryption" id="Add Zvol Passphrase Encryption" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Passphrase** | User-defined string used to decrypt the dataset. Can be used instead of an encryption key.<br>WARNING: the passphrase is the only means to decrypt the information stored in this dataset. Be sure to create a memorable passphrase or physically secure the passphrase. |
| **Confirm Passphrase** | Confirms the user-defined string entered in **Passphrase**. Entries must match. |
| **pbkdf2iters** | The pencil shows a field where you can select an option from the dropdown list. Number of password-based key derivation function 2 (PBKDF2) iterations to use for reducing vulnerability to brute-force attacks. Entering a number larger than 100000 is required. See [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) for more details. |
| **Algorithm** | The pencil shows a field where you can select an option from the dropdown list. Mathematical instruction sets that determine how plain text is converted into cipher text. See [Advanced Encryption Standard (AES)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) for more details. |
{{< /truetable >}}

## Add and Edit Host Screens

The **Add Host** screen specifies a host and adds it to a subsystem when the **Allow any host to connect** option on the [**Add Subsystem > Access**](#access) screen is not enabled.
The **Edit Host** screen shows the fields associated with the subsystem and allows you to change settings for the host.

{{< trueimage src="/images/SCALE/Shares/AddtHostScreen.png" alt="Add Host Screen" id="Add Host Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Host NQN** | The unique identifier specific to the subsystem that hosts the storage namespaces being shared. It containes the namespaces (storage volumes) shared over fabric. The hosts (targets) use this to determine which hosts can access the share storage resoures. Storage arrays use the NQN to deterime which hosts can access the share namespace. The NQN shows in system logs, allowing hosts to find availble storage shares. Format of the NQN is *nqn.2019-05.com.example:storage-array-01*. The NQN is determined by the **basenqn** in the **NVMe-oF Global Settings** sreen. |
| **Require Host Authentication** | When selected/enabled, shows additional authentication settings: hash, keys for the host to present or TrueNAS to present, generate keys for each key option, and the Diffe-Hellman key exchange option. |
| **Hash** | Shows the current hash option **SHA-256** and the <span class="material-icons">edit</span> edit icon that shows a dropdown list of hash options. Options are **SHA-256**, **SHA0384**, and **SHA-512**. |
| **Key For Host To Present** | Sets the DH-CHAP key to use when authenticating to the host. Accepts copy/paste of a hash, or use **Generate Key** directly under the field to add a system-generated key.  |
| **Generate Key** | Adds a system-generated DH-CHAP key to the **Key For Host To Present** field. |
| **Key ForeTrueNAs To Present (Optional)** | Sets the secret this TrueNAS system presents to the host when the host is connecting to the subsystem (bi-directional authentication). Accepts copy/paste of a key or use the **Generate Key** directly below this field to use a system-generated key. |
| **Generate Key** | Adds a system-generated bi-directional authentication key to the **Key For TureNAS To Present** field. |
| **Also use Diffe-Hellman key exchange for additional security** | Diffie–Hellman key exchangethat is used in addition to CHAP for authentication. |
{{< /truetable >}}

## Add Port Screen

The **Add Port** screen creates a new port *IP address:port* assignment on the system for use by a subsystem.

{{< trueimage src="/images/SCALE/Shares/AddPortScreen.png" alt="Add Port Screen" id="Add Port Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Transport Type** | Sets the transport type. Options are: **TCP**, **RDMA**, or **Fibre Channel**. The **RDMA** and **Fibre Channe**l options require Enterprise licenses and systems with compatible/supporting hardware. |
| **Port** | Sets the current port assignment. |
| **Address** | Sets an existing static IP address for the port assignment. |
{{< /truetable >}}

## Edit Port Screen

The **Edit Port** screen shows current port settings for the selected subsystem.
The <span class="material-icons">edit</span> edit icon on the port row listed on the **Ports** dialog opens the **Edit Port** screen.

{{< trueimage src="/images/SCALE/Shares/EditPortScreen.png" alt="Edit Port Screen" id="Edit Port Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Transport Type** | Shows the transport type. Options are **TCP**, **RDMA**, or **Fibre Channel**. The **RDMA** and **Fibre Channe**l options require Enterprise licenses and systems with compatible/supporting hardware. |
| **Port** | Shows the current port assignment. |
| **Address** | Shows the current static IP address assignment. |
{{< /truetable >}}

## Ports Dialog

The **Ports** dialog shows a table for the port showing the type, IP address, port number, and how many subsystems use it.
The port row shows the <span class="material-icons">edit</span> edit icon and the <span class="material-icons">delete</span> delete icon.

{{< trueimage src="/images/SCALE/Shares/ManagePortsDialog.png" alt="Ports Dialog" id="Ports Dialog" >}}

**Add New** opens the [**Add Port**](#add-port-screen) screen.
Edit opens the [**Edit Port**](#edit-port-screen) screen.
Delete opens a [delete confirmation](#delete-port-dialog) dialog for the port.

### Delete Port Dialog

The **Delete Port** confirmation dialog removes the port from the selected subsystem but does not delete it from TrueNAS. A deleted port shows on the **Add** dropdown list on the **Ports** widget for a selected subsystem on the **NVMe-oF** screen.
The dialog shows the name of the subsystem and the assigned *IP addres:port* assignment.

{{< trueimage src="/images/SCALE/Shares/DeletePortDialog.png" alt="Delete Port Dialog" id="Delete Port Dialog" >}}

**Cancel** closes the dialog without removing the port from the subsystem.
**Delete Anyway** removes the port assignment from the subsystem specified in the dialog.