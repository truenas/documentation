---
title: "Using SMB Shadow Copy"
description: "Provides information on SMB share shadow copies, enabling shadow copies, and resolving an issue with Microsoft Windows 10 v2004 release."
weight: 30
aliases: 
tags:
- smb
---


{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

**Enable Shadow Copies** is a legacy option not found in 25.10 or later releases.
It only shows if an SMB share with this option exists in 25.04 latest maintenance release or earlier version is upgraded to the 25.10 or later release.
It exports ZFS snapshots as [Shadow Copies](https://docs.microsoft.com/en-us/windows/win32/vss/shadow-copies-and-shadow-copy-sets) for Microsoft Volume Shadow Copy Service (VSS) clients.

{{< expand "Can I roll back to an earlier version boot environment to create this share type?" "V" >}}
No! Rolling back to an earlier release using boot environments does not allow you to create a shadow copy share that propagates to the 25.10 boot environment.
You can create a new share using the **Time Locked** preset, but this does not migrate your users, other settings, or data.
{{< /expand >}}

## About SMB Shadow Copies

[Shadow Copies](https://docs.microsoft.com/en-us/windows-server/storage/file-server/volume-shadow-copy-service), also known as the Volume Shadow Copy Service (VSS) or Previous Versions, is a Microsoft service for creating volume snapshots.
You can use shadow copies to restore previous versions of files from within Windows Explorer.

By default, all ZFS snapshots for a dataset underlying an SMB share path are presented to SMB clients through the volume shadow copy service or are accessible directly with SMB when the hidden ZFS snapshot directory is within the SMB share path.

Before you activate Shadow Copies in TrueNAS, there are a few caveats:

* Shadow Copies might not work if you have not updated the Windows system to the latest service pack.
  If previous versions of files to restore are not visible, use Windows Update to ensure the system is fully up-to-date.

* Shadow Copies support only works for ZFS pools or datasets.

* SMB share dataset or pool permissions must be appropriately configured.

* SMB share with **Enable Shadow Copy** selected must exist in an earlier release before upgrading to 25.10 or later.

## Enabling Shadow Copies

To enable shadow copies in pre-25.10 TrueNAS releases, go to **Shares > Windows (SMB) Shares** and locate the share.

Click on the **Edit** option for the share.

If not listed, click **Windows (SMB) Shares <span class="material-icons">launch</span>** to open the **Sharing > SMB** screen.
Select the share, then click the <span class="material-icons">more_vert</span> for the share, then click **Edit** to open the **Edit SMB** screen.

Click **Advanced Options**, scroll down to **Other Options**, and then select **Enable Shadow Copies**.

Click **Save**.

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
Users with an SMB client cannot delete shadow copies.
Instead, the administrator uses the TrueNAS web interface to remove snapshots.

Disable shadow copies for an SMB share by clearing the **Enable shadow copies** checkbox on the **Edit SMB** screen in the **Other Options** on the **Advanced Options** screen for the SMB share.
Disabling does not prevent access to the hidden <file>.zfs/snapshot</file> directory for a ZFS dataset when it is within the path for an SMB share.
