&NewLine;

7. Select the schedule and snapshot retention lifetime.

   Leave **Replication Schedule** set to **Run On a Schedule** and select the option in the **Schedule** dropdown.
   Select **Run Once** to set up a replication task you run one time.
  
   {{< trueimage src="/images/SCALE/DataProtection/CreateReplicationTaskSetSchedule.png" alt="Set Replication Task Schedule" id="Set Replication Task Schedule" >}}

8. Select the **Destination Snapshot Lifetime** option to specify how long TrueNAS should store copied snapshots in the destination dataset before TrueNAS deletes it.
   **Same as Source** is selected by default.
   Select **Never Delete** to keep all snapshots until you delete them manually.
   Select **Custom** to show two additional settings, then enter the number of the duration you select from the dropdown list. For example, *2 Weeks*.
  
9. Click **Save**.

The task shows on the **Replication Task** widget with the status as **PENDING**.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationTaskWidgetWithPendingTask.png" alt="Replication Task in Pending State" id="Replication Task in Pending State" >}}

Select **Run Now** if you want to run the task immediately.

Click the task **State** to open a dialog with the log for that replication task.

To see the replication snapshots, go to **Datasets**, select the destination dataset on the tree table, then select **Manage Snapshots** on the **Data Protection** widget to see the list of snapshots in that dataset.
Click **Show extra columns** to add more information columns to the table, such as the date created, which can help you locate a specific snapshot or enter part of or the full name in the search field to narrow the list of snapshots.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationSnapthotListInDestinationDataset.png" alt="Snapshot List in Destination Dataset" id="Snapshot List in Destination Dataset" >}}
