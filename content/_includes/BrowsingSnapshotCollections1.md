&NewLine;

All dataset snapshots are accessible as an ordinary hierarchical file system, accessed from a hidden <file>.zfs</file> located at the root of every dataset.

{{< hint type=important >}}
A snapshot and any files it contains are not accessible or searchable if the snapshot mount path is longer than 88 characters.
The data within the snapshot is safe but to make the snapshot accessible again shorten the mount path.
{{< /hint >}}

A user with permission to access the dataset contents can view the list of snapshots by going to the dataset <file>.zfs</file> directory from a share, like **SMB**, **NFS**, and **iSCSI**, or in the TrueNAS SCALE CLI.
Users can browse and search any files they have permission to access throughout the entire dataset snapshot collection.

When creating a snapshot, permissions or ACLs set on files within that snapshot might limit access to the files.
Snapshots are read-only, so users do not have permission to modify a snapshot or its files, even if they had write permissions when creating the snapshot.

From the **Datasets** screen, select the dataset and click **Edit** on the **Dataset Details** widget.
Click **Advanced Options** and set **Snapshot Directory** to **Visible**.

To access snapshots:

* Using a share, configure the client system to view hidden files.
    For example, in a Windows SMB share, enable **Show hidden files, folders, and drives** in **Folder Options**.
    From to the dataset root folder, open the <file>.zfs</file> directory and navigate to the snapshot.

* Using the TrueNAS SCALE CLI, enter <code>storage filesystem listdir path="/<em>PATH</em>/<em>TO</em>/<em>DATASET</em>/.zfs/<em>PATH</em>/<em>TO</em>/<em>SNAPSHOT</em>"</code> to view snapshot contents.
    See also [`storage filesystem`]({{< relref "clifilesystem-storage.md #listdir-command" >}}).

    {{< expand "Command Example" "v" >}}
```
storage filesystem listdir path="/mnt/tank/test/.zfs/snapshot/SNAPSHOT1"
+--------------+-----------------------------------------------------+-----------------------------------------------------+-----------+--------+-------+-------+------+------+---------------+-----------+
| name         | path                                                | realpath                                            | type      | size   | mode  | acl   | uid  | gid  | is_mountpoint | is_ctldir |
+--------------+-----------------------------------------------------+-----------------------------------------------------+-----------+--------+-------+-------+------+------+---------------+-----------+
| tuser        | /mnt/tank/test/.zfs/snapshot/SNAPSHOT1/tuser        | /mnt/tank/test/.zfs/snapshot/SNAPSHOT1/tuser        | DIRECTORY | 6      | 16832 | false | 3000 | 3000 | false         | true      |
| FILENAME.tar | /mnt/tank/test/.zfs/snapshot/SNAPSHOT1/FILENAME.tar | /mnt/tank/test/.zfs/snapshot/SNAPSHOT1/FILENAME.tar | FILE      | 0      | 33200 | true  | 950  | 950  | false         | true      |
| FILE.tar     | /mnt/tank/test/.zfs/snapshot/SNAPSHOT1/FILE.tar     | /mnt/tank/test/.zfs/snapshot/SNAPSHOT1/FILE.tar     | FILE      | 778240 | 33200 | true  | 950  | 950  | false         | true      |
+--------------+-----------------------------------------------------+-----------------------------------------------------+-----------+--------+-------+-------+------+------+---------------+-----------+
```
    {{< /expand >}}
