---
title: "Managing SMB Shares"
description: "Provides information on how to manage Server Message Block (SMB) shares on your TrueNAS."
weight: 10
tags:
- coresmb
---

{{< toc >}}

## Share Management

After creating the SMB share, additional management options are available by going to **Sharing > Windows Shares (SMB)** and clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> for a share entry:

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Edit** | Opens the [share creation screen]({{< relref "/CORE/CORETutorials/Sharing/SMB/SMBShare.md" >}}) to reconfigure the share or disable it. |
| **Edit Share ACL** | Opens a screen to configure an Access Control List (ACL) for the share. The default is open. |
{{< /truetable >}}

**Edit Share ACL**  
* This is separate from file system permissions, and applies at the level of the entire SMB share.
* Permissions defined here are not interpreted by clients of other file sharing protocols.
* Permissions defined here are not interpreted by other SMB shares. Even if the other SMB shares export the same share **Path** value.
* Enabling **Access Based Share Enumeration** uses this ACL to determine the browse list.

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Edit Filesystem ACL**| Opens a screen to configure an Access Control List (ACL) for the path defined in the share **Path**. |
| **Delete** | Remove the share configuration from TrueNAS. Shared data is unaffected. |
{{< /truetable >}}

## Configure Share ACL

To see the share ACL options, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> > **Edit Share ACL**.

![EditShareACL](/images/CORE/12.0/SharingSMBShareACL.png "Share ACL Options")>

The **Share Name** is shown, but cannot be changed.
**ACL Entries** are listed as a block of settings.
Click **ADD** to register a new entry.

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **SID** | Who this ACL entry (ACE) applies to, shown as a [Windows Security Identifier](https://docs.microsoft.com/en-us/windows/win32/secauthz/security-identifiers). Either a **SID** or a **Domain** with **Name** is required for the ACL. |
| **Domain** | Enter a domain for the user **Name**. Required when a **SID** is not entered. Local users have the SMB server NetBIOS name: *truenas\\smbusers*. |
| **Permission** | Dropdown list of predefined permission combinations:<br> Select **Read** for read access and execute permission on the object (RX).<br> Select **Change** for read access, execute permission, write access, and delete object (RXWD).<br> Select **Full** for read access, execute permission, write access, delete object, change Permissions, and take ownership (RXWDPO).<br><br>For more details, see [smbacls(1)](https://www.samba.org/samba/docs/current/man-html/smbcacls.1.html). |
| **Name** | Enter the name of who this ACL entry applies to, shown as a user name. Requires adding the user **Domain**. |
| **Type** | Select from the dropdown list how permissions are applied to the share. Select **Allowed** to deny all permissions by default except those that are manually defined. Select **Denied** to allow all permissions by default except those that are manually defined. |
{{< /truetable >}}

Click **SAVE** to store the share ACL and apply it to the share immediately.

## Configure File System ACL

Click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> **> Edit Filesystem ACL** to quickly return to **Storage > Pools** and edit the dataset ACL.

![DatasetACLEdit](/images/CORE/12.0/StoragePoolsEditACLOwner.png "Dataset Permissions Options")

This ACL defines the user accounts or groups that own or have specific [permissions]({{< relref "/CORE/CORETutorials/Storage/Pools/Permissions.md" >}}) to the shared dataset.
The **User** and **Group** values show which accounts own, or have full permissions to the dataset.
Change the default settings to your preferred primary account and group. Select the **Apply** checkboxes before saving any changes.

### ACL Presets 

To rewrite the current ACL with a standardized preset, click **SELECT AN ACL PRESET** and choose an option:

{{< expand "SaveConsoleLog" >}}
{{< expand "Open" >}}
Has three entries:
* **owner@** has full dataset control.
* **group@** has full dataset control.
* All other accounts can modify the dataset contents.
{{< /expand>}}
{{< expand "Restricted" >}}
Has two entries:
* **owner@** has full dataset control.
* **group@** can modify the dataset contents.
{{< /expand >}}
{{< expand "Home" >}}
Has three entries:
* **owner@** has full dataset control.
* **group@** can modify the dataset contents.
* All other accounts can traverse through the dataset.
{{< /expand >}}
{{< /expand >}}


### Adding ACL Entries (ACEs)

To define permissions for a specific user account or group, click **ADD ACL ITEM**. Open the **Who** dropdown list, select **User** or **Group**, and select a specific user or group account. Define the settings for the account. Define the permissions to apply to that account. For example, to allow the *tmoore* user permission to view dataset contents but not make changes, define the **ACL Type** as **Allow**. Define **Permissions** for this user as **Read**.  

![ExampleACE](/images/CORE/12.0/StoragePoolsEditACLExample.png "Sample ACE")

{{< taglist tag="coresmb" limit="10" >}}
