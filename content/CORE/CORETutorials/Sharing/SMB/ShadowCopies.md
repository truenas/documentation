---
title: "Shadow Copies"
description: "Describes how to configure shadow copies on TrueNAS CORE."
weight: 30
aliases: /core/sharing/smb/shadowcopies/
tags:
- coresmb
---

[Shadow Copies](https://docs.microsoft.com/en-us/windows-server/storage/file-server/volume-shadow-copy-service), also known as the Volume Shadow Copy Service (VSS) or Previous Versions, is a Microsoft service for creating volume snapshots.
Shadow copies can be used to restore previous versions of files from within Windows Explorer.

By default, all ZFS snapshots for a dataset underlying an SMB share path are presented to SMB clients through the volume shadow copy service or are accessible directly with SMB when the hidden ZFS snapshot directory is located within the path of the SMB share.

There are a few caveats about shadow copies to be aware of before activating the feature in TrueNAS:

* When the Windows system is not fully patched to the latest service pack, Shadow Copies might not work. 
  If no previous versions of files to restore are visible, use Windows Update to ensure the system is fully up-to-date.

* Shadow copy support only works for ZFS pools or datasets.

* Appropriate permissions must be configured on the pool or dataset shared by SMB.

* Users cannot use an SMB client to delete shadow copies. Instead, the administrator uses the TrueNAS web interface to remove snapshots. 
  Shadow copies can be disabled for an SMB share by clearing the checkmark from **Enable shadow copies** for the SMB share. 
  This does not prevent access to the hidden <file>.zfs/snapshot</file> directory for a ZFS dataset when the directory is located within the path for an SMB share.
  
To enable Shadow Copies, go to **Sharing > Windows Shares (SMB)** and **Edit** an existing share.
Open the **Advanced Options**, find the **Other Options** and select **Enable Shadow Copies**.

![SMBShadowCopy](/images/CORE/12.0/SharingSMBAddAdvanced.png "Enabling Shadow Copies")

{{< expand "Windows 10 v2004 Issue" "v" >}}
Some users have experienced issues in the Windows 10 v2004 release where network shares can't be accessed. The problem appears to come from a bug in <file>gpedit.msc</file>, the Local Group Policy Editor. Unfortunately, setting the **Allow insecure guest logon** flag value to **Enabled** in **Computer Configuration > Administrative Templates > Network > Lanman Workstation** appears to have no effect on the configuration.

To work around this issue, edit the Windows registry. Use **Regedit** and go to **HKLM\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters**.
The **DWORD AllowInsecureGuestAuth** is an incorrect value: **0x00000000**. Change this value to **0x00000001** (Hexadecimal 1) to allow adjusting the settings in <file>gpedit.msc</file>.
You can apply this to a fleet of Windows machines with a Group Policy Update.
{{< /expand >}}

{{< taglist tag="coresmb" limit="10" >}}
