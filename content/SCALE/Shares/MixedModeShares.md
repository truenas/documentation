---
title: "Multiprotocol Shares"
description: "Provides instructions on setting up SMB and NFSv4 mixed-mode shares."
weight: 30
tags:
- shares
- smb
- nfs
doctype: tutorial
aliases:
 - /scale/shares/mixedmodeshares/
 - /scale/scaletutorials/shares/mixedmodeshares/
---

## About Multiprotocol Shares

A multiprotocol share exposes the same dataset over both SMB and NFS simultaneously, so Windows clients and Unix-like systems can access the same data without duplicating storage.
This is most useful in mixed environments where some clients lack an SMB client or where a Linux workload and Windows clients need shared access to the same files.

For many environments, a single-protocol SMB share is simpler to administer and delivers better performance. Linux clients can access SMB shares using [`mount.cifs`](https://linux.die.net/man/8/mount.cifs).
Consider multiprotocol sharing when your environment genuinely requires concurrent access from both protocol types.

To protect data integrity, NFS clients must preserve extended attributes when copying files — otherwise SMB metadata can be discarded.
We recommend NFSv4 with Active Directory and Kerberos authentication for the NFS side of the share, as NFS defaults provide limited access control. This is especially important for Enterprise environments.

TrueNAS enables SMB3 unix extensions for multiprotocol shares, allowing Linux clients with SMB3 POSIX support to use filesystem primitives beyond standard SMB semantics.
Windows clients without unix extension support are unaffected.

{{< include file="/static/includes/WebShare-SMBWarning.md" >}}

## Which Method Should I Use?

### Creating a New Dataset and Shares

If you are setting up multiprotocol sharing for the first time and do not yet have a dataset, use the [Add Dataset method](#creating-a-new-multiprotocol-share).
TrueNAS creates the dataset, the SMB share, and the NFS share together in a single step.
This is the recommended approach for new setups.

### Adding SMB Access to an Existing Dataset

If you already have a dataset or NFS share and want to add Windows SMB access to it, use the [Add SMB method](#adding-multiprotocol-access-to-an-existing-dataset-or-nfs-share).
This configures the SMB share with the settings required for safe multiprotocol interoperability, including for paths accessed by local processes, containers, or FTP.
If the dataset does not yet have an NFS share, you need to create one separately after adding the SMB share.

## Before You Begin

Before adding a multiprotocol share, start the SMB and NFS services.
From the **Shares** screen, click <span class="material-icons">more_vert</span> on the **Windows (SMB) Shares** or **Unix (NFS) Shares** widget and select **Turn On Service**.
From the **System > Services** screen, click <span class="iconify" data-icon="mdi:play-circle" title="Start Service">Start Service</span> for the **SMB** or **NFS** service.
Toggle **Start Automatically** on to start the service when TrueNAS boots.

To configure service settings, click <span class="material-icons">more_vert</span> on the widget and select **Config Service**, or go to **System > Services** and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> **Edit** for the service.

{{< trueimage src="/images/SCALE/Shares/SMBShareOptions.png" alt="SMB Service Options" id="SMB Service Options" >}}

Unless you need a specific setting or are configuring a unique network environment, we recommend using the default SMB service settings.
After adding a share, use the share toggle on the widget to enable or disable that individual share.

### Configuring the NFS Service

Open the **NFS** service settings using **Config Service** from the <span class="material-icons">more_vert</span> menu on the **Unix (NFS) Shares** widget, or go to **System > Services** and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> **Edit** for **NFS**.
Select only **NFSv4** on the **Enabled Protocols** dropdown list.
For security hardening, we recommend disabling the **NFSv3** protocol.
Select **Require Kerberos for NFSv4** if you are using Active Directory.

If Active Directory is already joined to the TrueNAS server, click **Save**, then reopen the **NFS** service screen.
Click **Add SPN** to open the **Add Kerberos SPN Entry** dialog.

{{< trueimage src="/images/SCALE/SystemSettings/ServicesNFSAddKerberosSPNEntry.png" alt="Add Kerberos SPN Entry" id="Add Kerberos SPN Entry" >}}

Click **Yes** when prompted to add a service principal name (SPN) entry.
Enter the AD domain administrator user name and password in **Name** and **Password**.

{{< hint type=tip >}}
TrueNAS automatically applies SPN credentials if the NFS service is enabled with **Require Kerberos for NFSv4** selected before joining Active Directory.
{{< /hint >}}

Click **Save**, then start the NFS service.

{{< trueimage src="/images/SCALE/Shares/NFSWidgetOptions.png" alt="Unix (NFS) Shares Widget Options" id="Unix (NFS) Shares Widget Options" >}}

Each NFS share also has a toggle to enable or disable that individual share.

{{< hint type=note >}}
The NFS service does not automatically start on boot if all NFS shares are encrypted and locked.
{{< /hint >}}

### Securing NFS Access

NFS shares do not respect permissions set in the SMB share ACL.
Protect the NFS export with proper authentication and authorization controls to prevent unauthorized access by NFS clients.

{{< hint type=caution title="Security Note" >}}
If you are not using Active Directory, NFS access controls rely on client-reported UIDs rather than verified credentials.
NFS without Kerberos has no robust per-user authentication, making it an inherently less secure configuration.
{{< /hint >}}

For Enterprise environments, we recommend joining TrueNAS to an [Active Directory]({{< ref "ConfigAD" >}}) domain before creating the share.
Configure a container (group or organizational unit), Kerberos admin, and user accounts in AD.
This enables verified per-user authentication for NFS clients and is the most secure configuration for multiprotocol access.

## Creating a New Multiprotocol Share

{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

TrueNAS allows you to create the dataset and add a multiprotocol (SMB and NFS) share using the **Add Dataset** screen.
This is the recommended method when creating a multiprotocol share for the first time.

1. Select the parent dataset where you want to add the multiprotocol dataset, then click **Add Dataset**.

2. Enter a name for the dataset.

3. Select **Multiprotocol** from the **Dataset Preset** dropdown.
   The share configuration options display with **Create NFS Share** and **Create SMB Share** preselected.
   The dataset name populates the **SMB Name** field and becomes the name of the SMB and NFS shares.

   {{< trueimage src="/images/SCALE/Datasets/AddMultimodeDataset.png" alt="Adding a Multi-Mode Dataset and Share" id="Adding a Multi-Mode Dataset and Share" >}}

4. (Optional) Click **Advanced Options** to customize other dataset settings such as quotas, compression level, encryption, and case sensitivity.
   See [Creating Datasets]({{< ref "/SCALE/Datasets/ManagingDatasets#creating-a-dataset" >}}) for more information on adding and customizing datasets.

5. Click **Save**.
   TrueNAS creates the dataset and the SMB and NFS shares.

TrueNAS applies the same settings as the **Multi-Protocol Share** option in **Purpose** on the **Advanced Options** for the **Add SMB** screen.
To modify share settings after saving, go to **Shares**, click <span class="material-icons">more_vert</span> on the share, select **Edit**, and click **Advanced Options**.

After adding the dataset, [edit the dataset ACL](#adjusting-the-dataset-acl) to configure permissions.

## Adding Multiprotocol Access to an Existing Dataset or NFS Share

If you have an existing dataset or NFS share and want to add Windows SMB access, use this method.
Adding a multiprotocol share from the **Add SMB** screen configures the SMB share with the correct settings for multiprotocol interoperability — including for paths that are also accessed by local processes, containers, or FTP.
If the dataset does not yet have an NFS share, complete steps 6–8 below to create one after saving the SMB share.

To create a share and a dataset from the **Add SMB** share screen, go to **Shares**, and click **Add** on the **Windows (SMB) Shares** widget to open the **Add SMB** screen.

1. Enter or browse to select the parent dataset where you want to add the share dataset, then click **Create Dataset**.
   Enter a name for the dataset/share, then click **Create Dataset**. The **Path** field populates with the path to the dataset, and the **Name** field populates with the dataset/share name. Both the dataset and the share have the same name.
   
2. Select **Multi-Protocol Shares** on the **Purpose** dropdown list.
   This applies the pre-determined **Other Options** selected on the **Advanced Options** screen.

   {{< trueimage src="/images/SCALE/Shares/EditSMBMultiProtocolShare.png" alt="Edit SMB Purpose" id="Edit SMB Purpose" >}}

   Click **Advanced Options** to modify any settings you want to use.

3. (Optional) Enter a **Description** to help explain the share purpose.

4. Click **Save**.
   TrueNAS prompts you to restart the SMB service.
   Click **Restart SMB Service** to apply the new share configuration immediately, or dismiss the prompt to apply changes later.
   Restarting causes a brief interruption for all connected SMB clients.

5. Configure the ACL when prompted.

If the dataset already has an NFS share, the multiprotocol share is now configured. Skip to [Completing the Share Configuration](#completing-the-share-configuration).

If the dataset does not yet have an NFS share, continue with steps 6–8.

6. Click **Add** on the **UNIX (NFS) Shares** widget to open the **Add NFS** screen.

7. Set the path to the same dataset created for the SMB share.

8. Customize the NFS share to suit your use case, and click **Save**.

## Completing the Share Configuration

After creating the multiprotocol share using either method, complete the following steps.

### Editing the NFS Share

After creating the multiprotocol share, you can customize the NFS share further. Go to **Shares** and edit the NFS share.

1. Select the new share listed on **Unix (NFS) Shares** widget, click on the <span class="material-icons">more_vert</span> icon and then click **Edit**.
   The **Edit NFS** screen opens with the **Basic Options** settings showing.

    {{< trueimage src="/images/SCALE/Shares/EditNFSMultiProtocolShare.png" alt="Edit NFS Multi-Protocol Share" id="Edit NFS Multi-Protocol Share" >}}

2. Enable Kerberos security. Click **Advanced Options**.
    Select **KRB5** from the **Security** dropdown to enable the Kerberos ticket generated when you [joined Active Directory](#securing-nfs-access).

   {{< trueimage src="/images/SCALE/Shares/EditNFSShareAdvancedSecuritySetting.png" alt="Advanced Options Security Settings" id="Advanced Options Security Settings" >}}

    If needed, select **Read-Only** to prohibit writing to the share.

3. Click **Save**.

Start or restart the service when prompted.

### Adjusting the Dataset ACL

After creating the multiprotocol share, adjust the dataset permission or use the SMB file system permissions to match the container and users configured in AD, if applicable.

You can modify dataset permissions from the **Shares** screen using <span class="material-icons">security</span> **Edit Filesystem ACL** to open the [**Edit ACL**](#edit-filesystem-acl-screen) screen.
Select the share row on the widget, then click the security icon to open the dataset ACL editor.

{{< hint type=note >}}
Editing the dataset ACL sets permissions for both the SMB and NFS shares.
{{< /hint >}}

{{< trueimage src="/images/SCALE/Shares/EditMultimodeShareDatasetPermissions.png" alt="Editing Share Dataset ACL" id="Editing Share Dataset ACL" >}}

Or go to **Datasets**, select the dataset row created for the multi-protocol share on the **Datasets** table, then scroll down to the **Permissions** widget for the dataset.
Click **Edit** to open the **Edit ACL** screen.

{{< trueimage src="/images/SCALE/Datasets/EditMultimodeDatasetPermissions.png" alt="Editing Multi-Mode Dataset Permissions" id="Editing Multi-Mode Dataset Permissions" >}}

Check the **Access Control List** to see if the AD group you created is on the list and has the correct permissions.
If not, add this Access Control Entry (ACE) item on the **Edit ACL** screen for the multiprotocol dataset (or each share).

1. Enter **Group** in the **Who** field or use the dropdown list to select **Group**.

2. Type or select the appropriate group in the **Group** field.

3. Verify **Full Control** displays in **Permissions**. If not, select it from the dropdown list.

4. Click **Save Access Control List** to add the ACE item or save changes.

See [Permissions]({{< ref "/SCALE/Datasets/Permissions" >}}) for more information on editing dataset permissions.

After setting the dataset permission, connect to the share.

{{<include file="/static/includes/addcolumnorganizer.md">}}

### Connecting to a Multiprotocol Share

After creating and configuring the shares, connect to the multiprotocol share using either SMB or NFS protocols from a variety of client operating systems, including Windows, Apple, FreeBSD, and Linux/Unix systems.

For more information on accessing shares, see [Mounting the SMB Share]({{< ref "/SCALE/Shares/SMB#mounting-the-smb-share" >}}) and [Connecting to the NFS Share]({{< ref "AddingNFSShares.md#connecting-to-the-nfs-share" >}}).
