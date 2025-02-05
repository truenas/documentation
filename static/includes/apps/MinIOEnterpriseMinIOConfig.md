&NewLine;

MinIO credentials establish the login credentials for the MinIO web portal and the MinIO administration user.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseMinioConfig.png" alt="MinIO Enterprise MinIO Configuration" id="MinIO Enterprise MinIO Configuration" >}}

Enter existing MinIO credentials if you already have a MinIO account, or create new login credentials for the first time you log into MinIO. If you are configuring an MNMD cluster, use the same credentials in all four systems in the cluster. 

The **Root User** is the equivalent of the MinIO access key. The **Root Password** is the login password for that user or the MinIO secret key.

The root user (MinIO access key) username, entered in **Root User**, is limited to five to 20 characters long. For example *admin* or *admin1*.

The root user password (MinIO secret key), entered in **Root Password**, is limited to eight to 40 random characters. For example, *MySecr3tPa$$w0d4Min10*.

To configure a multi-mode deployment, select **Enabled**.
MinIO recommends using MNMD for enterprise-grade performance and scalability. See the related MinIO articles listed below for SNMD and MNMD configuration tutorials.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddMultiModeSNMDorMNMD.png" alt="MinIO Enterprise MultiMode Configuration" id="MinIO Enterprise MultiMode Configuration" >}}

Select **Quiet** to disable startup information and not show it in the logs.

Select **Anonymous** to hide sensitive information and not show it in the logs.

(Optional) Click **Add** to the right of **Additional Environment Variables** to show the fields to enter the variable.
The installation wizard configures all required environment variables, so only use this option to further customize your MinIO deployment.
Refer to MinIO documentation for more information on environment variables they allow and use.
