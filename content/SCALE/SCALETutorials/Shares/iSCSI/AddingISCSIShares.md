---
title: "Adding iSCSI Block Shares"
description: "This article provides instructions on setting up iSCSI block shares manually or using the wizard and starting the service."
weight: 30
tags:
 - scaleiSCSI
 - scaleshares
---

{{< toc >}}

To get started with iSCSI shares, make sure you have already created a [zvol]({{< relref "/SCALE/SCALETutorials/Storage/Datasets/AddManageZvols.md" >}}) or a [dataset]({{< relref "DatasetsSCALE.md" >}}) with at least one file to share.

Go to **Shares** and click **Configure** in the **Block (iSCSI) Shares Targets** window. You can either use the creation wizard or set one up manually.

## Configuring an iSCSI Share Tutorial Video
{{< expand "Tutorial Video" "v" >}}
This short tutorial video demonstrates basic steps to set up an iSCSI share configuration. 
{{< embed-video name="scaleangelfishiscsi" >}}
{{< /expand >}}

## Adding an iSCSI Block Share

TrueNAS SCALE offers two methods to add an iSCSI block share: the setup wizard or the manual steps using the screen tabs.
Both methods cover the same basic steps but have some differences.

The setup wizard requires you to enter some settings before you can move on to the next screen or step in the setup process.
It is designed to ensure you configure the iSCSI share completely so it can be used immediately.

The manual process has more configuration screens over the wizard and allows you to configure the block share in any order.
Use this process to customize your share for special uses cases.
It is designed to give you additional flexibility to build or tune a share to your exact requirements.

### Before you Begin

Have the following ready before you begin adding your iSCSI block share:

* Storage pool and dataset.
* A path to a Device (zvol or file) that doesn't use capital letters or spaces.

## iSCSI Wizard
This section walks you through the setup process using the wizard screens.

{{< expand "Click here for more information" "v" >}}
To use the setup wizard, 
1. Add the block device. 
   
   a. Enter a name using all lowercase alphanumeric characters plus a dot (.), dash (-), or colon (:). We recommend keeping it short or at most 63 characters. 
      
      ![iSCSIWizardCreateDevice](/images/SCALE/22.12/iSCSIWizardCreateDevice.png "iSCSI Wizard: Block Device")
   
   b. Choose the **Extent Type**. You can select either **Device** or **File**.

      If you select **Device**, select the zvol to share from the **Device** dropdown list.

      If you select **File**, file settings display. Browse to the file location to populate the path, then enter the size in **Filesize**. Enter 0 to use the actual existing file size.

      ![iSCSIWizardCreateFile](/images/SCALE/22.12/iSCSIWizardCreateFile.png "iSCSI Wizard: Block File Settings")

   c. Select the type of platform using the share. For example, if you use an updated Linux OS, choose **Modern OS**.

   d. Click **Next**.

2. Add the portal
   
   Now you either create a new portal or select an existing one from the dropdown list.

   If you create a new portal, select a **Discovery Authentication Method** from the dropdown list.

   If you select **None**, you can leave **Discovery Authentication Group** empty.

   If you select either **CHAP** or **MUTUAL CHAP**, you must also to select a **Discovery Authentication Group** from the dropdown list. 
   If no group exists, click **Create New** and enter a value in **Group ID**, **User**, and **Secret**.
   
   ![iSCSIWizardPortalChap](/images/SCALE/22.12/iSCSIWizardPortalChap.png "iSCSI Wizard: Portal Chap Authentication")
   
   Select **0.0.0.0** or **::** from the **IP Address** dropdown list. **0.0.0.0** listens on all IPv4 addresses and **::** listens on all IPv6 addresses.

    Click **NEXT**

3. Add the Initiator. After adding the portal, set up the initiators that use the iSCSI share.
   
   Decide which initiators can use the iSCSI share. 
   Leave the list empty to allow all initiators, or add entries to the list to limit access to those systems.

   ![iSCSIWizardInitiator](/images/SCALE/22.12/iSCSIWizardInitiator.png "iSCSI Wizard: Initiator")

4. Confirm the iSCSI setup. Review your settings.
   If you need or want to change any setting click **Back** until you reach the wizard screen with the setting.

5. click **Save**.
{{< /expand >}}

## iSCSI Manual Setup
This procedure walks you through adding each configuration setting on the seven configuration tab screens. While the procedure places each tab screen in order, you can select the tab screen to add settings in any order.

{{< expand "Click here for more information" "v" >}}
1. Configure share settings that apply to all iSCSI shares.

   a. Click **Configure** on the main **Block (iSCSI) Share Targets** widget.
      The **Target Global Configuration** tab screen opens.

      ![iSCSIManualTargetGlobalConfig](/images/SCALE/22.12/iSCSIManualTargetGlobalConfig.png "iSCSI Target Global Configuration")

   b. Enter a name using lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) in **Base Name**. 
      Use the iqn.format for the name. See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html).

   c. Enter the host names or IP address of the ISNS servers to register with the iSCSI targets and portals of the system. Separate entries by pressing <kbd>Enter</kbd>.

   d. The value in **Pool Available Space Threshold** generates an alert when the pool has this percentage of space remaining. This is typically configured at the pool level when using zvols or at the extent level for both file and device-based extents. 

   e. Enter the **iSCSI listen port**.  Add the TCP port used to access the iSCSI target. The default is `3260`.

   f. Click **Save**.

2. Add portals. Click **Portals** tab.

   a. Click **Add** at the top right of the screen to open the **Add Portal** screen.
      
      ![iSCSIManualAddPortalNoAuth](/images/SCALE/22.12/iSCSIManualAddPortalNoAuth.png "iSCSI Add Portal No Authentication")

   b. (Optional) Enter a description. Portals are automatically assigned a numeric group.

   c. Select the **Discovery Authentication Method** from the dropdown list. 

      **None** alows anonymous discovery and does not require you to select a **Discovery Authentication Group**.

      **CHAP** and **Mutual CHAP** require authentication and you to select a group ID in **Discovery Authentication Group**.

   d. (Optional) Based on your **Discovery Authentication Method**, select a group in **Discovery Authentication Group**.

   e. Click **Add** to select an **IP Address** the portal listens on from the dropdown list. **0.0.0.0** listens on all IPv4 addresses and **::** listens on all IPv6 addresses. 

   f. Click **Save**.

3. Add initiators groups to create authorized access client groups. Click on the **Initiators Groups** tab to open the screen.

   a. Click **Add** at the top right of the screen to open the **SHARING > ISCSI > INITIATORS > Add** screen.
      
   ![iSCSIManualAddInitiators](/images/SCALE/22.12/iSCSIManualAddInitiators.png "iSCSI Initiators Groups")

   b. Select **Allow All Initiators** or configure your own allowed initiators.

      Enter the [iSCSI Qualified Name (IQN)](https://tools.ietf.org/html/rfc3720#section-3.2.6) in **Allowed Initiators (IQN)** and click **+** to add it to the list. Example: *iqn.1994-09.org.freebsd:freenas.local*.

   c. Click **Save**.

4. Add network authorized access. Click on the **Authorized Access** tab to open the screen.
   
   a. Click **Add** at the top right of the screen to open the **Add Authorized Access** screen.
      
      ![iSCSIManualAddAuthAccess](/images/SCALE/22.12/iSCSIManualAddAuthAccess.png "iSCSI Add Authorized Access")

   b. Enter a number in **Group ID**. Each group ID allows configuring different groups with different authentication profiles. 
      Example: all users with a group ID of *1* inherits the authentication profile associated with *Group 1*.   
   
   c. Enter a user around to create for CHAP authentication with the user on the remote system. Consider using the initiator name as the user name.

   d. Enter the user password of at least 12 to no more than 16 characters long in **Secret** and **Secret (Confirm)**.

   e. (Optional) Enter peer user details in **Peer User** and **Peer Secret** and **Peer Secret (Confirm)**.
      Peer user is only entered when configuring mutual CHAP and is usually the same value as **User**. The password must be different from the one entered in **Secret**.

   f. Click **Save**.

5. Create storage resources. Click **Targets** tab. 
   
   ![iSCSIManualAddTargets](/images/SCALE/22.12/iSCSIManualAddTargets.png "iSCSI Add Targets")
   
   a. Click **Add** at the top right of the screen. The **Add iSCSI Target** screen opens.

   b. Enter a name in **Target Name**. Use lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) in the iqn.format. 
      See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html).

   c. (Optional) Enter a user-friendly name in **Target Alias**.

   d. Click **Add** next to **Authorized Networks** to enter IP address information.

   e. Click **Add** under **iSCSI Group** to display the group settings.

   f. Select the group ID from the **Portal Group ID** dropdown.

   g. (Optional) Select the group ID in **Initiator Group ID** or leave it set to **None**.

   h. (Optional) Select the **Authentication Method** from the dropdown list of options.

   i. (Optional) Select the **Authentication Group Number** from the dropdown list. This value represents the number of existing authorized accesses.
   
   j. Click **Save**.

6. Add new share storage units (extents). Click the **Extents** tab.
   
   ![iSCSIManualAddExtentDevice](/images/SCALE/22.12/iSCSIManualAddExtentDevice.png "iSCSI Extents Add Device")
 
   a. Click **Add** at the top right of the screen. The **Add Extent** screen opens.

   b. Enter a name for the extent. If the extent size is not **0**, it cannot be an existing file within the pool or dataset.

   c. Leave **Enabled** selected.

   d. In the **Compatibility** section, the **Enable TPC** checkbox is selected by default. This allows an initiator to bypass normal access control and access any scannable target.

   e. The **Xen initiator compat mode** checkbox is not selected by default. Select when using Xen as the iSCSI initiator.

   f. The **LUN RPM** setting should not be changed when using Windows as the initiator. Only needs to be changed in large environments where the number of systems using a specific RPM is needed for accurate reporting statistics. 

   g. The **Read-only** checkbox is not selected by default. Select to prevent the initiator from initializing this LUN.
 
   h. In the **Type** section, select the extent type from the **Extent Type** dropdown. 
      **Device** provides virtual storage access to zvols, zvol snapshots, or physical devices. 
      **File** provides virtual storage access to a single file.

   i. (Optional) Select the option from the **Device** dropdown. This field only displays when **Extent Type** is set to **Device**.
      Select the path when **Extent Type** is set to **File**. Browse to the location. 
      Create a new file by browsing to a dataset and appending /\{filename.ext\} to the path. Enter the size in **Filesize**.

      ![iSCSIManualAddExtentFile](/images/SCALE/22.12/iSCSIManualAddExtentFile.png "iSCSI Extents Add File Name") 

   j. Select the **Logical Block Size** from the dropdown list. Leave at the default of 512 unless the initiator requires a different block size.

   k. Select **Disable Physical Block Size Reporting** if the initiator does not support physical block size values over 4K (MS SQL).

   l. Click **Save**.
   
7. Add associated storage resources. Click **Associated Targets** tab.
      
      ![iSCSIManualAddAssocAuthTargets](/images/SCALE/22.12/iSCSIManualAddAssocAuthTargets.png "iSCSI Add Associated Targets")

   a. Click **Add** at the top right of the screen. The **Add Associated Target** screen opens.

   b. Select the target from the **Target** dropdown list.

   c. Enter a value 0 and 1023 for the **LUN ID**. Some initiators expect a value below 256. Leave blank to automatically assign the next available ID.

   d. Select an existing extent from the **Extent** dropdown.

   e. Click **Save**
{{< /expand >}}

## Creating a Quick iSCSI Target
TrueNAS SCALE allows users to add iSCSI targets without having to set up another share.
{{< expand "Click here for more information" "v" >}}
Go to **Shares** and click the **Block (iSCSI) Shares Targets** widget.

   a. Click **Add** at the top right of the screen. The **Add iSCSI Target** screen opens.

   ![iSCSIManualAddTargets](/images/SCALE/22.12/iSCSIManualAddTargets.png "iSCSI Add Targets")

   b. Enter a name in **Target Name**. Use lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) in the iqn.format. 
      See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html).

   c. (Optional) Enter a user-friendly name in **Target Alias**.

   d. Click **Add** next to **Authorized Networks** to enter IP address information.

   e. Click **Add** under **iSCSI Group** to display the group settings.

   f. Select the group ID from the **Portal Group ID** dropdown.

   g. (Optional) Select the group ID in **Initiator Group ID** or leave it set to **None**.

   h. (Optional) Select the **Authentication Method** from the dropdown list of options.
   
   i. (Optional) Select the **Authentication Group Number** from the dropdown list. This value represents the number of existing authorized accesses.
   
   j. Click **Save**.

{{< /expand >}}

## Starting the iSCSI Service

To turn on the iSCSI service, from the **Block (iSCSI) Shares Targets** widget click the <span class="material-icons">more_vert</span> and select **Turn On Service**.
You can also go to **System Settings > Services** and locate **iSCSI** on the list and click the **Running** toggle to start the service.

Set iSCSI to start when TrueNAS boots up, go to **System Settings > Services** and locate **iSCSI** on the list. Select **Start Automatically**. 

![iSCSISystemServicesSCALE](/images/SCALE/22.12/iSCSISystemServicesSCALE.png "Starting the iSCSI Service")

Clicking the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> returns to the options in **Shares > Block (iSCSI) Shares Targets**.

{{< taglist tag="scaleiscsi" limit="10" >}}