&NewLine;

The **Initiators Groups** screen display settings to create new authorized access client groups or edit existing ones in the list.

![SharingiSCSIInitiatorsGroupsScreen](/images/SCALE/Shares/SharingiSCSIInitiatorsGroupsScreen.png "iSCSI Initiators Groups Screen")

The <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the initiator group displays the **Edit** and **Delete** options.
**Delete** opens the **Delete** dialog for the selected group ID. Click **Confirm** and then **Delete** to delete the selected portal.

**Add** opens the **Sharing > iSCSI > Initiators > Add** screen. **Edit** opens the **Sharing > iSCSI > Initiators > Edit** screen. Both screens have the same setting options.

![iSCSIManualAddInitiators](/images/SCALE/Shares/iSCSIManualAddInitiators.png "Sharing iSCSI Initiators Add Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Allow All Initiators** | Select to allows all initiators. |
| **Allowed Initiators (IQN)** | Enter initiators allowed access to this system. Enter an [iSCSI Qualified Name (IQN)](https://tools.ietf.org/html/rfc3720#section-3.2.6) and click **+** to add it to the list. Example: *iqn.1994-09.org.freebsd:freenas.local*. |
| **Description** | Enter any notes about the initiators. |
{{< /truetable >}}
