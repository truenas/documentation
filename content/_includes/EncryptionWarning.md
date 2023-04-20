---
---

{{< hint type=note >}}

Encryption is for users storing sensitive data.
Pool-level encryption does *NOT* apply to the storage pool or the disks in the pool. 
It only applies to the root dataset that shares the same name as the pool. 
Child datasets, or zvols, inherit encryption from the parent dataset unless you overwrite encryption when creating the child datasets or zvols.
{{< /hint >}}
