&NewLine;

{{< hint type="info" title="dRAID Group Layout" >}}
   The Pool Creation Wizard does not allow creating a dRAID pool with an arbitrary number of children, and enforces D+P=C at a minimum, and then increments by multiples of D+C. Where D is data devices, P is parity, and C is children.
   
   This layout has several advantages over requiring each row to contain whole number of groups:
   * Group count - Group count is not a relevant parameter when defining a dRAID layout. Only the group width is needed, and all groups have the desired size.
   * Group widths - All possible group widths (greater than or equal to physical disk count) can be supported.

   The logic within the dRAID is simplified when the group width is the same for all groups, although some of the logic around computer permutation numbers and drive offsets is more complicated.
   
   See [vdev_draid.c](https://github.com/openzfs/zfs/blob/master/module/zfs/vdev_draid.c#L45-L167) for more information.
   {{< /hint >}}
