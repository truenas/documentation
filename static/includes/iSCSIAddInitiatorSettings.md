&NewLine;

**Add** opens the **Add Initiator** screen showing the settings to create new authorized access client groups or edit existing ones in the list.

{{< trueimage src="/images/SCALE/Shares/AddInitiatorScreen.png" alt="Add Initiator Screen" id="Add Initiator Screen" >}}

{{< expand "Add Initiator Group Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Allow All Initiators** | Select to allows all initiators. |
| **Allowed Initiators (IQN)** | Enter initiators allowed access to this system. Enter an [iSCSI Qualified Name (IQN)](https://tools.ietf.org/html/rfc3720#section-3.2.6) and click **+** to add it to the list. Example: *iqn.1994-09.org.freebsd:freenas.local*. |
| **Description** | Enter any notes about the initiators. |
| **Connected Initiators** | Shows the list of connected initiators on the system. |
| **Allowed Initiators** | Shows the list of allowed initiators on the system. |
| **Refresh** | Updates the screen. |
{{< /truetable >}}
{{< /expand >}}