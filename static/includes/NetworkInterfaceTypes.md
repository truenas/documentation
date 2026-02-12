&NewLine;

A **LAGG (Link Aggregation)** optimizes multi-user performance, balances network traffic, and provides network failover protection.
In a failover, it prevents a network outage by dynamically reassigning traffic to another interface when a physical link, like a cable or NIC, fails.

A **network bridge** enables communication between two networks and provides a way for them to work as a single network.
Bridges can serve IP addresses to multiple VMs on one interface, which allows your VMs to be on the same network as the host.

A **VLAN** (virtual LAN) segments a single physical network into multiple logical networks, allowing network traffic isolation and security boundaries without requiring separate physical hardware.
VLANs provide separate traffic management for storage (iSCSI/NFS), VMs, and multi-tenant environments while improving security, reducing broadcast domains, and enabling multiple networks on a single NIC.
