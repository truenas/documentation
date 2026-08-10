&NewLine;


Complete these checks immediately before beginning migration work.

### Migration Sequence

1. Review all shares using storage on Pool B and follow the share migration steps for each share.
2. Reload the **Datasets** page in the WebUI and confirm no datasets in Pool B show sharing icons. Open the **Sharing** page and confirm all share paths now point to Pool A.

   {{< expand "SMB Share Migration" "v" >}}
   #### SMB Share Migration

   {{< hint type=warning title="SMB Share Configurations and ACLs" >}}
   You can configure SMB shares to share a subdirectory inside a dataset rather than the root of the dataset.
   Do not delete and re-add SMB shares. Doing so removes the existing share ACL and replaces it with an open ACL, even if you maintain the exact the share settings in the UI.
   {{< /hint >}}

   Go to **Shares > Windows (SMB) Shares** and identify every share associated with Pool B. Note the SMB share ACL (not the filesystem ACL).

   Click <span class="material-icons">more_vert</span> to the right of the share and click **Edit**. Change the share **Path** from the dataset on Pool B to the same dataset on Pool A. Be sure to maintain any subdirectory path export. For example: */mnt/Pool B/share/subdir* changes to */mnt/Pool A/share/subdir*.

   After changing and saving the path, view the SMB share ACL and verify it is identical to the starting you noted before the change configuration.
   {{< /expand >}}


   {{< expand "NFS Share Migration" "v" >}}
   #### NFS Share Migration

   {{< hint type=warning title="NFS Share Configurations" >}}
   You can configure NFS shares to share a subdirectory inside a dataset rather than the root of the dataset.
   {{< /hint >}}

   Go to **Shares > UNIX (NFS) Shares** and identify every share associated with Pool B.

   Click <span class="material-icons">more_vert</span> to the right of the share and click **Edit**. Change the share **Path** from the dataset on Pool B to the same dataset on Pool A. Be sure to maintain any subdirectory path export. For example: */mnt/Pool B/share/subdir* changes to */mnt/Pool A/share/subdir*.
   {{< /expand >}}


   {{< expand "iSCSI / NVMeT / FC Migration Migration" "v" >}}
   ### iSCSI / NVMeT / FC Migration

   {{< hint type=warning title="Preserve Extents" >}}
   Edit the existing extent entries. Do not destroy and recreate extents.
   {{< /hint >}}

   Go to **Shares > Block (iSCSI) Shares Targets** and select the **Extents** tab. Find the extent you want to change, then click <span class="material-icons">more_vert</span> to the right of the extent and select **Edit**. Change the Device **Path** from the zvol/file on Pool B to the same zvol/file on Pool A.
   {{< /expand >}}

3. Review all backup-related tasks on Pool B and follow the task migration steps for each item.
4. Reload the **Datasets** page and confirm no stray backup tasks remain on Pool B. Open the **Data Protection** page and confirm no data protection tasks are active for Pool B.

   {{< expand "TrueCloud Backup Tasks Migration" "v" >}}
   ### TrueCloud Backup Tasks Migration
   {{< hint type=warning title="Remote Storage Consumption" >}}
   Depending on the TrueCloud service configuration (for example, if absolute paths are used), remote storage consumption can increase significantly after a path change. If you are using absolute paths, you might need to monitor space usage and clean up old backups from the previous pool.
   {{< /hint >}}
   Go to **Data Protection > TrueCloud Backup Tasks** and click <span class="material-icons">expand_more</span> expand to the right of the task you need to change, then click **Edit**.
   Change the **Local** **Source Path** (and **Cache Path** if needed) to the new target on Pool A and click **Save**.
   {{< /expand >}}

   {{< expand "Periodic Snapshot Tasks Migration" "v" >}}
   ### Periodic Snapshot Tasks Migration
   Go to **Data Protection > Periodic Snapshot Tasks** and click <span class="material-icons">expand_more</span> expand to the right of the task you need to change, then click **Edit**.
   Change the dataset to the new target on Pool A. For example: *Pool B/share* changes to *Pool A/share*.
   {{< /expand >}}

   {{< expand "Replication Tasks Migration" "v" >}}
   ### Replication Tasks Migration
   Go to **Data Protection > Replication Tasks** and click <span class="material-icons">expand_more</span> expand to the right of the task you need to change, then click **Edit**.
   The configuration change depends on the direction of replication:
   - For tasks originating **On this System**, change the **Source** to the equivalent Pool A dataset.
   - For tasks originating **On a Different System**, change the **Destination** to the equivalent Pool A dataset.
   {{< /expand >}}

   {{< expand "Cloudsync Tasks Migration" "v" >}}
   ### Cloudsync Tasks Migration
   Go to **Data Protection > Cloud Sync Tasks** and click <span class="material-icons">expand_more</span> expand to the right of the task you need to change, then click **Edit**.
   Change the **Directory/Files** path to the new target on Pool A.
   {{< /expand >}}

   {{< expand "Rsync Tasks Migration" "v" >}}
   ### Rsync Tasks Migration
   Go to **Data Protection > Rsync Tasks** and click <span class="material-icons">expand_more</span> expand to the right of the task you need to change, then click **Edit**.
   Change the **Local Path** to the new location on Pool A.
   {{< /expand >}}

5. Review [local user account home directories]({{< ref "/SCALE/credentials/users/manageusers/#expand-6" >}}) to confirm no accounts are using paths on Pool B.

{{< hint type=danger title="Critical Checkpoint" >}}
At this point, you have reconfigured the server so that all shares, tasks, and user home directories are on Pool A. However, you can still revert all changes [using the configuration file]({{< ref "/SCALE/systemsettings/advanced/managesysconfig/#uploading-the-file" >}}) you previously saved. Before proceeding, verify all data is accessible via test clients at the new Pool A paths.

For replicated datasets and zvols, you might need to change them to read-write before the customer can validate access.
{{< /hint >}}

6. Destroy Pool B from the WebUI. Go to **Storage** and click **Disconnect** on Pool B. Select **Delete Pool**. then confirm the export and click **Disconnect**
