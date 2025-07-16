---
title: "Managing NVMe-oF Subsystems"
description: "Provides information on editing and deleting NVMe-oF subsystems, namespaces, hosts and ports."
weight: 20
aliases:
- 
tags:
- nvme-of
- fibre channel
- rdma
- tcp
- NVME over Fabric
- namespaces
- nvme hosts
- nvme ports
- baseNQN
- NQN
---


## NVME Structure

{{< include file="/static/includes/NVMe-oF-Structure.md" >}}

## Editing a Subsystem

After configuring an NVMe-oF subsystem, you change the subsystem, namespace, ports, and hosts.

To access the subsystem configuration screen from the **Shares** screen, click the <span class="material-icons">more_vert</span> dropdown menu on the row for the subsystem listed in the **NVMe-oF Subsystems** widget and select **View** to open the **NVMe-oF** screen for that subsystem and showing the **Details** widgets for it, or click on the **NVMe-oF Subsystems** widget header to open the **NVMe-oF** screen, and then locate and select the row in the table for desired subsystem to show the **Details** widgets for that subsystem.

### Renaming the Subsystem

To change the subsystem name, while on the **NVMe-oF** screen, select the subsystem row in the table, then click on the subsystem name or the edit icon in the **Details** widget.
The name changes to a text entry field. Enter a new name for the subsystem, then click outside of the field to save the change.

### Copying the NQN

To copy the NQN identification number for the subsystem, while on the **NVMe-oF** screen, select the subsystem row in the table, then click **Copy** in the **Details** widget.
TrueNAS copies the identification number to the clipboard.

### Deleting a Subsystem

While on the **NVMe-oF** screen, select the subsystem row in the table, then click **Delete** to the right of **Details for *name***. The **Delete Subsystem** dialog opens.

Verify the name of the subsystem listed in the dialog to confirm you have the desired subsystem.

Click **Delete** to delete the subsystem and namespace associated with it.
**Cancel** closes the dialog without deleting the subsystem.

Select **Force** if the delete operation fails to start.

## Editing a Namespace

While on the **NVMe-oF** screen, select the subsystem row in the table, then click the edit icon to the right of the zvol path to open the **Edit Namespace** screen.

### Changing the Namespace Storage

Select the tab for the change you want to make. You can:
* Change the current zvol to a new or different zvol
* Change the current zvol to an existing file
* Change the current zvol to a new file

#### Changing to a Different Zvol

TrueNAS NVMe allows repurposing an existing zvol exposed in iSCSI. You cannot reuse this zvol for iSCSI again.
Data is not lost when associating the existing zvol with the NVMe subsystem.

With the **Zvol** tab on the **Edit Namespace** screen selected, browse to and select a different parent dataset, and then click **Create Zvol** if you want to use a new zvol.
To select a different zvol, browse to and select that existing zvol.

{{< trueimage src="/images/SCALE/Shares/EditNamespaceScreenZvolTab.png" alt="Edit Namespace Zvol Tab" id="Edit Namespace Zvol Tab" >}}

The **Path to Zvol** top blank field populates with the path for what is selected using the file browser field below it.

**Create Zvol** activates after selecting the parent dataset. It opens the [**Add Zvol**](#adding-a-zvol-to-namespaceen) screen.
Only the **Zvol** tab has the **Create Zvol** option.

Click **Save**.

#### Changing to an Existing File

To change the namespace storage to an existing file, select **Exisiting File** on the **Edit Namespace** screen.

Browse to and select the dataset or zvol location with the existing file you want to use.

{{< trueimage src="/images/SCALE/Shares/UseExistingFileInEditNamespace.png" alt="Using an Existing File" id="Using an Existing File" >}}

Click **Save**.

#### Changing to a New File

You can use this procedure to add files to the parent dataset for the namespace, from the **New File** tab on the **Add Namespace** or **Edit Namespace** screens.

While on the **Edit Namespace** screen, select the **New File** tab.

{{< trueimage src="/images/SCALE/Shares/AddNewFileToNamespace.png" alt="Adding a New File" id="Adding a New File" >}}

Browse to and select the dataset where you want to add a new file. This populates the **Parent Directory** path.

Enter a name in **Filename**.

Enter a size as a number with a measurement value, for example, *10 MB*, in **File Size**.

Click **Save**.

### Adding a Zvol to a Namespace

To access the **Add Zvol** screen, click **Create Zvol** while on the **Zvol** tab of the **Edit Namespace** screen.

{{< include file="/static/includes/Add-Zvol-To-NVMe-oF-Namespace.md" >}}

### Deleting a Namespace

To delete a namespace, while on the **NVMe-oF** screen, select the subsystem, then click the delete <span class="material-icons">delete</span> icon to the right of the zvol in the **Namespace** widget.

The **Delete Namespace** dialog opens. Deleting the namespace from the zvol does not delete the zvol.

{{< trueimage src="/images/SCALE/Shares/DeleteNamespaceDialog.png" alt="Delete Namespace Dialog" id="Delete Namespace Dialog" >}}

Click **Delete** to delete the namespace.

Clicking the delete <span class="material-icons">delete</span> icon to the right of a file on the **Namespace** widget opens a **Delete Namespace** dialog, but this dialog shows the option to delete the underlying file as well.

{{< trueimage src="/images/SCALE/Shares/DeleteNamespaceFromFile.png" alt="Delete Namespace and File Dialog" id="Delete Namespace and File Dialog" >}}

Select the **Also delete the underlying file** option, then click **Delete** to delete both the namespace and the file.

##  Editing a Port

You can add new ports or edit existing ports from the **Ports** widget on the **NVMe-oF** screen. First, select the subsystem in the table, then click the **Add** dropdown on the right of the **Ports** widget header.

To create a new port, click **Create New** to open the **Add Port** screen.

To edit or delete a port, click **Manage Ports** to open the **Ports** dialog.

### Adding a Port

While on the **NVMe-oF** screen, with the subsystem selected in the table, click **Add** on the **Ports** widget.
Click **Create New** to open the **Add Port** screen.

The **Add Port** screen creates a new port *IP address:port* assignment on the system for use by a subsystem.

{{< trueimage src="/images/SCALE/Shares/AddPortScreen.png" alt="Add Port Screen" id="Add Port Screen" >}}

1. Select the transport type. **TCP** is the default setting.
   If you have an Enterprise license and your system can support RDMA or Fibre Channel, these options show as available choices.

2. Enter an available port number of at least four digits in length.

3. Select the IP address from the dropdown list.

4. Click **Save**.

The added port shows as an option on the dropdown list when you next click **Add** on the **Ports** widget.

### Editing a Port

While on the **NVMe-oF** screen, with the subsystem selected in the table, click **Add** on the **Ports** widget.
Click **Manage Ports** to open the **Ports** window.

{{< trueimage src="/images/SCALE/Shares/ManagePortsDialog.png" alt="Ports Dialog" id="Ports Dialog" >}}

Select the edit <span class="material-icons">edit</span> icon for the port listed in the table to open the **Edit Port** screen.
The **Edit Port** screen shows current port settings for the selected subsystem.

{{< trueimage src="/images/SCALE/Shares/EditPortScreen.png" alt="Edit Port Screen" id="Edit Port Screen" >}}

Select the transport type from the dropdown list.
Leave **TCP** as the default option unless your system supports RDMA or Fibre Channel, and your system supports these options.

Enter a port number that is at least four digits in length.

Leave the IP address for the TrueNAS system.

Click **Save**.

### Removing a Port from the Subsystem

You can change the port number assigned to the subsystem using the **Remove this port from the subsystem** ![SubsystemPortActionIcon](/images/SCALE/Shares/SubsystemPortActionIcon.png "Subsystem Port Action Icon") icon.

After removing a port, the **Add** button lists any available port on the system including the port removed from the subsystem, in the format *IP address:port*.

### Deleting a Port

Deleting a port does not remove it from the system; it removes the port from the selected subsystem.
A deleted port shows on the **Add** dropdown list on the **Ports** widget for a selected subsystem on the **NVMe-oF** screen.

To delete the port, click on the <span class="material-icons">delete</span> delete icon at the right of the port row on the **Ports** window.

The **Delete Port** confirmation dialog opens. You are asked to confirm that you want to delete the port.

{{< trueimage src="/images/SCALE/Shares/DeletePortDialog.png" alt="Delete Port Dialog" id="Delete Port Dialog" >}}

**Delete Anyway** removes the port assignment from the subsystem specified in the dialog.

## Editing a Host

The **Associated Hosts** widget on the **NVMe-oF** screen shows a list of hosts associated with the subsystem after you select it on the table.
**All hosts are allowed** is selected by default, and allows all clients to connect to the subsystem if a host is not specified.

{{< trueimage src="/images/SCALE/Shares/SubsystemAssociatedHostsWidget.png" alt="Subsystem Assoicated Hosts Widget" id="Subsystem Associated Hosts Widget" >}}

To add a host, or hosts, click **Add** to open the **Add Host** screen.

{{< trueimage src="/images/SCALE/Shares/AddHostScreen.png" alt="Add Host Screen" id="Add Host Screen" >}}

**Require Host Authentication** shows the additional setting options.

{{< trueimage src="/images/SCALE/Shares/AddHostScreenRequireAuthentication.png" alt="Add Host Screen Require Authentication" id="Add Host Screen Require Authentication" >}}

Enter or copy/paste the NQN number from the host you are allowing to connect into the **Host NQN** field. TrueNAS use this to determine if the host(s) can access the storage resources. Storage arrays use the NQN to deterime which hosts can access the subsystem namespace.

If you want to require host authentication, select **Require Host Authentication** to show additional authentication settings.

Accept the default in **Hash** or click the edit <span class="material-icons">edit</span> edit icon to show a dropdown list of hash options. Options are **SHA-256**, **SHA0384**, and **SHA-512**.

Enter or copy/paste a DH-CHAP key obtained from the host you are allowing to connect to the subsystem, or click **Generate Key** directly under the field to add a system-generated DH-CHAP key to the **Key For Host To Present** field. Share this key with the host system.

To use bi-directional authentication, click  **Generate Key** directly below the **Key ForeTrueNAs To Present (Optional)** to have TrueNAS generate a secret key that TrueNAS presents to the host when the host connects to the subsystem.

For added authentication security, select **Also use Diffie-Hellman key exchange for additional security**.

Click **Save**, then close the screen.

The host(s) added to the subsystem show in the **Associated Hosts** widget with the option to edit or delete it.

The **Edit Host** screen shows the fields associated with the subsystem and allows you to change the host settings.
