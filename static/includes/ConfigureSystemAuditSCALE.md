&NewLine;

The **Audit** configuration screen sets the retention period, reservation size, quota size and percentage of used space in the audit dataset that triggers warning and critical alerts.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedAuditScreen.png" alt="Configure Audit Screen" id="Configure Audit Screen" >}}

{{< expand "Audit Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Retention (in days)** | Enter the number of days to retain local audit messages. |
| **Reservation (in GiB)** | Enter the size (in GiB) of reserved space to allocate on the ZFS dataset where the audit databases are stored. The reservation specifies the minimum amount of space guaranteed to the dataset, and counts against the space available for other datasets in the zpool where the audit dataset is located.  To **disable**, enter zero (**0**). |
| **Quota (in GiB)** | Enter the size (in GiB) of the maximum amount of space that can be consumed by the dataset where the audit databases are stored. To **disable**, enter zero (**0**). |
| **Quota Fill Warning (in %)** | Enter a percentage threshold. TrueNAS generates a warning level alert when the dataset quota reaches that capacity used. **Allowed range:** **5** - **80**. |
| **Quota Fill Critical (in %)** | Enter a percentage threshold. TrueNAS generates a critical level alert when the dataset quota reaches that capacity used. **Allowed range:** **50** - **95**. |
{{< /truetable >}}
{{< /expand >}}
