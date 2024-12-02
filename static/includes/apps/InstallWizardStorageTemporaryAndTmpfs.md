&NewLine;

{{< expand "Setting Up Temporary Directory Volumes" "v" >}}
To allow TrueNAS to create temporary directories as storage volumes instead of using datasets, you have two options: set **Type** set to **Temporary (Temporary directory created on the disk)** or **tmpfs (Temporary directory created on the RAM)**.

The **Temporary** option adds a directory in a Docker container in the hidden **ix-apps** dataset, located on the pool selected as the apps pool.
This directory is cleaned up on every container restart, which means the data no only exists in a current session in the container.

The **tmpfs** option creates a Linux temporary filesystem type in RAM.

{{< trueimage src="/images/SCALE/Apps/InstallPlexStorageLogsTemporaryAndTranscodeTmpfsSettings.png" alt="Setting Logs to Temporary and Transcode to tmpfs Direcories" id="Setting Logs to Temporary and Transcode to tmpfs Direcories" >}}

If you add additional storage volumes and set them up as directories, the **Temporary** option requires entering the mount path for where to place the directory, and **tmpfs** requires setting the size limit for the directory in RAM (in MiB).

{{< trueimage src="/images/SCALE/Apps/InstallPlexAddStorageTemporaryDirectorySettings.png" alt="Setting Additional to Temporary Directory" id="Setting Additional Storage to Temporary Directory" >}}

{{< trueimage src="/images/SCALE/Apps/InstallPlexAddStorageTmpfsDirectorySetting.png" alt="Setting Additional Storage to tmpfs Directory" id="Setting Additional Storage to tmpfs Directory" >}}

{{< /expand >}}