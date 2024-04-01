&NewLine;

Prepare your system for interface changes by stopping and/or removing apps, VM NIC devices, and services that can cause conflicts:

* Stop running apps before proceeding with network interface changes.
* Power off any running virtural machines (VMs) before making interface IP changes. Remove active NIC devices.

If you encounter issues with testing network changes, you might need to stop any services, including Kubernetes and sharing services such as SMB, using the current IP address.