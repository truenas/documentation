&NewLine;

The **Target Global Configuration** displays configuration settings that apply to all iSCSI shares.
There are no add, edit, or delete options for this screen.
It opens after you click **Configure** on the **Block (iSCSI) Share Target** widget on the **Sharing** screen. It also opens when you click **Config Service**.

The **System Settings > Services > iSCSI** displays the **Target Global Configuration** and all the other configuration screens after you click the iSCSI **Config** option on the **Services** screen.

![iSCSIManualTargetGlobalConfig](/images/SCALE/Shares/iSCSIManualTargetGlobalConfig.png "iSCSI Target Global Configuration")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Base Name** | Enter a name using lowercase alphanumeric characters. Allowed characters include the dot (.), dash (-), and colon (:). See the "Constructing iSCSI names using the iqn.format" section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). |
| **ISNS Servers** | Enter host names or IP addresses of the ISNS servers to register with the iSCSI targets and portals of the system. Separate entries by pressing <kbd>Enter</kbd>. |
| **Pool Available Space Threshold (%)** | Enters a value for the threshold percentage that generates an alert when the pool has this percent space remaining. This is typically configured at the pool level when using zvols or at the extent level for both file and device-based extents. |
| **iSCSI listen port** | The TCP port number that the controller uses to listen for iSCSI logins from host iSCSI initiators. |
{{< /truetable >}}
