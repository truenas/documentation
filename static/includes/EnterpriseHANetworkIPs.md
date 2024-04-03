&NewLine;

SCALE Enterprise (HA) systems use three static IP addresses for access to the UI:

* VIP to provide UI access regardless of which controller is active. 
  If your system fails over from controller 1 to 2, then fails over back to controller 1 later you might not know which controller is active.
* IP for controller 1. If enabled, DHCP assigns an IP to the primary network interface on non-HA systems.
  Disable DHCP, and then manually enter the Controller 1 static IP address your network administrator assigned for this controller.
* IP for Controller 2. Manually enter the second IP address assigned for this controller.

Have the list of network addresses, name sever and default gateway IP addresses, and host and domain names ready so you can complete the network configuration without disruption or system timeouts.

SCALE safeguards allow a default of 60 seconds to test and save changes to a network interface before reverting changes.
This is to prevent users from breaking their network connection in SCALE.