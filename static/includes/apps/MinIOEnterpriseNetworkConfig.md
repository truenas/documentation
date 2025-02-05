&NewLine;

Scroll down to or click **Network Configuration** on the list of sections at the right of the screen.

{{< trueimage src="/images/SCALE/Apps/InstallMinIONetworkConfig.png" alt="MinIO Enterprise Network Configuration" id="MinIO Enterprise Network Configuration" >}}

Accept the default port numbers in **API Port** and **Console Port (Web UI)**, which are the port numbers MinIO uses to communicate with the app and web portal.

Enter the TrueNAS server IP address and the API port number 30000 as a URL in **MinIO Server URL (API**). For example, **http://*ipaddress*:30000**.
Use **https://** only if your system is configured to use https to log into the system, or if you are configuring MinIO in a cluster.

Enter the TrueNAS server IP address and the web UI browser redirect port number 30001 as a URL in **MinIO Browser Redirect URL**. For example, **http://*ipaddress*:30001**.

{{< hint type=note >}}
MNMD MinIO installations require HTTPS for both **Server URL** and **Console URL** to verify the integrity of each node.
Standard or SNMD MinIO installations do not require HTTPS.
{{< /hint >}}
If you fail to enter the port number you might not be able to connect to the application!

{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}
{{< include file="/static/includes/apps/HostNetworkSettings.md" >}}

Select the certificate created for MinIO from the **Certificates** dropdown list.