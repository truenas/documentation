&NewLine;

Enter credentials to use as the MinIO administration user.
If you have existing MinIO credentials, enter these or create new login credentials for the first time you log into MinIO.
Enter a name for the MinIO administrator user in **MinIO Root User**, which is the equivalent of the MinIO access key.
A username for the root user (MinIO access key), entered in **MinIO Root User**, is limited to five to 20 characters long. For example *admin* or *admin1*.

Enter the administration user password in **MinIO Root Password**, which is the login password for that user or the MinIO secret key.
The root user password (MinIO secret key), entered in **MinIO Root Password**, is limited to eight to 40 random characters. For example, *MySecr3tPa$$w0d4Min10*.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseMinioConfig.png" alt="MinIO Enterprise MinIO Configuration" id="MinIO Enterprise MinIO Configuration" >}}

Select **Anonymous** to hide sensitive information from logging, or **Quiet** to disable startup information.

To configure a multi-mode deployment, select **Enabled**.
MinIO recommends using MNMD for enterprise-grade performance and scalability.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddMultiModeSNMDorMNMD.png" alt="MinIO Enterprise Multi-Mode Configuration" id="MinIO Enterprise Multi-Mode Configuration" >}}
