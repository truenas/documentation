**Dataset**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Dataset** | Select a pool, dataset, or zvol. |
| **Recursive** | Select to take separate snapshots of the dataset and each of its child datasets. Clear to take a single snapshot only of the specified dataset without child datasets. |
| **Exclude** | Exclude specific child datasets from the snapshot. Use with recursive snapshots. List paths to any child datasets to exclude. Example: `pool1/dataset1/child1`. A recursive snapshot of pool1/dataset1 will include all child datasets except child1. Separate entries by pressing <kbd>Enter</kbd>. |
{{< /truetable >}}

**Schedule**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Snapshot Lifetime** | Define a length of time to retain the snapshot on this system using a numeric value and a single lowercase letter for units. Examples: *3h* is three hours, *1m* is one month, and *1y* is one year. Does not accept Minute values. After the time expires, the snapshot is removed. Snapshots which have been replicated to other systems are not affected. |
| **Naming Schema** | Snapshot name format string. The default is `auto-%Y-%m-%d_%H-%M`. Must include the strings `%Y`, `%m`, `%d`, `%H`, and `%M`, which are replaced with the four-digit year, month, day of month, hour, and minute as defined in [strftime(3)](https://www.freebsd.org/cgi/man.cgi?query=strftime). For example, snapshots of *pool1* with a Naming Schema of `customsnap-%Y%m%d.%H%M` have names like *pool1@customsnap-20190315.0527*. |
| **Schedule** | Choose one of the presets or **Custom** to use the advanced scheduler. |
| **Allow Taking Empty Snapshots** | Creates dataset snapshots even when there have been no changes to the dataset from the last snapshot. Recommended for long-term restore points, multiple snapshot tasks pointed at the same datasets, or compatibility with snapshot schedules or replications created in TrueNAS 11.2 and earlier. For example, allowing empty snapshots for a monthly snapshot schedule allows that monthly snapshot to be taken, even when a daily snapshot task has already taken a snapshot of any changes to the dataset. |
| **Enabled** | To activate this periodic snapshot schedule, select this option. To disable this task without deleting it, clear this option. |
{{< /truetable >}}
