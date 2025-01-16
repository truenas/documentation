&NewLine;

{{< hint type=important >}}
Encryption is for users storing sensitive data.
Pool-level encryption applies to the root dataset that shares the same name as the pool.
It does not apply encryption to the storage vdev or the disks in the pool.
Child datasets or zvols must be configured to inherit encryption from the parent dataset.
{{< /hint >}}
