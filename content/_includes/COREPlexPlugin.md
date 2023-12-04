&NewLine;

## Installing Plex

Create a [dataset]({{< relref "CORE/CORETutorials/Storage/Pools/Datasets.md" >}}) called *audio* and a dataset called *video* to be used as mount points for Plex.
Next, go to the **Plugins** page.

Installing a basic PlexMedia plugin:

1. Select the **Plex Media Server** plugin and click **INSTALL**.

  ![PlexInstallButton](/images/CORE/Plugins/PluginsPlexInstallButton.png "Finding the Plex Plugin")

2. Enter a  name in **Jail Name**. For example, *plex* or whatever name you prefer.
   **DHCP** is set automatically.
3. Click **SAVE**.

  ![PluginsPlexMediaSave](/images/CORE/Plugins/PluginsPlexMediaSave.png "Plex: Save the Jail Settings")

   A dialog window shows the installation progress.

  ![PluginsPlexInstallProgress](/images/CORE/Plugins/PluginsPlexInstallProgress.png "Plex: Installation Progress")

  {{< hint type=note >}}
  When available, **Plugin Installation Notes** display when the install completes.
  {{< /hint >}}

   The plugin **Status** shows as **up**, with the **Boot** option selected.
4. Add the Plex mount points. Click **>** to expand the Plex plugin row.

  ![PluginsPlexJailUp](/images/CORE/Plugins/PluginsPlexJailUp.png "Plex: up status")

5. Click **Stop**, then click **Mount Points**.

  ![PluginsPlexSetMountpoints](/images/CORE/Plugins/PluginsPlexSetMountpoints.png "Plex: Setting Mount Points")

6. Click **Actions**, then **Add**.

  ![JailsMountPointsPlexAddMountpoint](/images/CORE/Jails/JailsMountPointsPlexAddMountpoint.png "Plex: Adding a new Mount point")

   Fill out one mount point for each previously created dataset. 
   The **Source** is the created dataset and the **Destination** is the <file>media</file> directory with <file>/datasetname</file> appended (see example):

   ![JailsMountPointsPlexSetMountpoint](/images/CORE/Jails/JailsMountPointsPlexSetMountpoint.png "Plex: Setting the Mount point")

7. Click **Submit**. Do this for as many mount points as needed. In this example, we have *audio* and *video*.

8. Modify the dataset permissions for each dataset added as a mount point in Plex. 
   Go to **Storage > Pools** and click <i class="material-icons" aria-hidden="true" title="Edit Permissions">more_vert</i> for your source dataset, then click **Edit Permissions**.

  ![StoragePoolsPlexEditPermissions](/images/CORE/Storage/StoragePoolsPlexEditPermissions.png "Editing Dataset Permissions")

   Click **Create a custom ACL** and **Continue**.

  ![StoragePoolsPermissionsPlexACL](/images/CORE/Storage/StoragePoolsPermissionsPlexACL.png "Plex Datasets: Custom ACL")

   Click **ADD ACL ITEM** and enter the values pictured below:

  ![StoragePoolsPermissionsPlexPermissions](/images/CORE/Storage/StoragePoolsPermissionsPlexPermissions.png "Plex Datasets: Permissions")

   Set **Apply permissions recursively** and click **Save**.

9. Go to **Plugins**, find the **Plex** entry, and click the **>** to expand the row. Click **Start** to start the plugin.

## Accessing Plex

When the **Plex** plugin status is **up**, click the **>**, then **Manage**.
 
 ![PluginsPlexManage](/images/CORE/Plugins/PluginsPlexManage.png "Plex Management")

Enter your Plex login information.
 
 ![PluginsPlexLogin](/images/CORE/Plugins/PluginsPlexLogin.png "Plex Interface Login")
  
 ![PluginsPlexSuccess](/images/CORE/Plugins/PluginsPlexSuccess.png "Plex Login Success")