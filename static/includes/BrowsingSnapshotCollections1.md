&NewLine;

All dataset snapshots are accessible as an ordinary hierarchical file system, accessed from a hidden <file>.zfs</file> located at the root of every dataset.

{{< hint type=important >}}
A snapshot and any files it contains are not accessible or searchable if the snapshot mount path is longer than 88 characters.
The data within the snapshot is safe but to make the snapshot accessible again shorten the mount path.
{{< /hint >}}

Users can browse and search any files they have permission to access throughout the entire dataset snapshot collection.

When creating a snapshot, permissions or ACLs set on files within that snapshot might limit access to the files.
Snapshots are read-only, so users do not have permission to modify a snapshot or its files, even if they had write permissions when creating the snapshot.

From the **Datasets** screen, select the dataset and click **Edit** on the **Dataset Details** widget.
Click **Advanced Options** and set **Snapshot Directory** to **Visible**.

To access snapshots using a share, configure the client system to view hidden files.
For example, in a Windows SMB share, enable **Show hidden files, folders, and drives** in **Folder Options**.
From to the dataset root folder, open the <file>.zfs</file> directory and navigate to the snapshot.