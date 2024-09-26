&NewLine;

The installation wizard configuration sections vary by application, with some including more configuration areas than others.
Click **Install** to review settings ahead of time to check for required settings.
Click **Discover** on the breadcrumb at the top of the installation wizard to exiting the screen without saving and until you are ready return and configure the app settings.

All applications include these basic setting sections:

* **Application Name** shows the default name for the application.

  If deploying more than one instance of the application, you must change the default name. Also includes the **version** number for the application.
  Do not change the version number for official apps or those included in a SCALE catalog.
  When a new version becomes available, the **Installed** application screen banner and application row displays an update alert, and the **Application Info** widget displays an update button> Updating the app changes the version shown on the edit wizard for the application.

* ***Application* Configuration** shows settings that app requires to deploy.
  This section can be named anything. For example, the MinIO app uses  **MinIO Configuration**.

  Typical settings include user credentials, environment variables, additional argument settings, name of the node, or even sizing parameters.

  If not using the default user and group provided, add the new user (and group) to manage the application before using the installation wizard.

* **Network Configuration** shows network settings the app needs to communicate with SCALE and the Internet.
  Settings include the default port assignment, host name, IP addresses, and other network settings.

  If changing the port number to something other than the default setting, refer to [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of used and available port numbers.

  Some network configuration settings include the option to add a certificate. Create the certificate authority and certificate before using the installation wizard if using a certificate is required for the application.

* **Storage Configuration** shows options to configure storage for the application.
  Storage options include using the default ixVolume setting that adds a storage volume under the **ix-applications** dataset, host path where you select existing dataset(s) to use, or in some cases the SMB share option where you configure a share for the application to use.
  The **Add** button allows you to configure additional storage volumes for the application to use in addition to the main storage volume (dataset).

  If the application requires specific datasets, configure these before using the installation wizard.

  {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

* **Resources Configuration** shows CPU and memory settings for the container pod.
   This section can also be named **Resource Limits**. In most cases, you can accept the default settings, or you can change these settings to limit the system resources available to the application.

After installing an app, you can modify most settings by selecting the app on the **Installed** applications screen and then clicking the **Edit** button on the **Application Info** widget for that app.