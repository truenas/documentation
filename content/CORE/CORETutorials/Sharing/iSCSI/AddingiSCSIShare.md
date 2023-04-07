---
title: "Adding an iSCSI Share"
description: "This article describes how to add an iSCSI share on TrueNAS CORE."
weight: 10
aliases: /core/sharing/iscsi/iscsishare/
tags:
- coreiscsi
- corefibrechannel
- tciscsi
---

{{< toc >}}

To get started, make sure you have created a [zvol]({{< relref "CORE/CORETutorials/Storage/Pools/ZVols.md" >}}) or a [dataset]({{< relref "CORE/CORETutorials/Storage/Pools/Datasets.md" >}}) with at least one file to share.

Go to **Sharing > Block Shares (iSCSI)**. You can either set one up manually or use **WIZARD** to guide you through creation.

## Wizard Setup Process

![SharingISCSIWizardDevice](/images/CORE/12.0/SharingISCSIWizardDevice.png "iSCSI Wizard: Block Device")

On **Create or Choose Block Device**: 

1. Enter a name for the iSCSI share. It can only contain lowercase alphanumeric characters plus a dot (.), dash (-), or colon (:). We recommend keeping the name short or at most 63 characters. 

2. Choose the **Extent Type**.

   * If the **Extent Type** is **Device**, select the Zvol to share from the **Device** menu.
   
   * If the **Extent Type** is **File**, select the path to the extent and indicate the file size.

3. Select the type of platform to use for the share. For example, if using the share from an updated Linux OS, choose **Modern OS**.

4. Click **Next**. The **Portals** screen displays.

5. Select an existing portal or click **Create New** to add a portal. 
   
   If you create a new portal, you must select a discovery authentication method. 
   
   a. Select either **CHAP** or **MUTUAL CHAP** in the **Discovery Authentication Method** field.

   b. Select either **None** or **Create New** in the **Discovery Authentication Group** field. **Create New** displays additional configuration fields. 
      If you select **None** you can leave **Discovery Authentication Group** empty.

   c. Enter a number in the **Group ID** field to identify the group.

   d. Enter the user name in the **User** field. This can be the same as the initiator.

   e. Enter a password of 12 to 16 characters in the **Secret** field and again in **Secret (Confirm)**.

   f. Select the IP address(es) to use. If adding more than one IP address, click **ADD** and then select the IP address. 
      Use **0.0.0.0.** to listen on all IPv4 or **::** to listen on all IPv6 IP addresses.

   G. Select the TCP port number to use if different from the default.

   H. Click Next to display the **Initiator** screen.
   
6. Enter the initiator information to use. Decide which initiators or networks can use the iSCSI share. Leave the list empty to allow all initiators or networks, or add entries to the list to limit access to those systems. Use the keyboard <kbd>Enter</kbd> between each entry. Click **Next** to display the **Confirm Options** screen.

7. Confirm the settings you entered. To change any setting click **BACK** until you see the screen where you want to make changes.

8. Click **SUBMIT** to save the iSCSI block share.

## Manual Setup Process

To add or edit an existing iSCSI share, use the seven tab to access the various iSCSI configuration screens.

1. Configure the share global configuration settings. Click the **Target Global Configuration** tab.
   
   ![SharingISCSIManualTargetGlobalConfig](/images/CORE/12.0/SharingISCSIManualTargetGlobalConfig.png "iSCSI Target Global Configuration")

2. Configure the portal settings. Click on the **Portals** tab.
   
   ![SharingISCSIManualPortals](/images/CORE/12.0/SharingISCSIManualPortals.png "iSCSI Portal")

   To add a new portal, click **ADD** and enter the basic and IP address information.
   
   To edit an existing portal, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the portal and select **Edit**.

   ![SharingISCSIManualPortalsForm](/images/CORE/12.0/SharingISCSIManualPortalsForm.png "iSCSI Portals Form")
   
3. Configure the initiator settings (not required). Click on the **Initiators Groups** tab. Both the **Add** and **Edit** forms have the same settings fields.
   
   ![iSCSIAddInitiators](/images/CORE/12.0/iSCSIAddInitiators.png "iSCSI Add Initiators") 
   
   Use **ADD** to display the **Initiators Add** configuration screen. 
   Either leave **Allow All Initiators** checked or configure your own allowed initiators and authorized networks.
   
   Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for the initiator group and select **Edit** to display the **Initiator Group Edit** configuration screen. 

4. Configure authorized access networks. Click the **Authorized Access** tab.
   
   ![SharingISCSIManualAuthorizedAccessForm](/images/CORE/12.0/SharingISCSIManualAuthorizedAccessForm.png "iSCSI Authorized Access Form")

   Click **ADD** to add a new authorized access network. Fill out the group, user and peer user information.

   Click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the authorized access network and select **Edit**.

5. Configure targets. Click the **Targets** tab.
   
   ![SharingISCSIManualTargetsForm](/images/CORE/12.0/SharingISCSIManualTargetsForm.png "iSCSI Targets Form")

   To add a new target, click **ADD** and enter the basic and iSCSI group information.

   To edit an existing target, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to it and select **Edit**.

6. Configure extents. Click the **Extents** tab.
   
   ![SharingISCSIManualExtentsForm](/images/CORE/12.0/SharingISCSIManualExtentsForm.png "iSCSI Extents Form")

   To add a new extent, click **ADD** and enter the basic, type, and compatibility information.
   
   To edit an existing extent, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to it and select **Edit**.

7. Configure any associated targets. Click on the **Associated Targets** tab.
   
   ![SharingISCSIManualAssociatedTargetsForm](/images/CORE/12.0/SharingISCSIManualAssociatedTargetsForm.png "iSCSI Associated Targets Form")

   To add a new associated target, click **ADD** and fill out the information.

   To edit an existing associated target, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to it and select **Edit**.

## Starting the iSCSI Service

To turn on the iSCSI service, go to **Services** locate **iSCSI** and click on the toggle. It should display the status **Running**.

To set it to start automatically when TrueNAS boots up, select the **Start Automatically** checkbox.

![ServicesISCSIEnable](/images/CORE/12.0/ServicesISCSIEnable.png "Starting the iSCSI Service")

Click on the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> returns to the options in **Sharing > iSCSI**.

{{< taglist tag="coreiscsi" limit="10" >}}
