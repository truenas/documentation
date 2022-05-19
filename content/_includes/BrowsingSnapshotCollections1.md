---
---

{{< hint warning >}}
Browsing a snapshot collection is an advanced capability that requires ZFS and command-line experience.
{{< /hint >}}

All dataset snapshots are accessible as an ordinary hierarchical file system, accessed from a hidden <file>.zfs</file> located at the root of every dataset.

{{< hint warning >}}
A snapshot and any files it contains are not accessible or searchable if the snapshot mount path is longer than 88 characters.
The data within the snapshot is safe but to make the snapshot accessible again shorten the mount path.
{{< /hint >}}