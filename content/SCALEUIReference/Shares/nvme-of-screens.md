---
title: "NVMe-oF Share Screens"
description: "Provides information on NVMe-oF share screens and settings."
weight: 60
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
  You can also turn the service on/off from the **System > Services** screen or set it to automatically restart after a system restart.
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

Before adding an NVMe-oF subsystem, the NVMe-oF screen shows a general widget with information about subsystems and a basic comparison to iSCSI.

{{< trueimage src="/images/SCALE/Shares/NVMe-oFScreenWithoutSubsystems.png" alt="NVMe-oF Screen without Subsystems" id="NVMe-oF Screen without Subsystems" >}}

**Global Configuration** opens the [**NVMe-oF Global Configuration**](#nvme-of-global-configuration-screen) screen.

**Add Subsystem** opens the [**Add Subsystem**](#add-subsystem-wizard) screen.

After adding a subsystem, the **NVMe-oF** screen **Subsystem** table lists it.
The first row of the table is selected by default and shows four **Details** widgets for that subsystem.
Select the row of any listed subsystem to view the detail widgets for that subsystem.

### Subsystems Table

The **NVMe-oF** screen **Subsystem** table lists subsystems added to TrueNAS.
Each row shows the subsystem name, the number of namespaces associated with the subsystem, the number of ports available through the subsystem, and the number of hosts allowed or restricted from accessing the subsystem.

{{< trueimage src="/images/SCALE/Shares/NVMe-oFScreenWithSubsystems.png" alt="NVMe-oF Screen with Subsystems" id="NVMe-oF Screen with Subsystems" >}}

TrueNAS allows adding a subsystem without configuring a namespace, port, or host, which can be added later.
An <span class="material-icons">report_problem</span> alert icon shows beside the namespace name in the table and on the **Ports** and **Namespaces** widgets until these are added.

### Details Widgets

Each subsystem shows a group of four **Details for *subsystemName*** widgets on the right side of the screen, *subsystemName* is the name given to the subsystem (i.e., *test*).
Subsystem widgets are:

* [**Details**](#details-widget)
* [**Namespaces**](#namespaces-widget)
* [**Ports**](#ports-widget)
* [**Associated Hosts**](#associated-hosts-widget)

#### Details Widget

The **Details** widget shows the name and NQN ID associated with the TrueNAS subsystem.
The NQN shows an edit <span class="material-icons">edit</span> icon that changes the NQN to a text-entry field.

{{< trueimage src="/images/SCALE/Shares/SubsystemDetailsWidget.png" alt="Subsystem Details Widget" id="Subsystem Details Widget" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Shows the name given to the subsystem at creation. The edit <span class="material-icons">edit</span> icon opens an edit field. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), etc. |
| **NQN** | The NVMe Qualified Name (NQN) that identifies the subsystem, includes the base NQN and name of the subsystem. The edit <span class="material-icons">edit</span> icon changes the NQN ID to a text-entry field. It accepts copy/paste of a new properly formatted NQN ID number. |
{{< /truetable >}}
{{< /expand >}}

#### Namespaces Widget

The **Namespaces** widget lists namespaces (zvol or file) added to the subsystem and the path to it.
*Namespaces* are similar to iSCSI extents.

{{< trueimage src="/images/SCALE/Shares/SubsystemNamespacesWidget.png" alt="Subsystem Namespaces Widget" id="Subsystem Namespaces Widget" >}}

**Add** opens the [**Add Namespace**](#add-namespace-screens) screen.

**Delete** opens a [confirmation dialog](#delete-namespace-dialog) for the namespace.

#### Ports Widget

The **Ports** widget shows the port type and ID associated with the subsystem.

{{< trueimage src="/images/SCALE/Shares/SubsystemPortsWidget.png" alt="Subsystem Ports Widget" id="Subsystem Ports Widget" >}}

{{< include file="/static/includes/NVMe-oFAddPortsMenu.md" >}}

The ![RemoveFromSubsystem](/images/SCALE/Shares/RemoveFromSubsystem.png "Remove from Subsystem Icon") **Remove this port from the subsystem** icon removes the port from the subsystem but does not delete the port from TrueNAS.
After removing a port, the **Add** button dropdown list shows the removed port and all available ports on the system in the format *IP address:port*.

#### Associated Hosts Widget

The **Associated Hosts** widget shows a list of hosts associated with the subsystem.
Shows **All hosts are allowed** if a host is not specified.

{{< trueimage src="/images/SCALE/Shares/SubsystemAssociatedHostsWidget.png" alt="Subsystem Associated Hosts Widget" id="Subsystem Associated Hosts Widget" >}}

After adding a host, the widget shows the NQN identification number for the client host and the ![RemoveFromSubsystem](/images/SCALE/Shares/RemoveFromSubsystem.png "Remove from Subsystem Icon") **Removes this host from the subsystem** icon that only removes the host from the subsystem but does not delete it from TrueNAS.

{{< trueimage src="/images/SCALE/Shares/AssoicatedHostsWiidgetWithHost.png" alt="Associated Hosts Widget with a Host" id="Associated Hosts Widget with a Host" >}}

**Add** shows a dropdown list of options:

* **Create New** opens the [**Add Host**](#add-and-edit-host-screens) screen.
* **Manage Hosts** opens the [**Hosts**](#hosts-window) window
* **Allow all hosts** that removes the host from the subsystem but does not delete it.
  It toggles the **Add** dropdown list to show the available host NQN hidden by selecting **Allow all hosts** and removes **Allow all hosts** from the dropdown list.

## NVMe-oF Global Configuration Screen

Set system-wide NVMe-oF settings.
**Config Service** on the **NVMe-oF Subsystem** widget dropdown menu, **Global Configuration** on the **NVMe-oF** screen, and the <span class="material-icons">edit</span> edit icon on the **NVMe-oF** row on the **System > Services** screen open the **NVMe-oF Global Configuration** screen.

{{< trueimage src="/images/SCALE/Shares/NVMeoFGlobalConfigurationScreen.png" alt="NVMe-oF Global Configuration Screen" id="NVMe-oF Global Configuration Scree" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Base NQN** | Text-entry field that shows the TrueNAS NVMe NQN identification number and accepts manual or copy/paste entry of a NQN. It is used as the prefix of a subsystem NQN at creation if a subnqn is not supplied. Modifying this value does not change the subnqn of any existing subsystems. |
| **Enable Asymmetric Namespace Access (ANA)** | When enabled, allows an Enterprise-licensed High Availability (HA) storage system to inform a host about the optimal controller path to access a namespace. It is equivalent to Asymmetric Logical Unit Access (ALUA) in iSCSI. ANA helps storage arrays communicate with hosts and inform the host which controller provides the best (lowest latency) path to specific namespaces, enabling intelligent multipathing and improving performance in NVMe-oF environments. |
| **Enable Remote Direct Memory Access (RDMA)** | When enabled, allows configuring one or more ports after enabling and selecting RDMA as the transport. It requires an Enterprise license, and an RDMA-capable system and network equipment. Inactive on systems without an Enterprise license. If the system does not have the required hardware, it shows **Not enabled, because this system does not support RDMA**. |
| **Generate Cross-port Referrals for Ports on This System** | When enabled, allows xport_referral. If ANA is active, referrals are always generated between the peer ports on each TrueNAS controller node. |
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
| **Subsystem Name** | Text-entry field for the name of the subsystem. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), ampersand (&), at (@), or hashtag (#). |
| **NQN** | Shows **Generate from global settings** and the <span class="material-icons">edit</span> edit icon. Clicking on the edit <span class="material-icons">edit</span> icon or the text changes to a text-entry field that allows manually entering an NVMe Qualified Name (NQN) that is used to identify the subsystem. TrueNAS creates an NQN using the base NQN shown on the **NVMe-oF Global Configuration** screen. |
| **Add** | Opens the [**Add Namespaces**](#add-namespace-screen) screen. |
{{< /truetable >}}
{{< /expand >}}

### Access

The **Access** screen in the **Add Subsystem** wizard allows configuring hosts allowed to connect to the subsystem and ports the target uses to communicate with hosts.

{{< trueimage src="/images/SCALE/Shares/AddSubSystemAccess.png" alt="Add Subsystem Access Screen" id="Add Subsystem Access Screen" >}}

**Allow any host to connect** is selected by default.
When selected, it allows connections to any host.
When not selected, it shows the **Allow Hosts** option and **Add** button that opens the [**Add Host**](#add-and-edit-host-screens) screen.

{{< trueimage src="/images/SCALE/Shares/AddSubsystemAccessWithAllowedHosts.png" alt="Add Subsystem Access with Allowed Hosts" id="Add Subsystem Access with Allowed Hosts" >}}

{{< include file="/static/includes/NVMe-oFAddPortsMenu.md" >}}

**Save** saves changes, creates the subsystem, closes the wizard screen, and returns to the previous screen.


## Add Namespace Screens
<!-- BETA.1 removes the ability to edit a namespace. RC.1 might add it back or it could get added back later. No details on this. add an enable checkbox to allow disabling the namespace, update screenshots and add descriptions to these screens/tabs -->
The **Add Namespace** ** screens show settings and options to create namespaces.
Use to select or create the storage device (zvol or file) for the NVMe-oF share.

**Add** to the right of **Namespaces** on the **What to Share** option of the **Add Subsystem** wizard opens the **Add Namespace** screen.
**Add** on the **Namespaces** widget on the **NVMe-oF** screen opens the **Add Namespaces** screen.
<!--  Comment out edit content for now as it might be added back at some point in the semi-near term future
The <span class="material-icons">edit</span> edit icon on the **Namespaces** widget opens the **Edit Namespaces** screen. -->

{{< trueimage src="/images/SCALE/Shares/AddNamespaceScreenZvolTab.png" alt="Add Namespace Screen" id="Add Namespace Screen" >}}

These screens have three tabs:

* [**Zvol**](#zvol-tab) (selected by default)
* [**Existing File**](#existing-file-tab)
* [**New File**](#new-file-tab)

### Zvol Tab

The **Zvol** tab on the **Add Namespace** screen allows selecting an existing or creating a new zvol namespace.
There are two **Path to Zvol** fields: the blank field and the file browser field.
The top blank field populates with the path for the existing zvol or parent dataset selected using the file browser field below it.

{{< trueimage src="/images/SCALE/Shares/AddNamespaceScreenZvolTab.png" alt="Add Namespace Zvol Tab" id="Add Namespace Zvol Tab" >}}

**Create Zvol** only shows on the **Zvol** tab. It activates after selecting the parent dataset in the file browser field.
It opens the [**Add Zvol**](#add-zvol-screen) screen.

### Existing File Tab

The **Existing File** tab on the **Add Namespace** allows selecting an existing file as a namespace.
There are two **Path to File** fields: the blank field and the file browser field.
The top blank field populates with the path for the existing file selected using the file browser field below it.

{{< trueimage src="/images/SCALE/Shares/AddNamespaceExistingFileTab.png" alt="Add Namespace Existing File Tab" id="Add Namespace Existing File Tab" >}}

### New File Tab

The **New File** tab on the **Add Namespace** screen allows creating a new file for a namespace.

{{< trueimage src="/images/SCALE/Shares/AddNamespaceNewFileTab.png" alt="Add Namespace New File Tab" id="Add Namespace New File Tab" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Parent Directory** | Shows two fields: a blank text-entry field and a file browser field. The top blank field populates with the path to the parent directory selected using the file browser field below it. |
| **Filename** | Text-entry field for the name of the file. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), ampersand (&), at (@), or hashtag (#). |
| **File Size** | Text-entry field for the storage capacity (size) you want to grant this file. |
{{< /truetable >}}
{{< /expand >}}

**Save** saves the settings, closes the screen, and returns to the previous screen.

### Delete Namespace Dialog

The **Delete Namespace** opens after clicking the delete icon to the right of a zvol on the **Namespaces** widget.

{{< trueimage src="/images/SCALE/Shares/DeleteNamespaceDialog.png" alt="Delete Namespace Dialog" id="Delete Namespace Dialog" >}}

The delete icon to the right of a file opens a **Delete Namespace** dialog showing the option to delete the file.

{{< trueimage src="/images/SCALE/Shares/DeleteNamespaceFromFile.png" alt="Delete Namespace and File Dialog" id="Delete Namespace and File Dialog" >}}

## Add Zvol Screen

Use to create a new zvol for the namespace to use for storage.
**Create Zvol** on the **Add Namespace** screen with the **Zvol** tab selected opens this screen.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreen.png" alt="Add Zvol screen" id="Add Zvol Screen" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Text-entry field for the name given to the zvol. Best practice is to enter a short name that does not exceed 63 characters to prevent issues with accessing the zvol. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), ampersand (&), at (@), or hashtag (#), etc. |
| **Size** | Text-entry field to specify the size and value allocated to the file. For example, enter *10 GiB*. |
| **Force size** | When enabled, the system restricts creating a zvol that brings the pool to over 80% capacity. Set to force creation of the zvol (not recommended). |
| **Sparse** | Enables using thin provisioning where disk space for this volume is allocated on demand as new writes are received. Use caution when enabling this feature, as writes can fail when the pool is low on space. |
| **Sync** | Sets the data write synchronization. Options are:<br><li>**Inherit** takes the sync settings from the parent dataset.<br><li>**Standard** uses the settings requested by the client software.<br><li>**Always** waits for data writes to complete.<br><li>**Disabled** never waits for writes to complete.</li> |
| **Compression** | Encodes information in less space than the original data occupies. We recommend choosing a compression algorithm that balances disk performance with the amount of saved space. LZ4 is generally recommended because it maximizes performance and dynamically identifies the best files to compress. GZIP options range from 1 for least compression and best performance, through 9 for maximum compression with greatest performance impact. ZLE is a fast algorithm that only eliminates runs of zeroes. |
| **ZFS Deduplication** | Transparently reuses a single copy of duplicated data to save space. Deduplication can improve storage capacity, but it is RAM-intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. Deduplicated data cannot be undeduplicated! |
| **Read-only** | When enabled, it prevents modifying the zvol. |
| **Block size** | Shows a dropdown list of options to set the zvol default block size. Block size is automatically chosen based on the number of disks in the pool for a general use case. |
| **Snapdev** | Dropdown list of options to control whether the volume snapshot devices under <file>/dev/zvol/⟨pool⟩</file> are hidden or visible. The default value is **Inherit (hidden)**. |
{{< /truetable >}}
{{< /expand >}}

### Encryption Settings

Encryption settings secure data within this zvol. These settings establish the level and type of encryption applied.
The default setting is **Inherit (non-encrypted)** when the root or parent dataset for the new storage is unencrypted.
If encrypted, this shows **Inherit (encrypted)**.

Clearing the checkbox shows the **Encryption Type** setting with two options: **Key** and **Passphrase**. Each option shows different setting options.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreenEncryption.png" alt="Add Zvol Encryption" id="Add Zvol Encryption" >}}

#### Key Type Settings

The **Key** settings accept a system-generated or user-entered encryption key.
Creating a new key file invalidates the previously downloaded key file associated with this dataset.
Shows with **Generate Key** selected by default. This automatically generates an encryption key for the zvol. Clearing the checkmark shows the additional key encryption settings.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreenKeyEncryption.png" alt="Add Zvol Key Encryption" id="Add Zvol Key Encryption" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Generate Key** | Randomly generates an encryption key to secure the zvol. Disable to manually enter an encryption key. <br><br>  WARNING: The encryption key is the only means to decrypt the information stored in this zvol. Store the encryption key in a secure location. |
| **Key** |Text-entry field that accepts manually entering or copy/pasting an alpha-numeric string to use as the encryption key for this zvol. |
| **Algorithm** | Dropdown list of mathematical instruction sets that determine how plain text is converted into cipher text. See [Advanced Encryption Standard (AES)(https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)] for more details. |
{{< /truetable >}}
{{< /expand >}}

#### Passphrase Type Settings

The **Passphrase** settings set encryption to a passphrase of your choice to encrypt the data in the zvol.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreenPassphraseEncryption.png" alt="Add Zvol Passphrase Encryption" id="Add Zvol Passphrase Encryption" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Passphrase** | Text-entry field that accepts manual or copy/paste of a user-defined string that decrypts the zvol. Use instead of an encryption key.<br><br>WARNING: The passphrase is the only means to decrypt the information stored in this dataset. Be sure to create a memorable passphrase or physically secure the passphrase. |
| **Confirm Passphrase** | Confirms the user-defined string entered in **Passphrase**. Entries must match. |
| **pbkdf2iters** | The pencil icon shows a dropdown list of options to set the number of password-based key derivation function 2 (PBKDF2) iterations to reduce vulnerability to brute-force attacks. Entering a number larger than 100000 is required. See [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) for more details. |
| **Algorithm** | The pencil icon shows dropdown list of options to set the mathematical instruction that determine how plain text is converted into cipher text. See [Advanced Encryption Standard (AES)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) for more details. |
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
| **Host NQN** | Text-entry field that accepts manual or copy/paste of the unique identifier obtained from the host you allow to access the subsystem. Format of the NQN is *nqn.2019-05.com.example:storage-array-01*. |
| **Require Host Authentication** | When selected/enabled, shows additional authentication settings: **Hash**, **Key For Host To Present**, **Key For TrueNAs To Present (Optional)**, generate keys for each key option, and **Also use Diffie-Hellman key exchange for additional security**. |
| **Hash** | Shows the current hash option **SHA-256** and the <span class="material-icons">edit</span> edit icon that shows a dropdown list of hash options. Options are **SHA-256**, **SHA0384**, and **SHA-512**. |
| **Key For Host To Present** | The DH-CHAP key, obtained from the host, to authenticate access to the subsystem. Accepts manual or copy/paste entry of a hash. Use **Generate Key** directly under the field to have TrueNAS create a key to copy/paste into the host to use as the authentication key for that host. |
| **Generate Key** | Populates the **Key For Host To Present** field with a TrueNAS system-generated DH-CHAP key for the host. |
| **Key For TrueNAs To Present (Optional)** | The secret key the TrueNAS system presents to the host that further validates the connection between the host and TrueNAS when the host connects to the subsystem (bi-directional authentication). Accepts copy/paste of a key or use the **Generate Key** directly below this field to populate with a system-generated key. Provide this key to the host connecting with TrueNAS to authenticate the TrueNAS system in the connection authorization. |
| **Generate Key** | Populates the **Key For TrueNAS To Present** field with a system-generated bi-directional authentication key. |
| **Also use Diffie-Hellman key exchange for additional security** | Enables further security through a Diffie–Hellman key exchange. This affords greater authentication security than using only the CHAP keys for authentication. |
{{< /truetable >}}
{{< /expand >}}

## Hosts Window

The **Hosts** window shows a table listing the host NQN, if it requires authentication, and the number of subsystems that use it.
The host row shows the <span class="material-icons">edit</span> edit icon and the <span class="material-icons">delete</span> delete icons.

{{< trueimage src="/images/SCALE/Shares/ManageHostsWindow.png" alt="Hosts Dialog" id="Hosts Dialog" >}}

**Add New** opens the [**Add Host**](#add-and-edit-host-screens) screen.

Edit opens the [**Edit Host**](#add-and-edit-host-screens) screen.

Delete opens a [delete confirmation](#delete-host-dialog) dialog for the port.

### Delete Host Dialog

The **Delete Host** confirmation dialog deletes the host(s) from the listed subsystems(s) listed in the dialog and from TrueNAS.

{{< trueimage src="/images/SCALE/Shares/DeleteHostDialog.png" alt="Delete Host Dialog" id="Delete Host Dialog" >}}

**Cancel** closes the dialog without removing the host from the subsystem.

**Delete Anyway** deletes the host from the subsystem(s) specified in the dialog.

## Add Port Screen

by subsystems. Ports are formatted as *IP address:port*.

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
| **Transport Type** | Dropdown list of options for the transport type. Options are **TCP**, **RDMA**, or **Fibre Channel**. The **RDMA** and **Fibre Channel** options require Enterprise licenses and systems with compatible/supporting hardware. |
| **Port** | Text-entry field that shows the current port assignment and allows manual or copy/past entry of a new port number. |
| **Address** | Dropdown list that shows the current static IP address assignment and any other static IP on the system the subsystem can use. |
{{< /truetable >}}
{{< /expand >}}

## Ports Window

The **Ports** window shows a table showing the port name, type, IP address, communication port number, and the number of subsystems that use it.
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
