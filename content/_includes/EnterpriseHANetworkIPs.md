---
---

SCALE Enterprise (HA) systems use three static IP addresses for access to the UI:

* VIP to provide UI access regardless of which controller is active. 
  If your system fails over from controller 1 to 2, then fails over back to controller 1 later you might not know which controller is active.
* IP for controller 1. If enabled on your network, DHCP assigns only the Controller 1 IP address. If not enabled, you must change this to the static IP address your network administrator assigned to this controller.
* IP for Controller 2. DHCP does not assign the second controller an IP address.

Have your list of network addresses, host, and domain names ready so you can complete the network configuration without disruption or system timeouts.
SCALE safeguards allow a default of 60 seconds to test and save changes to a network interface before reverting changes. This is to prevent users from breaking their network connection in SCALE.