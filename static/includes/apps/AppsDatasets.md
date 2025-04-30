&NewLine;

### ix-apps Dataset

TrueNAS 24.10 and newer creates a hidden **ix-apps** dataset to store Docker configuration, catalog data, and app metadata.
This dataset is physically located on the selected pool for apps and mounted at <file>/mnt/.ix-apps</file>.
The ix-apps dataset is internally managed by TrueNAS and hidden to prevent user misconfiguration.
Any modification can result in instability and loss of app functionality.

Do not include the ix-apps dataset inside an SMB or NFS share.

The ix-apps dataset does not inherit encryption if an encrypted pool is selected as the pool for applications.

Back up and restore functionality as well as migration of the ix-apps dataset from one apps pool to another are not currently supported by the TrueNAS interface.
Support for these features is planned for a future TrueNAS release version.

{{< hint type="note" title="ix-Applications Dataset" >}}
TrueNAS 24.04 and earlier versions stored applications data in an **ix-applications** dataset on the configured apps pool.
Systems with applications deployed that upgrade from earlier releases to 24.10 retain the ix-applications dataset.
During the migration process, 24.10 reads the stored Kubernetes app data in the ix-applications dataset, ports them to Docker, and saves them in the new ix-apps dataset.
App storage ixVolumes present in ix-applications are cloned under the ix-apps dataset and promoted.

The app data retained in ix-applications enables TrueNAS to revert to 24.04 with functional applications.
TrueNAS 24.10 or newer does not use app data in the ix-applications dataset.
It can be safely removed after fully migrating to 24.10, but apps do not function if reverted to 24.04 without the ix-applications dataset.
{{< /hint >}}

### ixVolume Datasets

**ixVolume** datasets allow TrueNAS to automatically create an app storage path inside the hidden ix-apps dataset.

ixVolumes are typically created with appropriate permissions to deploy the application.
If needed, use **Enable ACL** in **Storage Configuration** to configure ACL entries for an ixVolume.

ixVolumes are not recommended for permanent storage volumes, they are intended for use as rapid storage for a test deployment of the container.
Though they can simplify test deployment, ixVolumes complicate tasks like app data backup.
We recommend manually adding datasets and configuring container storage volumes with the host path option.

### Host Path Datasets

**Host Paths** allow users to mount existing TrueNAS datasets to paths within the app container.
Create the TrueNAS dataset(s) before assigning them as host paths within the app installation screen.

Mounting a host path does not automatically configure appropriate permissions to deploy the application.
Use **Enable ACL** in **Storage Configuration** to configure ACL entries for each host path.

{{< expand "Configuring Host Path ACL Entries" "v" >}}
{{< include file="/static/includes/apps/HostPathACL.md" >}}
{{< /expand >}}

### Postgres Datasets

{{< include file="/static/includes/apps/InstallWizardPostgresStorageAutomaticPermissions.md" >}}

### SMB Share Volumes

Some app storage configurations include the **SMB/CIFS Share** option.
Use this option to mount an existing SMB share using a Docker [volume](https://docs.docker.com/engine/storage/#volumes).

### Tmpfs Directories

**Tmpfs (Temporary directory created on the RAM)** is conditionally available and not provided as an option for every app configuration. Overusing tmpfs mounts can exhaust system memory, leading to crashes or failed application starts. To prevent these issues, only use tmpfs with apps that explicitly support it.
Use this option to configure a memory-backed temporary directory, such as for transcoding.
See the Docker [tmpfs](https://docs.docker.com/engine/storage/#tmpfs) documentation for more information.
