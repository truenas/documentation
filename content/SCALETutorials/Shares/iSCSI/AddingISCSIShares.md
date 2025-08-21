---
title: "Adding iSCSI Block Shares"
description: "Provides instructions on setting up iSCSI block shares manually or using the wizard and starting the service."
weight: 30
tags:
- iscsi
- shares
- iscsi
---

## Sharing Administrator Access
{{< include file="/static/includes/SharingAdminRole.md" >}}

## Adding an iSCSI Block Share


Go to **Shares** and click **Wizard** on the **Block (iSCSI) Shares Targets** widget.

TrueNAS offers two methods to add an iSCSI block share: the setup wizard or the manual steps using the screen tabs.
Both methods cover the same basic steps but have some differences.

The setup wizard steps you through the process.
The setup wizard ensures you configure the iSCSI share completely so you can use it immediately.

The manual process has more configuration screens than the wizard and allows you to configure the block share in any order after creating the target.
Use this process to customize your share for special use cases.
It gives you additional flexibility to build or tune a share to your exact requirements.

### Before You Begin

Before adding iSCSI shares, make sure you have already created a [zvol]({{< ref "AddManageZvols" >}}) or a [dataset]({{< ref "DatasetsSCALE" >}}) with at least one file to share. Do not use capital letters or spaces in the names or path.
Take note of the path to the zvol or file.

## Creating a share with the iSCSI Wizard

Go to Shares, then click **Wizard** on the **iSCSI Block Share Targets** widget.

1.  Click **Create New** on the **Target** screen, then click **Next** or on **Extent** to go to next screen.

   {{< trueimage src="/images/SCALE/Shares/iSCSIWizardTargetScreen.png" alt="iSCSI Wizard Target Screen" id="iSCSI Wizard Target Screen" >}}

2. Add the extent and select the device type.

   a. Enter a name using up to 64 lowercase alphanumeric and/or special characters.
      Allowed characters are dot (.), dash (-), and colon (:). A name longer than 64 characters is not allowed.

   b. Select the extent type. Choose between device and file based on your use case. The screen shows different settings based on the choice.

   {{< columns >}}
   {{< trueimage src="/images/SCALE/Shares/iSCSIWizardExtentCreateNewDevice.png" alt="iSCSI Wizard Extent Screen Devices Settings" id="iSCSI Wizard Extent Screen Device Settings" >}}
   <--->
   {{< trueimage src="/images/SCALE/Shares/iSCSIWizardExtendFileType.png" alt="iSCSI Wizard Extent Screen File Settings" id="iSCSI Wizard Extent Screen File Settings" >}}
   {{< /columns >}}
   
   If using a zvol, select **Device** in **Extent Type**.
   You can create a new zvol or select an existing zvol as the **Device**.

   {{< expand "Adding a New Device" "v" >}}

   To create a new zvol, set **Device** to **Create New**.

   Browse to select the path to the parent dataset using the file browser field below **Pool/Dataset**.
   Selecting the parent dataset activates **Create Dataset**.

   Click **Create Dataset**, enter a name that does not exceed 64 lowercase alphanumeric and/or special characters, then click **Create**.
   The mount path under **Pool/Dataset** populates with the path to the new zvol. 

   To use an existing zvol, after selecting **Device** in **Extent Type**, select **Existing**, then browse to select the existing zvol.

   Enter a numerical value and suffix to specify the size of the zvol you are creating in **Size**.
   {{< /expand >}}

   {{< expand "Adding a File" "v" >}}
   To use a file for the extent, select **File** in **Extent Type**.
   
   Enter or browse to select the mount point to the directory you want to use.
   If a directory does not exist, after selecting the parent dataset where you want to add the directory, enter a **/** followed by the name to add the directory to the dataset.

   Enter the size for the directory in **Filesize**.
   Leave this set to **0** to use the actual file size. This requires that the file already exists.
   Otherwise, specify the file size for the new file.
   {{< /expand >}}

   c. Select the sharing platform, then click **Next** or on **Protocol Options** to advance to the next step.

3. Create a portal or select an available existing portal.
   
   {{< trueimage src="/images/SCALE/Shares/iSCSIWizardProtocolOptionsCreateNewPortal.png" alt="iSCSI Wizard Protocol Options Screen Portal Settings" id="iSCSI Wizard Protocol Options Screen Portal Settings" >}}

   Select a portal from the dropdown list or click **Create New** to add a new portal.
   If you create a new portal, click **Add** to enter an IP address and netmask (CIDR) for the portal. To add another, click **Add** again.
   
   Leave **Initiator** blank to allow all, or enter a host name to limit access to the select client.
   To enter more than one host name, press <kbd>Enter</kbd> after each to separate each entry.
   You can edit initiators from the individual screens on the **iSCSI** screen after adding the target.

4. click **Save**.

## iSCSI Manual Setup

This procedure guides you through adding an iSCSI share using the individual configuration screens.
While the procedure places each screen in order, you can select tab screens in any order.

Click on the **Block (iSCSI) Share Targets** widget header to open the **iSCSI** screen. The **Targets** screen shows by default.

1. Add a target.
   
   {{< trueimage src="/images/SCALE/Shares/AddiSCSITargetScreen.png" alt="Add iSCSI Target Screen" id="Add iSCSI Target Screen" >}}

   a. Click **Add** to open the **Add iSCSI Target** screen.

   {{< trueimage src="/images/SCALE/Shares/AddiSCSITargetScreenAddGroupAndNetwork.png" alt="Add iSCSI Target Screen" id="Add iSCSI Target Screen" >}}

   b. Enter a name using lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) in **Target Name**.
      Use the iqn.format for the name. See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html).

      You can enter a common name for the target in **Target Alias**, but this is not required.

   c. (Optional) Add authorized networks.
      Click **Add** to show the **Network** fields to enter a publicly accessible IP address and netmask (CIDR).
      This allows communication between client computers and the iSCSI target.
      Click **Add** for each address you want to add.
      Addresses are added to the **iSCSI Authorized Networks** widget.

   d. (Optional) Click **Add** to the right of **Add Groups** to enter portal settings.
      You can add a portal from the **Portals** screen. Click on the **Portals** tab, then click **Add** to open the **Add iSCSI Portal** screen.

      Select a target with a number assignment from the dropdown list in **Portal ID**.   
      
      Select a group from the **Initiator Group ID**. You can add initiator groups (client groups) from the **Initiators** screen.
      Click on the **Initiators** tab, then click **Add** to open the **Add iSCSI Initiator** screen.

      Select the authentication method from the dropdown list.
      **None** allows anonymous discovery. **CHAP** uses one-way authentication. **Mutual CHAP** uses two-way authentication.
      To show the **Mutual CHAP** option, you must set the peer user and secret password.
      For more information on authentication methods, see [iSCSI Screens]({{< ref "iSCSISharesScreens" >}}).

      The **Authentication Group Number** dropdown list populates after configuration groups on the **Add Authorized Access** screen.
      Edit the target after adding these groups if you want to include them.

   e. Click **Save**.

2. Add extent(s). Click on the **Extents** tab, then click **Add** to open the **Add iSCSI Extent** screen.
   
   {{< columns >}}
{{< trueimage src="/images/SCALE/Shares/AddExtentScreenDeviceType.png" alt="Add iSCSI Extent Device Type" id="Add iSCSI Extent Device Type" >}}
<--->
{{< trueimage src="/images/SCALE/Shares/AddExtentScreenFileType.png" alt="Edit iSCSI Extent File Type" id="Edit iSCSI Extent File type" >}}
{{< /columns >}}
      
   a. Enter a name.

   b. Add a description about the extent if you want, but this is not required.
      The description shows in the **Target** table on the **Targets** screen and the **iSCSI Block Share Targets** widget and helps identify the share use or purpose.

   c. Select **Enabled** to enable the extent.

   d. Leave **Enable TCP** selected. To disable it, clear the checkbox.
      Select **Xen initiator compat mode** if required for your share.

   e. Set the device type as **Device** or **File**.

      {{< expand "Adding a Device Extent" "v" >}}
      After choosing **Device** in **Extent Type**, select the zvol or zvol snapshot from the **Device** dropdown list. The zvol must already exist to add it here.
      
      Accept the default in **Logical Block Size** or change the size to what fits your use case.
      {{< /expand >}}

      {{< expand "Adding a File Extent" "v" >}}
      After choosing **File** in **Extent Type**, enter or browse to select the path to an existing file.
      Enter a slash (/) followed by a file name to create a file in a dataset and append the file name to the path (/filename.ext).

      Enter the file size. Enter **0** to use the actual file size of an existing file, or specify the size to apply to the new file added in **Path to the Extent**.
      {{< /expand >}}

   f. Leave **Disable Physical Block Size Reporting** disabled unless you want to enable this function.

   g. Enter a product identification for the extent in **Product ID** or leave it blank to use the default **iSCSI Disk** used when left empty.

   h. Click **Save**.

3. Add initiator groups. Click on the **Initiators** tab, then click **Add** to open the **Add Initiator** screen.
   
   {{< trueimage src="/images/SCALE/Shares/AddInitiatorScreen.png" alt="Add Initiator Screen" id="Add Initiator Screen" >}}

   Leave **Allow All Initiators** selected, or clear and enter the host names or IP addresses of the ISNS servers to register with the iSCSI targets and portals of the system. Separate entries by pressing <kbd>Enter</kbd>.

   Click **Save**.

4. Add portals. Click on the **Portals** tab, then click **Add** to open the **Add Portal** screen.
   
   {{< trueimage src="/images/SCALE/Shares/AddPortalScreen.png" alt="Add Portal Screen" id="Add Portal Screen" >}}

   a. Enter a description for the portal if desired.

   b. Click **Add** to show the **IP Address** field.
      Enter the IP address and netmask (CIDR) for the portal. Click **Add** for each IP address to add.

      Enter **0.0.0.0** to listen on all IPv4 addresses, **::** to listen on all IPv6 addresses, or enter the server IP address.
   
   c. Click **Save**.

5. Enter authorized access networks. Click on the **Authorized Access** tab, then click **Add** to open the **Add Authorized Access** screen.
   
   {{< trueimage src="/images/SCALE/Shares/AddAuthorizedAccessScreen.png" alt="Add Authorized Access Screen" id="Add Authorized Access Screen" >}}

   a. Enter a number in **Group ID**. This field configures different groups with different authentication profiles.
      For example, all users with a group ID of *1* inherit the authentication profile associated with Group *1*.

   b. Select the discovery method from the dropdown list. **None** allows anonymous discovery. **CHAP** uses one-way discovery.
      **Mutual CHAP** uses two-way discovery, but not show as an option until you add the **Peer User** and **Peer Secret** credentials.
   
   c. Enter a username and password for CHAP authentication to the remote system. These can be the admin user account credentials.

   d. Enter a peer user account and password if using Mutual CHAP authentication.
      The **Peer Secret** cannot be the same password entered in **Secret**. You can select **Mutual CHAP** as the discovery method now.

   e. Click **Save**.

## Creating a Quick iSCSI Target

TrueNAS allows users to add iSCSI targets without adding the extent, portal, initiators, etc. You can create the target and add the rest later.

Go to **Shares** and click the **Block (iSCSI) Shares Targets** widget header to open the **iSCSI** screen with the **Targets** tab selected by default.

1. Click **Add** to open the **Add iSCSI Target** screen.

2. Enter a name in **Target Name**. Use lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) in the iqn.format.
   See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html).

3. (Optional) Enter a user-friendly name in **Target Alias**.

4. Add authorized networks. Click **Add** to show the **Network** fields where you can enter an IP address and netmask (CIDR).
   This allows communication between client computers and the iSCSI target. Click **Add** for each address you want to add.
   Addresses are added to the authorized networks list.

5. Click **Add** to the right of **Add Groups** to enter portal settings.
   Portal and group settings can be added later or on the **Add Portal** screen, and initiator groups can be added by editing the target or using the **Add Initiators** screen.

   Select a target with a number assignment from the dropdown list in **Portal ID**.   
      
   Select the authentication method from the dropdown list.
   **None** allows anonymous discovery. **CHAP** uses one-way authentication. **Mutual CHAP** uses two-way authentication.
   For more information on authentication methods, see [iSCSI Screens]({{< ref "iSCSISharesScreens" >}}).

   Select a portal ID from the **Initiator Group ID** dropdown list.

   The **Authentication Group Number** dropdown list is populated after configuration groups on the **Add Authorized Access** screen.
   Edit the target after adding these groups if you want to include them.

6. Click **Save**.

## Starting the iSCSI Service

After adding a share with the iSCSI wizard or manual entry screens, the system shows a dialog prompting you to start or restart the service.

You can also start the service by clicking on the <span class="material-icons">more_vert</span> on the **Block (iSCSI) Shares Targets** widget and selecting **Turn On Service**.
You can go to **System > Services**, locate **iSCSI** on the service list, and click the **Running** toggle to start the service.

{{<include file="/static/includes/addcolumnorganizer.md">}}
