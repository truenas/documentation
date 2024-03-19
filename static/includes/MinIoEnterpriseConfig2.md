&NewLine;

If you want to set up logging, select **Anonymous** to hide sensitive information from logging, or **Quiet** to disable startup information.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOLogging.png" alt="MinIO Enterprise Logging" id="MinIO Enterprise Logging" >}}

Select the optional **Enable Log Search API** to enable LogSearch API and configure MinIO to use this function and deploy a postgres database to store the logs. 

{{< trueimage src="/images/SCALE/Apps/InstallMinIOLoggingEnableLogSearch.png" alt="MinIO Enterprise Enable LogSearch" id="MinIO Enterprise Enable LogSearch" >}}

Specify the storage in gigabytes that the logs are allowed to occupy in **Disk Capacity in GB**. 
Accept the default **ixVolume** in **Postgres Data Storage** and **Postgres Backup Storage** to let the system create the datasets, or select **Host Path** to select an existing dataset on the system to use for these storage volumes.

Accept the default values in **Resources Configuration** or to customize the CPU and memory allocated to the container (pod) the Minio app uses, enter new values in the **CPU Resource Limit** and **Memory Limit** fields. 
Tune these limits as needed to prevent the application from overconsuming system resources and introducing performance issues.

By default, this application is limited to use no more than **4** CPU cores and **8** Gigabytes available memory.
The application might use considerably less system resources.

Click **Install** to complete the installation.

The **Installed** applications screen opens showing the MinIO application in the **Deploying** state. 
It changes to **Running** when the application is ready to use. 

{{< trueimage src="/images/SCALE/Apps/MinIOEnterpriseInstalled.png" alt="MinIO App Installed" id="MinIO App Installed" >}}

Click **Web Portal** to open the MinIO sign-in screen.

{{< trueimage src="/images/SCALE/Login/MinIOWebPortal.png" alt="MinIO Sign-In Screen" id="MinIO Sign-In Screen" >}}
