&NewLine;

The **Audit** configuration screen sets the retention period, reservation size, quota size and percentage of used space in the audit dataset that triggers warning and critical alerts.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedAuditScreen.png" alt="Configure Audit Screen" id="Configure Audit Screen" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Retention (in days)** | Enter the number of days to retain local audit messages. |
| **Reservation (in GiB)** | Enter the size (in GiB) of reserved space to allocate on the ZFS dataset where the audit databases are stored. The reservation specifies the minimum amount of space guaranteed to the dataset, and counts against the space available for other datasets in the zpool where the audit dataset is located. |
| **Quota (in GiB)** | Enter the size (in GiB) of the maximum amount of space that can be consumed by the dataset where the audit databases are stored. |
| **Quota Fill Warning (in %)** | Enter a percentage threshold. TrueNAS generates a warning level alert when the dataset quota reaches that capacity used. |
| **Quota Fill Critical (in %)** | Enter a percentage threshold. TrueNAS generates a critical level alert when the dataset quota reaches that capacity used. |
{{< /truetable >}}
{{< /expand >}}