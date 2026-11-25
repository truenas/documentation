---
title: "NVMe-oF Share Screens"
description: "Provides information on NVMe-oF share screens and settings."
weight: 50
tags:
- nvme-of
- fibre channel
- rdma
- tcp
- NVME over Fabric
- spdk
- linux kernel
doctype: reference
---


The **NVMe-oF** screens provide access to screens, cards, settings, and dialogs to add, manage, or delete NVMe over Fabric subsystems (targets).
NVMe-oF (NVMe over Fabric) is a specification that extends NVMe storage access over network fabrics like Ethernet, Fibre Channel, and InfiniBand.
It allows hosts to access NVMe storage remotely while maintaining the high performance and low latency benefits of NVMe.

{{< include file="/static/includes/NVMe-oF-Overview.md" >}}

## NVMe-oF Subsystems Card

The **NVMe-oF Subsystems** card shows on the **Shares** screen.
The header shows the status of the NVMe service as **Stopped** or **Running**, and opens the [**NVMe-oF** screen](#nvme-of-screen).

**Add** opens the [**Add Subsystem**](#add-subsystem-wizard) screen.

The <span class="material-icons">more_vert</span> dropdown menu options are:
* **Turn Service On/Off** toggle - Turns the service on or off.
  You can also turn the service on/off from the **System > Services** screen or set it to automatically restart after a system restart.
* **Config Service** - Opens the [NVMe-oF Global Configuration](#nvme-of-global-configuration-screen) screen.
  You can access this configuration screen by going to **System > Services** or using the **Global Configuration** button on the **NVMe-oF** screen.

{{< trueimage src="/images/SCALE/Shares/SharesScreenWithNVMeRunning.png" alt="NVMe-oF Screen without Subsystems" id="NVMe-oF Screen without Subsystems" >}}

The **NVMe-oF Subsystems** card table lists subsystems added in TrueNAS.
Each table row shows the subsystem name, the number of namespaces associated with the subsystem, the number of ports available through the subsystem, and the number of hosts allowed or restricted from accessing the subsystem.

The subsystem <span class="material-icons">more_vert</span> dropdown menu options are:
* **View** - Opens the [**NVMe-oF**](#nvme-of-screen) screen showing the cards for the selected subsystem.
* **Delete** - Opens [**Delete Subsystem**](#delete-subsystem-dialog) dialog.

### Delete Subsystem Dialog

The **Delete Subsystem** dialog shows the name of the subsystem and asks for confirmation before it deletes the subsystem from TrueNAS.

{{< trueimage src="/images/SCALE/Shares/DeleteSubsystemDialog.png" alt="Delete Subsystem Dialog" id="Delete Subsystem Dialog" >}}

**Force** forces the delete operation if the subsystem has a port or host associated with it.

**Cancel** closes the dialog without deleting the subsystem.

**Delete** removes the subsystem from the TrueNAS system.

## NVMe-oF Screen

The **NVMe-oF** screen shows a table listing subsystems (targets) added to Truenas, and a set of **Details** cards for the subsystem selected in the table.
The screen opens with the first subsystem in the table selected and showing the cards for that subsystem.
Subsystem cards show the information for the table row selected.

**Shares** on top breadcrumb returns you to the **Shares** screen.

Before adding an NVMe-oF subsystem, the NVMe-oF screen shows a general card with information about subsystems and a basic comparison to iSCSI.

{{< trueimage src="/images/SCALE/Shares/NVMe-oFScreenWithoutSubsystems.png" alt="NVMe-oF Screen without Subsystems" id="NVMe-oF Screen without Subsystems" >}}

**Global Configuration** opens the [**NVMe-oF Global Configuration**](#nvme-of-global-configuration-screen) screen.

**Add Subsystem** opens the [**Add Subsystem**](#add-subsystem-wizard) screen.

### Subsystems Table

The **NVMe-oF** screen **Subsystem** table lists subsystems added to TrueNAS.

**Search** in the **Subsystems** table header row filters the subsystems listed in the table to match the entered text.

Each row shows the subsystem name, the number of namespaces associated with the subsystem, the number of ports available through the subsystem, and the number of hosts allowed or restricted from accessing the subsystem.

{{< trueimage src="/images/SCALE/Shares/NVMe-oFScreenWithSubsystems.png" alt="NVMe-oF Screen with Subsystems" id="NVMe-oF Screen with Subsystems" >}}

TrueNAS allows adding a subsystem without configuring a namespace, port, or host, which can be added later.
An <span class="material-icons">report_problem</span> alert icon shows beside the namespace name in the table and on the **Ports** and **Namespaces** cards until these are added.

### Details Cards

Each subsystem shows a group of **Details for *subsystemName*** cards on the right side of the screen, *subsystemName* is the name given to the subsystem (i.e., *test*).
Subsystem cards are:

* [**Details**](#details-card)
* [**Namespaces**](#namespaces-card)
* [**Ports**](#ports-card)
* [**Associated Hosts**](#associated-hosts-card)

#### Details Card

The **Details** card shows the name and NQN ID associated with the TrueNAS subsystem.
The NQN shows an edit <span class="material-icons">edit</span> icon that changes the NQN to a text-entry field.

{{< trueimage src="/images/SCALE/Shares/SubsystemDetailsWidget.png" alt="Subsystem Details Card" id="Subsystem Details Card" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies an identifier using alphanumeric and allowed special characters with no spaces. Shows the name given to the subsystem at creation. The edit <span class="material-icons">edit</span> icon opens an edit field. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), etc. |
| **NQN** | Shows the NVMe Qualified Name (NQN) genterated by TrueNAS that identifies the subsystem. It includes the base NQN and the name of the subsystem. The edit <span class="material-icons">edit</span> icon changes the NQN ID to a text-entry field that accepts copy/paste of a new properly formatted NQN ID number. |
{{< /truetable >}}
{{< /expand >}}

#### Namespaces Card

The **Namespaces** card lists namespaces (zvol or file) added to the subsystem and the path to it.
*Namespaces* are similar to iSCSI extents.

{{< trueimage src="/images/SCALE/Shares/SubsystemNamespacesWidget.png" alt="Subsystem Namespaces Card" id="Subsystem Namespaces Card" >}}

**Add** opens the [**Add Namespace**](#add-namespace-screens) screen.

**Delete** opens a [confirmation dialog](#delete-namespace-dialog) for the namespace.

#### Ports Card

The **Ports** card shows the port type and ID associated with the subsystem.

{{< trueimage src="/images/SCALE/Shares/SubsystemPortsWidget.png" alt="Subsystem Ports Card" id="Subsystem Ports Card" >}}

{{< include file="/static/includes/NVMe-oFAddPortsMenu.md" >}}

The ![RemoveFromSubsystem](/images/SCALE/Shares/RemoveFromSubsystem.png "Remove from Subsystem Icon") **Remove this port from the subsystem** icon removes the port from the subsystem but does not delete the port from TrueNAS.

#### Associated Hosts Card

The **Associated Hosts** card shows a list of hosts associated with the subsystem.
Shows **All hosts are allowed** if a host is not specified.

{{< trueimage src="/images/SCALE/Shares/SubsystemAssociatedHostsCard.png" alt="Subsystem Associated Hosts Card" id="Subsystem Associated Hosts Card" >}}

After adding a host, the card shows the NQN identification number for the client host and the ![RemoveFromSubsystem](/images/SCALE/Shares/RemoveFromSubsystem.png "Remove from Subsystem Icon") **Removes this host from the subsystem** icon that only removes the host from the subsystem but does not delete it from TrueNAS.

{{< trueimage src="/images/SCALE/Shares/AssociatedHostsCardWithHost.png" alt="Associated Hosts Card with a Host" id="Associated Hosts Card with a Host" >}}

**Add** shows a dropdown list of options:
* **Create New** - Opens the [**Add Host**](#add-and-edit-host-screens) screen.
* **Manage Hosts** - opens the [**Hosts**](#hosts-window) window
* **Allow all hosts** - Removes the host from the subsystem but does not delete it.
  It toggles the **Add** dropdown list to show the available host NQN hidden by selecting **Allow all hosts** and removes **Allow all hosts** from the dropdown list.

## NVMe-oF Global Configuration Screen

Configures system-wide NVMe-oF settings.
**Config Service** on the **NVMe-oF Subsystem** card dropdown menu, **Global Configuration** on the **NVMe-oF** screen, and the <span class="material-icons">edit</span> edit icon on the **NVMe-oF** row on the **System > Services** screen open the **NVMe-oF Global Configuration** screen.

{{< trueimage src="/images/SCALE/Shares/NVMeoFGlobalConfigurationScreen.png" alt="NVMe-oF Global Configuration Screen" id="NVMe-oF Global Configuration Screen" >}}

{{< enterprise >}}
Enterprise systems equipped with the right hardware and license show the **SPDK (userspace)** and **Linux Kernel** options that change the NVMe backend.
These experimental implementation functions are geared toward experimentation with client compatibility, and are available to try based on your use case if you have issues with certain clients, such as hypervisors that might require specific capabilities that come with the Linux Kernel or SPDK option.
Stopping the service enables these options. After selecting, restart the service.

{{< trueimage src="/images/SCALE/Shares/NVMeoFGlobalConfigurationScreenWithSPDK.png" alt="NVMe-oF Global Configuration with SPDK" id="NVMe-oF Global Configuration with SPDK" >}}

{{< include file="/static/includes/NVMe-oFSPDKorLinuxKernel.md" >}}

{{< /enterprise >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Base NQN** | Specifies the TrueNAS NVMe NQN identification number, and accepts manual or copy/paste entry of an NQN. It is used as the prefix of a subsystem NQN at creation if a subNQN is not supplied. Modifying this value does not change the subNQN of any existing subsystems. |
| **Enable Asymmetric Namespace Access (ANA)** | Allows an Enterprise-licensed High Availability (HA) storage system to inform a host about the optimal controller path to access a namespace. It is equivalent to Asymmetric Logical Unit Access (ALUA) in iSCSI. ANA helps storage arrays communicate with hosts and inform the host which controller provides the best (lowest latency) path to specific namespaces, enabling intelligent multipathing and improving performance in NVMe-oF environments. |
| **Enable Remote Direct Memory Access (RDMA)** | Allows configuring one or more ports after enabling and selecting RDMA as the transport. It requires an Enterprise license, an RDMA-capable system, and network equipment. Inactive on systems without an Enterprise license. If the system does not have the required hardware, it shows **Not enabled, because this system does not support RDMA**. |
| **Generate Cross-port Referrals for Ports on This System** | Allows xport_referral. If ANA is active, referrals are always generated between the peer ports on each TrueNAS controller node. |
{{< /truetable >}}
{{< /expand >}}

## Add Subsystem Wizard

The **Add Subsystem** wizard opens after clicking **Add** on the **NVMe-oF Subsystem** card or **Add Subsystem** on the **NVMe-oF** screen.
The wizard has two parts: **What to Share** and **Access**. **What to Share** shows by default.

### What to Share

The **What to Share** screen settings configure the subsystem and add a namespace.

{{< trueimage src="/images/SCALE/Shares/AddSubsystemWhatToShare.png" alt="Add Subsystem What to Share Screen" id="Add Subsystem What to Share Screen" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Subsystem Name** | Specifies the name of the subsystem. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), ampersand (&), at (@), or hashtag (#). |
| **NQN** | Shows **Generate from global settings** and the <span class="material-icons">edit</span> edit icon. Clicking on the edit <span class="material-icons">edit</span> icon or the text converts the field to text-entry and allows manually entering an NVMe Qualified Name (NQN) used to identify the subsystem. TrueNAS creates an NQN using the base NQN shown on the **NVMe-oF Global Configuration** screen. |
{{< /truetable >}}
{{< /expand >}}

**Add** to the right of **Namespaces** opens the [**Add Namespaces**](#add-namespace-screen) screen.

### Access

The **Add Subsystem** wizard **Access** screen configures hosts allowed to connect to the subsystem and ports the target uses to communicate with hosts.

{{< trueimage src="/images/SCALE/Shares/AddSubSystemAccess.png" alt="Add Subsystem Access Screen" id="Add Subsystem Access Screen" >}}

**Allow any host to connect** is selected by default. It allows connections to any host.
When not selected, it shows the **Allow Hosts** and **Add** button that opens the [**Add Host**](#add-and-edit-host-screens) screen to configure a host.

{{< trueimage src="/images/SCALE/Shares/AddSubsystemAccessWithAllowedHosts.png" alt="Add Subsystem Access with Allowed Hosts" id="Add Subsystem Access with Allowed Hosts" >}}

{{< include file="/static/includes/NVMe-oFAddPortsMenu.md" >}}

**Save** saves changes, creates the subsystem, closes the wizard screen, and returns to the previous screen.

## Add Namespace Screens

The **Add Namespace** screens settings and options create namespaces.
Use to select or create the storage device (zvol or file) for the NVMe-oF share.

**Add** to the right of **Namespaces** on the **What to Share** option of the **Add Subsystem** wizard opens the **Add Namespace** screen.
**Add** on the **Namespaces** card on the **NVMe-oF** screen opens the **Add Namespaces** screen.

{{< trueimage src="/images/SCALE/Shares/AddNamespaceScreenZvolTab.png" alt="Add Namespace Screen" id="Add Namespace Screen" >}}

The **Add Namespace** screen has three tabs:
* [**Zvol**](#zvol-tab) (selected by default) - Adds a zvol.
* [**Existing File**](#existing-file-tab) - Adds an existing file in a dataset or zvol.
* [**New File**](#new-file-tab) - Creates a new file in the storage location selected.

### Zvol Tab

The **Zvol** tab on the **Add Namespace** screen allows selecting an existing or creating a new zvol namespace.
**Path to Zvol** has two fields: the blank field that populates with the path manually entered or selected with the file browser, and the file browser field.

{{< trueimage src="/images/SCALE/Shares/AddNamespaceScreenZvolTab.png" alt="Add Namespace Zvol Tab" id="Add Namespace Zvol Tab" >}}

**Create Zvol** allows adding a new Zvol while selecting the path to the storage location. It opens the [**Add Zvol**](#add-zvol-screen) screen.
It only shows on the **Zvol** tab and activates after selecting the parent dataset in the file browser field.

#### Add Zvol Screen

Use to create a new zvol for the namespace to use for storage.
**Create Zvol** on the **Add Namespace** screen with the **Zvol** tab selected opens this screen.

{{< expand "Add Zvol Screen Settings" "v" >}}
{{< include file="/static/includes/AddZvolSettings.md" >}}
{{< /expand >}}

### Existing File Tab

The **Existing File** tab on the **Add Namespace** allows selecting an existing file as a namespace.

{{< trueimage src="/images/SCALE/Shares/AddNamespaceExistingFileTab.png" alt="Add Namespace Existing File Tab" id="Add Namespace Existing File Tab" >}}

There are two **Path to File** fields: the blank field and the file browser field.
The top blank field populates with the path for the existing file selected using the file browser field below it.

### New File Tab

The **New File** tab on the **Add Namespace** screen allows creating a new file for a namespace.

{{< trueimage src="/images/SCALE/Shares/AddNamespaceNewFileTab.png" alt="Add Namespace New File Tab" id="Add Namespace New File Tab" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Parent Directory** | Specifies the path to the dataset or zvol where you intend to add the file. It shows two fields: a blank text-entry field and a file browser field. The top blank field populates with the path to the parent directory selected using the file browser field below it. |
| **Filename** | Specifies the name of the file crated. Names can consist of upper and lower case alphabetic, numeric, and special characters such as the dash (-), underscore (_), ampersand (&), at (@), or hashtag (#). |
| **File Size** | Specifies the storage capacity (size) for this file. |
{{< /truetable >}}
{{< /expand >}}

**Save** saves the settings, closes the screen, and returns to the previous screen.

### Delete Namespace Dialog

The **Delete Namespace** removes the namespace configuration from TrueNAS.

{{< trueimage src="/images/SCALE/Shares/DeleteNamespaceDialog.png" alt="Delete Namespace Dialog" id="Delete Namespace Dialog" >}}

The delete icon to the right of a file opens a **Delete Namespace** dialog showing the option to delete the file.

{{< trueimage src="/images/SCALE/Shares/DeleteNamespaceFromFile.png" alt="Delete Namespace and File Dialog" id="Delete Namespace and File Dialog" >}}

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
| **Host NQN** | Specifies the unique identifier obtained from the host you allow to access the subsystem. Format of the NQN is *nqn.2019-05.com.example:storage-array-01*. |
| **Require Host Authentication** | Sets TrueNAS to require additional authentication for the host connection. When enabled, shows additional authentication settings: **Hash**, **Key For Host To Present**, **Key For TrueNAs To Present (Optional)**, generate keys for each key option, and **Also use Diffie-Hellman key exchange for additional security**. |
| **Hash** | Sets the authentication hash TrueNAS uses for the connection with the assoicated host. Shows the current hash option **SHA-256** and the <span class="material-icons">edit</span> edit icon that shows a dropdown list of hash options. Options are **SHA-256**, **SHA0384**, and **SHA-512**. |
| **Key For Host To Present** | Sets the DH-CHAP key, obtained from the host, to authenticate access to the subsystem. Accepts manual or copy/paste entry of a hash. Use **Generate Key** directly under the field to have TrueNAS create a key to copy/paste into the host to use as the authentication key for that host. |
| **Generate Key** | Sets TrueNAS to generate the DH-CHAP key for the host. Populates the **Key For Host To Present** field with this system-generated DH-CHAP key for that host. |
| **Key For TrueNAs To Present (Optional)** | Specifies the secret key the TrueNAS system presents to the host that further validates the connection between the host and TrueNAS when the host connects to the subsystem (bi-directional authentication). Accepts copy/paste of a key or use the **Generate Key** directly below this field to populate with a system-generated key. Provide this key to the host connecting with TrueNAS to authenticate the TrueNAS system in the connection authorization. |
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

After deleting the host, the **Host** window shows any remaining assoicated hosts configured in TrueNAS or shows the window  with no hosts listed and the **Add New** button.
### Delete Host Dialog

The **Delete Host** confirmation dialog deletes the host(s) from the listed subsystems listed in the dialog and from TrueNAS.

{{< trueimage src="/images/SCALE/Shares/DeleteHostDialog.png" alt="Delete Host Dialog" id="Delete Host Dialog" >}}

**Cancel** closes the dialog without removing the host from the subsystem.

**Delete Anyway** deletes the host from the subsystem(s) specified in the dialog.

## Add Port Screen

The **Add Port Screen** shows settings to add or select a port to associate with the subsystem. Ports are formatted as *IP address:port*.
**4420** is the default port number, commonly selected for NVMe-oF with IP addresses, and we recommend using this port rather than adding a custom port.

{{< trueimage src="/images/SCALE/Shares/AddPortScreen.png" alt="Add Port Screen" id="Add Port Screen" >}}

{{< expand "Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Transport Type** | Sets the transport type. Options are: **TCP**, **RDMA**, or **Fibre Channel**. The **RDMA** and **Fibre Channel** options require Enterprise licenses and systems with compatible/supporting hardware. |
| **Port** | Sets the current port assignment. **4420** is the default and recommended port number. We recommend using this port rather than entering a custom port number. |
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
| **Transport Type** | Sets the transportation type to the option selected on the dropdown list. Options are **TCP**, **RDMA**, or **Fibre Channel**. The **RDMA** and **Fibre Channel** options require Enterprise licenses and systems with compatible/supporting hardware. |
| **Port** | Specifies the current port assignment and allows manual or copy/paste entry of a new port number. |
| **Address** | Sets the port to the current static IP address assignment for the TrueNAS network interface, or any other static IP on the system that the subsystem can use. |
{{< /truetable >}}
{{< /expand >}}

## Ports Window

The **Ports** window shows a table showing the port name, type, IP address, communication port number, and the number of subsystems that use it.
The port row shows the <span class="material-icons">edit</span> edit icon and the <span class="material-icons">delete</span> delete icon.

{{< trueimage src="/images/SCALE/Shares/ManagePortsDialog.png" alt="Ports Dialog" id="Ports Dialog" >}}

**Add New** opens the [**Add Port**](#add-port-screen) screen.

Edit opens the [**Edit Port**](#edit-port-screen) screen.

Delete opens a [delete confirmation](#delete-port-dialog) dialog for the port.

After deleting the port, the **Ports** window shows any remaining configured ports, or shows an empty window with the **Add New** button.

### Delete Port Dialog

The **Delete Port** confirmation dialog removes the port from the selected subsystem but does not delete it from TrueNAS. A deleted port shows on the **Add** dropdown list on the **Ports** card for a selected subsystem on the **NVMe-oF** screen.
The dialog shows the name of the subsystem and the assigned *IP address:port* assignment.

{{< trueimage src="/images/SCALE/Shares/DeletePortDialog.png" alt="Delete Port Dialog" id="Delete Port Dialog" >}}

**Cancel** closes the dialog without removing the port from the subsystem.
**Delete Anyway** removes the port assignment from the subsystem specified in the dialog.
