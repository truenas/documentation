---
---

3. Select the direction for the sync task. 
   **PULL** brings files from the cloud storage provider to the location specified in **Directory/Files** (this is the location on TrueNAS SCALE). 
   **PUSH** sends files from the location in **Directory/Files** to the cloud storage provider location you specify in **Folder**.

4. Select the transfer method from the **Transfer Mode** dropdown list.
   **Sync** keeps files identical on both TrueNAS SCALE and the remote cloud provider server. If the sync encounters an error, destination server files are not deleted.
   **Copy** duplicates files on both the TrueNAS SCALE and remote cloud provider server.
   **Move** transfer the files to the destination server and then deleted the copy on server that transferred the files. It also overwrites files with the same names on the destination.

5. Enter or browse to the dataset or folder directory using the <span class="material-icons">arrow_right</span> arrow to the left of <span class="material-icons">folder</span>/ under the  **Directory/Files** and **Folder** fields. 
   Select the TrueNAS SCALE dataset path in **Directory/Files** and the Google Drive path in **Folder**.
   If **PUSH** is the selected **Direction**, this is where on TrueNAS SCALE the files you want to copy, sync or move transfer to the provider.
   If **Direction** is set to **PULL** this is the location where on TrueNAS SCALE you want to copy, sync or move files to.

   Click the <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span>/ to collapse the folder tree.

6. Select the preset from the **Schedule** dropdown that defines when the task runs. 
   For a specific schedule, select **Custom** and use the **Advanced Scheduler**.
   Clear the **Enable** checkbox to make the configuration available without allowing the specified schedule to run the task. 

   To manually activate a saved task, go to **Data Protection > Cloud Sync Tasks**, click <i class="fa fa-play" aria-hidden="true"></i> for the cloud sync task you want to run. Click **CONTINUE** or **CANCEL** for the **Run Now** operation.

7. (Optional) Set any advanced option you want or need for your use case or define environment variables in either the **Pre-script** or **Post-script** fields. 
   These fields are for advanced users.

8. Click then click **Dry Run** to test your settings before you click **Save**. 
   TrueNAS connects to the cloud storage provider and simulates a file transfer but does not send or receive data.

The new cloud sync task displays on the **Cloud Sync Tasks** widget with the status of **PENDING** until it completes. 
If the task completes without issue the status becomes **SUCCESS**.

![CloudSyncTaskGoogleDrivePending](/images/SCALE/22.02/CloudSyncTaskGoogleDrivePending.png "Pending Cloud Sync Task")