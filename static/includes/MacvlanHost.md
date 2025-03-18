&NewLine;

{{< hint type=important >}}
A MACVLAN NIC on the same physical interface as the TrueNAS host cannot directly communicate with the host.
MACVLAN sends traffic directly to the external network without passing through the host network stack.
The host does not recognize MACVLAN packets as local, so any traffic between them must be routed through an external switch, use a separate NIC, or use a network bridge.
{{< /hint >}}
