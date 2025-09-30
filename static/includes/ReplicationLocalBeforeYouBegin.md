&NewLine;

### Before You Begin Local Replication

Local replication does not require the admin user to have SSH access, a home directory, or sudo command permissions.
Setting options change based on the source and destination selections. Replicating to or from a local source does not require an SSH connection.

1. Set up the data storage for replicated snapshots. Go to **Datasets** to add a dataset to store the replicated data (snapshots).
   TrueNAS does not allow you to create a new dataset using the **Source** file browser in the replication wizard or the **Add Replication Task** configuration screen. Use the file browser to select the existing dataset on the system where you want to store replicated data.
   
   The **Destination** file browser allows you to specify (create) a directory in an existing dataset on a local or remote system, but you cannot create a directory for a dataset selected in the **Source** file browser.

2. Create a [periodic snapshot task]({{< ref "PeriodicSnapshotTasksSCALE" >}}) of the storage locations to back up.
   TrueNAS typically creates a periodic snapshot task right before it performs the replication task if one is not already created for the task.
   You might need to refresh the screen cache to see the task listed in the **Periodic Snapshot Task** widget. 

3. Go to **Data Protection > Replication Tasks** and click **Add** to open the **Replication Task Wizard**.

   If you want to configure a replication task using advanced setting options on the **Add Replication Task** screen, click **Advanced Replication Creation** before entering settings in the replication wizard.
   Settings do not carry over from the wizard to the advanced task creation screen, and TrueNAS shows the dialog where you must confirm you want to leave the wizard screen before it opens.
   Immediately switching to the advanced screen does not show the confirmation dialog, and you do not have to enter your settings again.