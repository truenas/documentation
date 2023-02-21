---
title: "Using SMB Shadow Copy"
description: "This article provides information on SMB share shadow copies, enbling shadow copies, and resolving an issue with Microsoft Windows 10 v2004 release."
weight: 30
aliases: 
tags:
- scalesmb
---

{{< toc >}}

**Enable Shadow Copies** exports ZFS snapshots as [Shadow Copies](https://docs.microsoft.com/en-us/windows/win32/vss/shadow-copies-and-shadow-copy-sets) for Microsoft Volume Shadow Copy Service (VSS) clients. 

## About SMB Shadow Copies

[Shadow Copies](https://docs.microsoft.com/en-us/windows-server/storage/file-server/volume-shadow-copy-service), also known as the Volume Shadow Copy Service (VSS) or Previous Versions, is a Microsoft service for creating volume snapshots.
You can use shadow copies to restore previous versions of files from within Windows Explorer.

By default, all ZFS snapshots for a dataset underlying an SMB share path are presented to SMB clients through the volume shadow copy service or are accessible directly with SMB when the hidden ZFS snapshot directory is within the SMB share path.

Before you activate Shadow Copies in TrueNAS, there are a few caveats:

* Shadow Copies might not work if you haven't updated the Windows system to the latest service pack. 
  If previous versions of files to restore are not visible, use Windows Update to ensure the system is fully up-to-date.

* Shadow Copies support only works for ZFS pools or datasets.

* You must configure SMB share dataset or pool permissions appropriately. 

## Enabling Shadow Copies

To enable shadow copies, go to **Shares > Windows (SMB) Shares** and click **Windows (SMB) Shares <span class="material-icons">launch</span>** launch icon to display the list view **Sharing > SMB** screen.

1. Click the <span class="material-icons">more_vert</span> for the share you want to change, and then click **Edit**. The **Edit SMB** screen displays.

2. Scroll down to the bottom and click **Advanced Options**.

3. Scroll down to **Other Options** and select **Enable Shadow Copies**.

4. Click **Save**

{{< expand "Windows 10 v2004 Issue" "v" >}}
Some users might experience issues in the Windows 10 v2004 release where they cannot access network shares. 
The problem appears to come from a bug in <file>gpedit.msc</file>, the Local Group Policy Editor. 
Unfortunately, setting the **Allow insecure guest logon** flag value to **Enabled** in **Computer Configuration > Administrative Templates > Network > Lanman Workstation** in Windows does not affect the configuration.

To work around this issue, edit the Windows registry. 
Use **Regedit** and go to **HKLM\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters**.
The **DWORD AllowInsecureGuestAuth** is an incorrect value: *0x00000000*. Change this value to **0x00000001** (Hexadecimal 1) to allow adjusting the settings in <file>gpedit.msc</file>. 
You can use a Group Policy Update to apply the edit to a fleet of Windows machines.
{{< /expand >}}

## Deleting Shadow Copies
Users with an SMB client cannot delete Shadow copies. Instead, the administrator uses the TrueNAS web interface to remove snapshots. 

Disable shadow copies for an SMB share by clearing the **Enable shadow copies** checkbox on the **Edit SMB** screen for the SMB share. 
Disabling does not prevent access to the hidden <file>.zfs/snapshot</file> directory for a ZFS dataset when it is within the path for an SMB share.

{{< taglist tag="scalesmb" limit="10" >}}