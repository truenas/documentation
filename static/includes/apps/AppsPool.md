&NewLine;

We recommend users keep the container use case in mind when choosing an applications pool.
Select a pool with enough space for all the application containers you intend to use.

For stability, we recommend using SSD storage for the apps pool.

TrueNAS 24.10 and newer creates a hidden **ix-apps** dataset on the apps pool and mounts the hidden directory at <file>/mnt/.ix-apps</file>.
The ix-apps dataset does not inherit encryption if an encrypted pool is selected as the pool for applications.

See [Understanding App Storage](#understanding-app-storage-volumes) for more information about the ix-apps dataset and other app data storage volumes.

