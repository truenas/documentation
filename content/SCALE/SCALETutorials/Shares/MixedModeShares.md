---
title: "Multiprotocol Shares"
description: "Provides instructions on setting up SMB and NFSv4 mixed-mode shares."
weight: 40
tags:
- shares
- smb
- nfs
---

## About Multiprotocol Shares
A multiprotocol or mixed-mode NFS and SMB share supports both NFS and SMB protocols for sharing data.
Multiprotocol shares allow clients to use either protocol to access the same data.
This can be useful in environments with a mix of Windows systems and Unix-like systems, especially if some clients lack an SMB client.

{{< hint type=tip >}}
Carefully consider your environment and access requirements before configuring a multiprotocol share.
For many applications, a single protocol SMB share provides better user experience and ease of administration.
Linux clients can access SMB shares using [`mount.cifs`](https://linux.die.net/man/8/mount.cifs).
{{< /hint >}}

It is important to properly configure permissions and access controls to ensure security and data integrity when using mixed-mode sharing.
To maximize security on the NFS side of the multiprotocol share, we recommend using NFSv4 and [Active Directory](#joining-active-directory)(AD) for Kerberos authentication.
It is also important that NFS clients preserve extended attributes when copying files, or SMB metadata could be discarded in the copy.

## First Steps
Before adding a multiprotocol SMB and NFS share to your system:

1. [Configure and start](#configuring-and-starting-share-services) the SMB and NFS services.
   Configure the NFS service to require Kerberos authentication.

2. Join the TrueNAS server to an existing [Active Directory](#joining-active-directory) domain.
   Configure a container, Kerberos admin, and user accounts in AD.

3. [Create the dataset and share](#creating-a-multiprotocol-share-dataset) with **Dataset Preset** set to **Multiprotocol**.

## Configuring and Starting Share Services
Before joining AD and creating a dataset for the share to use, start both the SMB and NFS services and configure the NFS service for Kerberos authentication.
Configure the NFS service before joining AD for simpler Kerberos credential creation.

You can either use the**Shares** screen **Configure Service** option on both the **Windows (SMB) Share** and on the **UNIX (NFS) Shares** widgets, or go to **System Settings > Services** and select the **Edit** option on the **SMB** and **NFS** services.

{{< trueimage src="/images/SCALE/Shares/SharingSMBServicesActionOptions.png" alt="SMB Service Options" id="SMB Service Options" >}}

Unless you need a specific setting or are configuring a unique network environment, we recommend using the default SMB service settings.

After configuring the share services, start the services. 

From the **Sharing** screen, click on the **Windows (SMB) Shares** <span class="material-icons">more_vert</span> to display the service options, which are **Turn Off Service** if the service is running or **Turn On Service** if the service is not running.

After adding a share, use the toggle to enable or disable the service for that share.

To enable the service from the **System Settings > Services** screen, click the toggle for the service and set **Start Automatically** if you want the service to activate when TrueNAS boots.

### Configuring and Starting the NFS Service
Open the **NFS** service screen, then select only **NFSv4** on the **Enabled Protocols** dropdown list.
For security hardening, we recommend disabling the **NFSv3** protocol.

Select **Require Kerberos for NFSv4** to enable using a Kerberos ticket.

If Active Directory is already joined to the TrueNAS server, click **Save** and then reopen the **NFS** service screen.
Click **Add SPN** to open the **Add Kerberos SPN Entry** dialog.

{{< trueimage src="/images/SCALE/SystemSettings/ServicesNFSAddKerberosSPNEntry.png" alt="Add Kerberos SPN Entry" id="Add Kerberos SPN Entry" >}}

Click **Yes** when prompted to add a Service Principal Name (SPN) entry.
Enter the AD domain administrator user name and password in **Name** and **Password**.

{{< hint type=tip >}}
TrueNAS SCALE automatically applies SPN credentials if the NFS service is enabled with **Require Kerberos for NFSv4** selected before joining Active Directory.
{{< /hint >}}

Click **Save** again, then start the NFS service.

From the **Sharing** screen, click on the **Unix Shares (NFS)** <span class="material-icons">more_vert</span> to display the service options, which are **Turn Off Service** if the service is running or **Turn On Service** if the service is not running.

Each NFS share on the list also has a toggle to enable or disable the service for that share.

{{< trueimage src="/images/SCALE/Shares/NFSWidgetOptions.png" alt="Unix (NFS) Shares Widget Options" id="Unix (NFS) Shares Widget Options" >}}

To enable the service from the **System Settings > Services** screen, click the toggle for the service and set **Start Automatically** if you want the service to activate when TrueNAS boots.

{{< hint type=note >}}
The NFS service does not automatically start on boot if all NFS shares are encrypted and locked.
{{< /hint >}}

## Joining Active Directory
Mixed-mode SMB and NFS shares greatly simplify data access for client running a range of operating systems.
They also require careful attention to security complexities not present in standard SMB shares.
NFS shares do not respect permissions set in the SMB Share ACL.
Protect the NFS export with proper authentication and authorization controls to prevent unauthorized access by NFS clients.

We recommend using [Active Directory]({{< relref "configadscale.md" >}}) to enable Kerberos security for the NFS share.
Configure a container (group or organizational unit), Kerberos admin, and user accounts in AD.

## Creating a Multiprotocol Share Dataset
You can create the dataset and add a multiprotocol (SMB and NFS) share using the **Add Dataset** screen.

{{< include file="/content/_includes/ShareDatasetsNotPools.md" >}}

Select the dataset you want to be the parent of the multimode dataset, then click **Add Dataset**.

Enter a name for the dataset. The dataset name populates the **SMB Name** field and becomes the name of the SMB and NFS shares.

Select **Multiprotocol** from the **Dataset Preset** dropdown. The share configuration options display with **Create NFS Share** and **Create SMB Share** preselected.

{{< trueimage src="/images/SCALE/Datasets/AddMultimodeDataset.png" alt="Adding a Multimode Dataset and Share" id="Adding a Multimode Dataset and Share" >}}

(Optional) Click **Advanced Options** to customize other dataset settings such as quotas, compression level, encryption, and case sensitivity.
See [Creating Datasets]({{< relref "DatasetsSCALE.md #creating-a-dataset" >}}) for more information on adding and customizing datasets.

Click **Save**. TrueNAS creates the dataset and the SMB and NFS shares. Next edit both shares.
After editing the shares, edit the dataset ACL.

### Editing the SMB Share
After creating the multimode share on the **Add Dataset** screen, go to **Shares** and edit the SMB share. 

1. Select the share on the **Windows Shares (SMB)** widget and then click **Edit**.
   The **Edit SMB** screen opens showing the **Basic Options** settings.

2. Select **Multi-protocol (NFSv4/SMB) shares** from the **Purpose** dropdown list to apply pre-determined **Advanced Options** settings for the share.

   {{< trueimage src="/images/SCALE/Shares/EditSMBPurpose.png" alt="Edit SMB Purpose" id="Edit SMB Purpose" >}}

3. (Optional) Enter a **Description** to help explain the share purpose.

4. Click **Save**.

Restart the service when prompted.

### Editing the NFS Share
After creating the multimode share on the **Add Dataset** screen, go to **Shares** and edit the NFS share. 

1. Select the new share listed on **Unix (NFS) Shares** widget and then click **Edit**. 
   The **Edit NFS** screen opens showing the **Basic Options** settings.

    {{< trueimage src="/images/SCALE/Shares/AddNFSScreen.png" alt="Add NFS Share" id="Add NFS Share" >}}

2. Enable Kereberos security. Click **Advanced Options**. 
    Select **KRB5** from the **Security** dropdown to enable the Kerberos ticket that generated when you [joined Active Directory](#joining-active-directory).

   {{< trueimage src="/images/SCALE/Shares/EditNFSShareAdvancedSecuritySetting.png" alt="Advanced Options Security Settings" id="Advanced Options Security Settings" >}}

    If needed, select **Read-Only** to prohibit writing to the share.

3. Click **Save**.

Restart the service when prompted.

### Adjusting the Dataset ACL
After joining AD, creating a multimode dataset and the SMB and NFS shares, adjust the dataset/file system ACL to match the container and users configured in AD.

You can modify dataset permissions from the **Shares** screen using the <span class="material-icons">security</span> **Edit Filesystem ACL** icon to open the [**Edit ACL**](#edit-filesystem-acl-screen) screen for each share (SMB and NFS).
Using this method you select the share on the **Windows (SMB) Share** widget, then click the icon to edit the dataset properties for the SMB share, but you must repeat this for the NFS share.

{{< trueimage src="/images/SCALE/Shares/EditMultimodeShareDatasetPermissions.png" alt="Editing Share Dataset ACL" id="Editing Share Dataset ACL" >}}

Or you can go to **Datasets**, select the name of the dataset created for the multiprotocol share to use and scroll down to the **Permissions** widget for the dataset.
Click **Edit** to open the **Edit ACL** screen.

{{< trueimage src="/images/SCALE/Datasets/EditMultimodeDatasetPermissions.png" alt="Editing Multimode Dataset Permissions" id="Editing Multimode Dataset Permissions" >}}

Check the **Access Control List** to see if the AD group you created is on the list and has the correct permissions.
If not, add this Access Control Entry (ACE) item on the **Edit ACL** screen for the multimode dataset (or each share).

1. Enter **Group** in the **Who** field or use the dropdown list to select **Group**.

2. Type or select the appropriate group in the **Group** field.

3. Verify **Full Control** displays in **Permissions**. If not, select it from the dropdown list.

4. Click **Save Access Control List** to add the ACE item or save changes.

See [Permissions]({{< relref "PermissionsScale.md" >}}) for more information on editing dataset permissions.

After setting the dataset permission, connect to the share.

### Connecting to a Multiprotocol Share
After creating and configuring the shares, connect to the mulit-protocol share using either SMB or NFS protocols from a variety of client operating systems including Windows, Apple, FreeBSD, and Linux/Unix systems.

For more information on accessing shares, see [Mounting the SMB Share]({{< relref "/SCALE/SCALETutorials/Shares/_index.md #mounting-the-smb-share" >}}) and [Connecting to the NFS Share]({{< relref "AddingNFSShares.md #connecting-to-the-nfs-share" >}}).
