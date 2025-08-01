&NewLine;

The iSCSI wizard **Extent** screen shows settings to name the target, set the type of extent storage (device or file), and the sharing platform for the device.

{{< columns >}}
{{< trueimage src="/images/SCALE/Shares/iSCSIWizardExtentCreateNewDevice.png" alt="iSCSI Wizard Extent Screen Devices Settings" id="iSCSI Wizard Extent Screen Device Settings" >}}
<--->
{{< trueimage src="/images/SCALE/Shares/iSCSIWizardExtendFileType.png" alt="iSCSI Wizard Extent Screen File Settings" id="iSCSI Wizard Extent Screen File Settings" >}}
{{< /columns >}}

{{< expand "Wizard Extent Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | The name given to the iSCSI block target. Enter a name using up to 64 lowercase alphanumeric and special characters. Allowed characters are dot (.), dash (-), and colon (:). A name longer than 64 characters is not allowed. See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). The base name (**from Target Global Configuration**) is automatically prepended if the target name does not start with **iqn**. |
| **Extent Type** | The storage device for the target. The dropdown list shows two options: **Device** and **File**. Selecting **Device** shows the **Device** dropdown list. **File** sows the **Path to the Extent** fields and the **Filesize** field. 
| **Device**  | Shows if **Extent Type** is set to **Device**. Shows **Create New** or a list of iSCSI extents added to the system. **Create New** shows the **Pool/Dataset** fields and the **Size** field. |
| **Pool/Dataset** | Sets the mount path to the zvol for the extent. Shows two fields after selecting **Create New** in **Device**. The blank field allows text entry of a share mount path or allows Truenas to populate it with the path to the dataset selected in the file browser field. The file browser selects the mount path to the extent parent dataset on the local file system that TrueNAS exports over the iSCSI protocol. Use the <span class="material-icons">arrow_right</span> icon to the left of <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21L3 9h18l-2 12zm5-6h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5z"/></svg> to expand the dataset directory tree. **Create Dataset** activates after selecting the parent dataset. | 
| **Size** | Sets the block size for the zvol. Shows after clicking **Create New** in **Device** and after adding the mount point to the zvol in **Pool/Dataset**. Enter a numerical value and a suffix to specify the block size for the zvol you are creating. |
| **Path to the Extent** | Sets the mount path to the file. Shows if **Extent Type** is set to **File**. Enter or browse to select the mount point for the directory and file for the extent to use. If a directory does not exist, after selecting the dataset where you want to add the directory, and then enter a **/** followed by the name to add the directory to the dataset or zvol. |
| **Filesize** | Sets the size of the file. Shows if the **Extent Type** is set to **File**. Enter the size for the directory. Leaving this set to **0** uses the actual file size and requires the file to exist. Otherwise, specify the file size for the new file. |
| **Sharing Platform** | Sets the platform type for the target extent connection. Shows for both **Device** and **File** options. Select the platform that matches your use case. Options are:<br><li>**VMware: Extent block size 512b, TCP enabled, no Zen compat mode, SSD speed**<br><li>**Xen: Extent block size 512b, TCP enabled, Xen compat mode enabled, SSD speed**<br><li>**Legacy OS: Extent block size 512b, TCP enabled, no Xen compat mode, SSD speed**<br><li>**Modern OS: Extent block size 4k, TCP enabled, no Xen compat mode, SSD speed**</li> |
{{< /truetable >}}
{{< /expand >}}