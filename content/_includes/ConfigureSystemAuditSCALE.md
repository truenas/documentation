&NewLine;

The **Audit** configuration screen sets the retention period, reservation size, quota size and percentage of used space in the audit dataset  that triggers warning and critical alerts.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedAuditScreen.png" alt="Configure Audit Screen" id="Configure Audit Screen" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Retention (in days)** | Enter the number of days to retain local audit messages. |
| **Reservation (in GiB)** | Enter the size (in GiB) of refreservation to set on the ZFS dataset where the audit databases are stored. The refreservation specifies the minimum amount of space guaranteed to the dataset, and counts against the space available for other datasets in the zpool where the audit dataset is located. |
| **Quota (in GiB)** | Enter th size (in GiB) of the maximum amount of space that can be consumed by the dataset where the audit databases are stored. |
| **Quota Fill Warning (in %)** | Enter the percentage used of the dataset quota at which to generate a warning alert. |
| **Quota Fill Critical (in %)** | Enter the percentage used of the dataset quota at which to generate a critical alert. |
{{< /truetable >}}
{{< /expand >}}