&NewLine;

Prepare your system for interface changes by stopping and/or removing apps, VM NIC devices, and services that can cause conflicts:

* If you have apps running, disable them before proceeding.
* Power off any running VMs before making interface IP changes. Remove active NIC devices.
* If you encounter issues with testing network changes, you might need to stop any services using the current IP address, including Kubernetes and sharing services, such as SMB.
