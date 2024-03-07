&NewLine;

{{< hint type=important >}}
Prepare your system for creating a bridge by stopping apps, VMs, and services that can cause conflicts.

* If you have apps running, disable them before proceeding.
* Power off any running VMs before making interface IP changes.
  Remove any active NIC devices that you want to replace with the new bridge.
  After creating the bridge, [recreate NIC device(s)]({{< relref "AddManageVMDevicesSCALE.md" >}}).
  Select the bridge from **NIC To Attach**.
* If you encounter issues with testing network changes, you might need to stop any services using the current IP address, such as Kubernetes or sharing services.
{{< /hint >}}
