---
title: "AFP Migration"
weight: 40
---

{{< toc >}}

Since the Apple Filing Protocol (AFP) for shares has been deprecated and no longer receives updates, it is not included in TrueNAS SCALE.

However, since users can sidegrade a TrueNAS CORE configuration into SCALE, TrueNAS SCALE will migrate any previously saved AFP configurations into SMB configurations.

The Windows (SMB) Shares advanced options section has a checkbox that enables compatibility for shares that were previously AFP. The check box must be set when the share is AFP-related or the data can become corrupted. Do **not** set the checkbox if you want a share to be pure SMB (no AFP relation).

![AFPCompatibilityCheckbox](/images/SCALE/AFPCompatibilityCheckbox.png "AFP Compatibility Checkbox")

{{< hint warning >}}
As of SCALE version 21.06, the Netatalk service has been removed. AFP shares will be automatically migrated to SMB shares with the Legacy AFP Compatibility box checked. Do not uncheck Legacy AFP Compatibility as it will impact how data is written to and read from shares. Any other shares created to access these paths after the migration _must_ also have the Legacy AFP Compatibility box checked.
{{< /hint >}}

Once you have [sidegraded from CORE to SCALE]({{< relref "InstallingSCALE.md" >}}), you can find your migrated AFP configuration in **Shares >** *Windows Shares (SMB)* with the prefix `AFP_`.
To make the migrated AFP share accessible, start the SMB service.

![MigratedAFPShareSCALE](/images/SCALE/MigratedAFPShareSCALE.png "Migrated AFP Share")
