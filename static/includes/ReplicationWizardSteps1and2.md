&NewLine;

{{< hint type=important title="Ensure Clean Destination" >}}
Before you begin configuring the replication task, first verify the destination dataset where you plan to store the replication snapshots is free of existing snapshots, or that snapshots with critical data are backed up before you create the task.
{{< /hint >}}

After completing the basic preparation steps in the section above, go to **Data Protection > Replication** and click **Add** to open the replication wizard.
To configure advanced settings, click **Advanced Replication Creation** to open the **Add Replication Task** screen before you enter any settings in the wizard.
Refer to the [Advanced Replication Tasks]({{< ref "/Scale/ScaleTutorials/DataProtection/Replication/AdvancedReplication/_index.md" >}}) for configuration instructions using the **Add Replication Task** screen.

On the **What and Where** replication wizard screen:

1. Select the an existing replication task from the **Load Previous Replication Task** dropdown.
   If one does not exist, leave this set to the default, which is the double dashes.
     
2. Select the source and destination locations. You can select these in any order.
   Local replication sends or receives data from one storage location to another on the same (local) system.
   Remote replication sends data to or receives data from a storage location on a different (remote) TruNAS system.

   To setup a local replication in the replication wizard, set both **Source Location** and **Destination Location** to **On this System**.

   To set up a push remote replication in the replication wizard, set the **Source Location** to **On this System** and set **Destiation Location** to **On a Different System**.
   To set up a pull remote replication in the replication wizard, set the **Source location** to **On a Different System** and the **Destiation Location** to **On this System**.

   Click on **Source Location** or **Destination Location** to show additional setting options and the file browser. Additional settings shown are based on the selection.
 