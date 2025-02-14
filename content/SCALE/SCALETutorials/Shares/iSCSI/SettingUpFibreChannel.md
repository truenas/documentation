---
title: "Setting Up Fibre Channel"
description: "Provides instructions on setting up Fibre Channel on TrueNAS."
weight: 40
tags:
- fibre channel
- iSCSI
- shares
- block shares
---


{{< enterprise >}}
Fibre Channel is a TrueNAS Enterprise feature. Only TrueNAS systems licensed for Fibre Channel show iSCSI Fibre Channel screens and settings found by going to **Sharing > Block Shares (iSCSI)**.
{{< /enterprise >}}

The Fibre Channel feature is available to Enterprise-licensed High Availability (HA) and non-HA systems.
Any Enterprise system, equipped with the required fibre channel hardware can implement this feature.

This article provides instructions for VMware VCenter ESXi.
If using another platform for your block share backups, use documentation for that platform for alternative instructions for the ESXi process documented in this tutorial.
.
## Before You Begin

When setting up iSCSI fibre channel for the first time:

* (Optional) Create a zvol for each fibre channel port with a network interface assoicated with it.

  The wizard provide an option to create a dataset on the **Extents** screen, when adding the device.
  Selecting this option creates a dataset for organizational purposes and a zvol of the same name for block storage.

## Configuring Fibre Channel - First Time Install

We recommend using the iSCSI wizard to create your target, the extents, and set up fibre channel ports.

If the system is a High Availability (HA) system, turn on ALUA.

Click on the iSCSI widget header to open the **Sharing iSCSI** screens. Click on **Global Target Configuration**. Scroll down and select **Asynchronous Logic Unit Access (ALUA)**, then click **Save**.

{{< trueimage src="/images/SCALE/Shares/GlobalTargetConfigurationScreeninHA.png" alt="iSCSI Global Target Configuration Screenl" id="iSCSI Global Target Configuration Screen" >}

Next and for all systems, go to **Shares** and click **Wizard** on the iSCSI widget to open the wizard.

1. Select **Fibre Channel** as the target mode, then select **Create New** in **Target**. Click **Next** to show the **Extents** screen.

   {{< trueimage src="/images/SCALE/Shares/iSCSIWizardTargetScreenFC.png" alt="iSCSI Wizard Target Screen - Fibre Channel" id="iSCSI Wizard Target Screen - Fibre Channel" >}

2. Configure the extent.

   a. Enter a name for the target in **Name**.

   b. Select **Device** in **Extent Type**, then select **Create New** on the **Device** dropdown list.
     When selecting **Create New**, the **Pool/Dataset** and **/mnt** fields display.
     Navigate through the pool and datasets to select the zvol and to populate the **/mnt** field with the path.

   {{< trueimage src="/images/SCALE/Shares/iSCSIWizardExtentScreenFCAddNew.png" alt="iSCSI Extents Screen - Fibre Channel" id="iSCSI Extents Screen - Fibre Channel" >}}
    
     Clicking **Create Dataset** allows you to add a dataset where the **/mnt** path indicates. TrueNAS creates the dataset for organizational purposes and a zvol of the same name for block storage.

   c. Enter a value in **Size**.

   d. Select the platform option that matches your use case and for this iSCSI share on the **Sharing Platform** dropdown list.
      For example, if using the VMware ESXi platform for your block storage, select **VMware: Extent block size 512b, TCP enabled, no Xen compat mode, SSD speed**.
  
   e. Click **Next** to show the **Protocol Options** screen.

3. Select the protocol option for your use case. 
   When installing iSCSI fibre channel ports the first time, select **Create new virtual port**. 

   {{< trueimage src="/images/SCALE/Shares/iSCSIWizardProtocolOptionsScreenCreateNewVirtualPort.png" alt="iSCSI Wizard Protocol Options Create New Virtual Port" id="iSCSI Wizard Protocol Options Create New Virtual Port" >}}

4. Click **Save**.

5. Start the iSCSI service when prompted.
   If you did not stop the iSCSI service, restart it by clicking the <span class="material-icons">more_vert</span> button, stop the service, and when the status indicates it is stopped, start it.

6. Log into your block storage backup platform (i.e., VCenter ESXi) and configure your adaptors, devices, and datastores.
   Refer to VMWare or documentation for the platform used for instructions on completing the configuration.