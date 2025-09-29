---
title: "Using SMB Shadow Copy"
description: "Provides information on SMB share shadow copies, enabling shadow copies, and resolving an issue with Microsoft Windows 10 v2004 release."
weight: 30
aliases: 
tags:
- smb
---


{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

TrueNAS 25.10 or later exports ZFS snapshots as [Shadow Copies](https://docs.microsoft.com/en-us/windows/win32/vss/shadow-copies-and-shadow-copy-sets) for Microsoft clients by default.

## About SMB Shadow Copies

Shadow Copies, also known as the [Volume Shadow Copy Service (VSS)](https://docs.microsoft.com/en-us/windows-server/storage/file-server/volume-shadow-copy-service) or Previous Versions, is a Microsoft service for creating volume snapshots.
You can use shadow copies to restore previous versions of files from within Windows Explorer.

By default, all ZFS snapshots for a dataset underlying an SMB share path are presented to SMB clients through the volume shadow copy service or are accessible directly with SMB when the hidden ZFS snapshot directory is within the SMB share path.

{{< hint type=note title="Disabling Shadow Copies" >}}
TrueNAS 25.10 does not support per-share disabling of SMB Shadow Copies on non-legacy shares.

If you need to completely disable shadow copies and prevent client access to ZFS snapshots, disable the ZFS snapshot directory for the shared dataset.
Navigate to **Storage > Datasets**, select the shared dataset, and click **Edit** on the **Details** widget.
In the **Edit Dataset** screen, select **Advanced Options** and set **Snapshot Directory** to **Disabled**.
When the snapshot directory is disabled, Samba automatically turns off the shadow copy feature.
{{< /hint >}}

## Deleting Shadow Copies

Users with an SMB client cannot delete shadow copies.
Instead, the administrator uses the TrueNAS web interface to remove snapshots.

## Enabling Shadow Copies (Legacy Option)

Enabling or disabling shadow copies is an available option in pre-25.10 TrueNAS releases or for legacy shares in 25.10 or later.

TrueNAS sets a share **Purpose** to **Legacy Share** after upgrading to 25.10 when shares created in a release before 25.10 have **Purpose** set to **No Preset**.
See [Legacy Share Settings]({{< ref "SMBSharesScreens/#legacy-share-settings" >}}) for more information.

To enable shadow copies for a compatible dataset, go to **Shares > Windows (SMB) Shares** and locate the share.

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

Disable shadow copies for an SMB share by clearing the **Enable shadow copies** checkbox on the **Edit SMB** screen in the **Other Options** on the **Advanced Options** screen for the SMB share.
Disabling does not prevent access to the hidden <file>.zfs/snapshot</file> directory for a ZFS dataset when it is within the path for an SMB share.
