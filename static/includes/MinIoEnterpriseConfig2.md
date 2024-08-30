&NewLine;

Accept the default values in **Resources Configuration** or to customize the CPU and memory allocated to the container (pod) the Minio app uses, enter new values in the **CPU** and **Memory (in MB)** fields. 
Tune these limits as needed to prevent the application from overconsuming system resources and introducing performance issues.

By default, this application is limited to use no more than **2** CPU cores and **4096** megabytes available memory.
The application might use considerably less system resources.

Click **Install** to complete the installation.

The **Installed** applications screen opens showing the MinIO application in the **Deploying** state, then changes to **Running** when the application is ready to use. 

{{< trueimage src="/images/SCALE/Apps/MinIOEnterpriseInstalled.png" alt="MinIO App Installed" id="MinIO App Installed" >}}

Click **Web Portal** to open the MinIO sign-in screen.

{{< trueimage src="/images/SCALE/Login/MinIOWebPortal.png" alt="MinIO Sign-In Screen" id="MinIO Sign-In Screen" >}}
