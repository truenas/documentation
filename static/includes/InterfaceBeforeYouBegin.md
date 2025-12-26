&NewLine;

{{< hint type=warning title="Disruptive Change" >}}
You can lose your TrueNAS connection if you change the network interface that the web interface uses!

If your network changes result in lost communication with the network and you need to return to the DHCP configuration, you can refer to the information below to restore communication with your server.
Lost communication might require an IPMI or physical connection to the system, and reconfiguring your network settings using the [Console Setup menu]({{< ref "ConsoleSetupMenuSCALE" >}}).
{{< /hint >}}

To prepare before making changes:

* Have the DNS name server addresses, the default gateway for the new IP address, and any static IP addresses on hand before making network changes.
 You only have 60 seconds to change and test new network settings before they revert to the current settings.
 For example, back to DHCP assigned if moving from DHCP to a static IP.

* Back up your system to preserve your data and system settings. Save the system configuration file and a system debug.

* Grab a screenshot of your current settings in the **Global Configuration** widget as a precautionary step.
