&NewLine;

The configuration tabs **Portals** screen displays a list of portal ID groups on the TrueNAS system.

![SharingiSCSIPortalsScreen](/images/SCALE/Shares/SharingiSCSIPortalsScreen.png "iSCSI Portals Screen")

The <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the portal displays the **Edit** and **Delete** options.
**Delete** opens the **Delete** dialog for the selected portal ID. Click **Confirm** and then **Delete** to delete the selected portal.

**Add** opens the **Add Portal** screen. **Edit** opens the **Edit Portal** screen. Both screens have the same setting options.

![iSCSIManualAddPortalNoAuth](/images/SCALE/Shares/iSCSIManualAddPortalNoAuth.png "Sharing iSCSI Portals Add Screen")

#### Basic Info Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Description** | Enter an optional description. Portals are automatically assigned a numeric group. |
{{< /truetable >}}

#### Authentication Method and Group Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Discovery Authentication Method** | Select the discovery method you want to use for authentication from the dropdown list. iSCSI supports multiple authentication methods that targets can use to discover valid devices. **None** allows anonymous discovery. If set to **None**, you can leave **Discovery Authentication Group** set to **None** or empty. If set to **CHAP** or **Mutual CHAP**, you must enter or create a new group in **Discovery Authentication Group**. |
| **Discovery Authentication Group** | Select the discovery authentication group you want to use from the dropdown list. This is the group ID created in **Authorized Access**. Required when the **Discovery Authentication Method** is **CHAP** or **Mutual CHAP**. Select **None** or **Create New**. **Create New** displays [additional setting options](#create-new-discovery-authentication-group-settings). |
{{< /truetable >}}

#### IP Address Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **IP Address** | Select the IP addresses the portal listens to. Click **Add** to add IP addresses with a different network port. **0.0.0.0** listens on all IPv4 addresses, and **::** listens on all IPv6 addresses. |
| **Port** | TCP port used to access the iSCSI target. The default is **3260**. |
| **Add** | Adds another IP address row. |
{{< /truetable >}}
