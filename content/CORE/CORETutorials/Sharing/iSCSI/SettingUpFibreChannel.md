---
title: "Fibre Channel"
weight: 20
aliases: /core/sharing/iscsi/fibrechannel/
---

{{< toc >}}

{{< hint info >}}
Fibre Channel is a TrueNAS Enterprise feature. Only TrueNAS systems licensed for Fibre Channel have the **Fibre Channel Ports** added to **Sharing > Block Shares (iSCSI)** screens.

![Sharing ISCSI Fibre Channel Ports](/images/CORE/12.0/SharingISCSIFibreChannelPorts.png "Sharing ISCSI Fibre Channel Ports")
{{< /hint >}}

## Setting up a Fibre Channel ISCSI Share 

{{< hint info >}}
This procedure uses an example to illustrate each step. 
{{< /hint >}}


1. Add a zvol to use for the share. 

   a. Go to **Storage > Pools**.
   
   b. Find an existing pool, click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp;</i> and **Add zvol** to create a new zvol. 
   
   ![StoragePoolsZvolFibreEnterprise](/images/CORE/12.0/StoragePoolsZvolFibreEnterprise.png "Creating a Zvol for Fibre Channel")

2. Configure these iSCSI tabs in **Sharing > Block Shares (iSCSI)**:
   
   {{< hint info >}}
   **Initiators** and **Authorized Access** screens only apply to iSCSI and can be ignored when configuring Fibre Channel.
   {{< /hint >}}
   
   a. **Portals**. Check for the **0.0.0.0:3260** IP and port number. If it doesn't exist, click **Add** and add this portal.

   b. **Targets**. Click **Add** to set up a new target. Enter the values for your uses case in the **Target Name**, **Target Alias**, and **Portal Group**. 

      Select the **Target Mode** option from **iSCSI**, **Fibre Channel** or **Both**.

      The **Initiator Group ID** selects which existing initiator group has access to the target.
      
      Options for the **Authentication Method** are **None**, **CHAP**, or **Mutual CHAP**. 
     
      Set **Authentication Group Number** to either none or an integer. This value represents the number of existing authorized accesses.
       
      ![Sharing ISCSI Targets Add Fibre](/images/CORE/12.0/SharingISCSITargetsAddFibre.png "ISCSI Targets: Fibre")
 
      The **Target** [Reporting]({{< relref "/CORE/UIReference/ReportingGraphs.md" >}}) tab provides Fibre Channel port bandwidth graphs.
   
   c. **Extents**. Click **Add** to create a new extent.
      
      ![ISCSIExtentsAddFibre](/images/CORE/12.0/ISCSIExtentsAddFibre.png "ISCSI Extents Add Fibre")

   d. **Associated Targets**. Click **Add** to add a new associated target. 
   
      Select values for **Target** and **Extent**. 

      The LUN ID is a value between 0 and 1023. Some initiators expect a value below 256. Leave this field blank to automatically assign the next available ID.
      
      ![ISCSIAssocTargetAddFibre](/images/CORE/12.0/ISCSIAssocTargetAddFibre.png "ISCSI Assoc Target: Add Fibre")

3. Set **Fibre Channel Ports**.

   a. Click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> to expand the option for the port you want to select. 
   
   b. Select the **Mode** as either **Initiators** or **Targets**. The **Targets** dropdown field displays on the right side of the screen.
   
   c. Select the target from the list. A list of **Connected Initiators displays below the **Targets** dropdown list field.
      
      ![Sharing ISCSI Targets Add Fibre](/images/CORE/12.0/SharingISCSITargetsAddFibre.png "ISCSI Targets: Fibre")

   d. Select the initiator you want to use and then click **Save**.

4. Start the iSCSI service. Go to **Services** and click the **iSCSI** toggle until the **Running** status message displays.

## Additional Information

For more information on iSCSI shares also see:

[About iSCSI Shares]({{< relref "/CORE/UIReference/Sharing/iSCSI/_index.md" >}})

[The iSCSI Screen]({{< relref "/CORE/UIReference/Sharing/iSCSI/iSCSIShare.md" >}})

[Fiber Channel Ports Screen]({{< relref "/CORE/UIReference/Sharing/iSCSI/FibreChannel.md" >}})

[Adding an iSCSI Share]({{< relref "/CORE/CORETutorials/Sharing/iSCSI/AddingiSCSIShare.md" >}}) 

[Using iSCSI Shares]({{< relref "/CORE/CORETutorials/Sharing/iSCSI/UsingiSCSIShare.md" >}})

[Setting Up Fibre Channel]({{< relref "/CORE/CORETutorials/Sharing/iSCSI/SettingUpFibreChannel.md" >}})

[Setting Up NPIV]({{< relref "/CORE/CORETutorials/JailsPluginsVMs/VirtualMachines/SettingUpNPIV.md" >}})

