&NewLine;

The **iSCSI Global Configuration** screen opens when you click **Edit** on the **iSCSI Service** row of the **System > Services** screen, and after clicking the **Global Target Configuration** button at the top of all iSCSI share screens.

{{< trueimage src="/images/SCALE/Shares/iSCSIGlobalConfigurationScreen.png" alt="iSCSI Global Configuration Screen" id="iSCSI Global Configuration Screen" >}}

{{< expand "Global Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Base Name** | Enter a name using lowercase alphanumeric characters. Allowed special characters are dot (.), dash (-), and colon (:). See the "Constructing iSCSI names using the iqn.format" section [RFC3721](https://tools.ietf.org/html/rfc3721.html) for more information. |
| **ISNS Servers** | Enter host names or IP addresses of the ISNS servers to be registered with the iSCSI targets and portals of the system. Press <kbd>Enter</kbd> to separate each entry. |
| **Pool Available Space Threshold (%)** | Generate an alert when the pool reaches this percentage of space remaining. This is typically configured at the pool level when using zvols or at the extent level for both file and device-based extents. |
| **iSCSI listen port** | TCP port used to access the iSCSI target. The default is **3260**. |
{{< /truetable >}}
{{< /expand >}}