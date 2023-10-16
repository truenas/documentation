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
Multiprotocol shares allow clients running different operating systems to access the same data.
This can be particularly useful in environments with a mix of Unix-like systems (which prefer NFS) and Windows systems (which prefer SMB).

It's important to properly configure permissions and access control to ensure security and data integrity when using mixed-mode sharing, [see below](#configure-active-directory-for-nfs-security).
It is also important that NFS clients preserve extended attributes when copying files, or SMB metadata could be discarded in the copy.

## Adding a Multiprotocol Share

Adding a multiprotocol SMB and NFS share to your system involves several steps to add the share and get it working.

1. [Configure Active Directory](#joining-active-directory) and join the TrueNAS SCALE system to your AD domain.
   Configure a container, Kerberos admin, and user accounts in AD.

2. [Set up a dataset](#creating-a-multiprotocol-share-dataset) for the new share with **Share Type** set to **Multiprotocol**.

3. [Create the SMB share](#creating-the-smb-share) with **Purpose** set to **Multi-protocol (NFSv4/SMB) shares**.

4. [Create the NFS share](#creating-the-nfs-share) with **Security** set to **KRB5**.

5. [Start the SMB and NFS services](#starting-the-smb-and-nfs-services) to begin sharing.

After adding the share, [start the service](#starting-the-smb-service) and [mount it](#mounting-the-smb-share) to your other system.

### Joining Active Directory

Mixed-mode SMB and NFS shares greatly simplify data access for client running a range of operating systems.
They also require careful attention to security complexities not present in standard SMB shares.
NFS shares do not evaluate permissions set in the SMB Share ACL.
The NFS admin should protect the NFS export with proper authentication and authorization controls to prevent unauthorized access by NFS clients.

We recommend using [Active Directory]({{< relref "configadscale.md" >}}) to enable Kerberos security for the NFS share.
Configure a container (group or organizational unit), Kerberos admin, and user accounts in AD.

### Creating a Multiprotocol Share Dataset

Before creating a mixed-mode share, create the dataset you want the share to use for data storage.

{{< include file="/content/_includes/ShareDatasetsNotPools.md" >}}

We recommend creating a new dataset with the **Share Type** set to **MULTIPROTOCOL** for the new mixed-mode share.

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

### Creating the SMB Share

To create the Windows SMB share, go to **Shares**.

1. Click on **Windows Shares (SMB)** to select it and then click **Add**. The **Add SMB** configuration screen displays the **Basic Options** settings.

   {{< trueimage src="/images/SCALE/Shares/AddShareBasicOptions.png" alt="Add SMB Basic Options" id="Add SMB Basic Options" >}}

2. Enter the SMB share **Path** and **Name**.

   The **Path** is the location on the local filesystem of the dataset you created for the multiprotocol share.

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

6. Click **Save** to create the share and add it to the **Shares > Windows (SMB) Shares** list.

Enable the SMB service when prompted.

### Creating the NFS Share

### Starting the SMB and NFS Services

NFS Service:
When TrueNAS is already connected to [Active Directory]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}), setting **NFSv4** and **Require Kerberos for NFSv4** also requires a [Kerberos Keytab]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}).
