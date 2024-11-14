&NewLine;

{{< hint type=warning title="Disruptive Change" >}}
You can lose your TrueNAS connection if you change the network interface that the web interface uses!
You might need command line knowledge or physical access to the TrueNAS system to fix misconfigured network settings.

Do not configure network settings to depend on any client container or application hosted on the TrueNAS system, such as DNS services, proxy networks, firewalls, and routers.
This is an unsupported configuration because TrueNAS cannot access the necessary networks during boot if the client container has not started.
{{< /hint >}}
