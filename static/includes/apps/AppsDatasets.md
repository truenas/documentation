&NewLine;

There are two general types of datasets used for app storage in TrueNAS:

**ix-apps Dataset**

TrueNAS 24.10 and newer creates a hidden **ix-apps** dataset, mounted at <file>/mnt/.ix-apps</file>, to store Docker configuration, catalog data, and app metadata.
The ix-apps dataset is for internal use only.

App data storage configured using 

{{< hint type="note" title="ix-Applications Dataset" >}}
TrueNAS 24.04 and earlier versions stored applications data in an **ix-applications** dataset on the configured apps pool.
Systems with applications deployed that upgrade from earlier releases to 24.10 continue to see the ix-applications dataset.
During the migration process, 24.10 reads the stored Kubernetes app data in the ix-applications dataset, ports them to Docker, and saves them in the new ix-apps dataset.
App storage ix-volumes present in ix-applications are cloned under the ix-apps dataset and promoted.

The app data retained in ix-applications enables TrueNAS to revert to 24.04 with functional applications.
TrueNAS 24.10 or newer does not use app data in the ix-applications dataset.
It can be safely removed after fully migrating to 24.10.
{{< /hint >}}
  
**host path datasets**


<!-- {{< hint type=info >}}
Earlier versions of TrueNAS had issues with apps failing to deploy if the application and an SMB or NFS share had the same host path to a dataset.
This issue no longer exists, but we still recommended creating datasets for applications that do not share the same host path as an SMB or NFS share.
{{< /hint >}}-->
