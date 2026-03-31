---
title: "Managing NVMe-oF Subsystems"
description: "Provides information on managing NVMe-oF subsystems, namespaces, hosts, and ports."
weight: 20
tags:
- nvme-of
- rdma
- tcp
- NVME over Fabric
- namespaces
- nvme hosts
- nvme ports
- baseNQN
- NQN
- spdk
- linux kernel
doctype: tutorial
---



## NVME Structure

{{< include file="/static/includes/NVMe-oF-Structure.md" >}}

{{< include file="/static/includes/NVMeoTCPESXiLimitation.md" >}}

## Editing a Subsystem

After configuring an NVMe-oF subsystem, you can change the subsystem by adding or deleting a namespace, removing or adding a port, or adding, removing, or deleting a host.

To access the subsystem configuration screen from the **Shares** screen:

1. Click the <span class="material-icons">more_vert</span> dropdown menu on the row for the subsystem listed in the **NVMe-oF Subsystems** card.
2. Select **View** to open the **NVMe-oF** screen for that subsystem and showing the **Details** cards for it.

   or

   Click on the **NVMe-oF Subsystems** card header to open the **NVMe-oF** screen, and then locate and select the row in the **Subsystem** table for the desired subsystem to show the **Details** cards for that subsystem.

### Renaming the Subsystem

To change a subsystem name, while on the **NVMe-oF** screen, select the subsystem row in the table, then click on the subsystem name or the edit icon in the **Details** card.
The name changes to a text entry field. Enter a new name for the subsystem, then click outside the field to save the change.

The subsystem NQN is not modified by this operation. You must choose to modify the NQN by clicking on the NQN or edit icon for the NQN shown in the **Details** card, then enter or copy/paste a new correctly-formatted NQN in the field.

### Copying the NQN

To copy the NQN identification number for the subsystem, while on the **NVMe-oF** screen, select the subsystem row in the table, then click **Copy** in the **Details** card.
TrueNAS copies the identification number to the clipboard.

### Deleting a Subsystem

Before deleting a namespace subsystem, delete the port and any associated host. TrueNAS shows an error if the subsystem has an active port and a host.

While on the **NVMe-oF** screen, select the subsystem row in the table, then click **Delete** to the right of **Details for *name***.
The **Delete Subsystem** dialog opens.

1. [Delete the port](#deleting-a-port). This does not delete the port configuration from the system; it removes it from the namespace subsystem.

2. [Delete any associated host](#delete-host-dialog). This does not delete the host configuration from the system; it removes it from the namespace subsystem.

3. Delete the subsystem.
   
   Verify the name of the subsystem listed in the dialog to confirm you have the desired subsystem.

   Click **Delete** to delete the subsystem and namespace(s) associated with it.

**Cancel** closes the dialog without deleting the subsystem.

Select **Force** if the delete operation shows an in* use error, or to delete with a port or host still associated with the subsystem, then click **Delete** again.

### Deleting a Zvol Namespace

To delete a zvol namespace, while on the **NVMe-oF** screen, select the subsystem row in the **Subsystem** table, then click the delete <span class="material-icons">delete</span> icon to the right of the zvol in the **Namespace** card.

The **Delete Namespace** dialog opens. Deleting the namespace from the zvol does not delete the zvol; it only removes it from the subsystem.

{{< trueimage src="/images/SCALE/Shares/DeleteNamespaceDialog.png" alt="Delete Namespace Dialog" id="Delete Namespace Dialog" >}}

Click **Delete** to delete the namespace.

#### Deleting a File Namespace

To delete a file namespace, while on the **NVMe-oF** screen, select the subsystem row in the **Subsystem** table, then click the delete <span class="material-icons">delete</span> icon to the right of the file in the **Namespace** card.

The **Delete Namespace** dialog opens with the option to delete the underlying file.

{{< trueimage src="/images/SCALE/Shares/DeleteNamespaceFromFile.png" alt="Delete Namespace and File Dialog" id="Delete Namespace and File Dialog" >}}

Select the **Also delete the underlying file** option, then click **Delete** to delete both the namespace and the file.

## Editing Ports

You can add new ports or edit existing ports from the **Ports** card on the **NVMe-oF** screen.
First, select the subsystem row in the table, then click the **Add** dropdown on the right of the **Ports** card header.

Click **Create New** to open the **Add Port** screen and add a new port.

To edit or delete a port, click **Manage Ports** to open the **Ports** dialog.

### Adding a Port

While on the **NVMe-oF** screen, with the subsystem selected in the table, click **Add** on the **Ports** card.
Click **Create New** to open the **Add Port** screen.

The **Add Port** screen creates a new port *IP address:port* assignment on the system for use by a subsystem.

{{< trueimage src="/images/SCALE/Shares/AddPortScreen.png" alt="Add Port Screen" id="Add Port Screen" >}}

1. Select the transport type. **TCP** is the default setting.
   If your system has an Enterprise license and it supports RDMA, this option is listed as available.

2. Enter an available port number of at least four digits in length. For example, **4420** is the default and recommended port number.

3. Select the IP address from the dropdown list. Only static IP addresses in the TrueNAS system show on this list.

4. Click **Save**.

The next time you click **Add** on the **Ports** card, the added port shows as an option on the dropdown list.

### Editing a Port

While on the **NVMe-oF** screen, with the subsystem selected in the table, click **Add** on the **Ports** card.
Click **Manage Ports** to open the **Ports** window.

{{< trueimage src="/images/SCALE/Shares/ManagePortsDialog.png" alt="Ports Dialog" id="Ports Dialog" >}}

Select the edit <span class="material-icons">edit</span> icon for the port listed in the table to open the **Edit Port** screen.
The **Edit Port** screen shows current port settings for the selected subsystem.

{{< trueimage src="/images/SCALE/Shares/EditPortScreen.png" alt="Edit Port Screen" id="Edit Port Screen" >}}

Select the transport type from the dropdown list.
Leave **TCP** as the default option unless your system has an Enterprise license and it supports RDMA.

Enter a port number that is at least four digits in length. **4420** is the default port number, commonly selected for NVMe-oF with IP addresses, and we recommend using this port rather than adding a custom port.

Leave the IP address for the TrueNAS system, or select any static IP address shown on the list.

Click **Save**.

### Removing a Port from the Subsystem

You can change the port number assigned to the subsystem using the ![RemoveFromSubsystem](/images/SCALE/Shares/RemoveFromSubsystem.png "Remove from Subsystem Icon") **Remove this port from the subsystem** icon on the **Ports** card.

After removing a port, the **Add** button lists any available port on the system, including the port removed from the subsystem, in the format *IP address:port*.

### Deleting a Port

Deleting a port does not remove it from the system; it removes the port from the selected subsystem.
A deleted port shows on the **Add** dropdown list on the **Ports** card for a selected subsystem on the **NVMe-oF** screen.

To delete the port, click on the <span class="material-icons">delete</span> delete icon at the right of the port row on the **Ports** window.

The **Delete Port** confirmation dialog opens. You are asked to confirm that you want to delete the port.

{{< trueimage src="/images/SCALE/Shares/DeletePortDialog.png" alt="Delete Port Dialog" id="Delete Port Dialog" >}}

**Delete Anyway** removes the port assignment from the subsystem specified in the dialog.

## Adding a Host

The **Associated Hosts** card on the **NVMe-oF** screen shows a list of hosts associated with the subsystem selected on the table.
**All hosts are allowed** is selected by default, and allows all clients to connect to the subsystem if a host is not specified.

{{< trueimage src="/images/SCALE/Shares/SubsystemAssociatedHostsCard.png" alt="Subsystem Associated Hosts Card" id="Subsystem Associated Hosts Card" >}}

To add connection security, limit the hosts allowed to connect to the subsystem. Select **All Hosts are allowed** to clear the checkbox and show the option to add a host.

To add a host, click **Add** to open the **Add Host** screen.

{{< trueimage src="/images/SCALE/Shares/AddHostScreen.png" alt="Add Host Screen" id="Add Host Screen" >}}

Obtain the NQN number from the host system and enter or copy/paste it into the **NQN** field.
TrueNAS uses this to determine if the host(s) can access the subsystem namespace.

To require authentication and add secret keys to further secure communication between the TrueNAS subsystem and the host system, select **Require Host Authentication**.
This shows the additional setting options.

{{< trueimage src="/images/SCALE/Shares/AddHostScreenRequireAuthentication.png" alt="Add Host Screen Require Authentication" id="Add Host Screen Require Authentication" >}}

Accept the default in **Hash** or click the edit <span class="material-icons">edit</span> edit icon and select a hash option from the dropdown list.
Options are **SHA-256**, **SHA384**, and **SHA-512**.

Obtain the DH-CHAP key from the host you are allowing to connect to the subsystem, and enter or copy/paste it in the **Key For Host To Present** field.
Alternatively, TrueNAS can create a key for the host system if you click **Generate Key** directly under the field.
Copy this key from TrueNAS, and paste it into the host system as the key it presents to TrueNAS to authenticate the connection.

To use bidirectional authentication, click **Generate Key** directly below the **Key For TrueNAS To Present (Optional)**.
It populates the field with a secret key.
Copy this key from TrueNAS, and paste it into the host system to validate the TrueNAS connection.

For additional authentication security, select **Also use Diffie-Hellman key exchange for additional security**.

Click **Save**, then close the screen.

Hosts added to the subsystem show in the **Associated Hosts** card with options to edit, delete, or remove them from the host.

### Removing a Host

Click the ![RemoveFromSubsystem](/images/SCALE/Shares/RemoveFromSubsystem.png "Remove from Subsystem Icon") **Removes this host from the subsystem** icon to remove the host from the subsystem.
This does not delete it from TrueNAS; the removed host shows on the **Add** dropdown list if you want to add the host to the subsystem again.

### Editing a Host

To edit a host, click **Add**, then select **Manage Hosts**. The **Hosts** window opens.

The **Hosts** window shows a table listing the host NQN, if it requires authentication, and the number of subsystems that use it.

{{< trueimage src="/images/SCALE/Shares/ManageHostsWindow.png" alt="Hosts Dialog" id="Hosts Dialog" >}}

Click the <span class="material-icons">edit</span> edit icon to the right of the host row to open the **Edit Host** screen.

The **Edit Host** screen shows the fields associated with the subsystem and allows you to change the host settings.

Make the desired change, then click **Save**.

### Delete Host Dialog

To delete a host from the subsystem, click **Add**, then select **Manage Hosts**. The **Hosts** window opens.
click the <span class="material-icons">delete</span> delete icon to the right of the host.

The **Delete Host** confirmation dialog opens, showing the hosts associated with the subsystem.

{{< trueimage src="/images/SCALE/Shares/DeleteHostDialog.png" alt="Delete Host Dialog" id="Delete Host Dialog" >}}

Click **Delete Anyway** to delete the host from the subsystem(s) specified in the dialog.

## Activating SPDK

TrueNAS offers two experimental options that allow users to try out methods to implement changes to the NVMe-oF service: **SPDK (Userspace)** and **Linux Kernel**.

{{< include file="/static/includes/NVMe-oFSPDKorLinuxKernel.md" >}}

{{< trueimage src="/images/SCALE/Shares/NVMeoFGlobalConfigurationScreenWithSPDK.png" alt="NVMe-oF Global Configuration with SPDK" id="NVMe-oF Global Configuration with SPDK" >}}

To activate either of these options:

1. Turn off the NVMe-oF service.

2. Select the option that suits your use case.

3. Click **Save**

4. Start the service.
