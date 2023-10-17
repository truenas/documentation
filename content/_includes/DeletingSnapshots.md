&NewLine;

The **Delete** option destroys the snapshot.
You must delete child clones before you can delete their parent snapshot.
While creating a snapshot is instantaneous, deleting one is I/O intensive and can take a long time, especially when deduplication is enabled.

{{< expand "Why?" "v" >}}
ZFS has to review all allocated blocks before deletion to see if another process is using that block. If not used, the ZFS can free that block.
{{< /expand >}}
