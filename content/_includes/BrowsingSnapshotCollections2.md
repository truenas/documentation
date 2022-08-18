---
---

In summary, the main required changes to settings are:

* In dataset properties, change the ZFS properties to enable snapshot visibility.
* In the Samba auxiliary settings, change the `veto files` command to not hide the <file>.zfs</file>, and add the setting `zfsacl:expose_snapdir=true`.

The effect is that any user who can access the dataset contents can view the list of snapshots by going to the dataset <file>.zfs</file> directory.
Users can browse and search any files they have permission to access throughout the entire dataset snapshot collection.

When creating a snapshot, permissions or ACLs set on files within that snapshot might limit access to the files.

Snapshots are read-only, so users do not have permission to modify a snapshot or its files, even if they had write permissions when creating the snapshot.

The `zfs diff` ZFS command, which can run in the **Shell**, lists all changed files between any two snapshot versions within a dataset, or between any snapshot and the current data.