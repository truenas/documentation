&NewLine;

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **No presets** | Select  to retain control over all **Advanced Options** settings. This option gives users the flexibility to manually configure SMB parameters. |
| **Default share parameters** | The default option when you open the **Add SMB** screen and to use for any basic SMB share. These settings provide a baseline configuration that ensures compatibility and functionality, and allow users to set up shares with commonly implemented options and behaviors. |
| **Basic time machine share** | Select to set up a basic time machine share. This provides a centralized location for users to store and manage system backups. |
| **Multi-User time machine** | Select to set up a multi-user time machine share. This option allows multiple users to use TrueNAS as a centralized backup solution while simultaneously ensuring that each backup users make are kept separate and secure from one another.  |
|  **Multi-Protocol (NFSv3/SMB) shares**| Select for multi-protocol (NFSv3/SMB) shares. Choosing this option allows NFS and SMB users to access TrueNAS at the same time. |
| **Private SMB Datasets and Shares** | Select to create a share that maps to a path determined by the username of the authenticated user. TrueNAS creates a unique, private dataset matching the user name. |
| **SMB WORM. Files become read-only via SMB after 5 minutes** | The **SMB WORM** preset only impacts writes over the SMB protocol. Before deploying this option in a production environment, determine whether the feature meets your requirements. Employing this option, ensures data written to the share cannot be modified or deleted, thus increasing overall data integrity and security. |
{{< /truetable >}}
