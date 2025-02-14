&NewLine;

The iSCSI wizard **Extent** screen shows settings to name the share, set the type of extent devices, and the sharing platform for the device.

{{< columns >}}
{{< trueimage src="/images/SCALE/Shares/iSCSIWizardExtentCreateNewDevice.png" alt="iSCSI Wizard Extent Screen Devices Settings" id="iSCSI Wizard Extent Screen Device Settings" >}}
<--->
{{< trueimage src="/images/SCALE/Shares/iSCSIWizardExtendFileType.png" alt="iSCSI Wizard Extent Screen File Settings" id="iSCSI Wizard Extent Screen File Settings" >}}
{{< /columns >}}

{{< expand "Wizard Extent Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | The name given to the iSCSI block share. Enter a name using up to 64 lowercase alphanumeric and special characters. Allowed characters are dot (.), dash (-), and colon (:). A name longer than 64 characters is not allowed. See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). The base name (**from Target Global Configuration**) is automatically prepended if the target name does not start with **iqn**. |
| **Extent Type** | Has two options: **Device** and **File**. Select an option to show other settings for each option. |
| **Device**  | Shows if **Extent Type** is set to **Device**. Shows **Create New** or a list of iSCSI devices added to the system. **Create New** shows additional settings. |
| **Pool/Dataset** | Shows after selecting **Create New** in **Device**. Enter or browse to select the path to the mount point. Browsing to select the dataset activates the **Create Dataset** option. Click to open the **Create Dataset** dialog, which creates a zvol. | 
| **Size** | Shows after clicking **Create New** in **Device** and after adding the mount point in **Pool/Dataset**. Enter a numerical value and suffix to specify the size of the zvol you are creating. |
| **Path to the Extent** | Shows if **Extent Type** is set to **File**. Enter or browse to select the mount point for the directory the extent uses. If a directory does not exist, after selecting the dataset where you want to add the directory, then enter a **/** followed by the name to add the directory to the dataset. |
| **Filesize** | Shows if the **Extent Type** is set to **File**. Enter the size for the directory. Leaving this set to **0** uses the actual file size and requires the file to exist. Otherwise, specify the file size for the new file. |
| **Sharing Platform** | Shows for both options. Select the platform that matches your use case. Options are:<br><li>**VMware: Extent block size 512b, TCP enabled, no Zen compat mode, SSD speed**<br><li>**Xen: Extent block size 512b, TCP enabled, Xen compat mode enabled, SSD speed**<br><li>**Legacy OS: Extent block size 512b, TCP enabled, no Xen compat mode, SSD speed**<br><li>**Modern OS: Extent block size 4k, TCP enabled, no Xen compat mode, SSD speed**</li> |
{{< /truetable >}}
{{< /expand >}}