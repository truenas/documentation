---
title: "Windows Shares (SMB)"
description: "Provides information on SMB shares and instructions on creating a basic share and setting up various specific configurations of SMB shares."
geekdocCollapseSection: true
weight: 50
related: false
aliases:
 - /scale/scaletutorials/shares/smb/addsmbshares/
tags:
- smb
- afp
- shares
---


{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

## About Windows (SMB) Shares

SMB (also known as CIFS) is the native file-sharing system in Windows.
SMB shares can connect to most operating systems, including Windows, Mac OS, and Linux.
TrueNAS can use SMB to share files among single or multiple users or devices.

SMB supports a wide range of permissions, security settings, and advanced permissions (ACLs) on Windows and other systems, as well as Windows Alternate Streams and Extended Metadata.
SMB is suitable for managing and administering large or small pools of data.

TrueNAS uses [Samba](https://www.samba.org/) to provide SMB services.
The SMB protocol has multiple versions. During the SMB session negotiation, a typical SMB client can negotiate the highest supported SMB protocol.
Industry-wide, SMB1 protocol (sometimes referred to as NT1) use is deprecated for security reasons.

{{< include file="/static/includes/SMBShareMSDOSalert.md" >}}

However, most SMB clients support SMB 2 or 3 protocols even when they are not the default.

{{< hint type=note >}}
Legacy SMB clients rely on NetBIOS name resolution to discover SMB servers on a network.
TrueNAS disables the NetBIOS name server (nmbd) by default. Enable it on the **Network > Global Settings** screen if this functionality is required.

Mac OS clients use mDNS to discover SMB servers present on the network. TrueNAS enables the mDNS server (avahi) by default.

Windows clients use [WS-Discovery](https://docs.oasis-open.org/ws-dd/ns/discovery/2009/01) to discover the presence of an SMB server.
You can disable network discovery by default depending on the Windows client version.

Discoverability through broadcast protocols is a convenience feature and is not required to access an SMB server.
{{< /hint >}}

## Sharing Administrator Access

{{< include file="/static/includes/SharingAdminRole.md" >}}

## How do I add an SMB Share?

{{< hint type="info" title="Active Directory and SMB Service" >}}
Verify your Active Directory connections are working and error-free before adding an SMB share.
When an SMB share is configured but not working or is in an error state, AD cannot bind, and TrueNAS cannot start the SMB service.
{{< /hint >}}

Creating an SMB share on your system requires adding the share and then getting it working.

1. [Create the SMB share user account](#creating-the-smb-share-user-account).

   You can manually add user accounts or use directory services like Active Directory or LDAP to provide additional user accounts.
   If setting up an external SMB share, we recommend using Active Directory or LDAP, or at a minimum, synchronizing the user accounts between systems.

2. [Create the SMB share and dataset](#adding-an-smb-share-and-dataset).

   You can create a basic SMB share or a more specific share type with specific feature requirements from the **Add SMB** screen using the [Advanced Options](#configuring-share-advanced-options-settings) instructions before saving the share.

   The **Add Dataset** and the **Add SMB** share screens allow TrueNAS to create a dataset and SMB share from that screen.
   Use either option to create a basic SMB share.
   
   When creating an SMB share that requires customization or is intended for a specific purpose, such as working with Veeam Backup & Restore immutability or a repository for block or fast cloning (requires an Enterprise license), use the **Add SMB** screen presets and advanced options to create the share and dataset for these special SMB shares.
   For more information on Veeam SMB shares, refer to the [Solutions > Integrations](https://www.truenas.com/docs/solutions/integrations/) **Veeam** and **Veeam Immutability** guides.

   When setting up multi-protocol (SMB and NFS) shares, refer to the [Multiprotocol Shares]({{< relref "MixedModeShares.md" >}}) tutorial for configuration instructions.

   This article provides instructions on adding a dataset while adding the share using the **Add SMB** screen

3. [Modify the share permissions](#tuning-the-dataset-acl).

   After adding or modifying the user account for the share, edit the dataset permissions.

4. [Start the service](#starting-the-smb-service) and [mount the share](#mounting-the-smb-share) to your other system.

### Creating SMB Share User Accounts

{{< include file="/static/includes/LocalSMBUser.md" >}}

To add or edit users, go to **Credentials > Users**, then add or edit an existing user to create the SMB share user(s).
Click **Add** to create a new user or as many new user accounts as needed.
Joining TrueNAS to Active Directory creates the user accounts.

Enter the values in each required field, verify **SMB User** is selected, then click **Save**.
For more information on the fields and adding users, see [Creating User Accounts]({{< ref "ManageLocalUsersScale" >}}).

By default, all new users are members of a built-in group called **builtin_users**.
You can use a group to grant access to all users on the server or add more groups to fine-tune permissions for large numbers of users.

{{< expand "Why not just allow anonymous access to the share?" "v" >}}
Anonymous or guest access to the share is possible, but allowing guest access can create a security vulnerability, so it is not recommended for Enterprise customers or systems with more than one SMB share administrator account.
Using a guest account increases the likelihood of unauthorized users gaining access to your data in the SMB share.
Major SMB client vendors are deprecating guest users, partly because signing and encryption are impossible for guest sessions.
{{< /expand >}}

{{< expand "What about LDAP users?" "v" >}}
{{< hint type=important >}}
Support for LDAP **Samba Schema** is deprecated in TrueNAS 22.02 (Angelfish) and removed in 24.10 (Electric Eel).
Migrate legacy Samba domains to Active Directory before upgrading to 24.10 or later.
{{< /hint >}}
{{< /expand >}}

## Adding an SMB Share and Dataset

You can create an SMB share while [creating a dataset on the **Add Dataset** screen]({{< ref "DatasetsSCALE" >}}) or create a dataset and the share using the **Add SMB** share screen.
This article covers adding the dataset using the **Add SMB** share screen.

{{< include file="/static/includes/AppsSMBErrorWarning.md" >}}

{{< include file="/static/includes/ShareDatasetsNotPools.md" >}}

{{< expand "What are ZFS dataset setting defaults?" "v" >}}
TrueNAS creates the ZFS dataset with these settings:

* **ACL Mode** set to **Restricted**
   The **ACL Type** influences the **ACL Mode** setting. When **ACL Type** is set to **Inherit**, you cannot change the **ACL Mode** setting.
   When **ACL Type** is set to **NFSv4**, you can change the **ACL Mode** to **Restricted**.

* **Case Sensitivity** set to **Insensitive**

TrueNAS also applies a default access control list to the dataset.
This default ACL is restrictive and only grants access to the dataset owner and group.
You can modify the ACL later according to your use case.
{{< /expand >}}

To create a basic Windows SMB share and a dataset, go to **Shares**, then click **Add** on the **Windows Shares (SMB)** widget to open the **Add Share** screen.

{{< trueimage src="/images/SCALE/Shares/AddShareBasicOptions.png" alt="Add SMB Basic Options" id="Add SMB Basic Options" >}}

1. Enter or browse to select the SMB share mount path (parent dataset where you want to add a dataset for this share).
   The blank **Path** field populates with the path.
   The **Path** file browser field is the directory tree on the local file system that TrueNAS exports over the SMB protocol.
   
   {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

2. Click **Create Dataset**.
   Enter a name for the dataset in the **Create Dataset** dialog, and then click **Create**.
   The system creates the new dataset and populates the **Name** field with the dataset name.

   The value entered in **Name** becomes the dataset and share name.
   It forms part of the share pathname when SMB clients perform an SMB tree connect.
   Because of how the SMB protocol uses the name, it must be less than or equal to 80 characters.
   Do not use invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6.

   If you change the name, follow the naming conventions for:
   * [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
   * [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea)

3. Select a share type on the **Purpose** dropdown list.
   The share type selected locks or unlocks the pre-determined **Advanced Options** settings for the share.

   To retain control over all the share **Advanced Options** settings, select **Default Share**.

   To create a multi-protocol share (NFSv4/SMB), select **Multi-protocol Share**. This adds the share to the SMB and NFS widgets on the main **Shares** screen.

   To create an alternative to home shares, select **Private Datasets Share**.
   See [Setting Up SMB Home Shares]({{< ref "SMBPrivateDatasetShare" >}}) for more information on replacing this legacy feature with private SMB shares and datasets.

   If creating an external share, select **External Share**, enter the full domain name or IP address, and the share name. Separate the server and share name with the `\` characters. Example: *192.168.0.200\SHARE* in **Remote Path**.

4. (Optional) Enter a **Description** to help explain the purpose or details on how the share is used.
   For example, if for an external share, enter *external share* in the field.
   The description entered shows in the **SMB** table on the **SMB** screen and the **Windows (SMB) Share** widget.

5. Select **Enabled** to allow sharing of this path when the SMB service is activated.
   Leave the checkbox cleared to disable the share without deleting the configuration.

6. (Optional) Click **Advanced Options** to show additional configuration settings.
   Click to configure other advanced settings such as access, audit logging, or settings specific to the type of share selected in **Purpose**.

7. Click **Save** to create the share and add it to the **Shares > Windows (SMB) Shares** list.

Start or restart the SMB service when prompted.

### Configuring Share Advanced Options Settings

A basic SMB share does not need to use the **Advanced Options** settings, but if you set **Purpose** to **Time Machine Share**, **Time Locked Share**, or **Private Dataset Share, or External**, click **Advanced Options** to finish customizing the SMB share settings.

See [SMB Shares Screens]({{< ref "SMBSharesScreens" >}}) for all settings and other possible use cases.

{{< expand "Setting Up Guest Access" "v" >}}
{{< hint type=info >}}
Guest access is not a recommended configuration and adds security vulnerabilities!
{{< /hint >}}

To allow guest access to the share, select **Private Dataset Share**.
The privileges granted are the same as those for a guest account.
Windows 10 version 1709 and Windows Server version 1903 disable guest access by default.
Additional client-side configuration is required to provide guest access to these clients.

* **Mac OS clients** - Prevents attempts to connect as a user that does not exist in TrueNAS and does not automatically connect as the guest account.

* **Connect As: Guest** - Allows a guest to log into the Mac OS with the guest account.
  See the [Apple documentation](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac) for more details.

If setting up guest access with read-only permissions, see the information in [Adding a New Share Group](#adding-a-new-share-group).
If the share is nested under parent datasets, see [Using the Traverse Permission](#using-the-traverse-permission).
{{< /expand >}}
{{< expand "Setting Up Read or Write Access" "v" >}}
To prohibit writes to the share, select **Export Read-Only**.

Select **Access Based Share Enumeration** to restrict share visibility for users with read or write access to the share.
See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page.
{{< /expand >}}
<!-- comment out legacy content
{{< expand "Setting Up Host Allow and Host Deny" "v" >}}
Use the **Host Allow** and **Host Deny** options to allow or deny specific host names and IP addresses.

Use the **Hosts Allow** field to enter a list of allowed IP addresses.
Separate entries by pressing <kbd>Enter</kbd>.
{{< hint type="Warning" title="Setting Host Allow" >}}
Entering values in the **Host Allow** restricts access to only the addresses entered into this list!
This list can break UI access for all other IP or host name entries.
{{< /hint >}}
You can find a more detailed description with examples [here](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html#HOSTSALLOW).
Use the **Hosts Deny** field to enter a list of denied host names or IP addresses. Separate entries by pressing <kbd>Enter</kbd>.

**Hosts Allow** and **Hosts Deny** work together to produce different situations:
* Leaving both **Hosts Allow** and **Hosts Deny** free of entries allows any host to access the SMB share.
* Adding entries to the **Hosts Allow** list but not the **Hosts Deny** list allows only the hosts on the **Hosts Allow** list to access the share.
* Adding entries to the **Hosts Deny** list but not the **Hosts Allow** list allows all hosts not on the **Hosts Deny** list to access the share.
* Adding entries to both a **Hosts Allow** and **Hosts Deny** list allows all hosts on the **Hosts Allow** list to access the share and allows hosts not on the **Hosts Allow** or **Hosts Deny** list to access the share.
{{< /expand >}} -->
{{< expand "Apple Filing Protocol (AFP) Compatibility" "v" >}}
AFP shares are deprecated and not available in TrueNAS.

To customize your SMB share to work with a migrated AFP share or with your Mac OS, use the share option on the **Purpose** dropdown list and the **Advanced Options** settings provided for these use cases:

* **Time Machine Share** enables [Apple Time Machine](https://support.apple.com/en-us/HT201250) backups on this share.

**Use Apple-style Character Encoding**, listed under **Other Options** for all share types except **Time Machine Share** and **External Share**, converts NTFS illegal characters like the Mac OS SMB clients do.
By default, Samba uses a hashing algorithm for NTFS illegal characters.
{{< /expand >}}
{{< expand "Private SMB Datasets and Shares" "v" >}}
Used to set up an alternative to the legacy Home Shares function, select **Private Dataset Share** on the **Purpose** dropdown list, and customize settings listed under **Other Options**.

This allows you to add private datasets and shares for individual users, and is an alternate way to create home shares for them.
See [Setting Up SMB Home Shares]({{< ref "SMBPrivateDatasetShare" >}}) for more information.
{{< /expand >}}
{{< expand "Enabling SMB Audit Logging" "v" >}}
To enable SMB audit logging, from either the **Add SMB** or **Edit SMB** screens, click **Advanced Options**, scroll down to **Audit Logging**, and select **Enable**.
{{< /expand >}}

## Tuning ACLs for SMB Shares

There are two levels to set SMB share permissions: at the share or for the dataset associated with the share.
See [Managing SMB Shares]({{< ref "ManageSMBShares" >}}) for more information on these options.

See [Permissions]({{< ref "PermissionsScale" >}}) for more information on dataset permissions.

### Tuning the Share ACL

{{< include file="/static/includes/ShareACLPermissions.md" >}}

### Tuning the Dataset (Filesystem) Permissions

{{< include file="/static/includes/FilesystemACLPermissions.md" >}}

#### Changing the built-in-user Group Permissions

{{< include file="/static/includes/ChangeBuiltin-UserACL.md" >}}

#### Adding a New Share Group

{{< include file="/static/includes/AddNewSMBShareGroupAndACE.md" >}}

#### Using the Traverse Permission

{{< include file="/static/includes/UsingTraversePermission.md" >}}

## Starting the SMB Service

To connect to an SMB share, start the SMB service.

After adding a new share, TrueNAS prompts you to start or restart the SMB service.

You can also start the service from the **Windows (SMB) Share** widget or on the **System > Services** screen from the **SMB** service row.

### Starting the Service Using the Windows SMB Share

From the **Sharing** screen, click on the **Windows (SMB) Shares** <span class="material-icons">more_vert</span> to display the service options, which are **Turn Off Service** if the service is running or **Turn On Service** if the service is not running.

{{< trueimage src="/images/SCALE/Shares/SMBShareOptions.png" alt="SMB Service Options" id="SMB Service Options" >}}

Each SMB share on the list also has a toggle to enable or disable the service for that share.

### Starting the Service Using System Settings

To make SMB share available on the network, go to **System > Services** and click the **SMB** toggle.
Set **Start Automatically** if you want the service to activate when TrueNAS boots.

## Configuring the SMB Service

Configure the SMB service by clicking **Config Service** from the <span class="material-icons">more_vert</span> dropdown menu on the **Windows (SMB) Shares** widget header or by clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i> on the **Services** screen.
Unless you need a specific setting or are configuring a unique network environment, we recommend using the default settings.

## Mounting the SMB Share

The instructions in this section cover mounting the SMB share on a system with the following operating systems.

{{< expand "Mounting on a Linux System" "v" >}}
Verify that your Linux distribution has the required CIFS packages installed.

Create a mount point with the `sudo mkdir /mnt/smb_share` command.

Mount the volume with the `sudo mount -t cifs //computer_name/share_name /mnt/smb_share` command.

If your share requires user credentials, add the switch `-o username=` with the username after `cifs` and before the share address.
{{< /expand >}}

{{< expand "Mounting on a Windows System" "V" >}}
To permanently mount the SMB share in Windows, map a drive letter in the computer for the user to the TrueNAS IP and share name.
Select a drive letter from the bottom of the alphabet rather than from the top to avoid assigning a drive dedicated to some other device.
The example below uses *Z*.
Open the command line and run the following command with the appropriate drive letter, TrueNAS system name or IP address, and the share name.

<code>net use <i>Z</i>: &bsol;&bsol;<i>TrueNAS_name</i>&bsol;<i>share_name</i> /PERSISTENT:YES</code>

Where:
* *Z* is the drive letter to map to TrueNAS and the share
* *TrueNAS_name* is either the host name or the system IP address
* *share_name* is the name given to the SMB share

To temporarily connect to a share, open a Windows File Explorer window, type <code>&bsol;&bsol;<i>TrueNAS_name</i>&bsol;<i>share_name</i></code> and then enter the user credentials to authenticate with to connect to the share.
Windows remembers the user credentials, so each time you connect, it uses the same authentication credentials unless you restart the system.
After restarting, you are prompted to enter the authentication credentials again.
{{< /expand >}}

{{< expand "Mounting on an Apple System" "v" >}}
Before you begin this process, have the username and password for the user assigned to the pool or the credentials for the guest if the share has guest access ready.

Open **Finder > Go > Connect To Server**
Enter the SMB address as follows: <code>smb://<i>192.168.1.111</i></code>.

Input the username and password for the user assigned to that pool or a guest user if the share has guest access.

For further tuning in macOS, Apple provides some enterprise-specific pointers in their [Adjust SMB browsing behavior in macOS](https://support.apple.com/en-us/102064) article.

{{< /expand >}}

{{< expand "Mounting on a FreeBSD System" "v" >}}
Mounting on a FreeBSD system involves creating the mount point and mounting the volume.

Create a mount point using the `sudo mkdir /mnt/smb_share` command.

Mount the volume using the `sudo mount_smbfs -I computer_name\share_name /mnt/smb_share` command.
{{< /expand >}}

## Setting up an External SMB Share

External SMB shares are essentially redirects to shares on other systems.
Administrators might want to use this when managing multiple TrueNAS systems with SMB shares, and if they do not want to keep track of which shares are on which boxes for clients.
This feature allows admins to see and connect to any TrueNAS system with external shares active.

Create the SMB share on another TrueNAS remote server (for example, *system1*), as described in [Adding an SMB Share](#adding-an-smb-share) above.

We recommend using Active Directory or LDAP when creating user accounts, but at a minimum, synchronize user accounts between the system with the share (*system1*) and on the TrueNAS system where you set up the external share (for example, *system2*).

On *system2* (the local system), select **External Share**, enter the full domain name or IP address, and the share name. Separate the server and share name with the `\` characters. Example: *192.168.0.200\SHARE* in **Remote Path**.

Click **Save** to add the share.

Repeat the *system2* instructions above on *system1* to see the SMB shares on each system.

{{< trueimage src="/images/SCALE/Shares/SetUpExternalSMBShare.png" alt="Set Up Another External SMB Share" id="Set Up Another External SMB Share" >}}

Repeat for each TrueNAS system with SMB shares to add as an external share.

{{< expand "Setting Up an External Share with an Earlier Release" "v" >}}

When setting up an external share between TrueNAS systems are on different releases, for example, one system is on 25.04 and the other is on the latest release of 25.10, follow the external share instructions for each release.

Set the TrueNAS 25.04 system SMB **Purpose** to the default preset, leave the default settings associated with this share as is, and then enter the redirect path to share on the 25.10 system as **EXTERNAL:*ipaddress\sharename*** in the **Path** field. For example, *EXTERNAL:10.220.3.33\testshare2*.
Be aware, changing the path also changes the SMB share name so verify the share name is set to the desired or existing share name and not renamed to the redirect string in **Path**.

Set the TrueNAS 25.10 system SMB **Purpose** to **External Share**, and then enter the path to the share on the 25.04 system as *ipaddress*\*sharename* in the **Remote Path** field. For example, *10.220.1.34*\*testshare*.

Add descriptions to each share that identify the purpose of the share.
The description shows on the **Windows (SMB) Shares** widget and on the **SMB** screen.

**Save** changes made to the share.

{{< /expand >}}

<div class="noprint">

## SMB Shares Contents

These tutorials describe creating and managing various specific configurations of SMB shares.

{{< children depth="2" description="true" >}}

</div>
