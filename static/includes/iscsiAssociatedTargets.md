&NewLine;

The **Associated Targets** screen displays settings to create new associated TrueNAS storage resources or edit existing ones in the list.

![SharingiSCSIAssociatedTargetsScreen](/images/SCALE/Shares/SharingiSCSIAssociatedTargetsScreen.png "iSCSI Associated Targets Screen")

**Add** opens the **Add Associated Target** screen.

The <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to each entry displays two options, **Edit** and **Delete**. **Edit** opens the **Edit Associated Target** screen, and **Delete** opens a dialog to delete the associated targets for the selected user.
The **Add** and **Edit** screens display the same settings.

![iSCSIManualAddAssocAuthTargets](/images/SCALE/Shares/iSCSIManualAddAssocAuthTargets.png "iSCSI Associated Targets Add")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Target** | Required. Select an existing target. |
| **LUN ID** | Select the value or enter a value between 0 and 1023. Some initiators expect a value below 256. Leave this field blank to automatically assign the next available ID. |
| **Extent** | Required. Select an existing extent. |
{{< /truetable >}}
