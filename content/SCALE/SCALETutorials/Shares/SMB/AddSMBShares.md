---
title: "Adding SMB Shares"
description: "Provides instructions to add an SMB share, start the service, and mount the share."
weight: 10
aliases:
tags:
- scalesmb
- scaleafp
- scaleshares
---

{{< toc >}}


{{< include file="/_includes/SMBShareMSDOSalert.md" type="page" >}}

## About Windows (SMB) Shares
SMB (also known as CIFS) is the native file-sharing system in Windows.
SMB shares can connect to most operating systems, including Windows, MacOS, and Linux.
TrueNAS can use SMB to share files among single or multiple users or devices.

SMB supports a wide range of permissions, security settings, and advanced permissions (ACLs) on Windows and other systems, as well as Windows Alternate Streams and Extended Metadata.
SMB is suitable for managing and administering large or small pools of data.

TrueNAS uses [Samba](https://www.samba.org/) to provide SMB services.
The SMB protocol has multiple versions. An SMB client typically negotiates the highest supported SMB protocol during SMB session negotiation. 
Industry-wide, SMB1 protocol (sometimes referred to as NT1) usage is [being deprecated]({{< relref "/CORE/CoreSecurityReports/SMB1Advisory.md" >}}) for security reasons.
However, most SMB clients support SMB 2 or 3 protocols, even when not default.

{{< hint type=note >}}
Legacy SMB clients rely on NetBIOS name resolution to discover SMB servers on a network. 
TrueNAS disables the NetBIOS Name Server (nmbd) by default. Enable it on the **Network > Global Settings** screen if you require this functionality.

MacOS clients use mDNS to discover SMB servers present on the network. TrueNAS enables the mDNS server (avahi) by default.

Windows clients use [WS-Discovery](https://docs.oasis-open.org/ws-dd/ns/discovery/2009/01) to discover the presence of SMB servers, but you can disable network discovery by default depending on the Windows client version.

Discoverability through broadcast protocols is a convenience feature and is not required to access an SMB server.
{{< /hint >}}

## Adding an SMB Share
Adding an SMB share to your system involves several steps to add the share and get it working.

1. [Set up the storage](#adding-an-smb-share-dataset) for the new share. 

2. [Create local user accounts](#creating-local-user-accounts).
   You can also use directory services like Active Directory or LDAP to provide additional user accounts.

3. [Modify the dataset ACL](#tuning-the-dataset-acl). After adding or modifying local users, edit the dataset permissions.

4. [Create the SMB share](#creating-the-smb-share). 
   You can create a basic SMB share, or for more specific share types or feature requirements, use the [Advanced Options](#configuring-share-advanced-options-settings) instructions before saving the share.

After adding the share, [start the service](#starting-the-smb-service) and [mount it](#mounting-the-smb-share) to your other system.

### Adding an SMB Share Dataset

Before creating the SMB share, create the dataset you want the share to use for data storage.

We recommend creating a new dataset with the **Share Type** set to **SMB** for the new SMB share. 
{{< expand "What does this do?" "v" >}}
TrueNAS creates the ZFS dataset with these settings:

 * **ACL Mode** set to **Restricted**
   The **ACL Type** influences the **ACL Mode** setting. When **ACL Type** is set to **Inherit**, you cannot change the **ACL Mode** setting.
   When **ACL Type** is set to **NFSv4**, you can change the **ACL Mode** to **Restricted**.

 * **Case Sensitivity** set to **Insensitive**

 TrueNAS also applies a default access control list to the dataset.
 This default ACL is restrictive and only grants access to the dataset owner and group.
 You can modify the ACL later according to your use case.
{{< /expand >}}

{{< include file="/content/_includes/CreateDatasetSCALE.md" type="page" >}}

### Creating Local User Accounts
Use **Credentials > Local Users** to add new users to your TrueNAS. 

By default, all new local users are members of a built-in SMB group called **builtin_users**. 
{{< expand "Click here for more information" "v" >}}
For more information on the **builtin_users** group, go to **Credentials > Local Users** and click **Toggle Built-In Users** at the top right of the screen.
Scroll down to the **smbguest** user and click on the name. 
Click **Edit** to view the **Edit User** screen. The **Auxiliary Group** field displays the **builtin_user** group. 
{{< /expand >}}
You can use the group to grant access to all local users on the server or add more groups to fine-tune permissions to large numbers of users.
{{< hint type=note >}} 
You cannot access SMB shares using the root user, TrueNAS built-in user accounts, or those without the **smb** flag.
{{< /hint >}}

{{< expand "Why not just allow anonymous access to the share?" "v" >}}
Anonymous or guest access to the share is possible, but it is a security vulnerability. 
Major SMB client vendors are deprecating it, partly because signing and encryption are impossible for guest sessions.
{{< /expand >}}
{{< expand "What about LDAP users?" "v" >}}
If you want LDAP server users to access the SMB share, go to **Credentials > Directory Services**. 
If you configured an LDAP server, select the server and click **Edit** to display the **LDAP** configuration screen. 
If not configured, click **Configure LDAP** to display the **LDAP** configuration screen.
Click **Advanced Options** and select **Samba Schema (DEPRECATED - see the help text**). 
{{< hint type=important >}}
Only enable LDAP authentication for the SMB share if you require it. Your LDAP server must have Samba attributes.
Support for **Samba Schema** is [officially deprecated in Samba 4.13](https://www.samba.org/samba/history/samba-4.13.0.html). Samba Schema is no longer in Samba after 4.14.
Users should begin upgrading legacy Samba domains to Samba AD domains.
{{< /hint >}}
Local TrueNAS user accounts can no longer access the share.
{{< /expand >}}

### Tuning the Dataset ACL

After creating a dataset and accounts, you need to investigate your access requirements and adjust the dataset ACL to match. 
Many home users typically add a new ACL entry that grants **FULL_CONTROL** to the **builtin_users** group with the flags set to **INHERIT**.

{{< expand "Click here for instructions" "v" >}}
To change or add permissions for the **builtin_users** group, go to **Datasets**: 
1. Click on the name of the dataset you created for the SMB share to use.  

2. Scroll down to the **Permissions** widget. Click **Edit** to open the **Edit ACL** screen.

3. Check the **Access Control List** to see if this user is on the list and has the correct permissions. If not, add this ACE item.
   
   ![EditACLBuiltin_UserGroupForSMBShare](/images/SCALE/22.12/EditACLBuiltin_UserGroupForSMBShare.png "Updating SMB Builtin_User ACL Permissions")
   
   a. Enter **Group** in the **Who** field or use the dropdown list to select **Group**.

   b. Begin typing **builtin_users** in the **Group** field to display a filtered list of groups you can select from, then select **builtin_users**.

   c. Verify **Full Control** displays in **Permissions**. If not, select it from the dropdown list.

   d. Click **Save Access Control List** to add the ACE item or save changes.

{{< hint type=note >}}
If you want to allow users to move through directories within an SMB share without having read or write privileges, you must use the **Traverse** permission. Use **Traverse** if you intend to have nested groups within an SMB share with different access levels.
{{< /hint >}}

See [Permissions]({{< relref "PermissionsScale.md" >}}) for more information on editing dataset permissions.
{{< /expand >}}

{{< hint type=note >}} 
You cannot access SMB shares with the root user. Always change SMB dataset ownership to the intended SMB user. 
{{< /hint >}}

### Creating the SMB Share

To create a basic Windows SMB share, go to **Shares**.

1. Click on **Windows Shares (SMB)** to select it and then click **Add**. The **Add SMB** configuration screen displays the **Basic Options** settings.
   
   ![AddShareBasicOptions](/images/SCALE/23.10/AddShareBasicOptions.png "Add SMB Basic Options")

2. Enter the SMB share **Path** and **Name**. 

   The **Path** is the directory tree on the local file system that TrueNAS exports over the SMB protocol. 

   The **Name** is the SMB share name, which forms part of the share pathname when SMB clients perform an SMB tree connect. 
   Because of how the SMB protocol uses the name, it must be less than or equal to 80 characters. It cannot have invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6. 
   If you do not enter a name, the share name becomes the last component of the path.
   If you change the name, follow the naming conventions for:
   * [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
   * [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea) 

3. (Optional) Select a preset from the **Purpose** dropdown list to apply and lock or unlock pre-determined **Advanced Options** settings for the share.
   To retain control over all the share **Advanced Options** settings, select **No presets**.

4. (Optional) Enter a **Description** to help explain the share purpose.

5. Select **Enabled** to allow sharing of this path when the SMB service is activated. 
   Leave it cleared if you want to disable the share without deleting the configuration.

6. Click **Save** to create the share and add it to the **Shares > Windows (SMB) Shares** list.

Enable the SMB service when prompted.

### Configuring Share Advanced Options Settings
For a basic SMB share, you do not need to use the **Advanced Options** settings, but if you set **Purpose** to **No Presets**, click **Advanced Options** to finish customizing the SMB share for your use case.

The following are possible use cases, but for all settings, see [SMB Shares Screens]({{< relref "SMBSharesScreens.md" >}}).

#### Enabling ACL Support
To add ACL support to the share, select **Enable ACL**, and then see [Managing SMB Shares]({{< relref "ManagingSMBShares.md" >}}) for more on configuring permissions for the share and the file system.

#### Setting Up Guest Access
If you want to allow guest access to the share, select **Allow Guest Access**. 
{{< expand "Click here for more information" "v" >}}
The privileges are the same as the guest account. 
Windows 10 version 1709 and Windows Server version 1903 disable guest access by default. 
Additional client-side configuration is required to provide guest access to these clients.

* **MacOS clients**: Attempting to connect as a user that does not exist in TrueNAS *does not* automatically connect as the guest account. 

* **Connect As: Guest** Specifically choose this option in macOS to log in as the guest account. 
  See the [Apple documentation](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac) for more details.
{{< /expand >}}

#### Setting Up Read or Write Access
To prohibit writes to the share, select **Export Read-Only**.

To restrict share visibility to users with read or write access to the share, select **Access Based Share Enumeration**. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page.

#### Setting Up Host Allow and Host Deny
Use the **Host Allow** and **Host Deny** options to allow or deny specific host names and IP addresses.
{{< expand "Click here for more information" "v" >}}
Use the **Hosts Allow** field to enter a list of allowed hostnames or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. You can find a more detailed description with examples [here](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html#HOSTSALLOW).
Use the **Hosts Deny** field to enter a list of denied hostnames or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. 

**Hosts Allow** and **Hosts Deny** work together to produce different situations:
* If neither **Hosts Allow** nor **Hosts Deny** contains an entry, any host can access the SMB share.
* If you create a **Hosts Allow** list, but no **Hosts Deny** list, the share only allows hosts on the **Hosts Allow** list.
* If you create a **Hosts Deny** list, but no **Hosts Allow** list, the share allows all hosts not on the **Hosts Deny** list.
* If you create both a **Hosts Allow** and **Hosts Deny** list, the share allows all hosts on the **Hosts Allow** list. The share also allows hosts not on the **Hosts Allow** or **Hosts Deny** list.
{{< /expand>}}

#### Apple Filing Protocol (AFP) Compatibility

AFP shares are deprecated and not available in SCALE. To customize your SMB share to work with a migrated AFP share or with your MacOS, use the **Advanced Options** settings provided for these use cases.
{{< expand "Click here for more information" "v" >}}
**Time Machine** enables [Apple Time Machine](https://support.apple.com/en-us/HT201250) backups on this share. 

**Legacy AFP Compatibility** controls how the SMB share reads and writes data. Leave unset for the share to behave like a standard SMB share. Only set this when the share originated as an AFP sharing configuration. Pure SMB shares or macOS SMB clients do not require legacy compatibility. 

**Use Apple-style Character Encoding** converts NTFS illegal characters in the same manner as MacOS SMB clients. By default, Samba uses a hashing algorithm for NTFS illegal characters. 
{{< /expand >}}

## Starting the SMB Service
To connect to an SMB share, you must start the related system service. 
You can start the service from the **Windows SMB Share** header on the **Sharing** screen or in **System Settings > Services**.

### Starting the Service Using the Windows SMB Share
From the **Sharing** screen, click on the **Windows (SMB) Shares** <span class="material-icons">more_vert</span> to display the service options, which are **Turn Off Service** if the service is running or **Turn On Service** if the service is not running.

![SharingSMBServicesActionOptions](/images/SCALE/22.02/SharingSMBServicesActionOptions.png "SMB Service Options")

Each SMB share on the list also has a toggle to enable or disable the service for that share.   

### Starting the Service Using System Settings
To make SMB share available on the network, go to **System Settings > Services** and click the toggle for **SMB**.
Set **Start Automatically** if you want the service to activate when TrueNAS boots.

### Service Configuration
Configure the SMB service by clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.
Unless you need a specific setting or are configuring a unique network environment, we recommend using the default settings.

## Mounting the SMB Share
The instructions in this section cover mounting the SMB share on a system with the following operating systems.

### Mounting on a Linux System
Verify that your Linux distribution has the required CIFS packages installed.
{{< expand "Click here for more information" "v" >}}
Create a mount point: `sudo mkdir /mnt/smb_share`.

Mount the volume. `sudo mount -t cifs //computer_name/share_name /mnt/smb_share`.

If your share requires user credentials, add the switch `-o username=` with your username after `cifs` and before the share address.
{{< /expand >}}

### Mounting on a Windows System
Have the information on the Windows drive letter, computer name, and share name ready before you start.
{{< expand "Click here for more information" "v" >}}
To mount the SMB share to a drive letter on Windows, open the command line and run the following command with the appropriate drive letter, computer name, and share name.

```net use Z: \\computer_name\share_name /PERSISTENT:YES```
{{< /expand >}}

### Mounting on an Apple System
Have the user name and password for the user assigned to the pool or for the guest if the share has guest access ready before you begin.
{{< expand "Click here for more information" "v" >}}
Open **Finder > Go > Connect To Server**
Enter the SMB address: `smb://192.168.1.111`.

Input the username and password for the user assigned to that pool or guest if the share has guest access.
{{< /expand >}}

### Mounting on a FreeBSD System
Mounting on a FreeBSD system involves creating the mount point, then mounting the volume.
{{< expand "Click here for more information" "v" >}}
Create a mount point: `sudo mkdir /mnt/smb_share`.

Mount the volume. `sudo mount_smbfs -I computer_name\share_name /mnt/smb_share`.
{{< /expand >}}

{{< taglist tag="scalesmb" limit="10" >}}
{{< taglist tag="scaleafp" limit="10" title="Related AFP Articles" >}}
