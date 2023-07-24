### Software

* A minimum of 3 to 20 TrueNAS SCALE systems running the same release of 22.12.0 or later
* A TrueCommand instance (cloud or on-premises) running 2.3.0 or later
* An Active Directory (AD) environment with domain service roles, DNS roles, and reverse lookup zones configured.

### Hardware

Each TrueNAS SCALE system must have two network interfaces:

* One network interface for SMB, AD, and TrueCommand traffic (static IP/DHCP reservation recommended)
* One network interface for the node-to-node cluster traffic using static IP addresses (private network recommended)

Each TrueNAS SCALE system must also have:

* A third IP address for the cluster VIP outside of DHCP range for users to access clustered shares.
* A preconfigured storage pool(s) with appropriate performance and parity