---
title: "Adding iSCSI Block Shares"
description: "Provides instructions on setting up iSCSI block shares manually or using the wizard and starting the service."
weight: 30
tags:
- iscsi
- shares
- iscsi
---

To get started with iSCSI shares, make sure you have already created a [zvol]({{< relref "AddManageZvols.md" >}}) or a [dataset]({{< relref "DatasetsSCALE.md" >}}) with at least one file to share.

Go to **Shares** and click **Configure** in the **Block (iSCSI) Shares Targets** window. You can either use the creation wizard or set one up manually.

## Configuring an iSCSI Share Tutorial Video
{{< expand "Tutorial Video" "v" >}}
This short tutorial video demonstrates basic steps to set up an iSCSI share configuration.
{{< embed-video name="scaleangelfishiscsi" >}}
{{< /expand >}}

## Sharing Administrator Access
{{< include file="/static/includes/SharingAdminRole.md" >}}

## Adding an iSCSI Block Share

TrueNAS offers two methods to add an iSCSI block share: the setup wizard or the manual steps using the screen tabs.
Both methods cover the same basic steps but have some differences.

The setup wizard requires you to enter some settings before you can move on to the next screen or step in the setup process.
It is designed to ensure you configure the iSCSI share completely so it can be used immediately.

The manual process has more configuration screens over the wizard and allows you to configure the block share in any order.
Use this process to customize your share for special use cases.
It is designed to give you additional flexibility to build or tune a share to your exact requirements.

### Before you Begin

Have the following ready before you begin adding your iSCSI block share:

* Storage pool and dataset.
* A path to a Device (zvol or file) that doesn't use capital letters or spaces.

## iSCSI Wizard
This section walks you through the setup process using the wizard screens.

To use the setup wizard:
1. Click **Wizard** to open the Target screen. Click **Create New**.

   {{< trueimage src="/images/SCALE/Shares/iSCSIWizardTargetScreen.png" alt="iSCSI Wizard Target Screen" id="iSCSI Wizard Target Screen" >}}

2. Add the extent.

   {{< columns >}}
   {{< trueimage src="/images/SCALE/Shares/iSCSIWizardExtentCreateNewDevice.png" alt="iSCSI Wizard Extent Screen Devices Settings" id="iSCSI Wizard Extent Screen Device Settings" >}}
   <--->
   {{< trueimage src="/images/SCALE/Shares/iSCSIWizardExtendFileType.png" alt="iSCSI Wizard Extent Screen File Settings" id="iSCSI Wizard Extent Screen File Settings" >}}
   {{< /columns >}}

   Enter a name using up to 64 lowercase alphanumeric and special characters. Allowed characters are dot (.), dash (-), and colon (:). A name longer than 64 characters is not allowed.

   Select the extent type. Choose between device and file based on your use case.

   {{< expand "Adding a Device" "v" >}}
   If choosing **Device**, select an existing device from the dropdown list or **Create New** to add a new device.

   Enter or browse to select the path to the dataset to use for storage. If one does not exist, click **Create Dataset** to add a new dataset.

   Enter a numerical value and suffix to specify the size of the zvol you are creating in **Size**.
   {{< /expand >}}
   {{< expand "Adding a File" "v" >}}
   If choosing **File**, enter or browse to select the mount point for the directory the extent uses.
   If a directory does not exist, after selecting the dataset where you want to add the directory, enter a **/** followed by the name to add the directory to the dataset.

   Enter the size for the directory in **Filesize**. Leaving this set to **0** uses the actual file size and requires that the file already exists. Otherwise, specify the file size for the new file.
   {{< /expand >}}

   Select the sharing platform, then click **Next**.

3. Create the portal.
   
   {{< trueimage src="/images/SCALE/Shares/iSCSIWizardProtocolOptionsCreateNewPortal.png" alt="iSCSI Wizard Protocol Options Screen Portal Settings" id="iSCSI Wizard Protocol Options Screen Portal Settings" >}}

   Select a portal from the dropdown list or click **Create New** to add a new portal.
   If you create a new portal, click **Add** to enter an IP address and netmask (CIDR) for the portal. To add another, click **Add** again.
   
   Leave **Initiator** blank to allow all, or enter a host name. To enter more than one host name, press <kbd>Enter</kbd> after each to separate each entry.
      select a **Discovery Authentication Method** from the dropdown list.

4. click **Save**.

## iSCSI Manual Setup
This procedure guides you through adding an iSCSI share using the individual configuration screens.
While the procedure places each screen in order, you can select tab screens in any order.

Click on the **Block (iSCSI) Share Targets** widget header to open the individual share screens. The **Targets** screen opens by default.

1. Add a target.
   
   {{< trueimage src="/images/SCALE/Shares/AddiSCSITargetScreen.png" alt="Add iSCSI Target Screen" id="Add iSCSI Target Screen" >}}

   a. Click **Add** to open the **Add Target** screen.

   {{< trueimage src="/images/SCALE/Shares/iSCSITargetsScreen.png" alt="iSCSI Targets Screen" id="iSCSI Wizard Targets Screen" >}}

   b. Enter a name using lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) in **Target Name**.
      Use the iqn.format for the name. See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html).

      You can enter a common name for the target in **Target Alias** but this is not required.

   c. Add authorized networks. Click **Add** to show the **Network** fields to enter an IP address and netmask (CIDR).
      This allows communication between client computers and the iSCSI target. Click **Add** for each address you want to add.
      Addresses are added to the authorized networks list.

   d. Click **Add** to the right of **Add Groups** to enter portal settings.

      Select a target with a number assignment from the dropdown list in **Portal ID**.   
      
      Select the authentication method from the dropdown list.
      **None** allows anonymous discovery. **CHAP** uses one-way authentication. **Mutual CHAP** uses two-way authentication.
      For more information on authentication methods, see [iSCSI Screens]({{< relref "iSCSISharesScreens.md" >}}).

      Select a portal ID from the **Initiator Group ID** dropdown list.

      The **Authentication Group Number** dropdown list is populated after configuration groups on the **Add Authorized Access** screen.
      Edit the target after adding these groups if you want to include them.

   e. Click **Save**.

2. Add extent(s). Click on the **Extents** tab, then click **Add** to open the **Add Extent** screen.
   
   {{< columns >}}
   {{< trueimage src="/images/SCALE/Shares/AddExtentScreenDeviceType.png" alt="Add iSCSI Extent Device Type" id="Add iSCSI Extent Device Type" >}}
   <--->
   {{< trueimage src="/images/SCALE/Shares/AddExtentScreenFileType.png" alt="Edit iSCSI Extent File Type" id="Edit iSCSI Extent File type" >}}
   {{< /columns >}}
      
   a.  Enter a name.

   b. Add a description about the extent if you want but this is not required.

   c. Select **Enabled** to enable the extent.

   d. Leave **Enable TCP** selected. To disable it, clear the checkbox.
      Select *Xen initiator compat mode** if required for your share.

   e. Set the device type as **Device** or **File**.

      {{< expand "Adding a Device Extent" "v" >}}
      After choosing **Device** in **Extent Type**, select the zvol or zvol snapshot from the **Device** dropdown list.
      
      Accept the default in **Logical Block Size** or change the size to what fits your use case.
      {{< /expand >}}

      {{< expand "Adding a File Extent" "v" >}}
      After choosing **File** in **Extent Type**, enter or browse to select the path to an existing file.
      Enter a slash (/) followed by a file name to create a file in a dataset and append the file name to the path (/filename.ext).

      Enter the file size. Enter 0 to use the actual file size of an existing file, or specify the size to apply to the new file added in **Path to the Extent**.
      {{< /expand >}}

   f. Leave **Disable Physical Block Size Reporting** disabled unless you want to enable this function.

   g. Click **Save**.

3. Add initiator groups. Click on the **Initiators** tab, then click **Add** to open the **Add Initiator** screen.
   
   {{< trueimage src="/images/SCALE/Shares/AddInitiatorScreen.png" alt="Add Initiator Screen" id="Add Initiator Screen" >}}

   Leave **Allow All Initiators** selected, or clear and enter the host names or IP address of the ISNS servers to register with the iSCSI targets and portals of the system. Separate entries by pressing <kbd>Enter</kbd>.

   Click **Save**.

4. Add portals. Click on the **Portals** tab, then click **Add** to open the **Add Portal** screen.
   
   {{< trueimage src="/images/SCALE/Shares/AddPortalScreen.png" alt="Add Portal Screen" id="Add Portal Screen" >}}

   a. Enter a description for the portal if desired.

   b. Click **Add** to show the **IP Address** field. Enter the IP address and netmask (CIDR) for the portal. Click **Add** for each IP address to add.

      Enter **0.0.0.0** to listen on all IPv4 addresses, **::** to listen on all IPv6 addresses, or enter the server IP address.
   
   c. Click **Save**.

5. Enter authorized access networks. Click on the **Authorized Access** tab, then click **Add** to open the **Add Authorized Access** screen.
   
   {{< trueimage src="/images/SCALE/Shares/AddAuthorizedAccessScreen.png" alt="Add Authorized Access Screen" id="Add Authorized Access Screen" >}}

   a. Enter a number in **Group ID**. This field allows configuring different groups with different authentication profiles.
      For example, all users with a group ID of 1 inherit the authentication profile associated with Group 1.

   b. Select the discovery method from the dropdown list. **None** allows anonymous discovery. **CHAP** uses one-way discovery.
      **Mutual CHAP** uses two-way discovery.
   
   c. Enter a user account name and password for CHAP authentication to the remote system. This can be the admin user account credentials.

   d. Enter a peer user account and password if using Mutual CHAP authentication.

   e. Click **Save**.

## Creating a Quick iSCSI Target
TrueNAS allows users to add iSCSI targets without needing to add another share.
Go to **Shares** and click the **Block (iSCSI) Shares Targets** widget header to open the **Targets** screen.

1. Click **Add** at the top right of the screen to open the **Add iSCSI Target** screen.

2. Enter a name in **Target Name**. Use lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) in the iqn.format.
   See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html).

3. (Optional) Enter a user-friendly name in **Target Alias**.

4. Add authorized networks. Click **Add** to show the **Network** fields where you can enter an IP address and netmask (CIDR).
   This allows communication between client computers and the iSCSI target. Click **Add** for each address you want to add.
   Addresses are added to the authorized networks list.

5. Click **Add** to the right of **Add Groups** to enter portal settings.

   Select a target with a number assignment from the dropdown list in **Portal ID**.   
      
   Select the authentication method from the dropdown list.
   **None** allows anonymous discovery. **CHAP** uses one-way authentication. **Mutual CHAP** uses two-way authentication.
   For more information on authentication methods, see [iSCSI Screens]({{< relref "iSCSISharesScreens.md" >}}).

   Select a portal ID from the **Initiator Group ID** dropdown list.

   The **Authentication Group Number** dropdown list is populated after configuration groups on the **Add Authorized Access** screen.
   Edit the target after adding these groups if you want to include them.

6. Click **Save**.

## Starting the iSCSI Service
After adding a share with the iSCSI wizard or manual entry screens, the system shows a dialog prompting you to start or restart the service.

You can also start the service by clicking on the <span class="material-icons">more_vert</span> on the **Block (iSCSI) Shares Targets** widget and selecting **Turn On Service**.
You can also go to **System > Services**, locate **iSCSI** on the service list, and click the **Running** toggle to start the service.

{{<include file="/static/includes/addcolumnorganizer.md">}}
