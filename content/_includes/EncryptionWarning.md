---
---

{{< hint type=important >}}

Encryption is for users storing sensitive data.
Pool-level encryption does not apply to the storage pool or the disks in the pool. 
It only applies to the root dataset that shares the same name as the pool. 
Child datasets or zvols inherit encryption from the parent dataset.
{{< /hint >}}
