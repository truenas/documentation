&NewLine;

The **Add Portal** and **Edit Portal** screens show the same configuration settings.

{{< columns >}}
{{< trueimage src="/images/SCALE/Shares/AddPortalScreen.png" alt="Add Portal Screen" id="Add Portal Screen" >}}
<--->
{{< trueimage src="/images/SCALE/Shares/EditPortalScreen.png" alt="Edit Portal Screen" id="Edit Portal Screen" >}}
{{< /columns >}}

{{< expand "Portal Basic Info Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Description** | Enter an optional description. Portals are automatically assigned a numeric group. |
| **Add Listen** | Click **Add** to show the **IP Address** field where you add the IP address and netmask (CIDR) for the portal. |
| **IP Address**  | Shows several options for setting up a portal. Select from these options:<br><li>**0.0.0.0** - Select to listen on all IPv4 addresses.<br><li>**::** - Select to listen on all IPv6 addresses. <br><li>TrueNAS server IP address - Select to use the IPv4 address assigned to the primary network interface for the TrueNAS server being configured.<br><li>IPv6 address assigned to the system.</li> |
{{< /truetable >}}
{{< /expand >}}