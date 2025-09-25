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
| **Name** | Text entry field that accepts manual or copy/paste entry of a name for the extent. An **Extent** where the size is not **0** cannot be an existing file within the pool or dataset. |
| **Description** | Text entry field that accepts manual or copy/paste entry of notes about this extent. |
| **Enabled** | Enables the iSCSI extent. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Extent Compatibility Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable TPC** | Allows an initiator to bypass normal access control and access any scannable target when selected. Third Party Copy (TPC) enables a disk target to process [Extended Copy (XCOPY)](https://www.t10.org/ftp/t10/document.99/99-143r1.pdf) operations that would otherwise be blocked, allowing data transfers to occur directly between storage devices without passing through the initiator. |
| **Xen initiator compat mode** | Select when using Xen as the iSCSI initiator. |
| **LUN RPM** | Do *not* change this setting when using Windows as the initiator. Only change LUN RPM in large environments where the number of systems using a specific RPM is needed for accurate reporting statistics. Sets the RPM in iSCSI related to a LUN based upon the option selected on the dropdown list. Options are **UNKNOWN**, **SSD**, **5400**, **7200**, **10000** or **15000**. |
| **Read-only** | Prevents the initiator from initializing this LUN when selected. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Extent Type Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Extent Type** | Provides virtual storage access to zvols or files. Select the extent (zvol) option from the dropdown list. Dropdown options:<br><li>**Device** - Select to specify a device (default option). **Device** provides virtual storage access to zvols and zvol snapshots. Shows the **Device** field.<br><li>**File** - Select to specify a path to a file. **File** provides virtual storage access to a single file. Shows the **Path to the Extent** and **Filesize** fields. </li> |
| **Device** | Shows after specifying **Device** in **Extent Type**. Select the unused zvol or zvol snapshot from the dropdown list. |
| **Path to the Extent** | Consists of two fields: a blank field for the mount path to the device or file, and a file browser field directly below it that allows browsing to select the file or zvol. After selecting a parent dataset, the **Create Dataset** link activates. Enter a slash (/) followed by a file or zvol name to create a file in a dataset, and append the file name to the path (/*filename.ext*). |
| **Filesize** | Enter 0 to use the actual file size of an existing file, or specify the file size for the new file added in **Path to the Extent**. |
| **Product ID** | Product identification string for the extent. The default is **iSCSI Disk** when left empty. |
| **Logical Block Size** | Shows the default **512** size. If the initiator requires a different block size, enter the numerical value. |
| **Disable Physical Block Size Reporting** | Select if the initiator does not support physical block size values over 4K (MS SQL). |
{{< /truetable >}}
{{< /expand >}}
