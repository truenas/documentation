&NewLine;

To install the Minio Enterprise app, go to **Apps**, click on **Discover Apps** and then either scroll down to locate the **enterprise** train version of the **Minio** widget, or search for it by typing MinIO in the search field to show the app widget.

{{< trueimage src="/images/SCALE/Apps/MinioEnterpriseAppWidget.png" alt="MinIO Enterprise App Widget" id="MinIO Enterprise App Widget" >}}

Click on the **MinIO Official Enterprise** widget to open the **MinIO** information screen.

{{< trueimage src="/images/SCALE/Apps/MinioEnterpriseInfoScreen.png" alt="MinIO Enterprise Information Screen" id="MinIO Enterprise Information Screen" >}}

Click **Install** to open the **Install MinIO** configuration screen.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterprise.png" alt="Install MinIO Enterprise Screen" id="Install MinIO Enterprise Screen" >}}

Accept the defaults in **Application Name** or enter a name for your MinIO application deployment.  

Accept the default in **Version**, which populates with the current MinIO version.
TrueNAS displays update information on the **Installed** application screen when an update becomes available.

Enter credentials to use as the MinIO administration user.
If you have existing MinIO credentials, enter these or create new login credentials for the first time you log into MinIO.
Enter a name for the MinIO administrator user in **Root User**, which is the equivalent of the MinIO access key.
Enter the administration user password in **Root Password**, which is the login password for that user or the MinIO secret key.

Select **Anonymous** to hide sensitive information from logging, or **Quiet** to disable startup information.

Accept the **User and Group Configuration** settings default values for MinIO Enterprise.
If you configured a new TrueNAS administration user for MinIO, enter the UID and GID.

Scroll down to or click **Network Configuration** on the list of sections at the right of the screen.

{{< trueimage src="/images/SCALE/Apps/InstallMinIONetworkConfig.png" alt="MinIO Enterprise Network Configuration" id="MinIO Enterprise Network Configuration" >}}

Do not select **Host Network**.
Select the certificate you created for MinIO from the **Certificates** dropdown list.

Enter the TrueNAS server IP address and the API port number 30000 as a URL in **MinIO Server URL (API**). For example, **https://*ipaddress*:30000**.
Enter the TrueNAS server IP address and the web UI browser redirect port number 30001 as a URL in **MinIO Browser Redirect URL**. For example, **https://*ipaddress*:30001**.

{{< hint type=note >}}
MNMD MinIO installations require HTTPS for both **MinIO Server URL** and **MinIO Browser Redirect URL** to verify the integrity of each node. Standard or SNMD MinIO installations do not require HTTPS.
{{< /hint >}}