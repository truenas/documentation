---
---

4. Click **Next** to display the scheduling options.

5. Select the schedule and snapshot retention life time.

   a. Select the **Replication Schedule** radio button you want to use. Select **Run Once** to set up a replication task you run one time.
      Select **Run On a Schedule** then select when from the **Schedule** dropdown list.
    
   {{< trueimage src="/images/SCALE/22.12/CreateReplicationTaskSetSchedule.png" alt="Set Replication Task Schedule" id="4: Set Replication Task Schedule" >}}

   b. Select the **Destination Snapshot Lifetime** radio button option you want to use. 
      This specifies how long SCALE should store copied snapshots in the destination dataset before SCALE deletes it.
      **Same as Source** is selected by default. Select **Never Delete** to keep all snapshots until you delete them manually.
      Select **Custom** to show two additional settings, then enter the number of the duration you select from the dropdown list. For example, *2 Weeks*.
  
6. Click **START REPLICATION**. 
   A dialog displays if this is the first snapshot taken using the destination dataset.
   If SCALE does not find a replicated snapshot in the destination dataset to use to create an incremental snapshot, it deletes any existing snapshots found and creates a full copy of the day snapshot to use as a basis for the future scheduled incremental snapshots for this schedule task. 
   This operation can delete important data, so ensure you can delete any existing snapshots or back them up in another location.
   
   {{< trueimage src="/images/SCALE/22.12/ReplicationSnapshotConfirmationDialog.png" alt="Local Replication Task Confirmation" id="5: Local Replication Task Confirmation" >}}

   Click **Confirm**, then **Continue** to add the task to the **Replication Task** widget. 
   The newly added task shows the status as **PENDING** until it runs on the schedule you set. 
   
   {{< trueimage src="/images/SCALE/22.12/ReplicationTaskWidgetWithPendingTask.png" alt="Replication Task in Pending State" id="6: Replication Task in Pending State" >}}
     
   Select **Run Now** if you want to run the task immediately.

To see a log for a task, click the task **State** to open a dialog with the log for that replication task.

To see the replication snapshots, go to **Datasets**, select the destination dataset on the tree table, then select **Manage Snapshots** on the **Data Protection** widget to see the list of snapshots in that dataset. Click **Show extra columns** to add more information columns to the table such as the date created which can help you locate a specific snapshot or enter part of or the full the name in the search field to narrow the list of snapshots.

{{< trueimage src="/images/SCALE/22.12/ReplicationSnapthotListInDestinationDataset.png" alt="Snapshot List in Destination Dataset" id="7: Snapshot List in Destination Dataset" >}}
