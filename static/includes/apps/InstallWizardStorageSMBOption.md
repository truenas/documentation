&NewLine;

Set **Type** to **SMB/CIFS Share (Mounts a volume to a SMB share)** to add an SMB share storage volume.

{{< trueimage src="/images/SCALE/Apps/InstallAppStorageConfigSMBOption.png" alt="SMB Share Option" id="SMB Share Option" >}}

Select **Read Only** to make the storage volume read-only.

Enter the container mount path in **Mount Path**. Enter the SMB share server address in **Server**, the share mount path in **Path**, and the authentication credentials in **User** and **Password**. Optionally, enter the domain name in **Domain**.

Permissions are limited to the user who mounted the share.

Use the SMB option for data synchronization between the share and the app if available. Currently, only the Syncthing app supports this option.
