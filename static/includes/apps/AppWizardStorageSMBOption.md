&NewLine;

Use the SMB option to data synchronization between the share and the app.

Set **Type** an **SMB/CIFS Share (Mounts a volume to a SMB share)** to use add an SMB share storage volume.

{{< trueimage src="/images/SCALE/Apps/InstallAppStorageConfigSMBOption.png" alt="SMB Share Option" id="SMB Share Option" >}}

Select **Read Only** to make the storage volume read only.

Enter the path inside the container to mount the storage for the share volume in **Mount Path**.

Enter the server address for the SMB share in **Server**, the path to mount the SMB share in **Path**, and the share authentication user credentials in **User** and **Password**.
(Optional) enter the share domain name in **domain**.

Permissions are currently limited to the permissions of the user that mounted the share.
<!-- Commenting this out until I can get it verified with devs/solutions team 
Alternate data streams (metadata), finder colors tags, previews, resource forks, and MacOS metadata is stripped from the share along with file system permissions, but this functionality is undergoing active development and implementation planned for a future TrueNAS SCALE release.-->
