&NewLine;

Before making network interface changes:

1. Stop running apps.
2. Power off running virtual machines (VMs) and containers.
3. Remove active NIC devices for VMs and containers.

Sharing services such as SMB that use the IP address(s) assigned to the primary interface might cause issues with testing network changes.
To resolve issues, stop sharing services such as SMB, make the interface change and test the connection, and when complete restart the service.
