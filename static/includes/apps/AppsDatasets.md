&NewLine;

#### ix-apps Dataset

TrueNAS 24.10 and newer creates a hidden **ix-apps** dataset, mounted at <file>/mnt/.ix-apps</file>, to store Docker configuration, catalog data, and app metadata.
The ix-apps dataset is internally managed by TrueNAS and hidden to prevent user misconfiguration.
Any modification of it can result in instability and loss of app functionality.

Do not include the ix-apps dataset inside of an SMB or NFS share.

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

#### ixVolume Datasets

**ixVolume** datasets allow TrueNAS to automatically create an app storage path inside the hidden ix-apps dataset.

ixVolumes are typically created with appropriate permissions to deploy the application.
If needed, use **Enable ACL** in **Storage Configuration** to configure ACL entries for an ixVolume.

ixVolumes are not recommended for permanent storage volumes, they are intended for use as rapid storage for a test deployment of the container.
Though they can simplify test deployment, ixVolumes complicate tasks like app data backup.
We recommend manually adding datasets and configuring container storage volumes with the host path option.

#### Host Path Datasets

**Host Paths** allow users to mount existing TrueNAS datasets to paths within the app container.
Create the TrueNAS dataset(s) before assigning them as host paths within the app installation screen.

Mounting a host path does not automatically configure appropriate permissions to deploy the application.
Use **Enable ACL** in **Storage Configuration** to configure ACL entries for each host path.

{{< expand "Configuring Host Path ACL Entries" "v" >}}
After entering the path inside the container in **Mount Path**, select **Enable ACL**.
Browse to or enter the path to the dataset in **Host Path**.
Click **Add** next to **ACL Entries** to display a set of ACE fields.
Use **ID Type** to select whether the ACE is for a user or a group.
Enter the UID or GID in **ID** and adjust the permissions level in **Access**.

Refer to the app **Run As Context** on the app details screen for default ID requirements.
A user or group ID does not need to exist locally on TrueNAS or match the name configured in the container to grant an ACE.
Failing to configure host path ACLs prevents the app from deploying!

Select **Force Flag** in **ACL Options**.
This allows TrueNAS to write ACL entries to the storage volume if it has existing data in it.
**Force Flag** is required to edit or update an existing application.
{{< /expand >}}

#### SMB Share Volumes

Some app storage configurations include the **SMB/CIFS Share** option.
Use this option to mount an existing SMB share using a Docker [volume](https://docs.docker.com/engine/storage/#volumes).

#### Tmpfs Directories

Some app storage configurations include the **Tmpfs (Temporary directory created on the RAM)** option.
Use this option to configure a memory-backed temporary directory, such as for transcoding.
See the Docker [tmpfs](https://docs.docker.com/engine/storage/#tmpfs) documentation for more information.
