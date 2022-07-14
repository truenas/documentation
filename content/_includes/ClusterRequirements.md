To set up clustering with TrueNAS SCALE, you need:

1. 3-20 TrueNAS SCALE systems (version 22.02.2 or later) on the same network. Each SCALE system must have:
   a. Two network interfaces and subnets.
      The primary network interface and subnet is used for client access to the SCALE system 
	  The secondary interface and subnet is dedicated for cluster traffic. This interface must use static IP addresses.
   b. Disks available or Storage pools already created and available for use.
2. A TrueCommand 2.2 or later environment that is on the same network as the SCALE systems.
3. A Microsoft Active Directory environment must be available and connected to the same network as the SCALE systems and TrueCommand environment.
   Reverse DNS must be configured to allow the SCALE cluster systems to communicate back and forth with the AD environment.
