&NewLine;

Accept the default port numbers in **API Port** and **Console Port (Web UI)**, which are the port numbers MinIO uses to communicate with the app and web portal.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseNetworkConfig.png" alt="MinIO Enterprise Network Configuration" id="MinIO Enterprise Network Configuration" >}}

Enter the system IP address in URL format followed by the port number for the API separated by a colon in **Server URL**. For example, <b>https://<i>10.123.12.123</i>:30000</b>.

Enter the system IP address in URL format followed by the port number for the web portal separated by a colon in **Console URL**. For example, <b>https://<i>10.123.12.123</i>:30001</b>.

If you fail to enter the port number you might not be able to connect to the application!

{{< hint type=note >}}
MNMD MinIO installations require HTTPS for both **Server URL** and **Console URL** to verify the integrity of each node.
Standard or SNMD MinIO installations do not require HTTPS.

{{< /hint >}}

{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}
{{< include file="/static/includes/apps/HostNetworkSettings.md" >}}