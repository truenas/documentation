&NewLine;

The **Add Extent** and **Edit Extent** screens show the same configuration settings.

{{< columns >}}
{{< trueimage src="/images/SCALE/Shares/AddExtentScreenDeviceType.png" alt="Add iSCSI Extent Device Type" id="Add iSCSI Extent Device Type" >}}
<--->
{{< trueimage src="/images/SCALE/Shares/AddExtentScreenFileType.png" alt="Edit iSCSI Extent File Type" id="Edit iSCSI Extent File type" >}}
{{< /columns >}}

{{< expand "Extent Basic Info Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Enter a name for the extent. An **Extent** where the size is not **0**, cannot be an existing file within the pool or dataset. |
| **Description** | Enter any notes about this extent. |
| **Enabled** | Select to enable the iSCSI extent. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Extent Compatibility Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable TPC** | Select to allow an initiator to bypass normal access control and access any scannable target. This allows [xcopy](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/cc771254(v=ws.11)) operations that are otherwise blocked by access control. |
| **Xen initiator compat mode** | Select when using Xen as the iSCSI initiator. |
| **LUN RPM** | Select the option from the dropdown list. Options are **UNKNOWN**, **SSD**, **5400**, **7200**, **10000** or **15000**. Do *not* change this setting when using Windows as the initiator. Only change LUN RPM in large environments where the number of systems using a specific RPM is needed for accurate reporting statistics. |
| **Read-only** | Select to prevent the initiator from initializing this LUN. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Extent Type Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Extent Type** | Provides virtual storage access to zvols, zvol snapshots, or physical devices. Select the extent (zvol) option from the dropdown list. Dropdown options:<br><li>**Device** - Select to specify a device (default option). **Device** provides virtual storage access to zvols, zvol snapshots, or physical devices. Shows the **Device** field.<br><li>**File** - Select to specify a path to a file. **File** provides virtual storage access to a single file. Shows the **Path to the Extent** and **Filesize** fields. </li> |
| **Device** | Shows after specifying **Device** in **Extent Type**. Select the unused zvol or zvol snapshot from the dropdown list. |
| **Path to the Extent** | Enter or browse to select the path to an existing file. Enter a slash (/) followed by a file name to create a file in a dataset and append the file name to the path (/*filename.ext*). |
| **Filesize** | Enter 0 to use the actual file size of an existing file, or specify the file size for the new file added in **Path to the Extent**. |
| **Logical Block Size** | Shows the default **512** size. If the initiator requires a different block size, enter the numerical value. |
| **Disable Physical Block Size Reporting** | Select if the initiator does not support physical block size values over 4K (MS SQL). |
{{< /truetable >}}
{{< /expand >}}
