&NewLine;

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **No presets** | Select to retain control over all **Advanced Options** setting. Users can manually configure the SMB settings and parameters. |
| **Default share parameters** | The default option when you open the **Add SMB** screen. Use for any basic SMB share. These settings provide a baseline configuration that ensures compatibility and functionality and allows users to set up shares with commonly implemented options and behaviors. |
| **Basic time machine share** | Select to set up a basic time machine share. This provides a centralized location for users to store and manage system backups. |
| **Multi-User time machine** | Select to set up a multi-user time machine share. This option allows multiple users to use TrueNAS as a centralized backup solution while ensuring that each backup is kept separate and secure from the others. |
|  **Multi-Protocol (NFSv4/SMB) shares**| Select for multi-protocol (NFSv4/SMB) shares. Choosing this option allows NFS and SMB users to access TrueNAS at the same time. Multi-protocol shares in TrueNAS try to enable kernel oplocks which are enabled per share when the chosen share uses both NFS and SMB protocols, but the oplocks are incompatible with SMB2/3 lease support. This incompatibility might trigger unexpected failures depending on the order in which the SMB client negotiates the first SMB tree connect. The multi-protocol share type is mutually exclusive with AAPL extension support like time machine. These extensions require the SMB2/3 lease support which is no longer available in multi-protocol shares. Therefore, time machine cannot be enabled and a warning message shows in the UI. Selecting other Apple protocol options also displays warning messages. Multi-protocol shares can impact the performance of all SMB shares. |
| **Private SMB Datasets and Shares** | Select to create a share that maps to a path determined by the username of the authenticated user. TrueNAS creates a unique, private dataset matching the user name. |
| **SMB WORM. Files become read-only via SMB after 5 minutes** | The **SMB WORM** preset only impacts writes over the SMB protocol. Before deploying this option in a production environment, determine whether the feature meets your requirements. Employing this option ensures data written to the share cannot be modified or deleted, thus increasing overall data integrity and security. |
{{< /truetable >}}
