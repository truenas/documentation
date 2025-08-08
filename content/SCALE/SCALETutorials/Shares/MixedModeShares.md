---
title: "Multiprotocol Shares"
description: "Provides instructions on setting up SMB and NFSv4 mixed-mode shares."
weight: 40
tags:
- shares
- smb
- nfs
---

{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

{{< include file="/static/includes/TimeMachineMultiprotocol.md" >}}

## About Multiprotocol Shares

A multi-protocol or mixed-mode NFS and SMB share supports both NFS and SMB protocols for sharing data.
Multi-protocol shares allow clients to use either protocol to access the same data.
This can be useful in environments with a mix of Windows systems and Unix-like systems, especially if some clients lack an SMB client.

{{< hint type=tip >}}
Carefully consider your environment and access requirements before configuring a multi-protocol share.
For many applications, a single protocol SMB share provides a better user experience and ease of administration.
Linux clients can access SMB shares using [`mount.cifs`](https://linux.die.net/man/8/mount.cifs).
{{< /hint >}}

To ensure security and data integrity when using multi-protocol sharing, it is important to properly configure permissions and access controls.
To maximize security on the NFS side of the multiprotocol share, we recommend using NFSv4 and [Active Directory](#joining-active-directory)(AD) for Kerberos authentication.
It is also important that NFS clients preserve extended attributes when copying files, or SMB metadata could be discarded in the copy.

Multi-protocol shares are not compatible with APPL extensions such as Apple Time Machine that rely on SMB3/3 lease support, which is no longer available in multi-protocol shares.
Choosing to configure a multi-protocol share disables options to enable AAPL extensions globally.

## First Steps

Before adding a multi-protocol SMB and NFS share to your system:

1. [Configure and start](#configuring-and-starting-share-services) the SMB and NFS services.
   Configure the NFS service to require Kerberos authentication.

2. Join the TrueNAS server to an existing [Active Directory](#joining-active-directory) domain.
   Configure a container, Kerberos admin, and user accounts in AD.

3. [Create the dataset and share](#creating-a-multiprotocol-share-dataset).

## Configuring and Starting Share Services

Before joining AD and creating a dataset for the share, start both the SMB and NFS services and configure the NFS service for Kerberos authentication.
For a simpler Kerberos credential creation, configure the NFS service before joining AD.

You can either use the **Shares** screen **Config Service** option on both the **Windows (SMB) Share** and the **UNIX (NFS) Shares** widgets, or go to **System > Services** and select the **Edit** option for the **SMB** and **NFS** services.

{{< trueimage src="/images/SCALE/Shares/SMBShareOptions.png" alt="SMB Service Options" id="SMB Service Options" >}}

Unless you need a specific setting or are configuring a unique network environment, we recommend using the default SMB service settings.

After configuring the SMB and NFS share services, start the services.

From the **Shares** screen, click on the **Windows (SMB) Shares** <span class="material-icons">more_vert</span> to display the service options, which are **Turn Off Service** if the service is running or **Turn On Service** if the service is not running.

After adding a share, use the toggle to enable or disable the service for that share.

To enable the service from the **System > Services** screen, click the toggle for the service and set **Start Automatically** if you want the service to activate when TrueNAS boots.

### Configuring and Starting the NFS Service

Open the **NFS** service screen, then select only **NFSv4** on the **Enabled Protocols** dropdown list.
For security hardening, we recommend disabling the **NFSv3** protocol.

Select **Require Kerberos for NFSv4** to enable using a Kerberos ticket.

If Active Directory is already joined to the TrueNAS server, click **Save**, then reopen the **NFS** service screen.
Click **Add SPN** to open the **Add Kerberos SPN Entry** dialog.

{{< trueimage src="/images/SCALE/SystemSettings/ServicesNFSAddKerberosSPNEntry.png" alt="Add Kerberos SPN Entry" id="Add Kerberos SPN Entry" >}}

Click **Yes** when prompted to add a service principal name (SPN) entry.
Enter the AD domain administrator user name and password in **Name** and **Password**.

{{< hint type=tip >}}
TrueNAS automatically applies SPN credentials if the NFS service is enabled with **Require Kerberos for NFSv4** selected before joining Active Directory.
{{< /hint >}}

Click **Save**, then start the NFS service.

From the **Shares** screen, click on the **Unix (NFS) Shares** <span class="material-icons">more_vert</span> to display the service options, which are **Turn Off Service** if the service is running or **Turn On Service** if the service is not running.

Each NFS share on the list also has a toggle to enable or disable the service for that share.

{{< trueimage src="/images/SCALE/Shares/NFSWidgetOptions.png" alt="Unix (NFS) Shares Widget Options" id="Unix (NFS) Shares Widget Options" >}}

To enable the service from the **System > Services** screen, click the toggle for the service and set **Start Automatically** if you want the service to activate when TrueNAS boots.

{{< hint type=note >}}
The NFS service does not automatically start on boot if all NFS shares are encrypted and locked.
{{< /hint >}}

## Joining Active Directory

Multi-protocol SMB and NFS shares greatly simplify data access for clients running a range of operating systems.
They also require careful attention to security complexities not present in standard SMB shares.
NFS shares do not respect permissions set in the SMB share ACL.
Protect the NFS export with proper authentication and authorization controls to prevent unauthorized access by NFS clients.

We recommend using [Active Directory]({{< ref "configadscale" >}}) to enable Kerberos security for the NFS share.
Configure a container (group or organizational unit), Kerberos admin, and user accounts in AD.

## Creating a Multiprotocol Share

You can create a share and a dataset from either the **Add Dataset** or **Add SMB** screen.

{{< hint type=info >}}
The multi-protocol share type is mutually exclusive with AAPL extension support, like Time Machine.
These extensions require the SMB2/3 lease support, which is no longer available in multi-protocol shares.
Therefore, the **Multi-Protocol Share** option does not include a Time Machine option. Selecting other Apple protocol options displays warning messages.
Multi-protocol shares can impact the performance of all SMB shares.
{{< /hint >}}

### Using the Add Dataset Screen

TrueNAS allows you to create the dataset and add a multiprotocol (SMB and NFS) share using the **Add Dataset** screen.

{{< include file="/static/includes/ShareDatasetsNotPools.md" >}}

Select the dataset you want to be the parent of the multi-mode dataset, then click **Add Dataset**.

Enter a name for the dataset.

Select **Multiprotocol** from the **Dataset Preset** dropdown.
The share configuration options display with **Create NFS Share** and **Create SMB Share** preselected.
The dataset name populates the **SMB Name** field and becomes the name of the SMB and NFS shares.

{{< trueimage src="/images/SCALE/Datasets/AddMultimodeDataset.png" alt="Adding a Multi-Mode Dataset and Share" id="Adding a Multi-Mode Dataset and Share" >}}

(Optional) Click **Advanced Options** to customize other dataset settings such as quotas, compression level, encryption, and case sensitivity.
See [Creating Datasets]({{< ref "DatasetsSCALE.md#creating-a-dataset" >}}) for more information on adding and customizing datasets.

Click **Save**.
TrueNAS creates the dataset and the multi-protocol SMB and NFS shares.

TrueNAS sets the same share presets as the **Multi-Protocol Share** option in **Purpose** on the **Advanced Options** for the **Add SMB** screen.
To configure other share settings, go to the **Shares**, select the share, click the edit icon to open the **Edit SMB** screen, and click **Advanced Options** to modify the settings.

After adding the dataset, edit the dataset ACL.

### Using the Add SMB Screen

To create a share and a dataset from the **Add SBM** share screen, go to **Shares**, and click **Add** on the **Windows (SMB) Shares** widget to open the **Add SMB** screen.

1. Enter or browse to select the parent dataset where you want to add the share dataset, then click **Create Dataset**.
   Enter a name for the dataset/share, then click **Create Dataset**. The **Path** field populates with the path to the dataset, and the **Name** field populates with the dataset/share name. Both the dataset and the share have the same name.
   
2. Select **Multi-Protocol Shares** on the **Purpose** dropdown list.
   This applies the pre-determined **Other Options** selected on the **Advanced Options** screen.

   {{< trueimage src="/images/SCALE/Shares/EditSMBPurpose.png" alt="Edit SMB Purpose" id="Edit SMB Purpose" >}}

   Click **Advanced Options** to modify any settings you want to use. Multi-mode shares cannot use APPL extension settings like Time Machine.

3. (Optional) Enter a **Description** to help explain the share purpose.

4. Click **Save**.

Restart the service when prompted.
You can modify share settings after creating it.

### Editing the NFS Share

After creating the multi-protocol share on the **Add Dataset** screen, go to **Shares** and edit the NFS share.

1. Select the new share listed on **Unix (NFS) Shares** widget and then click **Edit**.
   The **Edit NFS** screen opens with the **Basic Options** settings showing.

    {{< trueimage src="/images/SCALE/Shares/AddNFSScreen.png" alt="Add NFS Share" id="Add NFS Share" >}}

2. Enable Kerberos security. Click **Advanced Options**.
    Select **KRB5** from the **Security** dropdown to enable the Kerberos ticket generated when you [joined Active Directory](#joining-active-directory).

   {{< trueimage src="/images/SCALE/Shares/EditNFSShareAdvancedSecuritySetting.png" alt="Advanced Options Security Settings" id="Advanced Options Security Settings" >}}

    If needed, select **Read-Only** to prohibit writing to the share.

3. Click **Save**.

Start or restart the service when prompted.

### Adjusting the Dataset ACL

After joining AD and creating a multi-protocol dataset and the SMB and NFS shares, adjust the dataset/file system ACL permissions to match the container and users configured in AD.

You can modify dataset permissions from the **Shares** screen using <span class="material-icons">security</span> **Edit Filesystem ACL** to open the [**Edit ACL**](#edit-filesystem-acl-screen) screen for the selected share (SMB and NFS).
Select the share row on the widget, then click the edit icon to modify permissions for the share dataset. Repeat this for both the SMB and NFS shares.

{{< trueimage src="/images/SCALE/Shares/EditMultimodeShareDatasetPermissions.png" alt="Editing Share Dataset ACL" id="Editing Share Dataset ACL" >}}

Or go to **Datasets**, select the dataset row created for the multi-protocol share on the **Datasets** table, then scroll down to the **Permissions** widget for the dataset.
Click **Edit** to open the **Edit ACL** screen.

{{< trueimage src="/images/SCALE/Datasets/EditMultimodeDatasetPermissions.png" alt="Editing Multi-Mode Dataset Permissions" id="Editing Multi-Mode Dataset Permissions" >}}

Check the **Access Control List** to see if the AD group you created is on the list and has the correct permissions.
If not, add this Access Control Entry (ACE) item on the **Edit ACL** screen for the multi-protocol dataset (or each share).

1. Enter **Group** in the **Who** field or use the dropdown list to select **Group**.

2. Type or select the appropriate group in the **Group** field.

3. Verify **Full Control** displays in **Permissions**. If not, select it from the dropdown list.

4. Click **Save Access Control List** to add the ACE item or save changes.

See [Permissions]({{< ref "PermissionsScale" >}}) for more information on editing dataset permissions.

After setting the dataset permission, connect to the share.

{{<include file="/static/includes/addcolumnorganizer.md">}}

### Connecting to a Multiprotocol Share

After creating and configuring the shares, connect to the multi-protocol share using either SMB or NFS protocols from a variety of client operating systems, including Windows, Apple, FreeBSD, and Linux/Unix systems.

For more information on accessing shares, see [Mounting the SMB Share]({{< ref "/SCALE/SCALETutorials/Shares/SMB#mounting-the-smb-share" >}}) and [Connecting to the NFS Share]({{< ref "AddingNFSShares.md#connecting-to-the-nfs-share" >}}).
