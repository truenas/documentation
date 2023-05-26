---
title: iSCSI Volume Management
description: "Provide information on managing iSCSI block shares and iSCSI volumes in TrueCommand."
weight: 70
aliases:
tags:
- tciscsi
- coreiscsi
- scaleiscsi
---

{{< toc >}}

{{< hint type=warning >}}
Always back up any data intended for storage or sharing!
{{< /hint >}}

{{< hint type=note >}}
TrueCommand 2.3.2 introduces changes to how iSCSI objects are cached. We no longer cache all objects which fixes timing issues between sync. 
{{< /hint >}}

Use the <mat-icon role="img" fontset="mdi" fonticon="mdi-database" class="mat-icon mdi mdi-database mat-icon-no-color" aria-hidden="true"></mat-icon> icon on the top toolbar to open the **iSCSI Manager** screen.

![iSCSIManagerPage](/images/TrueCommand/2.1/iSCSIManagerPage.png "iSCSI Manager Page")

## Adding an iSCSI Volume
You can create in iSCSI block share for a TrueNAS system and have that new volume display both in TrueCommand iSCSI Manager and on the TrueNAS system screen listing iSCSI block shares.

To add a new iSCSI volume in TrueCommand from the **iSCSI Manager** screen:

Click **+ Volume** to begin creating an iSCSI volume.
After the **iSCSI Manager** wizard opens on the **Systems/Portals** screen. 

![iSCSICreateScreenSystemPortals](/images/TrueCommand/2.3.2/iSCSICreateScreenSystemPortals.png "Add Portal Screen")

Click on **Add System Pool**, then select a pool or multiple pools from the dropdown list. 

![iSCSIWizardAddVolumeSelectPool](/images/TrueCommand/2.3.2/iSCSIWizardAddVolumeSelectPool.png "iSCSI Add Volume Portal Select Pools")

Click away from the list to close it. 

On the system field for the selected pool, select the IP address the portal the volume listens to from the **Port Bindings** dropdown list. 
**0.0.0.0** listens on all IPv4 addresses, **::** listens on all IPV6 addresses, or select the IP address for the system to listen to only this address.

Select **CHAP Auth** to use this discovery authentication method and display the **CHAP User** and **CHAP Secret** fields. 
If using this authentication, enter the required information.

Click **Next** to advance to the **Block Devices** screen, then click **+ Block Devices** to open the **Block Device Group** dialog.

![iSCSIWizardAddBlockDeviceGroup](/images/TrueCommand/2.3.2/iSCSIWizardAddBlockDeviceGroup.png "iSCSI Add Block Device Group")

To add a block device, enter a name, specify the number of iSCSI datastores you want to create, the size, zvol and logical block sizes for each. 
Enter a number in **Count** to tell TrueCommand to create a batch of ISCSI datastores with identical settings for the number specified.

Select **Xen Support** if using Xen, a VM platform, as an initiator. 
Select **xcopy Support** to enable allowing an initiator to bypass normal access control and access any scannable target when the TrueNAS system is running CORE, SCALE does not use this function. This allows xcopy operations otherwise blocked by access control.

Click **SAVE**, then click **NEXT** to advance to the **Targets** screen.

Click **+ Target** to open the **Target** dialog. 

![iSCSIWizardAddTargetDialog](/images/TrueCommand/2.3.2/iSCSIWizardAddTargetDialog.png "iSCSI Create Target")

Enter a name for the target, then click **Save**. 
Select the checkbox for the new target to to assign it to the block device listed above the target row and to
activate **Next**.

![iSCSIWizardAddTargetSelectCheckbox](/images/TrueCommand/2.3.2/iSCSIWizardAddTargetSelectCheckbox.png "Map Target To Block")

Click **NEXT**.

By default, TrueCommand grants target access to all initiators. You can skip over creating an initiator or click **+ Initiator** to add one.
Name the new initiator and click the checkbox to assign it to the target.

![iSCSIWizardAddInitiatorDialog](/images/TrueCommand/2.3.2/iSCSIWizardAddInitiatorDialog.png "iSCSI Create Initiator")

Click **NEXT**.

Review the configuration and click **Create**.

![iSCSIWizardReviewAndCreate](/images/TrueCommand/2.3.2/iSCSIWizardReviewAndCreate.png "iSCSI Review")

TrueCommand creates the iSCSI volume on the TrueNAS system and adds it to the **iSCSI Manager**.

![iSCSIManagerWithAddedVolume](/images/TrueCommand/2.3.2/iSCSIManagerWithAddedVolume.png "iSCSI Volume List")

Using the TrueNAS web interface to update iSCSI settings takes approximately five minutes to resync with TrueCommand.

#### Deleting a Share

To delete a block device, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon for the volume, then select **Block Devices** to open the list of block devices for the selected volume. 

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon for the block device to open the action list.

Click **Delete Block Device** to delete the block device and target or **Delete Block Device and zvol** to delete the block device, target, and associated zvol, which is a full clean-up in TrueCommand and the TrueNAS system.

![DeleteBlockVolumeOptions](/images/TrueCommand/2.3.2/DeleteBlockVolumeOptions.png "Delete iSCSI Options")

Select **Confirm** then **OK**.

TrueCommand cannot delete initiators and initiator groups because they might be tied to multiple targets.
To remove these settings, delete them from each TrueNAS system.

{{< taglist tag="tciscsi" limit="10" title="Related iSCSI Articles" >}}
