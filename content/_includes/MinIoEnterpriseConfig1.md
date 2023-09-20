&NewLine;

To install the Minio Enterprise app, go to **Apps**, click on **Discover Apps**, then scroll down to locate the **enterprise** version of the **Minio** widget.

{{< trueimage src="/images/SCALE/Apps/MinioEnterpriseAppWidget.png" alt="MinIO Enterprise App Widget" id="MinIO Enterprise App Widget" >}} 

Click on the **MinIO Official Enterprise** widget to open the **MinIO** information screen.

{{< trueimage src="/images/SCALE/Apps/MinioEnterpriseInfoScreen.png" alt="MinIO Enterprise Information Screen" id="MinIO Enterprise Information Screen" >}} 

Click **Install** to open the **Install MinIO** configuration screen.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterprise.png" alt="Install MinIO Enterprise Screen" id="Install MinIO Enterprise Screen" >}} 

Accept the defaults in **Application Name** or enter a name for your MinIO application deployment.  

Accept the default in **Version**, which populates with the current MinIO version. 
SCALE displays update information on the **Installed** application screen when an update becomes available.

Enter credentials to use as the MinIO administration user. 
If you have existing MinIO credentials, enter these or create new login credentials for the first time you log into MinIO. 
The **Root User** is the equivalent of the MinIO access key. The **Root Password** is the login password for that user or the MinIO secret key.

Accept the **User and Group Configuration** settings default values for MinIO Enterprise. 
If you configured SCALE with a new administration user for MinIO, enter the UID and GID.

Scroll down to or click **Network Configuration** on the list of sections at the right of the screen.

{{< trueimage src="/images/SCALE/Apps/InstallMinIONetworkConfig.png" alt="MinIO Enterprise Network Configuration" id="MinIO Enterprise Network Configuration" >}}
 
Do not select **Host Network**. 