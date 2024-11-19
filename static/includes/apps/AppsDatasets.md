&NewLine;

**ix-apps Dataset**

TrueNAS 24.10 and newer creates a hidden **ix-apps** dataset, mounted at <file>/mnt/.ix-apps</file>, to store Docker configuration, catalog data, and app metadata.
The ix-apps dataset is for internal use only.

<!--
1- Is there anything we want to/can say about why the ix-apps dataset was hidden and/or what the advantage of doing so is?
2- Can we suggest anything for users who want to manipulate the hidden dataset in ways that aren't currently possible like backing up the app data or moving the dataset to a new apps pool? Or can we at least say improvements in these areas are planned for future TrueNAS versions?
3- Anything else we'd like to see communicated about this dataset?

1- It has been hidden to prevent foot-shooting by users as we have seen users with iocage or k8s implementation doing again and again, this time we decided to have it harder to come across to prevent this foot-shooting.
2- So we should have backup/restore - migration of ix-apps dataset from one pool to another in place by FT
3- Not really i guess atm - probably to not do anything to that dataset and if there are concerns/issues - please feel free to let us know etc.
 -->

{{< hint type="note" title="ix-Applications Dataset" >}}
TrueNAS 24.04 and earlier versions stored applications data in an **ix-applications** dataset on the configured apps pool.
Systems with applications deployed that upgrade from earlier releases to 24.10 continue to see the ix-applications dataset.
During the migration process, 24.10 reads the stored Kubernetes app data in the ix-applications dataset, ports them to Docker, and saves them in the new ix-apps dataset.
App storage ixVolumes present in ix-applications are cloned under the ix-apps dataset and promoted.

The app data retained in ix-applications enables TrueNAS to revert to 24.04 with functional applications.
TrueNAS 24.10 or newer does not use app data in the ix-applications dataset.
It can be safely removed after fully migrating to 24.10.
{{< /hint >}}

<!-- {{< hint type=info >}}
Earlier versions of TrueNAS had issues with apps failing to deploy if the application and an SMB or NFS share had the same host path to a dataset.
This issue no longer exists, but we still recommended creating datasets for applications that do not share the same host path as an SMB or NFS share.
{{< /hint >}}-->

**ixVolume Datasets**

Choose **ixVolume** in app storage configuration to allow TrueNAS to automatically create a storage volume inside the hidden ix-apps dataset.
ixVolumes are typically created with appropriate permissions to deploy the application.
If needed, use **Enable ACL** in **Storage Configuration** to configure ACL entries for an ixVolume.

ixVolumes are not recommended for permanent storage volumes, they are intended for use as rapid storage for a test deployment of the container.
Though they can simplify test deployment, ixVolumes complicate tasks like app data backup.
We recommend adding datasets and configuring the container storage volumes with the host path option.

**Host Path Datasets**

**SMB Share Volumes**

Some app storage configurations include the **SMB/CIFS Share** option.
Use this option to mount an existing SMB share using a Docker [volume](https://docs.docker.com/engine/storage/#volumes).
