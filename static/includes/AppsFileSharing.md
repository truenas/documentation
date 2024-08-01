&NewLine;

SCALE provides two default storage options, one to use the default iXvolume or to use a host path to a prexisting dataset.

{{< hint type=important >}}
Since TrueNAS considers shared host paths non-secure.
In the past apps using shared host paths (such as those services SMB is using) could fail to deploy but this shared host path issue has been corrected so the host path option no longer exists.

The best practice is to create datasets for applications that do not share the same host path as an SMB or NFS share.
{{< /hint >}}