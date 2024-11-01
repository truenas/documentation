&NewLine;

{{< hint type=info >}}
While this process can recover the actual lost capacity, reported capacity continues to rely on the old data-to-parity ratio.
An expanded vdev can continue to report a lower than expected capacity, even after rewriting old data to the new parity ratio.
This accounting inconsistency does not impact the actual available capacity of the vdev.
{{< /hint >}}
