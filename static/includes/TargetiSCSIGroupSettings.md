&NewLine;

{{< expand "Target iSCSI Group Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Add Groups** | Adds a collection of network interfaces, IP addresses, and TCP ports, on a storage device that an iSCSI initiator can connect to. Groups are also known as target portal groups. **Add** shows a group configuration field each time it is clicked.  |
| **Portal Group ID** | Select the ID from the dropdown list. Shows a group for each iSCSI share added to the system with a number assignment, for example, *1 (test2)* for the test2 target/share. Portal groups are created on the **Add Portal** screen. |
| **Initiator Group ID** | Select the group ID from the dropdown list. Shows a group for each portal ID configured on the system, for example, *1 (ALL Initiators Allowed). Initiator groups have access to the target. |
| **Authentication Method** | Select the authentication method from the dropdown list of options. Options are:<br><li>**None** - Select to allow anonymous discovery. When set to **None** you can leave **Discovery Authentication Group** set to **None** or empty.<br><li>**CHAP** - Select to use the Challenge Handshake Authentication Protocol (CHAP) method. CHAP verifies the identity of an iSCSI initiator (device trying to access storage) by sending a challenge that only the authentic initiator can correctly respond to. This prevents unauthorized access to the storage target. Think of it like a password-based authentication system for iSCSI connections. When set to CHAP you must enter or create a new group in **Discovery Authentication** on the **Add** or **Edit Authorized Access** screen.<br><li>**Mutual CHAP**- Select to use CHAP where both the iSCSI initiator (client) and target server mutually authenticate each other using the CHAP method. Each side verifies the identity of the other before establishing a connection. This provides a higher level of security compared to one-way CHAP. When set to mutual CHAP you must enter or create a new group in **Discovery Authentication** on the **Add** or **Edit Authorized Access** screen.</li> |
| **Authentication Group Number** | Select the group from the dropdown list. An authentication group is configured on the **Add Authorized Access** screen. Required when the **Discovery Authentication Method** is set to **CHAP** or **Mutual CHAP**. Select **None** or the value representing the number of the existing authorized accesses. |
{{< /truetable >}}
{{< /expand >}}
