&NewLine;

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