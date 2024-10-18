&NewLine;

SCALE provides two default storage options, ixVolumes and host path to a pre-existing dataset.

Selecting the ixVolume allows SCALE to create the storage volume for the application.
If the application requires datasets with specific names, you must create them before launching the application installation wizard.

{{< hint type=info >}}
Earlier versions of SCALE had issues with apps failing to deploy if the application and an SMB or NFS share had the same host path to a dataset.
This issue no longer exists, but we still recommended creating datasets for applications that do not share the same host path as an SMB or NFS share.
{{< /hint >}}