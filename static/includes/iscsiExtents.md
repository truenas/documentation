&NewLine;

The **Extents** screen displays settings to create new shared storage units or edit existing ones in the list.

![SharingiSCSIExtentsScreen](/images/SCALE/Shares/SharingiSCSIExtentsScreen.png "iSCSI Extents Screen")

**Add** opens the **Add Extent** screen.

The <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to each entry opens two options, **Edit** and **Delete**. **Edit** opens the **Edit Extent** screen, and **Delete** opens a dialog to delete the extents for the selected user.
The **Add** and **Edit** screens display the same settings.

![iSCSIManualAddExtentDevice](/images/SCALE/Shares/iSCSIManualAddExtentDevice.png "iSCSI Extents Screen Device")

#### Basic Info Settings

{{< truetable >}}
| Setting | Description |
|---------|-------|
| **Name** | Enter a name for the extent. An **Extent** where the size is not **0**, cannot be an existing file within the pool or dataset. |
| **Description** | Enter any notes about this extent. |
| **Enabled** | Select to enable the iSCSI extent. |
{{< /truetable >}}

#### Type Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Extent Type** | Select the extent (zvol) option from the dropdown list. **Device** provides virtual storage access to zvols, zvol snapshots, or physical devices. **File** provides virtual storage access to a single file. **Device** provides virtual storage access to zvols, zvol snapshots, or physical devices. **File** provides virtual storage access to a single file. |
| **Device** | Required. Displays if **Extent Type** is set to **Device**. Select the unformatted disk, controller, or zvol snapshot. |
| **Path to the Extent** | Displays when **Extent Type** is set to **File**. Click the <span class="material-icons">play_arrow</span> to browse an existing file. Create a new file by browsing to a dataset and appending /\{filename.ext\} to the path. Users cannot create extents inside a jail root directory. |
| **Filesize** | Only appears if **File** is selected. Entering **0** uses the actual file size and requires that the file already exists. Otherwise, specify the file size for the new file. |
| **Logical Block Size** | Enter a new value or leave it at the default of **512** unless the initiator requires a different block size. |
| **Disable Physical Block Size Reporting** | Select if the initiator does not support physical block size values over 4K (MS SQL). |
{{< /truetable >}}

#### Compatibility Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable TPC** | Select to allow an initiator to bypass normal access control and access any scannable target. This allows [xcopy](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/cc771254(v=ws.11)) operations that are otherwise blocked by access control. |
| **Xen initiator compat mode** | Select when using Xen as the iSCSI initiator. |
| **LUN RPM** | Select the option from the dropdown list. Options are **UNKNOWN**, **5400**, **7200**, **10000** or **15000**. Do *not* change this setting when using Windows as the initiator. Only change LUN RPM in large environments where the number of systems using a specific RPM is needed for accurate reporting statistics. |
| **Read-only** | Select to prevent the initiator from initializing this LUN. |
{{< /truetable >}}
