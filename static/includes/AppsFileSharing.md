&NewLine;

SCALE provides two default storage options, one to use the default iXvolume or to use a host path to a prexisting dataset.

{{< hint type=important title="Separating Applications Datasets" >}}
TrueNAS considers shared host paths as insecure.
In the past, apps using shared host paths (such as a service like SMB is using) could fail to deploy.
However, this shared host path issue has been corrected so the host path option no longer exists.

It is recommended to create datasets for applications that do not share the same host path as an SMB or NFS share.
{{< /hint >}}