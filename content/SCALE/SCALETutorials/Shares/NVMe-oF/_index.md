---
title: "NVMe-oF Subsystems"
description: "Provides information on NVMe-oF subsystems and instruction on creating a subsystem and setting up enterprise configurations of subsystems."
geekdocCollapseSection: true
weight: 90
related: false
aliases:
 -
tags:
- nvme-of
- nvme
- nvme baseNQN
- block shares
- subsystems
- namespaces
- hosts
- ports
- rdma
- ana
- asymmetric namespace access
- remote direct memory access
- cross-port referrals
---

## Overview of NVMe-oF

{{< include file="/static/includes/NVMe-oF-Overview.md" >}}

## Configuring the NVMe-oF Service

You can access the NVMe-of service screen from the:

* <span class="material-icons">more_vert</span> dropdown menu on the **NVMe-oF Subsystems** widget on the **Shares** screen
* **Global Configuration** button at the top of the **NVMe-oF** screen
* **NVMe-oF** service option on the **System > Services** screen

The **NVMe-oF Global Configuration** shows the base NQN for the service.

{{< expand "What is the Base NQN?" "v" >}}
The *Base NQN* us the standardized NVMe Qualified Name for the service. It is the prefix used when a new subsystem is created.
The NQN standard structure follows the format defined in the base specification. The maximum length/size is 223 bytes.
TrueNAS subsystems use the Base NQN as the root identifier for the NVMe subsystems in fabric deployments.
Discovery controllers use the standardized NQN to advertise available subsystems.
Storage systems use the Base NQN to authenticate and authorize host connections.
The Base NQN format provides the foundation for all NVMe-oF naming, ensuring interoperability, and preventing naming conflicts across different vendors and implementations.
{{< /expand >}}

{{< trueimage src="/images/SCALE/Shares/NVMeoFGlobalConfigurationScreen.png" alt="NVMe-oF Global Configuration Screen" id="NVMe-oF Global Configuration Scree" >}}

TrueNAS populates the **Base NQN** field with the NVMe identifier.
Accept this value or click in the field to copy/paste a new, properly formatted Base NQN identifier.
NQN is used as the prefix when creating a subsystem, if a subnqn is not supplied.
Modifying this value does not change the subnqn of any existing subsystems.
We recommend using caution if you change this Base NQN. A particular client might be configured to talk to a particular NQN, so changing this could break the client connection.

Select **Generate Cross-port Referrals for Ports on This System** if subsystems are published through multiple ports and connect-all functionality is desired by clients.
If ANA is active, referrals are always generated between the peer ports on each TrueNAS controller node.

Click **Save** to save changes and close the screen.

### Adding Remote Direct Memory Access (RDMA)

Go to the [**NVMe-oF Global Configuration**](#configuring-the-nvme-of-service) screen.

Select the **Enable Remote Direct Memory Access (RDMA)** option. Click **Save**.

Enabling RDMA allows configuring one or more ports with RDMA selected as the transport when enabled.
This option requires an Enterprise license, and you must have an RDMA-capable system and network equipment.

This option is inactive on systems without an Enterprise licenses.
If the system is not equipped with required hardware, shows **Not enabled, because this system does not support RDMA** on the screen.

### Adding Asymmetric Namespace Access (ANA)

Go to the [**NVMe-oF Global Configuration**](#configuring-the-nvme-of-service) screen.
Select the **Enable Asymmetric Namespace Access (ANA)** option, and click **Save**.

This allows storage systems to inform hosts about the optimal controller path to access a namespace on Enterprise licensed systems.
It is similar to Asymmetric Logical Unit Access (ALUA) in iSCSI.

ANA helps storage arrays communicate to hosts which controller provides the best (lowest latency) path to specific namespaces, enabling intelligent multipathing and improved performance in NVMe-oF environments.

## Adding a Subsystem

Subsystems correlate to iSCSI targets. Each subsystem has a namespace and port, hosts are optional for added security.
The **Add Subsystem** wizard steps through the subsystem creation process.

You can access the **Add Subsystem** wizard from the:

* **Add** button on the **NVMe-oF Subsystems** widget on the **Shares** screen
* **Add Subsystem** button at the top of the **NVMe-oF** screen

Go to the **Add Subsystem** wizard, then:

{{< trueimage src="/images/SCALE/Shares/AddSubsystemWhatToShare.png" alt="Add Subsystem What to Share Screen" id="Add Subsystem What to Share Screen" >}}

1. Enter a name for the subsystem. We recommend keeping the name short to avoid any possible issues with accessing the subsystem.
   A name can consist of upper and lowercase alphabetical characters, numbers, and/or some special characters such as the dash (-), underscore (_), etc.

   {{< trueimage src="/images/SCALE/Shares/AddSubSystemAccess.png" alt="Add Subsystem Access Screen" id="Add Subsystem Access Screen" >}}

2. Leave the NQN set to **Generate from global setting**.
   To change it, click on it or the edit <span class="material-icons">edit</span> icon, and then enter or copy/paste a correctly formatted NQN identification number in the field.

3. Add a namespace. Click **Add** to open the **Add Namespace** screen. The screen opens with the **Zvol** tab selected.
   A subsystem can have only one namespace.

   {{< trueimage src="/images/SCALE/Shares/AddNamespaceScreenZvolTab.png" alt="Add Namespace Screen" id="Add Namespace Screen" >}}

   To add a new zvol, browse to and select the parent dataset where you want to add the zvol, then click **Create Zvol** to open the **Add Zvol** screen. See [Creating a Zvol](#creating-a-zvol) for more information on adding a new zvol.

   To use an existing file, click on the **Existing File** tab, and then browse to select the path to the file.

   {{< trueimage src="/images/SCALE/Shares/EditNamespaceExistingFileTab.png" alt="Edit Namespace Existing File Tab" id="Edit Namespace Existing File Tab" >}}

   To add a new file, click on the **New File** tab, browse to select the parent dataset, then enter a file name, enter the desired file size.

   {{< trueimage src="/images/SCALE/Shares/EditNamespaceNewFileTab.png" alt="Edit Namespace New File Tab" id="Edit Namespace New File Tab" >}}

   Click **Save**, then click the breadcrumb at the top of the screen to return to the **Add Subsystem** wizard.

4. Click **Next** to show the **Access** screen.

   {{< trueimage src="/images/SCALE/Shares/AddSubSystemAccess.png" alt="Add Subsystem Access Screen" id="Add Subsystem Access Screen" >}}

5. Leave **Allow any host to connect** selected to allow any host to connect, or clear the checkbox to show the **Add** option for hosts.
   Adding individual hosts limits access to the subsystem to only the host(s) added.

   {{< trueimage src="/images/SCALE/Shares/AddHostScreen.png" alt="Add Host Screen" id="Add Host Screen" >}}

   a. Enter or copy/paste the NQN number obtained from the host system.
  
   b. (Optional) Select **Require Host Authentication** to show and add authentication setting options.

   {{< trueimage src="/images/SCALE/Shares/AddHostScreenRequireAuthentication.png" alt="Add Host Screen Require Authentication" id="Add Host Screen Require Authentication" >}}

   c. (Optional) Enter the DH-CHAP key obtained from the host system to use when connecting to TrueNAS.
     Enter or copy/paste the key into the field.
     To allow TrueNAS to create a key for the host, click in the field to activate **Generate Key** below the **Key for Host to Present** field. The field populates with a key. Copy/paste this into the host system connecting to TrueNAS.

   d. (Optional) Add a bi-directional key for TrueNAS when it connects to the host system.
     Click **Generate Key** below the **Key for TrueNAS to Present** to populate the field with a key. Copy/paste this into the host system to use when authenticating TrueNAS when it connects to it.

   e. (Optional) Select **Also use Diffie-Hellman key exchange for additional security**.

   f. Click **Save**, then click on the breadcrumb at the top of the screen to return to the **Add Subsystem** wizard.

6. Add a port. Click **Add** to the right of **Ports** to open the **Add Ports** screen.

   {{< trueimage src="/images/SCALE/Shares/AddPortScreen.png" alt="Add Port Screen" id="Add Port Screen" >}}

   a. Select the transport type. **TCP** is the default setting.
      If you have an Enterprise license and your system can support RDMA, this option shows as an available choice.

   b. Enter an available port number of at least four digits in length.

   c. Select the IP address from the dropdown list.

   d. Click **Save**.

   e. Click on the breadcrumb at the top of the screen to close the **Add Port** screen and return to the **Add Subsystem** wizard.

7. Click **Save** at the bottom of the **Add Subsystem** wizard screen to add the subsystem.

### Creating a Zvol

The **Add Zvol** screen is accessed from the **Add Subsystem** wizard after clicking **Add** to the right of **Namespaces**.
You can also access it from the **Namespace** widget on the **NVMe-oF** screen.

Select the subsystem row on the **NVMe-oF** screen table, then click **Add** on the **Namespaces** widget to show the options.

Select **Create New** to open the **Add Namespace** screen.
Browse to and select the dataset where you want to add the zvol, then click on **Create New** to open the **Add Zvol** screen.

To add a new zvol:

{{< include file="/static/includes/Add-Zvol-To-NVMe-oF-Namespace.md" >}}
