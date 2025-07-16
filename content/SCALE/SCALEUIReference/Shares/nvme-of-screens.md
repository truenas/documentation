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


The **NVMe-oF** screens provide access to screens, widgets, settings, and dialogs to add, manage, or delete NVMe over Fabric subsystems (targets).
NVMe-oF (NVMe over Fabric) is a specification that extends NVMe storage access over network fabrics like Ethernet, Fibre Channel, and InfiniBand.
It allows hosts to access NVMe storage remotely while maintaining the high performance and low latency benefits of NVMe.

{{< include file="/static/includes/NVMe-oF-Overview.md" >}}

## NVMe-oF Subsystems Widget

The **NVMe-oF Subsystems** widget shows on the **Shares** screen.
The header shows the status of the NVMe service as **Stopped** or **Running**, the **Add** button, and the <span class="material-icons">more_vert</span> dropdown menu with two options:
* **Turn Service On/Off** toggle.
  You can also turn the service on/off from the **System > Services** screen, or set it to automatically start after a system restart.
* **Config Service** that opens the [NVMe-oF Global Configuration](#nvme-of-global-configuration-screen) screen.
  You can access this configuration screen by going to **System > Services** or using the **Global Configuration** button on the **NVMe-oF** screen.

{{< trueimage src="/images/SCALE/Shares/SharesScreenWithNVMeRunning.png" alt="NVMe-oF Screen without Subsystems" id="NVMe-oF Screen without Subsystems" >}}

The table in the **NVMe-oF Subsystems** widget lists each subsystem added in TrueNAS.

Each row shows the subsystem name, the number of namespaces associated with the subsystem, the number of ports available through the subsystem, and the number of hosts allowed or restricted from accessing the subsystem.

The <span class="material-icons">more_vert</span> dropdown menu for each subsystem shows two options:
* **View** - Opens the [**NVMe-oF**](#nvme-of-screen) screen showing the widgets for the selected subsystem.
* **Delete** - Opens [**Delete Subsystem**](#delete-subsystem-dialog) dialog.

### Delete Subsystem Dialog

The **Delete Subsystem** dialog confirms you want to delete the subsystem before it is deleted from the TrueNAS system.

{{< trueimage src="/images/SCALE/Shares/DeleteSubsystemDialog.png" alt="Delete Subsystem Dialog" id="Delete Subsystem Dialog" >}}

**Force** forces the delete operation if it is in use.
**Cancel** closes the dialog without deleting the subsystem. 
**Delete** removes the subsystem from the TrueNAS system.

## NVMe-oF Screen

The **NVMe-oF** screen displays a table listing subsystems (targets) added to Truenas, and a set of **Details** widgets for the subsystem selected in the table. **Shares** on top breadcrumb returns you to the **Shares** screen.

Prior to adding an NVMe-oF subsystem the NVMe-oF screen shows a general widget with information about subsystems, and a basic comparison to iSCSI.

{{< trueimage src="/images/SCALE/Shares/NVMe-oFScreenWithoutSubsystems.png" alt="NVMe-oF Screen without Subsystems" id="NVMe-oF Screen without Subsystems" >}}

The screen header has two buttons:

* **Global Configuration** opens the [**NVMe-oF Global Configuration**](#nvme-of-global-configuration-screen) screen.
* **Add Subsystem** opens the [**Add Subsystem**](#add-subsystem-wizard) screen.

After adding a subsystem, the **NVMe-oF** screen table lists it.
The first row of the table is selected by default and shows four Details widgets for that subsystem.
Select the row for any listed subsystem to view the detail widgets for that subsystem.

### Subsystems Table and Details Widgets

The **NVMe-oF** screen table lists subsystems added to TrueNAS.
Each row in the **Subsystems** table shows the subsystem name, the number of namespaces associated with the subsystem, the number of ports available through the subsystem, and the number of hosts allowed or restricted from accessing the subsystem.

{{< trueimage src="/images/SCALE/Shares/NVMe-oFScreenWithSubsystems.png" alt="NVMe-oF Screen with Subsystems" id="NVMe-oF Screen with Subsystems" >}}

Each subsystem shows a group of four widgets listed as **Details for *subsystemName*** where *subsystemName* is the name given to the subsystem (i.e., *test*). Subsystem widgets are:
* [**Details**](#details-widget)
* [**Namespaces**](#namespaces-widget)
* [**Ports**](#ports-widget)
* [**Associated Hosts**](#associated-hosts-widget)

#### Details Widget

The **Details** widget shows the name and NQN ID associated with the subsystem. Each includes and edit <span class="material-icons">edit</span> icon that opens an edit field.

{{< trueimage src="/images/SCALE/Shares/SubsystemDetailsWidget.png" alt="Subsystem Details Widget" id="Subsystem Details Widget" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | The name given to the subsystem at creation. The edit <span class="material-icons">edit</span> icon opens an edit field. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), etc. |
| **NQN** | The NVMe Qualified Name (NQN) is used to identify the subsystem. The edit <span class="material-icons">edit</span> icon changes the NQN ID to an entry field. Enter a new number formatted as an NQN ID number. |
| **Copy** | Copies the NQN number to the clipboard. |
{{< /truetable >}}
{{< /expand >}}

#### Namespaces Widget

The **Namespaces** widget shows the type of input devices (zvol or file) and a path to that input device.

{{< trueimage src="/images/SCALE/Shares/SubsystemNamespacesWidget.png" alt="Subsystem Namespaces Widget" id="Subsystem Namespaces Widget" >}}

**Add** opens the [**Add Namespace**](#add-and-edit-namespace-screens) screen.

**Edit** opens the [**Edit Namespace**](#add-and-edit-namespace-screens) screen.

**Delete** opens a [confirmation dialog](#delete-namespace-dialog) for the namespace.

#### Ports Widget

The **Ports** widget shows the port type and ID associated with the subsystem.

{{< trueimage src="/images/SCALE/Shares/SubsystemPortsWidget.png" alt="Subsystem Ports Widget" id="Subsystem Ports Widget" >}}

{{< include file="/static/includes/NVMe-oFAddPortsMenu.md" >}}

The **Remove this port from the subsystem** port action ![SubsystemPortActionIcon](/images/SCALE/Shares/SubsystemPortActionIcon.png "Subsystem Port Action Icon") icon removes the port from the subsystem.
After removing a port, the **Add** button lists any available port on the system in the format *IP address:port*.

#### Associated Hosts Widget

The **Associated Hosts** widget shows a list of hosts associated with the subsystem.
Shows **All hosts are allowed** if a host is not specified.

{{< trueimage src="/images/SCALE/Shares/SubsystemAssociatedHostsWidget.png" alt="Subsystem Assoicated Hosts Widget" id="Subsystem Associated Hosts Widget" >}}

**Add** opens the [**Add Host**](#add-and-edit-host-screens) screen.

## NVMe-oF Global Configuration Screen

Use to set system-wide NVMe-oF settings. **Config Service** on the **NVMe-oF Subsystem** widget dropdown menu,
**Global Configuration** on the **NVMe-oF** screen, and the <span class="material-icons">edit</span> edit icon on the **NVMe-oF** row on the **System > Services** screen open the **NVMe-oF Global Configuration** screen.

{{< trueimage src="/images/SCALE/Shares/NVMeoFGlobalConfigurationScreen.png" alt="NVMe-oF Global Configuration Screen" id="NVMe-oF Global Configuration Scree" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Base NQN** | NQN is used as the prefix on the creation of a subsystem, if a subnqn is not supplied. Modifying this value does not change the subnqn of any existing subsystems. |
| **Enable Asymmetric Namespace Access (ANA)** | Allows storage systems to inform hosts about the optimal controller path to access a namespace on Enterprise licensed systems. It is equivalent to Asymmetric Logical Unit Access (ALUA) in iSCSI. ANA helps storage arrays communicate to hosts which controller provides the best (lowest latency) path to specific namespaces, enabling intelligent multipathing and improved performance in NVMe-oF environments. |
| **Enable Remote Direct Memory Access (RDMA)** | Allows configuring one or more ports with RDMA selected as the transport when enabled. Requires an Enterprise license, RDMA-capable system and network equipment. Inactive on systems without an Enterprise licenses, if not equipped with required hardware, shows **Not enabled, because this system does not support RDMA**. |
| **Generate Cross-port Referrals for Ports on This System** | Allows xport_referral. If ANA is active, referrals are always generated between the peer ports on each TrueNAS controller node. |
{{< /truetable >}}
{{< /expand >}}

## Add Subsystem Wizard

The **Add Subsystem** wizard opens after clicking **Add** on the **NVMe-oF Subsystem** widget or **Add Subsystem** on the **NVMe-oF** screen.
The wizard has two parts, **What to Share** and **Access**. **What to Share** shows by default.

### What to Share

The **What to Share** screen allows configuring the subsystem and adding a namespace.

{{< trueimage src="/images/SCALE/Shares/AddSubsystemWhatToShare.png" alt="Add Subsystem What to Share Screen" id="Add Subsystem What to Share Screen" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Subsystem Name** | The name given to the subsystem. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), ampersand (&), at (@), or hashtag (#). |
| **NQN** | Shows **Generate from global setting**s** and the <span class="material-icons">edit</span> edit icon. Clicking on the edit <span class="material-icons">edit</span> icon or the text changes this to an edit field that allows manual entry of an NQN ID. The NVMe Qualified Name (NQN) is used to identify the subsystem. |
| **Add** | Opens the [**Add Namespaces**](#add-namespace-screen) screen. |
{{< /truetable >}}
{{< /expand >}}

### Access

The **Access** screen in the **Add Subsystem** wizard allows configuring hosts allowed to connect to the subsystem and ports the target uses to communicate with hosts.

{{< trueimage src="/images/SCALE/Shares/AddSubSystemAccess.png" alt="Add Subsystem Access Screen" id="Add Subsystem Access Screen" >}}

**Allow any host to connect** is selected by default.
When selected, it allows connections to any host.
When not selected, it shows the **Allow Hosts** option with an **Add** button that opens the [**Add Host**](#add-and-edit-host-screens) screen.

{{< trueimage src="/images/SCALE/Shares/AddSubsystemAccessWithAllowedHosts.png" alt="Add Subsystem Access with Allowed Hosts" id="Add Subsystem Access with Allowed Hosts" >}}

{{< include file="/static/includes/NVMe-oFAddPortsMenu.md" >}}

**Save** saves changes, creates the subsystem, closes the wizard screen, and returns to the previous screen.

## Add and Edit Namespace Screens

The **Add Namespace** and **Edit Namespace** screens show the same settings and options.
Use to select or create the storage device (zvol or file) for the NVMe-oF share.
**Add** to the right of **Namespaces** on the **What to Share** option of the **Add Subsystem** wizard opens the **Add Namespace** screen.
**Add** on the **Namespaces** widget on the **NVMe-oF** screen opens the **Add Namespaces** screen.
The <span class="material-icons">edit</span> edit icon on the **Namespaces** widget opens the **Edit Namespaces** screen.

{{< trueimage src="/images/SCALE/Shares/AddNamespaceScreenZvolTab.png" alt="Add Namespace Screen" id="Add Namespace Screen" >}}

The <span class="material-icons">edit</span> edit icon on the **Namespaces** widget for a selected subsystem on the **NVMe-oF** screen opens the **Edit Namespace** screen.

These two screens show three tabs:
* [**Zvol**](#zvol-tab) (selected by default) 
* [**Existing File**](#existing-file-tab)
* [**New File**](#new-file-tab)

### Zvol tab

The **Zvol** tab on the **Edit Namespace** screen shows the **Path to Zvol** fields.
The top blank field populates with the path for the existing zvol or parent dataset selected using the file browser field below it.

{{< trueimage src="/images/SCALE/Shares/EditNamespaceScreenZvolTab.png" alt="Edit Namespace Zvol Tab" id="Edit Namespace Zvol Tab" >}}

**Create Zvol** activates after selecting the parent dataset. It opens the [**Add Zvol**](#add-zvol-screen) screen.
Only the **Zvol** tab has the **Create Zvol** option.

### Existing File Tab

The **Existing File** tab on the **Edit Namespace** screen allows browsing to select the path to the parent dataset and existing file to associate with the namespace.

{{< trueimage src="/images/SCALE/Shares/EditNamespaceExistingFileTab.png" alt="Edit Namespace Existing File Tab" id="Edit Namespace Existing File Tab" >}}

**Path to File** field shows the mount path to the file location selected.

### New File Tab

The **New File** tab on the **Edit Namespace** screen allows creating a new file to associate with the namespace.

{{< trueimage src="/images/SCALE/Shares/EditNamespaceNewFileTab.png" alt="Edit Namespace New File Tab" id="Edit Namespace New File Tab" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Parent Directory** | Use to browse and select the path to the parent dataset. Populates the field with the mount path. |
| **Filename** | Specifies the name for the file. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), ampersand (&), at (@), or hashtag (#). |
| **File Size** | The storage capacity (size) you want to grant this file. |
{{< /truetable >}}
{{< /expand >}}

**Save** saves the settings, closes the screen, and returns to the previous screen.

### Delete Namespace Dialog

The **Delete Namespace** opens after clicking the delete icon to the right of a zvol on the **Namespaces** widget.

{{< trueimage src="/images/SCALE/Shares/DeleteNamespaceDialog.png" alt="Delete Namespace Dialog" id="Delete Namespace Dialog" >}}

The delete icon to the right of a file opens a Delete Namespace dialog with the option to also delete the file.

{{< trueimage src="/images/SCALE/Shares/DeleteNamespaceFromFile.png" alt="Delete Namespace and File Dialog" id="Delete Namespace and File Dialog" >}}

## Add Zvol Screen

Use to create a new zvol for the namespace to use for storage.
**Create Zvol** on the **Add Namespace** screen with the **Zvol** tab selected opens this screen.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreen.png" alt="Add Zvol screen" id="Add Zvol Screen" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | The name given to the zvol. Best practice is to keep the name short. Do not exceed 63 characters to prevent issues with accessing the zvol as a device. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), ampersand (&), at (@), or hashtag (#), etc. |
| **Size** | Specifies the size and value. For example, enter *10 GiB*. |
| **Force size** | The system restricts creating a zvol that brings the pool to over 80% capacity. Set to force creation of the zvol (not recommended). |
| **Sparse** | Enable to use thin provisioning where disk space for this volume is allocated on demand as new writes are received. Use caution when enabling this feature, as writes can fail when the pool is low on space. |
| **Sync** | Sets the data write synchronization. Options are:<br><li>**Inherit** takes the sync settings from the parent dataset.<br><li>**Standard** uses the settings that have been requested by the client software.<br><li>**Always** waits for data writes to complete.<br><li>**Disabled** never waits for writes to complete.</li> |
| **Compression** | Encode information in less space than the original data occupies. We recommend choosing a compression algorithm that balances disk performance with the amount of saved space. LZ4 is generally recommended because it maximizes performance and dynamically identifies the best files to compress. GZIP options range from 1 for least compression and best performance, through 9 for maximum compression with greatest performance impact. ZLE is a fast algorithm that only eliminates runs of zeroes. |
| **ZFS Deduplication** | Transparently reuse a single copy of duplicated  data to save space. Deduplication can improve storage capacity, butit is RAM-intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. Deduplicated data cannot be undeduplicated! |
| **Read-only** |Set to prevent the zvol from being modified.  |
| **Block size** | The zvol default block size is automatically chosen based on the number of disks in the pool for a general use case. |
| **Snapdev** | Controls whether the volume snapshot devices under /dev/zvol/⟨pool⟩  are hidden or visible. The default value is hidden. |
{{< /truetable >}}
{{< /expand >}}

### Encryption Settings

Encryption settings secure data within this zvol. These settings establish the level and type of encryption applied.
The default setting is **Inherit (non-encrypted)** when the root or parent dataset for the new storage is unencrypted.
If encrypted this shows **Inherit (encrypted)**. 

Clearing the checkbox shows the **Encryption Type** setting with two options: **Key** and **Passphrase**. Each option shows different setting options.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreenEncryption.png" alt="Add Zvol Encryption" id="Add Zvol Encryption" >}}

#### Key Type Settings

The **Key** settings accepts a system-generated or user-entered encryption key. 
Creating a new key file invalidates any previously downloaded key file for this dataset. Delete any previous key file backups and back up the new key file.
Shows with **Generate Key** selected by default. This automatically generates an encryption key for the zvol. Clearing the checkmark shows the additional key encryption settings.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreenKeyEncryption.png" alt="Add Zvol Key Encryption" id="Add Zvol Key Encryption" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Generate Key** | Randomly generates an encryption key for securing this dataset. Disabling this option requires manually defining an encryption key.
 WARNING: The encryption key is the only means to decrypt the information stored in this dataset. Store the encryption key in a secure location. |
| **Key** | Enter or paste a string to use as the encryption key for this zvol. |
| **Algorithm** | Mathematical instruction sets that determine how plain text is converted into cipher text. See Advanced Encryption Standard (AES) for more details. |
{{< /truetable >}}
{{< /expand >}}

#### Passphrase Type Settings

The **Passphrase** settings set encryption to a passphrase of your choice to encrypt the data in the zvol.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreenPassphraseEncryption.png" alt="Add Zvol Passphrase Encryption" id="Add Zvol Passphrase Encryption" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Passphrase** | User-defined string used to decrypt the dataset. Can be used instead of an encryption key.<br>WARNING: The passphrase is the only means to decrypt the information stored in this dataset. Be sure to create a memorable passphrase or physically secure the passphrase. |
| **Confirm Passphrase** | Confirms the user-defined string entered in **Passphrase**. Entries must match. |
| **pbkdf2iters** | The pencil shows a field where you can select an option from the dropdown list. Number of password-based key derivation function 2 (PBKDF2) iterations to reduce vulnerability to brute-force attacks. Entering a number larger than 100000 is required. See [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) for more details. |
| **Algorithm** | The pencil shows a field where you can select an option from the dropdown list. Mathematical instruction sets that determine how plain text is converted into cipher text. See [Advanced Encryption Standard (AES)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) for more details. |
{{< /truetable >}}
{{< /expand >}}

## Add and Edit Host Screens

The **Add Host** screen specifies a host and adds it to a subsystem when the **Allow any host to connect** option on the [**Add Subsystem > Access**](#access) screen is not enabled.
The **Edit Host** screen shows the fields associated with the subsystem and allows you to change the host settings.

{{< trueimage src="/images/SCALE/Shares/AddHostScreen.png" alt="Add Host Screen" id="Add Host Screen" >}}

**Require Host Authentication** shows the additional setting options.

{{< trueimage src="/images/SCALE/Shares/AddHostScreenRequireAuthentication.png" alt="Add Host Screen Require Authentication" id="Add Host Screen Require Authentication" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Host NQN** | The unique identifier specific to the subsystem that hosts the storage namespaces being shared. It contains the namespaces (storage volumes) shared over fabric. The hosts (targets) use this to determine which hosts can access the storage resources. Storage arrays use the NQN to deterime which hosts can access the share namespace. The NQN shows in system logs, allowing hosts to find available storage shares. Format of the NQN is *nqn.2019-05.com.example:storage-array-01*. The NQN is determined by the **basenqn** in the **NVMe-oF Global Settings** screen. |
| **Require Host Authentication** | When selected/enabled, shows additional authentication settings: hash, keys for the host to present or TrueNAS to present, generate keys for each key option, and the Diffie-Hellman key exchange option. |
| **Hash** | Shows the current hash option **SHA-256** and the <span class="material-icons">edit</span> edit icon that shows a dropdown list of hash options. Options are **SHA-256**, **SHA0384**, and **SHA-512**. |
| **Key For Host To Present** | Sets the DH-CHAP key used when authenticating to the host. It accepts copy/paste of a hash, or use **Generate Key** directly under the field to add a system-generated key.  |
| **Generate Key** | Adds a system-generated DH-CHAP key to the **Key For Host To Present** field. |
| **Key ForeTrueNAs To Present (Optional)** | Sets the secret that the TrueNAS system presents to the host when the host connects to the subsystem (bi-directional authentication). Accepts copy/paste of a key or use the **Generate Key** directly below this field to use a system-generated key. |
| **Generate Key** | Adds a system-generated bi-directional authentication key to the **Key For TureNAS To Present** field. |
| **Also use Diffie-Hellman key exchange for additional security** | Diffie–Hellman key exchange is used in addition to CHAP for authentication. |
{{< /truetable >}}
{{< /expand >}}

## Add Port Screen

The **Add Port** screen creates a new port *IP address:port* assignment on the system for use by a subsystem.

{{< trueimage src="/images/SCALE/Shares/AddPortScreen.png" alt="Add Port Screen" id="Add Port Screen" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Transport Type** | Sets the transport type. Options are: **TCP**, **RDMA**, or **Fibre Channel**. The **RDMA** and **Fibre Channel** options require Enterprise licenses and systems with compatible/supporting hardware. |
| **Port** | Sets the current port assignment. |
| **Address** | Sets an existing static IP address for the port assignment. |
{{< /truetable >}}
{{< /expand >}}

## Edit Port Screen

The **Edit Port** screen shows current port settings for the selected subsystem.
The <span class="material-icons">edit</span> edit icon on the port row listed on the **Ports** dialog opens the **Edit Port** screen.

{{< trueimage src="/images/SCALE/Shares/EditPortScreen.png" alt="Edit Port Screen" id="Edit Port Screen" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Transport Type** | Shows the transport type. Options are **TCP**, **RDMA**, or **Fibre Channel**. The **RDMA** and **Fibre Channel** options require Enterprise licenses and systems with compatible/supporting hardware. |
| **Port** | Shows the current port assignment. |
| **Address** | Shows the current static IP address assignment. |
{{< /truetable >}}
{{< /expand >}}

## Ports Dialog

The **Ports** dialog shows a table showing the port name, type, IP address, communication port number, and the number of subsystems that use it.
The port row shows the <span class="material-icons">edit</span> edit icon and the <span class="material-icons">delete</span> delete icon.

{{< trueimage src="/images/SCALE/Shares/ManagePortsDialog.png" alt="Ports Dialog" id="Ports Dialog" >}}

**Add New** opens the [**Add Port**](#add-port-screen) screen.
Edit opens the [**Edit Port**](#edit-port-screen) screen.
Delete opens a [delete confirmation](#delete-port-dialog) dialog for the port.

### Delete Port Dialog

The **Delete Port** confirmation dialog removes the port from the selected subsystem but does not delete it from TrueNAS. A deleted port shows on the **Add** dropdown list on the **Ports** widget for a selected subsystem on the **NVMe-oF** screen.
The dialog shows the name of the subsystem and the assigned *IP address:port* assignment.

{{< trueimage src="/images/SCALE/Shares/DeletePortDialog.png" alt="Delete Port Dialog" id="Delete Port Dialog" >}}

**Cancel** closes the dialog without removing the port from the subsystem.
**Delete Anyway** removes the port assignment from the subsystem specified in the dialog.