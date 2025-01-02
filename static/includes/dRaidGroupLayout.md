&NewLine;

{{< hint type="info" title="dRAID Group Layout" >}}
ZFS allows groups to span multiple rows, which means it does not require each row to contain a whole number of redundancy groups. This layout has several advantages over requiring whole groups in each row:

* Group count - Group count is not a relevant parameter when defining a dRAID layout. ZFS only needs the group width and *all* groups will have the desired size.
* Group widths - ZFS can support all possible group widths (greater than or equal to the physical disk count).

ZFS determines the number of groups by the least common multiple (LCM) of the group width (D+P) and the number of physical drives minus spares (C-S). The logic within dRAID is simplified when the group width is the same for all groups, although some aspects, such as computing permutation numbers and drive offsets, are more complex. This flexible layout ensures even distribution of data and parity while maintaining high performance and resilvering efficiency.

See [vdev_draid.c](https://github.com/openzfs/zfs/blob/master/module/zfs/vdev_draid.c#L45-L167) for more information.
{{< /hint >}}
