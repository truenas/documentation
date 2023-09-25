&NewLine;

Before configuring MinIO, [create a dataset]({{< relref "DatasetsSCALE.md" >}}) and shared directory for the persistent MinIO data.

Go to **Datasets** and select the pool or dataset where you want to place the MinIO dataset. For example, */tank/apps/minio* or */tank/minio*.
You can use either an existing pool or [create a new one]({{< relref "CreatePoolWizard.md" >}}).

After creating the dataset, create the directory where MinIO stores information the application uses.
There are two ways to do this:

* In the TrueNAS SCALE CLI, use [`storage filesystem mkdir path="/PATH/TO/minio/data"`]({{< relref "CLIFilesystem-Storage.md #mkdir-command" >}}) to create the **/data** directory in the MinIO dataset.

    {{< expand "Command Example" "v" >}}
```
storage filesystem mkdir path="/mnt/tank/apps/minio/data"
+----------+---------------------------+
|     name | data                      |
|     path | /mnt/tank/apps/minio/data |
| realpath | /mnt/tank/apps/minio/data |
|     type | DIRECTORY                 |
|     size | 2                         |
|     mode | 16877                     |
|      acl | false                     |
|      uid | 0                         |
|      gid | 0                         |
+----------+---------------------------+
```
    {{< /expand >}}

* In the web UI, create a share (i.e. an SMB share), then log into that share and create the directory.

MinIO uses **/data** but allows users to replace this with the directory of their choice.
