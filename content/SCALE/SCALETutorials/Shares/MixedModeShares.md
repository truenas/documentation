---
title: "Multiprotocol Shares"
description: "Provides instructions on setting up SMB and NFSv4 mixed-mode shares."
weight: 40
tags:
- scaleshares
- scalesmb
- scalenfs
---

{{< toc >}}

## About Multiprotocol Shares

A multiprotocol or mixed-mode NFS and SMB share supports both NFS and SMB protocols for sharing data.
Multiprotocol shares allow clients to use either protocol to access the same data.
This can be useful in environments with a mix of Windows systems and Unix-like systems, especially if some clients lack an SMB client.

{{< hint type=tip >}}
Carefully consider your environment and access requirements before configuring a multiprotocol share.
For many applications, a single protocol SMB share provides better user experience and ease of administration. Linux clients can access SMB shares using [`mount.cifs`](https://linux.die.net/man/8/mount.cifs).
{{< /hint >}}

It is important to properly configure permissions and access controls to ensure security and data integrity when using mixed-mode sharing.
To maximize security on the NFS side of the multiprotocol share, we recommend using NFSv4 and [Active Directory](#joining-active-directory)(AD) for Kerberos authentication.
It is also important that NFS clients preserve extended attributes when copying files, or SMB metadata could be discarded in the copy.

## First Steps

Before adding a multiprotocol SMB and NFS share to your system:

1. [Start and configure](#starting-and-configuring-services) the SMB and NFS services.
   Ensure that NFS is configured to require Kerberos authentication.

2. Join the TrueNAS server to an existing [Active Directory](#joining-active-directory) domain.
   Configure a container, Kerberos admin, and user accounts in AD.

3. [Set up a dataset](#creating-a-multiprotocol-share-dataset) for the new share with **Share Type** set to **Multiprotocol**.

### Configuring and Starting Services

Before joining AD and creating a dataset for the share to use, first start both the SMB and NFS services and configure the NFS Service for Kerberos authentication. Configure the NFS service before joining AD for simpler Kerberos credential creation.

#### Configuring the SMB Service

Configure the SMB service by clicking **Config Service** from the <span class="material-icons">more_vert</span> dropdown menu on the **Shares** screen or by clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i> on the **Services** screen.
Unless you need a specific setting or are configuring a unique network environment, we recommend using the default settings.

#### Starting the SMB Service

Start the service from the **Windows SMB Share** header on the **Sharing** screen or in **System Settings > Services**.

{{< expand "Click for more information" "v" >}}
#### Starting the Service Using the Windows SMB Share

From the **Sharing** screen, click on the **Windows (SMB) Shares** <span class="material-icons">more_vert</span> to display the service options, which are **Turn Off Service** if the service is running or **Turn On Service** if the service is not running.

{{< trueimage src="/images/SCALE/Shares/SharingSMBServicesActionOptions.png" alt="SMB Service Options" id="SMB Service Options" >}}

Each SMB share on the list also has a toggle to enable or disable the service for that share.

#### Starting the Service Using System Settings

Go to **System Settings > Services** and click the toggle for **SMB**.
Set **Start Automatically** if you want the service to activate when TrueNAS boots.
{{< /expand >}}

#### Configuring the NFS Service

Configure the NFS service by clicking **Config Service** from the <span class="material-icons">more_vert</span> dropdown menu on the **Shares** screen or by clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i> on the **Services** screen.

Under **NFSv4**, ensure the **NFSv4** protocol is selected from the **Enabled Protocols** dropdown menu.
For security hardening, we recommend disabling the **NFSv3** protocol.

Select **Require Kerberos for NFSv4** to enable using a Kerberos ticket.

If Active Directory is already joined to the TrueNAS server, click **Save** and then reopen the **NFS** configuration screen.
Click **Add SPN** to open the **Add Kerberos SPN Entry** dialog.

{{< trueimage src="/images/SCALE/SystemSettings/ServicesNFSAddKerberosSPNEntry.png" alt="Add Kerberos SPN Entry" id="Add Kerberos SPN Entry" >}}

Click **Yes** when prompted to add a Service Principal Name (SPN) entry.
Enter the AD domain administrator user name and password in **Name** and **Password**.

{{< hint type=tip >}}
TrueNAS SCALE automatically applies SPN credentials if the NFS service is enabled with **Require Kerberos for NFSv4** selected before joining Active Directory.
{{< /hint >}}

#### Starting the NFS Service

Start the service from the **Unix Shares (NFS)** header on the **Sharing** screen or in **System Settings > Services**.

{{< expand "Click for more information" "v" >}}
#### Starting the Service Using the Unix Shares (NFS) Share

From the **Sharing** screen, click on the **Unix Shares (NFS)** <span class="material-icons">more_vert</span> to display the service options, which are **Turn Off Service** if the service is running or **Turn On Service** if the service is not running.

{{< trueimage src="/images/SCALE/Shares/NFSWidgetOptions.png" alt="Unix (NFS) Shares Widget Options" id="Unix (NFS) Shares Widget Options" >}}

Each NFS share on the list also has a toggle to enable or disable the service for that share.

#### Starting the Service Using System Settings

Go to **System Settings > Services** and click the toggle for **NFS**.
Set **Start Automatically** if you want the service to activate when TrueNAS boots.

{{< hint type=note >}}
The NFS service does not automatically start on boot if all NFS shares are encrypted and locked.
{{< /hint >}}
{{< /expand >}}

### Joining Active Directory

Mixed-mode SMB and NFS shares greatly simplify data access for client running a range of operating systems.
They also require careful attention to security complexities not present in standard SMB shares.
NFS shares do not respect permissions set in the SMB Share ACL.
The NFS admin should protect the NFS export with proper authentication and authorization controls to prevent unauthorized access by NFS clients.

We recommend using [Active Directory]({{< relref "configadscale.md" >}}) to enable Kerberos security for the NFS share.
Configure a container (group or organizational unit), Kerberos admin, and user accounts in AD.

### Creating a Multiprotocol Share Dataset

Before creating a mixed-mode share, create the dataset you want the share to use for data storage.

{{< include file="/content/_includes/ShareDatasetsNotPools.md" >}}

We recommend creating a new dataset with the **Share Type** set to **Multiprotocol** for the new mixed-mode share.

{{< expand "Creating a Dataset" "v" >}}
{{< include file="/content/_includes/CreateDatasetSCALE.md" >}}
{{< /expand >}}

#### Adjusting the Dataset ACL

After joining AD and creating a dataset, you need to adjust the dataset/filesystem ACL to match the container and users configured in AD.

{{< expand "Click here for instructions" "v" >}}
1. Go to **Datasets**.

2. Click on the name of the dataset you created for the multiprotocol share to use.

3. Scroll down to the **Permissions** widget. Click **Edit** to open the **Edit ACL** screen.

4. Check the **Access Control List** to see if the AD group you created is on the list and has the correct permissions. If not, add this Access Control Entry (ACE) item.

   a. Enter **Group** in the **Who** field or use the dropdown list to select **Group**.

   b. Type or select the appropriate group in the **Group** field.

   c. Verify **Full Control** displays in **Permissions**. If not, select it from the dropdown list.

   d. Click **Save Access Control List** to add the ACE item or save changes.

See [Permissions]({{< relref "PermissionsScale.md" >}}) for more information on editing dataset permissions.
{{< /expand >}}

## Adding a Multiprotocol Share

To configure a multiprotocol share on your system:

1. Complete the [first steps](#first-steps) above.

2. [Create the SMB share](#creating-the-smb-share) with **Purpose** set to **Multi-protocol (NFSv4/SMB) shares**.

3. [Create the NFS share](#creating-the-nfs-share) with **Security** set to **KRB5**.

4. [Connect client system(s)](#connecting-to-a-multiprotocol-share) to the share.
### Creating the SMB Share

To create the SMB share, go to **Shares**.

1. Click on **Windows Shares (SMB)** to select it and then click **Add**. The **Add SMB** configuration screen displays the **Basic Options** settings.

   {{< trueimage src="/images/SCALE/Shares/AddShareBasicOptions.png" alt="Add SMB Basic Options" id="Add SMB Basic Options" >}}

2. Enter the SMB share **Path** and **Name**.

   Enter the path or use the <span class="material-icons">arrow_right</span> icon to the left of **<span class="material-icons">folder</span>/mnt** to locate the dataset you created for the multiprotocol share.

   The **Name** is the SMB share name, which forms part of the share pathname when SMB clients perform an SMB tree connect.
   Because of how the SMB protocol uses the name, it must be less than or equal to 80 characters. It cannot have invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6.
   If you do not enter a name, the share name becomes the last component of the path.
   If you change the name, follow the naming conventions for:
   * [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
   * [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea)

3. Select **Multi-protocol (NFSv4/SMB) shares** from the **Purpose** dropdown list to apply pre-determined **Advanced Options** settings for the share.

4. (Optional) Enter a **Description** to help explain the share purpose.

5. Select **Enabled** to allow sharing of this path when the SMB service is activated.
   Leave it cleared if you want to disable the share without deleting the configuration.

6. If needed, use **Advanced Options** to set up guest access, read only access, to set up allowed and denied hosts. or to optimize the SMB share for Apple OS.
   See [Adding SMB Shares]({{< relref "AddSMBShares.md #configuring-share-advanced-options-settings" >}}) for more information.

7. Click **Save** to create the share and add it to the **Shares > Windows (SMB) Shares** list.

### Creating the NFS Share

To create the NFS share, go to **Shares**.

1. Click on **Unix (NFS) Shares** to select it and then click **Add**. The **Add NFS Share** configuration screen displays the **Basic Options** settings.

    {{< trueimage src="/images/SCALE/Shares/SharingNFSAddSCALE.png" alt="Add NFS Share" id="Add NFS Share" >}}

2. Enter the path or use the <span class="material-icons">arrow_right</span> icon to the left of **<span class="material-icons">folder</span>/mnt** to locate the dataset you created for the multiprotocol share.

3. Enter text to help identify the share in **Description**.

4. If needed, enter allowed networks and hosts.

    {{< expand "Adding Networks and Hosts" "v" >}}
If you want to enter allowed networks, click **Add** to the right of **Networks**.
Enter an IP address in **Network** and select the mask CIDR notation.
Click **Add** for each network address and CIDR you want to define as an authorized network.
Defining an authorized network restricts access to all other networks. Leave empty to allow all networks.

If you want to enter allowed systems, click **Add** to the right of **Hosts**.
Enter a host name or IP address to allow that system access to the NFS share.
Click **Add** for each allowed system you want to define.
Defining authorized systems restricts access to all other systems.
Press the **X** to delete the field and allow all systems access to the share.
    {{< /expand >}}

5. Enable Kereberos security.

    Click **Advanced Options**.

    {{< trueimage src="/images/SCALE/Shares/AddNFSAdvancedOptionsAccessSettings.png" alt="Advanced Options Access Settings" id="Advanced Options Access Settings" >}}

    If needed, select **Read-Only** to prohibit writing to the share.

    Select **KRB5** from the **Security** dropdown to enable the Kerberos ticket that generated when you [joined Active Directory](#joining-active-directory).

6. Click **Save** to create the share.

### Connecting to a Multiprotocol Share

Once created and configured, you can connect to your mulitprotocol share using either SMB or NFS and from a variety of client operating systems including Windows, Apple, FreeBSD, and Linux/Unix systems.
For more information on accessing shares, see [Mounting the SMB Share]({{< relref "AddSMBShares.md #mounting-the-smb-share" >}}) and [Connecting to the NFS Share]({{< relref "AddingNFSShares.md #connecting-to-the-nfs-share" >}}).

{{< taglist tag="scaleshares" limit="10" >}}
