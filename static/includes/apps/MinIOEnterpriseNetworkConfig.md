&NewLine;

Accept the default port numbers in **API Port** and **Console Port (Web UI)**, which are the port numbers MinIO uses to communicate with the app and web portal.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseNetworkConfig.png" alt="MinIO Enterprise Network Configuration" id="MinIO Enterprise Network Configuration" >}}

Enter the system IP address in URL format followed by the port number for the API separated by a colon in **Server URL**. For example, <b>https://<i>10.123.12.123</i>:30000</b>.

Enter the system IP address in URL format followed by the port number for the web portal separated by a colon in **Console URL**. For example, <b>https://<i>10.123.12.123</i>:30001</b>.

{{< hint type=note >}}
MNMD MinIO installations require HTTPS for both **Server URL** and **Console URL** to verify the integrity of each node.
Standard or SNMD MinIO installations do not require HTTPS.
{{< /hint >}}

Do not select **Host Network**.

MinIO does not require a certificate for a basic configuration and installation of MinIO Enterprise, but if installing and configuring multi-mode SNMD or MNMD, you must create a self-signed certificate.

A SNMD configuration can use the same self-signed certificate created for MNMD, but a MNMD configuration cannot use the certificate created for a SNMD configuration because that certificate only includes the IP address for one system.
Create this same self-signed certificate for the MNMD cluster on each system (node) in the cluster! 