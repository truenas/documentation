&NewLine;

The installation wizard configuration sections vary by application, with some including more configuration areas than others.
Click **Install** to review settings ahead of time to check for required settings.
Click **Discover** on the breadcrumb at the top of the installation wizard to exiting the screen without saving and until you are ready return and configure the app settings.

All apps in the **stable** train, some **community** train apps, and all apps in the **enterprise** train generally include these basic setting sections:

* **Application Name** shows the default name for the application.

  If deploying more than one instance of the application, you must change the default name.

  Do not change the **Version** number for official apps or those included in a TrueNAS catalog.
  When a new version becomes available, the **Installed** application screen shows an update alert, and the **Application Info** widget shows an **Update** button.
  Updating the app changes the version to the currently-available release.

* ***Application* Configuration** shows required and optional settings for the app.
    Typical settings include user credentials, environment variables, additional argument settings, name of the node, or even sizing parameters.

* **User and Group Configuration** shows the user and group ID for the default user assigned to the app.
  If not using a default user and group provided, add a new user to manage the application before using the installation wizard, then enter the UID in both the user and group fields.
  This section is not always included in app installation wizards.

* **Network Configuration** shows network settings the app needs to communicate with SCALE and the Internet.
  Settings include the default port assignment, host name, IP addresses, and other network settings.

  If changing the port number to something other than the default setting, refer to [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of used and available port numbers.

  Some network configuration settings include the option to add a certificate. Create the certificate authority and certificate before using the installation wizard if using a certificate is required for the application.

* **Storage Configuration** shows options to configure storage for the application.
  Storage configuration can include the primary data mount volume, a configuration volume, postgres volumes, and an option to add additional storage volumes.
  The primary mount volumes have two options:
* **ixVolume** that creates a storage volume inside the hidden **ix-apps** dataset. This is the default setting.
* **Host Path** that allows you to select an existing dataset created for the application. Shows additional fields to select the path to the dataset and add the mount point.

  ixVolumes are not recommended for permanent storage volumes, they are intended for use as rapid storage for a test deployment of the container.
  We recommend adding datasets and configuring the container storage volumes with the host path option.

  Host path add existing dataset(s) as the storage volumes. You must configure the datasets before beginning the app installation using the wizard.

  {{< hint type="note" title="ix-apps Dataset" >}}
  The **ix-apps** dataset is for internal use only.

  TrueNAS systems with applications deployed that upgrade from earlier releases to 24.10 continue to see the **ix-Applications** dataset on the pool chosen for applications to use.
  New installs or systems upgrading where applications are not deployed and a pool is not chosen for apps use the hidden **ix-apps** dataset.
  Choosing the pool for apps to use, creates this dataset to store all container-related data.
  To expose storage volumes found in the **ix-applications** dataset, take a recursive snapshot.
  {{< /hint >}}

  Some applications require specific storage volumes for configuration and other data. Apps with these requirements might indicate this in the wizard UI but refer to tutorials for specifics. 
  After configuring required storage volumes you can add storage volumes.
  Click **Add** to select the type of storage and configure additional storage volumes for the application.
  The three storage options are:
  * **ixVolume**
  * **Host path**
  * **SMB share** that allows you to create a storage volume used by an SMB share. 
  
  An SMB share option allows you to configure a share for the application to use.
  If the application requires specific datasets or you want to allow SMB share access, configure the dataset(s) and SMB share before using the installation wizard.

  ixVolumes do not require setting up an ACL and ACE entry but host paths do.
  After entering the dataset name as the mount point, select **Enable ACL** to browse to or enter the path to the dataset.
  Enter the UID for either the default user assigned to the app or the UID for the TrueNAS user created to serve as the app administrator as the user in the ACE entry and set permissions to full control.
  Failing to enable host path ACLs prevents the app from deploying!

  Select **Force** to allow TrueNAS to update the application to the next version. This allows updates and writing to the storage volume if it has data in it.
  
* **Resources Configuration** shows CPU and memory settings for the container pod.
   In most cases, you can accept the default settings, or you can change these settings to limit the system resources available to the application.

   Some apps include GPU settings if the app allows or requires GPU passthrough.

After installing an app, you can modify most settings by selecting the app on the **Installed** applications screen and then clicking the **Edit** button on the **Application Info** widget for that app.

For more detailed information on application install wizard settings, see each of the tutorials provided in this section.
