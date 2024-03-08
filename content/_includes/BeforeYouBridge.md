&NewLine;

{{< hint type=important >}}
Prepare your system for creating a bridge by stopping apps, VMs, and services that can cause conflicts.

* If you have apps running, disable them before proceeding.
* Power off any running VMs before making interface IP changes.
* If you encounter issues with testing network changes, you might need to stop any services using the current IP address, such as Kubernetes or sharing services.

After creating the bridge, test and save network changes, then restart all stopped apps, VMs and services.
{{< /hint >}}
